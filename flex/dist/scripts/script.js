
// top-slider

$(document).ready(function(){
    $('.js-slider-1').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.js-top-slider-prev'),
      nextArrow: $('.js-top-slider-next'),
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
    $('.js-slider-2').slick({
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
    $('.js-slider-3').slick({
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



//navbar

$('.navbar-toggle').click(function(e){
  e.preventDefault();
  $('nav').toggleClass('show');
})
