;(function() {
	
	function slider() {
		var $slider = $('.js-team-slider');
		
		if ($slider.length) {
			$slider.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				infinite: false,
				appendArrows: $('.js-team-slider-controls'),
				appendDots: $('.js-team-slider-controls'),
				nextArrow: '<span class="slick-next"><svg class="icon-arrow"><use xlink:href="#arrow"></use></svg></span>',
				prevArrow: '<span class="slick-prev"><svg class="icon-arrow-left"><use xlink:href="#arrow"></use></svg></span>',
				responsive: [
					
					{
						breakpoint: 1023,
						settings: {
							slidesToShow: 1,
							variableWidth: true,
							infinite: true,
							swipeToSlide: true,
						}
					}
				]
			})
		}
	}
	
	slider();
	
	function photoHover() {
		var $img = $('[data-src-mod]');
		
		if ($img.length) {
			$img.each(function() {
				var self = $(this),
					srcMod = self.data('src-mod'),
					src = self.attr('src');
				self.on('mouseenter', function() {
					self.attr('src', srcMod);
				});
				self.on('mouseleave', function() {
					self.attr('src', src);
				})
			});
		}
	}
	
	function touchChange() {
		var $box = $('.js-team-box'),
			flag = false;
		
		function init() {
			if (window.innerWidth < 1024) {
				if (!flag) {
					$box.on('touchstart', function(e) {
						e.preventDefault();
						$(this).addClass('touched');
					});
					$box.on('touchend', function(e) {
						e.preventDefault();
						$(this).removeClass('touched');
					});
					flag = true;
				}
			} else {
				if (flag) {
					$box.off('touchstart touchend');
					flag = false;
				}
			}
		}
		
		if ($box.length) {
			init();
			$(window).on('resize', init);
		}
	}
	touchChange();
}());