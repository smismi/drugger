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
					value: null,
					values: [],
					direction: 'horizontal',
					onStart: null,
					onDragStart: null,
					onDragStop: null,
					onChange: null
				}
				this.op

				this.el = obj;

				var isTouch = ('ontouchstart' in window);


				this.options = $.extend(defaults, options)

				if (this.options.onStart instanceof Function) this.options.onStart();

				this.prepare().bindEvents();

			},
			prepare: function () {

				this.slider = {};
				this.handler = {};


				this.draw();

				this.calcSize();


				this._steps = [];
				this._values = [];

				this.discretize();

				this.drawTicks();

				this.coord = {};


				return this;

			},
			calcSize: function () {


				this.slider.width = $(this._slider).width();
				this.slider.height = $(this._slider).height();

				this.handler.width = $(this._handler).width();
				this.handler.height = $(this._handler).height();

			},
			discretize: function () {


				_h = (this.options.direction === "horizontal") ? this.slider.width : this.slider.height;

				step_px = _h / this.options.values.length - 1;

				for (i = 0; i < this.options.values.length; i++) {

					this._steps[i] = step_px * i;
					this._values[i] = this.options.values[i];

				}

			},
			draw: function () {

				this._slider = $(this.el);

				this._handler = $("<div/>").addClass("handler");

				this._slider.addClass("slider").append(this._handler);


			},
			drawTicks: function () {
				_this = this;
				this._ticks = $("<div/>").addClass("ticks");

				for (i = 0; i < this.options.values.length; i++) {

					this._tick = $("<div/>").addClass("tick");

					this._ticks.append(this._tick.html(this.options.values[i]).css({
						top: (this.options.direction === "horizontal") ? this.slider.height : _this._steps[i],
						left: (this.options.direction === "horizontal") ? _this._steps[i] : this.slider.width
					}));
				}

				this._slider.append(this._ticks);


			},
			bindEvents: function () {

				_this = this;

				this._handler.on({"mousedown": function (e) {

					_this.coord.lockd = false;
					_this.updateCoords(e);


					$(document).off("mousemove").on("mousemove", function (event) {


						if (_this.coord.lockd) return;

						//handler css

						y = (_this.options.direction === "vertical") ? event.pageY - $(_this._slider).offset().top - _this.coord.y0 : 0;
						x = (_this.options.direction === "horizontal") ? event.pageX - $(_this._slider).offset().left - _this.coord.x0 : 0;

						if (y < 0) y = 0;
						if (x < 0) x = 0;


						_this.handlerMove(x,y);

					});
					$(document).off("mouseup").on("mouseup", function () {


						_this.coord.lockd = true;

					});

					}

				});
			},
			updateCoords: function(event) {

				this.coord.x0 = event.pageX - $(this._handler).offset().left;
				this.coord.y0 = event.pageY - $(this._handler).offset().top;

				this.coord.xx = this.slider.width - this.handler.width;
				this.coord.yy = this.slider.height - this.handler.height;

			},
			handlerMove: function(x, y) {

				y = (y + this.handler.height > this.slider.height) ? this.slider.height - this.handler.height : y;
				x = (x + this.handler.width > this.slider.width) ? this.slider.width - this.handler.width : x;

 				_p = (this.options.direction === "horizontal") ? x : y;

				step = this.getStep(_p) || x;

				if (step != this.value) {

					this.value = step;

					this.valueChange();

				}



				$(this._handler).css({
					top: y,
					left: x
				});

			},
			getStep: function(_p) {

				for (i = 0; i <= this._steps.length; i++) {

					if (_p < this._steps[i]) return i;

				}

			},
			discret: function(_p) {


			},
			valueChange: function() {

				_(this.value);

			}
		}

		var drugger = new Drugger(this, options);

		return drugger;

	}


})(jQuery);


function _(msg) {
	console.log(msg);
}