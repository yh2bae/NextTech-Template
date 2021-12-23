// Preloadder
$(window).on("load", function(){
    $(".preloader").fadeOut("slow");
});

$(document).ready(function () {

    // Navbar Shrink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    // Features Corousel
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    // Page Scrooling - Scroolit
    $.scrollIt({
        topOffset: 0
    });


    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 200, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    
});

//   Navbar Collapse
$(document).on('click', '.navbar-nav>li>a, .navbar-brand, .dropdown-menu>a', function (e) {
    if ( $(e.target).is('a') && $(e.target).attr('class') != 'nav-link dropdown-toggle' ) {
      $('.navbar-collapse').collapse('hide');
    }
  });
