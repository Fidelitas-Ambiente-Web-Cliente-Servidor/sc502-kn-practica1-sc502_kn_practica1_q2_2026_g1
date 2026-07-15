/**
 * Validación de Formulario de Contacto - TechForge Academy
 * Rol 4: Validación completa en tiempo real del formulario de contacto
 * 
 * Este archivo contiene toda la lógica de validación y manejo del formulario.
 * Características:
 * - Validación en tiempo real con eventos input/blur
 * - Mensajes de error específicos por campo
 * - Botón deshabilitado hasta que todos los campos sean válidos
 * - Mensaje de éxito al enviar el formulario
 * - Sin uso de jQuery ni librerías externas
 */

// ========================================
// VARIABLES GLOBALES
// ========================================

// Objeto que almacena el estado de validación de cada campo
const validationState = {
    nombre: false,
    correo: false,
    telefono: false,
    asunto: false,
    mensaje: false
};

// Expresión regular para validar correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa el formulario cuando el DOM está listo
 * Obtiene referencias a los elementos y añade listeners
 */
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const nameInput = document.getElementById('nombre');
    const emailInput = document.getElementById('correo');
    const phoneInput = document.getElementById('telefono');
    const subjectInput = document.getElementById('asunto');
    const messageInput = document.getElementById('mensaje');

    // Crear contenedores para mensajes de error si no existen
    createErrorContainers(form);

    // Añadir listeners de validación a cada campo
    nameInput.addEventListener('input', () => validateName(nameInput));
    nameInput.addEventListener('blur', () => validateName(nameInput));

    emailInput.addEventListener('input', () => validateEmail(emailInput));
    emailInput.addEventListener('blur', () => validateEmail(emailInput));

    phoneInput.addEventListener('input', () => validatePhone(phoneInput));
    phoneInput.addEventListener('blur', () => validatePhone(phoneInput));

    subjectInput.addEventListener('input', () => validateSubject(subjectInput));
    subjectInput.addEventListener('blur', () => validateSubject(subjectInput));

    messageInput.addEventListener('input', () => validateMessage(messageInput));
    messageInput.addEventListener('blur', () => validateMessage(messageInput));

    // Añadir listener al evento submit del formulario
    form.addEventListener('submit', function(e) {

    validateName(nameInput);
    validateEmail(emailInput);
    validatePhone(phoneInput);
    validateSubject(subjectInput);
    validateMessage(messageInput);

    const allValid =
        validationState.nombre &&
        validationState.correo &&
        validationState.telefono &&
        validationState.asunto &&
        validationState.mensaje;

    if (!allValid) {
        e.preventDefault();
    }

});

    // Desabilitar botón inicialmente
    submitButton.disabled = true;
});

// ========================================
// FUNCIONES DE VALIDACIÓN POR CAMPO
// ========================================

/**
 * Valida el nombre completo
 * Requisitos: mínimo 5 caracteres, solo letras y espacios
 * @param {HTMLElement} input - El elemento input del nombre
 */
function validateName(input) {
    const value = input.value.trim();
    const errorContainer = document.getElementById('error-nombre');
    
    // Expresión regular: solo letras y espacios
    const nameRegex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]*$/;

    if (value.length === 0) {
        setError(errorContainer, 'El nombre es requerido');
        validationState.nombre = false;
    } else if (value.length < 5) {
        setError(errorContainer, 'El nombre debe tener mínimo 5 caracteres');
        validationState.nombre = false;
    } else if (!nameRegex.test(value)) {
        setError(errorContainer, 'El nombre solo puede contener letras y espacios');
        validationState.nombre = false;
    } else {
        clearError(errorContainer);
        validationState.nombre = true;
    }

    updateSubmitButton();
}

/**
 * Valida el correo electrónico
 * Requisitos: formato válido usando Regex
 * @param {HTMLElement} input - El elemento input del correo
 */
function validateEmail(input) {
    const value = input.value.trim();
    const errorContainer = document.getElementById('error-correo');

    if (value.length === 0) {
        setError(errorContainer, 'El correo es requerido');
        validationState.correo = false;
    } else if (!emailRegex.test(value)) {
        setError(errorContainer, 'Ingrese un correo válido (ej: usuario@ejemplo.com)');
        validationState.correo = false;
    } else {
        clearError(errorContainer);
        validationState.correo = true;
    }

    updateSubmitButton();
}

/**
 * Valida el teléfono
 * Requisitos: solo números, mínimo 8 dígitos
 * @param {HTMLElement} input - El elemento input del teléfono
 */
function validatePhone(input) {
    const value = input.value.trim();
    const errorContainer = document.getElementById('error-telefono');
    
    // Expresión regular: solo dígitos
    const phoneRegex = /^\d+$/;

    if (value.length === 0) {
        setError(errorContainer, 'El teléfono es requerido');
        validationState.telefono = false;
    } else if (!phoneRegex.test(value)) {
        setError(errorContainer, 'El teléfono solo puede contener números');
        validationState.telefono = false;
    } else if (value.length < 8) {
        setError(errorContainer, 'El teléfono debe tener mínimo 8 dígitos');
        validationState.telefono = false;
    } else {
        clearError(errorContainer);
        validationState.telefono = true;
    }

    updateSubmitButton();
}

