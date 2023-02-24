
let contenedorDeTarjetas = document.getElementById("cardContainer");
// console.log(contenedorDeTarjetas);

let tarjetasDeEventos = ``;

for(let event of data.events){
  tarjetasDeEventos = `
  <div class="col">
  <div class="card text-center shadow h-100">
    <img src=${event.image} class="card-img-top shadow" alt="${event.name}">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text mb-4">${event.description}</p>
    </div>
    <div class="d-flex justify-content-around align-items-baseline text-nowrap ">
        <p class="text-center mx-2">Price $ ${event.price}</p>
        <a href="./details.html" class="btn btn-sm btn-secondary shadow fixed botom">Ver más</a>
      </div>
  </div>
  </div>
  `
    contenedorDeTarjetas.innerHTML += tarjetasDeEventos;

    
}


// BACKP
// for(let event of data.events){
//     let currentDate = new Date(data.currentDate);
//     let eventDate = new Date(event.date);

//     if (eventDate < currentDate) {
//         console.log("evento pasado")
//     } else {
//         console.log("evento futuro")
//     }
// }

