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
    { name: "Radiografía", day: "Jueves", time: "13:00" },
    { name: "Radiografía", day: "Domingo", time: "13:00" },
    { name: "Tomografía", day: "Viernes", time: "14:00" }
  ]
};

// Paso 1: Selección del tipo de turno
function selectOption(option) {
  selectedOption = option;
  showStep("step2");
  document.getElementById("searchTitle").textContent =
    option === "consulta" ? "Seleccione una consulta o médico:" : "Seleccione un estudio:";
  populateDatalist();
}

// Llenar datalist con las opciones disponibles
function populateDatalist() {
  const datalist = document.getElementById("optionsList");
  datalist.innerHTML = "";

  // Crear Set para evitar repetir especialidades y médicos
  const doctorSet = new Set();
  const specialitySet = new Set();
  
  data[selectedOption].forEach((item) => {
    if (item.doctor) {
      doctorSet.add(item.doctor); // Solo agregar médicos únicos
    }
    specialitySet.add(item.name); // Agregar todas las especialidades
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

  // Verificar si la búsqueda corresponde a un médico o especialidad
  const isDoctorSearch = data[selectedOption].some(item => item.doctor === inputValue);

  if (isDoctorSearch) {
    // Si es un médico, filtrar por ese médico
    matchingItems = data[selectedOption].filter((item) => item.doctor === inputValue);
  } else {
    // Si no es un médico, asumir que es una especialidad y filtrar por la especialidad
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
  container.innerHTML = "";

  selectedItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${item.day}</h3>
      <p>Especialidad: ${item.name}</p>
      <p>Médico: ${item.doctor}</p>
      <p>Horario: ${item.time}</p>
      <button class="button" onclick="confirmTurno()">Confirmar</button>
    `;
    container.appendChild(card);
  });
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
    document.getElementById("searchInput").value = "";
  }
  showStep(stepId);
}



