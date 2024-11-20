let selectedOption = "";
let selectedItem = null;


const data = {
  consulta: [
    { name: "Cardiología", doctor: "Dr. López(Cardiología)", day: "Lunes 11/12/24", time: "10:00" },
    { name: "Cardiología", doctor: "Dr. López(Cardiología)", day: "Lunes 11/12/24", time: "12:00" },
    { name: "Cardiología", doctor: "Dr. López(Cardiología)", day: "Martes 11/12/24", time: "10:00" },
    { name: "Cardiología", doctor: "Dra. Gutierrez(Cardiología)", day: "Miércoles 11/12/24", time: "13:00" },
    { name: "Cardiología", doctor: "Dra. Gutierrez(Cardiología)", day: "Miércoles 11/12/24", time: "13:30" },
    { name: "Cardiología", doctor: "Dra. Gutierrez(Cardiología)", day: "Miércoles 11/12/24", time: "14:00" },
    { name: "Cardiología", doctor: "Dra. Gómez(Cardiología)", day: "Domingo 11/12/24", time: "13:00" },
    { name: "Dermatología", doctor: "Dr. Paso(Dermatología)", day: "Domingo 11/12/24", time: "13:40" },
    { name: "Dermatología", doctor: "Dr. Paso(Dermatología)", day: "Lunes 11/12/24", time: "14:00" },
    { name: "Dermatología", doctor: "Dr. Paso(Dermatología)", day: "Lunes 11/12/24", time: "11:00" },
    { name: "Dermatología", doctor: "Dra. Sara(Dermatología)", day: "Martes 11/12/24", time: "11:00" },
    { name: "Dermatología", doctor: "Dra. Sara(Dermatología)", day: "Martes 11/12/24", time: "16:00" },
    { name: "Dermatología", doctor: "Dra. Sara(Dermatología)", day: "Sábado 11/12/24", time: "08:00" },
    { name: "Pediatría", doctor: "Dra. Pizzi(Pediatría)", day: "Martes 11/12/24", time: "11:00" },
    { name: "Pediatría", doctor: "Dra. Pizzi(Pediatría)", day: "Martes 11/12/24", time: "13:20" },
    { name: "Pediatría", doctor: "Dra. Pizzi(Pediatría)", day: "Martes 11/12/24", time: "14:00" },
    { name: "Pediatría", doctor: "Dr. Pérez(Pediatría)", day: "Jueves 11/12/24", time: "16:50" },
    { name: "Pediatría", doctor: "Dr. Pérez(Pediatría)", day: "Jueves 11/12/24", time: "17:30" },
    { name: "Traumatología", doctor: "Dra. Altamiro(Traumatología)", day: "Viernes 11/12/24", time: "11:00" },
    { name: "Traumatología", doctor: "Dra. Altamiro(Traumatología)", day: "Viernes 11/12/24", time: "12:00" },
    { name: "Traumatología", doctor: "Dra. Sancho(Traumatología)", day: "Viernes 11/12/24", time: "16:00" },
    { name: "Traumatología", doctor: "Dra. Sancho(Traumatología)", day: "Sabado 11/12/24", time: "18:00" }
  ],
  estudio: [
    { name: "Radiografía", day: "Jueves 11/12/24", time: "13:00" },
    { name: "Radiografía", day: "Jueves 11/12/24", time: "14:00" },
    { name: "Radiografía", day: "Viernes 12/12/24", time: "11:00" },
    { name: "Radiografía", day: "Viernes 12/12/24", time: "11:50" },
    { name: "Radiografía", day: "Viernes", time: "14:00" },
    { name: "Tomografía", day: "Lunes 16/12/24", time: "13:00" },
    { name: "Tomografía", day: "Lunes 16/12/24", time: "16:00" },
    { name: "Tomografía", day: "Viernes 11/12/24", time: "14:00" },
    { name: "Tomografía", day: "Viernes 11/12/24", time: "14:40" },
    { name: "Topografía", day: "Martes 11/12/24", time: "14:00" },
    { name: "Topografía", day: "Martes 11/12/24", time: "14:50" },
    { name: "Topografía", day: "Martes 11/12/24", time: "15:30" },
    { name: "Topografía", day: "Miércoles 12/12/24", time: "09:00" },
    { name: "Ecografía abdominal", day: "Viernes 12/12/24", time: "14:00" },
    { name: "Ecografía abdominal", day: "Viernes 12/12/24", time: "16:00" },
    { name: "Ecografía abdominal", day: "Sábado 13/12/24", time: "09:00" },
    { name: "Ecografía abdominal", day: "Viernes 12/12/24", time: "09:15" },
    { name: "Paquimetría", day: "Domingo 12/12/24", time: "14:00" },
    { name: "Paquimetría", day: "Domingo 12/12/24", time: "14:40" },
    { name: "Paquimetría", day: "Martes 14/12/24", time: "14:00" },
    { name: "Paquimetría", day: "Martes 14/12/24", time: "15:10" },
    { name: "Paquimetría", day: "Miércoles 15/12/24", time: "14:00" },
    { name: "Paquimetría", day: "Miércoles 15/12/24", time: "14:40" },
    { name: "Paquimetría", day: "Miércoles 15/12/24", time: "15:00" },
    { name: "Paquimetría", day: "Miércoles 15/12/24", time: "15:10" },
    { name: "Paquimetría", day: "Viernes 17/12/24", time: "11:00" },
    { name: "Paquimetría", day: "Viernes 17/12/24", time: "11:40" },
    { name: "Paquimetría", day: "Viernes 17/12/24", time: "13:00" },
    { name: "Paquimetría", day: "Viernes 17/12/24", time: "15:10" }
  ]
};
// Paso 1: Selección del tipo de turno
function selectOption(option) {
  selectedOption = option;
  showStep("step2");
  document.getElementById("searchTitle").textContent =
    option === "consulta" ? "Seleccione una especialidad o profesional:" : "Seleccione un estudio:";
  populateDatalist();
}

