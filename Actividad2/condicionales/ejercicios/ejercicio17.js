let botonEstudiantes = document.getElementById("btnEstudiantes");
let resultadoEstudiantes = document.getElementById("resultadoEstudiantes");

botonEstudiantes.addEventListener("click", function () {

    let estudiantes = [];

    // 🔹 Pedir datos de 3 estudiantes
    for (let i = 0; i < 3; i++) {

        let nombre = prompt("Ingrese el nombre del estudiante:");
        let nota = parseFloat(prompt("Ingrese la nota del estudiante:"));

        if (isNaN(nota)) {
            alert("Nota inválida, intente de nuevo");
            i--; // repetir esa vuelta
            continue;
        }

        let estudiante = {
            nombre: nombre,
            nota: nota
        };

        estudiantes.push(estudiante);
    }

    // 🔹 Mostrar resultados
    resultadoEstudiantes.innerHTML = "Lista de estudiantes:<br>";

    for (let i = 0; i < estudiantes.length; i++) {
        resultadoEstudiantes.innerHTML +=
            (i + 1) + ". " +
            estudiantes[i].nombre +
            " - Nota: " + estudiantes[i].nota + "<br>";
    }

});