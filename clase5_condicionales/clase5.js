
let edad = 21;

if(edad>=18){
    console.log('Es mayor de edad');
}
else if(edad === 18){
    console.log('Tiene exactamente 18 años');
}
else{
    console.log('Es menor de edad');
}

// condicion ?
(edad > 18) ?  console.log('Es mayor de edad') : console.log('Es menor de edad');

//Ejercicio//

function puedesubir(alturaPersona,acompanada){
    if((alturaPersona >= 1.40 && alturaPersona < 2) || (alturaPersona <1.40 && alturaPersona > 1.20 && acompanada) ){
        return true;
    }
    else {
        return false;
    }

}

let respuesta = puedesubir(1.30, true);
console.log(respuesta);


function puedePasar(nombre) {
    if(nombre === 'Cosme Fulanito'){
        return false;
    }
    else{
        return true;
    }
}


// estructura Switch 

let diaDeLaSemana = 'Viernes';

switch (diaDeLaSemana) {
    case 'Lunes':
        console.log('Buen comienzo de semana ! ');
        
    break;
    case  'Miercoles' :
        console.log('Estas a mitad de semana !');   
    break;
    case 'Viernes':
        console.log('Buen fin de semana !!'); 
    break;          

    default: 
        console.log('No ha ingresado el dia esperado !!');
    
}

