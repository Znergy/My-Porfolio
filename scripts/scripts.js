$(document).ready(function() {
  $("#about-nav").click(function() {
    $('html,body').animate({
          scrollTop: $("#about").offset().top
      },'slow');
  });
  $("#projects-nav").click(function() {
    $('html,body').animate({
          scrollTop: $("#projects").offset().top
      },'slow');
  });
  $("#more-info-nav").click(function() {
    $('html,body').animate({
          scrollTop: $("#more-info").offset().top
      },'slow');
  });
});