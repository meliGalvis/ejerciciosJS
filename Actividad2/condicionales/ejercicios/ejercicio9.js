let botonSuma = document.getElementById("btnSuma");
let resultadoSuma = document.getElementById("resultadoSuma");

botonSuma.addEventListener("click", function () {

    let N = parseInt(prompt("Ingrese un número:"));

    if (isNaN(N) || N < 1) {
        resultadoSuma.innerHTML = "Error: Ingrese un número válido mayor o igual a 1";
        return;
    }

    resultadoSuma.innerHTML = "";

    // 🔹 FOR
    let sumaFor = 0;
    for (let i = 1; i <= N; i++) {
        sumaFor += i;
    }
    resultadoSuma.innerHTML += "FOR: " + sumaFor + "<br>";

    // 🔹 WHILE
    let sumaWhile = 0;
    let j = 1;
    while (j <= N) {
        sumaWhile += j;
        j++;
    }
    resultadoSuma.innerHTML += "WHILE: " + sumaWhile + "<br>";

    // 🔹 DO-WHILE
    let sumaDoWhile = 0;
    let k = 1;
    do {
        sumaDoWhile += k;
        k++;
    } while (k <= N);
    resultadoSuma.innerHTML += "DO-WHILE: " + sumaDoWhile;

});