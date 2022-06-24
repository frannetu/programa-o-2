const prompt = require('prompt-sync')({sigint: true});


// 1 - Faça um programa que verifique os números de 0 a 500, e verifique se ele está entre o intervalo de 100 e 200.  Se estiver dentro desta faixa, imprimir “Você digitou um número entre 100 e 200”, senão  imprima “Você digitou um número fora da faixa”

// while (true) {
//     let num = parseInt(prompt("Digite um número: "));
//     if (num < 0 || num > 500) {
//         console.log("Número maior do que 500...");
//         break;
//     }

//     if (num >= 100 && num <= 200) {
//         console.log("Você digitou um número entre 100 e 200");
//     } else {
//         console.log("Você digitou um número fora da faixa");
//     }
// }

// 2 - Faça um programa que de 0 a 100 verifique se o número é par ou impar. Caso esse valor seja par, deverá imprimir  “Número par” caso contrário, “Número ímpar”.

// while (true) {
//     let num = parseInt(prompt("Digite um número: "));
//     if (num < 0 || num > 100) {
//         break;
//     }

//     if (num % 2 === 0) {
//         console.log("Número par")
//     } else {
//         console.log("Número ímpar")
//     }
// }

// 3 - Faça um programa que calcule o fatorial de um número informado via teclado.

// let num = parseInt(prompt("Digite um número: "))

// // 5! = 120
// let fact = 1;
// for (let i = num; i > 1; i--) {
//     fact *= i;
// }

// console.log(`O fatorial de ${num} é ${fact}`)

// 4 - Faça um programa que calcule os 20 primeiros múltiplos de um valor informado via  teclado. 

// let num = parseInt(prompt("Digite um número: "))

// for (let i=2; i <= 21; i++) {
//     console.log(`=> ${num * i}`)
// }

// 5 - Faça um programa que simule o menu de uma agenda eletrônica. Agenda deve possuir opções tais como: (só precisa criar o menu)
// a) Adicionar contato;
// b) buscar contato;
// c) remover contato;
// d) editar contato;
// e) sair

// const opts = `Opções:
// [1] - Adicionar contato
// [2] - Buscar contato
// [3] - Remover contato
// [4] - Editar contato
// [5] - Sair
// `

// while (true) {
//     console.log(opts)
//     let i = parseInt(prompt("Escolha uma opção: "))

//     if (i === 1) {
//         console.log('Adicionando contato...');
//     }
//     else if (i === 2) {
//         console.log('Buscando contato...');
//     }
//     else if (i === 3) {
//         console.log('Removendo contato...');
//     }
//     else if (i === 4) {
//         console.log('Editando contato...');
//     }
//     else if (i === 5) {
//         break;
//     } else {
//         console.log('Opção inválida.')
//     }
// }

// 6 - Criar um programa que leia 10 números positivos e imprima a raiz quadrada de cada número.

// for (let i=0; i < 10; i++) {
//     let num = parseInt(prompt("Digite um número: "))
//     if (num >= 0) {
//         console.log(`${Math.sqrt(num)}`)
//     } else {
//         break;
//     }
// }

// 7 - Criar um programa que receba vários números inteiros e positivos e imprima a média dos números múltiplos de 3.

// let cont = 0;
// let nums = 0;

// while (true) {
//     let num = parseInt(prompt("Digite um número: "))

//     if (num < 0) {
//         break
//     }

//     if (num % 3 === 0) {
//         cont++;
//         nums += num;
//     }
// }

// console.log(`A média dos média dos números múltiplos de 3: ${nums/cont}`)