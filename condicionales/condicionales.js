calcularTasaInteres=function(ingresoAnual){
    
    let tasa
     if(ingresoAnual<300000){
        tasa= (ingresoAnual*16)/100;
        return tasa
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa= (ingresoAnual*15)/100;
        return tasa
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa= (ingresoAnual*14)/100;
        return tasa
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa= (ingresoAnual*13)/100;
        return tasa
    }else if(ingresoAnual>=2000000){
        tasa= (ingresoAnual*12)/100;
        return tasa
    }
    
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let pago 
    if(edad>50){
        pago=((ingresos-egresos)*30)/100;
        return pago
    }else if(edad<=50){
        pago=((ingresos-egresos)*40)/100;
        return pago
    }
}

calcularDescuento=function(precio,cantidad){
    let descuento
    if(cantidad<3){
        descuento=precio*cantidad;
        return descuento
    }else if(cantidad>=3 && cantidad<=5){
        descuento=((precio*cantidad)*2)/100;
        return descuento
    }else if(cantidad>=6 && cantidad<=11){
        descuento=((precio*cantidad)*3)/100;
        return descuento
    }else if(cantidad>=12){
        descuento=((precio*cantidad)*4)/100;
        return descuento
    }
}

determinarColesterolLDL=function(nivelColesterol){
    let colesterol 
    if(nivelColesterol<100){
        colesterol= "OPTIMO";
        return colesterol
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        colesterol= "CASI OPTIMO";
        return colesterol
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        colesterol= "LIMITE RANGO NORMAL";
        return colesterol
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        colesterol= "ALTO";
        return colesterol
    }else if(nivelColesterol>=190){
        colesterol= "MUY ALTO";
        return colesterol
    }
}

validarClave=function(clave){
    let valido = clave.length;
    if(valido>=8 && valido<=16){
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

esMinuscula=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo>=97 && codigo<=122){
        return true;
    }else if(codigo==160 ||codigo==130||codigo==161|| codigo==162|| codigo==163){
        return true;
    }else {
        return false;
    }
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

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 && notaGeometria>80){
        return true;
    }else if(notaFisica>90 && notaGeometria>80) {
        return true;
    }
    else {
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 && notaFisica>notaMatematica){
        return true;
    }else if(notaFisica>90 && notaFisica>notaMatematica) {
        return true;
    }else if(notaGeometria>90 && notaFisica>notaMatematica) {
        return true;
    }
    else {
        return false;
    }
}