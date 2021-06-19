function limpacod (codigo){
    return codigo.replace(/( |\.|-)/g, '');
}

function modulo10(bloco){
    const codigo = bloco.split('').reverse();
    const somatorio = codigo.reduce((acc, current, index) =>{
        let soma = Number(current) *(((index + 1) %2) + 1);
        soma = (soma > 9 ? Math.trunc(soma/10) + (soma % 10) : soma);
        return acc = soma;
    }, 0);
    return (Math.ceil(somatorio / 10) * 10) - somatorio;
}

function modulo11Bancario(bloco) {
    const codigo = bloco.split('').reverse();
    let mutiplicador = 2;
    const somatorio = codigo.reduce((acc, current) => {
        const soma = Number(current) * multiplicador;
        multiplicador = mutiplicador == 9 ? 2 : multiplicador + 1;
        return acc + soma;
    }, 0);
    const restoDivisao = soamtorio % 11;
    const DV = 11 - restoDivisao;
    if (DV === 0 || DV === 10 || DV === 11) return 1;
    return DV;
}

function modulo11Arrecadacao(bloco){
    const codigo = bloco.split('').reverse();
    let multiplicador = 2;
    const somatiro = codigo.reduce((acc, current) => {
        const soma = Number(current) * multiplicador;
        multiplicador = multiplicador === 9 ? 2: multiplicador + 1;
        return acc + soma;
    }, 0);
    const restoDivisao = somatorio % 11;

    if (restoDivisao === 0 || restoDivisao ===1) {
        return 0;
    }
    if (restoDivisao === 10) {
        return 1;
    }
    const DV = 11 - restoDivisao;
    return DV;
}

function convertToBoletoArrecadacaoCodigoBarras(codigo) {
    const cod = limpacod(codigo);
    let codigoBarras = '';
    for (let index = 0; index < 4; index++) {
        const start = (11 * (index)) + index;
        const end = (11 * (index + 1)) + index;
        codigoBarras += cod.substring(start, end);
    }
    return codigoBarras;
}