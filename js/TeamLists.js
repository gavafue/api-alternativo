var showTeam = function(array,lugar){
    for (let equipo in array){
        contenido="";
        contenido += 'Equipo: ' + equipo.namecomplete + '<br>';
                    contenido += 'Jugadores: ' + equipo.jugadores + '<br>';
                    contenido += 'Habilitados: ' + equipo.habilitados + '<br>';
                    contenido += 'Sanciones: ' + equipo.sanciones + '<br>';
                    contenido += 'Diferencia de Goles: ' + equipo.diferenciaGoles + '<br>';
                    contenido += `<img src="${equipo.img}" width="250px"></img>"`;
                    contenido += '<br><hr><br>'
    }
    document.getElementById(lugar).innerHTML=contenido;
}

document.addEventListener("DOMContentLoaded",function(){
    getJSONData(MAYORES_FEMENINO).then(function (resultObj) {
        if (resultObj.status === "ok") {
                  showTeam(resultObj.data,"mayoresFemenino");
        }
    });
})