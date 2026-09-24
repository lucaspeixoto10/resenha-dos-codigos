// função que calcula o valor a pagar
function calcular() {
    // pegando os valores que a pessoa digitou
    var codigo = Number(document.getElementById("codigo").value);
    var quantidade = Number(document.getElementById("quantidade").value);
    var resultado = document.getElementById("resultado");

    var preco = 0;

    // descobrindo o preço de acordo com o código
    if (codigo == 1) {
        preco = 5.00;
    } else if (codigo == 2) {
        preco = 3.50;
    } else if (codigo == 3) {
        preco = 4.80;
    } else if (codigo == 4) {
        preco = 8.90;
    } else if (codigo == 5) {
        preco = 7.32;
    } else {
        // se o código não for de 1 a 5
        resultado.innerHTML = "Código inválido!";
        return;
    }

    // se a quantidade for zero ou negativa
    if (quantidade <= 0) {
        resultado.innerHTML = "Quantidade inválida!";
        return;
    }

    // calculando o total
    var total = preco * quantidade;

    // mostrando na tela com duas casas decimais
    resultado.innerHTML = "Valor a pagar: R$ " + total.toFixed(2);
}
