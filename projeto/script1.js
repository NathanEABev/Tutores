//carregamento de tutores e alunos

document.addEventListener("DOMContentLoaded", () => {
    //criação das fichas de tutores

    fetch("tutor.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=listar"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const tabela = document.getElementById("tabelaTutores")
                const fichas = document.getElementById("fichas")

                data.tutores.forEach(tutor => {
                    const linha = document.createElement("tr")
                    linha.dataset.id = tutor.id
                    linha.innerHTML = `
                        <td class="TutorName">${tutor.nome}</td>
                        <td class="clube">${tutor.clube}</td>
                        <td class="edt"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#FFbb00">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                        </svg></td>
                    <td class="exc"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#EA3323">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg></td>
                    `
                    tabela.appendChild(linha)

                    const novaDiv = document.createElement("div")
                    novaDiv.classList.add("iten")
                    novaDiv.id = tutor.id
                    novaDiv.innerHTML = `
                        <div>
                            <h1>${tutor.nome}</h1>
                            <h2>Alunos: <span class="numAl">0</span></h2>
                        </div>
                        <table>
                            <tr>
                                <td class="base">Nome</td>
                                <td class="td-serie">Série</td>
                                <td class="td-tutores">Tutores</td>
                            </tr>
                        </table>
                    `
                    fichas.appendChild(novaDiv)
                })

                aplicarEventos()
                paginarTabela("tabelaTutores", 5)

                function formatarSerie(serie) {
                    if (!serie) return "";
                    const numero = serie.replace(/[^0-9]/g, ""); // só o número
                    const letra = serie.replace(/[^a-zA-Z]/g, "").toUpperCase(); // só a letra
                    return `${numero}º${letra}`;
                }


                //inserção dos alunos nas fichas correspondentes

                fetch("link.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: "acao=listarAlunos"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === "success") {
                            data.alunos.forEach(aluno => {
                                const ficha = document.getElementById(aluno.atual);
                                if (ficha) {
                                    const tabela = ficha.querySelector("table")
                                    const linhaAluno = document.createElement("tr")
                                    linhaAluno.dataset.id = aluno.id;
                                    linhaAluno.dataset.nome = aluno.nome
                                    linhaAluno.dataset.serie = aluno.serie
                                    linhaAluno.dataset.atual = aluno.atual
                                    linhaAluno.dataset.op1 = aluno.op1
                                    linhaAluno.dataset.op2 = aluno.op2
                                    linhaAluno.dataset.op3 = aluno.op3

                                    linhaAluno.dataset.atual = aluno.atual
                                    linhaAluno.dataset.nomeOp1 = aluno.nome_op1
                                    linhaAluno.dataset.nomeOp2 = aluno.nome_op2
                                    linhaAluno.dataset.nomeOp3 = aluno.nome_op3

                                    linhaAluno.innerHTML = `
                    <td class="base">${aluno.nome}</td>
                    <td class="td-serie">${formatarSerie(aluno.serie)}</td>
                    <td class="td-tutores"><span class="td-mostra">Mostrar</span></td>
                `
                                    tabela.appendChild(linhaAluno)

                                    const contador = ficha.querySelector(".numAl");
                                    let numAlu = tabela.querySelectorAll("tr").length - 1;

                                    contador.textContent = numAlu;

                                    verificaNumAl(ficha)
                                    clickModal()
                                }
                            })
                        } else {
                            console.warn(data.message)
                        }
                    })
                    .catch(err => console.error(err))
            } else {
                alert("Erro ao carregar lista de tutores.")
            }
        })
        .catch(err => console.error(err))

    //configurações do modo de turnos

    const btnSalvar = document.getElementById("salvarTurno");

    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=buscar"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById("turno" + data.turnos).checked = true;
            }
        });

    btnSalvar.addEventListener("click", () => {
        const selecionado = document.querySelector("input[name='turnos']:checked").value;

        fetch("link.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `acao=salvar&turnos=${selecionado}`
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
            });
    });
})

//scroll horizontal

