var showTeam = function (array, lugar) {
    contenido = "";
    for (let i = 0; i < array.length; i++) {
        let element=array[i];
        contenido +=
            ` <div class="col-4"> <div class="card mb-3" style="max-width: 540px; cursor:pointer;" onclick="moreteaminfo(${element.id})">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${element.img}" class="img-fluid rounded-start" alt="logo del equipo ${element.namecomplete}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center" style="font-size:16px">${element.namecomplete}</h5>
                  <p class="card-text">
                    <div class="row ">
                      <div class="col-8">Jugadores:</div>
                      <div class="col text-center"> ${element.jugadores}</div>
                    </div>
                    <div class="row">
                      <div class="col-8">Habilitados:</div>
                      <div class="col text-center"> ${element.habilitados}</div>
                    </div>
                    <div class="row">
                      <div class="col-8">Sanciones:</div>
                      <div class="col text-center">${element.sanciones}</div>
                    </div>
                    <div class="row">
                      <div class="col-8">Diferencia de Goles:</div>
                      <div class="col text-center"> ${element.diferenciaGoles}</div>
                    </div>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>`
    };
document.getElementById(lugar).innerHTML = contenido;
}

function moreteaminfo(n) {

    localStorage.setItem("team", n)
    window.location = "info-detallada.html"
}


var arrayMayoresFem
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(MAYORES_FEMENINO).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showTeam(resultObj.data, "mayoresFemenino");
            arrayMayoresFem = resultObj.data
        }
    });


})