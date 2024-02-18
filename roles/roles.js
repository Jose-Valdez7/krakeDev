let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1302611340",nombre:"Angel",apellido:"Rodriguez",sueldo:800.0}
];

let esNuevo = false;

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+"<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th></tr>"
    let empleadosEncontrados
    for(let i=0;i<empleados.length;i++){
       empleadosEncontrados=empleados[i];
       contenidoTabla+="<tr><td>"+empleadosEncontrados.cedula+"</td>"+
       "<td>"+empleadosEncontrados.nombre+"</td>"+
       "<td>"+empleadosEncontrados.apellido+"</td>"+
       "<td>"+empleadosEncontrados.sueldo+"</td>"+
       "</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}

buscarEmpleado=function(cedula){
    let elementoEmpleado
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        if(elementoEmpleado.cedula==cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado=function(empleado){
    let resultado;
    resultado=buscarEmpleado(empleado.cedula);
        if(resultado==null){
            empleados.push(empleado);
            esNuevo= true;
        }else{
            esNuevo= false;
        }
}

guardar=function(){
    let cedula =recuperarTexto("txtCedula");
    let tieneDigitos=false;
    let digitos= recuperarTexto("txtCedula");
        for(let i=0;i<digitos.length;i++){
            let digito=digitos.charAt(i)
            if(esDigito(digito)==false){
                tieneDigitos = false;
                break;
            }else {
                tieneDigitos = true;
            }
        }

    let nombre =recuperarTexto("txtNombre");
    let tieneMayusculasNombre=false
    let palabraN= recuperarTexto("txtNombre");
        for(let i=0;i<palabraN.length;i++){
            let mayuscula=palabraN.charAt(i)
            if(esMayuscula(mayuscula)==false){
                tieneMayusculasNombre = false;
                break;
            }else {
                tieneMayusculasNombre = true;
            }
        }
    
    let apellido=recuperarTexto("txtApellido");
    let tieneMayusculasApellido=false
    let palabraA= recuperarTexto("txtApellido");
        for(let i=0;i<palabraA.length;i++){
            let mayuscula=palabraA.charAt(i)
            if(esMayuscula(mayuscula)==false){
                tieneMayusculasApellido = false;
                break;
            }else {
                tieneMayusculasApellido = true;
            }
        }
    
    let sueldo=recuperarFloat("txtSueldo");
    let sueldoFloat=/^-?\d*(\.\d+)?$/;
    let validarCedula;
    let validarNombre;
    let validarApellido;
    let validarSueldo;
  
    if(cedula.length!=10 || tieneDigitos==false){
        mostrarTexto("lblErrorCedula","Cedula debe tener 10 Numeros");
    }else {
        validarCedula = true
        mostrarTexto("lblErrorCedula","");
    }
    if(nombre.length<=2 || tieneMayusculasNombre==false){
        mostrarTexto("lblErrorNombre","Nombre debe estar en MAYUSCULAS y tener 3 caracteres");
    }else {
        validarNombre= true
        mostrarTexto("lblErrorNombre","");
    }
    if(apellido.length<=2 || tieneMayusculasApellido==false){
        mostrarTexto("lblErrorApellido","Apellido debe estar en MAYUSCULAS y tener 3 caracteres");
    }else {
        validarApellido= true
        mostrarTexto("lblErrorApellido","");
    }
    if(sueldo<400 || sueldo>5000 || !sueldoFloat.test(sueldo)){
        mostrarTexto("lblErrorSueldo","Sueldo un numero entre 400 y 500 USD");
    }else {
        validarSueldo= true
        mostrarTexto("lblErrorSueldo","");
    }
    if(validarCedula==true && validarNombre==true && validarApellido==true && validarSueldo==true){
        esNuevo=true;
    }else{
        esNuevo=false;
    }
    if(esNuevo==true){
        let nuevoEmpleado={};
        nuevoEmpleado.cedula=cedula;
        nuevoEmpleado.nombre=nombre;
        nuevoEmpleado.apellido=apellido;
        nuevoEmpleado.sueldo=sueldo;
        let nuevo=agregarEmpleado(nuevoEmpleado);
        if(esNuevo==true){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");
        }
        if(esNuevo==false){
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+cedula);
        }
    }
}