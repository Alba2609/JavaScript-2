'use strict'

var numero = prompt("Introduce un numero entero");
while (parseFloat(numero) != numero){
    numero = prompt("Intrduce un numeor entero:")
};486

var resultado = parImpar(numero);
document.write("El numero "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
};


