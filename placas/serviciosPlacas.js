validarEstructura=function(placa){
    let hayErrrores=false;
    if(esValido0(placa,"lblError1") & esValido1(placa,"lblError2")&esValido2(placa,"lblError3")&esValido3(placa,"lblError4")
    &esValido4(placa,"lblError5")&esValido5(placa,"lblError6")&esValido6(placa,"lblError7")&esValido7(placa,"lblError8")
    || esValido8(placa,"lblError9")){
        return null;
    }
    else{
        return hayErrrores; 
    } 
}

esValido0=function(placa,idComponenteError){
    hayErrrores=false
    let longitud=placa.length;
    if(longitud<7 || longitud>8){
        mostrarTexto(idComponenteError,"LA PLACA DEBE TENER 7 U 8 CARACTERES");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores
}

esValido1=function(placa,idComponenteError){
    hayErrrores=false
    let mayus1=placa.charAt(0);
    let mayusPrimero=esMayuscula(mayus1);
    if(mayusPrimero == false ){
        mostrarTexto(idComponenteError,"PRIMER LETRA DEBE SER MAYUSCULA");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido2=function(placa,idComponenteError){
    hayErrrores=false
    let mayus2=placa.charAt(1);
    let mayusSegundo=esMayuscula(mayus2);
    if(mayusSegundo == false){
        mostrarTexto(idComponenteError,"SEGUNDA LETRA DEBE SER MAYUSCULA");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido3=function(placa,idComponenteError){
    hayErrrores=false
    let mayus3=placa.charAt(2);
    let mayusTercer=esMayuscula(mayus3);
    if(mayusTercer == false){
        mostrarTexto(idComponenteError,"TERCER LETRA DEBE SER MAYUSCULA");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido4=function(placa,idComponenteError){
    hayErrrores=false
    let guion=placa.charAt(3);
    let guions=esGuion(guion);
    if(guions == false){
        mostrarTexto(idComponenteError,"CUARTO CARACTER DEBE SER GUION");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido5=function(placa,idComponenteError){
    hayErrrores=false
    let num1=placa.charAt(4);
    let num01=esDigito(num1);
    if(num01 == false){
        mostrarTexto(idComponenteError,"QUINTO CARACTER DEBE SER UN NUMERO");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido6=function(placa,idComponenteError){
    hayErrrores=false
    let num2=placa.charAt(5);
    let num02=esDigito(num2);
    if(num02 == false){
        mostrarTexto(idComponenteError,"SEXTO CARACTER DEBE SER UN NUMERO");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido7=function(placa,idComponenteError){
    hayErrrores=false
    let num3=placa.charAt(6);
    let num03=esDigito(num3);
    if(num03 == false){
        mostrarTexto(idComponenteError,"SEPTIMO CARACTER DEBE SER UN NUMERO");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esValido8=function(placa,idComponenteError){
    hayErrrores=false
    let longitud=placa.length;
    if(longitud==8){
        let num4=placa.charAt(7);
        let num04=esDigito(num4);
        if(num04 == false){
            mostrarTexto(idComponenteError,"OCTAVO CARACTER DEBE SER UN NUMERO");
            hayErrrores=true;
        }
    }else {
        hayErrrores= true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}
