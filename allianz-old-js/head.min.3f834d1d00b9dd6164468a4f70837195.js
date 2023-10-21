/*
 jQuery JavaScript Library v1.12.4-aem
 http://jquery.com/

 Includes Sizzle.js
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-05-20T17:17Z
 Sizzle CSS Selector Engine v2.2.1
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2015-10-17
*/
(function(r, F) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = r.document ? F(r, !0) : function(B) {
        if (!B.document) throw Error("jQuery requires a window with a document");
        return F(B)
    } : F(r)
})("undefined" !== typeof window ? window : this, function(r, F) {
    function B(a) {
        var b = !!a && "length" in a && a.length,
            d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : "array" === d || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function C(a, b, d) {
        if (c.isFunction(b)) return c.grep(a, function(e, f) {
            return !!b.call(e,
                f, e) !== d
        });
        if (b.nodeType) return c.grep(a, function(e) {
            return e === b !== d
        });
        if ("string" === typeof b) {
            if (Sc.test(b)) return c.filter(b, a, d);
            b = c.filter(b, a)
        }
        return c.grep(a, function(e) {
            return -1 < c.inArray(e, b) !== d
        })
    }

    function x(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function P(a) {
        var b = {};
        c.each(a.match(Pa) || [], function(d, e) {
            b[e] = !0
        });
        return b
    }

    function N() {
        K.addEventListener ? (K.removeEventListener("DOMContentLoaded", y), r.removeEventListener("load", y)) : (K.detachEvent("onreadystatechange", y), r.detachEvent("onload",
            y))
    }

    function y() {
        if (K.addEventListener || "load" === r.event.type || "complete" === K.readyState) N(), c.ready()
    }

    function v(a, b, d) {
        if (void 0 === d && 1 === a.nodeType)
            if (d = "data-" + b.replace(Tc, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Uc.test(d) ? c.parseJSON(d) : d
                } catch (e) {}
                c.data(a, b, d)
            } else d = void 0;
        return d
    }

    function A(a) {
        for (var b in a)
            if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function J(a, b, d, e) {
        if (tb(a)) {
            var f =
                c.expando,
                g = a.nodeType,
                k = g ? c.cache : a,
                m = g ? a[f] : a[f] && f;
            if (m && k[m] && (e || k[m].data) || void 0 !== d || "string" !== typeof b) {
                m || (m = g ? a[f] = Ta.pop() || c.guid++ : f);
                k[m] || (k[m] = g ? {} : {
                    toJSON: c.noop
                });
                if ("object" === typeof b || "function" === typeof b) e ? k[m] = c.extend(k[m], b) : k[m].data = c.extend(k[m].data, b);
                a = k[m];
                e || (a.data || (a.data = {}), a = a.data);
                void 0 !== d && (a[c.camelCase(b)] = d);
                "string" === typeof b ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                return d
            }
        }
    }

    function Y(a, b, d) {
        if (tb(a)) {
            var e, f, g = a.nodeType,
                k = g ? c.cache : a,
                m =
                g ? a[c.expando] : c.expando;
            if (k[m]) {
                if (b && (e = d ? k[m] : k[m].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--;) delete e[b[f]];
                    if (d ? !A(e) : !c.isEmptyObject(e)) return
                }
                if (!d && (delete k[m].data, !A(k[m]))) return;
                g ? c.cleanData([a], !0) : G.deleteExpando || k != k.window ? delete k[m] : k[m] = void 0
            }
        }
    }

    function U(a, b, d, e) {
        var f = 1,
            g = 20,
            k = e ? function() {
                return e.cur()
            } : function() {
                return c.css(a, b, "")
            },
            m = k(),
            p = d && d[3] || (c.cssNumber[b] ? "" : "px"),
            q = (c.cssNumber[b] ||
                "px" !== p && +m) && Ob.exec(c.css(a, b));
        if (q && q[3] !== p) {
            p = p || q[3];
            d = d || [];
            q = +m || 1;
            do f = f || ".5", q /= f, c.style(a, b, q + p); while (f !== (f = k() / m) && 1 !== f && --g)
        }
        if (d) {
            q = +q || +m || 0;
            var u = d[1] ? q + (d[1] + 1) * d[2] : +d[2];
            e && (e.unit = p, e.start = q, e.end = u)
        }
        return u
    }

    function da(a) {
        var b = "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video".split(" ");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function la(a, b) {
        var d, e, f = 0,
            g = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !b || c.nodeName(e, b) ? g.push(e) : c.merge(g, la(e, b));
        return void 0 === b || b && c.nodeName(a, b) ? c.merge([a], g) : g
    }

    function M(a, b) {
        for (var d, e = 0; null != (d = a[e]); e++) c._data(d, "globalEval", !b || c._data(b[e], "globalEval"))
    }

    function R(a) {
        Pb.test(a.type) && (a.defaultChecked = a.checked)
    }

    function pa(a, b, d, e, f) {
        for (var g, k, m, p, q, u, z = a.length, I = da(b), ma = [], ba = 0; ba < z; ba++)
            if ((k = a[ba]) || 0 === k)
                if ("object" === c.type(k)) c.merge(ma, k.nodeType ? [k] : k);
                else if (Vc.test(k)) {
            m = m || I.appendChild(b.createElement("div"));
            p = (jc.exec(k) || ["", ""])[1].toLowerCase();
            u = Ja[p] || Ja._default;
            m.innerHTML = u[1] + c.htmlPrefilter(k) + u[2];
            for (g = u[0]; g--;) m = m.lastChild;
            !G.leadingWhitespace && Qb.test(k) && ma.push(b.createTextNode(Qb.exec(k)[0]));
            if (!G.tbody)
                for (g = (k = "table" !== p || kc.test(k) ? "\x3ctable\x3e" !== u[1] || kc.test(k) ?
                        0 : m : m.firstChild) && k.childNodes.length; g--;) c.nodeName(q = k.childNodes[g], "tbody") && !q.childNodes.length && k.removeChild(q);
            c.merge(ma, m.childNodes);
            for (m.textContent = ""; m.firstChild;) m.removeChild(m.firstChild);
            m = I.lastChild
        } else ma.push(b.createTextNode(k));
        m && I.removeChild(m);
        G.appendChecked || c.grep(la(ma, "input"), R);
        for (ba = 0; k = ma[ba++];)
            if (e && -1 < c.inArray(k, e)) f && f.push(k);
            else if (a = c.contains(k.ownerDocument, k), m = la(I.appendChild(k), "script"), a && M(m), d)
            for (g = 0; k = m[g++];) lc.test(k.type || "") && d.push(k);
        return I
    }

    function Ua() {
        return !0
    }

    function Ha() {
        return !1
    }

    function Va() {
        try {
            return K.activeElement
        } catch (a) {}
    }

    function jb(a, b, d, e, f, g) {
        var k;
        if ("object" === typeof b) {
            "string" !== typeof d && (e = e || d, d = void 0);
            for (k in b) jb(a, k, d, e, b[k], g);
            return a
        }
        null == e && null == f ? (f = d, e = d = void 0) : null == f && ("string" === typeof d ? (f = e, e = void 0) : (f = e, e = d, d = void 0));
        if (!1 === f) f = Ha;
        else if (!f) return a;
        if (1 === g) {
            var m = f;
            f = function(p) {
                c().off(p);
                return m.apply(this, arguments)
            };
            f.guid = m.guid || (m.guid = c.guid++)
        }
        return a.each(function() {
            c.event.add(this,
                b, f, e, d)
        })
    }

    function ub(a, b) {
        return c.nodeName(a, "table") && c.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        a.type = (null !== c.find.attr(a, "type")) + "/" + a.type;
        return a
    }

    function zb(a) {
        var b = Wc.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function Ab(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e;
            var f = c._data(a);
            a = c._data(b, f);
            var g = f.events;
            if (g)
                for (d in delete a.handle, a.events = {}, g)
                    for (f = 0, e = g[d].length; f < e; f++) c.event.add(b, d, g[d][f]);
            a.data && (a.data = c.extend({}, a.data))
        }
    }

    function L(a, b, d, e) {
        b = mc.apply([], b);
        var f, g = 0,
            k = a.length,
            m = k - 1,
            p = b[0],
            q = c.isFunction(p);
        if (q || 1 < k && "string" === typeof p && !G.checkClone && Xc.test(p)) return a.each(function(ma) {
            var ba = a.eq(ma);
            q && (b[0] = p.call(this, ma, ba.html()));
            L(ba, b, d, e)
        });
        if (k) {
            var u = pa(b, a[0].ownerDocument, !1, a, e);
            var z = u.firstChild;
            1 === u.childNodes.length && (u = z);
            if (z || e) {
                var I = c.map(la(u, "script"), kb);
                for (f = I.length; g < k; g++) z = u, g !==
                    m && (z = c.clone(z, !0, !0), f && c.merge(I, la(z, "script"))), d.call(a[g], z, g);
                if (f)
                    for (u = I[I.length - 1].ownerDocument, c.map(I, zb), g = 0; g < f; g++) z = I[g], lc.test(z.type || "") && !c._data(z, "globalEval") && c.contains(u, z) && (z.src ? c._evalUrl && c._evalUrl(z.src) : c.globalEval((z.text || z.textContent || z.innerHTML || "").replace(Yc, "")));
                u = z = null
            }
        }
        return a
    }

    function W(a, b, d) {
        for (var e = b ? c.filter(b, a) : a, f = 0; null != (b = e[f]); f++) d || 1 !== b.nodeType || c.cleanData(la(b)), b.parentNode && (d && c.contains(b.ownerDocument, b) && M(la(b, "script")),
            b.parentNode.removeChild(b));
        return a
    }

    function ea(a, b) {
        a = c(b.createElement(a)).appendTo(b.body);
        b = c.css(a[0], "display");
        a.detach();
        return b
    }

    function ca(a) {
        var b = K,
            d = nc[a];
        d || (d = ea(a, b), "none" !== d && d || (vb = (vb || c("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(b.documentElement), b = (vb[0].contentWindow || vb[0].contentDocument).document, b.write(), b.close(), d = ea(a, b), vb.detach()), nc[a] = d);
        return d
    }

    function ja(a, b) {
        return {
            get: function() {
                if (a()) delete this.get;
                else return (this.get =
                    b).apply(this, arguments)
            }
        }
    }

    function qa(a) {
        if (a in oc) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), d = pc.length; d--;)
            if (a = pc[d] + b, a in oc) return a
    }

    function na(a, b) {
        for (var d, e, f, g = [], k = 0, m = a.length; k < m; k++) e = a[k], e.style && (g[k] = c._data(e, "olddisplay"), d = e.style.display, b ? (g[k] || "none" !== d || (e.style.display = ""), "" === e.style.display && wb(e) && (g[k] = c._data(e, "olddisplay", ca(e.nodeName)))) : (f = wb(e), (d && "none" !== d || !f) && c._data(e, "olddisplay", f ? d : c.css(e, "display"))));
        for (k = 0; k < m; k++) e = a[k], !e.style ||
            b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[k] || "" : "none");
        return a
    }

    function Qa(a, b, d) {
        return (a = Zc.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b
    }

    function Da(a, b, d, e, f) {
        b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2) "margin" === d && (g += c.css(a, d + cb[b], !0, f)), e ? ("content" === d && (g -= c.css(a, "padding" + cb[b], !0, f)), "margin" !== d && (g -= c.css(a, "border" + cb[b] + "Width", !0, f))) : (g += c.css(a, "padding" + cb[b], !0, f), "padding" !== d && (g += c.css(a, "border" + cb[b] + "Width", !0, f)));
        return g
    }

    function La(a, b, d) {
        var e = !0,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            g = lb(a),
            k = G.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            f = db(a, b, g);
            if (0 > f || null == f) f = a.style[b];
            if (Bb.test(f)) return f;
            e = k && (G.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + Da(a, b, d || (k ? "border" : "content"), e, g) + "px"
    }

    function Fa(a, b, d, e, f) {
        return new Fa.prototype.init(a, b, d, e, f)
    }

    function qc() {
        r.setTimeout(function() {
            mb = void 0
        });
        return mb = c.now()
    }

    function Cb(a, b) {
        var d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            var f = cb[e];
            d["margin" + f] = d["padding" + f] = a
        }
        b && (d.opacity = d.width = a);
        return d
    }

    function rc(a, b, d) {
        for (var e, f = (Ma.tweeners[b] || []).concat(Ma.tweeners["*"]), g = 0, k = f.length; g < k; g++)
            if (e = f[g].call(d, b, a)) return e
    }

    function $c(a, b) {
        var d, e;
        for (d in a) {
            var f = c.camelCase(d);
            var g = b[f];
            var k = a[d];
            c.isArray(k) && (g = k[1], k = a[d] = k[0]);
            d !== f && (a[f] = k, delete a[d]);
            if ((e = c.cssHooks[f]) && "expand" in e)
                for (d in k = e.expand(k), delete a[f], k) d in a || (a[d] = k[d], b[d] = g);
            else b[f] = g
        }
    }

    function Ma(a, b, d) {
        var e, f = 0,
            g = Ma.prefilters.length,
            k = c.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                if (e) return !1;
                var q = mb || qc();
                q = Math.max(0, p.startTime + p.duration - q);
                for (var u = 1 - (q / p.duration || 0), z = 0, I = p.tweens.length; z < I; z++) p.tweens[z].run(u);
                k.notifyWith(a, [p, u, q]);
                if (1 > u && I) return q;
                k.resolveWith(a, [p]);
                return !1
            },
            p = k.promise({
                elem: a,
                props: c.extend({}, b),
                opts: c.extend(!0, {
                    specialEasing: {},
                    easing: c.easing._default
                }, d),
                originalProperties: b,
                originalOptions: d,
                startTime: mb || qc(),
                duration: d.duration,
                tweens: [],
                createTween: function(q, u) {
                    q = c.Tween(a, p.opts, q, u, p.opts.specialEasing[q] || p.opts.easing);
                    p.tweens.push(q);
                    return q
                },
                stop: function(q) {
                    var u = 0,
                        z = q ? p.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; u < z; u++) p.tweens[u].run(1);
                    q ? (k.notifyWith(a, [p, 1, 0]), k.resolveWith(a, [p, q])) : k.rejectWith(a, [p, q]);
                    return this
                }
            });
        d = p.props;
        for ($c(d, p.opts.specialEasing); f < g; f++)
            if (b = Ma.prefilters[f].call(p, a, d, p.opts)) return c.isFunction(b.stop) && (c._queueHooks(p.elem, p.opts.queue).stop = c.proxy(b.stop, b)), b;
        c.map(d,
            rc, p);
        c.isFunction(p.opts.start) && p.opts.start.call(a, p);
        c.fx.timer(c.extend(m, {
            elem: a,
            anim: p,
            queue: p.opts.queue
        }));
        return p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
    }

    function eb(a) {
        return c.attr(a, "class") || ""
    }

    function sc(a) {
        return function(b, d) {
            "string" !== typeof b && (d = b, b = "*");
            var e = 0,
                f = b.toLowerCase().match(Pa) || [];
            if (c.isFunction(d))
                for (; b = f[e++];) "+" === b.charAt(0) ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(d)) : (a[b] = a[b] || []).push(d)
        }
    }

    function tc(a, b, d, e) {
        function f(m) {
            var p;
            g[m] = !0;
            c.each(a[m] || [], function(q, u) {
                q = u(b, d, e);
                if ("string" === typeof q && !k && !g[q]) return b.dataTypes.unshift(q), f(q), !1;
                if (k) return !(p = q)
            });
            return p
        }
        var g = {},
            k = a === Rb;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function Sb(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (e in b) void 0 !== b[e] && ((f[e] ? a : d || (d = {}))[e] = b[e]);
        d && c.extend(!0, a, d);
        return a
    }

    function ad(a) {
        if (!c.contains(a.ownerDocument || K, a)) return !0;
        for (; a && 1 === a.nodeType;) {
            if ("none" === (a.style &&
                    a.style.display || c.css(a, "display")) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    function Tb(a, b, d, e) {
        var f;
        if (c.isArray(b)) c.each(b, function(g, k) {
            d || bd.test(a) ? e(a, k) : Tb(a + "[" + ("object" === typeof k && null != k ? g : "") + "]", k, d, e)
        });
        else if (d || "object" !== c.type(b)) e(a, b);
        else
            for (f in b) Tb(a + "[" + f + "]", b[f], d, e)
    }

    function Ub() {
        try {
            return new r.XMLHttpRequest
        } catch (a) {}
    }

    function uc() {
        try {
            return new r.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }

    function vc(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ?
            a.defaultView || a.parentWindow : !1
    }
    var Ta = [],
        K = r.document,
        $a = Ta.slice,
        mc = Ta.concat,
        Vb = Ta.push,
        wc = Ta.indexOf,
        Db = {},
        cd = Db.toString,
        nb = Db.hasOwnProperty,
        G = {},
        c = function(a, b) {
            return new c.fn.init(a, b)
        },
        dd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ed = /^-ms-/,
        fd = /-([\da-z])/gi,
        gd = function(a, b) {
            return b.toUpperCase()
        };
    c.fn = c.prototype = {
        jquery: "1.12.4-aem",
        constructor: c,
        selector: "",
        length: 0,
        toArray: function() {
            return $a.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : $a.call(this)
        },
        pushStack: function(a) {
            a =
                c.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a) {
            return c.each(this, a)
        },
        map: function(a) {
            return this.pushStack(c.map(this, function(b, d) {
                return a.call(b, d, b)
            }))
        },
        slice: function() {
            return this.pushStack($a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Vb,
        sort: Ta.sort,
        splice: Ta.splice
    };
    c.extend = c.fn.extend = function() {
        var a, b, d, e = arguments[0] || {},
            f = 1,
            g = arguments.length,
            k = !1;
        "boolean" === typeof e && (k = e, e = arguments[f] || {}, f++);
        "object" === typeof e || c.isFunction(e) || (e = {});
        f === g && (e = this, f--);
        for (; f < g; f++)
            if (null != (d = arguments[f]))
                for (b in d) {
                    var m = e[b];
                    var p = d[b];
                    "__proto__" !== b && e !== p && (k && p && (c.isPlainObject(p) || (a = c.isArray(p))) ? (a ? (a = !1, m = m && c.isArray(m) ? m : []) : m = m && c.isPlainObject(m) ? m : {}, e[b] = c.extend(k, m, p)) : void 0 !== p && (e[b] = p))
                }
        return e
    };
    c.extend({
        expando: "jQuery" + ("1.12.4-aem" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === c.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === c.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !c.isArray(a) && 0 <= b - parseFloat(b) + 1
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== c.type(a) ||
                a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !nb.call(a, "constructor") && !nb.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            if (!G.ownFirst)
                for (b in a) return nb.call(a, b);
            for (b in a);
            return void 0 === b || nb.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Db[cd.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            a && c.trim(a) && (r.execScript || function(b) {
                r.eval.call(r, b)
            })(a)
        },
        camelCase: function(a) {
            return a.replace(ed, "ms-").replace(fd,
                gd)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (B(a))
                for (d = a.length; e < d && !1 !== b.call(a[e], e, a[e]); e++);
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(dd, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            null != a && (B(Object(a)) ? c.merge(b, "string" === typeof a ? [a] : a) : Vb.call(b, a));
            return b
        },
        inArray: function(a, b, d) {
            if (b) {
                if (wc) return wc.call(b, a, d);
                var e = b.length;
                for (d = d ? 0 > d ? Math.max(0,
                        e + d) : d : 0; d < e; d++)
                    if (d in b && b[d] === a) return d
            }
            return -1
        },
        merge: function(a, b) {
            for (var d = +b.length, e = 0, f = a.length; e < d;) a[f++] = b[e++];
            if (d !== d)
                for (; void 0 !== b[e];) a[f++] = b[e++];
            a.length = f;
            return a
        },
        grep: function(a, b, d) {
            for (var e = [], f = 0, g = a.length, k = !d; f < g; f++) d = !b(a[f], f), d !== k && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = [];
            if (B(a))
                for (e = a.length; f < e; f++) {
                    var k = b(a[f], f, d);
                    null != k && g.push(k)
                } else
                    for (f in a) k = b(a[f], f, d), null != k && g.push(k);
            return mc.apply([], g)
        },
        guid: 1,
        proxy: function(a, b) {
            if ("string" ===
                typeof b) {
                var d = a[b];
                b = a;
                a = d
            }
            if (c.isFunction(a)) {
                var e = $a.call(arguments, 2);
                d = function() {
                    return a.apply(b || this, e.concat($a.call(arguments)))
                };
                d.guid = a.guid = a.guid || c.guid++;
                return d
            }
        },
        now: function() {
            return +new Date
        },
        support: G
    });
    "function" === typeof Symbol && (c.fn[Symbol.iterator] = Ta[Symbol.iterator]);
    c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Db["[object " + b + "]"] = b.toLowerCase()
    });
    var qb = function(a) {
        function b(h, n, l, t) {
            var w, E, D, O, H = n && n.ownerDocument,
                S = n ? n.nodeType : 9;
            l = l || [];
            if ("string" !== typeof h || !h || 1 !== S && 9 !== S && 11 !== S) return l;
            if (!t && ((n ? n.ownerDocument || n : ia) !== T && fb(n), n = n || T, oa)) {
                if (11 !== S && (O = hd.exec(h)))
                    if (w = O[1])
                        if (9 === S)
                            if (E = n.getElementById(w)) {
                                if (E.id === w) return l.push(E), l
                            } else return l;
                else {
                    if (H && (E = H.getElementById(w)) && Ka(n, E) && E.id === w) return l.push(E), l
                } else {
                    if (O[2]) return ab.apply(l, n.getElementsByTagName(h)), l;
                    if ((w = O[3]) && ra.getElementsByClassName && n.getElementsByClassName) return ab.apply(l, n.getElementsByClassName(w)),
                        l
                }
                if (!(!ra.qsa || Aa[h + " "] || ha && ha.test(h))) {
                    if (1 !== S) {
                        H = n;
                        var aa = h
                    } else if ("object" !== n.nodeName.toLowerCase()) {
                        (D = n.getAttribute("id")) ? D = D.replace(id, "\\$\x26"): n.setAttribute("id", D = fa);
                        O = Eb(h);
                        w = O.length;
                        for (E = xc.test(D) ? "#" + D : "[id\x3d'" + D + "']"; w--;) O[w] = E + " " + I(O[w]);
                        aa = O.join(",");
                        H = Wb.test(h) && u(n.parentNode) || n
                    }
                    if (aa) try {
                        return ab.apply(l, H.querySelectorAll(aa)), l
                    } catch (Q) {} finally {
                        D === fa && n.removeAttribute("id")
                    }
                }
            }
            return jd(h.replace(Fb, "$1"), n, l, t)
        }

        function d() {
            function h(l, t) {
                n.push(l +
                    " ") > ka.cacheLength && delete h[n.shift()];
                return h[l + " "] = t
            }
            var n = [];
            return h
        }

        function e(h) {
            h[fa] = !0;
            return h
        }

        function f(h) {
            var n = T.createElement("div");
            try {
                return !!h(n)
            } catch (l) {
                return !1
            } finally {
                n.parentNode && n.parentNode.removeChild(n)
            }
        }

        function g(h, n) {
            h = h.split("|");
            for (var l = h.length; l--;) ka.attrHandle[h[l]] = n
        }

        function k(h, n) {
            var l = n && h,
                t = l && 1 === h.nodeType && 1 === n.nodeType && (~n.sourceIndex || -2147483648) - (~h.sourceIndex || -2147483648);
            if (t) return t;
            if (l)
                for (; l = l.nextSibling;)
                    if (l === n) return -1;
            return h ?
                1 : -1
        }

        function m(h) {
            return function(n) {
                return "input" === n.nodeName.toLowerCase() && n.type === h
            }
        }

        function p(h) {
            return function(n) {
                var l = n.nodeName.toLowerCase();
                return ("input" === l || "button" === l) && n.type === h
            }
        }

        function q(h) {
            return e(function(n) {
                n = +n;
                return e(function(l, t) {
                    for (var w, E = h([], l.length, n), D = E.length; D--;) l[w = E[D]] && (l[w] = !(t[w] = l[w]))
                })
            })
        }

        function u(h) {
            return h && "undefined" !== typeof h.getElementsByTagName && h
        }

        function z() {}

        function I(h) {
            for (var n = 0, l = h.length, t = ""; n < l; n++) t += h[n].value;
            return t
        }

        function ma(h, n, l) {
            var t = n.dir,
                w = l && "parentNode" === t,
                E = Na++;
            return n.first ? function(D, O, H) {
                for (; D = D[t];)
                    if (1 === D.nodeType || w) return h(D, O, H)
            } : function(D, O, H) {
                var S, aa = [xa, E];
                if (H)
                    for (; D = D[t];) {
                        if ((1 === D.nodeType || w) && h(D, O, H)) return !0
                    } else
                        for (; D = D[t];)
                            if (1 === D.nodeType || w) {
                                var Q = D[fa] || (D[fa] = {});
                                Q = Q[D.uniqueID] || (Q[D.uniqueID] = {});
                                if ((S = Q[t]) && S[0] === xa && S[1] === E) return aa[2] = S[2];
                                Q[t] = aa;
                                if (aa[2] = h(D, O, H)) return !0
                            }
            }
        }

        function ba(h) {
            return 1 < h.length ? function(n, l, t) {
                for (var w = h.length; w--;)
                    if (!h[w](n,
                            l, t)) return !1;
                return !0
            } : h[0]
        }

        function Ia(h, n, l, t, w) {
            for (var E, D = [], O = 0, H = h.length, S = null != n; O < H; O++)
                if (E = h[O])
                    if (!l || l(E, t, w)) D.push(E), S && n.push(O);
            return D
        }

        function Ga(h, n, l, t, w, E) {
            t && !t[fa] && (t = Ga(t));
            w && !w[fa] && (w = Ga(w, E));
            return e(function(D, O, H, S) {
                var aa, Q = [],
                    sa = [],
                    ya = O.length,
                    wa;
                if (!(wa = D)) {
                    wa = n || "*";
                    for (var V = H.nodeType ? [H] : H, Ra = [], ua = 0, Gb = V.length; ua < Gb; ua++) b(wa, V[ua], Ra);
                    wa = Ra
                }
                wa = !h || !D && n ? wa : Ia(wa, Q, h, H, S);
                V = l ? w || (D ? h : ya || t) ? [] : O : wa;
                l && l(wa, V, H, S);
                if (t) {
                    var Oa = Ia(V, sa);
                    t(Oa, [], H, S);
                    for (H =
                        Oa.length; H--;)
                        if (aa = Oa[H]) V[sa[H]] = !(wa[sa[H]] = aa)
                }
                if (D) {
                    if (w || h) {
                        if (w) {
                            Oa = [];
                            for (H = V.length; H--;)(aa = V[H]) && Oa.push(wa[H] = aa);
                            w(null, V = [], Oa, S)
                        }
                        for (H = V.length; H--;)(aa = V[H]) && -1 < (Oa = w ? gb(D, aa) : Q[H]) && (D[Oa] = !(O[Oa] = aa))
                    }
                } else V = Ia(V === O ? V.splice(ya, V.length) : V), w ? w(null, O, V, S) : ab.apply(O, V)
            })
        }

        function Ea(h) {
            var n, l, t = h.length,
                w = ka.relative[h[0].type];
            var E = w || ka.relative[" "];
            for (var D = w ? 1 : 0, O = ma(function(aa) {
                    return aa === n
                }, E, !0), H = ma(function(aa) {
                    return -1 < gb(n, aa)
                }, E, !0), S = [function(aa, Q, sa) {
                    aa = !w && (sa || Q !== Ba) || ((n = Q).nodeType ? O(aa, Q, sa) : H(aa, Q, sa));
                    n = null;
                    return aa
                }]; D < t; D++)
                if (E = ka.relative[h[D].type]) S = [ma(ba(S), E)];
                else {
                    E = ka.filter[h[D].type].apply(null, h[D].matches);
                    if (E[fa]) {
                        for (l = ++D; l < t && !ka.relative[h[l].type]; l++);
                        return Ga(1 < D && ba(S), 1 < D && I(h.slice(0, D - 1).concat({
                            value: " " === h[D - 2].type ? "*" : ""
                        })).replace(Fb, "$1"), E, D < l && Ea(h.slice(D, l)), l < t && Ea(h = h.slice(l)), l < t && I(h))
                    }
                    S.push(E)
                }
            return ba(S)
        }

        function Hb(h, n) {
            var l = 0 < n.length,
                t = 0 < h.length,
                w = function(E, D, O, H, S) {
                    var aa, Q, sa = 0,
                        ya =
                        "0",
                        wa = E && [],
                        V = [],
                        Ra = Ba,
                        ua = E || t && ka.find.TAG("*", S),
                        Gb = xa += null == Ra ? 1 : Math.random() || .1,
                        Oa = ua.length;
                    for (S && (Ba = D === T || D || S); ya !== Oa && null != (aa = ua[ya]); ya++) {
                        if (t && aa) {
                            var Xb = 0;
                            D || aa.ownerDocument === T || (fb(aa), O = !oa);
                            for (; Q = h[Xb++];)
                                if (Q(aa, D || T, O)) {
                                    H.push(aa);
                                    break
                                }
                            S && (xa = Gb)
                        }
                        l && ((aa = !Q && aa) && sa--, E && wa.push(aa))
                    }
                    sa += ya;
                    if (l && ya !== sa) {
                        for (Xb = 0; Q = n[Xb++];) Q(wa, V, D, O);
                        if (E) {
                            if (0 < sa)
                                for (; ya--;) wa[ya] || V[ya] || (V[ya] = kd.call(H));
                            V = Ia(V)
                        }
                        ab.apply(H, V);
                        S && !E && 0 < V.length && 1 < sa + n.length && b.uniqueSort(H)
                    }
                    S &&
                        (xa = Gb, Ba = Ra);
                    return wa
                };
            return l ? e(w) : w
        }
        var X, Ba, Z, ta, T, va, oa, ha, za, Ca, Ka, fa = "sizzle" + 1 * new Date,
            ia = a.document,
            xa = 0,
            Na = 0,
            hb = d(),
            Sa = d(),
            Aa = d(),
            ob = function(h, n) {
                h === n && (ta = !0);
                return 0
            },
            pb = {}.hasOwnProperty,
            Wa = [],
            kd = Wa.pop,
            ld = Wa.push,
            ab = Wa.push,
            yc = Wa.slice,
            gb = function(h, n) {
                for (var l = 0, t = h.length; l < t; l++)
                    if (h[l] === n) return l;
                return -1
            },
            md = /[\x20\t\r\n\f]+/g,
            Fb = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            nd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            od = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            pd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            qd = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            xc = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            Ib = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            rd = /^(?:input|select|textarea|button)$/i,
            sd = /^h\d$/i,
            xb = /^[^{]+\{\s*\[native \w/,
            hd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Wb = /[+~]/,
            id = /'|\\/g,
            Xa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            Ya = function(h, n, l) {
                h = "0x" + n - 65536;
                return h !== h || l ? n : 0 > h ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, h & 1023 | 56320)
            },
            zc = function() {
                fb()
            };
        try {
            ab.apply(Wa = yc.call(ia.childNodes), ia.childNodes), Wa[ia.childNodes.length].nodeType
        } catch (h) {
            ab = {
                apply: Wa.length ? function(n, l) {
                    ld.apply(n, yc.call(l))
                } : function(n, l) {
                    for (var t = n.length, w = 0; n[t++] = l[w++];);
                    n.length = t - 1
                }
            }
        }
        var ra = b.support = {};
        var td = b.isXML = function(h) {
            return (h = h && (h.ownerDocument || h).documentElement) ? "HTML" !== h.nodeName : !1
        };
        var fb = b.setDocument = function(h) {
            var n;
            h = h ? h.ownerDocument || h : ia;
            if (h === T || 9 !== h.nodeType || !h.documentElement) return T;
            T = h;
            va = T.documentElement;
            oa = !td(T);
            (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", zc, !1) : n.attachEvent && n.attachEvent("onunload", zc));
            ra.attributes = f(function(l) {
                l.className = "i";
                return !l.getAttribute("className")
            });
            ra.getElementsByTagName = f(function(l) {
                l.appendChild(T.createComment(""));
                return !l.getElementsByTagName("*").length
            });
            ra.getElementsByClassName = xb.test(T.getElementsByClassName);
            ra.getById = f(function(l) {
                va.appendChild(l).id = fa;
                return !T.getElementsByName || !T.getElementsByName(fa).length
            });
            ra.getById ? (ka.find.ID = function(l, t) {
                if ("undefined" !== typeof t.getElementById && oa) return (l = t.getElementById(l)) ? [l] : []
            }, ka.filter.ID = function(l) {
                var t = l.replace(Xa, Ya);
                return function(w) {
                    return w.getAttribute("id") === t
                }
            }) : (delete ka.find.ID, ka.filter.ID = function(l) {
                var t = l.replace(Xa, Ya);
                return function(w) {
                    return (w = "undefined" !== typeof w.getAttributeNode && w.getAttributeNode("id")) && w.value ===
                        t
                }
            });
            ka.find.TAG = ra.getElementsByTagName ? function(l, t) {
                if ("undefined" !== typeof t.getElementsByTagName) return t.getElementsByTagName(l);
                if (ra.qsa) return t.querySelectorAll(l)
            } : function(l, t) {
                var w = [],
                    E = 0;
                t = t.getElementsByTagName(l);
                if ("*" === l) {
                    for (; l = t[E++];) 1 === l.nodeType && w.push(l);
                    return w
                }
                return t
            };
            ka.find.CLASS = ra.getElementsByClassName && function(l, t) {
                if ("undefined" !== typeof t.getElementsByClassName && oa) return t.getElementsByClassName(l)
            };
            za = [];
            ha = [];
            if (ra.qsa = xb.test(T.querySelectorAll)) f(function(l) {
                va.appendChild(l).innerHTML =
                    "\x3ca id\x3d'" + fa + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + fa + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                l.querySelectorAll("[msallowcapture^\x3d'']").length && ha.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                l.querySelectorAll("[selected]").length || ha.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                l.querySelectorAll("[id~\x3d" + fa + "-]").length ||
                    ha.push("~\x3d");
                l.querySelectorAll(":checked").length || ha.push(":checked");
                l.querySelectorAll("a#" + fa + "+*").length || ha.push(".#.+[+~]")
            }), f(function(l) {
                var t = T.createElement("input");
                t.setAttribute("type", "hidden");
                l.appendChild(t).setAttribute("name", "D");
                l.querySelectorAll("[name\x3dd]").length && ha.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                l.querySelectorAll(":enabled").length || ha.push(":enabled", ":disabled");
                l.querySelectorAll("*,:x");
                ha.push(",.*:")
            });
            (ra.matchesSelector = xb.test(Ca = va.matches ||
                va.webkitMatchesSelector || va.mozMatchesSelector || va.oMatchesSelector || va.msMatchesSelector)) && f(function(l) {
                ra.disconnectedMatch = Ca.call(l, "div");
                Ca.call(l, "[s!\x3d'']:x");
                za.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            ha = ha.length && new RegExp(ha.join("|"));
            za = za.length && new RegExp(za.join("|"));
            Ka = (n = xb.test(va.compareDocumentPosition)) || xb.test(va.contains) ? function(l, t) {
                var w = 9 === l.nodeType ? l.documentElement : l;
                t = t && t.parentNode;
                return l === t || !!(t && 1 === t.nodeType && (w.contains ? w.contains(t) : l.compareDocumentPosition && l.compareDocumentPosition(t) & 16))
            } : function(l, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === l) return !0;
                return !1
            };
            ob = n ? function(l, t) {
                if (l === t) return ta = !0, 0;
                var w = !l.compareDocumentPosition - !t.compareDocumentPosition;
                if (w) return w;
                w = (l.ownerDocument || l) === (t.ownerDocument || t) ? l.compareDocumentPosition(t) : 1;
                return w & 1 || !ra.sortDetached && t.compareDocumentPosition(l) === w ? l === T || l.ownerDocument === ia && Ka(ia, l) ? -1 : t === T || t.ownerDocument === ia && Ka(ia, t) ? 1 : Z ? gb(Z, l) - gb(Z, t) : 0 : w & 4 ? -1 : 1
            } : function(l, t) {
                if (l === t) return ta = !0, 0;
                var w = 0,
                    E = l.parentNode,
                    D = t.parentNode,
                    O = [l],
                    H = [t];
                if (!E || !D) return l === T ? -1 : t === T ? 1 : E ? -1 : D ? 1 : Z ? gb(Z, l) - gb(Z, t) : 0;
                if (E === D) return k(l, t);
                for (; l = l.parentNode;) O.unshift(l);
                for (l = t; l = l.parentNode;) H.unshift(l);
                for (; O[w] === H[w];) w++;
                return w ? k(O[w], H[w]) : O[w] === ia ? -1 : H[w] === ia ? 1 : 0
            };
            return T
        };
        b.matches = function(h, n) {
            return b(h, null, null, n)
        };
        b.matchesSelector = function(h, n) {
            (h.ownerDocument || h) !== T && fb(h);
            n = n.replace(pd, "\x3d'$1']");
            if (!(!ra.matchesSelector || !oa || Aa[n + " "] || za && za.test(n) || ha && ha.test(n))) try {
                var l = Ca.call(h, n);
                if (l || ra.disconnectedMatch || h.document && 11 !== h.document.nodeType) return l
            } catch (t) {}
            return 0 < b(n, T, null, [h]).length
        };
        b.contains = function(h, n) {
            (h.ownerDocument || h) !== T && fb(h);
            return Ka(h,
                n)
        };
        b.attr = function(h, n) {
            (h.ownerDocument || h) !== T && fb(h);
            var l = ka.attrHandle[n.toLowerCase()];
            l = l && pb.call(ka.attrHandle, n.toLowerCase()) ? l(h, n, !oa) : void 0;
            return void 0 !== l ? l : ra.attributes || !oa ? h.getAttribute(n) : (l = h.getAttributeNode(n)) && l.specified ? l.value : null
        };
        b.error = function(h) {
            throw Error("Syntax error, unrecognized expression: " + h);
        };
        b.uniqueSort = function(h) {
            var n, l = [],
                t = 0,
                w = 0;
            ta = !ra.detectDuplicates;
            Z = !ra.sortStable && h.slice(0);
            h.sort(ob);
            if (ta) {
                for (; n = h[w++];) n === h[w] && (t = l.push(w));
                for (; t--;) h.splice(l[t],
                    1)
            }
            Z = null;
            return h
        };
        var Yb = b.getText = function(h) {
            var n = "",
                l = 0;
            var t = h.nodeType;
            if (!t)
                for (; t = h[l++];) n += Yb(t);
            else if (1 === t || 9 === t || 11 === t) {
                if ("string" === typeof h.textContent) return h.textContent;
                for (h = h.firstChild; h; h = h.nextSibling) n += Yb(h)
            } else if (3 === t || 4 === t) return h.nodeValue;
            return n
        };
        var ka = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: Ib,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
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
                ATTR: function(h) {
                    h[1] = h[1].replace(Xa, Ya);
                    h[3] = (h[3] || h[4] || h[5] || "").replace(Xa, Ya);
                    "~\x3d" === h[2] && (h[3] = " " + h[3] + " ");
                    return h.slice(0, 4)
                },
                CHILD: function(h) {
                    h[1] = h[1].toLowerCase();
                    "nth" === h[1].slice(0, 3) ? (h[3] || b.error(h[0]), h[4] = +(h[4] ? h[5] + (h[6] || 1) : 2 * ("even" === h[3] || "odd" === h[3])), h[5] = +(h[7] + h[8] || "odd" === h[3])) : h[3] && b.error(h[0]);
                    return h
                },
                PSEUDO: function(h) {
                    var n, l = !h[6] && h[2];
                    if (Ib.CHILD.test(h[0])) return null;
                    h[3] ? h[2] = h[4] || h[5] || "" : l && qd.test(l) && (n = Eb(l, !0)) && (n = l.indexOf(")",
                        l.length - n) - l.length) && (h[0] = h[0].slice(0, n), h[2] = l.slice(0, n));
                    return h.slice(0, 3)
                }
            },
            filter: {
                TAG: function(h) {
                    var n = h.replace(Xa, Ya).toLowerCase();
                    return "*" === h ? function() {
                        return !0
                    } : function(l) {
                        return l.nodeName && l.nodeName.toLowerCase() === n
                    }
                },
                CLASS: function(h) {
                    var n = hb[h + " "];
                    return n || (n = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + h + "([\\x20\\t\\r\\n\\f]|$)"), hb(h, function(l) {
                        return n.test("string" === typeof l.className && l.className || "undefined" !== typeof l.getAttribute && l.getAttribute("class") || "")
                    }))
                },
                ATTR: function(h, n, l) {
                    return function(t) {
                        t = b.attr(t, h);
                        if (null == t) return "!\x3d" === n;
                        if (!n) return !0;
                        t += "";
                        return "\x3d" === n ? t === l : "!\x3d" === n ? t !== l : "^\x3d" === n ? l && 0 === t.indexOf(l) : "*\x3d" === n ? l && -1 < t.indexOf(l) : "$\x3d" === n ? l && t.slice(-l.length) === l : "~\x3d" === n ? -1 < (" " + t.replace(md, " ") + " ").indexOf(l) : "|\x3d" === n ? t === l || t.slice(0, l.length + 1) === l + "-" : !1
                    }
                },
                CHILD: function(h, n, l, t, w) {
                    var E = "nth" !== h.slice(0, 3),
                        D = "last" !== h.slice(-4),
                        O = "of-type" === n;
                    return 1 === t && 0 === w ? function(H) {
                        return !!H.parentNode
                    } : function(H,
                        S, aa) {
                        var Q, sa;
                        S = E !== D ? "nextSibling" : "previousSibling";
                        var ya = H.parentNode,
                            wa = O && H.nodeName.toLowerCase();
                        aa = !aa && !O;
                        var V = !1;
                        if (ya) {
                            if (E) {
                                for (; S;) {
                                    for (Q = H; Q = Q[S];)
                                        if (O ? Q.nodeName.toLowerCase() === wa : 1 === Q.nodeType) return !1;
                                    var Ra = S = "only" === h && !Ra && "nextSibling"
                                }
                                return !0
                            }
                            Ra = [D ? ya.firstChild : ya.lastChild];
                            if (D && aa) {
                                Q = ya;
                                var ua = Q[fa] || (Q[fa] = {});
                                ua = ua[Q.uniqueID] || (ua[Q.uniqueID] = {});
                                V = ua[h] || [];
                                V = (sa = V[0] === xa && V[1]) && V[2];
                                for (Q = sa && ya.childNodes[sa]; Q = ++sa && Q && Q[S] || (V = sa = 0) || Ra.pop();)
                                    if (1 === Q.nodeType &&
                                        ++V && Q === H) {
                                        ua[h] = [xa, sa, V];
                                        break
                                    }
                            } else if (aa && (Q = H, ua = Q[fa] || (Q[fa] = {}), ua = ua[Q.uniqueID] || (ua[Q.uniqueID] = {}), V = ua[h] || [], V = sa = V[0] === xa && V[1]), !1 === V)
                                for (;
                                    (Q = ++sa && Q && Q[S] || (V = sa = 0) || Ra.pop()) && ((O ? Q.nodeName.toLowerCase() !== wa : 1 !== Q.nodeType) || !++V || (aa && (ua = Q[fa] || (Q[fa] = {}), ua = ua[Q.uniqueID] || (ua[Q.uniqueID] = {}), ua[h] = [xa, V]), Q !== H)););
                            V -= w;
                            return V === t || 0 === V % t && 0 <= V / t
                        }
                    }
                },
                PSEUDO: function(h, n) {
                    var l = ka.pseudos[h] || ka.setFilters[h.toLowerCase()] || b.error("unsupported pseudo: " + h);
                    if (l[fa]) return l(n);
                    if (1 < l.length) {
                        var t = [h, h, "", n];
                        return ka.setFilters.hasOwnProperty(h.toLowerCase()) ? e(function(w, E) {
                            for (var D, O = l(w, n), H = O.length; H--;) D = gb(w, O[H]), w[D] = !(E[D] = O[H])
                        }) : function(w) {
                            return l(w, 0, t)
                        }
                    }
                    return l
                }
            },
            pseudos: {
                not: e(function(h) {
                    var n = [],
                        l = [],
                        t = Ac(h.replace(Fb, "$1"));
                    return t[fa] ? e(function(w, E, D, O) {
                        O = t(w, null, O, []);
                        for (var H = w.length; H--;)
                            if (D = O[H]) w[H] = !(E[H] = D)
                    }) : function(w, E, D) {
                        n[0] = w;
                        t(n, null, D, l);
                        n[0] = null;
                        return !l.pop()
                    }
                }),
                has: e(function(h) {
                    return function(n) {
                        return 0 < b(h, n).length
                    }
                }),
                contains: e(function(h) {
                    h = h.replace(Xa, Ya);
                    return function(n) {
                        return -1 < (n.textContent || n.innerText || Yb(n)).indexOf(h)
                    }
                }),
                lang: e(function(h) {
                    xc.test(h || "") || b.error("unsupported lang: " + h);
                    h = h.replace(Xa, Ya).toLowerCase();
                    return function(n) {
                        var l;
                        do
                            if (l = oa ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")) return l = l.toLowerCase(), l === h || 0 === l.indexOf(h + "-"); while ((n = n.parentNode) && 1 === n.nodeType);
                        return !1
                    }
                }),
                target: function(h) {
                    var n = a.location && a.location.hash;
                    return n && n.slice(1) === h.id
                },
                root: function(h) {
                    return h === va
                },
                focus: function(h) {
                    return h === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(h.type || h.href || ~h.tabIndex)
                },
                enabled: function(h) {
                    return !1 === h.disabled
                },
                disabled: function(h) {
                    return !0 === h.disabled
                },
                checked: function(h) {
                    var n = h.nodeName.toLowerCase();
                    return "input" === n && !!h.checked || "option" === n && !!h.selected
                },
                selected: function(h) {
                    h.parentNode && h.parentNode.selectedIndex;
                    return !0 === h.selected
                },
                empty: function(h) {
                    for (h = h.firstChild; h; h = h.nextSibling)
                        if (6 > h.nodeType) return !1;
                    return !0
                },
                parent: function(h) {
                    return !ka.pseudos.empty(h)
                },
                header: function(h) {
                    return sd.test(h.nodeName)
                },
                input: function(h) {
                    return rd.test(h.nodeName)
                },
                button: function(h) {
                    var n = h.nodeName.toLowerCase();
                    return "input" === n && "button" === h.type || "button" === n
                },
                text: function(h) {
                    var n;
                    return "input" === h.nodeName.toLowerCase() && "text" === h.type && (null == (n = h.getAttribute("type")) || "text" === n.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(h, n) {
                    return [n - 1]
                }),
                eq: q(function(h, n, l) {
                    return [0 > l ? l + n : l]
                }),
                even: q(function(h, n) {
                    for (var l = 0; l < n; l += 2) h.push(l);
                    return h
                }),
                odd: q(function(h, n) {
                    for (var l = 1; l < n; l += 2) h.push(l);
                    return h
                }),
                lt: q(function(h, n, l) {
                    for (n = 0 > l ? l + n : l; 0 <= --n;) h.push(n);
                    return h
                }),
                gt: q(function(h, n, l) {
                    for (l = 0 > l ? l + n : l; ++l < n;) h.push(l);
                    return h
                })
            }
        };
        ka.pseudos.nth = ka.pseudos.eq;
        for (X in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) ka.pseudos[X] = m(X);
        for (X in {
                submit: !0,
                reset: !0
            }) ka.pseudos[X] = p(X);
        z.prototype = ka.filters = ka.pseudos;
        ka.setFilters = new z;
        var Eb = b.tokenize = function(h, n) {
            var l,
                t, w, E, D;
            if (E = Sa[h + " "]) return n ? 0 : E.slice(0);
            E = h;
            var O = [];
            for (D = ka.preFilter; E;) {
                if (!H || (l = nd.exec(E))) l && (E = E.slice(l[0].length) || E), O.push(t = []);
                var H = !1;
                if (l = od.exec(E)) H = l.shift(), t.push({
                    value: H,
                    type: l[0].replace(Fb, " ")
                }), E = E.slice(H.length);
                for (w in ka.filter) !(l = Ib[w].exec(E)) || D[w] && !(l = D[w](l)) || (H = l.shift(), t.push({
                    value: H,
                    type: w,
                    matches: l
                }), E = E.slice(H.length));
                if (!H) break
            }
            return n ? E.length : E ? b.error(h) : Sa(h, O).slice(0)
        };
        var Ac = b.compile = function(h, n) {
            var l, t = [],
                w = [],
                E = Aa[h + " "];
            if (!E) {
                n ||
                    (n = Eb(h));
                for (l = n.length; l--;) E = Ea(n[l]), E[fa] ? t.push(E) : w.push(E);
                E = Aa(h, Hb(w, t));
                E.selector = h
            }
            return E
        };
        var jd = b.select = function(h, n, l, t) {
            var w, E, D, O = "function" === typeof h && h,
                H = !t && Eb(h = O.selector || h);
            l = l || [];
            if (1 === H.length) {
                var S = H[0] = H[0].slice(0);
                if (2 < S.length && "ID" === (E = S[0]).type && ra.getById && 9 === n.nodeType && oa && ka.relative[S[1].type]) {
                    n = (ka.find.ID(E.matches[0].replace(Xa, Ya), n) || [])[0];
                    if (!n) return l;
                    O && (n = n.parentNode);
                    h = h.slice(S.shift().value.length)
                }
                for (w = Ib.needsContext.test(h) ? 0 : S.length; w--;) {
                    E =
                        S[w];
                    if (ka.relative[D = E.type]) break;
                    if (D = ka.find[D])
                        if (t = D(E.matches[0].replace(Xa, Ya), Wb.test(S[0].type) && u(n.parentNode) || n)) {
                            S.splice(w, 1);
                            h = t.length && I(S);
                            if (!h) return ab.apply(l, t), l;
                            break
                        }
                }
            }(O || Ac(h, H))(t, n, !oa, l, !n || Wb.test(h) && u(n.parentNode) || n);
            return l
        };
        ra.sortStable = fa.split("").sort(ob).join("") === fa;
        ra.detectDuplicates = !!ta;
        fb();
        ra.sortDetached = f(function(h) {
            return h.compareDocumentPosition(T.createElement("div")) & 1
        });
        f(function(h) {
            h.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            return "#" ===
                h.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(h, n, l) {
            if (!l) return h.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        });
        ra.attributes && f(function(h) {
            h.innerHTML = "\x3cinput/\x3e";
            h.firstChild.setAttribute("value", "");
            return "" === h.firstChild.getAttribute("value")
        }) || g("value", function(h, n, l) {
            if (!l && "input" === h.nodeName.toLowerCase()) return h.defaultValue
        });
        f(function(h) {
            return null == h.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function(h, n, l) {
                var t;
                if (!l) return !0 === h[n] ? n.toLowerCase() : (t = h.getAttributeNode(n)) && t.specified ? t.value : null
            });
        return b
    }(r);
    c.find = qb;
    c.expr = qb.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.uniqueSort = c.unique = qb.uniqueSort;
    c.text = qb.getText;
    c.isXMLDoc = qb.isXML;
    c.contains = qb.contains;
    var rb = function(a, b, d) {
            for (var e = [], f = void 0 !== d;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && c(a).is(d)) break;
                    e.push(a)
                }
            return e
        },
        Bc = function(a, b) {
            for (var d = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && d.push(a);
            return d
        },
        Cc = c.expr.match.needsContext,
        Dc = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Sc = /^.[^:#\[\.,]*$/;
    c.filter = function(a, b, d) {
        var e = b[0];
        d && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b, function(f) {
            return 1 === f.nodeType
        }))
    };
    c.fn.extend({
        find: function(a) {
            var b, d = [],
                e = this,
                f = e.length;
            if ("string" !== typeof a) return this.pushStack(c(a).filter(function() {
                for (b = 0; b < f; b++)
                    if (c.contains(e[b], this)) return !0
            }));
            for (b = 0; b < f; b++) c.find(a, e[b], d);
            d = this.pushStack(1 <
                f ? c.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d
        },
        filter: function(a) {
            return this.pushStack(C(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(C(this, a || [], !0))
        },
        is: function(a) {
            return !!C(this, "string" === typeof a && Cc.test(a) ? c(a) : a || [], !1).length
        }
    });
    var ud = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function(a, b, d) {
        if (!a) return this;
        d = d || Ec;
        if ("string" === typeof a) {
            var e = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : ud.exec(a);
            if (!e ||
                !e[1] && b) return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : K, !0)), Dc.test(e[1]) && c.isPlainObject(b))
                    for (e in b)
                        if (c.isFunction(this[e])) this[e](b[e]);
                        else this.attr(e, b[e])
            } else {
                if ((b = K.getElementById(e[2])) && b.parentNode) {
                    if (b.id !== e[2]) return Ec.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = K;
                this.selector = a
            }
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (c.isFunction(a)) return "undefined" !==
            typeof d.ready ? d.ready(a) : a(c);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return c.makeArray(a, this)
    }).prototype = c.fn;
    var Ec = c(K);
    var vd = /^(?:parents|prev(?:Until|All))/,
        wd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        has: function(a) {
            var b, d = c(a, this),
                e = d.length;
            return this.filter(function() {
                for (b = 0; b < e; b++)
                    if (c.contains(this, d[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var d, e = 0, f = this.length, g = [], k = Cc.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0; e < f; e++)
                for (d =
                    this[e]; d && d !== b; d = d.parentNode)
                    if (11 > d.nodeType && (k ? -1 < k.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
                        g.push(d);
                        break
                    }
            return this.pushStack(1 < g.length ? c.uniqueSort(g) : g)
        },
        index: function(a) {
            return a ? "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(c.uniqueSort(c.merge(this.get(), c(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return rb(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return rb(a, "parentNode", d)
        },
        next: function(a) {
            return x(a, "nextSibling")
        },
        prev: function(a) {
            return x(a, "previousSibling")
        },
        nextAll: function(a) {
            return rb(a, "nextSibling")
        },
        prevAll: function(a) {
            return rb(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return rb(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return rb(a, "previousSibling", d)
        },
        siblings: function(a) {
            return Bc((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return Bc(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)
        }
    }, function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d);
            "Until" !== a.slice(-5) && (e = d);
            e && "string" === typeof e && (f = c.filter(e, f));
            1 < this.length && (wd[a] || (f = c.uniqueSort(f)), vd.test(a) && (f = f.reverse()));
            return this.pushStack(f)
        }
    });
    var Pa = /\S+/g;
    c.Callbacks = function(a) {
        a = "string" === typeof a ? P(a) : c.extend({}, a);
        var b,
            d, e, f, g = [],
            k = [],
            m = -1,
            p = function() {
                f = a.once;
                for (e = b = !0; k.length; m = -1)
                    for (d = k.shift(); ++m < g.length;) !1 === g[m].apply(d[0], d[1]) && a.stopOnFalse && (m = g.length, d = !1);
                a.memory || (d = !1);
                b = !1;
                f && (g = d ? [] : "")
            },
            q = {
                add: function() {
                    g && (d && !b && (m = g.length - 1, k.push(d)), function I(z) {
                        c.each(z, function(ma, ba) {
                            c.isFunction(ba) ? a.unique && q.has(ba) || g.push(ba) : ba && ba.length && "string" !== c.type(ba) && I(ba)
                        })
                    }(arguments), d && !b && p());
                    return this
                },
                remove: function() {
                    c.each(arguments, function(u, z) {
                        for (var I; - 1 < (I = c.inArray(z, g,
                                I));) g.splice(I, 1), I <= m && m--
                    });
                    return this
                },
                has: function(u) {
                    return u ? -1 < c.inArray(u, g) : 0 < g.length
                },
                empty: function() {
                    g && (g = []);
                    return this
                },
                disable: function() {
                    f = k = [];
                    g = d = "";
                    return this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    f = !0;
                    d || q.disable();
                    return this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(u, z) {
                    f || (z = z || [], z = [u, z.slice ? z.slice() : z], k.push(z), b || p());
                    return this
                },
                fire: function() {
                    q.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return q
    };
    c.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", c.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", c.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", c.Callbacks("memory")]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        f.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var g = arguments;
                        return c.Deferred(function(k) {
                            c.each(b, function(m, p) {
                                var q = c.isFunction(g[m]) && g[m];
                                f[p[1]](function() {
                                    var u = q && q.apply(this, arguments);
                                    if (u && c.isFunction(u.promise)) u.promise().progress(k.notify).done(k.resolve).fail(k.reject);
                                    else k[p[0] + "With"](this === e ? k.promise() : this, q ? [u] : arguments)
                                })
                            });
                            g = null
                        }).promise()
                    },
                    promise: function(g) {
                        return null != g ? c.extend(g, e) : e
                    }
                },
                f = {};
            e.pipe = e.then;
            c.each(b, function(g, k) {
                var m = k[2],
                    p = k[3];
                e[k[1]] = m.add;
                p && m.add(function() {
                    d = p
                }, b[g ^ 1][2].disable, b[2][2].lock);
                f[k[0]] = function() {
                    f[k[0] + "With"](this === f ? e : this, arguments);
                    return this
                };
                f[k[0] + "With"] = m.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        },
        when: function(a) {
            var b = 0,
                d = $a.call(arguments),
                e = d.length,
                f = 1 !== e || a && c.isFunction(a.promise) ?
                e : 0,
                g = 1 === f ? a : c.Deferred(),
                k = function(u, z, I) {
                    return function(ma) {
                        z[u] = this;
                        I[u] = 1 < arguments.length ? $a.call(arguments) : ma;
                        I === p ? g.notifyWith(z, I) : --f || g.resolveWith(z, I)
                    }
                },
                m;
            if (1 < e) {
                var p = Array(e);
                var q = Array(e);
                for (m = Array(e); b < e; b++) d[b] && c.isFunction(d[b].promise) ? d[b].promise().progress(k(b, q, p)).done(k(b, m, d)).fail(g.reject) : --f
            }
            f || g.resolveWith(m, d);
            return g.promise()
        }
    });
    var Jb;
    c.fn.ready = function(a) {
        c.ready.promise().done(a);
        return this
    };
    c.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ?
                c.readyWait++ : c.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --c.readyWait : c.isReady) || (c.isReady = !0, !0 !== a && 0 < --c.readyWait || (Jb.resolveWith(K, [c]), c.fn.triggerHandler && (c(K).triggerHandler("ready"), c(K).off("ready"))))
        }
    });
    c.ready.promise = function(a) {
        if (!Jb)
            if (Jb = c.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll) r.setTimeout(c.ready);
            else if (K.addEventListener) K.addEventListener("DOMContentLoaded", y), r.addEventListener("load", y);
        else {
            K.attachEvent("onreadystatechange",
                y);
            r.attachEvent("onload", y);
            var b = !1;
            try {
                b = null == r.frameElement && K.documentElement
            } catch (d) {}
            b && b.doScroll && function e() {
                if (!c.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (f) {
                        return r.setTimeout(e, 50)
                    }
                    N();
                    c.ready()
                }
            }()
        }
        return Jb.promise(a)
    };
    c.ready.promise();
    for (var xd in c(G)) break;
    G.ownFirst = "0" === xd;
    G.inlineBlockNeedsLayout = !1;
    c(function() {
        var a;
        if ((a = K.getElementsByTagName("body")[0]) && a.style) {
            var b = K.createElement("div");
            var d = K.createElement("div");
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            a.appendChild(d).appendChild(b);
            "undefined" !== typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", G.inlineBlockNeedsLayout = b = 3 === b.offsetWidth) && (a.style.zoom = 1);
            a.removeChild(d)
        }
    });
    (function() {
        var a = K.createElement("div");
        G.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            G.deleteExpando = !1
        }
    })();
    var tb = function(a) {
            var b = c.noData[(a.nodeName + " ").toLowerCase()],
                d = +a.nodeType || 1;
            return 1 !== d && 9 !== d ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
        },
        Uc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Tc = /([A-Z])/g;
    c.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !!a && !A(a)
        },
        data: function(a, b, d) {
            return J(a, b, d)
        },
        removeData: function(a, b) {
            return Y(a, b)
        },
        _data: function(a, b, d) {
            return J(a, b, d, !0)
        },
        _removeData: function(a, b) {
            return Y(a, b, !0)
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e = this[0],
                f = e && e.attributes;
            if (void 0 === a) {
                if (this.length) {
                    var g = c.data(e);
                    if (1 === e.nodeType &&
                        !c._data(e, "parsedAttrs")) {
                        for (d = f.length; d--;)
                            if (f[d]) {
                                var k = f[d].name;
                                0 === k.indexOf("data-") && (k = c.camelCase(k.slice(5)), v(e, k, g[k]))
                            }
                        c._data(e, "parsedAttrs", !0)
                    }
                }
                return g
            }
            return "object" === typeof a ? this.each(function() {
                c.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                c.data(this, a, b)
            }) : e ? v(e, a, c.data(e, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = c._data(a, b);
                d && (!e || c.isArray(d) ?
                    e = c._data(a, b, c.makeArray(d)) : e.push(d));
                return e || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
                e = d.length,
                f = d.shift(),
                g = c._queueHooks(a, b),
                k = function() {
                    c.dequeue(a, b)
                };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === b && d.unshift("inprogress"), delete g.stop, f.call(a, k, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return c._data(a, d) || c._data(a, d, {
                empty: c.Callbacks("once memory").add(function() {
                    c._removeData(a, b + "queue");
                    c._removeData(a, d)
                })
            })
        }
    });
    c.fn.extend({
        queue: function(a,
            b) {
            var d = 2;
            "string" !== typeof a && (b = a, a = "fx", d--);
            return arguments.length < d ? c.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var e = c.queue(this, a, b);
                c._queueHooks(this, a);
                "fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, e = 1,
                f = c.Deferred(),
                g = this,
                k = this.length,
                m = function() {
                    --e || f.resolveWith(g, [g])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a =
                a || "fx"; k--;)(d = c._data(g[k], a + "queueHooks")) && d.empty && (e++, d.empty.add(m));
            m();
            return f.promise(b)
        }
    });
    (function() {
        var a;
        G.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b;
            if ((b = K.getElementsByTagName("body")[0]) && b.style) {
                var d = K.createElement("div");
                var e = K.createElement("div");
                e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                b.appendChild(e).appendChild(d);
                "undefined" !== typeof d.style.zoom && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    d.appendChild(K.createElement("div")).style.width = "5px", a = 3 !== d.offsetWidth);
                b.removeChild(e);
                return a
            }
        }
    })();
    var Zb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ob = new RegExp("^(?:([+-])\x3d|)(" + Zb + ")([a-z%]*)$", "i"),
        cb = ["Top", "Right", "Bottom", "Left"],
        wb = function(a, b) {
            a = b || a;
            return "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
        },
        bb = function(a, b, d, e, f, g, k) {
            var m = 0,
                p = a.length,
                q = null == d;
            if ("object" === c.type(d))
                for (m in f = !0, d) bb(a, b, m, d[m], !0, g, k);
            else if (void 0 !== e && (f = !0, c.isFunction(e) ||
                    (k = !0), q && (k ? (b.call(a, e), b = null) : (q = b, b = function(u, z, I) {
                        return q.call(c(u), I)
                    })), b))
                for (; m < p; m++) b(a[m], d, k ? e : e.call(a[m], m, b(a[m], d)));
            return f ? a : q ? b.call(a) : p ? b(a[0], d) : g
        },
        Pb = /^(?:checkbox|radio)$/i,
        jc = /<([\w:-]+)/,
        lc = /^$|\/(?:java|ecma)script/i,
        Qb = /^\s+/;
    (function() {
        var a = K.createElement("div"),
            b = K.createDocumentFragment(),
            d = K.createElement("input");
        a.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        G.leadingWhitespace = 3 ===
            a.firstChild.nodeType;
        G.tbody = !a.getElementsByTagName("tbody").length;
        G.htmlSerialize = !!a.getElementsByTagName("link").length;
        G.html5Clone = "\x3c:nav\x3e\x3c/:nav\x3e" !== K.createElement("nav").cloneNode(!0).outerHTML;
        d.type = "checkbox";
        d.checked = !0;
        b.appendChild(d);
        G.appendChecked = d.checked;
        a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
        G.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
        a.innerHTML = "\x3coption\x3e\x3c/option\x3e";
        G.option = !!a.lastChild;
        b.appendChild(a);
        d = K.createElement("input");
        d.setAttribute("type", "radio");
        d.setAttribute("checked", "checked");
        d.setAttribute("name", "t");
        a.appendChild(d);
        G.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        G.noCloneEvent = !!a.addEventListener;
        a[c.expando] = 1;
        G.attributes = !a.getAttribute(c.expando)
    })();
    var Ja = {
        legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
        area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
        param: [1, "\x3cobject\x3e", "\x3c/object\x3e"],
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
        td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
        _default: G.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
    };
    Ja.tbody = Ja.tfoot = Ja.colgroup = Ja.caption = Ja.thead;
    Ja.th = Ja.td;
    G.option || (Ja.optgroup = Ja.option = [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"]);
    var Vc = /<|&#?\w+;/,
        kc = /<tbody/i;
    (function() {
        var a, b = K.createElement("div");
        for (a in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            var d = "on" + a;
            (G[a] = d in r) || (b.setAttribute(d, "t"), G[a] = !1 === b.attributes[d].expando)
        }
    })();
    var $b = /^(?:input|select|textarea)$/i,
        yd = /^key/,
        zd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Fc = /^(?:focusinfocus|focusoutblur)$/,
        Gc = /^([^.]*)(?:\.(.+)|)/;
    c.event = {
        global: {},
        add: function(a, b, d, e, f) {
            var g, k, m, p, q;
            if (k = c._data(a)) {
                if (d.handler) {
                    var u = d;
                    d = u.handler;
                    f = u.selector
                }
                d.guid || (d.guid = c.guid++);
                (g = k.events) || (g = k.events = {});
                (m = k.handle) || (m = k.handle = function(ba) {
                    return "undefined" ===
                        typeof c || ba && c.event.triggered === ba.type ? void 0 : c.event.dispatch.apply(m.elem, arguments)
                }, m.elem = a);
                b = (b || "").match(Pa) || [""];
                for (k = b.length; k--;) {
                    var z = Gc.exec(b[k]) || [];
                    var I = p = z[1];
                    var ma = (z[2] || "").split(".").sort();
                    I && (z = c.event.special[I] || {}, I = (f ? z.delegateType : z.bindType) || I, z = c.event.special[I] || {}, p = c.extend({
                        type: I,
                        origType: p,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && c.expr.match.needsContext.test(f),
                        namespace: ma.join(".")
                    }, u), (q = g[I]) || (q = g[I] = [], q.delegateCount = 0, z.setup &&
                        !1 !== z.setup.call(a, e, ma, m) || (a.addEventListener ? a.addEventListener(I, m, !1) : a.attachEvent && a.attachEvent("on" + I, m))), z.add && (z.add.call(a, p), p.handler.guid || (p.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, p) : q.push(p), c.event.global[I] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, d, e, f) {
            var g, k, m, p, q, u = c.hasData(a) && c._data(a);
            if (u && (p = u.events)) {
                b = (b || "").match(Pa) || [""];
                for (m = b.length; m--;) {
                    var z = Gc.exec(b[m]) || [];
                    var I = q = z[1];
                    var ma = (z[2] || "").split(".").sort();
                    if (I) {
                        var ba = c.event.special[I] || {};
                        I = (e ? ba.delegateType : ba.bindType) || I;
                        var Ia = p[I] || [];
                        z = z[2] && new RegExp("(^|\\.)" + ma.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (k = g = Ia.length; g--;) {
                            var Ga = Ia[g];
                            !f && q !== Ga.origType || d && d.guid !== Ga.guid || z && !z.test(Ga.namespace) || e && e !== Ga.selector && ("**" !== e || !Ga.selector) || (Ia.splice(g, 1), Ga.selector && Ia.delegateCount--, ba.remove && ba.remove.call(a, Ga))
                        }
                        k && !Ia.length && (ba.teardown && !1 !== ba.teardown.call(a, ma, u.handle) || c.removeEvent(a, I, u.handle), delete p[I])
                    } else
                        for (I in p) c.event.remove(a, I + b[m], d, e, !0)
                }
                c.isEmptyObject(p) && (delete u.handle, c._removeData(a, "events"))
            }
        },
        trigger: function(a, b, d, e) {
            var f, g, k = [d || K],
                m = nb.call(a, "type") ? a.type : a;
            var p = nb.call(a, "namespace") ? a.namespace.split(".") : [];
            var q = f = d = d || K;
            if (3 !== d.nodeType && 8 !== d.nodeType && !Fc.test(m + c.event.triggered)) {
                -1 < m.indexOf(".") && (p = m.split("."), m = p.shift(), p.sort());
                var u = 0 > m.indexOf(":") && "on" + m;
                a = a[c.expando] ? a : new c.Event(m, "object" === typeof a && a);
                a.isTrigger = e ? 2 : 3;
                a.namespace = p.join(".");
                a.rnamespace = a.namespace ? new RegExp("(^|\\.)" +
                    p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                a.result = void 0;
                a.target || (a.target = d);
                b = null == b ? [a] : c.makeArray(b, [a]);
                p = c.event.special[m] || {};
                if (e || !p.trigger || !1 !== p.trigger.apply(d, b)) {
                    if (!e && !p.noBubble && !c.isWindow(d)) {
                        var z = p.delegateType || m;
                        Fc.test(z + m) || (q = q.parentNode);
                        for (; q; q = q.parentNode) k.push(q), f = q;
                        f === (d.ownerDocument || K) && k.push(f.defaultView || f.parentWindow || r)
                    }
                    for (g = 0;
                        (q = k[g++]) && !a.isPropagationStopped();) a.type = 1 < g ? z : p.bindType || m, (f = (c._data(q, "events") || {})[a.type] && c._data(q, "handle")) &&
                        f.apply(q, b), (f = u && q[u]) && f.apply && tb(q) && (a.result = f.apply(q, b), !1 === a.result && a.preventDefault());
                    a.type = m;
                    if (!(e || a.isDefaultPrevented() || p._default && !1 !== p._default.apply(k.pop(), b)) && tb(d) && u && d[m] && !c.isWindow(d)) {
                        (f = d[u]) && (d[u] = null);
                        c.event.triggered = m;
                        try {
                            d[m]()
                        } catch (I) {}
                        c.event.triggered = void 0;
                        f && (d[u] = f)
                    }
                    return a.result
                }
            }
        },
        dispatch: function(a) {
            a = c.event.fix(a);
            var b, d, e, f = $a.call(arguments);
            var g = (c._data(this, "events") || {})[a.type] || [];
            var k = c.event.special[a.type] || {};
            f[0] = a;
            a.delegateTarget =
                this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                var m = c.event.handlers.call(this, a, g);
                for (g = 0;
                    (e = m[g++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, b = 0;
                        (d = e.handlers[b++]) && !a.isImmediatePropagationStopped();)
                        if (!a.rnamespace || a.rnamespace.test(d.namespace)) a.handleObj = d, a.data = d.data, d = ((c.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, f), void 0 !== d && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var d, e = [],
                f = b.delegateCount,
                g = a.target;
            if (f && g.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; g != this; g = g.parentNode || this)
                    if (1 === g.nodeType && (!0 !== g.disabled || "click" !== a.type)) {
                        var k = [];
                        for (d = 0; d < f; d++) {
                            var m = b[d];
                            var p = m.selector + " ";
                            void 0 === k[p] && (k[p] = m.needsContext ? -1 < c(p, this).index(g) : c.find(p, this, null, [g]).length);
                            k[p] && k.push(m)
                        }
                        k.length && e.push({
                            elem: g,
                            handlers: k
                        })
                    }
            f < b.length && e.push({
                elem: this,
                handlers: b.slice(f)
            });
            return e
        },
        fix: function(a) {
            if (a[c.expando]) return a;
            var b = a.type;
            var d = a,
                e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = zd.test(b) ? this.mouseHooks : yd.test(b) ? this.keyHooks : {});
            var f = e.props ? this.props.concat(e.props) : this.props;
            a = new c.Event(d);
            for (b = f.length; b--;) {
                var g = f[b];
                a[g] = d[g]
            }
            a.target || (a.target = d.srcElement || K);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return e.filter ? e.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var d = b.button,
                    e = b.fromElement;
                if (null == a.pageX && null != b.clientX) {
                    var f = a.target.ownerDocument || K;
                    var g = f.documentElement;
                    f = f.body;
                    a.pageX = b.clientX + (g && g.scrollLeft || f && f.scrollLeft || 0) - (g && g.clientLeft ||
                        f && f.clientLeft || 0);
                    a.pageY = b.clientY + (g && g.scrollTop || f && f.scrollTop || 0) - (g && g.clientTop || f && f.clientTop || 0)
                }!a.relatedTarget && e && (a.relatedTarget = e === a.target ? b.toElement : e);
                a.which || void 0 === d || (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Va() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Va() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (c.nodeName(this,
                            "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return c.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, d) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: !0
            });
            c.event.trigger(a, null, b);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.removeEvent = K.removeEventListener ? function(a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d)
    } : function(a,
        b, d) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, d))
    };
    c.Event = function(a, b) {
        if (!(this instanceof c.Event)) return new c.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Ua : Ha) : this.type = a;
        b && c.extend(this, b);
        this.timeStamp = a && a.timeStamp || c.now();
        this[c.expando] = !0
    };
    c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: Ha,
        isPropagationStopped: Ha,
        isImmediatePropagationStopped: Ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Ua;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Ua;
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Ua;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(d) {
                var e = d.relatedTarget,
                    f = d.handleObj;
                if (!e || e !== this && !c.contains(this, e)) {
                    d.type = f.origType;
                    var g = f.handler.apply(this, arguments);
                    d.type = b
                }
                return g
            }
        }
    });
    G.submit || (c.event.special.submit = {
        setup: function() {
            if (c.nodeName(this, "form")) return !1;
            c.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = c.nodeName(a, "input") || c.nodeName(a,
                    "button") ? c.prop(a, "form") : void 0) && !c._data(a, "submit") && (c.event.add(a, "submit._submit", function(b) {
                    b._submitBubble = !0
                }), c._data(a, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            if (c.nodeName(this, "form")) return !1;
            c.event.remove(this, "._submit")
        }
    });
    G.change || (c.event.special.change = {
        setup: function() {
            if ($b.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" ===
                    this.type) c.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), c.event.add(this, "click._change", function(a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1);
                    c.event.simulate("change", this, a)
                });
                return !1
            }
            c.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                $b.test(a.nodeName) && !c._data(a, "change") && (c.event.add(a, "change._change", function(b) {
                    !this.parentNode || b.isSimulated || b.isTrigger || c.event.simulate("change",
                        this.parentNode, b)
                }), c._data(a, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            c.event.remove(this, "._change");
            return !$b.test(this.nodeName)
        }
    });
    G.focusin || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = function(e) {
            c.event.simulate(b, e.target, c.event.fix(e))
        };
        c.event.special[b] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    f = c._data(e,
                        b);
                f || e.addEventListener(a, d, !0);
                c._data(e, b, (f || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    f = c._data(e, b) - 1;
                f ? c._data(e, b, f) : (e.removeEventListener(a, d, !0), c._removeData(e, b))
            }
        }
    });
    c.fn.extend({
        on: function(a, b, d, e) {
            return jb(this, a, b, d, e)
        },
        one: function(a, b, d, e) {
            return jb(this, a, b, d, e, 1)
        },
        off: function(a, b, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if ("object" ===
                typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) d = b, b = void 0;
            !1 === d && (d = Ha);
            return this.each(function() {
                c.event.remove(this, a, d, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            if (d) return c.event.trigger(a, b, d, !0)
        }
    });
    var Ad = / jQuery\d+="(?:null|\d+)"/g,
        Hc = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i,
        Bd = /<script|<style|<link/i,
        Xc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Wc = /^true\/(.*)/,
        Yc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ac = da(K).appendChild(K.createElement("div"));
    c.extend({
        htmlPrefilter: function(a) {
            return a
        },
        clone: function(a, b, d) {
            var e, f, g = c.contains(a.ownerDocument, a);
            if (G.html5Clone || c.isXMLDoc(a) || !Hc.test("\x3c" + a.nodeName + "\x3e")) var k = a.cloneNode(!0);
            else ac.innerHTML = a.outerHTML, ac.removeChild(k = ac.firstChild);
            if (!(G.noCloneEvent && G.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType ||
                    c.isXMLDoc(a))) {
                var m = la(k);
                var p = la(a);
                for (f = 0; null != (e = p[f]); ++f)
                    if (m[f]) {
                        var q = void 0,
                            u = e,
                            z = m[f];
                        if (1 === z.nodeType) {
                            var I = z.nodeName.toLowerCase();
                            if (!G.noCloneEvent && z[c.expando]) {
                                e = c._data(z);
                                for (q in e.events) c.removeEvent(z, q, e.handle);
                                z.removeAttribute(c.expando)
                            }
                            if ("script" === I && z.text !== u.text) kb(z).text = u.text, zb(z);
                            else if ("object" === I) z.parentNode && (z.outerHTML = u.outerHTML), G.html5Clone && u.innerHTML && !c.trim(z.innerHTML) && (z.innerHTML = u.innerHTML);
                            else if ("input" === I && Pb.test(u.type)) z.defaultChecked =
                                z.checked = u.checked, z.value !== u.value && (z.value = u.value);
                            else if ("option" === I) z.defaultSelected = z.selected = u.defaultSelected;
                            else if ("input" === I || "textarea" === I) z.defaultValue = u.defaultValue
                        }
                    }
            }
            if (b)
                if (d)
                    for (p = p || la(a), m = m || la(k), f = 0; null != (e = p[f]); f++) Ab(e, m[f]);
                else Ab(a, k);
            m = la(k, "script");
            0 < m.length && M(m, !g && la(a, "script"));
            return k
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, k = 0, m = c.expando, p = c.cache, q = G.attributes, u = c.event.special; null != (d = a[k]); k++)
                if (b || tb(d))
                    if (g = (f = d[m]) && p[f]) {
                        if (g.events)
                            for (e in g.events) u[e] ?
                                c.event.remove(d, e) : c.removeEvent(d, e, g.handle);
                        p[f] && (delete p[f], q || "undefined" === typeof d.removeAttribute ? d[m] = void 0 : d.removeAttribute(m), Ta.push(f))
                    }
        }
    });
    c.fn.extend({
        domManip: L,
        detach: function(a) {
            return W(this, a, !0)
        },
        remove: function(a) {
            return W(this, a)
        },
        text: function(a) {
            return bb(this, function(b) {
                return void 0 === b ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(b))
            }, null, a, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(a) {
                1 !== this.nodeType &&
                    11 !== this.nodeType && 9 !== this.nodeType || ub(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return L(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ub(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return L(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null !=
                (a = this[b]); b++) {
                for (1 === a.nodeType && c.cleanData(la(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && c.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            return bb(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    f = this.length;
                if (void 0 === b) return 1 === d.nodeType ? d.innerHTML.replace(Ad, "") : void 0;
                if (!("string" !== typeof b || Bd.test(b) || !G.htmlSerialize && Hc.test(b) || !G.leadingWhitespace &&
                        Qb.test(b) || Ja[(jc.exec(b) || ["", ""])[1].toLowerCase()])) {
                    b = c.htmlPrefilter(b);
                    try {
                        for (; e < f; e++) d = this[e] || {}, 1 === d.nodeType && (c.cleanData(la(d, !1)), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return L(this, arguments, function(b) {
                var d = this.parentNode;
                0 > c.inArray(this, a) && (c.cleanData(la(this)), d && d.replaceChild(b, this))
            }, a)
        }
    });
    c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(a, b) {
            c.fn[a] = function(d) {
                for (var e = 0, f = [], g = c(d), k = g.length - 1; e <= k; e++) d = e === k ? this : this.clone(!0), c(g[e])[b](d), Vb.apply(f, d.get());
                return this.pushStack(f)
            }
        });
    var vb, nc = {
            HTML: "block",
            BODY: "block"
        },
        Ic = /^margin/,
        Bb = new RegExp("^(" + Zb + ")(?!px)[a-z%]+$", "i"),
        bc = function(a, b, d, e) {
            var f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            d = d.apply(a, e || []);
            for (f in b) a.style[f] = g[f];
            return d
        },
        Jc = K.documentElement;
    (function() {
        function a() {
            var q = K.documentElement;
            q.appendChild(m);
            p.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            b = e = k = !1;
            d = g = !0;
            if (r.getComputedStyle) {
                var u = r.getComputedStyle(p);
                b = "1%" !== (u || {}).top;
                k = "2px" === (u || {}).marginLeft;
                e = "4px" === (u || {
                    width: "4px"
                }).width;
                p.style.marginRight = "50%";
                d = "4px" === (u || {
                    marginRight: "4px"
                }).marginRight;
                u = p.appendChild(K.createElement("div"));
                u.style.cssText = p.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                u.style.marginRight = u.style.width = "0";
                p.style.width = "1px";
                g = !parseFloat((r.getComputedStyle(u) || {}).marginRight);
                p.removeChild(u)
            }
            p.style.display = "none";
            if (f = 0 === p.getClientRects().length)
                if (p.style.display = "", p.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", p.childNodes[0].style.borderCollapse = "separate", u = p.getElementsByTagName("td"), u[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === u[0].offsetHeight) u[0].style.display = "", u[1].style.display = "none", f = 0 === u[0].offsetHeight;
            q.removeChild(m)
        }
        var b, d, e, f, g, k, m = K.createElement("div"),
            p = K.createElement("div");
        p.style && (p.style.cssText = "float:left;opacity:.5", G.opacity = "0.5" === p.style.opacity, G.cssFloat = !!p.style.cssFloat, p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === p.style.backgroundClip, m = K.createElement("div"), m.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", p.innerHTML = "", m.appendChild(p), G.boxSizing = "" === p.style.boxSizing || "" === p.style.MozBoxSizing ||
            "" === p.style.WebkitBoxSizing, c.extend(G, {
                reliableHiddenOffsets: function() {
                    null == b && a();
                    return f
                },
                boxSizingReliable: function() {
                    null == b && a();
                    return e
                },
                pixelMarginRight: function() {
                    null == b && a();
                    return d
                },
                pixelPosition: function() {
                    null == b && a();
                    return b
                },
                reliableMarginRight: function() {
                    null == b && a();
                    return g
                },
                reliableMarginLeft: function() {
                    null == b && a();
                    return k
                }
            }))
    })();
    var Cd = /^(top|right|bottom|left)$/;
    if (r.getComputedStyle) {
        var lb = function(a) {
            var b = a.ownerDocument.defaultView;
            b && b.opener || (b = r);
            return b.getComputedStyle(a)
        };
        var db = function(a, b, d) {
            var e = a.style;
            var f = (d = d || lb(a)) ? d.getPropertyValue(b) || d[b] : void 0;
            "" !== f && void 0 !== f || c.contains(a.ownerDocument, a) || (f = c.style(a, b));
            if (d && !G.pixelMarginRight() && Bb.test(f) && Ic.test(b)) {
                a = e.width;
                b = e.minWidth;
                var g = e.maxWidth;
                e.minWidth = e.maxWidth = e.width = f;
                f = d.width;
                e.width = a;
                e.minWidth = b;
                e.maxWidth = g
            }
            return void 0 === f ? f : f + ""
        }
    } else Jc.currentStyle && (lb = function(a) {
        return a.currentStyle
    }, db = function(a, b, d) {
        var e, f, g = a.style;
        var k = (d = d || lb(a)) ? d[b] : void 0;
        null == k && g && g[b] &&
            (k = g[b]);
        if (Bb.test(k) && !Cd.test(b)) {
            d = g.left;
            if (f = (e = a.runtimeStyle) && e.left) e.left = a.currentStyle.left;
            g.left = "fontSize" === b ? "1em" : k;
            k = g.pixelLeft + "px";
            g.left = d;
            f && (e.left = f)
        }
        return void 0 === k ? k : k + "" || "auto"
    });
    var cc = /alpha\([^)]*\)/i,
        Dd = /opacity\s*=\s*([^)]*)/i,
        Ed = /^(none|table(?!-c[ea]).+)/,
        Zc = new RegExp("^(" + Zb + ")(.*)$", "i"),
        Fd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pc = ["Webkit", "O", "Moz", "ms"],
        oc = K.createElement("div").style;
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a,
                    b) {
                    if (b) return a = db(a, "opacity"), "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": G.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g = c.camelCase(b),
                    k = a.style;
                b = c.cssProps[g] || (c.cssProps[g] = qa(g) || g);
                var m = c.cssHooks[b] || c.cssHooks[g];
                if (void 0 !== d) {
                    var p = typeof d;
                    "string" ===
                    p && (f = Ob.exec(d)) && f[1] && (d = U(a, b, f), p = "number");
                    if (null != d && d === d && ("number" === p && (d += f && f[3] || (c.cssNumber[g] ? "" : "px")), G.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (k[b] = "inherit"), !(m && "set" in m) || void 0 !== (d = m.set(a, d, e)))) try {
                        k[b] = d
                    } catch (q) {}
                } else return m && "get" in m && void 0 !== (f = m.get(a, !1, e)) ? f : k[b]
            }
        },
        css: function(a, b, d, e) {
            var f;
            var g = c.camelCase(b);
            b = c.cssProps[g] || (c.cssProps[g] = qa(g) || g);
            (g = c.cssHooks[b] || c.cssHooks[g]) && "get" in g && (f = g.get(a, !0, d));
            void 0 === f && (f = db(a, b, e));
            "normal" === f && b in Kc && (f = Kc[b]);
            return "" === d || d ? (a = parseFloat(f), !0 === d || isFinite(a) ? a || 0 : f) : f
        }
    });
    c.each(["height", "width"], function(a, b) {
        c.cssHooks[b] = {
            get: function(d, e, f) {
                if (e) return Ed.test(c.css(d, "display")) && 0 === d.offsetWidth ? bc(d, Fd, function() {
                    return La(d, b, f)
                }) : La(d, b, f)
            },
            set: function(d, e, f) {
                var g = f && lb(d);
                return Qa(d, e, f ? Da(d, b, f, G.boxSizing && "border-box" === c.css(d, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    G.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return Dd.test((b && a.currentStyle ? a.currentStyle.filter :
                a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var d = a.style;
            a = a.currentStyle;
            var e = c.isNumeric(b) ? "alpha(opacity\x3d" + 100 * b + ")" : "",
                f = a && a.filter || d.filter || "";
            d.zoom = 1;
            if ((1 <= b || "" === b) && "" === c.trim(f.replace(cc, "")) && d.removeAttribute && (d.removeAttribute("filter"), "" === b || a && !a.filter)) return;
            d.filter = cc.test(f) ? f.replace(cc, e) : f + " " + e
        }
    });
    c.cssHooks.marginRight = ja(G.reliableMarginRight, function(a, b) {
        if (b) return bc(a, {
            display: "inline-block"
        }, db, [a, "marginRight"])
    });
    c.cssHooks.marginLeft = ja(G.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(db(a, "marginLeft")) || (c.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - bc(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px"
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        c.cssHooks[a + b] = {
            expand: function(d) {
                var e = 0,
                    f = {};
                for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > e; e++) f[a + cb[e] + b] = d[e] || d[e - 2] || d[0];
                return f
            }
        };
        Ic.test(a) || (c.cssHooks[a + b].set = Qa)
    });
    c.fn.extend({
        css: function(a,
            b) {
            return bb(this, function(d, e, f) {
                var g, k = {},
                    m = 0;
                if (c.isArray(e)) {
                    f = lb(d);
                    for (g = e.length; m < g; m++) k[e[m]] = c.css(d, e[m], !1, f);
                    return k
                }
                return void 0 !== f ? c.style(d, e, f) : c.css(d, e)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return na(this, !0)
        },
        hide: function() {
            return na(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                wb(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.Tween = Fa;
    Fa.prototype = {
        constructor: Fa,
        init: function(a, b, d, e, f, g) {
            this.elem = a;
            this.prop = d;
            this.easing =
                f || c.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (c.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var a = Fa.propHooks[this.prop];
            return a && a.get ? a.get(this) : Fa.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = Fa.propHooks[this.prop];
            this.pos = this.options.duration ? b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            d && d.set ?
                d.set(this) : Fa.propHooks._default.set(this);
            return this
        }
    };
    Fa.prototype.init.prototype = Fa.prototype;
    Fa.propHooks = {
        _default: {
            get: function(a) {
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = c.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0
            },
            set: function(a) {
                if (c.fx.step[a.prop]) c.fx.step[a.prop](a);
                else 1 !== a.elem.nodeType || null == a.elem.style[c.cssProps[a.prop]] && !c.cssHooks[a.prop] ? a.elem[a.prop] = a.now : c.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    Fa.propHooks.scrollTop =
        Fa.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        };
    c.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    c.fx = Fa.prototype.init;
    c.fx.step = {};
    var mb, Kb, Gd = /^(?:toggle|show|hide)$/,
        Hd = /queueHooks$/;
    c.Animation = c.extend(Ma, {
        tweeners: {
            "*": [function(a, b) {
                var d = this.createTween(a, b);
                U(d.elem, a, Ob.exec(b), d);
                return d
            }]
        },
        tweener: function(a, b) {
            c.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Pa);
            for (var d, e = 0, f =
                    a.length; e < f; e++) d = a[e], Ma.tweeners[d] = Ma.tweeners[d] || [], Ma.tweeners[d].unshift(b)
        },
        prefilters: [function(a, b, d) {
            var e, f = this,
                g = {},
                k = a.style,
                m = a.nodeType && wb(a),
                p = c._data(a, "fxshow");
            if (!d.queue) {
                var q = c._queueHooks(a, "fx");
                if (null == q.unqueued) {
                    q.unqueued = 0;
                    var u = q.empty.fire;
                    q.empty.fire = function() {
                        q.unqueued || u()
                    }
                }
                q.unqueued++;
                f.always(function() {
                    f.always(function() {
                        q.unqueued--;
                        c.queue(a, "fx").length || q.empty.fire()
                    })
                })
            }
            if (1 === a.nodeType && ("height" in b || "width" in b)) {
                d.overflow = [k.overflow, k.overflowX,
                    k.overflowY
                ];
                var z = c.css(a, "display");
                var I = "none" === z ? c._data(a, "olddisplay") || ca(a.nodeName) : z;
                "inline" === I && "none" === c.css(a, "float") && (G.inlineBlockNeedsLayout && "inline" !== ca(a.nodeName) ? k.zoom = 1 : k.display = "inline-block")
            }
            d.overflow && (k.overflow = "hidden", G.shrinkWrapBlocks() || f.always(function() {
                k.overflow = d.overflow[0];
                k.overflowX = d.overflow[1];
                k.overflowY = d.overflow[2]
            }));
            for (e in b)
                if (I = b[e], Gd.exec(I)) {
                    delete b[e];
                    var ma = ma || "toggle" === I;
                    if (I === (m ? "hide" : "show"))
                        if ("show" === I && p && void 0 !==
                            p[e]) m = !0;
                        else continue;
                    g[e] = p && p[e] || c.style(a, e)
                } else z = void 0;
            if (c.isEmptyObject(g)) "inline" === ("none" === z ? ca(a.nodeName) : z) && (k.display = z);
            else
                for (e in p ? "hidden" in p && (m = p.hidden) : p = c._data(a, "fxshow", {}), ma && (p.hidden = !m), m ? c(a).show() : f.done(function() {
                        c(a).hide()
                    }), f.done(function() {
                        var ba;
                        c._removeData(a, "fxshow");
                        for (ba in g) c.style(a, ba, g[ba])
                    }), g) b = rc(m ? p[e] : 0, e, f), e in p || (p[e] = b.start, m && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        prefilter: function(a, b) {
            b ? Ma.prefilters.unshift(a) :
                Ma.prefilters.push(a)
        }
    });
    c.speed = function(a, b, d) {
        var e = a && "object" === typeof a ? c.extend({}, a) : {
            complete: d || !d && b || c.isFunction(a) && a,
            duration: a,
            easing: d && b || b && !c.isFunction(b) && b
        };
        e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            c.isFunction(e.old) && e.old.call(this);
            e.queue && c.dequeue(this, e.queue)
        };
        return e
    };
    c.fn.extend({
        fadeTo: function(a,
            b, d, e) {
            return this.filter(wb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, d, e)
        },
        animate: function(a, b, d, e) {
            var f = c.isEmptyObject(a),
                g = c.speed(b, d, e);
            b = function() {
                var k = Ma(this, c.extend({}, a), g);
                (f || c._data(this, "finish")) && k.stop(!0)
            };
            b.finish = b;
            return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, d) {
            var e = function(f) {
                var g = f.stop;
                delete f.stop;
                g(d)
            };
            "string" !== typeof a && (d = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var f = !0,
                    g = null !=
                    a && a + "queueHooks",
                    k = c.timers,
                    m = c._data(this);
                if (g) m[g] && m[g].stop && e(m[g]);
                else
                    for (g in m) m[g] && m[g].stop && Hd.test(g) && e(m[g]);
                for (g = k.length; g--;) k[g].elem !== this || null != a && k[g].queue !== a || (k[g].anim.stop(d), f = !1, k.splice(g, 1));
                !f && d || c.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b = c._data(this),
                    d = b[a + "queue"];
                var e = b[a + "queueHooks"];
                var f = c.timers,
                    g = d ? d.length : 0;
                b.finish = !0;
                c.queue(this, a, []);
                e && e.stop && e.stop.call(this, !0);
                for (e = f.length; e--;) f[e].elem ===
                    this && f[e].queue === a && (f[e].anim.stop(!0), f.splice(e, 1));
                for (e = 0; e < g; e++) d[e] && d[e].finish && d[e].finish.call(this);
                delete b.finish
            })
        }
    });
    c.each(["toggle", "show", "hide"], function(a, b) {
        var d = c.fn[b];
        c.fn[b] = function(e, f, g) {
            return null == e || "boolean" === typeof e ? d.apply(this, arguments) : this.animate(Cb(b, !0), e, f, g)
        }
    });
    c.each({
        slideDown: Cb("show"),
        slideUp: Cb("hide"),
        slideToggle: Cb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(d, e,
            f) {
            return this.animate(b, d, e, f)
        }
    });
    c.timers = [];
    c.fx.tick = function() {
        var a = c.timers,
            b = 0;
        for (mb = c.now(); b < a.length; b++) {
            var d = a[b];
            d() || a[b] !== d || a.splice(b--, 1)
        }
        a.length || c.fx.stop();
        mb = void 0
    };
    c.fx.timer = function(a) {
        c.timers.push(a);
        a() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function() {
        Kb || (Kb = r.setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function() {
        r.clearInterval(Kb);
        Kb = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fn.delay = function(a, b) {
        a = c.fx ? c.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(d, e) {
            var f = r.setTimeout(d, a);
            e.stop = function() {
                r.clearTimeout(f)
            }
        })
    };
    (function() {
        var a = K.createElement("input");
        K.createElement("div");
        var b = K.createElement("select"),
            d = b.appendChild(K.createElement("option"));
        var e = K.createElement("div");
        e.setAttribute("className", "t");
        e.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        e.getElementsByTagName("a");
        a.setAttribute("type", "checkbox");
        e.appendChild(a);
        var f = e.getElementsByTagName("a")[0];
        f.style.cssText = "top:1px";
        G.getSetAttribute = "t" !== e.className;
        G.style = /top/.test(f.getAttribute("style"));
        G.hrefNormalized = "/a" === f.getAttribute("href");
        G.checkOn = !!a.value;
        G.optSelected = d.selected;
        G.enctype = !!K.createElement("form").enctype;
        b.disabled = !0;
        G.optDisabled = !d.disabled;
        a = K.createElement("input");
        a.setAttribute("value", "");
        G.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        G.radioValue = "t" === a.value
    })();
    var Id = /\r/g,
        Jd = /[\x20\t\r\n\f]+/g;
    c.fn.extend({
        val: function(a) {
            var b, d, e = this[0];
            if (arguments.length) {
                var f = c.isFunction(a);
                return this.each(function(g) {
                    1 === this.nodeType && (g = f ? a.call(this, g, c(this).val()) : a, null == g ? g = "" : "number" === typeof g ? g += "" : c.isArray(g) && (g = c.map(g, function(k) {
                        return null == k ? "" : k + ""
                    })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, g, "value") || (this.value = g))
                })
            }
            if (e) {
                if ((b = c.valHooks[e.type] || c.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (d = b.get(e,
                        "value"))) return d;
                d = e.value;
                return "string" === typeof d ? d.replace(Id, "") : null == d ? "" : d
            }
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = c.find.attr(a, "value");
                    return null != b ? b : c.trim(c.text(a)).replace(Jd, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, d = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : d.length, k = 0 > e ? g : a ? e : 0; k < g; k++)
                        if (b = d[k], !(!b.selected && k !== e || (G.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
                            b =
                                c(b).val();
                            if (a) return b;
                            f.push(b)
                        }
                    return f
                },
                set: function(a, b) {
                    for (var d, e = a.options, f = c.makeArray(b), g = e.length; g--;)
                        if (b = e[g], -1 < c.inArray(c.valHooks.option.get(b), f)) try {
                            b.selected = d = !0
                        } catch (k) {
                            b.scrollHeight
                        } else b.selected = !1;
                    d || (a.selectedIndex = -1);
                    return e
                }
            }
        }
    });
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            set: function(a, b) {
                if (c.isArray(b)) return a.checked = -1 < c.inArray(c(a).val(), b)
            }
        };
        G.checkOn || (c.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Za = c.expr.attrHandle,
        dc = /^(?:checked|selected)$/i,
        ib = G.getSetAttribute,
        Lb = G.input;
    c.fn.extend({
        attr: function(a, b) {
            return bb(this, c.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        }
    });
    c.extend({
        attr: function(a, b, d) {
            var e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" === typeof a.getAttribute) return c.prop(a, b, d);
                if (1 !== f || !c.isXMLDoc(a)) {
                    b = b.toLowerCase();
                    var g = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Kd : yb)
                }
                if (void 0 !== d) {
                    if (null ===
                        d) {
                        c.removeAttr(a, b);
                        return
                    }
                    if (g && "set" in g && void 0 !== (e = g.set(a, d, b))) return e;
                    a.setAttribute(b, d + "");
                    return d
                }
                if (g && "get" in g && null !== (e = g.get(a, b))) return e;
                e = c.find.attr(a, b);
                return null == e ? void 0 : e
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!G.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        a.setAttribute("type", b);
                        d && (a.value = d);
                        return b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var d = 0,
                e = b && b.match(Pa);
            if (e && 1 === a.nodeType)
                for (; b = e[d++];) {
                    var f = c.propFix[b] || b;
                    c.expr.match.bool.test(b) ? Lb && ib ||
                        !dc.test(b) ? a[f] = !1 : a[c.camelCase("default-" + b)] = a[f] = !1 : c.attr(a, b, "");
                    a.removeAttribute(ib ? b : f)
                }
        }
    });
    var Kd = {
        set: function(a, b, d) {
            !1 === b ? c.removeAttr(a, d) : Lb && ib || !dc.test(d) ? a.setAttribute(!ib && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = !0;
            return d
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var d = Za[b] || c.find.attr;
        Lb && ib || !dc.test(b) ? Za[b] = function(e, f, g) {
            if (!g) {
                var k = Za[f];
                Za[f] = m;
                var m = null != d(e, f, g) ? f.toLowerCase() : null;
                Za[f] = k
            }
            return m
        } : Za[b] = function(e, f, g) {
            if (!g) return e[c.camelCase("default-" +
                f)] ? f.toLowerCase() : null
        }
    });
    Lb && ib || (c.attrHooks.value = {
        set: function(a, b, d) {
            if (c.nodeName(a, "input")) a.defaultValue = b;
            else return yb && yb.set(a, b, d)
        }
    });
    if (!ib) {
        var yb = {
            set: function(a, b, d) {
                var e = a.getAttributeNode(d);
                e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d));
                e.value = b += "";
                if ("value" === d || b === a.getAttribute(d)) return b
            }
        };
        Za.id = Za.name = Za.coords = function(a, b, d) {
            var e;
            if (!d) return (e = a.getAttributeNode(b)) && "" !== e.value ? e.value : null
        };
        c.valHooks.button = {
            get: function(a, b) {
                if ((a = a.getAttributeNode(b)) &&
                    a.specified) return a.value
            },
            set: yb.set
        };
        c.attrHooks.contenteditable = {
            set: function(a, b, d) {
                yb.set(a, "" === b ? !1 : b, d)
            }
        };
        c.each(["width", "height"], function(a, b) {
            c.attrHooks[b] = {
                set: function(d, e) {
                    if ("" === e) return d.setAttribute(b, "auto"), e
                }
            }
        })
    }
    G.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Ld = /^(?:input|select|textarea|button|object)$/i,
        Md = /^(?:a|area)$/i;
    c.fn.extend({
        prop: function(a, b) {
            return bb(this, c.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = c.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    });
    c.extend({
        prop: function(a, b, d) {
            var e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                if (1 !== f || !c.isXMLDoc(a)) {
                    b = c.propFix[b] || b;
                    var g = c.propHooks[b]
                }
                return void 0 !== d ? g && "set" in g && void 0 !== (e = g.set(a, d, b)) ? e : a[b] = d : g && "get" in g && null !== (e = g.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = c.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ld.test(a.nodeName) || Md.test(a.nodeName) &&
                        a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    G.hrefNormalized || c.each(["href", "src"], function(a, b) {
        c.propHooks[b] = {
            get: function(d) {
                return d.getAttribute(b, 4)
            }
        }
    });
    G.optSelected || (c.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        },
        set: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function() {
            c.propFix[this.toLowerCase()] = this
        });
    G.enctype || (c.propFix.enctype = "encoding");
    var ec = /[\t\r\n\f]/g;
    c.fn.extend({
        addClass: function(a) {
            var b, d, e, f, g, k = 0;
            if (c.isFunction(a)) return this.each(function(p) {
                c(this).addClass(a.call(this, p, eb(this)))
            });
            if ("string" === typeof a && a)
                for (b = a.match(Pa) || []; d = this[k++];) {
                    var m = eb(d);
                    if (e = 1 === d.nodeType && (" " + m + " ").replace(ec, " ")) {
                        for (g = 0; f = b[g++];) 0 > e.indexOf(" " + f + " ") && (e += f + " ");
                        e = c.trim(e);
                        m !== e && c.attr(d, "class", e)
                    }
                }
            return this
        },
        removeClass: function(a) {
            var b,
                d, e, f, g, k = 0;
            if (c.isFunction(a)) return this.each(function(p) {
                c(this).removeClass(a.call(this, p, eb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" === typeof a && a)
                for (b = a.match(Pa) || []; d = this[k++];) {
                    var m = eb(d);
                    if (e = 1 === d.nodeType && (" " + m + " ").replace(ec, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; - 1 < e.indexOf(" " + f + " ");) e = e.replace(" " + f + " ", " ");
                        e = c.trim(e);
                        m !== e && c.attr(d, "class", e)
                    }
                }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" === typeof b && "string" === d ? b ? this.addClass(a) :
                this.removeClass(a) : c.isFunction(a) ? this.each(function(e) {
                    c(this).toggleClass(a.call(this, e, eb(this), b), b)
                }) : this.each(function() {
                    var e, f;
                    if ("string" === d) {
                        var g = 0;
                        var k = c(this);
                        for (f = a.match(Pa) || []; e = f[g++];) k.hasClass(e) ? k.removeClass(e) : k.addClass(e)
                    } else if (void 0 === a || "boolean" === d)(e = eb(this)) && c._data(this, "__className__", e), c.attr(this, "class", e || !1 === a ? "" : c._data(this, "__className__") || "")
                })
        },
        hasClass: function(a) {
            var b, d = 0;
            for (a = " " + a + " "; b = this[d++];)
                if (1 === b.nodeType && -1 < (" " + eb(b) + " ").replace(ec,
                        " ").indexOf(a)) return !0;
            return !1
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        c.fn[b] = function(d, e) {
            return 0 < arguments.length ? this.on(b, null, d, e) : this.trigger(b)
        }
    });
    c.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Nd = r.location,
        fc = c.now(),
        gc = /\?/,
        Od = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    c.parseJSON = function(a) {
        if (r.JSON && r.JSON.parse) return r.JSON.parse(a + "");
        var b, d = null,
            e = c.trim(a + "");
        return e && !c.trim(e.replace(Od, function(f, g, k, m) {
            b && g && (d = 0);
            if (0 === d) return f;
            b = k || g;
            d += !m - !k;
            return ""
        })) ? Function("return " + e)() : c.error("Invalid JSON: " + a)
    };
    c.parseXML = function(a) {
        if (!a || "string" !== typeof a) return null;
        try {
            if (r.DOMParser) {
                var b = new r.DOMParser;
                var d = b.parseFromString(a, "text/xml")
            } else d = new r.ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a)
        } catch (e) {
            d = void 0
        }
        d &&
            d.documentElement && !d.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a);
        return d
    };
    var Pd = /#.*$/,
        Lc = /([?&])_=[^&]*/,
        Qd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Rd = /^(?:GET|HEAD)$/,
        Sd = /^\/\//,
        Mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nc = {},
        Rb = {},
        Oc = "*/".concat("*"),
        hc = Nd.href,
        sb = Mc.exec(hc.toLowerCase()) || [];
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: hc,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            accepts: {
                "*": Oc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ?
                Sb(Sb(a, c.ajaxSettings), b) : Sb(c.ajaxSettings, a)
        },
        ajaxPrefilter: sc(Nc),
        ajaxTransport: sc(Rb),
        ajax: function(a, b) {
            function d(Z, ta, T, va) {
                var oa = ta;
                if (2 !== Ea) {
                    Ea = 2;
                    g && r.clearTimeout(g);
                    m = void 0;
                    f = va || "";
                    X.readyState = 0 < Z ? 4 : 0;
                    va = 200 <= Z && 300 > Z || 304 === Z;
                    if (T) {
                        var ha = q;
                        for (var za = X, Ca, Ka, fa, ia, xa = ha.contents, Na = ha.dataTypes;
                            "*" === Na[0];) Na.shift(), void 0 === Ka && (Ka = ha.mimeType || za.getResponseHeader("Content-Type"));
                        if (Ka)
                            for (ia in xa)
                                if (xa[ia] && xa[ia].test(Ka)) {
                                    Na.unshift(ia);
                                    break
                                }
                        if (Na[0] in T) fa = Na[0];
                        else {
                            for (ia in T) {
                                if (!Na[0] ||
                                    ha.converters[ia + " " + Na[0]]) {
                                    fa = ia;
                                    break
                                }
                                Ca || (Ca = ia)
                            }
                            fa = fa || Ca
                        }
                        fa ? (fa !== Na[0] && Na.unshift(fa), ha = T[fa]) : ha = void 0
                    }
                    a: {
                        T = q;Ca = ha;Ka = X;fa = va;
                        var hb;za = {};xa = T.dataTypes.slice();
                        if (xa[1])
                            for (Aa in T.converters) za[Aa.toLowerCase()] = T.converters[Aa];
                        for (ia = xa.shift(); ia;) {
                            T.responseFields[ia] && (Ka[T.responseFields[ia]] = Ca);
                            !Sa && fa && T.dataFilter && (Ca = T.dataFilter(Ca, T.dataType));
                            var Sa = ia;
                            if (ia = xa.shift())
                                if ("*" === ia) ia = Sa;
                                else if ("*" !== Sa && Sa !== ia) {
                                var Aa = za[Sa + " " + ia] || za["* " + ia];
                                if (!Aa)
                                    for (hb in za)
                                        if (ha =
                                            hb.split(" "), ha[1] === ia && (Aa = za[Sa + " " + ha[0]] || za["* " + ha[0]])) {
                                            !0 === Aa ? Aa = za[hb] : !0 !== za[hb] && (ia = ha[0], xa.unshift(ha[1]));
                                            break
                                        }
                                if (!0 !== Aa)
                                    if (Aa && T["throws"]) Ca = Aa(Ca);
                                    else try {
                                        Ca = Aa(Ca)
                                    } catch (Wa) {
                                        ha = {
                                            state: "parsererror",
                                            error: Aa ? Wa : "No conversion from " + Sa + " to " + ia
                                        };
                                        break a
                                    }
                            }
                        }
                        ha = {
                            state: "success",
                            data: Ca
                        }
                    }
                    if (va)
                        if (q.ifModified && ((oa = X.getResponseHeader("Last-Modified")) && (c.lastModified[Ba] = oa), (oa = X.getResponseHeader("etag")) && (c.etag[Ba] = oa)), 204 === Z || "HEAD" === q.type) oa = "nocontent";
                        else if (304 ===
                        Z) oa = "notmodified";
                    else {
                        oa = ha.state;
                        var ob = ha.data;
                        var pb = ha.error;
                        va = !pb
                    } else if (pb = oa, Z || !oa) oa = "error", 0 > Z && (Z = 0);
                    X.status = Z;
                    X.statusText = (ta || oa) + "";
                    va ? I.resolveWith(u, [ob, oa, X]) : I.rejectWith(u, [X, oa, pb]);
                    X.statusCode(ba);
                    ba = void 0;
                    k && z.trigger(va ? "ajaxSuccess" : "ajaxError", [X, q, va ? ob : pb]);
                    ma.fireWith(u, [X, oa]);
                    k && (z.trigger("ajaxComplete", [X, q]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, k, m, p, q = c.ajaxSetup({}, b),
                u = q.context || q,
                z = q.context &&
                (u.nodeType || u.jquery) ? c(u) : c.event,
                I = c.Deferred(),
                ma = c.Callbacks("once memory"),
                ba = q.statusCode || {},
                Ia = {},
                Ga = {},
                Ea = 0,
                Hb = "canceled",
                X = {
                    readyState: 0,
                    getResponseHeader: function(Z) {
                        var ta;
                        if (2 === Ea) {
                            if (!p)
                                for (p = {}; ta = Qd.exec(f);) p[ta[1].toLowerCase()] = ta[2];
                            ta = p[Z.toLowerCase()]
                        }
                        return null == ta ? null : ta
                    },
                    getAllResponseHeaders: function() {
                        return 2 === Ea ? f : null
                    },
                    setRequestHeader: function(Z, ta) {
                        var T = Z.toLowerCase();
                        Ea || (Z = Ga[T] = Ga[T] || Z, Ia[Z] = ta);
                        return this
                    },
                    overrideMimeType: function(Z) {
                        Ea || (q.mimeType =
                            Z);
                        return this
                    },
                    statusCode: function(Z) {
                        var ta;
                        if (Z)
                            if (2 > Ea)
                                for (ta in Z) ba[ta] = [ba[ta], Z[ta]];
                            else X.always(Z[X.status]);
                        return this
                    },
                    abort: function(Z) {
                        Z = Z || Hb;
                        m && m.abort(Z);
                        d(0, Z);
                        return this
                    }
                };
            I.promise(X).complete = ma.add;
            X.success = X.done;
            X.error = X.fail;
            q.url = ((a || q.url || hc) + "").replace(Pd, "").replace(Sd, sb[1] + "//");
            q.type = b.method || b.type || q.method || q.type;
            q.dataTypes = c.trim(q.dataType || "*").toLowerCase().match(Pa) || [""];
            null == q.crossDomain && (a = Mc.exec(q.url.toLowerCase()), q.crossDomain = !(!a || a[1] ===
                sb[1] && a[2] === sb[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (sb[3] || ("http:" === sb[1] ? "80" : "443"))));
            q.data && q.processData && "string" !== typeof q.data && (q.data = c.param(q.data, q.traditional));
            tc(Nc, q, b, X);
            if (2 === Ea) return X;
            (k = c.event && q.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
            q.type = q.type.toUpperCase();
            q.hasContent = !Rd.test(q.type);
            var Ba = q.url;
            q.hasContent || (q.data && (Ba = q.url += (gc.test(Ba) ? "\x26" : "?") + q.data, delete q.data), !1 === q.cache && (q.url = Lc.test(Ba) ? Ba.replace(Lc, "$1_\x3d" + fc++) :
                Ba + (gc.test(Ba) ? "\x26" : "?") + "_\x3d" + fc++));
            q.ifModified && (c.lastModified[Ba] && X.setRequestHeader("If-Modified-Since", c.lastModified[Ba]), c.etag[Ba] && X.setRequestHeader("If-None-Match", c.etag[Ba]));
            (q.data && q.hasContent && !1 !== q.contentType || b.contentType) && X.setRequestHeader("Content-Type", q.contentType);
            X.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + Oc + "; q\x3d0.01" : "") : q.accepts["*"]);
            for (e in q.headers) X.setRequestHeader(e,
                q.headers[e]);
            if (q.beforeSend && (!1 === q.beforeSend.call(u, X, q) || 2 === Ea)) return X.abort();
            Hb = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) X[e](q[e]);
            if (m = tc(Rb, q, b, X)) {
                X.readyState = 1;
                k && z.trigger("ajaxSend", [X, q]);
                if (2 === Ea) return X;
                q.async && 0 < q.timeout && (g = r.setTimeout(function() {
                    X.abort("timeout")
                }, q.timeout));
                try {
                    Ea = 1, m.send(Ia, d)
                } catch (Z) {
                    if (2 > Ea) d(-1, Z);
                    else throw Z;
                }
            } else d(-1, "No Transport");
            return X
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        getScript: function(a, b) {
            return c.get(a,
                void 0, b, "script")
        }
    });
    c.each(["get", "post"], function(a, b) {
        c[b] = function(d, e, f, g) {
            c.isFunction(e) && (g = g || f, f = e, e = void 0);
            return c.ajax(c.extend({
                url: d,
                type: b,
                dataType: g,
                data: e,
                success: f
            }, c.isPlainObject(d) && d))
        }
    });
    c._evalUrl = function(a) {
        return c.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    c.fn.extend({
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(d) {
                c(this).wrapAll(a.call(this, d))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var d = this; d.firstChild && 1 === d.firstChild.nodeType;) d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this),
                    d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(d) {
                c(this).wrapAll(b ? a.call(this, d) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this,
                    "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    c.expr.filters.hidden = function(a) {
        return G.reliableHiddenOffsets() ? 0 >= a.offsetWidth && 0 >= a.offsetHeight && !a.getClientRects().length : ad(a)
    };
    c.expr.filters.visible = function(a) {
        return !c.expr.filters.hidden(a)
    };
    var Td = /%20/g,
        bd = /\[\]$/,
        Pc = /\r?\n/g,
        Ud = /^(?:submit|button|image|reset|file)$/i,
        Vd = /^(?:input|select|textarea|keygen)/i;
    c.param = function(a, b) {
        var d, e = [],
            f = function(g, k) {
                k = c.isFunction(k) ? k() : null == k ? "" : k;
                e[e.length] = encodeURIComponent(g) +
                    "\x3d" + encodeURIComponent(k)
            };
        void 0 === b && (b = c.ajaxSettings && c.ajaxSettings.traditional);
        if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) Tb(d, a[d], b, f);
        return e.join("\x26").replace(Td, "+")
    };
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = c.prop(this, "elements");
                return a ? c.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !c(this).is(":disabled") &&
                    Vd.test(this.nodeName) && !Ud.test(a) && (this.checked || !Pb.test(a))
            }).map(function(a, b) {
                a = c(this).val();
                return null == a ? null : c.isArray(a) ? c.map(a, function(d) {
                    return {
                        name: b.name,
                        value: d.replace(Pc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(Pc, "\r\n")
                }
            }).get()
        }
    });
    c.ajaxSettings.xhr = void 0 !== r.ActiveXObject ? function() {
        return this.isLocal ? uc() : 8 < K.documentMode ? Ub() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Ub() || uc()
    } : Ub;
    var Wd = 0,
        Mb = {},
        Nb = c.ajaxSettings.xhr();
    r.attachEvent && r.attachEvent("onunload",
        function() {
            for (var a in Mb) Mb[a](void 0, !0)
        });
    G.cors = !!Nb && "withCredentials" in Nb;
    (Nb = G.ajax = !!Nb) && c.ajaxTransport(function(a) {
        if (!a.crossDomain || G.cors) {
            var b;
            return {
                send: function(d, e) {
                    var f, g = a.xhr(),
                        k = ++Wd;
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (f in a.xhrFields) g[f] = a.xhrFields[f];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f,
                        d[f] + "");
                    g.send(a.hasContent && a.data || null);
                    b = function(m, p) {
                        if (b && (p || 4 === g.readyState))
                            if (delete Mb[k], b = void 0, g.onreadystatechange = c.noop, p) 4 !== g.readyState && g.abort();
                            else {
                                var q = {};
                                var u = g.status;
                                "string" === typeof g.responseText && (q.text = g.responseText);
                                try {
                                    var z = g.statusText
                                } catch (I) {
                                    z = ""
                                }
                                u || !a.isLocal || a.crossDomain ? 1223 === u && (u = 204) : u = q.text ? 200 : 404
                            }
                        q && e(u, z, q, g.getAllResponseHeaders())
                    };
                    a.async ? 4 === g.readyState ? r.setTimeout(b) : g.onreadystatechange = Mb[k] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    c.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                c.globalEval(a);
                return a
            }
        }
    });
    c.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    c.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d = K.head || c("head")[0] ||
                K.documentElement;
            return {
                send: function(e, f) {
                    b = K.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(g, k) {
                        if (k || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, k || f(200, "success")
                    };
                    d.insertBefore(b, d.firstChild)
                },
                abort: function() {
                    if (b) b.onload(void 0, !0)
                }
            }
        }
    });
    var Qc = [],
        ic = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a =
                Qc.pop() || c.expando + "_" + fc++;
            this[a] = !0;
            return a
        }
    });
    c.ajaxPrefilter("json jsonp", function(a, b, d) {
        var e, f = !1 !== a.jsonp && (ic.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && ic.test(a.data) && "data");
        if (f || "jsonp" === a.dataTypes[0]) {
            var g = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
            f ? a[f] = a[f].replace(ic, "$1" + g) : !1 !== a.jsonp && (a.url += (gc.test(a.url) ? "\x26" : "?") + a.jsonp + "\x3d" + g);
            a.converters["script json"] =
                function() {
                    e || c.error(g + " was not called");
                    return e[0]
                };
            a.dataTypes[0] = "json";
            var k = r[g];
            r[g] = function() {
                e = arguments
            };
            d.always(function() {
                void 0 === k ? c(r).removeProp(g) : r[g] = k;
                a[g] && (a.jsonpCallback = b.jsonpCallback, Qc.push(g));
                e && c.isFunction(k) && k(e[0]);
                e = k = void 0
            });
            return "script"
        }
    });
    c.parseHTML = function(a, b, d) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (d = b, b = !1);
        b = b || K;
        var e = Dc.exec(a);
        d = !d && [];
        if (e) return [b.createElement(e[1])];
        e = pa([a], b, d);
        d && d.length && c(d).remove();
        return c.merge([],
            e.childNodes)
    };
    var Rc = c.fn.load;
    c.fn.load = function(a, b, d) {
        if ("string" !== typeof a && Rc) return Rc.apply(this, arguments);
        var e, f, g = this,
            k = a.indexOf(" ");
        if (-1 < k) {
            var m = c.trim(a.slice(k, a.length));
            a = a.slice(0, k)
        }
        c.isFunction(b) ? (d = b, b = void 0) : b && "object" === typeof b && (e = "POST");
        0 < g.length && c.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(p) {
            f = arguments;
            g.html(m ? c("\x3cdiv\x3e").append(c.parseHTML(p)).find(m) : p)
        }).always(d && function(p, q) {
            g.each(function() {
                d.apply(this, f || [p.responseText,
                    q, p
                ])
            })
        });
        return this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        c.fn[b] = function(d) {
            return this.on(b, d)
        }
    });
    c.expr.filters.animated = function(a) {
        return c.grep(c.timers, function(b) {
            return a === b.elem
        }).length
    };
    c.offset = {
        setOffset: function(a, b, d) {
            var e = c.css(a, "position"),
                f = c(a),
                g = {};
            "static" === e && (a.style.position = "relative");
            var k = f.offset();
            var m = c.css(a, "top");
            var p = c.css(a, "left");
            ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [m, p]) ? (p =
                f.position(), m = p.top, p = p.left) : (m = parseFloat(m) || 0, p = parseFloat(p) || 0);
            c.isFunction(b) && (b = b.call(a, d, c.extend({}, k)));
            null != b.top && (g.top = b.top - k.top + m);
            null != b.left && (g.left = b.left - k.left + p);
            "using" in b ? b.using.call(a, g) : f.css(g)
        }
    };
    c.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(g) {
                c.offset.setOffset(this, a, g)
            });
            var b, d = {
                    top: 0,
                    left: 0
                },
                e = (b = this[0]) && b.ownerDocument;
            if (e) {
                var f = e.documentElement;
                if (!c.contains(f, b)) return d;
                "undefined" !== typeof b.getBoundingClientRect &&
                    (d = b.getBoundingClientRect());
                b = vc(e);
                return {
                    top: d.top + (b.pageYOffset || f.scrollTop) - (f.clientTop || 0),
                    left: d.left + (b.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a = {
                        top: 0,
                        left: 0
                    },
                    b = this[0];
                if ("fixed" === c.css(b, "position")) var d = b.getBoundingClientRect();
                else {
                    var e = this.offsetParent();
                    d = this.offset();
                    c.nodeName(e[0], "html") || (a = e.offset());
                    a.top += c.css(e[0], "borderTopWidth", !0);
                    a.left += c.css(e[0], "borderLeftWidth", !0)
                }
                return {
                    top: d.top - a.top - c.css(b, "marginTop", !0),
                    left: d.left - a.left - c.css(b, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !c.nodeName(a, "html") && "static" === c.css(a, "position");) a = a.offsetParent;
                return a || Jc
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function(e) {
            return bb(this, function(f, g, k) {
                var m = vc(f);
                if (void 0 === k) return m ? b in m ? m[b] : m.document.documentElement[g] : f[g];
                m ? m.scrollTo(d ? c(m).scrollLeft() : k, d ? k : c(m).scrollTop()) :
                    f[g] = k
            }, a, e, arguments.length, null)
        }
    });
    c.each(["top", "left"], function(a, b) {
        c.cssHooks[b] = ja(G.pixelPosition, function(d, e) {
            if (e) return e = db(d, b), Bb.test(e) ? c(d).position()[b] + "px" : e
        })
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        c.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(d, e) {
            c.fn[e] = function(f, g) {
                var k = arguments.length && (d || "boolean" !== typeof f),
                    m = d || (!0 === f || !0 === g ? "margin" : "border");
                return bb(this, function(p, q, u) {
                    return c.isWindow(p) ? p.document.documentElement["client" +
                        a] : 9 === p.nodeType ? (q = p.documentElement, Math.max(p.body["scroll" + a], q["scroll" + a], p.body["offset" + a], q["offset" + a], q["client" + a])) : void 0 === u ? c.css(p, q, m) : c.style(p, q, u, m)
                }, b, k ? f : void 0, k, null)
            }
        })
    });
    c.fn.extend({
        bind: function(a, b, d) {
            return this.on(a, null, b, d)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, d, e) {
            return this.on(b, a, d, e)
        },
        undelegate: function(a, b, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d)
        }
    });
    c.fn.size = function() {
        return this.length
    };
    c.fn.andSelf =
        c.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return c
    });
    var Xd = r.jQuery,
        Yd = r.$;
    c.noConflict = function(a) {
        r.$ === c && (r.$ = Yd);
        a && r.jQuery === c && (r.jQuery = Xd);
        return c
    };
    F || (r.jQuery = r.$ = c);
    return c
});
jQuery.uaMatch = function(r) {
    r = r.toLowerCase();
    r = /(chrome)[ \/]([\w.]+)/.exec(r) || /(webkit)[ \/]([\w.]+)/.exec(r) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(r) || /(msie) ([\w.]+)/.exec(r) || 0 > r.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(r) || [];
    return {
        browser: r[1] || "",
        version: r[2] || "0"
    }
};
jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser);
(function(r) {
    function F(x) {
        var P = window.document.implementation.createHTMLDocument("");
        P.body.innerHTML = x;
        return P.body && P.body.innerHTML
    }
    var B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        C = r.htmlPrefilter;
    r.htmlPrefilter = function(x) {
        var P = x.replace(B, "\x3c$1\x3e\x3c/$2\x3e");
        P !== x && F(x) !== F(P) && console.error("HTML tags must be properly nested and closed: " + x);
        return C(x)
    }
})(window.jQuery);
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r() : (window.Granite = window.Granite || {}).Sling = r()
})(function() {
    return {
        SELECTOR_INFINITY: ".infinity",
        CHARSET: "_charset_",
        STATUS: ":status",
        STATUS_BROWSER: "browser",
        OPERATION: ":operation",
        OPERATION_DELETE: "delete",
        OPERATION_MOVE: "move",
        DELETE_SUFFIX: "@Delete",
        TYPEHINT_SUFFIX: "@TypeHint",
        COPY_SUFFIX: "@CopyFrom",
        MOVE_SUFFIX: "@MoveFrom",
        ORDER: ":order",
        REPLACE: ":replace",
        DESTINATION: ":dest",
        SAVE_PARAM_PREFIX: ":saveParamPrefix",
        IGNORE_PARAM: ":ignore",
        REQUEST_LOGIN_PARAM: "sling:authRequestLogin",
        LOGIN_URL: "/system/sling/login.html",
        LOGOUT_URL: "/system/sling/logout.html"
    }
});
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r() : (window.Granite = window.Granite || {}).Util = r()
})(function() {
    return {
        patchText: function(r, F) {
            if (F)
                if ("[object Array]" !== Object.prototype.toString.call(F)) r = r.replace("{0}", F);
                else
                    for (var B = 0; B < F.length; B++) r = r.replace("{" + B + "}", F[B]);
            return r
        },
        getTopWindow: function() {
            var r = window;
            if (this.iFrameTopWindow) return this.iFrameTopWindow;
            try {
                for (; r.parent && r !== r.parent && r.parent.location.href;) r = r.parent
            } catch (F) {}
            return r
        },
        setIFrameMode: function(r) {
            this.iFrameTopWindow =
                r || window
        },
        applyDefaults: function() {
            for (var r, F = arguments[0] || {}, B = 1; B < arguments.length; B++) {
                r = arguments[B];
                for (var C in r) {
                    var x = r[C];
                    r.hasOwnProperty(C) && void 0 !== x && (F[C] = null === x || "object" !== typeof x || x instanceof Array ? x instanceof Array ? x.slice(0) : x : this.applyDefaults(F[C], x))
                }
            }
            return F
        },
        getKeyCode: function(r) {
            return r.keyCode ? r.keyCode : r.which
        }
    }
});
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r(require("@granite/util"), require("jquery")) : window.Granite.HTTP = r(Granite.Util, jQuery)
})(function(r, F) {
    return function() {
        var B = null,
            C = /^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/,
            x = /[^\w-.~%:/?[\]@!$&'()*+,;=]/,
            P = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
            N = !1,
            y = {
                getSchemeAndAuthority: function(v) {
                    if (!v) return "";
                    v = P.exec(v);
                    return null === v ? "" : [v[1], v[3]].join("")
                },
                getContextPath: function() {
                    null === B && (B = y.detectContextPath());
                    return B
                },
                detectContextPath: function() {
                    try {
                        if (window.CQURLInfo) B = CQURLInfo.contextPath || "";
                        else {
                            for (var v = document.getElementsByTagName("script"), A = 0; A < v.length; A++) {
                                var J = C.exec(v[A].src);
                                if (J) return B = J[1]
                            }
                            B = ""
                        }
                    } catch (Y) {}
                    return B
                },
                externalize: function(v) {
                    try {
                        0 === v.indexOf("/") && y.getContextPath() && 0 !== v.indexOf(y.getContextPath() + "/") && (v = y.getContextPath() + v)
                    } catch (A) {}
                    return v
                },
                internalize: function(v, A) {
                    if ("/" === v.charAt(0)) return B === v ? "" : B && 0 === v.indexOf(B + "/") ? v.substring(B.length) : v;
                    A || (A = document);
                    A = y.getSchemeAndAuthority(A.location.href);
                    var J = y.getSchemeAndAuthority(v);
                    return A === J ? v.substring(J.length + (B ? B.length : 0)) : v
                },
                getPath: function(v) {
                    if (v) v = y.removeParameters(v), v = y.removeAnchor(v);
                    else {
                        if (window.CQURLInfo && CQURLInfo.requestPath) return CQURLInfo.requestPath;
                        v = window.location.pathname
                    }
                    v = y.internalize(v);
                    var A = v.indexOf(".", v.lastIndexOf("/")); - 1 !== A && (v = v.substring(0,
                        A));
                    return v
                },
                removeAnchor: function(v) {
                    var A = v.indexOf("#");
                    return 0 <= A ? v.substring(0, A) : v
                },
                removeParameters: function(v) {
                    var A = v.indexOf("?");
                    return 0 <= A ? v.substring(0, A) : v
                },
                encodePathOfURI: function(v) {
                    for (var A = ["?", "#"], J = [v], Y, U = 0, da = A.length; U < da; U++)
                        if (Y = A[U], 0 <= v.indexOf(Y)) {
                            J = v.split(Y);
                            break
                        }
                    x.test(J[0]) && (J[0] = y.encodePath(J[0]));
                    return J.join(Y)
                },
                encodePath: function(v) {
                    v = encodeURI(v);
                    v = v.replace(/%5B/g, "[").replace(/%5D/g, "]");
                    v = v.replace(/\?/g, "%3F");
                    return v = v.replace(/#/g, "%23")
                },
                handleLoginRedirect: function() {
                    if (!N) {
                        N = !0;
                        alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
                        var v = r.getTopWindow().document.location;
                        v.href = y.externalize("/") + "?resource\x3d" + encodeURIComponent(v.pathname + v.search + v.hash)
                    }
                },
                getXhrHook: function(v, A, J) {
                    return window.G_XHR_HOOK && "function" === typeof G_XHR_HOOK ? (v = {
                        url: v,
                        method: A || "GET"
                    }, J && (v.params = J), G_XHR_HOOK(v)) : null
                },
                eval: function(v) {
                    "object" !== typeof v && (v = F.ajax({
                        url: v,
                        type: "get",
                        async: !1
                    }));
                    try {
                        return JSON.parse(v.body ? v.body : v.responseText)
                    } catch (A) {}
                    return null
                }
            };
        return y
    }()
});
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r(require("@granite/http")) : window.Granite.I18n = r(window.Granite.HTTP)
})(function(r) {
    return function() {
        var F = {},
            B = "/libs/cq/i18n/dict.",
            C = ".json",
            x = void 0,
            P = !1,
            N = null,
            y = {},
            v = !1;
        y.LOCALE_DEFAULT = "en";
        y.PSEUDO_LANGUAGE = "zz";
        y.PSEUDO_PATTERN_KEY = "_pseudoPattern_";
        y.init = function(A) {
            A = A || {};
            this.setLocale(A.locale);
            this.setUrlPrefix(A.urlPrefix);
            this.setUrlSuffix(A.urlSuffix)
        };
        y.setLocale = function(A) {
            A && (x = A)
        };
        y.getLocale = function() {
            "function" ===
            typeof x && (x = x());
            return x || document.documentElement.lang || y.LOCALE_DEFAULT
        };
        y.setUrlPrefix = function(A) {
            A && (B = A, v = !0)
        };
        y.setUrlSuffix = function(A) {
            A && (C = A, v = !0)
        };
        y.getDictionary = function(A) {
            A = A || y.getLocale();
            if (!F[A]) {
                P = 0 === A.indexOf(y.PSEUDO_LANGUAGE);
                try {
                    var J = new XMLHttpRequest,
                        Y = J.open,
                        U = r.externalize;
                    var da = A;
                    if (v) var la = B + da + C;
                    else {
                        var M, R = document.querySelector("html");
                        R && (M = R.getAttribute("data-i18n-dictionary-src"));
                        la = M ? M.replace("{locale}", encodeURIComponent(da)).replace("{+locale}", da) :
                            B + da + C
                    }
                    Y.call(J, "GET", U.call(r, la), !1);
                    J.send();
                    F[A] = JSON.parse(J.responseText)
                } catch (pa) {}
                F[A] || (F[A] = {})
            }
            return F[A]
        };
        y.get = function(A, J, Y) {
            var U;
            var da = y.getDictionary();
            var la = P ? y.PSEUDO_PATTERN_KEY : Y ? A + " ((" + Y + "))" : A;
            da && (U = da[la]);
            U || (U = A);
            P && (U = U.replace("{string}", A).replace("{comment}", Y ? Y : ""));
            A = U;
            if (J)
                if (Array.isArray(J))
                    for (Y = 0; Y < J.length; Y++) A = A.replace("{" + Y + "}", J[Y]);
                else A = A.replace("{0}", J);
            return A
        };
        y.getVar = function(A, J) {
            return A ? y.get(A, null, J) : null
        };
        y.getLanguages = function() {
            if (!N) try {
                var A =
                    r.externalize("/libs/wcm/core/resources/languages.overlay.infinity.json"),
                    J = new XMLHttpRequest;
                J.open("GET", A, !1);
                J.send();
                var Y = JSON.parse(J.responseText);
                Object.keys(Y).forEach(function(U) {
                    U = Y[U];
                    U.language && (U.title = y.getVar(U.language));
                    U.title && U.country && "*" !== U.country && (U.title += " (" + y.getVar(U.country) + ")")
                });
                N = Y
            } catch (U) {
                N = {}
            }
            return N
        };
        y.parseLocale = function(A) {
            if (!A) return null;
            var J = A.indexOf("_");
            0 > J && (J = A.indexOf("-"));
            if (0 > J) {
                var Y = A;
                J = null
            } else Y = A.substring(0, J), J = A.substring(J + 1);
            return {
                code: A,
                language: Y,
                country: J
            }
        };
        return y
    }()
});
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r() : (window.Granite = window.Granite || {}).TouchIndicator = r()
})(function() {
    var r = {},
        F = [];
    return {
        debugWithMouse: !1,
        init: function() {
            var B = this,
                C = function(x) {
                    B.update(x.touches);
                    return !0
                };
            document.addEventListener("touchstart", C);
            document.addEventListener("touchmove", C);
            document.addEventListener("touchend", C);
            this.debugWithMouse && document.addEventListener("mousemove", function(x) {
                x.identifer = "fake";
                B.update([x]);
                return !0
            })
        },
        update: function(B) {
            for (var C = {}, x = 0; x < B.length; x++) {
                var P = B[x],
                    N = P.identifier,
                    y = r[N];
                y || (y = F.pop(), y || (y = document.createElement("div"), y.style.visibility = "hidden", y.style.position = "absolute", y.style.width = "30px", y.style.height = "30px", y.style.borderRadius = "20px", y.style.border = "5px solid orange", y.style.userSelect = "none", y.style.opacity = "0.5", y.style.zIndex = "2000", y.style.pointerEvents = "none", document.body.appendChild(y)));
                C[N] = y;
                y.style.left = P.pageX - 20 + "px";
                y.style.top = P.pageY - 20 + "px";
                y.style.visibility = "visible"
            }
            for (N in r) r.hasOwnProperty(N) &&
                !C[N] && (y = r[N], y.style.visibility = "hidden", F.push(y));
            r = C
        }
    }
});
(function(r) {
    "object" === typeof module && module.exports ? module.exports = r() : (window.Granite = window.Granite || {}).OptOutUtil = r()
})(function(r) {
    return function() {
        var F = {},
            B = [],
            C = [];
        F.init = function(x) {
            x ? (B = x.cookieNames || [], C = x.whitelistCookieNames || []) : (B = [], C = [])
        };
        F.getCookieNames = function() {
            return B
        };
        F.getWhitelistCookieNames = function() {
            return C
        };
        F.isOptedOut = function() {
            for (var x = document.cookie.split(";"), P = 0; P < x.length; P++) {
                var N = x[P].split("\x3d")[0];
                N = String.prototype.trim ? N.trim() : N.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                    "");
                if (0 <= F.getCookieNames().indexOf(N)) return !0
            }
            return !1
        };
        F.maySetCookie = function(x) {
            return !(F.isOptedOut() && -1 === F.getWhitelistCookieNames().indexOf(x))
        };
        return F
    }()
});
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
(function(r, F) {
    F.Granite = F.Granite || {};
    F.Granite.$ = F.Granite.$ || r;
    F._g = F._g || {};
    F._g.$ = F._g.$ || r;
    var B = Granite.HTTP;
    r.ajaxSetup({
        externalize: !0,
        encodePath: !0,
        hook: !0,
        beforeSend: function(C, x) {
            "undefined" !== typeof G_IS_HOOKED && G_IS_HOOKED(x.url) || (x.externalize && (x.url = B.externalize(x.url)), x.encodePath && (x.url = B.encodePathOfURI(x.url)));
            x.hook && (C = B.getXhrHook(x.url, x.type, x.data)) && (x.url = C.url, C.params && ("GET" === x.type.toUpperCase() ? x.url += "?" + r.param(C.params) : x.data = r.param(C.params)))
        },
        statusCode: {
            403: function(C) {
                "Authentication Failed" ===
                C.getResponseHeader("X-Reason") && B.handleLoginRedirect()
            }
        }
    });
    r.ajaxSettings.traditional = !0
})(jQuery, this);
(function(r) {
    window.Granite.csrf || (window.Granite.csrf = r(window.Granite.HTTP))
})(function(r) {
    function F() {
        this._handler = []
    }

    function B(M) {
        var R = "//" + document.location.host,
            pa = document.location.protocol + R;
        return M === pa || M.slice(0, pa.length + 1) === pa + "/" || M === R || M.slice(0, R.length + 1) === R + "/" || !/^(\/\/|http:|https:).*/.test(M)
    }

    function C(M) {
        window.console && console.warn("CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: " + M)
    }

    function x() {
        var M = new F;
        A = M;
        var R = new XMLHttpRequest;
        R.onreadystatechange = function() {
            if (4 === R.readyState) try {
                J = JSON.parse(R.responseText).token, M.resolve(J)
            } catch (pa) {
                C(pa), M.reject(R.responseText)
            }
        };
        R.open("GET", v, !0);
        R.send();
        return M
    }

    function P() {
        var M = new XMLHttpRequest;
        M.open("GET", v, !1);
        M.send();
        try {
            return J = JSON.parse(M.responseText).token
        } catch (R) {
            C(R)
        }
    }

    function N(M) {
        var R = M.getAttribute("action");
        "GET" === M.method.toUpperCase() || R && !B(R) || (J || P(), J && (R = M.querySelector('input[name\x3d":cq_csrf_token"]'), R || (R = document.createElement("input"),
            R.setAttribute("type", "hidden"), R.setAttribute("name", ":cq_csrf_token"), M.appendChild(R)), R.setAttribute("value", J)))
    }

    function y(M) {
        var R = function(pa) {
            pa = pa.target;
            "FORM" === pa.nodeName && N(pa)
        };
        M.addEventListener ? M.addEventListener("submit", R, !0) : M.attachEvent && M.attachEvent("submit", R)
    }
    F.prototype = {
        then: function(M, R) {
            this._handler.push({
                resolve: M,
                reject: R
            })
        },
        resolve: function() {
            this._execute("resolve", arguments)
        },
        reject: function() {
            this._execute("reject", arguments)
        },
        _execute: function(M, R) {
            if (null ===
                this._handler) throw Error("Promise already completed.");
            for (var pa = 0, Ua = this._handler.length; pa < Ua; pa++) this._handler[pa][M].apply(window, R);
            this.then = function(Ha, Va) {
                ("resolve" === M ? Ha : Va).apply(window, R)
            };
            this._handler = null
        }
    };
    var v = r.externalize("/libs/granite/csrf/token.json"),
        A, J;
    y(document);
    var Y = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(M, R, pa) {
        "get" !== M.toLowerCase() && B(R) && (this._csrf = !0, this._async = pa);
        return Y.apply(this, arguments)
    };
    var U = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        if (this._csrf)
            if (J) this.setRequestHeader("CSRF-Token", J), U.apply(this, arguments);
            else if (!1 === this._async) P(), J && this.setRequestHeader("CSRF-Token", J), U.apply(this, arguments);
        else {
            var M = this,
                R = Array.prototype.slice.call(arguments);
            A.then(function(pa) {
                M.setRequestHeader("CSRF-Token", pa);
                U.apply(M, R)
            }, function() {
                U.apply(M, R)
            })
        } else U.apply(this, arguments)
    };
    var da = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function() {
        N(this);
        return da.apply(this,
            arguments)
    };
    if (window.Node) {
        var la = Node.prototype.appendChild;
        Node.prototype.appendChild = function() {
            var M = la.apply(this, arguments);
            if ("IFRAME" === M.nodeName) try {
                M.contentWindow && !M._csrf && (M._csrf = !0, y(M.contentWindow.document))
            } catch (R) {
                M.src && M.src.length && B(M.src) && window.console && console.error("Unable to attach CSRF token to an iframe element on the same origin")
            }
            return M
        }
    }
    x();
    setInterval(function() {
        x()
    }, 3E5);
    return {
        initialised: !1,
        refreshToken: x,
        _clearToken: function() {
            J = void 0;
            x()
        }
    }
});
(function(r, F) {
    function B(L) {
        return "string" === typeof L
    }

    function C(L) {
        var W = v.call(arguments, 1);
        return function() {
            return L.apply(this, W.concat(v.call(arguments)))
        }
    }

    function x(L, W, ea, ca, ja) {
        if (ca !== y) {
            W = ea.match(L ? Va : /^([^#?]*)\??([^#]*)(#?.*)/);
            ea = W[3] || "";
            if (2 === ja && B(ca)) ca = ca.replace(L ? Ha : Ua, "");
            else {
                var qa = da(W[2]);
                ca = B(ca) ? da[L ? "fragment" : "querystring"](ca) : ca;
                ca = 2 === ja ? ca : 1 === ja ? r.extend({}, ca, qa) : r.extend({}, qa, ca);
                ca = Y(ca);
                L && (ca = ca.replace(jb, A))
            }
            L = W[1] + (L ? kb : ca || !W[1] ? "?" : "") + ca + ea
        } else L =
            W(ea !== y ? ea : location.href);
        return L
    }

    function P(L, W, ea) {
        W === y || "boolean" === typeof W ? (ea = W, W = J[L ? "fragment" : "querystring"]()) : W = B(W) ? W.replace(L ? Ha : Ua, "") : W;
        return da(W, ea)
    }

    function N(L, W, ea, ca) {
        B(ea) || "object" === typeof ea || (ca = ea, ea = W, W = y);
        return this.each(function() {
            var ja = r(this),
                qa = W || Ab()[(this.nodeName || "").toLowerCase()] || "",
                na = qa && ja.attr(qa) || "";
            ja.attr(qa, J[L](na, ea, ca))
        })
    }
    "$:nomunge";
    var y, v = Array.prototype.slice,
        A = decodeURIComponent,
        J = r.param,
        Y, U, da, la;
    F = r.bbq = r.bbq || {};
    var M, R, pa = r.event.special,
        Ua = /^.*\?|#.*$/g,
        Ha, Va, jb, ub, kb, zb = {};
    J.querystring = C(x, 0, function(L) {
        return L.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    });
    J.fragment = U = C(x, 1, function(L) {
        return L.replace(Va, "$2")
    });
    J.sorted = Y = function(L, W) {
        var ea = [],
            ca = {};
        r.each(J(L, W).split("\x26"), function(ja, qa) {
            ja = qa.replace(/(?:%5B|=).*$/, "");
            var na = ca[ja];
            na || (na = ca[ja] = [], ea.push(ja));
            na.push(qa)
        });
        return r.map(ea.sort(), function(ja) {
            return ca[ja]
        }).join("\x26")
    };
    U.noEscape = function(L) {
        L = r.map((L || "").split(""), encodeURIComponent);
        jb = new RegExp(L.join("|"),
            "g")
    };
    U.noEscape(",/");
    U.ajaxCrawlable = function(L) {
        L !== y && (L ? (Ha = /^.*(?:#!|#)/, Va = /^([^#]*)(?:#!|#)?(.*)$/, kb = "#!") : (Ha = /^.*#/, Va = /^([^#]*)#?(.*)$/, kb = "#"), ub = !!L);
        return ub
    };
    U.ajaxCrawlable(0);
    r.deparam = da = function(L, W) {
        var ea = {},
            ca = {
                "true": !0,
                "false": !1,
                "null": null
            };
        r.each(L.replace(/\+/g, " ").split("\x26"), function(ja, qa) {
            var na = qa.split("\x3d");
            ja = A(na[0]);
            qa = ea;
            var Qa = 0,
                Da = ja.split("]["),
                La = Da.length - 1;
            /\[/.test(Da[0]) && /\]$/.test(Da[La]) ? (Da[La] = Da[La].replace(/\]$/, ""), Da = Da.shift().split("[").concat(Da),
                La = Da.length - 1) : La = 0;
            if (2 === na.length)
                if (na = A(na[1]), W && (na = na && !isNaN(na) ? +na : "undefined" === na ? y : ca[na] !== y ? ca[na] : na), La)
                    for (; Qa <= La; Qa++) ja = "" === Da[Qa] ? qa.length : Da[Qa], qa = qa[ja] = Qa < La ? qa[ja] || (Da[Qa + 1] && isNaN(Da[Qa + 1]) ? {} : []) : na;
                else r.isArray(ea[ja]) ? ea[ja].push(na) : ea[ja] = ea[ja] !== y ? [ea[ja], na] : na;
            else ja && (ea[ja] = W ? y : "")
        });
        return ea
    };
    da.querystring = C(P, 0);
    da.fragment = la = C(P, 1);
    r.elemUrlAttr || (r.elemUrlAttr = function(L) {
        return r.extend(zb, L)
    })({
        a: "href",
        base: "href",
        iframe: "src",
        img: "src",
        input: "src",
        form: "action",
        link: "href",
        script: "src"
    });
    var Ab = r.elemUrlAttr;
    r.fn.querystring = C(N, "querystring");
    r.fn.fragment = C(N, "fragment");
    F.pushState = M = function(L, W) {
        B(L) && /^#/.test(L) && W === y && (W = 2);
        var ea = L !== y;
        L = U(location.href, ea ? L : {}, ea ? W : 2);
        location.href = L
    };
    F.getState = R = function(L, W) {
        return L === y || "boolean" === typeof L ? la(L) : la(W)[L]
    };
    F.removeState = function(L) {
        var W = {};
        L !== y && (W = R(), r.each(r.isArray(L) ? L : arguments, function(ea, ca) {
            delete W[ca]
        }));
        M(W, 2)
    };
    pa.hashchange = r.extend(pa.hashchange, {
        add: function(L) {
            function W(ca) {
                var ja =
                    ca.fragment = U();
                ca.getState = function(qa, na) {
                    return qa === y || "boolean" === typeof qa ? da(ja, qa) : da(ja, na)[qa]
                };
                ea.apply(this, arguments)
            }
            if (r.isFunction(L)) {
                var ea = L;
                return W
            }
            ea = L.handler;
            L.handler = W
        }
    })
})(jQuery, this);
(function(r, F, B) {
    function C(v) {
        v = v || location.href;
        return "#" + v.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var x = r.event.special,
        P = document.documentMode,
        N = "onhashchange" in F && (P === B || 7 < P);
    r.fn.hashchange = function(v) {
        return v ? this.bind("hashchange", v) : this.trigger("hashchange")
    };
    r.fn.hashchange.delay = 50;
    x.hashchange = r.extend(x.hashchange, {
        setup: function() {
            if (N) return !1;
            r(y.start)
        },
        teardown: function() {
            if (N) return !1;
            r(y.stop)
        }
    });
    var y = function() {
        function v() {
            var M = C(),
                R = la(Y);
            M !== Y ? (da(Y = M, R), r(F).trigger("hashchange")) :
                R !== Y && (location.href = location.href.replace(/#.*/, "") + R);
            J = setTimeout(v, r.fn.hashchange.delay)
        }
        var A = {},
            J, Y = C(),
            U = function(M) {
                return M
            },
            da = U,
            la = U;
        A.start = function() {
            J || v()
        };
        A.stop = function() {
            J && clearTimeout(J);
            J = B
        };
        return A
    }()
})(jQuery, this);
(function(r) {
    var F = !1;
    "function" === typeof define && define.amd && (define(r), F = !0);
    "object" === typeof exports && (module.exports = r(), F = !0);
    if (!F) {
        var B = window.Cookies,
            C = window.Cookies = r();
        C.noConflict = function() {
            window.Cookies = B;
            return C
        }
    }
})(function() {
    function r() {
        for (var B = 0, C = {}; B < arguments.length; B++) {
            var x = arguments[B],
                P;
            for (P in x) C[P] = x[P]
        }
        return C
    }

    function F(B) {
        function C(x, P, N) {
            if ("undefined" !== typeof document) {
                if (1 < arguments.length) {
                    N = r({
                        path: "/"
                    }, C.defaults, N);
                    if ("number" === typeof N.expires) {
                        var y =
                            new Date;
                        y.setMilliseconds(y.getMilliseconds() + 864E5 * N.expires);
                        N.expires = y
                    }
                    N.expires = N.expires ? N.expires.toUTCString() : "";
                    try {
                        var v = JSON.stringify(P);
                        /^[\{\[]/.test(v) && (P = v)
                    } catch (la) {}
                    P = B.write ? B.write(P, x) : encodeURIComponent(String(P)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    x = encodeURIComponent(String(x));
                    x = x.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    x = x.replace(/[\(\)]/g, escape);
                    v = "";
                    for (var A in N) N[A] && (v += "; " + A, !0 !== N[A] && (v +=
                        "\x3d" + N[A]));
                    return document.cookie = x + "\x3d" + P + v
                }
                x || (v = {});
                A = document.cookie ? document.cookie.split("; ") : [];
                for (var J = /(%[0-9A-Z]{2})+/g, Y = 0; Y < A.length; Y++) {
                    var U = A[Y].split("\x3d"),
                        da = U.slice(1).join("\x3d");
                    this.json || '"' !== da.charAt(0) || (da = da.slice(1, -1));
                    try {
                        y = U[0].replace(J, decodeURIComponent);
                        da = B.read ? B.read(da, y) : B(da, y) || da.replace(J, decodeURIComponent);
                        if (this.json) try {
                            da = JSON.parse(da)
                        } catch (la) {}
                        if (x === y) {
                            v = da;
                            break
                        }
                        x || (v[y] = da)
                    } catch (la) {}
                }
                return v
            }
        }
        C.set = C;
        C.get = function(x) {
            return C.call(C,
                x)
        };
        C.getJSON = function() {
            return C.apply({
                json: !0
            }, [].slice.call(arguments))
        };
        C.defaults = {};
        C.remove = function(x, P) {
            C(x, "", r(P, {
                expires: -1
            }))
        };
        C.withConverter = F;
        return C
    }
    return F(function() {})
});
window.om || (window.om = {});
window.om.core || (window.om.core = {});
window.om.core.target || (window.om.core.target = {});
(function(r) {
    function F(B) {
        document.getElementById("mbox_" + B) && (document.getElementById("mbox_" + B).style.opacity = "1")
    }
    r.getOffer = function(B, C) {
        window.adobe && window.adobe.target ? window.adobe.target.getOffer({
            mbox: B,
            params: C,
            success: function(x) {
                window.adobe.target.applyOffer({
                    mbox: B,
                    selector: "#mbox_" + B,
                    offer: x
                });
                F(B)
            },
            error: function(x, P) {
                F(B);
                console.warn("error when calling getOffer(). status: " + x + ", error: " + P)
            }
        }) : (F(B), console.warn("Adobe Target not present - ignoring call"))
    }
})(window.om.core.target);
window.om || (window.om = {});
window.om.core || (window.om.core = {});
(function(r) {
    r.navigationEventListener = new function() {
        var F = [];
        this.addListener = function(C) {
            F.push(C)
        };
        var B = function(C, x, P) {
            F.forEach(function(N) {
                window.setTimeout(function() {
                    N(C, x, P)
                })
            })
        };
        this.navigate = function(C, x, P) {
            B(C, x, P)
        }
    }
})(window.om.core);
(function(r) {
    var F = !1,
        B = function(C, x, P) {
            var N = "";
            "@angular/router_NavigationEnd" === x ? N = C + "_" + P.urlAfterRedirects : "@uirouter/angularjs_v0.x_$stateChangeSuccess_toState" === x ? N = C + "_" + P.name : "@uirouter/angularjs_v1.x_$transitions_onSuccess_trans.to()" === x ? N = C + "_" + P.name : "generic" === x && (N = C + "_" + P.name);
            window.adobe && window.adobe.target && N && (C = {}, this && this.at_property && (C.at_property = this.at_property), window.adobe.target.getOffer({
                mbox: N,
                params: C,
                success: function(y) {
                    window.adobe.target.applyOffer({
                        mbox: N,
                        offer: y
                    });
                    document.getElementById(N) && (document.getElementById(N).style.opacity = "1")
                },
                error: function(y, v) {
                    document.getElementById(N) && (document.getElementById(N).style.opacity = "1");
                    console.warn("error when calling getOffer(). status: " + y + ", error: " + v)
                }
            }))
        };
    r.createGenericTargetNavigationEventCallback = function(C) {
        F || (window.om.core.navigationEventListener.addListener(B.bind({
            at_property: C
        })), F = !0)
    };
    r.activateTargetForSpa = function() {
        F || (window.om.core.navigationEventListener.addListener(B), F = !0)
    }
})(window.om.core);