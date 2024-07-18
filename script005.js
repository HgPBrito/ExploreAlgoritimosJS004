/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

alert('Vamos criar uma lista de compras');

let listCompras = [];

for (let index = 0; index < 10; index++){

    listCompras[index] = prompt('Por favor digite o itens ' + (index + 1));
}

alert(listCompras);