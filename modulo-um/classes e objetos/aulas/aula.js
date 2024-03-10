// Criando um objeto

const pessoa = {
    nome: 'Chritian',
    idade: 26
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);


pessoa.altura = 1.81;

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

// Utilizando funções no objeto
const pessoaDois = {
    nome: 'Christian',
    idade: 26,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

pessoaDois.descrever();

// Acessando dinamicamente valores de um objeto
const atributo = 'idade';

console.log(pessoaDois['nome']);
console.log(pessoaDois[atributo]);