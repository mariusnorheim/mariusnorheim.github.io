/*!
    * Start Bootstrap - Resume v1.0.0 (undefined)
    * Copyright 2013-2024 undefined
    * Licensed under undefined (https://github.com/StartBootstrap/resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

$(document).ready(function() {
    $('.thumbnail img').on('click', function() {
      var src = $(this).attr('src');
      var alt = $(this).attr('alt');
      $('#modalImage').attr('src', src);
      $('#modalImage').attr('alt', alt);
      $('#imageModal .modal-title').text(alt); // Set alt text as modal title
    });
  });
