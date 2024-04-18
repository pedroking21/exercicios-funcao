/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:Pedro Otávio Camolesi
*/

let teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite a letra: `);

if(letra == `A` || letra == `a` || letra == `E` || letra == `e` || letra == `I` || letra == `i` || letra == `O` || letra == `o` || letra == `U` || letra == `u` ){
    console.log(`A letra ${letra} é uma vogal`)
}
else{
    console.log(`A letra ${letra} é uma consoante!`)
}
