

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
