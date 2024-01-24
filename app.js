let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo =10

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}

function verificarIntento(){
    let numerDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numerDeUsuario){
        asignarTextoElemento("p",`Acertaste número Secreto en ${intentos} ${(intentos=== 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        //el usuario no acertó.
        if(numerDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return;

}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value ="";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista 
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros cerrarmos
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya te sortearon todos los números posibles");

    }else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){

    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p",`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // indicar intervalo de números
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");  
}

condicionesIniciales();