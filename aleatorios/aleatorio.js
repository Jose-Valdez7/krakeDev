let aleatorioNum=[];

aleatorio=function(){
    let aleatorio1=Math.random();
    let NumMax=aleatorio1*100;
    let Entero=parseInt(NumMax);
    let NumAleatorio=Entero+1;
    return NumAleatorio;
}

generarAleatorios=function(){
    let aleatorioR;
    aleatorioR=recuperarInt("txtNumero");
    if(aleatorioR>=5 && aleatorioR<=20){
        for(let i=0;i<aleatorioR;i++){
            let aleatorioT=aleatorio();
            aleatorioNum.push(aleatorioT);
            console.log(i);
        }
        mostrarResultados(aleatorioR);
    }
  
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMEROS</th></tr>";
    let miNum=arregloNumeros;
    for(let i=0;i<aleatorioNum.length;i++){
        miNum=aleatorioNum[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNum;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}