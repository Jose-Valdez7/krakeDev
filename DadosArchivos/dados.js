jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje1","Es mayor a 3");
        cambiarTexto("lblMensaje2","GANASTE");
    }else{
        cambiarTexto("lblMensaje1","Es menor a 3");
        cambiarTexto("lblMensaje2","ESTAS DE MALAS");
    }
}

//crear una funcion llamada lanzar dado
// no recibe parametros
// retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

    aleatorio=Math.random();//entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
   
    valorDado=numeroEntero+1;
    
    return valorDado;
}