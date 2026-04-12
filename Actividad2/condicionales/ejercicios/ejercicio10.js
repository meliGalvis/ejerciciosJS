let botonMultiplos = document.getElementById("btnMultiplos");
let resultadoMultiplos = document.getElementById("resultadoMultiplos");

botonMultiplos.addEventListener("click", function () {

    resultadoMultiplos.innerHTML = "";

    // 🔹 FOR
    resultadoMultiplos.innerHTML += "FOR: ";
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            resultadoMultiplos.innerHTML += i + " ";
        }
    }

    resultadoMultiplos.innerHTML += "<br>";

    // 🔹 WHILE
    resultadoMultiplos.innerHTML += "WHILE: ";
    let j = 1;
    while (j <= 50) {
        if (j % 5 === 0) {
            resultadoMultiplos.innerHTML += j + " ";
        }
        j++;
    }

    resultadoMultiplos.innerHTML += "<br>";

    // 🔹 DO-WHILE
    resultadoMultiplos.innerHTML += "DO-WHILE: ";
    let k = 1;
    do {
        if (k % 5 === 0) {
            resultadoMultiplos.innerHTML += k + " ";
        }
        k++;
    } while (k <= 50);

});