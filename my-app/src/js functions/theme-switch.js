$(document).ready(function() 
{
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