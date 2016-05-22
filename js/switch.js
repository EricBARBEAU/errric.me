$(document).ready(function() 
{
	$(".pt-trigger").click(function()
	{
	 if(($(this).attr("data-goto"))==-1)
	 {
	   $(".logo").hide('slide',300);
	   $(".nav-btn").css("color","#f8f6f5");
	   $('.project-visual').animate({bottom: "0px"},600);
	   $('.project-visual').animate({opacity: "0.6"},200);
	 }
	 else
	 {
	   $(".logo").show('slide',300);
	   $(".nav-btn").css("color","#262427");
	   $('.project-visual').animate({bottom: "-=800px"},600);
	   $('.project-visual').animate({opacity: "0.4"},200);
	 }
	});
});		