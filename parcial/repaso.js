let estudiantes = [
    {
        nombre : 'Maria',
        edad : 30,
        notaFinal : 3
    },
    {
        nombre : 'Fer',
        edad : 45,
        notaFinal : 8
    },
    {
        nombre : 'Claudia',
        edad : 27,
        notaFinal : 7
    },

]

function edadAscendente(array){
    for(let z=0; z<array.length; z++){
        for(let i=0; i<array.length - 1; i++){
            
            if(array[i].edad > array[i + 1].edad){
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    return array;
}
console.log(edadAscendente(estudiantes));

// crear un funcion que retorne un  nuevo array. este debera contener los objetos 
//cuya notaFinal sean mayores o iguales a 7

function filtrado (array){

    let nuevoArray = [];

    for(let i=0; i<array.length; i++){
        
        if (array[i].notaFinal >= 7) {
            
            nuevoArray.push(array[i]);
            
        }
    }
    return nuevoArray;
}
//console.log(filtrado(estudiantes));


function agregarId(array) {
    
    for(let i=0; i<array.length; i++){

        array[i].id = i + 1;
    }
    return array;
}
//console.log(agregarId(estudiantes));


// crear una matriz de 3 x 4

let matriz = [
    [1,2,3,4],
    [4,2,3,1],
    [5,6,8,9],
];
//console.table(matriz);

// crear una funcion que sume todos los valores de la matriz que sena pares

function sumarPares(matrix){
    
    let acumulador = 0; 
    for(let i=0; i < matrix.length; i++){
        
        for(let j=0; j< matrix[i].length; j++){
            if(matrix[i][j] % 2 === 0){
               acumulador += matrix[i][j]; 
            }
        }
    }
    return acumulador;
}
//console.log(sumarPares(matriz));



function sumarPares(matrix){
    
    let acumulador = 0; 
    for(let i=0; i < matrix.length; i++){
        
        for(let j=0; j< matrix[i].length; j++){
            if(matrix[i][j] % 5 === 0){
               acumulador = 1
            }
        }
    }
    return acumulador;
}
//console.log(sumarPares(matriz));


// crear una funcion que genere un nuevo array donde se guarde n todos los numeros impares de la matriz

function ejercicio4(matrix) {

    let nuevoArray = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 !== 0)
            nuevoArray.push(matrix[i][j]);
            
        }
        
    }
    return nuevoArray;
}
//console.log(ejercicio4(matriz));

// crea una funcion que retorne la multiplicaciond e todos lso elementos de la fila numero 1 


function ejercicio5(matrix) {
    let resultado = 1;

    for (let i = 0; i < matrix[1].length; i++) {
        
        resultado *= matrix[1][i];
    }
    return resultado;
}
//console.log(ejercicio5(matriz));



let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamérica",
      poblacion: 40000000
    },
  {
      nombre: "Colombia",
      continente: "Sudamérica",
      poblacion: 50372000
    },
 
    {
      nombre: "Brasil",
      continente: "Sudamérica",
      poblacion: 300000000
    },
    {
      nombre: "Etiopía",
      continente: "África",
      poblacion: 15000000
    },
    {
      nombre: "Chile",
      continente: "Sudamérica",
      poblacion: 10000000
    }
  ];


  function losPaises(array,conti,pobla) {
    let nuevoArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].continente === conti && array[i].poblacion >= pobla) {

            nuevoArray.push(array[i]);
        }
        else{
            nuevoArray;
        }
    }
    return nuevoArray;
  }

//console.log(losPaises(paises,"sudamérica",10000000));

  