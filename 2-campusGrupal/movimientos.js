movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

cargar=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    let cuentaCaja=recuperarTexto("txtMovimientos");
    //Se barre el arreglo de movimientos
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
for(let i=0;i<movimientos.length;i++){
    let nuevaCuenta=movimientos[i];
    if(nuevaCuenta.numeroCuenta==cuentaCaja){
        movimientosCuenta.push(nuevaCuenta);
    }
}
mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
    cmpTable=document.getElementById("tablaMovimientos");
    contenidoTabla="<table><tr>"+"<th>Numero Cuenta</th>"+
    "<th>Monto</th>"+
    "<th>Tipo</th>"+"</tr>";
    let nuevoMov;
    for (let i=0;i<misMovimientos.length;i++){
        nuevoMov=misMovimientos[i];
        if(nuevoMov.tipo=="D"){
            contenidoTabla+="<tr><td>"+nuevoMov.numeroCuenta+"</td>"+
            "<td>"+nuevoMov.monto*(-1)+"</td>"+
            "<td>"+nuevoMov.tipo+"</td></tr>";
        }else if(nuevoMov.tipo=="C"){
            contenidoTabla+="<tr><td>"+nuevoMov.numeroCuenta+"</td>"+
            "<td>"+nuevoMov.monto+"</td>"+
            "<td>"+nuevoMov.tipo+"</td></tr>";
        }
    }
    contenidoTabla+="</table>"
    cmpTable.innerHTML=contenidoTabla
}




