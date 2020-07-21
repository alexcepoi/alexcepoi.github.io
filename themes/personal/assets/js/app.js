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
