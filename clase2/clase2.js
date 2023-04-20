const prompt = require("prompt-sync")({ sigint: true });


//Declarar una funcion
function saludar(nombrePersona){
    console.log("Hola como estas " + nombrePersona + "?");
}
// llamar una funcion
saludar("Ayelen");

saludar("Leydi");

saludar("Maria");


function ejercicioMatematico(num){
    return num * 2 + 5;
}


let resultado = ejercicioMatematico(5);
console.log(resultado);



//Funcion declarada 
function hacerSuma(num1,num2){
    return num1+num2;
}

let resultadoSuma = hacerSuma(8,3); //buenas practicas 
console.log(resultadoSuma);



// Funcion Expresada 

let hacerSumaExpresada = function(num1,num2){
    return num1+num2;
}
 let rdo = hacerSumaExpresada(45,5);

 console.log(rdo);




 // Arrow function

 let hacerSumaArrow = (num1,num2) => num1+num2;

hacerSumaArrow(89,1);
