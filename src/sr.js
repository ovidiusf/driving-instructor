export default function () {
    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true
    };

    /* Title Section (H3) */
    // ScrollReveal().reveal('.h3-title', {
    //     ...defaultProps,
    //     delay: 1500,
    //     distance: '0px',
    //     origin: 'bottom'
    // });

    /* Despre mine */
    ScrollReveal().reveal('#despremine', {
        ...defaultProps,
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Cursuri Auto */
    ScrollReveal().reveal('#cursuriauto', {
        ...defaultProps,
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Galerie */
    ScrollReveal().reveal('#galerie', {
        ...defaultProps,
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Testimoniale */
    ScrollReveal().reveal('#testimoniale', {
        ...defaultProps,
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Contact */
    ScrollReveal().reveal('#contact', {
        ...defaultProps,
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });
}
