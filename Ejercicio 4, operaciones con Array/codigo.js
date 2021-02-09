'use strict'

var valores = [
   true,
   5,
   false,
   "hola",
   "adios",
   2
];

var valores = [true, 5, false, "hola", "adios", 2];

var strings = valores.filter((elemento) => {
        return typeof(elemento) === 'string';
    });

var mayor;

strings.forEach( (elemento) => {
    if( mayor ){
        if ( elemento.length > mayor.length ){
            mayor = elemento;
        }
    }
    else {
        mayor = elemento;
    }
} );



document.write("El contenido se Array es : " + valores);
document.write("<br/>El elemento de texto mayor es : "+ mayor);

if(valores[1]>valores[5]){
    document.write("<br/> Condicional true o false : "+ true);
}else{
    document.write(false);
};

var suma = valores[1] + valores[5];
var resta = valores [1] - valores[5];
var multiplicacion = valores [1] * valores [5];
var division = valores [1] / valores [5];
var modulo = valores [1] % valores [5];


document.write("<br/> La suma de los dos valores numericos del Array es : " + suma + "<br/> La resta es : " + resta + "<br/> La multiplicacion es : " + multiplicacion + "<br/> La division es : " + division + "<br/> El sobrate es : " + modulo);