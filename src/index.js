// Defining variables
const menuList = document.querySelector('#menu-list');
const mainNav = document.querySelector('#main-nav');
const burgerMenuToggle = document.querySelector('#burger-toggle');
const homeHeader = document.querySelector('#home-header');
const burgerMenuStickComponents = document.getElementsByClassName('stick');
let prevScrollpos = window.pageYOffset;


// changes behaviour of the navigation bar when mobile
burgerMenuToggle.addEventListener('click', function () {
    homeHeader.classList.toggle('active');
    menuList.classList.toggle('active');
    menuList.style.display = 'flex';
    changeBurgerMenuAnimation();
});

// changes animation of the burger menu
const changeBurgerMenuAnimation = () => {
    for (let i = 0; i < burgerMenuStickComponents.length; i++) {
        const burgerMenuStickComponentsClassList = burgerMenuStickComponents[i].classList;
        if(burgerMenuStickComponentsClassList.contains('open') || burgerMenuStickComponentsClassList.contains('close')){
            burgerMenuStickComponentsClassList.toggle('open');
            burgerMenuStickComponentsClassList.toggle('close');
        }else {
            burgerMenuStickComponentsClassList.toggle('open');
        } 
    }
};

// hides the navbar when scrolling

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    homeHeader.style.top = "0";
  } else {
    homeHeader.style.top = "-8rem";
  }
  prevScrollpos = currentScrollPos;
}


// animation code example with Jquery. For future use

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