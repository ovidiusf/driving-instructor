import initSr from "./sr.js";
import initTilt from "./tilt.js";

// Defining variables
const menuList = document.querySelector("#menu-list");
const burgerMenuToggle = document.querySelector("#burger-toggle");
const homeHeader = document.querySelector("#home-header");
const $menu = $("#home-header");
const burgerMenuStickComponents = document.getElementsByClassName("stick");
const listItemsNav = document.querySelectorAll("#main-nav > ul > li");
let prevScrollpos = window.pageYOffset;
const windowCurrentWidth = 900;
// const headerHeight = "-8rem";
const headerHeight = -homeHeader.offsetHeight + "px";
let headerWidth = $(window).width();

const returnToTopButton = document.querySelector("#return-to-top");
const allAnchors = document.querySelectorAll('a[href^="#"]');
const mainSection = document.querySelector("#main-section");
const nameMobile = document.querySelector(".name-mobile");
const speedCarContainer = document.querySelector("#speed-car-container");
let widthHero = document.querySelector("#hero").offsetWidth;
const pullingCarContainer = document.querySelector("#pulling-car");

// Setting the container maxWidth to the heros width
pullingCarContainer.style.maxWidth = widthHero + "px";

// sets the body to the dimension of the devices' inner width
window.onload = function () {
  $("body").css("width", "document.documentElement.clientWidth");
};

// changes the width if resized
$(window).resize(function () {
  if ($(window).width() != headerWidth) {
    //execute code here.
    headerWidth = $(window).width();
    homeHeader.style.maxWidth = headerWidth;
  }
});

// changes behaviour of the navigation bar when mobile
burgerMenuToggle.addEventListener("click", function () {
  menuShowHide();
  changeBurgerMenuAnimation();
});

// hide/show navigation links and burger menu animation. hides menu internally when not visible
const menuShowHide = () => {
  homeHeader.classList.toggle("active");
  menuList.classList.toggle("active");
  menuList.style.display = "flex";

  if (menuList.style.visibility !== "visible") {
    menuList.style.visibility = "visible";
  } else {
    setTimeout(function () {
      menuList.style.visibility = "hidden";
    }, 500);
  }
  mainSection.classList.toggle("active");
  nameMobile.classList.toggle("active");
};

// disables the menu and the menu icon when clicking outside the menu list
// hides menu if clicked outside main element
const clickOutsideCloseMenu = () => {
  homeHeader.classList.toggle("active");

  menuList.classList.toggle("active");

  setTimeout(function () {
    menuList.style.visibility = "hidden";
  }, 500);
  mainSection.classList.toggle("active");
  nameMobile.classList.toggle("active");
};

$(document).mouseup((e) => {
  if (
    !$menu.is(e.target) && // if the target of the click isn't the container...
    $menu.has(e.target).length === 0 &&
    homeHeader.classList.contains("active")
  ) {
    // ... nor a descendant of the container
    clickOutsideCloseMenu();
    changeBurgerMenuAnimation();
  }
});

// changes animation of the burger menu
const changeBurgerMenuAnimation = () => {
  for (let i = 0; i < burgerMenuStickComponents.length; i++) {
    const burgerMenuStickComponentsClassList =
      burgerMenuStickComponents[i].classList;
    if (
      burgerMenuStickComponentsClassList.contains("open") ||
      burgerMenuStickComponentsClassList.contains("close")
    ) {
      burgerMenuStickComponentsClassList.toggle("open");
      burgerMenuStickComponentsClassList.toggle("close");
    } else {
      burgerMenuStickComponentsClassList.toggle("open");
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
};

// hide menu links after click
menuList.addEventListener("click", function () {
  listItemsNav.forEach(() => {
    if (window.innerWidth < windowCurrentWidth) {
      menuShowHide();
      changeBurgerMenuAnimation();
    }
  });
});

// Back to top function, when arrow is clicked.

returnToTopButton.addEventListener("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

// Centers the section if it fits inside the screen, if not, sets it to start
const jumpToSection = function () {
  allAnchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      let currentTarget = document.querySelector(this.getAttribute("href"));
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
        inline: "start",
      });
    });
  });
};

jumpToSection();

// Car Animation

const animateAndHideCar = () => {
  if (document.documentElement.clientWidth < 768) {
    pullingCarContainer.classList.toggle("fadeInLeft");
    pullingCarContainer.classList.toggle("fadeInRight");
  }
  setTimeout(function () {
    speedCarContainer.classList.toggle("animate");
  }, 2300);

  setTimeout(function () {
    speedCarContainer.classList.toggle("hidden");
  }, 5000);
};

// Scroll Reveal
initSr();

// Start Car Animation
animateAndHideCar();

// Tilt Gallery Images
initTilt();
