validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    let provincias=obtenerProvincia(placa);

    if(erroresEstructura != false){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
    }
    if(provincias != null){
        mostrarTexto("lblProvincias",provincias);
    }
    
}
