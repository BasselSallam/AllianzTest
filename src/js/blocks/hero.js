import { wpEditorDone } from "../components/helper-funcs.js";

const init = () => {
  const heroSec = document.querySelectorAll("section.hero");
  if (heroSec.length > 0) {
    heroSec.forEach((section, secIndex) => {
      const arrow = document.querySelector(".scroll");
      if (arrow) {
        arrow.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({
            behavior: "smooth",
            top: section.scrollHeight,
          });
        });
      }
    });
    return true;
  } else {
    return false;
  }
};

wpEditorDone(3, init);
