/*
3. Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetura o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem jutos;
- Acima de duas vezes, preço normal de etiqueta mais jutos de 10%
*/


/*
1 | À vista débito
2 | À vista Dinheiro/Pix
3 | Duas vezes
4 | Acima de 2 vezes
*/

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}


const valorEtiqueta = 150;
const formaPagamento = 4;

let valorProduto = 0;

if (formaPagamento === 4) {
    valorProduto = aplicarJuros(valorEtiqueta, 10);
} else if (formaPagamento === 3) {
    valorProduto = valorEtiqueta;
} else if (formaPagamento === 2) {
    valorProduto = aplicarDesconto(valorEtiqueta, 15);
} else {
    valorProduto = aplicarDesconto(valorEtiqueta, 10);
};

console.log(`O valor final do produto é R$ ${valorProduto.toFixed(2)}`);