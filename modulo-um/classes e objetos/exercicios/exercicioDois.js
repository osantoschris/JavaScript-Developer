/*
2. Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor o seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura. Peça para José dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome,
        this.peso = peso,
        this.altura = altura
    }

    calcularImc() {
        const imc = this.peso / Math.pow(this.altura, 2);
        return imc
    };

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'abaixo do peso.';
        } else if ((imc >= 18.5) && (imc <= 25)){
            return 'com o peso normal.';
        } else if ((imc > 25) && (imc <= 30)) {
            return 'acima do peso.';
        } else if ((imc > 30) && (imc <= 40)){
            return 'obeso.';
        } else {
            return 'com obesidade grave.';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const imc = jose.calcularImc();
console.log(`Olá, meu nome é ${jose.nome} e meu IMC é ${imc.toFixed(1)}`);

console.log(`Olá, meu nome é ${jose.nome} e eu estou ${jose.classificarImc()}`)

const christian = new Pessoa('Christian', 83, 1.81);
console.log(`Olá, meu nome é ${christian.nome} e eu estou ${christian.classificarImc()}`)
