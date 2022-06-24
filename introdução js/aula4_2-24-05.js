const prompt = require('prompt-sync')({sigint: true});

// 1 - Utilizando os conceitos aprendidos em sala de aula sobre objetos. Criei um objeto para cada uma das imagens abaixo:

// Cachorro

class Cachorro {
    constructor(nome, raca, peso, pelo) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.pelo = pelo;
    }

    latir() {
        console.log("Auau")
    }
}

// Gato

class Gato {
    constructor(nome, raca, peso, pelo) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.pelo = pelo;
    }

    miar() {
        console.log("Miau")
    }
}

// Caneta

class Caneta {
    constructor(marca, espessura, cor) {
        this.marca = marca;
        this.espessura = espessura;
        this.cor = cor;
    }

    escrever(texto) {
        console.log(`Escrevendo "${texto}"...`)
    }
}

// Exemplos

let cachorro = new Cachorro('a', 'a', 0, 'a')
let gato = new Gato('b', 'b', 0, 'b')
let caneta = new Caneta('c', 0, 'c')

console.log(cachorro)
console.log(gato)
console.log(caneta)

cachorro.latir()
gato.miar()
caneta.escrever('d')
