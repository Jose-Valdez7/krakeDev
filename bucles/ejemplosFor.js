mostrarNumeros=function(){
    console.log("antes del for");
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.log("despues del for");
}
probar=function(){
    for (let i=5;i<=40;i+=5){
        let imprimir=i
        console.log(imprimir);
    }
    console.log("despues del for")
}

mostrarNumeros2=function(){
    console.log("antes del for");
    for(let indice=1;indice<=5;indice++){
        console.log(indice);
    }
    console.log("despues del for");
}

mostrarPares=function(){
    console.log("antes del for");
    for(let x=2;x<=10;x+=2){
        console.log(x);
    }
    console.log("despues del for");
}

mostrarInverso=function(){
    console.log("antes del for");
    for(let i=10;i>=0;i--){
        console.log(i)
    }
    console.log("despues del for");
}

hackearNasaPelis=function(){
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("hackeando nasa "+porcentaje+"%");
    }
    console.log("La nasa ha sido hackeada XD")
}
mostrarImpares=function(){
    console.log("Antes for");
    for(let y=1;y<=21;y+=2){
        console.log(y);
    }
    console.log("Despues for");
}