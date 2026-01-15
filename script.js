const abaMenu = document.querySelectorAll('a')
const somMenu = new Audio('sons/collect-points-190037 (1).mp3')
const somClick = new Audio('sons/game-show-correct-tick-sound-416167.mp3')

const fundo = document.querySelector('img')
const somFundo = new Audio('sons/space-440026.mp3')

function somAbaMenu() {

    somMenu.play()
}

function somAbaClick() {

    somClick.play()
}

function somMenuFundo() {

    somFundo.play()
}

abaMenu.forEach((aba) => {
    aba.addEventListener('mousemove', somAbaMenu)
    aba.addEventListener('mousedown', somAbaClick)
})

fundo.addEventListener('mouseenter', somMenuFundo)