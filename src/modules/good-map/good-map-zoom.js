(function () {
	var $wrap = $('.js-zoom-wrap'),
		$elem = $('.js-zoom-element'),
		flag = false;
	$elem.panzoom({
		// $zoomIn: $section.find(".zoom-in"),
		// $zoomOut: $section.find(".zoom-out"),
		// $zoomRange: $section.find(".zoom-range"),
		// $reset: $section.find(".reset"),
		panOnlyWhenZoomed: true,
		minScale: 1
	});
      
	$elem.on('panzoomstart', function (e, panzoom, event, touches) {
		console.log(e)
		console.log(panzoom)
		console.log(event)
		console.log(touches)
	});
})();



// ;(function() {
// 		// Log events flag
// 	var logEvents = true;

// 	// Touch Point cache
// 	var tpCache = new Array();

// 	var $wrap = $('.js-zoom-wrap'),
// 		$elem = $('.js-zoom-element'),
// 		flag = false;

// 	set_handlers($elem)



// 	function handle_pinch_zoom(ev) {

// 		if (ev.targetTouches.length == 2 && ev.changedTouches.length == 2) {
// 			// Check if the two target touches are the same ones that started
// 			// the 2-touch
// 			var point1=-1, point2=-1;
// 			for (var i=0; i < tpCache.length; i++) {
// 				if (tpCache[i].identifier == ev.targetTouches[0].identifier) point1 = i;
// 				if (tpCache[i].identifier == ev.targetTouches[1].identifier) point2 = i;

// 			}
// 			if (point1 >=0 && point2 >= 0) {
// 				// Calculate the difference between the start and move coordinates
// 				var diff1 = Math.abs(tpCache[point1].clientX - ev.targetTouches[0].clientX);
// 				var diff2 = Math.abs(tpCache[point2].clientX - ev.targetTouches[1].clientX);

// 				// This threshold is device dependent as well as application specific
// 				var PINCH_THRESHHOLD = ev.target.clientWidth / 10;

// 				// var txt = diff1 + " : " + diff2 + " / " + PINCH_THRESHHOLD;
// 				var txt = tpCache[point1].clientX + ' | ' + ev.targetTouches[0].clientX;
// 				var o = document.getElementById('zoom-output');
// 				o.innerHtml = txt;

// 				if (diff1 >= PINCH_THRESHHOLD && diff2 >= PINCH_THRESHHOLD) {
// 					ev.target.style.backgroundColor = "green";
// 				}
// 			}	else {
// 				o.innerHtml = 'empty tpCache';
// 				// empty tpCache
// 				tpCache = new Array();
// 			}
// 		}
// 	}


// 	function start_handler(ev) {
// 		console.log(ev)
// 		ev.target.style.width = ev.target.offsetWidth + 'px';
// 		ev.target.style.height = ev.target.offsetHeight + 'px';
// 		// If the user makes simultaneious touches, the browser will fire a 
// 		// separate touchstart event for each touch point. Thus if there are 
// 		// three simultaneous touches, the first touchstart event will have 
// 		// targetTouches length of one, the second event will have a length 
// 		// of two, and so on.
// 		ev.preventDefault();
// 		// Cache the touch points for later processing of 2-touch pinch/zoom
// 		if (ev.targetTouches.length == 2) {
// 			for (var i=0; i < ev.targetTouches.length; i++) {
// 				tpCache.push(ev.targetTouches[i]);
// 			}
// 		}
// 		if (logEvents) log("touchStart", ev, true);
// 		update_background(ev);
// 	}
// 	function move_handler(ev) {
// 		// Note: if the user makes more than one "simultaneous" touches, most browsers 
// 		// fire at least one touchmove event and some will fire several touchmoves.
// 		// Consequently, an application might want to "ignore" some touchmoves.
// 		//
// 		// This function sets the target element's border to "dashed" to visually
// 		// indicate the target received a move event.
// 		//
// 		ev.preventDefault();
// 		if (logEvents) log("touchMove", ev, false);
// 		// To avoid too much color flashing many touchmove events are started,
// 		// don't update the background if two touch points are active
// 		if (!(ev.touches.length == 2 && ev.targetTouches.length == 2))
// 			update_background(ev);

// 		// Set the target element's border to dashed to give a clear visual
// 		// indication the element received a move event.
// 		ev.target.style.border = "dashed";
// 		console.log(ev)
// 		// Check this event for 2-touch Move/Pinch/Zoom gesture
// 		handle_pinch_zoom(ev);
// 	}
// 	function end_handler(ev) {
// 	  ev.preventDefault();
// 	  if (logEvents) log(ev.type, ev, false);
// 	  if (ev.targetTouches.length == 0) {
// 		// Restore background and border to original values
// 		ev.target.style.backgroundColor = "transparent";
// 		ev.target.style.border = "1px solid black";
// 	  }
// 	}

// 	function update_background(ev) {
// 		// Change background color based on the number simultaneous touches
// 		// in the event's targetTouches list:
// 		//   yellow - one tap (or hold)
// 		//   pink - two taps
// 		//   lightblue - more than two taps
// 		switch (ev.targetTouches.length) {
// 			case 1:
// 				// Single tap`
// 				ev.target.style.backgroundColor = "yellow";
// 				break;
// 			case 2:
// 				// Two simultaneous touches
// 				ev.target.style.backgroundColor = "pink";
// 				break;
// 			default:
// 				// More than two simultaneous touches
// 				ev.target.style.backgroundColor = "purple";
// 		}
// 	}
// 	function set_handlers(name) {
// 		// Install event handlers for the given element
// 		// var el=document.getElementById(name);
// 		var el=name[0];
// 		console.log(el)
// 		el.ontouchstart = start_handler;
// 		el.ontouchmove = move_handler;
// 		// Use same handler for touchcancel and touchend
// 		el.ontouchcancel = end_handler;
// 		el.ontouchend = end_handler;
// 	}

// 	function enableLog(ev) {
// 	  logEvents = logEvents ? false : true;
// 	}

// 	function log(name, ev, printTargetIds) {
// 		var o = document.getElementById('zoom-output');
// 		var s = name + ": touches = " + ev.touches.length + 
// 					" ; targetTouches = " + ev.targetTouches.length +
// 					" ; changedTouches = " + ev.changedTouches.length;
// 		o.innerHTML = s;

// 		if (printTargetIds) {
// 			s = "";
// 			for (var i=0; i < ev.targetTouches.length; i++) {
// 				s += "... id = " + ev.targetTouches[i].identifier + " ";
// 			}
// 			o.innerHTML = s;
// 		}
// 	} 

// 	function clearLog(event) {
// 		var o = document.getElementById('zoom-output');
// 		o.innerHTML = "";
// 	}

// }());