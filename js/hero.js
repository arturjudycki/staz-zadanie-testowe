const tableOfImages = [
  //   "../img/slider/mainPhoto.webp",
  //   "../img/slider/mainPhoto2.webp",
  //   "../img/slider/mainPhoto3.webp",
  //   "../img/slider/mainPhoto4.webp",
  `url("./img/slider/mainPhoto.webp")`,
  `url("./img/slider/mainPhoto2.webp")`,
  `url("./img/slider/mainPhoto3.webp")`,
  `url("./img/slider/mainPhoto4.webp")`,
];

const tableOfTexts = [
  "Logistics",
  "Modern Business Technologies",
  "Maritime Technologies",
  "IT Services",
];

let index = 0;

const banerPhoto = document.querySelector(".baner");
const banerText = document.querySelector(".info span");

const leftAngle = document.querySelector(".fa-angle-left");
const rightAngle = document.querySelector(".fa-angle-right");

const navigation = document.querySelector(".baner .dotNav");

for (let i = 0; i < tableOfImages.length; i++) {
  const el = document.createElement("div");
  if (i === 0) {
    el.classList.add("activeDot");
  }
  navigation.appendChild(el);
}

const dots = document.querySelectorAll(".baner .dotNav div");

const showSlide = () => {
  if (index === tableOfImages.length - 1) {
    index = 0;
  } else {
    index++;
  }

  dots.forEach((dot) => dot.classList.remove("activeDot"));
  dots[index].classList.add("activeDot");

  //   banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
  banerPhoto.style.backgroundImage = tableOfImages[index];

  banerText.textContent = tableOfTexts[index];
};

setInterval(showSlide, 5000);


