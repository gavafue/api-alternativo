var showTeam = function (array, lugar) {
    contenido = "";
    array.forEach(element => {
        contenido += 
        `<div class="teamcontainer"><button class="submit horizontal">Más información</button><img src="${element.img}" class="teamlogo"></img>
        <p><i>Equipo:</i> ${element.namecomplete}</p>
        <p><i>Jugadores:</i> ${element.jugadores}</p>
        <p><i>Habilitados:</i> ${element.habilitados}</p>
        <p><i>Sanciones:</i> ${element.sanciones}</p>
        <p><i>Diferencia de Goles:</i> ${element.diferenciaGoles}</p>
    </div><hr>`
    });
       document.getElementById(lugar).innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(MAYORES_FEMENINO).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showTeam(resultObj.data, "mayoresFemenino");
        }
    });
})