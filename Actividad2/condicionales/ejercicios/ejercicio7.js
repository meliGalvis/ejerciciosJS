let botonMoneda = document.getElementById("btnMoneda");

botonMoneda.addEventListener("click", function () {

    let dolares = parseFloat(prompt("Ingrese el valor en dólares:"));
    let moneda = prompt("¿A qué moneda desea convertir? (euros, pesos, soles)");

    if (isNaN(dolares)) {
        alert("Error: Debe ingresar un valor numérico válido");
        return;
    }

    moneda = moneda.toLowerCase();

    let resultado;

    switch (moneda) {
        case "euros":
            resultado = dolares * 0.85; // euros aprox
            break;
        case "pesos":
            resultado = dolares * 4000; // pesos colombianos aprox
            break;
        case "soles":
            resultado = dolares * 3.7; // soles peruanos aprox
            break;
        default:
            alert("Moneda no válida");
            return;
    }

    alert("El valor convertido es: " + resultado);
});