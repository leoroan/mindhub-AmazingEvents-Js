let contenedorDeTarjetas = document.getElementById("cardContainer");
let tarjetasDeEventos = ``;

let contenedorDeCheckboxes = document.getElementById("checkboxContainer");
let checkDeCategorias = ``;

arrayDeCategorias = [];
for (let event of data.events) {
  if (!arrayDeCategorias.includes(event.category)) {
    arrayDeCategorias.push(event.category);
    contenedorDeCheckboxes.innerHTML += createCheckbox(event, arrayDeCategorias.length);
  }
}

let seleccion = [];

let checkboxes = document.querySelectorAll('input[type=checkbox]');
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

document.getElementById("myInputTextSearch").onkeyup = function () { mySearchFunction() };

function mySearchFunction() {
  contenedorDeTarjetas.innerHTML = "";
  input = document.getElementById("myInputTextSearch");
  filtrado = input.value.toLowerCase();
  miArray = data.events;
  if (seleccion.length == 0) {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado)));
    for (let event of busqueda) {
      contenedorDeTarjetas.innerHTML += createCard(event);
    }
  } else {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado) && seleccion.includes(elem.category)));
    for (let event of busqueda) {
      contenedorDeTarjetas.innerHTML += createCard(event);
    }
  }
}

function fill() {
  if (seleccion.indexOf() == -1) {
    for (const event of data.events) {
      contenedorDeTarjetas.innerHTML += createCard(event);
    }
  }
}


document.onload = fill();

