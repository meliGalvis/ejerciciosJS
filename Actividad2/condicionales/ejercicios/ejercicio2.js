let botonHelado = document.getElementById("btnHelado");

botonHelado.addEventListener("click", function () {

    let precio = 5;
    let topping = prompt("Ingrese el topping: Oreo, KitKat o Brownie");

    switch (topping) {
        case "Oreo":
            precio += 2;
            break;
        case "KitKat":
            precio += 3;
            break;
        case "Brownie":
            precio += 4;
            break;
        default:
            alert("Topping no válido");
            return;
    }

    alert("El precio final es: $" + precio);
});