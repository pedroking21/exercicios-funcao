/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI
é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize
a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o Valor do Raio: "));
var altura = parseFloat(teclado("Digite o Valor da Altura: "));
var PI = 3.14159;
var volume = (altura * (raio * raio) * PI);
