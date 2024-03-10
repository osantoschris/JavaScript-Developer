/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1. Preço do etanol;
2. Preço da gasolina;
3. Tipo do combustível que está no seu carro;
4. Gasto médio de combustível do carro por KM;
5. Distância em KM da viagem
*/

// Imprima no console o valor que será gasto para realizar esta viagem

const precoEtanol = 3.50;
const precoGasolina = 5.69;

const tipoCombustivel = 'etanol';

const gastoMedioEtanol = 8;
const gastoMedioGasolina = 12;

const distanciaViagem = 960;

let gastoViagem = 0;

if (tipoCombustivel === 'gasolina') {
    gastoViagem = (distanciaViagem / gastoMedioGasolina) * precoGasolina;
} else {
    gastoViagem = (distanciaViagem / gastoMedioEtanol) * precoEtanol;
};

// Imprime o resultado do gasto da viagem
console.log(gastoViagem);