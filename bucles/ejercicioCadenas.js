ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadenas(mensaje);
}

recorrerCadena = function(cadena){
    //0123
    //Juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }
}

invertirCadenas=function(cadena){
    let letra;
    let resultado="";

    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        letra=cadena.charAt(posicion);
        resultado=resultado+letra;
        cambiarTexto("txtResultado",resultado);
    }
  
    

}