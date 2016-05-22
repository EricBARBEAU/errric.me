$(document).ready(function() 
{
	$(".nav-btn-2").click(function()
	{
		$("#TopBar").css("transform","scale(0.94, 0.9)");
		$("#TopBar").animate({top: "80px"},100);
		$(".pt-page").css("transform","scale(0.94, 0.9)");
		$(".contactOverlay").css("visibility","visible");
		$(".contactOverlay").animate({opacity: "0.6"},300);
		$("#Contact").animate({top: "20%"},500);
	});

	$(".close-btn").click(function()
	{
		$("#Contact").animate({top: "-1200px"},500);
		$(".contactOverlay").css("visibility","hidden");
		$(".contactOverlay").animate({opacity: "0"},300);
		$(".pt-page").css("transform","scale(1, 1)");
		$("#TopBar").animate({top: "50px"},100);
		$("#TopBar").css("transform","scale(1, 1)");
	});
});	