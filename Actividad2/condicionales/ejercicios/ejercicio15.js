let botonBuscar = document.getElementById("btnBuscarNombre");
let resultadoBuscar = document.getElementById("resultadoBuscarNombre");

botonBuscar.addEventListener("click", function () {

    let nombres = ["Ana", "Luis", "Carlos", "Maria", "Sofia"];
    let nombreUsuario = prompt("Ingrese un nombre a buscar:");

    let encontrado = false;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowerCase() === nombreUsuario.toLowerCase()) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        resultadoBuscar.innerHTML = "El nombre SÍ está en la lista";
    } else {
        resultadoBuscar.innerHTML = "El nombre NO está en la lista";
    }

});