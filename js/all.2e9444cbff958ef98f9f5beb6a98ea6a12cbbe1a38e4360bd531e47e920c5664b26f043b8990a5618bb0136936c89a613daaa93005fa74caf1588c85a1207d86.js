(function() {
var $, update_frames;

$ = jQuery;

update_frames = function() {
  var footer_height, header_height, total_height;
  total_height = window.innerHeight;
  header_height = $('.navbar').height();
  footer_height = $('footer').height();
  return $('.pdf-frame')
      .css('height', total_height - header_height - footer_height);
};

$(function() {
  update_frames();
  return $(window).resize(function() { return update_frames(); });
});
}).call(this);

;
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12218421-1', 'auto');
ga('send', 'pageview');
