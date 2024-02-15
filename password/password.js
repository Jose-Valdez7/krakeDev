let errores ="";

validarPassword=function(password){

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial= false;
    if (password.length<8 || password.length>16){
        errores =errores+ " La contrasena debe tener entre 8 y 16 caracteres\n";
    }
    for(let i=0;i<password.length;i++){
        let mayuscula=password.charAt(i);
        if(esMayuscula(mayuscula)==true){
            tieneMayuscula=true;
            break;
        }
    }
    if(tieneMayuscula==false){
        errores=errores+" La contrasena debe contener al menos una letra Mayuscula\n"
    }
    

    for(let i=0;i<password.length;i++){
        let digito=password.charAt(i);
        if(esDigito(digito)==true){
            tieneDigito=true;
            break;
        }
  
    }
    if(tieneDigito==false){
        errores=errores+" La contrasena debe contener al menos un Digito\n"
    }
    
    for(let i=0;i<password.length;i++){
        let especial=password.charAt(i);
        if(esEspecial(especial)==true){
            tieneEspecial=true;
            break;
        }
        
    }
    
    if(tieneEspecial==false){
        errores=errores+" La contrasena debe contener al menos un Caracter Especial\n"
    }

    return errores;
    
}

ejecutarValidacion=function(){
    let password=recuperarTexto("txtPassword");
    let validacion=validarPassword(password);
    if(validacion==""){
        mostrarTexto("txtValidacion","Pasword Correcto");
    }else {
        mostrarTexto("txtValidacion",validacion);
    }
}
