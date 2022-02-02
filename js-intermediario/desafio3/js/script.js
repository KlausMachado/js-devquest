let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTel = document.getElementById("telefone");
let textArea = document.getElementById("mensagem");
let enviar = document.getElementById("enviar");

let textoErro = document.querySelectorAll(".textoErro");

function nomeInvalido() {
  inputNome.classList.remove("bordaVerde");
  inputNome.classList.add("bordaVermelha");
  textoErro[0].removeAttribute("hidden");
}

function nomeValido() {
  textoErro[0].setAttribute("hidden", "hidden");
  inputNome.classList.add("bordaVerde");
}

function emailInvalido() {
  inputEmail.classList.remove("bordaVerde");
  inputEmail.classList.add("bordaVermelha");
  textoErro[1].removeAttribute("hidden");
}

function emailValido() {
  textoErro[1].setAttribute("hidden", "hidden");
  inputEmail.classList.add("bordaVerde");
}

function telInvalido() {
  inputTel.classList.remove("bordaVerde");
  inputTel.classList.add("bordaVermelha");
  textoErro[2].removeAttribute("hidden");
}
function telValido() {
  textoErro[2].setAttribute("hidden", "hidden");
  inputTel.classList.add("bordaVerde");
}

function textAreaInvalida() {
  textArea.classList.remove("bordaVerde");
  textArea.classList.add("bordaVermelha");
  textoErro[3].removeAttribute("hidden");
}
function textAreaValida() {
  textoErro[3].setAttribute("hidden", "hidden");
  textArea.classList.add("bordaVerde");
}

function verificar() {
  inputNome.value === "" ? nomeInvalido() : nomeValido();

  inputEmail.value === "" ? emailInvalido() : emailValido();

  inputTel.value === "" ? telInvalido() : telValido();

  textArea.value === "" ? textAreaInvalida() : textAreaValida();
}

enviar.addEventListener("click", verificar);

inputNome.addEventListener("keypress", function () {
  inputNome.value === "" ? nomeInvalido() : nomeValido();
});

inputEmail.addEventListener("keypress", function () {
  inputEmail.value === "" ? emailInvalido() : emailValido();
});

inputTel.addEventListener("keypress", function () {
  inputTel.value === "" ? telInvalido() : telValido();
});

textArea.addEventListener("keypress", function () {
  textArea.value === "" ? textAreaInvalida() : textAreaValida();
});
