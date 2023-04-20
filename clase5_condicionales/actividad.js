


let edad = 21

if(edad < 0) {
console.log( "Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad === 21){
console.log("Bienvenido por estar en tu mayoria de edad")
}
else if(edad % 2 !== 0){
    console.log("¿Sabías que tu edad es impar?");
}

//local de sandwiches ejercicio playground

let sandwichesBase;

function precio(sandBase,tipoDePan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
     
    let precioTotal = 0;
    if(sandBase === 'pollo'){
        precioTotal = 150;
    }
    else if(sandBase === 'carne'){
        precioTotal = 200;
    }
    else{
        precioTotal = 100;
    }
    switch (tipoDePan) {
        case 'blanco':
            precioTotal += 50;
        break;
        case 'negro':
            precioTotal += 60;
        break;
        case 's/gluten':
            precioTotal += 75;
        break;    
        default:
            console.log('No tenemos este pan!!');
            break;
    }
    if(queso === true){
        precioTotal += 20;
    }
    else if(tomate === true){
        precioTotal += 15;
    }
     else if(lechuga === true){
        precioTotal += 10;
    }
    if(cebolla === true){
        precioTotal += 15;
    }
    else if(mayonesa === true){
        precioTotal += 5;
    }
    else if(mostaza === true){
        precioTotal += 5;
    }
    return 'El total a pagar es de: ' + precioTotal;

}
console.log(precio('pollo', 'blanco', true, false, false, true, false, false));




