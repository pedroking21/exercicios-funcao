/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um
aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou
não, caso não diga o(s) motivo(s).
Nome:Pedro Otávio Camolesi
*/

let teclado = require(`prompt-sync`)();

let idade = parseFloat(teclado(`Digite a idade da pessoa: `));
let peso = parseFloat(teclado(`Digite o peso da pessoa: `));

if(idade>= 18 && idade <= 67){
    if(peso>= 60){
        console.log(`Você poderá doar sangue,vá para sala azul,ao 
        final do corredor e ajude mais uma pessoa necessitada `)
    }
}
  else{
    console.log(`Você não pode doar sangue porque seu peso é inferior a 60 Kg`);
  }

  if(idade < 18 && peso < 60){
    console.log(`Você não atende a nenhum requisito`);
  }
  else{
    console.log(`Você não pode doar sangue porque sua idade 
    está fora do intervalo permitido 18 a 67 anos`)
  }
