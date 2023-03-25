const Pasar = document.querySelector('.Pasar');
const Pasar2 = document.querySelector('.Pasar2');
const Pasar3 = document.querySelector('.Pasar3');
const Pasar4 = document.querySelector('.Pasar4');
const Kevinp = document.querySelector('.InfoKevin');
const Brayan = document.querySelector('.InfoBrayan');
const Blanco = document.querySelector('.InfoBlanco');
const Miguel = document.querySelector('.InfoMiguel');


Pasar.addEventListener('click', ()=> {
    Kevinp.classList.remove('active');
    Brayan.classList.add('active');
});

Pasar2.addEventListener('click', ()=> {
    Brayan.classList.remove('active');
    Blanco.classList.add('active');
});

Pasar3.addEventListener('click', ()=> {
    Blanco.classList.remove('active');
    Miguel.classList.add('active');
});

Pasar4.addEventListener('click', ()=> {
    Miguel.classList.remove('active');
    Kevinp.classList.add('active');
});



