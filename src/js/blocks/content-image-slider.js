import { wpEditorDone } from "../components/helper-funcs.js";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const init = () => {
  const contentSlider = document.querySelectorAll(
    "section.content-image-slider"
  );
  if (contentSlider.length > 0) {
    contentSlider.forEach((section, secIndex) => {
      const slider = section.querySelector(".splide");
      const splideSlider = new Splide(slider, {
        width: "100%",
        height: "35.625rem",
        gap: "1.5rem",
        type: "loop",
        perPage: 1,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          992: {
            height: "24rem",
          },
        },
      }).mount({ AutoScroll });
    });
    return true;
  } else {
    return false;
  }
};

wpEditorDone(3, init);
