(window.webpackJsonpthreeLevelNaviagtionJs = window.webpackJsonpthreeLevelNaviagtionJs || []).push([
    ["vendors~three-level-navigation"], {
        "./node_modules/expose-loader/dist/runtime/getGlobalThis.js": function(e, t, n) {
            "use strict";
            ! function(t) {
                e.exports = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    var e;
                    try {
                        e = this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window;
                        if ("object" == typeof self) return self;
                        if (void 0 !== t) return t
                    }
                    return e
                }()
            }.call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/jquery/dist/jquery-exposed.js": function(e, t, n) {
            var r = n("./node_modules/jquery/dist/jquery.js");
            n("./node_modules/expose-loader/dist/runtime/getGlobalThis.js").$ = r, e.exports = r
        },
        "./node_modules/jquery/dist/jquery.js": function(en, tn, e) {
            var nn;
            ! function(e, t) {
                "use strict";
                "object" == typeof en.exports ? en.exports = e.document ? t(e, !0) : function(e) {
                    if (e.document) return t(e);
                    throw new Error("jQuery requires a window with a document")
                } : t(e)
            }("undefined" != typeof window ? window : this, function(P, O) {
                "use strict";

                function A(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }

                function h(e) {
                    return null != e && e === e.window
                }
                var t = [],
                    V = Object.getPrototypeOf,
                    s = t.slice,
                    k = t.flat ? function(e) {
                        return t.flat.call(e)
                    } : function(e) {
                        return t.concat.apply([], e)
                    },
                    R = t.push,
                    F = t.indexOf,
                    X = {},
                    W = X.toString,
                    j = X.hasOwnProperty,
                    U = j.toString,
                    K = U.call(Object),
                    S = {},
                    M = P.document,
                    q = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function _(e, t, n) {
                    var r, i, o = (n = n || M).createElement("script");
                    if (o.text = e, t)
                        for (r in q)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }

                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[W.call(e)] || "object" : typeof e
                }
                var e = "3.6.1",
                    y = function(e, t) {
                        return new y.fn.init(e, t)
                    };

                function Q(e) {
                    var t = !!e && "length" in e && e.length,
                        n = T(e);
                    return !A(e) && !h(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
                }
                y.fn = y.prototype = {
                    jquery: e,
                    constructor: y,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        e = y.merge(this.constructor(), e);
                        return e.prevObject = this, e
                    },
                    each: function(e) {
                        return y.each(this, e)
                    },
                    map: function(n) {
                        return this.pushStack(y.map(this, function(e, t) {
                            return n.call(e, t, e)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(y.grep(this, function(e, t) {
                            return (t + 1) % 2
                        }))
                    },
                    odd: function() {
                        return this.pushStack(y.grep(this, function(e, t) {
                            return t % 2
                        }))
                    },
                    eq: function(e) {
                        var t = this.length,
                            e = +e + (e < 0 ? t : 0);
                        return this.pushStack(0 <= e && e < t ? [this[e]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: R,
                    sort: t.sort,
                    splice: t.splice
                }, y.extend = y.fn.extend = function() {
                    var e, t, n, r, i, o = arguments[0] || {},
                        a = 1,
                        s = arguments.length,
                        l = !1;
                    for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == typeof o || A(o) || (o = {}), a === s && (o = this, a--); a < s; a++)
                        if (null != (e = arguments[a]))
                            for (t in e) n = e[t], "__proto__" !== t && o !== n && (l && n && (y.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || y.isPlainObject(i) ? i : {}, r = !1, o[t] = y.extend(l, i, n)) : void 0 !== n && (o[t] = n));
                    return o
                }, y.extend({
                    expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        return !(!e || "[object Object]" !== W.call(e) || (e = V(e)) && ("function" != typeof(e = j.call(e, "constructor") && e.constructor) || U.call(e) !== K))
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        _(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (Q(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break;
                        return e
                    },
                    makeArray: function(e, t) {
                        t = t || [];
                        return null != e && (Q(Object(e)) ? y.merge(t, "string" == typeof e ? [e] : e) : R.call(t, e)), t
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : F.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            a = [];
                        if (Q(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return k(a)
                    },
                    guid: 1,
                    support: S
                }), "function" == typeof Symbol && (y.fn[Symbol.iterator] = t[Symbol.iterator]), y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    X["[object " + t + "]"] = t.toLowerCase()
                });

                function r(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && y(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                }

                function z(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                var e = function(O) {
                        function d(e, t) {
                            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
                        }

                        function V(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }

                        function k() {
                            M()
                        }
                        var e, f, g, o, R, p, F, X, P, l, u, M, y, n, v, T, r, i, h, G = "sizzle" + +new Date,
                            c = O.document,
                            C = 0,
                            W = 0,
                            j = D(),
                            U = D(),
                            K = D(),
                            S = D(),
                            q = function(e, t) {
                                return e === t && (u = !0), 0
                            },
                            _ = {}.hasOwnProperty,
                            t = [],
                            Q = t.pop,
                            z = t.push,
                            H = t.push,
                            $ = t.slice,
                            A = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            a = "[\\x20\\t\\r\\n\\f]",
                            s = "(?:\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            J = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
                            Z = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)",
                            ee = new RegExp(a + "+", "g"),
                            b = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
                            te = new RegExp("^" + a + "*," + a + "*"),
                            ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
                            re = new RegExp(a + "|>"),
                            ie = new RegExp(Z),
                            oe = new RegExp("^" + s + "$"),
                            m = {
                                ID: new RegExp("^#(" + s + ")"),
                                CLASS: new RegExp("^\\.(" + s + ")"),
                                TAG: new RegExp("^(" + s + "|[*])"),
                                ATTR: new RegExp("^" + J),
                                PSEUDO: new RegExp("^" + Z),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + Y + ")$", "i"),
                                needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
                            },
                            ae = /HTML$/i,
                            se = /^(?:input|select|textarea|button)$/i,
                            le = /^h\d$/i,
                            B = /^[^{]+\{\s*\[native \w/,
                            ue = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ce = /[+~]/,
                            E = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])", "g"),
                            de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            fe = Ae(function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }, {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            H.apply(t = $.call(c.childNodes), c.childNodes), t[c.childNodes.length].nodeType
                        } catch (e) {
                            H = {
                                apply: t.length ? function(e, t) {
                                    z.apply(e, $.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function x(t, e, n, r) {
                            var i, o, a, s, l, u, c = e && e.ownerDocument,
                                d = e ? e.nodeType : 9;
                            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                            if (!r && (M(e), e = e || y, v)) {
                                if (11 !== d && (s = ue.exec(t)))
                                    if (i = s[1]) {
                                        if (9 === d) {
                                            if (!(u = e.getElementById(i))) return n;
                                            if (u.id === i) return n.push(u), n
                                        } else if (c && (u = c.getElementById(i)) && h(e, u) && u.id === i) return n.push(u), n
                                    } else {
                                        if (s[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                                        if ((i = s[3]) && f.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                                    }
                                if (f.qsa && !S[t + " "] && (!T || !T.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                                    if (u = t, c = e, 1 === d && (re.test(t) || ne.test(t))) {
                                        for ((c = ce.test(t) && Se(e.parentNode) || e) === e && f.scope || ((a = e.getAttribute("id")) ? a = a.replace(de, V) : e.setAttribute("id", a = G)), o = (l = p(t)).length; o--;) l[o] = (a ? "#" + a : ":scope") + " " + L(l[o]);
                                        u = l.join(",")
                                    }
                                    try {
                                        return H.apply(n, c.querySelectorAll(u)), n
                                    } catch (e) {
                                        S(t, !0)
                                    } finally {
                                        a === G && e.removeAttribute("id")
                                    }
                                }
                            }
                            return X(t.replace(b, "$1"), e, n, r)
                        }

                        function D() {
                            var n = [];

                            function r(e, t) {
                                return n.push(e + " ") > g.cacheLength && delete r[n.shift()], r[e + " "] = t
                            }
                            return r
                        }

                        function w(e) {
                            return e[G] = !0, e
                        }

                        function I(e) {
                            var t = y.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t)
                            }
                        }

                        function pe(e, t) {
                            for (var n = e.split("|"), r = n.length; r--;) g.attrHandle[n[r]] = t
                        }

                        function Te(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function he(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && fe(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }

                        function N(a) {
                            return w(function(o) {
                                return o = +o, w(function(e, t) {
                                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                                })
                            })
                        }

                        function Se(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (e in f = x.support = {}, R = x.isXML = function(e) {
                                var t = e && e.namespaceURI,
                                    e = e && (e.ownerDocument || e).documentElement;
                                return !ae.test(t || e && e.nodeName || "HTML")
                            }, M = x.setDocument = function(e) {
                                var e = e ? e.ownerDocument || e : c;
                                return e != y && 9 === e.nodeType && e.documentElement && (n = (y = e).documentElement, v = !R(y), c != y && (e = y.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", k, !1) : e.attachEvent && e.attachEvent("onunload", k)), f.scope = I(function(e) {
                                    return n.appendChild(e).appendChild(y.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                }), f.attributes = I(function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                }), f.getElementsByTagName = I(function(e) {
                                    return e.appendChild(y.createComment("")), !e.getElementsByTagName("*").length
                                }), f.getElementsByClassName = B.test(y.getElementsByClassName), f.getById = I(function(e) {
                                    return n.appendChild(e).id = G, !y.getElementsByName || !y.getElementsByName(G).length
                                }), f.getById ? (g.filter.ID = function(e) {
                                    var t = e.replace(E, d);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, g.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && v) return (t = t.getElementById(e)) ? [t] : []
                                }) : (g.filter.ID = function(e) {
                                    var t = e.replace(E, d);
                                    return function(e) {
                                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return e && e.value === t
                                    }
                                }, g.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && v) {
                                        var n, r, i, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                        }
                                        return []
                                    }
                                }), g.find.TAG = f.getElementsByTagName ? function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" !== e) return o;
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }, g.find.CLASS = f.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                                }, r = [], T = [], (f.qsa = B.test(y.querySelectorAll)) && (I(function(e) {
                                    var t;
                                    n.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && T.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || T.push("\\[" + a + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" + G + "-]").length || T.push("~="), (t = y.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || T.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || T.push(":checked"), e.querySelectorAll("a#" + G + "+*").length || T.push(".#.+[+~]"), e.querySelectorAll("\\\f"), T.push("[\\r\\n\\f]")
                                }), I(function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = y.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && T.push("name" + a + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && T.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && T.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), T.push(",.*:")
                                })), (f.matchesSelector = B.test(i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && I(function(e) {
                                    f.disconnectedMatch = i.call(e, "*"), i.call(e, "[s!='']:x"), r.push("!=", Z)
                                }), T = T.length && new RegExp(T.join("|")), r = r.length && new RegExp(r.join("|")), e = B.test(n.compareDocumentPosition), h = e || B.test(n.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        t = t && t.parentNode;
                                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, q = e ? function(e, t) {
                                    var n;
                                    return e === t ? (u = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == y || e.ownerDocument == c && h(c, e) ? -1 : t == y || t.ownerDocument == c && h(c, t) ? 1 : l ? A(l, e) - A(l, t) : 0 : 4 & n ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return u = !0, 0;
                                    var n, r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o) return e == y ? -1 : t == y ? 1 : i ? -1 : o ? 1 : l ? A(l, e) - A(l, t) : 0;
                                    if (i === o) return Te(e, t);
                                    for (n = e; n = n.parentNode;) a.unshift(n);
                                    for (n = t; n = n.parentNode;) s.unshift(n);
                                    for (; a[r] === s[r];) r++;
                                    return r ? Te(a[r], s[r]) : a[r] == c ? -1 : s[r] == c ? 1 : 0
                                }), y
                            }, x.matches = function(e, t) {
                                return x(e, null, null, t)
                            }, x.matchesSelector = function(e, t) {
                                if (M(e), f.matchesSelector && v && !S[t + " "] && (!r || !r.test(t)) && (!T || !T.test(t))) try {
                                    var n = i.call(e, t);
                                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                } catch (e) {
                                    S(t, !0)
                                }
                                return 0 < x(t, y, null, [e]).length
                            }, x.contains = function(e, t) {
                                return (e.ownerDocument || e) != y && M(e), h(e, t)
                            }, x.attr = function(e, t) {
                                (e.ownerDocument || e) != y && M(e);
                                var n = g.attrHandle[t.toLowerCase()],
                                    n = n && _.call(g.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
                                return void 0 !== n ? n : f.attributes || !v ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                            }, x.escape = function(e) {
                                return (e + "").replace(de, V)
                            }, x.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, x.uniqueSort = function(e) {
                                var t, n = [],
                                    r = 0,
                                    i = 0;
                                if (u = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(q), u) {
                                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                                    for (; r--;) e.splice(n[r], 1)
                                }
                                return l = null, e
                            }, o = x.getText = function(e) {
                                var t, n = "",
                                    r = 0,
                                    i = e.nodeType;
                                if (i) {
                                    if (1 === i || 9 === i || 11 === i) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                                    } else if (3 === i || 4 === i) return e.nodeValue
                                } else
                                    for (; t = e[r++];) n += o(t);
                                return n
                            }, (g = x.selectors = {
                                cacheLength: 50,
                                createPseudo: w,
                                match: m,
                                attrHandle: {},
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
                                        return e[1] = e[1].replace(E, d), e[3] = (e[3] || e[4] || e[5] || "").replace(E, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return m.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ie.test(n) && (t = (t = p(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(E, d).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = j[e + " "];
                                        return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && j(e, function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        })
                                    },
                                    ATTR: function(t, n, r) {
                                        return function(e) {
                                            e = x.attr(e, t);
                                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                                        }
                                    },
                                    CHILD: function(T, e, t, h, S) {
                                        var b = "nth" !== T.slice(0, 3),
                                            A = "last" !== T.slice(-4),
                                            m = "of-type" === e;
                                        return 1 === h && 0 === S ? function(e) {
                                            return !!e.parentNode
                                        } : function(e, t, n) {
                                            var r, i, o, a, s, l, u = b != A ? "nextSibling" : "previousSibling",
                                                c = e.parentNode,
                                                d = m && e.nodeName.toLowerCase(),
                                                f = !n && !m,
                                                p = !1;
                                            if (c) {
                                                if (b) {
                                                    for (; u;) {
                                                        for (a = e; a = a[u];)
                                                            if (m ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                                        l = u = "only" === T && !l && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (l = [A ? c.firstChild : c.lastChild], A && f) {
                                                    for (p = (s = (r = (i = (o = (a = c)[G] || (a[G] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[T] || [])[0] === C && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (p = s = 0, l.pop());)
                                                        if (1 === a.nodeType && ++p && a === e) {
                                                            i[T] = [C, s, p];
                                                            break
                                                        }
                                                } else if (!1 === (p = f ? s = (r = (i = (o = (a = e)[G] || (a[G] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[T] || [])[0] === C && r[1] : p))
                                                    for (;
                                                        (a = ++s && a && a[u] || (p = s = 0, l.pop())) && ((m ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[G] || (a[G] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[T] = [C, p]), a !== e)););
                                                return (p -= S) === h || p % h == 0 && 0 <= p / h
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, o) {
                                        var t, a = g.pseudos[e] || g.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                                        return a[G] ? a(o) : 1 < a.length ? (t = [e, e, "", o], g.setFilters.hasOwnProperty(e.toLowerCase()) ? w(function(e, t) {
                                            for (var n, r = a(e, o), i = r.length; i--;) e[n = A(e, r[i])] = !(t[n] = r[i])
                                        }) : function(e) {
                                            return a(e, 0, t)
                                        }) : a
                                    }
                                },
                                pseudos: {
                                    not: w(function(e) {
                                        var r = [],
                                            i = [],
                                            s = F(e.replace(b, "$1"));
                                        return s[G] ? w(function(e, t, n, r) {
                                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                                        }) : function(e, t, n) {
                                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                                        }
                                    }),
                                    has: w(function(t) {
                                        return function(e) {
                                            return 0 < x(t, e).length
                                        }
                                    }),
                                    contains: w(function(t) {
                                        return t = t.replace(E, d),
                                            function(e) {
                                                return -1 < (e.textContent || o(e)).indexOf(t)
                                            }
                                    }),
                                    lang: w(function(n) {
                                        return oe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(E, d).toLowerCase(),
                                            function(e) {
                                                var t;
                                                do {
                                                    if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    }),
                                    target: function(e) {
                                        var t = O.location && O.location.hash;
                                        return t && t.slice(1) === e.id
                                    },
                                    root: function(e) {
                                        return e === n
                                    },
                                    focus: function(e) {
                                        return e === y.activeElement && (!y.hasFocus || y.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: he(!1),
                                    disabled: he(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !g.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return le.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return se.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: N(function() {
                                        return [0]
                                    }),
                                    last: N(function(e, t) {
                                        return [t - 1]
                                    }),
                                    eq: N(function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    }),
                                    even: N(function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    odd: N(function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    lt: N(function(e, t, n) {
                                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                                        return e
                                    }),
                                    gt: N(function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    })
                                }
                            }).pseudos.nth = g.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) g.pseudos[e] = function(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) g.pseudos[e] = function(n) {
                            return function(e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t || "button" === t) && e.type === n
                            }
                        }(e);

                        function be() {}

                        function L(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function Ae(a, e, t) {
                            var s = e.dir,
                                l = e.next,
                                u = l || s,
                                c = t && "parentNode" === u,
                                d = W++;
                            return e.first ? function(e, t, n) {
                                for (; e = e[s];)
                                    if (1 === e.nodeType || c) return a(e, t, n);
                                return !1
                            } : function(e, t, n) {
                                var r, i, o = [C, d];
                                if (n) {
                                    for (; e = e[s];)
                                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                                } else
                                    for (; e = e[s];)
                                        if (1 === e.nodeType || c)
                                            if (i = (i = e[G] || (e[G] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[s] || e;
                                            else {
                                                if ((r = i[u]) && r[0] === C && r[1] === d) return o[2] = r[2];
                                                if ((i[u] = o)[2] = a(e, t, n)) return !0
                                            } return !1
                            }
                        }

                        function me(i) {
                            return 1 < i.length ? function(e, t, n) {
                                for (var r = i.length; r--;)
                                    if (!i[r](e, t, n)) return !1;
                                return !0
                            } : i[0]
                        }

                        function ge(e, t, n, r, i) {
                            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) !(o = e[s]) || n && !n(o, r, i) || (a.push(o), u && t.push(s));
                            return a
                        }

                        function Pe(p, T, h, S, b, e) {
                            return S && !S[G] && (S = Pe(S)), b && !b[G] && (b = Pe(b, e)), w(function(e, t, n, r) {
                                var i, o, a, s = [],
                                    l = [],
                                    u = t.length,
                                    c = e || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) x(e, t[r], n);
                                        return n
                                    }(T || "*", n.nodeType ? [n] : n, []),
                                    d = !p || !e && T ? c : ge(c, s, p, n, r),
                                    f = h ? b || (e ? p : u || S) ? [] : t : d;
                                if (h && h(d, f, n, r), S)
                                    for (i = ge(f, l), S(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[l[o]] = !(d[l[o]] = a));
                                if (e) {
                                    if (b || p) {
                                        if (b) {
                                            for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
                                            b(null, f = [], i, r)
                                        }
                                        for (o = f.length; o--;)(a = f[o]) && -1 < (i = b ? A(e, a) : s[o]) && (e[i] = !(t[i] = a))
                                    }
                                } else f = ge(f === t ? f.splice(u, f.length) : f), b ? b(null, t, f, r) : H.apply(t, f)
                            })
                        }

                        function Me(S, b) {
                            function e(e, t, n, r, i) {
                                var o, a, s, l = 0,
                                    u = "0",
                                    c = e && [],
                                    d = [],
                                    f = P,
                                    p = e || m && g.find.TAG("*", i),
                                    T = C += null == f ? 1 : Math.random() || .1,
                                    h = p.length;
                                for (i && (P = t == y || t || i); u !== h && null != (o = p[u]); u++) {
                                    if (m && o) {
                                        for (a = 0, t || o.ownerDocument == y || (M(o), n = !v); s = S[a++];)
                                            if (s(o, t || y, n)) {
                                                r.push(o);
                                                break
                                            }
                                        i && (C = T)
                                    }
                                    A && ((o = !s && o) && l--, e) && c.push(o)
                                }
                                if (l += u, A && u !== l) {
                                    for (a = 0; s = b[a++];) s(c, d, t, n);
                                    if (e) {
                                        if (0 < l)
                                            for (; u--;) c[u] || d[u] || (d[u] = Q.call(r));
                                        d = ge(d)
                                    }
                                    H.apply(r, d), i && !e && 0 < d.length && 1 < l + b.length && x.uniqueSort(r)
                                }
                                return i && (C = T, P = f), c
                            }
                            var A = 0 < b.length,
                                m = 0 < S.length;
                            return A ? w(e) : e
                        }
                        return be.prototype = g.filters = g.pseudos, g.setFilters = new be, p = x.tokenize = function(e, t) {
                            var n, r, i, o, a, s, l, u = U[e + " "];
                            if (u) return t ? 0 : u.slice(0);
                            for (a = e, s = [], l = g.preFilter; a;) {
                                for (o in n && !(r = te.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = ne.exec(a)) && (n = r.shift(), i.push({
                                        value: n,
                                        type: r[0].replace(b, " ")
                                    }), a = a.slice(n.length)), g.filter) !(r = m[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                                    value: n,
                                    type: o,
                                    matches: r
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? x.error(e) : U(e, s).slice(0)
                        }, F = x.compile = function(e, t) {
                            var n, r = [],
                                i = [],
                                o = K[e + " "];
                            if (!o) {
                                for (n = (t = t || p(e)).length; n--;)((o = function e(t) {
                                    for (var r, n, i, o = t.length, a = g.relative[t[0].type], s = a || g.relative[" "], l = a ? 1 : 0, u = Ae(function(e) {
                                            return e === r
                                        }, s, !0), c = Ae(function(e) {
                                            return -1 < A(r, e)
                                        }, s, !0), d = [function(e, t, n) {
                                            return e = !a && (n || t !== P) || ((r = t).nodeType ? u : c)(e, t, n), r = null, e
                                        }]; l < o; l++)
                                        if (n = g.relative[t[l].type]) d = [Ae(me(d), n)];
                                        else {
                                            if ((n = g.filter[t[l].type].apply(null, t[l].matches))[G]) {
                                                for (i = ++l; i < o && !g.relative[t[i].type]; i++);
                                                return Pe(1 < l && me(d), 1 < l && L(t.slice(0, l - 1).concat({
                                                    value: " " === t[l - 2].type ? "*" : ""
                                                })).replace(b, "$1"), n, l < i && e(t.slice(l, i)), i < o && e(t = t.slice(i)), i < o && L(t))
                                            }
                                            d.push(n)
                                        }
                                    return me(d)
                                }(t[n]))[G] ? r : i).push(o);
                                (o = K(e, Me(i, r))).selector = e
                            }
                            return o
                        }, X = x.select = function(e, t, n, r) {
                            var i, o, a, s, l, u = "function" == typeof e && e,
                                c = !r && p(e = u.selector || e);
                            if (n = n || [], 1 === c.length) {
                                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && v && g.relative[o[1].type]) {
                                    if (!(t = (g.find.ID(a.matches[0].replace(E, d), t) || [])[0])) return n;
                                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                                }
                                for (i = m.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !g.relative[s = a.type]);)
                                    if ((l = g.find[s]) && (r = l(a.matches[0].replace(E, d), ce.test(o[0].type) && Se(t.parentNode) || t))) {
                                        if (o.splice(i, 1), e = r.length && L(o)) break;
                                        return H.apply(n, r), n
                                    }
                            }
                            return (u || F(e, c))(r, t, !v, n, !t || ce.test(e) && Se(t.parentNode) || t), n
                        }, f.sortStable = G.split("").sort(q).join("") === G, f.detectDuplicates = !!u, M(), f.sortDetached = I(function(e) {
                            return 1 & e.compareDocumentPosition(y.createElement("fieldset"))
                        }), I(function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        }) || pe("type|href|height|width", function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }), f.attributes && I(function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        }) || pe("value", function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        }), I(function(e) {
                            return null == e.getAttribute("disabled")
                        }) || pe(Y, function(e, t, n) {
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                        }), x
                    }(P),
                    $ = (y.find = e, y.expr = e.selectors, y.expr[":"] = y.expr.pseudos, y.uniqueSort = y.unique = e.uniqueSort, y.text = e.getText, y.isXMLDoc = e.isXML, y.contains = e.contains, y.escapeSelector = e.escape, y.expr.match.needsContext);

                function l(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function J(e, n, r) {
                    return A(n) ? y.grep(e, function(e, t) {
                        return !!n.call(e, t, e) !== r
                    }) : n.nodeType ? y.grep(e, function(e) {
                        return e === n !== r
                    }) : "string" != typeof n ? y.grep(e, function(e) {
                        return -1 < F.call(n, e) !== r
                    }) : y.filter(n, e, r)
                }
                y.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? y.find.matchesSelector(r, e) ? [r] : [] : y.find.matches(e, y.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                }, y.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(y(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (y.contains(i[t], this)) return !0
                        }));
                        for (n = this.pushStack([]), t = 0; t < r; t++) y.find(e, i[t], n);
                        return 1 < r ? y.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(J(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(J(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!J(this, "string" == typeof e && $.test(e) ? y(e) : e || [], !1).length
                    }
                });
                var Z, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                    te = ((y.fn.init = function(e, t, n) {
                        if (e) {
                            if (n = n || Z, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : A(e) ? void 0 !== n.ready ? n.ready(e) : e(y) : y.makeArray(e, this);
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                            if (r[1]) {
                                if (t = t instanceof y ? t[0] : t, y.merge(this, y.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : M, !0)), Y.test(r[1]) && y.isPlainObject(t))
                                    for (var r in t) A(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
                            } else(n = M.getElementById(r[2])) && (this[0] = n, this.length = 1)
                        }
                        return this
                    }).prototype = y.fn, Z = y(M), /^(?:parents|prev(?:Until|All))/),
                    ne = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function re(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                y.fn.extend({
                    has: function(e) {
                        var t = y(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++)
                                if (y.contains(this, t[e])) return !0
                        })
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && y(e);
                        if (!$.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && y.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(1 < o.length ? y.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? F.call(y(e), this[0]) : F.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(y.uniqueSort(y.merge(this.get(), y(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), y.each({
                    parent: function(e) {
                        e = e.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(e) {
                        return r(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return r(e, "parentNode", n)
                    },
                    next: function(e) {
                        return re(e, "nextSibling")
                    },
                    prev: function(e) {
                        return re(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return r(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return r(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return r(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return r(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return z((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return z(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && V(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), y.merge([], e.childNodes))
                    }
                }, function(r, i) {
                    y.fn[r] = function(e, t) {
                        var n = y.map(this, i, e);
                        return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = y.filter(t, n)), 1 < this.length && (ne[r] || y.uniqueSort(n), te.test(r)) && n.reverse(), this.pushStack(n)
                    }
                });
                var v = /[^\x20\t\r\n\f]+/g;

                function c(e) {
                    return e
                }

                function ie(e) {
                    throw e
                }

                function oe(e, t, n, r) {
                    var i;
                    try {
                        e && A(i = e.promise) ? i.call(e).done(t).fail(n) : e && A(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                y.Callbacks = function(r) {
                    var e, n;
                    r = "string" == typeof r ? (e = r, n = {}, y.each(e.match(v) || [], function(e, t) {
                        n[t] = !0
                    }), n) : y.extend({}, r);

                    function i() {
                        for (s = s || r.once, a = o = !0; u.length; c = -1)
                            for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && r.stopOnFalse && (c = l.length, t = !1);
                        r.memory || (t = !1), o = !1, s && (l = t ? [] : "")
                    }
                    var o, t, a, s, l = [],
                        u = [],
                        c = -1,
                        d = {
                            add: function() {
                                return l && (t && !o && (c = l.length - 1, u.push(t)), function n(e) {
                                    y.each(e, function(e, t) {
                                        A(t) ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== T(t) && n(t)
                                    })
                                }(arguments), t) && !o && i(), this
                            },
                            remove: function() {
                                return y.each(arguments, function(e, t) {
                                    for (var n; - 1 < (n = y.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                                }), this
                            },
                            has: function(e) {
                                return e ? -1 < y.inArray(e, l) : 0 < l.length
                            },
                            empty: function() {
                                return l = l && [], this
                            },
                            disable: function() {
                                return s = u = [], l = t = "", this
                            },
                            disabled: function() {
                                return !l
                            },
                            lock: function() {
                                return s = u = [], t || o || (l = t = ""), this
                            },
                            locked: function() {
                                return !!s
                            },
                            fireWith: function(e, t) {
                                return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o) || i(), this
                            },
                            fire: function() {
                                return d.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!a
                            }
                        };
                    return d
                }, y.extend({
                    Deferred: function(e) {
                        var o = [
                                ["notify", "progress", y.Callbacks("memory"), y.Callbacks("memory"), 2],
                                ["resolve", "done", y.Callbacks("once memory"), y.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", y.Callbacks("once memory"), y.Callbacks("once memory"), 1, "rejected"]
                            ],
                            i = "pending",
                            a = {
                                state: function() {
                                    return i
                                },
                                always: function() {
                                    return s.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return a.then(null, e)
                                },
                                pipe: function() {
                                    var i = arguments;
                                    return y.Deferred(function(r) {
                                        y.each(o, function(e, t) {
                                            var n = A(i[t[4]]) && i[t[4]];
                                            s[t[1]](function() {
                                                var e = n && n.apply(this, arguments);
                                                e && A(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                            })
                                        }), i = null
                                    }).promise()
                                },
                                then: function(t, n, r) {
                                    var l = 0;

                                    function u(i, o, a, s) {
                                        return function() {
                                            function e() {
                                                var e, t;
                                                if (!(i < l)) {
                                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, A(t) ? s ? t.call(e, u(l, o, c, s), u(l, o, ie, s)) : (l++, t.call(e, u(l, o, c, s), u(l, o, ie, s), u(l, o, c, o.notifyWith))) : (a !== c && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                                }
                                            }
                                            var n = this,
                                                r = arguments,
                                                t = s ? e : function() {
                                                    try {
                                                        e()
                                                    } catch (e) {
                                                        y.Deferred.exceptionHook && y.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (a !== ie && (n = void 0, r = [e]), o.rejectWith(n, r))
                                                    }
                                                };
                                            i ? t() : (y.Deferred.getStackHook && (t.stackTrace = y.Deferred.getStackHook()), P.setTimeout(t))
                                        }
                                    }
                                    return y.Deferred(function(e) {
                                        o[0][3].add(u(0, e, A(r) ? r : c, e.notifyWith)), o[1][3].add(u(0, e, A(t) ? t : c)), o[2][3].add(u(0, e, A(n) ? n : ie))
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? y.extend(e, a) : a
                                }
                            },
                            s = {};
                        return y.each(o, function(e, t) {
                            var n = t[2],
                                r = t[5];
                            a[t[1]] = n.add, r && n.add(function() {
                                i = r
                            }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                            }, s[t[0] + "With"] = n.fireWith
                        }), a.promise(s), e && e.call(s, s), s
                    },
                    when: function(e) {
                        function t(t) {
                            return function(e) {
                                i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o)
                            }
                        }
                        var n = arguments.length,
                            r = n,
                            i = Array(r),
                            o = s.call(arguments),
                            a = y.Deferred();
                        if (n <= 1 && (oe(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || A(o[r] && o[r].then))) return a.then();
                        for (; r--;) oe(o[r], t(r), a.reject);
                        return a.promise()
                    }
                });
                var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
                    se = (y.Deferred.exceptionHook = function(e, t) {
                        P.console && P.console.warn && e && ae.test(e.name) && P.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, y.readyException = function(e) {
                        P.setTimeout(function() {
                            throw e
                        })
                    }, y.Deferred());

                function le() {
                    M.removeEventListener("DOMContentLoaded", le), P.removeEventListener("load", le), y.ready()
                }
                y.fn.ready = function(e) {
                    return se.then(e).catch(function(e) {
                        y.readyException(e)
                    }), this
                }, y.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --y.readyWait : y.isReady) || (y.isReady = !0) !== e && 0 < --y.readyWait || se.resolveWith(M, [y])
                    }
                }), y.ready.then = se.then, "complete" === M.readyState || "loading" !== M.readyState && !M.documentElement.doScroll ? P.setTimeout(y.ready) : (M.addEventListener("DOMContentLoaded", le), P.addEventListener("load", le));

                function d(e, t, n, r, i, o, a) {
                    var s = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === T(n))
                        for (s in i = !0, n) d(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, A(r) || (a = !0), t = u ? a ? (t.call(e, r), null) : (u = t, function(e, t, n) {
                            return u.call(y(e), n)
                        }) : t))
                        for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
                }
                var ue = /^-ms-/,
                    ce = /-([a-z])/g;

                function de(e, t) {
                    return t.toUpperCase()
                }

                function m(e) {
                    return e.replace(ue, "ms-").replace(ce, de)
                }

                function b(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                }

                function fe() {
                    this.expando = y.expando + fe.uid++
                }
                fe.uid = 1, fe.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, b(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[m(t)] = n;
                        else
                            for (r in t) i[m(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(m) : (t = m(t)) in r ? [t] : t.match(v) || []).length;
                                for (; n--;) delete r[t[n]]
                            }
                            void 0 !== t && !y.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        e = e[this.expando];
                        return void 0 !== e && !y.isEmptyObject(e)
                    }
                };
                var g = new fe,
                    u = new fe,
                    pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    Te = /[A-Z]/g;

                function he(e, t, n) {
                    var r, i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(Te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : pe.test(i) ? JSON.parse(i) : i)
                            } catch (e) {}
                            u.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                y.extend({
                    hasData: function(e) {
                        return u.hasData(e) || g.hasData(e)
                    },
                    data: function(e, t, n) {
                        return u.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        u.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return g.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        g.remove(e, t)
                    }
                }), y.fn.extend({
                    data: function(n, e) {
                        var t, r, i, o = this[0],
                            a = o && o.attributes;
                        if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                            u.set(this, n)
                        }) : d(this, function(e) {
                            var t;
                            if (o && void 0 === e) return void 0 !== (t = u.get(o, n)) || void 0 !== (t = he(o, n)) ? t : void 0;
                            this.each(function() {
                                u.set(this, n, e)
                            })
                        }, null, e, 1 < arguments.length, null, !0);
                        if (this.length && (i = u.get(o), 1 === o.nodeType) && !g.get(o, "hasDataAttrs")) {
                            for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = m(r.slice(5)), he(o, r, i[r]));
                            g.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            u.remove(this, e)
                        })
                    }
                }), y.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return r = g.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = g.access(e, t, y.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = y.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = y._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                            y.dequeue(e, t)
                        }, o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return g.get(e, n) || g.access(e, n, {
                            empty: y.Callbacks("once memory").add(function() {
                                g.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }), y.fn.extend({
                    queue: function(t, n) {
                        var e = 2;
                        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? y.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                            var e = y.queue(this, t, n);
                            y._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && y.dequeue(this, t)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            y.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        function n() {
                            --i || o.resolveWith(a, [a])
                        }
                        var r, i = 1,
                            o = y.Deferred(),
                            a = this,
                            s = this.length;
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = g.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                        return n(), o.promise(t)
                    }
                });

                function Se(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && C(e) && "none" === y.css(e, "display")
                }
                var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    be = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
                    f = ["Top", "Right", "Bottom", "Left"],
                    G = M.documentElement,
                    C = function(e) {
                        return y.contains(e.ownerDocument, e)
                    },
                    Ae = {
                        composed: !0
                    };
                G.getRootNode && (C = function(e) {
                    return y.contains(e.ownerDocument, e) || e.getRootNode(Ae) === e.ownerDocument
                });

                function me(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return y.css(e, t, "")
                        },
                        l = s(),
                        u = n && n[3] || (y.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (y.cssNumber[t] || "px" !== u && +l) && be.exec(y.css(e, t));
                    if (c && c[3] !== u) {
                        for (u = u || c[3], c = +(l /= 2) || 1; a--;) y.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
                        y.style(e, t, (c *= 2) + u), n = n || []
                    }
                    return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = u, r.start = c, r.end = i), i
                }
                var ge = {};

                function H(e, t) {
                    for (var n, r, i, o, a, s = [], l = 0, u = e.length; l < u; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (s[l] = g.get(r, "display") || null, s[l] || (r.style.display = "")), "" === r.style.display && Se(r) && (s[l] = (a = o = void 0, o = (i = r).ownerDocument, i = i.nodeName, (a = ge[i]) || (o = o.body.appendChild(o.createElement(i)), a = y.css(o, "display"), o.parentNode.removeChild(o), ge[i] = a = "none" === a ? "block" : a), a))) : "none" !== n && (s[l] = "none", g.set(r, "display", n)));
                    for (l = 0; l < u; l++) null != s[l] && (e[l].style.display = s[l]);
                    return e
                }
                y.fn.extend({
                    show: function() {
                        return H(this, !0)
                    },
                    hide: function() {
                        return H(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            Se(this) ? y(this).show() : y(this).hide()
                        })
                    }
                });
                var Pe = /^(?:checkbox|radio)$/i,
                    Me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ye = /^$|^module$|\/(?:java|ecma)script/i,
                    B = (w = M.createDocumentFragment().appendChild(M.createElement("div")), (o = M.createElement("input")).setAttribute("type", "radio"), o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), w.appendChild(o), S.checkClone = w.cloneNode(!0).cloneNode(!0).lastChild.checked, w.innerHTML = "<textarea>x</textarea>", S.noCloneChecked = !!w.cloneNode(!0).lastChild.defaultValue, w.innerHTML = "<option></option>", S.option = !!w.lastChild, {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    });

                function E(e, t) {
                    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                    return void 0 === t || t && l(e, t) ? y.merge([e], n) : n
                }

                function ve(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) g.set(e[n], "globalEval", !t || g.get(t[n], "globalEval"))
                }
                B.tbody = B.tfoot = B.colgroup = B.caption = B.thead, B.th = B.td, S.option || (B.optgroup = B.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Ge = /<|&#?\w+;/;

                function Ce(e, t, n, r, i) {
                    for (var o, a, s, l, u, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                        if ((o = e[f]) || 0 === o)
                            if ("object" === T(o)) y.merge(d, o.nodeType ? [o] : o);
                            else if (Ge.test(o)) {
                        for (a = a || c.appendChild(t.createElement("div")), s = (Me.exec(o) || ["", ""])[1].toLowerCase(), s = B[s] || B._default, a.innerHTML = s[1] + y.htmlPrefilter(o) + s[2], u = s[0]; u--;) a = a.lastChild;
                        y.merge(d, a.childNodes), (a = c.firstChild).textContent = ""
                    } else d.push(t.createTextNode(o));
                    for (c.textContent = "", f = 0; o = d[f++];)
                        if (r && -1 < y.inArray(o, r)) i && i.push(o);
                        else if (l = C(o), a = E(c.appendChild(o), "script"), l && ve(a), n)
                        for (u = 0; o = a[u++];) ye.test(o.type || "") && n.push(o);
                    return c
                }
                var He = /^([^.]*)(?:\.(.+)|)/;

                function n() {
                    return !0
                }

                function p() {
                    return !1
                }

                function Be(e, t) {
                    return e === function() {
                        try {
                            return M.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }

                function Ee(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = p;
                    else if (!i) return e;
                    return 1 === o && (a = i, (i = function(e) {
                        return y().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = y.guid++)), e.each(function() {
                        y.event.add(this, t, i, r, n)
                    })
                }

                function xe(e, i, o) {
                    o ? (g.set(e, i, !1), y.event.add(e, i, {
                        namespace: !1,
                        handler: function(e) {
                            var t, n, r = g.get(this, i);
                            if (1 & e.isTrigger && this[i]) {
                                if (r.length)(y.event.special[i] || {}).delegateType && e.stopPropagation();
                                else if (r = s.call(arguments), g.set(this, i, r), t = o(this, i), this[i](), r !== (n = g.get(this, i)) || t ? g.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                            } else r.length && (g.set(this, i, {
                                value: y.event.trigger(y.extend(r[0], y.Event.prototype), r.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === g.get(e, i) && y.event.add(e, i, n)
                }
                y.event = {
                    global: {},
                    add: function(t, e, n, r, i) {
                        var o, a, s, l, u, c, d, f, p, T = g.get(t);
                        if (b(t))
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && y.find.matchesSelector(G, i), n.guid || (n.guid = y.guid++), s = (s = T.events) || (T.events = Object.create(null)), a = (a = T.handle) || (T.handle = function(e) {
                                    return void 0 !== y && y.event.triggered !== e.type ? y.event.dispatch.apply(t, arguments) : void 0
                                }), l = (e = (e || "").match(v) || [""]).length; l--;) d = p = (f = He.exec(e[l]) || [])[1], f = (f[2] || "").split(".").sort(), d && (u = y.event.special[d] || {}, d = (i ? u.delegateType : u.bindType) || d, u = y.event.special[d] || {}, p = y.extend({
                                type: d,
                                origType: p,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && y.expr.match.needsContext.test(i),
                                namespace: f.join(".")
                            }, o), (c = s[d]) || ((c = s[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, r, f, a)) || t.addEventListener && t.addEventListener(d, a), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, p) : c.push(p), y.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, l, u, c, d, f, p, T, h, S = g.hasData(e) && g.get(e);
                        if (S && (l = S.events)) {
                            for (u = (t = (t || "").match(v) || [""]).length; u--;)
                                if (p = h = (s = He.exec(t[u]) || [])[1], T = (s[2] || "").split(".").sort(), p) {
                                    for (d = y.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && h !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, T, S.handle) || y.removeEvent(e, p, S.handle), delete l[p])
                                } else
                                    for (p in l) y.event.remove(e, p + t[u], n, r, !0);
                            y.isEmptyObject(l) && g.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a = new Array(arguments.length),
                            s = y.event.fix(e),
                            e = (g.get(this, "events") || Object.create(null))[s.type] || [],
                            l = y.event.special[s.type] || {};
                        for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                        if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                            for (o = y.event.handlers.call(this, s, e), t = 0;
                                (r = o[t++]) && !s.isPropagationStopped();)
                                for (s.currentTarget = r.elem, n = 0;
                                    (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (i = ((y.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, s), s.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [],
                            l = t.delegateCount,
                            u = e.target;
                        if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                            for (; u !== this; u = u.parentNode || this)
                                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                    for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < y(i, this).index(u) : y.find(i, this, null, [u]).length), a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: u,
                                        handlers: o
                                    })
                                }
                        return u = this, l < t.length && s.push({
                            elem: u,
                            handlers: t.slice(l)
                        }), s
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(y.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: A(e) ? function() {
                                if (this.originalEvent) return e(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[t]
                            },
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[y.expando] ? e : new y.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                e = this || e;
                                return Pe.test(e.type) && e.click && l(e, "input") && xe(e, "click", n), !1
                            },
                            trigger: function(e) {
                                e = this || e;
                                return Pe.test(e.type) && e.click && l(e, "input") && xe(e, "click"), !0
                            },
                            _default: function(e) {
                                e = e.target;
                                return Pe.test(e.type) && e.click && l(e, "input") && g.get(e, "click") || l(e, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, y.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, y.Event = function(e, t) {
                    if (!(this instanceof y.Event)) return new y.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? n : p, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && y.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[y.expando] = !0
                }, y.Event.prototype = {
                    constructor: y.Event,
                    isDefaultPrevented: p,
                    isPropagationStopped: p,
                    isImmediatePropagationStopped: p,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = n, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = n, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = n, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, y.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, y.event.addProp), y.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(t, e) {
                    y.event.special[t] = {
                        setup: function() {
                            return xe(this, t, Be), !1
                        },
                        trigger: function() {
                            return xe(this, t), !0
                        },
                        _default: function(e) {
                            return g.get(e.target, t)
                        },
                        delegateType: e
                    }
                }), y.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, i) {
                    y.event.special[e] = {
                        delegateType: i,
                        bindType: i,
                        handle: function(e) {
                            var t, n = e.relatedTarget,
                                r = e.handleObj;
                            return n && (n === this || y.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                        }
                    }
                }), y.fn.extend({
                    on: function(e, t, n, r) {
                        return Ee(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Ee(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) r = e.handleObj, y(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                        else {
                            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = p), this.each(function() {
                                y.event.remove(this, e, n, t)
                            });
                            for (i in e) this.off(i, t, e[i])
                        }
                        return this
                    }
                });
                var De = /<script|<style|<link/i,
                    we = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Ie = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                function Ne(e, t) {
                    return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && y(e).children("tbody")[0] || e
                }

                function Le(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function Oe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Ve(e, t) {
                    var n, r, i, o;
                    if (1 === t.nodeType) {
                        if (g.hasData(e) && (o = g.get(e).events))
                            for (i in g.remove(t, "handle events"), o)
                                for (n = 0, r = o[i].length; n < r; n++) y.event.add(t, i, o[i][n]);
                        u.hasData(e) && (e = u.access(e), e = y.extend({}, e), u.set(t, e))
                    }
                }

                function x(n, r, i, o) {
                    r = k(r);
                    var e, t, a, s, l, u, c = 0,
                        d = n.length,
                        f = d - 1,
                        p = r[0],
                        T = A(p);
                    if (T || 1 < d && "string" == typeof p && !S.checkClone && we.test(p)) return n.each(function(e) {
                        var t = n.eq(e);
                        T && (r[0] = p.call(this, e, t.html())), x(t, r, i, o)
                    });
                    if (d && (t = (e = Ce(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                        for (s = (a = y.map(E(e, "script"), Le)).length; c < d; c++) l = e, c !== f && (l = y.clone(l, !0, !0), s) && y.merge(a, E(l, "script")), i.call(n[c], l, c);
                        if (s)
                            for (u = a[a.length - 1].ownerDocument, y.map(a, Oe), c = 0; c < s; c++) l = a[c], ye.test(l.type || "") && !g.access(l, "globalEval") && y.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? y._evalUrl && !l.noModule && y._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }, u) : _(l.textContent.replace(Ie, ""), l, u))
                    }
                    return n
                }

                function ke(e, t, n) {
                    for (var r, i = t ? y.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || y.cleanData(E(r)), r.parentNode && (n && C(r) && ve(E(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                y.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s, l, u, c = e.cloneNode(!0),
                            d = C(e);
                        if (!(S.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || y.isXMLDoc(e)))
                            for (a = E(c), r = 0, i = (o = E(e)).length; r < i; r++) s = o[r], l = a[r], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && Pe.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
                        if (t)
                            if (n)
                                for (o = o || E(e), a = a || E(c), r = 0, i = o.length; r < i; r++) Ve(o[r], a[r]);
                            else Ve(e, c);
                        return 0 < (a = E(c, "script")).length && ve(a, !d && E(e, "script")), c
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = y.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (b(n)) {
                                if (t = n[g.expando]) {
                                    if (t.events)
                                        for (r in t.events) i[r] ? y.event.remove(n, r) : y.removeEvent(n, r, t.handle);
                                    n[g.expando] = void 0
                                }
                                n[u.expando] && (n[u.expando] = void 0)
                            }
                    }
                }), y.fn.extend({
                    detach: function(e) {
                        return ke(this, e, !0)
                    },
                    remove: function(e) {
                        return ke(this, e)
                    },
                    text: function(e) {
                        return d(this, function(e) {
                            return void 0 === e ? y.text(this) : this.empty().each(function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return x(this, arguments, function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                        })
                    },
                    prepend: function() {
                        return x(this, arguments, function(e) {
                            var t;
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ne(this, e)).insertBefore(e, t.firstChild)
                        })
                    },
                    before: function() {
                        return x(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return x(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (y.cleanData(E(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map(function() {
                            return y.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return d(this, function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !De.test(e) && !B[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = y.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (y.cleanData(E(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var n = [];
                        return x(this, arguments, function(e) {
                            var t = this.parentNode;
                            y.inArray(this, n) < 0 && (y.cleanData(E(this)), t) && t.replaceChild(e, this)
                        }, n)
                    }
                }), y.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, a) {
                    y.fn[e] = function(e) {
                        for (var t, n = [], r = y(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), y(r[o])[a](t), R.apply(n, t.get());
                        return this.pushStack(n)
                    }
                });

                function Re(e) {
                    var t = e.ownerDocument.defaultView;
                    return (t = t && t.opener ? t : P).getComputedStyle(e)
                }

                function Fe(e, t, n) {
                    var r, i = {};
                    for (r in t) i[r] = e.style[r], e.style[r] = t[r];
                    for (r in n = n.call(e), t) e.style[r] = i[r];
                    return n
                }
                var Xe, We, je, Ue, Ke, qe, _e, i, Qe = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
                    ze = /^--/,
                    $e = new RegExp(f.join("|"), "i"),
                    o = "[\\x20\\t\\r\\n\\f]",
                    Ye = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g");

                function Je() {
                    var e;
                    i && (_e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", G.appendChild(_e).appendChild(i), e = P.getComputedStyle(i), Xe = "1%" !== e.top, qe = 12 === Ze(e.marginLeft), i.style.right = "60%", Ue = 36 === Ze(e.right), We = 36 === Ze(e.width), i.style.position = "absolute", je = 12 === Ze(i.offsetWidth / 3), G.removeChild(_e), i = null)
                }

                function Ze(e) {
                    return Math.round(parseFloat(e))
                }

                function et(e, t, n) {
                    var r, i = ze.test(t),
                        o = e.style;
                    return (n = n || Re(e)) && (r = n.getPropertyValue(t) || n[t], "" !== (r = i ? r.replace(Ye, "$1") : r) || C(e) || (r = y.style(e, t)), !S.pixelBoxStyles()) && Qe.test(r) && $e.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = e, o.maxWidth = t), void 0 !== r ? r + "" : r
                }

                function tt(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                _e = M.createElement("div"), (i = M.createElement("div")).style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", S.clearCloneStyle = "content-box" === i.style.backgroundClip, y.extend(S, {
                    boxSizingReliable: function() {
                        return Je(), We
                    },
                    pixelBoxStyles: function() {
                        return Je(), Ue
                    },
                    pixelPosition: function() {
                        return Je(), Xe
                    },
                    reliableMarginLeft: function() {
                        return Je(), qe
                    },
                    scrollboxSize: function() {
                        return Je(), je
                    },
                    reliableTrDimensions: function() {
                        var e, t, n;
                        return null == Ke && (e = M.createElement("table"), t = M.createElement("tr"), n = M.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", G.appendChild(e).appendChild(t).appendChild(n), n = P.getComputedStyle(t), Ke = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, G.removeChild(e)), Ke
                    }
                }));
                var nt = ["Webkit", "Moz", "ms"],
                    rt = M.createElement("div").style,
                    it = {};

                function ot(e) {
                    var t = y.cssProps[e] || it[e];
                    return t || (e in rt ? e : it[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                            if ((e = nt[n] + t) in rt) return e
                    }(e) || e)
                }
                var at = /^(none|table(?!-c[ea]).+)/,
                    st = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    lt = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function ut(e, t, n) {
                    var r = be.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function ct(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        l = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (l += y.css(e, n + f[a], !0, i)), r ? ("content" === n && (l -= y.css(e, "padding" + f[a], !0, i)), "margin" !== n && (l -= y.css(e, "border" + f[a] + "Width", !0, i))) : (l += y.css(e, "padding" + f[a], !0, i), "padding" !== n ? l += y.css(e, "border" + f[a] + "Width", !0, i) : s += y.css(e, "border" + f[a] + "Width", !0, i));
                    return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
                }

                function dt(e, t, n) {
                    var r = Re(e),
                        i = (!S.boxSizingReliable() || n) && "border-box" === y.css(e, "boxSizing", !1, r),
                        o = i,
                        a = et(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Qe.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!S.boxSizingReliable() && i || !S.reliableTrDimensions() && l(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === y.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === y.css(e, "boxSizing", !1, r), o = s in e) && (a = e[s]), (a = parseFloat(a) || 0) + ct(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }

                function a(e, t, n, r, i) {
                    return new a.prototype.init(e, t, n, r, i)
                }
                y.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) return "" === (t = et(e, "opacity")) ? "1" : t
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
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = m(t),
                                l = ze.test(t),
                                u = e.style;
                            if (l || (t = ot(s)), a = y.cssHooks[t] || y.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                            "string" === (o = typeof n) && (i = be.exec(n)) && i[1] && (n = me(e, t, i), o = "number"), null == n || n != n || ("number" !== o || l || (n += i && i[3] || (y.cssNumber[s] ? "" : "px")), S.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r))) || (l ? u.setProperty(t, n) : u[t] = n)
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o = m(t);
                        return ze.test(t) || (t = ot(o)), "normal" === (i = void 0 === (i = (o = y.cssHooks[t] || y.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? et(e, t, r) : i) && t in lt && (i = lt[t]), ("" === n || n) && (o = parseFloat(i), !0 === n || isFinite(o)) ? o || 0 : i
                    }
                }), y.each(["height", "width"], function(e, a) {
                    y.cssHooks[a] = {
                        get: function(e, t, n) {
                            if (t) return !at.test(y.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? dt(e, a, n) : Fe(e, st, function() {
                                return dt(e, a, n)
                            })
                        },
                        set: function(e, t, n) {
                            var r = Re(e),
                                i = !S.scrollboxSize() && "absolute" === r.position,
                                o = (i || n) && "border-box" === y.css(e, "boxSizing", !1, r),
                                n = n ? ct(e, a, n, o, r) : 0;
                            return o && i && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - ct(e, a, "border", !1, r) - .5)), n && (o = be.exec(t)) && "px" !== (o[3] || "px") && (e.style[a] = t, t = y.css(e, a)), ut(0, t, n)
                        }
                    }
                }), y.cssHooks.marginLeft = tt(S.reliableMarginLeft, function(e, t) {
                    if (t) return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
                }), y.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(i, o) {
                    y.cssHooks[i + o] = {
                        expand: function(e) {
                            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + f[t] + o] = r[t] || r[t - 2] || r[0];
                            return n
                        }
                    }, "margin" !== i && (y.cssHooks[i + o].set = ut)
                }), y.fn.extend({
                    css: function(e, t) {
                        return d(this, function(e, t, n) {
                            var r, i, o = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = y.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? y.style(e, t, n) : y.css(e, t)
                        }, e, t, 1 < arguments.length)
                    }
                }), ((y.Tween = a).prototype = {
                    constructor: a,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || y.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (y.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = a.propHooks[this.prop];
                        return (e && e.get ? e : a.propHooks._default).get(this)
                    },
                    run: function(e) {
                        var t, n = a.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : a.propHooks._default).set(this), this
                    }
                }).init.prototype = a.prototype, (a.propHooks = {
                    _default: {
                        get: function(e) {
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = y.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                        },
                        set: function(e) {
                            y.fx.step[e.prop] ? y.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !y.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : y.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }).scrollTop = a.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, y.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, y.fx = a.prototype.init, y.fx.step = {};
                var D, ft, w, pt = /^(?:toggle|show|hide)$/,
                    Tt = /queueHooks$/;

                function ht() {
                    ft && (!1 === M.hidden && P.requestAnimationFrame ? P.requestAnimationFrame(ht) : P.setTimeout(ht, y.fx.interval), y.fx.tick())
                }

                function St() {
                    return P.setTimeout(function() {
                        D = void 0
                    }), D = Date.now()
                }

                function bt(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = f[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function At(e, t, n) {
                    for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e)) return r
                }

                function I(i, e, t) {
                    var n, o, r, a, s, l, u, c = 0,
                        d = I.prefilters.length,
                        f = y.Deferred().always(function() {
                            delete p.elem
                        }),
                        p = function() {
                            if (!o) {
                                for (var e = D || St(), e = Math.max(0, T.startTime + T.duration - e), t = 1 - (e / T.duration || 0), n = 0, r = T.tweens.length; n < r; n++) T.tweens[n].run(t);
                                if (f.notifyWith(i, [T, t, e]), t < 1 && r) return e;
                                r || f.notifyWith(i, [T, 1, 0]), f.resolveWith(i, [T])
                            }
                            return !1
                        },
                        T = f.promise({
                            elem: i,
                            props: y.extend({}, e),
                            opts: y.extend(!0, {
                                specialEasing: {},
                                easing: y.easing._default
                            }, t),
                            originalProperties: e,
                            originalOptions: t,
                            startTime: D || St(),
                            duration: t.duration,
                            tweens: [],
                            createTween: function(e, t) {
                                t = y.Tween(i, T.opts, e, t, T.opts.specialEasing[e] || T.opts.easing);
                                return T.tweens.push(t), t
                            },
                            stop: function(e) {
                                var t = 0,
                                    n = e ? T.tweens.length : 0;
                                if (!o) {
                                    for (o = !0; t < n; t++) T.tweens[t].run(1);
                                    e ? (f.notifyWith(i, [T, 1, 0]), f.resolveWith(i, [T, e])) : f.rejectWith(i, [T, e])
                                }
                                return this
                            }
                        }),
                        h = T.props,
                        S = h,
                        b = T.opts.specialEasing;
                    for (r in S)
                        if (s = b[a = m(r)], l = S[r], Array.isArray(l) && (s = l[1], l = S[r] = l[0]), r !== a && (S[a] = l, delete S[r]), (u = y.cssHooks[a]) && "expand" in u)
                            for (r in l = u.expand(l), delete S[a], l) r in S || (S[r] = l[r], b[r] = s);
                        else b[a] = s;
                    for (; c < d; c++)
                        if (n = I.prefilters[c].call(T, i, h, T.opts)) return A(n.stop) && (y._queueHooks(T.elem, T.opts.queue).stop = n.stop.bind(n)), n;
                    return y.map(h, At, T), A(T.opts.start) && T.opts.start.call(i, T), T.progress(T.opts.progress).done(T.opts.done, T.opts.complete).fail(T.opts.fail).always(T.opts.always), y.fx.timer(y.extend(p, {
                        elem: i,
                        anim: T,
                        queue: T.opts.queue
                    })), T
                }
                y.Animation = y.extend(I, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return me(n.elem, e, be.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        for (var n, r = 0, i = (e = A(e) ? (t = e, ["*"]) : e.match(v)).length; r < i; r++) n = e[r], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, l, u, c = "width" in t || "height" in t,
                            d = this,
                            f = {},
                            p = e.style,
                            T = e.nodeType && Se(e),
                            h = g.get(e, "fxshow");
                        for (r in n.queue || (null == (a = y._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, d.always(function() {
                                d.always(function() {
                                    a.unqueued--, y.queue(e, "fx").length || a.empty.fire()
                                })
                            })), t)
                            if (i = t[r], pt.test(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (T ? "hide" : "show")) {
                                    if ("show" !== i || !h || void 0 === h[r]) continue;
                                    T = !0
                                }
                                f[r] = h && h[r] || y.style(e, r)
                            }
                        if ((l = !y.isEmptyObject(t)) || !y.isEmptyObject(f))
                            for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = h && h.display) && (u = g.get(e, "display")), "none" === (c = y.css(e, "display")) && (u ? c = u : (H([e], !0), u = e.style.display || u, c = y.css(e, "display"), H([e]))), "inline" === c || "inline-block" === c && null != u) && "none" === y.css(e, "float") && (l || (d.done(function() {
                                    p.display = u
                                }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block"), n.overflow && (p.overflow = "hidden", d.always(function() {
                                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                })), l = !1, f) l || (h ? "hidden" in h && (T = h.hidden) : h = g.access(e, "fxshow", {
                                display: u
                            }), o && (h.hidden = !T), T && H([e], !0), d.done(function() {
                                for (r in T || H([e]), g.remove(e, "fxshow"), f) y.style(e, r, f[r])
                            })), l = At(T ? h[r] : 0, r, d), r in h || (h[r] = l.start, T && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? I.prefilters.unshift(e) : I.prefilters.push(e)
                    }
                }), y.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? y.extend({}, e) : {
                        complete: n || !n && t || A(e) && e,
                        duration: e,
                        easing: n && t || t && !A(t) && t
                    };
                    return y.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in y.fx.speeds ? r.duration = y.fx.speeds[r.duration] : r.duration = y.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        A(r.old) && r.old.call(this), r.queue && y.dequeue(this, r.queue)
                    }, r
                }, y.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Se).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(t, e, n, r) {
                        function i() {
                            var e = I(this, y.extend({}, t), a);
                            (o || g.get(this, "finish")) && e.stop(!0)
                        }
                        var o = y.isEmptyObject(t),
                            a = y.speed(e, n, r);
                        return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
                    },
                    stop: function(i, e, o) {
                        function a(e) {
                            var t = e.stop;
                            delete e.stop, t(o)
                        }
                        return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                            var e = !0,
                                t = null != i && i + "queueHooks",
                                n = y.timers,
                                r = g.get(this);
                            if (t) r[t] && r[t].stop && a(r[t]);
                            else
                                for (t in r) r[t] && r[t].stop && Tt.test(t) && a(r[t]);
                            for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                            !e && o || y.dequeue(this, i)
                        })
                    },
                    finish: function(a) {
                        return !1 !== a && (a = a || "fx"), this.each(function() {
                            var e, t = g.get(this),
                                n = t[a + "queue"],
                                r = t[a + "queueHooks"],
                                i = y.timers,
                                o = n ? n.length : 0;
                            for (t.finish = !0, y.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete t.finish
                        })
                    }
                }), y.each(["toggle", "show", "hide"], function(e, r) {
                    var i = y.fn[r];
                    y.fn[r] = function(e, t, n) {
                        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(bt(r, !0), e, t, n)
                    }
                }), y.each({
                    slideDown: bt("show"),
                    slideUp: bt("hide"),
                    slideToggle: bt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, r) {
                    y.fn[e] = function(e, t, n) {
                        return this.animate(r, e, t, n)
                    }
                }), y.timers = [], y.fx.tick = function() {
                    var e, t = 0,
                        n = y.timers;
                    for (D = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || y.fx.stop(), D = void 0
                }, y.fx.timer = function(e) {
                    y.timers.push(e), y.fx.start()
                }, y.fx.interval = 13, y.fx.start = function() {
                    ft || (ft = !0, ht())
                }, y.fx.stop = function() {
                    ft = null
                }, y.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, y.fn.delay = function(r, e) {
                    return r = y.fx && y.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
                        var n = P.setTimeout(e, r);
                        t.stop = function() {
                            P.clearTimeout(n)
                        }
                    })
                }, w = M.createElement("input"), e = M.createElement("select").appendChild(M.createElement("option")), w.type = "checkbox", S.checkOn = "" !== w.value, S.optSelected = e.selected, (w = M.createElement("input")).value = "t", w.type = "radio", S.radioValue = "t" === w.value;
                var mt, gt = y.expr.attrHandle,
                    Pt = (y.fn.extend({
                        attr: function(e, t) {
                            return d(this, y.attr, e, t, 1 < arguments.length)
                        },
                        removeAttr: function(e) {
                            return this.each(function() {
                                y.removeAttr(this, e)
                            })
                        }
                    }), y.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? y.prop(e, t, n) : (1 === o && y.isXMLDoc(e) || (i = y.attrHooks[t.toLowerCase()] || (y.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void y.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = y.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    var n;
                                    if (!S.radioValue && "radio" === t && l(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r = 0,
                                i = t && t.match(v);
                            if (i && 1 === e.nodeType)
                                for (; n = i[r++];) e.removeAttribute(n)
                        }
                    }), mt = {
                        set: function(e, t, n) {
                            return !1 === t ? y.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, y.each(y.expr.match.bool.source.match(/\w+/g), function(e, t) {
                        var a = gt[t] || y.find.attr;
                        gt[t] = function(e, t, n) {
                            var r, i, o = t.toLowerCase();
                            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
                        }
                    }), /^(?:input|select|textarea|button)$/i),
                    Mt = /^(?:a|area)$/i;

                function N(e) {
                    return (e.match(v) || []).join(" ")
                }

                function L(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function yt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(v) || []
                }
                y.fn.extend({
                    prop: function(e, t) {
                        return d(this, y.prop, e, t, 1 < arguments.length)
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[y.propFix[e] || e]
                        })
                    }
                }), y.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && y.isXMLDoc(e) || (t = y.propFix[t] || t, i = y.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = y.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), S.optSelected || (y.propHooks.selected = {
                    get: function(e) {
                        e = e.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        e = e.parentNode;
                        e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
                    }
                }), y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    y.propFix[this.toLowerCase()] = this
                }), y.fn.extend({
                    addClass: function(t) {
                        var e, n, r, i, o, a;
                        return A(t) ? this.each(function(e) {
                            y(this).addClass(t.call(this, e, L(this)))
                        }) : (e = yt(t)).length ? this.each(function() {
                            if (r = L(this), n = 1 === this.nodeType && " " + N(r) + " ") {
                                for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                a = N(n), r !== a && this.setAttribute("class", a)
                            }
                        }) : this
                    },
                    removeClass: function(t) {
                        var e, n, r, i, o, a;
                        return A(t) ? this.each(function(e) {
                            y(this).removeClass(t.call(this, e, L(this)))
                        }) : arguments.length ? (e = yt(t)).length ? this.each(function() {
                            if (r = L(this), n = 1 === this.nodeType && " " + N(r) + " ") {
                                for (o = 0; o < e.length; o++)
                                    for (i = e[o]; - 1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                                a = N(n), r !== a && this.setAttribute("class", a)
                            }
                        }) : this : this.attr("class", "")
                    },
                    toggleClass: function(t, n) {
                        var e, r, i, o, a = typeof t,
                            s = "string" == a || Array.isArray(t);
                        return A(t) ? this.each(function(e) {
                            y(this).toggleClass(t.call(this, e, L(this), n), n)
                        }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = yt(t), this.each(function() {
                            if (s)
                                for (o = y(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                            else void 0 !== t && "boolean" != a || ((r = L(this)) && g.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", !r && !1 !== t && g.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                            if (1 === t.nodeType && -1 < (" " + N(L(t)) + " ").indexOf(r)) return !0;
                        return !1
                    }
                });

                function vt(e) {
                    e.stopPropagation()
                }
                var Gt = /\r/g,
                    Ct = (y.fn.extend({
                        val: function(t) {
                            var n, e, r, i = this[0];
                            return arguments.length ? (r = A(t), this.each(function(e) {
                                1 !== this.nodeType || (null == (e = r ? t.call(this, e, y(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = y.map(e, function(e) {
                                    return null == e ? "" : e + ""
                                })), (n = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e)
                            })) : i ? (n = y.valHooks[i.type] || y.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e.replace(Gt, "") : null == e ? "" : e : void 0
                        }
                    }), y.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = y.find.attr(e, "value");
                                    return null != t ? t : N(y.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                                        if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                                            if (t = y(t).val(), i) return t;
                                            o.push(t)
                                        }
                                    return o
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = y.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < y.inArray(y.valHooks.option.get(r), o)) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), y.each(["radio", "checkbox"], function() {
                        y.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t)) return e.checked = -1 < y.inArray(y(e).val(), t)
                            }
                        }, S.checkOn || (y.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    }), S.focusin = "onfocusin" in P, /^(?:focusinfocus|focusoutblur)$/),
                    Ht = (y.extend(y.event, {
                        trigger: function(e, t, n, r) {
                            var i, o, a, s, l, u, c, d = [n || M],
                                f = j.call(e, "type") ? e.type : e,
                                p = j.call(e, "namespace") ? e.namespace.split(".") : [],
                                T = c = o = n = n || M;
                            if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(f + y.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, (e = e[y.expando] ? e : new y.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : y.makeArray(t, [e]), u = y.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                                if (!r && !u.noBubble && !h(n)) {
                                    for (a = u.delegateType || f, Ct.test(a + f) || (T = T.parentNode); T; T = T.parentNode) d.push(T), o = T;
                                    o === (n.ownerDocument || M) && d.push(o.defaultView || o.parentWindow || P)
                                }
                                for (i = 0;
                                    (T = d[i++]) && !e.isPropagationStopped();) c = T, e.type = 1 < i ? a : u.bindType || f, (l = (g.get(T, "events") || Object.create(null))[e.type] && g.get(T, "handle")) && l.apply(T, t), (l = s && T[s]) && l.apply && b(T) && (e.result = l.apply(T, t), !1 === e.result) && e.preventDefault();
                                return e.type = f, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !b(n) || s && A(n[f]) && !h(n) && ((o = n[s]) && (n[s] = null), y.event.triggered = f, e.isPropagationStopped() && c.addEventListener(f, vt), n[f](), e.isPropagationStopped() && c.removeEventListener(f, vt), y.event.triggered = void 0, o) && (n[s] = o), e.result
                            }
                        },
                        simulate: function(e, t, n) {
                            n = y.extend(new y.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            y.event.trigger(n, null, t)
                        }
                    }), y.fn.extend({
                        trigger: function(e, t) {
                            return this.each(function() {
                                y.event.trigger(e, t, this)
                            })
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return y.event.trigger(e, t, n, !0)
                        }
                    }), S.focusin || y.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, function(n, r) {
                        function i(e) {
                            y.event.simulate(r, e.target, y.event.fix(e))
                        }
                        y.event.special[r] = {
                            setup: function() {
                                var e = this.ownerDocument || this.document || this,
                                    t = g.access(e, r);
                                t || e.addEventListener(n, i, !0), g.access(e, r, (t || 0) + 1)
                            },
                            teardown: function() {
                                var e = this.ownerDocument || this.document || this,
                                    t = g.access(e, r) - 1;
                                t ? g.access(e, r, t) : (e.removeEventListener(n, i, !0), g.remove(e, r))
                            }
                        }
                    }), P.location),
                    Bt = {
                        guid: Date.now()
                    },
                    Et = /\?/,
                    xt = (y.parseXML = function(e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new P.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {}
                        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || y.error("Invalid XML: " + (n ? y.map(n.childNodes, function(e) {
                            return e.textContent
                        }).join("\n") : e)), t
                    }, /\[\]$/),
                    Dt = /\r?\n/g,
                    wt = /^(?:submit|button|image|reset|file)$/i,
                    It = /^(?:input|select|textarea|keygen)/i;
                y.param = function(e, t) {
                    function n(e, t) {
                        t = A(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
                    }
                    var r, i = [];
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !y.isPlainObject(e)) y.each(e, function() {
                        n(this.name, this.value)
                    });
                    else
                        for (r in e) ! function n(r, e, i, o) {
                            if (Array.isArray(e)) y.each(e, function(e, t) {
                                i || xt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
                            });
                            else if (i || "object" !== T(e)) o(r, e);
                            else
                                for (var t in e) n(r + "[" + t + "]", e[t], i, o)
                        }(r, e[r], t, n);
                    return i.join("&")
                }, y.fn.extend({
                    serialize: function() {
                        return y.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = y.prop(this, "elements");
                            return e ? y.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !y(this).is(":disabled") && It.test(this.nodeName) && !wt.test(e) && (this.checked || !Pe.test(e))
                        }).map(function(e, t) {
                            var n = y(this).val();
                            return null == n ? null : Array.isArray(n) ? y.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Dt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Dt, "\r\n")
                            }
                        }).get()
                    }
                });
                var Nt = /%20/g,
                    Lt = /#.*$/,
                    Ot = /([?&])_=[^&]*/,
                    Vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    kt = /^(?:GET|HEAD)$/,
                    Rt = /^\/\//,
                    Ft = {},
                    Xt = {},
                    Wt = "*/".concat("*"),
                    jt = M.createElement("a");

                function Ut(o) {
                    return function(e, t) {
                        "string" != typeof e && (t = e, e = "*");
                        var n, r = 0,
                            i = e.toLowerCase().match(v) || [];
                        if (A(t))
                            for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
                    }
                }

                function Kt(t, r, i, o) {
                    var a = {},
                        s = t === Xt;

                    function l(e) {
                        var n;
                        return a[e] = !0, y.each(t[e] || [], function(e, t) {
                            t = t(r, i, o);
                            return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), l(t), !1)
                        }), n
                    }
                    return l(r.dataTypes[0]) || !a["*"] && l("*")
                }

                function qt(e, t) {
                    var n, r, i = y.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
                    return r && y.extend(!0, e, r), e
                }
                jt.href = Ht.href, y.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ht.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ht.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Wt,
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
                            "text json": JSON.parse,
                            "text xml": y.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? qt(qt(e, y.ajaxSettings), t) : qt(y.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ut(Ft),
                    ajaxTransport: Ut(Xt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0);
                        var l, u, c, n, d, f, p, r, T = y.ajaxSetup({}, t = t || {}),
                            h = T.context || T,
                            S = T.context && (h.nodeType || h.jquery) ? y(h) : y.event,
                            b = y.Deferred(),
                            A = y.Callbacks("once memory"),
                            m = T.statusCode || {},
                            i = {},
                            o = {},
                            a = "canceled",
                            g = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (f) {
                                        if (!n)
                                            for (n = {}; t = Vt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = n[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return f ? c : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, i[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == f && (T.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    if (e)
                                        if (f) g.always(e[g.status]);
                                        else
                                            for (var t in e) m[t] = [m[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    e = e || a;
                                    return l && l.abort(e), s(0, e), this
                                }
                            };
                        if (b.promise(g), T.url = ((e || T.url || Ht.href) + "").replace(Rt, Ht.protocol + "//"), T.type = t.method || t.type || T.method || T.type, T.dataTypes = (T.dataType || "*").toLowerCase().match(v) || [""], null == T.crossDomain) {
                            e = M.createElement("a");
                            try {
                                e.href = T.url, e.href = e.href, T.crossDomain = jt.protocol + "//" + jt.host != e.protocol + "//" + e.host
                            } catch (e) {
                                T.crossDomain = !0
                            }
                        }
                        if (T.data && T.processData && "string" != typeof T.data && (T.data = y.param(T.data, T.traditional)), Kt(Ft, T, t, g), !f) {
                            for (r in (p = y.event && T.global) && 0 == y.active++ && y.event.trigger("ajaxStart"), T.type = T.type.toUpperCase(), T.hasContent = !kt.test(T.type), u = T.url.replace(Lt, ""), T.hasContent ? T.data && T.processData && 0 === (T.contentType || "").indexOf("application/x-www-form-urlencoded") && (T.data = T.data.replace(Nt, "+")) : (e = T.url.slice(u.length), T.data && (T.processData || "string" == typeof T.data) && (u += (Et.test(u) ? "&" : "?") + T.data, delete T.data), !1 === T.cache && (u = u.replace(Ot, "$1"), e = (Et.test(u) ? "&" : "?") + "_=" + Bt.guid++ + e), T.url = u + e), T.ifModified && (y.lastModified[u] && g.setRequestHeader("If-Modified-Since", y.lastModified[u]), y.etag[u]) && g.setRequestHeader("If-None-Match", y.etag[u]), (T.data && T.hasContent && !1 !== T.contentType || t.contentType) && g.setRequestHeader("Content-Type", T.contentType), g.setRequestHeader("Accept", T.dataTypes[0] && T.accepts[T.dataTypes[0]] ? T.accepts[T.dataTypes[0]] + ("*" !== T.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : T.accepts["*"]), T.headers) g.setRequestHeader(r, T.headers[r]);
                            if (T.beforeSend && (!1 === T.beforeSend.call(h, g, T) || f)) return g.abort();
                            if (a = "abort", A.add(T.complete), g.done(T.success), g.fail(T.error), l = Kt(Xt, T, t, g)) {
                                if (g.readyState = 1, p && S.trigger("ajaxSend", [g, T]), f) return g;
                                T.async && 0 < T.timeout && (d = P.setTimeout(function() {
                                    g.abort("timeout")
                                }, T.timeout));
                                try {
                                    f = !1, l.send(i, s)
                                } catch (e) {
                                    if (f) throw e;
                                    s(-1, e)
                                }
                            } else s(-1, "No Transport")
                        }
                        return g;

                        function s(e, t, n, r) {
                            var i, o, a, s = t;
                            f || (f = !0, d && P.clearTimeout(d), l = void 0, c = r || "", g.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            l.unshift(i);
                                            break
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (i in n) {
                                        if (!l[0] || e.converters[i + " " + l[0]]) {
                                            o = i;
                                            break
                                        }
                                        a = a || i
                                    }
                                    o = o || a
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o]
                            }(T, g, n)), !r && -1 < y.inArray("script", T.dataTypes) && y.inArray("json", T.dataTypes) < 0 && (T.converters["text script"] = function() {}), a = function(e, t, n, r) {
                                var i, o, a, s, l, u = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                        if ("*" === o) o = l;
                                        else if ("*" !== l && l !== o) {
                                    if (!(a = u[l + " " + o] || u["* " + o]))
                                        for (i in u)
                                            if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(T, a, g, r), r ? (T.ifModified && ((n = g.getResponseHeader("Last-Modified")) && (y.lastModified[u] = n), n = g.getResponseHeader("etag")) && (y.etag[u] = n), 204 === e || "HEAD" === T.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e = 0))), g.status = e, g.statusText = (t || s) + "", r ? b.resolveWith(h, [i, s, g]) : b.rejectWith(h, [g, s, o]), g.statusCode(m), m = void 0, p && S.trigger(r ? "ajaxSuccess" : "ajaxError", [g, T, r ? i : o]), A.fireWith(h, [g, s]), p && (S.trigger("ajaxComplete", [g, T]), --y.active || y.event.trigger("ajaxStop")))
                        }
                    },
                    getJSON: function(e, t, n) {
                        return y.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return y.get(e, void 0, t, "script")
                    }
                }), y.each(["get", "post"], function(e, i) {
                    y[i] = function(e, t, n, r) {
                        return A(t) && (r = r || n, n = t, t = void 0), y.ajax(y.extend({
                            url: e,
                            type: i,
                            dataType: r,
                            data: t,
                            success: n
                        }, y.isPlainObject(e) && e))
                    }
                }), y.ajaxPrefilter(function(e) {
                    for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }), y._evalUrl = function(e, t, n) {
                    return y.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            y.globalEval(e, t, n)
                        }
                    })
                }, y.fn.extend({
                    wrapAll: function(e) {
                        return this[0] && (A(e) && (e = e.call(this[0])), e = y(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        }).append(this)), this
                    },
                    wrapInner: function(n) {
                        return A(n) ? this.each(function(e) {
                            y(this).wrapInner(n.call(this, e))
                        }) : this.each(function() {
                            var e = y(this),
                                t = e.contents();
                            t.length ? t.wrapAll(n) : e.append(n)
                        })
                    },
                    wrap: function(t) {
                        var n = A(t);
                        return this.each(function(e) {
                            y(this).wrapAll(n ? t.call(this, e) : t)
                        })
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each(function() {
                            y(this).replaceWith(this.childNodes)
                        }), this
                    }
                }), y.expr.pseudos.hidden = function(e) {
                    return !y.expr.pseudos.visible(e)
                }, y.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, y.ajaxSettings.xhr = function() {
                    try {
                        return new P.XMLHttpRequest
                    } catch (e) {}
                };
                var _t = {
                        0: 200,
                        1223: 204
                    },
                    Qt = y.ajaxSettings.xhr(),
                    zt = (S.cors = !!Qt && "withCredentials" in Qt, S.ajax = Qt = !!Qt, y.ajaxTransport(function(i) {
                        var o, a;
                        if (S.cors || Qt && !i.crossDomain) return {
                            send: function(e, t) {
                                var n, r = i.xhr();
                                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                                o = function(e) {
                                    return function() {
                                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders()))
                                    }
                                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                                    4 === r.readyState && P.setTimeout(function() {
                                        o && a()
                                    })
                                }, o = o("abort");
                                try {
                                    r.send(i.hasContent && i.data || null)
                                } catch (e) {
                                    if (o) throw e
                                }
                            },
                            abort: function() {
                                o && o()
                            }
                        }
                    }), y.ajaxPrefilter(function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    }), y.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return y.globalEval(e), e
                            }
                        }
                    }), y.ajaxPrefilter("script", function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    }), y.ajaxTransport("script", function(n) {
                        var r, i;
                        if (n.crossDomain || n.scriptAttrs) return {
                            send: function(e, t) {
                                r = y("<script>").attr(n.scriptAttrs || {}).prop({
                                    charset: n.scriptCharset,
                                    src: n.url
                                }).on("load error", i = function(e) {
                                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                                }), M.head.appendChild(r[0])
                            },
                            abort: function() {
                                i && i()
                            }
                        }
                    }), []),
                    $t = /(=)\?(?=&|$)|\?\?/,
                    Yt = (y.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = zt.pop() || y.expando + "_" + Bt.guid++;
                            return this[e] = !0, e
                        }
                    }), y.ajaxPrefilter("json jsonp", function(e, t, n) {
                        var r, i, o, a = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = A(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($t, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                            return o || y.error(r + " was not called"), o[0]
                        }, e.dataTypes[0] = "json", i = P[r], P[r] = function() {
                            o = arguments
                        }, n.always(function() {
                            void 0 === i ? y(P).removeProp(r) : P[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && A(i) && i(o[0]), o = i = void 0
                        }), "script"
                    }), S.createHTMLDocument = ((o = M.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === o.childNodes.length), y.parseHTML = function(e, t, n) {
                        var r;
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (S.createHTMLDocument ? ((r = (t = M.implementation.createHTMLDocument("")).createElement("base")).href = M.location.href, t.head.appendChild(r)) : t = M), r = !n && [], (n = Y.exec(e)) ? [t.createElement(n[1])] : (n = Ce([e], t, r), r && r.length && y(r).remove(), y.merge([], n.childNodes)))
                    }, y.fn.load = function(e, t, n) {
                        var r, i, o, a = this,
                            s = e.indexOf(" ");
                        return -1 < s && (r = N(e.slice(s)), e = e.slice(0, s)), A(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && y.ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t
                        }).done(function(e) {
                            o = arguments, a.html(r ? y("<div>").append(y.parseHTML(e)).find(r) : e)
                        }).always(n && function(e, t) {
                            a.each(function() {
                                n.apply(this, o || [e.responseText, t, e])
                            })
                        }), this
                    }, y.expr.pseudos.animated = function(t) {
                        return y.grep(y.timers, function(e) {
                            return t === e.elem
                        }).length
                    }, y.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, a, s = y.css(e, "position"),
                                l = y(e),
                                u = {};
                            "static" === s && (e.style.position = "relative"), o = l.offset(), r = y.css(e, "top"), a = y.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = l.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = A(t) ? t.call(e, n, y.extend({}, o)) : t).top && (u.top = t.top - o.top + i), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : l.css(u)
                        }
                    }, y.fn.extend({
                        offset: function(t) {
                            var e, n;
                            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                                y.offset.setOffset(this, t, e)
                            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                                top: e.top + n.pageYOffset,
                                left: e.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === y.css(r, "position")) t = r.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === y.css(e, "position");) e = e.parentNode;
                                    e && e !== r && 1 === e.nodeType && ((i = y(e).offset()).top += y.css(e, "borderTopWidth", !0), i.left += y.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - i.top - y.css(r, "marginTop", !0),
                                    left: t.left - i.left - y.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (var e = this.offsetParent; e && "static" === y.css(e, "position");) e = e.offsetParent;
                                return e || G
                            })
                        }
                    }), y.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, function(t, i) {
                        var o = "pageYOffset" === i;
                        y.fn[t] = function(e) {
                            return d(this, function(e, t, n) {
                                var r;
                                if (h(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                            }, t, e, arguments.length)
                        }
                    }), y.each(["top", "left"], function(e, n) {
                        y.cssHooks[n] = tt(S.pixelPosition, function(e, t) {
                            if (t) return t = et(e, n), Qe.test(t) ? y(e).position()[n] + "px" : t
                        })
                    }), y.each({
                        Height: "height",
                        Width: "width"
                    }, function(a, s) {
                        y.each({
                            padding: "inner" + a,
                            content: s,
                            "": "outer" + a
                        }, function(r, o) {
                            y.fn[o] = function(e, t) {
                                var n = arguments.length && (r || "boolean" != typeof e),
                                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                                return d(this, function(e, t, n) {
                                    var r;
                                    return h(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? y.css(e, t, i) : y.style(e, t, n, i)
                                }, s, n ? e : void 0, n)
                            }
                        })
                    }), y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                        y.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }), y.fn.extend({
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
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), y.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
                        y.fn[n] = function(e, t) {
                            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                        }
                    }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
                    Jt = (y.proxy = function(e, t) {
                        var n, r;
                        if ("string" == typeof t && (r = e[t], t = e, e = r), A(e)) return n = s.call(arguments, 2), (r = function() {
                            return e.apply(t || this, n.concat(s.call(arguments)))
                        }).guid = e.guid = e.guid || y.guid++, r
                    }, y.holdReady = function(e) {
                        e ? y.readyWait++ : y.ready(!0)
                    }, y.isArray = Array.isArray, y.parseJSON = JSON.parse, y.nodeName = l, y.isFunction = A, y.isWindow = h, y.camelCase = m, y.type = T, y.now = Date.now, y.isNumeric = function(e) {
                        var t = y.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, y.trim = function(e) {
                        return null == e ? "" : (e + "").replace(Yt, "$1")
                    }, void 0 !== (nn = function() {
                        return y
                    }.apply(tn, [])) && (en.exports = nn), P.jQuery),
                    Zt = P.$;
                return y.noConflict = function(e) {
                    return P.$ === y && (P.$ = Zt), e && P.jQuery === y && (P.jQuery = Jt), y
                }, void 0 === O && (P.jQuery = P.$ = y), y
            })
        },
        "./node_modules/mobile-detect/mobile-detect.js": function(t, e, n) {
            var T;
            ! function() {
                if (true && t.exports) return function(e) {
                    t.exports = e()
                };
                else if (true) return n("./node_modules/webpack/buildin/amd-define.js");
                else;
            }()(function() {
                "use strict";
                var s = {
                        mobileDetectRules: {
                            phones: {
                                iPhone: "\\biPhone\\b|\\biPod\\b",
                                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                                Pixel: "; \\bPixel\\b",
                                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                                Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                                Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                                NokiaLumia: "Lumia [0-9]{3,4}",
                                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                                Palm: "PalmSource|Palm",
                                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                                Alcatel: "Alcatel",
                                Nintendo: "Nintendo (3DS|Switch)",
                                Amoi: "Amoi",
                                INQ: "INQ",
                                OnePlus: "ONEPLUS",
                                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                            },
                            tablets: {
                                iPad: "iPad|iPad.*Mobile",
                                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                                GoogleTablet: "Android.*Pixel C",
                                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                                BlackBerryTablet: "PlayBook|RIM Tablet",
                                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                                ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                                IRUTablet: "M702pro",
                                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                                NokiaLumiaTablet: "Lumia 2520",
                                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                                FlyTablet: "IQ310|Fly Vision",
                                bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                                NecTablet: "\\bN-06D|\\bN-08D",
                                PantechTablet: "Pantech.*P4100",
                                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                                ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                                NabiTablet: "Android.*\\bNabi",
                                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                                PlaystationTablet: "Playstation.*(Portable|Vita)",
                                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                                GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                                DPSTablet: "DPS Dream 9|DPS Dual 7",
                                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                                iMobileTablet: "i-mobile i-note",
                                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                                AMPETablet: "Android.* A78 ",
                                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                                TecnoTablet: "TECNO P9|TECNO DP8D",
                                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                                VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                                CaptivaTablet: "CAPTIVA PAD",
                                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                                JaytechTablet: "TPC-PA762",
                                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                                MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                                UbislateTablet: "UbiSlate[\\s]?7C",
                                PocketBookTablet: "Pocketbook",
                                KocasoTablet: "\\b(TB-1207)\\b",
                                HisenseTablet: "\\b(F5281|E2371)\\b",
                                Hudl: "Hudl HT7S3|Hudl 2",
                                TelstraTablet: "T-Hub2",
                                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                            },
                            oss: {
                                AndroidOS: "Android",
                                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                                iPadOS: "CPU OS 13",
                                SailfishOS: "Sailfish",
                                MeeGoOS: "MeeGo",
                                MaemoOS: "Maemo",
                                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                                webOS: "webOS|hpwOS",
                                badaOS: "\\bBada\\b",
                                BREWOS: "BREW"
                            },
                            uas: {
                                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                                Dolfin: "\\bDolfin\\b",
                                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                                Skyfire: "Skyfire",
                                Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                                IE: "IEMobile|MSIEMobile",
                                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                                Bolt: "bolt",
                                TeaShark: "teashark",
                                Blazer: "Blazer",
                                Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                                WeChat: "\\bMicroMessenger\\b",
                                UCBrowser: "UC.*Browser|UCWEB",
                                baiduboxapp: "baiduboxapp",
                                baidubrowser: "baidubrowser",
                                DiigoBrowser: "DiigoBrowser",
                                Mercury: "\\bMercury\\b",
                                ObigoBrowser: "Obigo",
                                NetFront: "NF-Browser",
                                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                            },
                            props: {
                                Mobile: "Mobile/[VER]",
                                Build: "Build/[VER]",
                                Version: "Version/[VER]",
                                VendorID: "VendorID/[VER]",
                                iPad: "iPad.*CPU[a-z ]+[VER]",
                                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                                iPod: "iPod.*CPU[a-z ]+[VER]",
                                Kindle: "Kindle/[VER]",
                                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                                Coast: ["Coast/[VER]"],
                                Dolfin: "Dolfin/[VER]",
                                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                                Fennec: "Fennec/[VER]",
                                Edge: "Edge/[VER]",
                                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                                NetFront: "NetFront/[VER]",
                                NokiaBrowser: "NokiaBrowser/[VER]",
                                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                                "Opera Mini": "Opera Mini/[VER]",
                                "Opera Mobi": "Version/[VER]",
                                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                                MQQBrowser: "MQQBrowser/[VER]",
                                MicroMessenger: "MicroMessenger/[VER]",
                                baiduboxapp: "baiduboxapp/[VER]",
                                baidubrowser: "baidubrowser/[VER]",
                                SamsungBrowser: "SamsungBrowser/[VER]",
                                Iron: "Iron/[VER]",
                                Safari: ["Version/[VER]", "Safari/[VER]"],
                                Skyfire: "Skyfire/[VER]",
                                Tizen: "Tizen/[VER]",
                                Webkit: "webkit[ /][VER]",
                                PaleMoon: "PaleMoon/[VER]",
                                SailfishBrowser: "SailfishBrowser/[VER]",
                                Gecko: "Gecko/[VER]",
                                Trident: "Trident/[VER]",
                                Presto: "Presto/[VER]",
                                Goanna: "Goanna/[VER]",
                                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                                Android: "Android [VER]",
                                Sailfish: "Sailfish [VER]",
                                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                                BREW: "BREW [VER]",
                                Java: "Java/[VER]",
                                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                                "Windows Phone": "Windows Phone [VER]",
                                "Windows CE": "Windows CE/[VER]",
                                "Windows NT": "Windows NT [VER]",
                                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                            },
                            utils: {
                                Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                                DesktopMode: "WPDesktop",
                                TV: "SonyDTV|HbbTV",
                                WebKit: "(webkit)[ /]([\\w.]+)",
                                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                                Watch: "SM-V700"
                            }
                        },
                        detectMobileBrowsers: {
                            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                            tabletPattern: /android|ipad|playbook|silk/i
                        }
                    },
                    l = Object.prototype.hasOwnProperty;

                function t(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                }

                function n(e, t) {
                    var n, r, i = e.length;
                    if (i && t)
                        for (n = t.toLowerCase(), r = 0; r < i; ++r)
                            if (n === e[r].toLowerCase()) return !0;
                    return !1
                }

                function e(e) {
                    for (var t in e) l.call(e, t) && (e[t] = new RegExp(e[t], "i"))
                }
                s.FALLBACK_PHONE = "UnknownPhone", s.FALLBACK_TABLET = "UnknownTablet", s.FALLBACK_MOBILE = "UnknownMobile";
                var r, i, o, a, u, c, d = "isArray" in Array ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    f = s.mobileDetectRules;
                for (r in f.props)
                    if (l.call(f.props, r)) {
                        for (i = f.props[r], u = (i = d(i) ? i : [i]).length, a = 0; a < u; ++a) 0 <= (c = (o = i[a]).indexOf("[VER]")) && (o = o.substring(0, c) + "([\\w._\\+]+)" + o.substring(c + 5)), i[a] = new RegExp(o, "i");
                        f.props[r] = i
                    }
                function p(e, t) {
                    this.ua = (e || "").substr(0, 500), this._cache = {}, this.maxPhoneWidth = t || 600
                }
                return e(f.oss), e(f.phones), e(f.tablets), e(f.uas), e(f.utils), f.oss0 = {
                    WindowsPhoneOS: f.oss.WindowsPhoneOS,
                    WindowsMobileOS: f.oss.WindowsMobileOS
                }, s.findMatch = function(e, t) {
                    for (var n in e)
                        if (l.call(e, n) && e[n].test(t)) return n;
                    return null
                }, s.findMatches = function(e, t) {
                    var n, r = [];
                    for (n in e) l.call(e, n) && e[n].test(t) && r.push(n);
                    return r
                }, s.getVersionStr = function(e, t) {
                    var n, r, i, o, a = s.mobileDetectRules.props;
                    if (l.call(a, e))
                        for (i = (n = a[e]).length, r = 0; r < i; ++r)
                            if (null !== (o = n[r].exec(t))) return o[1];
                    return null
                }, s.getVersion = function(e, t) {
                    e = s.getVersionStr(e, t);
                    return e ? s.prepareVersionNo(e) : NaN
                }, s.prepareVersionNo = function(e) {
                    var t = e.split(/[a-z._ \/\-]/i);
                    return 1 === t.length && (e = t[0]), 1 < t.length && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                }, s.isMobileFallback = function(e) {
                    return s.detectMobileBrowsers.fullPattern.test(e) || s.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                }, s.isTabletFallback = function(e) {
                    return s.detectMobileBrowsers.tabletPattern.test(e)
                }, s.prepareDetectionCache = function(e, t, n) {
                    var r;
                    e.mobile === T && ((r = s.findMatch(s.mobileDetectRules.tablets, t)) ? (e.mobile = e.tablet = r, e.phone = null) : (r = s.findMatch(s.mobileDetectRules.phones, t)) ? (e.mobile = e.phone = r, e.tablet = null) : s.isMobileFallback(t) ? (r = p.isPhoneSized(n)) === T ? (e.mobile = s.FALLBACK_MOBILE, e.tablet = e.phone = null) : r ? (e.mobile = e.phone = s.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = s.FALLBACK_TABLET, e.phone = null) : s.isTabletFallback(t) ? (e.mobile = e.tablet = s.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
                }, s.mobileGrade = function(e) {
                    var t = null !== e.mobile();
                    return e.os("iOS") && 4.3 <= e.version("iPad") || e.os("iOS") && 3.1 <= e.version("iPhone") || e.os("iOS") && 3.1 <= e.version("iPod") || 2.1 < e.version("Android") && e.is("Webkit") || 7 <= e.version("Windows Phone OS") || e.is("BlackBerry") && 6 <= e.version("BlackBerry") || e.match("Playbook.*Tablet") || 1.4 <= e.version("webOS") && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && 12 <= e.version("Firefox") || e.is("Chrome") && e.is("AndroidOS") && 4 <= e.version("Android") || e.is("Skyfire") && 4.1 <= e.version("Skyfire") && e.is("AndroidOS") && 2.3 <= e.version("Android") || e.is("Opera") && 11 < e.version("Opera Mobi") && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && 2 <= e.version("Bada") || (e.is("UC Browser") || e.is("Dolfin")) && 2.3 <= e.version("Android") || e.match("Kindle Fire") || e.is("Kindle") && 3 <= e.version("Kindle") || e.is("AndroidOS") && e.is("NookTablet") || 11 <= e.version("Chrome") && !t || 5 <= e.version("Safari") && !t || 4 <= e.version("Firefox") && !t || 7 <= e.version("MSIE") && !t || 10 <= e.version("Opera") && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && 5 <= e.version("BlackBerry") && e.version("BlackBerry") < 6 || 5 <= e.version("Opera Mini") && e.version("Opera Mini") <= 6.5 && (2.3 <= e.version("Android") || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || 11 <= e.version("Opera Mobi") && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
                }, s.detectOS = function(e) {
                    return s.findMatch(s.mobileDetectRules.oss0, e) || s.findMatch(s.mobileDetectRules.oss, e)
                }, s.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, p.prototype = {
                    constructor: p,
                    mobile: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return this._cache.userAgent === T && (this._cache.userAgent = s.findMatch(s.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return this._cache.userAgents === T && (this._cache.userAgents = s.findMatches(s.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return this._cache.os === T && (this._cache.os = s.detectOS(this.ua)), this._cache.os
                    },
                    version: function(e) {
                        return s.getVersion(e, this.ua)
                    },
                    versionStr: function(e) {
                        return s.getVersionStr(e, this.ua)
                    },
                    is: function(e) {
                        return n(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || n(s.findMatches(s.mobileDetectRules.utils, this.ua), e)
                    },
                    match: function(e) {
                        return (e = e instanceof RegExp ? e : new RegExp(e, "i")).test(this.ua)
                    },
                    isPhoneSized: function(e) {
                        return p.isPhoneSized(e || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return this._cache.grade === T && (this._cache.grade = s.mobileGrade(this)), this._cache.grade
                    }
                }, "undefined" != typeof window && window.screen ? p.isPhoneSized = function(e) {
                    return e < 0 ? T : s.getDeviceSmallerSide() <= e
                } : p.isPhoneSized = function() {}, p._impl = s, p.version = "1.4.5 2021-03-13", p
            })
        },
        "./node_modules/webpack/buildin/amd-define.js": function(e, t) {
            e.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        },
        "./node_modules/webpack/buildin/global.js": function(e, t) {
            var n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
    }
]);
window.threeLevelNaviagtionJs = function(l) {
    function e(e) {
        for (var t, n, i = e[0], a = e[1], s = e[2], r = 0, o = []; r < i.length; r++) n = i[r], Object.prototype.hasOwnProperty.call(d, n) && d[n] && o.push(d[n][0]), d[n] = 0;
        for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (l[t] = a[t]);
        for (h && h(e); o.length;) o.shift()();
        return u.push.apply(u, s || []), c()
    }

    function c() {
        for (var e, t = 0; t < u.length; t++) {
            for (var n = u[t], i = !0, a = 1; a < n.length; a++) {
                var s = n[a];
                0 !== d[s] && (i = !1)
            }
            i && (u.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var n = {},
        d = {
            "three-level-navigation": 0
        },
        u = [];

    function r(e) {
        var t;
        return (n[e] || (t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        }, l[e].call(t.exports, t, t.exports, r), t.l = !0, t)).exports
    }
    r.m = l, r.c = n, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var t = (i = window.webpackJsonpthreeLevelNaviagtionJs = window.webpackJsonpthreeLevelNaviagtionJs || []).push.bind(i);
    i.push = e;
    for (var i = i.slice(), a = 0; a < i.length; a++) e(i[a]);
    var h = t;
    return u.push([0, "vendors~three-level-navigation"]), c()
}({
    "./source/_patterns/content/14-three-level-navigation/three-level-nav-handle-event.js": function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", function() {
            return o
        });
        var t = n("./node_modules/jquery/dist/jquery-exposed.js"),
            l = n.n(t),
            t = n("./node_modules/mobile-detect/mobile-detect.js"),
            i = n.n(t),
            c = n("./source/js/helpers/key-event-code.js"),
            a = n("./source/js/helpers/breakpoint.js");
        const d = "is-open",
            s = "c-navigation__menu-wrapper",
            u = "c-navigation__menu-item",
            h = "c-navigation__menu-label",
            v = "c-navigation__submenus-wrapper",
            p = "c-navigation__submenu-wrapper",
            r = "c-navigation__submenu-label",
            g = "c-navigation__submenu-content";
        class o {
            constructor(e) {
                this.breakpoint = new a.default, this.mobileDetect = new i.a(window.navigator.userAgent), this.$elem = l()(e), this.elem = e, this.toggleOn = e.dataset.toggleOn, this.firstLevelWrapper = e.querySelector("." + s), this.secondLevelWrapper = e.querySelectorAll("." + v), this.menuItemsOne = e.querySelectorAll("." + h), this.menuItemsTwo = e.querySelectorAll(".c-navigation__submenus ." + r), this.overviewLink = e.querySelectorAll(".c-navigation__submenu-overview-link"), this.headerWrapper = e.querySelector(".js-header__wrapper"), this.$headerWrapper = l()(this.headerWrapper), this.closeNavbar = this.closeNavbar.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.handleSubmenuKeydown = this.handleSubmenuKeydown.bind(this), this.handleOverViewLinkKeydown = this.handleOverViewLinkKeydown.bind(this), this.handleMenuItemAlignment = this.handleMenuItemAlignment.bind(this), this.preventNavMenuLink = this.preventNavMenuLink.bind(this), this.onLeaveCloseAll = this.onLeaveCloseAll.bind(this)
            }
            initKeyboard() {
                window.matchMedia("(max-width: " + this.breakpoint.getBreakpointObject().mobile + "px)").onchange = e => {
                    e.matches ? (this.setMobileActionsOrder(!0), document.addEventListener("keyup", this.handleClosingMenu)) : (this.setMobileActionsOrder(!1), document.removeEventListener("keyup", this.handleClosingMenu))
                }, this.breakpoint.isMobile() && (this.setMobileActionsOrder(!0), document.addEventListener("keyup", this.handleClosingMenu)), this.menuItemsOne.forEach(e => e.addEventListener("keydown", this.handleKeydown)), this.menuItemsTwo.forEach(e => e.addEventListener("keydown", this.handleKeydown)), this.secondLevelWrapper.forEach(e => e.addEventListener("keydown", this.handleSubmenuKeydown)), this.overviewLink.forEach(e => e.addEventListener("keydown", this.handleOverViewLinkKeydown)), document.addEventListener("focusin", this.closeNavbar)
            }
            handleClosingMenu(e) {
                var t = document.querySelector(".js-opener-link");
                e.keyCode === c.default.ESCAPE && "true" === t.getAttribute("aria-expanded") && (t.click(), t.focus({
                    preventScroll: !0
                }))
            }
            setMobileActionsOrder(e) {
                var t = document.querySelector(".c-navigation__bar"),
                    e = e ? document.querySelector(".c-navigation__actions") : document.querySelector("." + s);
                t.insertBefore(e, t.firstElementChild.nextElementSibling)
            }
            handleKeydown(e) {
                var t = e["keyCode"];
                switch (t) {
                    case c.default.LEFT:
                        this.goToSlibing(e, "prev");
                        break;
                    case c.default.RIGHT:
                        this.goToSlibing(e, "next");
                        break;
                    case c.default.SPACE:
                    case c.default.ENTER:
                        this.goToNextLevel(e)
                }
            }
            handleSubmenuKeydown(e) {
                var t, {
                        target: e,
                        keyCode: n
                    } = e,
                    i = this.getParentElement(e, "." + s),
                    a = this.getParentElement(e, "." + v),
                    e = this.getParentElement(e, "." + g);
                n === c.default.ESCAPE && (i = (a && !e ? i : a).querySelectorAll("." + d), a = Array.from(i).map(e => this.toggleMenu(e, !1)), this.focusOn(a[0])), e && (n === c.default.LEFT || n === c.default.RIGHT ? (i = n === c.default.LEFT ? "prev" : "next", t = (a = this.getParentElement(e, "." + v)).querySelectorAll("." + p), a = a.querySelector(`.${p}.` + d), i = this.getNextElement(i, a, t), this.toggleMenu(a, !1), this.toggleMenu(i, !0), t = i.querySelector(`.${g} a`), this.focusOn(t)) : n !== c.default.DOWN && n !== c.default.UP || (a = n === c.default.DOWN ? "next" : "prev", i = e.querySelector("a:focus"), t = e.querySelectorAll("a.c-navigation__submenu-item-link"), n = this.getNextElement(a, i, t), this.focusOn(n)))
            }
            handleOverViewLinkKeydown(e) {
                var {
                    currentTarget: t,
                    keyCode: n
                } = e;
                n === c.default.TAB && (n = t.parentNode, e.preventDefault(), n.classList.contains(g) ? (t = n.querySelector("a.c-navigation__submenu-item-link"), this.focusOn(t)) : (e = n.parentNode.querySelector(".c-navigation__submenus ." + r), this.focusOn(e)))
            }
            goToSlibing(e, t) {
                var e = e["target"],
                    n = this.getParentElement(e, "LI"),
                    i = this.getParentElement(n, "UL");
                let a;
                e.classList.contains("c-navigation__menu-label") ? a = i.querySelectorAll(".c-navigation__menu-label") : e.classList.contains("c-navigation__submenu-label") && (a = i.querySelectorAll(".c-navigation__submenu-label"));
                i = this.getNextElement(t, e, a), t = this.toggleMenu(n, !1), e = this.toggleMenu(i, !1);
                "0" === t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), e.setAttribute("tabindex", "0")), this.focusOn(e)
            }
            goToNextLevel(e) {
                var t = e["target"];
                t.getAttribute("aria-haspopup") && "false" !== t.getAttribute("aria-haspopup") && (e.preventDefault(), e = this.getParentElement(t, "." + u), (t = this.getParentElement(t, "." + p)) ? (this.toggleMenu(t, !0), t = t.querySelector(".c-navigation__submenu-content a"), this.focusOn(t)) : (this.toggleMenu(e, !0), t = e.querySelector(".c-navigation__submenus-wrapper a"), this.focusOn(t)))
            }
            toggleMenu(e, t) {
                let n, i;
                return i = "A" === e.tagName ? (n = e, this.getParentElement(e, "LI")) : (n = e.querySelector("a"), e), n.setAttribute("aria-expanded", t), i.classList[t ? "add" : "remove"](d), n
            }
            getVisibleElements() {
                return Array.from(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).filter(e => {
                    e = e.getBoundingClientRect();
                    return 0 < e.width && 0 < e.height
                })
            }
            focusOn(e) {
                return e.focus({
                    preventScroll: !0
                })
            }
            getCurrentElementIndex(t) {
                return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).findIndex(e => e.contains(t))
            }
            getNextElement() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    n = this.getVisibleElements(2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : []),
                    t = this.getCurrentElementIndex(t, n);
                let i = 0;
                return "next" === e ? i = (t + 1) % n.length : "prev" === e && (i = (t || n.length) - 1), n[i]
            }
            closeNavbar(e) {
                var e = e["target"];
                this.firstLevelWrapper.contains(e) || (e = this.firstLevelWrapper.querySelectorAll("." + d), Array.from(e).map(e => this.toggleMenu(e, !1)))
            }
            initMain() {
                const i = this.$elem.find(".c-navigation__submenus"),
                    a = this.$elem.find("." + u),
                    s = this.$elem.find(".c-navigation__menu-label"),
                    r = this.$elem.find(".c-navigation__submenu-label"),
                    o = this.$elem.find(".c-navigation__menu-content");
                document.addEventListener("click", this.closeNavbar), this.$elem.each((e, t) => {
                    const n = "click" === t.dataset.toggleOn ? "click" : "mouseenter";
                    r.on(n, e => {
                        this.onNavSubmenuWrapper(e, n)
                    }), i.on("mouseleave", e => {
                        this.onMouseLeaveNavSubMenu(e, n)
                    }), "click" == n ? (s.on("click", this.preventNavMenuLink), r.on(n, this.preventNavMenuLink)) : (a.on("mouseenter", this.preventNavMenuLink), o.on("mouseleave", this.onLeaveCloseAll), a.on("mouseleave", this.onLeaveCloseAll), document.activeElement.blur())
                })
            }
            closeAllMenues() {
                l()(".c-navigation__menu-item").removeClass(d), l()(".c-navigation__submenu-wrapper").removeClass(d)
            }
            onLeaveCloseAll() {
                var e = this.breakpoint.isDesktop(),
                    t = this.breakpoint.isTablet(),
                    n = l()("header").hasClass("c-header__responsive-tab");
                (e || !n && t) && this.closeAllMenues()
            }
            onMouseLeaveNavSubMenu(e, t) {
                this.isResponsive() || "click" !== t && l()(e.currentTarget).parents("." + v).find("." + d).removeClass(d)
            }
            onNavSubmenuWrapper(e, t) {
                this.isResponsive() || ((this.breakpoint.isDesktop() && 88 < this.headerWrapper.offsetHeight || this.breakpoint.isTablet() && 96 < this.headerWrapper.offsetHeight) && this.$headerWrapper.addClass("c-navigation__bar-two-lines"), "click" !== t && (l()(e.target).hasClass("c-navigation__submenu-label--overview") || l()(e.currentTarget).closest(".c-navigation__submenus").find(".c-navigation__submenu-wrapper").removeClass(d), l()(e.currentTarget).closest(".c-navigation__submenu-wrapper").addClass(d)))
            }
            isResponsive() {
                if (l()("header").hasClass("c-header__responsive-tab")) {
                    if (!this.breakpoint.isDesktop()) return !0
                } else if (this.breakpoint.isMobile()) return !0;
                return !1
            }
            preventNavMenuLink(e) {
                var {
                    currentTarget: t,
                    type: n
                } = e;
                let i = null;
                let a = !1;
                var s = l()("header").hasClass("c-header__responsive-tab"),
                    r = l()(".c-navigation__submenu-wrapper").hasClass(d);
                i = "click" === n ? ((a = t.classList.contains("c-navigation__menu-label")) ? t.parentNode : t).parentNode : (a = t.classList.contains("c-navigation__menu-item")) ? t : t.parentNode, n = a ? "." + v : "." + g, n = i.querySelector(n), (703 < window.innerWidth && !s || 990 < window.innerWidth && s) && (i.classList.contains(d) ? (i.classList.remove(d), l()(i).find("a[aria-expanded]").attr("aria-expanded", "false"), r && l()(".c-navigation__submenu-wrapper").removeClass(d).find("a[aria-expanded]").attr("aria-expanded", "false")) : (a && l()(".c-navigation__menu-item").removeClass(d).find("a[aria-expanded]").attr("aria-expanded", "false"), l()(".c-navigation__submenu-wrapper").removeClass(d).find("a[aria-expanded]").attr("aria-expanded", "false"), n && (i.classList.add(d), l()(i).find("a[aria-expanded]").first().attr("aria-expanded", "true")))), r && (s = l()(t).parent(), this.handleMenuItemAlignment(s)), n && e.preventDefault()
            }
            initMobile() {
                const a = this.$elem.find(".c-navigation__menu-wrapper"),
                    s = this.$elem.find(".c-navigation__menu-content");
                let t = !1;
                const r = this.$elem.find(".js-find-agent-link");
                r.on("click keydown", e => {
                    "keydown" === e.type && e.which !== c.default.SPACE && e.which !== c.default.ENTER || (e.preventDefault(), t = e.currentTarget.classList.contains("c-navigation__action"), l()("header").hasClass("c-header--new__adaptation") && (r.toggleClass("active"), this.$elem.find(".js-find-agent-mobile").stop(!0, !0).slideToggle(), o.find(".c-icon").hasClass("c-icon--close")) && (s.stop(!0, !0).slideToggle(), a.removeClass("is-open"), o.attr("aria-expanded", "false"), o.find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars")))
                }), this.$elem.find(".js-navigation-flyout").on("click keydown", e => {
                    "keydown" === e.type && e.which !== c.default.SPACE && e.which !== c.default.ENTER || (e.preventDefault(), l()("header").hasClass("c-header--new__adaptation") && (r.removeClass("active"), this.$elem.find(".js-find-agent-mobile").stop(!0, !0).slideToggle(), t ? o.find(".c-icon").hasClass("c-icon--close") && (o.attr("aria-expanded", "false"), o.find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars")) : (s.stop(!0, !0).slideToggle(), a.removeClass(d), o.find(".c-icon").hasClass("c-icon--bars") ? (a.toggleClass(d), o.attr("aria-expanded", "true"), o.find(".c-icon").removeClass("c-icon--bars").addClass("c-icon--close")) : o.find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars"))))
                });
                const n = this.$elem.find(".js-tied-agent-link"),
                    o = (n.on("click keydown", e => {
                        "keydown" === e.type && e.which !== c.default.SPACE && e.which !== c.default.ENTER || (e.preventDefault(), n.toggleClass("active"), this.$elem.find(".js-tied-agent-mobile").stop(!0, !0).slideToggle())
                    }), this.$elem.find(".js-opener-link"));
                o.on("click keydown", e => {
                    if ("keydown" !== e.type || e.which === c.default.SPACE || e.which === c.default.ENTER) {
                        if (e.preventDefault(), l()("header").hasClass("c-header__responsive-tab")) {
                            if (this.breakpoint.isDesktop()) return
                        } else if (!this.breakpoint.isMobile()) return;
                        var t, n, i;
                        "true" === o.attr("aria-expanded") ? (e = Array.from(document.getElementsByClassName(u)), t = Array.from(document.getElementsByClassName(p)), n = Array.from(document.getElementsByClassName(v)), i = Array.from(document.getElementsByClassName(g)), e.forEach(e => {
                            e.classList.remove("isOpenClass")
                        }), t.forEach(e => {
                            e.classList.remove("isOpenClass")
                        }), n.forEach(e => {
                            e.style.display = "none"
                        }), i.forEach(e => {
                            e.style.display = "none"
                        }), o.attr("aria-expanded", "false"), o.find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars"), r.hasClass("active") && (r.removeClass("active"), this.$elem.find(".js-find-agent-mobile").stop(!0, !0).slideToggle(), o.find(".c-icon").removeClass("c-icon--bars").addClass("c-icon--close"))) : (o.attr("aria-expanded", "true"), o.find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars"), !!this.$elem.parents(".c-header--new__adaptation").length && (o.find(".c-icon").removeClass("c-icon--bars").addClass("c-icon--close"), r.hasClass("active")) && (r.removeClass("active"), this.$elem.find(".js-find-agent-mobile").stop(!0, !0).slideToggle())), s.stop(!0, !0).slideToggle(() => {
                            "true" === document.querySelector(".js-opener-link").getAttribute("aria-expanded") && document.querySelectorAll("." + h)[0].focus({
                                preventScroll: !0
                            })
                        }), a.toggleClass(d), a.hasClass(d) ? l()("body").css({
                            overflow: "hidden"
                        }) : l()("body").css({
                            overflow: ""
                        })
                    }
                }), this.$elem.find(".c-navigation__menu-label").on("click keydown", e => {
                    var t = e.which === c.default.SPACE || e.which === c.default.ENTER;
                    if (!this.breakpoint.isMobile() || "keydown" !== e.type || t) {
                        if (l()("header").hasClass("c-header__responsive-tab")) {
                            if (this.breakpoint.isDesktop()) return
                        } else if (!this.breakpoint.isMobile()) return;
                        t = l()(e.currentTarget);
                        const i = t.closest(".c-navigation__menu-item"),
                            a = t.parents(".c-navigation__menu-item").hasClass(d);
                        var n = t.closest(".c-navigation__menu-link").siblings("." + v);
                        t.closest(".c-navigation__menu").children().each((e, t) => {
                            l()(t).hasClass(d) && !a && (l()(t).removeClass(d), l()(t).find("." + v).stop(!0, !0).slideToggle())
                        }), n.length && (e.preventDefault(), e.stopPropagation(), i.toggleClass(d).find("a[aria-expanded]").attr("aria-expanded", i.hasClass(d)), setTimeout(() => {
                            i.find(".c-navigation__submenu-wrapper").removeClass(d).find("." + g).removeAttr("style")
                        }, 400), n.stop(!0, !0).slideToggle())
                    }
                }), this.$elem.find(".c-navigation__submenu-label").on("click keydown", e => {
                    var t = e.which === c.default.SPACE || e.which === c.default.ENTER;
                    if (!this.breakpoint.isMobile() || "keydown" !== e.type || t) {
                        if (l()("header").hasClass("c-header__responsive-tab")) {
                            if (this.breakpoint.isDesktop()) return
                        } else if (!this.breakpoint.isMobile()) return;
                        var t = l()(e.target).hasClass("c-navigation__submenu-label") ? l()(e.target) : l()(e.target).parents(".c-navigation__submenu-label"),
                            n = t.closest(".c-navigation__submenu-wrapper"),
                            i = t.siblings("." + g);
                        const a = t.parent().hasClass(d);
                        t.parents(".c-navigation__submenus").children().each((e, t) => {
                            l()(t).hasClass(d) && !a && (l()(t).removeClass(d), l()(t).find("." + g).stop(!0, !0).slideToggle())
                        }), i.length && (e.preventDefault(), e.stopPropagation(), n.toggleClass(d).find("a[aria-expanded]").attr("aria-expanded", n.hasClass(d)), i.stop(!0, !0).slideToggle(), this.breakpoint.isTablet() && n.toggleClass(d).find(".c-navigation__teaser-box").show(), this.breakpoint.isMobile() && 2 === n.toggleClass(d).find(".c-navigation__teaser-item").length ? (n.toggleClass(d).find(".c-navigation__teaser-box").hide(), window.ndbxPatternLab.carouselApis.reinit()) : n.toggleClass(d).find(".c-navigation__teaser-box").show())
                    }
                }), l()(window).on("resize", _.debounce(() => {
                    this.handleNavResize()
                }, 200)), l()(window).on("load", () => {
                    this.handleNavbarTwoLines()
                })
            }
            handleNavResize() {
                var e = this.breakpoint.isDesktop(),
                    t = this.breakpoint.isTablet(),
                    n = this.$elem.parent("header").hasClass("c-header__responsive-tab");
                (e || !n && t) && (l()(".c-three-level-navigation ." + d).removeClass(d), l()(".c-navigation__menu-content").removeAttr("style"), l()("." + v).removeAttr("style"), l()("." + g).removeAttr("style"), 0 < !this.$elem.find(".c-navigation__menu-wrapper." + d).length && this.$elem.find(".js-opener-link").find(".c-icon").removeClass("c-icon--close").addClass("c-icon--bars"), this.handleNavbarTwoLines()), this.closeAllMenues()
            }
            handleNavbarTwoLines() {
                var e = "c-navigation__bar-two-lines";
                this.breakpoint.isMobile() || (this.breakpoint.isDesktop() && 88 < this.headerWrapper.offsetHeight || this.breakpoint.isTablet() && 96 < this.headerWrapper.offsetHeight ? this.$headerWrapper.addClass(e) : this.$headerWrapper.removeClass(e))
            }
            getParentElement(e, t) {
                var n = 0 === t.indexOf("#"),
                    i = 0 === t.indexOf(".");
                for ((n || i) && (t = t.slice(1)); e;) {
                    if (n) {
                        if (e.id === t) return e
                    } else if (i) {
                        if (e.classList.contains(t)) return e
                    } else if (e.tagName === t) return e;
                    e = e.parentElement
                }
                return null
            }
            handleMenuItemAlignment(e) {
                const i = l()(e).find(".c-navigation__submenu-headline").toArray(),
                    a = i.reduce((e, t) => {
                        var n = t.getBoundingClientRect().top;
                        return e[n] = e[n] || [], e[n].push(t), e
                    }, {});
                Object.keys(a).forEach(e => {
                    const t = [],
                        n = (a[e].forEach(e => {
                            t.push(e.clientHeight)
                        }), Math.max(...t));
                    a[e].forEach(e => {
                        var t = e.clientHeight;
                        t < n && (t = n - t, this.menuTitleMargin = parseInt(l()(i).css("margin-bottom"), 10), e.style.marginBottom = this.menuTitleMargin + t + "px")
                    })
                })
            }
        }
    },
    "./source/_patterns/content/14-three-level-navigation/three-level-navigation.js": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("./source/_patterns/content/14-three-level-navigation/three-level-nav-handle-event.js");
        t.default = {
            attach: function() {
                var t = document.querySelectorAll(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".js-three-level-nav");
                for (let e = 0; e < t.length; e += 1) {
                    var n = t[e],
                        n = new i.default(n);
                    n.initMobile(), n.initMain(), n.initKeyboard()
                }
            }
        }
    },
    "./source/js/components/three-level-navigation.ts": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = n("./source/_patterns/content/14-three-level-navigation/three-level-navigation.js");
        document.addEventListener("DOMContentLoaded", e => {
            i.default.attach()
        })
    },
    "./source/js/helpers/breakpoint.js": function(e, t, n) {
        "use strict";
        n.r(t);
        const i = {
            mobile: 703,
            tablet: 991
        };
        t.default = class {
            constructor() {
                this.breakpoint = i, this.screenWidth = window.innerWidth
            }
            getBreakpointObject() {
                return this.breakpoint
            }
            getScreenType() {
                return this.screenWidth = window.innerWidth, this.screenWidth <= this.breakpoint.mobile ? "mobile" : this.screenWidth <= this.breakpoint.tablet ? "tablet" : "desktop"
            }
            isMobile() {
                return "mobile" === this.getScreenType()
            }
            isTablet() {
                return "tablet" === this.getScreenType()
            }
            isDesktop() {
                return "desktop" === this.getScreenType()
            }
        }
    },
    "./source/js/helpers/key-event-code.js": function(e, t, n) {
        "use strict";
        n.r(t);
        t.default = {
            CANCEL: 3,
            HELP: 6,
            BACK_SPACE: 8,
            TAB: 9,
            CLEAR: 12,
            RETURN: 13,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESCAPE: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINTSCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            NUM_0: 48,
            NUM_1: 49,
            NUM_2: 50,
            NUM_3: 51,
            NUM_4: 52,
            NUM_5: 53,
            NUM_6: 54,
            NUM_7: 55,
            NUM_8: 56,
            NUM_9: 57
        }
    },
    0: function(e, t, n) {
        e.exports = n("./source/js/components/three-level-navigation.ts")
    }
});