/*const scrollCont = document.getElementById("fichas")

scrollCont.addEventListener("wheel", (e) => {
    e.preventDefault()
    scrollCont.scrollLeft += e.deltaY * 3.5
})*/

//pop-up salas

const abPSala = document.getElementById("atPopSala")
const PSala = document.getElementById("popSala")
const overlay1 = document.getElementById("overlay1")
const fechaSala = document.getElementById("fechaPop")
const enviaSala = document.getElementById("serAlt")

abPSala.addEventListener("click", function () {
    PSala.style.display = "flex"
    overlay1.style.display = "block"
    document.body.style.overflow = "hidden"

    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=listarSalas"
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('A resposta do servidor não foi OK');
            }
            return res.json();
        })
        .then(data => {
            if (data.status === "success") {
                const checkboxes = document.querySelectorAll("#scroll input[type='checkbox']");
                checkboxes.forEach(cb => {
                    cb.checked = data.salas.includes(cb.id);
                });
            } else {
                console.error("Erro ao listar salas:", data.message);
            }
        })
        .catch(err => console.error("Erro no fetch ao listar salas:", err));
})

enviaSala.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#scroll input[type='checkbox']");
    const selecionadas = [];

    checkboxes.forEach(cb => {
        // Envia apenas as salas que foram marcadas
        if (cb.checked) {
            selecionadas.push(cb.id);
        }
    });

    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=salvarSalas&salas=${encodeURIComponent(JSON.stringify(selecionadas))}`
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                alert("Salas salvas com sucesso!");
            } else {
                alert("Erro: " + data.message);
            }
        })
        .catch(err => console.error("Erro ao salvar salas:", err));

    // Fecha o popup após salvar
    PSala.style.display = "none";
    overlay1.style.display = "none";
    document.body.style.overflow = "";
});


// fechar pop-up da sala
function fecharPopupSalas() {
    PSala.style.display = "none";
    overlay1.style.display = "none";
    document.body.style.overflow = "";
}

fechaSala.addEventListener("click", fecharPopupSalas);
overlay1.addEventListener("click", fecharPopupSalas);

//pop-up opções

const mostraTutor = document.querySelectorAll(".td-mostra")
const modalTutor = document.getElementById("modalTutores")
const fechaTutores = document.getElementById("fechaModal")

mostraTutor.forEach((mostraTutor) => {
    mostraTutor.addEventListener("click", () => {
        modalTutor.style.display = "block"
        overlay1.style.display = "block"
        document.body.style.overflow = "hidden"

        fechaTutores.addEventListener("click", function () {
            modalTutor.style.display = "none"
            overlay1.style.display = "none"
            document.body.style.overflow = ""
        })

        overlay1.addEventListener("click", function () {
            modalTutor.style.display = "none"
            overlay1.style.display = "none"
            document.body.style.overflow = ""
        })
    })
})

//pop-up adicionar tutor

const InNome = document.getElementById("NovoNome")
var nome = ""

InNome.addEventListener("change", function () {
    nome = InNome.value
});

const InClube = document.getElementById("NovoClube")
var clube = ""

InClube.addEventListener("change", function () {
    clube = InClube.value
});

const addTutor = document.getElementById("addTutor")
const modalAddTutor = document.getElementById("modalTutor")
const fechaAddTutor = document.getElementById("fechaTutor")

addTutor.addEventListener("click", () => {
    modalAddTutor.style.display = "block"
    overlay1.style.display = "block"
    document.body.style.overflow = "hidden"

    InNome.value = ""
    InClube.value = ""
})

fechaAddTutor.addEventListener("click", function () {
    modalAddTutor.style.display = "none"
    overlay1.style.display = "none"
    document.body.style.overflow = ""
})

overlay1.addEventListener("click", function () {
    modalAddTutor.style.display = "none"
    overlay1.style.display = "none"
    document.body.style.overflow = ""
})

//salvamento dinâmico de tutores

const salvarTutor = document.getElementById("salvarTutor")
salvarTutor.addEventListener("click", () => {
    fetch("tutor.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=adicionar&nome=${encodeURIComponent(nome)}&clube=${encodeURIComponent(clube)}`
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const tabela = document.getElementById("tabelaTutores")
                const novaLinha = document.createElement("tr")
                novaLinha.dataset.id = data.id
                novaLinha.innerHTML = `
                <td class="TutorName">${data.nome}</td>
                <td class="clube">${data.clube}</td>
                <td class="edt"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#FFbb00">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                        </svg></td>
                    <td class="exc"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#EA3323">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg></td>
            `
                tabela.appendChild(novaLinha)
                paginarTabela("tabelaTutores", 5)
                aplicarEventos()

                const fichas = document.getElementById("fichas")

                const novaDiv = document.createElement("div")
                novaDiv.classList.add("iten")
                novaDiv.id = data.id
                novaDiv.innerHTML = `
                    <div>
                        <h1>${data.nome}</h1>
                        <h2>Alunos: <span class="numAl">0</span></h2>
                    </div>
                    <table>
                        <tr>
                            <td class="base">Nome</td>
                            <td class="td-serie">Série</td>
                            <td class="td-tutores">Tutores</td>
                        </tr>
                    </table>
                `

                fichas.appendChild(novaDiv)


                InNome.value = ""
                InClube.value = ""
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))

    modalAddTutor.style.display = "none"
    overlay1.style.display = "none"
    document.body.style.overflow = ""
})

