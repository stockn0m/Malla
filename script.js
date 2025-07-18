const ramos = {
  comun: [
    { nombre: "Aplicaciones de Manejo de Datos", codigo: "amd", abre: ["estadistica1", "tsi"] },
    { nombre: "Gestión y Empresa", codigo: "gyemp", abre: ["personas", "contabilidad", "marketing"] },
    { nombre: "Métodos Matemáticos I", codigo: "mm1", abre: ["mm2", "estadistica1"] },
    { nombre: "Introducción a la Economía", codigo: "eco", abre: ["micro", "macro"] },
    { nombre: "Inglés", codigo: "ing0", abre: ["ing1"] },
    { nombre: "Introducción a la Gestión de Personas", codigo: "personas", requiere: ["gyemp"], abre: ["tsi"] },
    { nombre: "Métodos Matemáticos II", codigo: "mm2", requiere: ["mm1"], abre: ["mm3", "estadistica2", "finanzas", "macro"] },
    { nombre: "Contabilidad", codigo: "contabilidad", requiere: ["gyemp"], abre: ["finanzas"] },
    { nombre: "Introducción a la Microeconomía", codigo: "micro", requiere: ["eco"], abre: ["ecoaplicada"] },
    { nombre: "Inglés I", codigo: "ing1", abre: ["ing2"] },
    { nombre: "Introducción al Pensamiento Político", codigo: "politico" },
    { nombre: "Introducción al Marketing", codigo: "marketing", requiere: ["gyemp"] },
    { nombre: "Estadística I", codigo: "estadistica1", requiere: ["mm1", "amd"], abre: ["estadistica2", "finanzas"] },
    { nombre: "Métodos Matemáticos III", codigo: "mm3", requiere: ["mm2"], abre: ["mm4"] },
    { nombre: "Introducción a la Macroeconomía", codigo: "macro", requiere: ["eco", "mm2"], abre: ["ecoaplicada"] },
    { nombre: "Inglés II", codigo: "ing2", abre: ["ing3"] },
    { nombre: "Comunicación I", codigo: "com1" },
    { nombre: "Tecnología y Sistemas de Información", codigo: "tsi", requiere: ["amd", "personas"] },
    { nombre: "Estadística II", codigo: "estadistica2", requiere: ["estadistica1", "mm3"] },
    { nombre: "Métodos Matemáticos IV", codigo: "mm4", requiere: ["mm3"] },
    { nombre: "Introducción a las Finanzas", codigo: "finanzas", requiere: ["contabilidad", "mm3", "estadistica1"] },
    { nombre: "Economía Aplicada", codigo: "ecoaplicada", requiere: ["micro", "macro"] },
    { nombre: "Inglés III", codigo: "ing3", abre: ["ing4"] }
  ],
  economia: [
    { nombre: "Métodos Cuantitativos I", codigo: "mq1", requiere: ["estadistica2"], abre: ["mq2", "macro3", "micro3"] },
    { nombre: "Macroeconomía I", codigo: "macro1", requiere: ["macro", "ecoaplicada"], abre: ["macro2"] },
    { nombre: "Microeconomía I", codigo: "micro1", requiere: ["micro", "ecoaplicada"], abre: ["micro2"] },
    { nombre: "Historia Económica", codigo: "historia", requiere: ["macro", "micro"] },
    { nombre: "Inglés IV", codigo: "ing4" },
    { nombre: "Comunicación II", codigo: "com2", requiere: ["com1"], abre: ["tpp"] },
    { nombre: "Electivo Negocios", codigo: "electivoeco" },
    { nombre: "Métodos Cuantitativos II", codigo: "mq2", requiere: ["mq1"] },
    { nombre: "Macroeconomía II", codigo: "macro2", requiere: ["macro1"], abre: ["macro3", "macro4"] },
    { nombre: "Microeconomía II", codigo: "micro2", requiere: ["micro1"], abre: ["micro3", "micro4"] },
    { nombre: "Taller de Política Pública", codigo: "tpp", requiere: ["com2", "ecoaplicada", "tsi"], abre: ["macro4", "micro4"] },
    { nombre: "Libre I", codigo: "libre1" },
    { nombre: "Taller Práctico I", codigo: "tp1" },
    { nombre: "Taller Práctico II", codigo: "tp2" },
    { nombre: "Macroeconomía III", codigo: "macro3", requiere: ["mq1", "macro2"] },
    { nombre: "Microeconomía III", codigo: "micro3", requiere: ["mq1", "micro2"] },
    { nombre: "Electivo Social II", codigo: "social2" },
    { nombre: "Libre II", codigo: "libre2" },
    { nombre: "Electivo Profundización I", codigo: "profe1" },
    { nombre: "Electivo Profundización II", codigo: "profe2" },
    { nombre: "Electivo Profundización III", codigo: "profe3" },
    { nombre: "Macroeconomía IV", codigo: "macro4", requiere: ["macro2", "tpp"] },
    { nombre: "Microeconomía IV", codigo: "micro4", requiere: ["micro2", "tpp"] }
  ],
  administracion: [
    { nombre: "Gestión de Personas I", codigo: "gp1", requiere: ["personas", "tsi"], abre: ["gp2", "negocios3"] },
    { nombre: "Métodos Cuantitativos I", codigo: "mq1a", requiere: ["mm4", "estadistica2", "tsi"], abre: ["marketing1"] },
    { nombre: "Contabilidad Empresarial I", codigo: "ce1", requiere: ["contabilidad"], abre: ["finanzas1", "ce2", "finanzas2"] },
    { nombre: "Economía para los Negocios", codigo: "ecoemp", requiere: ["finanzas", "ecoaplicada"], abre: ["negocios3"] },
    { nombre: "Inglés IV", codigo: "ing4" },
    { nombre: "Comunicación II", codigo: "com2", requiere: ["com1"] },
    { nombre: "Marketing I", codigo: "marketing1", requiere: ["mq1a", "marketing"], abre: ["marketing2"] },
    { nombre: "Taller de Negocios", codigo: "tn", requiere: ["personas", "contabilidad", "tsi"], abre: ["negocios3"] },
    { nombre: "Negocios I", codigo: "neg1", requiere: ["marketing", "finanzas", "ing4"], abre: ["negocios3"] },
    { nombre: "Finanzas I", codigo: "finanzas1", requiere: ["finanzas", "ce1"], abre: ["negocios3", "finanzas2"] },
    { nombre: "Contabilidad Empresarial II", codigo: "ce2", requiere: ["ce1"], abre: ["finanzas2"] },
    { nombre: "Electivo Social I", codigo: "social1" },
    { nombre: "Libre I", codigo: "libre1" },
    { nombre: "Taller Práctico I", codigo: "tp1" },
    { nombre: "Taller Práctico II", codigo: "tp2" },
    { nombre: "Negocios II", codigo: "neg2", requiere: ["marketing", "finanzas"], abre: ["negocios3"] },
    { nombre: "Libre II", codigo: "libre2" },
    { nombre: "Electivo Profundización I", codigo: "profe1" },
    { nombre: "Electivo Profundización II", codigo: "profe2" },
    { nombre: "Libre III", codigo: "libre3" },
    { nombre: "Finanzas II", codigo: "finanzas2", requiere: ["finanzas1", "ce2", "ce1"] },
    { nombre: "Negocios III", codigo: "negocios3" },
    { nombre: "Marketing II", codigo: "marketing2", requiere: ["marketing1"] },
    { nombre: "Gestión de Personas II", codigo: "gp2", requiere: ["gp1"] }
  ]
};

const mallaContenedor = document.getElementById("malla");
const radios = document.querySelectorAll("input[name='mencion']");
let ramosAprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

function crearMalla(tipo) {
  mallaContenedor.innerHTML = "";
  const lista = [...ramos.comun, ...(ramos[tipo] || [])];

  lista.forEach(ramo => {
    const div = document.createElement("div");
    div.textContent = ramo.nombre;
    div.classList.add("ramo");

    if (ramosAprobados.includes(ramo.codigo)) {
      div.classList.add("aprobado");
    } else if (!ramo.requiere || ramo.requiere.every(req => ramosAprobados.includes(req))) {
      div.classList.add("desbloqueado");
    }

    div.addEventListener("click", () => {
      if (!ramosAprobados.includes(ramo.codigo)) {
        ramosAprobados.push(ramo.codigo);
      } else {
        ramosAprobados = ramosAprobados.filter(c => c !== ramo.codigo);
      }
      localStorage.setItem("ramosAprobados", JSON.stringify(ramosAprobados));
      crearMalla(tipo);
    });

    mallaContenedor.appendChild(div);
  });
}

radios.forEach(radio => {
  radio.addEventListener("change", () => crearMalla(radio.value));
});

// Cargar inicial
const seleccion = document.querySelector("input[name='mencion']:checked");
crearMalla(seleccion.value);
