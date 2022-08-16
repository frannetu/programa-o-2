class Cachorro {
    constructor(nome, raca, peso) {
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }

    static latir() {
        console.log('Auuuu auuuuu')
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Raça: ${this.raca}`)
        console.log(`Peso: ${this.peso} Kg`)
    }
}

let cachorro = new Cachorro('Alfredo', 'Pastor Alemão', 32)
Cachorro.latir()
cachorro.info()