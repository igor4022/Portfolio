const abaMenu = document.querySelectorAll('a')
const somMenu = new Audio('sons/collect-points-190037 (1).mp3')

function somAbaMenu() {

    somMenu.play()
}

const botao = document.querySelector('button')
const somFundo = new Audio('sons/space-440026.mp3')

function somFundoMenu() {
    somFundo.loop = true
    somFundo.play()
}

abaMenu.forEach((aba) => {
    aba.addEventListener('mouseenter', somAbaMenu)
})

window.addEventListener('click', somFundoMenu)
