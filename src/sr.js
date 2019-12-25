export default function () {
    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '80px',
        duration: 1000,
        desktop: true,
        mobile: false
    };

    /* Despre mine */
    ScrollReveal().reveal('#despremine', {
        ...defaultProps,
        delay: 100,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Cursuri Auto */
    ScrollReveal().reveal('#cursuriauto', {
        ...defaultProps,
        delay: 300,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Galerie */
    ScrollReveal().reveal('#galerie', {
        ...defaultProps,
        delay: 300,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Testimoniale */
    ScrollReveal().reveal('#testimoniale', {
        ...defaultProps,
        delay: 300,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });

    /* Contact */
    ScrollReveal().reveal('#contact', {
        ...defaultProps,
        delay: 300,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
    });
}
