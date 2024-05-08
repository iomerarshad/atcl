var owl = $('.owl-carousel');
owl.owlCarousel({
  // items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1 // Display 1 item on mobile devices
    },
    768: {
      items: 2 // Display 2 items on tablets
    },
    992: {
      items: 3 // Display 3 items on medium-sized devices
    },
    1200: {
      items: 6 // Display 4 items on large screens
    }
  }
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})