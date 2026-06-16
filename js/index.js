// ==============================
// Cursos destacados de TechForge
// ==============================

// Array de objetos que contiene la información de los cursos
const cursos = [
    {
        nombre: "Desarrollo Web Full Stack",
        descripcion: "Aprendé HTML, CSS, JavaScript, PHP y MySQL desde cero.",
        imagen: "https://picsum.photos/400/250?random=1",
        categoria: "Desarrollo Web"
    },
    {
        nombre: "Fundamentos de Ciberseguridad",
        descripcion: "Protegé sistemas, redes y datos con técnicas modernas.",
        imagen: "https://picsum.photos/400/250?random=2",
        categoria: "Ciberseguridad"
    },
    {
        nombre: "Introducción a la Inteligencia Artificial",
        descripcion: "Conocé los conceptos clave del machine learning.",
        imagen: "https://picsum.photos/400/250?random=3",
        categoria: "Inteligencia Artificial"
    }
];

// Obtiene el contenedor donde se mostrarán las tarjetas
const contenedorCursos = document.getElementById("cursos-destacados");

// Recorre el arreglo y crea cada tarjeta dinámicamente
cursos.forEach(curso => {

    // Columna principal
    const columna = document.createElement("div");
    columna.className = "col";

    // Tarjeta
    const card = document.createElement("div");
    card.className = "card";

    // Imagen del curso
    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;
    imagen.className = "course-banner";

    // Cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Título del curso
    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = curso.nombre;

    // Descripción del curso
    const descripcion = document.createElement("p");
    descripcion.className = "card-text";
    descripcion.textContent = curso.descripcion;

    // Categoría del curso
    const categoria = document.createElement("span");
    categoria.className = "badge mb-2";
    categoria.textContent = curso.categoria;

    // Botón
    const boton = document.createElement("a");
    boton.href = "cursos.html";
    boton.className = "btn btn-primary";
    boton.textContent = "Ver más";

    // Construcción de la tarjeta
    cardBody.appendChild(titulo);
    cardBody.appendChild(categoria);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(boton);

    card.appendChild(imagen);
    card.appendChild(cardBody);

    columna.appendChild(card);

    // Agrega la tarjeta al contenedor principal
    contenedorCursos.appendChild(columna);

});