//edição e exclusão de tutores

function aplicarEventos() {
    document.querySelectorAll(".edt").forEach(edtBtn => {
        edtBtn.onclick = () => {
            const linha = edtBtn.closest("tr")
            const id = linha.dataset.id

            modalAddTutor.style.display = "block"
            overlay1.style.display = "block"
            document.body.style.overflow = "hidden"

            salvarTutor.style.display = "none"
            document.getElementById("edtTutor").style.display = "block"
            document.querySelector("#modalTutor h1").textContent = "Editar tutor"

            fetch("tutor.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `acao=buscar&id=${id}`
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        document.getElementById("NovoNome").value = data.nome
                        document.getElementById("NovoClube").value = data.clube
                    } else {
                        alert(data.message)
                    }
                })
                .catch(err => console.error(err))

            document.querySelectorAll("tr").forEach(tr => tr.removeAttribute("data-id-editando"))
            linha.setAttribute("data-id-editando", "")
        }
    })

    document.querySelectorAll(".exc").forEach(excBtn => {
        excBtn.onclick = () => {
            const linha = excBtn.closest("tr")
            const id = linha.dataset.id

            if (confirm("Tem certeza que deseja excluir este tutor?")) {
                fetch("tutor.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: `acao=excluir&id=${id}`
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === "success") {
                            linha.remove()
                            const card = document.getElementById(id)
                            if (card) card.remove()

                            paginarTabela("tabelaTutores", 5)
                        } else {
                            alert(data.message)
                        }
                    })
            }
        }
    })
}

const edtTutor = document.getElementById("edtTutor")

edtTutor.addEventListener("click", () => {
    const id = document.querySelector("tr[data-id-editando]").dataset.id
    const nome = document.getElementById("NovoNome").value
    const clube = document.getElementById("NovoClube").value

    fetch("tutor.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=editar&id=${id}&nome=${encodeURIComponent(nome)}&clube=${encodeURIComponent(clube)}`
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const linha = document.querySelector(`tr[data-id="${id}"]`)
                linha.querySelector(".TutorName").textContent = nome
                linha.querySelector(".clube").textContent = clube

                const card = document.getElementById(id)
                if (card) {
                    card.querySelector("h1").textContent = nome
                }

                InNome.value = ""
                InClube.value = ""

                alert("Tutor atualizado com sucesso!")
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))

    modalAddTutor.style.display = "none"
    overlay1.style.display = "none"
    document.body.style.overflow = ""
})

//abrir modal dos tutores

