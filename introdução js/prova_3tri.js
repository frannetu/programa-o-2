const prompt = require('prompt-sync')({sigint: true});

class Cliente {
    constructor(nome, cpf, email, rua, nmr, bairro, usuario, senha) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.rua = rua
        this.nmr = nmr
        this.bairro = bairro
        this.usuario = usuario
        this.senha = senha
    }

    login(usuario, senha) {
        if (this.usuario == usuario &&  this.senha == senha) {
            return 1
        }
        return 0
    }
}

class Funcionario extends Cliente {
    constructor(nome, cpf, email, rua, nmr, bairro, salario, setor, usuario, senha, funcao) {
        super(nome, cpf, email, rua, nmr, bairro, usuario, senha)
        this.salario = salario
        this.setor = setor
        this.funcao = funcao
    }

    recebeBonificacao() {
        this.salario += (this.salario * 0.1)
    }
}

let pessoas = []

function cadastro() {
    if (pessoas.length >= 10) {
        console.log('Não é possível cadastrar mais ninguém')
        return
    }

    let msg = `[1] Cadastrar cliente
[2] Cadastrar funcionário
-> `
    let ret = parseInt(prompt(msg))
    
    let nome = prompt('Nome: ')
    let cpf = prompt('CPF: ')
    let email = prompt('e-mail: ')
    let rua = prompt('Rua: ')
    let nmr = prompt('Número: ')
    let bairro = prompt('Bairro: ')
    let usuario = prompt('Usuário: ')
    let senha = prompt('Senha: ')

    if (ret === 1) {
        pessoas.push(new Cliente(nome, cpf, email, rua, nmr, bairro, usuario, senha))    
    } else if (ret === 2) {
        let salario = prompt('Salário: ')
        let funcao = prompt('Função: ')
        let setor = prompt('Setor: ')

        pessoas.push(new Funcionario(nome, cpf, email, rua, nmr, bairro, salario, setor, funcao, usuario, senha))
    } else {
        console.log('Opção inválida!')
    }
    
}

function login(usuario, senha) {
    return pessoas.find((pessoa) => pessoa.usuario == usuario && pessoa.senha == senha)
}

function menu() {
    let msg = `[1] Login
[2] Cadastrar usuário
-> `
    let ret = parseInt(prompt(msg))
    switch (ret) {
        case 1:
            if (login(prompt('Usuário: '), prompt('Senha: ')))
                console.log('Logado com sucesso!')
            else
                console.log('Usuário ou senha incorretos!', pessoas)
            break
        case 2:
            cadastro()
            break
        default:
            process.exit(1)
    }
}

while (true) {
    menu()
}