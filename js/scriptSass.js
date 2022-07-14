const burgerSass = document.querySelector(".header__burger");
const xMarkSass = document.querySelector(".header__xmark");
const menuSass = document.querySelector(".header__navbar");

burgerSass.addEventListener("click", function () {
  burgerSass.classList.toggle("header__burger--none");
  xMarkSass.classList.toggle("header__xmark--display");
  menuSass.classList.toggle("header__navbar--none");
});

xMarkSass.addEventListener("click", function () {
  burgerSass.classList.toggle("header__burger--none");
  xMarkSass.classList.toggle("header__xmark--display");
  menuSass.classList.toggle("header__navbar--none");
});
