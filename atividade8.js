/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
var angulo1 = parseFloat(teclado("Digite o Angulo: "));
var angulo2 = parseFloat(teclado("Digite o Angulo: "));
var angulo3 = parseFloat(teclado("Digite o Angulo: "));
var somaAngulos = (angulo1) + (angulo2) + (angulo3);
if (somaAngulos == 180) {
    if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        console.log("Tri\u00E2ngulo Ret\u00E2ngulo");
    }
    else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        console.log("Tri\u00E2ngulo Obtus\u00E2ngulo");
    }
    else {
        console.log("Tri\u00E2ngulo Acut\u00E2ngulo");
    }
}
else {
    console.log("Os \u00E2ngulos informados n\u00E3o formam um tri\u00E2ngulo v\u00E1lido.");
}
