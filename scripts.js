const mobileMenu = document.querySelector("#mobileMenu");
const menu = document.querySelector(".menu");

mobileMenu.addEventListener("click", openNav);

function openNav() {
    menu.style.padding = "20px 20px 0 20px";
    menu.style.width = "300px";
  }

  const closeMobileMenu = document.querySelector("#closeMobileMenu");

  closeMobileMenu.addEventListener("click", closeNav);

function closeNav() {
    menu.style.width = "0";
    menu.style.padding = "0";
  }