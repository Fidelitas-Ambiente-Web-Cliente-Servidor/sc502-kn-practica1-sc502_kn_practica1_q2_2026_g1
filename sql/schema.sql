CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

INSERT INTO cursos (nombre, descripcion, categoria, duracion, precio, imagen) VALUES
('Fundamentos de Ciberseguridad', 'Protegé sistemas, redes y datos con técnicas modernas.', 'Ciberseguridad', '8 semanas', 120000, './images/curso_ciber.jpg'),
('Introducción a la Inteligencia Artificial', 'Conocé los conceptos clave del machine learning.', 'IA', '10 semanas', 150000, './images/curso_IA.jpg'),
('Desarrollo Web Full Stack', 'Aprendé HTML, CSS, JavaScript, PHP y MySQL desde cero.', 'Programacion', '16 semanas', 200000, './images/curso_fullstack.png'),
('Modelos predictivos', 'Descubre como potenciar a tu agente virtual con algoritmos predictivos de datos y escenarios.', 'IA', '12 semanas', 180000, './images/curso_predictivos.jpg'),
('De 0 a Experto en SAP', 'Conocé todo sobre este lenguaje de programación enfocado en administración empresarial y de inventarios.', 'Programacion', '14 semanas', 175000, './images/curso_sap.png'),
('Python basico', 'Comienza a aprender uno de los lenguajes de programación más demandantes del mercado.', 'Programacion', '6 semanas', 90000, './images/curso_python.jpg'),
('Fundamentos de sistemas operativos', 'Entiende como funcionan los sistemas operativos más populares y aprende a manejarlos como un profesional.', 'Sistemas Operativos', '8 semanas', 110000, './images/curso_sis_operativos.jpg'),
('Desarrollo movil Nativo: Kotlin + Swift desde 0', 'Masteriza los lenguajes de programación móvil y lanza tu primera aplicación.', 'Programacion', '18 semanas', 220000, './images/curso_kotlin_swift.jpg'),
('Control de versiones: Git + Github', 'Toma el control de tus proyectos y aprende versionamiento con Git y Github.', 'Programacion', '4 semanas', 60000, './images/curso_git_github.png');

CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL
);

INSERT INTO contacto (nombre, correo, telefono, asunto, mensaje) VALUES
('Laura Hernández', 'laura@gmail.com', '88887777', 'Consulta de matrícula', 'Deseo recibir información sobre el proceso de matrícula.'),
('Carlos Mora', 'carlos@gmail.com', '88886666', 'Información', 'Quiero conocer más detalles sobre los cursos disponibles.'),
('Ana Solís', 'ana@gmail.com', '88885555', 'Horarios', 'Necesito saber los horarios de los cursos de programación.'),
('Diego Rojas', 'diego@gmail.com', '88884444', 'Costo', 'Me gustaría conocer el precio de los cursos de Inteligencia Artificial.'),
('María Pérez', 'maria@gmail.com', '88883333', 'Soporte', 'Tengo una consulta sobre el acceso a la plataforma virtual.');

CREATE TABLE IF NOT EXISTS profesores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    especialidad VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    foto VARCHAR(255) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    cursos_que_imparte VARCHAR(255) NOT NULL,
    badge VARCHAR(50) NOT NULL,
    estudios TEXT NOT NULL,
    experiencia TEXT NOT NULL,
    certificaciones TEXT NOT NULL
);

INSERT INTO profesores (nombre, especialidad, descripcion, foto, correo, cursos_que_imparte, badge, estudios, experiencia, certificaciones) VALUES
('Ing. María López', 'Python y Data Science', 'Ingeniera de datos con experiencia práctica.', './images/profesores/maria_lopez.jpg', 'maria.lopez@techforgeacademy.com', 'Python Básico, Data Science Avanzado', 'Python',
 'Ingeniería en Sistemas de Información, Universidad de Costa Rica.\nMaestría en Ciencia de Datos, Tecnológico de Costa Rica.',
 '6 años como ingeniera de datos en banca y retail.\nLiderazgo de proyectos ETL y modelos predictivos en producción.\nMentora técnica en programas de inserción laboral junior.',
 'Google Data Analytics Professional Certificate.\nAWS Certified Cloud Practitioner.\nMicrosoft Azure Fundamentals (AZ-900).'),
