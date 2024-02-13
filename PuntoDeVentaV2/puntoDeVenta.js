calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto"); 
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    
       
    
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    if(esProductoValido(nombreProducto,"lblError1") && esPrecioValido(precioProducto,"lblError3") && esCantidadValida(cantidad,"lblError2")){
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        mostrarTexto("lblSubtotal",valorSubtotal);    
    }else{
        mostrarTexto("lblSubtotal","0.0")
    }
    
    //5. Mostrar valorSubtotal en el componente lblSubtotal

        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    if(esProductoValido(nombreProducto,"lblError1") && esPrecioValido(precioProducto,"lblError3") && esCantidadValida(cantidad,"lblError2")){
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
        mostrarTexto("lblDescuento",valorDescuento);  
    }else{
        mostrarTexto("lblDescuento","0.0")
    }
    
    //7. Mostrar el resultado en el componente lblDescuento
    
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
	//   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    if(esProductoValido(nombreProducto,"lblError1") && esPrecioValido(precioProducto,"lblError3") && esCantidadValida(cantidad,"lblError2")){
        let ivafinal=valorSubtotal-valorDescuento
        valorIVA=calcularIVA(ivafinal);
        let IVARedondeado=valorIVA.toFixed(3);
        mostrarTexto("lblValorIVA",IVARedondeado);
    }else{
        mostrarTexto("lblValorIVA","0.0")
    }
    
    
    //9. Mostrar el resultado en el componente lblValorIVA    
    
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    if(esProductoValido(nombreProducto,"lblError1") & esPrecioValido(precioProducto,"lblError3") & esCantidadValida(cantidad,"lblError2")){
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        let resultadoTotal = valorTotal.toFixed(2);
        mostrarTexto("lblTotal",resultadoTotal);    
    }else{
        mostrarTexto("lblTotal","0.0")
    }
    //11. Mostrar el resultado en el componente lblTotal
    
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 5.4
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    mostrarTexto("lblResumen","Valor a pagar por "+cantidad+" "+nombreProducto+" con "+valorDescuento+"$ de  descuento: USD "+resultadoTotal);
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
    
}   
limpiar=function(){
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","0.0");
    mostrarTextoEnCaja("txtCantidad","0");
    mostrarTextoEnCaja("txtPorcentajeDescuento","0");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido=function(producto,idComponenteError){
    let hayErrrores=false;
    let valido=producto.length;

    if(valido>10){
        mostrarTexto(idComponenteError,"NO PUEDE TENER MAS DE 10 CARACTERES");
        hayErrrores=true;
    }
    if(producto==""){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO");
        hayErrrores=true;
    }
    
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esCantidadValida=function(cantidad,idComponenteError){
    let hayErrrores=false;
    let campo=cantidad
    if(campo<0 || campo>100){
        mostrarTexto(idComponenteError,"CANTIDAD NO VALIDA");
        hayErrrores=true;
    }
    if(isNaN(cantidad)){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}

esPrecioValido=function(precio,idComponenteError){
    let hayErrrores=false;
    if(precio<0 || precio>50){
        mostrarTexto(idComponenteError,"PRECIO NO VALIDO");
        hayErrrores=true;
    }
    if(isNaN(precio)){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO");
        hayErrrores=true;
    }
    if(hayErrrores==false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrrores;
}