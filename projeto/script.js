//variáveis de inicio

let modoTurno = "2";

let unico

let salasAtivas = [];

//identificação de turno e carregamento de tutores

document.addEventListener("DOMContentLoaded", () => {
    // configuração das séries ativas

    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=listarSalas"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                salasAtivas = data.salas;

                // monta os arrays dinamicamente
                unico = salasAtivas;

                opSerie = {
                    tur1: salasAtivas.filter(s => ["6", "7", "8", "9"].includes(s.slice(1))),
                    tur2: salasAtivas.filter(s => ["1", "2", "3"].includes(s.slice(1)))
                };
            } else {
                console.error("Erro:", data.message);
            }
        })
        .catch(err => console.error("Erro no fetch de salas:", err));

    //verifica o modo de turno
    fetch("link.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=buscar"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                modoTurno = data.turnos;
                if (data.turnos === "1") {
                    document.getElementById("aTurno").style.display = "none";
                    seleSerie.disabled = false;
                    turnoAti = "unico"

                    if (turnoAti != "seleTur") {
                        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
                        seleSerie.disabled = false

                        unico.forEach(item => {
                            const numero = item.slice(1)
                            const letra = item[0]

                            const option = document.createElement("option")
                            option.value = item
                            option.textContent = `${numero}º ano ${letra}`
                            seleSerie.appendChild(option)
                        })
                    } else {
                        seleSerie.disabled = true
                        seleAluno.disabled = true
                        addAlu.disabled = true

                        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
                        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
                    }
                } else {
                    document.getElementById("aTurno").style.display = "block";
                }
            }
        });

    //carrega os tutores

    fetch("tutor.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "acao=listar"
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const selects = [
                    document.getElementById("primeira"),
                    document.getElementById("segunda"),
                    document.getElementById("terceira")
                ];

                data.tutores.forEach(tutor => {
                    const option = document.createElement("option");
                    option.value = tutor.id;
                    option.textContent = `${tutor.nome} - ${tutor.clube}`;
                    selects.forEach(sel => sel.appendChild(option.cloneNode(true)));
                });
            } else {
                console.error(data.message);
            }
        })
        .catch(err => console.error("Erro ao carregar tutores:", err));
});

//select do Turno

const seleTurno = document.getElementById("sTurno")
var turnoAti = "seleTur"

seleTurno.addEventListener("change", function () {
    turnoAti = seleTurno.value
});

//select da serie

const seleSerie = document.getElementById("sTurma")
var serieAti = "seleSer"

seleSerie.addEventListener("change", function () {
    serieAti = seleSerie.value
});

//input do aluno

const seleAluno = document.getElementById("nomeAl")
var alunoAti = ""

seleAluno.addEventListener("change", function () {
    alunoAti = seleAluno.value
});

//select da primeira opção

const SelePrimeira = document.getElementById("primeira")
var priAti = "selePri"

SelePrimeira.addEventListener("change", function () {
    priAti = SelePrimeira.value
});

//select da segunda opção

const SeleSegunda = document.getElementById("segunda")
var segAti = "seleSeg"

SeleSegunda.addEventListener("change", function () {
    segAti = SeleSegunda.value
});

//select da terceira opção

const SeleTerceira = document.getElementById("terceira")
var terAti = "seleTer"

SeleTerceira.addEventListener("change", function () {
    terAti = SeleTerceira.value
});

//padrão dos selects

seleSerie.disabled = true
seleAluno.disabled = true

//habilitar select da serie

seleTurno.addEventListener("change", function () {
    if (turnoAti != "seleTur") {
        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
        seleSerie.disabled = false

        opSerie[turnoAti].forEach(item => {
            const numero = item.slice(1)
            const letra = item[0]

            const option = document.createElement("option")
            option.value = item
            option.textContent = `${numero}º ano ${letra}`
            seleSerie.appendChild(option)
        })
    } else {
        seleSerie.disabled = true
        seleAluno.disabled = true
        addAlu.disabled = true

        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
    }
})

//habilitar input dos alunos

seleSerie.addEventListener("change", function () {
    if (serieAti != "seleSer") {
        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
        seleAluno.disabled = false
    } else {
        seleAluno.disabled = true
    }
})