function clickModal() {
    document.querySelectorAll(".td-mostra").forEach(mostra => {
        mostra.onclick = () => {
            const linha = mostra.closest("tr");
            const idAluno = linha.dataset.nome;
            const nome = linha.dataset.nome;
            const nomeOp1 = linha.dataset.nomeOp1;
            const nomeOp2 = linha.dataset.nomeOp2;
            const nomeOp3 = linha.dataset.nomeOp3;

            document.getElementById("nomeFicha").textContent = nome;

            // Preenche spans
            const spanPri = document.getElementById("priOP");
            spanPri.textContent = nomeOp1;
            spanPri.dataset.id = linha.dataset.op1;

            const spanSeg = document.getElementById("segOP");
            spanSeg.textContent = nomeOp2;
            spanSeg.dataset.id = linha.dataset.op2;

            const spanTer = document.getElementById("terOP");
            spanTer.textContent = nomeOp3;
            spanTer.dataset.id = linha.dataset.op3;

            // Preenche select com todos os tutores
            const selectOutros = document.getElementById("outros");
            selectOutros.innerHTML = `<option value="">Selecionar Tutor</option>`;
            document.querySelectorAll(".iten").forEach(divTutor => {
                const opt = document.createElement("option");
                opt.value = divTutor.id;
                opt.textContent = divTutor.querySelector("h1").textContent;
                selectOutros.appendChild(opt);
            });

            // Oculta o botão do tutor onde ele já está
            const tutorAtual = linha.closest(".iten").id;
            document.querySelectorAll(".mudaTutor").forEach(btn => btn.style.display = "inline-block");
            if (tutorAtual === linha.dataset.op1) document.getElementById("muda1").style.display = "none";
            if (tutorAtual === linha.dataset.op2) document.getElementById("muda2").style.display = "none";
            if (tutorAtual === linha.dataset.op3) document.getElementById("muda3").style.display = "none";

            // Eventos dos spans
            document.getElementById("muda1").onclick = () => mudarAlunoDeTutor(idAluno, spanPri.dataset.id);
            document.getElementById("muda2").onclick = () => mudarAlunoDeTutor(idAluno, spanSeg.dataset.id);
            document.getElementById("muda3").onclick = () => mudarAlunoDeTutor(idAluno, spanTer.dataset.id);
            document.getElementById("muda4").onclick = () => {
                const destino = selectOutros.value;
                if (destino) mudarAlunoDeTutor(idAluno, destino);
            };

            // Abre modal
            modalTutor.style.display = "block";
            overlay1.style.display = "block";
            document.body.style.overflow = "hidden";

            fechaTutores.onclick = () => {
                modalTutor.style.display = "none";
                overlay1.style.display = "none";
                document.body.style.overflow = "";
            };

            overlay1.onclick = () => {
                modalTutor.style.display = "none";
                overlay1.style.display = "none";
                document.body.style.overflow = "";
            };
        };
    });
}

