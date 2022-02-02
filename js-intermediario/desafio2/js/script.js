let resposta1 = document.getElementById("resposta1");
let resposta2 = document.getElementById("resposta2");
let resposta3 = document.getElementById("resposta3");

let setas = document.getElementsByClassName("setaLink");

let setasImg = document.getElementsByClassName("seta");

function elementoEscondido() {
  setasImg[0].src = "./imagens/seta.png";
  setasImg[1].src = "./imagens/seta.png";
  setasImg[2].src = "./imagens/seta.png";

  resposta1.setAttribute("hidden", "hidden");
  resposta2.setAttribute("hidden", "hidden");
  resposta3.setAttribute("hidden", "hidden");
}

for (let i = 0; i < setas.length; i++) {
  const seta = setas[i];
  seta.addEventListener("click", () => {
    if (i === 0) {
      elementoEscondido();
      setasImg[0].src = "./imagens/seta-colorida.png";
      resposta1.removeAttribute("hidden");
    } else if (i === 1) {
      elementoEscondido();
      setasImg[1].src = "./imagens/seta-colorida.png";
      resposta2.removeAttribute("hidden");
    } else {
      elementoEscondido();
      setasImg[2].src = "./imagens/seta-colorida.png";
      resposta3.removeAttribute("hidden");
    }
  });
}
