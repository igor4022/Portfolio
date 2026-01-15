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

/*Conteúdo de explicação das cartas*/
function TextoExemplos() {

    const html = document.querySelector('.text-html')
    const css = document.querySelector('.text-css')
    const php = document.querySelector('.text-php')
    const js = document.querySelector('.text-js')
    const python = document.querySelector('.text-python')
    const java = document.querySelector('.text-java')

    function texto1() {

        html.textContent = ' É a linguagem padrão para criar a estrutura e o conteúdo de páginas web, usando tags para organizar texto, imagens, links e outros elementos. Ela define o que cada parte do conteúdo é (como um parágrafo ou um título), sendo o esqueleto básico da web. O HTML trabalha em conjunto com outras tecnologias, como o CSS para estilização e o JavaScript para interatividade, para criar sites completos. '

    }

    function texto2() {

        css.textContent = ' É uma linguagem de estilo que controla o visual e a apresentação de documentos escritos em linguagens de marcação, como o HTML. Ela separa o conteúdo da sua estrutura visual, permitindo que designers e desenvolvedores estilizem páginas web para torná-las mais atraentes e visualmente organizadas. Com o CSS, é possível definir cor, tamanho, fonte e espaçamento de elementos, além de controlar o layout, criar designs responsivos e adicionar animações e efeitos. '
    }

    function texto3() {

        php.textContent = 'PHP é uma linguagem de programação de código aberto e server-side, ideal para criar sites e aplicações web dinâmicas. Ela pode gerar conteúdo personalizado, interagir com bancos de dados, processar dados de formulários, gerir cookies e autenticar utilizadores. As suas principais características incluem ser simples, flexível, robusta e compatível com praticamente todos os sistemas operativos. '

    }

    function texto4() {
        
        js.textContent = 'JavaScript é uma linguagem de programação de alto nível que torna as páginas da web interativas e dinâmicas, indo além de conteúdo estático. Ela permite a criação de animações, galerias de fotos, formulários interativos e atualizações em tempo real, tanto no navegador do utilizador (front-end) como no servidor (back-end). '
    }

    function texto5() {

        python.textContent = 'Python é uma linguagem de programação de alto nível, orientada a objetos e fácil de aprender, conhecida pela sua sintaxe clara e legível. Ela pode ser usada para uma vasta gama de aplicações, incluindo desenvolvimento web, análise de dados, inteligência artificial, automação de tarefas e criação de aplicações desktop e jogos. A sua versatilidade e a grande quantidade de bibliotecas tornam-na popular para iniciantes e para projetos complexos. '
    }

    function texto6() {

        java.textContent = 'Java é uma linguagem versátil para criar uma vasta gama de aplicações, desde sistemas empresariais robustos e back-ends web (incluindo microsserviços) até apps Android, softwares desktop, jogos e soluções de Big Data e IA, destacando-se pela portabilidade ("escreva uma vez, execute em qualquer lugar"), orientação a objetos e segurança, rodando em diversos sistemas operacionais graças à Máquina Virtual Java (JVM). '
    }
}

TextoExemplos()

const botao = document.querySelectorAll('button')
const somBtn = new Audio('Conhecimentos/sons/surprised-videogame-sfx-423628.mp3')

function somClickBtn() {
    somBtn.play()
}

botao.forEach((btn) => {
    btn.addEventListener('click', somClickBtn)
})