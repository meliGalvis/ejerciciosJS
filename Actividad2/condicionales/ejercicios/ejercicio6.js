let botonNotas = document.getElementById("btnNotas");

botonNotas.addEventListener("click", function () {

    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Error: Debe ingresar notas válidas");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        alert("Aprobado. Promedio: " + promedio);
    } else {
        alert("Reprobado. Promedio: " + promedio);
    }

});