let botonDia = document.getElementById("btnDia");

botonDia.addEventListener("click", function () {

    let numero = prompt("Ingrese un número del 1 al 7:");
    numero = Number(numero);

    if (isNaN(numero)) {
        alert("Error: Debe ingresar un número válido");
        return;
    }

    switch (numero) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
        default:
            alert("Error: número fuera de rango");
    }

});