
// top-slider

$(document).ready(function(){
    $('.top-slider').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.js-top-slider-prev'),
      nextArrow: $('.js-top-slider-next'),
      responsive: [
      {
      breakpoint: 990,
      settings: "unslick"
    }
    ]
    });

    $('.top-slider .slick-dots').appendTo('.js-new-buttons');

    $(window).resize(function() {

        var screenWidth = window.innerWidth;

          if (screenWidth > 990) {
            $('.top-slider').slick();
            $('.top-slider .slick-dots').appendTo('.js-new-buttons');

             }
    });
  });


  $(document).ready(function(){
      $('.another-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.js-central-slider-prev'),
        nextArrow: $('.js-central-slider-next'),
        responsive: [
        {
        breakpoint: 992,
        settings: {
          dots: false,
        }
      }
      ]
      });
    });

// central-slider

$(document).ready(function(){
    $('.central-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.js-central-slider-prev'),
      nextArrow: $('.js-central-slider-next'),
      responsive: [
      {
      breakpoint: 992,
      settings: {
        dots: false,
      }
    }
    ]
    });
  });


// comment slider

$(document).ready(function(){
    $('.comment-slider').slick({
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.js-comment-slider-prev'),
      nextArrow: $('.js-comment-slider-next'),
      responsive: [
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    ]
    });
  });




// yandex map

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [50.257220, 127.524613],
            controls: ['trafficControl'],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true

        });

      myMap.geoObjects
          .add(new ymaps.Placemark([50.257220, 127.524613], {
            balloonContent: ''
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#1e1a63'
        }))
});