/**
 * Valida el asunto
 * Requisitos: mínimo 3 caracteres
 * @param {HTMLElement} input - El elemento input del asunto
 */
function validateSubject(input) {
    const value = input.value.trim();
    const errorContainer = document.getElementById('error-asunto');

    if (value.length === 0) {
        setError(errorContainer, 'El asunto es requerido');
        validationState.asunto = false;
    } else if (value.length < 3) {
        setError(errorContainer, 'El asunto debe tener mínimo 3 caracteres');
        validationState.asunto = false;
    } else {
        clearError(errorContainer);
        validationState.asunto = true;
    }

    updateSubmitButton();
}

/**
 * Valida el mensaje
 * Requisitos: mínimo 20 caracteres
 * @param {HTMLElement} input - El elemento textarea del mensaje
 */
function validateMessage(input) {
    const value = input.value.trim();
    const errorContainer = document.getElementById('error-mensaje');

    if (value.length === 0) {
        setError(errorContainer, 'El mensaje es requerido');
        validationState.mensaje = false;
    } else if (value.length < 20) {
        setError(errorContainer, 'El mensaje debe tener mínimo 20 caracteres');
        validationState.mensaje = false;
    } else {
        clearError(errorContainer);
        validationState.mensaje = true;
    }

    updateSubmitButton();
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Crea contenedores para mostrar mensajes de error debajo de cada campo
 * @param {HTMLElement} form - El formulario
 */
function createErrorContainers(form) {
    const fields = ['nombre', 'correo', 'telefono', 'asunto', 'mensaje'];
    
    fields.forEach(fieldName => {
        const input = document.getElementById(fieldName);
        const parentDiv = input.parentElement;
        
        // Verificar si ya existe el contenedor de error
        if (!document.getElementById(`error-${fieldName}`)) {
            const errorDiv = document.createElement('small');
            errorDiv.id = `error-${fieldName}`;
            errorDiv.className = 'error-message d-block mt-2 text-danger';
            errorDiv.style.display = 'none';
            parentDiv.appendChild(errorDiv);
        }
    });
}

/**
 * Muestra un mensaje de error en el contenedor especificado
 * @param {HTMLElement} container - Contenedor del mensaje de error
 * @param {string} message - Mensaje a mostrar
 */
function setError(container, message) {
    container.textContent = message;
    container.style.display = 'block';
    container.classList.add('error-visible');
}

/**
 * Limpia el mensaje de error del contenedor
 * @param {HTMLElement} container - Contenedor del mensaje de error
 */
function clearError(container) {
    container.textContent = '';
    container.style.display = 'none';
    container.classList.remove('error-visible');
}

/**
 * Actualiza el estado del botón de envío
 * El botón se habilita solo si todos los campos son válidos
 */
function updateSubmitButton() {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Verificar si todos los campos son válidos
    const allValid = validationState.nombre && 
                    validationState.correo && 
                    validationState.telefono && 
                    validationState.asunto && 
                    validationState.mensaje;
    
    submitButton.disabled = !allValid;
}

/**
 * Maneja el envío del formulario
 * Muestra mensaje de éxito y limpia el formulario
 * @param {HTMLElement} form - El formulario
 * @param {HTMLElement} submitButton - El botón de envío
 */

/*function handleFormSubmit(form, submitButton) {
    // Crear y mostrar mensaje de éxito
    showSuccessMessage();
    
    // Limpiar el formulario
    form.reset();
    
    // Resetear el estado de validación
    validationState.nombre = false;
    validationState.correo = false;
    validationState.telefono = false;
    validationState.asunto = false;
    validationState.mensaje = false;
    
    // Limpiar mensajes de error
    const errorContainers = document.querySelectorAll('.error-message');
    errorContainers.forEach(container => {
        clearError(container);
    });
    
    // Deshabilitar el botón de envío
    submitButton.disabled = true;
}

/**
 * Muestra un mensaje de éxito en pantalla
 * El mensaje se elimina después de 5 segundos
 */

/*
function showSuccessMessage() {
    // Obtener el contenedor principal del formulario
    const formSection = document.querySelector('.contact-form-section');
    
    // Crear elemento de alerta de éxito
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show';
    successAlert.role = 'alert';
    successAlert.innerHTML = `
        <strong>¡Mensaje Enviado Exitosamente!</strong>
        <p>Gracias por contactarnos. Nos comunicaremos contigo pronto.</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Insertar el mensaje de éxito al inicio de la sección
    formSection.insertBefore(successAlert, formSection.firstChild);
    
    // Remover el mensaje automáticamente después de 5 segundos
    setTimeout(() => {
        successAlert.remove();
    }, 5000);
}*/
