function animacaoEntrada() {

    const somCarta = new Audio('sons/9fwticq5dm-transition-sfx-2.mp3')
    const myObserver = new IntersectionObserver((verme) => {
        verme.forEach((ver) => {
            if(ver.isIntersecting){
                ver.target.classList.add('show')
                somCarta.play()
            } else {
                ver.target.classList.remove('show')
            }
        })
    })

    const elementos = document.querySelectorAll('.hidden')

    elementos.forEach((elemen) => myObserver.observe(elemen))

}

animacaoEntrada()

function texto() {

    const exemplo1 = document.getElementById('exemplo1')
    const exemplo2 = document.getElementById('exemplo2')
    const exemplo3 = document.getElementById('exemplo3')
    const exemplo4 = document.getElementById('exemplo4')
    const exemplo5 = document.getElementById('exemplo5')
    const exemplo6 = document.getElementById('exemplo6')


    exemplo1.innerHTML = '<span>Criar sites e lojas virtuais:</span> A combinação delas é a base para o desenvolvimento web completo.'

    exemplo2.innerHTML = '<span>Desenvolver aplicativos web:</span> Aplicações que funcionam no navegador, como sistemas de gestão ou ferramentas online.'

    exemplo3.innerHTML = '<span>Fazer a interface de um sistema:</span> Usando HTML, CSS e JavaScript para que o programa seja fácil de usar e visualmente agradável. '

    exemplo4.innerHTML = '<span>Gerenciar o que acontece no servidor:</span> Com PHP e Python, ele garante que a aplicação "entenda" os dados, processe informações e se comunique com o banco de dados. '

    exemplo5.innerHTML = '<span>Criar inteligência artificial e automação:</span> Python é ideal para tarefas de inteligência artificial, aprendizado de máquina e para automatizar processos. '

    exemplo6.innerHTML = '<span>esenvolver jogos online:</span> JavaScript e Python também são usados na criação de jogos, especialmente os que rodam no navegador. '
}

function initFundoSonoros() {

    const botao = document.querySelectorAll('button')
    const somBtn = new Audio('sons/game-show-correct-tick-sound-416167.mp3')

    function somClickBtn() {
        somBtn.play()
    }

    botao.forEach((bton) => {
        bton.addEventListener('click', somClickBtn)
    })

    const somFundo = new Audio('sons/mysterious-drone-background-190256.mp3')

    function musicaFundo() {
        somFundo.loop = true
        somFundo.play()
    }


    window.addEventListener('mousemove', musicaFundo)

    const texto = document.querySelectorAll('p')
    const somMove = new Audio('sons/0116.mp4')

    function somMouseFundo() {
        somMove.play()
    }

    texto.forEach((txt) => {
        txt.addEventListener('mouseenter', somMouseFundo)
    })
}

initFundoSonoros()