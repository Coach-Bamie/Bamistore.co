/*document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.add('show');
});

document.getElementById('menuClose').addEventListener('click', function() {
    document.getElementById('navMenu').classList.remove('show');
});*/


// Toggle the navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});