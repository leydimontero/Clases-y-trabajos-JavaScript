
// ANCHOR BUBBLE SORT ---> ORDENAR LOS ELEMENTOS DE UN ARREGLO

const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        edadTitular: 33,
        tipoCuenta: "sueldo",
        saldo: 5,
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        edadTitular: 27,
        tipoCuenta: "sueldo",
        saldo: 2,
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: 3,
        edadTitular: 30,
        tipoCuenta: "sueldo",
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1,
        edadTitular: 34,
        tipoCuenta: "corriente",
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 8,
        edadTitular: 25,
        tipoCuenta: "corriente",
    },
    {
        titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 10,
      edadTitular: 34,
      tipoCuenta: "sueldo",
    }
];
// j = 3
let numeros = [8, 1, 3, 7, 4] // [ 1, 3, 7, 4, 8 ]
let palabras = ["casa", "avion", "hola"]
// 8 > 1
// c > a

// {} > {} ---> JAVASCRIPT NO ENTIENDE ESTO

// {}.propiedad > {}.propiedad ---> ESTO SI SE PUEDE
// ASC o DESC

// ORDENAR LOS NUMEROS DE FORMA ASCENDENTE

function ordenar ( arr, orden ){

    // CLAVOS Y TORNILLOS ---> CAJA TEMPORAL Y GUARDO LOS CLAVOS 
    // let aux = undefined
    let aux

    for( let i = 0 ; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++){
           
            if( arr[j].titular > arr[j + 1].titular ){

                aux = arr[j] // 8
                arr[j] = arr[j + 1] // 8 = 1
                arr[j + 1] = aux // 1 = 8

            }

        }

    }

}

ordenar(arrayCuentas , "ASC")

console.log(arrayCuentas)





// ANCHOR MATRICES ---> IMPORTANTE: SABER RECORRERLAS Y ACCEDER AL ELEMENTO

let matriz = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// console.log( matriz[2][0] )
// console.log( matriz[2][1] )
// console.log( matriz[2][2] )


// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO 
// CON TODOS LOS ELEMENTOS DE LA FILA 2

function recorrerFila (mat){

    let arr = []

    for(let i = 0; i < mat[2].length; i++){

        arr.push( mat[2][i] )
         
    }

    return arr
}

let arrFilaDos = recorrerFila(matriz)

console.log(arrFilaDos)


// CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// matriz2[0][0]
// matriz2[1][0]
// matriz2[2][0]


function recorrerCol (mat){

    for (let i = 0; i < mat.length; i++) {

        mat[i][0] = "hola"

    }

}

recorrerCol(matriz2)

console.table(matriz2)

// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE MULTIPLICAR TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL


let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// matriz3[0][0]
// matriz3[1][1]
// matriz3[2][2]


function recorrerPrincipal (mat){

    let acc = 1 // 2 // 2 // 18

    for (let i = 0; i < mat.length; i++) {
        
       acc = acc * mat[i][i]

    }

    return acc

}

let resultadoPrincipal = recorrerPrincipal(matriz3)
console.log(resultadoPrincipal)


// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE 
// LA SUMA DE LA DIAGONAL SECUNDARIA

let matriz4 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// matriz4[0][2] // ---> check
// matriz4[1][1] // ---> check
// matriz4[2][0] // ---> check

function recorrerSec (mat){

    let acc = 0 // 12

    for (let i = 0; i < mat.length; i++) {
        
        acc = acc + mat[i][mat.length - 1 - i ]
        // acc += mat[i][mat.length - 1 - i ]
    }

    return acc

}

let totalSecundaria = recorrerSec(matriz4)
console.log(totalSecundaria)


// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR UN OBJETO VACIO

let matriz5 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

function recorrerMatrizCompleta (mat){

    for (let i = 0; i < mat.length; i++) { // --- LA i maneja las filas

        for (let j = 0; j < mat[i].length; j++) { // LA j maneja las columnas
           
            mat[i][j] = {}
            
        }
        
    }

}

recorrerMatrizCompleta(matriz5)

console.table(matriz5)