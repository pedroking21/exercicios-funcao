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

let  teclado = require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite a nota da n1: `));
let n2: number = parseFloat(teclado(`digite a nota da n2: `));
let media: number = (n1 + n2)/2;


if (media >= 8.5 && media <= 10 ) {
  console.log(`media ${media} nota "A"`);
}

else if (media >= 7 && media < 8.5) {
  console.log(`media ${media} nota "B"`);
}

else if (media >= 5 && media < 7) {
  console.log(`media ${media} nota "C"`);
}

else if (media >= 3 && media < 5) {
  console.log(`media ${media} nota "D"`);
}

else if (media > 3){
console.log(`media ${media} nota "E"`);
}

else{
  console.log(`Algo deu errado!!`);
}