$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
		sectionsColor: ['#7bd447', '#F2DDBE', '#93CF4E', '#F2DC4E', '#7bd447', '#8cff66'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Main Features', 'Personal Trainers', 'Gym Owners','Who are we?','Subscribe today'],
		responsive:900,
	  	continuousVertical: false,
		scrollOverflow: false
	});



	$('.fancybox').fancybox();
	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      pagination: false,
      navigation: false,
      paginationSpeed: 200,
      rewindSpeed: 300
 
  });

});


// Wow js activation
 new WOW().init();
