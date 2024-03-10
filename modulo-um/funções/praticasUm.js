function escrevaMeuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}
// escrevaMeuNome('Christian');
// escrevaMeuNome('Joyce');

function verificaIdade(idade) {
    if (idade < 18) {
        console.log('Menor de Idade');
    } else {
        console.log('Maior de idade');
    }
}
// verificaIdade(25);
// verificaIdade(13);

// Uma função chamando a outra
function escrevaMeuNome(nome) {
    return `Meu nome é ${nome}`
}

function verificaIdade(idade) {
    const nome = escrevaMeuNome('Christian');

    if (idade < 18) {
        console.log(`${nome} e eu sou menor de idade.`);
    } else {
        console.log(`${nome} e eu sou maior de idade.`);
    }
}

verificaIdade(13);
verificaIdade(25);