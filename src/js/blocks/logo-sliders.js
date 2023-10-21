import { wpEditorDone } from "../components/helper-funcs.js";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const init = () => {
  const logoSliderSec = document.querySelectorAll("section.logo-sliders");
  if (logoSliderSec.length > 0) {
    logoSliderSec.forEach((section, secIndex) => {
      const sliders = section.querySelectorAll(".splide");
      if (sliders.length > 0) {
        sliders.forEach((slider, i) => {
          setTimeout(() => {
            const splideSlider = new Splide(slider, {
              width: "100%",
              type: "loop",
              perPage: 9,
              arrows: false,
              pagination: false,
              direction: slider.getAttribute("data-direction") ?? "ltr",
              gap: "1.5rem",
              autoScroll: {
                speed: 1,
              },
              breakpoints: {
                992: {
                  perPage: 6,
                },
                620: {
                  perPage: 4,
                },
                480: {
                  perPage: 3,
                },
                390: {
                  perPage: 2,
                },
              },
            }).mount({ AutoScroll });
          }, 500 * i);
        });
      }
    });
    return true;
  } else {
    return false;
  }
};

wpEditorDone(3, init);
