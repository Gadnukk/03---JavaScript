/* 
2C Clubs (Treboles)
2D Diamonds (Diamante)
2H Heart (Corazones)
2S Spades (Espadas)
*/

//*Array que va a cambiar por eso let y no const
//Baraja de cartas
let deck         = []; 
const tipos      = ['C','D','H','S']; //*para el otro for of
const especiales = ['A','J','K','Q']; //*para el otro for of

//*Función para baraja
//*Las cartas empiezan desde el 2 hasta el 10 
//* y AJKQ , luego se repite el patron CDHS
const crearDeck = ()=>{

    for (let i=2; i<= 10; i++) {
        // deck.push(`${i} C`);
        for ( let tipo of tipos){ //!Cuando necesitamos el valor
            deck.push(`${i}${tipo}`);//?Para cada numero todos los tipos
        }
    }
    //!Podemos hacerlo con una función nueva o integrarlo dentro 
    //!De la función ya creada
    for (let especial of especiales){
        for (let tipo of tipos){
            deck.push(`${especial}${tipo}`)
        };
    };

    // console.log(deck);    
    //?Llamamos al array que se creo y el shuffle crea un nuevo array
    //?por eso no es una constante la variable
    //? Todas las funciones estan dentro del objeto _. punto para acceder
    deck = _.shuffle(deck);
     console.log(deck);   

    return deck; //?Retorno porque estaba haciendo cl para ver.
};

crearDeck();

//?Esta función me permite tomar una carta

const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en el deck'
    };
     //?Es como el return, sale del if y no ejecuta lo que hay luego
    
    //*Tiene sentido que la variable sea constante porque no va a variar
    //*dentro de la función.
    const carta = deck.pop() //*elimina el último valor
    console.log(deck);
    console.log(carta);
    
    return carta;
}

// pedirCarta();
//* VALORES DE CARTAS

const valorCarta = (carta) => {
// 2D = 2 y asi con todos , entonces extraemos el primer valor
    //!JAVASCIPTS
    //!EL STRING PUEDE SER TRABAJADO COMO SI FUERA UN ARREGLO
    
    // const valor = carta[0]; 
    const valor = carta.substring(0, carta.length -1); //*elimino el valor final
    // let puntos = 0;
    //*isNaN is not a number
    // if( isNaN(valor)) {
    //     console.log('No es un numero');
    //     //* J K Q = 10  A = 11
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else{
    //     console.log('Es un numero');       
    //     puntos = valor * 1; //*carta es string, necesito que sea numero
    // }                       //* string * 1, lo conviente a numerico
    // console.log(puntos);

    //?Version resumida 
    //   let puntos = ( isNaN(valor) ) ? 
    //                 (valor === 'A') ? 11 : 10
    //                 : valor * 1;
    //   console.log(puntos);
    return ( isNaN(valor) ) ?  (valor === 'A') ? 11 : 10
           : valor * 1;
// console.log(puntos);     
}
const valor = valorCarta(pedirCarta()); /* Simulacion */
console.log({valor});

//? Tengo mi baraja con la función de shuffle de underscore _ voy a 
//? hacer que mi array sea aleatorio.
//? Todas las funciones estan dentro del objeto _. punto para acceder

// const crearEspeciales = () => {
//     for (let especial of especiales){
//         for (let tipo of tipos){
//             deck.push(`${especial} ${tipo}`)
//         };
//     };
// };

// crearEspeciales();


