;(function() {
	
	var $slider = $('.js-partners-list'),
		flag = false;
	
	function init() {
		if (window.innerWidth < 768) {
			if (!flag) {
				$slider.slick({
					rows: 4,
					slidesPerRow: 1,
					slidesToShow: 2,
					variableWidth: true,
					swipeToSlide: true,
					nextArrow: '<span class="slick-next"><svg class="icon-arrow"><use xlink:href="#arrow"></use></svg></span>',
					prevArrow: '<span class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="#arrow"></use></svg></span>',
					infinite: false,
					dots: true
				});
				flag = true;
			}
		} else {
			if (flag) {
				$slider.slick('unslick');
				flag = false;
			}
		}
	}
	
	init();
	
	$(window).on('resize', init);
	
}());