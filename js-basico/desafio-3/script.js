let respostaDoUsuario = confirm(
  "Seja bem vindo(a) aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?"
);

let ok = "Ótimo! Nós temos as melhores camas de toda a região!";

let cancelar = "Que pena! Você parecia ser uma pessoa mais legal";

if (respostaDoUsuario) {
  alert(ok);
} else {
  alert(cancelar);
}
