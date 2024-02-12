calcularPromedioNotas=function(){
    let nota1=recuperarFloat("txtN1");
    let nota2=recuperarFloat("txtN2");
    let nota3=recuperarFloat("txtN3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let promRedondeado=promedio.toFixed(2);
    mostrarTexto("lblPromedio",promRedondeado);
    if(promedio<5 && promedio>0){
        mostrarImagen("lblImagen","./imagenes/malanota.gif");
        mostrarTexto("mensaje","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        mostrarImagen("lblImagen","./imagenes/buentrabajo.gif");
        mostrarTexto("mensaje","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10){
        mostrarImagen("lblImagen","./imagenes/exito.gif");
        mostrarTexto("mensaje","EXCELENTE");
    }else{
        mostrarImagen("lblImagen","./imagenes/fail.gif");
        mostrarTexto("mensaje","DATOS INCORRECTOS");
    }
    
    }
