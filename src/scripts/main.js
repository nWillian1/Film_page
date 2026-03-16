console.log("O JavaScript foi carregado com sucesso!");

document.addEventListener('DOMContentLoaded', function() {
    var navHeader = document.querySelector('.header');
    var lastPos = window.scrollY;

    // 1. Lógica do Header (Esconder/Mostrar)
    window.addEventListener('scroll', function() {
        var currentPos = window.scrollY;
        
        if (currentPos > lastPos && currentPos > 100) {
            navHeader.style.transform = 'translateY(-100%)';
        } else {
            navHeader.style.transform = 'translateY(0)';
        }
        lastPos = currentPos;
    });

    // 2. Lógica dos Botões
    var btn1 = document.querySelector('.header__buttons .button:not(.button--secondary)');
    var btn2 = document.querySelector('.button--secondary');
    var target1 = document.querySelector('.characters');
    var target2 = document.querySelector('.trailer');

    if (btn1 && target1) {
        btn1.addEventListener('click', function() {
            window.scrollTo({
                top: target1.offsetTop - navHeader.offsetHeight,
                behavior: 'smooth'
            });
        });
    }

    if (btn2 && target2) {
        btn2.addEventListener('click', function() {
            window.scrollTo({
                top: target2.offsetTop - navHeader.offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});