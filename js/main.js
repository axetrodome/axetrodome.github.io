$(document).ready(function(){
	var about = $('.about'),
		img = $('.image-container'),
		nav = $('.navigation-wrapper')

	if(about.hasClass('hidden') && img.hasClass('hidden')){
		about.removeClass('hidden');
		img.removeClass('hidden');
		nav.removeClass('hidden');
	}	

})
