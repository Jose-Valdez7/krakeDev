personas=[
    {nombre:"Marcos", edad:18},{nombre:"Roberto", edad:15},{nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},{nombre:"Benja", edad:5}
]

agregarPersona=function(){
    let nombre=recuperarTexto("txtNombre");
    let validarNombre= false
    if(nombre.length<3){
        mostrarTexto("lblErrorNombre","Nombre debe tener al menos 3 caracteres");
        validarNombre=false;
    }else{
        validarNombre=true;
        mostrarTexto("lblErrorNombre","");
    }
    let edad=recuperarInt("txtEdad");
    validarEdad=false;
    if(edad<0 || edad>100){
        mostrarTexto("lblErrorEdad","Edad entre 0 y 100");
        validarEdad=false
    }else{
        validarEdad=true;
        mostrarTexto("lblErrorEdad","");
    }
    if(validarNombre==true && validarEdad==true){
        let nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
    }
    mostrarPersonas();
}

mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+"<th>EDAD</th>"+
    "<th>NOMBRE</th></tr>";
    let personasEncontradas;
    for(let i=0;i<personas.length;i++){
        personasEncontradas=personas[i];
        contenidoTabla+="<tr><td>"+personasEncontradas.edad+"</td>"+
        "<td>"+personasEncontradas.nombre+"</td></tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

encontrarMayor=function(){
    let personaMayor={nombre:"Marcos",edad:18};
    let elementopersona;
    for(let i=1;i<personas.length;i++){
        elementopersona=personas[i];
        console.log(elementopersona);
        if(personaMayor.edad<elementopersona.edad){
            personaMayor=elementopersona;

        }else{
            personaMayor;
        }
    }
    return personaMayor
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("lblResultado","Nombre: "+mayor.nombre+" "+mayor.edad+" a;os");
}

encontrarMenor=function(){
    let personaMenor={nombre:"Marcos",edad:18};
    let elementopersona;
    for(i=1;i<personas.length;i++){
        elementopersona=personas[i];
        console.log(elementopersona);
        if(personaMenor.edad>elementopersona.edad){
            personaMenor=elementopersona;
        }else{
            personaMenor;
        }
    }
    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("lblResultado2","Nombre: "+menor.nombre+" "+menor.edad+" a;os");
}