// j querry toggle class for menu

// $('.menu').on('click', function () {
//     $(this).toggleClass('active');
//     $('.overlay').toggleClass('menu-open');
//   });
  
//   $('.nav a').on('click', function () {
//     $('.menu').removeClass('active');
//     $('.overlay').removeClass('menu-open');
//   });


$(document).ready(function() {
    $(".burger-menu").click(function() {
      $(".stick").toggleClass(function () {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });
    });
  });