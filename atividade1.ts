/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI
é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize
a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:Pedro Otávio Camolesi
*/

let teclado = require (`prompt-sync`)();

let raio: number = parseFloat(teclado(`Digite o Valor do Raio: `));

let altura: number = parseFloat(teclado(`Digite o Valor da Altura: `));

let PI: number = 3.14159;

let volume: number = (altura * (raio * raio) *PI);

console.log(`Valor do volume é ${volume}`)

