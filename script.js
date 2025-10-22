const bienvenida = document.getElementById("bienvenida");
const usuarioEmail = localStorage.getItem("usuarioEmail");

bienvenida.textContent = usuarioEmail ? "Bienvenido, " + usuarioEmail : "Bienvenido, Invitado";
