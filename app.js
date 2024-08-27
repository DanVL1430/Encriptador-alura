/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también
 devolver una palabra encriptada para su versión original. */

function validarTexto(texto) {
    var regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
    return regex.test(texto);
}

function mostrarError(mensaje) {
    alert(mensaje);
}

function encriptar() {
    let texto = document.getElementById("textoDeEntrada").value;

    if (!validarTexto(texto)) {
        mostrarError("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoDeSalida").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("textoDeEntrada").value;

    if (!validarTexto(texto)) {
        mostrarError("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoDeSalida").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("textoDeSalida").value;
    
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Se ha copiado el texto");
        })
        .catch(err => {
            alert("Error al copiar el texto: " + err);
        });
}

function limpiar() {
    document.getElementById("textoDeEntrada").value = "";
    document.getElementById("textoDeSalida").value = "";
}
