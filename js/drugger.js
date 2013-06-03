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


        var Drugger = function (obj, options) {
            this.init(obj, options);
        };

        Drugger.prototype = {
            "constructor": Drugger,
            init: function (obj, options) {

                var defaults = {
                    a: null,
                    b: null
                }


                var isTouch = ('ontouchstart' in window);

                var _this = {};


                _this.el = obj;
                _this.D = false;
                _this.pos = {}


                options = $.extend(defaults, options)


                this.draw(_this);


            },
            draw: function (_this) {
                //draw


                _this._handler = $("<div/>").addClass("handler");

                _this._slider = $(_this.el);

                _this._slider.addClass("slider").append(_this._handler);


                this.event(_this);
            },
            event: function (_this) {
//                var _e = {};
//
//                _e.eventDown 		= (isTouch) ? "touchstart" : "mousedown";
//                _e.eventClick 		= (isTouch) ? "touchend" : "click";
//                _e.eventUp 			= (isTouch) ? "touchend" : "mouseup";
//                _e.eventMove 		= (isTouch) ? "touchmove" : "mousemove";
//                _e.eventMove 		= (isTouch) ? "touchmove" : "mousemove";
//

                pos = {};
//                pos.lockd = true;

                _this._handler.on({"mousedown": function (e) {


                    //получить коордитаты handles и мыши


                    //abs el
//                    pos.lockd = false;
//                    pos.x = $(this).offset().left + $(this).position().left;
//                    pos.y = $(this).offset().top + $(this).position().top;
//
//
//
//                                        _("mousedown" + $(this).offset().left + " " + $(this).position().left );
//


                    //  handler css pos:abs x:0 y:0   .offset()

//                    _("mousedown" + $(this).offset().left + " " + $(this).offset().top );
//                    _("mousedown" + event.pageX + " " + event.pageY);




//                    _("mousedown" + $(this).offset().left + " " + $(this).offset().top );
//                    _("mousedown" + event.pageX + " " + event.pageY );
//                    _("mousedown" + event.clientX + " " + event.clientY );

                     var _x = event.pageX - $(_this._handler).offset().left;
                    var _y = event.pageY - $(_this._handler).offset().top

                    $(document).on("mousemove", function(){

//                        if (pos.lockd) return;
                        //новые координаты мыши

                        //handler css
                        _("mousedown" + (event.pageX - $(_this._handler).offset().left) + " " + (event.pageY - $(_this._handler).offset().top));



                        //css handler

                        $(_this._handler).css({
                            top: event.pageY - $(_this._slider).offset().top - _y,
                            left: event.pageX  - $(_this._slider).offset().left - _x
                        });
//                        _(pos.x);
//                        _(pos.y);

                        _("mousemove");
                    })




                    },
                    "mouseup": function () {

                        pos.lockd = true;

                        _("mouseup");
                    },
                    "mouseleave": function () {



//                        pos.lockd = true;

                        //hightlight handler

                        _("mouseleave");
                    },
                    "mouseenter": function () {






                        //unhightlight handler

                        _("mouseenter");
                    }});
//				debugger;

            },
            reinit: function () {


                debugger;

            },
            destroy: function () {


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