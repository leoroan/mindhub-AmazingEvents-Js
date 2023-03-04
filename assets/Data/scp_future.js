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

function drawCard(unArray) {
  for (let event of unArray) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) { 
      contenedorDeTarjetas.innerHTML += createCard(event);
    }
  }
}

function mySearchFunction() {
  contenedorDeTarjetas.innerHTML = "";
  input = document.getElementById("myInputTextSearch");
  filtrado = input.value.toLowerCase();
  miArray = data.events;
  if (seleccion.length == 0) {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado)));
    drawCard(busqueda);
  } else {
    let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado) && seleccion.includes(elem.category)));
    drawCard(busqueda);
  }
}

function fill() {
  if (seleccion.indexOf() == -1) {
    for (const event of data.events) {
      let currentDate = new Date(data.currentDate);
      let eventDate = new Date(event.date);
      if (eventDate > currentDate) {
        contenedorDeTarjetas.innerHTML += createCard(event);
      }
    }
  }
}


document.onload = fill();