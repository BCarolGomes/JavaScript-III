// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    const diaDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    if (number < 1 || number > 7) {
        return "Número inválido"
    } else {
        return diaDaSemana[number - 1];
    }
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    switch(code) {
        case 1:
            return 1.99;
        case 2:
            return 2.99;
        case 3:
            return 3.99
        default:
            return "Código inválido."
    }
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    const categoriaDoProduto = {
        "Eletrônico" : "Tecnologia",
        "Vestuário" : "Téxtil",
        "Alimentos" : "Alimentício"
        };
    
    const categoria = categoriaDoProduto[type.toLowerCase()]

    return categoria


}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };