// ============================================
// ARRAY DE CURSOS
// ============================================
const cursos = [
    {
        nombre: "Fundamentos de Ciberseguridad",
        descripcion: "Protegé sistemas, redes y datos con técnicas modernas.",
        categoria: "Ciberseguridad",
        duracion: "8 semanas",
        precio: 120000,
        imagen: "./images/curso_ciber.jpg"
    },
    {
        nombre: "Introducción a la Inteligencia Artificial",
        descripcion: "Conocé los conceptos clave del machine learning.",
        categoria: "IA",
        duracion: "10 semanas",
        precio: 150000,
        imagen: "./images/curso_IA.jpg"
    },
    {
        nombre: "Desarrollo Web Full Stack",
        descripcion: "Aprendé HTML, CSS, JavaScript, PHP y MySQL desde cero.",
        categoria: "Programacion",
        duracion: "16 semanas",
        precio: 200000,
        imagen: "./images/curso_fullstack.png"
    },
    {
        nombre: "Modelos predictivos",
        descripcion: "Descubre como potenciar a tu agente virtual con algoritmos predictivos de datos y escenarios.",
        categoria: "IA",
        duracion: "12 semanas",
        precio: 180000,
        imagen: "./images/curso_predictivos.jpg"
    },
    {
        nombre: "De 0 a Experto en SAP",
        descripcion: "Conocé todo sobre este lenguaje de programación enfocado en administración empresarial y de inventarios.",
        categoria: "Programacion",
        duracion: "14 semanas",
        precio: 175000,
        imagen: "./images/curso_sap.png"
    },
    {
        nombre: "Python basico",
        descripcion: "Comienza a aprender uno de los lenguajes de programación más demandantes del mercado.",
        categoria: "Programacion",
        duracion: "6 semanas",
        precio: 90000,
        imagen: "./images/curso_python.jpg"
    },
    {
        nombre: "Fundamentos de sistemas operativos",
        descripcion: "Entiende como funcionan los sistemas operativos más populares y aprende a manejarlos como un profesional.",
        categoria: "Sistemas Operativos",
        duracion: "8 semanas",
        precio: 110000,
        imagen: "./images/curso_sis_operativos.jpg"
    },
    {
        nombre: "Desarrollo movil Nativo: Kotlin + Swift desde 0",
        descripcion: "Masteriza los lenguajes de programación móvil y lanza tu primera aplicación.",
        categoria: "Programacion",
        duracion: "18 semanas",
        precio: 220000,
        imagen: "./images/curso_kotlin_swift.jpg"
    },
    {
        nombre: "Control de versiones: Git + Github",
        descripcion: "Toma el control de tus proyectos y aprende versionamiento con Git y Github.",
        categoria: "Programacion",
        duracion: "4 semanas",
        precio: 60000,
        imagen: "./images/curso_git_github.png"
    }
];

// ============================================
// VARIABLES DE ESTADO
// ============================================
let categoriaActual = "todos";
let textoBusqueda = "";

// ============================================
// REFERENCIAS AL DOM
// ============================================
const cursosContainer = document.getElementById("cursosContainer");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const categoriaMenu = document.getElementById("categoriaMenu");

// ============================================
// FUNCION: Crear el HTML de una tarjeta
// ============================================
function crearTarjeta(curso) {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card" style="width: 25rem; margin: 0 auto;">
                <span class="badge text-bg-primary">${curso.categoria}</span>
                <div class="card-body">
                    <img src="${curso.imagen}" alt="${curso.nombre}" class="course-banner">
                    <h5 class="card-title">${curso.nombre}</h5>
                    <p class="card-text">${curso.descripcion}</p>
                    <p class="card-text"><strong>Duración:</strong> ${curso.duracion}</p>
                    <p class="card-text"><strong>Precio:</strong> ₡${curso.precio.toLocaleString("es-CR")}</p>
                    <div class="card-options">
                        <a href="#" class="btn btn-primary">Ver curso</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// FUNCION: Renderizar cursos en el contenedor
// ============================================
function renderizarCursos(listaCursos) {
    if (listaCursos.length === 0) {
        cursosContainer.innerHTML = `
            <div class="col-12">
                <p class="principal_text">No se encontraron cursos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    cursosContainer.innerHTML = listaCursos.map(curso => crearTarjeta(curso)).join("");
}

// ============================================
// FUNCION: Aplicar filtros (búsqueda + categoría)
// ============================================
function aplicarFiltros() {
    const cursosFiltrados = cursos.filter(curso => {
        const coincideCategoria = categoriaActual === "todos" || curso.categoria === categoriaActual;

        const textoLower = textoBusqueda.toLowerCase();
        const coincideBusqueda =
            curso.nombre.toLowerCase().includes(textoLower) ||
            curso.descripcion.toLowerCase().includes(textoLower);

        return coincideCategoria && coincideBusqueda;
    });

    renderizarCursos(cursosFiltrados);
}

// ============================================
// EVENTO: Búsqueda en tiempo real
// ============================================
searchInput.addEventListener("input", (e) => {
    textoBusqueda = e.target.value.trim();
    aplicarFiltros();
});

// Evitar que el form recargue la página al enviar
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    aplicarFiltros();
});

// ============================================
// EVENTO: Filtrado por categoría
// ============================================
categoriaMenu.addEventListener("click", (e) => {
    e.preventDefault();

    const item = e.target.closest(".dropdown-item");
    if (!item) return;

    categoriaActual = item.dataset.categoria;
    aplicarFiltros();
});

// ============================================
// INICIALIZACION: renderizar todos los cursos al cargar
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarCursos(cursos);
});