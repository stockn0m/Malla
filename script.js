const ramosComun = {
  1: { // Año 1
    1: [
      { nombre: "Aplicaciones de Manejo de Datos", codigo: "amd", abre: ["estadistica1", "tsi"] },
      { nombre: "Gestión y Empresa", codigo: "gyemp", abre: ["personas", "contabilidad", "marketing"] },
      { nombre: "Métodos Matemáticos I", codigo: "mm1", abre: ["mm2", "estadistica1"] },
      { nombre: "Introducción a la Economía", codigo: "eco", abre: ["micro", "macro"] },
      { nombre: "Inglés", codigo: "ing0", abre: ["ing1"] },
    ],
    2: [
      { nombre: "Introducción a la Gestión de Personas", codigo: "personas", requiere: ["gyemp"], abre: ["tsi"] },
      { nombre: "Métodos Matemáticos II", codigo: "mm2", requiere: ["mm1"], abre: ["mm3", "estadistica2", "finanzas", "macro"] },
      { nombre: "Contabilidad", codigo: "contabilidad", requiere: ["gyemp"], abre: ["finanzas"] },
      { nombre: "Introducción a la Microeconomía", codigo: "micro", requiere: ["eco"], abre: ["ecoaplicada"] },
      { nombre: "Inglés I", codigo: "ing1", abre: ["ing2"] },
      { nombre: "Introducción al Pensamiento Político", codigo: "politico" },
    ]
  },
  2: { // Año 2
    1: [
      { nombre: "Introducción al Marketing", codigo: "marketing", requiere: ["gyemp"] },
      { nombre: "Estadística I", codigo: "estadistica1", requiere: ["mm1", "amd"], abre: ["estadistica2", "finanzas"] },
      { nombre: "Métodos Matemáticos III", codigo: "mm3", requiere: ["mm2"], abre: ["mm4"] },
      { nombre: "Introducción a la Macroeconomía", codigo: "macro", requiere: ["eco", "mm2"], abre: ["ecoaplicada"] },
      { nombre: "Inglés II", codigo: "ing2", abre: ["ing3"] },
      { nombre: "Comunicación I", codigo: "com1" },
    ],
    2: [
      { nombre: "Tecnología y Sistemas de Información", codigo: "tsi", requiere: ["amd", "personas"] },
      { nombre: "Estadística II", codigo: "estadistica2", requiere: ["estadistica1", "mm3"] },
      { nombre: "Métodos Matemáticos IV", codigo: "mm4", requiere: ["mm3"] },
      { nombre: "Introducción a las Finanzas", codigo: "finanzas", requiere: ["contabilidad", "mm3", "estadistica1"] },
      { nombre: "Economía Aplicada", codigo: "ecoaplicada", requiere: ["micro", "macro"] },
      { nombre: "Inglés III", codigo: "ing3", abre: ["ing4"] },
    ]
  }
};

