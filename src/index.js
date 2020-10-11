import initSr from './lib/sr.js';
import initTilt from './lib/tilt.js';
import animateAndHideCar from './lib/animateCar.js';
import jumpToSection from './lib/jumpToSection.js';
import changeHeaderOnResize from './lib/resize.js';
import hideNavbarOnScroll from './lib/onScroll.js';
import addReturnToTopButton from './lib/backToTop.js';
import { initBurgerMenu, setBodyWidth } from './lib/init.js';

// enables the back to top functionality of a button
addReturnToTopButton();
// sets the body width to the devices width
setBodyWidth();

// changes the header with on resize
changeHeaderOnResize();

//hides the navbar when scrolling
hideNavbarOnScroll();

// Initializes the burger menu
initBurgerMenu();

// Handles the anchor jumping to a specific section
jumpToSection();

// Scroll Reveal
initSr();

// Start Car Animation
animateAndHideCar();

// Tilt Gallery Images
initTilt();
