/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x.
Nome Aluno:Pedro Otávio Camolesi 
*/

let teclado = require (`prompt-sync`)();

let x: number = parseFloat(teclado(`Digite o Valor de x: `));

let y: number = parseFloat(teclado(`Digite o valor de y: `));


console.log (`O valor de x é ${x},e o valor de y é ${y}`);
console.log (``)
console.log (`O valor de x é ${y},e o valor y é ${x}}`);
