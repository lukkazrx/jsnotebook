// Exercicio Conversor de Medida

// alertando o usuario de que ele vai ter que informar medida
alert("A seguir informe medida e escolha uma unidade de conversao");

// pedindo pro usuario informar uma medida e escolher uma unidade de medida
const metros = prompt("Quantos metros voce deseja converter?");
const medida = prompt("Quer converter pra qual unidade de medida?" +
                      "\n1)Milimetro\n2)Centimetro\n3)decimetro\n4)decametro\n5)hectometro\n6)quilometro");

// formatando os números que estao em string para number
const fmetros = parseFloat(metros);
const fmedida = parseFloat(medida);

let resultado = 0;

// funcao para imprimir na tela
function printResultado(fmetros, resultado){
  return ("A opçao escolhida foi "+ fmetros + "\nO resultado é: " + resultado);
}

// fazendo os calculos e imprimindo o resultado
switch (fmedida){
  case 1:
    resultado = fmetros * 1000;
    alert(printResultado(fmetros, resultado));
    break
  case 2:
    resultado = fmetros * 100;
    alert(printResultado(fmetros, resultado));
    break
  case 3:
    resultado = fmetros * 10;
    alert(printResultado(fmetros, resultado));
    break
  case 4:
    resultado = fmetros / 10;
    alert(printResultado(fmetros, resultado));
    break
  case 5:
    resultado = fmetros / 100;
    alert(printResultado(fmetros, resultado));
    break
  case 6:
    resultado = fmetros / 1000;
    alert(printResultado(fmetros, resultado));
    break
  default:
    alert("Opcao invalida.");
}