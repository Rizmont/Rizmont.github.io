$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-exit').click(function(){
	$('.mobile-menu').removeClass('active');
})

//readMore
$('article').readmore({
        speed: 500,
        collapsedHeight: 70
    });

//tabs
$( "#tabs" ).tabs();

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
	setEqualHeight($(".box-pic-services"));
	setEqualHeight($(".pic-services"));
	setEqualHeight($(".readmore"));
	setEqualHeight($(".text-team"));
	setEqualHeight($(".text-skills"));
	setEqualHeight($(".text-portfolio"));
});


$(window).resize(function() {
	setEqualHeight($(".box-pic-services"));
	setEqualHeight($(".pic-services"));
	setEqualHeight($(".readmore"));
	setEqualHeight($(".text-team"));
	setEqualHeight($(".text-skills"));
	setEqualHeight($(".text-portfolio"));
});
