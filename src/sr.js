export default function () {
    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true
    };

    /* Title Section */
    // ScrollReveal().reveal('#pulling-car', {
    //     ...defaultProps,
    //     // delay: 1500,
    //     distance: '0px',
    //     origin: 'bottom'
    // });

    /* Despre mine */
    ScrollReveal().reveal('#despremine', {
        ...defaultProps,
        delay: 300,
    });

    /* Cursuri Auto */
    ScrollReveal().reveal('#cursuriauto', {
        ...defaultProps,
        delay: 300,
    });

    /* Galerie */
    ScrollReveal().reveal('#galerie', {
        ...defaultProps,
        delay: 300,
    });

    /* Testimoniale */
    ScrollReveal().reveal('#testimoniale', {
        ...defaultProps,
        delay: 300,
    });

    /* Contact */
    ScrollReveal().reveal('#contact', {
        ...defaultProps,
        delay: 300,
    });
}
