// Exercicio Cadastro de Recruta

// alertando o usuario que irá pedir suas informacoes
alert("Cadastro de recruta. A seguir insira suas informacoes.");

// pedindo as informacoes pro usuario
const primeiroNome = prompt('Qual o seu primeiro nome?');
const sobrenome = prompt('Qual o seu sobrenome?');
const escolaridade = prompt('Qual o seu campo de estudo?');
const anoDeNascimento = prompt('Qual o seu ano de nascimento?');

// inserindo o ano em uma variavel
const anoAtual = 2022;

// fazendo o calculo da idade
const idade = anoAtual - anoDeNascimento;

// imprimindo as informaçoes do Recruta
alert("Cadastro do Recruta:" +
      "\nNome: " + primeiroNome + 
      "\nSobrenome: " + sobrenome + 
      "\nCampo de estudo: "+ escolaridade + 
      "\nIdade: " + idade);