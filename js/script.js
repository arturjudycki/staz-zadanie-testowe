const burger = document.querySelector(".burger");
const xMark = document.querySelector(".xmark");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("bar");
  xMark.classList.toggle("none");
  menu.classList.toggle("none");
});

xMark.addEventListener("click", function () {
  burger.classList.toggle("bar");
  xMark.classList.toggle("none");
  menu.classList.toggle("none");
});

$(".menu ul li").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top,
    },
    500
  );
});

 $(window).on("scroll", function () {
   if (
     $(window).scrollTop() <
     $(".aboutGdynia").offset().top + $(".aboutGdynia").outerHeight(true)
   ) {
     $(".scrollToTop").removeClass("changeDisplayBlock");
   }
   if (
     $(window).scrollTop() >
     $(".aboutGdynia").offset().top + $(".aboutGdynia").outerHeight(true)
   ) {
     $(".scrollToTop").addClass("changeDisplayBlock");
   }
 });

 $(".scrollToTop").on("click", function () {
   $("body, html").animate(
     {
       scrollTop: $(".wrap").offset().top,
     },
     500
   );
 });