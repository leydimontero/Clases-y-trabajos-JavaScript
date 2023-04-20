// ciclos for 

//while
let i = 1;

while(i <= 4){
    console.log(i);
    i++;
}
//do
let f = 5;
do{
    console.log(f);
    f++;
}
while(f<=15)

//for



for(let i = 1; i<=15; i+=2){
    console.log(i);
}

for(let i = 0; i<=5; i++){
    console.log('Joaquin');
}

function loro (elTexto){
    console.log('papa');
}

for(let repetir = 1; repetir <= 5; repetir++){
    let contador = repetir;
    loro(contador);
}

function noParesDeContarImparesHasta(numero){
    let conteo;
    for (let i = 0; i <= numero; i++) {
    if ((i % 2) !== 0) {
        conteo = i;
    }
}
return conteo;
}
console.log(noParesDeContarImparesHasta(180))

// let lenguaje = "javascript";

// if(lenguaje === "javascript"){
//     lenguaje = "Estoy aprendiendo"
//     }
// else{
//     lenguaje = "lo aprenderé más adelante"
// }
// return console.log(lenguaje);

let lenguaje = "javascript";

if(lenguaje === "java"){
     console.log("Estoy aprendiendo")
    }
else{
     console.log("lo aprenderé más adelante")
}