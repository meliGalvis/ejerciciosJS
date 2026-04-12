let botonPotencias = document.getElementById("btnPotencias");
let resultadoPotencias = document.getElementById("resultadoPotencias");

botonPotencias.addEventListener("click", function () {

    let numero = parseFloat(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        resultadoPotencias.innerHTML = "Error: Ingrese un número válido";
        return;
    }

    resultadoPotencias.innerHTML = "";

    // 🔹 FOR
    resultadoPotencias.innerHTML += "FOR:<br>";
    for (let i = 1; i <= 5; i++) {
        resultadoPotencias.innerHTML += numero + "^" + i + " = " + (numero ** i) + "<br>";
    }

    // 🔹 WHILE
    resultadoPotencias.innerHTML += "<br>WHILE:<br>";
    let j = 1;
    while (j <= 5) {
        resultadoPotencias.innerHTML += numero + "^" + j + " = " + (numero ** j) + "<br>";
        j++;
    }

    // 🔹 DO-WHILE
    resultadoPotencias.innerHTML += "<br>DO-WHILE:<br>";
    let k = 1;
    do {
        resultadoPotencias.innerHTML += numero + "^" + k + " = " + (numero ** k) + "<br>";
        k++;
    } while (k <= 5);

});