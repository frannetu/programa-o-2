const prompt = require('prompt-sync')({sigint: true});

/*exercicio 01
Escreva um algoritmo que deverá verificar o nível do jogador, se o nível for acima de 60, deverá exibir a mensagem “Jogador experiente”, caso contrário, deverá imprimir “Jogador iniciante”.*/

let nível = prompt("Informe seu nivel: ");


if(nível >= 60){
  console.log(`Jogador é um jogador experiente`);
} else {
    console.log(`Jogador é um jogador iniciante`);}

/*exercicio 02
Você deverá ler a altura de uma pessoa (float) e o sexo de uma pessoa (string), construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
● caso seja 'masculino': (72.7 * h) – 58;
● caso seja 'feminino': (62.1 * h) – 44.7. 
Deverá exibir o resultado no console.

Estou convertendo uma string (numero) para inteiro
numero = parseInt(numero);

parseInt -> usamos para converter de String para inteiro
parseFloat -> usamos para converter de String para Float
let resultado = numero + 10;*/

console.log('INFORME SUA ALTURA COM PONTO!');
let altura = prompt("Informe sua altura : ");

let sexo = prompt("Informe seu sexo, M para masculino e F para feminino : ");



if (sexo === 'M') {
  pesoideal = (72.7 * altura) - 58;

  console.log('seu peso ideal e ' + pesoideal);
} else {

  pesoideal = (62.1 * altura) - 44;

  console.log('seu peso ideal e ' + pesoideal);
}