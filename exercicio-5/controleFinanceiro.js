// Exercicio Controle Financeiro

// Alertando o usuario de que ele vai ter que informar quantidade de dinheiro

alert("A seguir informe a quantidade de dinheiro disponivel.");

// pedindo pro usuario informar quanto de dinheiro ele tem disponivel

let dinheiro = prompt("Quanto dinheiro disponivel voce tem?");

// formatando os números que estao em string para number
let fdinheiro = parseFloat(dinheiro);

let opcao

do {
  opcao = prompt("Voce possui " + fdinheiro + "\n" +
                    "Digite o numero da operacao que deseja realizar:" + 
                    "\n1) Somar" +
                    "\n2) Subtrair" +
                    "\n3) Sair");
  if (opcao == 1){
    let soma = prompt("Quanto voce deseja adicionar?");
    fdinheiro += parseFloat(soma);
    
  } else if (opcao == 2) {
    let subtracao = prompt("Quanto voce deseja tirar?");
    fdinheiro -= parseFloat(subtracao);
    
  } else if (opcao == 3)  {
    alert("A operacao será encerrada.");
  }
} while (opcao != 3);