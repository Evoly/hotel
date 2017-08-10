
// top-slider

$(function () {
  $('#top-slider').carousel({
      interval:4000,
      pause: "hover",
  });
});

//init youtube API

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create YouTube player(s)
var player1;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1');
}

//
$(document).ready(function () {
    $(".js-bootstrap-btn").click(function () {
        player1.stopVideo();
    });

    $(this).mouseover(function(){
      if (!$(this).hasClass("carousel")){
        setTimeout(stopVideo, 4000);
      }
    });
    function stopVideo() {
        player1.stopVideo();
      }

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
