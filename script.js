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

const html = document.getElementById('html')
const css = document.getElementById('css')
const php = document.getElementById('php')
const js = document.getElementById('js')
const python = document.getElementById('python')

function texto1() {

    html.textContent = ' É a linguagem padrão para criar a estrutura e o conteúdo de páginas web, usando tags para organizar texto, imagens, links e outros elementos. Ela define o que cada parte do conteúdo é (como um parágrafo ou um título), sendo o esqueleto básico da web. O HTML trabalha em conjunto com outras tecnologias, como o CSS para estilização e o JavaScript para interatividade, para criar sites completos.'

   }

function texto2() {

    css.textContent = ' É uma linguagem de estilo que controla o visual e a apresentação de documentos escritos em linguagens de marcação, como o HTML. Ela separa o conteúdo da sua estrutura visual, permitindo que designers e desenvolvedores estilizem páginas web para torná-las mais atraentes e visualmente organizadas. Com o CSS, é possível definir cor, tamanho, fonte e espaçamento de elementos, além de controlar o layout, criar designs responsivos e adicionar animações e efeitos. '
}
