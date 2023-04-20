// ARRAY
let miArray = [45,5,"Hola!",13,true];
console.log(miArray[2]);
// Modificar ARRAY
miArray[3] = 50;
console.log(miArray);
let notas = [10,6,8,7,9];
if(miArray[1] === notas[1]){
    console.log('Son iguales');
}
else{
    console.log('Son distintos');
}
// Recorrer un ARRAY
for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}

//.PUSH() agrega elementos 
let colores = ['rojo','naranja','azul'];
colores.push('violeta','gris','oro');
console.log(colores);
// .POP() elimina el ultimo elemento
let series = ['mad men','the sopranos','breaking bad'];
let ultimaSerie = series.pop();
console.log(series);
console.log(ultimaSerie);
//.SHIFT() elimina el primer elemento
let nombres =['Frida','Diego','Sofia'];
let primerNombre = nombres.shift();
console.log(nombres);
console.log(primerNombre);
// .UNSHIFT() agrega uno o varios elementos al principio de un array 
let marcas = ['Audi'];
marcas.unshift('Ford','Ferrari');
console.log(marcas);
//.JOIN() une los elementos de un array 
let dias =['Lunes','Martes','Jueves'];
let separadosPorComa = dias.join();
console.log(separadosPorComa);
let separadosPorGuion = dias.join(' - ');
console.log(separadosPorGuion);
// .INDEXOF() busca el elemento dentro de un array
let frutas = ['Manzana','Pera','Fresa'];
frutas.indexOf('Fresa');//devuelve 2 el inidice del elemento 
frutas.indexOf('Banano'); // devuelve -1 no encontro
// .LASTINDEXOF() bucas el elemento dentro de un array empezando desde le final(de atras hacia delante)
let clubes = ['Racing','Boca','Lanús','Boca'];
clubes.lastIndexOf('Boca');// devuelve 3 el indice del primer elemento que encontro
clubes.lastIndexOf('River');// devuelve -1 porque no encontro el elemnto.
// .INCLUDES() bucas un elemento dentro de un array y retorna un Booleano
frutas.includes('Pera');//devuelve true
frutas.includes('Mandarina')//devuelve false 


// OBJETOS LITERALES 

//OBJETOS (PROPIEDAD Y METODOS)

let tenista = {
    nombre : 'Roger',
    apellido : 'Federer'
}
console.log(tenista.nombre);
console.log(tenista.apellido);

let tenista1 = {
    nombre: 'Rafael',
    apellido: 'Nadal',
    edad: 38,
    activo: true,
    saludar: function(){
        return '¡Hola! me llamo Rafael ' + this.apellido 
    }
}
console.log(tenista1.saludar());



