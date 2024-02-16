let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNotas(notaRecuperada);
}
agregarNotas=function(nota){
    notas.push(nota);
}

ejecutarPromedio=function(){
    let total=calcularPromedio();
    cambiarTexto("txtPromedio",total);
}
calcularPromedio=function(){
    let sumasNotas=0;
    let promedio;
    for(let i=0;i<notas.length;i++){
        sumasNotas=sumasNotas+notas[i];
    }
    promedio=sumasNotas/(notas.length);
    return promedio;
}