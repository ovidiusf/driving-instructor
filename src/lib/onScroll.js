import { OFFSETS, DOM_ELEMENTS } from './constants.js';

let { prevScrollpos } = OFFSETS;

let { homeHeader } = DOM_ELEMENTS;
const headerHeight = homeHeader.offsetHeight + 'px'

export default function () {
  // hides the navbar when scrolling
  window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      homeHeader.style.top = '0';
    } else {
        homeHeader.style.top = '0';    }
    prevScrollpos = currentScrollPos;
  });
}
