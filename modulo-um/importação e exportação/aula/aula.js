
const funcoes = require('./funcoes');

console.log(funcoes.gets());

funcoes.print('Christian');

const { gets, print } = require('./funcoes');

print(gets());