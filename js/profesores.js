// Array de objetos que contiene la información de los profesores
const profesores = [
    {
        id: "maria",
        nombre: "Ing. María López",
        especialidad: "Python y Data Science",
        descripcion: "Ingeniera de datos con experiencia práctica.",
        foto: "./images/profesores/maria_lopez.jpg",
        correo: "maria.lopez@techforgeacademy.com",
        cursosQueImparte: ["Python Básico", "Data Science Avanzado"],
        badge: "Python",
        estudios: [
            "Ingeniería en Sistemas de Información, Universidad de Costa Rica.",
            "Maestría en Ciencia de Datos, Tecnológico de Costa Rica."
        ],
        experiencia: [
            "6 años como ingeniera de datos en banca y retail.",
            "Liderazgo de proyectos ETL y modelos predictivos en producción.",
            "Mentora técnica en programas de inserción laboral junior."
        ],
        certificaciones: [
            "Google Data Analytics Professional Certificate.",
            "AWS Certified Cloud Practitioner.",
            "Microsoft Azure Fundamentals (AZ-900)."
        ]
    },
    {
        id: "carlos",
        nombre: "Dr. Carlos Méndez",
        especialidad: "Inteligencia Artificial",
        descripcion: "Docente e investigador en ML.",
        foto: "./images/profesores/dr_carlos.jpg",
        correo: "carlos.mendez@techforgeacademy.com",
        cursosQueImparte: ["Introducción a IA", "Machine Learning Avanzado"],
        badge: "IA",
        estudios: [
            "Doctorado en Ciencias de la Computación, enfoque en IA aplicada.",
            "Maestría en Inteligencia Artificial y Analítica Avanzada."
        ],
        experiencia: [
            "10 años en investigación aplicada en visión por computador y NLP.",
            "Consultor en proyectos de IA para industria financiera y salud.",
            "Director académico de programas de especialización en ML."
        ],
        certificaciones: [
            "TensorFlow Developer Certificate.",
            "DeepLearning.AI Machine Learning Specialization.",
            "IBM AI Engineering Professional Certificate."
        ]
    },
    {
        id: "ana",
        nombre: "Prof. Ana Rodríguez",
        especialidad: "Desarrollo Web Full Stack",
        descripcion: "Especialista en desarrollo web y UX.",
        foto: "./images/profesores/ana_rodriguez.jpg",
        correo: "ana.rodriguez@techforgeacademy.com",
        cursosQueImparte: ["Desarrollo Web Full Stack", "UX/UI Design"],
        badge: "Programacion",
        estudios: [
            "Bachillerato en Ingeniería de Software.",
            "Especialización en UX/UI para productos digitales."
        ],
        experiencia: [
            "8 años construyendo plataformas web con equipos ágiles.",
            "Liderazgo técnico en frontend y arquitectura de componentes.",
            "Mentoría de bootcamps full stack y proyectos capstone."
        ],
        certificaciones: [
            "Professional Scrum Master I (PSM I).",
            "Meta Front-End Developer Certificate.",
            "Google UX Design Certificate."
        ]
    },
    {
        id: "javier",
        nombre: "Mtro. Javier Vargas",
        especialidad: "DevOps y Control de Versiones",
        descripcion: "Experto en CI/CD y buenas prácticas.",
        foto: "./images/profesores/javier_vargas.jpg",
        correo: "javier.vargas@techforgeacademy.com",
        cursosQueImparte: ["Git y GitHub", "DevOps Fundamentals"],
        badge: "DevOps",
        estudios: [
            "Ingeniería en Computación.",
            "Maestría en Arquitectura de Software."
        ],
        experiencia: [
            "9 años en automatización CI/CD e infraestructura cloud.",
            "Implementación de pipelines y estándares de versionamiento empresarial.",
            "Capacitación de equipos en Git, branching strategy y release management."
        ],
        certificaciones: [
            "AWS Certified Developer - Associate.",
            "GitHub Actions Certification.",
            "Docker and Kubernetes Fundamentals."
        ]
    },
    {
        id: "laura",
        nombre: "Lic. Laura Fernández",
        especialidad: "Bases de Datos y SQL",
        descripcion: "Experta en diseño y optimización de bases de datos.",
        foto: "https://via.placeholder.com/400x300/1a2332/00d9ff?text=Laura+Fernandez",
        correo: "laura.fernandez@techforgeacademy.com",
        cursosQueImparte: ["SQL Avanzado", "Diseño de Bases de Datos"],
        badge: "Bases de Datos",
        estudios: [
            "Licenciatura en Ciencias de la Computación.",
            "Especialización en Administración de Bases de Datos."
        ],
        experiencia: [
            "7 años como DBA en empresas de telecomunicaciones.",
            "Optimización de consultas y diseño de esquemas relacionales.",
            "Capacitación en modelado de datos y normalización."
        ],
        certificaciones: [
            "Oracle Certified Professional (OCP).",
            "Microsoft SQL Server Certification.",
            "PostgreSQL Professional Certification."
        ]
    },
    {
        id: "roberto",
        nombre: "Ing. Roberto Sánchez",
        especialidad: "Redes y Seguridad Informática",
        descripcion: "Especialista en infraestructura de redes y protocolos.",
        foto: "https://via.placeholder.com/400x300/1a2332/00d9ff?text=Roberto+Sanchez",
        correo: "roberto.sanchez@techforgeacademy.com",
        cursosQueImparte: ["Redes de Computadoras", "Seguridad en Redes"],
        badge: "Redes",
        estudios: [
            "Ingeniería en Telecomunicaciones.",
            "Maestría en Seguridad de la Información."
        ],
        experiencia: [
            "10 años en diseño e implementación de redes empresariales.",
            "Auditorías de seguridad y análisis de vulnerabilidades.",
            "Consultor en proyectos de infraestructura crítica."
        ],
        certificaciones: [
            "Cisco Certified Network Professional (CCNP).",
            "Certified Information Systems Security Professional (CISSP).",
            "CompTIA Security+."
        ]
    }
];

