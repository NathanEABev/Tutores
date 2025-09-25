<?php
header("Content-Type: application/json; charset=UTF-8");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "escola_db");
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Falha na conexão com o banco"]));
}

$acao = $_POST["acao"] ?? "";
$resposta = [];

if ($acao === "salvar") {
    $turnos = $_POST["turnos"] ?? "2";
    $sql = "UPDATE config_turnos SET turnos = ? WHERE id = 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $turnos);
    if ($stmt->execute()) {
        $resposta = ["status" => "success", "message" => "Configuração salva com sucesso!"];
    } else {
        $resposta = ["status" => "error", "message" => "Erro ao salvar configuração."];
    }
    $stmt->close();
} elseif ($acao === "buscar") {
    $sql = "SELECT turnos FROM config_turnos WHERE id = 1";
    $result = $conn->query($sql);
    if ($result && $row = $result->fetch_assoc()) {
        $resposta = ["status" => "success", "turnos" => $row["turnos"]];
    } else {
        $resposta = ["status" => "error", "message" => "Nenhuma configuração encontrada."];
    }
} elseif ($acao === "listarAlunos") {
    $sql = "SELECT a.id, a.nome, a.sala, a.turno, a.atual, a.opcao1, a.opcao2, a.opcao3, 
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
            $alunos[] = $row;
        }
        $resposta = ["status" => "success", "alunos" => $alunos];
    } else {
        $resposta = ["status" => "error", "message" => "Nenhum aluno encontrado."];
    }
}/* elseif ($acao === "mudarTutor") {
    // ETAPA 1: Garantir que os dados recebidos são do tipo correto (inteiros).
    // A função (int) força a conversão para número inteiro. Isso é mais seguro.
    // O '?? 0' garante que se a variável não existir, ela se torna 0.
    $idAluno = (int) ($_POST["idAluno"] ?? 0);
    $novoTutor = (int) ($_POST["novoTutor"] ?? 0);

    // ETAPA 2: Adicionar uma verificação para garantir que temos IDs válidos antes de ir ao banco.
    if ($idAluno > 0) { // O ID do aluno deve ser maior que zero. O novo tutor pode ser 0 para "desatribuir".
        $sql = "UPDATE alunos SET atual = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);

        // ETAPA 3: Usar "ii" porque agora temos certeza que são inteiros.
        $stmt->bind_param("ii", $novoTutor, $idAluno);

        if ($stmt->execute()) {
            $resposta = ["status" => "success", "message" => "Aluno movido com sucesso!"];
        } else {
            // Adiciona a mensagem de erro do statement para facilitar a depuração
            $resposta = ["status" => "error", "message" => "Erro ao executar a atualização: " . $stmt->error];
        }
        $stmt->close();
    } else {
        $resposta = ["status" => "error", "message" => "ID de aluno inválido ou não fornecido."];
    }

}*/ elseif ($acao === "listarSalas") {
    $sql = "SELECT nome FROM salas WHERE ativo = 1";
    $result = $conn->query($sql);
    $salas_ativas = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $salas_ativas[] = $row['nome'];
        }
        $resposta['status'] = 'success';
        $resposta['salas'] = $salas_ativas;
    } else {
        $resposta['status'] = 'error';
        $resposta['message'] = 'Erro ao buscar salas no banco de dados.';
    }
} elseif ($acao === "salvarSalas") {
    $salasJson = $_POST['salas'] ?? '[]';
    $salasSelecionadas = json_decode(urldecode($salasJson), true);
    $conn->begin_transaction();
    try {
        $stmt_reset = $conn->prepare("UPDATE salas SET ativo = 0");
        $stmt_reset->execute();
        $stmt_reset->close();

        if (!empty($salasSelecionadas)) {
            $placeholders = implode(',', array_fill(0, count($salasSelecionadas), '?'));
            $types = str_repeat('s', count($salasSelecionadas));
            $sql_update = "UPDATE salas SET ativo = 1 WHERE nome IN ($placeholders)";
            $stmt_update = $conn->prepare($sql_update);
            $stmt_update->bind_param($types, ...$salasSelecionadas);
            $stmt_update->execute();
            $stmt_update->close();
        }
        $conn->commit();
        $resposta['status'] = 'success';
        $resposta['message'] = 'Salas salvas com sucesso!';
    } catch (Exception $e) {
        $conn->rollback();
        $resposta['status'] = 'error';
        $resposta['message'] = 'Erro ao salvar as salas: ' . $e->getMessage();
    }
} else {
    $resposta = ["status" => "error", "message" => "Ação desconhecida ou não especificada."];
}

echo json_encode($resposta);

$conn->close();