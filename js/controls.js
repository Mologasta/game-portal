$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        
	        $('.toTheTop').fadeIn(200);    
	    } else {
	        $('.toTheTop').fadeOut(200);   
	    }
	});
	$('.toTheTop').click(function() {      
	    $('body,html').animate({
	        scrollTop : 0             
	    }, 500);
	});
});