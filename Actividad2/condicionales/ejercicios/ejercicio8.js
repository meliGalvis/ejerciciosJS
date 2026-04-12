let botonCuenta = document.getElementById("btnCuenta");
let resultado = document.getElementById("resultadoCuenta");

botonCuenta.addEventListener("click", function () {

    resultado.innerHTML = ""; // limpiar

    // 🔹 FOR
    for (let i = 10; i >= 1; i--) {
        resultado.innerHTML += i + " ";
    }

    resultado.innerHTML += "<br>";

    // 🔹 WHILE
    let j = 10;
    while (j >= 1) {
        resultado.innerHTML += j + " ";
        j--;
    }

    resultado.innerHTML += "<br>";

    // 🔹 DO-WHILE
    let k = 10;
    do {
        resultado.innerHTML += k + " ";
        k--;
    } while (k >= 1);

});