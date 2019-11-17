/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var menuButton = document.getElementById("menuButton");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        menuButton.style.backgroundColor = "";
    } else {
        navLinks.style.display = "block";
        menuButton.style.backgroundColor = "#01C1F1";
    }
}