/*
    Faça um programa que receba N (quantidade de números) e seus respectivos valores
    Imprima o maior número par e o menor número impar

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8
        Saída:
            Maior número par: 10
            Menor número impar: 1
*/

const { gets, print } = require('./funcoesExercicioDois');
const n = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    const nAtual = gets();
    if ((nAtual % 2) === 0) {
        if ((maiorPar === null) || (nAtual > maiorPar)) {
            maiorPar = nAtual;
        };
    } else {
        if ((menorImpar === null) || (nAtual < menorImpar)) {
            menorImpar = nAtual;
        };
    };
};

print(`O maior número par é ${maiorPar}`);
print(`O menor número impar é ${menorImpar}`);