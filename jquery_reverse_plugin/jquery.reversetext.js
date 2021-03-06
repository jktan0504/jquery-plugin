/*!
 * jQuery Reverse Plugin v1.0.0
 * 
 *
 * Copyright 2017 JK TAN
 * Released under the MIT license
 */
/**
 * Usage:
 *
 * From JavaScript, use:
 *     $(<select>).ReverseText({minlength: <M>, maxlength: <N>});
 *     where:
 *       <select> is the DOM node selector, e.g. "p"
 *       <M> is the minimum length of string to reverse (optional)
 *       <N> is the maximum length of string to reverse (optional)
 */
(function($) {

	// jQuery plugin definition
	$.fn.reverseText = function(params) {

		// merge default and user parameters
		params = $.extend( {minlength: 0, maxlength: 99999}, params);

		// traverse all nodes
		this.each(function() {

			// express a single node as a jQuery object
			var $t = $(this);

			// find text
			var origText = $t.text(), newText = '';

			// text length within defined limits?
			if (origText.length >= params.minlength &&  origText.length <= params.maxlength) {

				// reverse text
				for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);
				$t.text(newText);

			}

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);