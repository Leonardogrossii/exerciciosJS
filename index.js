//let dia = prompt('digite um número de 1 a 7 para saber o nome do dia da semana');

//let nomedia;
//switch (dia) {
//// case '1':
// nomedia = "Domingo";
//   break;
//  case "2":
// nomedia = "Segunda-feira";
//   break;
// case "3":
//   nomedia = "Terça-feira";
//    break;
// case "4":
//   nomedia = "Quarta-feira";
//    break;
//case "5":
//  nomedia = "Quinta-feira";
//break;
//case "6":
// nomedia = "Sexta-feira";
// break;
// case "7":
//  nomedia = "Sábado";
//  break;

//}

//alert(nomedia);

//for (let i = 0; i<10; i++){
//if (i === 5)
//}//

/* let dayofweek = 3;
switch (dayofweek) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("dia inválido"); // será executado quando dayofweek não for 1, 2 ou 3

}
 */
/* function CalcularValorFinal (tipoCliente,valorCompra);{
let desconto = 0;
switch (tipoCliente){
    case "padrão":
       desconto = 0.1;
       break;
       case "premium":
       desconto = 0.2;
       break;
       case "vip":
        desconto = 0.3;
        break;
        default:
            console.log ("inválido")
            return;

}
 const valorFinal = valorCompra * (  1-desconto);
console.log('valor final da compra: R$" $ { valorFinal.toFixed (2)}' );
} */
/* let tipoJogador = prompt("Digite o tipo de jogador (fácil, médio ou difícil): ");
let valorTotal =
    parseFloat(prompt("Digite o número de pontos ganhos:"));
let valorFinal;
switch (tipoJogador) {
    case "fácil":
        valorFinal = valorTotal * 1;
    case "Fácil":
        valorFinal = valorTotal * 1;
    case "Facil":
        valorFinal = valorTotal * 1;
    case "facil":
        valorFinal = valorTotal * 1;

        break;
    case "médio":
        valorFinal = valorTotal * 2;
    case "Médio":
        valorFinal = valorTotal * 2;
    case "medio":
        valorFinal = valorTotal * 2;
    case "Medio":
        valorFinal = valorTotal * 2;
        break;
    case "difícil":
        valorFinal = valorTotal * 3;
    case "Difícil":
        valorFinal = valorTotal * 3;
    case "dificil":
        valorFinal = valorTotal * 3;
    case "Difícil":
        valorFinal = valorTotal * 3;
        break;
    default:
        alert("Tipo de Cliente inválido!");
}
if (valorFinal) {
    alert("Valor total de pontos: " +
        valorFinal.toFixed(0));
} */

/* Exercício 1: Verificação de Número Par ou Ímpar
Situação Problema: Crie um programa que solicita ao usuário um número e informa se o
número é par ou ímpar. */

//const numero = prompt("Digite um número:");

/*  if (numero % 2 === 0) {
  alert("O número é par (divisível por 2 (dois)!");
} else {
  alert("O número é ímpar, não é divisível por 2 (dois)!");
}  */
/* Exercício 2: Verificação de Idade
Situação Problema: Desenvolva um sistema que, com base na idade de uma pessoa, determine
em qual faixa etária ela se encontra: criança, adolescente, adulto ou idoso. */


/* const idade = prompt("Digite a sua real idade:"); */

/* if (idade >= 0 && idade < 13) {
  alert("Você ainda é uma criança!");
} else if (idade >= 13 && idade < 18) {
  alert("Você ainda  é um adolescente!");
} else if (idade >= 18 && idade < 60) {
  alert("Você é um adulto, boa sorte!");
} else {
  alert("Você é um idoso, sorry!");
} */

/* Exercício 3: Contagem de Números Pares
Situação Problema: Escreva um programa que recebe um número do usuário e conta quantos
números pares existem entre 1 e o número inserido.
 */

/* const numero = parseInt(prompt("Digite um número de sua escolha:"));

let contadorPares = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    contadorPares++;
  }
}
alert(`Existem ${contadorPares} número(s) par(es) entre 1 (um) e ${numero}.`); */


/* Exercício 4: Calculadora Simples
Situação Problema: Crie uma calculadora que permite ao usuário escolher uma operação
(soma, subtração, multiplicação ou divisão) e fornece o resultado com base em dois números
fornecidos. */

