document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('.popup')
    const toaster = document.querySelector('.toaster')

    const popupTrigger = document.querySelectorAll('[data-open-popup]')
    const popupCloseTrigger = document.querySelectorAll('[data-close-popup]')
    const toasterTrigger = document.querySelector('[data-open-toaster]')


    // Open popup
    popupTrigger.forEach((openButton) => {
        openButton.addEventListener('click', function () {
            popup.classList.add('open');
        });
    })
    // Close popup
    popupCloseTrigger.forEach((closeButton) => {
        closeButton.addEventListener('click', function () {
            popup.classList.remove('open');
        });
    })

    // Close popup when clicking on the overlay (but not the toaster)
    popup.addEventListener('click', function (event) {
        if (event.target === popup && popup.classList.contains('open')) {
            popup.classList.remove('open');
        }
    });

    // Open toaster for 2s
    toasterTrigger.addEventListener('click', function () {
        toaster.classList.add('open');
        setTimeout(() => {
            toaster.classList.remove('open')
        }, 2000)
    });


});