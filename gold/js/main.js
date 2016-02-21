	      
  $(document).ready(function() {
    $('.menu-open').on('click', function() {
      
      $('.menu').slideToggle();
    });
  });
  
          $(function() {
            $('a[href*=#]:not([href=#carousel])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top - 76
                  }, 1000);
                  return false;
                }
              }
            });
          });
        