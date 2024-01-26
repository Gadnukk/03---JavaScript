

let juegos = [
'Zelda',
'Metroid',
'Dota 2']

console.log('Juegos:' + juegos.length);//?esta en azul no necesita parametros


let primero = juegos[ 2-2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({primero , ultimo});

//? Si necesitan barrer cada uno de los elementos del array,
//? El forEch va a ejecutar una instrucción por cada uno de los elementos
juegos.forEach( (elemento , indice ,arr) => {
    console.log({elemento, indice, arr});
});

//? Añadir un nuevo elemento al final del array
let nuevaCantidad = juegos.push('F-Zero');
console.log({nuevaCantidad , juegos});

// ?Agregar un elemento al comienzo del array
nuevaCantidad = juegos.unshift('Fire Emblem');
console.log({nuevaCantidad , juegos});

// ?Borrar la ultima posicion del array
let juegoBorrado = juegos.pop(); //? Borro F-ZERO que fuel el ultimo push
console.log(juegoBorrado);

// ?Borrar un elemento en una ubicación en especifico

let pos = 1; //? En este caso es Zelda , pos 0 esta el Fire Emblem

let juegosBorrados = juegos.splice(pos,2);//? Recibe un punto inicial 
 //? y cuantos elementos  quiere borrar

console.log({juegosBorrados , juegos});//?Devuelve un arreglo con los eliminados

//?Conocer el indice de un valor dentro del array

let indexJuego = juegos.indexOf('Dota 2');//? Cuando devuelve -1 no enconttro
console.log({indexJuego});



