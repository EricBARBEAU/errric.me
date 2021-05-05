$(document).ready(function() 
{
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
        $(".project-content").addClass('drop');
    }, 300);
	 }
	 else
	 {
	 	$(".logo").show('slide',300,'ease-in-out'); 

	 	$(".project-content").removeClass('drop');
	 	$('.project-visual').removeClass('active');

	 	if (document.body.classList.contains('theme-light')) {
			$(".nav-btn").css("color","#262427");
		}
	 }
	});
});		