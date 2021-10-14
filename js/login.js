document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("submitBtn").addEventListener("click", function (e) {
        let inputEmail = document.getElementById("form3Example3");
        let inputPassword = document.getElementById("form3Example4");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add("bg-danger");
            camposCompletos = false;
        }

        if (inputPassword.value === '') {
            inputPassword.classList.add("bg-danger");
            camposCompletos = false;
        }

        if (camposCompletos) {

            localStorage.setItem('User-Logged', JSON.stringify({ email: inputEmail.value }));

            window.location = 'index.html';

        } else {
            alert("Debes ingresar los datos!")
        }
    });
});