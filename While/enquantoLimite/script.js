var limite = 500;
var total = 0;

while (total < limite) {
    var produto = prompt("Qual o produto que deseja comprar?");
    var valor = parseFloat(prompt("Qual o valor?"));
    
    total += valor;

    if (total == limite) {
        alert("O limite foi alcançado!");
    } else if (total > limite) {
        alert("O limite foi ultrapassado!");
    }
}