const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);


function ejemplo1(){
    return console.log("hola soy una función")
}   
ejemplo1();

let ejemplo = function(){
    console.log("hola soy una funcion expresada");
}
console.log(ejemplo);