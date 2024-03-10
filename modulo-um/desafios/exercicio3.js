/**
 Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
 Para realizar o calculo, receba o valor bruto do salário e o adicional dos benefícios.
 O salario a ser transferido é calculado da seguinte maneira:

 Valor bruto do salário - Percentual de imposto mediante a faixa salarial + Adicional dos beneficios

 Para calcular o percentual de imposto, segue as aliquotas:

 1. De R$ 0,00 a R$ 1.100,00        => 5,00%
 2. De R$ 1.100,01 a R$ 2.500,00    => 10,00%
 3. Maior que R$ 2.500,00           => 15,00% 

 Exemplo:
    Entradas:
        R$ 2.000,00
        R$ 250,00

    Saídas:
        R$ 2.050,00
*/


const { gets, print } = require('./funcoesExercicioTres');

const salario = gets();
const beneficio = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
};

function encontrarImposto(valor) {
    if (valor < 1100) {
        return 5;
    } else if ((valor > 100) && (valor <= 2500)) {
        return 10;
    } else {
        return 15;
    };
};

function calcularSalarioFinal(salario, imposto, beneficio) {
    return (salario - imposto) + beneficio;
}

const imposto = encontrarImposto(salario);
const porcentagemImposto = calcularPorcentagem(salario, imposto);
const salarioFinal = calcularSalarioFinal(salario, porcentagemImposto, beneficio);

print(`O salário final será de R$ ${salarioFinal.toFixed(2)}.`)