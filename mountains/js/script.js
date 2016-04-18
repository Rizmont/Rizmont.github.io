$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-exit').click(function(){
	$('.mobile-menu').removeClass('active');
});

if(screen.width >= 640)  {
       $('.pic').addClass('cc');
};

if(screen.width >= 1141)  {
        $('big-photo').removeClass('pho');
        $('small-photo').removeClass('pho');
        $('.pic').removeClass('cc');
};


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
    setEqualHeight($(".phot"));
    setEqualHeight($(".cc"));
    setEqualHeight($(".client"));
});


$(window).resize(function() {
    setEqualHeight($(".pho"));
    setEqualHeight($(".cc"));
    setEqualHeight($(".client"));
});

//carousel


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
      autoplay:true,
    autoplayTimeout:2000,
    smartSpeed:1000,
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:6,
        }
    }
})

//
$(document).ready(function() {
        $('body').append('<div id="toTop">^ Наверх</div>');
        $(window).scroll(function() {
            if($(this).scrollTop() > 200) {
                $('#toTop').fadeIn();   
            } else {
                $('#toTop').fadeOut();
            }
        });
     
        $('#toTop').click(function() {
            $('body, html').animate({scrollTop: 0}, 400);
        }); 
    });
