const prompt = require("prompt-sync") ({sigint: true});
// Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().

let frase = prompt('Por favor escriba una frase: ');
console.log(frase);

// Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!"

let nombre = prompt('Escribe tu nombre: ');
console.log('Hola ' + nombre + '!');

// Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

let numero = prompt('Ingresa un numero: ');
console.log(numero);
let numero2 = prompt('Ingresa un numero diferente: ');
let suma = numero + numero2;
console.log('la suma es: ' + suma);

// Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.

function anioNacimiento(anioUsuario){
    return 2022 - anioUsuario;
}
let rdoAnio = anioNacimiento(1994);
console.log('Tienes ' + rdoAnio + ' anios');

// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

function adivina (num){
    if(num < 10 &&  num >= 0){
        return 'Felicitacion, ese era!'
    }
    else{
        return 'Lo siento, intenta nuevamente! '
    }
}
let  rdoAdivina = adivina(3);
console.log(rdoAdivina);

function loro (texto){
   
    for(texto = 1; texto <= 5; texto++){
     console.log (loro('el texto'));
    }
 }
 console.log(loro('el texto'));