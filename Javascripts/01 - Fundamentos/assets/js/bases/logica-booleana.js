

const   regresaTrue = ()=> {
    console.log('Regresa true');
    return true;
};

const   regresaFalse = ()=> {
    console.log('Regresa false');
    return false;
};

console.warn('Not o la Negación');
console.log(!true); //? !

console.warn('And');//? true si todos los valores son verdaderos
console.log(true && true);//? true
console.log(true && false);//? false
//? Si la primer instrucción regresa false y ano ejecuta lo siguiente.
//? Por ejemplo en las funciones se ejecuta una y las siguientes,
//? dependiento si es verdadero o no.

console.warn('OR');//? false cuando todos son false
console.log(true || false);//? true
console.log(true || true);//? true
//? Lo mismo cuando llega a un valor verdadero entonces no hay necesidad
//? de seguir ejecutando , lo mismo pasa con el &&

//?

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//?Tanto para el OR o AND en asignaciones de variables considera
//? si hay valor true
//? si es undefined, null entonces es false
//* AND
const a1 = true && 'Hola Mundo' && 'Ultimo valor'; //*Si son todos true
//* considera el ultimo valor en este caso Ultimo valor
const a2 = true && soyFalso && 'Ultimo valor'; //*false
//? Despues funciona como en los condicionales
//* OR
const a3 = soyFalso || 'Tengo valor' || 'Tambien yo';//* 'Tengo valor'
const a4 = soyFalso ||soyUndefined ||soyNull ||'a' ||'Ultimo';//*'a'
const a5 = soyFalso ||soyUndefined //*Si son todos false considera el 
//* ultimo en este caso undefined

console.log({a1,a2,a3,a4,a5,});












