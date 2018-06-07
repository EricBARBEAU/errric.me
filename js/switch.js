$(document).ready(function() 
{
	$(".pt-trigger").click(function()
	{
	 if(($(this).attr("data-goto"))==-1)
	 {
	   $(".logo").hide('slide',500,'ease-in-out');
	   $(".nav-btn").css("color","#f8f6f5");

	   setTimeout(function() {
        $('.project-visual').addClass('active');
    }, 500);
	 }
	 else
	 {
	 	$('.project-visual').removeClass('active');
	 	$(".nav-btn").css("color","#262427");
	  $(".logo").show('slide',500,'ease-in-out'); 
	 }
	});
});		