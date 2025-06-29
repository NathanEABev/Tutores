//informações da direção

const abPSala = document.getElementById("atPopSala")
const PSala = document.getElementById("popSala")
const overlay1 = document.getElementById("overlay1")
const fechaSala = document.getElementById("fechaPop")
const enviaSala = document.getElementById("serAlt")

abPSala.addEventListener("click", function() {
    PSala.style.display = "flex"
    overlay1.style.display = "block"

    fechaSala.addEventListener("click", function() {
        PSala.style.display = "none"
        overlay1.style.display = "none"
    })

    overlay1.addEventListener("click", function() {
        PSala.style.display = "none"
        overlay1.style.display = "none"
    })

    enviaSala.addEventListener("click", function() {
        alert("Substitui pelo código do db")

        PSala.style.display = "none"
        overlay1.style.display = "none"
    })
})

<<<<<<< HEAD
var mostrarInfo = document.querySelectorAll(".td-mostra")
mostrarInfo.forEach(mostraInfo)

function mostraInfo(elemento) {
    elemento.addEventListener("click", function() {
        alert("teste")
    })    
=======
var hover = document.getElementsByClassName("abOPs")[all]
hover.addEventListener("mouseover", abOps())

function abOps() {
    alert("teste")
>>>>>>> 9ad16c3e980f3dea4003ab46f8d67e8eebf1b365
}