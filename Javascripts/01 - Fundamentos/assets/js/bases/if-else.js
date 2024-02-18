
const hoy = new Date();
let dia = hoy.getDay();//? 0:Domingo, 1: Lunes, 2: Martes

console.log({dia});

if (dia === 5) { 
    console.log('Es Viernes');
}
else{ //? else if {} y así
console.log('No es Viernes');  
};

console.log(dia === 5);

//?
// (dia = 5) //? Es una asignacion de valor 
// (dia == 5) //? Verifica el valor, pero no importa el tipo,
//             //? puede ser un string o integer
// (dia === 5) //? Verifica el valor y el tipo

//Sin usar if else o swith 
const dias = new Date().getDay();
//dia de la semana 0=Domingo 1= Lunes
const semana = ['Domingo','Lunes','Marte','Miercoles','Jueves','Viernes',
        'Sabado',]
// const diaLetras = ()=> semana.dias[dia]
console.log(semana[dias]);

