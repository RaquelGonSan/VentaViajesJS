import {barcelona, roma, paris, londres} from './ciudades.js'

//Obtenemos los elementos del DOM
let enlaces = document.querySelectorAll('a');
let elementTitulo = document.getElementById('titulo');
let elementSubtitulo = document.getElementById('subtitulo');
let elementParrafo = document.getElementById('parrafo');
let elementPrecio = document.getElementById('precio');

//Agregamos evento click a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //eliminamos clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
    

      //agregamos clase active donde clickemos
      this.classList.add('active');

      //obtenemos informacion del objeto correspondiente
      let contenido = getContenido(this.textContent)

      //mostramos contenido en el DOM
      elementTitulo.innerHTML = contenido.titulo;
      elementSubtitulo.innerHTML = contenido.subtitulo;
      elementParrafo.innerHTML = contenido.parrafo;
      elementPrecio.innerHTML = contenido.precio;

    })
})

//traer info desde ciudades.js
function getContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenido[enlace];
}