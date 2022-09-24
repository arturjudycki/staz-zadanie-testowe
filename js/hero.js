const tableOfImages = [
  "./img/slider/mainPhoto.webp",
  "./img/slider/mainPhoto2.webp",
  "./img/slider/mainPhoto3.webp",
  "./img/slider/mainPhoto4.webp",
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

  banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
  banerText.textContent = tableOfTexts[index];
  dots.forEach((dot) => dot.classList.remove("activeDot"));
  dots[index].classList.add("activeDot");
};

let indexInterval = setInterval(showSlide, 5000);

leftAngle.addEventListener("click", () => {
  clearInterval(indexInterval);

  if (index === 0) {
    index = tableOfImages.length - 1;
  } else {
    index--;
  }
  banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
  banerText.textContent = tableOfTexts[index];

  dots.forEach((dot) => dot.classList.remove("activeDot"));
  dots[index].classList.add("activeDot");

  indexInterval = setInterval(showSlide, 5000);
});

rightAngle.addEventListener("click", () => {
  clearInterval(indexInterval);
  if (index === tableOfImages.length - 1) {
    index = 0;
  } else {
    index++;
  }
  banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
  banerText.textContent = tableOfTexts[index];

  dots.forEach((dot) => dot.classList.remove("activeDot"));
  dots[index].classList.add("activeDot");

  indexInterval = setInterval(showSlide, 5000);
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(indexInterval);

    if (e.keyCode === 37) {
      if (index === 0) {
        index = tableOfImages.length - 1;
      } else {
        index--;
      }
    } else {
      if (index === tableOfImages.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }

    banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
    banerText.textContent = tableOfTexts[index];

    dots.forEach((dot) => dot.classList.remove("activeDot"));
    dots[index].classList.add("activeDot");

    indexInterval = setInterval(showSlide, 5000);
  }
});

dots.forEach((dot, indexDot) =>
  dot.addEventListener("click", function () {
    clearInterval(indexInterval);

    index = indexDot;

    banerPhoto.style.backgroundImage = "url(" + tableOfImages[index] + ")";
    banerText.textContent = tableOfTexts[index];

    dots.forEach((dot) => dot.classList.remove("activeDot"));
    dots[index].classList.add("activeDot");

    indexInterval = setInterval(showSlide, 5000);
  })
);

const angleL = document.querySelector(".angleL");
const angleR = document.querySelector(".angleR");
const persons = [...document.querySelectorAll(".personBox")];

angleR.addEventListener("click", function () {
  console.log("szakalaka");
  let value = -600;
  persons.forEach((elem) => (elem.style.left = value + "px"));
  value -= 200;
});
