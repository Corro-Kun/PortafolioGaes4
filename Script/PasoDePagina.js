const Grupo = document.querySelector('.Integrantes');
const Integrantes = document.querySelector('.Grupo');
const Inicio = document.querySelector('.Menu');
const Comentario = document.querySelector('.Coment');
const Comentarios = document.querySelector('.Comentarios');
const Intro = document.querySelector('.InicioPro');
const Information = document.querySelector('.Information');
const Informacion = document.querySelector('.InformacionGaes');
const Proyect = document.querySelector('.Proyection');

Integrantes.addEventListener('click', ()=> {
    Grupo.classList.add('active');
    Comentarios.classList.remove('active');
    Intro.classList.remove('active');
    Informacion.classList.remove('active');
});

Inicio.addEventListener('click', ()=> {
    Grupo.classList.remove('active');
    Comentarios.classList.remove('active');
    Intro.classList.add('active');
    Informacion.classList.remove('active');
});

Comentario.addEventListener('click', ()=> {
    Comentarios.classList.add('active');
    Grupo.classList.remove('active');
    Intro.classList.remove('active');
    Informacion.classList.remove('active');
});

Information.addEventListener('click', ()=> {
   Grupo.classList.remove('active');
   Comentarios.classList.remove('active');
   Intro.classList.remove('active');
   Informacion.classList.add('active');

});

Proyect.addEventListener('click', ()=> {
   Grupo.classList.remove('active');
   Comentarios.classList.remove('active');
   Intro.classList.remove('active');
   Informacion.classList.remove('active');
});


/*
 * Detalle
*/
const logo = document.querySelector('.logo');

logo.addEventListener('click', ()=> {
   location.href="https://portafoliogaes4.up.railway.app" 
});
