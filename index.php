<?php

$controller = $_GET['controller'] ?? 'index';
$action = $_GET['action'] ?? 'index';

switch ($controller) {
    case 'cursos':
        require_once __DIR__ . '/controllers/CursosController.php';
        $obj = new CursosController();
        break;

    // case 'index': ...
    // case 'profesores': ...
    // case 'contacto': ...

    case 'contacto':
        require_once __DIR__ . '/controllers/ContactoController.php';
        $obj = new ContactoController();
        break;

    default:
        http_response_code(404);
        echo "Controlador no encontrado";
        exit;
}

if (method_exists($obj, $action)) {
    $obj->$action();
} else {
    http_response_code(404);
    echo "Acción no encontrada";
}