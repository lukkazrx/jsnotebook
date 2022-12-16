// Exercicio Teste de Velocidade

// alertando o usuario de que vai ser pedido o nome e velocidade de 2 carros
alert("A seguir informe o nome e velocidade de 2 carros");

// pedindo pro usuario o nome e a velocidade dos carros
const car1 = prompt("Informe o nome do primeiro carro.");
const vel1 = prompt("Informe a velocidade do primeiro carro");

const car2 = prompt("Informe o nome do segundo carro.");
const vel2 = prompt("Informe a velocidade do segundo carro");

// formatando os números que estao em string para number
const fvel1 = parseFloat(vel1);
const fvel2 = parseFloat(vel2);

// testando a velocidade dos carros e imprimindo 
if (fvel1 > fvel2) {
  alert("O " + car1 + " é mais rápido que o " + car2);
} else if (fvel2 > fvel1) {
    alert("O " + car2 + " é mais rápido que o " + car1);
} else {
    alert("Ambos os carros tem a mesma velocidade");
}



