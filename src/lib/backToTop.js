import { DOM_ELEMENTS } from './constants.js';

const { returnToTopButton } = DOM_ELEMENTS;

export default function addReturnToTopButton() {
  // Back to top function, when arrow is clicked.
  returnToTopButton.addEventListener('click', () => {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      500
    );
  });
}
