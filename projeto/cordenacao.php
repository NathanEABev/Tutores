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
                    <div>
                        <p><strong>Primeira Opção: </strong><span id="priOP">tutor 1</span></p>
                        <span class="mudaTutor" id="muda1">Mudar para</span>
                    </div>
                    <div>
                        <p><strong>Segunda Opção: </strong><span id="segOP">tutor 2</span></p>
                        <span class="mudaTutor" id="muda2">Mudar para</span>
                    </div>
                    <div>
                        <p><strong>Terceira Opção: </strong><span id="terOP">tutor 3</span></p>
                        <span class="mudaTutor" id="muda3">Mudar para</span>
                    </div>
                    <div>
                        <div>
                            <label for="outros"><strong>Outro: </strong></label>
                            <select name="outros" id="outros">
                                <option value="esse">Selecionar Tutor</option>
                            </select>
                        </div>
                        <span class="mudaTutor" id="muda4">Mudar para</span>
                    </div>
                </div>
            </div>
        </div>
        <aside id="aTurnos">
            <h1>Configuração de turnos:</h1>
            <div class="radios">
                <input type="radio" name="turnos" value="1" id="turno1">
                <label for="T1">Turno único</label>
            </div>
            <div class="radios">
                <input type="radio" name="turnos" value="2" id="turno2">
                <label for="T2">Turno duplo</label>
            </div>
            <button id="salvarTurno">Salvar alterações</button>
        </aside>
        <aside>
            <h1>Séries ativas:</h1>
            <button id="atPopSala">Gerenciar séries ativas</button>
            <div id="popSala">
                <img src="close.png" id="fechaPop" class="fecha">
                <h3>Gerenciador de séries</h3>
                <div id="scroll">
                    <h4>Fundamental</h4>
                    <table id="fundamental">
                        <tr>
                            <td class="texto">6º A</td>
                            <td class="checkbox"><input type="checkbox" id="A6"></td>
                        </tr>
                        <tr>
                            <td class="texto">6º B</td>
                            <td class="checkbox"><input type="checkbox" id="B6"></td>
                        </tr>
                        <tr>
                            <td class="texto">6º C</td>
                            <td class="checkbox"><input type="checkbox" id="C6"></td>
                        </tr>
                        <tr>
                            <td class="texto">6º D</td>
                            <td class="checkbox"><input type="checkbox" id="D6"></td>
                        </tr>
                        <tr>
                            <td class="texto">6º E</td>
                            <td class="checkbox"><input type="checkbox" id="E6"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º A</td>
                            <td class="checkbox"><input type="checkbox" id="A7"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º B</td>
                            <td class="checkbox"><input type="checkbox" id="B7"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º C</td>
                            <td class="checkbox"><input type="checkbox" id="C7"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º D</td>
                            <td class="checkbox"><input type="checkbox" id="D7"></td>
                        </tr>
                        <tr>
                            <td class="texto">7º E</td>
                            <td class="checkbox"><input type="checkbox" id="E7"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º A</td>
                            <td class="checkbox"><input type="checkbox" id="A8"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º B</td>
                            <td class="checkbox"><input type="checkbox" id="B8"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º C</td>
                            <td class="checkbox"><input type="checkbox" id="C8"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º D</td>
                            <td class="checkbox"><input type="checkbox" id="D8"></td>
                        </tr>
                        <tr>
                            <td class="texto">8º E</td>
                            <td class="checkbox"><input type="checkbox" id="E8"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º A</td>
                            <td class="checkbox"><input type="checkbox" id="A9"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º B</td>
                            <td class="checkbox"><input type="checkbox" id="B9"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º C</td>
                            <td class="checkbox"><input type="checkbox" id="C9"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º D</td>
                            <td class="checkbox"><input type="checkbox" id="D9"></td>
                        </tr>
                        <tr>
                            <td class="texto">9º E</td>
                            <td class="checkbox"><input type="checkbox" id="E9"></td>
                        </tr>
                    </table>
                    <h4 id="meio">Médio</h4>
                    <table id="tabelaMedio">
                        <tr>
                            <td class="texto">1º A</td>
                            <td class="checkbox"><input type="checkbox" id="A1"></td>
                        </tr>
                        <tr>
                            <td class="texto">1º B</td>
                            <td class="checkbox"><input type="checkbox" id="B1"></td>
                        </tr>
                        <tr>
                            <td class="texto">1º C</td>
                            <td class="checkbox"><input type="checkbox" id="C1"></td>
                        </tr>
                        <tr>
                            <td class="texto">1º D</td>
                            <td class="checkbox"><input type="checkbox" id="D1"></td>
                        </tr>
                        <tr>
                            <td class="texto">1º E</td>
                            <td class="checkbox"><input type="checkbox" id="E1"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º A</td>
                            <td class="checkbox"><input type="checkbox" id="A2"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º B</td>
                            <td class="checkbox"><input type="checkbox" id="B2"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º C</td>
                            <td class="checkbox"><input type="checkbox" id="C2"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º D</td>
                            <td class="checkbox"><input type="checkbox" id="D2"></td>
                        </tr>
                        <tr>
                            <td class="texto">2º E</td>
                            <td class="checkbox"><input type="checkbox" id="E2"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º A</td>
                            <td class="checkbox"><input type="checkbox" id="A3"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º B</td>
                            <td class="checkbox"><input type="checkbox" id="B3"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º C</td>
                            <td class="checkbox"><input type="checkbox" id="C3"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º D</td>
                            <td class="checkbox"><input type="checkbox" id="D3"></td>
                        </tr>
                        <tr>
                            <td class="texto">3º E</td>
                            <td class="checkbox"><input type="checkbox" id="E3"></td>
                        </tr>
                    </table>
                    <div id="dBut"><button id="serAlt">Salvar alterações</button></div>
                </div>
            </div>
        </aside>
        <aside>
            <h1>Gerenciar Tutores:</h1>
            <button id="addTutor">Adicionar Tutor</button>
            <table>
                <tr>
                    <td class="TutorName">Nome</td>
                    <td class="clube">Clube</td>
                    <td class="edt">Editar</td>
                    <td class="exc">Excluir</td>
                </tr>
            </table>
            <table id="tabelaTutores"></table>
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
        <div id="paginacaoTutores">
                <button id="prevPage">&lt; Anterior</button>
                <span id="pageInfo"></span>
                <button id="nextPage">Próximo &gt;</button>
            </div>
        <div id="overlay1"></div>
    </main>

    <script src="script1.js"></script>
</body>

</html>