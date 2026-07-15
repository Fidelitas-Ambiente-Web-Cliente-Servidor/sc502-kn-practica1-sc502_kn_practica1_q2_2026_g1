<?php

require_once __DIR__ . '/../models/ContactoModel.php';

class ContactoController {

    public function index(): void {

        require __DIR__ . '/../views/contacto.html';

    }

    public function store(): void {

        $model = new ContactoModel();

        $nombre = $_POST['nombre'] ?? '';
        $correo = $_POST['correo'] ?? '';
        $telefono = $_POST['telefono'] ?? '';
        $asunto = $_POST['asunto'] ?? '';
        $mensaje = $_POST['mensaje'] ?? '';

        $model->create(
            $nombre,
            $correo,
            $telefono,
            $asunto,
            $mensaje
        );

       header("Location: index.php?controller=contacto&action=index&success=1");
exit;

    }

}