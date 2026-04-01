let numero = Number(prompt("digite seu número"));

if (!isNaN(numero)) {
    if (numero % 5 === 0) {
        alert("O número é múltiplo de 5.");
    } 
    else {
        alert("O número não é múltiplo de 5.");
    }

} else {
    alert("Número inválido. Por favor, digite apenas números.");
}