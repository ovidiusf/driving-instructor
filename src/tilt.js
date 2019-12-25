
const tilt = $('.js-tilt').tilt();

const initTilt = () => {
  // Projects images
  $('.galerie-img').tilt({
    maxTilt: 3,
  });
};

export default initTilt;
