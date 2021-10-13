var datosinformes


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

                    buttonWD = `<span class="badge bg-warning text-dark" onclick="searchWD()" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver WD</span>
                   `;

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

    getJSONData(INFORMES_MAY_FEM).then(function (result) {
        datosinformes = result.data;
     });
  
})


function searchWD() {
   
    document.getElementById("wdDescription").innerHTML = datosinformes.name;
    
    };