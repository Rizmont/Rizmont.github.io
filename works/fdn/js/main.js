$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
});

$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    items: 1
});

if(screen.width >= 1241)  {
        $('.building').addClass('build');
        $('iframe').addClass('build');
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
    setEqualHeight($(".build"));
    setEqualHeight($(".long"));

});


$(window).resize(function() {
    setEqualHeight($(".build"));
    setEqualHeight($(".long"));

});


$('.second').click(function(){
    $('.text2').addClass('classs');
    $('.text1').removeClass('classs');
    $('.second').addClass('on');
    $('.first').removeClass('on');

})

$('.first').click(function(){
    $('.text1').addClass('classs');
    $('.text2').removeClass('classs');
    $('.first').addClass('on');
    $('.second').removeClass('on');

})

$('.thirdd').click(function(){
    $('.position3').addClass('yes');
    $('.position2').removeClass('yes');
    $('.position1').removeClass('yes');
    $('.thirdd').addClass('on2');
    $('.secondd').removeClass('on2');
    $('.firstt').removeClass('on2');

})

$('.secondd').click(function(){
    $('.position3').removeClass('yes');
    $('.position2').addClass('yes');
    $('.position1').removeClass('yes');
    $('.thirdd').removeClass('on2');
    $('.secondd').addClass('on2');
    $('.firstt').removeClass('on2');

})

$('.firstt').click(function(){
    $('.position1').addClass('yes');
    $('.position2').removeClass('yes');
    $('.position3').removeClass('yes');
    $('.firstt').addClass('on2');
    $('.secondd').removeClass('on2');
    $('.thirdd').removeClass('on2');
})