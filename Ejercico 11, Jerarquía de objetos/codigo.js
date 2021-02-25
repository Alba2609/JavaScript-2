'use strict'

//OBJETO PERSONA
function Persona(nombre, edad, genero){
    this.nombre=  nombre;
    this.edad=    edad;
    this.genero=  genero;
    this.metodo1= function obtDetalles(){
      document.write("Nombre: " + this.nombre + "<br>" + 
                     "Edad: " + this.edad + "<br>" + 
                     "Genero: " + this.genero + "<br>");
    }; 
  }
    var ficha1 = new Persona("Pedro","36","Masculino");
      ficha1.metodo1();
  
  //OBJETO ESTUDIANTE
  function Estudiante(curso, grupo){
    this.curso=   curso;
    this.grupo=   grupo;
    this.metodo2= function registrar(){
        document.write("Curso: " + this.curso + "<br>" + 
                       "Grupo: " + this.grupo + "<br>");
    };
  }
    var ficha2 = new Estudiante("Programacion","Alfa");
      ficha2.metodo2();
  
  //OBJETO PROFESOR
  function Profesor(asignatura, nivel){
    this.asignatura=  asignatura;
    this.nivel=       nivel;
    this.metodo3=     function asignar(){
        document.write("Asignatura: " + this.asignatura + "<br>" + 
                       "Nivel: " + this.nivel+ "<br>");
    };
  }
    var ficha3 = new Profesor("JavaScript","Basico");
      ficha3.metodo3();
  

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
