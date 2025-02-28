
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}

esDigito=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo>=48 && codigo<=57){
        return true;
    }else {
        return false;
    }
}

esMayuscula=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo>=65 && codigo<=90){
        return true;
    }else {
        return false;
    }
}

deshabilitarCajasYBtonGuardar=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

recuperarTextoDiv=function(divComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(divComponente);
    valorIngresado=componente.textContent;
    return valorIngresado;
}

 recuperarFloatDiv = function(divComponente){
    let valorCaja= recuperarTextoDiv(divComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

 recuperarIntDiv = function(divComponente){
    let valorCaja= recuperarTextoDiv(divComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
 }
 