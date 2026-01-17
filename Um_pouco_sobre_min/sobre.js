function animacaoEntrada() {

    const myObserver = new IntersectionObserver((verme) => {
            verme.forEach((ver) => {
                if(ver.isIntersecting){
                    ver.target.classList.add('show')
                } else {
                    ver.target.classList.remove('show')
                }
            })
        })

        const elementos = document.querySelectorAll('.hidden')

        elementos.forEach((elemen) => myObserver.observe(elemen))
}

animacaoEntrada()

function initFundoSonoros() {

    const botao = document.querySelectorAll('a')
    const somBtn = new Audio('sons/0116.mp4')

    function somClickBtn() {

        somBtn.play()
    }

    botao.forEach((bton) => {
        bton.addEventListener('click', somClickBtn)
    })

    const somFundo = new Audio('sons/merx-market-song-33936.mp3')

    function musicaFundo() {
        somFundo.loop = true
        somFundo.play()
    }

    window.addEventListener('mousemove', musicaFundo)
}

initFundoSonoros()