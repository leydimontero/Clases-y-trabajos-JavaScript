
let persona = {
    nombre: 'juan pablo',
    edad: 29,
    esMayorDeEdad: true
}
persona.nombre = 'Ayelen';
console.log(persona);

persona.profesion = 'programador';

console.log(persona);

// ejercicio

function arregloDeObjetos(numero){
    let array1 = [];
    
    for(let i = 1; i<= numero; i++){

        let obj = {
            valor : i
        }
        array1.push(obj);
    }
    return array1;
}
console.log(arregloDeObjetos(3));


let personas = [
    {
        nombre: 'Laura',
        edad: 36
    },
    {
        nombre: 'Raul',
        edad: 25
    }
    
]
let eduardo = {
    nombre : 'Eduardo',
    edad: 78
}

personas.push(eduardo);
console.log(personas);

