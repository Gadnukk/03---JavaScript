
//*1
//*Desde el EC6, cuando el nombre de la propiedad es igual
//*al nombre del parametro entonces se puede resumir, poniendo
//*unicamente el nombre de la propiedad sin tener que asignarle
//*el parametro nombre:nombre, apellido:apellido
function crearPersona(nombre,apellido){
        return {
            nombre,   //*1
            apellido //*1        
        }}

const persona = crearPersona('Jonatan','Albornoz');
console.log(persona);



//*2
//*Ahora como es un solo return y no hay nada mas, se puede hacer 
//*como una function de flecha simplificada, lo nuevo son los ({objeto})
const crearPersona2 = (nombre,apellido) => ({nombre,apellido});
const persona2 = crearPersona2('Taína','Albornoz');
console.log(persona2);

//*3 Argumets es solo una funcion de la clase function
function imprimeArgumentos(){
console.log(arguments);
};
imprimeArgumentos(10, true, false,'Hola','Adios');

//*4 Para hacer lo mismo en un function de flecha
//*agrego un parametro rest ...parametro, lo cual le dice
//*que todos los argumentos enviados a la función, creame un array
const imprimeArgumentos2 = (...args) => {
    // console.log(args); };   
    return args;}       
imprimeArgumentos2(10, true, false,'Hola','Adios');

const imprimeArgumentos3 = (edad,...args) => {
    console.log({edad,args}); //?despues del parametro REST no puede venir nada
    };              //?si antes para sacarlo del array (edad,...args)
imprimeArgumentos3(10, true, false,'Hola','Adios');

//*5 Dar nombre directamente a cada argumento dentro del array u
//* objeto, esto para evitar declarar y recorrer cada propiedad o posicion

    //*ARRAY , comente el cl para trabajar con el return
const [antiguedad,activo,deuda,direccion] = imprimeArgumentos2(10,true,false,'Carlos Calvo');  
console.log({antiguedad,activo,deuda,direccion});
    
    //*OBJETO, el alias se agrega con :
const {apellido: aliasApellido} = crearPersona('Nadia','Ruiz');  
console.log({aliasApellido});  

//*6 Destructuración de Argumentos

const tony = {
    nombre: 'Tony Stark', //* llave/propiedad y el valor de la llave
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster',],    
};
console.log(tony);

// const imprimirPropidades = (personaje)=>{
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);    
// }
    //*6Destructuración de Argumentos mediante llaves, extraigo las prop
const imprimirPropidades = ({nombre,codeName,vivo,edad = 15,trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
 }//?si no viene ninguna edad puedo asignarle en la propiedad un valor por
//?defecto.  edad: 40, = null o no existe.
   
imprimirPropidades(tony);

