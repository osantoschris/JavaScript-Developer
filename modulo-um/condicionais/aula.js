const numero = 10;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('O número é par.');
};

if (!numeroPar) {
    console.log('O número é impar.');
};

if (numeroPar) {
    console.log('O número é par.');
} else {
    console.log('O número é ímpar.');
};

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
};
