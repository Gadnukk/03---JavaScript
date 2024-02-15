
// Dias de semana abrimos a las 11,
// pero los fies de semana abrimos a las 9

// entra a un sitio web, para consultar si esta abierto hoy ...

const dia = 1; // 0-domingo 1-lunes Date().getDay()
const horaActual = 11; //am

let horaApertura;
let mensaje; // Esta abieto, Esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) //*Es sabado o Domingo es fin de semana
// if ([0,6].includes(dia)) //! Funcion include del array, true, false
// {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de la semana');
//     horaApertura = 11;    
// }
//* Lunes 11 am
//? Operador Ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto'
// } else {
//     // mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura
//     //!Concatenacion de string con ``
//      mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }   //! Se puede utilizar el simbolo $ con llaves, puede ser una expresion
//     //! validas de javascript
//? Operador Ternario
mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Abrimos a las ${horaApertura}` ;


console.log({horaApertura , mensaje});
