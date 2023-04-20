let alicia = [10, 80, 75];
let bob = [90, 20, 25];


let concurso = {
    etapatas: [],
    ganador : '',
    encontrarGanador : function(a,b){
        let primerParticipante = 0;
        let segundoParticipante = 0;
        for (let i = 0; i < a.length; i++) {
            if(a[i] > b[i]){
            primerParticipante += 1;
            this.etapatas [i + 1 ]= ' primer participante';
            console.log(this.etapatas);
        }
         else if(a[i] <  b[i]){
            segundoParticipante += 1;
            this.etapatas [i + 1 ]= ' segundo participante';
            console.log(this.etapatas);
        }
        else {
            segundoParticipante += 1;
            this.etapatas = 'Etapas sin puntos, empate'
            console.log(this.etapatas);
        }
        
    }
    }
}

concurso.encontrarGanador(alicia,bob);


function sumaDePalabra ([a, b, c, d]){
    

    
        
}

let sumaDeNumeros = ['h','o','l','a'];
let suma = sumaDeNumeros.join('')
console.log(suma);

function reemplazoFastFast(text,busRemplazo,usarRemplazo){
    let  textoSinGuiones = text;
    textoSinGuiones.replace(busRemplazo,usarRemplazo);
    return textoSinGuiones;
}

console.log(reemplazoFastFast('Este texto es mala onda','mala','buena').replace('mala','buena')); 

