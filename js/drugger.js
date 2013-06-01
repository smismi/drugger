(function ($) {


	//инициализацичя плагина


	$.fn.drugger = function (options) {


//init








//bind

//
//		var drg = function(){
//
//
//			var activate = function()  {
//
//				return()
//			}
//
//			var deactivate = function() {
//
//			}
//
//
//
//
//		}

//		return drg;

//		_handler.on("mousedown", function(event){
//
//
//			_this.D = true;
//
//
//			_this.pos.left = $(this).position().left;
//			_this.pos.top = $(this).position().top;
//
//
//			_("down" + _this.pos.left + " " +  _this.pos.top	);
//			_("down" + event.pageX + " " + event.pageY	);
//
//
//			$(window).on("mousemove", function(e){
//
//
//				_("move");
//				_("down" + e.pageX + " " + e.pageY	);
//
//
//
//
//				return false
//			});
//
//			return false
//		});
//
//
//
//
//		_handler.bind("mouseup", function(e){
//
//
//			_this.D = false;
//
//
//			$(window).off("mousemove");
//			_("up");
//
//			return false
//		});





		var Drugger = function( obj, options ){
			this.init( obj, options );
		};

		Drugger.prototype = {
			"constructor"	:	Drugger,
			init: function (obj, options){

				var defaults = {
					a: null,
					b: null
				}

				var isTouch = ('ontouchstart' in window);

				var _this = {};


				var _e = {};

				_this.D = false;
				_this.pos = {}

				_e.eventDown 		= (isTouch) ? "touchstart" : "mousedown";
				_e.eventClick 		= (isTouch) ? "touchend" : "click";
				_e.eventUp 			= (isTouch) ? "touchend" : "mouseup";
				_e.eventMove 		= (isTouch) ? "touchmove" : "mousemove";
				_e.eventMove 		= (isTouch) ? "touchmove" : "mousemove";



				options = $.extend(defaults, options)

				this.draw();
				debugger;
			},
			draw : function() {
				//draw


//				var _handler = $("<div/>").addClass("handler");
//				var _slider = $(this);
//
//				_slider.addClass("slider").append(_handler);


				debugger;

			},
			event: function() {



				debugger;

			},
			reinit: function() {



				debugger;

			},
			destroy: function() {



				debugger;

			}




		}



		var drugger = new Drugger(this, options);




//event
//
//
//		_slider.on(_e.eventClick , function(e){
//			console.log(e);
//
//		})
//
//
//		_handler.on(_e.eventClick , function(e){
//			console.log(e)
//		})



	}


})(jQuery);





function _(msg) {
	console.log(msg);
}