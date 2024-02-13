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
    if(longitud!=7 && longitud!=8){
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
    if(longitud===8 && !/[0-9]/.test(placa.charAt(7))){
            mostrarTexto(idComponenteError,"OCTAVO CARACTER DEBE SER UN NUMERO");
            hayErrrores=true;
        }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}


obtenerProvincia=function(placa){
    let provincias = {
        A:"Azuay",
        B:"Bolivar",
        U:"Cañar",
        C:"Carchi",
        X:"Cotopaxi",
        H:"Chimborazo",
        O:"El Oro",
        E:"Esmeraldas",
        W:"Galapagos",
        G:"Guayas",
        I:"Imbabura",
        L:"Loja",
        R:"Los Rios",
        M:"Manabi",
        V:"Morona Santiago",
        N:"Napo",
        S:"Pastaza",
        P:"Pichincha",
        K:"Sucumbios",
        Q:"Orellana",
        T:"Tungurahua",
        Z:"Zamora Chinchipe",
        Y:"Santa Elena",   
      };
    
    let letra = placa.charAt(0)
    return provincias[letra] || "null";  
}

obtenerTipoVehiculo=function(placa){
    let vehiculo = {
        A:"Vehiculo Comercial",
        Z:"Vehiculo Comercial",
        E:"Vehiculo Gubernamental",
        X:"Vehiculo de Uso Oficial",
        S:"Vehiculos del gobierno Provincial",
        M:"Vehiculos Municipales",
        O:"Vehiculo Particular", 
        B:"Vehiculo Particular", 
        C:"Vehiculo Particular",
        D:"Vehiculo Particular",
        F:"Vehiculo Particular",
        G:"Vehiculo Particular", 
        H:"Vehiculo Particular",
        I:"Vehiculo Particular",
        J:"Vehiculo Particular",
        K:"Vehiculo Particular",
        L:"Vehiculo Particular",
        N:"Vehiculo Particular",
        P:"Vehiculo Particular",
        Q:"Vehiculo Particular",
        R:"Vehiculo Particular",
        T:"Vehiculo Particular",
        U:"Vehiculo Particular",
        V:"Vehiculo Particular",
        W:"Vehiculo Particular",
        Y:"Vehiculo Particular",
    
      };
    
    let letra = placa.charAt(1)
    return vehiculo[letra] || "null";  
}

obtenerDiaPicoYPlaca=function(placa){
    let numeroFinal = {
        1:"Lunes",
        2:"Lunes",
        3:"Martes",
        4:"Martes",
        5:"Miercoles",
        6:"Miercoles",
        7:"Jueves",
        8:"Jueves",
        9:"Viernes",
        0:"Viernes",
      };
    let cadena=placa.length-1; 
    let numero = placa.charAt(cadena);
    return numeroFinal[numero] || "null";  
}