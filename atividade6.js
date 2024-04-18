/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é
a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a
seguinte tabela:
A - nota=&gt;8,5 nota=&lt;10
B - nota=&gt;7 nota&lt;8,5
C - nota=&gt;5 nota&lt;7
D - nota=&gt;3 nota&lt;5
E - nota&gt;3
Nome Aluno:Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite a nota da n1: "));
var n2 = parseFloat(teclado("digite a nota da n2: "));
var media = (n1 + n2) / 2;
if (media >= 8.5 && media <= 10) {
    console.log("media ".concat(media, " nota \"A\""));
}
else if (media >= 7 && media < 8.5) {
    console.log("media ".concat(media, " nota \"B\""));
}
else if (media >= 5 && media < 7) {
    console.log("media ".concat(media, " nota \"C\""));
}
else if (media >= 3 && media < 5) {
    console.log("media ".concat(media, " nota \"D\""));
}
else if (media > 3) {
    console.log("media ".concat(media, " nota \"E\""));
}
else {
    console.log("Algo deu errado!!");
}
