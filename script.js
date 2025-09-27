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