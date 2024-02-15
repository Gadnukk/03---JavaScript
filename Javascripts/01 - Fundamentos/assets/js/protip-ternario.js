
// const elMayor = (a,b) => {
// return (a>b) ? a : b;
// };
const elMayor = (a,b) => (a>b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(10,15));
console.log(tieneMembresia(true));

//?arreglos u objetos con alguna condicion
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Loki',
    (()=> 'Nick Fury')(),//*Funcion anonima autoinvocada,
    elMayor(10,15),

];

console.log(amigosArr);

//? Mas de una condicion

const nota = 82.5; // A+ B+
const grado = (nota >= 95) ? 'A+' :
              (nota >= 90) ? 'A' :
              (nota >= 85) ? 'B+' :
              (nota >= 80) ? 'B' :
              (nota >= 75) ? 'C+' :
              (nota >= 70) ? 'C' : 'F';

console.log( {nota , grado});