const ramosEconomia = {
  3: { // Año 3
    1: [
      { nombre: "Métodos Cuantitativos I", codigo: "mq1", requiere: ["estadistica2"], abre: ["mq2", "macro3", "micro3"] },
      { nombre: "Macroeconomía I", codigo: "macro1", requiere: ["macro", "ecoaplicada"], abre: ["macro2"] },
      { nombre: "Microeconomía I", codigo: "micro1", requiere: ["micro", "ecoaplicada"], abre: ["micro2"] },
      { nombre: "Historia Económica", codigo: "historia", requiere: ["macro", "micro"] },
      { nombre: "Inglés IV", codigo: "ing4" },
      { nombre: "Comunicación II", codigo: "com2", requiere: ["com1"], abre: ["tpp"] },
    ],
    2: [
      { nombre: "Electivo de Negocios para la Economía", codigo: "electivoeco" },
      { nombre: "Métodos Cuantitativos II", codigo: "mq2", requiere: ["mq1"] },
      { nombre: "Macroeconomía II", codigo: "macro2", requiere: ["macro1"], abre: ["macro3", "macro4"] },
      { nombre: "Microeconomía II", codigo: "micro2", requiere: ["micro1"], abre: ["micro3", "micro4"] },
      { nombre: "Taller de Política Pública", codigo: "tpp", requiere: ["com2", "ecoaplicada", "tsi"], abre: ["macro4", "micro4"] },
      { nombre: "Electivo de Entorno Social y Científico I", codigo: "social1" },
      { nombre: "Libre I", codigo: "libre1" },
    ]
  },
  4: {
    1: [
      { nombre: "Taller Práctico Profesional/Social I", codigo: "tp1" },
      { nombre: "Taller Práctico Profesional/Social II", codigo: "tp2" },
      { nombre: "Macroeconomía III", codigo: "macro3", requiere: ["mq1", "macro2"] },
      { nombre: "Microeconomía III", codigo: "micro3", requiere: ["mq1", "micro2"] },
      { nombre: "Electivo de Entorno Social Científico II", codigo: "social2" },
      { nombre: "Libre II", codigo: "libre2" },
    ],
    2: [
      { nombre: "Electivo de Profundización I", codigo: "profe1" },
      { nombre: "Electivo de Profundización II", codigo: "profe2" },
      { nombre: "Electivo de Profundización III", codigo: "profe3" },
      { nombre: "Macroeconomía IV", codigo: "macro4", requiere: ["macro2", "tpp"] },
      { nombre: "Microeconomía IV", codigo: "micro4", requiere: ["micro2", "tpp"] },
    ]
  }
};

const ramosAdministracion = {
  3: { // Año 3
    1: [
      { nombre: "Gestión de Personas I", codigo: "gp1", requiere: ["personas", "tsi"], abre: ["gp2", "negocios3"] },
      { nombre: "Métodos Cuantitativos I", codigo: "mq1a", requiere: ["mm4", "estadistica2", "tsi"], abre: ["marketing1"] },
      { nombre: "Contabilidad Empresarial I", codigo: "ce1", requiere: ["contabilidad"], abre: ["finanzas1", "ce2", "finanzas2"] },
      { nombre: "Economía para los Negocios", codigo: "ecoemp", requiere: ["finanzas", "ecoaplicada"], abre: ["negocios3"] },
      { nombre: "Inglés IV", codigo: "ing4" },
      { nombre: "Comunicación II", codigo: "com2", requiere: ["com1"] },
    ],
    2: [
      { nombre: "Marketing I", codigo: "marketing1", requiere: ["mq1a", "marketing"], abre: ["marketing2"] },
      { nombre: "Taller de Negocios", codigo: "tn", requiere: ["personas", "contabilidad", "tsi"], abre: ["negocios3"] },
      { nombre: "Negocios I", codigo: "neg1", requiere: ["marketing", "finanzas", "ing4"], abre: ["negocios3"] },
      { nombre: "Finanzas I", codigo: "finanzas1", requiere: ["finanzas", "ce1"], abre: ["negocios3", "finanzas2"] },
      { nombre: "Contabilidad Empresarial II", codigo: "ce2", requiere: ["ce1"], abre: ["finanzas2"] },
      { nombre: "Electivo de Entorno Social y Científico I", codigo: "social1" },
      { nombre: "Libre I", codigo: "libre1" },
    ]
  },
  4: {
    1: [
      { nombre: "Taller Práctico Profesional/Social I", codigo: "tp1" },
      { nombre: "Taller Práctico Profesional/Social II", codigo: "tp2" },
      { nombre: "Negocios II", codigo: "neg2", requiere: ["marketing", "finanzas"] },
      { nombre: "Electivo de Profundización I", codigo: "profe1" },
      { nombre: "Electivo de Entorno Social Científico II", codigo: "social2" },
      { nombre: "Libre II", codigo: "libre2" },
    ],
    2: [
      { nombre: "Libre III", codigo: "libre3" },
      { nombre: "Electivo de Profundización II", codigo: "profe2" },
      { nombre: "Finanzas II", codigo: "finanzas2", requiere: ["finanzas1", "ce2", "ce1"] },
      { nombre: "Negocios III", codigo: "negocios3" },
      { nombre: "Marketing II", codigo: "marketing2", requiere: ["marketing1"] },
      { nombre: "Gestión de Personas II", codigo: "gp2", requiere: ["gp1"] },
    ]
  }
};

