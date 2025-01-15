let btnMenuMob = document.querySelector('#btn-menu-mob') //Chamando id (#)
let line1 = document.querySelector('.line-menumob-1') //Chamando classe (.)
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#Menu-mobile')


let body = document.querySelector('body')


btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
    
    body.classList.toggle('no-overflow') //Parar scroll no menu
}) 

let menuLinks = document.querySelectorAll('#Menu-mobile a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        line1.classList.remove('ativo1');
        line2.classList.remove('ativo2');
        menuMobile.classList.remove('abrir');
        body.classList.remove('no-overflow');
    });
});