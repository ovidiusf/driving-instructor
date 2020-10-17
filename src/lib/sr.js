import { SCROLL_REVEAL_PROPS } from './constants.js';

const arrayToReveal = [
  '#despremine',
  '#cursuriauto',
  '#galerie',
  '#testimoniale',
  '#contact'
];

const defaultProps = {
  easing: SCROLL_REVEAL_PROPS.cubicBezier,
  distance: SCROLL_REVEAL_PROPS.distance,
  duration: 1000,
  delay: 300,
  origin: window.innerWidth > 768 ? 'left' : 'bottom',
  desktop: true,
  mobile: false
};

function revealScroll(id) {
  ScrollReveal().reveal(id, {
    ...defaultProps
  });
}

export default () => {
  arrayToReveal.forEach((element) => revealScroll(element));
};
