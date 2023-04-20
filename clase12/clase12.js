// Dada una matriz, recorrer sus valores 
// y sumar solo los números que estén por encima 
// o sean iguales a 10, pero menores que 1000.


let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];
  
  function recorerMatriz(matriz) {

    let sumaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= 10 && matriz[i][j] < 1000){
                sumaTotal += matriz[i][j];
            }
            
        }
        
    }
    return sumaTotal;
}

//console.log(recorerMatriz(matriz));

// Ejercio 2

let matrizMes = [ 
[1135,2500,900,1600,2800,3650,1100],
[1750,1890,1900,1300,898,1750,2800],
[1700,1150,1690,1900,1770,4500,2560],
[800,1250,1430,2100,1980,1270,950],

]


console.table(matrizMes);

// punto a 

function sumaSemana (matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            suma += matriz[i][j];
            
        }
      
    }
    return suma;
}

console.log(sumaSemana(matrizMes[i]));