;(function() {

	function lang() {
		var btn = $('.js-header-lang-open');
		
		if (btn.length) {
			btn.on('click', function(e) {
				e.preventDefault();
				
				$(this).toggleClass('open').siblings('.js-header-lang-drop').toggleClass('open');
			});
			
			$(window).on('click', function(e) {
				var target = $(e.target);
				
				if (!target.closest(btn).length && !target.closest('.js-header-lang-drop').length) {
					btn.removeClass('open').siblings('.js-header-lang-drop').removeClass('open');
				}
			});
		}
	}
	
	lang(); 
	
	function navMov() {
		var link = $('.js-open-nav'),
			flag = false;
		
		function init() {
			if (window.innerWidth < 1366) {
				if (!flag) {
					link.on('click', function() {
						$(this).toggleClass('active');
						$('.js-header').toggleClass('open');
						$('body').toggleClass('overflow-hidden');
					});
					flag = true;
				}
			} else {
				if (flag) {
					link.off('click').removeClass('active');
					$('body').removeClass('overflow-hidden');
					$('.js-header').removeClass('open');
					flag = false;
				}
			}
		}
		
		if (link.length) {
			init();
			$(window).on('resize', init);
		}

	}
	navMov();
	
	function fixHeader() {
		var $header = $('.js-header'),
			lastScrollTop = 0;
		
		if ($header.length) {
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				
				if (st > 0) {

					$header.addClass('fixed');
					

					if (st > lastScrollTop){
						
						$header.removeClass('visible');
						
					} else {
						
						$header.addClass('visible');
						
					}
					lastScrollTop = st;

				} else {
					$header.removeClass('fixed').removeClass('visible');
				}
			});
		}
	}
	
	fixHeader();	
	
}());