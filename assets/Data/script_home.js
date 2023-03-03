

let contenedorDeTarjetas = document.getElementById("cardContainer");
let tarjetasDeEventos = ``;

let contenedorDeCheckboxes = document.getElementById("checkboxContainer");
let checkDeCategorias = ``;

arrayDeCategorias = [];
for (let event of data.events) {
  if (!arrayDeCategorias.includes(event.category)) {
    arrayDeCategorias.push(event.category);
    checkDeCategorias = createCheckbox(event, arrayDeCategorias.length);
    contenedorDeCheckboxes.innerHTML += checkDeCategorias;
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
    updateCards();
  })
}

function updateCards() {
  contenedorDeTarjetas.innerHTML = "";
  for (let event of data.events) {
    if (seleccion.includes(event.category)) {
      contenedorDeTarjetas.innerHTML += createCard(event);
    } 
  }
  if (seleccion.length === 0) {
    mySearchFunction();
  }
}

document.getElementById("myInputTextSearch").onkeyup = function () { mySearchFunction() };

function mySearchFunction() {
  contenedorDeTarjetas.innerHTML = "";
  input = document.getElementById("myInputTextSearch");
  filtrado = input.value.toLowerCase();
  miArray = data.events;
  let busqueda = miArray.filter(elem => (elem.name.toLowerCase().includes(filtrado) && elem.category.includes(seleccion)));
  for (let event of busqueda) {
    tarjetasDeEventos = createCard(event);
    contenedorDeTarjetas.innerHTML += tarjetasDeEventos;
  }

}

document.addEventListener("load", mySearchFunction());



