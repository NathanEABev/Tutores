<?php
include "conexao.php";

$nome = $_POST['nome'];
$sala = $_POST['sala'];
$turno = $_POST['turno'] ?? 'unico';
$op1 = $_POST['opcao1'];
$op2 = $_POST['opcao2'];
$op3 = $_POST['opcao3'];

$sql = "INSERT INTO alunos (nome, sala, turno, opcao1, opcao2, opcao3)
        VALUES ('$nome', '$sala', '$turno', $op1, $op2, $op3)";

if ($conn->query($sql) === TRUE) {
    echo json_encode([
        "status" => "success",
        "aluno" => [
            "nome" => $nome,
            "serie" => $sala,
            "turno" => $turno,
            "op1" => $op1,
            "op2" => $op2,
            "op3" => $op3
        ]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => $conn->error
    ]);
}

$conn->close();
?>