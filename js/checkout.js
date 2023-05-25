/* Tots els camps són obligatoris.

- Tots els camps han de tenir almenys 3 caràcters.

- El nom i cognoms han de contenir només lletres.

- El telèfon ha de contenir només números.

- La contrasenya ha d'incloure números i lletres.

- L'email ha de tenir format d'email. 

Quan l'usuari/ària introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

Ajuda: podràs acolorir la vora de l'input en vermell i mostrar el missatge d'error manipulant el dom, encara que també pots usar la classe is-invalid de bootstrap.
*/

// Exercise 6
function validate() {
    var error = 0;

    // Obtener los campos de entrada
    var fName = document.getElementById("fName");
    var fEmail = document.getElementById("fEmail");
    var fAddress = document.getElementById("fAddress");
    var fLastN = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");

    // Obtener los elementos de error
    var errorName = document.getElementById("errorName");
    var errorEmail = document.getElementById("errorEmail");
    var errorAddress = document.getElementById("errorAddress");
    var errorLastN = document.getElementById("errorLastN");
    var errorPassword = document.getElementById("errorPassword");
    var errorPhone = document.getElementById("errorPhone");

    // Validar los campos introducidos por el usuario: nombre, apellidos, email, contraseña y teléfono

    // Campo Nombre (fName)
    if (fName.value === "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
        error++;
        fName.classList.add("is-invalid");
    } else {
        fName.classList.remove("is-invalid");
    }

    // Campo Apellidos (fLastN)
    if (fLastN.value === "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
        error++;
        fLastN.classList.add("is-invalid");
    } else {
        fLastN.classList.remove("is-invalid");
    }
	
    // Campo Dirección (fAddress)
    if (fAddress.value === "" || fLastN.value.length < 3) {
        error++;
        fAddress.classList.add("is-invalid");
    } else {
        fAddress.classList.remove("is-invalid");
    }

    // Campo Email (fEmail)
    if (fEmail.value === "" || !validateEmail(fEmail.value)) {
        error++;
        fEmail.classList.add("is-invalid");
    } else {
        fEmail.classList.remove("is-invalid");
    }

    // Campo Contraseña (fPassword)
    if (fPassword.value === "" || !/[a-zA-Z]/.test(fPassword.value) || !/\d/.test(fPassword.value)) {
        error++;
        fPassword.classList.add("is-invalid");
    } else {
        fPassword.classList.remove("is-invalid");
    }

    // Campo Teléfono (fPhone)
    if (fPhone.value === "" || !/^\d+$/.test(fPhone.value)) {
        error++;
        fPhone.classList.add("is-invalid");
    } else {
        fPhone.classList.remove("is-invalid");
    }

    if (error > 0) {
        alert("Error");
    } else {
        alert("OK");
    }
}

// Función para validar el formato de un email utilizando una expresión regular
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
