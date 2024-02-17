probarAtributos=function(){
    let persona ={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        vivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.vivo==false){
        console.log("No esta vivo");
    }else{
        console.log("Esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre: "PC",
        precio: 700.50,
        stock: 15
    }
    let producto2={
        nombre: "Mouse",
        precio: 20.99,
        stock: 50
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("Stock del Producto 1 es mayor");
    }else if(producto1.stock<producto2.stock){
        console.log("Stock del Producto 2 es mayor");
    }else if (producto1.stock==producto2.stock){
        console.log("Stock de ambos productos es igual");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero: "405321",
        saldo: 0.0,
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula: "1722813343",//forma 1 de agregar atributos
        nombre: "Juan"
    }
    let cliente1={};//forma 2 de agregar atributos por JS
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="123445677";
}
probarIncrementoSaldo=function(){
    let cta={numero:"2345",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es: "+mayor.nombre);    
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if (persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}