
;(function($) {
	/*
     * 循环滚动插件
     * 调用 $(dom).marquee({})
     * 参数  方向 direction： 字符型 说明：left | right | up
			速度 speed：数值型 说明：滚动速度
			宽度 width：数值型 说明：marquee-container的宽度
     */    
    $.fn.marquee = function (options) {
        return this.each(function () {
            var $self = $(this);
            var $container = $self.find(".marquee-container");
            var $list = $self.find(".marquee-list");
            var defaults = $.extend({
                direction: 'left',
                speed: 50,
                width: 10000
            }, {
                direction: $self.attr("data-direction"),
                speed: $self.attr("data-speed"),
                width: $self.attr("data-width")
            }, options);

            //向右滚动使用定位方式实现，其他滚动使用滚动条方式实现
            switch (defaults.direction.toLowerCase()) {
                case "left":
                    $container.width(defaults.width);
                    $list.css("display", "inline-block");
                    break;
                case "right":
                    $container.width(defaults.width).css({ "float": "right", "position": "relative", "right": 0, "text-align": "right" });
                    $list.css("display", "inline-block");
                    break;
                case "up":
                    break;
            }

            $list.clone().prependTo($container);

            var marquee = function () {
                switch (defaults.direction.toLowerCase()) {
                    case "left":
                        if ($self.scrollLeft() >= $list.width()) {
                            $self.scrollLeft(0);
                        } else {
                            $self.scrollLeft($self.scrollLeft() + 1);
                        }
                        break;
                    case "right":
                        var right = $container.css("right").replace("px", "");

                        if (Math.abs(right) >= $list.width()) {
                            $container.css({ "right": 0 });
                        } else {
                            $container.css({ "right": right - 1 });
                        }
                        break;
                    case "up":
                        if ($self.get(0).scrollHeight / 2 == $self.get(0).scrollTop) {
                            $self.get(0).scrollTop = 0;
                        } else {
                            $self.get(0).scrollTop++;
                        }
                        break;
                }
            };

            var autoInterval = setInterval(marquee, defaults.speed);
            $container.hover(
                function () { clearInterval(autoInterval); },
                function () { autoInterval = setInterval(marquee, defaults.speed); }
            );
        });
    };
})(jQuery);

