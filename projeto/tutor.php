<?php
include "conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $acao = $_POST['acao'] ?? '';

    if ($acao === "adicionar") {
        $nome = mysqli_real_escape_string($conn, $_POST['nome']);
        $clube = mysqli_real_escape_string($conn, $_POST['clube']);

        $sql = "INSERT INTO tutores (nome, clube) VALUES ('$nome', '$clube')";
        if (mysqli_query($conn, $sql)) {
            $id = mysqli_insert_id($conn);
            echo json_encode([
                "status" => "success",
                "acao" => "adicionar",
                "id" => $id,
                "nome" => $nome,
                "clube" => $clube
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
        }
    } elseif ($acao === "editar") {
        $id = intval($_POST['id']);
        $nome = mysqli_real_escape_string($conn, $_POST['nome']);
        $clube = mysqli_real_escape_string($conn, $_POST['clube']);

        $sql = "UPDATE tutores SET nome='$nome', clube='$clube' WHERE id=$id";
        if (mysqli_query($conn, $sql)) {
            echo json_encode([
                "status" => "success",
                "acao" => "editar",
                "id" => $id,
                "nome" => $nome,
                "clube" => $clube
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
        }
    } elseif ($acao === "excluir") {
        $id = intval($_POST['id']);
        $sql = "DELETE FROM tutores WHERE id=$id";
        if (mysqli_query($conn, $sql)) {
            echo json_encode([
                "status" => "success",
                "acao" => "excluir",
                "id" => $id
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
        }
    } elseif ($acao === "buscar") {
        $id = intval($_POST['id']);
        $sql = "SELECT nome, clube FROM tutores WHERE id = $id";
        $result = $conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode([
                "status" => "success",
                "nome" => $row['nome'],
                "clube" => $row['clube']
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => "Tutor não encontrado."]);
        }
    } elseif ($acao === "listar") {
        $sql = "SELECT id, nome, clube FROM tutores ORDER BY id DESC";
        $result = $conn->query($sql);
        $tutores = [];

        while ($row = $result->fetch_assoc()) {
            $tutores[] = $row;
        }

        echo json_encode([
            "status" => "success",
            "tutores" => $tutores
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Ação inválida"]);
    }

    mysqli_close($conn);
}
