/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "A" || letra == "a" || letra == "E" || letra == "e" || letra == "I" || letra == "i" || letra == "O" || letra == "o" || letra == "U" || letra == "u") {
    console.log("A letra ".concat(letra, " \u00E9 uma vogal"));
}
else {
    console.log("A letra ".concat(letra, " \u00E9 uma consoante!"));
}
