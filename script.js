// let num = +prompt('Digite um número.\nPara sair digite 0:');
// let soma = 0;

// while (num !== 0) {
//     soma = soma + num;
//     num = +prompt('Digite um número.\nPara sair digite 0:');
// }
// alert('A soma entre todos os números digitados é: '+soma);

// Usando for

// let num = +prompt('Digite um número:');

// for (let i = 0; i <= num; i++) {
//     console.log(i)
// }

// let array = [0,5,89,6,4,5,7];

// for (let i = 0; i < array.length; i++) {
//     console.log(`No indíce ${i} o número ${array[i]} é o elemento do array`);

// }

//Exercício de fixação

// exercício 01
let usuario = prompt('Insira seu tipo de usuário:\n\"A\": Adminstrador;\n\"B\": Usuário comum;\n\"C\": Usuário Assinante.').toUpperCase();

while (usuario !== "A") {
    alert('Acesso negado!!');

    usuario = prompt('Insira seu tipo de usuário:\n\"A\": Adminstrador;\n\"B\": Usuário comum;\n\"C\": Usuário Assinante.').toUpperCase();
}

alert('Boas vindas admin!');

//exercício 2;
let tabuada2 = 0
console.log('Tabuada de 2:')
for (let i = 0; i <= 10; i++) {
    tabuada = 2*i
    console.log(`2x${i} = ${tabuada}`);
}
console.log('')
    
// Exercício 3
console.log('Mostrar todos os elementos da array.')
let arrayString = ["Glauber","Leila","Nathi","Jorge","Roseane","Guilherme"];

for (let i = 0; i < arrayString.length;i++) {
    console.log (`No indíce ${i} da array o elemento é a string ${arrayString[i].toUpperCase()}`);
};