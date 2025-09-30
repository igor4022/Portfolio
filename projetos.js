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

/*Texto dos projetos quando aperta o botão*/

const calculadora = document.getElementById('calculadora')

function texto1() {

    calculadora.textContent = 'Uma calculadora digital que pode executar ecuações basícas'
}