// Criando classes e instâncas
const pessoaObjeto = {
    nome: 'Christian',
    idade: 26,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

class Pessoa {
    nome;
    idade;
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

console.log(vitor);

const christian = new Pessoa();
christian.nome = 'Christian S Oliveira';
christian.idade = 26;

console.log(christian);

vitor.descrever();
christian.descrever();