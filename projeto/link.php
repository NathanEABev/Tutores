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
    $sql = "SELECT a.id, a.nome, a.sala, a.turno, a.atual, 
               a.opcao1, a.opcao2, a.opcao3,
               atual.nome AS nome_atual,
               t1.nome AS nome_op1,
               t2.nome AS nome_op2,
               t3.nome AS nome_op3
        FROM alunos a
        LEFT JOIN tutores atual ON a.atual = atual.id
        LEFT JOIN tutores t1 ON a.opcao1 = t1.id
        LEFT JOIN tutores t2 ON a.opcao2 = t2.id
        LEFT JOIN tutores t3 ON a.opcao3 = t3.id";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $alunos = [];
        while ($row = $result->fetch_assoc()) {
            $alunos[] = [
                "id" => $row["id"],
                "nome" => $row["nome"],
                "serie" => $row["sala"],
                "turno" => $row["turno"],
                "atual" => $row["atual"],
                "op1" => $row["opcao1"],
                "op2" => $row["opcao2"],
                "op3" => $row["opcao3"],
                "nome_atual" => $row["nome_atual"],
                "nome_op1" => $row["nome_op1"],
                "nome_op2" => $row["nome_op2"],
                "nome_op3" => $row["nome_op3"]
            ];
        }
        echo json_encode(["status" => "success", "alunos" => $alunos]);
    } else {
        echo json_encode(["status" => "error", "message" => "Nenhum aluno encontrado."]);
    }
}

if ($_POST["acao"] === "mudarTutor") {
    $idAluno = $_POST["idAluno"];
    $novoTutor = $_POST["novoTutor"];

    $sql = "UPDATE alunos SET atual = ? WHERE id = ?";

    $stmt = $conn->prepare($sql);
    if ($stmt->execute([$novoTutor, $idAluno])) {
        echo json_encode([
            "status" => "success",
            "message" => "Aluno movido com sucesso!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Erro ao mover aluno."
        ]);
    }
    exit;
}

$conn->close();