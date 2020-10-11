import { DOM_ELEMENTS } from './constants.js';

const { allAnchors } = DOM_ELEMENTS;

/**
 * Centers the section if it fits inside the screen, if not, sets it to start
 */
function jumpToSection() {
  allAnchors.forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      let currentTarget = document.querySelector(this.getAttribute('href'));
      event.preventDefault();

      let blockStyle;
      if (currentTarget.clientHeight > document.documentElement.clientHeight) {
        blockStyle = 'start';
      } else {
        blockStyle = 'center';
      }

      currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: blockStyle,
        inline: 'start'
      });
    });
  });
}

export default jumpToSection;
