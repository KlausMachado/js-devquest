"use strict";
const imagens = document.querySelectorAll(".imagem");

function avancar() {
  for (let contador = 0; contador < imagens.length; contador++) {
    console.log("ate aqui 1");
    imagens[contador].classList.add("mostrar");

    if (contador >= 3) {
      let setaOpaca = document.getElementById("seta-direita");
      setaOpaca.classList.add("opacidade");
    }
  }
}

function voltar() {
  for (let contador = 3; contador >= 0; contador--) {
    console.log("ate aqui 2");
    imagens[contador].classList.add("mostrar");

    if (contador <= 0) {
      let setaOpaca2 = document.getElementById("seta-esquerda");
      setaOpaca2.classList.add("opacidade");
    }
  }
}

document.querySelector("#seta-direita").addEventListener("click", avancar());

document.querySelector("#seta-esquerda").addEventListener("click", voltar());
