let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1302611340",nombre:"Angel",apellido:"Rodriguez",sueldo:800.0}
];

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
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
