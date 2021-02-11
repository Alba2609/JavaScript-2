'use strict'

const dato = 7; // Número del que queremos calcular el factorial
let resultado = 1;
for(let i = dato; i>0; i--){ 
    resultado *= i;
}
console.log(resultado);
document.write("El factorial del nuemro 7 es : " + resultado);