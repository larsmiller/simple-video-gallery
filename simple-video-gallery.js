jQuery(document).ready(function($){
	$('.video img').click(function(){
		$('.video img, .video p').show();
		$('.video iframe').remove();
		var video = $(this).attr('data-video');
		$(this).parent('.video').append(video);
		$(this).hide();
		$(this).siblings('p').hide();					
	});
});