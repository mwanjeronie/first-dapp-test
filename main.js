function showAlert() {
    alert("Button was clicked!");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    button.addEventListener("click", showAlert);
});