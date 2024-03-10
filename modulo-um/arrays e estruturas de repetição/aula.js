// Criando uma lista
const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos);

console.log(alunos[0]);

// Adicionando elementos na lista
alunos.push('Christian')
console.log(alunos);

console.log(alunos[3]);

// Iniciando uma lista vazia
const listaVazia = [];

listaVazia.push('Christian');
listaVazia.push(26);

console.log(listaVazia);

// Removendo útimo item de uma lista
listaVazia.pop();
console.log(listaVazia);

listaVazia.push('Último item que vai permanecer');
console.log(listaVazia);

// Removendo o primeiro item de uma lista
listaVazia.shift();
console.log(listaVazia);