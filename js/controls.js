$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        
	        $(".to-the-top").fadeIn(200);    
	    } else {
	        $(".to-the-top").fadeOut(200);   
	    }
	});
	$(".to-the-top").click(function() {      
	    $("body,html").animate({
	        scrollTop : 0             
	    }, 500);
	});
	$(".log-reg").click(function(){
		$(this).addClass("hidden");
		$(".user").removeClass("hidden");
		});
	$(".log-out").click(function(){
		$(".user").addClass("hidden");
		$(".log-reg").removeClass("hidden");
		});
});


