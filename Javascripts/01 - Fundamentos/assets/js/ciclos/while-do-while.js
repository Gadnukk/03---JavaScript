console.warn('While');


const carros = ['Ford', 'Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length){ //? Se ejecuta x true
//     console.log( carros[i]);
//     i++; //? Es igual a i = i+1;    
// }
//! undefined , null , false son considerados no true
console.log(carros[10]); /* undefinded */

while( carros[i]){  
    if (i === 1){ //*Cuando sea uno salite del while, aunque si hay 
        break;//*mas codigo luego del while se ejecutara, no con return
    }
    console.log( carros[i]);//*solo mostrará ford
    i++; +1;    
}

while( carros[i]){  
    if (i === 1){ //*Cuando sea uno salite del while, aunque si hay 
        // break;//*mas codigo luego del while se ejecutara, no con return
        i++;
        continue; //!Bloque infinito al no tener el i++ luego continue;
        //? Aca se omite Mazda por hece continuar el while si ir abajo.
    }
    console.log( carros[i]);//*muestra Ford, Honda, Toyota.
    i++; +1;    
}


console.warn('Do While');
//*La diferencía con el While, es que siempre va a ejecutar el bloque interno
//*una vez

let j = 0;

do {
    console.log(carros[j]);//?Se ejecuta 1 vez por lo menos
    j++;
}while(carros[j]);//?Se ejecuta siempre cuando carros en la posicion j
                  //?tenga un valor


