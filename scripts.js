document.addEventListener("DOMContentLoaded", function() {
    const subscribeForm = document.getElementById("subscribe-form");
    const loginLink = document.getElementById("login-link");
    const loginForm = document.getElementById("login-form");
    const backLink = document.getElementById("back-link");
    const successMessage = document.getElementById("success-message");
    const loginButtons = document.querySelectorAll(".login-button");

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        subscribeForm.style.display = "none";
        loginForm.style.display = "block";
        successMessage.style.display = "none";
    });

    backLink.addEventListener("click", function(event) {
        event.preventDefault();
        subscribeForm.style.display = "block";
        loginForm.style.display = "none";
        successMessage.style.display = "none";
    });

    subscribeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        subscribeForm.style.display = "none";
        successMessage.style.display = "block";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        loginForm.reset();
        redirectToLoggedInPage();
    });

    function redirectToLoggedInPage() {
        window.location.href = "pagina-con-sesion-iniciada.html";
    }

    loginButtons.forEach(function(button) {
        button.addEventListener("click", redirectToLoggedInPage);
    });
});