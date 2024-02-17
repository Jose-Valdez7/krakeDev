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