let idade = Number(prompt("Qual é a sua idade?"));

if(!isNaN(idade)){
    if (idade >= 18) {
        alert("Você é maior de idade");
    }
    alert("Número inválido")
}