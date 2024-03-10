// Crie um programa que crie uma lista de números e imprima somente os números pares encontrados

const tamanhoLista = 20;
const lista = []

for (let i = 0; i < tamanhoLista; i++) {
    lista.push(i);
    if ((i % 2) === 0) {
        console.log(`O número ${i} é par.`);
    }
}

console.log(lista);