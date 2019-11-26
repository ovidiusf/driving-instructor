

// Enables burger-menu animation
$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".stick").toggleClass(function () {
            return $(this).is('.open, .close') ? 'open close' : 'open';
        });
    });
});

// enables menu to toggle down
let mainNav = document.querySelector('#main-nav');
let navBarToggle = document.querySelector('#burger-toggle');
console.log(mainNav.classList);
navBarToggle.addEventListener('click', function() {
    // console.log('active');
    mainNav.classList.toggle('active');
});