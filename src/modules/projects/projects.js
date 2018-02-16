;(function() {
	
	var $sliderDscr = $('.js-projects-descr-slider'),
		$sliderPic = $('.js-projects-pic-slider'),
		$controls = $('.js-projects-sliders-controls');
	
	if ($sliderDscr.length && $sliderPic.length) {
		$sliderDscr.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderPic,
			dots: true,
			appendArrows: $controls,
			appendDots: $controls,
			nextArrow: '<span class="slick-next"><svg class="icon-arrow"><use xlink:href="#arrow"></use></svg></span>',
			prevArrow: '<span class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="#arrow"></use></svg></span>',
			fade: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
						dots: false
					}
				}
			]
		});
		$sliderPic.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderDscr,
			dots: false,
			arrows: false,
			draggable: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: true,
						dots: true,
						variableWidth: false,
						nextArrow: '<span class="slick-next"><svg class="icon-arrow"><use xlink:href="#arrow"></use></svg></span>',
						prevArrow: '<span class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="#arrow"></use></svg></span>',
					}
				}
			]
		})
	}
	
}());