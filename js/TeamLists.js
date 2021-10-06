var showTeam = function (array, lugar) {
    contenido = "";
    for (let i = 0; i < array.length; i++) {
        let element=array[i];
        contenido +=
            `<div class="container bg-light.bg-gradient border">
            <div class="row" onclick="moreteaminfo(${element.id})">
           <div class="col-4"><img src="${element.img}" class="img-thumbnail"></img></div>
        <div class="col"><p><i>Equipo:</i> ${element.namecomplete}</p>
        <p><i>Jugadores:</i> ${element.jugadores}</p>
        <p><i>Habilitados:</i> ${element.habilitados}</p>
        <p><i>Sanciones:</i> ${element.sanciones}</p>
        <p><i>Diferencia de Goles:</i> ${element.diferenciaGoles}</p>
        </div></div>
    </div><hr>`
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