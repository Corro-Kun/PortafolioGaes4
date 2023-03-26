/*
    Configuracion de Intro
*/ 
const ActiveQuist = document.querySelector('.AceptarC');
const Coment1 = document.querySelector('.Intro');
const Pregunta1 = document.querySelector('.Pregun1');

ActiveQuist.addEventListener('click', ()=> {
    Coment1.classList.add('desactivado');
    Pregunta1.classList.add('active');
});

/*
    Configuracion de Preguntas
*/
const Si = document.querySelector('.Si');
const No = document.querySelector('.No');
const Mensaje = document.querySelector('.Mensajes');

Si.addEventListener('click', () =>{
    Pregunta1.classList.remove('active');
    Pregunta2.classList.add('active');
});

No.addEventListener('click', () => {
    Mensaje.innerHTML = 'Casi... sigue intentando :)';

    const i = Math.floor(Math.random() * 600);
    const j = Math.floor(Math.random() * 600);

    No.style.left = i + 'px';
    No.style.top = j + 'px';
});

Mensaje.addEventListener('click', () => {
    Mensaje.innerHTML = 'Valla, puedes dar click aqui pero no en el boton :)?';
});

No.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * 600);
    const j = Math.floor(Math.random() * 600);

    No.style.left = i + 'px';
    No.style.top = j + 'px';
});

/*
    Configuracion de pregunta 2
*/
const Pregunta2 = document.querySelector('.Pregun2');
const Nobtn = document.querySelector('.No2');
const Sibtn = document.querySelector('.Si2');
const Mensaje2 = document.querySelector('.Mensajes2');

Sibtn.addEventListener('mouseover', () => {
    Sibtn.innerHTML = 'No';
    Mensaje2.innerHTML = 'No tan rapido amigo';
});

Sibtn.addEventListener('click', () => {
    Pregunta2.classList.remove('active');
    Pregunta3.classList.add('active');

});

Nobtn.addEventListener('click', () => {
    Pregunta2.classList.remove('active');
    Pregunta3.classList.add('active');
});

/*
    Pregunta 3
*/ 

const Pregunta3 = document.querySelector('.Pregun3');
const siUltime = document.querySelector('.Si3');
const noUltime = document.querySelector('.No3');

siUltime.addEventListener('click', () => {
    Pregunta3.classList.remove('active');
    Pregunta4.classList.add('active');
});

noUltime.addEventListener('click', () => {
    noUltime.style.left = 50000 + 'px';
});

/*
    Pregunta 4
*/

const Pregunta4 = document.querySelector('.Pregun4');



