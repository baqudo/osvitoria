;(function($) { 
	
	function goTop() {
		if ($('.js-go-top').length) {
			
			$(window).on('scroll', function() {
				if ($(window).scrollTop() > $(window).height()) {
					$('.js-go-top').addClass('visible');
				} else {
					$('.js-go-top').removeClass('visible');
				}
			});
			
			$('.js-go-top').on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: 0
				}, 900)
			})
		}
	}
	
	goTop();
	
	function scrollTo() {
		var $link = $('.js-scroll-to');
		
		if ($link.length) {
			$link.on('click', function(e) {
				e.preventDefault();
				
				var href = $(this).attr('href');
				
				$('html, body').animate({
					scrollTop: $(href).offset().top
				}, 900)
			})
		}
	}
	
	scrollTo();
	
	function simpleSlider() {
		var $slider = $('.js-slider-pics');
		
		if ($slider.length) {
			$slider.slick({
				slidesToScroll: 1,
				slidesToShow: 1,
				dots: true,
				arrows: true,
				variableHeight: true,
				nextArrow: '<span class="slick-next"><svg class="icon-arrow"><use xlink:href="#arrow"></use></svg></span>',
				prevArrow: '<span class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="#arrow"></use></svg></span>',
				autoplay: true,
				pauseOnHover: false
			})
		}
	}
	
	simpleSlider();
	
}($));
	
