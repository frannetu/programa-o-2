const prompt = require('prompt-sync')({sigint: true});


/*Faça um programa em javascript, que leia um número  inteiro e retorne seu antecessor e seu sucessor;*/

let numero = prompt("Informe um numero: ");
numero = parseInt(numero);


let antecessor = numero - 1;
let sucessor = numero + 1;

console.log(`O antecessor de  ${numero} é ${antecessor} ,e o sucessor de ${numero} é ${sucessor}.`);


/*Leia quatros valores float. Calcule e mostre na tela a média aritmética desses valores;*/

let valorA = 1.2;
let valorB = 1.3;
let valorC = 1.4;
let valorD = 1.5;

let media = (valorA + valorB + valorC + valorD)/4;
console.log(`a media e ${media}`);


/*Faça um programa que calcule a idade da pessoas, a partir do ano de nascimento e o ano atual;*/

let ano = prompt("Qual ano você nasceu? ");

let idade = (ano - 2022 )* -1;
console.log(`sua idade é ${idade}`);


/*Um comerciante calcula o valor da venda, tendo em vista a tabela a seguir:

VALOR DA COMPRA
VALOR DA VENDA
Valor < R$ 10,00
lucro de 70%
valor < R$ 30,00
lucro de 50%
valor < R$ 50,00
lucro de 40%
valor >= R$ 50,00
lucro de 30%


Implemente um programa que possa entrar com nome do produto e valor da compra e imprimir o nome do produto e o valor da renda(o lucro).*/

let produto = prompt("Informe o nome do produto: ");
let valor = prompt("Informe o valor do produro: ");
valor = parseFloat(valor);


if (valor < 10) {
    ia = valor * 70/100;
    console.log(`o ${produto} te deu um lucro de ${ia}`);
  } else if (valor > 10 & valor < 30) {
    a = valor * 50/100;
    console.log(`o ${produto} te deu um lucro de ${a}`);
  }else if ( valor > 30 & valor < 50) {
    b = valor * 40/100;
    console.log(`o ${produto} te deu um lucro de ${b}`);
  }else if ( valor >= 50) {
    f = valor * 30/100;
    console.log(`o ${produto} te deu um lucro de ${f}`);
  } else {
    console.log('ERRO!!!');}


/*Faça um programa que leia o salário de um trabalhador e o valor da prestação de um empréstimo. Se a prestação:]
for maior que 20% do salário, imprima: "Empréstimo não concedido”;
Caso contrário, imprima: “Empréstimo concedido.”
 */

let salário = parseFloat(prompt("Informe o seu salario: "));
let prestação = parseFloat(prompt("Informe o valor da prstação do emprestimo: "));

if (prestação > salário * 20/100) {
    console.log('Empréstimo não concedido');
  } else {
    console.log('Empréstimo concedido');
  }

