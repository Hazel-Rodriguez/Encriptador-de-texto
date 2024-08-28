const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesecriptado = desencriptar(textArea.value);
    mensaje.value = textoDesecriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ïmes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++){
     if(stringEncriptado.includes(matrizCodigo[i][0])) {
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
     }
    }
    return stringEncriptado;
}

function desencriptar (stringDesencriptado){
    let matrizCodigo =  [["e", "enter"], ["i", "ïmes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++){
     if(stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll (matrizCodigo[i][1], matrizCodigo[i][0])
     }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    var texto = document.querySelector(".mensaje").value;

    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado: " + texto);
    }).catch(function(error) {
        alert("Hubo un error al copiar el texto: " + error);
    });
}
