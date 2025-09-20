<?php
header("Content-Type: application/json; charset=UTF-8");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "escola_db");
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Falha na conexão com o banco"]));
}

$acao = $_POST["acao"] ?? "";

if ($acao === "salvar") {
    $turnos = $_POST["turnos"] ?? "2";

    $sql = "UPDATE config_turnos SET turnos = ? WHERE id = 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $turnos);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Configuração salva com sucesso!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao salvar configuração."]);
    }

    $stmt->close();
} elseif ($acao === "buscar") {
    $sql = "SELECT turnos FROM config_turnos WHERE id = 1";
    $result = $conn->query($sql);

    if ($result && $row = $result->fetch_assoc()) {
        echo json_encode(["status" => "success", "turnos" => $row["turnos"]]);
    } else {
        echo json_encode(["status" => "error", "message" => "Nenhuma configuração encontrada."]);
    }
} elseif ($acao === "listarAlunos") {
    $sql = "SELECT id, nome, sala, turno, opcao1 FROM alunos";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $alunos = [];
        while ($row = $result->fetch_assoc()) {
            $alunos[] = [
                "id" => $row["id"],
                "nome" => $row["nome"],
                "serie" => $row["sala"],
                "turno" => $row["turno"],
                "op1" => $row["opcao1"]
            ];
        }
        echo json_encode(["status" => "success", "alunos" => $alunos]);
    } else {
        echo json_encode(["status" => "error", "message" => "Nenhum aluno encontrado."]);
    }
}

$conn->close();
