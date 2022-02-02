"use strict";
let contador = 0;
let setaEsquerdaOpaca = document.getElementById("seta-esquerda-img");
let setaDireitaOpaca = document.getElementById("seta-direita-img");
let link = document.getElementById("saibaMais");
let titulo = document.querySelector("h1");
const imagens = document.querySelectorAll(".imagem");

function esconderImagem() {
  imagens.forEach((imagens) => {
    imagens.classList.remove("mostrar");
  });
}

function corLink() {
  if (contador == 0) {
    titulo.innerHTML = "Titulo imgem 1";
    link.style.color = "#c50000";
  } else if (contador == 1) {
    titulo.innerHTML = "Titulo imgem 2";
    link.style.color = " #D9DD10";
  } else if (contador == 2) {
    titulo.innerHTML = "Titulo imgem 3";
    link.style.color = " #A63A17";
  } else {
    titulo.innerHTML = "Titulo imgem 4";
    link.style.color = " #10ACDD";
  }
}

function mostrarImagem() {
  imagens[contador].classList.add("mostrar");
}

function avancar() {
  if (contador === imagens.length - 1) {
    setaDireitaOpaca.classList.add("opacidade");
    return;
  }

  contador++;
  setaEsquerdaOpaca.classList.remove("opacidade");
  esconderImagem();
  mostrarImagem();
  corLink();
}

function voltar() {
  if (contador === 0) {
    setaEsquerdaOpaca.classList.add("opacidade");
    return;
  }

  contador--;
  setaDireitaOpaca.classList.remove("opacidade");
  esconderImagem();
  mostrarImagem();
  corLink();
}

document.getElementById("seta-direita").addEventListener("click", avancar);

document.getElementById("seta-esquerda").addEventListener("click", voltar);
