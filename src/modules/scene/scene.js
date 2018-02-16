console.log($(document).height())

var $scene;
var sceneParallax = (function() {
	var sceneOptions = {
		scalarX: 3,
		scalarY: 3,
		frictionX: 0.4,
		frictionY: 0.4,
		originX: 0.3,
		originY: 0.3
	};
	var sceneActions = {
			'init': function() {
				if($('.js-scene-container').length) {
					$scene = $('.js-scene').parallax(sceneOptions);
					if(window.innerWidth<1024) {
						setTimeout(function() {
						  $scene.parallax('disable');
						}, 1000);
						$('.js-scene').addClass('tablet');
					}
				}
			},
			'fullInit': function() {
				this.init();
			},
			'reInit': function() {
				this.init();
			},
			'resize': function() {
				$(window).on('resize', function() {
					if(window.innerWidth>=1024 && $('.js-scene').hasClass('tablet')) {
						$scene.parallax('enable');
						$('.js-scene').removeClass('tablet');
					} else if(window.innerWidth<1024 && !$('.js-scene').hasClass('tablet')) {
						$scene.parallax('disable');
						$('.js-scene').addClass('tablet');
					}
				})
			}
		}

	return {
		init: function() {
			sceneActions.fullInit();
			sceneActions.resize();
		},
		reInit: function() {
			sceneActions.reInit();
		}
	}

}($));
	

sceneParallax.init();