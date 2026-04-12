let botonReemplazo = document.getElementById("btnReemplazo");
let resultadoReemplazo = document.getElementById("resultadoReemplazo");

botonReemplazo.addEventListener("click", function () {

    let numeros = [10, 20, 30, 40, 50];

    let nuevoNumero = parseFloat(prompt("Ingrese el nuevo número:"));
    let posicion = parseInt(prompt("Ingrese la posición (0 a 4):"));

    if (isNaN(nuevoNumero) || isNaN(posicion)) {
        resultadoReemplazo.innerHTML = "Error: Datos inválidos";
        return;
    }

    if (posicion < 0 || posicion > 4) {
        resultadoReemplazo.innerHTML = "Error: Posición fuera de rango";
        return;
    }

    numeros[posicion] = nuevoNumero;

    resultadoReemplazo.innerHTML = "Array actualizado:<br>";

    for (let i = 0; i < numeros.length; i++) {
        resultadoReemplazo.innerHTML += numeros[i] + " ";
    }

});