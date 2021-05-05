$(document).ready(function() 
{
	$(".logo").click(function()
	{
		if (document.body.classList.contains('theme-light')) {
			$(document.body).removeClass('theme-light');
			$(document.body).addClass('theme-dark');
		} else {
			$(document.body).removeClass('theme-dark');
			$(document.body).addClass('theme-light');
		}
	});
});	