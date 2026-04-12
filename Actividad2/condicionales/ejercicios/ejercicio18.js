let botonCarrito = document.getElementById("btnCarrito");
let resultadoCarrito = document.getElementById("resultadoCarrito");

botonCarrito.addEventListener("click", function () {

    let total = 0;
    let precio;

    while (true) {

        precio = parseFloat(prompt("Ingrese el precio del producto (0 para terminar):"));

        if (isNaN(precio)) {
            alert("Ingrese un valor válido");
            continue;
        }

        if (precio === 0) {
            break;
        }

        total += precio;
    }

    let totalFinal = total;

    if (total > 100) {
        totalFinal = total * 0.9; // aplica 10% descuento
    }

    resultadoCarrito.innerHTML =
        "Total sin descuento: $" + total + "<br>" +
        "Total a pagar: $" + totalFinal;
});