

// const arr = new Array(10);
// console.log(arr);

// const arry = [];
// console.log(arry);

// let videojuegos = ['Mario 3' , 'Megaman' , 'Chrono Trigger'];
// console.log({videojuegos}); //?Las {} simbolizan objeto
// console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Jonatan',
    1+2,
    function(){},
    ()=>{}, //? Funcion de flecha
    {a:1},//? Objeto Literal
    ['X','Megaman','Zero','Dr. Light',
        ['Dr. Willy',
          'Woodman']
    ] //? Otro Array
];

console.log(arregloCosas[7][4][0]);//? Me paro en la pos 7 es un array
                                //? y ahora me paro en el 4, nuevo array.
                                //? y ahora en la pos 0 o 1.



