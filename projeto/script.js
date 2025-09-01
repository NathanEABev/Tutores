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
    console.log(alunoAti)
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

//opções com base no turno

const opSerie = {
    tur1: ["A6", "B6", "C6", "A7", "B7", "C7", "A8", "B8", "C8", "A9", "B9", "C9"],
    tur2: ["A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3"]
}

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
});

//enviar confirmação

document.getElementById("enviar").addEventListener("click", function () {
    const dados =
        "nome=" + encodeURIComponent(alunoAti) +
        "&turno=" + encodeURIComponent(turnoAti) +
        "&serie=" + encodeURIComponent(serieAti) +
        "&escolha1=" + encodeURIComponent(priAti) +
        "&escolha2=" + encodeURIComponent(segAti) +
        "&escolha3=" + encodeURIComponent(terAti);

    console.log(dados)

    fetch("salva.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: dados
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        });
});