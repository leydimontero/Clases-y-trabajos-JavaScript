const prompt = require("prompt-sync") ({sigint: true});

//ejercicio juego de mario 
let cantidadMonedas = 0;

let nombreJuego = 'Mario'

let esPequenio = true;

console.log(cantidadMonedas + ' ' + nombreJuego + ' ' + esPequenio);

let nombrePersona = prompt('Por favor ingrese su nombre: ');

console.log('Mi nombre es: ' + nombrePersona);

let cantidadVidas = 3;

console.log(cantidadVidas === 0); // comparacion estricta

console.log(--cantidadVidas); // Decremento


