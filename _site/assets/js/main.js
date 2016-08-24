$(function () {
  var info = '[{"NAME": "XPert Technology in Automation", "DESCRICAO": "The AutoXPert is a powerful tool for management Gas Stations and Convenience Stores", "FACEBOOK": "https://www.facebook.com/XPertTecnologiaEmAutomacao","WEBSITE": "http://www.xpert.com.br" },{ "NAME": "Viasoft Softwares Business", "DESCRICAO": "Business Softwares", "FACEBOOK": "https://www.facebook.com/viasoftsoftwaresempresariais", "WEBSITE": "http://www.viasoft.com.br" },{ "NAME": "SESMO Software for occupational medicine", "DESCRICAO": "Medicine for software", "FACEBOOK": "https://www.facebook.com/sesmo", "WEBSITE": "http://www.sesmo.com.br" }]';
  var list = jQuery.parseJSON(info);
  $('a[rel=footnote]').each(function (key, value) {
    var link = $(this);
    var token = link.attr('href').substr(1);
    var msg = list[key].NAME + "&nbsp;-&nbsp;" + "<em>" + list[key].DESCRICAO + "</em>"+ "&nbsp;<p><a href="+ list[key].FACEBOOK +">Facebook</a>&nbsp;-" + "<a href="+list[key].WEBSITE+">&nbsp;Web Site</a></p>" ;
    // There is an issue with the line below that stops the clock-tap-scroll-to-top on iOS
    $('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + msg + '</div>');
    link.click(function () {
      var $currentFootnote = $(document.getElementById('overlay-' + token));
      // If the footnote is already displayed, hide it instead
      if ($currentFootnote.is(':visible')) {
        $currentFootnote.slideUp('fast');
      } else {
        $('.footnoteContent').hide();
        $currentFootnote.slideDown('fast');
      }
      return false;
    });
  });
  $('.footnoteContent a[rev=footnote]').remove();
  $('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
  $('.closeFootnote').click(function () {
    $(this).closest('.footnoteContent').slideUp('fast');
    return false;
  });
  $('.button-background').click(function () {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  $('.description').typed({
    strings: [
      'web deev..',
      'Front-end Engineer ;)'
    ],
    backDelay: 300,
    typeSpeed: 30
  });
  $('#arrow').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
})
