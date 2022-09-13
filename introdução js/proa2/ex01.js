class Medico
{
	static autor = "Francisco"

	constructor(nome, crm, telefone, genero, idade,
	            especialidade, precoConsulta)
	{
		this.nome = nome
		this.crm = crm
		this.telefone = telefone
		this.genero = genero
		this.idade = idade
		this.especialidade = especialidade
		this.precoConsulta = precoConsulta
	}

	RealizarConsulta()
	{
		console.log(`Dr. ${this.nome} de especialidade ${this.especialidade} está atendendo`)
	}

	static Criar(nome, crm, telefone, genero, idade,
	            especialidade, precoConsulta)
	{
		return new this(nome, crm, telefone, genero, idade,
	            especialidade, precoConsulta);
	}
}

class Enfermeiro
{
	static autor = "Francisco"

	constructor(nome, cpf, genero, idade)
	{
		this.nome = nome
		this.cpf = cpf
		this.genero = genero
		this.idade = idade
	}

	RealizarExame(exame, paciente)
	{
		console.log(`Enfermeiro(a): ${this.nome}\nPaciente: ${paciente}\nExame: ${exame}\n`)
	}

	static Criar(nome, cpf, genero, idade)
	{
		return new this(nome, cpf, genero, idade);
	}
}

class Paciente
{
	static autor = "Francisco"

	constructor(nome, cpf, genero, telefone, idade, despesasMedicas)
	{
		this.nome = nome
		this.cpf = cpf
		this.genero = genero
		this.telefone = telefone
		this.idade = idade
		this.despesasMedicas = despesasMedicas
	}

	AgendarConsulta(nomeMedico, valorConsulta)
	{
		if (valorConsulta > 0)
		{
			console.log(`Nome do médico: ${nomeMedico}`)
            console.log(`Nome do paciente: ${this.nome}`)
            console.log(`Valor: ${valorConsulta}`)
			this.despesasMedicas += valorConsulta
		} 
		else
		{
			console.log("Valor de consulta inválido")
		}
	}

    PagarConsulta()
    {
        console.log(`Foi pago o valor de R$${this.despesasMedicas}`)
        this.despesasMedicas = 0
    }

	static Criar(nome, cpf, genero, telefone, idade, despesasMedicas)
	{
		return new this(nome, cpf, genero, telefone, idade, 0);
	}
}


let jorge =  Medico.Criar("Jorge", "CRM1", 555555555, "Masculino", 39, "Cardiologista", 240)
let marcos =  Medico.Criar("Marcos", "CRM2", 40038922, "Masculino", 32, "Oftalmologia", 150)
let paola =  Medico.Criar("Paola", "CRM3", 80085555, "Feminino", 24, "Pediatria", 190)


let claudia = Enfermeiro.Criar("Cláudia", 1234567890, "Feminino", 39)
let roberta = Enfermeiro.Criar("Roberta",  1234567880, "Feminino", 41)


let ana = Paciente.Criar("Ana", 2345678901, "Feminino", 12222222, 24)
let bruno = Paciente.Criar("Bruno", 3456789012, "Masculino",  13333333, 21)
let cristina = Paciente.Criar("Cristina", 4567890123, "Feminino",  14444444, 29)
let daniel = Paciente.Criar("Daniel", 5678901234, "Masculino", 15555555, 27)

ana.AgendarConsulta("Jorge", 240)
bruno.AgendarConsulta("Marcos", 150)
cristina.AgendarConsulta("Paola", 190)
daniel.AgendarConsulta("Marcos", 150)

claudia.RealizarExame("ExameA", "A")
roberta.RealizarExame("ExameB", "B")
claudia.RealizarExame("ExameC", "C")
roberta.RealizarExame("ExameD", "D")

jorge.RealizarConsulta()
marcos.RealizarConsulta()
paola.RealizarConsulta()