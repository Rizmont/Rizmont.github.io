$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-exit').click(function(){
	$('.mobile-menu').removeClass('active');
})



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
	setEqualHeight($(".table-pic"));
	setEqualHeight($(".picture"));
	setEqualHeight($(".focus td"));
	setEqualHeight($(".pict"));
	setEqualHeight($(".blog-p"));
});


$(window).resize(function() {
	setEqualHeight($(".table-pic"));
	setEqualHeight($(".picture"));
	setEqualHeight($(".focus td"));
	setEqualHeight($(".pict"));
	setEqualHeight($(".blog-p"));
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        1170:{
            items:3
        }
    }
})


$('.first').click(function(){
	$('.pic1').addClass('on');
	$('.pic2').removeClass('on');
})

$('.download').click(function(){
	$('.pic2').addClass('on');
	$('.pic1').removeClass('on');
})

