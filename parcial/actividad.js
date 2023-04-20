// Desarrollar una función que reciba un array e indique si se encuentran ordenados de
// menor a mayor o no.
// a. si están ordenados retornar true
// b. caso contrario retorna false
// ejemplos de arrays
// [4,9,2,5,6,7,1,2] // false
// [1,2,3,4,5,6,7,8] // true

let numeros = [2,4,8,1,7,9,10];

function numerosOrdenados(array){
    

    for (let i = 0; i < array.length; i++) {
        for (let m = 0; m < array.length -1; m++) {
           if (array[m] > array[m + 1]) {
            let aux = array[m];
            array[m] = array[m + 1];
            array[m + 1] = aux;
            return true;
            
           }
            
            
        }
        
    }
    return array;
}
 console.log(numerosOrdenados(numeros));

//  Desarrollar una función que genere una matriz, deberá recibir por parámetros la
// cantidad de filas y columnas y retornar con valores secuenciales numéricos.



// Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
// array de personas y realice un ordenamiento de forma ascendente
// - Desarrollar una función llamada orderDescLegajo que reciba por parámetro
// él array de personas y realice un ordenamiento de forma descendente
// - Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
// función



const personas =
[
{
nombre: "Arlene Barr",
legajo: 3955,
edad: 33,
},
{
nombre: "Roslyn Torres",
legajo: 3925,
edad: 27,
},
{
nombre: "Cleo Lopez",
legajo: 1965,
edad: 34,
},
{
nombre: "Daniel Malone",
legajo: 3925,
edad: 30,
},
{
nombre: "Ethel Leon",
legajo: 1915,
edad: 34,
},
{
nombre: "Harding Mitchell",
legajo: 1905,
edad: 25,
}
]

function orderAscLegajo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let m = 0; m < array.length -1; m++) {
           if (array[m].legajo > array[m + 1].legajo) {
            let aux = array[m];
            array[m] = array[m + 1];
            array[m + 1] = aux;
            
           }
            
        }
        
    }
    return array;
}
// console.log(orderAscLegajo(personas));

function orderDescLegajo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let m = 0; m < array.length -1; m++) {
           if (array[m].legajo < array[m + 1].legajo) {
            let aux = array[m];
            array[m] = array[m + 1];
            array[m + 1] = aux;
            
           }
            
        }
        
    }
    return array;
}
//console.log(orderDescLegajo(personas));



let matriz = [
    [4,9,2],
    [3,5,7],
    [8,1,6]
]
//console.table(matriz);






function sumaDiagonal(matriz) {
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i + j === matriz.length -1){
                resultado += matriz[i][j];
            }
            
        }
        
    }
   return resultado;
}

//console.log(sumaDiagonal(matriz));

// elementos pares

function paresMatriz(matriz) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
            
        }
        
    }
    
}