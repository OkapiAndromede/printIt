const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
/****** Déclaration des variables ***********/
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsConteneur = document.querySelector(".dots");
const nbImage = slides.length;
const image = document.querySelector(".banner-img");
const text = document.querySelector(".banner-txt");
let i = 0;

/****** Ajout des bullets points ***********/
for (let i = 0; i < nbImage; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsConteneur.appendChild(dot);
}
//querySelectorAll va chercher par essence tous les élements avec la class .dot
const dot = document.querySelectorAll(".dot");
dot[i].classList.add("dot_selected");

/****** Ajout des events listener ***********/
arrowLeft.addEventListener("click", () => {
  if (i === 0) {
    dot[i].classList.remove("dot_selected");
    i = nbImage - 1;
    dot[i].classList.add("dot_selected");
    sliderUpdate(i);
  } else {
    dot[i].classList.remove("dot_selected");
    i--;
    dot[i].classList.add("dot_selected");
    sliderUpdate(i);
  }
});

arrowRight.addEventListener("click", () => {
  if (i < nbImage - 1) {
    dot[i].classList.remove("dot_selected");
    i++;
    dot[i].classList.add("dot_selected");
    sliderUpdate(i);
  } else {
    dot[i].classList.remove("dot_selected");
    i = 0;
    dot[i].classList.add("dot_selected");
    sliderUpdate(i);
  }
});

function sliderUpdate(index) {
  image.src = `./assets/images/slideshow/${slides[index].image}`;
  text.innerHTML = slides[i].tagLine;
}