('Dr. Carlos Méndez', 'Inteligencia Artificial', 'Docente e investigador en ML.', './images/profesores/dr_carlos.jpg', 'carlos.mendez@techforgeacademy.com', 'Introducción a IA, Machine Learning Avanzado', 'IA',
 'Doctorado en Ciencias de la Computación, enfoque en IA aplicada.\nMaestría en Inteligencia Artificial y Analítica Avanzada.',
 '10 años en investigación aplicada en visión por computador y NLP.\nConsultor en proyectos de IA para industria financiera y salud.\nDirector académico de programas de especialización en ML.',
 'TensorFlow Developer Certificate.\nDeepLearning.AI Machine Learning Specialization.\nIBM AI Engineering Professional Certificate.'),
('Prof. Ana Rodríguez', 'Desarrollo Web Full Stack', 'Especialista en desarrollo web y UX.', './images/profesores/ana_rodriguez.jpg', 'ana.rodriguez@techforgeacademy.com', 'Desarrollo Web Full Stack, UX/UI Design', 'Programacion',
 'Bachillerato en Ingeniería de Software.\nEspecialización en UX/UI para productos digitales.',
 '8 años construyendo plataformas web con equipos ágiles.\nLiderazgo técnico en frontend y arquitectura de componentes.\nMentoría de bootcamps full stack y proyectos capstone.',
 'Professional Scrum Master I (PSM I).\nMeta Front-End Developer Certificate.\nGoogle UX Design Certificate.'),
('Mtro. Javier Vargas', 'DevOps y Control de Versiones', 'Experto en CI/CD y buenas prácticas.', './images/profesores/javier_vargas.jpg', 'javier.vargas@techforgeacademy.com', 'Git y GitHub, DevOps Fundamentals', 'DevOps',
 'Ingeniería en Computación.\nMaestría en Arquitectura de Software.',
 '9 años en automatización CI/CD e infraestructura cloud.\nImplementación de pipelines y estándares de versionamiento empresarial.\nCapacitación de equipos en Git, branching strategy y release management.',
 'AWS Certified Developer - Associate.\nGitHub Actions Certification.\nDocker and Kubernetes Fundamentals.'),
('Lic. Laura Fernández', 'Bases de Datos y SQL', 'Experta en diseño y optimización de bases de datos.', 'https://via.placeholder.com/400x300/1a2332/00d9ff?text=Laura+Fernandez', 'laura.fernandez@techforgeacademy.com', 'SQL Avanzado, Diseño de Bases de Datos', 'Bases de Datos',
 'Licenciatura en Ciencias de la Computación.\nEspecialización en Administración de Bases de Datos.',
 '7 años como DBA en empresas de telecomunicaciones.\nOptimización de consultas y diseño de esquemas relacionales.\nCapacitación en modelado de datos y normalización.',
 'Oracle Certified Professional (OCP).\nMicrosoft SQL Server Certification.\nPostgreSQL Professional Certification.'),
('Ing. Roberto Sánchez', 'Redes y Seguridad Informática', 'Especialista en infraestructura de redes y protocolos.', 'https://via.placeholder.com/400x300/1a2332/00d9ff?text=Roberto+Sanchez', 'roberto.sanchez@techforgeacademy.com', 'Redes de Computadoras, Seguridad en Redes', 'Redes',
 'Ingeniería en Telecomunicaciones.\nMaestría en Seguridad de la Información.',
 '10 años en diseño e implementación de redes empresariales.\nAuditorías de seguridad y análisis de vulnerabilidades.\nConsultor en proyectos de infraestructura crítica.',
 'Cisco Certified Network Professional (CCNP).\nCertified Information Systems Security Professional (CISSP).\nCompTIA Security+.');
