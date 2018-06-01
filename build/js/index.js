$( '.owl-carousel' ).owlCarousel({
    items: 6,
    nav: true,
    dots: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 6,
          mouseDrag: true,
          nav: false,
          margin: 10
        }
    }
});