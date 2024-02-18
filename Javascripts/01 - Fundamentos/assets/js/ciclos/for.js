

const heroes = ['Batman','Superman','Mujer Maravilla','Aquaman'];

console.warn('For Tradicional');

//?El ciclo for tiene tres parte, una parte que se inicializa la variable
//?la de condición y por ultimo el incrementador.
for( let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
};

console.warn('For In');
//?Da el mismo resultao , para los valores del array
for ( let i in heroes){//?Maneja la condicion y sale automaticamente
    console.log(heroes[i]);
};
//! Los i son diferentes se crean en el for para cada bloque

console.warn('For Of');
//*Es utilizado para obtener referencias a valores de objetos o arregles mas eficiente
for (let heroe of heroes){//?Se suele poner el singular del arreglo como variable
    console.log(heroe); //?No se hace heroes[i] , extrae el valor que hay dentro del arreglo y lo agrega
                        //?a la variable  
};

