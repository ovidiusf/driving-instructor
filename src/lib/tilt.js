const initTilt = () => {
  tiltImage('.galerie-img');
  tiltImage('.despremine-img');
  tiltImage('.testimonial-img');
};

function tiltImage(id, maxTilt = 3) {
  $(id).tilt({
    maxTilt: maxTilt
  });
}

export default initTilt;
