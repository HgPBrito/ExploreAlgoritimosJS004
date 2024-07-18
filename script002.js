/*
    Solicite 2 números, faça a soma e apresente o resultado final ao usuário.
*/

alert('Vamos fazer a soma de 2 números!');
let numeroOne = prompt('Por favor digite um número?');
let numeroTwo = prompt('Por favor digite mais um número?');
console.log(typeof numeroOne);
let sumNumbers = Number(numeroOne) + Number(numeroTwo);

alert(`A soma de ${numeroOne} e ${numeroTwo} é igual a ${sumNumbers}!`);