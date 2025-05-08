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
let i = 0;

/****** Ajout des bullets points ***********/
for (let i = 0; i < nbImage; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsConteneur.appendChild(dot);
}
//querySelector va chercher par essence le premier élement avec la class .dot
const dot = document.querySelectorAll(".dot");
dot[i].classList.add("dot_selected");
//dot.classList.add("dot_selected");

/****** Ajout des events listener ***********/
arrowLeft.addEventListener("click", () => {
  console.log("Clique gauche");
});

arrowRight.addEventListener("click", () => {
  console.log("Clique droit");
  if (i < nbImage - 1) {
    dot[i].classList.remove("dot_selected");
    i++;
    dot[i].classList.add("dot_selected");
    image.src = `./assets/images/slideshow/${slides[i].image}`;
  } else {
    dot[i].classList.remove("dot_selected");
    i = 0;
    dot[i].classList.add("dot_selected");
    image.src = `./assets/images/slideshow/${slides[i].image}`;
  }
  console.log(i);
});

function sliderUpdate(index) {
  image.src = `./assets/images/slideshow/${slides[index].image}`;
}
