let botonMenu = document.getElementById("btnMenu");
let resultadoMenu = document.getElementById("resultadoMenu");

botonMenu.addEventListener("click", function () {

    let opcion;

    resultadoMenu.innerHTML = "";

    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Saludar\n" +
            "2. Despedirse\n" +
            "3. Salir"
        );

        switch (opcion) {
            case "1":
                resultadoMenu.innerHTML += "Hola 👋<br>";
                break;
            case "2":
                resultadoMenu.innerHTML += "Adiós 👋<br>";
                break;
            case "3":
                resultadoMenu.innerHTML += "Saliendo del programa...<br>";
                break;
            default:
                alert("Opción no válida");
        }

    } while (opcion !== "3");

});