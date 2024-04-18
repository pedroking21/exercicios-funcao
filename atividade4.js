/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:Pedro Otávio Camolesi

*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeiro numero inteiro: "));
var n2 = parseFloat(teclado("Digite o segundo numero inteiro: "));
var n3 = parseFloat(teclado("Digite o terceiro numero inteiro: "));
var maior = 0;
var mediano = 0;
var menor = 0;
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        mediano = n2;
        menor = n3;
    }
    else {
        mediano = n3;
        menor = n2;
    }
}
else if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        mediano = n1;
        menor = n3;
    }
}
else if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n1 > n2) {
        mediano = n1;
        menor = n2;
    }
}
else {
    console.log("Algo deu errado!!");
}
console.log("Ordem crescente \u00E9 ".concat(menor, ", ").concat(mediano, ", ").concat(maior));
