/**
 * jQuery Savant Plugin
 * A jQuery plugin that generates multi-dimensional data visualization widgets in SVG.
 * Whitehead
 * 2013
 */
(function($, jQuery, window, document, undefined) {
	var PLUGIN_NAME = "jQuerySavant";
	var _instances = {};
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
			console.info("Init Savant:%o", _this);
		},

		//Sets the relative X axis value
		setXValue: function() {
			var _this = this;
		},
		
		savantWidget:	function(id) {
		    return new SavantWidget(id);
		}
	};

	// The actual plugin
	$.fn.savant = function(options) {
		if(this.length) {
			this.each(function() {
				var rev = new Savant(this, options);
				rev.init();
				$(this).data('savant', rev);
				console.info("Savant Init:%o", rev);
			});
		}
		return this;
	};
	
	function SavantWidget(id) {
		this._id = id;
		this._path = '';
		console.info("New SavantWidget:%s", this._id);
	}
	
	$.extend(SavantWidget.prototype, {
	  init:  function() {
	    console.info("Creating SavantWidget:%o", this);
	  },
	  reset: function() {
		  this._path = '';
		  return this;
	  }
	});
	
	
})(jQuery);