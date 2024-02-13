calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100
    return valorDescuento

}

calcularIVA=function(monto){
    let iva=(monto*12)/100
    return iva

}

calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad
    return subtotal
}

calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva
    return total
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento
    if(cantidad<3){
        descuento=subtotal*0
        return descuento
    }else if(cantidad>=3 && cantidad<=5){
        descuento=(subtotal*3)/100
        return descuento
    }else if(cantidad>=6 && cantidad<=11){
        descuento=(subtotal*4)/100
        return descuento
    }else if(cantidad>=12){
        descuento=(subtotal*5)/100
        return descuento
    }
}