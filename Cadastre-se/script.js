const texto = document.createElement('a')
const ativo = document.querySelector('.ativo')
const botao = document.querySelector('.enviar')

function btnReserva() {

    texto.innerText = 'Caso o envio não tenha funcionada'
    texto.classList.add(ativo)
    ativo.appendChild(texto)
}

botao.addEventListener('click', btnReserva)