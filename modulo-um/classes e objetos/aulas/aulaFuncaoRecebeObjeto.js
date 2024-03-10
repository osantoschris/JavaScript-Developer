class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade; 
    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}.`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}.`);
    } else {
        console.log(`${pessoa2.nome} e ${pessoa1.nome} tem a mesma idade.`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const christian = new Pessoa('Christian', 26);

compararPessoas(vitor, christian);
