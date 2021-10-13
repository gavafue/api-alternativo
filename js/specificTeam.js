function searchWD(URL, idjugador){
    getJSONData(URL).then(function (result) {
        var datosinforme = result.idjugador.data;
document.getElementById("exampleModalLabel").innerHTML = "probando";
    });
};


function teaminfo(array) {
    let contenido =
        `
    <div class="container bg-light">
    <div class="row border">
        <h2 class="text-center"> ${array[(localStorage.getItem("team")) - 1].namecomplete}</h2>
    </div>

    <div class="row">
        <div class="col-7 border">
            <div class="row text-center">
                <h3>Resumen</h3>
            </div>
            <div class="row">
                <div class="col-3">Jugadores</div>
                <div class="col">${array[(localStorage.getItem("team")) - 1].jugadores}</div>
            </div>
            <div class="row">
                <div class="col-3">Habilitados</div>
                <div class="col">${array[(localStorage.getItem("team")) - 1].habilitados}</div>
            </div>
            <div class="row">
                <div class="col-3">Sanciones</div>
                <div class="col">${array[(localStorage.getItem("team")) - 1].sanciones}</div>
            </div>
            <div class="row">
                <div class="col-3">Diferencia de Goles</div>
                <div class="col">${array[(localStorage.getItem("team")) - 1].diferenciaGoles}</div>
            </div>
        </div>
        <div class="col border">
            <img src="${array[(localStorage.getItem("team")) - 1].img}" class="container-xl" style="max-width: 20rem;max-height:20rem;"></img></div>
    </div>

</div>`;
    document.getElementById("title").innerHTML = ` ${array[(localStorage.getItem("team")) - 1].namecomplete}`;
    document.getElementById("teaminfoshowed").innerHTML = contenido;

}

var listainformes
document.addEventListener("DOMContentLoaded", function () {
  
    getJSONData(MAYORES_FEMENINO).then(function (result) {
        teaminfo(result.data)
    });
   

    let counter = 0;
    getJSONData(PONTEVEDRES_MAY_FEM).then(function (result) {
        
        if (localStorage.getItem("team") == 1) {
            result.data.forEach(element => {
               
                var buttonWD
                if (element.writedreport == "yes") {

                    buttonWD = `<span class="badge bg-warning text-dark" onclick="searchWD(${INFORMES_MAY_FEM},${element.id})" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver WD</span>
                    <!-- Popup Modal -->
<div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div class="row bg-light border" id="wdDescription"></div>
       <div class="row"><div class="col bg-light border">Árbitros</div><div class="col bg-light border" id="wdReferee"></div></div>
       <div class="row"><div class="col bg-light border">Recinto</div><div class="col bg-light border" id="wdCourt"></div></div>
       <div class="row"><div class="col bg-light border">Fecha</div><div class="col bg-light border" id="wdDate"></div></div>
       <div class="row"><div class="col bg-light border">Tiempo restante</div><div class="col bg-light border" id="wdEndtime"></div></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
  </div>
 </div>`;

                } else {
                    buttonWD = " - ";
                }
                counter++;

                var official
                if(element.rol == "player"){
                    document.getElementById("playerslist").innerHTML += `  <tr>
                    <th scope="row" id="linea" onclick="showprofile()">${counter}</th>
                    <td>${element.name}</td>
                    <td>${element.punishment}</td>
                    <td>${element.disqualification}</td>
                    <td>${element.goals}</td>
                    <td>${element.healtdeadtime}</td>
                    <td>${buttonWD}</td>
                  </tr>`;
                }
                else {
                    document.getElementById("playerslist").innerHTML += `  <tr class="bg-secondary ">
                    <th scope="row" id="linea" onclick="showprofile()">${counter}</th>
                    <td>${element.name}</td>
                    <td>${element.punishment}</td>
                    <td>${element.disqualification}</td>
                    <td>${element.goals}</td>
                    <td>${element.healtdeadtime}</td>
                    <td>${buttonWD}</td>
                  </tr>`;
                }

               
            });

        }
    });


})


