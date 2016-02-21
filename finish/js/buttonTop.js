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