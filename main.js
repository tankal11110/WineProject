$(document).ready(function(){
    var $menu=$("#header-nav");
	
	
	$(window).scroll(function(){
	    if ($(this).scrollTop()> 100 && $menu.hasClass("default")){
		    $menu.removeClass("default").addClass("fixed");
			} else if($(this).scrollTop() <=100 && $menu.hasClass("fixed")){
			    $menu.removeClass("fixed").addClass("default");
			}
	});
	
	$('.mobile-menu').on('click', function(){
		
		$('.header-nav__menu').toggle('slow');

	
	});

});