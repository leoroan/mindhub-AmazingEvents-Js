let contenedorDeTarjetas = document.getElementById("cardContainer");
let tarjetasDeEventos = ``;

document.getElementById("myInputTextSearch").onkeyup = function () { mySearchFunction() };

function mySearchFunction() {
  contenedorDeTarjetas.innerHTML = "";
  input = document.getElementById("myInputTextSearch");
  filter = input.value.toLowerCase();
  miArray = data.events;
  let busqueda = miArray.filter(elem => elem.name.toLowerCase().includes(filter));

  for (let event of busqueda) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      tarjetasDeEventos = createCard(event);
      contenedorDeTarjetas.innerHTML += tarjetasDeEventos;
    }
  }
}

for (let event of data.events) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  if (eventDate > currentDate) {
    tarjetasDeEventos = createCard(event);
    contenedorDeTarjetas.innerHTML += tarjetasDeEventos;
  }
}