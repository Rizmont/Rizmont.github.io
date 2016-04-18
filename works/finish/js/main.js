$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-exit').click(function(){
	$('.mobile-menu').removeClass('active');
})

//carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    items:1
})

$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
   	items:1
})

$('.owl-carousel3').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
})

$('.owl-carousel4').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

//progress bar
$(function() {
			$(".meter > span").each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});
		});

////
$(document).on('scroll', function () {

	var scrollTop = $(window).scrollTop();

	console.log(scrollTop);

	if(scrollTop >= 2345){
		 $('.animated').addClass('bounceInLeft')
	}


});

////navv
$(document).ready(function() {
    $('.menu-open').on('click', function() {
      
      $('.menu').slideToggle();
    });
  });
  
          $(function() {
            $('.last a[href*=#]:not([href=#carousel])').click(function() {
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
//

function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}

$(document).ready(function() {
	setEqualHeight($(".project"));
	setEqualHeight($(".project-text"));
  setEqualHeight($(".client"));
});


$(window).resize(function() {
	setEqualHeight($(".project"));
	setEqualHeight($(".project-text"));
  setEqualHeight($(".client"));
});


//tabs  
 $(function() {
    $( "#tabs" ).tabs({
      active:1
    });
  });