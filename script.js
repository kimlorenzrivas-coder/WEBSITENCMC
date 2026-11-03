
// Function for showing and hiding the menu

function showMenu() {

    // Get the navigation bar
    var menu = document.getElementById("navbar");

    // Check if the menu is already showing
    if (menu.classList.contains("show")) {

        // Hide the menu
        menu.classList.remove("show");

    } else {

        // Show the menu
        menu.classList.add("show");

    }

}
