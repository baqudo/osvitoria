function wowScroll() {
	if ($('.wow').length) {
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       100,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			  // the callback is fired every time an animation is started
			  // the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		  }
		);
		wow.init();
	}
}

function mainScreenSlider() {
		var $slider = $('.js-main-scr-slider');

		if ($slider.length) {
			var delay = +$slider.data('delay') * 1000;
			$slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				useCSS: true,
				useTransform: true,
				waitForAnimate: true,
				arrows: false,
				dots: true,
				cssEase: 'cubic-bezier(.86,.29,.24,.9)',
				speed: 700,
				autoplaySpeed: delay,
				draggable: false,
				autoplay: true,
				pauseOnHover: false
			})

		}

	}


function preloader() {
	if ($('#preloader').length) {
		$('body').removeClass('overflow-hidden').css('padding', '');
		$('#preloader').remove();
		$('.js-slide-down-anim').addClass('run');
		// $('#preloader').fadeOut('slow', function() {
		// 	$('body').removeClass('overflow-hidden').css('padding', '');
		// 	// $('.js-slide-down-anim').addClass('run');
		// });
	}
	
}

$(window).on('load', function() {
	preloader();
	// mainScreenSlider()
	setTimeout(mainScreenSlider(), 200);
	// wowScroll()
	setTimeout(wowScroll(), 200);
});

