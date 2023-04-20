// // ejercio 1
// function numeros(num){
//     let cont = num;
//     for (let index = 0; index < 10; index++) {
//         cont++;
//         console.log(cont);
//     };
// };

// let num = 6;
// console.log(numeros(num));

// // ejercio 2

// for(let salta = 5; salta<=20; salta +=3){
//     console.log(salta);
// }

// //ejercicio 3
// let sum = 0;
// for(let suma = 0; suma <= 100; suma++){
//     console.log(suma + ' La sumatoria es: ' + (sum = sum + suma));
// }

// //ejercicio 4

// function factorial(num){
//     let acum = 1;
//     for (let rdo = 1; rdo <= num; rdo++){
//         acum = acum * rdo;
//     }
//     return 'El factorial del número ingresado es: ' + acum;
// }
// let numero = factorial(10);
// console.log(numero);


// ejercicio promedio de notas

function promedio(nota1,nota2,nota3){
   return (nota1 + nota2 + nota3) / 3;
    
}
let promedioObtenido = promedio(10,8,9);
//console.log(promedioObtenido);

//Algoritmo para convertir una cantidad de pesos a dólares
 
function pasarConver(cantPesos,precioDolar){
    return cantPesos/precioDolar;
}
let cantDolares = pasarConver(100000,5200);
//console.log(cantDolares);

//crear un programa que clacule el salario de un empleado, si se descuenta el 20% de su salario actual 

function salarioTotal(salarioActual){
    let montoADescontar = salarioActual * 0.2;
    return salarioActual - montoADescontar;
}
let nuevoSalario = salarioTotal(1000000);
//console.log(nuevoSalario);

//hacer un programa para calcular el promediod e 3 notas si el promedio es mayor a 7 aprobado y si no desaprobado

function promedioNotas(notaA,notaB,notaC){
    let promedioEst = promedio(notaA,notaB,notaC);
    if(promedioEst > 7 ){
        return 'Aprobado'
    }
    else{
        return 'Desaprobado'
    }
}

let situacionEstudiante = promedioNotas(10,9,6);
//console.log(situacionEstudiante);

//ingresar un numero y monstrar su es numero par o impar

function parOImpar(numero){
    
    if(numero % 2 === 0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}
let rdoPar = parOImpar(10);
console.log(rdoPar);

//Elaborar un programa que simule una clave de acceso. si el usuario es: 'ADMIN' y la clave '123456' montrar el mensaje 'ACCESO PERMITIDO'

function acceso (usuario,clave){
    if(usuario === 'ADMIN' && clave === '123456'){
        return 'ACCESO PERMITIDO'
    }
    else{
        return 'ACCESO DENEGADO'
    }
}
let rdoAcceso = acceso('ADMIN','2436467');
//console.log(rdoAcceso);

//Elaborar una programa que permita ingresa un numero entero del 1 al 12 y muestre la tabla de multiplicar de dicho numero

function tablaMultiplicar(num){
    if(num>=1 && num <= 12){
        for(let i = 1; i <= 10; i++){
            console.log(num + ' * ' + i + ' = ' + num*i);
        }
    }
    else{
        console.log('Ha ingresado un numero erroneo');
    }
}
//tablaMultiplicar(5);

//Elaborar un programa que muestre la cantidad de numeros pares e impares entre dos numeros

function cantPareseImpares(num1,num2) {
    let pares = 0;
    let impares = 0;
    for(let i =1; i <=num2; i++){
        if(i % 2 === 0){
            
        }
        else{
            impares++;
        }
    }
    return 'La cantidad de pares es de: ' + pares + ' y la cantidad de impares es de: ' + impares;
}
let rdoCant = cantPareseImpares(4,6);
console.log(rdoCant);