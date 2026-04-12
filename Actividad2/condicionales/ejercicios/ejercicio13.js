let botonFiltro = document.getElementById("btnFiltro");
let resultadoFiltro = document.getElementById("resultadoFiltro");

botonFiltro.addEventListener("click", function () {

    let numero;

    resultadoFiltro.innerHTML = "Números ingresados: <br>";

    do {
        numero = parseFloat(prompt("Ingrese un número (negativo para salir):"));

        if (isNaN(numero)) {
            alert("Ingrese un número válido");
        } else if (numero >= 0) {
            resultadoFiltro.innerHTML += numero + "<br>";
        }

    } while (numero >= 0);

    resultadoFiltro.innerHTML += "Se ingresó un número negativo. Fin del programa.";
});