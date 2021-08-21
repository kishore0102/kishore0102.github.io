(function($) {
  "use strict"; // Start of use strict

  var joinedDate = "2018-03-08";
  var experience = dateAgo(joinedDate);
  $('#experience').text(experience);

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function dateAgo(date) {
  var startDate = new Date(date);
  var diffDate = new Date(new Date() - startDate);
  var years = diffDate.toISOString().slice(0, 4) - 1970;
  var months = diffDate.getMonth();
  var message = years + " years";
  (months != 0) ? message = message + " & " + months + " months" : "";
  return message;
}