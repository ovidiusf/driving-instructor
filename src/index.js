// Defining variables
const menuList = document.querySelector('#menu-list');
const mainNav = document.querySelector('#main-nav');
const burgerMenuToggle = document.querySelector('#burger-toggle');
const homeHeader = document.querySelector('#home-header');
const burgerMenuStickComponents = document.getElementsByClassName('stick');
const listItemsNav = document.querySelectorAll("#main-nav > ul > li");
let prevScrollpos = window.pageYOffset;
const windowCurrentWidth = 900;
// const headerHeight = "-8rem";
const headerHeight = - homeHeader.offsetHeight + "px";
const returnToTopButton = document.querySelector('#return-to-top');

// changes behaviour of the navigation bar when mobile
burgerMenuToggle.addEventListener('click', function () {
  menuShowHide();
});


// hide/show navigation links and burger menu animation. hides menu internally when not visible
const menuShowHide = () => {
  homeHeader.classList.toggle('active');
  menuList.classList.toggle('active');
  menuList.style.display = 'flex';

  if (!menuList.classList.contains('visible')) {
    menuList.classList.toggle('visible');
  } else {
    setTimeout(function () {
      menuList.classList.toggle('visible');
    }, 500);
  }

  changeBurgerMenuAnimation();
};

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
mainNav.addEventListener('click', function () {
  listItemsNav.forEach(() => {
    if (window.innerWidth < windowCurrentWidth) {
      menuShowHide();
    }
  })
});

// Back to top function, when arrow is clicked.

returnToTopButton.addEventListener('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});

// adds space between the top of the window and the next section

// const allAnchors = document.querySelectorAll('a');
// console.log(allAnchors);

// allAnchors.forEach((anchor) => {
//   anchor.addEventListener('click', function (event) {
//     console.log(anchor);
//     event.preventDefault();
//     const target = anchor.href;
//     console.log(target);
//     target.scrollIntoView({
//       behavior: 'smooth'
//     });

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
// //           behavior: 'smooth'
// //       });
//   });
// });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // scrollIt(document.querySelector(this.getAttribute('href')));
  });
});

// function scrollIt(element) {
//   window.scrollTo({
//     'behavior': 'smooth',
//     'left': 0,
//     'top': window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start))
//   });
// };


  // const start = window.pageYOffset;
  // const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  // const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  // const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  // const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  


  // console.log(element.getBoundingClientRect());
  // console.log(element.offsetTop - element.scrollTop + element.clientTop);
  // console.log(element.offsetTop);
  // console.log(element.scrollTop);
  // console.log(element.clientTop);



// $('a').on('click', function (e) {
//   e.preventDefault();
//   var target = ($(this).attr('href'));
//     p = $(target).offset().top;
//     offset = 50;
//     console.log(target);
//     console.log(p);

//   $(target).hasClass('space') && (p = p - offset);
//   $('body, html').animate({ 'scrollTop': p }, 100);
// });




// window.onload = function () {

//   if (window.innerWidth <= 360) {

//     var mvp = document.getElementById('myViewport'); 
//     mvp.setAttribute('content', 'width=360');
//   }
// }


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