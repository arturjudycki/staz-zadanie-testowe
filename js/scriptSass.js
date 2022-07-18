const burgerSass = document.querySelector(".header__burger");
const xMarkSass = document.querySelector(".header__xmark");
const menuSass = document.querySelector(".navbar");

burgerSass.addEventListener("click", function () {
  burgerSass.classList.toggle("header__burger--none");
  xMarkSass.classList.toggle("header__xmark--display");
  menuSass.classList.toggle("navbar--none");
});

xMarkSass.addEventListener("click", function () {
  burgerSass.classList.toggle("header__burger--none");
  xMarkSass.classList.toggle("header__xmark--display");
  menuSass.classList.toggle("navbar--none");
});

$(window).on("scroll", function () {
  if (
    $(window).scrollTop() <
    $(".banner").offset().top + $(".banner").outerHeight(true)
  ) {
    $(".scroll-to-top").removeClass("scroll-to-top--change-display");
  }
  if (
    $(window).scrollTop() >
    $(".banner").offset().top + $(".banner").outerHeight(true)
  ) {
    $(".scroll-to-top").addClass("scroll-to-top--change-display");
  }
});

$(".scroll-to-top").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".wrapper").offset().top,
    },
    500
  );
});
