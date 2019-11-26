

// Enables burger-menu animation
$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".stick").toggleClass(function () {
            return $(this).is('.open, .close') ? 'open close' : 'open';
        });
    });
});

// enables menu to toggle down
const mainNav = document.querySelector('#main-list');
const nav = document.querySelector('#main-nav');
const navBarToggle = document.querySelector('#burger-toggle');
const header = document.querySelector('#home-header');

console.log(mainNav.classList);
navBarToggle.addEventListener('click', function () {

    header.classList.toggle('active');
    mainNav.classList.toggle('active');

});

// toggle elements

// $(".burger-menu").click(function () {
//     if($(".menu-list").hasClass("closed")){
//         $(".menu-list").removeClass("closed");
//       $(".menu-list").animate({
//         top: '-600px'
//       }, 1000);
      
//     }else{
//       $(".menu-list").animate({
//         top: '0px'
//       }, 1000);
//       $(".menu-list").addClass("closed");
//     }
//   });