let botonClave = document.getElementById("btnClave");
let resultadoClave = document.getElementById("resultadoClave");

botonClave.addEventListener("click", function () {

    let clave = "";

    while (clave !== "SESAMO123") {
        clave = prompt("Ingrese la contraseña:");

        if (clave !== "SESAMO123") {
            alert("Contraseña incorrecta");
        }
    }

    resultadoClave.innerHTML = "Acceso concedido";
});