const cobre = document.getElementById("overlay")

//captar erros e envio

const enviar = document.getElementById("vai")
const erroEnvio = document.getElementById("pErroEnvia")

enviar.addEventListener("click", function () {
    if (modoTurno === "1") {
        if (serieAti === "seleSer" || alunoAti === "" || priAti === "selePri" || segAti === "seleSeg" || terAti === "seleTer") {
            erroEnvio.innerText = "Preencha todos as campos a cima"
        } else if (priAti == segAti || priAti == terAti || segAti == terAti) {
            erroEnvio.innerText = 'Uma ou mais opções iguais'
        } else {
            erroEnvio.innerText = ""

            document.getElementById("dados").innerHTML = `<strong>Série:</strong> ${seleSerie.querySelector(`option[value="${serieAti}"]`).textContent}<br><strong>Aluno:</strong> ${seleAluno.value}<br><strong>Primeira opção:</strong> ${SelePrimeira.querySelector(`option[value="${priAti}"]`).textContent}<br><strong>Segunda opção:</strong> ${SeleSegunda.querySelector(`option[value="${segAti}"]`).textContent}<br><strong>Terceira opção:</strong> ${SeleTerceira.querySelector(`option[value="${terAti}"]`).textContent}`

            document.getElementById("popConfirma").style.display = "flex"
            cobre.style.display = "block"

            document.getElementById("fechaC").addEventListener("click", function () {
                document.getElementById("popConfirma").style.display = "none"
                cobre.style.display = "none"
            })
        }
    } else {
        if (turnoAti === "seleTur" || serieAti === "seleSer" || alunoAti === "" || priAti === "selePri" || segAti === "seleSeg" || terAti === "seleTer") {
            erroEnvio.innerText = "Preencha todos as campos a cima"
        } else if (priAti == segAti || priAti == terAti || segAti == terAti) {
            erroEnvio.innerText = 'Uma ou mais opções iguais'
        } else {
            erroEnvio.innerText = ""

            document.getElementById("dados").innerHTML = `<strong>Turno:</strong> ${seleTurno.querySelector(`option[value="${turnoAti}"]`).textContent}<br><strong>Série:</strong> ${seleSerie.querySelector(`option[value="${serieAti}"]`).textContent}<br><strong>Aluno:</strong> ${seleAluno.value}<br><strong>Primeira opção:</strong> ${SelePrimeira.querySelector(`option[value="${priAti}"]`).textContent}<br><strong>Segunda opção:</strong> ${SeleSegunda.querySelector(`option[value="${segAti}"]`).textContent}<br><strong>Terceira opção:</strong> ${SeleTerceira.querySelector(`option[value="${terAti}"]`).textContent}`

            document.getElementById("popConfirma").style.display = "flex"
            cobre.style.display = "block"

            document.getElementById("fechaC").addEventListener("click", function () {
                document.getElementById("popConfirma").style.display = "none"
                cobre.style.display = "none"
            })
        }
    }
});

//enviar confirmação

document.getElementById("enviar").addEventListener("click", function () {
    let dados

    if (modoTurno === "1") {
        dados =
            "nome=" + encodeURIComponent(alunoAti) +
            "&sala=" + encodeURIComponent(serieAti) +
            "&atual=" + encodeURIComponent(priAti) +
            "&opcao1=" + encodeURIComponent(priAti) +
            "&opcao2=" + encodeURIComponent(segAti) +
            "&opcao3=" + encodeURIComponent(terAti);
    } else {
        dados =
            "nome=" + encodeURIComponent(alunoAti) +
            "&sala=" + encodeURIComponent(serieAti) +
            "&turno=" + encodeURIComponent(turnoAti) +
            "&atual=" + encodeURIComponent(priAti) +
            "&opcao1=" + encodeURIComponent(priAti) +
            "&opcao2=" + encodeURIComponent(segAti) +
            "&opcao3=" + encodeURIComponent(terAti);
    }

    console.log(dados)

    fetch("salva.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: dados
    })
        .then(Response => Response.text())
        .then(data => {
            alert("salvo com sucesso");
        });

    document.getElementById("popConfirma").style.display = "none"
    cobre.style.display = "none"

    window.location.reload(); window.location.reload();
});