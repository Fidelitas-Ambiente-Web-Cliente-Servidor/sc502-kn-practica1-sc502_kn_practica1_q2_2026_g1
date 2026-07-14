<?php
require_once __DIR__ . '/../models/CursosModel.php';

class CursosController {

    public function index(): void {
        $model = new CursosModel();

        $categoria = $_GET['categoria'] ?? 'todos';

        if ($categoria === 'todos' || $categoria === '') {
            $cursos = $model->getAll();
        } else {
            $cursos = $model->getByCategory($categoria);
        }

        // Categorías disponibles para el <select> (podrías traerlas también de la BD con un DISTINCT)
        $categorias = ['Ciberseguridad', 'Programacion', 'IA', 'Sistemas Operativos'];

        require __DIR__ . '/../views/cursos.html';
    }
}