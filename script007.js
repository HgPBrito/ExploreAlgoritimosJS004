/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let chosenOption = 0;

let listItens = [];

while(chosenOption != 3) {
  chosenOption = Number(prompt('Olá usuário! Digite o número da opção desejada: \n\n1. Cadastrar um item na lista \n2. Mostrar itens cadastrados \n3. Sair do programa'));
  
  switch (chosenOption) {
  
    case 1 :
      let item = prompt('Por favor digite o item : ');
      listItens.push(item); 
      break;
    
    case 2 :
      if(listItens != null && listItens.length > 0) {
        alert(listItens);

      } else {
        alert('Não existem itens cadastrados ainda!');
      }
      break; 
  
    case 3 :
      alert('Obrigado por usar nossa aplicação!');
      break;
  
    default :
      alert(`"${chosenOption}", não é uma opção válida!`);
      break;
  }
}

