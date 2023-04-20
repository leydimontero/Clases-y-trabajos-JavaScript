let misMascotas = [
    {
        nombre : 'Pepe',
        raza : 'Golden',
        edad : 3,
        sonido : 'Guau',
        hacerSonido : function(){
            return this.sonido + ' ' + this.sonido;
        }
    },
    {
        nombre: 'Tito',
        raza: 'Salchicha',
        edad: 8,
        sonido: 'Arrrr',
        hacerSonido: function(){
            return this.sonido + ' ' + this.sonido;
        }
    },
    {
        nombre: 'Saki',
        raza: 'Pitbul',
        edad: 16,
        sonido: 'Guauuuuuu',
        hacerSonido: function(){
            return this.sonido + ' ' + this.sonido;
        }
    }
];
//console.log(misMascotas[2].hacerSonido());
//console.log(misMascotas);

function aumentarEdad(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
         arreglo[i].edad += 1;
    }
    return arreglo;
}
//console.log(aumentarEdad(misMascotas));

function aumentarEdad2(arreglo) {
    for(let i = 0; i < arreglo.length; i++){
        if (arreglo[i].edad < 6){
            arreglo[i].edad += 1;
        }
        else if (arreglo[i].edad >= 6 && arreglo[i].edad <= 10){
            arreglo[i].edad += 2;
        }
        else {
            let mitad = arreglo[i].edad / 2;
            arreglo[i].edad += mitad;
        }
    }
    return arreglo;
}
//console.log(aumentarEdad2(misMascotas));

function generadorId (arreglo){
    for (let i= 0; i < arreglo.length; i++){
        arreglo[i].id = i + 1
    }
}

//generadorId(misMascotas);
//console.log(misMascotas);




/* 1. Obtener en un nuevo array las edades menores a 18.
2. Obtener en un nuevo array las edades mayor o igual a 18.
3. Obtener en un nuevo array las edades igual a 18.
4. Obtener el menor.
5. Obtener el mayor. 
6. Obtener el promedio de edades.
7. Incrementar en 1 todas las edades.
*/

let edades = [ 11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function CalculandoEdades (arreglo){
    
    let arrayNuevoMenorEdad = [];
    let arrayNuevoMayorEdad = [];
    let arrayNuevoIgualEdad = [];

    for (let i = 0; i < arreglo.length; i++) {

        if(arreglo[i] < 18){
            arrayNuevoMenorEdad.push(arreglo[i]);
        }
        else if (arreglo[i] > 18){
            arrayNuevoMayorEdad.push(arreglo[i]);
        }
        else if (arreglo [i] === 18){
            arrayNuevoIgualEdad.push(arreglo[i]);
        }
        
        }

        let rdoEdades = {
            menor: arrayNuevoMenorEdad,
            mayor:arrayNuevoMayorEdad,
            igual: arrayNuevoIgualEdad,
       
        }
    return rdoEdades;

    
}
// let rdoCalculoEdades = CalculandoEdades(edades);
// console.log(rdoCalculoEdades);



// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un array con las cuentas habilitadas.
// Obtener un array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.



const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
      }
    ];

    function calcularCuentas (array){
        
        let cuentasMenores = [];
        let cuentasMayores = [];
        let cuentasIguales = [];
        let titularMenor = array[0];

        for (let i = 0; i < array.length; i++) {
            if(array[i].edadTitular < 30){
                cuentasMenores.push(array[i]);
            } 
            else if (array[i].edadTitular > 30){
                cuentasMayores.push(array[i]);
            }
            else if(array[i].edadTitular === 30){
                cuentasIguales.push(array[i]);
            }
            else if (titularMenor >= array[i].edadTitular){
                titularMenor = array[i].edadTitular

            }

        }

        let calculoEdades = {
            menor : cuentasMenores,
            mayor : cuentasMayores,
            igual : cuentasIguales,
            titularJoven : titularMenor 
        }
        return calculoEdades;
    }

    let rdoCuentas = calcularCuentas(arrayCuentas);
    console.log(rdoCuentas);

     
