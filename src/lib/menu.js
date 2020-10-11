import { OFFSETS, DOM_ELEMENTS } from './constants.js';

const {
  homeHeader,
  menuList,
  mainSection,
  nameMobile,
  burgerMenuStickComponents
} = DOM_ELEMENTS;

// hide/show navigation links and burger menu animation. hides menu internally when not visible
function menuShowHide() {
  homeHeader.classList.toggle('active');
  menuList.classList.toggle('active');
  menuList.style.display = 'flex';

  if (menuList.style.visibility !== 'visible') {
    menuList.style.visibility = 'visible';
  } else {
    setTimeout(function () {
      menuList.style.visibility = 'hidden';
    }, 500);
  }
  mainSection.classList.toggle('active');
  nameMobile.classList.toggle('active');
}

// changes animation of the burger menu
function changeBurgerMenuAnimation() {
  for (let i = 0; i < burgerMenuStickComponents.length; i++) {
    const stickComponents = burgerMenuStickComponents[i].classList;
    if (stickComponents.contains('open') || stickComponents.contains('close')) {
      stickComponents.toggle('open');
      stickComponents.toggle('close');
    } else {
      stickComponents.toggle('open');
    }
  }
}

// disables the menu and the menu icon when clicking outside the menu list
// hides menu if clicked outside main element
function clickOutsideCloseMenu() {
  homeHeader.classList.toggle('active');

  menuList.classList.toggle('active');

  setTimeout(function () {
    menuList.style.visibility = 'hidden';
  }, 500);

  mainSection.classList.toggle('active');
  nameMobile.classList.toggle('active');
}

export {
  menuShowHide,
  changeBurgerMenuAnimation,
  clickOutsideCloseMenu
};
