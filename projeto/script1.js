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

const addTutor = document.getElementById("addTutor")
const modalAddTutor = document.getElementById("modalTutor")
const fechaAddTutor = document.getElementById("fechaTutor")

addTutor.addEventListener("click", () => {
    modalAddTutor.style.display = "block"
    overlay1.style.display = "block"
    document.body.style.overflow = "hidden"

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
    salvarTutor.addEventListener("click", function () {
        alert("Substitui pelo código do db")

        modalAddTutor.style.display = "none"
        overlay1.style.display = "none"
        document.body.style.overflow = ""
    })
})

/*function verificarSelecionado() {
    const selecionado = document.querySelector('input[name="cor"]:checked');

    if (selecionado) {
        alert("Selecionado: " + selecionado.value);
    } else {
        alert("Nenhuma opção selecionada.");
    }
}*/