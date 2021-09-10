function teaminfo(array) {
    let contenido = 
    `<div class="teamcontainer"><h2> ${array[(localStorage.getItem("team")) - 1].namecomplete}</h2>
    <hr><div class="top"><div class="left">
    <h3>Resumen</h3>
    <i>Jugadores:</i> ${array[(localStorage.getItem("team")) - 1].jugadores}<br>
    <i>Habilitados:</i> ${array[(localStorage.getItem("team")) - 1].habilitados}<br>
    <i>Sanciones:</i> ${array[(localStorage.getItem("team")) - 1].sanciones}<br>
    <i>Diferencia de Goles:</i> ${array[(localStorage.getItem("team")) - 1].diferenciaGoles}</div>
    <div class="right"><img src="${array[(localStorage.getItem("team")) - 1].img}" class="teamlogo"></img></div>
    </div>
    <hr>
    
   
</div>`;
document.getElementById("title").innerHTML=` ${array[(localStorage.getItem("team")) - 1].namecomplete}`;
document.getElementById("teaminfoshowed").innerHTML = contenido;

}
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(MAYORES_FEMENINO).then(function (result) {
        teaminfo(result.data)
    });
})