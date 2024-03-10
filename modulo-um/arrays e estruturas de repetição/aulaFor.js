/*
// Exemplo de laço de repetição FOR

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Executando For em uma String
const nome = 'Christian dos Santos Oliveira'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/

// Realizando a somatória das notas
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);