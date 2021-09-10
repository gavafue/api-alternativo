var showTeam = function (array, lugar) {
    contenido = "";
    array.forEach(element => {
        contenido += 'Equipo: ' + element.namecomplete + '<br>';
        contenido += 'Jugadores: ' + element.jugadores + '<br>';
        contenido += 'Habilitados: ' + element.habilitados + '<br>';
        contenido += 'Sanciones: ' + element.sanciones + '<br>';
        contenido += 'Diferencia de Goles: ' + element.diferenciaGoles + '<br>';
        contenido += `<img src="${element.img}" width="250px"></img>`;
        contenido += '<br><hr><br>'
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