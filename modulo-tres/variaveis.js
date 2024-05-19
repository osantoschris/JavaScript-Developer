// Declarando variáveis
// Fracamente tipado
// Case Sensitive
// Tentará converter os tipos para resolver as operações
// Sinal "+" pode ser utilizado para fazer concatenação

var var1 = 10;
var var2 = 'Texto';

console.log(var1 + var2);


// Hoisting
// JS faz o içamento das declarações

teste();
function teste() {
    console.log('teste');
}
teste();

// A atribuição da variável continua após a declaração
console.log(teste1);
var teste1 = 'teste';

var func1 = function() {
    console.log('funcao1');
}

func1();
func2();

function func2() {
    console.log('funcao2');
}

// ES6
// Declaração de variáveis com var, permite o vazamento de escopos
// Declarações com let fica restrita ao bloco, da mesma forma do const, porém somente o let aceita modificações/manipulações

// if (true) {
//     var var1 = 10;
// }

function teset() {
    var variavel1 = 10;
}

teste();

// console.log(variavel1);
{ 
    var x = 10;
    let y = 10;
}

// console.log(x, y);

// Convenções de nomenclaturas

// variáveis começam com letras, underline ou dolar ($) jquery

// Para identificar que a variável é restrita ao escopo
var _teste = 10;

var $teste = 20;

var teste = 30;

// Para ajudar a identificar que é uma constante, utiliza-se somente letras maíuscular
const TESTE = 40;

// Para palavras compostas, utiliza camelCase
let variavelComposta = 'variavel composta';