//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta=""; 
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo>=65 && codigo<=90){
        return true;
    }else {
        return false;
    }
}

guardarPalabra=function(){
    let palabra= recuperarTexto("txtSecreta");
    let tieneMayusculas=false
    let extension 
    if(palabra.length!=5){
        extension =false
    }else{
        extension=true
    }
    for(let i=0;i<palabra.length;i++){
        let mayuscula=palabra.charAt(i)
        if(esMayuscula(mayuscula)==false){
            tieneMayusculas = false;
            alert("Debe ingresar una palabra de 5 letras MAYUSCULAS");
            break;
        }else {
            tieneMayusculas = true;
        }
    }

    if(extension==false){
        alert("Debe ingresar una palabra de 5 letras MAYUSCULAS")
    }
    
    if (extension==true && tieneMayusculas==true ){
        palabraSecreta=palabra;
    }
    console.log("Palabra ingresada: ",palabraSecreta);

}

mostrarLetra=function(letra,posicion){
    
    if(posicion==0){
        posicionCorrec=mostrarTexto("div0",letra);
    }else if(posicion==1){
        mostrarTexto("div1",letra);
    }else if(posicion==2){
        mostrarTexto("div2",letra);
    }else if(posicion==3){
     mostrarTexto("div3",letra);
    }else if(posicion==4){
        mostrarTexto("div4",letra);
    }
 }

    
validar=function(letraValidar){
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecreta.length;i++){
        let letraPalabraSecreta=palabraSecreta.charAt(i);
        if(letraPalabraSecreta==letraValidar){
            mostrarLetra(letraValidar,i);
            letrasEncontradas=letrasEncontradas+1;
        }
}
}

ingresarLetra=function(){
    let letra= recuperarTexto("txtLetra");
    if(esMayuscula(letra)==true){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS")
    }
    intentos=intentos+1
    for(let i=0;i<palabraSecreta.length;i++){
        let letraPalabraSecreta=palabraSecreta.charAt(i);
        if(letraPalabraSecreta==letra){
            coincidencias=coincidencias+1}
        }
    
        if(!palabraSecreta.includes(letra)){
            alert("LA LETRA NO ES PARTE DE LA PALABRA");
            errores=errores+1;
            
        }
    if(coincidencias==5){
        mostrarImagen("ahorcadoImagen","./ganador.gif");
    }else if(intentos>=10){
        mostrarImagen("ahorcadoImagen","./gameOver.gif");
    }
        mostrarAhorcado();
}

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","./ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","./ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","./ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","./ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","./ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","./ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","./ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","./ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","./ahorcado_09.png");
    }
}
