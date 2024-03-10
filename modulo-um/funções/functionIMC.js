function calcularIMC(peso, altura) {
    return imc = peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if ((imc >= 18.5) && (imc <= 25)){
        return 'Peso normal.';
    } else if ((imc > 25) && (imc <= 30)) {
        return 'Acima do peso.';
    } else if ((imc > 30) && (imc <= 40)){
        return 'Obeso.';
    } else {
        return 'Obesidade grave.';
    }
}

// function main() {
//     const peso = 83;
//     const altura = 1.81;

//     const imc = calcularIMC(peso, altura);
//     console.log(classificarIMC(imc));
// }

// main();

// Invocando a função imediatamente ao declarar
// Função imediatamente invocada - isolada - anônima

(function () {
    const peso = 83;
    const altura = 1.81;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();