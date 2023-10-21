let isOpen = false;
const sideBar = document.getElementById("mySidenav");
document.addEventListener("DOMContentLoaded", () => {
  if (sideBar !== null) {
    const togglebtn = document.querySelector(".navbar-toggler");
    const logo = document.querySelector(".icon-logo-small");
    const sidemenuItems = document.querySelectorAll(".mobile-menu .menu-item");

    sidemenuItems.forEach((item) => {
      if (item.classList.contains("menu-item-has-children")) {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          console.log("has children");
          const submenu = item.querySelector(".sub-menu");
          if (submenu.classList.contains("opened")) {
            item.classList.remove("child-menu-opened");
            submenu.classList.remove("opened");
            submenu.style.maxHeight = 0;
          } else {
            item.classList.add("child-menu-opened");
            submenu.classList.add("opened");
            submenu.style.maxHeight = `inherit`;
          }
        });
      }
    });

    togglebtn.addEventListener("click", () => {
      if (isOpen !== true) {
        openNav(togglebtn, logo);
        setTimeout(() => {
          isOpen = true;
        }, 1000);
      } else {
        closeNav(togglebtn, logo);
      }
      document.addEventListener("click", outsideClickListener);
    });
  }
});

const openNav = (togglebtn, logo) => {
  sideBar.style.width = "100vw";
  sideBar.style.opacity = 1;
  togglebtn.classList.remove("collapsed");
  logo.classList.add("sidebar-opened");
  hideBodyScroll();
};

const closeNav = (togglebtn, logo) => {
  sideBar.style.width = "0";
  sideBar.style.opacity = 0;
  isOpen = false;
  togglebtn.classList.add("collapsed");
  logo.classList.remove("sidebar-opened");
  removeClickListener();
  retrieveBodyScroll();
};

const hideBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

const retrieveBodyScroll = () => {
  document.body.style.overflow = "auto";
};
const outsideClickListener = (event) => {
  if (!sideBar.contains(event.target) && isOpen) {
    closeNav(togglebtn, logo);
  }
};

const removeClickListener = () => {
  document.removeEventListener("click", outsideClickListener);
};