// Para guardar ramos aprobados en localStorage
let ramosAprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

// Variables para DOM
const selectorEspecialidad = document.getElementById("selector-especialidad");
const btnEconomia = document.getElementById("btn-economia");
const btnAdministracion = document.getElementById("btn-administracion");
const mallaContenedor = document.getElementById("malla");

function puedeTomar(ramo) {
  if (!ramo.requiere || ramo.requiere.length === 0) return true;
  return ramo.requiere.every(req => ramosAprobados.includes(req));
}

function renderMalla(especialidad) {
  mallaContenedor.innerHTML = "";
  mallaContenedor.style.display = "block";
  selectorEspecialidad.style.display = "none";

  // Mostrar años 1 y 2 siempre (núcleo común)
  for (let anio = 1; anio <= 2; anio++) {
    const divAnio = document.createElement("div");
    divAnio.classList.add("anio");
    divAnio.innerHTML = `<h2>Año ${anio}</h2>`;

    for (let semestre = 1; semestre <= 2; semestre++) {
      const divSem = document.createElement("div");
      divSem.classList.add("semestre");
      divSem.innerHTML = `<h3>Semestre ${semestre}</h3>`;

      const listaRamos = ramosComun[anio][semestre];
      listaRamos.forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.classList.add("ramo");

        if (ramosAprobados.includes(ramo.codigo)) {
          divRamo.classList.add("aprobado");
        } else if (puedeTomar(ramo)) {
          divRamo.classList.add("disponible");
        } else {
          divRamo.classList.add("no-disponible");
        }

        divRamo.textContent = ramo.nombre;
        divRamo.title = `Código: ${ramo.codigo}`;

        if (divRamo.classList.contains("disponible") || divRamo.classList.contains("aprobado")) {
          divRamo.addEventListener("click", () => {
            if (ramosAprobados.includes(ramo.codigo)) {
              ramosAprobados = ramosAprobados.filter(c => c !== ramo.codigo);
            } else {
              ramosAprobados.push(ramo.codigo);
            }
            localStorage.setItem("ramosAprobados", JSON.stringify(ramosAprobados));
            renderMalla(especialidad);
          });
        }

        divSem.appendChild(divRamo);
      });

      divAnio.appendChild(divSem);
    }
    mallaContenedor.appendChild(divAnio);
  }

  // Mostrar especialidad seleccionada desde 3° año
  const ramosEspecialidad = especialidad === "economia" ? ramosEconomia : ramosAdministracion;

  for (let anio = 3; anio <= 4; anio++) {
    if (!ramosEspecialidad[anio]) continue;

    const divAnio = document.createElement("div");
    divAnio.classList.add("anio");
    divAnio.innerHTML = `<h2>Año ${anio} - Especialidad ${especialidad.charAt(0).toUpperCase() + especialidad.slice(1)}</h2>`;

    for (let semestre = 1; semestre <= 2; semestre++) {
      if (!ramosEspecialidad[anio][semestre]) continue;

      const divSem = document.createElement("div");
      divSem.classList.add("semestre");
      divSem.innerHTML = `<h3>Semestre ${semestre}</h3>`;

      ramosEspecialidad[anio][semestre].forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.classList.add("ramo");

        if (ramosAprobados.includes(ramo.codigo)) {
          divRamo.classList.add("aprobado");
        } else if (puedeTomar(ramo)) {
          divRamo.classList.add("disponible");
        } else {
          divRamo.classList.add("no-disponible");
        }

        divRamo.textContent = ramo.nombre;
        divRamo.title = `Código: ${ramo.codigo}`;

        if (divRamo.classList.contains("disponible") || divRamo.classList.contains("aprobado")) {
          divRamo.addEventListener("click", () => {
            if (ramosAprobados.includes(ramo.codigo))
