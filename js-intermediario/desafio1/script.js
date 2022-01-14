"use strict";
let contador = 0;
const imagens = document.querySelectorAll(".imagem");

function avancar() {
  console.log("ate aqui 1");
  imagens[contador].classList.add("mostrar");
  contador++;

  if (contador >= 3) {
    let setaOpaca = document.getElementById("seta-direita");
    setaOpaca.classList.add("opacidade");
  }
}

function voltar() {
  console.log("ate aqui 2");
  imagens[contador].classList.add("mostrar");
  contador--;

  if (contador <= 0) {
    let setaOpaca2 = document.getElementById("seta-esquerda");
    setaOpaca2.classList.add("opacidade");
  }
}

document.getElementById("seta-direita").addEventListener("click", avancar);

document.getElementById("seta-esquerda").addEventListener("click", voltar);
