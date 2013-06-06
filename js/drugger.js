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

                this.el = obj;

                var isTouch = ('ontouchstart' in window);


                this.options = $.extend(defaults, options)


                this.draw();


            },
            draw: function () {
                //draw
                _this = this;

                this.pos = {};

                this._handler = $("<div/>").addClass("handler");


                this._slider = $(this.el);

                this._slider.addClass("slider").append(_this._handler);

                this.prepare().mouseon();

            },
            prepare: function () {

                _this = this;
                this.pos.lockd = true;


                this._steps = [];

                this.slider = {};
                this.handler = {};


                return this;
            },

            mouseon: function () {

                _this = this;


                this._handler.on({"mousedown": function (e) {


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


                    _h = (_this.options.direction === "horizontal") ? _this.slider.width : _this.slider.height;

                    _step_px = _h / _this.options.step;

                    for (i = 0; i <= _this.options.step; i++) {

                        _this._steps[i] = _step_px * i;

                    }

//                    debugger;
                    $(document).on("mousemove", function () {

                        if (_this.pos.lockd) return;
                        //новые координаты мыши

                        //handler css

                        y = (_this.options.direction === "vertical") ? event.pageY - $(_this._slider).offset().top - _this.pos.y0 : 0;
                        x = (_this.options.direction === "horizontal") ? event.pageX - $(_this._slider).offset().left - _this.pos.x0 : 0;

                        if (y < 0) y = 0;
                        if (x < 0) x = 0;

                        if (y > _this.pos.yy) y = _this.pos.yy;
                        if (x > _this.pos.xx) x = _this.pos.xx;

                        drag.call(_this, x, y);
                    });

                    $(document).on("mouseup", function () {


                        _this.pos.lockd = true;

                        _("mouseup");

                    });


                },

                    "mouseleave": function () {

                    },

                    "mouseenter": function () {


                    }
                });


                function drag (x, y) {
                    this.drag(x, y);
                }


                return this;
            },
            drag: function() {
                _this = this

                _p = (_this.options.direction === "horizontal") ? x : y;

                step = discret(_p, _step_px, this._steps);

                y = (_this.options.direction === "vertical") ? (_step_px - (_this.handler.width / _this.options.step)) * step : 0;
                x = (_this.options.direction === "horizontal") ? (_step_px - (_this.handler.height / _this.options.step)) * step : 0;


                this.setPosition(x, y)


                function discret(value, threshold, array) {

                    for (i = 0; i <= _this.options.step; i++) {

                        if (value < array[i] + threshold / 2) return i;

                    }

                };
            },


            setPosition: function(x, y) {


                $(this._handler).css({
                    top: y,
                    left: x
                });


            },




                                    event: function () {

                                        var setToStep = function (step) {

                                            step = (step > _this.options.step) ? _this.options.step : step;

                                            y = (_this.options.direction === "vertical") ? (_step_px - (_this.handler.width / _this.options.step)) * step : 0;
                                            x = (_this.options.direction === "horizontal") ? (_step_px - (_this.handler.height / _this.options.step)) * step : 0;

                                            setPosition(x, y);
                                        };

                                        var setToValue = function (value) {


                                            setPosition(x, y);
                                        };

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