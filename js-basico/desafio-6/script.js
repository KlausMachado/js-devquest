function somar(numero1, numero2) {
  let soma = numero1 + numero2;
  return "A soma dos dois números é: " + soma;
}

function subtrair(numero1, numero2) {
  let subtracao = numero1 - numero2;
  return "A subtração dos dois números é: " + subtracao;
}

function multiplicar(numero1, numero2) {
  let multiplicacao = numero1 * numero2;
  return "A multiplicacao dos dois números é: " + multiplicacao;
}

function dividir(numero1, numero2) {
  let divisao = numero1 / numero2;
  return "A divisão dos dois números é: " + divisao;
}

let operacao1 = somar(1, 1);
let operacao2 = subtrair(1, 1);
let operacao3 = multiplicar(1, 1);
let operacao4 = dividir(1, 1);

console.log(operacao1);
console.log(operacao2);
console.log(operacao3);
console.log(operacao4);
