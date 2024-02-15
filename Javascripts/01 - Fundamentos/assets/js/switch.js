
const dia = 0;

//? Cuando tenemos valores exactos int string ===

switch(dia){ //? ===
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');    
        break;     
    default: //?Si no es ninguno de los otros.
        console.log('No es ningun de esos dias.');
               
}
//? Si lo dejo así me devuelve Domingo Lunes Martes
//* Para salir del switch se usa la sentencia BREAK, a menos que 
//* se requiera que se ejecuten todas las lineas posteriores.
//!     Break                              Return
//?Sigue ejecutando el codigo       El return sale de la función o codigo
//?que sigue luego del switch       que se ejecuta, no ejecuta mas nada.

