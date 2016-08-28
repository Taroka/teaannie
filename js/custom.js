
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#tea').parallax("100%", 0.3);
    $('#food').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#offer').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // 隨螢幕寬度調整大小, 可能會有點變形
  // $('.gallery img').width(screen.width * 0.23);
  // $('.gallery img').height(screen.width * 0.25);

  // NIVO LIGHTBOX
  $('#tea a').nivoLightbox({
        effect: 'fadeScale',
    });
  $('#food a').nivoLightbox({
        effect: 'fadeScale',
    });
  $('#menu a').nivoLightbox({
        effect: 'fadeScale',
    });

});
