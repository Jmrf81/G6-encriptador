const cajaTexto = document.querySelector(".caja-texto");
const cajaMensaje =  document.querySelector(".contenedor-mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(cajaTexto.value)
    cajaMensaje.value = textoEncriptado
    cajaTexto.value = "";
    cajaMensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let cajaEncriptado = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase() 
    
    for(let i = 0; i < cajaEncriptado.length; i++){
        if(stringEncriptado.includes(cajaEncriptado[i][0])){
            stringEncriptado =  stringEncriptado.replaceAll(cajaEncriptado[i][0], cajaEncriptado[i][1])
        }
    }
    return stringEncriptado;
    
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(cajaTexto.value)
    cajaMensaje.value = textoEncriptado
    cajaTexto.value = "";
    
}


function desencriptar(stringDesencriptado){
    let cajaEncriptado = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase() 
    
    for(let i = 0; i < cajaEncriptado.length; i++){
        if(stringDesencriptado.includes(cajaEncriptado[i][1])){
            stringDesencriptado =  stringDesencriptado.replaceAll(cajaEncriptado[i][1], cajaEncriptado[i][0])
        }
    }
    return stringDesencriptado;
    
}



function copiarTexto() {
    const textoCopiar = document.querySelector(".contenedor-mensaje");
    textoCopiar.select();
    document.execCommand("copy");
}



