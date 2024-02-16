//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta=""; 

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
}