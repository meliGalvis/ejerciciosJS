let botonAuto = document.getElementById("btnAuto");
let resultadoAuto = document.getElementById("resultadoAuto");

botonAuto.addEventListener("click", function () {

    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2020
    };

    let nuevoAnio = parseInt(prompt("Ingrese el nuevo año del auto:"));

    if (isNaN(nuevoAnio)) {
        resultadoAuto.innerHTML = "Error: Ingrese un año válido";
        return;
    }

    auto.anio = nuevoAnio;

    resultadoAuto.innerHTML =
        "Auto actualizado:<br>" +
        "Marca: " + auto.marca + "<br>" +
        "Modelo: " + auto.modelo + "<br>" +
        "Año: " + auto.anio;

});