$(document).ready(function() 
{

	// // Contact function
	// $(".nav-btn-2").click(function()
	// {
	// 	$("#TopBar").addClass('shrink');
	// 	$(".pt-page").css("transform","scale(0.94, 0.9)");
	// 	$(".contactOverlay").css("visibility","visible");
	// 	$(".contactOverlay").animate({opacity: "0.6"},300);
	// 	$("#Contact").addClass("visible",500);
	// });

	// $(".close-btn").click(function()
	// {
	// 	$("#Contact").removeClass("visible",500);
	// 	$(".contactOverlay").css("visibility","hidden");
	// 	$(".contactOverlay").animate({opacity: "0"},300);
	// 	$(".pt-page").css("transform","scale(1, 1)");
	// 	$("#TopBar").removeClass('shrink');
	// });

	// Switch function
	$(".pt-trigger").click(function()
	{
	 if(($(this).attr("data-goto"))==-1)
	 {
		$(".logo").hide('slide',300,'ease-in-out');

		if (document.body.classList.contains('theme-light')) {
			$(".nav-btn").css("color","#f8f6f5");
		}

	   setTimeout(function() {
        $('.project-visual').addClass('active');
        $('.project-visual_vid').addClass('active');
        $(".project-content").addClass('drop');
    }, 300);
	 }
	 else
	 {
	 	$(".logo").show('slide',300,'ease-in-out'); 

	 	$(".project-content").removeClass('drop');
	 	$('.project-visual').removeClass('active');
	 	$('.project-visual_vid').removeClass('active');

	 	if (document.body.classList.contains('theme-light')) {
			$(".nav-btn").css("color","#262427");
		}
	 }
	});

	$(".pt-trigger").click(function(){$(this).hasClass("pt-trigger_home")?($(".pt-page").removeClass("homeShown"),$(".pt-page").addClass("projectShown")):($(".pt-page").removeClass("projectShown"),$(".pt-page").addClass("homeShown"))}),$(".button").click(function(){$("#ProjectsWrapper").scrollTo(500,0)});

	// Theme switch function
	$(".logo").click(function()
	{
		if (document.body.classList.contains('theme-light')) {
			$(document.body).removeClass('theme-light');
			$(document.body).addClass('theme-dark');
			$(".nav-btn").css("color","#f8f6f5");
		} else if (document.body.classList.contains('theme-dark')) {
			$(document.body).removeClass('theme-dark');
			$(document.body).addClass('theme-light');
			$(".nav-btn").css("color","#262427");
		}
	});
	
});	