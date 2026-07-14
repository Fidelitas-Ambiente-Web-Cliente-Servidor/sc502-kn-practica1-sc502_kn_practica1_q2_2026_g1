<?php
require_once __DIR__ . '/../config/database.php';

class CursosModel {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getConnection();
    }

    public function getAll(): array {
        $stmt = $this->db->query("SELECT * FROM cursos ORDER BY id ASC");
        return $stmt->fetchAll();
    }

    public function getByCategory(string $categoria): array {
        $stmt = $this->db->prepare("SELECT * FROM cursos WHERE categoria = :categoria ORDER BY id ASC");
        $stmt->execute(['categoria' => $categoria]);
        return $stmt->fetchAll();
    }
}