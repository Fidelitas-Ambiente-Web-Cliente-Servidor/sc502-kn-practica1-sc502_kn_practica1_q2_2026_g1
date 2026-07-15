<?php
require_once __DIR__ . '/../models/ProfesoresModel.php';

class ProfesoresController {

    public function index(): void {
        $model = new ProfesoresModel();
        $profesores = $model->getAll();

        require __DIR__ . '/../views/profesores.html';
    }

    public function show(): void {
        $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

        $model = new ProfesoresModel();
        $profesor = $model->getById($id);

        if (!$profesor) {
            http_response_code(404);
            echo "Profesor no encontrado";
            return;
        }

        require __DIR__ . '/../views/profesores_detalle.html';
    }
}
