function createCard(event) {
  return `
  <div class="col">
  <div class="card text-center shadow h-100">
    <img src=${event.image} class="card-img-top shadow" alt="${event.name}">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text mb-4">${event.description}</p>
    </div>
    <div class="d-flex justify-content-around align-items-baseline text-nowrap ">
        <p class="text-center mx-2">Price $ ${event.price}</p>
        <a href="./details.html?id=${event._id}" class="btn btn-sm btn-secondary shadow fixed botom">Details</a>
      </div>
  </div>
  </div>
  `
}

function createCheckbox(event, pos) {
  return `
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox_cat${pos}" value="${event.category}">
    <label class="form-check-label text-nowrap" for="inlineCheckbox_cat${pos}">${event.category}</label>
  </div>
  `
}

function createTabla(event) {
  return `
  <td>Name : ${event.name} </td>
  `
}

function createAnotherTabla(event,total, percent) {
  return `
  <tr>
  <td>${event.category} </td>
  <td>$${total} </td>
  <td>${percent.toFixed(2)}% </td>
  </tr>
  `
}


function createNotFound(event, pos) {
  return `
  <div class="card text-center mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Sory!</h5>
    <p class="card-text">Your search didn't get anything!</p>
    <p class="card-text">Try writting anything else</p>
    <p class="card-text">also you can search by category</p>
  </div>
</div>
  `
}

// Task4M2 data with API;
miApi = "https://mindhub-xj03.onrender.com/api/amazing";

async function getData() {
  try {
    await fetch(miApi)
      .then(response => response.json())
      .then(json => data = json);
      document.getElementById("loader").style.display = "none";
  } catch (e) {
    console.error(`Error al obtener los datos de la API: ${e.message}`);
  }
}

/**
   * 
   * @param {object} event evento gral del "data"
   * @returns Boolean, true si la fecha del evento es inferior a la fecha actual (DATA)
   */
function dateIsPast(event) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  return eventDate < currentDate;
}