const abaMenu = document.querySelectorAll('a')
const somMenu = new Audio('Tela_Inicial/sons/collect-points-190037 (1).mp3')

function somAbaMenu() {

    somMenu.play()
}

const btnLigado = document.querySelector('.btnLigado')
const btnDesligado = document.querySelector('.btnDesligado')
const somFundo = new Audio('Tela_Inicial/sons/space-440026.mp3')

function somMusicaFundo() {
    somFundo.loop = true
    somFundo.play()
}

function somMenuLigado() {
    somFundo.loop = true
    somFundo.play()
}

function somMenuDesligado() {
    somFundo.pause()
}

abaMenu.forEach((aba) => {
    aba.addEventListener('mouseenter', somAbaMenu)
})

btnLigado.addEventListener('click', somMenuLigado)
btnDesligado.addEventListener('click', somMenuDesligado)
