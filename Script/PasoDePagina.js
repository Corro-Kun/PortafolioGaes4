const Kevin = document.querySelector('.InfoKevin');
const Integrantes = document.querySelector('.Grupo');
const Inicio = document.querySelector('.Menu');
const Comentario = document.querySelector('.Coment');
const Comentarios = document.querySelector('.Comentarios');
const Intro = document.querySelector('.InicioPro');

Integrantes.addEventListener('click', ()=> {
    Kevin.classList.add('active');
    Comentarios.classList.remove('active');
    Intro.classList.remove('active');
});

Inicio.addEventListener('click', ()=> {
    Kevin.classList.remove('active');
    Comentarios.classList.remove('active');
    Intro.classList.add('active');
});

Comentario.addEventListener('click', ()=> {
    Comentarios.classList.add('active');
    Kevin.classList.remove('active');
    Intro.classList.remove('active');
});

