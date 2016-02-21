$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

//owl-arousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1
})

//tabs
$( "#tabs" ).tabs({
	 active: 2
});

//plarium

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
	setEqualHeight($(".serv"));
	setEqualHeight($(".abou"));
	setEqualHeight($(".wor"));
});


$(window).resize(function() {
	setEqualHeight($(".serv"));
	setEqualHeight($(".abou"));
	setEqualHeight($(".wor"));
});
