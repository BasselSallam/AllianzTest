import { wpEditorDone } from "../components/helper-funcs.js";

const init = () => {
  const blockWrapper = document.querySelectorAll("section.block-wrapper");
  if (blockWrapper.length > 0) {
    blockWrapper.forEach((section) => {
      const paddingTop = section.getAttribute("data-padding-top");
      const paddingBottom = section.getAttribute("data-padding-bottom");
      const paddingStart = section.getAttribute("data-padding-start");
      const paddingEnd = section.getAttribute("data-padding-end");
      section.style.setProperty("--elm-padding-top", paddingTop);
      section.style.setProperty("--elm-padding-bottom", paddingBottom);
      section.style.setProperty("--elm-padding-start", paddingStart);
      section.style.setProperty("--elm-padding-end", paddingEnd);
    });
    return true;
  } else {
    return false;
  }
};

wpEditorDone(3, init);
