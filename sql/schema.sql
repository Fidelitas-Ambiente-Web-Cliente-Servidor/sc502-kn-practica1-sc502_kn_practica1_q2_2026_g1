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