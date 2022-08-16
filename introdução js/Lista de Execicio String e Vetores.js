// Ex 01:
// Crie uma função com o nome exercicio1, ela deverá receber uma string por parâmetro, e retornar o tamanho da string.

function exercicio1(texto) {
    let tamanho = texto.length
    return tamanho
}

console.log(exercicio1('abacaxi')) // 7

// Ex 02:
// Crie uma função com o nome exercicio2. Essa função deverá imprimir três strings quaisquer, utilizando as três formas: aspas simples, aspas duplas e crase.

function exercicio2() {
    console.log('string1')
    console.log("string2")
    console.log(`string3`)
}

exercicio2()

// Ex 03:
// Crie uma função com o nome exercicio3, ela deverá conter 2 parâmetros: nome e sobrenome Essa função deverá retornar a concatenação das duas strings com o espaço em branco no meio. 

function exercicio3(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(exercicio3('Francisco', 'Coelho')) // Francisco Coelho

// Ex 04:
// Crie uma função com o nome exercicio4, ela deverá conter 1 parâmetro: texto. Essa função deverá imprimir o texto em maiúsculo.

function exercicio4(texto) {
    console.log(texto.toUpperCase())
}

exercicio4('Dog') // DOG

// Ex 05:
// Crie uma função com o nome exercicio5, ela deverá conter 1 parâmetro: texto. Essa função deverá imprimir o texto em minúsculo.

function exercicio5(texto) {
    console.log(texto.toLowerCase())
}

exercicio5('Dog') // dog 

// Ex 06:
// Crie uma função exercicio6 que deverá imprimir o tamanho do vetor

function exercicio6(vetor) {
    console.log(vetor.length)
}

exercicio6([80085, 308, 42, 0, -1, 16]) // 6

// Ex 07:
// Crie uma função exercicio7 que recebe um array de Strings como parâmetro, deverá adicionar a string 'Meme' na última posição, e imprimir o array no console.

function exercicio7(array) {
    array.push('Meme')
    console.log(array)
}

exercicio7([1, 2, 3]) // [1, 2, 3, 'Meme']

// Ex 08:
// Crie uma função chamada exercicio8 responsável por adicionar:
//  * o valor -1 no início do array;
//  * o valor 'Meme' no final do array;
// Após essas operações, a função também deverá imprimir no console o vetor modificado.

function exercicio8(array) {
    array.unshift(-1)
    array.push('Meme')
    console.log(array)
}

exercicio8([42]) // [-1, 42, 'Meme']

// Ex 09:
// Crie uma função chamada exercicio9 que recebe o objeto jogador como parâmetro. Essa função deverá verificar se o ranking do jogador começa com a substring Bronze, e imprimir uma das seguintes mensagens:
// 'Ranking baixo' → caso seja verdadeiro a condição
// 'Ranking alto' → caso seja falso a condição

function exercicio9(jogador) {
    if (jogador.ranking.startsWith('Bronze')) {
        console.log('Ranking baixo')
    } else {
        console.log('Ranking alto')
    }
}

let jogador = {
    nickname: 'Drinbel',
    ranking: 'Bronze IV',
    jogo: 'League of Legends'
}

exercicio9(jogador) // Ranking baixo