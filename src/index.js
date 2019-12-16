// import * as Variables from "./variables.js";

// Defining variables
const menuList = document.querySelector('#menu-list');
const mainNav = document.querySelector('#main-nav');
const burgerMenuToggle = document.querySelector('#burger-toggle');
const homeHeader = document.querySelector('#home-header');
const $menu = $('#home-header');
const burgerMenuStickComponents = document.getElementsByClassName('stick');
const listItemsNav = document.querySelectorAll("#main-nav > ul > li");
let prevScrollpos = window.pageYOffset;
const windowCurrentWidth = 900;
// const headerHeight = "-8rem";
const headerHeight = - homeHeader.offsetHeight + "px";
const returnToTopButton = document.querySelector('#return-to-top');
const allAnchors = document.querySelectorAll('a[href^="#"]');
const mainSection = document.querySelector('#main-section');
const nameMobile = document.querySelector('.name-mobile');


// sets the body to the dimension of the devices' inner width
window.onload = function () {
  $('body').css('width', 'window.innerWidth');
};

// changes behaviour of the navigation bar when mobile
burgerMenuToggle.addEventListener('click', function () {
  menuShowHide();
  changeBurgerMenuAnimation();
});


// hide/show navigation links and burger menu animation. hides menu internally when not visible
const menuShowHide = () => {
  homeHeader.classList.toggle('active');
  menuList.classList.toggle('active');
  menuList.style.display = 'flex';

  if (menuList.style.visibility !== "visible") {
    menuList.style.visibility = "visible";
  } else {
    setTimeout(function () {
      menuList.style.visibility = "hidden";
    }, 500);
  }
  mainSection.classList.toggle('active');
  nameMobile.classList.toggle('active');
};

// disables the menu and the menu icon when clicking outside the menu list
// hides menu if clicked outside main element
const clickOutsideCloseMenu = () => {

  homeHeader.classList.toggle('active');

  menuList.classList.toggle('active');

  setTimeout(function () {
    menuList.style.visibility = "hidden";
  }, 500);
  mainSection.classList.toggle('active');
  nameMobile.classList.toggle('active');
}

$(document).mouseup(e => {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0 && homeHeader.classList.contains('active')) // ... nor a descendant of the container
  {
    clickOutsideCloseMenu();
    changeBurgerMenuAnimation();
  }
});

// changes animation of the burger menu
const changeBurgerMenuAnimation = () => {
  for (let i = 0; i < burgerMenuStickComponents.length; i++) {
    const burgerMenuStickComponentsClassList = burgerMenuStickComponents[i].classList;
    if (burgerMenuStickComponentsClassList.contains('open') || burgerMenuStickComponentsClassList.contains('close')) {
      burgerMenuStickComponentsClassList.toggle('open');
      burgerMenuStickComponentsClassList.toggle('close');
    } else {
      burgerMenuStickComponentsClassList.toggle('open');
    }
  }
};

// hides the navbar when scrolling
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    homeHeader.style.top = "0";
  } else {
    homeHeader.style.top = headerHeight;
  }
  prevScrollpos = currentScrollPos;
}

// hide menu links after click
menuList.addEventListener('click', function () {
  listItemsNav.forEach(() => {
    if (window.innerWidth < windowCurrentWidth) {
      menuShowHide();
      changeBurgerMenuAnimation();
    }
  })
});

// Back to top function, when arrow is clicked.

returnToTopButton.addEventListener('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);

  // setTimeout(function () {
  //   window.scrollTo(
  //     {
  //       top: 0,
  //       left: 0,
  //       behavior: 'smooth'
  //     }
  //   ), 1000
  // });
});


// Centers the section if it fits inside the screen, if not, sets it to start
const jumpToSection = function () {
  allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      let currentTarget = document.querySelector(this.getAttribute('href'));
      event.preventDefault();

      let blockStyle;
      if (currentTarget.clientHeight > document.documentElement.clientHeight) {
        blockStyle = "start";
      } else {
        blockStyle = "center";
      }

      currentTarget.scrollIntoView({
        behavior: "smooth",
        block: blockStyle,
        inline: "start"
      });
    });
  });
}

jumpToSection();


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