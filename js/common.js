$(function() {

	// Custom JS
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.top-menu').toggleClass('open');
	});


	$('.s5').waypoint(function() {
		$('.s5 .s5-item').each(function(index) {
			var ths = $(this);
			setTimeOut(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "svg" + index
				});
				ths.removeClass("").addClass("");
			}, 200*index);
		})
	});





















});
