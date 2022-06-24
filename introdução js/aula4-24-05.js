const prompt = require('prompt-sync')({sigint: true});

// 1 - Utilizando os exercícios desenvolvidos na lista passada, coloque  a implementação de cada exercício dentro de uma função (não precisa passar nenhum variável por parâmetro para a função);

function ex01() {
    while (true) {
        let num = parseInt(prompt("Digite um número: "));
        if (num < 0 || num > 500) {
            console.log("Número maior do que 500...");
            break;
        }

        if (num >= 100 && num <= 200) {
            console.log("Você digitou um número entre 100 e 200");
        } else {
            console.log("Você digitou um número fora da faixa");
        }
    }
}

function ex02() {
    while (true) {
        let num = parseInt(prompt("Digite um número: "));
        if (num < 0 || num > 100) {
            break;
        }

        if (num % 2 === 0) {
            console.log("Número par")
        } else {
            console.log("Número ímpar")
        }
    }
}

function ex03(num) {
    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i;
    }
}

function ex04(num) {
    for (let i=2; i <= 21; i++) {
        console.log(`=> ${num * i}`)
    }
}

function ex05() {
    const opts = `Opções:
    [1] - Adicionar contato
    [2] - Buscar contato
    [3] - Remover contato
    [4] - Editar contato
    [5] - Sair
    `

    while (true) {
        console.log(opts)
        let i = parseInt(prompt("Escolha uma opção: "))

        if (i === 1) {
            console.log('Adicionando contato...');
        }
        else if (i === 2) {
            console.log('Buscando contato...');
        }
        else if (i === 3) {
            console.log('Removendo contato...');
        }
        else if (i === 4) {
            console.log('Editando contato...');
        }
        else if (i === 5) {
            break;
        } else {
            console.log('Opção inválida.')
        }
    }
}

function ex06(num)  {
    for (let i=0; i < num; i++) {
        let num = parseInt(prompt("Digite um número: "))
        if (num >= 0) {
            console.log(`${Math.sqrt(num)}`)
        } else {
            break;
        }
    }
}

function ex07() {
    let cont = 0;
    let nums = 0;

    while (true) {
        let num = parseInt(prompt("Digite um número: "))

        if (num < 0) {
            break
        }

        if (num % 3 === 0) {
            cont++;
            nums += num;
        }
    }
}

// 2 - Após todos os problemas estarem em sua respectiva função, utilizando estrutura de repetição faça um menu onde o usuário possa escolher qual função ele deseja executar.

const opts = `Opções:
[1] - Ex01
[2] - Ex02
[3] - Ex03
[4] - Ex04
[5] - Ex05
[6] - Ex06
[7] - Ex07
[8] - Sair
`

while (true) {
    console.log(opts)
    let num = parseInt(prompt("Escolha uma opção: "))

    if (num === 1) {
        console.log("1 - Faça um programa que verifique os números de 0 a 500, e verifique se ele está entre o intervalo de 100 e 200.  Se estiver dentro desta faixa, imprimir “Você digitou um número entre 100 e 200”, senão  imprima “Você digitou um número fora da faixa”")
        ex01()
    } else if (num === 2) {
        console.log("2 - Faça um programa que de 0 a 100 verifique se o número é par ou impar. Caso esse valor seja par, deverá imprimir  “Número par” caso contrário, “Número ímpar”.")
        ex02()
    } else if (num === 3) {
        console.log("3 - Faça um programa que calcule o fatorial de um número informado via teclado.")
        let num = parseInt(prompt("Digite um número: "))
        ex03(num)
    } else if (num === 4) {
        console.log("4 - Faça um programa que calcule os 20 primeiros múltiplos de um valor informado via  teclado. ")
        let num = parseInt(prompt("Digite um número: "))
        ex04(num)
    } else if (num === 5) {
        console.log(`5 - Faça um programa que simule o menu de uma agenda eletrônica. Agenda deve possuir opções tais como: (só precisa criar o menu)
        a) Adicionar contato;
        b) buscar contato;
        c) remover contato;
        d) editar contato;
        e) sair`);
        ex05()
    } else if (num === 6) {
        console.log("6 - Criar um programa que leia 10 números positivos e imprima a raiz quadrada de cada número.")
        ex06(10)
    } else if (num === 7) {
        console.log("7 - Criar um programa que receba vários números inteiros e positivos e imprima a média dos números múltiplos de 3.")
        ex07()
    } else if (num === 8) {
        break
    } else {
        console.log("Opção inválida")
    }
}