// Función que renderiza las tarjetas de profesores dinámicamente
function renderizarProfesores() {
    const container = document.querySelector('.container.text-center .row');
    container.innerHTML = '';

    profesores.forEach(profesor => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <div class="card prof-card" style="margin: 0 auto;">
                <span class="badge text-bg-primary">${profesor.badge}</span>
                <div class="card-body">
                    <img src="${profesor.foto}" alt="${profesor.nombre}" class="course-banner">
                    <h5 class="card-title">${profesor.nombre}</h5>
                    <p class="card-text">Especialidad: ${profesor.especialidad}. ${profesor.descripcion}</p>
                    <div class="card-options">
                        <a href="#" class="btn btn-ver-prof" data-profesor-id="${profesor.id}">Ver profesor</a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// Función que crea y muestra el modal con la información completa del profesor
function mostrarModal(profesorId) {
    const profesor = profesores.find(p => p.id === profesorId);
    if (!profesor) return;

    // Remover modal existente si hay uno
    const modalExistente = document.getElementById('modal-profesor-dinamico');
    if (modalExistente) {
        modalExistente.remove();
    }

    // Crear el HTML del modal
    const modalHTML = `
        <div class="modal fade" id="modal-profesor-dinamico" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${profesor.nombre}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${profesor.foto}" class="img-fluid" alt="${profesor.nombre}">
                            </div>
                            <div class="col-md-8">
                                <p><strong>Especialidad:</strong> ${profesor.especialidad}</p>
                                <p><strong>Correo:</strong> ${profesor.correo}</p>
                                <p><strong>Cursos que imparte:</strong> ${profesor.cursosQueImparte.join(', ')}</p>
                                
                                <h6>Estudios</h6>
                                <ul>
                                    ${profesor.estudios.map(e => `<li>${e}</li>`).join('')}
                                </ul>
                                
                                <h6>Experiencia laboral</h6>
                                <ul>
                                    ${profesor.experiencia.map(e => `<li>${e}</li>`).join('')}
                                </ul>
                                
                                <h6>Certificaciones relevantes</h6>
                                <ul>
                                    ${profesor.certificaciones.map(c => `<li>${c}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Agregar el modal al DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Mostrar el modal usando Bootstrap
    const modalElement = document.getElementById('modal-profesor-dinamico');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Limpiar el modal del DOM cuando se cierre
    modalElement.addEventListener('hidden.bs.modal', function () {
        modalElement.remove();
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar las tarjetas de profesores
    renderizarProfesores();

    // Delegación de eventos para los botones "Ver profesor"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-ver-prof')) {
            e.preventDefault();
            const profesorId = e.target.dataset.profesorId;
            mostrarModal(profesorId);
        }
    });
});

// Made with Bob
