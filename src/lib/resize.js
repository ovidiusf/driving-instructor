import { DOM_ELEMENTS } from './constants.js';


const { homeHeader } = DOM_ELEMENTS;
let headerWidth = $(window).width();

export default function changeHeaderOnResize() {
  // changes the width if resized
  $(window).resize(function () {
    if ($(window).width() != headerWidth) {
      headerWidth = $(window).width();
      homeHeader.style.maxWidth = headerWidth;
    }
  });
}
