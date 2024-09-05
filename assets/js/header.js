document.addEventListener('DOMContentLoaded', function () {
    // Get the header element
    const header = document.querySelector('header.site-header');

    // Check if the header exists
    if (header) {
        // Get the height of the header
        const headerHeight = header.offsetHeight;

        // Set the --header-height variable on the body
        document.body.style.setProperty('--header-height', headerHeight + 'px');
    }

    window.addEventListener('scroll', function () {
        // Check if the page has scrolled down
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});