// Exercicio Menu Interativo

// alertando o usuario de que ele vai ter que informar nome e escolher uma opcao
alert("A seguir informe seu nome e a opcao desejada.");

// pedindo o nome do usuario
const nome = prompt("Qual é o seu nome?");

let opcao 

// recebendo as informacoes e imprimindo na tela
do {
  opcao = prompt("Menu:" +
      "\n1) opcao" + 
      "\n2) opcao" + 
      "\n3) opcao" + 
      "\n4) opcao" + 
      "\n5) encerrar ")
  alert("A opcao escolhida por " + nome + " foi: " + opcao);
  if (opcao == 5) {
    alert("O programa será encerrado.");
  }
} while (opcao != 5);
