/*
1. Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um metodo que dado a quantidade de km e o preço de combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca,
        this.cor = cor,
        this.gastoMedio = gastoMedio
    }

    calcularGasto(distanciaPercorrida, valorCombustivel) {
        return distanciaPercorrida * this.gastoMedio * valorCombustivel;
    }
}

const civic = new Carro('Honda', 'Cinza', 1/12);
const valorGasto = civic.calcularGasto(960, 5.69);

console.log(`O veículo da marca ${civic.marca} gastará o total de R$ ${valorGasto.toFixed(2)} na viagem.`)