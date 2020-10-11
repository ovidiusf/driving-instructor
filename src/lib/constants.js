const SCROLL_REVEAL_PROPS = {
  cubicBezier: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '80px'
};

// Defining variables
const DOM_ELEMENTS = {
  menuList: document.querySelector('#menu-list'),
  burgerMenuToggle: document.querySelector('#burger-toggle'),
  homeHeader: document.querySelector('#home-header'),
  burgerMenuStickComponents: document.getElementsByClassName('stick'),
  listItemsNav: document.querySelectorAll('#main-nav > ul > li'),
  returnToTopButton: document.querySelector('#return-to-top'),
  allAnchors: document.querySelectorAll('a[href^="#"]'),
  mainSection: document.querySelector('#main-section'),
  nameMobile: document.querySelector('.name-mobile'),
  speedCarContainer: document.querySelector('#speed-car-container'),
  pullingCarContainer: document.querySelector('#pulling-car')
};

const OFFSETS = {
  prevScrollpos: window.pageYOffset,
  windowCurrentWidth: 900,
  widthHero: document.querySelector('#hero').offsetWidth
};

export { SCROLL_REVEAL_PROPS, OFFSETS, DOM_ELEMENTS };
