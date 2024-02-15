obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorJuego;

    aleatorio=Math.random();//entre 0 y 1
    numeroMultiplicado=aleatorio*3; 
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 3 
    valorJuego=numeroEntero+1;
    return valorJuego;
}

generarElemento=function(){
    let aleatorio;
    aleatorio=obtenerAleatorio();
    if(aleatorio==1){
        return "piedra"
    }else if(aleatorio==2){
        return "papel"
    }else if(aleatorio==3){
        return "tijera"
    }
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0; //empate
    }
    if((eleccionJugador1=="piedra" && eleccionJugador2=="tijera") || (eleccionJugador1=="papel" && eleccionJugador2=="piedra")||
     (eleccionJugador1=="tijera" && eleccionJugador2=="papel")){
        return 1;//gana jugador 1
    }
    if((eleccionJugador2=="piedra" && eleccionJugador1=="tijera") || (eleccionJugador2=="papel" && eleccionJugador1=="piedra")||
     (eleccionJugador2=="tijera" && eleccionJugador1=="papel")){
        return 2;//gana jugador 2
    }
}

generarRuta=function(nombre){
    if(nombre=="piedra"){
        let imgPiedra="./imagenes/"+nombre+".png"
        return imgPiedra
    }else if(nombre=="papel"){
        let imgPapel="./imagenes/"+nombre+".png"
        return imgPapel
    }else if(nombre=="tijera"){
        let imgTijera="./imagenes/"+nombre+".png"
        return imgTijera
    }
}