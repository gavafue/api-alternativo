var showTeam = function (array, lugar) {
    contenido = "";
    for (let i = 0; i < array.length; i++) {
        let element=array[i];
        contenido +=
            `<div class="teamcontainer">
            <button class="button" onclick="moreteaminfo(${element.id})">Mas información
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div></button>
            <img src="${element.img}" class="teamlogo"></img>
        <p><i>Equipo:</i> ${element.namecomplete}</p>
        <p><i>Jugadores:</i> ${element.jugadores}</p>
        <p><i>Habilitados:</i> ${element.habilitados}</p>
        <p><i>Sanciones:</i> ${element.sanciones}</p>
        <p><i>Diferencia de Goles:</i> ${element.diferenciaGoles}</p>
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