const formServicio = document.querySelector("#formServicio");

formServicio.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const email = formServicio.querySelector(".email");
  const descripcion = formServicio.querySelector(".descripcion");
  const mensaje = formServicio.querySelector(".mensaje");

  mensaje.textContent = "";

  if (!email.value.endsWith("@ceibal.edu.uy")) {
    mensaje.style.color = "red";
    mensaje.textContent = "Email inválido, no termina con el dominio correspondiente.";
    return;
  }

  if (descripcion.value.length < 10) {
    mensaje.style.color = "red";
    mensaje.textContent = "Descripción muy corta";
    return;
  }

  mensaje.style.color = "green";
  mensaje.textContent = "Solicitud enviada correctamente";
});






const formIncidencia = document.querySelector("#formIncidencia");

formIncidencia.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const email = formIncidencia.querySelector(".email");
  const descripcion = formIncidencia.querySelector(".descripcion");
  const titulo = formIncidencia.querySelector(".titulo");
  const prioridad = formIncidencia.querySelector(".prioridad");
  const mensaje = formIncidencia.querySelector(".mensaje");

  mensaje.textContent = "";

  if (!email.value.endsWith("@ceibal.edu.uy")) {
    mensaje.style.color = "red";
    mensaje.textContent = "Email inválido, no termina con el dominio correspondiente.";
    return;
  }

  if (titulo.value.length < 5) {
    mensaje.style.color = "red";
    mensaje.textContent = "Título muy corto";
    return;
  }

  if (descripcion.value.length < 10) {
    mensaje.style.color = "red";
    mensaje.textContent = "Descripción muy corta";
    return;
  }

  if (prioridad.value === "Alta" && descripcion.value.length < 20) {
    mensaje.style.color = "red";
    mensaje.textContent = "Para prioridad alta, la descripción debe ser más larga";
    return;
  }

  mensaje.style.color = "green";
  mensaje.textContent = "Incidencia registrada correctamente";
});







const formEquipo = document.querySelector("#formEquipo");

formEquipo.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const mensaje = formEquipo.querySelector(".mensaje");

  mensaje.style.color = "green";
  mensaje.textContent = "Equipo registrado correctamente";
});

