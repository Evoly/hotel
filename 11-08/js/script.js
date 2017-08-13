
// top-slider

$(function () {
  $('#top-slider').carousel({
      interval:4000,
      pause: "hover",
  });
});



$('#top-slider').carousel().on('slide.bs.carousel', function (){
  document.getElementById('video').pause();
})


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
})
