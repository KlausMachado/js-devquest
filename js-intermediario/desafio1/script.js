"use strict";
const images = [
  { src: "./desafio1/desafio1/1.jpg" },
  { src: "./desafio1/desafio1/2.jpg" },
  { src: "./desafio1/desafio1/3.jpg" },
  { src: "./desafio1/desafio1/4.jpg" },
];

let imagemFundo = document.getElementsByClassName("fundo");

const loadImages = (images, container) => {
  images.forEach((element) => {
        container.src = element.src
  });
};

loadImages(images, imagemFundo);
