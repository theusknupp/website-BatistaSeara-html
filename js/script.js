let navbar = document.querySelector('#header')

document.addEventListener("scroll", ()=> { //Arrow function
    let scrollTop = window.scrollY //Pegar rolagem no eixo Y e guardando na variavel

    if(scrollTop > 0) {
        navbar.classList.add('rolar') 
    } else {
        navbar.classList.remove('rolar')
    }

}) 

document.addEventListener("DOMContentLoaded", function () {
    const programacoesSection = document.querySelector(".programacoes");
    const boxes = document.querySelectorAll(".box-programacoes");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    programacoesSection.classList.add("show"); // Torna a seção visível
                    boxes.forEach(box => {
                        box.style.opacity = "1"; // Garante visibilidade
                    });
                    observer.unobserve(entry.target); // Para observar após a primeira vez
                }
            });
        },
        { threshold: 0.3 } // 30% da seção visível
    );

    observer.observe(programacoesSection);
});