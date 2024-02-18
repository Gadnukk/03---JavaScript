
//!Los objetos pasan su referencia del espacio en memoria, cuando 
//!hacen una asignación.
let mario = { nombre: 'Mario'};
// let luigui = {...mario} //*Te paso mi referencia
 let luigui = {...mario} //*Asigna un nuevo espacio en memoria
luigui.nombre = 'Luigui' //*Cambio el valor en la referencia.

console.log( {mario,luigui});
//!Las variables no pasan su referencia en la asignación
//!cada uno representa un espacio en memoria
let a = 10;
let b = a;
a = 30;

console.log({a,b});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre : 'Peter',};
let tony = cambiaNombre({...peter});

console.log(tony,peter);

const frutas =['Manzana','Peras','Piña'];

// const otrasFrutas = frutas;
// const otrasFrutas = [...frutas];//?Asi rompo la referecia
//!const otrasFrutas = frutas.slice();//?Otra manera con splice()

//?Cual de los dos es mas eficiente
//?timer
console.time('Bandera1');
const otrasFrutas = frutas.slice();//?Asi rompo la referecia
console.timeEnd('Bandera1');

console.time('Bandera2');
const otrasFrutas2 = [...frutas];//?Asi rompo la referecia
console.timeEnd('Bandera2');


otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});


const testVar = (param1) => {
    variable = param1;
    return 1;
};

console.log(testVar('x'));



