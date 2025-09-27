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
                    <div id="fundamental">
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>6ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">6º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A6"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">6º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B6"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">6º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C6"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">6º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D6"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">6º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E6"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>7ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">7º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A7"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">7º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B7"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">7º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C7"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">7º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D7"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">7º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E7"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>8ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">8º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A8"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">8º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B8"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">8º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C8"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">8º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D8"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">8º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E8"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>9ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">9º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A9"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">9º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B9"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">9º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C9"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">9º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D9"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">9º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E9"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <h4 id="meio">Médio</h4>
                    <div id="tabelaMedio">
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>1ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">1º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A1"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">1º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B1"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">1º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C1"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">1º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D1"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">1º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E1"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>2ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">2º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A2"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">2º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B2"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">2º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C2"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">2º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D2"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">2º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E2"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="cont-toggle">
                            <div class="btn-toggle">
                                <p>3ª série</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <div class="togle-cont">
                                <table>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">3º A</p></td>
                                        <td class="checkbox"><input type="checkbox" id="A3"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">3º B</p></td>
                                        <td class="checkbox"><input type="checkbox" id="B3"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">3º C</p></td>
                                        <td class="checkbox"><input type="checkbox" id="C3"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">3º D</p></td>
                                        <td class="checkbox"><input type="checkbox" id="D3"></td>
                                    </tr>
                                    <tr>
                                        <td class="texto" title="Deseja mudar o nome de exibição?"><p class="serie-nome">3º E</p></td>
                                        <td class="checkbox"><input type="checkbox" id="E3"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
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