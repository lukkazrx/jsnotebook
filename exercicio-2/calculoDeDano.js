// Exercicio Calculo de Dano

// alertando o usuario de que ele vai ter que informar as caracteristicas dos personagens
alert("A seguir informe as caracteristicas dos personagens");

// pedindo as informacoes dos personagens 
const name1 = prompt("Qual é o nome do primeiro personagem?");
const power = prompt("Quanto é o poder de " + name1 + "?");

const name2 = prompt("Qual é o nome do segundo personagem?");
const life = prompt("Quantos pontos de vida tem " + name2 + "?");
const defense = prompt("Quantos pontos de defesa tem "+ name2 + "?");
const shield = confirm(name2 + " tem um escudo?")

// formatando os números que estao em string para number
const fpower = parseFloat(power);
let flife = parseFloat(life);
const fdefense = parseFloat(defense);

// variavel de dano
let damage = 0

// funcao para printar o status
function printStatus (name1, fpower, damage, name2, fdefense, shield , flife) {
    alert(name1 + 
        "\nPoder: " + fpower +
        "\nDano causado: " + damage + "\n\n" +
        name2 + 
        "\nDefesa: " + fdefense +
        "\nEscudo: " + shield +
        "\nDano recebido: " + damage +
        "\nVida: " + flife);
}

// fazendo os calculos e imprimindo o resultado
if (fpower > fdefense && shield) {
  damage = 2/(fpower - fdefense);
  flife = flife - damage;
  printStatus(name1, fpower, damage, name2, fdefense, shield, flife);
  
} else if (fpower > fdefense) {
    damage = fpower - fdefense;
    flife = flife - damage;
     printStatus(name1, fpower, damage, name2, fdefense, shield, flife);
  
} else {
    alert("o dano causado foi 0");
    printStatus(name1, fpower, damage, name2, fdefense, shield, flife);
}
 