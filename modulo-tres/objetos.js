const pessoa = {
    "nome": "Christian",
    "idade": 26,
    falar: function () {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} ano(s).`);
    }
};

pessoa.falar();

// x.sobrenome = "Oliveira"

// console.log(x);

// console.log(x.nome);

// console.log(x['sobrenome']);