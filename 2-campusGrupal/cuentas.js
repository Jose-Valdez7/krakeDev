cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
   let cmpTabla=document.getElementById("tablaCuentas")
   let contenidoTabla="<table><tr>"+"<th>NUMERO CUENTA</th>"+
   "<th>NOMBRE</th>"+"<th>SALDO</th>"+"</tr>"
   let cuentraEncontrada;
   for(let i=0;i<cuentas.length;i++){
        cuentraEncontrada=cuentas[i];
        contenidoTabla+="<tr><td>"+cuentraEncontrada.numeroCuenta+"</td>"+
        "<td>"+cuentraEncontrada.nombre+" "+cuentraEncontrada.apellido+"</td>"+
        "<td>"+cuentraEncontrada.saldo+"</td></tr>";
   }
   contenidoTabla+="</table>";
   cmpTabla.innerHTML=contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
let elementoCuenta;
let nuevaCuentas=null;
for(let i=0;i<cuentas.length;i++){
    elementoCuenta=cuentas[i];
    if(elementoCuenta.numeroCuenta==numeroCuenta){
        nuevaCuentas=elementoCuenta;
        break;
    }
}
return nuevaCuentas;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
let cuentaN=buscarCuenta(cuenta.numeroCuenta);
if(cuentaN==null){
    cuentas.push(cuenta);
    alert("CUENTA AGREGADA");
}else{
    alert("CUENTA EXISTENTE");
}
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
let numCuenta=recuperarTexto("txtNumCuenta");
let nombre=recuperarTexto("txtNombre");
let saldo=recuperarFloat("txtSaldo");
let cuentaN={};
cuentaN.numeroCuenta=numCuenta;
cuentaN.nombre=nombre;
cuentaN.saldo=saldo;
agregarCuenta(cuentaN);
mostrarCuentas();
}
