//PARCIAL PIM
// EJERCICIO NUMERO 1


function parVerdad(num,boolean) {

    
        if(num % 2 === 0 && boolean === true){
            return 'Ha pasado la condición'
        }
        else if(num % 2 !== 0 && boolean === false ){
            return 'No ha pasado la condición'
        }
        else {
            return -1;
        }
            
    }
    


let rdoParVerdad = parVerdad(4,true);
console.log(rdoParVerdad);

//EJERCICIO NUMERO 2 

function personaAdmitida (numero,booleano){

    if (numero >= 18 && booleano === true){
        
        return true;
    }
    else if (numero < 18 && booleano === true ){

        return 'Sólo puedes competir con un adulto acompañante.'
    }
    else {
        return false;
    }
}

let rdoPersonaAdmitida = personaAdmitida(28,true);
console.log(rdoPersonaAdmitida);


//EJERCICIO NUMERO 3

let libros = [
    {
        nombre : "historiasInconscientes",
        autor : "Gabriel Rolón",
        paginas: 352
    },
    {
        nombre : "operacionMasacre",
        autor : "Rodolfo Walsh",
        paginas : 236
    },
    {
        nombre   : "elAlquimista",
        autor : "Paulo Coehlo",
        paginas: 192
    },
    {
        nombre  : "elCampamento",
        autor : "Blue Jeans",
        paginas: 480
    }
]

function filtroLibros (arreglo){
    
    let nuevoArregloLibros = [];

    for (let i = 0; i < arreglo.length; i++) {
       
        if(arreglo[i].paginas >= 300){
            
            nuevoArregloLibros.push(arreglo[i])
        }
        
    }
    return nuevoArregloLibros;
}

let librosFiltrados = filtroLibros(libros);
console.log(librosFiltrados);