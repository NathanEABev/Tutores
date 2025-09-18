document.addEventListener("DOMContentLoaded", () => {
    fetch("tutor.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=listar"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const tabela = document.getElementById("tabelaTutores")

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
                        <h1>${tutor.nome}</h1>
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
            } else {
                alert("Erro ao carregar lista de tutores.")
            }
        })
        .catch(err => console.error(err))
})

//scroll horizontal

const scrollCont = document.getElementById("fichas")

scrollCont.addEventListener("wheel", (e) => {
    e.preventDefault()
    scrollCont.scrollLeft += e.deltaY * 3.5
})

//informações da direção

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

    fechaSala.addEventListener("click", function () {
        PSala.style.display = "none"
        overlay1.style.display = "none"
        document.body.style.overflow = ""
    })

    overlay1.addEventListener("click", function () {
        PSala.style.display = "none"
        overlay1.style.display = "none"
        document.body.style.overflow = ""
    })

    enviaSala.addEventListener("click", function () {
        alert("Substitui pelo código do db")

        PSala.style.display = "none"
        overlay1.style.display = "none"
        document.body.style.overflow = ""
    })
})

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
                aplicarEventos()

                const fichas = document.getElementById("fichas")

                const novaDiv = document.createElement("div")
                novaDiv.classList.add("iten")
                novaDiv.id = data.id
                novaDiv.innerHTML = `
                    <h1>${data.nome}</h1>
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


/*function verificarSelecionado() {
    const selecionado = document.querySelector('input[name="cor"]:checked');

    if (selecionado) {
        alert("Selecionado: " + selecionado.value);
    } else {
        alert("Nenhuma opção selecionada.");
    }
}*/