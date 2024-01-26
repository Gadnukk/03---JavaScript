
// ? Variable mas {}, es un objeto literal
let personaje = {
    nombre: 'Tony Stark', //* llave/propiedad y el valor de la llave
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.934,
        lng: -118.78
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster',],
    direccion: {//?Otro objeto literal
        zips: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);

//? Formas de acceder a las propiedades
    //? Punto
    console.log(personaje.nombre);
    console.log(personaje.coords.lat);
    console.log(personaje.trajes.length);
    console.log(personaje.trajes[personaje.trajes.length -1]);

    
    //? Corchetes []
    console.log(personaje['nombre']);  
    const x = 'vivo';
    console.log(personaje[x]);
    console.log(personaje["ultima-pelicula"]);
    
//? Mas Detalles

//?Eliminar una propiedad de un objeto literal
delete personaje.edad;
console.log(personaje);

//?Agregar una propiedad
personaje.casado = true;

//?Devolver el Objeto como un array
const  entresPares = Object.entries(personaje);
console.log(entresPares);

//?Bloquear el objeto para que no se pueda modificar las propiedades
//?dentro del objeto.
Object.freeze(personaje);


