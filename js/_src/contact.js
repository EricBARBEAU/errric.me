$(document).ready(function() 
{
	$(".nav-btn-2").click(function()
	{
		$("#TopBar").addClass('shrink');
		$(".pt-page").css("transform","scale(0.94, 0.9)");
		$(".contactOverlay").css("visibility","visible");
		$(".contactOverlay").animate({opacity: "0.6"},300);
		$("#Contact").addClass("visible",500);
	});

	$(".close-btn").click(function()
	{
		$("#Contact").removeClass("visible",500);
		$(".contactOverlay").css("visibility","hidden");
		$(".contactOverlay").animate({opacity: "0"},300);
		$(".pt-page").css("transform","scale(1, 1)");
		$("#TopBar").removeClass('shrink');
	});
});	