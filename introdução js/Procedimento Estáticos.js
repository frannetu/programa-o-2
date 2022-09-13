const prompt = require('prompt-sync')({sigint: true});

class Calculadora {
    static soma(a, b) {
        return a + b
    }

    static subtracao(a, b) {
        return a - b
    }

    static multiplicacao(a, b) {
        return a * b
    }

    static divisao(a, b) {
        return a / b
    }
}

class CalculadoraCientifica extends Calculadora {
    static mod(a, b) {
        return a % b
    }

    static porcentagem(a, b) {
        return (a * b) / 100
    }

    static bin(num) {
        return num.toString(2)
    }
}

function get_nums() {
    let n1 = parseInt(prompt("Insira o primeiro número: "))
    let n2 = parseInt(prompt("Insira o segundo número: "))
    return [n1, n2]
}

function calc_input(opcao) {
    switch (opcao) {
        case 1:
            {
                let nums = get_nums()
                return Calculadora.soma(nums[0], nums[1])
            }
        case 2:
            {
                let nums = get_nums()
                return Calculadora.subtracao(nums[0], nums[1])
            }
        case 3:
            {
                let nums = get_nums()
                return Calculadora.multiplicacao(nums[0], nums[1])
            }
        case 4:
            {
                let nums = get_nums()
                return Calculadora.divisao(nums[0], nums[1])
            }
    }
}

function calcci_input(opcao) {
    calc_input(opcao)
    switch (opcao) {
        case 5:
            {
                let nums = get_nums()
                return CalculadoraCientifica.mod(nums[0], nums[1])
            }
        case 6:
            {
                let nums = get_nums()
                return CalculadoraCientifica.porcentagem(nums[0], nums[1])
            }
        case 7:
            {
                let num = parseInt(prompt('Digite o número: '))
                return CalculadoraCientifica.bin(num)
            }
    }
}

const Menu = `Menu:
1 - Calculadora
2 - Calculadora Científica

Qual opção calculadora deseja escolher? `

const MenuCalc = `Menu Calculadora:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
Qual operação deseja escolher? `

const MenuCalcCi = `
Menu Calculadora Científica:

1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
5 - Mod
6 - Porcentagem
7 - Conversão decimal para Binário

Qual operação deseja escolher? `

while (true) {
    let escolha = prompt(Menu)
    
    if (escolha === '1') {
        while (true) {
            let escolha_calc = parseInt(prompt(MenuCalc))
            if (escolha > 4 || escolha < 1) {
                break
            }
            console.log(calc_input(escolha_calc))
            break
        }
    } else if (escolha === '2') {
        while (true) {
            let escolha_calc = parseInt(prompt(MenuCalcCi))
            if (escolha > 4 || escolha < 1) {
                break
            }
            console.log(calcci_input(escolha_calc))
            break
        }
    } else {
        break
    }
}