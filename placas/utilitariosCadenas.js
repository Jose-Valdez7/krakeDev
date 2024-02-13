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

esGuion=function(caracter){
    let letra=caracter
    let codigo=letra.charCodeAt(0)
    if(codigo==45){
        return true;
    }else {
        return false;
    }
}