const openMobileMenu = document.querySelector("#openMobileMenu");
const closeMobileMenu = document.querySelector("#closeMobileMenu");
const menu = document.querySelector(".menu");

openMobileMenu.addEventListener("click", openMenu);

function openMenu() {
    menu.style.padding = "20px 20px 0 20px";
    menu.style.width = "300px";
  }

closeMobileMenu.addEventListener("click", closeMenu);

function closeMenu() {
    menu.style.width = "0";
    menu.style.padding = "0";
  }


  