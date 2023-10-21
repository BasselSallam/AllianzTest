// Components
import "./components/sidebar.js";

document.addEventListener("DOMContentLoaded", () => {
  const copyrightsText = document.querySelector("section.footer .copyrights");
  if (copyrightsText !== null) {
    const currYear = new Date().getFullYear();
    const copyrightsNewText = copyrightsText.innerHTML.replace(
      "{year}",
      currYear
    );
    copyrightsText.innerHTML = copyrightsNewText;
  }
  document.goUp = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
