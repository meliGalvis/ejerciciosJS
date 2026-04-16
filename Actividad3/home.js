let bovinos = [
    { nombre: "Lola", edad: 3, raza: "Holstein", genero: "Hembra" },
    { nombre: "ToroMax", edad: 5, raza: "Brahman", genero: "Macho" }
];

document.addEventListener("DOMContentLoaded", renderTabla);

// RENDER
function renderTabla() {
    const tabla = document.getElementById("tablaBovinos");
    tabla.innerHTML = "";

    bovinos.forEach((bovino, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${bovino.nombre}</td>
            <td>${bovino.edad}</td>
            <td>${bovino.raza}</td>
            <td>${bovino.genero}</td>
            <td class="acciones">
                <button class="editar" onclick="editarBovino(${index})">Editar</button>
                <button class="eliminar" onclick="eliminarBovino(${index})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

// CREATE
function agregarBovino() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const raza = document.getElementById("raza").value;
    const genero = document.getElementById("genero").value;

    if (!nombre || !edad || !raza || !genero) {
        alert("Completa todos los campos");
        return;
    }

    bovinos.push({ nombre, edad, raza, genero });

    limpiarFormulario();
    renderTabla();
}

// DELETE
function eliminarBovino(index) {
    bovinos.splice(index, 1);
    renderTabla();
}

// UPDATE
function editarBovino(index) {
    const bovino = bovinos[index];

    const nuevoNombre = prompt("Nombre:", bovino.nombre);
    const nuevaEdad = prompt("Edad:", bovino.edad);
    const nuevaRaza = prompt("Raza:", bovino.raza);
    const nuevoGenero = prompt("Género:", bovino.genero);

    if (nuevoNombre && nuevaEdad && nuevaRaza && nuevoGenero) {
        bovinos[index] = {
            nombre: nuevoNombre,
            edad: nuevaEdad,
            raza: nuevaRaza,
            genero: nuevoGenero
        };

        renderTabla();
    }
}

// LIMPIAR
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("raza").value = "";
    document.getElementById("genero").value = "";
}

// LOGOUT
function cerrarSesion() {
    window.location.href = "index.html";
}