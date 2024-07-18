/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

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
  let information = `O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}Kg e sua altura é ${patient.height}m.`;

  listInformationPatients.push(information);
}

alert(listInformationPatients);