// Components
import "./components/sidebar.js";

// Blocks
import "./blocks/hero.js";
import "./blocks/logo-sliders.js";
import "./blocks/content-image-slider.js";
import "./blocks/block-wrapper.js";

//components
import "./components/loadmore.js";

document.addEventListener("DOMContentLoaded", () => {
  const copyrightsText = document.querySelector("section.footer .copyrights");
  const goUpButton = document.querySelector(".go-up");
  if (copyrightsText !== null) {
    const currYear = new Date().getFullYear();
    const copyrightsNewText = copyrightsText.innerHTML.replace(
      "{year}",
      currYear
    );
    copyrightsText.innerHTML = copyrightsNewText;
  }

  if (goUpButton) {
    document.addEventListener("scroll", (e) => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        goUpButton.classList.add("scrolled");
      } else {
        goUpButton.classList.remove("scrolled");
      }
    });
  }

  document.goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
