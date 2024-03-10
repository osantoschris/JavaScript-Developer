function teste() {
    console.log('teste');
};

teste();

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Christian');


function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


function incrementarJuros(valor, juros) {
    const valorDeAcrescimo = (juros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

// Organização das funções no código
