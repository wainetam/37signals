$(document).ready(function() {
	$('.button').on('mouseenter', function() { //vars need to be inside on method?
		var headline_basecamp = 'Basecamp is the project management tool you wish you had on your last project.';
		var subtext_basecamp = 'Are you still managing projects with email? Are you still using Excel for your to-do lists? It\'s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.';

		var headline_highrise = 'Highrise remembers the important things about people you\'d normally forget.';
		var subtext_highrise = 'Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.'; 

		var headline_campfire = 'From near or far, Campfire helps teams work together over the web in real-time.';
		var subtext_campfire = 'Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It\'s game changing. We couldn\'t run our own business without Campfire.'; 

		$('.headline').addClass('headline-mouseover');
		$('.subtext').addClass('subtext-mouseover');

		if($(this).attr('id') == 'basecamp') { 
			$('.headline').text(headline_basecamp);
			$('.subtext').text(subtext_basecamp);
			//$('#basecamp').append('<img id="arrow-left" />');
		}
		if($(this).attr('id') == 'highrise') {
			$('.headline').text(headline_highrise);	
			$('.subtext').text(subtext_highrise);
			//$('#highrise').append('<img id="arrow-left" />');
		}
		if($(this).attr('id') == 'campfire') {
			$('.headline').text(headline_campfire);	
			$('.subtext').text(subtext_campfire);
			//$('#campfire').append('<img id="arrow-right" />');
		}
	});

	var headline_default = $('.headline').text();
	var subtext_default = $('.subtext').text(); 

	$('#basecamp, #highrise, #campfire').on('mouseleave', function() {
		$('.headline').text(headline_default);
		$('.subtext').text(subtext_default);
		$('#arrow-left, #arrow-right').remove();
		$('.headline').removeClass('headline-mouseover');
		$('.subtext').removeClass('subtext-mouseover');
	});
});