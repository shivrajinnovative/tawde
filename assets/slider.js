$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,  // Enable autoplay
        autoplayTimeout: 3000,  // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true,  // Pause on hover
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });


    $(".owl-prev").html('<img src="./assets/icons/left-arrow-green.svg" />')
    $(".owl-next").html('<img src="./assets/icons/right-arrow-green.svg" />')

   
    AOS.init();
   
});


