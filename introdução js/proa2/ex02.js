const prompt = require('prompt-sync')({sigint: true});

class Produto
{
	constructor(nome, quantidade, preco)
	{
		this.nome = nome
		this.quantidade = quantidade
		this.preco = preco
	}
}

let carrinho = []

function PrecoFinal(cesta) {
	let preco = 0;
	for (let i=0; i < cesta.length; i++) {
		preco += cesta[i].preco * cesta[i].quantidade
	}
	return preco
}

while (true)
{
	let op = prompt(`Compras
1 - Adicionar um produto
2 - Remover um produto
3 - Mostrar o carrinho
4 - Total da compra
>> `)

	if (op == 1) {
		let nome = prompt("Nome do produto: ")
		let preco = parseInt(prompt("Preço do produto: "))
		let quantidade = parseInt(prompt("Quantidade: "))

		let produto = new Produto(nome, quantidade, preco);

		carrinho.push(produto)
	} else if (op == 2) {
		console.log(carrinho)
		let r = parseInt(prompt("Insira o índice para remoção(começa pelo 1): "))-1
		carrinho.splice(r, 1);
	} else if (op == 3) {
		console.log(carrinho)
	} else if (op == 4) {
		console.log(`Total: R$${PrecoFinal(carrinho)}`)
	} else {
		console.log("Opção inválida! Saindo ...")
		break
	}
}