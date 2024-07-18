/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

let listPatients = [{
  name: "Hugo",
  age: 33,
  weight: 91.4,
  height: 1.8
},
{
name: "Carlos",
age: 27,
weight: 86.8,
height: 1.94
},];


let listInformationPatients=[];

for(let patient of listPatients) {
  let information = `O paciente ${patient.name} tem ${patient.age} anos e possui o IMC de: ${calculateBMI(patient.weight, patient.height)}.`;

  listInformationPatients.push(information);
}

alert(listInformationPatients);