const myObserver = new IntersectionObserver((verme) => {
    verme.forEach((ver) => {
        if(ver.isIntersecting){
            ver.target.classList.add('show')
        } else {
            ver.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelector('.hidden')

const exemplo = document.getElementById('exemplo')

let teo = 'Criar sites e lojas virtuais: A combinação delas é a base para o desenvolvimento web completo.\nDesenvolver aplicativos WEB: Aplicações que funcionam no navegador, como sistemas de gestão ou ferramentas online. Fazer a interface de um sistema: Usando HTML, CSS e JavaScript para que o programa seja fácil de usar e visualmente agradável. Gerenciar o que acontece no servidor: Com PHP e Python, ele garante que a aplicação entenda os dados, processe informações e se comunique com o banco de dados. Criar inteligência artificial e automação: Python é ideal para tarefas de inteligência artificial, aprendizado de máquina e para automatizar processos. Desenvolver jogos online: JavaScript e Python também são usados na criação de jogos, especialmente os que rodam no navegador.'

function texto1() {

    exemplo.intextContent = teo
}