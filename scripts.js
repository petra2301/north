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


const buttonWithIcon = document.querySelectorAll(".buttonWithIcon");

for (let i = 0; i < buttonWithIcon.length; i++) {
  buttonWithIcon[i].addEventListener("mouseover", function(e) {
    buttonWithIcon[i].classList.add("buttonHovered")
    //buttonWithIcon[i].classList.toggle("red");
    });

    buttonWithIcon[i].addEventListener("mouseleave", function(e) {
      buttonWithIcon[i].classList.remove("buttonHovered")
      //buttonWithIcon[i].classList.toggle("red");
      });

}