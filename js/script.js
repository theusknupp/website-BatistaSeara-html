let navbar = document.querySelector('#header')

document.addEventListener("scroll", ()=> { //Arrow function
    let scrollTop = window.scrollY //Pegar rolagem no eixo Y e guardando na variavel

    if(scrollTop > 0) {
        navbar.classList.add('rolar') 
    } else {
        navbar.classList.remove('rolar')
    }

}) 