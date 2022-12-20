// Exercicio Visitando Novas Cidades

// alertando o usuario de que ele vai ter que informar nome e cidades
alert("A seguir informe seu nome e cidades que visitou")

// pedindo pro usuario informar o seu nome e as cidades
const nome = prompt("Qual o seu nome?");
let visitado = confirm(nome + " voce visitou alguma cidade?")

let cidades = "";

// perguntando ao usuario qual cidade ele ja visitou e se visitou mais alguma cidade
while (visitado){
  cidades += prompt("Qual cidade voce visitou?");
  cidades += " ";
  visitado = confirm(nome + " voce visitou mais alguma cidade?");
}

// imprimindo as cidades visitadas
alert(nome + " visitou as seguintes cidades:\n" + cidades);