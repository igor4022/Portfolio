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

function texto() {

    const exemplo1 = document.getElementById('exemplo1')
    const exemplo2 = document.getElementById('exemplo2')
    const exemplo3 = document.getElementById('exemplo3')
    const exemplo4 = document.getElementById('exemplo4')
    const exemplo5 = document.getElementById('exemplo5')
    const exemplo6 = document.getElementById('exemplo6')


    exemplo1.textContent = 'Criar sites e lojas virtuais: A combinação delas é a base para o desenvolvimento web completo. '

    exemplo2.textContent = 'Desenvolver aplicativos web: Aplicações que funcionam no navegador, como sistemas de gestão ou ferramentas online. '

    exemplo3.textContent = 'Fazer a interface de um sistema: Usando HTML, CSS e JavaScript para que o programa seja fácil de usar e visualmente agradável. '

    exemplo4.textContent = 'Gerenciar o que acontece no servidor: Com PHP e Python, ele garante que a aplicação "entenda" os dados, processe informações e se comunique com o banco de dados. '

    exemplo5.textContent = 'Criar inteligência artificial e automação: Python é ideal para tarefas de inteligência artificial, aprendizado de máquina e para automatizar processos. '

    exemplo6.textContent = 'esenvolver jogos online: JavaScript e Python também são usados na criação de jogos, especialmente os que rodam no navegador. '
}

function somClickBotao() {

    const botao = document.querySelector('button') 
    const somBtn = new Audio('sons/game-show-correct-tick-sound-416167.mp3')

    function somClickBtn() {

        somBtn.play()
    }

    botao.addEventListener('click', somClickBtn)
}

somClickBotao()