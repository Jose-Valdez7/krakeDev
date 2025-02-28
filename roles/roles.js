let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1302611340",nombre:"Angel",apellido:"Rodriguez",sueldo:800.0}
];
let roles=[];

let esNuevo = false;

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajasYBtonGuardar();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    mostrarRoles();
    mostrarTotales();
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
            deshabilitarCajasYBtonGuardar();
        }
        if(esNuevo==false){
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+cedula);
            if(esNuevo==false){
                let busqueda=buscarEmpleado(cedula);
                busqueda.nombre=nombre;busqueda.apellido=apellido;busqueda.sueldo=sueldo
                alert("EMPLEADO MODIFICADO EXITOSAMENTE")
                mostrarEmpleados();
                deshabilitarCajasYBtonGuardar();}
        }
        
    }
    esNuevo=false
}

ejecutarBusqueda=function(){
    let cedula =recuperarTexto("txtBusquedaCedula");
    let busqueda=buscarEmpleado(cedula);
    if(busqueda==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",busqueda.cedula);
        mostrarTextoEnCaja("txtNombre",busqueda.nombre);
        mostrarTextoEnCaja("txtApellido",busqueda.apellido);
        mostrarTextoEnCaja("txtSueldo",busqueda.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
    }
}

limpiar=function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false
    deshabilitarCajasYBtonGuardar();
}

buscarPorRol=function(){
    let cedula =recuperarTexto("txtBusquedaCedulaRol");
    let busqueda=buscarEmpleado(cedula);
    if(busqueda==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula",busqueda.cedula);
        mostrarTexto("infoNombre",busqueda.nombre+" "+busqueda.apellido);
        mostrarTexto("infoSueldo",busqueda.sueldo);
    }
}

calcularAporteEmpleado=function(sueldoEmpleado){
    let sueldoB=(sueldoEmpleado*9.45)/100;
    return sueldoB
}

calcularValorAPagar=function(sueldoEmpleado,aporteIess,descuento){
    let total=sueldoEmpleado-aporteIess-descuento;
    return total
}

calcularRol=function(){
    let sueldo=recuperarTextoDiv("infoSueldo");
    let sueldoF=recuperarFloatDiv("infoSueldo");
    let descuento=recuperarFloat("txtDescuentos");
    let descuentoFloat= /^-?\d*(\.\d+)?$/;
    if(descuento>0 && descuento<sueldoF && descuentoFloat.test(descuento)){
        descuento=descuento
        mostrarTexto("lblErrorDescuentos","");
    }else{
        mostrarTexto("lblErrorDescuentos","Descuento entre 0 y "+sueldo);
    }
    let aporte=calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS",aporte);
    let total=calcularValorAPagar(sueldo,aporte,descuento);
    mostrarTexto("infoPago",total);
    if(total==total){
        habilitarComponente("btnGuardarRol");
    }
}

buscarRol=function(cedula){
    let elementoRol;
    let nuevoRol=null;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula){
            nuevoRol=elementoRol;
            break;
        }
    }
    return nuevoRol;  
}
agregarRol=function(rol){
let nuevoRol=buscarRol(rol.cedula);
    if(nuevoRol==null){
        roles.push(rol);
        alert("ROL AGREGADO EXITOSAMENTE");
    }else{
        alert("ERROR ROL YA EXISTE");
    }
}

calcularAporteEmpleador=function(sueldo){
    let pagoIess=(sueldo*11.15)/100;
    return pagoIess;
}

guardarRol=function(){
    let valorAPagar=recuperarFloatDiv("infoPago");
    let aporteIessEmpleado=recuperarFloatDiv("infoIESS");
    let nombre=recuperarTextoDiv("infoNombre");
    let cedula=recuperarTextoDiv("infoCedula");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteIessEmpleador=calcularAporteEmpleador(sueldo);
    let nuevoRol={};
        nuevoRol.cedula=cedula;
        nuevoRol.nombre=nombre;
        nuevoRol.sueldo=sueldo;
        nuevoRol.valorAPagar=valorAPagar;
        nuevoRol.aporteEmpleado=aporteIessEmpleado;
        nuevoRol.aporteEmpleador=aporteIessEmpleador;
    agregarRol(nuevoRol);
    deshabilitarComponente("btnGuardarRol");
}

mostrarRoles=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla="<table><tr>"+"<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th></tr>"
    let rolesEncontrados
    for(let i=0;i<roles.length;i++){
       rolesEncontrados=roles[i];
       contenidoTabla+="<tr><td>"+rolesEncontrados.cedula+"</td>"+
       "<td>"+rolesEncontrados.nombre+"</td>"+
       "<td>"+rolesEncontrados.valorAPagar+"</td>"+
       "<td>"+rolesEncontrados.aporteEmpleado+"</td>"+
       "<td>"+rolesEncontrados.aporteEmpleador+"</td>"+
       "</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    for(let i=0;i<roles.length;i++){
        let totalEmpleado1=roles[i];
        totalEmpleado+=totalEmpleado1.aporteEmpleado;
    }
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    for(let i=0;i<roles.length;i++){
        let totalEmpleador1=roles[i];
        totalEmpleador+=totalEmpleador1.aporteEmpleador;
    }
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    for(let i=0;i<roles.length;i++){
        let totalAPagar1=roles[i];
        totalAPagar+=totalAPagar1.valorAPagar;
    }
    mostrarTexto("infoTotalPago",totalAPagar);
    totalNonima=totalAPagar+totalEmpleado+totalEmpleador;
    mostrarTexto("infoTotalNomina",totalNonima);
}


