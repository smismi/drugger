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
					min: null,
					max: null,
					step: null,
					values: [],
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

				this._ticks = $("<div/>").addClass("ticks");







				for (i = 0; i < this.options.values.length; i++) {

				    _(i);

					this._tick = $("<div/>").addClass("tick").css({width: 100 / this.options.values.length + "%"});

					this._ticks.append(this._tick.html(this.options.values[i]));
				}

				this._slider.addClass("slider").append(this._handler).append(this._ticks);

				this.prepare().discretize().mouseon();

			},
			prepare: function () {

				_this = this;
				this.pos.lockd = true;
				this.slider = {};
				this.handler = {};

				return this;
			},
			discretize: function () {

				if (this.options.step == null) return this;


				this._steps = [];
				this._values = [];


				this.options.step = this.options.step - 1;





				return this;
			},
			reCalcSize: function () {


				this.pos.lockd = false;

				this.pos.x0 = event.pageX - $(this._handler).offset().left;
				this.pos.y0 = event.pageY - $(this._handler).offset().top;

				this.slider.width = $(this._slider).width();
				this.slider.height = $(this._slider).height();

				this.handler.width = $(this._handler).width();
				this.handler.height = $(this._handler).height();

				this.pos.xx = this.slider.width - $(this._handler).width();
				this.pos.yy = this.slider.height - $(this._handler).height();

				_h = (this.options.direction === "horizontal") ? this.slider.width : this.slider.height;

				if (this.options.step) {

					_step_px = _h / this.options.step;

					for (i = 0; i <= this.options.step; i++) {

						this._steps[i] = _step_px * i;
						this._values[i] = this.options.values[i];

					}

				}
			},
			mouseon: function () {


				this._handler.on({"mousedown": function (e) {


					//получить коордитаты handles и мыши
					_this.reCalcSize();

					$(document).off("mousemove").on("mousemove", function () {

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

					$(document).off("mouseup").on("mouseup", function () {


						_this.pos.lockd = true;

						_("mouseup");

					});


				},

					"mouseleave": function () {

					},

					"mouseenter": function () {


					}
				});


				function drag(x, y) {
					this.drag(x, y);
				}


				return this;
			},
			drag: function () {

				_this = this;

				_p = (this.options.direction === "horizontal") ? x : y;

				if (this.options.step) {
					step = this.discret(_p, _step_px, this._steps);
					y = (this.options.direction === "vertical") ? (_step_px ) * step : 0;
					x = (this.options.direction === "horizontal") ? (_step_px ) * step : 0;
				}


				this.setPosition(x, y)


			},

			discret: function (value, threshold, array) {


				for (i = 0; i <= _this.options.step; i++) {

					if (value < array[i] + threshold / 2) return i;

				}


			},

			setPosition: function (x, y) {


				$(this._handler).css({
					top: y,
					left: x
				});


			},


			setToStep: function (step) {

				this.reCalcSize();

				step = (step > this.options.step) ? this.options.step + 1 : step;

				y = (this.options.direction === "vertical") ? (_step_px - (this.handler.width / this.options.step)) * step : 0;
				x = (this.options.direction === "horizontal") ? (_step_px - (this.handler.height / this.options.step)) * step : 0;

				this.setPosition(x, y);
			},
			//TODO:
			setToValue: function (value) {

				this.reCalcSize();

				step = discret(value, _step_px, this._steps);

				y = (this.options.direction === "vertical") ? (_step_px - (this.handler.width / this.options.step)) * step : 0;
				x = (this.options.direction === "horizontal") ? (_step_px - (this.handler.height / this.options.step)) * step : 0;

				this.setPosition(x, y);

				function discret(value, threshold, array) {

					for (i = 0; i <= _this.options.step; i++) {

						if (value < array[i] + threshold / 2) return i;

					}

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

		return drugger;

	}


})(jQuery);


function _(msg) {
	console.log(msg);
}