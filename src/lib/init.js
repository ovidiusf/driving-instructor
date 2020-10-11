import { DOM_ELEMENTS, OFFSETS } from './constants.js';
import {
  menuShowHide,
  changeBurgerMenuAnimation,
  clickOutsideCloseMenu
} from './menu.js';

const {
  burgerMenuToggle,
  menuList,
  listItemsNav,
  homeHeader
} = DOM_ELEMENTS;

const { windowCurrentWidth } = OFFSETS;

const $menu = $('#home-header');

function initBurgerMenu() {
  // changes behaviour of the navigation bar when mobile
  burgerMenuToggle.addEventListener('click', () => {
    menuShowHide();
    changeBurgerMenuAnimation();
  });

  // hide menu links after click
  menuList.addEventListener('click', () => {
    listItemsNav.forEach(() => {
      if (window.innerWidth < windowCurrentWidth) {
        menuShowHide();
        changeBurgerMenuAnimation();
      }
    });
  });

  $(document).mouseup((event) => {
    if (
      !$menu.is(event.target) && // if the target of the click isn't the container...
      $menu.has(event.target).length === 0 &&
      homeHeader.classList.contains('active')
    ) {
      // ... nor a descendant of the container
      clickOutsideCloseMenu();
      changeBurgerMenuAnimation();
    }
  });
}

function setBodyWidth() {
  // sets the body to the dimension of the devices' inner width
  window.onload = function () {
    $('body').css('width', 'document.documentElement.clientWidth');
  };
}

export { initBurgerMenu, setBodyWidth };