function mudarAlunoDeTutor(idAluno, tutorDestino) {
    if (!confirm("Deseja realmente fazer esta alteração?")) return;

    // linha do aluno atual
    const linha = document.querySelector(`tr[data-nome="${idAluno}"]`);
    if (!linha) return;

    const atual = linha.dataset.atual;
    const idAl = linha.dataset.id;

    // se for o mesmo tutor, não faz nada
    if (atual === tutorDestino) return;

    // Atualiza no backend
    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=mudarTutor&idAluno=${encodeURIComponent(idAl)}&novoTutor=${encodeURIComponent(tutorDestino)}`
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                // remove aluno da tabela atual
                const fichaAtual = document.getElementById(atual);
                const tabelaAtual = fichaAtual.querySelector("table");
                linha.remove();

                // atualiza contador e cor da ficha atual
                const contadorAtual = fichaAtual.querySelector(".numAl");
                contadorAtual.textContent = tabelaAtual.querySelectorAll("tr").length - 1;
                verificaNumAl(fichaAtual);

                // adiciona na tabela do tutor destino
                const fichaDestino = document.getElementById(tutorDestino);
                if (fichaDestino) {
                    const tabelaDestino = fichaDestino.querySelector("table");
                    tabelaDestino.appendChild(linha);

                    // atualiza dataset do aluno para o novo tutor
                    linha.dataset.atual = tutorDestino;

                    // atualiza contador e cor da ficha destino
                    const contadorDestino = fichaDestino.querySelector(".numAl");
                    contadorDestino.textContent = tabelaDestino.querySelectorAll("tr").length - 1;
                    verificaNumAl(fichaDestino);
                }

                alert("Aluno movido com sucesso!");

                modalTutor.style.display = "none";
                overlay1.style.display = "none";
                document.body.style.overflow = "";
            } else {
                alert(data.message);
            }
        })
        .catch(err => console.error(err));
}

// Função para verificar o número de alunos em uma ficha específica
function verificaNumAl(ficha) {
    const contador = ficha.querySelector(".numAl");
    const numAlu = parseInt(contador.textContent, 10);

    const h1 = ficha.querySelector("h1");
    const h2 = ficha.querySelector("h2");

    if (numAlu > 1) {
        h1.style.color = "red";
        h2.style.color = "red";
    } else {
        h1.style.color = "";
        h2.style.color = "";
    }
}

function paginarTabela(tabelaId, itensPorPagina = 5) {
    const tabela = document.getElementById(tabelaId);
    if (!tabela) return;

    // detecta linhas de cabeçalho (thead ou <th>)
    const thead = tabela.querySelector("thead");
    let headerRows = [];
    if (thead) {
        headerRows = Array.from(thead.querySelectorAll("tr"));
    } else if (tabela.querySelector("tr th")) {
        headerRows = [tabela.querySelector("tr")];
    }

    const allRows = Array.from(tabela.querySelectorAll("tr"));
    const dataRows = allRows.filter(r => !headerRows.includes(r));

    // cria controles se não existirem
    let pagContainer = document.getElementById("paginacaoTutores");
    if (!pagContainer) {
        pagContainer = document.createElement("div");
        pagContainer.id = "paginacaoTutores";
        pagContainer.style.marginTop = "8px";
        pagContainer.style.display = "flex";
        pagContainer.style.alignItems = "center";
        pagContainer.style.gap = "8px";

        const prevBtn = document.createElement("button");
        prevBtn.id = "prevPage";
        prevBtn.type = "button";
        prevBtn.textContent = "Anterior";

        const pageInfo = document.createElement("span");
        pageInfo.id = "pageInfo";

        const nextBtn = document.createElement("button");
        nextBtn.id = "nextPage";
        nextBtn.type = "button";
        nextBtn.textContent = "Próximo";

        pagContainer.appendChild(prevBtn);
        pagContainer.appendChild(pageInfo);
        pagContainer.appendChild(nextBtn);

        // insere depois da tabela
        tabela.parentNode.insertBefore(pagContainer, tabela.nextSibling);
    }

    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageInfoSpan = document.getElementById("pageInfo");

    const totalPaginas = Math.max(1, Math.ceil(dataRows.length / itensPorPagina));
    let paginaAtual = 1;

    function mostrarPagina(pagina) {
        if (pagina < 1) pagina = 1;
        if (pagina > totalPaginas) pagina = totalPaginas;

        dataRows.forEach((row, idx) => {
            row.style.display = (idx >= (pagina - 1) * itensPorPagina && idx < pagina * itensPorPagina) ? "" : "none";
        });

        // mantém o header visível
        headerRows.forEach(hr => { if (hr) hr.style.display = ""; });

        pageInfoSpan.textContent = `Página ${pagina} de ${totalPaginas}`;
        prevPageBtn.disabled = pagina === 1;
        nextPageBtn.disabled = pagina === totalPaginas;
        paginaAtual = pagina;
    }

    // substitui handlers (evita duplicar listeners)
    prevPageBtn.onclick = () => mostrarPagina(paginaAtual - 1);
    nextPageBtn.onclick = () => mostrarPagina(paginaAtual + 1);

    // mostra a página inicial (1)
    mostrarPagina(1);
}
