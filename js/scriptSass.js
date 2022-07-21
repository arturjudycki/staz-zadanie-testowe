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

const imgSass = document.querySelector(".info-part1__image");
const captionSass = document.querySelector(".info-part1__caption");
const captionInsideSass = document.querySelector(".info-part1__caption-inside");

imgSass.addEventListener("mouseover", function () {
  captionSass.classList.add("info-part1__caption--disappear");
  captionInsideSass.classList.add("info-part1__caption-inside--appear");
});

imgSass.addEventListener("mouseout", function () {
  captionSass.classList.remove("info-part1__caption--disappear");
  captionInsideSass.classList.remove("info-part1__caption-inside--appear");
});

const imgSass2 = document.querySelector(".info-part2__image");
const captionSass2 = document.querySelector(".info-part2__caption");
const captionInsideSass2 = document.querySelector(
  ".info-part2__caption-inside"
);

imgSass2.addEventListener("mouseover", function () {
  captionSass2.classList.add("info-part2__caption--disappear");
  captionInsideSass2.classList.add("info-part2__caption-inside--appear");
});

imgSass2.addEventListener("mouseout", function () {
  captionSass2.classList.remove("info-part2__caption--disappear");
  captionInsideSass2.classList.remove("info-part2__caption-inside--appear");
});