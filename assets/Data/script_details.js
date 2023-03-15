//// for details_webpage
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function work() {

  await getData();

  let events = data.events.find(ev => ev._id == id);
  let varaAdicional = "";

  if (dateIsPast(events)) {
    varaAdicional = `<p class="card-text fs-3"> Assistance :${events.assistance}</p>`
  } else {
    varaAdicional = `<p class="card-text fs-3"> Estimate :${events.estimate}</p>`
  }
    
  

  let contenedorDeTarjetas = document.getElementById("detailsContainer");
  let tarjetasDeEventos = `
    <div class="card mb-3">
    <img src=${events.image} class="card-img-top detailCard" alt="nombre del evento: ${events.name}">
    <div class="card-body">
      <p class="card-text">${events.category}</p>
      <h5 class="card-title">${events.name}</h5>
      <p class="card-text">${events.description}</p>
      <p class="card-text">${events.date}</p>
      ${varaAdicional}
      <a class="btn btn-sm btn-secondary shadow fixed botom" onclick="history.back()">Go Back!</a>
    </div>

    </div>`;

  contenedorDeTarjetas.innerHTML += tarjetasDeEventos;

}

work();

