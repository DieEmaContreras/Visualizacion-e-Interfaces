const menuToggle = document.getElementById("menu-toggle");
const opciones = document.querySelector(".opciones");

menuToggle.addEventListener("click", () => {
    opciones.classList.toggle("active");
});