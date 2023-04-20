const prompt = require("prompt-sync")({ sigint: true });

// 1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function convertir(pulgadas){
    return pulgadas * 2.54
}

let rdo = convertir(25);
console.log(rdo);

// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

function devolver(pag){
    return "http://www." + pag + ".com"
}

let rdo1 = devolver("pepito");
console.log(rdo1);

// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

function admiracion (palabra){
    return "¡"+ palabra + "!"
}

let rdo2 = admiracion("paz y amor");

console.log(rdo2);

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos

function edadPerro(edadHumana){
    return console.log("La edad en perro seria " + edadHumana * 7); 
    
};

edadPerro(22);
console.log(edadPerro(10));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas

function horaTrabajo(SueldoMensual,horasLaboradas){
    return console.log("Tu hora Laboral vale " + SueldoMensual / horasLaboradas);
}

horaTrabajo(800,40);

function calculadorIMC(peso,altura){
    return console.log("Tu IMC es de " + peso / (altura**2));
}

calculadorIMC(62,1.65);

// Funcion flecha y funcion expresada 
//Expresada
let convertirPulgadas = function(pulg){
    return console.log("Los centrimetros de estas pulgadas son " + pulg * 2.54);
}
convertirPulgadas(30);
//Arrow
let edadDePerro = edad => edad * 7;
console.log(edadDePerro);

// ejercicios complicados 

function palabraMayuscula(minuscula){
    return console.log(minuscula.toUpperCase());
}
palabraMayuscula("amor");

function tipoParametro(tipo){
    return console.log(typeof tipo);
}
tipoParametro(3);

function areaCirculo(radio){
    return console.log("El radio del circulo es " + 2 * Math.PI * radio);
}
areaCirculo(24);


function anterior(numero){
    return numero - 1;
}

function triple(numero){
    return numero *3;
}

function anterioDelTriple(numeroRecibido){
    return anterior(triple(numeroRecibido)); //invocaciones Anidadas
}