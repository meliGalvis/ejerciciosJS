let botonCompras = document.getElementById("btnCompras");
let resultadoCompras = document.getElementById("resultadoCompras");

botonCompras.addEventListener("click", function () {

    let compras = [];

    // 🔹 FOR para pedir 5 productos
    for (let i = 0; i < 5; i++) {
        let producto = prompt("Ingrese un producto:");
        compras.push(producto);
    }

    // Mostrar en HTML
    resultadoCompras.innerHTML = "Lista de compras:<br>";

    for (let i = 0; i < compras.length; i++) {
        resultadoCompras.innerHTML += (i + 1) + ". " + compras[i] + "<br>";
    }

});