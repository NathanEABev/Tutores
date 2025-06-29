<?php
require 'classes/conn.php';
$sql = "SELECT * FROM turnos";

$stmt = $pdo->prepare($sql);
$stmt->execute();
$turnos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escolha de Tutores</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header><a href="index.php">voltar</a></header>
    <aside>
        <h1>Selecione o turno</h1>
        <div id="dTurno">
            <p>Selecione o periodo em que estuda</p>
            <select name="sTurno" id="sTurno">
                <option value="seleTur" selected>Selecione o turno</option>
                <?php foreach ($turnos as $linha): ?>
                    <option value="<?= $linha['value'] ?>"><?= $linha['title'] ?></option>
                <?php endforeach; ?>
                    <option value="tur1">teste</option>
            </select>
        </div>
    </aside>
    <aside>
        <h1>Série:</h1>
        <div id="dSerie">
            <p>Selecione a série em que estuda</p>
            <select name="sTurma" id="sTurma">
                <option value="seleSer" selected>Selecione a série</option>
                <option value="teste">teste</option>
            </select>
        </div>
    </aside>
    <aside>
        <h1>Alunos:</h1>
        <div id="dAluno">
            <p>Escreva abaixo seu nome completo.</p>
            <input type="text" name="nomeAl" id="nomeAl" placeholder="Escreva seu nome aqui">
        </div>
    </aside>
    <aside id="dife">
        <h1>Opções:</h1>
        <p>Selecione 3 opções para tutores</p>
        <div id="dTutor">
            <div class="opcoes">
                <h2>1ª opção:</h2>
                <select name="primeira" id="primeira">
                    <option value="selePri">Selecione a 1ª opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div class="opcoes">
                <h2>2ª opção:</h2>
                <select name="segunda" id="segunda">
                    <option value="seleSeg">Selecione a 2ª opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div class="opcoes">
                <h2>3ª opção:</h2>
                <select name="terceira" id="terceira">
                    <option value="seleTer">Selecione a 3ª opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
    </aside>
    <p id="pErroEnvia"></p>
    <button id="vai"><strong>Enviar</strong></button>
    <div id="overlay"></div>
    <div id="popConfirma">
        <img src="close.png" id="fechaC">
        <h1>Confirmação</h1>
        <p id="dados"></p>
        <button id="enviar"><strong>Confirmar envio</strong></button>
    </div>
    <p><a href="cordenacao.html">Tirar depois de programar</a></p>

    <script src="script.js"></script>
</body>

</html>