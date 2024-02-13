validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    let provincias=obtenerProvincia(placa);
    let tipoVehiculo=obtenerTipoVehiculo(placa);
    let picoYPlaca=obtenerDiaPicoYPlaca(placa); 

    if(erroresEstructura != false){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
    }
    if(provincias != null){
        mostrarTexto("lblProvincias",provincias);
    }
    if(tipoVehiculo != null){
        mostrarTexto("lblTipos",tipoVehiculo);
    }
    if(picoYPlaca != null){
        mostrarTexto("lblPYP",picoYPlaca);
    }

}

limpiar=function(){
    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("lblError1","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblError3","");
    mostrarTexto("lblError4","");
    mostrarTexto("lblError5","");
    mostrarTexto("lblError6","");
    mostrarTexto("lblError7","");
    mostrarTexto("lblError8","");
    mostrarTexto("lblError9","");
    mostrarTexto("lblValidacion","");
    mostrarTexto("lblProvincias","");
    mostrarTexto("lblTipos","");
    mostrarTexto("lblPYP","");
}
