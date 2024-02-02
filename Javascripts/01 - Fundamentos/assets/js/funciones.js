                //?Formas de declarar funciones
//*function (palabra reservada)
function saludar(){
    console.log('Hola Mundo');
};

//*Asignación 
    //*(con palaba reserva)
const saludar2 = function (){
    console.log('Saludos 2');
};

    //*(con flecha)
const saludarflecha = () => {
    console.log('Saludo flecha');
};

//? Argumentos
function argu(nombre){
console.log('Mi nombre es '+nombre);
;}
argu('Jonatan');

//*Propiedad propia de function , no de ()=>
function proparg(prop){
    console.log('Esta es una propiedad de ' + prop);
    console.log(arguments);//?Devuelve todos lo parametros enviadoa a 
                           //?la funcion, solo para las que son function
    
};
proparg('function',123,true,[123,456,789]);

//?Return
function devuelve(){
    console.log('Primero esto');
    return 1;
    console.log('Despues del return');//?no se va a ejecutar    
};
//*Llamado de funcion
devuelve();
//*Retorno de funcion, en la asignacion estoy ejecutando la funcion tambien
const retornodefuncion = devuelve(); //?Retorna 1
console.log(retornodefuncion);

//?Para que me puede servir el return
//*Devolución de una operación
function sumar(a,b){
 return a+b;
}
console.log(sumar(10,2));

//*Funcion de flecha
    //!Cuando unacamente tenemos un RETURN, en una linea.
//const sumarab = (a,b)=> {
//     return a+b;
//    }
const sumarab = (a,b)=> a+b;//!Forma acotada sin return ni llaves
const getaleatorio2 = () => Math.random(); 

console.log(sumarab(8,8));
console.log(getaleatorio2());
