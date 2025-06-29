<?php
$db = new SQLite3('bDados.db');

$campos = ['nome', 'turno', 'serie', 'escolha1', 'escolha2', 'escolha3'];

foreach ($campos as $campo) {
    if (!isset($_POST[$campo])) {
        echo "Campo '$campo' não enviado!";
        exit;
    }
}

$nome = $_POST['nome'];
$turno = $_POST['turno'];
$serie = $_POST['serie'];
$e1 = $_POST['escolha1'];
$e2 = $_POST['escolha2'];
$e3 = $_POST['escolha3'];

$db->exec("CREATE TABLE IF NOT EXISTS pessoas (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    turno TEXT,
    serie TEXT,
    escolha1 TEXT,
    escolha2 TEXT,
    escolha3 TEXT
)");

$stmt = $db->prepare("INSERT INTO pessoas (nome, turno, serie, escolha1, escolha2, escolha3)
                      VALUES (:nome, :turno, :serie, :e1, :e2, :e3)");

$stmt->bindValue(':nome', $nome, SQLITE3_TEXT);
$stmt->bindValue(':turno', $turno, SQLITE3_TEXT);
$stmt->bindValue(':serie', $serie, SQLITE3_TEXT);
$stmt->bindValue(':e1', $e1, SQLITE3_TEXT);
$stmt->bindValue(':e2', $e2, SQLITE3_TEXT);
$stmt->bindValue(':e3', $e3, SQLITE3_TEXT);
$stmt->execute();

echo "Dados salvos com sucesso!";
?>