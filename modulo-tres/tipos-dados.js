// Tipos primitivos - imutáveis
/* 
    boolean
    null
    undefined
    number
    string
    symbol
*/

// object

// let x = 10;

// let y = { numero: 10}
// console.log(y);
// y.numero = 20
// console.log(y);

// console.log('Conversão dos tipos de dados, tentativa de coerção:')

// console.log(10 + '10');
// console.log('Como não conseguiu resolver, realizar a concatenação. Se utilizarmos outro operador, como o de subtração, realizará a coerção:')
// console.log(25 - '10');

// console.log('Comparação de valores:')
// console.log('1. Compara com coerção:')
// console.log("10 == '10'");
// console.log(10 == '10');
// console.log('2. Comparação sem coreção:')
// console.log("10 === '10'");
// console.log(10 === '10');

// Boolean (true/false)
const nome = '';

if (nome) {
    console.log('preenchido');
};


// Null & Undefined

// Null -> ausência de valor, e não a inexistência da propriedade.
// Undefined -> como se a variável não existisse, ausência de declaração.
// const x = null;
// let y;

// console.log(x);
// console.log(y);


// const x = { nome: null };
// console.log(x.nome, x.idade);


const x = { nome: null }

console.log(JSON.stringify(x));


const id = 10;

console.log("<div id=\"10\"teste</div>");
console.log('<div id="10">teste</div>');

console.log('<div id="' + id +'">teste</div>');

console.log(`<div id="${id}">teste</div>`);


const y = Symbol('10');
const z = Symbol('10');

console.log(y == z);

