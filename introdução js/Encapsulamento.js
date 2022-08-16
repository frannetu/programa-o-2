class Garrafa {
    constructor(marca, capacidade, cor) {
        this.marca = marca
        this.capacidade = capacidade
        this.quantidade = 0
        this.cor = cor
    }

    encher() {
        this.quantidade = this.capacidade
    }
    
    esvaziar() {
        this.quantidade = 0
    }

    info() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Capacidade: ${this.capacidade}`)
        console.log(`Quantidade: ${this.quantidade}`)
        console.log(`cor: ${this.cor}`)
    }
}

let garrafa = new Garrafa('Gatorade', 500, 'Transparente')
garrafa.info()
garrafa.encher()
garrafa.info()
garrafa.esvaziar()
garrafa.info()

class Lamp {
    constructor(marca, cor) {
        this._marca = marca
        this._cor = cor
        this._estado = false
    }

    switch() {
        this._estado = !this._estado
    }

    set cor(val) {
        this._cor = val
    }

    status() {
        if (this._estado) {
            console.log(`Ligada com a cor ${this._cor}`)
        } else {
            console.log('Desligada')
        }
    }
}

let lampada = new Lamp('Philips', 'Laranja')
lampada.status()
lampada.switch()
lampada.status()
lampada.switch()
lampada.switch()
lampada.status()
lampada.switch()
lampada.status()
