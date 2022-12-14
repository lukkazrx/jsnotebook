// Exercicio Calculadora

// alertando o usuario de que vai ser feito um calculo a partir dos numeros que ele inserir
alert("A seguir insira dois valores para realizar os cálculos.");

// pedindo os numeros pro usuario
const num1 = prompt("Qual o primeiro número?");
const num2 = prompt("Qual o segundo número?");

// formatando os números que estao em string para number
const fnum1 = parseFloat(num1)
const fnum2 = parseFloat(num2)

// realizando as operacoes
const resultadoSoma = fnum1 + fnum2;
const resultadoDiv = fnum1 / fnum2;
const resultadoMult = fnum1 * fnum2;
const resultadoSub = fnum1 - fnum2;

// imprimindo o resultado das operacoes
alert("O resultado dos cálculos foram:" + 
      "\nSoma: " + resultadoSoma + 
      "\nDivisao: " + resultadoDiv + 
      "\nMultiplicacao: " + resultadoMult + 
      "\nSubtraçao: " + resultadoSub);