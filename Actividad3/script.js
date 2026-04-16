// Usuario por defecto
const defaultUser = {
    username: "admin",
    password: "1234"
};

const form = document.getElementById("loginForm");
const status = document.getElementById("loginStatus");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if (user === defaultUser.username && pass === defaultUser.password) {
        status.innerHTML = "<p style='color:green;'>Ingreso exitoso...</p>";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    } else {
        status.innerHTML = "<p style='color:red;'>Usuario o contraseña incorrectos</p>";
    }
});