/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o
número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é
${variavel}`, se ser iguais uma frase: ` Os números ${variavel} e ${variavel} são iguais`.
Nome:Pedro Otávio Camolesi
*/

let  teclado = require(`prompt-sync`)();

let num1: number = parseFloat(teclado(`digite o primeiro numero: `));
let num2: number = parseFloat(teclado(`digite o segundo numero: `));

if (num1 > num2) {
    console.log(`o numero maior é ${num1} e o numero menor é ${num2}.`);
} 

else if (num2 > num1) {
    console.log(`o numero maior é ${num2} e o menor é ${num1}.`);
}

else if (num1 > num2) {
    console.log(`o numero ${num1} e o ${num2} sao iguais.`);
}

else{
    console.log(`algo deu errado.`);
}
