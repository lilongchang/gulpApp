
var itz = itz || {};
Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
    var n, r;
    if (null === this) throw new TypeError(" this is null or not defined");
    var o = Object(this),
    i = o.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (arguments.length > 1 && (n = t), r = 0; i > r;) {
        var a;
        r in o && (a = o[r], e.call(n, a, r, o)),
        r++
    }
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var n;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var r = Object(this),
    o = r.length >>> 0;
    if (0 === o) return - 1;
    var i = +t || 0;
    if (1 / 0 === Math.abs(i) && (i = 0), i >= o) return - 1;
    for (n = Math.max(i >= 0 ? i: o - Math.abs(i), 0); o > n;) {
        if (n in r && r[n] === e) return n;
        n++
    }
    return - 1
}),
Function.prototype.bind || (Function.prototype.bind = function(e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
    n = this,
    r = function() {},
    o = function() {
        return n.apply(this instanceof r && e ? this: e, t.concat(Array.prototype.slice.call(arguments)))
    };
    return r.prototype = this.prototype,
    o.prototype = new r,
    o
}),
function() {
    "use strict";
    var e = Array.prototype.slice;
    try {
        e.call(document.documentElement)
    } catch(t) {
        Array.prototype.slice = function(t, n) {
            if (n = "undefined" != typeof n ? n: this.length, "[object Array]" === Object.prototype.toString.call(this)) return e.call(this, t, n);
            var r, o, i = [],
            a = this.length,
            s = t || 0;
            s = s >= 0 ? s: Math.max(0, a + s);
            var l = "number" == typeof n ? Math.min(n, a) : a;
            if (0 > n && (l = a + n), o = l - s, o > 0) if (i = new Array(o), this.charAt) for (r = 0; o > r; r++) i[r] = this.charAt(s + r);
            else for (r = 0; o > r; r++) i[r] = this[s + r];
            return i
        }
    }
} (),
function(e, t, n) {
    if ((!e.addEventListener || !e.removeEventListener) && e.attachEvent && e.detachEvent) {
        var r = function(e) {
            return "function" == typeof e
        },
        o = function(e, t) {
            var r = t[n];
            if (r) for (var o, i = r.length; i--;) if (o = r[i], o[0] === e) return o[1]
        },
        i = function(e, t, r) {
            var i = t[n] || (t[n] = []);
            return o(e, t) || (i[i.length] = [e, r], r)
        },
        a = function(e) {
            var n = t[e];
            t[e] = function(e) {
                return u(n(e))
            }
        },
        s = function(n, o) {
            if (r(o)) {
                var a = this;
                a.attachEvent("on" + n, i(a, o,
                function(n) {
                    n = n || e.event,
                    n.preventDefault = n.preventDefault ||
                    function() {
                        n.returnValue = !1
                    },
                    n.stopPropagation = n.stopPropagation ||
                    function() {
                        n.cancelBubble = !0
                    },
                    n.target = n.target || n.srcElement || t.documentElement,
                    n.currentTarget = n.currentTarget || a,
                    n.timeStamp = n.timeStamp || (new Date).getTime(),
                    o.call(a, n)
                }))
            }
        },
        l = function(e, t) {
            if (r(t)) {
                var n = this,
                i = o(n, t);
                i && n.detachEvent("on" + e, i)
            }
        },
        u = function(e) {
            var t = e.length;
            if (t) for (; t--;) e[t].addEventListener = s,
            e[t].removeEventListener = l;
            else e.addEventListener = s,
            e.removeEventListener = l;
            return e
        };
        if (u([t, e]), "Element" in e) {
            var c = e.Element;
            c.prototype.addEventListener = s,
            c.prototype.removeEventListener = l
        } else t.attachEvent("onreadystatechange",
        function() {
            u(t.all)
        }),
        a("getElementsByTagName"),
        a("getElementById"),
        a("createElement"),
        u(t.all)
    }
} (window, document, "x-ms-event-listeners"),
document.querySelectorAll || (document.querySelectorAll = function(e) {
    var t, n = document.createElement("style"),
    r = [];
    for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) t = document._qsa.shift(),
    t.style.removeAttribute("x-qsa"),
    r.push(t);
    return document._qsa = null,
    r
}),
document.querySelector || (document.querySelector = function(e) {
    var t = document.querySelectorAll(e);
    return t.length ? t[0] : null
}),
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? !
function() {
    "use strict";
    var e = document.createElement("_");
    if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
        var t = function(e) {
            var t = DOMTokenList.prototype[e];
            DOMTokenList.prototype[e] = function(e) {
                var n, r = arguments.length;
                for (n = 0; r > n; n++) e = arguments[n],
                t.call(this, e)
            }
        };
        t("add"),
        t("remove")
    }
    if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
        var n = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(e, t) {
            return 1 in arguments && !this.contains(e) == !t ? t: n.call(this, e)
        }
    }
    e = null
} () : !
function(e) {
    "use strict";
    if ("Element" in e) {
        var t = "classList",
        n = "prototype",
        r = e.Element[n],
        o = Object,
        i = String[n].trim ||
        function() {
            return this.replace(/^\s+|\s+$/g, "")
        },
        a = Array[n].indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
            return - 1
        },
        s = function(e, t) {
            this.name = e,
            this.code = DOMException[e],
            this.message = t
        },
        l = function(e, t) {
            if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return a.call(e, t)
        },
        u = function(e) {
            for (var t = i.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], r = 0, o = n.length; o > r; r++) this.push(n[r]);
            this._updateClassName = function() {
                e.setAttribute("class", this.toString())
            }
        },
        c = u[n] = [],
        f = function() {
            return new u(this)
        };
        if (s[n] = Error[n], c.item = function(e) {
            return this[e] || null
        },
        c.contains = function(e) {
            return e += "",
            -1 !== l(this, e)
        },
        c.add = function() {
            var e, t = arguments,
            n = 0,
            r = t.length,
            o = !1;
            do e = t[n] + "",
            -1 === l(this, e) && (this.push(e), o = !0);
            while (++n < r);
            o && this._updateClassName()
        },
        c.remove = function() {
            var e, t, n = arguments,
            r = 0,
            o = n.length,
            i = !1;
            do
            for (e = n[r] + "", t = l(this, e); - 1 !== t;) this.splice(t, 1),
            i = !0,
            t = l(this, e);
            while (++r < o);
            i && this._updateClassName()
        },
        c.toggle = function(e, t) {
            e += "";
            var n = this.contains(e),
            r = n ? t !== !0 && "remove": t !== !1 && "add";
            return r && this[r](e),
            t === !0 || t === !1 ? t: !n
        },
        c.toString = function() {
            return this.join(" ")
        },
        o.defineProperty) {
            var p = {
                get: f,
                enumerable: !0,
                configurable: !0
            };
            try {
                o.defineProperty(r, t, p)
            } catch(d) { - 2146823252 === d.number && (p.enumerable = !1, o.defineProperty(r, t, p))
            }
        } else o[n].__defineGetter__ && r.__defineGetter__(t, f)
    }
} (self));
var synchServerTime = function(e, t, n) {
    var r = {
        timePublish: t,
        timeNow: e
    },
    o = function() {
        return r.timePublish - r.timeNow
    },
    i = function(e) {
        getTimeStamp(function(t) {
            0 == t.code && (r.timeNow = t.data, e())
        }.bind(r))
    },
    a = function() {
        var e = setTimeout(function() {
            clearTimeout(e),
            i(function() {
                n.call(r),
                s()
            })
        },
        500 * o())
    },
    s = function() {
        var e = o();
        e >= 20 && a()
    };
    s()
},
serialize = function(e, t) {
    if (e) {
        var n = [];
        for (var r in e) if (e.hasOwnProperty(r)) {
            var o = t ? t + "[" + r + "]": r,
            i = e[r];
            n.push("object" == typeof i ? serialize(i, o) : encodeURIComponent(o) + "=" + encodeURIComponent(i))
        }
        return n.join("&")
    }
    return ""
},
buildURI = function(e, t, n) {
    var r = (n ? n.split("?")[0] : location.protocol + "//" + location.host + location.pathname) + "?",
    o = getCurrentParams(n).params;
    return "string" == typeof e ? o[e] = t: e instanceof Array && e.forEach(function(e, n) {
        o[e] = t[n]
    }),
    r + serialize(o)
},
getCurrentParams = function(e) {
    var t, n = {},
    r = [];
    return location.search ? t = location.search.slice(1) : e && (t = e.split("?")[1]),
    t && t.split("&").forEach(function(e) {
        var t = e.split("=");
        r.push(decodeURIComponent(t[0])),
        n[decodeURIComponent(t[0])] = decodeURIComponent(t[1])
    }),
    {
        keys: r,
        params: n
    }
},
isEmptyObj = function(e) {
    return JSON.stringify(e) === JSON.stringify({})
},
numberToMoney = function(e, t) {
    var n = 1;
    e = Number(e);
    var r;
    if (0 == e) r = t ? "0.00": "0";
    else {
        0 > e && (n = 0, e = -e);
        var o = e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        r = t ? o: o.split(".")[0],
        n || (r = "-" + r)
    }
    return r
},
moneyToNumber = function(e) {
    return Number(e.split(".")[0].replace(/,/g, ""))
},
moneyToNum = function(e) {
    return Number(e.replace(/,/g, ""))
},
getTimeStamp = function(e) {
    var t = "/json/default/GetNowTime";
    $.ajax({
        url: t,
        jsonp: "jsoncallback",
        dataType: "jsonp",
        success: e
    })
},
getQueryJson = function(e) {
    var t = {},
    e = e || location.search;
    if ( - 1 != e.indexOf("?")) {
        var n = e.substr(e.indexOf("?") + 1);
        strs = n.split("&");
        for (var r = 0,
        o = strs.length; o > r; r++) t[strs[r].split("=")[0]] = unescape(strs[r].split("=")[1]);
        return t
    }
    return {}
},
getQueryString = function(e, t) {
    var n = getQueryJson(t);
    return n[e]
},
formatTime = function(e, t) {
    t = t || "yyyy-MM-dd hh:mm:ss",
    Date.prototype.format = function(e) {
        var t = {
            "y+": this.getFullYear(),
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
        return e
    };
    var n = new Date;
    n.setTime(e);
    var r = new Date,
    o = n.getHours(),
    i = -r.getTimezoneOffset() / 60;
    return 0 > i ? (i = Math.abs(i) + 8, n.setHours(o + i)) : (i -= 8, n.setHours(o - i)),
    n.format(t)
},
luhn = function(e) {
    for (var e = String(e), t = e.length, n = 0, r = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], o = 0; t--;) o += r[n][parseInt(e.charAt(t), 10)],
    n ^= 1;
    return o % 10 === 0 && o > 0
},
plusXing = function(e, t, n) {
    for (var r = e.length - t - n,
    o = "",
    i = 0; r > i; i++) o += "*";
    return e.substr(0, t) + o + e.substr(e.length - n)
}; !
function(e, t) {
    function n(e) {
        var t = e.length,
        n = lt.type(e);
        return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = _t[e] = {};
        return lt.each(e.match(ct) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o(e, n, r, o) {
        if (lt.acceptData(e)) {
            var i, a, s = lt.expando,
            l = "string" == typeof n,
            u = e.nodeType,
            c = u ? lt.cache: e,
            f = u ? e[s] : e[s] && s;
            if (f && c[f] && (o || c[f].data) || !l || r !== t) return f || (u ? e[s] = f = Z.pop() || lt.guid++:f = s),
            c[f] || (c[f] = {},
            u || (c[f].toJSON = lt.noop)),
            ("object" == typeof n || "function" == typeof n) && (o ? c[f] = lt.extend(c[f], n) : c[f].data = lt.extend(c[f].data, n)),
            i = c[f],
            o || (i.data || (i.data = {}), i = i.data),
            r !== t && (i[lt.camelCase(n)] = r),
            l ? (a = i[n], null == a && (a = i[lt.camelCase(n)])) : a = i,
            a
        }
    }
    function i(e, t, n) {
        if (lt.acceptData(e)) {
            var r, o, i, a = e.nodeType,
            l = a ? lt.cache: e,
            u = a ? e[lt.expando] : lt.expando;
            if (l[u]) {
                if (t && (i = n ? l[u] : l[u].data)) {
                    lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in i ? t = [t] : (t = lt.camelCase(t), t = t in i ? [t] : t.split(" "));
                    for (r = 0, o = t.length; o > r; r++) delete i[t[r]];
                    if (! (n ? s: lt.isEmptyObject)(i)) return
                } (n || (delete l[u].data, s(l[u]))) && (a ? lt.cleanData([e], !0) : lt.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var o = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(o), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: Ct.test(r) ? lt.parseJSON(r) : r
                } catch(i) {}
                lt.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function l() {
        return ! 0
    }
    function u() {
        return ! 1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, lt.isFunction(t)) return lt.grep(e,
        function(e, r) {
            var o = !!t.call(e, r, e);
            return o === n
        });
        if (t.nodeType) return lt.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = lt.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t)) return lt.filter(t, r, !n);
            t = lt.filter(t, r)
        }
        return lt.grep(e,
        function(e) {
            return lt.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = Vt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) lt._data(n, "globalEval", !t || lt._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && lt.hasData(e)) {
            var n, r, o, i = lt._data(e),
            a = lt._data(t, i),
            s = i.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, o = s[n].length; o > r; r++) lt.event.add(t, n, s[n][r])
            }
            a.data && (a.data = lt.extend({},
            a.data))
        }
    }
    function v(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
                o = lt._data(t);
                for (r in o.events) lt.removeEvent(t, r, o.handle);
                t.removeAttribute(lt.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, o, i = 0,
        a = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (o = r[i]); i++) ! n || lt.nodeName(o, n) ? a.push(o) : lt.merge(a, b(o, n));
        return n === t || n && lt.nodeName(e, n) ? lt.merge([e], a) : a
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = Nn.length; o--;) if (t = Nn[o] + n, t in e) return t;
        return r
    }
    function T(e, t) {
        return e = t || e,
        "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
    }
    function _(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (i[a] = lt._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (i[a] = lt._data(r, "olddisplay", k(r.nodeName)))) : i[a] || (o = T(r), (n && "none" !== n || !o) && lt._data(r, "olddisplay", o ? n: lt.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "": "none"));
        return e
    }
    function C(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function N(e, t, n, r, o) {
        for (var i = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2)"margin" === n && (a += lt.css(e, n + Cn[i], !0, o)),
        r ? ("content" === n && (a -= lt.css(e, "padding" + Cn[i], !0, o)), "margin" !== n && (a -= lt.css(e, "border" + Cn[i] + "Width", !0, o))) : (a += lt.css(e, "padding" + Cn[i], !0, o), "padding" !== n && (a += lt.css(e, "border" + Cn[i] + "Width", !0, o)));
        return a
    }
    function E(e, t, n) {
        var r = !0,
        o = "width" === t ? e.offsetWidth: e.offsetHeight,
        i = fn(e),
        a = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = pn(e, t, i), (0 > o || null == o) && (o = e.style[t]), bn.test(o)) return o;
            r = a && (lt.support.boxSizingReliable || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + N(e, t, n || (a ? "border": "content"), r, i) + "px"
    }
    function k(e) {
        var t = J,
        n = wn[e];
        return n || (n = S(e, t), "none" !== n && n || (cn = (cn || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), cn.detach()), wn[e] = n),
        n
    }
    function S(e, t) {
        var n = lt(t.createElement(e)).appendTo(t.body),
        r = lt.css(n[0], "display");
        return n.remove(),
        r
    }
    function A(e, t, n, r) {
        var o;
        if (lt.isArray(t)) lt.each(t,
        function(t, o) {
            n || kn.test(e) ? r(e, o) : A(e + "[" + ("object" == typeof o ? t: "") + "]", o, n, r)
        });
        else if (n || "object" !== lt.type(t)) r(e, t);
        else for (o in t) A(e + "[" + o + "]", t[o], n, r)
    }
    function j(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
            i = t.toLowerCase().match(ct) || [];
            if (lt.isFunction(n)) for (; r = i[o++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function $(e, n, r, o) {
        function i(l) {
            var u;
            return a[l] = !0,
            lt.each(e[l] || [],
            function(e, l) {
                var c = l(n, r, o);
                return "string" != typeof c || s || a[c] ? s ? !(u = c) : t: (n.dataTypes.unshift(c), i(c), !1)
            }),
            u
        }
        var a = {},
        s = e === zn;
        return i(n.dataTypes[0]) || !a["*"] && i("*")
    }
    function D(e, n) {
        var r, o, i = lt.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== t && ((i[o] ? e: r || (r = {}))[o] = n[o]);
        return r && lt.extend(!0, e, r),
        e
    }
    function L(e, n, r) {
        var o, i, a, s, l = e.contents,
        u = e.dataTypes,
        c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        for (;
        "*" === u[0];) u.shift(),
        i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (s in l) if (l[s] && l[s].test(i)) {
            u.unshift(s);
            break
        }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }
    function H(e, t) {
        var n, r, o, i, a = {},
        s = 0,
        l = e.dataTypes.slice(),
        u = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (o in e.converters) a[o.toLowerCase()] = e.converters[o];
        for (; r = l[++s];) if ("*" !== r) {
            if ("*" !== u && u !== r) {
                if (o = a[u + " " + r] || a["* " + r], !o) for (n in a) if (i = n.split(" "), i[1] === r && (o = a[u + " " + i[0]] || a["* " + i[0]])) {
                    o === !0 ? o = a[n] : a[n] !== !0 && (r = i[0], l.splice(s--, 0, r));
                    break
                }
                if (o !== !0) if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: o ? c: "No conversion from " + u + " to " + r
                    }
                }
            }
            u = r
        }
        return {
            state: "success",
            data: t
        }
    }
    function O() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function M() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function q() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = lt.now()
    }
    function F(e, t) {
        lt.each(t,
        function(t, n) {
            for (var r = (ir[t] || []).concat(ir["*"]), o = 0, i = r.length; i > o; o++) if (r[o].call(e, t, n)) return
        })
    }
    function R(e, t, n) {
        var r, o, i = 0,
        a = or.length,
        s = lt.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (o) return ! 1;
            for (var t = Zn || q(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(i);
            return s.notifyWith(e, [u, i, n]),
            1 > i && l ? n: (s.resolveWith(e, [u]), !1)
        },
        u = s.promise({
            elem: e,
            props: lt.extend({},
            t),
            opts: lt.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = lt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? u.tweens.length: 0;
                if (o) return this;
                for (o = !0; r > n; n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }),
        c = u.props;
        for (B(c, u.opts.specialEasing); a > i; i++) if (r = or[i].call(u, e, c, u.opts)) return r;
        return F(u, c),
        lt.isFunction(u.opts.start) && u.opts.start.call(e, u),
        lt.fx.timer(lt.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function B(e, t) {
        var n, r, o, i, a;
        for (o in e) if (r = lt.camelCase(o), i = t[r], n = e[o], lt.isArray(n) && (i = n[1], n = e[o] = n[0]), o !== r && (e[r] = n, delete e[o]), a = lt.cssHooks[r], a && "expand" in a) {
            n = a.expand(n),
            delete e[r];
            for (o in n) o in e || (e[o] = n[o], t[o] = i)
        } else t[r] = i
    }
    function P(e, t, n) {
        var r, o, i, a, s, l, u, c, f, p = this,
        d = e.style,
        h = {},
        m = [],
        g = e.nodeType && T(e);
        n.queue || (c = lt._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--,
                lt.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", lt.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (o in t) if (a = t[o], tr.exec(a)) {
            if (delete t[o], l = l || "toggle" === a, a === (g ? "hide": "show")) continue;
            m.push(o)
        }
        if (i = m.length) {
            s = lt._data(e, "fxshow") || lt._data(e, "fxshow", {}),
            "hidden" in s && (g = s.hidden),
            l && (s.hidden = !g),
            g ? lt(e).show() : p.done(function() {
                lt(e).hide()
            }),
            p.done(function() {
                var t;
                lt._removeData(e, "fxshow");
                for (t in h) lt.style(e, t, h[t])
            });
            for (o = 0; i > o; o++) r = m[o],
            u = p.createTween(r, g ? s[r] : 0),
            h[r] = s[r] || lt.style(e, r),
            r in s || (s[r] = u.start, g && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function I(e, t, n, r, o) {
        return new I.prototype.init(e, t, n, r, o)
    }
    function W(e, t) {
        var n, r = {
            height: e
        },
        o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Cn[o],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function z(e) {
        return lt.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X, V, U = typeof t,
    J = e.document,
    Y = e.location,
    G = e.jQuery,
    Q = e.$,
    K = {},
    Z = [],
    et = "1.9.1",
    tt = Z.concat,
    nt = Z.push,
    rt = Z.slice,
    ot = Z.indexOf,
    it = K.toString,
    at = K.hasOwnProperty,
    st = et.trim,
    lt = function(e, t) {
        return new lt.fn.init(e, t, V)
    },
    ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ct = /\S+/g,
    ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ht = /^[\],:{}\s]*$/,
    mt = /(?:^|:|,)(?:\s*\[)+/g,
    gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    vt = /^-ms-/,
    bt = /-([\da-z])/gi,
    xt = function(e, t) {
        return t.toUpperCase()
    },
    wt = function(e) { (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (Tt(), lt.ready())
    },
    Tt = function() {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (J.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
    };
    lt.fn = lt.prototype = {
        jquery: et,
        constructor: lt,
        init: function(e, n, r) {
            var o, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !o || !o[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (o[1]) {
                    if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n: J, !0)), dt.test(o[1]) && lt.isPlainObject(n)) for (o in n) lt.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if (i = J.getElementById(o[2]), i && i.parentNode) {
                    if (i.id !== o[2]) return r.find(e);
                    this.length = 1,
                    this[0] = i
                }
                return this.context = J,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return rt.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = lt.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return lt.each(this, e, t)
        },
        ready: function(e) {
            return lt.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(lt.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: nt,
        sort: [].sort,
        splice: [].splice
    },
    lt.fn.init.prototype = lt.fn,
    lt.extend = lt.fn.extend = function() {
        var e, n, r, o, i, a, s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        l = 2), "object" == typeof s || lt.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (i = arguments[l])) for (o in i) e = s[o],
        r = i[o],
        s !== r && (c && r && (lt.isPlainObject(r) || (n = lt.isArray(r))) ? (n ? (n = !1, a = e && lt.isArray(e) ? e: []) : a = e && lt.isPlainObject(e) ? e: {},
        s[o] = lt.extend(c, a, r)) : r !== t && (s[o] = r));
        return s
    },
    lt.extend({
        noConflict: function(t) {
            return e.$ === lt && (e.$ = Q),
            t && e.jQuery === lt && (e.jQuery = G),
            lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? lt.readyWait++:lt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--lt.readyWait: !lt.isReady) {
                if (!J.body) return setTimeout(lt.ready);
                lt.isReady = !0,
                e !== !0 && --lt.readyWait > 0 || (X.resolveWith(J, [lt]), lt.fn.trigger && lt(J).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === lt.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === lt.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? K[it.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || J;
            var r = dt.exec(e),
            o = !n && [];
            return r ? [t.createElement(r[1])] : (r = lt.buildFragment([e], t, o), o && lt(o).remove(), lt.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = lt.trim(n), n && ht.test(n.replace(gt, "@").replace(yt, "]").replace(mt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, o;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (o = new DOMParser, r = o.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(i) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && lt.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(vt, "ms-").replace(bt, xt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var o, i = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                else for (i in e) if (o = t.apply(e[i], r), o === !1) break
            } else if (s) for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
            else for (i in e) if (o = t.call(e[i], i, e[i]), o === !1) break;
            return e
        },
        trim: st && !st.call("﻿ ") ?
        function(e) {
            return null == e ? "": st.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ft, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? lt.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ot) return ot.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            o = e.length,
            i = 0;
            if ("number" == typeof r) for (; r > i; i++) e[o++] = n[i];
            else for (; n[i] !== t;) e[o++] = n[i++];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            var r, o = [],
            i = 0,
            a = e.length;
            for (n = !!n; a > i; i++) r = !!t(e[i], i),
            n !== r && o.push(e[i]);
            return o
        },
        map: function(e, t, r) {
            var o, i = 0,
            a = e.length,
            s = n(e),
            l = [];
            if (s) for (; a > i; i++) o = t(e[i], i, r),
            null != o && (l[l.length] = o);
            else for (i in e) o = t(e[i], i, r),
            null != o && (l[l.length] = o);
            return tt.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, o, i;
            return "string" == typeof n && (i = e[n], n = e, e = i),
            lt.isFunction(e) ? (r = rt.call(arguments, 2), o = function() {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            },
            o.guid = e.guid = e.guid || lt.guid++, o) : t
        },
        access: function(e, n, r, o, i, a, s) {
            var l = 0,
            u = e.length,
            c = null == r;
            if ("object" === lt.type(r)) {
                i = !0;
                for (l in r) lt.access(e, n, l, r[l], !0, a, s)
            } else if (o !== t && (i = !0, lt.isFunction(o) || (s = !0), c && (s ? (n.call(e, o), n = null) : (c = n, n = function(e, t, n) {
                return c.call(lt(e), n)
            })), n)) for (; u > l; l++) n(e[l], r, s ? o: o.call(e[l], l, n(e[l], r)));
            return i ? e: c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    lt.ready.promise = function(t) {
        if (!X) if (X = lt.Deferred(), "complete" === J.readyState) setTimeout(lt.ready);
        else if (J.addEventListener) J.addEventListener("DOMContentLoaded", wt, !1),
        e.addEventListener("load", wt, !1);
        else {
            J.attachEvent("onreadystatechange", wt),
            e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && J.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function o() {
                if (!lt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(o, 50)
                    }
                    Tt(),
                    lt.ready()
                }
            } ()
        }
        return X.promise(t)
    },
    lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }),
    V = lt(J);
    var _t = {};
    lt.Callbacks = function(e) {
        e = "string" == typeof e ? _t[e] || r(e) : lt.extend({},
        e);
        var n, o, i, a, s, l, u = [],
        c = !e.once && [],
        f = function(t) {
            for (o = e.memory && t, i = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++) if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                o = !1;
                break
            }
            n = !1,
            u && (c ? c.length && f(c.shift()) : o ? u = [] : p.disable())
        },
        p = {
            add: function() {
                if (u) {
                    var t = u.length; !
                    function r(t) {
                        lt.each(t,
                        function(t, n) {
                            var o = lt.type(n);
                            "function" === o ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== o && r(n)
                        })
                    } (arguments),
                    n ? a = u.length: o && (l = t, f(o))
                }
                return this
            },
            remove: function() {
                return u && lt.each(arguments,
                function(e, t) {
                    for (var r; (r = lt.inArray(t, u, r)) > -1;) u.splice(r, 1),
                    n && (a >= r && a--, s >= r && s--)
                }),
                this
            },
            has: function(e) {
                return e ? lt.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                this
            },
            disable: function() {
                return u = c = o = t,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return c = t,
                o || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !u || i && !c || (n ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    lt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return lt.Deferred(function(n) {
                        lt.each(t,
                        function(t, i) {
                            var a = i[0],
                            s = lt.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? lt.extend(e, r) : r
                }
            },
            o = {};
            return r.pipe = r.then,
            lt.each(t,
            function(e, i) {
                var a = i[2],
                s = i[3];
                r[i[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r: this, arguments),
                    this
                },
                o[i[0] + "With"] = a.fireWith
            }),
            r.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, r, o = 0,
            i = rt.call(arguments),
            a = i.length,
            s = 1 !== a || e && lt.isFunction(e.promise) ? a: 0,
            l = 1 === s ? e: lt.Deferred(),
            u = function(e, n, r) {
                return function(o) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? rt.call(arguments) : o,
                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > o; o++) i[o] && lt.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(l.reject).progress(u(o, n, t)) : --s;
            return s || l.resolveWith(r, i),
            l.promise()
        }
    }),
    lt.support = function() {
        var t, n, r, o, i, a, s, l, u, c, f = J.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        i = J.createElement("select"),
        s = i.appendChild(J.createElement("option")),
        o = f.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!o.value,
            optSelected: s.selected,
            enctype: !!J.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === J.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        i.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch(p) {
            t.deleteExpando = !1
        }
        o = J.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        a = J.createDocumentFragment(),
        a.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        f.attachEvent && (f.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(l = "on" + c, "t"),
        t[c + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        return f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === f.style.backgroundClip,
        lt(function() {
            var n, r, o, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = f.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(J.createElement("div")), r.style.cssText = f.style.cssText = i, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== U && (f.innerHTML = "", f.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = o = r = null)
        }),
        n = i = a = s = r = o = null,
        t
    } ();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Nt = /([A-Z])/g;
    lt.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return o(e, t, n)
        },
        removeData: function(e, t) {
            return i(e, t)
        },
        _data: function(e, t, n) {
            return o(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return i(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    lt.fn.extend({
        data: function(e, n) {
            var r, o, i = this[0],
            s = 0,
            l = null;
            if (e === t) {
                if (this.length && (l = lt.data(i), 1 === i.nodeType && !lt._data(i, "parsedAttrs"))) {
                    for (r = i.attributes; r.length > s; s++) o = r[s].name,
                    o.indexOf("data-") || (o = lt.camelCase(o.slice(5)), a(i, o, l[o]));
                    lt._data(i, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function() {
                lt.data(this, e)
            }) : lt.access(this,
            function(n) {
                return n === t ? i ? a(i, e, lt.data(i, e)) : null: (this.each(function() {
                    lt.data(this, e, n)
                }), t)
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                lt.removeData(this, e)
            })
        }
    }),
    lt.extend({
        queue: function(e, n, r) {
            var o;
            return e ? (n = (n || "fx") + "queue", o = lt._data(e, n), r && (!o || lt.isArray(r) ? o = lt._data(e, n, lt.makeArray(r)) : o.push(r)), o || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = lt.queue(e, t),
            r = n.length,
            o = n.shift(),
            i = lt._queueHooks(e, t),
            a = function() {
                lt.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), r--),
            i.cur = o,
            o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return lt._data(e, n) || lt._data(e, n, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(e, t + "queue"),
                    lt._removeData(e, n)
                })
            })
        }
    }),
    lt.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? lt.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = lt.queue(this, e, n);
                lt._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                lt.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = lt.fx ? lt.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, o = 1,
            i = lt.Deferred(),
            a = this,
            s = this.length,
            l = function() {--o || i.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = lt._data(a[s], e + "queueHooks"),
            r && r.empty && (o++, r.empty.add(l));
            return l(),
            i.promise(n)
        }
    });
    var Et, kt, St = /[\t\r\n]/g,
    At = /\r/g,
    jt = /^(?:input|select|textarea|button|object)$/i,
    $t = /^(?:a|area)$/i,
    Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Lt = /^(?:checked|selected)$/i,
    Ht = lt.support.getSetAttribute,
    Ot = lt.support.input;
    lt.fn.extend({
        attr: function(e, t) {
            return lt.access(this, lt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                lt.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return lt.access(this, lt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = lt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, o, i, a = 0,
            s = this.length,
            l = "string" == typeof e && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
                for (i = 0; o = t[i++];) 0 > r.indexOf(" " + o + " ") && (r += o + " ");
                n.className = lt.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a = 0,
            s = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
                for (i = 0; o = t[i++];) for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                n.className = e ? lt.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return this.each(lt.isFunction(e) ?
            function(n) {
                lt(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var o, i = 0,
                a = lt(this), s = t, l = e.match(ct) || []; o = l[i++];) s = r ? s: !a.hasClass(o),
                a[s ? "addClass": "removeClass"](o);
                else(n === U || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": lt._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, o, i = this[0];
            return arguments.length ? (o = lt.isFunction(e), this.each(function(n) {
                var i, a = lt(this);
                1 === this.nodeType && (i = o ? e.call(this, n, a.val()) : e, null == i ? i = "": "number" == typeof i ? i += "": lt.isArray(i) && (i = lt.map(i,
                function(e) {
                    return null == e ? "": e + ""
                })), r = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, i, "value") !== t || (this.value = i))
            })) : i ? (r = lt.valHooks[i.type] || lt.valHooks[i.nodeName.toLowerCase()], r && "get" in r && (n = r.get(i, "value")) !== t ? n: (n = i.value, "string" == typeof n ? n.replace(At, "") : null == n ? "": n)) : void 0
        }
    }),
    lt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    o = e.selectedIndex,
                    i = "select-one" === e.type || 0 > o,
                    a = i ? null: [], s = i ? o + 1 : r.length, l = 0 > o ? s: i ? o: 0; s > l; l++) if (n = r[l], !(!n.selected && l !== o || (lt.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
                        if (t = lt(n).val(), i) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = lt.makeArray(t);
                    return lt(e).find("option").each(function() {
                        this.selected = lt.inArray(lt(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var o, i, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === U ? lt.prop(e, n, r) : (i = 1 !== s || !lt.isXMLDoc(e), i && (n = n.toLowerCase(), o = lt.attrHooks[n] || (Dt.test(n) ? kt: Et)), r === t ? o && i && "get" in o && null !== (a = o.get(e, n)) ? a: (typeof e.getAttribute !== U && (a = e.getAttribute(n)), null == a ? t: a) : null !== r ? o && i && "set" in o && (a = o.set(e, r, n)) !== t ? a: (e.setAttribute(n, r + ""), r) : (lt.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
            i = t && t.match(ct);
            if (i && 1 === e.nodeType) for (; n = i[o++];) r = lt.propFix[n] || n,
            Dt.test(n) ? !Ht && Lt.test(n) ? e[lt.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : lt.attr(e, n, ""),
            e.removeAttribute(Ht ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },

        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var o, i, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !lt.isXMLDoc(e), a && (n = lt.propFix[n] || n, i = lt.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o: e[n] = r: i && "get" in i && null !== (o = i.get(e, n)) ? o: e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : jt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    kt = {
        get: function(e, n) {
            var r = lt.prop(e, n),
            o = "boolean" == typeof r && e.getAttribute(n),
            i = "boolean" == typeof r ? Ot && Ht ? null != o: Lt.test(n) ? e[lt.camelCase("default-" + n)] : !!o: e.getAttributeNode(n);
            return i && i.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? lt.removeAttr(e, n) : Ot && Ht || !Lt.test(n) ? e.setAttribute(!Ht && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    Ot && Ht || (lt.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return lt.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, n, r) {
            return lt.nodeName(e, "input") ? (e.defaultValue = n, t) : Et && Et.set(e, n, r)
        }
    }),
    Ht || (Et = lt.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var o = e.getAttributeNode(r);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(r)),
            o.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    lt.attrHooks.contenteditable = {
        get: Et.get,
        set: function(e, t, n) {
            Et.set(e, "" === t ? !1 : t, n)
        }
    },
    lt.each(["width", "height"],
    function(e, n) {
        lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })),
    lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"],
    function(e, n) {
        lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), lt.each(["href", "src"],
    function(e, t) {
        lt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    lt.support.style || (lt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    lt.support.enctype || (lt.propFix.enctype = "encoding"),
    lt.support.checkOn || lt.each(["radio", "checkbox"],
    function() {
        lt.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    lt.each(["radio", "checkbox"],
    function() {
        lt.valHooks[this] = lt.extend(lt.valHooks[this], {
            set: function(e, n) {
                return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
            }
        })
    });
    var Mt = /^(?:input|select|textarea)$/i,
    qt = /^key/,
    Ft = /^(?:mouse|contextmenu)|click/,
    Rt = /^(?:focusinfocus|focusoutblur)$/,
    Bt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
        global: {},
        add: function(e, n, r, o, i) {
            var a, s, l, u, c, f, p, d, h, m, g, y = lt._data(e);
            if (y) {
                for (r.handler && (u = r, r = u.handler, i = u.selector), r.guid || (r.guid = lt.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof lt === U || e && lt.event.triggered === e.type ? t: lt.event.dispatch.apply(f.elem, arguments)
                },
                f.elem = e), n = (n || "").match(ct) || [""], l = n.length; l--;) a = Bt.exec(n[l]) || [],
                h = g = a[1],
                m = (a[2] || "").split(".").sort(),
                c = lt.event.special[h] || {},
                h = (i ? c.delegateType: c.bindType) || h,
                c = lt.event.special[h] || {},
                p = lt.extend({
                    type: h,
                    origType: g,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: i,
                    needsContext: i && lt.expr.match.needsContext.test(i),
                    namespace: m.join(".")
                },
                u),
                (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))),
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
                i ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                lt.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, f, p, d, h, m, g = lt.hasData(e) && lt._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ct) || [""], u = t.length; u--;) if (s = Bt.exec(t[u]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = lt.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = p.length; i--;) a = p[i],
                    !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(i, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    l && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || lt.removeEvent(e, d, g.handle), delete c[d])
                } else for (d in c) lt.event.remove(e, d + t[u], n, r, !0);
                lt.isEmptyObject(c) && (delete g.handle, lt._removeData(e, "events"))
            }
        },
        trigger: function(n, r, o, i) {
            var a, s, l, u, c, f, p, d = [o || J],
            h = at.call(n, "type") ? n.type: n,
            m = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !Rt.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[lt.expando] ? n: new lt.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), r = null == r ? [n] : lt.makeArray(r, [n]), c = lt.event.special[h] || {},
            i || !c.trigger || c.trigger.apply(o, r) !== !1)) {
                if (!i && !c.noBubble && !lt.isWindow(o)) {
                    for (u = c.delegateType || h, Rt.test(u + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l),
                    f = l;
                    f === (o.ownerDocument || J) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (l = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? u: c.bindType || h,
                a = (lt._data(l, "events") || {})[n.type] && lt._data(l, "handle"),
                a && a.apply(l, r),
                a = s && l[s],
                a && lt.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !(i || n.isDefaultPrevented() || c._default && c._default.apply(o.ownerDocument, r) !== !1 || "click" === h && lt.nodeName(o, "a") || !lt.acceptData(o) || !s || !o[h] || lt.isWindow(o))) {
                    f = o[s],
                    f && (o[s] = null),
                    lt.event.triggered = h;
                    try {
                        o[h]()
                    } catch(g) {}
                    lt.event.triggered = t,
                    f && (o[s] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = lt.event.fix(e);
            var n, r, o, i, a, s = [],
            l = rt.call(arguments),
            u = (lt._data(this, "events") || {})[e.type] || [],
            c = lt.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = lt.event.handlers.call(this, e, u), n = 0; (i = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, a = 0; (o = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((lt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, o, i, a, s = [],
            l = n.delegateCount,
            u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (i = [], a = 0; l > a; a++) o = n[a],
                r = o.selector + " ",
                i[r] === t && (i[r] = o.needsContext ? lt(r, this).index(u) >= 0 : lt.find(r, this, null, [u]).length),
                i[r] && i.push(o);
                i.length && s.push({
                    elem: u,
                    handlers: i
                })
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[lt.expando]) return e;
            var t, n, r, o = e.type,
            i = e,
            a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ft.test(o) ? this.mouseHooks: qt.test(o) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new lt.Event(i), t = r.length; t--;) n = r[t],
            e[n] = i[n];
            return e.target || (e.target = i.srcElement || J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, o, i, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || J, i = o.documentElement, r = o.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== J.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === J.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = lt.extend(new lt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? lt.event.trigger(o, null, t) : lt.event.dispatch.call(t, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    lt.removeEvent = J.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === U && (e[r] = null), e.detachEvent(r, n))
    },
    lt.Event = function(e, n) {
        return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: u) : this.type = e, n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, t) : new lt.Event(e, n)
    },
    lt.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l,
            this.stopPropagation()
        }
    },
    lt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        lt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                o = e.relatedTarget,
                i = e.handleObj;
                return (!o || o !== r && !lt.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    lt.support.submitBubbles || (lt.event.special.submit = {
        setup: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form: t;
                r && !lt._data(r, "submitBubbles") && (lt.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), lt._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), t)
        }
    }),
    lt.support.changeBubbles || (lt.event.special.change = {
        setup: function() {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), lt.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                lt.event.simulate("change", this, e, !0)
            })), !1) : (lt.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Mt.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
                }), lt._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return lt.event.remove(this, "._change"),
            !Mt.test(this.nodeName)
        }
    }),
    lt.support.focusinBubbles || lt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        };
        lt.event.special[t] = {
            setup: function() {
                0 === n++&&J.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && J.removeEventListener(e, r, !0)
            }
        }
    }),
    lt.fn.extend({
        on: function(e, n, r, o, i) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], i);
                return this
            }
            if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, r = n, n = t)), o === !1) o = u;
            else if (!o) return this;
            return 1 === i && (s = o, o = function(e) {
                return lt().off(e),
                s.apply(this, arguments)
            },
            o.guid = s.guid || (s.guid = lt.guid++)),
            this.each(function() {
                lt.event.add(this, e, o, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj,
            lt(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace: o.origType, o.selector, o.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, n, e[i]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = u),
            this.each(function() {
                lt.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                lt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? lt.event.trigger(e, n, r, !0) : t
        }
    }),
    function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function o(e) {
            return e[R] = !0,
            e
        }
        function i(e) {
            var t = $.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var o, i, a, s, l, u, c, d, h, m;
            if ((t ? t.ownerDocument || t: B) !== $ && j(t), t = t || $, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!L && !r) {
                if (o = mt.exec(e)) if (a = o[1]) {
                    if (9 === s) {
                        if (i = t.getElementById(a), !i || !i.parentNode) return n;
                        if (i.id === a) return n.push(i),
                        n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && q(t, i) && i.id === a) return n.push(i),
                    n
                } else {
                    if (o[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = o[3]) && P.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (P.qsa && !H.test(e)) {
                    if (c = !0, d = R, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                        h = dt.test(e) && t.parentNode || t,
                        m = u.join(",")
                    }
                    if (m) try {
                        return Q.apply(n, K.call(h.querySelectorAll(m), 0)),
                        n
                    } catch(g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }
        function s(e, t) {
            var n = t && e,
            r = n && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return o(function(t) {
                return t = +t,
                o(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function f(e, t) {
            var n, r, o, i, s, l, u, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) { (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])),
                n = !1,
                (r = ut.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (i in C.filter) ! (r = pt[i].exec(s)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: i,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : X(e, l).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            o = n && "parentNode" === r,
            i = W++;
            return t.first ?
            function(t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || o) return e(t, n, i)
            }: function(t, n, a) {
                var s, l, u, c = I + " " + i;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || o) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || o) if (u = t[R] || (t[R] = {}), (l = u[r]) && l[0] === c) {
                    if ((s = l[1]) === !0 || s === _) return s === !0
                } else if (l = u[r] = [c], l[1] = e(t, n, a) || _, l[1] === !0) return ! 0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var o = e.length; o--;) if (!e[o](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));
            return a
        }
        function g(e, t, n, r, i, a) {
            return r && !r[R] && (r = g(r)),
            i && !i[R] && (i = g(i, a)),
            o(function(o, a, s, l) {
                var u, c, f, p = [],
                d = [],
                h = a.length,
                g = o || b(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !o && t ? g: m(g, p, e, s, l),
                v = n ? i || (o ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, l), r) for (u = m(v, d), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(y[c] = f);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (u = i ? Z.call(o, f) : p[c]) > -1 && (o[u] = !(a[u] = f))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v),
                i ? i(null, a, v, l) : Q.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, o = e.length,
            i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, l = d(function(e) {
                return e === t
            },
            a, !0), u = d(function(e) {
                return Z.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! i && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
            }]; o > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                    for (r = ++s; o > r && !C.relative[e[r].type]; r++);
                    return g(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
            r = t.length > 0,
            i = e.length > 0,
            s = function(o, s, l, u, c) {
                var f, p, d, h = [],
                g = 0,
                y = "0",
                v = o && [],
                b = null != c,
                x = A,
                w = o || i && C.find.TAG("*", c && s.parentNode || s),
                T = I += null == x ? 1 : Math.random() || .1;
                for (b && (A = s !== $ && s, _ = n); null != (f = w[y]); y++) {
                    if (i && f) {
                        for (p = 0; d = e[p++];) if (d(f, s, l)) {
                            u.push(f);
                            break
                        }
                        b && (I = T, _ = ++n)
                    }
                    r && ((f = !d && f) && g--, o && v.push(f))
                }
                if (g += y, r && y !== g) {
                    for (p = 0; d = t[p++];) d(v, h, s, l);
                    if (o) {
                        if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(u));
                        h = m(h)
                    }
                    Q.apply(u, h),
                    b && !o && h.length > 0 && g + t.length > 1 && a.uniqueSort(u)
                }
                return b && (I = T, A = x),
                v
            };
            return r ? o(s) : s
        }
        function b(e, t, n) {
            for (var r = 0,
            o = t.length; o > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var o, i, a, s, l, u = f(e);
            if (!r && 1 === u.length) {
                if (i = u[0] = u[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && !L && C.relative[i[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                    e = e.slice(i.shift().value.length)
                }
                for (o = pt.needsContext.test(e) ? 0 : i.length; o--&&(a = i[o], !C.relative[s = a.type]);) if ((l = C.find[s]) && (r = l(a.matches[0].replace(xt, wt), dt.test(i[0].type) && t.parentNode || t))) {
                    if (i.splice(o, 1), e = r.length && p(i), !e) return Q.apply(n, K.call(r, 0)),
                    n;
                    break
                }
            }
            return k(e, u)(r, t, L, n, dt.test(e)),
            n
        }
        function w() {}
        var T, _, C, N, E, k, S, A, j, $, D, L, H, O, M, q, F, R = "sizzle" + -new Date,
        B = e.document,
        P = {},
        I = 0,
        W = 0,
        z = r(),
        X = r(),
        V = r(),
        U = typeof t,
        J = 1 << 31,
        Y = [],
        G = Y.pop,
        Q = Y.push,
        K = Y.slice,
        Z = Y.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        et = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = tt.replace("w", "w#"),
        rt = "([*^$|!~]?=)",
        ot = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
        it = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
        at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        st = RegExp("^" + et + "*," + et + "*"),
        ut = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
        ct = RegExp(it),
        ft = RegExp("^" + nt + "$"),
        pt = {
            ID: RegExp("^#(" + tt + ")"),
            CLASS: RegExp("^\\.(" + tt + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ot),
            PSEUDO: RegExp("^" + it),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /[\x20\t\r\n\f]*[+~]/,
        ht = /^[^{]+\{\s*\[native code/,
        mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        gt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        vt = /'|\\/g,
        bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        wt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            K.call(B.documentElement.childNodes, 0)[0].nodeType
        } catch(Tt) {
            K = function(e) {
                for (var t, n = []; t = this[e++];) n.push(t);
                return n
            }
        }
        E = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        j = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e: B;
            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, D = r.documentElement, L = E(r), P.tagNameNoComments = i(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), P.attributes = i(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), P.getByClassName = i(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), P.getByName = i(function(e) {
                e.id = R + 0,
                e.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>",
                D.insertBefore(e, D.firstChild);
                var t = r.getElementsByName && r.getElementsByName(R).length === 2 + r.getElementsByName(R + 0).length;
                return P.getIdNotName = !r.getElementById(R),
                D.removeChild(e),
                t
            }), C.attrHandle = i(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== U && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            P.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && !L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== U && !L) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== U && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = P.tagNameNoComments ?
            function(e, n) {
                return typeof n.getElementsByTagName !== U ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                o = 0,
                i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            },
            C.find.NAME = P.getByName &&
            function(e, n) {
                return typeof n.getElementsByName !== U ? n.getElementsByName(name) : t
            },
            C.find.CLASS = P.getByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName === U || L ? t: n.getElementsByClassName(e)
            },
            O = [], H = [":focus"], (P.qsa = n(r.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || H.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || H.push(":checked")
            }), i(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && H.push("[*^$]=" + et + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            })), (P.matchesSelector = n(M = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                P.disconnectedMatch = M.call(e, "div"),
                M.call(e, "[s!='']:x"),
                O.push("!=", it)
            }), H = RegExp(H.join("|")), O = RegExp(O.join("|")), q = n(D.contains) || D.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            F = D.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (S = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || q(B, e) ? -1 : t === r || q(B, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, o = 0,
                i = e.parentNode,
                a = t.parentNode,
                l = [e],
                u = [t];
                if (e === t) return S = !0,
                0;
                if (!i || !a) return e === r ? -1 : t === r ? 1 : i ? -1 : a ? 1 : 0;
                if (i === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[o] === u[o];) o++;
                return o ? s(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
            },
            S = !1, [0, 0].sort(F), P.detectDuplicates = S, $) : $
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== $ && j(e), t = t.replace(bt, "='$1']"), !(!P.matchesSelector || L || O && O.test(t) || H.test(t))) try {
                var n = M.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(r) {}
            return a(t, $, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && j(e),
            q(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== $ && j(e),
            L || (t = t.toLowerCase()),
            (n = C.attrHandle[t]) ? n(e) : L || P.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            o = 0;
            if (S = !P.detectDuplicates, e.sort(F), S) {
                for (; t = e[r]; r++) t === e[r - 1] && (o = n.push(r));
                for (; o--;) e.splice(n[o], 1)
            }
            return e
        },
        N = a.getText = function(e) {
            var t, n = "",
            r = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[r]; r++) n += N(t);
            return n
        },
        C = a.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: pt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, wt),
                    e[3] = (e[4] || e[5] || "").replace(xt, wt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(xt, wt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var o = a.attr(r, e);
                        return null == o ? "!=" === t: t ? (o += "", "=" === t ? o === n: "!=" === t ? o !== n: "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice( - n.length) === n: "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === o ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var u, c, f, p, d, h, m = i !== a ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !l && !s;
                        if (g) {
                            if (i) {
                                for (; m;) {
                                    for (f = t; f = f[m];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? g.firstChild: g.lastChild], a && v) {
                                for (c = g[R] || (g[R] = {}), u = c[e] || [], d = u[0] === I && u[1], p = u[0] === I && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [I, d, p];
                                    break
                                }
                            } else if (v && (u = (t[R] || (t[R] = {}))[e]) && u[0] === I) p = u[1];
                            else for (; (f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[R] || (f[R] = {}))[e] = [I, p]), f !== t)););
                            return p -= o,
                            p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[R] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var o, i = r(e, t), a = i.length; a--;) o = Z.call(e, i[a]),
                        e[o] = !(n[o] = i[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [],
                    n = [],
                    r = k(e.replace(at, "$1"));
                    return r[R] ? o(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, o, i) {
                        return t[0] = e,
                        r(t, null, i, n),
                        !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: o(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(xt, wt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = L ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return yt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[T] = l(T);
        for (T in {
            submit: !0,
            reset: !0
        }) C.pseudos[T] = u(T);
        k = a.compile = function(e, t) {
            var n, r = [],
            o = [],
            i = V[e + " "];
            if (!i) {
                for (t || (t = f(e)), n = t.length; n--;) i = y(t[n]),
                i[R] ? r.push(i) : o.push(i);
                i = V(e, v(o, r))
            }
            return i
        },
        C.pseudos.nth = C.pseudos.eq,
        C.filters = w.prototype = C.pseudos,
        C.setFilters = new w,
        j(),
        a.attr = lt.attr,
        lt.find = a,
        lt.expr = a.selectors,
        lt.expr[":"] = lt.expr.pseudos,
        lt.unique = a.uniqueSort,
        lt.text = a.getText,
        lt.isXMLDoc = a.isXML,
        lt.contains = a.contains
    } (e);
    var Pt = /Until$/,
    It = /^(?:parents|prev(?:Until|All))/,
    Wt = /^.[^:#\[\.,]*$/,
    zt = lt.expr.match.needsContext,
    Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    lt.fn.extend({
        find: function(e) {
            var t, n, r, o = this.length;
            if ("string" != typeof e) return r = this,
            this.pushStack(lt(e).filter(function() {
                for (t = 0; o > t; t++) if (lt.contains(r[t], this)) return ! 0
            }));
            for (n = [], t = 0; o > t; t++) lt.find(e, this[t], n);
            return n = this.pushStack(o > 1 ? lt.unique(n) : n),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = lt(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (lt.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? zt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0,
            o = this.length,
            i = [], a = zt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : lt.find.matchesSelector(n, e)) {
                    i.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(i.length > 1 ? lt.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e),
            r = lt.merge(this.get(), n);
            return this.pushStack(lt.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    lt.fn.andSelf = lt.fn.addBack,
    lt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return lt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return lt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return lt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return lt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return lt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return lt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return lt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return lt.sibling(e.firstChild)
        },
        contents: function(e) {
            return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: lt.merge([], e.childNodes)
        }
    },
    function(e, t) {
        lt.fn[e] = function(n, r) {
            var o = lt.map(this, t, n);
            return Pt.test(e) || (r = n),
            r && "string" == typeof r && (o = lt.filter(r, o)),
            o = this.length > 1 && !Xt[e] ? lt.unique(o) : o,
            this.length > 1 && It.test(e) && (o = o.reverse()),
            this.pushStack(o)
        }
    }),
    lt.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? lt.find.matchesSelector(t[0], e) ? [t[0]] : [] : lt.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var o = [], i = e[n]; i && 9 !== i.nodeType && (r === t || 1 !== i.nodeType || !lt(i).is(r));) 1 === i.nodeType && o.push(i),
            i = i[n];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ut = / jQuery\d+="(?:null|\d+)"/g,
    Jt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Yt = /^\s+/,
    Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Qt = /<([\w:]+)/,
    Kt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    on = /^true\/(.*)/,
    an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ln = p(J),
    un = ln.appendChild(J.createElement("div"));
    sn.optgroup = sn.option,
    sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
    sn.th = sn.td,
    lt.fn.extend({
        text: function(e) {
            return lt.access(this,
            function(e) {
                return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(lt.isFunction(e) ?
            function(t) {
                lt(this).wrapInner(e.call(this, t))
            }: function() {
                var t = lt(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = lt.isFunction(e);
            return this.each(function(n) {
                lt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || lt.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || lt.cleanData(b(n)), n.parentNode && (t && lt.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && lt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return lt.clone(this, e, t)
            })
        },
        html: function(e) {
            return lt.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                o = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ut, "") : t;
                if (! ("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Jt.test(e) || !lt.support.leadingWhitespace && Yt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; o > r; r++) n = this[r] || {},
                        1 === n.nodeType && (lt.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(i) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = lt.isFunction(e);
            return t || "string" == typeof e || (e = lt(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode;
                n && (lt(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = tt.apply([], e);
            var o, i, a, s, l, u, c = 0,
            f = this.length,
            p = this,
            g = f - 1,
            y = e[0],
            v = lt.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || lt.support.checkClone) && nn.test(y)) return this.each(function(o) {
                var i = p.eq(o);
                v && (e[0] = y.call(this, o, n ? i.html() : t)),
                i.domManip(e, n, r)
            });
            if (f && (u = lt.buildFragment(e, this[0].ownerDocument, !1, this), o = u.firstChild, 1 === u.childNodes.length && (u = o), o)) {
                for (n = n && lt.nodeName(o, "tr"), s = lt.map(b(u, "script"), h), a = s.length; f > c; c++) i = u,
                c !== g && (i = lt.clone(i, !0, !0), a && lt.merge(s, b(i, "script"))),
                r.call(n && lt.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], i, c);
                if (a) for (l = s[s.length - 1].ownerDocument, lt.map(s, m), c = 0; a > c; c++) i = s[c],
                rn.test(i.type || "") && !lt._data(i, "globalEval") && lt.contains(l, i) && (i.src ? lt.ajax({
                    url: i.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : lt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                u = o = null
            }
            return this
        }
    }),
    lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        lt.fn[e] = function(e) {
            for (var n, r = 0,
            o = [], i = lt(e), a = i.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            lt(i[r])[t](n),
            nt.apply(o, n.get());
            return this.pushStack(o)
        }
    }),
    lt.extend({
        clone: function(e, t, n) {
            var r, o, i, a, s, l = lt.contains(e.ownerDocument, e);
            if (lt.support.html5Clone || lt.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(i = un.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e))) for (r = b(i), s = b(e), a = 0; null != (o = s[a]); ++a) r[a] && v(o, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(i), a = 0; null != (o = s[a]); a++) y(o, r[a]);
            else y(e, i);
            return r = b(i, "script"),
            r.length > 0 && g(r, !l && b(e, "script")),
            r = s = o = null,
            i
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, l, u, c, f = e.length,
            d = p(t), h = [], m = 0; f > m; m++) if (i = e[m], i || 0 === i) if ("object" === lt.type(i)) lt.merge(h, i.nodeType ? [i] : i);
            else if (Zt.test(i)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Qt.exec(i) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + i.replace(Gt, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!lt.support.leadingWhitespace && Yt.test(i) && h.push(t.createTextNode(Yt.exec(i)[0])), !lt.support.tbody) for (i = "table" !== l || Kt.test(i) ? "<table>" !== c[1] || Kt.test(i) ? 0 : s: s.firstChild, o = i && i.childNodes.length; o--;) lt.nodeName(u = i.childNodes[o], "tbody") && !u.childNodes.length && i.removeChild(u);
                for (lt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(i));
            for (s && d.removeChild(s), lt.support.appendChecked || lt.grep(b(h, "input"), x), m = 0; i = h[m++];) if ((!r || -1 === lt.inArray(i, r)) && (a = lt.contains(i.ownerDocument, i), s = b(d.appendChild(i), "script"), a && g(s), n)) for (o = 0; i = s[o++];) rn.test(i.type || "") && n.push(i);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, r, o, i, a = 0,
            s = lt.expando,
            l = lt.cache,
            u = lt.support.deleteExpando,
            c = lt.event.special; null != (n = e[a]); a++) if ((t || lt.acceptData(n)) && (o = n[s], i = o && l[o])) {
                if (i.events) for (r in i.events) c[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, i.handle);
                l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null, Z.push(o))
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i,
    hn = /opacity\s*=\s*([^)]*)/,
    mn = /^(top|right|bottom|left)$/,
    gn = /^(none|table(?!-c[ea]).+)/,
    yn = /^margin/,
    vn = RegExp("^(" + ut + ")(.*)$", "i"),
    bn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
    xn = RegExp("^([+-])=(" + ut + ")", "i"),
    wn = {
        BODY: "block"
    },
    Tn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    _n = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Cn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(e, n) {
            return lt.access(this,
            function(e, n, r) {
                var o, i, a = {},
                s = 0;
                if (lt.isArray(n)) {
                    for (i = fn(e), o = n.length; o > s; s++) a[n[s]] = lt.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? lt.style(e, n, r) : lt.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: T(this)) ? lt(this).show() : lt(this).hide()
            })
        }
    }),
    lt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, s, l = lt.camelCase(n),
                u = e.style;
                if (n = lt.cssProps[l] || (lt.cssProps[l] = w(u, l)), s = lt.cssHooks[n] || lt.cssHooks[l], r === t) return s && "get" in s && (i = s.get(e, !1, o)) !== t ? i: u[n];
                if (a = typeof r, "string" === a && (i = xn.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(lt.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || lt.cssNumber[l] || (r += "px"), lt.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, o)) === t))) try {
                    u[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, o) {
            var i, a, s, l = lt.camelCase(n);
            return n = lt.cssProps[l] || (lt.cssProps[l] = w(e.style, l)),
            s = lt.cssHooks[n] || lt.cssHooks[l],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = pn(e, n, o)),
            "normal" === a && n in _n && (a = _n[n]),
            "" === r || r ? (i = parseFloat(a), r === !0 || lt.isNumeric(i) ? i || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i],
            e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        }
    }),
    e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null)
    },
    pn = function(e, n, r) {
        var o, i, a, s = r || fn(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;
        return s && ("" !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, n)), bn.test(l) && yn.test(n) && (o = u.width, i = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = o, u.minWidth = i, u.maxWidth = a)),
        l
    }) : J.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle
    },
    pn = function(e, n, r) {
        var o, i, a, s = r || fn(e),
        l = s ? s[n] : t,
        u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        bn.test(l) && !mn.test(n) && (o = u.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em": l, l = u.pixelLeft + "px", u.left = o, a && (i.left = a)),
        "" === l ? "auto": l
    }),
    lt.each(["height", "width"],
    function(e, n) {
        lt.cssHooks[n] = {
            get: function(e, r, o) {
                return r ? 0 === e.offsetWidth && gn.test(lt.css(e, "display")) ? lt.swap(e, Tn,
                function() {
                    return E(e, n, o)
                }) : E(e, n, o) : t
            },
            set: function(e, t, r) {
                var o = r && fn(e);
                return C(e, t, r ? N(e, n, r, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            o = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            i = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === lt.trim(i.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(i) ? i.replace(dn, o) : i + " " + o)
        }
    }),
    lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? lt.swap(e, {
                    display: "inline-block"
                },
                pn, [e, "marginRight"]) : t
            }
        }),
        !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"],
        function(e, n) {
            lt.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = pn(e, n), bn.test(r) ? lt(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
    },
    lt.expr.filters.visible = function(e) {
        return ! lt.expr.filters.hidden(e)
    }),
    lt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        lt.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                o = {},
                i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Cn[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        yn.test(e) || (lt.cssHooks[e + t].set = C)
    });
    var En = /%20/g,
    kn = /\[\]$/,
    Sn = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    jn = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = lt.prop(this, "elements");
                return e ? lt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !lt(this).is(":disabled") && jn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = lt(this).val();
                return null == n ? null: lt.isArray(n) ? lt.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }),
    lt.param = function(e, n) {
        var r, o = [],
        i = function(e, t) {
            t = lt.isFunction(t) ? t() : null == t ? "": t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (r in e) A(r, e[r], n, i);
        return o.join("&").replace(En, "+")
    },
    lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        lt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    lt.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var $n, Dn, Ln = lt.now(),
    Hn = /\?/,
    On = /#.*$/,
    Mn = /([?&])_=[^&]*/,
    qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rn = /^(?:GET|HEAD)$/,
    Bn = /^\/\//,
    Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    In = lt.fn.load,
    Wn = {},
    zn = {},
    Xn = "*/".concat("*");
    try {
        Dn = Y.href
    } catch(Vn) {
        Dn = J.createElement("a"),
        Dn.href = "",
        Dn = Dn.href
    }
    $n = Pn.exec(Dn.toLowerCase()) || [],
    lt.fn.load = function(e, n, r) {
        if ("string" != typeof e && In) return In.apply(this, arguments);
        var o, i, a, s = this,
        l = e.indexOf(" ");
        return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)),
        lt.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && lt.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            i = arguments,
            s.html(o ? lt("<div>").append(lt.parseHTML(e)).find(o) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, i || [e.responseText, t, e])
        }),
        this
    },
    lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        lt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    lt.each(["get", "post"],
    function(e, n) {
        lt[n] = function(e, r, o, i) {
            return lt.isFunction(r) && (i = i || o, o = r, r = t),
            lt.ajax({
                url: e,
                type: n,
                dataType: i,
                data: r,
                success: o
            })
        }
    }),
    lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Fn.test($n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, lt.ajaxSettings), t) : D(lt.ajaxSettings, e)
        },
        ajaxPrefilter: j(Wn),
        ajaxTransport: j(zn),
        ajax: function(e, n) {
            function r(e, n, r, o) {
                var i, f, v, b, w, _ = n;
                2 !== x && (x = 2, l && clearTimeout(l), c = t, s = o || "", T.readyState = e > 0 ? 4 : 0, r && (b = L(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (lt.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (lt.etag[a] = w)), 204 === e ? (i = !0, _ = "nocontent") : 304 === e ? (i = !0, _ = "notmodified") : (i = H(p, b), _ = i.state, f = i.data, v = i.error, i = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || _) + "", i ? m.resolveWith(d, [f, _, T]) : m.rejectWith(d, [T, _, v]), T.statusCode(y), y = t, u && h.trigger(i ? "ajaxSuccess": "ajaxError", [T, p, i ? f: v]), g.fireWith(d, [T, _]), u && (h.trigger("ajaxComplete", [T, p]), --lt.active || lt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var o, i, a, s, l, u, c, f, p = lt.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? lt(d) : lt.event,
            m = lt.Deferred(),
            g = lt.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            w = "canceled",
            T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = qn.exec(s);) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Dn) + "").replace(On, "").replace(Bn, $n[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (o = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === $n[1] && o[2] === $n[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == ($n[3] || ("http:" === $n[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), $(Wn, p, n, T), 2 === x) return T;
            u = p.global,
            u && 0 === lt.active++&&lt.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Rn.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (Hn.test(a) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mn.test(a) ? a.replace(Mn, "$1_=" + Ln++) : a + (Hn.test(a) ? "&": "?") + "_=" + Ln++)),
            p.ifModified && (lt.lastModified[a] && T.setRequestHeader("If-Modified-Since", lt.lastModified[a]), lt.etag[a] && T.setRequestHeader("If-None-Match", lt.etag[a])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : p.accepts["*"]);
            for (i in p.headers) T.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) T[i](p[i]);
            if (c = $(zn, p, n, T)) {
                T.readyState = 1,
                u && h.trigger("ajaxSend", [T, p]),
                p.async && p.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    c.send(v, r)
                } catch(_) {
                    if (! (2 > x)) throw _;
                    r( - 1, _)
                }
            } else r( - 1, "No Transport");
            return T
        },
        getScript: function(e, n) {
            return lt.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return lt.get(e, t, n, "json")
        }
    }),
    lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return lt.globalEval(e),
                e
            }
        }
    }),
    lt.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    lt.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = J.head || lt("head")[0] || J.documentElement;
            return {
                send: function(t, o) {
                    n = J.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Un = [],
    Jn = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Un.pop() || lt.expando + "_" + Ln++;
            return this[e] = !0,
            e
        }
    }),
    lt.ajaxPrefilter("json jsonp",
    function(n, r, o) {
        var i, a, s, l = n.jsonp !== !1 && (Jn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Jn, "$1" + i) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&": "?") + n.jsonp + "=" + i), n.converters["script json"] = function() {
            return s || lt.error(i + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[i], e[i] = function() {
            s = arguments
        },
        o.always(function() {
            e[i] = a,
            n[i] && (n.jsonpCallback = r.jsonpCallback, Un.push(i)),
            s && lt.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Yn, Gn, Qn = 0,
    Kn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Yn) Yn[e](t, !0)
    };
    lt.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && O() || M()
    }: O,
    Gn = lt.ajaxSettings.xhr(),
    lt.support.cors = !!Gn && "withCredentials" in Gn,
    Gn = lt.support.ajax = !!Gn,
    Gn && lt.ajaxTransport(function(n) {
        if (!n.crossDomain || lt.support.cors) {
            var r;
            return {
                send: function(o, i) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch(u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, o) {
                        var s, u, c, f;
                        try {
                            if (r && (o || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = lt.noop, Kn && delete Yn[a]), o) 4 !== l.readyState && l.abort();
                            else {
                                f = {},
                                s = l.status,
                                u = l.getAllResponseHeaders(),
                                "string" == typeof l.responseText && (f.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch(p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(d) {
                            o || i( - 1, d)
                        }
                        f && i(s, c, f, u)
                    },
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Yn || (Yn = {},
                    lt(e).unload(Kn)), Yn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
    nr = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    or = [P],
    ir = {
        "*": [function(e, t) {
            var n, r, o = this.createTween(e, t),
            i = nr.exec(t),
            a = o.cur(),
            s = +a || 0,
            l = 1,
            u = 20;
            if (i) {
                if (n = +i[2], r = i[3] || (lt.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = lt.css(o.elem, e, !0) || n || 1;
                    do l = l || ".5",
                    s /= l,
                    lt.style(o.elem, e, s + r);
                    while (l !== (l = o.cur() / a) && 1 !== l && --u)
                }
                o.unit = r,
                o.start = s,
                o.end = i[1] ? s + (i[1] + 1) * n: n
            }
            return o
        }]
    };
    lt.Animation = lt.extend(R, {
        tweener: function(e, t) {
            lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            o = e.length; o > r; r++) n = e[r],
            ir[n] = ir[n] || [],
            ir[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? or.unshift(e) : or.push(e)
        }
    }),
    lt.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (lt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    lt.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = lt.fn[t];
        lt.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, o)
        }
    }),
    lt.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = lt.isEmptyObject(e),
            i = lt.speed(t, n, r),
            a = function() {
                var t = R(this, lt.extend({},
                e), i);
                a.finish = function() {
                    t.stop(!0)
                },
                (o || lt._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, n, r) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                i = lt.timers,
                a = lt._data(this);
                if (n) a[n] && a[n].stop && o(a[n]);
                else for (n in a) a[n] && a[n].stop && rr.test(n) && o(a[n]);
                for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), t = !1, i.splice(n, 1)); (t || !r) && lt.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = lt._data(this),
                r = n[e + "queue"],
                o = n[e + "queueHooks"],
                i = lt.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, lt.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    lt.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        lt.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    lt.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? lt.extend({},
        e) : {
            complete: n || !n && t || lt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !lt.isFunction(t) && t
        };
        return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            lt.isFunction(r.old) && r.old.call(this),
            r.queue && lt.dequeue(this, r.queue)
        },
        r
    },
    lt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    lt.timers = [],
    lt.fx = I.prototype.init,
    lt.fx.tick = function() {
        var e, n = lt.timers,
        r = 0;
        for (Zn = lt.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || lt.fx.stop(),
        Zn = t
    },
    lt.fx.timer = function(e) {
        e() && lt.timers.push(e) && lt.fx.start()
    },
    lt.fx.interval = 13,
    lt.fx.start = function() {
        er || (er = setInterval(lt.fx.tick, lt.fx.interval))
    },
    lt.fx.stop = function() {
        clearInterval(er),
        er = null
    },
    lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    lt.fx.step = {},
    lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
        return lt.grep(lt.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    lt.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            lt.offset.setOffset(this, e, t)
        });
        var n, r, o = {
            top: 0,
            left: 0
        },
        i = this[0],
        a = i && i.ownerDocument;
        return a ? (n = a.documentElement, lt.contains(n, i) ? (typeof i.getBoundingClientRect !== U && (o = i.getBoundingClientRect()), r = z(a), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    },
    lt.offset = {
        setOffset: function(e, t, n) {
            var r = lt.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var o, i, a = lt(e),
            s = a.offset(),
            l = lt.css(e, "top"),
            u = lt.css(e, "left"),
            c = ("absolute" === r || "fixed" === r) && lt.inArray("auto", [l, u]) > -1,
            f = {},
            p = {};
            c ? (p = a.position(), o = p.top, i = p.left) : (o = parseFloat(l) || 0, i = parseFloat(u) || 0),
            lt.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + o),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : a.css(f)
        }
    },
    lt.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === lt.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - lt.css(r, "marginTop", !0),
                    left: t.left - n.left - lt.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || J.documentElement; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position");) e = e.offsetParent;
                return e || J.documentElement
            })
        }
    }),
    lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        lt.fn[e] = function(o) {
            return lt.access(this,
            function(e, o, i) {
                var a = z(e);
                return i === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : (a ? a.scrollTo(r ? lt(a).scrollLeft() : i, r ? i: lt(a).scrollTop()) : e[o] = i, t)
            },
            e, o, arguments.length, null)
        }
    }),
    lt.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        lt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, o) {
            lt.fn[o] = function(o, i) {
                var a = arguments.length && (r || "boolean" != typeof o),
                s = r || (o === !0 || i === !0 ? "margin": "border");
                return lt.access(this,
                function(n, r, o) {
                    var i;
                    return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? lt.css(n, r, s) : lt.style(n, r, o, s)
                },
                n, a ? o: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = lt,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return lt
    })
} (window),
itz = itz || {},
itz.dialogComponent = function() {
    var e = !1;
    window._dialog_instance = [];
    var t = function(t) {
        return $.extend(t, {
            _el: null,
            _back: null,
            _elClose: null,
            __create: function() {
                var n = this;
                e && console.info("create:", n);
                var r = $(".dialog-wrap");
                if (r.length > 1 ? t.selector ? r.each(function(e, r) {
                    $(r).data("instance") === t.selector && (n._el = $(r))
                }) : n._el = $(r[0]) : n._el = r, !n._el) throw new Error("Dialog-wrap Dom Element Required!");
                return n._elClose = n._el.find(".close"),
                n._back = n._el.find(".dialog-background"),
                "function" == typeof n.create && (e && console.info("create:", n), n.create.call(n)),
                n
            },
            __beforeMount: function() {
                var t = this;
                return e && console.info("beforeMount:", t),
                "function" == typeof t.beforeMount && (e && console.info("beforeMount:", t), t.beforeMount.call(t)),
                t
            },
            __mounted: function() {
                var n = this;
                return e && console.info("mounted:", n),
                (void 0 === t.closeClickOutSide || t.closeClickOutSide === !0) && n._back.on("click",
                function() {
                    n.__close()
                }),
                n._elClose.length && n._elClose.on("click",
                function() {
                    n.__close()
                }),
                "function" == typeof n.mounted && (e && console.info("mounted:", n), n.mounted.call(n)),
                n
            },
            __open: function(t) {
                var n = this;
                e && console.info("close:", n),
                "function" == typeof n.open && (e && console.info("open:", n), n.open.call(n)),
                n._el.fadeIn({
                    duration: "undefined" == typeof t ? 400 : t,
                    complete: function() {
                        var e = n._el.find(".input");
                        e.each(function(e, t) {
                            if ($(t).attr("clearfuncindex") && $(t).siblings(".clear-input").length) {
                                var n = itz.makeInputHasClearFunc[Number($(t).attr("clearfuncindex"))];
                                n && n._calcClearBtnPosition($(t), $(t).siblings(".clear-input"))
                            }
                        }),
                        $("body").addClass("no-scroll")
                    }
                })
            },
            __close: function() {
                var t = this;
                e && console.info("close:", t),
                "function" == typeof t.close && (e && console.info("close:", t), t.close.call(t)),
                t._el.fadeOut(),
                $("body").removeClass("no-scroll")
            }
        })
    };
    return function(e) {
        return e.selector || (e.selector = 0),
        window._dialog_instance[e.selector] || (window._dialog_instance[e.selector] = new t(e).__create().__beforeMount().__mounted()),
        window._dialog_instance[e.selector]
    }
} ();
var itzLog = function() {
    var e = new Image,
    t = "/log.gif",
    n = {
        op: "operation"
    },
    r = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent(e[n]));
        return t.slice(1)
    },
    o = function(o, i) {
        if ("object" == typeof o && (i = o, o = "op"), !n[o]) return void console.error("unknown logType");
        var a = r(i);
        "" != a && (e.src = t + "?type=" + n[o] + "&" + a + "&" + Date.now())
    };
    return {
        log: o
    }
} ();
itz = itz || {},
itz.selectComponent = function() {
    var e = !1,
    t = [],
    n = function(t) {
        return $.extend({
            _el: null,
            _elValue: null,
            _elArrow: null,
            _elOptions: null,
            _elOptionsLi: null,
            _elSelect: null,
            _selectImg: !1,
            __create: function() {
                var n = this;
                e && console.info("_super_create:", n);
                var r = $(".select-box");
                if (r.length > 1 ? t.selector ? r.each(function(e, r) {
                    $(r).data("instance") === t.selector && (n._el = $(r))
                }) : n._el = $(r[0]) : n._el = r, !n._el) throw new Error("Select-box Dom Required!");
                return n._el.hasClass("select-with-img") && (n._selectImg = !0),
                n._elValue = n._el.find(".value"),
                n._elArrow = n._el.find(".icon"),
                n._elOptions = n._el.find("ul"),
                n._elSelect = document.createElement("select"),
                n._elOptionsLi = n._elOptions.find("li"),
                n._elSelect.id = t.selector || "select-box-" + Math.random(),
                n._elOptionsLi.each(function(e, t) {
                    var r = document.createElement("option");
                    n._selectImg ? (r.value = "object" == typeof $(t).data("value") ? String(JSON.stringify($(t).data("value"))) : $(t).data("value"), r.text = $(t).data("text")) : (r.value = $(t).data("value") || $(t).text(), r.text = $(t).data("text") || $(t).text()),
                    $(t).data("selected") && (r.setAttribute("selected", !0), n._selectImg ? n._elValue.attr("src", $(t).data("text")) : n._elValue.text($(t).text())),
                    n._elSelect.appendChild(r)
                }),
                n._elSelect.style.display = "none",
                n._el[0].appendChild(n._elSelect),
                "function" == typeof n.create && (e && console.info("create:", n), n.create.call(n)),
                n
            },
            __beforeMount: function() {
                var e = this;
                return e
            },
            __mounted: function() {
                var e = this;
                return e._el.on("click",
                function() {
                    e._elOptions.is(":hidden") ? (e._elOptions.slideDown("fast"), e._elArrow.removeClass("icon-down-gray").addClass("icon-up-gray")) : (e._elOptions.slideUp("fast"), e._elArrow.removeClass("icon-up-gray").addClass("icon-down-gray"))
                }),
                e._elOptionsLi.on("click",
                function(t) {
                    if (e._selectImg ? (e._elSelect.value = "object" == typeof $(t.target).data("value") ? String(JSON.stringify($(t.target).data("value"))) : $(t.target).data("value"), e._elValue.attr("src", $(t.target).data("text"))) : (e._elSelect.value = $(t.target).data("value") || $(item).text(), e._elValue.text($(t.target).text())), "createEvent" in document) {
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent("change", !1, !0),
                        e._elSelect.dispatchEvent(n)
                    } else e._elSelect.fireEvent("onchange")
                }),
                e
            }
        },
        t)
    };
    return function(e) {
        return e.selector || (e.selector = 0),
        (e.force || !t[e.selector]) && (t[e.selector] = new n(e).__create().__beforeMount().__mounted()),
        t[e.selector]
    }
} (),
itz = itz || {},
itz.numberScaleComponent = function() {
    var e = !1,
    t = [],
    n = function(t) {
        return $.extend({
            _el: null,
            _elValue: null,
            __create: function() {
                var n = this;
                e && console.info("_super_create:", n);
                var r = $(".number-scale-box");
                if (r.length > 1 ? t.selector ? r.each(function(e, r) {
                    $(r).data("instance") === t.selector && (n._el = $(r))
                }) : n._el = $(r[0]) : n._el = r, !n._el) throw new Error("number-scale-box Dom Required!");
                return n._elValue = document.createElement("div"),
                n._elValue.id = t.selector || "number-scale-box-" + Math.random(),
                $(n._el).parent()[0].appendChild(n._elValue),
                $(n._elValue).append('<span class="number"></span><span class="icon icon-number-scale-tips"></span>'),
                n._elNumber = $(n._elValue).find(".number"),
                "function" == typeof n.create && (e && console.info("create:", n), n.create.call(n)),
                n
            },
            __beforeMount: function() {
                var e = this;
                return e
            },
            __mounted: function() {
                var e = this;
                e._el.on("focus",
                function() {
                    $(e._elValue).outerWidth() != $(e._el).outerWidth() && $(e._elValue).css("width", $(e._el).outerWidth() + "px"),
                    $(e._elNumber).text().length && $(e._elValue).fadeIn()
                }).on("blur",
                function() {
                    $(e._elValue).fadeOut()
                }).on("change keyup",
                function(t) {
                    $(e._elNumber).text(function() {
                        return e.type && "function" == typeof e[e.type] ? e[e.type]($.trim(t.target.value)) : $.trim(t.target.value)
                    } ()),
                    t.target.value ? $(e._elValue).is(":hidden") && $(e._elValue).fadeIn() : $(e._elValue).fadeOut()
                });
                var t = $(e._el).position();
                return $(e._elValue).addClass("number-scale-box-tips").css({
                    width: $(e._el).outerWidth() + "px",
                    left: t.left + "px",
                    top: -($(e._el).outerHeight() + 9) + "px"
                }),
                e
            },
            card_id: function(e) {
                var t = "",
                n = e.length;
                if (15 >= n) for (var r = 0; n > r; r++) t += e.charAt(r),
                (2 == r || 5 == r || 11 == r) && (t += " ");
                else if (n > 15 && 18 >= n) for (var r = 0; n > r; r++) t += e.charAt(r),
                (2 == r || 5 == r || 9 == r || 13 == r) && (t += " ");
                else if (n > 18) {
                    for (var r = 0; 18 > r; r++) t += e.charAt(r),
                    (2 == r || 5 == r || 9 == r || 13 == r) && (t += " ");
                    t += "..."
                }
                return t
            },
            bank_card: function(e) {
                var t = "",
                n = e.length;
                if (19 >= n) for (var r = 0; n > r; r++) t += e.charAt(r),
                (3 == r || 7 == r || 11 == r || 15 == r) && (t += " ");
                else if (n > 19) {
                    for (var r = 0; 19 > r; r++) t += e.charAt(r),
                    (3 == r || 7 == r || 11 == r || 15 == r) && (t += " ");
                    t += "..."
                }
                return t
            }
        },
        t)
    };
    return function(e) {
        return e.selector || (e.selector = 0),
        t[e.selector] || (t[e.selector] = new n(e).__create().__beforeMount().__mounted()),
        t[e.selector]
    }
} (),
$(document).ready(function() {
    itz.updateHeaderMsg = function() {
        var e = $(".top-header-sign"),
        t = $(".user_tip");
        return (e.length || t.length) && window.User.user_id > 0 && $.ajax({
            url: "/user/ajax/AjaxMessageNum",
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function(n) {
                n.data;
                0 == n.code && Number(n.data.message_num) && (e.length && e.find(".icon").addClass("icon-top-header-message"), t.length && t.addClass("user_tip_show"))
            }
        }),
        e
    } (),
    itz.footerToggle = function() {
        var e = $(".links-contain"),
        t = e.find(".links-wrap"),
        n = e.find(".more");
        return n.on("click",
        function() {
            t.hasClass("links-wrap-down") ? (t.removeClass("links-wrap-down"), n.html('更多<span class="icon icon-down-blue"></span>')) : (t.addClass("links-wrap-down"), n.html('收起<span class="icon icon-up-blue"></span>'))
        }),
        {
            linksWrap: e,
            links: t,
            btn: n
        }
    } (),
    $.ajaxPrefilter(function(e, t, n) {
        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(e.type) && !e.crossDomain) {
            var r = window[t.url.split("/").pop().split("?")[0] + "_ct"];
            r && n.setRequestHeader("itz-csrftoken", r.replace(/&amp;/g, "&"))
        }
    }),
    $(document).ajaxSuccess(function(e, t) {
        if (200 === t.status) try {
            var n = JSON.parse(t.responseText);
            if (2101 === n.code) {
                var r = '<div class="dialog-wrap" data-instance="csrfDialog">                        <div class="dialog-background"></div>                        <div class="dialog-helper"></div>                        <div class="dialog dialog-small">                            <h2 class="dialog-title">信息过期提示</h2>                            <div class="dialog-body">                                <p>信息已过期，为安全起见，请重新输入</p>                                <button class="btn btn-block btn-small btn-red" onclick="javascript:window.location.reload();">确定</button>                            </div>                        </div>                    </div>';
                $("body").append(r),
                itz.dialogComponent({
                    selector: "csrfDialog",
                    closeClickOutSide: !1
                }).__open()
            } else 2003 === n.code && itz.popupCountdown({
                notice_main: "登录已失效，请重新登录",
                notice_coutDown: "后跳转到登录页面",
                notice_cout: 3,
                callback: function() {
                    window.location.href = "/login?ret_url=" + encodeURIComponent(window.location.href)
                }
            })
        } catch(o) {}
    }),
    itz.makeInputHasClearFunc = function() {
        var e = {};
        return $("input").each(function(t, n) {
            function r(e, t) {
                var n = e.siblings(".input-unit").length ? 30 : 0,
                r = "password" == e.attr("type") && e.parents(".register-box").length ? 165 : 0,
                o = e.position(),
                i = e.outerWidth(),
                a = e.outerHeight(),
                s = r ? 10 : 8,
                l = r ? r: 26 + n;
                t.css({
                    top: o.top + a / 2 - s + "px",
                    left: o.left + i - l + "px"
                });
                var u = e.attr("clear-offset") || 30;
                e.css("padding-right", u + "px")
            }
            if ($(n).attr("class") && $(n).attr("class").match(/pwd|password|card|name|phone|code|captch|money|account|invitee|bank_branch/gi) && !$(n).hasClass("clearX")) {
                $(n).parent().css("position", "relative");
                var o = $('<span class="icon icon-close-style-2 clear-input" style="display:none;position:absolute;cursor:pointer;"></span>');
                r($(n), o),
                $(n).on("focus change keyup",
                function(e) {
                    e.target.value ? $(this).siblings(".clear-input").is(":hidden") && $(this).siblings(".clear-input").fadeIn() : $(this).siblings(".clear-input").fadeOut()
                }).attr("clearfuncindex", t).parent().append(o),
                $(o).on("click",
                function() {
                    var e = $(this).siblings(".input");
                    0 == e.length && (e = $(this).siblings(".form-1-input")),
                    e.val() && e.val("").trigger("change")
                }),
                e[String(t)] = {
                    _input: $(n),
                    _clearBtn: o,
                    _calcClearBtnPosition: r
                }
            }
        }),
        e
    } (),
    itz.popupCountdown = function(e) {
        if (!document.getElementById("popupCountdown")) {
            var t = '<div id="popupCountdown" class="dialog-wrap" data-instance="popupCountdown">                            <div class="dialog-background"></div>                            <div class="dialog-helper"></div>                            <div class="dialog dialog-small">                                <h2 class="dialog-title">提示</h2>                                <div class="dialog-body">                                    <p class="notice-main">' + e.notice_main + '</p>                                    <p class="notice-coutDown"><span id="count_to_close">' + e.notice_cout + "</span>s" + e.notice_coutDown + "</p>                                </div>                            </div>                        </div>";
            $("body").append(t)
        }
        itz.dialogComponent({
            selector: "popupCountdown",
            closeClickOutSide: !1
        }).__open();
        var n = $("#count_to_close"),
        r = $("#count_to_close").html(),
        o = setInterval(function() {
            r--,
            r > 0 ? n.html(r) : (clearInterval(o), "function" == typeof e.callback && e.callback.call())
        },
        1e3)
    },
    function() {
        $.fn.goToTop = function(e) {
            var t = {
                fn: function() {},
                "static": !1,
                ele: $(document.body.scrollTop ? document.body: document.documentElement),
                eletop: 0
            },
            n = $.extend({},
            e, t);
            $(this).click(function() {
                n.ele = $(document.body.scrollTop ? document.body: document.documentElement),
                n.ele.animate({
                    scrollTop: 0
                },
                {
                    easing: "swing",
                    duration: 600,
                    complete: function() {
                        n.static = !1
                    },
                    step: function(e) {
                        n.static = !0,
                        n.eletop = e
                    }
                }),
                n.fn()
            }),
            $(window).scroll(function() {
                1 == n.static && n.ele.scrollTop() > n.eletop && n.ele.stop()
            })
        };
        var e = $(".float-toolbars"),
        t = $("#sidebar_totop"),
        n = function(n, r) {
            var o = document.body.scrollTop || document.documentElement.scrollTop,
            i = e.height(),
            a = ($(window).height() - i) / 1.2;
            e.css("top", a + "px"),
            o + a >= n ? e.fadeIn(200) : e.fadeOut(200),
            o >= r ? t.fadeIn(200) : t.fadeOut(200)
        },
        r = function() {
            "/" == window.location.pathname ? n(480, 480) : n(0, 480)
        };
        $(window).scroll(function() {
            r()
        }),
        r(),
        t.goToTop();
        var o = "8.0",
        i = navigator.userAgent.toLowerCase(),
        a = i.indexOf("msie") > -1;
        if (a) {
            var s = i.match(/msie ([\d.]+)/)[1];
            o >= s && $("#online_service_link").attr("href", "http://qiao.baidu.com/v3/?module=default&controller=webim&action=index&siteid=2486763&groupid=0&groupname=%E6%8A%95%E8%B5%84%E5%92%A8%E8%AF%A2")
        }
    } ()
}); 
// JavaScript Document