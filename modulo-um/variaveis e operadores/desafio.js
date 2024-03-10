const precoCombustivel = 5.69;
const mediaConsumo = 12.5;
const distanciaPercorrida = 960;

const combustivelUtilizado = (distanciaPercorrida / mediaConsumo) * precoCombustivel;

console.log(combustivelUtilizado);

console.log('Número ajustado: ')
console.log(combustivelUtilizado.toFixed(2));