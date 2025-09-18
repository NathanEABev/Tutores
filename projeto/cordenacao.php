<?php
include "conexao.php";
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados da Coordenação</title>
    <link rel="stylesheet" href="style1.css">
</head>

<body>
    <header><a href="index.html">voltar</a></header>
    <main>
        <aside id="Afichas">
            <h1>Ficha de Tutores:</h1>
            <div id="fichas">
            </div>
        </aside>
        <div id="modalTutores">
            <div id="contentModal">
                <img src="close.png" alt="fechar" id="fechaModal" class="fecha">
                <h1>Opções de <span id="nomeFicha">Aluno</span></h1>
                <div id="dadosTutores">
                    <p><strong>Primeira Opção: </strong><span id="priOP">tutor 1</span></p>
                    <p><strong>Segunda Opção: </strong><span id="segOP">tutor 2</span></p>
                    <p><strong>Terceira Opção: </strong><span id="terOP">tutor 3</span></p>
                </div>
            </div>
        </div>
        <aside>
            <h1>Turnos:</h1>
            <div class="radios">
                <input type="radio" name="turnos" id="T1">
                <label for="T1">Turno único</label>
            </div>
            <div class="radios">
                <input type="radio" name="turnos" id="T2" checked>
                <label for="T2">2 Turno</label>
            </div>
            <button id="CTurnos">Salvar alterações</button>
        </aside>
        <aside>
            <h1>Séries ativas:</h1>
            <button id="atPopSala">Gerenciar séries ativas</button>
            <div id="popSala">
                <img src="close.png" id="fechaPop" class="fecha">
                <h3>Gerenciador de séries</h3>
                <div id="scroll">
                    <!--<h4>Fundamental</h4>
                    <table>
                        <tr>
                            <td class="texto">6º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                    </table>
                    <h4 id="meio">Médio</h4>
                    <table>
                        <tr>
                            <td class="texto">1º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º A</td>
                            <td class="checkbox"><input type="checkbox"></td>
                        </tr>
                    </table>-->
                    <div id="dBut"><button id="serAlt">Salvar alterações</button></div>
                </div>
            </div>
        </aside>
        <aside>
            <h1>Tutores:</h1>
            <button id="addTutor">Adicionar Tutor</button>
            <table id="tabelaTutores">
                <tr>
                    <td class="TutorName">Nome</td>
                    <td class="clube">Clube</td>
                    <td class="edt">Editar</td>
                    <td class="exc">Excluir</td>
                </tr>
            </table>
            <div id="modalTutor">
                <div id="contentTutor">
                    <img src="close.png" alt="fechar" id="fechaTutor" class="fecha">
                    <h1>Adicionar Tutores</h1>
                    <div class="inputsTutor">
                        <label for="NovoNome">Nome:</label>
                        <input type="text" name="" id="NovoNome">
                    </div>
                    <div class="inputsTutor">
                        <label for="NovoClube">Clube:</label>
                        <input type="text" name="" id="NovoClube">
                    </div>
                    <button id="salvarTutor">Adicionar</button>
                    <button id="edtTutor">Editar</button>
                </div>
            </div>
        </aside>
        <div id="overlay1"></div>
    </main>

    <script src="script1.js"></script>
</body>

</html>