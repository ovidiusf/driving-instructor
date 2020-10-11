import { OFFSETS, DOM_ELEMENTS } from './constants.js';

const { speedCarContainer, pullingCarContainer } = DOM_ELEMENTS;
const { widthHero } = OFFSETS;

/**
 * Car Animation function
 * Shows and hides the car
 */
function animateAndHideCar() {
  // Setting the container maxWidth to the heros width
  pullingCarContainer.style.maxWidth = widthHero + 'px';

  if (document.documentElement.clientWidth < 768) {
    pullingCarContainer.classList.toggle('fadeInLeft');
    pullingCarContainer.classList.toggle('fadeInRight');
  }
  setTimeout(function () {
    speedCarContainer.classList.toggle('animate');
  }, 2300);

  setTimeout(function () {
    speedCarContainer.classList.toggle('hidden');
  }, 5000);
}

export default animateAndHideCar;
