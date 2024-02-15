let puntosUsuario =0
let puntosComputador =0
let resultado

jugar=function(seleccionado){
    let elemento=generarElemento();
    let imgPC=generarRuta(elemento);
    cambiarImagen("imgJuego",imgPC);
    resultado=determinarGanador(elemento,seleccionado);
    if(resultado==0){
        mostrarTexto("lblGanador","EMPATE");
    }else if(resultado==1){
        mostrarTexto("lblGanador","PERDISTE LA PARTIDA!!");
    }else if(resultado==2){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA!!");
    }
    modificarPuntos();
    validarPuntos();
}

modificarPuntos=function(){
    if(resultado == 2){
        puntosUsuario=puntosUsuario+1
        mostrarTexto("lblPuntosUsuario",puntosUsuario);
    }else if (resultado == 1){
        puntosComputador=puntosComputador+1
        mostrarTexto("lblPuntosComputador", puntosComputador);
    }
}
validarPuntos=function(){
   if(puntosUsuario>=5){
        mostrarTexto("lblMensaje","HAS GANADO EL JUEGO");
   }else if(puntosComputador>=5){
        mostrarTexto("lblMensaje","EL COMPUTADOR TE HA VENCIDO");
   }
}

limpiar=function(){
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("lblPuntosUsuario",puntosUsuario);
    mostrarTexto("lblPuntosComputador",puntosComputador);
    mostrarTexto("lblGanador","");
    mostrarTexto("lblMensaje","");
    cambiarImagen("imgJuego","");
}