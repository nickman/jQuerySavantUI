/**
 * jQuery Savant Plugin
 * A jQuery plugin that generates multi-dimensional data visualization widgets in SVG.
 * Whitehead
 * 2013
 */
(function($){

	
	function Savant(el, options) {

		//Defaults:
		this.defaults = {
			cwidth: 300,
			cheight: 100,
			ctitle: null,
			resetAxes: function(){}
		};

		//Extending options:
		this.opts = $.extend({}, this.defaults, options);

		//Privates:
		this.$el = $(el);
		this.initialSize = 0;
		this.resetAxis = function(){};
	}

	// Separate functionality from object creation
	Savant.prototype = {

		init: function() {
			var _this = this;
		},

		//Sets the relative X axis value
		setXValue: function() {
			var _this = this;
		}
	};

	// The actual plugin
	$.fn.savant = function(options) {
		if(this.length) {
			this.each(function() {
				var rev = new Savant(this, options);
				rev.init();
				$(this).data('savant', rev);
			});
		}
	};
})(jQuery);