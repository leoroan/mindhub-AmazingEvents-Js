// ubicamos el contenedor padre de las tarjetas 
let contenedorDeTarjetas = document.getElementById("cardContainer");
// inicializamos una variable vacia en donde alojaremos luego cada tarjeta.
let tarjetasDeEventos = ``;

// ubicamos el contenedor padre de los checkboxes 
let contenedorDeCheckboxes = document.getElementById("checkboxContainer");
// inicializamos una variable vacia en donde alojaremos luego cada check.
let checkDeCategorias = ``;

// Inicializo un arreglo para alojar categorias.
arrayDeCategorias = [];

/* 
Por cada evento de nuestra "data", si la categoria actual no se encuentra incluida
en el arreglo, la agrego y por último creamos un checkbox con los datos de ese evento.
*/ 
for (let event of data.events) {
  if (!arrayDeCategorias.includes(event.category)) {
    arrayDeCategorias.push(event.category);
    contenedorDeCheckboxes.innerHTML += createCheckbox(event, arrayDeCategorias.length);
  }
}

// Inicializo un arreglo para alojar los checkboxes seleccionados.
let seleccion = [];

// utilizo una variable en don de voy a alojar todos mis checkboxes buscados por la query.
let checkboxes = document.querySelectorAll('input[type=checkbox]');
/*
  Por cada check, reseteo mi arreglo de seleccionados, e itero buscando de los checks,
  aquellos en los que su estado sea "checked" y lo agrego al arreglo.
  una vez recorrido, llamo a mi funcion "mySearchFunction()".
*/
for (const check of checkboxes) {
  check.addEventListener('click', (e) => {
    seleccion = [];
    checkboxes.forEach(checki => {
      if (checki.checked) { // loop
        seleccion.push(checki.value);
      }
    });
    mySearchFunction();
  })
}

/*
  utilizo una variable en donde voy a "ubicar" mi cuadro de entrada de la barra de busqueda
  y a la misma le aplico el metodo "onkeyup" que llama a mi funcion cada vez que presiono una tecla del teclado.
*/
document.getElementById("myInputTextSearch").onkeyup = function () { mySearchFunction() };

/**
 * Crea tarjetas con los datos obtenidos y las agrega al contenedor
 * @param {array[]} unArray - resultado de la busqueda en mis datos.
 */
function drawCard(unArray){
  for (let event of unArray) {
    contenedorDeTarjetas.innerHTML += createCard(event);
  }
}

/**
 * Realiza la busqueda en "data" y devuelve las informacion en tarjetas.
 * las mismas filtradas por valores de busqueda o seleccion.
 */
function mySearchFunction() {
  contenedorDeTarjetas.innerHTML = "";
  input = document.getElementById("myInputTextSearch");
  filtrado = input.value.toLowerCase();
  miArray = data.events;
  if (seleccion.length == 0) {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado)));
    if (busqueda.length != 0){
      drawCard(busqueda);
    } else {
      contenedorDeTarjetas.innerHTML += createNotFound();
    }
  } else {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado) && seleccion.includes(elem.category)));
    if (busqueda.length != 0){
      drawCard(busqueda);
    } else {
      contenedorDeTarjetas.innerHTML += createNotFound();
    }
  }
}

/**
 * Funcion generica para el completado de tarjetas sin filtros.
 */
function fill() {
  if (seleccion.indexOf() == -1) {
    for (const event of data.events) {
      contenedorDeTarjetas.innerHTML += createCard(event);
    }
  }
}


// Al cargar la pagina la completo con todas las tarjetas de "data".
document.onload = fill();

