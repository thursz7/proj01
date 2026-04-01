let valorCompra = Number(prompt("Digite o valor da sua compra"));
let valorTotal;

if(!isNaN(valorCompra)){
    if (valorCompra >= 100) {
        alert("Você ganhou um desconto de 10%");
        valorTotal = valorCompra - (valorCompra * 0.10);
        alert(`O valor total da sua compra com desconto é ${valorTotal}`);
    } else {
            alert(`O valor total da sua compra é R$ ${valorCompra}`);
    }
} else { 
    alert("Número inválido. Por favor, digite um valor correto.")
}
