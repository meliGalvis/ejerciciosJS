let botonCalculadora = document.getElementById("btnCalculadora");

botonCalculadora.addEventListener("click", function () {

    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let operacion = prompt("Ingrese la operación: suma, resta, mult, div");

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar números válidos");
        return;
    }

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "mult":
            resultado = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                alert("Error: No se puede dividir entre 0");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    alert("El resultado es: " + resultado);
});