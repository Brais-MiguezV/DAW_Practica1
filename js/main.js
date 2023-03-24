
// Comprueba si se ha aceptado la cookie
function checkCookie() {
    if (localStorage.getItem("cookieAccepted") == null) {
        // Si no se ha aceptado, muestra el popup
        showPopup();
    }
}

// Muestra el popup
function showPopup() {
    var popup = document.getElementById("cajaCookies");
    popup.style.display = "block";
}


// Comprueba si se ha aceptado la cookie al cargar la página
checkCookie();

// cuando se clicka en el botón de aceptar cookies, se oculta el popup y se guarda la aceptación de la cookie
document.getElementById("botonAceptarCookies").addEventListener("click", function() {
    var popup = document.getElementById("cajaCookies");
    popup.style.display = "none";
    localStorage.setItem("cookieAccepted", "true");
});













