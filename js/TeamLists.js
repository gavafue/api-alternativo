var showTeam = function (array, lugar) {
    contenido = "";
    for (let i = 0; i < array.length; i++) {
        let element=array[i];
        contenido +=
            `  <div class="row bg-light border" style="cursor:pointer;" onclick="moreteaminfo(${element.id})">
            <div class="col-3 img-hover-zoom img-hover-zoom--brightness"><img src="${element.img}"
                    class="img-thumbnail container-fluid" style="max-height: 15rem;"></img></div>
            <div class="col">
                <div class="row " style="text-align:center;"><b>${element.namecomplete}</b></div>
                <div class="row ">
                    <div class="col-3 ">Jugadores:</div>
                    <div class="col"> ${element.jugadores}</div>
                </div>
                <div class="row">
                    <div class="col-3">Habilitados:</div>
                    <div class="col"> ${element.habilitados}</div>
                </div>
                <div class="row">
                   <div class="col-3">Sanciones:</div><div class="col">${element.sanciones}</div>
                </div>
                <div class="row">
                   <div class="col-3">Diferencia de Goles:</div><div class="col"> ${element.diferenciaGoles}</div>
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