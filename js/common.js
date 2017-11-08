$(function() {



	$('.s4').waypoint(function(){
		
		$('.s4 .card').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card-off').addClass('card-on');
			}, 150*index);
		});

	},{
		offset: '30%'
	});


	var waypointsvg = new Waypoint({

		element: $(".s5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".s5 .s5-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".s5-text-wrap").addClass("s5-text-wrap-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '50%'
	});


	$('.s6').waypoint(function(){
		
		$('.s6 .card').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card-start').addClass('card-end');
			}, 150*index);
		});

	},{
		offset: '30%'
	});


	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: '',
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 600,
		autoPlaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600,
	});


	$('.arrow-bottom').click(function() {
		$('html, body').animate({scrollTop: $('.homesect .section-content').height()+100 }, 'slow');
		return false;
	});


	// $('.homesect .section-head').waypoint(function() {
	// 	$('.homesect .section-head p, .homesect .section-head h2').animated('fadeIn');
	// });

	$('.homesect .section-head p, .homesect .section-head h2, .s3 .s3-header h1, .s3 .s3-header p').animated('fadeIn');
	$('.homesect .section-content .s1-item, .s2-items-wrap, .s3 .section-content .s3-item').animated('fadeInUp');
	$('.s2 .s2-header h1, .s2 .s2-header p, .s2 .s2-header h2').animated('fadeIn');
	$('.s4 .s4-header h1, .s4 .s4-header p, .s4 .s4-header h3, .s5 .s5-header h1').animated('fadeIn');
	$('.s6 .s6-header h1, .s6 .s6-header p, .s7 .s7-header h1, .s7 .s7-header p').animated('fadeIn');
	$('.s8 .s8-header h1, .s8 .s8-header p').animated('fadeIn');
	$('.s8 .forms').animated('fadeInRight');
	$('.s8 .s8-items-wrap .s8-item').animated('fadeInUp');

	$('.s9-button').click(function() {
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});



	$("#phone").mask("+7 (999) 999-99-99");
	$("#phone2").mask("+7 (999) 999-99-99");

	$('.toggle-mnu').click(function(){
		$(this).toggleClass('on');
		$('.top-menu').slideToggle();
	});


	$('.s9 .main-header .toggle-mnu').click(function(){
		$('html, body').animate({ scrollTop: $(document).height() }, 'slow');
		return false;
	});

	// $('.section-button a').magnificPopup({
	// 	type: 'inline',
	// 	mainClass: 'mfp-forms',
	// });










});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})