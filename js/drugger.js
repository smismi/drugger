(function ($) {


    //инициализацичя плагина


    $.fn.drugger = function (options) {


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
                _this.pos = {};

                _this.slider = {};
                _this.handler = {};


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


                _this.pos.lockd = true;


                _this._handler.on({"mousedown": function (e) {


                    //получить коордитаты handles и мыши


                    //abs el
                    _this.pos.lockd = false;

                    _this.pos.x0 = event.pageX - $(_this._handler).offset().left;
                    _this.pos.y0 = event.pageY - $(_this._handler).offset().top;

                    _this.slider.width = $(_this._slider).width();
                    _this.slider.height = $(_this._slider).height();

                    _this.handler.width = $(_this._handler).width();
                    _this.handler.height = $(_this._handler).height();

                    _this.pos.xx = _this.slider.width - $(_this._handler).width();
                    _this.pos.yy = _this.slider.height - $(_this._handler).height();


                    $(document).on("mousemove", function(){

                        if (_this.pos.lockd) return;
                        //новые координаты мыши

                        //handler css

                        y = (_this.options.direction === "horizontal") ? event.pageY - $(_this._slider).offset().top - _this.pos.y0 : 0;
                        x = (_this.options.direction === "vertical") ? event.pageX  - $(_this._slider).offset().left - _this.pos.x0 : 0;

                        if (y < 0) y = 0;
                        if (x < 0) x = 0;

                        if (y > _this.pos.yy) y = _this.pos.yy;
                        if (x > _this.pos.xx) x = _this.pos.xx;


                        drag(x,y);
                    });

                    $(document).on("mouseup", function(){


                        _this.pos.lockd = true;

                        _("mouseup");

                    });




                    },

                    "mouseleave": function () {

                    },

                    "mouseenter": function () {


                    }});



                var drag = function(x, y) {


//                    _(_this.options.step);
//                    _(_this.pos.xx);
//                    _(_this.slider.width  / _this.slider.width / _this.options.step);
                    var _step_px = _this.slider.width / _this.options.step;
                    var _steps = [];

                    for (i=0; i<=_this.options.step; i++ ) {

                        _steps[i] = _step_px * i;

                    }


                    step = discret(x, _step_px, _steps);

                    y = (_this.options.direction === "horizontal") ? (_step_px - (_this.handler.width / _this.options.step)) * step : 0;
                    x = (_this.options.direction === "vertical") ? (_step_px - (_this.handler.height / _this.options.step)) * step : 0;


                    setPosition(x, y)

//                    $(_this._handler).css({
//                        top: y,
//                        left: x
//                    });
                };

                var discret = function (value, threshold,  array) {


                    for (i=0; i<=_this.options.step; i++ ) {

                        if (value < array[i] + threshold / 2) return i;

                    }

                };

                var setPosition = function (x, y) {
                    $(_this._handler).css({
                        top: y,
                        left: x
                    });
                }

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