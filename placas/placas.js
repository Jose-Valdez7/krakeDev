validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa)
    
    if(erroresEstructura != false){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
    }
}