// Llenar datalist con las opciones disponibles
function populateDatalist() {
  const datalist = document.getElementById("optionsList");
  datalist.innerHTML = "";

  // Crear sets para evitar duplicados
  const doctorSet = new Set();
  const specialitySet = new Set();

  data[selectedOption].forEach((item) => {
    if (item.doctor) {
      doctorSet.add(item.doctor); // Médicos únicos
    }
    specialitySet.add(item.name); // Especialidades únicas
  });

  // Agregar especialidades al datalist
  specialitySet.forEach((speciality) => {
    const option = document.createElement("option");
    option.value = speciality;
    datalist.appendChild(option);
  });

  // Agregar médicos al datalist
  doctorSet.forEach((doctor) => {
    const option = document.createElement("option");
    option.value = doctor;
    datalist.appendChild(option);
  });
}

// Manejar selección desde el datalist
function handleDatalistSelection() {
  const inputValue = document.getElementById("searchInput").value;
  let matchingItems = [];

  // Verificar si es búsqueda por médico o especialidad
  const isDoctorSearch = data[selectedOption].some((item) => item.doctor === inputValue);

  if (isDoctorSearch) {
    matchingItems = data[selectedOption].filter((item) => item.doctor === inputValue);
  } else {
    matchingItems = data[selectedOption].filter((item) => item.name === inputValue);
  }

  // Mostrar los turnos encontrados
  if (matchingItems.length > 0) {
    showTurnos(matchingItems);
  } else {
    alert("No se encontraron turnos para esa opción.");
  }
}

// Paso 3: Mostrar turnos disponibles
function showTurnos(selectedItems) {
  selectedItem = selectedItems;
  showStep("step3");
  const container = document.getElementById("turnosContainer");
  container.innerHTML = ""; // Limpia los turnos previos

  selectedItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${item.day}</h3>
      <p>Especialidad: ${item.name}</p>
      <p>Médico: ${item.doctor || "No especificado"}</p>
      <p>Horario: ${item.time}</p>
      <div>
        <input type="checkbox" id="notify-${item.name}-${item.time}" name="notify">
        <label for="notify-${item.name}-${item.time}">Recibir notificación por email si se libera un turno antes</label>
      </div>
      <button class="button" onclick="confirmTurno()">Confirmar</button>
    `;
    container.appendChild(card);
  });

  // Mostrar el mensaje instructivo después de cargar los turnos
  showInstructive();
}

// Mostrar el mensaje instructivo
function showInstructive() {
  document.getElementById("instructiveOverlay").classList.remove("hidden");
}

// Ocultar el mensaje instructivo
function hideInstructive() {
  document.getElementById("instructiveOverlay").classList.add("hidden");
}

// Confirmar turno
function confirmTurno() {
  showStep("confirmation");
}

// Confirmar éxito
function confirmYes() {
  alert("¡Turno confirmado con éxito!");
  location.reload();
}

// Navegar entre pasos
function showStep(stepId) {
  document.querySelectorAll(".step").forEach((step) => step.classList.remove("active"));
  document.getElementById(stepId).classList.add("active");
}

// Limpiar datos al volver
function goBack(stepId) {
  if (stepId === "step2") {
    document.getElementById("searchInput").value = ""; // Limpia el input
    document.getElementById("optionsList").innerHTML = ""; // Limpia el datalist
  }
  showStep(stepId);
}

// Confirmar turno (paso al resumen)
function confirmTurno() {
  showStep("confirmation");

  // Mostrar resumen del turno seleccionado
  const summaryContainer = document.getElementById("turnoSummary");
  summaryContainer.innerHTML = `
    <p><strong>Día:</strong> ${selectedItem[0].day}</p>
    <p><strong>Horario:</strong> ${selectedItem[0].time}</p>
    <p><strong>Especialidad/Estudio:</strong> ${selectedItem[0].name}</p>
    ${
      selectedItem[0].doctor
        ? `<p><strong>Profesional:</strong> ${selectedItem[0].doctor}</p>`
        : ""
    }
    <p><strong>Sede:</strong> Mansilla 2344, Moron, Buenos Aires</p>
  `;
}

// Confirmar éxito
function confirmYes() {
  alert("¡Turno confirmado con éxito!");
  location.reload(); // Recarga la página para reiniciar el proceso
}

// Cancelar turno y volver al inicio
function cancelTurno() {
  alert("El turno ha sido cancelado.");
  showStep("step1"); // Vuelve al inicio del proceso
  // Limpia la selección previa
  selectedOption = "";
  selectedItem = null;
}

const menuToggle = document.getElementById("menu-toggle");
const opciones = document.querySelector(".opciones");

menuToggle.addEventListener("click", () => {
    opciones.classList.toggle("active");
});