/*   const operacao = prompt("Escolha a operação desejada: (soma, subtração, multiplicação, divisão)");

const numero1 = parseFloat(prompt("Digite o primeiro (1) número da sua escolha:"));
const numero2 = parseFloat(prompt("Digite o segundo (2) número da sua escolha:"));

let resultado;

switch (operacao) {
  case "soma":
    resultado = numero1 + numero2;
     case "Soma":
    resultado = numero1 + numero2;
    break;
  case "subtração":
    resultado = numero1 - numero2;
    case "Subtração":
    resultado = numero1 - numero2;
    case "Subtracao":
    resultado = numero1 - numero2;
    case "subtracao":
    resultado = numero1 - numero2;
    break;
  case "multiplicação":
    resultado = numero1 * numero2;
    case "multiplicação":
    resultado = numero1 * numero2;
    case "Multiplicacao":
    resultado = numero1 * numero2;
     case "multiplicacao":
    resultado = numero1 * numero2;
    break;
  case "divisão":
    resultado = numero1 / numero2;
     case "Divisão":
    resultado = numero1 / numero2;
      case "Divisao":
    resultado = numero1 / numero2;
     case "divisao":
    resultado = numero1 / numero2;
    break;
  default:
    alert("Essa operação é inválida. Tente novamente!");
    break;
}

if (resultado !== undefined) {
  alert(`Resultado da operação ${operacao}: ${resultado}`);
}  
 */
/* Exercício 5: Tabela de Multiplicação

Situação Problema: Construa um programa que recebe um número e um limite do usuário, e
então gera a tabela de multiplicação desse número até o limite especificado. */

/* const numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));
const limite = parseInt(prompt("Digite o limite da tabela de multiplicação:"));


if (isNaN(numero) || isNaN(limite)) {
  alert("Por favor, insira valores os numéricos da sua escolha.");
} else {
  alert(`Tabela de Multiplicação do ${numero} até o limite ${limite}:\n\n${gerarTabelaMultiplicacao(numero, limite)}`);
}

function gerarTabelaMultiplicacao(numero, limite) {
  let tabela = "";
  for (let i = 1; i <= limite; i++) {
    tabela += `${numero} x ${i} = ${numero * i}\n`;
  }
  return tabela;
} */

/* Exercício 6: Verificação de Número Primo
Situação Problema: Elabore um programa que solicita um número ao usuário e verifica se esse
número é primo ou não. */
/* const numero = parseInt(prompt("Digite um número:"));

let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}
if (primo) {
  alert(`${numero} é um número primo.`);
} else {
  alert(`${numero} não se classifica como um número primo.`);
} */

/* Exercício 7: Contagem Regressiva
Situação Problema: Desenvolva um contador regressivo que pede ao usuário para inserir um
número e então exibe uma contagem regressiva a partir desse número até 0. */


/* const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  alert("Por favor, insira um número de sua escolha.");
} else {
  for (let i = numero; i >= 0; i--) {
    alert(i);
  }
} */

/* Exercício 8: Classificação de Notas
Situação Problema: Crie um sistema de avaliação que, com base em uma nota fornecida pelo
usuário, atribui uma letra de A a F representando a classificação da nota. */


/* const nota = parseFloat(prompt("Digite a sua nota de acordo com sua avaliação:"));
let classificacao;
if (isNaN(nota)) {
 classificacao = "Nota inválida";
} else if (nota >= 9) {
 classificacao = "A :)";
} else if (nota >= 8){
 classificacao = "B :)";
} else if (nota >= 7 )
 classificacao = "C :/";
else if (nota >= 6) {
 classificacao = "D :(";
} else if (nota >= 5) {
 classificacao = "E :(";
} else {
 classificacao = "F :(";
}

alert(`A classificação da nota adquirida é: ${classificacao}`);  */

/* Exercício 9: Padrão de Estrelas
Situação Problema: Escreva um programa que solicita um número ao usuário e, em seguida,
exibe um padrão de estrelas onde cada linha contém uma quantidade crescente de estrelas. */

// let numero = parseInt(prompt("Digite um número:"));

// //Verificar se o número é válido
// if (!isNaN(numero) && numero > 0) {
//     for (let i = 1; i <= numero; i++) {
//         let linha = '';

//         for (let j = 1; j <= i; j++) {
//             linha += '*';
//         }

//         console.log(linha);
//     }
// } else {
//     console.log("Por favor, insira um número válido maior que 0.");
// }
       