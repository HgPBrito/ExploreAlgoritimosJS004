/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10');

const chosenNumber = Math.round((Math.random() * 10));

let attempts = 0;

while(result != chosenNumber) {
  result = prompt('Número errado, tente novamente: ');
  attempts++;
}
if(attempts == 1) {
  alert(`Parabéns!! realmente pensei no ${chosenNumber}, você adivinhou em ${attempts} tentativa.`);

} else {
  alert(`Parabéns!! realmente pensei no ${chosenNumber}, você adivinhou em ${attempts} tentativas.`);
  
}