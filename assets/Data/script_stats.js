
function tablaEvents(result) {
  let contenedorDeTabla1 = document.getElementById("eventsStatistics");
  contenedorDeTabla1.innerHTML = result;
}

function tablaUpcomingEvents(result) {
  let contenedorDeTabla2 = document.getElementById("upcomingEventsStatistics");
  contenedorDeTabla2.innerHTML = result;
}

function tablaPastEvents(result) {
  let contenedorDeTabla3 = document.getElementById("pastEventsStatistics");
  contenedorDeTabla3.innerHTML = result;
}

function calcularMaximaAsistencia(array) {
  let maximoValor = -Infinity;
  let maximoClave = '';
  for (const clave in array) {
    if (dateIsPast(array[clave])) {
      let assist = ((array[clave].assistance * 100) / array[clave].capacity);
      if (assist > maximoValor) {
        maximoValor = assist;
        maximoClave = clave;
      }
    }
  }
  return maximoClave;
}

function calcularMinimaAsistencia(array) {
  let minimoValor = Infinity;
  let manimoClave = '';
  for (const clave in array) {
    if (dateIsPast(array[clave])) {
      let assist = ((array[clave].assistance * 100) / array[clave].capacity);
      if (assist < minimoValor) {
        minimoValor = assist;
        manimoClave = clave;
      }
    }
  }
  return manimoClave;
}

function calcularMaximaCapacidad(array) {
  let maximoValor = -Infinity;
  let maximoClave = '';
  for (const clave in array) {
    if (array[clave].capacity > maximoValor) {
      maximoValor = array[clave].capacity;
      maximoClave = clave;
    }
  }
  return maximoClave;
}

async function work() {
  await getData();
  estadisticasDeEventosLoad();
  upcomingEventsEstadisticasLoad();
  pastEventsEstadisticasLoad();
}

/**
 * Estadísticas de eventos: evento con mayor porcentaje de asistencia,
 * evento con menor porcentaje de asistencia, evento con mayor capacidad.
 */
function estadisticasDeEventosLoad() {
  let resp = "";
  resp += createTabla(data.events[calcularMaximaAsistencia(data.events)]);
  resp += createTabla(data.events[calcularMinimaAsistencia(data.events)]);
  resp += createTabla(data.events[calcularMaximaCapacidad(data.events)]);
  tablaEvents(resp);
}

/**
 * Estadísticas de eventos futuros por categoría: categoría,
 *  ganancias de la categoría, porcentaje de asistencia de la categoría.
 */
function upcomingEventsEstadisticasLoad() {
  let res = "";
  let categorys = [];
  for (const event of data.events) {
    if (!categorys.includes(event.category) && !dateIsPast(event)) {
      let total = 0;
      let estimado = 0;
      let cap = 0;
      categorys.push(event.category);
      for (const evnt of data.events) {
        if (evnt.category == event.category && !dateIsPast(evnt)) {
          total = evnt.estimate * evnt.price;
          estimado += evnt.estimate;
          cap += evnt.capacity;
        }
      }
      res += createAnotherTabla(event, total, ((estimado*100)/cap));
    }
  }
  tablaUpcomingEvents(res);  
}

/**
 * Estadísticas de eventos pasados por categoría: categoría,
 * ganancias de la categoría, porcentaje de asistencia de la categoría.
 */
function pastEventsEstadisticasLoad() {
  let res = "";
  let categorys = [];
  for (const event of data.events) {
    if (!categorys.includes(event.category) && dateIsPast(event)) {
      let total = 0;
      let asis = 0;
      let cap = 0;
      categorys.push(event.category);
      for (const evnt of data.events) {
        if (evnt.category == event.category && dateIsPast(evnt)) {
          total = evnt.assistance * evnt.price;
          asis += evnt.assistance;
          cap += evnt.capacity;
        }
      }
      res += createAnotherTabla(event, total, ((asis*100)/cap));
    }
  }
  tablaPastEvents(res);  
}


work();

