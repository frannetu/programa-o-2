// Ex 01: Exercício Contador 

class Contador {
    constructor() {
        this.contador = 0
    }
    
    zerar() {
        this.contador = 0
    }

    inc() {
        this.contador += 1
    }

    get() {
        return this.contador
    }
}

let contador = new Contador()
console.log(contador.get())
contador.inc()
contador.inc()
contador.inc()
console.log(contador.get())
contador.zerar()
console.log(contador.get())

// Ex 02: Exercício Lâmpada

class Lamp {
    constructor() {
        this.estado = false
    }

    switch() {
        this.estado = !this.estado
    }

    status() {
        if (this.estado) {
            console.log('Ligada')
        } else {
            console.log('Desligada')
        }
    }
}

let lampada = new Lamp()
lampada.status()
lampada.switch()
lampada.status()
lampada.switch()
lampada.switch()
lampada.status()
lampada.switch()
lampada.status()

// Ex 03: Exercício Conta

class Conta {
    constructor(nome, nmr, saldo) {
        this._nome = nome
        this._nmr = nmr
        this._saldo = saldo
    }

    depositar(valor) {
        this._saldo += valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            console.log('Saldo insuficiente')
        } else {
            this._saldo -= valor
        }
    }

    get nome() {
        return this._nome
    }

    get nmr() {
        return this._nmr
    }

    get saldo() {
        return this._saldo
    }
}

let conta = new Conta('A', 123, 0)
conta.depositar(100)
conta.sacar(50)
conta.sacar(50)
conta.sacar(1000)

console.log(`Nome: ${conta.nome}`)
console.log(`Nmr: ${conta.nmr}`)
console.log(`Saldo: ${conta.saldo}`)

// Ex 04: Exercício Elevador

class Elevador {
    constructor(cap, tot_andares) {
        this.cap = cap
        this.tot_andares = tot_andares
        this._andar = 0
        this._pessoas = 0
    }

    entrar() {
        if (this._pessoas < this.cap) {
            this._pessoas += 1
        }
    }

    sair() {
        if (this._pessoas > 0) {
            this._pessoas -= 1
        }
    }

    subir() {
        if (this._andar < this.tot_andares) {
            this._andar += 1
        }
    }

    descer() {
        if (this._andar > 0) {
            this._andar -= 1;
        }
    }
}

let elevador = new Elevador(3, 5)
elevador.entrar()
elevador.entrar()
elevador.entrar()
elevador.entrar() // O limite de 3 pessoas foi atingido
console.log(elevador) // Elevador { cap: 3, tot_andares: 5, _andar: 0, _pessoas: 3 }

elevador.subir()
elevador.subir()
elevador.subir()
elevador.subir()
elevador.subir()
elevador.subir() // 6° andar não existe
console.log(elevador) // Elevador { cap: 3, tot_andares: 5, _andar: 5, _pessoas: 3 }

elevador.sair()
elevador.sair()
elevador.sair()
elevador.sair() // Não sai a 4° pessoa
console.log(elevador) // Elevador { cap: 3, tot_andares: 5, _andar: 5, _pessoas: 0 }

elevador.descer()
elevador.descer()
elevador.descer()
elevador.descer()
elevador.descer()
elevador.descer() // Não passa do térreo
console.log(elevador) // Elevador { cap: 3, tot_andares: 5, _andar: 0, _pessoas: 0 }