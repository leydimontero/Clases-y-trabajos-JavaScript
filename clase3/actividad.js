const prompt = require("prompt-sync")({ sigint: true });

function sumar(num1,num2){
    return num1+num2; 
}



function restar(num1,num2){
    return num1 - num2;
}

function multiplicar(num1,num2){
    return num1 * num2;
}

function dividir (num1,num2){
    return num1 / num2;
}

let restultados = prompt('Testeo de operaciones/Calculadora');

console.log(restultados);

console.log( sumar(3,5));
console.log( restar(4,7));
console.log( multiplicar(8,3));
console.log( dividir(2,8));

function cuadradoDeUnNumero(numero){
    return multiplicar(numero,numero);
}
console.log(cuadradoDeUnNumero(6));

function promedioDeTresNumeros(numero1,numero2,numero3){
    let rdo = sumar(numero1,numero2);
    let rdo1 = (rdo + numero3) / 3;
    return rdo1;
}
console.log(promedioDeTresNumeros(4,6,2));

function calcularPorcentaje(number,porcentaje){
    return (multiplicar(number,porcentaje)) /100;
}

console.log(calcularPorcentaje(300,15));