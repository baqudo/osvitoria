;(function() {

	var $wrap = $('.js-good-map-wrap'),
		$map = $('.js-good-map'),
		flag = false;
	console.log('ssf')

	function init() {
		if (window.innerWidth < 768) {
			if (!flag) {
				var scale = 1,
					gestureArea = document.getElementById('gesture-area'),
					scaleElement = document.getElementById('scale-element'),
					resetTimeout;
				
				
				interact(gestureArea)
				  .gesturable({
					onstart: function (event) {
					  clearTimeout(resetTimeout);
					  scaleElement.classList.remove('reset');
					},
					onmove: function (event) {
					  scale = scale * (1 + event.ds);

					  scaleElement.style.webkitTransform =
					  scaleElement.style.transform =
						'scale(' + scale + ')';

					  dragMoveListener(event);
					}
				  });

				function reset () {
				  scale = 1;
				  scaleElement.style.webkitTransform =
				  scaleElement.style.transform =
					'scale(1)';
				}
				
				function dragMoveListener (event) {
					var target = event.target,
						// keep the dragged position in the data-x/data-y attributes
						x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
						y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

					// translate the element
					target.style.webkitTransform =
					target.style.transform =
					  'translate(' + x + 'px, ' + y + 'px)';

					// update the posiion attributes
					target.setAttribute('data-x', x);
					target.setAttribute('data-y', y);
				}
			}
		}
	}

}());
