window.devicePixelRatio > 1 && (!
function(t) {
    var e = function() {
        var t = document.createElement("canvas"),
        e = t.getContext("2d"),
        n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / n
    } (),
    n = function(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
    },
    i = {
        fillRect: "all",
        clearRect: "all",
        strokeRect: "all",
        moveTo: "all",
        lineTo: "all",
        arc: [0, 1, 2],
        arcTo: "all",
        bezierCurveTo: "all",
        isPointinPath: "all",
        isPointinStroke: "all",
        quadraticCurveTo: "all",
        rect: "all",
        translate: "all",
        createRadialGradient: "all",
        createLinearGradient: "all"
    };
    1 !== e && (n(i,
    function(n, i) {
        t[i] = function(t) {
            return function() {
                var i, a, r = Array.prototype.slice.call(arguments);
                if ("all" === n) r = r.map(function(t) {
                    return t * e
                });
                else if (Array.isArray(n)) for (i = 0, a = n.length; a > i; i++) r[n[i]] *= e;
                return t.apply(this, r)
            }
        } (t[i])
    }), t.stroke = function(t) {
        return function() {
            this.lineWidth *= e,
            t.apply(this, arguments),
            this.lineWidth /= e
        }
    } (t.stroke), t.fillText = function(t) {
        return function() {
            var n = Array.prototype.slice.call(arguments);
            n[1] *= e,
            n[2] *= e,
            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g,
            function(t, n, i) {
                return n * e + i
            }),
            t.apply(this, n),
            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g,
            function(t, n, i) {
                return n / e + i
            })
        }
    } (t.fillText), t.strokeText = function(t) {
        return function() {
            var n = Array.prototype.slice.call(arguments);
            n[1] *= e,
            n[2] *= e,
            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g,
            function(t, n, i) {
                return n * e + i
            }),
            t.apply(this, n),
            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g,
            function(t, n, i) {
                return n / e + i
            })
        }
    } (t.strokeText))
} (CanvasRenderingContext2D.prototype),
function(t) {
    t.getContext = function(t) {
        return function(e) {
            var n, i, a = t.call(this, e);
            return "2d" === e && (n = a.backingStorePixelRatio || a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1, i = (window.devicePixelRatio || 1) / n, i > 1 && (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= i, this.height *= i)),
            a
        }
    } (t.getContext)
} (HTMLCanvasElement.prototype)),
function(t, e, n) {
    t.fn.responsiveSlides = function(i) {
        var a = t.extend({
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: t.noop,
            after: t.noop
        },
        i);
        return this.each(function() {
            n++;
            var r, o, s, c, l, h, d = t(this),
            u = 0,
            f = d.children(),
            p = f.size(),
            m = parseFloat(a.speed),
            g = parseFloat(a.timeout),
            v = parseFloat(a.maxwidth),
            w = a.namespace,
            x = w + n,
            b = w + "_nav " + x + "_nav",
            C = w + "_here",
            A = x + "_on",
            _ = x + "_s",
            y = t("<ul class='" + w + "_tabs " + x + "_tabs' />"),
            S = {
                "float": "left",
                position: "relative",
                opacity: 1,
                zIndex: 2
            },
            k = {
                "float": "none",
                position: "absolute",
                opacity: 0,
                zIndex: 1
            },
            T = function() {
                var t = document.body || document.documentElement,
                e = t.style,
                n = "transition";
                if ("string" == typeof e[n]) return ! 0;
                r = ["Moz", "Webkit", "Khtml", "O", "ms"],
                n = n.charAt(0).toUpperCase() + n.substr(1);
                var i;
                for (i = 0; i < r.length; i++) if ("string" == typeof e[r[i] + n]) return ! 0;
                return ! 1
            } (),
            $ = function(e) {
                a.before(e),
                T ? (f.removeClass(A).css(k).eq(e).addClass(A).css(S), u = e, setTimeout(function() {
                    a.after(e)
                },
                m)) : f.stop().fadeOut(m,
                function() {
                    t(this).removeClass(A).css(k).css("opacity", 1)
                }).eq(e).fadeIn(m,
                function() {
                    t(this).addClass(A).css(S),
                    a.after(e),
                    u = e
                })
            };
            if (a.random && (f.sort(function() {
                return Math.round(Math.random()) - .5
            }), d.empty().append(f)), f.each(function(t) {
                this.id = _ + t
            }), d.addClass(w + " " + x), i && i.maxwidth && d.css("max-width", v), f.hide().css(k).eq(0).addClass(A).css(S).show(), T && f.show().css({
                "-webkit-transition": "opacity " + m + "ms ease-in-out",
                "-moz-transition": "opacity " + m + "ms ease-in-out",
                "-o-transition": "opacity " + m + "ms ease-in-out",
                transition: "opacity " + m + "ms ease-in-out"
            }), f.size() > 1) {
                if (m + 100 > g) return;
                if (a.pager && !a.manualControls) {
                    var P = [];
                    f.each(function(t) {
                        var e = t + 1;
                        P += "<li><a href='#' class='" + _ + e + "'>" + e + "</a></li>"
                    }),
                    y.append(P),
                    i.navContainer ? t(a.navContainer).append(y) : d.after(y)
                }
                if (a.manualControls && (y = t(a.manualControls), y.addClass(w + "_tabs " + x + "_tabs")), (a.pager || a.manualControls) && y.find("li").each(function(e) {
                    t(this).addClass(_ + (e + 1))
                }), (a.pager || a.manualControls) && (h = y.find("a"), o = function(t) {
                    h.closest("li").removeClass(C).eq(t).addClass(C)
                }), a.auto && (s = function() {
                    l = setInterval(function() {
                        f.stop(!0, !0);
                        var t = p > u + 1 ? u + 1 : 0; (a.pager || a.manualControls) && o(t),
                        $(t)
                    },
                    g)
                })(), c = function() {
                    a.auto && (clearInterval(l), s())
                },
                a.pause && d.hover(function() {
                    clearInterval(l)
                },
                function() {
                    c()
                }), (a.pager || a.manualControls) && (h.bind("click",
                function(e) {
                    e.preventDefault(),
                    a.pauseControls || c();
                    var n = h.index(this);
                    u === n || t("." + A).queue("fx").length || (o(n), $(n))
                }).eq(0).closest("li").addClass(C), a.pauseControls && h.hover(function() {
                    clearInterval(l)
                },
                function() {
                    c()
                })), a.nav) {
                    var E = "<a href='#' class='" + b + " prev'>" + a.prevText + "</a><a href='#' class='" + b + " next'>" + a.nextText + "</a>";
                    i.navContainer ? t(a.navContainer).append(E) : d.after(E);
                    var I = t("." + x + "_nav"),
                    R = I.filter(".prev");
                    I.bind("click",
                    function(e) {
                        e.preventDefault();
                        var n = t("." + A);
                        if (!n.queue("fx").length) {
                            var i = f.index(n),
                            r = i - 1,
                            s = p > i + 1 ? u + 1 : 0;
                            $(t(this)[0] === R[0] ? r: s),
                            (a.pager || a.manualControls) && o(t(this)[0] === R[0] ? r: s),
                            a.pauseControls || c()
                        }
                    }),
                    a.pauseControls && I.hover(function() {
                        clearInterval(l)
                    },
                    function() {
                        c()
                    })
                }
            }
            if ("undefined" == typeof document.body.style.maxWidth && i.maxwidth) {
                var L = function() {
                    d.css("width", "100%"),
                    d.width() > v && d.css("width", v)
                };
                L(),
                t(e).bind("resize",
                function() {
                    L()
                })
            }
        })
    }
} (jQuery, this, 0),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
    "use strict";
    function e(t) {
        if (t instanceof Date) return t;
        if (String(t).match(o)) return String(t).match(/^[0-9]*$/) && (t = Number(t)),
        new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.")
    }
    function n(t) {
        return function(e) {
            var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (n) for (var a = 0,
            r = n.length; r > a; ++a) {
                var o = n[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                c = new RegExp(o[0]),
                l = o[1] || "",
                h = o[3] || "",
                d = null;
                o = o[2],
                s.hasOwnProperty(o) && (d = s[o], d = Number(t[d])),
                null !== d && ("!" === l && (d = i(h, d)), "" === l && 10 > d && (d = "0" + d.toString()), e = e.replace(c, d.toString()))
            }
            return e = e.replace(/%%/, "%")
        }
    }
    function i(t, e) {
        var n = "s",
        i = "";
        return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])),
        1 === Math.abs(e) ? i: n
    }
    var a = 1e3,
    r = [],
    o = [];
    o.push(/^[0-9]*$/.source),
    o.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    o.push(/[0-9]{4}(\/[0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    o = new RegExp(o.join("|"));
    var s = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    },
    c = function(e, n, i, a) {
        this.el = e,
        this.$el = t(e),
        this.interval = null,
        this.offset = {},
        this.setFinalDate(n),
        this.setCurrentServerDate(i),
        this.instanceNumber = r.length,
        r.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        a && (this.$el.on("update.countdown", a), this.$el.on("stoped.countdown", a), this.$el.on("finish.countdown", a)),
        this.start()
    };
    t.extend(c.prototype, {
        start: function() {
            if (null !== this.interval) throw new Error("Countdown is already running!");
            var t = this;
            this.update(),
            this.interval = setInterval(function() {
                t.update.call(t)
            },
            a)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop(),
            delete r[this.instanceNumber]
        },
        setFinalDate: function(t) {
            this.finalDate = e(t)
        },
        setCurrentServerDate: function(t) {
            void 0 !== t && (this.lastTimeStamp = this.finalDate.valueOf() - t),
            this.currentServerDate = t
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.lastTimeStamp ? this.lastTimeStamp = this.lastTimeStamp - 1e3: this.finalDate.valueOf() - (new Date).valueOf(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            },
            0 === this.totalSecsLeft && (this.stop(), this.dispatchEvent("finish")), void this.dispatchEvent("update"))
        },
        dispatchEvent: function(e) {
            var i = t.Event(e + ".countdown");
            i.finalDate = this.finalDate,
            i.offset = t.extend({},
            this.offset),
            i.strftime = n(this.offset),
            this.$el.trigger(i)
        }
    }),
    t.fn.countdown = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var n = t(this).data("countdown-instance");
            if (void 0 !== n) {
                var i = r[n],
                a = e[0];
                c.prototype.hasOwnProperty(a) ? i[a].apply(i, e.slice(1)) : null === String(a).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? i.setFinalDate.call(i, a) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, a))
            } else new c(this, e[0], e[1])
        })
    }
}),
function(t, e, n, i) {
    var a = t(e);
    t.fn.lazyload = function(r) {
        function o() {
            var e = 0;
            c.each(function() {
                var n = t(this);
                if (!l.skip_invisible || n.is(":visible")) if (t.abovethetop(this, l) || t.leftofbegin(this, l));
                else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                    if (++e > l.failure_limit) return ! 1
                } else n.trigger("appear"),
                e = 0
            })
        }
        var s, c = this,
        l = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), i !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), t.extend(l, r)),
        s = l.container === i || l.container === e ? a: t(l.container),
        0 === l.event.indexOf("scroll") && s.bind(l.event,
        function() {
            return o()
        }),
        this.each(function() {
            var e = this,
            n = t(e);
            e.loaded = !1,
            (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder),
            n.one("appear",
            function() {
                if (!this.loaded) {
                    if (l.appear) {
                        var i = c.length;
                        l.appear.call(e, i, l)
                    }
                    t("<img />").bind("load",
                    function() {
                        var i = n.attr("data-" + l.data_attribute);
                        n.hide(),
                        n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"),
                        n[l.effect](l.effect_speed),
                        e.loaded = !0;
                        var a = t.grep(c,
                        function(t) {
                            return ! t.loaded
                        });
                        if (c = t(a), l.load) {
                            var r = c.length;
                            l.load.call(e, r, l)
                        }
                    }).attr("src", n.attr("data-" + l.data_attribute))
                }
            }),
            0 !== l.event.indexOf("scroll") && n.bind(l.event,
            function() {
                e.loaded || n.trigger("appear")
            })
        }),
        a.bind("resize",
        function() {
            o()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow",
        function(e) {
            e.originalEvent && e.originalEvent.persisted && c.each(function() {
                t(this).trigger("appear")
            })
        }),
        t(n).ready(function() {
            o()
        }),
        this
    },
    t.belowthefold = function(n, r) {
        var o;
        return o = r.container === i || r.container === e ? (e.innerHeight ? e.innerHeight: a.height()) + a.scrollTop() : t(r.container).offset().top + t(r.container).height(),
        o <= t(n).offset().top - r.threshold
    },
    t.rightoffold = function(n, r) {
        var o;
        return o = r.container === i || r.container === e ? a.width() + a.scrollLeft() : t(r.container).offset().left + t(r.container).width(),
        o <= t(n).offset().left - r.threshold
    },
    t.abovethetop = function(n, r) {
        var o;
        return o = r.container === i || r.container === e ? a.scrollTop() : t(r.container).offset().top,
        o >= t(n).offset().top + r.threshold + t(n).height()
    },
    t.leftofbegin = function(n, r) {
        var o;
        return o = r.container === i || r.container === e ? a.scrollLeft() : t(r.container).offset().left,
        o >= t(n).offset().left + r.threshold + t(n).width()
    },
    t.inviewport = function(e, n) {
        return ! (t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
    },
    t.extend(t.expr[":"], {
        "below-the-fold": function(e) {
            return t.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return ! t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return ! t.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return t.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return ! t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return ! t.rightoffold(e, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document),
!
function() {
    var t = $(".tab-hover"),
    e = !1;
    t && t.each(function(t, n) {
        var i = $(n),
        a = i.data("tab-title"),
        r = i.data("tab-current"),
        o = i.data("tab-border"),
        s = i.data("tab-body"),
        c = i.find("." + a),
        l = i.find("." + s),
        h = i.find("." + o);
        c.on("mouseover",
        function(t) {
            if (e) return ! 1;
            e = !0;
            var n = +t.target.getAttribute("data-index");
            h.css("left", n * h[0].clientWidth + "px"),
            c.removeClass(r),
            l.hide(),
            $(c[n]).addClass(r),
            $(l[n]).fadeIn(100,
            function() {
                e = !1,
                $(this).find("img.lazy").trigger("tab")
            })
        })
    })
} (),
function() {
    var t = 2,
    e = 3,
    n = 16,
    i = 52,
    a = 24,
    r = function(r) {
        if (!r.element) throw new Error("Error: CircleProgress must have dom element");
        if ("canvas" !== r.element.tagName.toLowerCase()) {
            var o = document.createElement("canvas");
            o.id = "_ele_cirle_progress_" + Math.ceil(1e3 * Math.random()),
            o.width = r.element.clientWidth,
            o.height = r.element.clientHeight,
            r.element.appendChild(o),
            this.ctx = o.getContext("2d")
        } else this.ctx = r.element.getContext("2d");
        return this.width = r.width || r.element.clientWidth,
        this.height = r.height || r.element.clientHeight,
        this.centerCoordinate = this.width >= this.height ? this.width / 2 : this.height / 2,
        this.backgroundLineWidth = r.backgroundLineWidth || t,
        this.circleLineWidth = r.circleLineWidth || e,
        this.radius = r.radius || this.centerCoordinate - this.backgroundLineWidth - n,
        this.startAngle = r.startAngle || Math.PI / 2,
        this.endAngle = r.endAngle || 360,
        this.current = r.current > 1 ? 1 : r.current || 0,
        this.progressEndRadius = r.progressEndRadius || n,
        this.progressEndWidth = r.progressEndWidth || i,
        this.progressEndHeight = r.progressEndHeight || a,
        this.backgroundColor = r.backgroundColor || "#e5f1fd",
        this.circleColor = r.circleColor || "#77ccf4",
        this.textColor = r.textColor || "#fff",
        this.textEnd = r.textEnd || "已满标",
        this.font = r.font || "12px Microsoft Yahei",
        this._shadow_current = 0,
        this.draw(),
        this
    };
    if (r.prototype.drawId = void 0, r.prototype.draw = function(t) {
        Number(t) >= 0 && (this.current = t > 1 ? 1 : t),
        this._shadow_current < Math.floor(1e3 * this.current / 10) && (window.cancelAnimationFrame(this.drawId), this.drawId = void 0);
        var e = this,
        n = function() {
            return 0 === e.current ? (e._shadow_current = 0, e.ctx.clearRect(0, 0, e.width, e.height), e.drawBackground().drawCircle().drawText(), window.cancelAnimationFrame(e.drawId), e.drawId = void 0, !1) : e._shadow_current == Math.floor(1e3 * e.current / 10) ? (window.cancelAnimationFrame(e.drawId), e.drawId = void 0, !1) : (e._shadow_current > Math.floor(1e3 * e.current / 10) ? e._shadow_current -= 1 : e._shadow_current < Math.floor(1e3 * e.current / 10) && (e._shadow_current += 1), e.ctx.clearRect(0, 0, e.width, e.height), e.drawBackground().drawCircle().drawText(), void(e.drawId = window.requestAnimationFrame(n)))
        };
        n()
    },
    r.prototype.restart = function() {
        this._shadow_current = 0,
        this.draw()
    },
    r.prototype.drawBackground = function() {
        return this.ctx.beginPath(),
        this.ctx.strokeStyle = this.backgroundColor,
        this.ctx.lineWidth = this.backgroundLineWidth,
        this.ctx.arc(this.centerCoordinate, this.centerCoordinate, this.radius, -this.startAngle, this.endAngle, !1),
        this.ctx.stroke(),
        this.ctx.closePath(),
        this
    },
    r.prototype.drawCircle = function() {
        return this.ctx.beginPath(),
        this.ctx.strokeStyle = this.circleColor,
        this.ctx.lineWidth = this.circleLineWidth,
        this.ctx.arc(this.centerCoordinate, this.centerCoordinate, this.radius - 2, -this.startAngle, 2 * Math.PI * (this._shadow_current / 100) - this.startAngle, !1),
        this.ctx.stroke(),
        this.ctx.closePath(),
        this
    },
    r.prototype.drawText = function() {
        var t = this.centerCoordinate + this.radius * Math.cos(this._shadow_current / 100 * 360 * Math.PI / 180 - this.startAngle),
        e = this.centerCoordinate + this.radius * Math.sin(this._shadow_current / 100 * 360 * Math.PI / 180 - this.startAngle);
        return this._shadow_current < 100 ? (this.ctx.beginPath(), this.ctx.fillStyle = this.circleColor, this.ctx.arc(t, e, this.progressEndRadius, 0, 360, !1), this.ctx.fill(), this.ctx.closePath()) : this._shadow_current >= 100 && this.roundRect(t - this.progressEndWidth / 2, e - this.progressEndHeight / 4, this.progressEndWidth, this.progressEndHeight, 4, this.circleColor, !1),
        this.ctx.fillStyle = this.textColor,
        this.ctx.lineWidth = this.textLineWidth,
        this.ctx.textAlign = "center",
        this.ctx.font = this.font,
        this._shadow_current < 100 ? this.ctx.fillText(this._shadow_current + "%", t, e + 5) : this._shadow_current >= 100 && this.ctx.fillText(this.textEnd, t, e + 10),
        this
    },
    r.prototype.roundRect = function(t, e, n, i, a, r, o) {
        var a = a || 5;
        this.ctx.beginPath(),
        this.ctx.moveTo(t + a, e),
        this.ctx.lineTo(t + n - a, e),
        this.ctx.quadraticCurveTo(t + n, e, t + n, e + a),
        this.ctx.lineTo(t + n, e + i - a),
        this.ctx.quadraticCurveTo(t + n, e + i, t + n - a, e + i),
        this.ctx.lineTo(t + a, e + i),
        this.ctx.quadraticCurveTo(t, e + i, t, e + i - a),
        this.ctx.lineTo(t, e + a),
        this.ctx.quadraticCurveTo(t, e, t + a, e),
        o && (this.ctx.strokeStyle = o, this.ctx.stroke()),
        r && (this.ctx.fillStyle = r, this.ctx.fill()),
        this.ctx.closePath()
    },
    !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var o = 0;
        window.requestAnimationFrame = function(t) {
            var e = (new Date).getTime(),
            n = Math.max(o + 16, e);
            return setTimeout(function() {
                t(o = n)
            },
            n - e)
        },
        window.cancelAnimationFrame = clearTimeout
    }
    window.CircleProgress = r
} (),
$(function() {
    function t(t) {
        var n = $(this),
        i = n.attr("data-end-time"),
        a = n.parent();
        if (t >= i) a.html("立即投资").addClass("btn-synch").removeAttr("data-end-time"),
        e.call(null, $(".btn-synch"));
        else {
            var r = n.find(".counter-hours"),
            o = n.find(".counter-mins"),
            s = n.find(".counter-seconds");
            n.countdown(i, t).on("update.countdown",
            function(t) {
                r.text(t.offset.hours < 10 ? "0" + String(t.offset.hours) : t.offset.hours),
                o.text(t.offset.minutes < 10 ? "0" + String(t.offset.minutes) : t.offset.minutes),
                s.text(t.offset.seconds < 10 ? "0" + String(t.offset.seconds) : t.offset.seconds)
            }).on("finish.countdown",
            function() {
                a.html("立即投资").addClass("btn-synch").removeAttr("data-end-time"),
                e.call(null, $(".btn-synch"))
            }),
            synchServerTime( + (t + "").slice(0, 10), +i.slice(0, 10),
            function() {
                n.countdown("setCurrentServerDate", 1e3 * this.timeNow)
            })
        }
    }
    function e(t) {
        var e = {},
        i = [],
        a = [];
        t && (t.each(function(t, n) {
            var r = $(n);
            i[t] = r.attr("href"),
            a[t] = getQueryString("id", i[t]),
            r.attr("data-end-time") || r.html("立即投资"),
            e["ids[" + t + "]"] = a[t]
        }), $.ajax({
            url: "/dinvest/ajax/GetNowScale",
            type: "get",
            data: e,
            jsonp: "jsoncallback",
            dataType: "jsonp",
            success: function(e) {
                if (!e.code) for (var i = 0,
                r = e.data.length; r > i; i++) {
                    var o;
                    e.data[i].scale && (e.data[i].scale >= 100 ? ($(t.eq(i)).find(".btn-block").removeClass("btn-red").addClass("btn-white").html("已投满"), o = 1) : o = e.data[i].scale < 10 ? "0.0" + e.data[i].scale.toString() : "0." + e.data[i].scale.toString(), n[a[i]] && n[a[i]].draw(o))
                }
            }
        }))
    }
    var n = [];
    n[$("#scale1").attr("data-id")] = new CircleProgress({
        element: document.getElementById("scale1"),
        width: 222,
        height: 222,
        radius: 95,
        current: PAGE_DATA.scale1
    }),
    n[$("#scale2").attr("data-id")] = new CircleProgress({
        element: document.getElementById("scale2"),
        width: 222,//236
        height: 222,
        radius: 95,//102
        current: PAGE_DATA.scale2
    }),
    n[$("#scale3").attr("data-id")] = new CircleProgress({
        element: document.getElementById("scale3"),
        width: 222,
        height: 222,
        radius: 95,
        current: PAGE_DATA.scale3
    }),
    $(".slider-img").responsiveSlides({
        nav: !0,
        pager: !0,
        pause: !0
    }),
    $(".media-list").responsiveSlides({
        pause: !0,
        namespace: "m-slide-w"
    });
    var i = $(".pre-countdown");
    i.length && getTimeStamp(function(e) {
        e.code > 0 || i.each(function() {
            var n = $(this),
            i = +n.attr("data-end-time").slice(0, 10);
            i <= e.data ? (n.removeClass("btn-hue1").addClass("btn-red").html('即将发售&nbsp;&nbsp;<span class="countdown-components" data-end-time="' + ( + n.attr("data-end-time") + 6e5) + '"><span class="counter-hours">--</span>:<span class="counter-mins">--</span>:<span class="counter-seconds">--</span></span>'), t.call(n.find(".countdown-components"), 1e3 * e.data)) : synchServerTime(e.data, i,
            function() {
                var e = this.timeNow;
                20 > i - e && setTimeout(function() {
                    n.removeClass("btn-hue1").addClass("btn-red").html('即将发售&nbsp;&nbsp;<span class="countdown-components" data-end-time="' + ( + n.attr("data-end-time") + 6e5) + '"><span class="counter-hours">--</span>:<span class="counter-mins">--</span>:<span class="counter-seconds">--</span></span>'),
                    t.call(n.find(".countdown-components"), 1e3 * i)
                },
                1e3 * (i - e))
            })
        })
    });
    var a = $(".countdown-components");
    a.length && getTimeStamp(function(e) {
        if (! (e.code > 0)) {
            var n = 1e3 * e.data;
            a.each(function() {
                t.call(this, n)
            })
        }
    }),
    function() {
        e.call(null, $(".btn-synch"))
    } (),
    function() {
        $.ajax({
            url: "/user/ajax/ajaxloginstatus",
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function(t) {
                var e = $("#top_header_sign_username"),
                n = $("#banner_hover_username");
                if (0 == t.code && t.data.userInfo.user_id) {
                    for (var i = 10,
                    a = t.data.userInfo.username,
                    r = 0,
                    o = 0; o < a.length; o++) {
                        if (a.charCodeAt(o) > 127 || 94 == a.charCodeAt(o) ? i -= 2 : i--, 0 > i) {
                            r--;
                            break
                        }
                        r++
                    }
                    var s = t.data.userInfo.username.substr(0, r);
                    e.text(a.length > 15 ? a.substr(0, 15) + "...": a),
                    n.text(a.length > s.length ? s + "...": s),
                    $("#top_header_sign_in").fadeIn("fast"),
                    $("#banner_hover_module_user").fadeIn("fast")
                } else $("#top_header_sign_out").fadeIn("fast"),
                $("#banner_hover_module_apr").fadeIn("fast")
            },
            error: function() {
                $("#top_header_sign_out").fadeIn("fast"),
                $("#banner_hover_module_apr").fadeIn("fast")
            }
        })
    } ();
    var r = $("#home_slider_banner").children("li");
    r.length > 0 ? $("#home_slider_link").on("click",
    function() {
        var t = "#";
        r.each(function(e, n) {
            $(n).hasClass("rslides1_on") && (t = $(n).data("url"))
        }),
        window.location.href = t
    }) : $("#home_slider_link").attr("href", "#"),
    $("img.lazy").lazyload({}),
    $("img.lazy").lazyload({
        event: "tab"
    })
});