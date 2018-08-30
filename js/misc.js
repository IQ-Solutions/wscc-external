function wsccOpen(id) {
  var elem = document.getElementById(id);
  var refState = $('#wsccrefstate');

  if(elem.style.display === "none" || elem.style.display === "") {
    elem.style.display = "block";

    if(id == 'wscc_refs')
      refState.attr('src','https://www.cdc.gov/TemplatePackage/3.0/images/minus12.png');
  }
  else if(elem.style.display === "block") {
    elem.style.display = "none";

    if(id == 'wscc_refs')
      refState.attr('src','https://www.cdc.gov/TemplatePackage/3.0/images/plus12.png');
  }
}

function wsccRefOpen(id) {
  var elem = document.getElementById(id);

  if(elem.style.display === "none" || elem.style.display === "") {
    elem.style.display = "block";
  }
}

function wsccReadMore(e,id) {
  var elem = $('#'+id);
  var target = e.target

  if(elem.hasClass('hideMore')) {
    elem.removeClass('hideMore');
    target.innerHTML = 'Hide More';
  }
  else {
    elem.addClass('hideMore');
    target.innerHTML = 'Read More';
  }

}

var jlSlideState = false;

function toggleJlSlide(e) {
  var btn = $('.slideout-btn');
  var bg = $('.slideout-bg');
  var ctnr = $('#jlSlide');

  if(!jlSlideState) {
    btn.removeClass('slideout-btn-out')
    btn.addClass('slideout-btn-in')
    ctnr.show('slide');
    bg.show();
  }
  else {
    btn.addClass('slideout-btn-out')
    btn.removeClass('slideout-btn-in')
    ctnr.hide('slide');
    bg.hide();
  }

  jlSlideState = !jlSlideState;
}

$(document).ready(function() {
  var website = window.location.hostname;

  $('a').each(function() {
    if(this.href.search(website) === -1)
      $(this).click(function(e) {
        e.preventDefault();
        alert('External Links are disabled until ready to go to production');
      });
  });

  $('.jl-slide a').click(toggleJlSlide)

  $('.slideout-bg').click(toggleJlSlide);

  $('.slideout-btn').click(toggleJlSlide);
})