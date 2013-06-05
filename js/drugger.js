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
                    b: null,
                    step: null,
                    direction: 'horizontal'
                }


                var isTouch = ('ontouchstart' in window);

                var _this = {};


                _this.el = obj;
                _this.D = false;
                _this.pos = {}


                _this.options = $.extend(defaults, options)


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
                pos.lockd = true;


                _this._handler.on({"mousedown": function (e) {


                    //получить коордитаты handles и мыши


                    //abs el
                    pos.lockd = false;

                    var x0 = event.pageX - $(_this._handler).offset().left;
                    var y0 = event.pageY - $(_this._handler).offset().top;


                    var xx = $(_this._slider).width() - $(_this._handler).width();
                    var yy = $(_this._slider).height() - $(_this._handler).height();

                    _(xx);
                    _(yy);

                    $(document).on("mousemove", function(){

                        if (pos.lockd) return;
                        //новые координаты мыши
                        pos.mowd = true;

                        //handler css

                        _y = (_this.options.direction === "horizontal") ? event.pageY - $(_this._slider).offset().top - y0 : 0;
                        _x = (_this.options.direction === "vertical") ? event.pageX  - $(_this._slider).offset().left - x0 : 0;

                        if (_y < 0) _y = 0;
                        if (_x < 0) _x = 0;

                        if (_y > yy) _y = yy;
                        if (_x > xx) _x = xx;




                        $(_this._handler).css({
                            top: _y,
                            left: _x
                        });



                        _("mousemove");
                    });

                    $(document).on("mouseup", function(){


                        pos.lockd = true;

                        _("mouseup");
                    });




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