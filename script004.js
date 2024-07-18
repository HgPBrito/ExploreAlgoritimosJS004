/*
    Solicitar o nome do aluno e as 3 notas do bimestre, depois calcular a média daquele aluno.

    Se passou mostra uma mensagem de parabéns, se não uma mensagem de dar o melhor na prova de recuperação.

    Em ambos os casos mostra a menasgem com nome e a nota.
*/

alert('Será que vai precisar fazer recuperação?');
let studentName = prompt('Por favor digite seu nome?');
let noteOne = prompt('Por favor digite sua primeira nota:');
let noteTwo = prompt('Por favor digite sua segunda nota:');
let noteThree = prompt('Por favor digite sua terceira nota:');

noteOne = Number(noteOne);
noteTwo = Number(noteTwo);
noteThree = Number(noteThree);

let passingScore = 7;
let roundedScore = 6.5;
let failScore = 3;

const gradeAvarage = ((noteOne + noteTwo + noteThree) / 3).toFixed(1);

if(gradeAvarage >= passingScore){
    alert(`Olá ${studentName}, sua média foi ${gradeAvarage} meus parabéns!`);
    
} else if(gradeAvarage >= roundedScore) {
    alert(`Olá ${studentName}, sua média foi ${gradeAvarage} passou raspando!`);

} else if(gradeAvarage < failScore) {
    alert(`Olá ${studentName}, sua média foi ${gradeAvarage} reprovado não teve jeito, se vemos de novo no próximo ano!`);

} else {
    alert(`Olá ${studentName}, sua média foi ${gradeAvarage} boa sorte na recuperação!`);

}

