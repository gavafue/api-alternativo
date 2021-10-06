MAYORES_FEMENINO = "https://gavafue.github.io/api-alternativo/json/mayoresfem.json"
PONTEVEDRES_MAY_FEM = "https://gavafue.github.io/api-alternativo/json/pontevedresmayoresfem.json"
var getJSONData = function (url) {
    var result = {};
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(function (response) {
        result.status = 'ok';
        result.data = response;
        return result;
      })
      .catch(function (error) {
        result.status = 'error';
        result.data = error;
        return result;
      });
  }

function redireccionar(link){
    window.location=link;

}
document.addEventListener("DOMContentLoaded",function(){
   

})