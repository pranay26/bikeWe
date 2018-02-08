(function(b) {
    function a(c) {
        this.init(c)
    }
    a.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "#ccc",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: false,
        lineCap: "butt",
        constructor: a,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function(c) {
            b.extend(this, c);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw()
        },
        initWidget: function() {
            var c = this.canvas = this.canvas || b("<canvas>").prependTo(this.el)[0];
            c.width = this.size;
            c.height = this.size;
            this.ctx = c.getContext("2d")
        },
        initFill: function() {
            var m = this,
            l = this.fill,
            o = this.ctx,
            p = this.size;
            if (!l) {
                throw Error("The fill is not specified!")
            }
            if (l.color) {
                this.arcFill = l.color
            }
            if (l.gradient) {
                var c = l.gradient;
                if (c.length == 1) {
                    this.arcFill = c[0]
                } else {
                    if (c.length > 1) {
                        var k = l.gradientAngle || 0,
                        j = l.gradientDirection || [p / 2 * (1 - Math.cos(k)), p / 2 * (1 + Math.sin(k)), p / 2 * (1 + Math.cos(k)), p / 2 * (1 - Math.sin(k))];
                        var n = o.createLinearGradient.apply(o, j);
                        for (var f = 0; f < c.length; f++) {
                            var d = c[f],
                            g = f / (c.length - 1);
                            if (b.isArray(d)) {
                                g = d[1];
                                d = d[0]
                            }
                            n.addColorStop(g, d)
                        }
                        this.arcFill = n
                    }
                }
            }
            if (l.image) {
                var e;
                if (l.image instanceof Image) {
                    e = l.image
                } else {
                    e = new Image();
                    e.src = l.image
                }
                if (e.complete) {
                    h()
                } else {
                    e.onload = h
                }
            }

            function h() {
                var i = b("<canvas>")[0];
                i.width = m.size;
                i.height = m.size;
                i.getContext("2d").drawImage(e, 0, 0, p, p);
                m.arcFill = m.ctx.createPattern(i, "no-repeat");
                m.drawFrame(m.lastFrameValue)
            }
        },
        draw: function() {
            if (this.animation) {
                this.drawAnimated(this.value)
            } else {
                this.drawFrame(this.value)
            }
        },
        drawFrame: function(c) {
            this.lastFrameValue = c;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(c);
            this.drawArc(c)
        },
        drawArc: function(e) {
            var d = this.ctx,
            g = this.radius,
            f = this.getThickness(),
            c = this.startAngle;
            d.save();
            d.beginPath();
            if (!this.reverse) {
                d.arc(g, g, g - f / 2, c, c + Math.PI * 2 * e)
            } else {
                d.arc(g, g, g - f / 2, c - Math.PI * 2 * e, c)
            }
            d.lineWidth = f;
            d.lineCap = this.lineCap;
            d.strokeStyle = this.arcFill;
            d.stroke();
            d.restore()
        },
        drawEmptyArc: function(e) {
            var d = this.ctx,
            g = this.radius,
            f = this.getThickness(),
            c = this.startAngle;
            if (e < 1) {
                d.save();
                d.beginPath();
                if (e <= 0) {
                    d.arc(g, g, g - f / 2, 0, Math.PI * 2)
                } else {
                    if (!this.reverse) {
                        d.arc(g, g, g - f / 2, c + Math.PI * 2 * e, c)
                    } else {
                        d.arc(g, g, g - f / 2, c, c - Math.PI * 2 * e)
                    }
                }
                d.lineWidth = f;
                d.strokeStyle = this.emptyFill;
                d.stroke();
                d.restore()
            }
        },
        drawAnimated: function(d) {
            var c = this,
            f = this.el,
            e = b(this.canvas);
            e.stop(true, false);
            f.trigger("circle-animation-start");
            e.css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, b.extend({}, this.animation, {
                step: function(h) {
                    var g = c.animationStartValue * (1 - h) + d * h;
                    c.drawFrame(g);
                    f.trigger("circle-animation-progress", [h, g])
                }
            })).promise().always(function() {
                f.trigger("circle-animation-end")
            })
        },
        getThickness: function() {
            return b.isNumeric(this.thickness) ? this.thickness : this.size / 11
        },
        getValue: function() {
            return this.value
        },
        setValue: function(c) {
            if (this.animation) {
                this.animationStartValue = this.lastFrameValue
            }
            this.value = c;
            this.draw()
        }
    };
    b.circleProgress = {
        defaults: a.prototype
    };
    b.easing.circleProgressEasing = function(f, g, e, i, h) {
        if ((g /= h / 2) < 1) {
            return i / 2 * g * g * g + e
        }
        return i / 2 * ((g -= 2) * g * g + 2) + e
    };
    b.fn.circleProgress = function(e, d) {
        var c = "circle-progress",
        f = this.data(c);
        if (e == "widget") {
            if (!f) {
                throw Error('Calling "widget" method on not initialized instance is forbidden')
            }
            return f.canvas
        }
        if (e == "value") {
            if (!f) {
                throw Error('Calling "value" method on not initialized instance is forbidden')
            }
            if (typeof d == "undefined") {
                return f.getValue()
            } else {
                var g = arguments[1];
                return this.each(function() {
                    b(this).data(c).setValue(g)
                })
            }
        }
        return this.each(function() {
            var j = b(this),
            h = j.data(c),
            i = b.isPlainObject(e) ? e : {};
            if (h) {
                h.init(i)
            } else {
                var k = b.extend({}, j.data());
                if (typeof k.fill == "string") {
                    k.fill = JSON.parse(k.fill)
                }
                if (typeof k.animation == "string") {
                    k.animation = JSON.parse(k.animation)
                }
                i = b.extend(k, i);
                i.el = j;
                h = new a(i);
                j.data(c, h)
            }
        })
    }
})(jQuery);