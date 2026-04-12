let botonParImpar = document.getElementById("btnParImpar");

botonParImpar.addEventListener("click", function () {

    let numero = prompt("Ingrese un número:");
    numero = Number(numero);

    if (isNaN(numero)) {
        alert("Error: Debe ingresar un número válido");
    } else {
        if (numero % 2 === 0) {
            alert("El número es PAR");
        } else {
            alert("El número es IMPAR");
        }
    }

});