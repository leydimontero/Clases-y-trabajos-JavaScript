let matriz = [ [15,7,45,78],[10,5,89,58], [13,66,34,80]];

matriz [1][0] = 20;
//delete matriz[1][0];

 //console.table(matriz)
// console.log(matriz[1][0]);



// recorrer por columnas

for (let i = 0; i < matriz.length; i++) {
   // console.log(matriz[i][0]);
}


// Recorrer por filas (buena practica)
//                            posicion de la fila [1]          
    for (let i = 0; i < matriz[1].length; i++) {
        //console.log(matriz[1][i]);
    }




for (let i = 0; i < matriz.length; i++) { // recorre por filas 
    
    for(let j = 0; j < matriz[i].length; j++) { // recorer por columnas

        //console.log(matriz[i][j]);
    }

    
}    

// recorer una matriz y sacar los numero pares 
    for (let fila = 0; fila < matriz.length; fila++) {
        
        for(let columna =0; columna < matriz[fila].length; columna++) {
        
            if (matriz[fila][columna] % 2 === 0) {
                //console.log(matriz[fila][columna]);
            }
    }
}


/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
// EJERCICIO NUMERO 1 

 let matrix = [
 [45,24,56,78,34],
 [23,56,78,23,56],
 [56,89,34,25,22],
 [34,78,23,78,56],
 [67,5,89,2,45]
]


 // console.table(matrix);

 function sumaMatriz(matrixx) {
    let suma = 0;
    for (let fila = 0; fila < matrixx.length; fila++) {
        for (let columna = 0; columna < matrixx[fila].length; columna++) {
            
             suma += matrixx[fila][columna]
            
        }
        
    }
    return suma; 
 }
 // console.log(sumaMatriz(matrix));

// EJERCICIO NUMERO 2

const generarMatriz = (filas, columnas) => {
    let matriz = [];
    for (let fila = 0; fila < filas; fila++) {
        matriz[fila] = [];
        for (let columna = 0; columna < columnas; columna++) {
            matriz[fila][columna] = fila*filas+columna+1 ;
        }
    }
    return matriz;
}

// console.table(generarMatriz(10, 10));

function generarMatrizDe100(){
    let matriz = [];
    for (let i = 0; i < 100; i +=10) { //fila
        let fila =[];
        for (let j = 1; j <= 10; j++) { // columna
            fila.push(i+j);
        }
        matriz.push(fila);
    }
    return matriz;
}

// console.table(generarMatrizDe100());



function diagonalRoja(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumatoria += matriz[i][i];
    }
    return sumatoria;
}
console.log(diagonalRoja(generarMatriz(10,10)));


function diagonalVerde(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumatoria += matriz[i][matriz.length - (1 + i)];
}
    return sumatoria;
}
console.log(diagonalVerde(generarMatriz(10,10)));

function diagoRoja(matriz){
    let sumaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j){
                sumaTotal += matriz[i][j];
            }
            
        }
        
    }
    return sumaTotal;
}

console.log(diagoRoja(generarMatrizDe100()));

function diagoVerde(matriz) {
    let resultadoVerde = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i + j === matriz.length -1){
                resultadoVerde += matriz[i][j];
            }
            
        }
        
    }
   return resultadoVerde;
}

console.log(diagoVerde(generarMatrizDe100()));