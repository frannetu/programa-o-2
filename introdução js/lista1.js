const prompt = require('prompt-sync')({sigint: true});




/*Escreva um algoritmo que lê o nome, idade, peso e altura da pessoa, todas essas informações deverão ser passadas pelo console. Você deverá exibir uma mensagem no seguinte padrão (substitua pelo valor das variáveis): 
"<nome> tem <idade> anos, possui um peso de <peso>kg e uma altura de <altura>m".*/


console.log('ola ');
let nome = prompt('Qual é o seu nome?');
let idade = prompt('Qual e a sua idade?');
let peso = prompt('Qual e o seu peso? ');
let altura = prompt('Qual e a sua altura? ');

console.log(`Você é o ${nome} e tem ${idade} anos. Você pesa ${peso}kg uma altura de ${altura}m`);




/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias, você deverá imprimir uma mensagem exibindo a idade da pessoa expressa em dias. Considere que :
Um ano tem 365 dias.
Um mês tem 30 dias.*/

console.log('bom dia ');
let Anos = prompt('Digite os anos: "');
let Meses = prompt('Digite os meses:');
let Dias = prompt('Digite os dias:');

let IdadeTotalDias = parseInt(Anos) * 365 + parseInt(Meses) * 30 + parseInt(Dias);

console.log('voçe tem '+IdadeTotalDias+ ' dias  de vida');





/*Você deverá criar um algoritmo que resolve a fórmula de bhaskara, os valores de a, b e c deverão ter um valor inicial, não é necessário ler do teclado (prompt). Deverão ser criadas as variáveis delta, resultado1 e resultado2 (as variáveis resultado representam os cálculo com +delta e -delta).
 */


let valorA = prompt("Informe o valor de A: ");
let valorB = prompt("Informe o valor de B: ");
let valorC = prompt("Informe o valor de C: ");
let coeficiente1;
let coeficiente2

let delta = (valorB * valorB) - 4 * valorA * valorC;

console.log("Valor de Delta => " + delta);

if(delta < 0){
  console.log("Para Delta negativo, não existem raízes reais");  
} else{
  
  console.log("Para Delta positivo, raízes diferentes:");  
  
  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
  
  console.log("x' = " + coeficiente1);
  console.log("x'' = " + coeficiente2);
}













