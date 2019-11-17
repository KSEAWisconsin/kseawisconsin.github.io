/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var myLinks = document.getElementById("myLinks");
    var menu = document.getElementById("menu");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        menu.style.backgroundColor = "#B2E4F6";
    } else {
        myLinks.style.display = "block";
        menu.style.backgroundColor = "#01C1F1";
    }
}