/**
 * Created by dwilcox on 6/9/2018.
 */
// A $( document ).ready() block.
$(document).ready(function() {
  // grab the initial top offset of the navigation
  var stickyNavTop = $('.sticky-nav').offset().top;
  var stickyGraphicTop = $('.sticky-graphic').offset().top;
  var stickyGraphicHeight = $('.sticky-graphic').height();
  var stickyStop = $('#body').offset().top + $('#body').height() - Math.ceil(stickyGraphicHeight) + 50;
  var stickyPadding = 20;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
    /*var windowTop = $(document).scrollTop();*/
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
    /*console.log(scrollTop);*/
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop - stickyPadding) {
      /*$('.sticky-nav').addClass('sticky');*/
      //$('.sticky-nav').css('top', scrollTop - stickyNavTop + stickyPadding );
      $('.sticky-nav').css('zIndex', '1000' );
      $('.sticky-nav').css('position', 'fixed' );
      $('.sticky-nav').css('width', '213px' );

    } else {
      $('.sticky-nav').css('position', 'relative' );
    }
  };

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyGraphic = function(){

    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if($('.sticky-graphic').css('position') != 'relative') {
      if (scrollTop > stickyGraphicTop - stickyPadding) {
        if(scrollTop < stickyStop) {
          $('.sticky-graphic').css('position', 'fixed' );

          $('.sticky-graphic').css('top', '10px' );
        }
        else {
          $('.sticky-graphic').css('position', 'absolute' );

          $('.sticky-graphic').css('top', (stickyStop-stickyGraphicTop-75)+'px' );
        }

      } else {
        $('.sticky-graphic').css('position', 'absolute' );
      }
    }
  };

  stickyNav();
  stickyGraphic();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
    stickyGraphic();

  });
});