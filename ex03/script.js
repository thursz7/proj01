let numero = Number(prompt("Digite seu número"));

if(!isNaN(numero)){
    if (numero % 2 === 0) {
        alert("Seu número é par");
    }
    else alert("Número inválido")
}