import { SCROLL_REVEAL_PROPS } from './constants.js';

export default function () {
  const defaultProps = {
    easing: SCROLL_REVEAL_PROPS.cubicBezier,
    distance: SCROLL_REVEAL_PROPS.distance,
    duration: 1000,
    desktop: true,
    mobile: true
  };

  /* Despre mine */
  ScrollReveal().reveal('#despremine', {
    ...defaultProps,
    delay: 100,
    origin: window.innerWidth > 768 ? 'left' : 'left'
  });

  /* Cursuri Auto */
  ScrollReveal().reveal('#cursuriauto', {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? 'left' : 'left'
  });

  /* Galerie */
  ScrollReveal().reveal('#galerie', {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? 'left' : 'left'
  });

  /* Testimoniale */
  ScrollReveal().reveal('#testimoniale', {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? 'left' : 'left'
  });

  /* Contact */
  ScrollReveal().reveal('#contact', {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? 'left' : 'left'
  });
}
