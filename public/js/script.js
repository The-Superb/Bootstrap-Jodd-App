$(document).ready(function() {

    AOS.init();

    var owl = $('#owl');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })

    var owlPhone = $('#owl2');
    owlPhone.owlCarousel({
        items: 5,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:3000,
        center: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5
            }
        }
    });

})