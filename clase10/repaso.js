
// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪

//Desarrollar una Función que reciba 2 números y retorne la suma de ambos


function sumar (num1, num2){

    return num1 + num2

}

let resultado = sumar(5, 12)
console.log( resultado )


/*
 Desarrollar una Función que reciba 4 números y calcular la suma total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total.

*/

function calcularTotal ( a, b, c, d ){

    let sumatoria = a + b + c + d

    if( sumatoria % 2 === 0 ){
        return sumatoria / 2
    }else{
        return sumatoria * 2
    }

}

let resultadoTotal = calcularTotal(1, 5, 6, 13)
console.log( resultadoTotal )



let edad = 2
edad = edad + 1
console.log(edad)
// CREAR UNA FUNCION QUE RECIBA UN NUMERO POR PARAMETRO Y RETORNE UN BOOLEANO 
// DEPENDIENDO SI ES MULTIPLO DE 7 O NO 

function validarSiEsMultiplo ( numero ){

    if( numero % 7 === 0 ){
        return true
    }else{
        return false
    }

}

let resultadoSiete = validarSiEsMultiplo( 22 )
console.log(resultadoSiete)


// const sumar = (a,b)=>{

// }

// sumar = ()=>{

// }








// TODO ---> Completa el siguiente objeto con el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
    nombre: "Carmen",
    notas: [8, 6, 10],
    edad: 20,
    promediar: function(){

        let sumatoria = 0 
        
        for(let i = 0; i < this.notas.length; i++){
            
            sumatoria = sumatoria +  this.notas[i]
            
        }
        
        let resultado =  sumatoria / this.notas.length
        return resultado

    }
}


estudiante.notas.push(10)

let resultadoEstudiante = estudiante.promediar()
console.log(resultadoEstudiante)

// TODO ---> Encontrar el primer elemento que cumpla con la condicion de
// haber ganado un ticket y que ademas sea mayor de edad( 18 años o mas )
// deberas retornar dicho elemento

let participantes = [
    {
        nombre: "Florencia",
        edad: 22,
        ganoTicket: false
    },
    {
        nombre: "Juan Pablo",
        edad: 17,
        ganoTicket: true
    },
    {
        nombre: "Fernando",
        edad: 31,
        ganoTicket: false
    },
    {
        nombre: "Guillermina",
        edad: 27,
        ganoTicket: true
    },
    {
        nombre: "Gabriel",
        edad: 32,
        ganoTicket: true
    }

]

function encontrarPrimerGanador ( arr ){

    for(let i = 0; i < arr.length; i++){

        if( arr[i].edad >= 18 && arr[i].ganoTicket === true ){

            return arr[i]

        }

    }

}

let participanteGanador = encontrarPrimerGanador(participantes)
console.log(participanteGanador)



let numeros = [ 1, 54, 12, 16, 15, 578, 12, 16, 243, 24, 32]

// console.log(numeros[ numeros.length - 2 ])

// TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de 
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2022 no cuentan )
// Devolver un arreglo con dichos socios

let socios = [
    {
        nombreCompleto: "Joel Perez",
        añoDeEntrada: 2018,
        cantidadAcciones: 3200
    },
    {
        nombreCompleto: "Juan Lopez",
        añoDeEntrada: 2022,
        cantidadAcciones: 4100
    },
    {
        nombreCompleto: "Carmen Lopettegi",
        añoDeEntrada: 2020,
        cantidadAcciones: 1900
    },
    {
        nombreCompleto: "Ernesto farias",
        añoDeEntrada: 2019,
        cantidadAcciones: 1300
    }
]

function filtrarSocios ( arr ){

    let arrFiltrado = []
    let noFiltrados = []

    for(let i = 0; i < arr.length; i++){

        if( arr[i].cantidadAcciones >= 1500 && arr[i].añoDeEntrada < 2022){

            arrFiltrado.push( arr[i] )

        }else{
            noFiltrados.push(arr[i])
        }

    }

    let sociosSeparados = {
        primeros: arrFiltrado,
        segundos: noFiltrados
    }
    return sociosSeparados

}

let sociosFiltrados = filtrarSocios(socios)

console.log(sociosFiltrados)

// ENCONTRAR EL NUMERO MAYOR Y DEVOLVERLO
let numeros2 = [ 54, 125, 12, 243, 1] 

function encontrarMayor (arreglo){

    let x = arreglo[0] // 243

    for (let i = 0; i < arreglo.length; i++) {

        if( x < arreglo[i] ){
            x = arreglo[i]
        }
        
    }

    return x

}

let mayor = encontrarMayor(numeros2)
console.log(mayor)