// Seleccionar elementos
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

// Abrir modal al hacer clic en el disparador
modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
        }
    });
});

// Cerrar modal al hacer clic en el botón de cierre
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// Cerrar modal al hacer clic fuera del contenido
modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
