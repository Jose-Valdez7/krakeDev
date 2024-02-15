

esMayuscula=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo>=65 && codigo<=90){
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

esEspecial=function(caracter){
    let letra=caracter
   
    if(letra=="*" ||  letra=="-" || letra=="_" ){
        return true;
    }else {
        return false;
    }
}
