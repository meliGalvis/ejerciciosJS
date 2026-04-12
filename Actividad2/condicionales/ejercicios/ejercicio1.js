let boton = document.getElementById("btnEdad");


boton.addEventListener("click", function () {
    let edad = prompt("Ingrese su edad:");
    edad = Number(edad);

    if (isNaN(edad)) {
        alert("Error: Debe ingresar un número válido");
    } else {
        if (edad < 18) {
            alert("Acceso denegado");
        } else {
            alert("Bienvenido");
        }
    }
});