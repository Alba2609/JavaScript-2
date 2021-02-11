'use strict'

function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

 
  if(cadena == cadena.toUpperCase()) {
    resultado += " esta formada solo por mayusculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " esta formada solo por minusculas";
  }
  else {
    resultado += " esta formada por mayusculas y minusculas";
  }

  return resultado;
}

alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
alert(info("En un lugar de la mancha..."));
alert(info("solo por minusculas o por una mezcla de amba"))

