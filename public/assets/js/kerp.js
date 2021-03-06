! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var i = [],
        n = e.document,
        r = Object.getPrototypeOf,
        s = i.slice,
        a = i.concat,
        o = i.push,
        l = i.indexOf,
        c = {},
        d = c.toString,
        u = c.hasOwnProperty,
        h = u.toString,
        p = h.call(Object),
        f = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, i) {
        var r, s, a = (i = i || n).createElement("script");
        if (a.text = e, t)
            for (r in v)(s = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, s);
        i.head.appendChild(a).parentNode.removeChild(a)
    }

    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[d.call(e)] || "object" : typeof e
    }
    var w = function(e, t) {
            return new w.fn.init(e, t)
        },
        _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
        var t = !!e && "length" in e && e.length,
            i = y(e);
        return !m(e) && !g(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: "3.4.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, i) {
                return e.call(t, i, t)
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
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, i, n, r, s, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || m(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = e[t], "__proto__" !== t && a !== n && (c && n && (w.isPlainObject(n) || (r = Array.isArray(n))) ? (i = a[t], s = r && !Array.isArray(i) ? [] : r || w.isPlainObject(i) ? i : {}, r = !1, a[t] = w.extend(c, s, n)) : void 0 !== n && (a[t] = n));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== d.call(e)) && (!(t = r(e)) || "function" == typeof(i = u.call(t, "constructor") && t.constructor) && h.call(i) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var i, n = 0;
            if (x(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(_, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (x(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, s = e.length, a = !i; r < s; r++) !t(e[r], r) !== a && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r, s = 0,
                o = [];
            if (x(e))
                for (n = e.length; s < n; s++) null != (r = t(e[s], s, i)) && o.push(r);
            else
                for (s in e) null != (r = t(e[s], s, i)) && o.push(r);
            return a.apply([], o)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var E = function(e) {
        var t, i, n, r, s, a, o, l, c, d, u, h, p, f, m, g, v, b, y, w = "sizzle" + 1 * new Date,
            _ = e.document,
            x = 0,
            E = 0,
            C = le(),
            T = le(),
            S = le(),
            k = le(),
            N = function(e, t) {
                return e === t && (u = !0), 0
            },
            M = {}.hasOwnProperty,
            I = [],
            D = I.pop,
            A = I.push,
            L = I.push,
            P = I.slice,
            z = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            $ = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            B = "\\[" + $ + "*(" + j + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + $ + "*\\]",
            H = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            R = new RegExp($ + "+", "g"),
            q = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
            W = new RegExp("^" + $ + "*," + $ + "*"),
            F = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
            U = new RegExp($ + "|>"),
            V = new RegExp(H),
            X = new RegExp("^" + j + "$"),
            Y = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
            ie = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = function() {
                h()
            },
            ae = we(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(I = P.call(_.childNodes), _.childNodes), I[_.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: I.length ? function(e, t) {
                    A.apply(e, P.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var s, o, c, d, u, f, v, b = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
            if (!r && ((t ? t.ownerDocument || t : _) !== p && h(t), t = t || p, m)) {
                if (11 !== x && (u = J.exec(e)))
                    if (s = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(s))) return n;
                            if (c.id === s) return n.push(c), n
                        } else if (b && (c = b.getElementById(s)) && y(t, c) && c.id === s) return n.push(c), n
                    } else {
                        if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(s)), n
                    }
                if (i.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, b = t, 1 === x && U.test(e)) {
                        for ((d = t.getAttribute("id")) ? d = d.replace(ne, re) : t.setAttribute("id", d = w), o = (f = a(e)).length; o--;) f[o] = "#" + d + " " + ye(f[o]);
                        v = f.join(","), b = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(n, b.querySelectorAll(v)), n
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        d === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, n, r)
        }

        function le() {
            var e = [];
            return function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function de(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var i = e.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = t
        }

        function he(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ce(function(t) {
                return t = +t, ce(function(i, n) {
                    for (var r, s = e([], i.length, t), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = oe.support = {}, s = oe.isXML = function(e) {
                var t = e.namespaceURI,
                    i = (e.ownerDocument || e).documentElement;
                return !G.test(t || i && i.nodeName || "HTML")
            }, h = oe.setDocument = function(e) {
                var t, r, a = e ? e.ownerDocument || e : _;
                return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, m = !s(p), _ !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)), i.attributes = de(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = de(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = Z.test(p.getElementsByClassName), i.getById = de(function(e) {
                    return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                }), i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i, n, r, s = t.getElementById(e);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                            for (r = t.getElementsByName(e), n = 0; s = r[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (i.qsa = Z.test(p.querySelectorAll)) && (de(function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                }), de(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (i.matchesSelector = Z.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de(function(e) {
                    i.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(f.compareDocumentPosition), y = t || Z.test(f.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === _ && y(_, e) ? -1 : t === p || t.ownerDocument === _ && y(_, t) ? 1 : d ? z(d, e) - z(d, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i, n = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        o = [t];
                    if (!r || !s) return e === p ? -1 : t === p ? 1 : r ? -1 : s ? 1 : d ? z(d, e) - z(d, t) : 0;
                    if (r === s) return he(e, t);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; a[n] === o[n];) n++;
                    return n ? he(a[n], o[n]) : a[n] === _ ? -1 : o[n] === _ ? 1 : 0
                }, p) : p
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && h(e), i.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var n = b.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    k(t, !0)
                }
                return oe(t, p, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && h(e), y(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var r = n.attrHandle[t.toLowerCase()],
                    s = r && M.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(ne, re)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    s = 0;
                if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(N), u) {
                    for (; t = e[s++];) t === e[s] && (r = n.push(s));
                    for (; r--;) e.splice(n[r], 1)
                }
                return d = null, e
            }, r = oe.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (n = oe.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
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
                        return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && V.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ie).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var r = oe.attr(n, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, r) {
                        var s = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, d, u, h, p, f, m = s !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                b = !l && !o,
                                y = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)
                                            if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && b) {
                                    for (y = (p = (c = (d = (u = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (y = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++y && h === t) {
                                            d[e] = [x, p, y];
                                            break
                                        }
                                } else if (b && (y = p = (c = (d = (u = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y)
                                    for (;
                                        (h = ++p && h && h[m] || (y = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && ((d = (u = h[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [x, y]), h !== t)););
                                return (y -= r) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, i) {
                            for (var n, s = r(e, t), a = s.length; a--;) e[n = z(e, s[a])] = !(i[n] = s[a])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            i = [],
                            n = o(e.replace(q, "$1"));
                        return n[w] ? ce(function(e, t, i, r) {
                            for (var s, a = n(e, null, r, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
                        }) : function(e, r, s) {
                            return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(te, ie),
                            function(t) {
                                return (t.textContent || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ce(function(e) {
                        return X.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
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
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge(function() {
                        return [0]
                    }),
                    last: ge(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ge(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: ge(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: ge(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: ge(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: ge(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = pe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = fe(t);

        function be() {}

        function ye(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function we(e, t, i) {
            var n = t.dir,
                r = t.next,
                s = r || n,
                a = i && "parentNode" === s,
                o = E++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || a) return e(t, i, r);
                return !1
            } : function(t, i, l) {
                var c, d, u, h = [x, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || a) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || a)
                            if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = d[s]) && c[0] === x && c[1] === o) return h[2] = c[2];
                                if (d[s] = h, h[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, i, n, r) {
            for (var s, a = [], o = 0, l = e.length, c = null != t; o < l; o++)(s = e[o]) && (i && !i(s, n, r) || (a.push(s), c && t.push(o)));
            return a
        }

        function Ee(e, t, i, n, r, s) {
            return n && !n[w] && (n = Ee(n)), r && !r[w] && (r = Ee(r, s)), ce(function(s, a, o, l) {
                var c, d, u, h = [],
                    p = [],
                    f = a.length,
                    m = s || function(e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) oe(e, t[n], i);
                        return i
                    }(t || "*", o.nodeType ? [o] : o, []),
                    g = !e || !s && t ? m : xe(m, h, e, o, l),
                    v = i ? r || (s ? e : f || n) ? [] : a : g;
                if (i && i(g, v, o, l), n)
                    for (c = xe(v, p), n(c, [], o, l), d = c.length; d--;)(u = c[d]) && (v[p[d]] = !(g[p[d]] = u));
                if (s) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(g[d] = u);
                            r(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && (c = r ? z(s, u) : h[d]) > -1 && (s[c] = !(a[c] = u))
                    }
                } else v = xe(v === a ? v.splice(f, v.length) : v), r ? r(null, a, v, l) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, i, r, s = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, d = we(function(e) {
                    return e === t
                }, o, !0), u = we(function(e) {
                    return z(t, e) > -1
                }, o, !0), h = [function(e, i, n) {
                    var r = !a && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                    return t = null, r
                }]; l < s; l++)
                if (i = n.relative[e[l].type]) h = [we(_e(h), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < s && !n.relative[e[r].type]; r++);
                        return Ee(l > 1 && _e(h), l > 1 && ye(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), i, l < r && Ce(e.slice(l, r)), r < s && Ce(e = e.slice(r)), r < s && ye(e))
                    }
                    h.push(i)
                }
            return _e(h)
        }
        return be.prototype = n.filters = n.pseudos, n.setFilters = new be, a = oe.tokenize = function(e, t) {
            var i, r, s, a, o, l, c, d = T[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (o = e, l = [], c = n.preFilter; o;) {
                for (a in i && !(r = W.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(s = [])), i = !1, (r = F.exec(o)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(q, " ")
                    }), o = o.slice(i.length)), n.filter) !(r = Y[a].exec(o)) || c[a] && !(r = c[a](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: a,
                    matches: r
                }), o = o.slice(i.length));
                if (!i) break
            }
            return t ? o.length : o ? oe.error(e) : T(e, l).slice(0)
        }, o = oe.compile = function(e, t) {
            var i, r = [],
                s = [],
                o = S[e + " "];
            if (!o) {
                for (t || (t = a(e)), i = t.length; i--;)(o = Ce(t[i]))[w] ? r.push(o) : s.push(o);
                (o = S(e, function(e, t) {
                    var i = t.length > 0,
                        r = e.length > 0,
                        s = function(s, a, o, l, d) {
                            var u, f, g, v = 0,
                                b = "0",
                                y = s && [],
                                w = [],
                                _ = c,
                                E = s || r && n.find.TAG("*", d),
                                C = x += null == _ ? 1 : Math.random() || .1,
                                T = E.length;
                            for (d && (c = a === p || a || d); b !== T && null != (u = E[b]); b++) {
                                if (r && u) {
                                    for (f = 0, a || u.ownerDocument === p || (h(u), o = !m); g = e[f++];)
                                        if (g(u, a || p, o)) {
                                            l.push(u);
                                            break
                                        }
                                    d && (x = C)
                                }
                                i && ((u = !g && u) && v--, s && y.push(u))
                            }
                            if (v += b, i && b !== v) {
                                for (f = 0; g = t[f++];) g(y, w, a, o);
                                if (s) {
                                    if (v > 0)
                                        for (; b--;) y[b] || w[b] || (w[b] = D.call(l));
                                    w = xe(w)
                                }
                                L.apply(l, w), d && !s && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                            }
                            return d && (x = C, c = _), y
                        };
                    return i ? ce(s) : s
                }(s, r))).selector = e
            }
            return o
        }, l = oe.select = function(e, t, i, r) {
            var s, l, c, d, u, h = "function" == typeof e && e,
                p = !r && a(e = h.selector || e);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (s = Y.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !n.relative[d = c.type]);)
                    if ((u = n.find[d]) && (r = u(c.matches[0].replace(te, ie), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = r.length && ye(l))) return L.apply(i, r), i;
                        break
                    }
            }
            return (h || o(e, p))(r, t, !m, i, !t || ee.test(e) && ve(t.parentNode) || t), i
        }, i.sortStable = w.split("").sort(N).join("") === w, i.detectDuplicates = !!u, h(), i.sortDetached = de(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), de(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && de(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), de(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(O, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var C = function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && w(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        T = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        S = w.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function M(e, t, i) {
        return m(t) ? w.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return l.call(t, e) > -1 !== i
        }) : w.filter(t, e, i)
    }
    w.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) w.find(e, r[t], i);
            return n > 1 ? w.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function(e) {
            return !!M(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
        }
    });
    var I, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, i) {
        var r, s;
        if (!e) return this;
        if (i = i || I, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), N.test(r[1]) && w.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (s = n.getElementById(r[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, I = w(n);
    var A = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                r = this.length,
                s = [],
                a = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(s.length > 1 ? w.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return C(e, "parentNode", i)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return C(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return C(e, "previousSibling", i)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(i, n) {
            var r = w.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = w.filter(n, r)), this.length > 1 && (L[e] || w.uniqueSort(r), A.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function $(e) {
        throw e
    }

    function j(e, t, i, n) {
        var r;
        try {
            e && m(r = e.promise) ? r.call(e).done(t).fail(i) : e && m(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return w.each(e.match(z) || [], function(e, i) {
                t[i] = !0
            }), t
        }(e) : w.extend({}, e);
        var t, i, n, r, s = [],
            a = [],
            o = -1,
            l = function() {
                for (r = r || e.once, n = t = !0; a.length; o = -1)
                    for (i = a.shift(); ++o < s.length;) !1 === s[o].apply(i[0], i[1]) && e.stopOnFalse && (o = s.length, i = !1);
                e.memory || (i = !1), t = !1, r && (s = i ? [] : "")
            },
            c = {
                add: function() {
                    return s && (i && !t && (o = s.length - 1, a.push(i)), function t(i) {
                        w.each(i, function(i, n) {
                            m(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== y(n) && t(n)
                        })
                    }(arguments), i && !t && l()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        for (var i;
                            (i = w.inArray(t, s, i)) > -1;) s.splice(i, 1), i <= o && o--
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], i || t || (s = i = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, i) {
                    return r || (i = [e, (i = i || []).slice ? i.slice() : i], a.push(i), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, w.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(i, function(i, n) {
                                var r = m(e[n[4]]) && e[n[4]];
                                s[n[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var s = 0;

                        function a(t, i, n, r) {
                            return function() {
                                var o = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < s)) {
                                            if ((e = n.apply(o, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, a(s, i, O, r), a(s, i, $, r)) : (s++, c.call(e, a(s, i, O, r), a(s, i, $, r), a(s, i, O, i.notifyWith))) : (n !== O && (o = void 0, l = [e]), (r || i.resolveWith)(o, l))
                                        }
                                    },
                                    d = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (n !== $ && (o = void 0, l = [e]), i.rejectWith(o, l))
                                        }
                                    };
                                t ? d() : (w.Deferred.getStackHook && (d.stackTrace = w.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return w.Deferred(function(e) {
                            i[0][3].add(a(0, e, m(r) ? r : O, e.notifyWith)), i[1][3].add(a(0, e, m(t) ? t : O)), i[2][3].add(a(0, e, m(n) ? n : $))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                s = {};
            return w.each(i, function(e, t) {
                var a = t[2],
                    o = t[5];
                r[t[1]] = a.add, o && a.add(function() {
                    n = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), a.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = a.fireWith
            }), r.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = s.call(arguments),
                a = w.Deferred(),
                o = function(e) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : i, --t || a.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (j(e, a.done(o(i)).resolve, a.reject, !t), "pending" === a.state() || m(r[i] && r[i].then))) return a.then();
            for (; i--;) j(r[i], o(i), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var H = w.Deferred();

    function R() {
        n.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), w.ready()
    }
    w.fn.ready = function(e) {
        return H.then(e).catch(function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || H.resolveWith(n, [w]))
        }
    }), w.ready.then = H.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(w.ready) : (n.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var q = function(e, t, i, n, r, s, a) {
            var o = 0,
                l = e.length,
                c = null == i;
            if ("object" === y(i))
                for (o in r = !0, i) q(e, t, o, i[o], !0, s, a);
            else if (void 0 !== n && (r = !0, m(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(w(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return r ? e : c ? t.call(e) : l ? t(e[0], i) : s
        },
        W = /^-ms-/,
        F = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(W, "ms-").replace(F, U)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = w.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[V(t)] = i;
            else
                for (n in t) r[V(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in n ? [t] : t.match(z) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var G = new Y,
        Q = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) {}
                Q.set(e, t, i)
            } else i = void 0;
        return i
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || G.hasData(e)
        },
        data: function(e, t, i) {
            return Q.access(e, t, i)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, i) {
            return G.access(e, t, i)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var i, n, r, s = this[0],
                a = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = V(n.slice(5)), J(s, n, r[n]));
                    G.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : q(this, function(t) {
                var i;
                if (s && void 0 === t) return void 0 !== (i = Q.get(s, e)) ? i : void 0 !== (i = J(s, e)) ? i : void 0;
                this.each(function() {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = G.get(e, t), i && (!n || Array.isArray(i) ? n = G.access(e, t, w.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = w.queue(e, t),
                n = i.length,
                r = i.shift(),
                s = w._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, function() {
                w.dequeue(e, t)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return G.get(e, i) || G.access(e, i, {
                empty: w.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", i])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = w.Deferred(),
                s = this,
                a = this.length,
                o = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = G.get(s[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = n.documentElement,
        re = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    ne.getRootNode && (re = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
        },
        oe = function(e, t, i, n) {
            var r, s, a = {};
            for (s in t) a[s] = e.style[s], e.style[s] = t[s];
            for (s in r = i.apply(e, n || []), t) e.style[s] = a[s];
            return r
        };

    function le(e, t, i, n) {
        var r, s, a = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return w.css(e, t, "")
            },
            l = o(),
            c = i && i[3] || (w.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; a--;) w.style(e, t, d + c), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), d /= s;
            d *= 2, w.style(e, t, d + c), i = i || []
        }
        return i && (d = +d || +l || 0, r = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = r)), r
    }
    var ce = {};

    function de(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            r = ce[n];
        return r || (t = i.body.appendChild(i.createElement(n)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[n] = r, r)
    }

    function ue(e, t) {
        for (var i, n, r = [], s = 0, a = e.length; s < a; s++)(n = e[s]).style && (i = n.style.display, t ? ("none" === i && (r[s] = G.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && ae(n) && (r[s] = de(n))) : "none" !== i && (r[s] = "none", G.set(n, "display", i)));
        for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
        return e
    }
    w.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], i) : i
    }

    function ve(e, t) {
        for (var i = 0, n = e.length; i < n; i++) G.set(e[i], "globalEval", !t || G.get(t[i], "globalEval"))
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var be, ye, we = /<|&#?\w+;/;

    function _e(e, t, i, n, r) {
        for (var s, a, o, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === y(s)) w.merge(h, s.nodeType ? [s] : s);
                else if (we.test(s)) {
            for (a = a || u.appendChild(t.createElement("div")), o = (pe.exec(s) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, a.innerHTML = l[1] + w.htmlPrefilter(s) + l[2], d = l[0]; d--;) a = a.lastChild;
            w.merge(h, a.childNodes), (a = u.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (u.textContent = "", p = 0; s = h[p++];)
            if (n && w.inArray(s, n) > -1) r && r.push(s);
            else if (c = re(s), a = ge(u.appendChild(s), "script"), c && ve(a), i)
            for (d = 0; s = a[d++];) fe.test(s.type || "") && i.push(s);
        return u
    }
    be = n.createDocumentFragment().appendChild(n.createElement("div")), (ye = n.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), be.appendChild(ye), f.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
    var xe = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Se() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return n.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ne(e, t, i, n, r, s) {
        var a, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Ne(e, o, i, n, t[o], s);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === s && (a = r, (r = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, r, n, i)
        })
    }

    function Me(e, t, i) {
        i ? (G.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = s.call(arguments), G.set(this, t, a), n = i(this, t), this[t](), a !== (r = G.get(this, t)) || n ? G.set(this, t, !1) : r = {}, a !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else a.length && (G.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && w.event.add(e, t, Te)
    }
    w.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var s, a, o, l, c, d, u, h, p, f, m, g = G.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && w.find.matchesSelector(ne, r), i.guid || (i.guid = w.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(z) || [""]).length; c--;) p = m = (o = Ce.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (u = w.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = w.event.special[p] || {}, d = w.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), w.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var s, a, o, l, c, d, u, h, p, f, m, g = G.hasData(e) && G.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(z) || [""]).length; c--;)
                    if (p = m = (o = Ce.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (u = w.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) d = h[s], !r && m !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                        a && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || w.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) w.event.remove(e, p + t[c], i, n, !0);
                w.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, s, a, o = w.event.fix(e),
                l = new Array(arguments.length),
                c = (G.get(this, "events") || {})[o.type] || [],
                d = w.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
                for (a = w.event.handlers.call(this, o, c), t = 0;
                    (r = a[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== s.namespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, void 0 !== (n = ((w.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, s, a, o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[r = (n = t[i]).selector + " "] && (a[r] = n.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), a[r] && s.push(n);
                        s.length && o.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this, l < t.length && o.push({
                elem: c,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && k(t, "input") && Me(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && k(t, "input") && Me(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Me(this, e, ke), !1
            },
            trigger: function() {
                return Me(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || w.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), w.fn.extend({
        on: function(e, t, i, n) {
            return Ne(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Ne(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Se), this.each(function() {
                w.event.remove(this, e, i, t)
            })
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Pe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function ze(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function $e(e, t) {
        var i, n, r, s, a, o, l, c;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.access(e), a = G.set(t, s), c = s.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (i = 0, n = c[r].length; i < n; i++) w.event.add(t, r, c[r][i]);
            Q.hasData(e) && (o = Q.access(e), l = w.extend({}, o), Q.set(t, l))
        }
    }

    function je(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && he.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function Be(e, t, i, n) {
        t = a.apply([], t);
        var r, s, o, l, c, d, u = 0,
            h = e.length,
            p = h - 1,
            g = t[0],
            v = m(g);
        if (v || h > 1 && "string" == typeof g && !f.checkClone && Ae.test(g)) return e.each(function(r) {
            var s = e.eq(r);
            v && (t[0] = g.call(this, r, s.html())), Be(s, t, i, n)
        });
        if (h && (s = (r = _e(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
            for (l = (o = w.map(ge(r, "script"), ze)).length; u < h; u++) c = r, u !== p && (c = w.clone(c, !0, !0), l && w.merge(o, ge(c, "script"))), i.call(e[u], c, u);
            if (l)
                for (d = o[o.length - 1].ownerDocument, w.map(o, Oe), u = 0; u < l; u++) c = o[u], fe.test(c.type || "") && !G.access(c, "globalEval") && w.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : b(c.textContent.replace(Le, ""), c, d))
        }
        return e
    }

    function He(e, t, i) {
        for (var n, r = t ? w.filter(t, e) : e, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || w.cleanData(ge(n)), n.parentNode && (i && re(n) && ve(ge(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, s, a, o = e.cloneNode(!0),
                l = re(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ge(o), n = 0, r = (s = ge(e)).length; n < r; n++) je(s[n], a[n]);
            if (t)
                if (i)
                    for (s = s || ge(e), a = a || ge(o), n = 0, r = s.length; n < r; n++) $e(s[n], a[n]);
                else $e(e, o);
            return (a = ge(o, "script")).length > 0 && ve(a, !l && ge(e, "script")), o
        },
        cleanData: function(e) {
            for (var t, i, n, r = w.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (X(i)) {
                    if (t = i[G.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
                        i[G.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Be(this, arguments, function(t) {
                var i = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var i, n = [], r = w(e), s = r.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), w(r[a])[t](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        qe = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        We = new RegExp(ie.join("|"), "i");

    function Fe(e, t, i) {
        var n, r, s, a, o = e.style;
        return (i = i || qe(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || re(e) || (a = w.style(e, t)), !f.pixelBoxStyles() && Re.test(a) && We.test(t) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
    }

    function Ue(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                r = "1%" !== t.top, l = 12 === i(t.marginLeft), d.style.right = "60%", o = 36 === i(t.right), s = 36 === i(t.width), d.style.position = "absolute", a = 12 === i(d.offsetWidth / 3), ne.removeChild(c), d = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var r, s, a, o, l, c = n.createElement("div"),
            d = n.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === d.style.backgroundClip, w.extend(f, {
            boxSizingReliable: function() {
                return t(), s
            },
            pixelBoxStyles: function() {
                return t(), o
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Ve = ["Webkit", "Moz", "ms"],
        Xe = n.createElement("div").style,
        Ye = {};

    function Ge(e) {
        var t = w.cssProps[e] || Ye[e];
        return t || (e in Xe ? e : Ye[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ve.length; i--;)
                if ((e = Ve[i] + t) in Xe) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function et(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function tt(e, t, i, n, r, s) {
        var a = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === i && (l += w.css(e, i + ie[a], !0, r)), n ? ("content" === i && (l -= w.css(e, "padding" + ie[a], !0, r)), "margin" !== i && (l -= w.css(e, "border" + ie[a] + "Width", !0, r))) : (l += w.css(e, "padding" + ie[a], !0, r), "padding" !== i ? l += w.css(e, "border" + ie[a] + "Width", !0, r) : o += w.css(e, "border" + ie[a] + "Width", !0, r));
        return !n && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5)) || 0), l
    }

    function it(e, t, i) {
        var n = qe(e),
            r = (!f.boxSizingReliable() || i) && "border-box" === w.css(e, "boxSizing", !1, n),
            s = r,
            a = Fe(e, t, n),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!i) return a;
            a = "auto"
        }
        return (!f.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, n)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, n), (s = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + tt(e, t, i || (r ? "border" : "content"), s, n, a) + "px"
    }

    function nt(e, t, i, n, r) {
        return new nt.prototype.init(e, t, i, n, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Fe(e, "opacity");
                        return "" === i ? "1" : i
                    }
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
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, a, o = V(t),
                    l = Ke.test(t),
                    c = e.style;
                if (l || (t = Ge(o)), a = w.cssHooks[t] || w.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : c[t];
                "string" === (s = typeof i) && (r = te.exec(i)) && r[1] && (i = le(e, t, r), s = "number"), null != i && i == i && ("number" !== s || l || (i += r && r[3] || (w.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var r, s, a, o = V(t);
            return Ke.test(t) || (t = Ge(o)), (a = w.cssHooks[t] || w.cssHooks[o]) && "get" in a && (r = a.get(e, !0, i)), void 0 === r && (r = Fe(e, t, n)), "normal" === r && t in Je && (r = Je[t]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, n) : oe(e, Ze, function() {
                    return it(e, t, n)
                })
            },
            set: function(e, i, n) {
                var r, s = qe(e),
                    a = !f.scrollboxSize() && "absolute" === s.position,
                    o = (a || n) && "border-box" === w.css(e, "boxSizing", !1, s),
                    l = n ? tt(e, t, n, o, s) : 0;
                return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - tt(e, t, "border", !1, s) - .5)), l && (r = te.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = w.css(e, t)), et(0, i, l)
            }
        }
    }), w.cssHooks.marginLeft = Ue(f.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + ie[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = et)
    }), w.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, i) {
                var n, r, s = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (n = qe(e), r = t.length; a < r; a++) s[t[a]] = w.css(e, t[a], !1, n);
                    return s
                }
                return void 0 !== i ? w.style(e, t, i) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), w.Tween = nt, nt.prototype = {
        constructor: nt,
        init: function(e, t, i, n, r, s) {
            this.elem = e, this.prop = i, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (w.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : nt.propHooks._default.set(this), this
        }
    }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var rt, st, at = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function lt() {
        st && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(lt) : e.setTimeout(lt, w.fx.interval), w.fx.tick())
    }

    function ct() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function dt(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ie[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ut(e, t, i) {
        for (var n, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), s = 0, a = r.length; s < a; s++)
            if (n = r[s].call(i, t, e)) return n
    }

    function ht(e, t, i) {
        var n, r, s = 0,
            a = ht.prefilters.length,
            o = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = rt || ct(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), s = 0, a = c.tweens.length; s < a; s++) c.tweens[s].run(n);
                return o.notifyWith(e, [c, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
            },
            c = o.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: rt || ct(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = w.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (! function(e, t) {
                var i, n, r, s, a;
                for (i in e)
                    if (r = t[n = V(i)], s = e[i], Array.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (a = w.cssHooks[n]) && "expand" in a)
                        for (i in s = a.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = r);
                    else t[n] = r
            }(d, c.opts.specialEasing); s < a; s++)
            if (n = ht.prefilters[s].call(c, e, d, c.opts)) return m(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return w.map(d, ut, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ht, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return le(i.elem, e, te.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                m(e) ? (t = e, e = ["*"]) : e = e.match(z);
                for (var i, n = 0, r = e.length; n < r; n++) i = e[n], ht.tweeners[i] = ht.tweeners[i] || [], ht.tweeners[i].unshift(t)
            },
            prefilters: [function(e, t, i) {
                var n, r, s, a, o, l, c, d, u = "width" in t || "height" in t,
                    h = this,
                    p = {},
                    f = e.style,
                    m = e.nodeType && ae(e),
                    g = G.get(e, "fxshow");
                for (n in i.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || o()
                    }), a.unqueued++, h.always(function() {
                        h.always(function() {
                            a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (r = t[n], at.test(r)) {
                        if (delete t[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[n]) continue;
                            m = !0
                        }
                        p[n] = g && g[n] || w.style(e, n)
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                    for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (d = w.css(e, "display")) && (c ? d = c : (ue([e], !0), c = e.style.display || c, d = w.css(e, "display"), ue([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === w.css(e, "float") && (l || (h.done(function() {
                            f.display = c
                        }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
                        display: c
                    }), s && (g.hidden = !m), m && ue([e], !0), h.done(function() {
                        for (n in m || ue([e]), G.remove(e, "fxshow"), p) w.style(e, n, p[n])
                    })), l = ut(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
            }
        }), w.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? w.extend({}, e) : {
                complete: i || !i && t || m(e) && e,
                duration: e,
                easing: i && t || t && !m(t) && t
            };
            return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                m(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue)
            }, n
        }, w.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var r = w.isEmptyObject(e),
                    s = w.speed(t, i, n),
                    a = function() {
                        var t = ht(this, w.extend({}, e), s);
                        (r || G.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        s = w.timers,
                        a = G.get(this);
                    if (r) a[r] && a[r].stop && n(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && ot.test(r) && n(a[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
                    !t && i || w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, i = G.get(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        s = w.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
            var i = w.fn[t];
            w.fn[t] = function(e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(t, !0), e, n, r)
            }
        }), w.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            w.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                i = w.timers;
            for (rt = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || w.fx.stop(), rt = void 0
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            st || (st = !0, lt())
        }, w.fx.stop = function() {
            st = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, i) {
            return t = w.fx && w.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
                var r = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = n.createElement("input"),
                t = n.createElement("select").appendChild(n.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = n.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var pt, ft = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return q(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? w.prop(e, t, i) : (1 === s && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== i ? null === i ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = w.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && k(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                r = t && t.match(z);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), pt = {
        set: function(e, t, i) {
            return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = ft[t] || w.find.attr;
        ft[t] = function(e, t, n) {
            var r, s, a = t.toLowerCase();
            return n || (s = ft[a], ft[a] = r, r = null != i(e, t, n) ? a : null, ft[a] = s), r
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(z) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return q(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(e) {
            var t, i, n, r, s, a, o, l = 0;
            if (m(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = yt(e)).length)
                for (; i = this[l++];)
                    if (r = bt(i), n = 1 === i.nodeType && " " + vt(r) + " ") {
                        for (a = 0; s = t[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (o = vt(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, s, a, o, l = 0;
            if (m(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
                for (; i = this[l++];)
                    if (r = bt(i), n = 1 === i.nodeType && " " + vt(r) + " ") {
                        for (a = 0; s = t[a++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        r !== (o = vt(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(i) {
                w(this).toggleClass(e.call(this, i, bt(this), t), t)
            }) : this.each(function() {
                var t, r, s, a;
                if (n)
                    for (r = 0, s = w(this), a = yt(e); t = a[r++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + vt(bt(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = m(e), this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(wt, "") : null == i ? "" : i : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        o = a ? null : [],
                        l = a ? s + 1 : r.length;
                    for (n = s < 0 ? l : a ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                            if (t = w(i).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, s = w.makeArray(t), a = r.length; a--;)((n = r[a]).selected = w.inArray(w.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, f.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), f.focusin = "onfocusin" in e;
    var _t = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, i, r, s) {
            var a, o, l, c, d, h, p, f, v = [r || n],
                b = u.call(t, "type") ? t.type : t,
                y = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(b + w.event.triggered) && (b.indexOf(".") > -1 && (y = b.split("."), b = y.shift(), y.sort()), d = b.indexOf(":") < 0 && "on" + b, (t = t[w.expando] ? t : new w.Event(b, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : w.makeArray(i, [t]), p = w.event.special[b] || {}, s || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                if (!s && !p.noBubble && !g(r)) {
                    for (c = p.delegateType || b, _t.test(c + b) || (o = o.parentNode); o; o = o.parentNode) v.push(o), l = o;
                    l === (r.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (o = v[a++]) && !t.isPropagationStopped();) f = o, t.type = a > 1 ? c : p.bindType || b, (h = (G.get(o, "events") || {})[t.type] && G.get(o, "handle")) && h.apply(o, i), (h = d && o[d]) && h.apply && X(o) && (t.result = h.apply(o, i), !1 === t.result && t.preventDefault());
                return t.type = b, s || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), i) || !X(r) || d && m(r[b]) && !g(r) && ((l = r[d]) && (r[d] = null), w.event.triggered = b, t.isPropagationStopped() && f.addEventListener(b, xt), r[b](), t.isPropagationStopped() && f.removeEventListener(b, xt), w.event.triggered = void 0, l && (r[d] = l)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = w.extend(new w.Event, i, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(n, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return w.event.trigger(e, t, i, !0)
        }
    }), f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = G.access(n, t);
                r || n.addEventListener(e, i, !0), G.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = G.access(n, t) - 1;
                r ? G.access(n, t, r) : (n.removeEventListener(e, i, !0), G.remove(n, t))
            }
        }
    });
    var Et = e.location,
        Ct = Date.now(),
        Tt = /\?/;
    w.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), i
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, i, n) {
        var r;
        if (Array.isArray(t)) w.each(t, function(t, r) {
            i || St.test(e) ? n(e, r) : It(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== y(t)) n(e, t);
        else
            for (r in t) It(e + "[" + r + "]", t[r], i, n)
    }
    w.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                var i = m(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) It(i, e[i], t, r);
        return n.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Mt.test(this.nodeName) && !Nt.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var i = w(this).val();
                return null == i ? null : Array.isArray(i) ? w.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        At = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        $t = {},
        jt = {},
        Bt = "*/".concat("*"),
        Ht = n.createElement("a");

    function Rt(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                s = t.toLowerCase().match(z) || [];
            if (m(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function qt(e, t, i, n) {
        var r = {},
            s = e === jt;

        function a(o) {
            var l;
            return r[o] = !0, w.each(e[o] || [], function(e, o) {
                var c = o(t, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Wt(e, t) {
        var i, n, r = w.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && w.extend(!0, e, n), e
    }
    Ht.href = Et.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
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
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Rt($t),
        ajaxTransport: Rt(jt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, s, a, o, l, c, d, u, h, p, f = w.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                v = w.Deferred(),
                b = w.Callbacks("once memory"),
                y = f.statusCode || {},
                _ = {},
                x = {},
                E = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!o)
                                for (o = {}; t = Pt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return d ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == d && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (d) C.always(e[C.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return r && r.abort(t), T(0, t), this
                    }
                };
            if (v.promise(C), f.url = ((t || f.url || Et.href) + "").replace(Ot, Et.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""], null == f.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), qt($t, f, i, C), d) return C;
            for (h in (u = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !zt.test(f.type), s = f.url.replace(At, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Dt, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (Tt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Lt, "$1"), p = (Tt.test(s) ? "&" : "?") + "_=" + Ct++ + p), f.url = s + p), f.ifModified && (w.lastModified[s] && C.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && C.setRequestHeader("If-None-Match", w.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || d)) return C.abort();
            if (E = "abort", b.add(f.complete), C.done(f.success), C.fail(f.error), r = qt(jt, f, i, C)) {
                if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), d) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    d = !1, r.send(_, T)
                } catch (e) {
                    if (d) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(t, i, n, o) {
                var c, h, p, _, x, E = i;
                d || (d = !0, l && e.clearTimeout(l), r = void 0, a = o || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (_ = function(e, t, i) {
                    for (var n, r, s, a, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in o)
                            if (o[r] && o[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            a || (a = r)
                        }
                        s = s || a
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(f, C, n)), _ = function(e, t, i, n) {
                    var r, s, a, o, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(a = c[l + " " + s] || c["* " + s]))
                            for (r in c)
                                if ((o = r.split(" "))[1] === s && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (s = o[0], d.unshift(o[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, _, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (w.etag[s] = x)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = _.state, h = _.data, c = !(p = _.error))) : (p = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || E) + "", c ? v.resolveWith(m, [h, E, C]) : v.rejectWith(m, [C, E, p]), C.statusCode(y), y = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? h : p]), b.fireWith(m, [C, E]), u && (g.trigger("ajaxComplete", [C, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, i) {
            return w.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, i, n, r) {
            return m(i) && (r = r || n, n = i, i = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e, t) {
        return w.ajax({
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
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return m(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = m(e);
            return this.each(function(i) {
                w(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Ut = w.ajaxSettings.xhr();
    f.cors = !!Ut && "withCredentials" in Ut, f.ajax = Ut = !!Ut, w.ajaxTransport(function(t) {
        var i, n;
        if (f.cors || Ut && !t.crossDomain) return {
            send: function(r, s) {
                var a, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) o[a] = t.xhrFields[a];
                for (a in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(a, r[a]);
                i = function(e) {
                    return function() {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Ft[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, s) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Xt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || w.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, s, a, o = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || w.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === s ? w(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, Xt.push(r)), a && m(s) && s(a[0]), a = s = void 0
        }), "script"
    }), f.createHTMLDocument = ((Vt = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), w.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), a = !i && [], (s = N.exec(e)) ? [t.createElement(s[1])] : (s = _e([e], t, a), a && a.length && w(a).remove(), w.merge([], s.childNodes)));
        var r, s, a
    }, w.fn.load = function(e, t, i) {
        var n, r, s, a = this,
            o = e.indexOf(" ");
        return o > -1 && (n = vt(e.slice(o)), e = e.slice(0, o)), m(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, a.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            a.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, i) {
            var n, r, s, a, o, l, c = w.css(e, "position"),
                d = w(e),
                u = {};
            "static" === c && (e.style.position = "relative"), o = d.offset(), s = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (a = (n = d.position()).top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, i, w.extend({}, o))), null != t.top && (u.top = t.top - o.top + a), null != t.left && (u.left = t.left - o.left + r), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(n, "marginTop", !0),
                    left: t.left - r.left - w.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ne
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        w.fn[e] = function(n) {
            return q(this, function(e, n, r) {
                var s;
                if (g(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[n];
                s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : e[n] = r
            }, e, n, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Ue(f.pixelPosition, function(e, i) {
            if (i) return i = Fe(e, t), Re.test(i) ? w(e).position()[t] + "px" : i
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            w.fn[n] = function(r, s) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    o = i || (!0 === r || !0 === s ? "margin" : "border");
                return q(this, function(t, i, r) {
                    var s;
                    return g(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? w.css(t, i, o) : w.style(t, i, r, o)
                }, t, a ? r : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), w.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = s.call(arguments, 2), (r = function() {
            return e.apply(t || this, n.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, r
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = m, w.isWindow = g, w.camelCase = V, w.type = y, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Gt = e.jQuery,
        Qt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Gt), w
    }, t || (e.jQuery = e.$ = w), w
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))), n.forEach(function(t) {
                var n, r, s;
                n = e, s = i[r = t], r in n ? Object.defineProperty(n, r, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = s
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var a = "transitionend";
    var o = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var i = e.getAttribute("href");
                t = i && "#" !== i ? i.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var i = t(e).css("transition-duration"),
                n = t(e).css("transition-delay"),
                r = parseFloat(i),
                s = parseFloat(n);
            return r || s ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(a)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, i) {
            for (var n in i)
                if (Object.prototype.hasOwnProperty.call(i, n)) {
                    var r = i[n],
                        s = t[n],
                        a = s && o.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? o.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function(e) {
        var i = this,
            n = !1;
        return t(this).one(o.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || o.triggerTransitionEnd(i)
        }, e), this
    }, t.event.special[o.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert",
        c = "bs.alert",
        d = "." + c,
        u = t.fn[l],
        h = {
            CLOSE: "close" + d,
            CLOSED: "closed" + d,
            CLICK_DATA_API: "click" + d + ".data-api"
        },
        p = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, i.dispose = function() {
                t.removeData(this._element, c), this._element = null
            }, i._getRootElement = function(e) {
                var i = o.getSelectorFromElement(e),
                    n = !1;
                return i && (n = document.querySelector(i)), n || (n = t(e).closest(".alert")[0]), n
            }, i._triggerCloseEvent = function(e) {
                var i = t.Event(h.CLOSE);
                return t(e).trigger(i), i
            }, i._removeElement = function(e) {
                var i = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var n = o.getTransitionDurationFromElement(e);
                    t(e).one(o.TRANSITION_END, function(t) {
                        return i._destroyElement(e, t)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, i._destroyElement = function(e) {
                t(e).detach().trigger(h.CLOSED).remove()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data(c);
                    r || (r = new e(this), n.data(c, r)), "close" === i && r[i](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), t.fn[l] = p._jQueryInterface, t.fn[l].Constructor = p, t.fn[l].noConflict = function() {
        return t.fn[l] = u, p._jQueryInterface
    };
    var f = "button",
        m = "bs.button",
        g = "." + m,
        v = ".data-api",
        b = t.fn[f],
        y = "active",
        w = '[data-toggle^="button"]',
        _ = ".btn",
        x = {
            CLICK_DATA_API: "click" + g + v,
            FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.toggle = function() {
                var e = !0,
                    i = !0,
                    n = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(y)) e = !1;
                            else {
                                var s = n.querySelector(".active");
                                s && t(s).removeClass(y)
                            }
                        if (e) {
                            if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            r.checked = !this._element.classList.contains(y), t(r).trigger("change")
                        }
                        r.focus(), i = !1
                    }
                }
                i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && t(this._element).toggleClass(y)
            }, i.dispose = function() {
                t.removeData(this._element, m), this._element = null
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(m);
                    n || (n = new e(this), t(this).data(m, n)), "toggle" === i && n[i]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(x.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var i = e.target;
        t(i).hasClass("btn") || (i = t(i).closest(_)), E._jQueryInterface.call(t(i), "toggle")
    }).on(x.FOCUS_BLUR_DATA_API, w, function(e) {
        var i = t(e.target).closest(_)[0];
        t(i).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[f] = E._jQueryInterface, t.fn[f].Constructor = E, t.fn[f].noConflict = function() {
        return t.fn[f] = b, E._jQueryInterface
    };
    var C = "carousel",
        T = "bs.carousel",
        S = "." + T,
        k = ".data-api",
        N = t.fn[C],
        M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        I = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        D = "next",
        A = "prev",
        L = {
            SLIDE: "slide" + S,
            SLID: "slid" + S,
            KEYDOWN: "keydown" + S,
            MOUSEENTER: "mouseenter" + S,
            MOUSELEAVE: "mouseleave" + S,
            TOUCHSTART: "touchstart" + S,
            TOUCHMOVE: "touchmove" + S,
            TOUCHEND: "touchend" + S,
            POINTERDOWN: "pointerdown" + S,
            POINTERUP: "pointerup" + S,
            DRAG_START: "dragstart" + S,
            LOAD_DATA_API: "load" + S + k,
            CLICK_DATA_API: "click" + S + k
        },
        P = "active",
        z = ".active.carousel-item",
        O = ".carousel-indicators",
        $ = {
            TOUCH: "touch",
            PEN: "pen"
        },
        j = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(O), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var i = e.prototype;
            return i.next = function() {
                this._isSliding || this._slide(D)
            }, i.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, i.prev = function() {
                this._isSliding || this._slide(A)
            }, i.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, i.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, i.to = function(e) {
                var i = this;
                this._activeElement = this._element.querySelector(z);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(L.SLID, function() {
                        return i.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var r = n < e ? D : A;
                        this._slide(r, this._items[e])
                    }
            }, i.dispose = function() {
                t(this._element).off(S), t.removeData(this._element, T), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, i._getConfig = function(e) {
                return e = s({}, M, e), o.typeCheckConfig(C, e, I), e
            }, i._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, i._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(L.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(L.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(L.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, i._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var i = function(t) {
                            e._pointerEvent && $[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function(t) {
                            e._pointerEvent && $[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(L.POINTERDOWN, function(e) {
                        return i(e)
                    }), t(this._element).on(L.POINTERUP, function(e) {
                        return n(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(L.TOUCHSTART, function(e) {
                        return i(e)
                    }), t(this._element).on(L.TOUCHMOVE, function(t) {
                        var i;
                        (i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = i.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(L.TOUCHEND, function(e) {
                        return n(e)
                    }))
                }
            }, i._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, i._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, i._getItemByDirection = function(e, t) {
                var i = e === D,
                    n = e === A,
                    r = this._getItemIndex(t),
                    s = this._items.length - 1;
                if ((n && 0 === r || i && r === s) && !this._config.wrap) return t;
                var a = (r + (e === A ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, i._triggerSlideEvent = function(e, i) {
                var n = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(z)),
                    s = t.Event(L.SLIDE, {
                        relatedTarget: e,
                        direction: i,
                        from: r,
                        to: n
                    });
                return t(this._element).trigger(s), s
            }, i._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var i = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(i).removeClass(P);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(P)
                }
            }, i._slide = function(e, i) {
                var n, r, s, a = this,
                    l = this._element.querySelector(z),
                    c = this._getItemIndex(l),
                    d = i || l && this._getItemByDirection(e, l),
                    u = this._getItemIndex(d),
                    h = Boolean(this._interval);
                if (s = e === D ? (n = "carousel-item-left", r = "carousel-item-next", "left") : (n = "carousel-item-right", r = "carousel-item-prev", "right"), d && t(d).hasClass(P)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(d, s).isDefaultPrevented() && l && d) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(d);
                    var p = t.Event(L.SLID, {
                        relatedTarget: d,
                        direction: s,
                        from: c,
                        to: u
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(d).addClass(r), o.reflow(d), t(l).addClass(n), t(d).addClass(n);
                        var f = parseInt(d.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var m = o.getTransitionDurationFromElement(l);
                        t(l).one(o.TRANSITION_END, function() {
                            t(d).removeClass(n + " " + r).addClass(P), t(l).removeClass(P + " " + r + " " + n), a._isSliding = !1, setTimeout(function() {
                                return t(a._element).trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(m)
                    } else t(l).removeClass(P), t(d).addClass(P), this._isSliding = !1, t(this._element).trigger(p);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(T),
                        r = s({}, M, t(this).data());
                    "object" == typeof i && (r = s({}, r, i));
                    var a = "string" == typeof i ? i : r.slide;
                    if (n || (n = new e(this, r), t(this).data(T, n)), "number" == typeof i) n.to(i);
                    else if ("string" == typeof a) {
                        if (void 0 === n[a]) throw new TypeError('No method named "' + a + '"');
                        n[a]()
                    } else r.interval && r.ride && (n.pause(), n.cycle())
                })
            }, e._dataApiClickHandler = function(i) {
                var n = o.getSelectorFromElement(this);
                if (n) {
                    var r = t(n)[0];
                    if (r && t(r).hasClass("carousel")) {
                        var a = s({}, t(r).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), e._jQueryInterface.call(t(r), a), l && t(r).data(T).to(l), i.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return M
                }
            }]), e
        }();
    t(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", j._dataApiClickHandler), t(window).on(L.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), i = 0, n = e.length; i < n; i++) {
            var r = t(e[i]);
            j._jQueryInterface.call(r, r.data())
        }
    }), t.fn[C] = j._jQueryInterface, t.fn[C].Constructor = j, t.fn[C].noConflict = function() {
        return t.fn[C] = N, j._jQueryInterface
    };
    var B = "collapse",
        H = "bs.collapse",
        R = "." + H,
        q = t.fn[B],
        W = {
            toggle: !0,
            parent: ""
        },
        F = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        U = {
            SHOW: "show" + R,
            SHOWN: "shown" + R,
            HIDE: "hide" + R,
            HIDDEN: "hidden" + R,
            CLICK_DATA_API: "click" + R + ".data-api"
        },
        V = "show",
        X = "collapse",
        Y = "collapsing",
        G = "collapsed",
        Q = '[data-toggle="collapse"]',
        K = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(Q)), n = 0, r = i.length; n < r; n++) {
                    var s = i[n],
                        a = o.getSelectorFromElement(s),
                        l = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && 0 < l.length && (this._selector = a, this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var i = e.prototype;
            return i.toggle = function() {
                t(this._element).hasClass(V) ? this.hide() : this.show()
            }, i.show = function() {
                var i, n, r = this;
                if (!(this._isTransitioning || t(this._element).hasClass(V) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(X)
                    })).length && (i = null), i && (n = t(i).not(this._selector).data(H)) && n._isTransitioning))) {
                    var s = t.Event(U.SHOW);
                    if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                        i && (e._jQueryInterface.call(t(i).not(this._selector), "hide"), n || t(i).data(H, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(X).addClass(Y), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(G).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            c = o.getTransitionDurationFromElement(this._element);
                        t(this._element).one(o.TRANSITION_END, function() {
                            t(r._element).removeClass(Y).addClass(X).addClass(V), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(U.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[a] = this._element[l] + "px"
                    }
                }
            }, i.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(V)) {
                    var i = t.Event(U.HIDE);
                    if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", o.reflow(this._element), t(this._element).addClass(Y).removeClass(X).removeClass(V);
                        var r = this._triggerArray.length;
                        if (0 < r)
                            for (var s = 0; s < r; s++) {
                                var a = this._triggerArray[s],
                                    l = o.getSelectorFromElement(a);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(V) || t(a).addClass(G).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var c = o.getTransitionDurationFromElement(this._element);
                        t(this._element).one(o.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(Y).addClass(X).trigger(U.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, i.setTransitioning = function(e) {
                this._isTransitioning = e
            }, i.dispose = function() {
                t.removeData(this._element, H), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, i._getConfig = function(e) {
                return (e = s({}, W, e)).toggle = Boolean(e.toggle), o.typeCheckConfig(B, e, F), e
            }, i._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, i._getParent = function() {
                var i, n = this;
                o.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    s = [].slice.call(i.querySelectorAll(r));
                return t(s).each(function(t, i) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                }), i
            }, i._addAriaAndCollapsedClass = function(e, i) {
                var n = t(e).hasClass(V);
                i.length && t(i).toggleClass(G, !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function(e) {
                var t = o.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data(H),
                        a = s({}, W, n.data(), "object" == typeof i && i ? i : {});
                    if (!r && a.toggle && /show|hide/.test(i) && (a.toggle = !1), r || (r = new e(this, a), n.data(H, r)), "string" == typeof i) {
                        if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return W
                }
            }]), e
        }();
    t(document).on(U.CLICK_DATA_API, Q, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = t(this),
            n = o.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(n));
        t(r).each(function() {
            var e = t(this),
                n = e.data(H) ? "toggle" : i.data();
            K._jQueryInterface.call(e, n)
        })
    }), t.fn[B] = K._jQueryInterface, t.fn[B].Constructor = K, t.fn[B].noConflict = function() {
        return t.fn[B] = q, K._jQueryInterface
    };
    var Z = "dropdown",
        J = "bs.dropdown",
        ee = "." + J,
        te = ".data-api",
        ie = t.fn[Z],
        ne = new RegExp("38|40|27"),
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            CLICK: "click" + ee,
            CLICK_DATA_API: "click" + ee + te,
            KEYDOWN_DATA_API: "keydown" + ee + te,
            KEYUP_DATA_API: "keyup" + ee + te
        },
        se = "disabled",
        ae = "show",
        oe = "dropdown-menu-right",
        le = '[data-toggle="dropdown"]',
        ce = ".dropdown-menu",
        de = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        ue = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        he = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var n = e.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(se)) {
                    var n = e._getParentFromElement(this._element),
                        r = t(this._menu).hasClass(ae);
                    if (e._clearMenus(), !r) {
                        var s = {
                                relatedTarget: this._element
                            },
                            a = t.Event(re.SHOW, s);
                        if (t(n).trigger(a), !a.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = n : o.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass("position-static"), this._popper = new i(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(n).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(ae), t(n).toggleClass(ae).trigger(t.Event(re.SHOWN, s))
                        }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(se) || t(this._menu).hasClass(ae))) {
                    var i = {
                            relatedTarget: this._element
                        },
                        n = t.Event(re.SHOW, i),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(ae), t(r).toggleClass(ae).trigger(t.Event(re.SHOWN, i)))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(se) && t(this._menu).hasClass(ae)) {
                    var i = {
                            relatedTarget: this._element
                        },
                        n = t.Event(re.HIDE, i),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(ae), t(r).toggleClass(ae).trigger(t.Event(re.HIDDEN, i)))
                }
            }, n.dispose = function() {
                t.removeData(this._element, J), t(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var e = this;
                t(this._element).on(re.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, n._getConfig = function(e) {
                return e = s({}, this.constructor.Default, t(this._element).data(), e), o.typeCheckConfig(Z, e, this.constructor.DefaultType), e
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(ce))
                }
                return this._menu
            }, n._getPlacement = function() {
                var e = t(this._element.parentNode),
                    i = "bottom-start";
                return e.hasClass("dropup") ? (i = "top-start", t(this._menu).hasClass(oe) && (i = "top-end")) : e.hasClass("dropright") ? i = "right-start" : e.hasClass("dropleft") ? i = "left-start" : t(this._menu).hasClass(oe) && (i = "bottom-end"), i
            }, n._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, n._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(J);
                    if (n || (n = new e(this, "object" == typeof i ? i : null), t(this).data(J, n)), "string" == typeof i) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, e._clearMenus = function(i) {
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var n = [].slice.call(document.querySelectorAll(le)), r = 0, s = n.length; r < s; r++) {
                        var a = e._getParentFromElement(n[r]),
                            o = t(n[r]).data(J),
                            l = {
                                relatedTarget: n[r]
                            };
                        if (i && "click" === i.type && (l.clickEvent = i), o) {
                            var c = o._menu;
                            if (t(a).hasClass(ae) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(a, i.target))) {
                                var d = t.Event(re.HIDE, l);
                                t(a).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(c).removeClass(ae), t(a).removeClass(ae).trigger(t.Event(re.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, i = o.getSelectorFromElement(e);
                return i && (t = document.querySelector(i)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(i) {
                if ((/input|textarea/i.test(i.target.tagName) ? !(32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(ce).length)) : ne.test(i.which)) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(se))) {
                    var n = e._getParentFromElement(this),
                        r = t(n).hasClass(ae);
                    if (r && (!r || 27 !== i.which && 32 !== i.which)) {
                        var s = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== s.length) {
                            var a = s.indexOf(i.target);
                            38 === i.which && 0 < a && a--, 40 === i.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                        }
                    } else {
                        if (27 === i.which) {
                            var o = n.querySelector(le);
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return de
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ue
                }
            }]), e
        }();
    t(document).on(re.KEYDOWN_DATA_API, le, he._dataApiKeydownHandler).on(re.KEYDOWN_DATA_API, ce, he._dataApiKeydownHandler).on(re.CLICK_DATA_API + " " + re.KEYUP_DATA_API, he._clearMenus).on(re.CLICK_DATA_API, le, function(e) {
        e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(t(this), "toggle")
    }).on(re.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[Z] = he._jQueryInterface, t.fn[Z].Constructor = he, t.fn[Z].noConflict = function() {
        return t.fn[Z] = ie, he._jQueryInterface
    };
    var pe = "modal",
        fe = "bs.modal",
        me = "." + fe,
        ge = t.fn[pe],
        ve = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        be = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        ye = {
            HIDE: "hide" + me,
            HIDDEN: "hidden" + me,
            SHOW: "show" + me,
            SHOWN: "shown" + me,
            FOCUSIN: "focusin" + me,
            RESIZE: "resize" + me,
            CLICK_DISMISS: "click.dismiss" + me,
            KEYDOWN_DISMISS: "keydown.dismiss" + me,
            MOUSEUP_DISMISS: "mouseup.dismiss" + me,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + me,
            CLICK_DATA_API: "click" + me + ".data-api"
        },
        we = "modal-open",
        _e = "fade",
        xe = "show",
        Ee = ".modal-dialog",
        Ce = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Te = ".sticky-top",
        Se = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Ee), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var i = e.prototype;
            return i.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, i.show = function(e) {
                var i = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(_e) && (this._isTransitioning = !0);
                    var n = t.Event(ye.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(ye.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return i.hide(e)
                    }), t(this._dialog).on(ye.MOUSEDOWN_DISMISS, function() {
                        t(i._element).one(ye.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return i._showElement(e)
                    }))
                }
            }, i.hide = function(e) {
                var i = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = t.Event(ye.HIDE);
                    if (t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(_e);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ye.FOCUSIN), t(this._element).removeClass(xe), t(this._element).off(ye.CLICK_DISMISS), t(this._dialog).off(ye.MOUSEDOWN_DISMISS), r) {
                            var s = o.getTransitionDurationFromElement(this._element);
                            t(this._element).one(o.TRANSITION_END, function(e) {
                                return i._hideModal(e)
                            }).emulateTransitionEnd(s)
                        } else this._hideModal()
                    }
                }
            }, i.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(me)
                }), t(document).off(ye.FOCUSIN), t.removeData(this._element, fe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, i.handleUpdate = function() {
                this._adjustDialog()
            }, i._getConfig = function(e) {
                return e = s({}, ve, e), o.typeCheckConfig(pe, e, be), e
            }, i._showElement = function(e) {
                var i = this,
                    n = t(this._element).hasClass(_e);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && o.reflow(this._element), t(this._element).addClass(xe), this._config.focus && this._enforceFocus();
                var r = t.Event(ye.SHOWN, {
                        relatedTarget: e
                    }),
                    s = function() {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(r)
                    };
                if (n) {
                    var a = o.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(o.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, i._enforceFocus = function() {
                var e = this;
                t(document).off(ye.FOCUSIN).on(ye.FOCUSIN, function(i) {
                    document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus()
                })
            }, i._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(ye.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(ye.KEYDOWN_DISMISS)
            }, i._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(ye.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(ye.RESIZE)
            }, i._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(we), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(ye.HIDDEN)
                })
            }, i._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, i._showBackdrop = function(e) {
                var i = this,
                    n = t(this._element).hasClass(_e) ? _e : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), t(this._backdrop).appendTo(document.body), t(this._element).on(ye.CLICK_DISMISS, function(e) {
                            i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                        }), n && o.reflow(this._backdrop), t(this._backdrop).addClass(xe), !e) return;
                    if (!n) return void e();
                    var r = o.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(xe);
                    var s = function() {
                        i._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(_e)) {
                        var a = o.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(o.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                } else e && e()
            }, i._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, i._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, i._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, i._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var i = [].slice.call(document.querySelectorAll(Ce)),
                        n = [].slice.call(document.querySelectorAll(Te));
                    t(i).each(function(i, n) {
                        var r = n.style.paddingRight,
                            s = t(n).css("padding-right");
                        t(n).data("padding-right", r).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
                    }), t(n).each(function(i, n) {
                        var r = n.style.marginRight,
                            s = t(n).css("margin-right");
                        t(n).data("margin-right", r).css("margin-right", parseFloat(s) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        s = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(we)
            }, i._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(Ce));
                t(e).each(function(e, i) {
                    var n = t(i).data("padding-right");
                    t(i).removeData("padding-right"), i.style.paddingRight = n || ""
                });
                var i = [].slice.call(document.querySelectorAll("" + Te));
                t(i).each(function(e, i) {
                    var n = t(i).data("margin-right");
                    void 0 !== n && t(i).css("margin-right", n).removeData("margin-right")
                });
                var n = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, i._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var r = t(this).data(fe),
                        a = s({}, ve, t(this).data(), "object" == typeof i && i ? i : {});
                    if (r || (r = new e(this, a), t(this).data(fe, r)), "string" == typeof i) {
                        if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i](n)
                    } else a.show && r.show(n)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ve
                }
            }]), e
        }();
    t(document).on(ye.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var i, n = this,
            r = o.getSelectorFromElement(this);
        r && (i = document.querySelector(r));
        var a = t(i).data(fe) ? "toggle" : s({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(i).one(ye.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(ye.HIDDEN, function() {
                t(n).is(":visible") && n.focus()
            })
        });
        Se._jQueryInterface.call(t(i), a, this)
    }), t.fn[pe] = Se._jQueryInterface, t.fn[pe].Constructor = Se, t.fn[pe].noConflict = function() {
        return t.fn[pe] = ge, Se._jQueryInterface
    };
    var ke = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function Ie(e, t, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), s = [].slice.call(n.body.querySelectorAll("*")), a = function(e, i) {
                var n = s[e],
                    a = n.nodeName.toLowerCase();
                if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var o = [].slice.call(n.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                o.forEach(function(e) {
                    (function(e, t) {
                        var i = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === ke.indexOf(i) || Boolean(e.nodeValue.match(Ne) || e.nodeValue.match(Me));
                        for (var n = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, s = n.length; r < s; r++)
                            if (i.match(n[r])) return !0;
                        return !1
                    })(e, l) || n.removeAttribute(e.nodeName)
                })
            }, o = 0, l = s.length; o < l; o++) a(o);
        return n.body.innerHTML
    }
    var De = "tooltip",
        Ae = "bs.tooltip",
        Le = "." + Ae,
        Pe = t.fn[De],
        ze = "bs-tooltip",
        Oe = new RegExp("(^|\\s)" + ze + "\\S+", "g"),
        $e = ["sanitize", "whiteList", "sanitizeFn"],
        je = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Be = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        He = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Re = "show",
        qe = {
            HIDE: "hide" + Le,
            HIDDEN: "hidden" + Le,
            SHOW: "show" + Le,
            SHOWN: "shown" + Le,
            INSERTED: "inserted" + Le,
            CLICK: "click" + Le,
            FOCUSIN: "focusin" + Le,
            FOCUSOUT: "focusout" + Le,
            MOUSEENTER: "mouseenter" + Le,
            MOUSELEAVE: "mouseleave" + Le
        },
        We = "fade",
        Fe = "show",
        Ue = "hover",
        Ve = "focus",
        Xe = function() {
            function e(e, t) {
                if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var n = e.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var i = this.constructor.DATA_KEY,
                            n = t(e.currentTarget).data(i);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (t(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(n);
                    var r = o.findShadowRoot(this.element),
                        s = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !s) return;
                    var a = this.getTipElement(),
                        l = o.getUID(this.constructor.NAME);
                    a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(a).addClass(We);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        d = this._getAttachment(c);
                    this.addAttachmentClass(d);
                    var u = this._getContainer();
                    t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, a, {
                        placement: d,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(a).addClass(Fe), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var i = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === i && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(We)) {
                        var p = o.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(o.TRANSITION_END, h).emulateTransitionEnd(p)
                    } else h()
                }
            }, n.hide = function(e) {
                var i = this,
                    n = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    s = function() {
                        i._hoverState !== Re && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (t(n).removeClass(Fe), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Ue] = !1, t(this.tip).hasClass(We)) {
                        var a = o.getTransitionDurationFromElement(n);
                        t(n).one(o.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(ze + "-" + e)
            }, n.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(We + " " + Fe)
            }, n.setElementContent = function(e, i) {
                "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = Ie(i, this.config.whiteList, this.config.sanitizeFn)), e.html(i)) : e.text(i) : this.config.html ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text())
            }, n.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : o.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, n._getAttachment = function(e) {
                return Be[e.toUpperCase()]
            }, n._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(i) {
                    if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== i) {
                        var n = i === Ue ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = i === Ue ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(n, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? Ve : Ue] = !0), t(i.getTipElement()).hasClass(Fe) || i._hoverState === Re ? i._hoverState = Re : (clearTimeout(i._timeout), i._hoverState = Re, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                    i._hoverState === Re && i.show()
                }, i.config.delay.show) : i.show())
            }, n._leave = function(e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? Ve : Ue] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = "out", i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                    "out" === i._hoverState && i.hide()
                }, i.config.delay.hide) : i.hide())
            }, n._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, n._getConfig = function(e) {
                var i = t(this.element).data();
                return Object.keys(i).forEach(function(e) {
                    -1 !== $e.indexOf(e) && delete i[e]
                }), "number" == typeof(e = s({}, this.constructor.Default, i, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), o.typeCheckConfig(De, e, this.constructor.DefaultType), e.sanitize && (e.template = Ie(e.template, e.whiteList, e.sanitizeFn)), e
            }, n._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, n._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    i = e.attr("class").match(Oe);
                null !== i && i.length && e.removeClass(i.join(""))
            }, n._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, n._fixTransition = function() {
                var e = this.getTipElement(),
                    i = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(We), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(Ae),
                        r = "object" == typeof i && i;
                    if ((n || !/dispose|hide/.test(i)) && (n || (n = new e(this, r), t(this).data(Ae, n)), "string" == typeof i)) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return He
                }
            }, {
                key: "NAME",
                get: function() {
                    return De
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ae
                }
            }, {
                key: "Event",
                get: function() {
                    return qe
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Le
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return je
                }
            }]), e
        }();
    t.fn[De] = Xe._jQueryInterface, t.fn[De].Constructor = Xe, t.fn[De].noConflict = function() {
        return t.fn[De] = Pe, Xe._jQueryInterface
    };
    var Ye = "popover",
        Ge = "bs.popover",
        Qe = "." + Ge,
        Ke = t.fn[Ye],
        Ze = "bs-popover",
        Je = new RegExp("(^|\\s)" + Ze + "\\S+", "g"),
        et = s({}, Xe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        tt = s({}, Xe.DefaultType, {
            content: "(string|element|function)"
        }),
        it = {
            HIDE: "hide" + Qe,
            HIDDEN: "hidden" + Qe,
            SHOW: "show" + Qe,
            SHOWN: "shown" + Qe,
            INSERTED: "inserted" + Qe,
            CLICK: "click" + Qe,
            FOCUSIN: "focusin" + Qe,
            FOCUSOUT: "focusout" + Qe,
            MOUSEENTER: "mouseenter" + Qe,
            MOUSELEAVE: "mouseleave" + Qe
        },
        nt = function(e) {
            var i, n;

            function s() {
                return e.apply(this, arguments) || this
            }
            n = e, (i = s).prototype = Object.create(n.prototype), (i.prototype.constructor = i).__proto__ = n;
            var a = s.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Ze + "-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(".popover-body"), i), e.removeClass("fade show")
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    i = e.attr("class").match(Je);
                null !== i && 0 < i.length && e.removeClass(i.join(""))
            }, s._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(Ge),
                        n = "object" == typeof e ? e : null;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new s(this, n), t(this).data(Ge, i)), "string" == typeof e)) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, r(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return et
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ye
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ge
                }
            }, {
                key: "Event",
                get: function() {
                    return it
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return tt
                }
            }]), s
        }(Xe);
    t.fn[Ye] = nt._jQueryInterface, t.fn[Ye].Constructor = nt, t.fn[Ye].noConflict = function() {
        return t.fn[Ye] = Ke, nt._jQueryInterface
    };
    var rt = "scrollspy",
        st = "bs.scrollspy",
        at = "." + st,
        ot = t.fn[rt],
        lt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ct = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        dt = {
            ACTIVATE: "activate" + at,
            SCROLL: "scroll" + at,
            LOAD_DATA_API: "load" + at + ".data-api"
        },
        ut = "active",
        ht = ".nav, .list-group",
        pt = ".nav-link",
        ft = ".list-group-item",
        mt = ".dropdown-item",
        gt = "position",
        vt = function() {
            function e(e, i) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + pt + "," + this._config.target + " " + ft + "," + this._config.target + " " + mt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(dt.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var i = e.prototype;
            return i.refresh = function() {
                var e = this,
                    i = this._scrollElement === this._scrollElement.window ? "offset" : gt,
                    n = "auto" === this._config.method ? i : this._config.method,
                    r = n === gt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var i, s = o.getSelectorFromElement(e);
                    if (s && (i = document.querySelector(s)), i) {
                        var a = i.getBoundingClientRect();
                        if (a.width || a.height) return [t(i)[n]().top + r, s]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, i.dispose = function() {
                t.removeData(this._element, st), t(this._scrollElement).off(at), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, i._getConfig = function(e) {
                if ("string" != typeof(e = s({}, lt, "object" == typeof e && e ? e : {})).target) {
                    var i = t(e.target).attr("id");
                    i || (i = o.getUID(rt), t(e.target).attr("id", i)), e.target = "#" + i
                }
                return o.typeCheckConfig(rt, e, ct), e
            }, i._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, i._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, i._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, i._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), i <= e) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, i._activate = function(e) {
                this._activeTarget = e, this._clear();
                var i = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = t([].slice.call(document.querySelectorAll(i.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ut), n.addClass(ut)) : (n.addClass(ut), n.parents(ht).prev(pt + ", " + ft).addClass(ut), n.parents(ht).prev(".nav-item").children(pt).addClass(ut)), t(this._scrollElement).trigger(dt.ACTIVATE, {
                    relatedTarget: e
                })
            }, i._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(ut)
                }).forEach(function(e) {
                    return e.classList.remove(ut)
                })
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(st);
                    if (n || (n = new e(this, "object" == typeof i && i), t(this).data(st, n)), "string" == typeof i) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return lt
                }
            }]), e
        }();
    t(window).on(dt.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = e.length; i--;) {
            var n = t(e[i]);
            vt._jQueryInterface.call(n, n.data())
        }
    }), t.fn[rt] = vt._jQueryInterface, t.fn[rt].Constructor = vt, t.fn[rt].noConflict = function() {
        return t.fn[rt] = ot, vt._jQueryInterface
    };
    var bt = "bs.tab",
        yt = "." + bt,
        wt = t.fn.tab,
        _t = {
            HIDE: "hide" + yt,
            HIDDEN: "hidden" + yt,
            SHOW: "show" + yt,
            SHOWN: "shown" + yt,
            CLICK_DATA_API: "click" + yt + ".data-api"
        },
        xt = "active",
        Et = ".active",
        Ct = "> li > .active",
        Tt = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(xt) || t(this._element).hasClass("disabled"))) {
                    var i, n, r = t(this._element).closest(".nav, .list-group")[0],
                        s = o.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? Ct : Et;
                        n = (n = t.makeArray(t(r).find(a)))[n.length - 1]
                    }
                    var l = t.Event(_t.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(_t.SHOW, {
                            relatedTarget: n
                        });
                    if (n && t(n).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        s && (i = document.querySelector(s)), this._activate(this._element, r);
                        var d = function() {
                            var i = t.Event(_t.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = t.Event(_t.SHOWN, {
                                    relatedTarget: n
                                });
                            t(n).trigger(i), t(e._element).trigger(r)
                        };
                        i ? this._activate(i, i.parentNode, d) : d()
                    }
                }
            }, i.dispose = function() {
                t.removeData(this._element, bt), this._element = null
            }, i._activate = function(e, i, n) {
                var r = this,
                    s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(Et) : t(i).find(Ct))[0],
                    a = n && s && t(s).hasClass("fade"),
                    l = function() {
                        return r._transitionComplete(e, s, n)
                    };
                if (s && a) {
                    var c = o.getTransitionDurationFromElement(s);
                    t(s).removeClass("show").one(o.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, i._transitionComplete = function(e, i, n) {
                if (i) {
                    t(i).removeClass(xt);
                    var r = t(i.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass(xt), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(xt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var s = t(e).closest(".dropdown")[0];
                    if (s) {
                        var a = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                        t(a).addClass(xt)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data(bt);
                    if (r || (r = new e(this), n.data(bt, r)), "string" == typeof i) {
                        if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(_t.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), Tt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = Tt._jQueryInterface, t.fn.tab.Constructor = Tt, t.fn.tab.noConflict = function() {
        return t.fn.tab = wt, Tt._jQueryInterface
    };
    var St = "toast",
        kt = "bs.toast",
        Nt = "." + kt,
        Mt = t.fn[St],
        It = {
            CLICK_DISMISS: "click.dismiss" + Nt,
            HIDE: "hide" + Nt,
            HIDDEN: "hidden" + Nt,
            SHOW: "show" + Nt,
            SHOWN: "shown" + Nt
        },
        Dt = "show",
        At = "showing",
        Lt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Pt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        zt = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var i = e.prototype;
            return i.show = function() {
                var e = this;
                t(this._element).trigger(It.SHOW), this._config.animation && this._element.classList.add("fade");
                var i = function() {
                    e._element.classList.remove(At), e._element.classList.add(Dt), t(e._element).trigger(It.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(At), this._config.animation) {
                    var n = o.getTransitionDurationFromElement(this._element);
                    t(this._element).one(o.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, i.hide = function(e) {
                var i = this;
                this._element.classList.contains(Dt) && (t(this._element).trigger(It.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    i._close()
                }, this._config.delay))
            }, i.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Dt) && this._element.classList.remove(Dt), t(this._element).off(It.CLICK_DISMISS), t.removeData(this._element, kt), this._element = null, this._config = null
            }, i._getConfig = function(e) {
                return e = s({}, Pt, t(this._element).data(), "object" == typeof e && e ? e : {}), o.typeCheckConfig(St, e, this.constructor.DefaultType), e
            }, i._setListeners = function() {
                var e = this;
                t(this._element).on(It.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide(!0)
                })
            }, i._close = function() {
                var e = this,
                    i = function() {
                        e._element.classList.add("hide"), t(e._element).trigger(It.HIDDEN)
                    };
                if (this._element.classList.remove(Dt), this._config.animation) {
                    var n = o.getTransitionDurationFromElement(this._element);
                    t(this._element).one(o.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data(kt);
                    if (r || (r = new e(this, "object" == typeof i && i), n.data(kt, r)), "string" == typeof i) {
                        if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Lt
                }
            }, {
                key: "Default",
                get: function() {
                    return Pt
                }
            }]), e
        }();
    t.fn[St] = zt._jQueryInterface, t.fn[St].Constructor = zt, t.fn[St].noConflict = function() {
            return t.fn[St] = Mt, zt._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = o, e.Alert = p, e.Button = E, e.Carousel = j, e.Collapse = K, e.Dropdown = he, e.Modal = Se, e.Popover = nt, e.Scrollspy = vt, e.Tab = Tt, e.Toast = zt, e.Tooltip = Xe, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, r) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
        },
        easeInQuad: function(e, t, i, n, r) {
            return n * (t /= r) * t + i
        },
        easeOutQuad: function(e, t, i, n, r) {
            return -n * (t /= r) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, n, r) {
            return n * (t /= r) * t * t + i
        },
        easeOutCubic: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, n, r) {
            return -n * ((t = t / r - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, n, r) {
            return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(e, t, i, n, r) {
            return n * Math.sin(t / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
        },
        easeInExpo: function(e, t, i, n, r) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
        },
        easeOutExpo: function(e, t, i, n, r) {
            return t == r ? i + n : n * (1 - Math.pow(2, -10 * t / r)) + i
        },
        easeInOutExpo: function(e, t, i, n, r) {
            return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function(e, t, i, n, r) {
            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, n, r) {
            return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, n, r) {
            var s = 1.70158,
                a = 0,
                o = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (a || (a = .3 * r), o < Math.abs(n)) {
                o = n;
                s = a / 4
            } else s = a / (2 * Math.PI) * Math.asin(n / o);
            return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a) + i
        },
        easeOutElastic: function(e, t, i, n, r) {
            var s = 1.70158,
                a = 0,
                o = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (a || (a = .3 * r), o < Math.abs(n)) {
                o = n;
                s = a / 4
            } else s = a / (2 * Math.PI) * Math.asin(n / o);
            return o * Math.pow(2, -10 * t) * Math.sin((t * r - s) * (2 * Math.PI) / a) + n + i
        },
        easeInOutElastic: function(e, t, i, n, r) {
            var s = 1.70158,
                a = 0,
                o = n;
            if (0 == t) return i;
            if (2 == (t /= r / 2)) return i + n;
            if (a || (a = r * (.3 * 1.5)), o < Math.abs(n)) {
                o = n;
                s = a / 4
            } else s = a / (2 * Math.PI) * Math.asin(n / o);
            return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a) * -.5 + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a) * .5 + n + i
        },
        easeInBack: function(e, t, i, n, r, s) {
            return null == s && (s = 1.70158), n * (t /= r) * t * ((s + 1) * t - s) + i
        },
        easeOutBack: function(e, t, i, n, r, s) {
            return null == s && (s = 1.70158), n * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + i
        },
        easeInOutBack: function(e, t, i, n, r, s) {
            return null == s && (s = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + i : n / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + i
        },
        easeInBounce: function(e, t, i, n, r) {
            return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
        },
        easeOutBounce: function(e, t, i, n, r) {
            return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(e, t, i, n, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
        }
    }),
    function(e, t, i, n) {
        "use strict";

        function r(t, i) {
            this.element = t, this.$elem = e(this.element), this.options = e.extend(o, i), this.init()
        }
        var s = "slimmenu",
            a = 0,
            o = {
                resizeWidth: "767",
                initiallyVisible: !1,
                collapserTitle: "",
                animSpeed: 0,
                easingEffect: null,
                indentChildren: !1,
                childrenIndenter: "&nbsp;&nbsp;",
                expandIcon: "<i>&#9660;</i>",
                collapseIcon: "<i>&#9650;</i>"
            };
        r.prototype = {
            init: function() {
                var i, n = e(t),
                    r = this.options,
                    s = this.$elem,
                    a = '<div class="menu-collapser">' + r.collapserTitle + '<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>';
                s.before(a), i = s.prev(".menu-collapser"), s.on("click", ".sub-toggle", function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var i = e(this).closest("li");
                    e(this).hasClass("expanded") ? (e(this).removeClass("expanded").html(r.expandIcon), i.find(">ul").slideUp(r.animSpeed, r.easingEffect)) : (e(this).addClass("expanded").html(r.collapseIcon), i.find(">ul").slideDown(r.animSpeed, r.easingEffect))
                }), i.on("click", ".collapse-button", function(e) {
                    e.preventDefault(), s.slideToggle(r.animSpeed, r.easingEffect)
                }), this.resizeMenu(), n.on("resize", this.resizeMenu.bind(this)), n.trigger("resize")
            },
            resizeMenu: function() {
                var i = this,
                    n = e(t).width(),
                    r = this.options,
                    s = e(this.element),
                    o = e("body").find(".menu-collapser");
                void 0 !== t.innerWidth && t.innerWidth > n && (n = t.innerWidth), n != a && (a = n, s.find("li").each(function() {
                    e(this).has("ul").length && (e(this).addClass("has-submenu").has(".sub-toggle").length ? e(this).children(".sub-toggle").html(r.expandIcon) : e(this).addClass("has-submenu").append('<span class="sub-toggle">' + r.expandIcon + "</span>")), e(this).children("ul").hide().end().find(".sub-toggle").removeClass("expanded").html(r.expandIcon)
                }), r.resizeWidth >= n ? (r.indentChildren && s.find("ul").each(function() {
                    var t = e(this).parents("ul").length;
                    e(this).children("li").children("a").has("i").length || e(this).children("li").children("a").prepend(i.indent(t, r))
                }), s.addClass("collapsed").find("li").has("ul").off("mouseenter mouseleave"), o.show(), r.initiallyVisible || s.hide()) : (s.find("li").has("ul").on("mouseenter", function() {
                    e(this).find(">ul").stop().slideDown(r.animSpeed, r.easingEffect)
                }).on("mouseleave", function() {
                    e(this).find(">ul").stop().slideUp(r.animSpeed, r.easingEffect)
                }), s.find("li > a > i").remove(), s.removeClass("collapsed").show(), o.hide()))
            },
            indent: function(e, t) {
                for (var i = 0, n = ""; e > i; i++) n += t.childrenIndenter;
                return "<i>" + n + "</i> "
            }
        }, e.fn[s] = function(t) {
            return this.each(function() {
                e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new r(this, t))
            })
        }
    }(jQuery, window, document),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t()
    }(this, function() {
        "use strict";
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = "Expected a function",
            i = NaN,
            n = "[object Symbol]",
            r = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            o = /^0o[0-7]+$/i,
            l = parseInt,
            c = "object" == typeof e && e && e.Object === Object && e,
            d = "object" == typeof self && self && self.Object === Object && self,
            u = c || d || Function("return this")(),
            h = Object.prototype.toString,
            p = Math.max,
            f = Math.min,
            m = function() {
                return u.Date.now()
            };

        function g(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function v(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && h.call(e) == n
                }(e)) return i;
            if (g(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = g(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, "");
            var c = a.test(e);
            return c || o.test(e) ? l(e.slice(2), c ? 2 : 8) : s.test(e) ? i : +e
        }
        var b = function(e, i, n) {
                var r = !0,
                    s = !0;
                if ("function" != typeof e) throw new TypeError(t);
                return g(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s),
                    function(e, i, n) {
                        var r, s, a, o, l, c, d = 0,
                            u = !1,
                            h = !1,
                            b = !0;
                        if ("function" != typeof e) throw new TypeError(t);

                        function y(t) {
                            var i = r,
                                n = s;
                            return r = s = void 0, d = t, o = e.apply(n, i)
                        }

                        function w(e) {
                            var t = e - c;
                            return void 0 === c || t >= i || t < 0 || h && e - d >= a
                        }

                        function _() {
                            var e = m();
                            if (w(e)) return x(e);
                            l = setTimeout(_, function(e) {
                                var t = i - (e - c);
                                return h ? f(t, a - (e - d)) : t
                            }(e))
                        }

                        function x(e) {
                            return l = void 0, b && r ? y(e) : (r = s = void 0, o)
                        }

                        function E() {
                            var e = m(),
                                t = w(e);
                            if (r = arguments, s = this, c = e, t) {
                                if (void 0 === l) return function(e) {
                                    return d = e, l = setTimeout(_, i), u ? y(e) : o
                                }(c);
                                if (h) return l = setTimeout(_, i), y(c)
                            }
                            return void 0 === l && (l = setTimeout(_, i)), o
                        }
                        return i = v(i) || 0, g(n) && (u = !!n.leading, a = (h = "maxWait" in n) ? p(v(n.maxWait) || 0, i) : a, b = "trailing" in n ? !!n.trailing : b), E.cancel = function() {
                            void 0 !== l && clearTimeout(l), d = 0, r = c = s = l = void 0
                        }, E.flush = function() {
                            return void 0 === l ? o : x(m())
                        }, E
                    }(e, i, {
                        leading: r,
                        maxWait: i,
                        trailing: s
                    })
            },
            y = NaN,
            w = "[object Symbol]",
            _ = /^\s+|\s+$/g,
            x = /^[-+]0x[0-9a-f]+$/i,
            E = /^0b[01]+$/i,
            C = /^0o[0-7]+$/i,
            T = parseInt,
            S = "object" == typeof e && e && e.Object === Object && e,
            k = "object" == typeof self && self && self.Object === Object && self,
            N = S || k || Function("return this")(),
            M = Object.prototype.toString,
            I = Math.max,
            D = Math.min,
            A = function() {
                return N.Date.now()
            };

        function L(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function P(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && M.call(e) == w
                }(e)) return y;
            if (L(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = L(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(_, "");
            var i = E.test(e);
            return i || C.test(e) ? T(e.slice(2), i ? 2 : 8) : x.test(e) ? y : +e
        }
        var z = function(e, t, i) {
                var n, r, s, a, o, l, c = 0,
                    d = !1,
                    u = !1,
                    h = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function p(t) {
                    var i = n,
                        s = r;
                    return n = r = void 0, c = t, a = e.apply(s, i)
                }

                function f(e) {
                    var i = e - l;
                    return void 0 === l || i >= t || i < 0 || u && e - c >= s
                }

                function m() {
                    var e = A();
                    if (f(e)) return g(e);
                    o = setTimeout(m, function(e) {
                        var i = t - (e - l);
                        return u ? D(i, s - (e - c)) : i
                    }(e))
                }

                function g(e) {
                    return o = void 0, h && n ? p(e) : (n = r = void 0, a)
                }

                function v() {
                    var e = A(),
                        i = f(e);
                    if (n = arguments, r = this, l = e, i) {
                        if (void 0 === o) return function(e) {
                            return c = e, o = setTimeout(m, t), d ? p(e) : a
                        }(l);
                        if (u) return o = setTimeout(m, t), p(l)
                    }
                    return void 0 === o && (o = setTimeout(m, t)), a
                }
                return t = P(t) || 0, L(i) && (d = !!i.leading, s = (u = "maxWait" in i) ? I(P(i.maxWait) || 0, t) : s, h = "trailing" in i ? !!i.trailing : h), v.cancel = function() {
                    void 0 !== o && clearTimeout(o), c = 0, n = l = r = o = void 0
                }, v.flush = function() {
                    return void 0 === o ? a : g(A())
                }, v
            },
            O = function() {};

        function $(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    i = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                        var i = void 0,
                            n = void 0;
                        for (i = 0; i < t.length; i += 1) {
                            if ((n = t[i]).dataset && n.dataset.aos) return !0;
                            if (n.children && e(n.children)) return !0
                        }
                        return !1
                    }(t.concat(i))) return O()
            })
        }

        function j() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }
        var B = function() {
                return !!j()
            },
            H = function(e, t) {
                var i = window.document,
                    n = new(j())($);
                O = t, n.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            },
            R = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            q = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            W = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            F = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            U = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            V = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            X = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

        function Y() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        var G = new(function() {
                function e() {
                    R(this, e)
                }
                return q(e, [{
                    key: "phone",
                    value: function() {
                        var e = Y();
                        return !(!F.test(e) && !U.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = Y();
                        return !(!V.test(e) && !X.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }, {
                    key: "ie11",
                    value: function() {
                        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
                    }
                }]), e
            }()),
            Q = function(e, t) {
                var i = void 0;
                return G.ie11() ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
                    detail: t
                }) : i = new CustomEvent(e, {
                    detail: t
                }), document.dispatchEvent(i)
            },
            K = function(e) {
                return e.forEach(function(e, t) {
                    return function(e, t) {
                        var i = e.options,
                            n = e.position,
                            r = e.node,
                            s = (e.data, function() {
                                e.animated && (function(e, t) {
                                    t && t.forEach(function(t) {
                                        return e.classList.remove(t)
                                    })
                                }(r, i.animatedClassNames), Q("aos:out", r), e.options.id && Q("aos:in:" + e.options.id, r), e.animated = !1)
                            });
                        i.mirror && t >= n.out && !i.once ? s() : t >= n.in ? e.animated || (function(e, t) {
                            t && t.forEach(function(t) {
                                return e.classList.add(t)
                            })
                        }(r, i.animatedClassNames), Q("aos:in", r), e.options.id && Q("aos:in:" + e.options.id, r), e.animated = !0) : e.animated && !i.once && s()
                    }(e, window.pageYOffset)
                })
            },
            Z = function(e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: i,
                    left: t
                }
            },
            J = function(e, t, i) {
                var n = e.getAttribute("data-aos-" + t);
                if (void 0 !== n) {
                    if ("true" === n) return !0;
                    if ("false" === n) return !1
                }
                return n || i
            },
            ee = function() {
                var e = document.querySelectorAll("[data-aos]");
                return Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    }
                })
            },
            te = [],
            ie = !1,
            ne = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                mirror: !1,
                anchorPlacement: "top-bottom",
                startEvent: "DOMContentLoaded",
                animatedClassName: "aos-animate",
                initClassName: "aos-init",
                useClassNames: !1,
                disableMutationObserver: !1,
                throttleDelay: 99,
                debounceDelay: 50
            },
            re = function() {
                return document.all && !window.atob
            },
            se = function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (te = function(e, t) {
                    return e.forEach(function(e, i) {
                        var n = J(e.node, "mirror", t.mirror),
                            r = J(e.node, "once", t.once),
                            s = J(e.node, "id"),
                            a = t.useClassNames && e.node.getAttribute("data-aos"),
                            o = [t.animatedClassName].concat(a ? a.split(" ") : []).filter(function(e) {
                                return "string" == typeof e
                            });
                        t.initClassName && e.node.classList.add(t.initClassName), e.position = { in : function(e, t, i) {
                                var n = window.innerHeight,
                                    r = J(e, "anchor"),
                                    s = J(e, "anchor-placement"),
                                    a = Number(J(e, "offset", s ? 0 : t)),
                                    o = s || i,
                                    l = e;
                                r && document.querySelectorAll(r) && (l = document.querySelectorAll(r)[0]);
                                var c = Z(l).top - n;
                                switch (o) {
                                    case "top-bottom":
                                        break;
                                    case "center-bottom":
                                        c += l.offsetHeight / 2;
                                        break;
                                    case "bottom-bottom":
                                        c += l.offsetHeight;
                                        break;
                                    case "top-center":
                                        c += n / 2;
                                        break;
                                    case "center-center":
                                        c += n / 2 + l.offsetHeight / 2;
                                        break;
                                    case "bottom-center":
                                        c += n / 2 + l.offsetHeight;
                                        break;
                                    case "top-top":
                                        c += n;
                                        break;
                                    case "bottom-top":
                                        c += n + l.offsetHeight;
                                        break;
                                    case "center-top":
                                        c += n + l.offsetHeight / 2
                                }
                                return c + a
                            }(e.node, t.offset, t.anchorPlacement), out: n && function(e, t) {
                                window.innerHeight;
                                var i = J(e, "anchor"),
                                    n = J(e, "offset", t),
                                    r = e;
                                return i && document.querySelectorAll(i) && (r = document.querySelectorAll(i)[0]), Z(r).top + r.offsetHeight - n
                            }(e.node, t.offset)
                        }, e.options = {
                            once: r,
                            mirror: n,
                            animatedClassNames: o,
                            id: s
                        }
                    }), e
                }(te, ne), K(te), window.addEventListener("scroll", b(function() {
                    K(te, ne.once)
                }, ne.throttleDelay)))
            },
            ae = function() {
                if (te = ee(), le(ne.disable) || re()) return oe();
                se()
            },
            oe = function() {
                te.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ne.initClassName && e.node.classList.remove(ne.initClassName), ne.animatedClassName && e.node.classList.remove(ne.animatedClassName)
                })
            },
            le = function(e) {
                return !0 === e || "mobile" === e && G.mobile() || "phone" === e && G.phone() || "tablet" === e && G.tablet() || "function" == typeof e && !0 === e()
            };
        return {
            init: function(e) {
                return ne = W(ne, e), te = ee(), ne.disableMutationObserver || B() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ne.disableMutationObserver = !0), ne.disableMutationObserver || H("[data-aos]", ae), le(ne.disable) || re() ? oe() : (document.querySelector("body").setAttribute("data-aos-easing", ne.easing), document.querySelector("body").setAttribute("data-aos-duration", ne.duration), document.querySelector("body").setAttribute("data-aos-delay", ne.delay), -1 === ["DOMContentLoaded", "load"].indexOf(ne.startEvent) ? document.addEventListener(ne.startEvent, function() {
                    se(!0)
                }) : window.addEventListener("load", function() {
                    se(!0)
                }), "DOMContentLoaded" === ne.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && se(!0), window.addEventListener("resize", z(se, ne.debounceDelay, !0)), window.addEventListener("orientationchange", z(se, ne.debounceDelay, !0)), te)
            },
            refresh: se,
            refreshHard: ae
        }
    }),
    function(e) {
        var t = "object" == typeof window && window || "object" == typeof self && self;
        "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
            return t.hljs
        }))
    }(function(e) {
        function t(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function i(e) {
            return e.nodeName.toLowerCase()
        }

        function n(e, t) {
            var i = e && e.exec(t);
            return i && 0 === i.index
        }

        function r(e) {
            return _.test(e)
        }

        function s(e) {
            var t, i = {},
                n = Array.prototype.slice.call(arguments, 1);
            for (t in e) i[t] = e[t];
            return n.forEach(function(e) {
                for (t in e) i[t] = e[t]
            }), i
        }

        function a(e) {
            var t = [];
            return function e(n, r) {
                for (var s = n.firstChild; s; s = s.nextSibling) 3 === s.nodeType ? r += s.nodeValue.length : 1 === s.nodeType && (t.push({
                    event: "start",
                    offset: r,
                    node: s
                }), r = e(s, r), i(s).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: r,
                    node: s
                }));
                return r
            }(e, 0), t
        }

        function o(e, n, r) {
            function s() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }

            function a(e) {
                d += "<" + i(e) + v.map.call(e.attributes, function(e) {
                    return " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"'
                }).join("") + ">"
            }

            function o(e) {
                d += "</" + i(e) + ">"
            }

            function l(e) {
                ("start" === e.event ? a : o)(e.node)
            }
            for (var c = 0, d = "", u = []; e.length || n.length;) {
                var h = s();
                if (d += t(r.substring(c, h[0].offset)), c = h[0].offset, h === e) {
                    u.reverse().forEach(o);
                    do {
                        l(h.splice(0, 1)[0]), h = s()
                    } while (h === e && h.length && h[0].offset === c);
                    u.reverse().forEach(a)
                } else "start" === h[0].event ? u.push(h[0].node) : u.pop(), l(h.splice(0, 1)[0])
            }
            return d + t(r.substr(c))
        }

        function l(e) {
            return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function(t) {
                return s(e, {
                    v: null
                }, t)
            })), e.cached_variants || e.eW && [s(e)] || [e]
        }

        function c(e) {
            function t(e) {
                return e && e.source || e
            }

            function i(i, n) {
                return new RegExp(t(i), "m" + (e.cI ? "i" : "") + (n ? "g" : ""))
            }! function n(r, s) {
                if (!r.compiled) {
                    if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
                        var a = {},
                            o = function(t, i) {
                                e.cI && (i = i.toLowerCase()), i.split(" ").forEach(function(e) {
                                    var i = e.split("|");
                                    a[i[0]] = [t, i[1] ? Number(i[1]) : 1]
                                })
                            };
                        "string" == typeof r.k ? o("keyword", r.k) : b(r.k).forEach(function(e) {
                            o(e, r.k[e])
                        }), r.k = a
                    }
                    r.lR = i(r.l || /\w+/, !0), s && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = i(r.b), r.endSameAsBegin && (r.e = r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = i(r.e)), r.tE = t(r.e) || "", r.eW && s.tE && (r.tE += (r.e ? "|" : "") + s.tE)), r.i && (r.iR = i(r.i)), null == r.r && (r.r = 1), r.c || (r.c = []), r.c = Array.prototype.concat.apply([], r.c.map(function(e) {
                        return l("self" === e ? r : e)
                    })), r.c.forEach(function(e) {
                        n(e, r)
                    }), r.starts && n(r.starts, s);
                    var c = r.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([r.tE, r.i]).map(t).filter(Boolean);
                    r.t = c.length ? i(c.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }(e)
        }

        function d(e, i, r, s) {
            function a(e) {
                return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
            }

            function o(e, t) {
                var i, r;
                for (i = 0, r = t.c.length; r > i; i++)
                    if (n(t.c[i].bR, e)) return t.c[i].endSameAsBegin && (t.c[i].eR = a(t.c[i].bR.exec(e)[0])), t.c[i]
            }

            function l(e, t) {
                if (n(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                return e.eW ? l(e.parent, t) : void 0
            }

            function h(e, t) {
                return !r && n(t.iR, e)
            }

            function p(e, t) {
                var i = w.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(i) && e.k[i]
            }

            function f(e, t, i, n) {
                var r = '<span class="' + (n ? "" : T.classPrefix);
                return (r += e + '">') + t + (i ? "" : C)
            }

            function g() {
                S += null != x.sL ? function() {
                    var e = "string" == typeof x.sL;
                    if (e && !y[x.sL]) return t(k);
                    var i = e ? d(x.sL, k, !0, E[x.sL]) : u(k, x.sL.length ? x.sL : void 0);
                    return x.r > 0 && (N += i.r), e && (E[x.sL] = i.top), f(i.language, i.value, !1, !0)
                }() : function() {
                    var e, i, n, r;
                    if (!x.k) return t(k);
                    for (r = "", i = 0, x.lR.lastIndex = 0, n = x.lR.exec(k); n;) r += t(k.substring(i, n.index)), (e = p(x, n)) ? (N += e[1], r += f(e[0], t(n[0]))) : r += t(n[0]), i = x.lR.lastIndex, n = x.lR.exec(k);
                    return r + t(k.substr(i))
                }(), k = ""
            }

            function v(e) {
                S += e.cN ? f(e.cN, "", !0) : "", x = Object.create(e, {
                    parent: {
                        value: x
                    }
                })
            }

            function b(e, t) {
                if (k += e, null == t) return g(), 0;
                var i = o(t, x);
                if (i) return i.skip ? k += t : (i.eB && (k += t), g(), i.rB || i.eB || (k = t)), v(i), i.rB ? 0 : t.length;
                var n = l(x, t);
                if (n) {
                    var r = x;
                    r.skip ? k += t : (r.rE || r.eE || (k += t), g(), r.eE && (k = t));
                    do {
                        x.cN && (S += C), x.skip || x.sL || (N += x.r), x = x.parent
                    } while (x !== n.parent);
                    return n.starts && (n.endSameAsBegin && (n.starts.eR = n.eR), v(n.starts)), r.rE ? 0 : t.length
                }
                if (h(t, x)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (x.cN || "<unnamed>") + '"');
                return k += t, t.length || 1
            }
            var w = m(e);
            if (!w) throw new Error('Unknown language: "' + e + '"');
            c(w);
            var _, x = s || w,
                E = {},
                S = "";
            for (_ = x; _ !== w; _ = _.parent) _.cN && (S = f(_.cN, "", !0) + S);
            var k = "",
                N = 0;
            try {
                for (var M, I, D = 0; x.t.lastIndex = D, M = x.t.exec(i);) I = b(i.substring(D, M.index), M[0]), D = M.index + I;
                for (b(i.substr(D)), _ = x; _.parent; _ = _.parent) _.cN && (S += C);
                return {
                    r: N,
                    value: S,
                    language: e,
                    top: x
                }
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                    r: 0,
                    value: t(i)
                };
                throw e
            }
        }

        function u(e, i) {
            i = i || T.languages || b(y);
            var n = {
                    r: 0,
                    value: t(e)
                },
                r = n;
            return i.filter(m).filter(g).forEach(function(t) {
                var i = d(t, e, !1);
                i.language = t, i.r > r.r && (r = i), i.r > n.r && (r = n, n = i)
            }), r.language && (n.second_best = r), n
        }

        function h(e) {
            return T.tabReplace || T.useBR ? e.replace(E, function(e, t) {
                return T.useBR && "\n" === e ? "<br>" : T.tabReplace ? t.replace(/\t/g, T.tabReplace) : ""
            }) : e
        }

        function p(e) {
            var t, i, n, s, l, c = function(e) {
                var t, i, n, s, a = e.className + " ";
                if (a += e.parentNode ? e.parentNode.className : "", i = x.exec(a)) return m(i[1]) ? i[1] : "no-highlight";
                for (t = 0, n = (a = a.split(/\s+/)).length; n > t; t++)
                    if (r(s = a[t]) || m(s)) return s
            }(e);
            r(c) || (T.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : t = e, l = t.textContent, n = c ? d(c, l, !0) : u(l), (i = a(t)).length && ((s = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = n.value, n.value = o(i, a(s), l)), n.value = h(n.value), e.innerHTML = n.value, e.className = function(e, t, i) {
                var n = t ? w[t] : i,
                    r = [e.trim()];
                return e.match(/\bhljs\b/) || r.push("hljs"), -1 === e.indexOf(n) && r.push(n), r.join(" ").trim()
            }(e.className, c, n.language), e.result = {
                language: n.language,
                re: n.r
            }, n.second_best && (e.second_best = {
                language: n.second_best.language,
                re: n.second_best.r
            }))
        }

        function f() {
            if (!f.called) {
                f.called = !0;
                var e = document.querySelectorAll("pre code");
                v.forEach.call(e, p)
            }
        }

        function m(e) {
            return e = (e || "").toLowerCase(), y[e] || y[w[e]]
        }

        function g(e) {
            var t = m(e);
            return t && !t.disableAutodetect
        }
        var v = [],
            b = Object.keys,
            y = {},
            w = {},
            _ = /^(no-?highlight|plain|text)$/i,
            x = /\blang(?:uage)?-([\w-]+)\b/i,
            E = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            C = "</span>",
            T = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            };
        return e.highlight = d, e.highlightAuto = u, e.fixMarkup = h, e.highlightBlock = p, e.configure = function(e) {
            T = s(T, e)
        }, e.initHighlighting = f, e.initHighlightingOnLoad = function() {
            addEventListener("DOMContentLoaded", f, !1), addEventListener("load", f, !1)
        }, e.registerLanguage = function(t, i) {
            var n = y[t] = i(e);
            n.aliases && n.aliases.forEach(function(e) {
                w[e] = t
            })
        }, e.listLanguages = function() {
            return b(y)
        }, e.getLanguage = m, e.autoDetection = g, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        }, e.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }, e.C = function(t, i, n) {
            var r = e.inherit({
                cN: "comment",
                b: t,
                e: i,
                c: []
            }, n || {});
            return r.c.push(e.PWM), r.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                r: 0
            }), r
        }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
            cN: "number",
            b: e.NR,
            r: 0
        }, e.CNM = {
            cN: "number",
            b: e.CNR,
            r: 0
        }, e.BNM = {
            cN: "number",
            b: e.BNR,
            r: 0
        }, e.CSSNM = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            r: 0
        }, e.RM = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE, {
                b: /\[/,
                e: /\]/,
                r: 0,
                c: [e.BE]
            }]
        }, e.TM = {
            cN: "title",
            b: e.IR,
            r: 0
        }, e.UTM = {
            cN: "title",
            b: e.UIR,
            r: 0
        }, e.METHOD_GUARD = {
            b: "\\.\\s*" + e.UIR,
            r: 0
        }, e
    }), hljs.registerLanguage("objectivec", function(e) {
        var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
            i = "@interface @class @protocol @implementation";
        return {
            aliases: ["mm", "objc", "obj-c"],
            k: {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            l: t,
            i: "</",
            c: [{
                cN: "built_in",
                b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
            }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "meta",
                b: "#",
                e: "$",
                c: [{
                    cN: "meta-string",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + i.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: i,
                l: t,
                c: [e.UTM]
            }, {
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), hljs.registerLanguage("sql", function(e) {
        var t = e.C("--", "$");
        return {
            cI: !0,
            i: /[<>{}*]/,
            c: [{
                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment with",
                e: /;/,
                eW: !0,
                l: /[\w\.]+/,
                k: {
                    keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                    literal: "true false null unknown",
                    built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp varchar varying void"
                },
                c: [{
                    cN: "string",
                    b: "'",
                    e: "'",
                    c: [e.BE, {
                        b: "''"
                    }]
                }, {
                    cN: "string",
                    b: '"',
                    e: '"',
                    c: [e.BE, {
                        b: '""'
                    }]
                }, {
                    cN: "string",
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, e.CNM, e.CBCM, t, e.HCM]
            }, e.CBCM, t, e.HCM]
        }
    }), hljs.registerLanguage("xml", function(e) {
        var t = {
            eW: !0,
            i: /</,
            r: 0,
            c: [{
                cN: "attr",
                b: "[A-Za-z0-9\\._:-]+",
                r: 0
            }, {
                b: /=\s*/,
                r: 0,
                c: [{
                    cN: "string",
                    endsParent: !0,
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s"'=<>`]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "meta",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("\x3c!--", "--\x3e", {
                r: 10
            }), {
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "meta",
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            }, {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: "php",
                c: [{
                    b: "/\\*",
                    e: "\\*/",
                    skip: !0
                }, {
                    b: 'b"',
                    e: '"',
                    skip: !0
                }, {
                    b: "b'",
                    e: "'",
                    skip: !0
                }, e.inherit(e.ASM, {
                    i: null,
                    cN: null,
                    c: null,
                    skip: !0
                }), e.inherit(e.QSM, {
                    i: null,
                    cN: null,
                    c: null,
                    skip: !0
                })]
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "style"
                },
                c: [t],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: ["css", "xml"]
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "script"
                },
                c: [t],
                starts: {
                    e: "<\/script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "name",
                    b: /[^\/><\s]+/,
                    r: 0
                }, t]
            }]
        }
    }), hljs.registerLanguage("markdown", function(e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            c: [{
                cN: "section",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "quote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "^```w*s*$",
                    e: "^```s*$"
                }, {
                    b: "`.+?`"
                }, {
                    b: "^( {4}|\t)",
                    e: "$",
                    r: 0
                }]
            }, {
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "string",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "symbol",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: /^\[[^\n]+\]:/,
                rB: !0,
                c: [{
                    cN: "symbol",
                    b: /\[/,
                    e: /\]/,
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link",
                    b: /:\s*/,
                    e: /$/,
                    eB: !0
                }]
            }]
        }
    }), hljs.registerLanguage("perl", function(e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            i = {
                cN: "subst",
                b: "[$@]\\{",
                e: "\\}",
                k: t
            },
            n = {
                b: "->{",
                e: "}"
            },
            r = {
                v: [{
                    b: /\$\d/
                }, {
                    b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                }, {
                    b: /[\$%@][^\s\w{]/,
                    r: 0
                }]
            },
            s = [e.BE, i, r],
            a = [r, e.HCM, e.C("^\\=\\w", "\\=cut", {
                eW: !0
            }), n, {
                cN: "string",
                c: s,
                v: [{
                    b: "q[qwxr]?\\s*\\(",
                    e: "\\)",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\[",
                    e: "\\]",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\{",
                    e: "\\}",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\|",
                    e: "\\|",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\<",
                    e: "\\>",
                    r: 5
                }, {
                    b: "qw\\s+q",
                    e: "q",
                    r: 5
                }, {
                    b: "'",
                    e: "'",
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, {
                    b: "{\\w+}",
                    c: [],
                    r: 0
                }, {
                    b: "-?\\w+\\s*\\=\\>",
                    c: [],
                    r: 0
                }]
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                k: "split return print reverse grep",
                r: 0,
                c: [e.HCM, {
                    cN: "regexp",
                    b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                    r: 10
                }, {
                    cN: "regexp",
                    b: "(m|qr)?/",
                    e: "/[a-z]*",
                    c: [e.BE],
                    r: 0
                }]
            }, {
                cN: "function",
                bK: "sub",
                e: "(\\s*\\(.*?\\))?[;{]",
                eE: !0,
                r: 5,
                c: [e.TM]
            }, {
                b: "-\\w\\b",
                r: 0
            }, {
                b: "^__DATA__$",
                e: "^__END__$",
                sL: "mojolicious",
                c: [{
                    b: "^@@.*",
                    e: "$",
                    cN: "comment"
                }]
            }];
        return i.c = a, n.c = a, {
            aliases: ["pl", "pm"],
            l: /[\w\.]+/,
            k: t,
            c: a
        }
    }), hljs.registerLanguage("java", function(e) {
        var t = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
            i = {
                cN: "number",
                b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
                r: 0
            };
        return {
            aliases: ["jsp"],
            k: t,
            i: /<\/|#/,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    b: /\w+@/,
                    r: 0
                }, {
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "([Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*(<[Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*(\\s*,\\s*[Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*)*>)?\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, i, {
                cN: "meta",
                b: "@[A-Za-z]+"
            }]
        }
    }), hljs.registerLanguage("bash", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            i = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            };
        return {
            aliases: ["sh", "zsh"],
            l: /\b-?[a-z\._]+\b/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "meta",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, i, {
                cN: "string",
                b: /'/,
                e: /'/
            }, t]
        }
    }), hljs.registerLanguage("shell", function(e) {
        return {
            aliases: ["console"],
            c: [{
                cN: "meta",
                b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
                starts: {
                    e: "$",
                    sL: "bash"
                }
            }]
        }
    }), hljs.registerLanguage("json", function(e) {
        var t = {
                literal: "true false null"
            },
            i = [e.QSM, e.CNM],
            n = {
                e: ",",
                eW: !0,
                eE: !0,
                c: i,
                k: t
            },
            r = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attr",
                    b: /"/,
                    e: /"/,
                    c: [e.BE],
                    i: "\\n"
                }, e.inherit(n, {
                    b: /:/
                })],
                i: "\\S"
            },
            s = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(n)],
                i: "\\S"
            };
        return i.splice(i.length, 0, r, s), {
            c: i,
            k: t,
            i: "\\S"
        }
    }), hljs.registerLanguage("nginx", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$\d+/
                }, {
                    b: /\$\{/,
                    e: /}/
                }, {
                    b: "[\\$\\@]" + e.UIR
                }]
            },
            i = {
                eW: !0,
                l: "[a-z/_]+",
                k: {
                    literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                },
                r: 0,
                i: "=>",
                c: [e.HCM, {
                    cN: "string",
                    c: [e.BE, t],
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }]
                }, {
                    b: "([a-z]+):/",
                    e: "\\s",
                    eW: !0,
                    eE: !0,
                    c: [t]
                }, {
                    cN: "regexp",
                    c: [e.BE, t],
                    v: [{
                        b: "\\s\\^",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "~\\*?\\s+",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "\\*(\\.[a-z\\-]+)+"
                    }, {
                        b: "([a-z\\-]+\\.)+\\*"
                    }]
                }, {
                    cN: "number",
                    b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                }, {
                    cN: "number",
                    b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                    r: 0
                }, t]
            };
        return {
            aliases: ["nginxconf"],
            c: [e.HCM, {
                b: e.UIR + "\\s+{",
                rB: !0,
                e: "{",
                c: [{
                    cN: "section",
                    b: e.UIR
                }],
                r: 0
            }, {
                b: e.UIR + "\\s",
                e: ";|{",
                rB: !0,
                c: [{
                    cN: "attribute",
                    b: e.UIR,
                    starts: i
                }],
                r: 0
            }],
            i: "[^\\s\\}]"
        }
    }), hljs.registerLanguage("ini", function(e) {
        var t = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: "'''",
                e: "'''",
                r: 10
            }, {
                b: '"""',
                e: '"""',
                r: 10
            }, {
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            }]
        };
        return {
            aliases: ["toml"],
            cI: !0,
            i: /\S/,
            c: [e.C(";", "$"), e.HCM, {
                cN: "section",
                b: /^\s*\[+/,
                e: /\]+/
            }, {
                b: /^[a-z0-9\[\]_-]+\s*=\s*/,
                e: "$",
                rB: !0,
                c: [{
                    cN: "attr",
                    b: /[a-z0-9\[\]_-]+/
                }, {
                    b: /=/,
                    eW: !0,
                    r: 0,
                    c: [{
                        cN: "literal",
                        b: /\bon|off|true|false|yes|no\b/
                    }, {
                        cN: "variable",
                        v: [{
                            b: /\$[\w\d"][\w\d_]*/
                        }, {
                            b: /\$\{(.*?)}/
                        }]
                    }, t, {
                        cN: "number",
                        b: /([\+\-]+)?[\d]+_[\d_]+/
                    }, e.NM]
                }]
            }]
        }
    }), hljs.registerLanguage("http", function(e) {
        var t = "HTTP/[0-9\\.]+";
        return {
            aliases: ["https"],
            i: "\\S",
            c: [{
                b: "^" + t,
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                b: "^[A-Z]+ (.*?) " + t + "$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }, {
                    b: t
                }, {
                    cN: "keyword",
                    b: "[A-Z]+"
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    e: "$",
                    r: 0
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: [],
                    eW: !0
                }
            }]
        }
    }), hljs.registerLanguage("css", function(e) {
        var t = {
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    eW: !0,
                    eE: !0,
                    c: [{
                        b: /[\w-]+\(/,
                        rB: !0,
                        c: [{
                            cN: "built_in",
                            b: /[\w-]+/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            c: [e.ASM, e.QSM]
                        }]
                    }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                        cN: "number",
                        b: "#[0-9A-Fa-f]+"
                    }, {
                        cN: "meta",
                        b: "!important"
                    }]
                }
            }]
        };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "selector-id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "selector-class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "selector-attr",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                b: "@",
                e: "[{;]",
                i: /:/,
                c: [{
                    cN: "keyword",
                    b: /\w+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "selector-tag",
                b: "[a-zA-Z-][a-zA-Z0-9_-]*",
                r: 0
            }, {
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, t]
            }]
        }
    }), hljs.registerLanguage("javascript", function(e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*",
            i = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            n = {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            },
            r = {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}",
                k: i,
                c: []
            },
            s = {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, r]
            };
        r.c = [e.ASM, e.QSM, s, n, e.RM];
        var a = r.c.concat([e.CBCM, e.CLCM]);
        return {
            aliases: ["js", "jsx"],
            k: i,
            c: [{
                cN: "meta",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, {
                cN: "meta",
                b: /^#!/,
                e: /$/
            }, e.ASM, e.QSM, s, e.CLCM, e.CBCM, n, {
                b: /[{,]\s*/,
                r: 0,
                c: [{
                    b: t + "\\s*:",
                    rB: !0,
                    r: 0,
                    c: [{
                        cN: "attr",
                        b: t,
                        r: 0
                    }]
                }]
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    cN: "function",
                    b: "(\\(.*?\\)|" + t + ")\\s*=>",
                    rB: !0,
                    e: "\\s*=>",
                    c: [{
                        cN: "params",
                        v: [{
                            b: t
                        }, {
                            b: /\(\s*\)/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: i,
                            c: a
                        }]
                    }]
                }, {
                    b: /</,
                    e: /(\/\w+|\w+\/)>/,
                    sL: "xml",
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        b: /<\w+/,
                        e: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        c: [{
                            b: /<\w+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: t
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: a
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, e.METHOD_GUARD, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }, {
                bK: "constructor",
                e: /\{/,
                eE: !0
            }],
            i: /#(?!!)/
        }
    }), hljs.registerLanguage("makefile", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: "\\$\\(" + e.UIR + "\\)",
                    c: [e.BE]
                }, {
                    b: /\$[@%<?\^\+\*]/
                }]
            },
            i = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t]
            },
            n = {
                cN: "variable",
                b: /\$\([\w-]+\s/,
                e: /\)/,
                k: {
                    built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                },
                c: [t]
            },
            r = {
                b: "^" + e.UIR + "\\s*[:+?]?=",
                i: "\\n",
                rB: !0,
                c: [{
                    b: "^" + e.UIR,
                    e: "[:+?]?=",
                    eE: !0
                }]
            },
            s = {
                cN: "section",
                b: /^[^\s]+:/,
                e: /$/,
                c: [t]
            };
        return {
            aliases: ["mk", "mak"],
            k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
            l: /[\w-]+/,
            c: [e.HCM, t, i, n, r, {
                cN: "meta",
                b: /^\.PHONY:/,
                e: /$/,
                k: {
                    "meta-keyword": ".PHONY"
                },
                l: /[\.\w]+/
            }, s]
        }
    }), hljs.registerLanguage("ruby", function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            i = {
                keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
                literal: "true false nil"
            },
            n = {
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
            r = {
                b: "#<",
                e: ">"
            },
            s = [e.C("#", "$", {
                c: [n]
            }), e.C("^\\=begin", "^\\=end", {
                c: [n],
                r: 10
            }), e.C("^__END__", "\\n$")],
            a = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: i
            },
            o = {
                cN: "string",
                c: [e.BE, a],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }, {
                    b: /<<(-?)\w+$/,
                    e: /^\s*\w+$/
                }]
            },
            l = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                endsParent: !0,
                k: i
            },
            c = [o, r, {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }), {
                    b: "<\\s*",
                    c: [{
                        b: "(" + e.IR + "::)?" + e.IR
                    }]
                }].concat(s)
            }, {
                cN: "function",
                bK: "def",
                e: "$|;",
                c: [e.inherit(e.TM, {
                    b: t
                }), l].concat(s)
            }, {
                b: e.IR + "::"
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":(?!\\s)",
                c: [o, {
                    b: t
                }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                cN: "params",
                b: /\|/,
                e: /\|/,
                k: i
            }, {
                b: "(" + e.RSR + "|unless)\\s*",
                k: "unless",
                c: [r, {
                    cN: "regexp",
                    c: [e.BE, a],
                    i: /\n/,
                    v: [{
                        b: "/",
                        e: "/[a-z]*"
                    }, {
                        b: "%r{",
                        e: "}[a-z]*"
                    }, {
                        b: "%r\\(",
                        e: "\\)[a-z]*"
                    }, {
                        b: "%r!",
                        e: "![a-z]*"
                    }, {
                        b: "%r\\[",
                        e: "\\][a-z]*"
                    }]
                }].concat(s),
                r: 0
            }].concat(s);
        a.c = c, l.c = c;
        var d = [{
            b: /^\s*=>/,
            starts: {
                e: "$",
                c: c
            }
        }, {
            cN: "meta",
            b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
            starts: {
                e: "$",
                c: c
            }
        }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: i,
            i: /\/\*/,
            c: s.concat(d).concat(c)
        }
    }), hljs.registerLanguage("cs", function(e) {
        var t = {
                keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
                literal: "null false true"
            },
            i = {
                cN: "number",
                v: [{
                    b: "\\b(0b[01']+)"
                }, {
                    b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                }, {
                    b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                r: 0
            },
            n = {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            },
            r = e.inherit(n, {
                i: /\n/
            }),
            s = {
                cN: "subst",
                b: "{",
                e: "}",
                k: t
            },
            a = e.inherit(s, {
                i: /\n/
            }),
            o = {
                cN: "string",
                b: /\$"/,
                e: '"',
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, e.BE, a]
            },
            l = {
                cN: "string",
                b: /\$@"/,
                e: '"',
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, s]
            },
            c = e.inherit(l, {
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, a]
            });
        s.c = [l, o, n, e.ASM, e.QSM, i, e.CBCM], a.c = [c, o, r, e.ASM, e.QSM, i, e.inherit(e.CBCM, {
            i: /\n/
        })];
        var d = {
                v: [l, o, n, e.ASM, e.QSM]
            },
            u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
        return {
            aliases: ["csharp"],
            k: t,
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "doctag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "\x3c!--|--\x3e"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "meta",
                b: "#",
                e: "$",
                k: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, d, i, {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:,]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.inherit(e.TM, {
                    b: "[a-zA-Z](\\.?\\w)*"
                }), e.CLCM, e.CBCM]
            }, {
                cN: "meta",
                b: "^\\s*\\[",
                eB: !0,
                e: "\\]",
                eE: !0,
                c: [{
                    cN: "meta-string",
                    b: /"/,
                    e: /"/
                }]
            }, {
                bK: "new return throw await else",
                r: 0
            }, {
                cN: "function",
                b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /\s*[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    r: 0,
                    c: [d, i, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), hljs.registerLanguage("coffeescript", function(e) {
        var t = {
                keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
                literal: "true false null undefined yes no on off",
                built_in: "npm require console print module global window document"
            },
            i = "[A-Za-z$_][0-9A-Za-z$_]*",
            n = {
                cN: "subst",
                b: /#\{/,
                e: /}/,
                k: t
            },
            r = [e.BNM, e.inherit(e.CNM, {
                starts: {
                    e: "(\\s*/)?",
                    r: 0
                }
            }), {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, n]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, n]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [n, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                b: "@" + i
            }, {
                sL: "javascript",
                eB: !0,
                eE: !0,
                v: [{
                    b: "```",
                    e: "```"
                }, {
                    b: "`",
                    e: "`"
                }]
            }];
        n.c = r;
        var s = e.inherit(e.TM, {
                b: i
            }),
            a = "(\\(.*\\))?\\s*\\B[-=]>",
            o = {
                cN: "params",
                b: "\\([^\\(]",
                rB: !0,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    c: ["self"].concat(r)
                }]
            };
        return {
            aliases: ["coffee", "cson", "iced"],
            k: t,
            i: /\/\*/,
            c: r.concat([e.C("###", "###"), e.HCM, {
                cN: "function",
                b: "^\\s*" + i + "\\s*=\\s*" + a,
                e: "[-=]>",
                rB: !0,
                c: [s, o]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: a,
                    e: "[-=]>",
                    rB: !0,
                    c: [o]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [s]
                }, s]
            }, {
                b: i + ":",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
        }
    }), hljs.registerLanguage("php", function(e) {
        var t = {
                b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"
            },
            i = {
                cN: "meta",
                b: /<\?(php)?|\?>/
            },
            n = {
                cN: "string",
                c: [e.BE, i],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            r = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php", "php3", "php4", "php5", "php6", "php7"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.HCM, e.C("//", "$", {
                c: [i]
            }), e.C("/\\*", "\\*/", {
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: /<<<['"]?\w+['"]?$/,
                e: /^\w+;?$/,
                c: [e.BE, {
                    cN: "subst",
                    v: [{
                        b: /\$\w+/
                    }, {
                        b: /\{\$/,
                        e: /\}/
                    }]
                }]
            }, i, {
                cN: "keyword",
                b: /\$this\b/
            }, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, n, r]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, n, r]
        }
    }), hljs.registerLanguage("cpp", function(e) {
        var t = {
                cN: "keyword",
                b: "\\b[a-z\\d_]*_t\\b"
            },
            i = {
                cN: "string",
                v: [{
                    b: '(u8?|U|L)?"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: '(u8?|U|L)?R"\\(',
                    e: '\\)"'
                }, {
                    b: "'\\\\?.",
                    e: "'",
                    i: "."
                }]
            },
            n = {
                cN: "number",
                v: [{
                    b: "\\b(0b[01']+)"
                }, {
                    b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                }, {
                    b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                r: 0
            },
            r = {
                cN: "meta",
                b: /#\s*[a-z]+\b/,
                e: /$/,
                k: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
                },
                c: [{
                    b: /\\\n/,
                    r: 0
                }, e.inherit(i, {
                    cN: "meta-string"
                }), {
                    cN: "meta-string",
                    b: /<[^\n>]*>/,
                    e: /$/,
                    i: "\\n"
                }, e.CLCM, e.CBCM]
            },
            s = e.IR + "\\s*\\(",
            a = {
                keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
                built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
                literal: "true false nullptr NULL"
            },
            o = [t, e.CLCM, e.CBCM, n, i];
        return {
            aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
            k: a,
            i: "</",
            c: o.concat([r, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: a,
                c: ["self", t]
            }, {
                b: e.IR + "::",
                k: a
            }, {
                v: [{
                    b: /=/,
                    e: /;/
                }, {
                    b: /\(/,
                    e: /\)/
                }, {
                    bK: "new throw return else",
                    e: /;/
                }],
                k: a,
                c: o.concat([{
                    b: /\(/,
                    e: /\)/,
                    k: a,
                    c: o.concat(["self"]),
                    r: 0
                }]),
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "[\\*&\\s]+)+" + s,
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: a,
                i: /[^\w\s\*&]/,
                c: [{
                    b: s,
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: a,
                    r: 0,
                    c: [e.CLCM, e.CBCM, i, n, t, {
                        b: /\(/,
                        e: /\)/,
                        k: a,
                        r: 0,
                        c: ["self", e.CLCM, e.CBCM, i, n, t]
                    }]
                }, e.CLCM, e.CBCM, r]
            }, {
                cN: "class",
                bK: "class struct",
                e: /[{;:]/,
                c: [{
                    b: /</,
                    e: />/,
                    c: ["self"]
                }, e.TM]
            }]),
            exports: {
                preprocessor: r,
                strings: i,
                k: a
            }
        }
    }), hljs.registerLanguage("properties", function(e) {
        var t = "[ \\t\\f]*",
            i = "(" + t + "[:=]" + t + "|[ \\t\\f]+)",
            n = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
            r = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
            s = {
                e: i,
                r: 0,
                starts: {
                    cN: "string",
                    e: /$/,
                    r: 0,
                    c: [{
                        b: "\\\\\\n"
                    }]
                }
            };
        return {
            cI: !0,
            i: /\S/,
            c: [e.C("^\\s*[!#]", "$"), {
                b: n + i,
                rB: !0,
                c: [{
                    cN: "attr",
                    b: n,
                    endsParent: !0,
                    r: 0
                }],
                starts: s
            }, {
                b: r + i,
                rB: !0,
                r: 0,
                c: [{
                    cN: "meta",
                    b: r,
                    endsParent: !0,
                    r: 0
                }],
                starts: s
            }, {
                cN: "attr",
                r: 0,
                b: r + t + "$"
            }]
        }
    }), hljs.registerLanguage("diff", function(e) {
        return {
            aliases: ["patch"],
            c: [{
                cN: "meta",
                r: 10,
                v: [{
                    b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                }, {
                    b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                cN: "comment",
                v: [{
                    b: /Index: /,
                    e: /$/
                }, {
                    b: /={3,}/,
                    e: /$/
                }, {
                    b: /^\-{3}/,
                    e: /$/
                }, {
                    b: /^\*{3} /,
                    e: /$/
                }, {
                    b: /^\+{3}/,
                    e: /$/
                }, {
                    b: /\*{5}/,
                    e: /\*{5}$/
                }]
            }, {
                cN: "addition",
                b: "^\\+",
                e: "$"
            }, {
                cN: "deletion",
                b: "^\\-",
                e: "$"
            }, {
                cN: "addition",
                b: "^\\!",
                e: "$"
            }]
        }
    }), hljs.registerLanguage("apache", function(e) {
        var t = {
            cN: "number",
            b: "[\\$%]\\d+"
        };
        return {
            aliases: ["apacheconf"],
            cI: !0,
            c: [e.HCM, {
                cN: "section",
                b: "</?",
                e: ">"
            }, {
                cN: "attribute",
                b: /\w+/,
                r: 0,
                k: {
                    nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    e: /$/,
                    r: 0,
                    k: {
                        literal: "on off all"
                    },
                    c: [{
                        cN: "meta",
                        b: "\\s\\[",
                        e: "\\]$"
                    }, {
                        cN: "variable",
                        b: "[\\$%]\\{",
                        e: "\\}",
                        c: ["self", t]
                    }, t, e.QSM]
                }
            }],
            i: /\S/
        }
    }), hljs.registerLanguage("python", function(e) {
        var t = {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i = {
                cN: "meta",
                b: /^(>>>|\.\.\.) /
            },
            n = {
                cN: "subst",
                b: /\{/,
                e: /\}/,
                k: t,
                i: /#/
            },
            r = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [e.BE, i],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [e.BE, i],
                    r: 10
                }, {
                    b: /(fr|rf|f)'''/,
                    e: /'''/,
                    c: [e.BE, i, n]
                }, {
                    b: /(fr|rf|f)"""/,
                    e: /"""/,
                    c: [e.BE, i, n]
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, {
                    b: /(fr|rf|f)'/,
                    e: /'/,
                    c: [e.BE, n]
                }, {
                    b: /(fr|rf|f)"/,
                    e: /"/,
                    c: [e.BE, n]
                }, e.ASM, e.QSM]
            },
            s = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            },
            a = {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", i, s, r]
            };
        return n.c = [r, s, i], {
            aliases: ["py", "gyp"],
            k: t,
            i: /(<\/|->|\?)|=>/,
            c: [i, s, r, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def"
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, a, {
                    b: /->/,
                    eW: !0,
                    k: "None"
                }]
            }, {
                cN: "meta",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }),
    function(e, t, i, n) {
        function r(t, i) {
            this.settings = null, this.options = e.extend({}, r.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, i) {
                this._handlers[i] = e.proxy(this[i], this)
            }, this)), e.each(r.Plugins, e.proxy(function(e, t) {
                this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
            }, this)), e.each(r.Workers, e.proxy(function(t, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: e.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: t,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                e.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": n ? t : "",
                        "margin-right": n ? "" : t
                    };
                !i && this.$stage.children().css(r), e.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    s = [];
                for (e.items = {
                        merge: !1,
                        width: t
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, s[n] = r ? t * i : this._items[n].width();
                this._widths = s
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    i = this._items,
                    n = this.settings,
                    r = Math.max(2 * n.items, 4),
                    s = 2 * Math.ceil(i.length / 2),
                    a = n.loop && i.length ? n.rewind ? r : Math.max(r, s) : 0,
                    o = "",
                    l = "";
                for (a /= 2; a > 0;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l, a -= 1;
                this._clones = t, e(o).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < t;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * e);
                this._coordinates = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e = this.settings.stagePadding,
                    t = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                        "padding-left": e || "",
                        "padding-right": e || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && e.items.merge)
                    for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css);
                else i && (e.css.width = e.items.width, n.css(e.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var e, t, i, n, r = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    a = this.coordinates(this.current()) + s,
                    o = a + this.width() * r,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + s * r, (this.op(e, "<=", a) && this.op(e, ">", o) || this.op(t, "<", a) && this.op(t, ">", o)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }], r.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass
            }).wrap(e("<div/>", {
                class: this.settings.stageOuterClass
            })), this.$element.append(this.$stage.parent()))
        }, r.prototype.initializeItems = function() {
            var t = this.$element.find(".owl-item");
            if (t.length) return this._items = t.get().map(function(t) {
                return e(t)
            }), this._mergers = this._items.map(function() {
                return 1
            }), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }, r.prototype.initialize = function() {
            var e, t, i;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(t).width(), e.length && i <= 0 && this.preloadAutoWidthImages(e));
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }, r.prototype.setup = function() {
            var t = this.viewport(),
                i = this.options.responsive,
                n = -1,
                r = null;
            i ? (e.each(i, function(e) {
                e <= t && e > n && (n = Number(e))
            }), "function" == typeof(r = e.extend({}, this.options, i[n])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = e.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function(t) {
            var i = this.trigger("prepare", {
                content: t
            });
            return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, r.prototype.update = function() {
            for (var t = 0, i = this._pipe.length, n = e.proxy(function(e) {
                    return this[e]
                }, this._invalidated), r = {}; t < i;)(this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(r), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function(e) {
            switch (e = e || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function() {
            t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, r.prototype.registerEventHandlers = function() {
            e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function(t) {
            var n = null;
            3 !== t.which && (e.support.transform ? n = {
                x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            } : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
                var n = this.difference(this._drag.pointer, this.pointer(t));
                e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, r.prototype.onDragMove = function(e) {
            var t = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(e)),
                s = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
        }, r.prototype.onDragEnd = function(t) {
            var n = this.difference(this._drag.pointer, this.pointer(t)),
                r = this._drag.stage.current,
                s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function(t, i) {
            var r = -1,
                s = this.width(),
                a = this.coordinates();
            return this.settings.freeDrag || e.each(a, e.proxy(function(e, o) {
                return "left" === i && t > o - 30 && t < o + 30 ? r = e : "right" === i && t > o - s - 30 && t < o - s + 30 ? r = e + 1 : this.op(t, "<", o) && this.op(t, ">", a[e + 1] !== n ? a[e + 1] : o - s) && (r = "left" === i ? e + 1 : e), -1 === r
            }, this)), this.settings.loop || (this.op(t, ">", a[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", a[this.maximum()]) && (r = t = this.maximum())), r
        }, r.prototype.animate = function(t) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) : i ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, r.prototype.is = function(e) {
            return this._states.current[e] && this._states.current[e] > 0
        }, r.prototype.current = function(e) {
            if (e === n) return this._current;
            if (0 === this._items.length) return n;
            if (e = this.normalize(e), this._current !== e) {
                var t = this.trigger("change", {
                    property: {
                        name: "position",
                        value: e
                    }
                });
                t.data !== n && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, r.prototype.invalidate = function(t) {
            return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
                return t
            })
        }, r.prototype.reset = function(e) {
            (e = this.normalize(e)) !== n && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function(e, t) {
            var i = this._items.length,
                r = t ? 0 : this._clones.length;
            return !this.isNumeric(e) || i < 1 ? e = n : (e < 0 || e >= i + r) && (e = ((e - r / 2) % i + i) % i + r / 2), e
        }, r.prototype.relative = function(e) {
            return e -= this._clones.length / 2, this.normalize(e, !0)
        }, r.prototype.maximum = function(e) {
            var t, i, n, r = this.settings,
                s = this._coordinates.length;
            if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                if (t = this._items.length)
                    for (i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n););
                s = t + 1
            } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
            return e && (s -= this._clones.length / 2), Math.max(s, 0)
        }, r.prototype.minimum = function(e) {
            return e ? 0 : this._clones.length / 2
        }, r.prototype.items = function(e) {
            return e === n ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
        }, r.prototype.mergers = function(e) {
            return e === n ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
        }, r.prototype.clones = function(t) {
            var i = this._clones.length / 2,
                r = i + this._items.length,
                s = function(e) {
                    return e % 2 == 0 ? r + e / 2 : i - (e + 1) / 2
                };
            return t === n ? e.map(this._clones, function(e, t) {
                return s(t)
            }) : e.map(this._clones, function(e, i) {
                return e === t ? s(i) : null
            })
        }, r.prototype.speed = function(e) {
            return e !== n && (this._speed = e), this._speed
        }, r.prototype.coordinates = function(t) {
            var i, r = 1,
                s = t - 1;
            return t === n ? e.map(this._coordinates, e.proxy(function(e, t) {
                return this.coordinates(t)
            }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * r) : i = this._coordinates[s] || 0, i = Math.ceil(i))
        }, r.prototype.duration = function(e, t, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, r.prototype.to = function(e, t) {
            var i = this.current(),
                n = null,
                r = e - this.relative(i),
                s = (r > 0) - (r < 0),
                a = this._items.length,
                o = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > a / 2 && (r += -1 * s * a), (n = (((e = i + r) - o) % a + a) % a + o) !== e && n - r <= l && n - r > 0 && (i = n - r, e = n, this.reset(i))) : this.settings.rewind ? e = (e % (l += 1) + l) % l : e = Math.max(o, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.isVisible() && this.update()
        }, r.prototype.next = function(e) {
            e = e || !1, this.to(this.relative(this.current()) + 1, e)
        }, r.prototype.prev = function(e) {
            e = e || !1, this.to(this.relative(this.current()) - 1, e)
        }, r.prototype.onTransitionEnd = function(e) {
            if (e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, r.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each(e.proxy(function(e, t) {
                t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function(t, i) {
            var r = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
                content: t,
                position: i
            }), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: i
            })
        }, r.prototype.remove = function(e) {
            (e = this.normalize(e, !0)) !== n && (this.trigger("remove", {
                content: this._items[e],
                position: e
            }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: e
            }))
        }, r.prototype.preloadAutoWidthImages = function(t) {
            t.each(e.proxy(function(t, i) {
                this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function(e) {
                    i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, r.prototype.destroy = function() {
            for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function(e, t, i) {
            var n = this.settings.rtl;
            switch (t) {
                case "<":
                    return n ? e > i : e < i;
                case ">":
                    return n ? e < i : e > i;
                case ">=":
                    return n ? e <= i : e >= i;
                case "<=":
                    return n ? e >= i : e <= i
            }
        }, r.prototype.on = function(e, t, i, n) {
            e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
        }, r.prototype.off = function(e, t, i, n) {
            e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
        }, r.prototype.trigger = function(t, i, n, s, a) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = e.camelCase(e.grep(["on", t, n], function(e) {
                    return e
                }).join("-").toLowerCase()),
                c = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({
                    relatedTarget: this
                }, o, i));
            return this._supress[t] || (e.each(this._plugins, function(e, t) {
                t.onTrigger && t.onTrigger(c)
            }), this.register({
                type: r.Type.Event,
                name: t
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, r.prototype.enter = function(t) {
            e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
                this._states.current[t] === n && (this._states.current[t] = 0), this._states.current[t]++
            }, this))
        }, r.prototype.leave = function(t) {
            e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
                this._states.current[t]--
            }, this))
        }, r.prototype.register = function(t) {
            if (t.type === r.Type.Event) {
                if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                    var i = e.event.special[t.name]._default;
                    e.event.special[t.name]._default = function(e) {
                        return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, e.event.special[t.name].owl = !0
                }
            } else t.type === r.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(i, n) {
                return e.inArray(i, this._states.tags[t.name]) === n
            }, this)))
        }, r.prototype.suppress = function(t) {
            e.each(t, e.proxy(function(e, t) {
                this._supress[t] = !0
            }, this))
        }, r.prototype.release = function(t) {
            e.each(t, e.proxy(function(e, t) {
                delete this._supress[t]
            }, this))
        }, r.prototype.pointer = function(e) {
            var i = {
                x: null,
                y: null
            };
            return (e = (e = e.originalEvent || e || t.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
        }, r.prototype.isNumeric = function(e) {
            return !isNaN(parseFloat(e))
        }, r.prototype.difference = function(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }, e.fn.owlCarousel = function(t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = e(this),
                    s = n.data("owl.carousel");
                s || (s = new r(this, "object" == typeof t && t), n.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                    s.register({
                        type: r.Type.Event,
                        name: i
                    }), s.$element.on(i + ".owl.carousel.core", e.proxy(function(e) {
                        e.namespace && e.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, s))
                })), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, i)
            })
        }, e.fn.owlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var e, i;
            for (e in t.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                        var i = this._core.settings,
                            n = i.center && Math.ceil(i.items / 2) || i.items,
                            r = i.center && -1 * n || 0,
                            s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + r,
                            a = this._core.clones().length,
                            o = e.proxy(function(e, t) {
                                this.load(t)
                            }, this);
                        for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (s -= i.lazyLoadEager, n++)); r++ < n;) this.load(a / 2 + this._core.relative(s)), a && e.each(this._core.clones(this._core.relative(s)), o), s++
                    }
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        }, r.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                r = n && n.find(".owl-lazy");
            !r || e.inArray(n.get(0), this._loaded) > -1 || (r.each(e.proxy(function(i, n) {
                var r, s = e(n),
                    a = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
                this._core.trigger("load", {
                    element: s,
                    url: a
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function() {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: a
                    }, "lazy")
                }, this)).attr("src", a) : s.is("source") ? s.one("load.owl.lazy", e.proxy(function() {
                    this._core.trigger("loaded", {
                        element: s,
                        url: a
                    }, "lazy")
                }, this)).attr("srcset", a) : ((r = new Image).onload = e.proxy(function() {
                    s.css({
                        "background-image": 'url("' + a + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: a
                    }, "lazy")
                }, this), r.src = a)
            }, this)), this._loaded.push(n.get(0)))
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(i) {
            this._core = i, this._previousHeight = null, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
                }, this),
                "loaded.owl.lazy": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
            var n = this;
            e(t).on("load", function() {
                n._core.settings.autoHeight && n.update()
            }), e(t).resize(function() {
                n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function() {
                    n.update()
                }, 250))
            })
        };
        r.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, r.prototype.update = function() {
            var t = this._core._current,
                i = t + this._core.settings.items,
                n = this._core.settings.lazyLoad,
                r = this._core.$stage.children().toArray().slice(t, i),
                s = [],
                a = 0;
            e.each(r, function(t, i) {
                s.push(e(i).height())
            }), (a = Math.max.apply(null, s)) <= 1 && n && this._previousHeight && (a = this._previousHeight), this._previousHeight = a, this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
                }, this),
                "refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" === e.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": e.proxy(function(t) {
                    if (t.namespace) {
                        var i = e(t.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
                    }
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
                this.play(e)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, r.prototype.fetch = function(e, t) {
            var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                r = e.attr("data-width") || this._core.settings.videoWidth,
                s = e.attr("data-height") || this._core.settings.videoHeight,
                a = e.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if ((n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[a] = {
                type: i,
                id: n,
                width: r,
                height: s
            }, t.attr("data-video", a), this.thumbnail(e, this._videos[a])
        }, r.prototype.thumbnail = function(t, i) {
            var n, r, s = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                a = t.find("img"),
                o = "src",
                l = "",
                c = this._core.settings,
                d = function(i) {
                    '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? e("<div/>", {
                        class: "owl-video-tn " + l,
                        srcType: i
                    }) : e("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + i + ")"
                    }), t.after(n), t.after('<div class="owl-video-play-icon"></div>')
                };
            if (t.wrap(e("<div/>", {
                    class: "owl-video-wrapper",
                    style: s
                })), this._core.settings.lazyLoad && (o = "data-src", l = "owl-lazy"), a.length) return d(a.attr(o)), a.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(r)) : "vimeo" === i.type ? e.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(e) {
                    r = e[0].thumbnail_large, d(r)
                }
            }) : "vzaar" === i.type && e.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(e) {
                    r = e.framegrab_url, d(r)
                }
            })
        }, r.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function(t) {
            var i, n = e(t.target).closest("." + this._core.settings.itemClass),
                r = this._videos[n.attr("data-video")],
                s = r.width || "100%",
                a = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a), i.attr("width", s), "youtube" === r.type ? i.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? i.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && i.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), e(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function() {
            var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return t && e(t).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
                    e.namespace && (this.swapping = "translated" == e.type)
                }, this),
                "translate.owl.carousel": e.proxy(function(e) {
                    e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, r.prototype.swap = function() {
            if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
                this.core.speed(0);
                var t, i = e.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    a = this.core.settings.animateOut;
                this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(a)), s && r.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
            }
        }, r.prototype.clear = function(t) {
            e(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": e.proxy(function(e, t, i) {
                    e.namespace && this.play(t, i)
                }, this),
                "stop.owl.autoplay": e.proxy(function(e) {
                    e.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype._next = function(n) {
            this._call = t.setTimeout(e.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
        }, r.prototype.read = function() {
            return (new Date).getTime() - this._time
        }, r.prototype.play = function(i, n) {
            var r;
            this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % i - r, this._timeout = i, this._call = t.setTimeout(e.proxy(this._next, this, n), i - r)
        }, r.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
        }, r.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        "use strict";
        var r = function(t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": e.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" == e.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function() {
            var t, i = this._core.settings;
            for (t in this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [e('<button role="button">').addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy(function(t) {
                    var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                    t.preventDefault(), this.to(n, i.dotsSpeed)
                }, this)), this._overrides) this._core[t] = e.proxy(this[t], this)
        }, r.prototype.destroy = function() {
            var e, t, i, n, r;
            for (e in r = this._core.settings, this._handlers) this.$element.off(e, this._handlers[e]);
            for (t in this._controls) "$relative" === t && r.navContainer ? this._controls[t].html("") : this._controls[t].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, r.prototype.update = function() {
            var e, t, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                r = this._core.maximum(!0),
                s = this._core.settings,
                a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
            if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                for (this._pages = [], e = i, t = 0, 0; e < n; e++) {
                    if (t >= a || 0 === t) {
                        if (this._pages.push({
                                start: Math.min(r, e - i),
                                end: e - i + a - 1
                            }), Math.min(r, e - i) === r) break;
                        t = 0, 0
                    }
                    t += this._core.mergers(this._core.relative(e))
                }
        }, r.prototype.draw = function() {
            var t, i = this._core.settings,
                n = this._core.items().length <= i.items,
                r = this._core.relative(this._core.current()),
                s = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function(t) {
            var i = this._core.settings;
            t.page = {
                index: e.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, r.prototype.current = function() {
            var t = this._core.relative(this._core.current());
            return e.grep(this._pages, e.proxy(function(e, i) {
                return e.start <= t && e.end >= t
            }, this)).pop()
        }, r.prototype.getPosition = function(t) {
            var i, n, r = this._core.settings;
            return "page" == r.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += r.slideBy : i -= r.slideBy), i
        }, r.prototype.next = function(t) {
            e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, r.prototype.prev = function(t) {
            e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, r.prototype.to = function(t, i, n) {
            var r;
            !n && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
        }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        "use strict";
        var r = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": e.proxy(function(t) {
                    if (t.namespace) {
                        var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = t.content
                    }
                }, this),
                "changed.owl.carousel": e.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            r = e.map(this._hashes, function(e, t) {
                                return e === n ? t : null
                            }).join();
                        if (!r || t.location.hash.slice(1) === r) return;
                        t.location.hash = r
                    }
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
                var i = t.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    r = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }, this))
        };
        r.Defaults = {
            URLhashListener: !1
        }, r.prototype.destroy = function() {
            var i, n;
            for (i in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        function r(t, i) {
            var r = !1,
                s = t.charAt(0).toUpperCase() + t.slice(1);
            return e.each((t + " " + o.join(s + " ") + s).split(" "), function(e, t) {
                if (a[t] !== n) return r = !i || t, !1
            }), r
        }

        function s(e) {
            return r(e, !0)
        }
        var a = e("<support>").get(0).style,
            o = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = function() {
                return !!r("transform")
            },
            d = function() {
                return !!r("perspective")
            },
            u = function() {
                return !!r("animation")
            };
        (function() {
            return !!r("transition")
        })() && (e.support.transition = new String(s("transition")), e.support.transition.end = l.transition.end[e.support.transition]), u() && (e.support.animation = new String(s("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c() && (e.support.transform = new String(s("transform")), e.support.transform3d = d())
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        "use strict";
        var r = function(t) {
            this.owl = t, this._thumbcontent = [], this._identifier = 0, this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
                "prepared.owl.carousel": e.proxy(function(t) {
                    if (!t.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
                        if (t.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                            var i = e(t.content).find("img");
                            this._thumbcontent.push(i)
                        }
                    } else void 0 !== e(t.content).find("[data-thumb]").attr("data-thumb") && this._thumbcontent.push(e(t.content).find("[data-thumb]").attr("data-thumb"))
                }, this),
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this.owl.options.thumbs && (this.render(), this.listen(), this._identifier = this.owl.$element.data("slider-id"), this.setActive())
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" === e.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"), this.setActive())
                }, this)
            }, this.owl.options = e.extend({}, r.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
        };
        r.Defaults = {
            thumbs: !0,
            thumbImage: !1,
            thumbContainerClass: "owl-thumbs",
            thumbItemClass: "owl-thumb-item",
            moveThumbsInside: !1
        }, r.prototype.listen = function() {
            var t = this.owl.options;
            t.thumbsPrerendered && (this._thumbcontent._thumbcontainer = e("." + t.thumbContainerClass)), e(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), e.proxy(function(i) {
                this._identifier = e(i.target).closest("." + t.thumbContainerClass).data("slider-id");
                var n = e(i.target).parent().is(this._thumbcontent._thumbcontainer) ? e(i.target).index() : e(i.target).closest("." + t.thumbItemClass).index();
                t.thumbsPrerendered ? e("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [n, t.dotsSpeed, !0]) : this.owl.to(n, t.dotsSpeed), i.preventDefault()
            }, this))
        }, r.prototype.render = function() {
            var t, i = this.owl.options;
            if (i.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = e("." + i.thumbContainerClass), i.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = e("<div>").addClass(i.thumbContainerClass).appendTo(this.$element), i.thumbImage)
                for (t = 0; t < this._thumbcontent.length; ++t) this._thumbcontent._thumbcontainer.append("<button class=" + i.thumbItemClass + '><img src="' + this._thumbcontent[t].attr("src") + '" alt="' + this._thumbcontent[t].attr("alt") + '" /></button>');
            else
                for (t = 0; t < this._thumbcontent.length; ++t) this._thumbcontent._thumbcontainer.append("<button class=" + i.thumbItemClass + ">" + this._thumbcontent[t] + "</button>")
        }, r.prototype.setActive = function() {
            this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
            var t = this.owl.options,
                i = t.thumbsPrerendered ? e("." + t.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
            i.children().filter(".active").removeClass("active"), i.children().eq(this.owl_currentitem).addClass("active")
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this._handlers) this.owl.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Thumbs = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
    }(this, function() {
        "use strict";
        var e = "undefined" == typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            t = "undefined" == typeof window ? {
                document: e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            } : window,
            i = function(e) {
                for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                return this.length = e.length, this
            };

        function n(n, r) {
            var s = [],
                a = 0;
            if (n && !r && n instanceof i) return n;
            if (n)
                if ("string" == typeof n) {
                    var o, l, c = n.trim();
                    if (0 <= c.indexOf("<") && 0 <= c.indexOf(">")) {
                        var d = "div";
                        for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), (l = e.createElement(d)).innerHTML = c, a = 0; a < l.childNodes.length; a += 1) s.push(l.childNodes[a])
                    } else
                        for (o = r || "#" !== n[0] || n.match(/[ .<>:~]/) ? (r || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], a = 0; a < o.length; a += 1) o[a] && s.push(o[a])
                } else if (n.nodeType || n === t || n === e) s.push(n);
            else if (0 < n.length && n[0].nodeType)
                for (a = 0; a < n.length; a += 1) s.push(n[a]);
            return new i(s)
        }

        function r(e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        n.fn = i.prototype, n.Class = i, n.Dom7 = i;
        var s = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                return this
            },
            attr: function(e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(e, t);
                    else
                        for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                var i;
                if (void 0 !== t) {
                    for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e, i.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e, i.transitionDuration = e
                }
                return this
            },
            on: function() {
                for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                var r = t[0],
                    s = t[1],
                    a = t[2],
                    o = t[3];

                function l(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(s)) a.apply(t, i);
                        else
                            for (var r = n(t).parents(), o = 0; o < r.length; o += 1) n(r[o]).is(s) && a.apply(r[o], i)
                    }
                }

                function c(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
                }
                "function" == typeof t[1] && (r = (e = t)[0], a = e[1], o = e[2], s = void 0), o || (o = !1);
                for (var d, u = r.split(" "), h = 0; h < this.length; h += 1) {
                    var p = this[h];
                    if (s)
                        for (d = 0; d < u.length; d += 1) {
                            var f = u[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                                listener: a,
                                proxyListener: l
                            }), p.addEventListener(f, l, o)
                        } else
                            for (d = 0; d < u.length; d += 1) {
                                var m = u[d];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                                    listener: a,
                                    proxyListener: c
                                }), p.addEventListener(m, c, o)
                            }
                }
                return this
            },
            off: function() {
                for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                var n = t[0],
                    r = t[1],
                    s = t[2],
                    a = t[3];
                "function" == typeof t[1] && (n = (e = t)[0], s = e[1], a = e[2], r = void 0), a || (a = !1);
                for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                    for (var c = o[l], d = 0; d < this.length; d += 1) {
                        var u = this[d],
                            h = void 0;
                        if (!r && u.dom7Listeners ? h = u.dom7Listeners[c] : r && u.dom7LiveListeners && (h = u.dom7LiveListeners[c]), h && h.length)
                            for (var p = h.length - 1; 0 <= p; p -= 1) {
                                var f = h[p];
                                s && f.listener === s ? (u.removeEventListener(c, f.proxyListener, a), h.splice(p, 1)) : s && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === s ? (u.removeEventListener(c, f.proxyListener, a), h.splice(p, 1)) : s || (u.removeEventListener(c, f.proxyListener, a), h.splice(p, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                for (var r = i[0].split(" "), s = i[1], a = 0; a < r.length; a += 1)
                    for (var o = r[a], l = 0; l < this.length; l += 1) {
                        var c = this[l],
                            d = void 0;
                        try {
                            d = new t.CustomEvent(o, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (i) {
                            (d = e.createEvent("Event")).initEvent(o, !0, !0), d.detail = s
                        }
                        c.dom7EventData = i.filter(function(e, t) {
                            return 0 < t
                        }), c.dispatchEvent(d), c.dom7EventData = [], delete c.dom7EventData
                    }
                return this
            },
            transitionEnd: function(e) {
                var t, i = ["webkitTransitionEnd", "transitionend"],
                    n = this;

                function r(s) {
                    if (s.target === this)
                        for (e.call(this, s), t = 0; t < i.length; t += 1) n.off(i[t], r)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1) n.on(i[t], r);
                return this
            },
            outerWidth: function(e) {
                if (0 < this.length) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (0 < this.length) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (0 < this.length) {
                    var i = this[0],
                        n = i.getBoundingClientRect(),
                        r = e.body,
                        s = i.clientTop || r.clientTop || 0,
                        a = i.clientLeft || r.clientLeft || 0,
                        o = i === t ? t.scrollY : i.scrollTop,
                        l = i === t ? t.scrollX : i.scrollLeft;
                    return {
                        top: n.top + o - s,
                        left: n.left + l - a
                    }
                }
                return null
            },
            css: function(e, i) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (var r in e) this[n].style[r] = e[r];
                        return this
                    }
                    if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(r) {
                var s, a, o = this[0];
                if (!o || void 0 === r) return !1;
                if ("string" == typeof r) {
                    if (o.matches) return o.matches(r);
                    if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
                    if (o.msMatchesSelector) return o.msMatchesSelector(r);
                    for (s = n(r), a = 0; a < s.length; a += 1)
                        if (s[a] === o) return !0;
                    return !1
                }
                if (r === e) return o === e;
                if (r === t) return o === t;
                if (r.nodeType || r instanceof i) {
                    for (s = r.nodeType ? [r] : r, a = 0; a < s.length; a += 1)
                        if (s[a] === o) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t, n = this.length;
                return new i(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function() {
                for (var t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                for (var s = 0; s < n.length; s += 1) {
                    t = n[s];
                    for (var a = 0; a < this.length; a += 1)
                        if ("string" == typeof t) {
                            var o = e.createElement("div");
                            for (o.innerHTML = t; o.firstChild;) this[a].appendChild(o.firstChild)
                        } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1) this[a].appendChild(t[l]);
                    else this[a].appendChild(t)
                }
                return this
            },
            prepend: function(t) {
                var n, r;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var s = e.createElement("div");
                        for (s.innerHTML = t, r = s.childNodes.length - 1; 0 <= r; r -= 1) this[n].insertBefore(s.childNodes[r], this[n].childNodes[0])
                    } else if (t instanceof i)
                    for (r = 0; r < t.length; r += 1) this[n].insertBefore(t[r], this[n].childNodes[0]);
                else this[n].insertBefore(t, this[n].childNodes[0]);
                return this
            },
            next: function(e) {
                return 0 < this.length ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
            },
            nextAll: function(e) {
                var t = [],
                    r = this[0];
                if (!r) return new i([]);
                for (; r.nextElementSibling;) {
                    var s = r.nextElementSibling;
                    e ? n(s).is(e) && t.push(s) : t.push(s), r = s
                }
                return new i(t)
            },
            prev: function(e) {
                if (0 < this.length) {
                    var t = this[0];
                    return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
                }
                return new i([])
            },
            prevAll: function(e) {
                var t = [],
                    r = this[0];
                if (!r) return new i([]);
                for (; r.previousElementSibling;) {
                    var s = r.previousElementSibling;
                    e ? n(s).is(e) && t.push(s) : t.push(s), r = s
                }
                return new i(t)
            },
            parent: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return n(r(t))
            },
            parents: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].parentNode; s;) e ? n(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
                return n(r(t))
            },
            closest: function(e) {
                var t = this;
                return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var r = this[n].querySelectorAll(e), s = 0; s < r.length; s += 1) t.push(r[s]);
                return new i(t)
            },
            children: function(e) {
                for (var t = [], s = 0; s < this.length; s += 1)
                    for (var a = this[s].childNodes, o = 0; o < a.length; o += 1) e ? 1 === a[o].nodeType && n(a[o]).is(e) && t.push(a[o]) : 1 === a[o].nodeType && t.push(a[o]);
                return new i(r(t))
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, r;
                for (i = 0; i < e.length; i += 1) {
                    var s = n(e[i]);
                    for (r = 0; r < s.length; r += 1) this[this.length] = s[r], this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? t.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(s).forEach(function(e) {
            n.fn[e] = s[e]
        });
        var a, o, l, c, d = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, i) {
                    var n, r, s;
                    void 0 === i && (i = "x");
                    var a = t.getComputedStyle(e, null);
                    return t.WebKitCSSMatrix ? (6 < (r = a.transform || a.webkitTransform).split(",").length && (r = r.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), s = new t.WebKitCSSMatrix("none" === r ? "" : r)) : n = (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (r = t.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (r = t.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                },
                parseUrlQuery: function(e) {
                    var i, n, r, s, a = {},
                        o = e || t.location.href;
                    if ("string" == typeof o && o.length)
                        for (s = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                                return "" !== e
                            })).length, i = 0; i < s; i += 1) r = n[i].replace(/#\S+/g, "").split("="), a[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                    return a
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                        var r = e[n];
                        if (null != r)
                            for (var s = Object.keys(Object(r)), a = 0, o = s.length; a < o; a += 1) {
                                var l = s[a],
                                    c = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== c && c.enumerable && (d.isObject(i[l]) && d.isObject(r[l]) ? d.extend(i[l], r[l]) : !d.isObject(i[l]) && d.isObject(r[l]) ? (i[l] = {}, d.extend(i[l], r[l])) : i[l] = r[l])
                            }
                    }
                    return i
                }
            },
            u = (l = e.createElement("div"), {
                touch: t.Modernizr && !0 === t.Modernizr.touch || !!(0 < t.navigator.maxTouchPoints || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && 0 < t.navigator.maxTouchPoints),
                prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
                transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (a = l.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
                flexbox: function() {
                    for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                        if (t[i] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in t
            }),
            h = {
                isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (c = t.navigator.userAgent.toLowerCase(), 0 <= c.indexOf("safari") && c.indexOf("chrome") < 0 && c.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            },
            p = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            f = {
                components: {
                    configurable: !0
                }
            };
        p.prototype.on = function(e, t, i) {
            var n = this;
            if ("function" != typeof t) return n;
            var r = i ? "unshift" : "push";
            return e.split(" ").forEach(function(e) {
                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t)
            }), n
        }, p.prototype.once = function(e, t, i) {
            var n = this;
            if ("function" != typeof t) return n;

            function r() {
                for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
                t.apply(n, i), n.off(e, r), r.f7proxy && delete r.f7proxy
            }
            return r.f7proxy = t, n.on(e, r, i)
        }, p.prototype.off = function(e, t) {
            var i = this;
            return i.eventsListeners && e.split(" ").forEach(function(e) {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(n, r) {
                    (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(r, 1)
                })
            }), i
        }, p.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n, r, s = this;
            return s.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), r = s) : (i = e[0].events, n = e[0].data, r = e[0].context || s), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (s.eventsListeners && s.eventsListeners[e]) {
                    var t = [];
                    s.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }), t.forEach(function(e) {
                        e.apply(r, n)
                    })
                }
            })), s
        }, p.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(i) {
                var n = t.modules[i];
                n.params && d.extend(e, n.params)
            })
        }, p.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(i) {
                var n = t.modules[i],
                    r = e[i] || {};
                n.instance && Object.keys(n.instance).forEach(function(e) {
                    var i = n.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }), n.on && t.on && Object.keys(n.on).forEach(function(e) {
                    t.on(e, n.on[e])
                }), n.create && n.create.bind(t)(r)
            })
        }, f.components.set = function(e) {
            this.use && this.use(e)
        }, p.installModule = function(e) {
            for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var r = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
            return (n.prototype.modules[r] = e).proto && Object.keys(e.proto).forEach(function(t) {
                n.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(function(t) {
                n[t] = e.static[t]
            }), e.install && e.install.apply(n, t), n
        }, p.use = function(e) {
            for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
            var n = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return n.installModule(e)
            }), n) : n.installModule.apply(n, [e].concat(t))
        }, Object.defineProperties(p, f);
        var m = {
                updateSize: function() {
                    var e, t, i = this,
                        n = i.$el;
                    e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), d.extend(i, {
                        width: e,
                        height: t,
                        size: i.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this,
                        i = e.params,
                        n = e.$wrapperEl,
                        r = e.size,
                        s = e.rtlTranslate,
                        a = e.wrongRTL,
                        o = e.virtual && i.virtual.enabled,
                        l = o ? e.virtual.slides.length : e.slides.length,
                        c = n.children("." + e.params.slideClass),
                        h = o ? e.virtual.slides.length : c.length,
                        p = [],
                        f = [],
                        m = [],
                        g = i.slidesOffsetBefore;
                    "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
                    var v = i.slidesOffsetAfter;
                    "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
                    var b = e.snapGrid.length,
                        y = e.snapGrid.length,
                        w = i.spaceBetween,
                        _ = -g,
                        x = 0,
                        E = 0;
                    if (void 0 !== r) {
                        var C, T;
                        "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, s ? c.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < i.slidesPerColumn && (C = Math.floor(h / i.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                        for (var S, k = i.slidesPerColumn, N = C / k, M = Math.floor(h / i.slidesPerColumn), I = 0; I < h; I += 1) {
                            T = 0;
                            var D = c.eq(I);
                            if (1 < i.slidesPerColumn) {
                                var A = void 0,
                                    L = void 0,
                                    P = void 0;
                                "column" === i.slidesPerColumnFill ? (P = I - (L = Math.floor(I / k)) * k, (M < L || L === M && P === k - 1) && k <= (P += 1) && (P = 0, L += 1), A = L + P * C / k, D.css({
                                    "-webkit-box-ordinal-group": A,
                                    "-moz-box-ordinal-group": A,
                                    "-ms-flex-order": A,
                                    "-webkit-order": A,
                                    order: A
                                })) : L = I - (P = Math.floor(I / N)) * N, D.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== P && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", P)
                            }
                            if ("none" !== D.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var z = t.getComputedStyle(D[0], null),
                                        O = D[0].style.transform,
                                        $ = D[0].style.webkitTransform;
                                    if (O && (D[0].style.transform = "none"), $ && (D[0].style.webkitTransform = "none"), i.roundLengths) T = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                                    else if (e.isHorizontal()) {
                                        var j = parseFloat(z.getPropertyValue("width")),
                                            B = parseFloat(z.getPropertyValue("padding-left")),
                                            H = parseFloat(z.getPropertyValue("padding-right")),
                                            R = parseFloat(z.getPropertyValue("margin-left")),
                                            q = parseFloat(z.getPropertyValue("margin-right")),
                                            W = z.getPropertyValue("box-sizing");
                                        T = W && "border-box" === W ? j + R + q : j + B + H + R + q
                                    } else {
                                        var F = parseFloat(z.getPropertyValue("height")),
                                            U = parseFloat(z.getPropertyValue("padding-top")),
                                            V = parseFloat(z.getPropertyValue("padding-bottom")),
                                            X = parseFloat(z.getPropertyValue("margin-top")),
                                            Y = parseFloat(z.getPropertyValue("margin-bottom")),
                                            G = z.getPropertyValue("box-sizing");
                                        T = G && "border-box" === G ? F + X + Y : F + U + V + X + Y
                                    }
                                    O && (D[0].style.transform = O), $ && (D[0].style.webkitTransform = $), i.roundLengths && (T = Math.floor(T))
                                } else T = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (T = Math.floor(T)), c[I] && (e.isHorizontal() ? c[I].style.width = T + "px" : c[I].style.height = T + "px");
                                c[I] && (c[I].swiperSlideSize = T), m.push(T), i.centeredSlides ? (_ = _ + T / 2 + x / 2 + w, 0 === x && 0 !== I && (_ = _ - r / 2 - w), 0 === I && (_ = _ - r / 2 - w), Math.abs(_) < .001 && (_ = 0), i.roundLengths && (_ = Math.floor(_)), E % i.slidesPerGroup == 0 && p.push(_), f.push(_)) : (i.roundLengths && (_ = Math.floor(_)), E % i.slidesPerGroup == 0 && p.push(_), f.push(_), _ = _ + T + w), e.virtualSize += T + w, x = T, E += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, r) + v, s && a && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
                                width: e.virtualSize + i.spaceBetween + "px"
                            }), u.flexbox && !i.setWrapperSize || (e.isHorizontal() ? n.css({
                                width: e.virtualSize + i.spaceBetween + "px"
                            }) : n.css({
                                height: e.virtualSize + i.spaceBetween + "px"
                            })), 1 < i.slidesPerColumn && (e.virtualSize = (T + i.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, e.isHorizontal() ? n.css({
                                width: e.virtualSize + i.spaceBetween + "px"
                            }) : n.css({
                                height: e.virtualSize + i.spaceBetween + "px"
                            }), i.centeredSlides)) {
                            S = [];
                            for (var Q = 0; Q < p.length; Q += 1) {
                                var K = p[Q];
                                i.roundLengths && (K = Math.floor(K)), p[Q] < e.virtualSize + p[0] && S.push(K)
                            }
                            p = S
                        }
                        if (!i.centeredSlides) {
                            S = [];
                            for (var Z = 0; Z < p.length; Z += 1) {
                                var J = p[Z];
                                i.roundLengths && (J = Math.floor(J)), p[Z] <= e.virtualSize - r && S.push(J)
                            }
                            p = S, 1 < Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - r)
                        }
                        if (0 === p.length && (p = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? s ? c.css({
                                marginLeft: w + "px"
                            }) : c.css({
                                marginRight: w + "px"
                            }) : c.css({
                                marginBottom: w + "px"
                            })), i.centerInsufficientSlides) {
                            var ee = 0;
                            if (m.forEach(function(e) {
                                    ee += e + (i.spaceBetween ? i.spaceBetween : 0)
                                }), (ee -= i.spaceBetween) < r) {
                                var te = (r - ee) / 2;
                                p.forEach(function(e, t) {
                                    p[t] = e - te
                                }), f.forEach(function(e, t) {
                                    f[t] = e + te
                                })
                            }
                        }
                        d.extend(e, {
                            slides: c,
                            snapGrid: p,
                            slidesGrid: f,
                            slidesSizesGrid: m
                        }), h !== l && e.emit("slidesLengthChange"), p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, i = this,
                        n = [],
                        r = 0;
                    if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                        for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                            var s = i.activeIndex + t;
                            if (s > i.slides.length) break;
                            n.push(i.slides.eq(s)[0])
                        } else n.push(i.slides.eq(i.activeIndex)[0]);
                    for (t = 0; t < n.length; t += 1)
                        if (void 0 !== n[t]) {
                            var a = n[t].offsetHeight;
                            r = r < a ? a : r
                        }
                    r && i.$wrapperEl.css("height", r + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        i = t.params,
                        r = t.slides,
                        s = t.rtlTranslate;
                    if (0 !== r.length) {
                        void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = -e;
                        s && (a = e), r.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var o = 0; o < r.length; o += 1) {
                            var l = r[o],
                                c = (a + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                            if (i.watchSlidesVisibility) {
                                var d = -(a - l.swiperSlideOffset),
                                    u = d + t.slidesSizesGrid[o];
                                (0 <= d && d < t.size || 0 < u && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass))
                            }
                            l.progress = s ? -c : c
                        }
                        t.visibleSlides = n(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        i = t.params,
                        n = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        s = t.isBeginning,
                        a = t.isEnd,
                        o = s,
                        l = a;
                    0 === n ? a = s = !(r = 0) : (s = (r = (e - t.minTranslate()) / n) <= 0, a = 1 <= r), d.extend(t, {
                        progress: r,
                        isBeginning: s,
                        isEnd: a
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !s || l && !a) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        i = t.slides,
                        n = t.params,
                        r = t.$wrapperEl,
                        s = t.activeIndex,
                        a = t.realIndex,
                        o = t.virtual && n.virtual.enabled;
                    i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + s + '"]') : i.eq(s)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
                    var l = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                    var c = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, i = this,
                        n = i.rtlTranslate ? i.translate : -i.translate,
                        r = i.slidesGrid,
                        s = i.snapGrid,
                        a = i.params,
                        o = i.activeIndex,
                        l = i.realIndex,
                        c = i.snapIndex,
                        u = e;
                    if (void 0 === u) {
                        for (var h = 0; h < r.length; h += 1) void 0 !== r[h + 1] ? n >= r[h] && n < r[h + 1] - (r[h + 1] - r[h]) / 2 ? u = h : n >= r[h] && n < r[h + 1] && (u = h + 1) : n >= r[h] && (u = h);
                        a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                    }
                    if ((t = 0 <= s.indexOf(n) ? s.indexOf(n) : Math.floor(u / a.slidesPerGroup)) >= s.length && (t = s.length - 1), u !== o) {
                        var p = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                        d.extend(i, {
                            snapIndex: t,
                            realIndex: p,
                            previousIndex: o,
                            activeIndex: u
                        }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), i.emit("slideChange")
                    } else t !== c && (i.snapIndex = t, i.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this,
                        i = t.params,
                        r = n(e.target).closest("." + i.slideClass)[0],
                        s = !1;
                    if (r)
                        for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === r && (s = !0);
                    if (!r || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n(r).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            g = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        n = this.translate,
                        r = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -n : n;
                    var s = d.getTranslate(r[0], e);
                    return i && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var i = this,
                        n = i.rtlTranslate,
                        r = i.params,
                        s = i.$wrapperEl,
                        a = i.progress,
                        o = 0,
                        l = 0;
                    i.isHorizontal() ? o = n ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (u.transforms3d ? s.transform("translate3d(" + o + "px, " + l + "px, 0px)") : s.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
                    var c = i.maxTranslate() - i.minTranslate();
                    (0 === c ? 0 : (e - i.minTranslate()) / c) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            },
            v = {
                slideTo: function(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var r = this,
                        s = e;
                    s < 0 && (s = 0);
                    var a = r.params,
                        o = r.snapGrid,
                        l = r.slidesGrid,
                        c = r.previousIndex,
                        d = r.activeIndex,
                        h = r.rtlTranslate;
                    if (r.animating && a.preventInteractionOnTransition) return !1;
                    var p = Math.floor(s / a.slidesPerGroup);
                    p >= o.length && (p = o.length - 1), (d || a.initialSlide || 0) === (c || 0) && i && r.emit("beforeSlideChangeStart");
                    var f, m = -o[p];
                    if (r.updateProgress(m), a.normalizeSlideIndex)
                        for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (s = g);
                    if (r.initialized && s !== d) {
                        if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (d || 0) !== s) return !1
                    }
                    return f = d < s ? "next" : s < d ? "prev" : "reset", h && -m === r.translate || !h && m === r.translate ? (r.updateActiveIndex(s), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1) : (0 !== t && u.transition ? (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.transitionEnd(i, f)), !0)
                },
                slideToLoop: function(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var r = e;
                    return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n)
                },
                slideNext: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this,
                        r = n.params,
                        s = n.animating;
                    return r.loop ? !s && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this,
                        r = n.params,
                        s = n.animating,
                        a = n.snapGrid,
                        o = n.slidesGrid,
                        l = n.rtlTranslate;
                    if (r.loop) {
                        if (s) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var d, u = c(l ? n.translate : -n.translate),
                        h = a.map(function(e) {
                            return c(e)
                        }),
                        p = (o.map(function(e) {
                            return c(e)
                        }), a[h.indexOf(u)], a[h.indexOf(u) - 1]);
                    return void 0 !== p && (d = o.indexOf(p)) < 0 && (d = n.activeIndex - 1), n.slideTo(d, e, t, i)
                },
                slideReset: function(e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this,
                        r = n.activeIndex,
                        s = Math.floor(r / n.params.slidesPerGroup);
                    if (s < n.snapGrid.length - 1) {
                        var a = n.rtlTranslate ? n.translate : -n.translate,
                            o = n.snapGrid[s];
                        (n.snapGrid[s + 1] - o) / 2 < a - o && (r = n.params.slidesPerGroup)
                    }
                    return n.slideTo(r, e, t, i)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        i = t.params,
                        r = t.$wrapperEl,
                        s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        a = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - s / 2 || a > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), a = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                            t.slideTo(a)
                        })) : t.slideTo(a) : a > t.slides.length - s ? (t.loopFix(), a = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                            t.slideTo(a)
                        })) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            },
            b = {
                loopCreate: function() {
                    var t = this,
                        i = t.params,
                        r = t.$wrapperEl;
                    r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var s = r.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var a = i.slidesPerGroup - s.length % i.slidesPerGroup;
                        if (a !== i.slidesPerGroup) {
                            for (var o = 0; o < a; o += 1) {
                                var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                r.append(l)
                            }
                            s = r.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
                    var c = [],
                        d = [];
                    s.each(function(e, i) {
                        var r = n(i);
                        e < t.loopedSlides && d.push(i), e < s.length && e >= s.length - t.loopedSlides && c.push(i), r.attr("data-swiper-slide-index", e)
                    });
                    for (var u = 0; u < d.length; u += 1) r.append(n(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var h = c.length - 1; 0 <= h; h -= 1) r.prepend(n(c[h].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this,
                        i = t.params,
                        n = t.activeIndex,
                        r = t.slides,
                        s = t.loopedSlides,
                        a = t.allowSlidePrev,
                        o = t.allowSlideNext,
                        l = t.snapGrid,
                        c = t.rtlTranslate;
                    t.allowSlidePrev = !0, t.allowSlideNext = !0;
                    var d = -l[n] - t.getTranslate();
                    n < s ? (e = r.length - 3 * s + n, e += s, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? -t.translate : t.translate) - d)) : ("auto" === i.slidesPerView && 2 * s <= n || n >= r.length - s) && (e = -r.length + n + s, e += s, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? -t.translate : t.translate) - d)), t.allowSlidePrev = a, t.allowSlideNext = o
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            y = {
                setGrabCursor: function(e) {
                    if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    u.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                }
            },
            w = {
                appendSlide: function(e) {
                    var t = this,
                        i = t.$wrapperEl,
                        n = t.params;
                    if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]);
                    else i.append(e);
                    n.loop && t.loopCreate(), n.observer && u.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        r = t.activeIndex;
                    i.loop && t.loopDestroy();
                    var s = r + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var a = 0; a < e.length; a += 1) e[a] && n.prepend(e[a]);
                        s = r + e.length
                    } else n.prepend(e);
                    i.loop && t.loopCreate(), i.observer && u.observer || t.update(), t.slideTo(s, 0, !1)
                },
                addSlide: function(e, t) {
                    var i = this,
                        n = i.$wrapperEl,
                        r = i.params,
                        s = i.activeIndex;
                    r.loop && (s -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + r.slideClass));
                    var a = i.slides.length;
                    if (e <= 0) i.prependSlide(t);
                    else if (a <= e) i.appendSlide(t);
                    else {
                        for (var o = e < s ? s + 1 : s, l = [], c = a - 1; e <= c; c -= 1) {
                            var d = i.slides.eq(c);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var h = 0; h < t.length; h += 1) t[h] && n.append(t[h]);
                            o = e < s ? s + t.length : s
                        } else n.append(t);
                        for (var p = 0; p < l.length; p += 1) n.append(l[p]);
                        r.loop && i.loopCreate(), r.observer && u.observer || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        r = t.activeIndex;
                    i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children("." + i.slideClass));
                    var s, a = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) s = e[o], t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1);
                        a = Math.max(a, 0)
                    } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
                    i.loop && t.loopCreate(), i.observer && u.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            _ = function() {
                var i = t.navigator.userAgent,
                    n = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: t.cordova || t.phonegap,
                        phonegap: t.cordova || t.phonegap
                    },
                    r = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    s = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                    a = i.match(/(iPad).*OS\s([\d_]+)/),
                    o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !a && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (r && (n.os = "windows", n.osVersion = r[2], n.windows = !0), s && !r && (n.os = "android", n.osVersion = s[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (a || l || o) && (n.os = "ios", n.ios = !0), l && !o && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), a && (n.osVersion = a[2].replace(/_/g, "."), n.ipad = !0), o && (n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || a || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
                    var c = n.osVersion.split("."),
                        d = e.querySelector('meta[name="viewport"]');
                    n.minimalUi = !n.webView && (o || l) && (1 * c[0] == 7 ? 1 <= 1 * c[1] : 7 < 1 * c[0]) && d && 0 <= d.getAttribute("content").indexOf("minimal-ui")
                }
                return n.pixelRatio = t.devicePixelRatio || 1, n
            }();

        function x() {
            var e = this,
                t = e.params,
                i = e.el;
            if (!i || 0 !== i.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var n = e.allowSlideNext,
                    r = e.allowSlidePrev,
                    s = e.snapGrid;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = r, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
            }
        }
        var E = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            C = {
                update: m,
                translate: g,
                transition: {
                    setTransition: function(e, t) {
                        this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        var i = this,
                            n = i.activeIndex,
                            r = i.params,
                            s = i.previousIndex;
                        r.autoHeight && i.updateAutoHeight();
                        var a = t;
                        if (a || (a = s < n ? "next" : n < s ? "prev" : "reset"), i.emit("transitionStart"), e && n !== s) {
                            if ("reset" === a) return void i.emit("slideResetTransitionStart");
                            i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                        }
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        var i = this,
                            n = i.activeIndex,
                            r = i.previousIndex;
                        i.animating = !1, i.setTransition(0);
                        var s = t;
                        if (s || (s = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== r) {
                            if ("reset" === s) return void i.emit("slideResetTransitionEnd");
                            i.emit("slideChangeTransitionEnd"), "next" === s ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                        }
                    }
                },
                slide: v,
                loop: b,
                grabCursor: y,
                manipulation: w,
                events: {
                    attachEvents: function() {
                        var i = this,
                            r = i.params,
                            s = i.touchEvents,
                            a = i.el,
                            o = i.wrapperEl;
                        i.onTouchStart = function(i) {
                            var r = this,
                                s = r.touchEventsData,
                                a = r.params,
                                o = r.touches;
                            if (!r.animating || !a.preventInteractionOnTransition) {
                                var l = i;
                                if (l.originalEvent && (l = l.originalEvent), s.isTouchEvent = "touchstart" === l.type, (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!s.isTouchEvent && "button" in l && 0 < l.button || s.isTouched && s.isMoved))
                                    if (a.noSwiping && n(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) r.allowClick = !0;
                                    else if (!a.swipeHandler || n(l).closest(a.swipeHandler)[0]) {
                                    o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                    var c = o.currentX,
                                        u = o.currentY,
                                        h = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                                        p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                                    if (!h || !(c <= p || c >= t.screen.width - p)) {
                                        if (d.extend(s, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0
                                            }), o.startX = c, o.startY = u, s.touchStartTime = d.now(), r.allowClick = !0, r.updateSize(), r.swipeDirection = void 0, 0 < a.threshold && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                                            var f = !0;
                                            n(l.target).is(s.formElements) && (f = !1), e.activeElement && n(e.activeElement).is(s.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                                            var m = f && r.allowTouchMove && a.touchStartPreventDefault;
                                            (a.touchStartForcePreventDefault || m) && l.preventDefault()
                                        }
                                        r.emit("touchStart", l)
                                    }
                                }
                            }
                        }.bind(i), i.onTouchMove = function(t) {
                            var i = this,
                                r = i.touchEventsData,
                                s = i.params,
                                a = i.touches,
                                o = i.rtlTranslate,
                                l = t;
                            if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
                                if (!r.isTouchEvent || "mousemove" !== l.type) {
                                    var c = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                        u = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                    if (l.preventedByNestedSwiper) return a.startX = c, void(a.startY = u);
                                    if (!i.allowTouchMove) return i.allowClick = !1, void(r.isTouched && (d.extend(a, {
                                        startX: c,
                                        startY: u,
                                        currentX: c,
                                        currentY: u
                                    }), r.touchStartTime = d.now()));
                                    if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                                        if (i.isVertical()) {
                                            if (u < a.startY && i.translate <= i.maxTranslate() || u > a.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                                        } else if (c < a.startX && i.translate <= i.maxTranslate() || c > a.startX && i.translate >= i.minTranslate()) return;
                                    if (r.isTouchEvent && e.activeElement && l.target === e.activeElement && n(l.target).is(r.formElements)) return r.isMoved = !0, void(i.allowClick = !1);
                                    if (r.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                        a.currentX = c, a.currentY = u;
                                        var h, p = a.currentX - a.startX,
                                            f = a.currentY - a.startY;
                                        if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < i.params.threshold))
                                            if (void 0 === r.isScrolling && (i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : 25 <= p * p + f * f && (h = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, r.isScrolling = i.isHorizontal() ? h > s.touchAngle : 90 - h > s.touchAngle)), r.isScrolling && i.emit("touchMoveOpposite", l), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                                            else if (r.startMoving) {
                                            i.allowClick = !1, l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), r.isMoved || (s.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), r.isMoved = !0;
                                            var m = i.isHorizontal() ? p : f;
                                            a.diff = m, m *= s.touchRatio, o && (m = -m), i.swipeDirection = 0 < m ? "prev" : "next", r.currentTranslate = m + r.startTranslate;
                                            var g = !0,
                                                v = s.resistanceRatio;
                                            if (s.touchReleaseOnEdges && (v = 0), 0 < m && r.currentTranslate > i.minTranslate() ? (g = !1, s.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + m, v))) : m < 0 && r.currentTranslate < i.maxTranslate() && (g = !1, s.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < s.threshold) {
                                                if (!(Math.abs(m) > s.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                                                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, void(a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                            }
                                            s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), s.freeMode && (0 === r.velocities.length && r.velocities.push({
                                                position: a[i.isHorizontal() ? "startX" : "startY"],
                                                time: r.touchStartTime
                                            }), r.velocities.push({
                                                position: a[i.isHorizontal() ? "currentX" : "currentY"],
                                                time: d.now()
                                            })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
                                        }
                                    }
                                }
                            } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", l)
                        }.bind(i), i.onTouchEnd = function(e) {
                            var t = this,
                                i = t.touchEventsData,
                                n = t.params,
                                r = t.touches,
                                s = t.rtlTranslate,
                                a = t.$wrapperEl,
                                o = t.slidesGrid,
                                l = t.snapGrid,
                                c = e;
                            if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                            n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var u, h = d.now(),
                                p = h - i.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), p < 300 && 300 < h - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                                    t && !t.destroyed && t.emit("click", c)
                                }, 300)), p < 300 && h - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = d.now(), d.nextTick(function() {
                                    t.destroyed || (t.allowClick = !0)
                                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                                if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                                if (n.freeModeMomentum) {
                                    if (1 < i.velocities.length) {
                                        var f = i.velocities.pop(),
                                            m = i.velocities.pop(),
                                            g = f.position - m.position,
                                            v = f.time - m.time;
                                        t.velocity = g / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < d.now() - f.time) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                    var b = 1e3 * n.freeModeMomentumRatio,
                                        y = t.velocity * b,
                                        w = t.translate + y;
                                    s && (w = -w);
                                    var _, x, E = !1,
                                        C = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                    if (w < t.maxTranslate()) n.freeModeMomentumBounce ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C), _ = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), n.loop && n.centeredSlides && (x = !0);
                                    else if (w > t.minTranslate()) n.freeModeMomentumBounce ? (w - t.minTranslate() > C && (w = t.minTranslate() + C), _ = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), n.loop && n.centeredSlides && (x = !0);
                                    else if (n.freeModeSticky) {
                                        for (var T, S = 0; S < l.length; S += 1)
                                            if (l[S] > -w) {
                                                T = S;
                                                break
                                            }
                                        w = -(w = Math.abs(l[T] - w) < Math.abs(l[T - 1] - w) || "next" === t.swipeDirection ? l[T] : l[T - 1])
                                    }
                                    if (x && t.once("transitionEnd", function() {
                                            t.loopFix()
                                        }), 0 !== t.velocity) b = s ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                                    else if (n.freeModeSticky) return void t.slideToClosest();
                                    n.freeModeMomentumBounce && E ? (t.updateProgress(_), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function() {
                                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(_), a.transitionEnd(function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    })) : t.velocity ? (t.updateProgress(w), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else if (n.freeModeSticky) return void t.slideToClosest();
                                (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            } else {
                                for (var k = 0, N = t.slidesSizesGrid[0], M = 0; M < o.length; M += n.slidesPerGroup) void 0 !== o[M + n.slidesPerGroup] ? u >= o[M] && u < o[M + n.slidesPerGroup] && (N = o[(k = M) + n.slidesPerGroup] - o[M]) : u >= o[M] && (k = M, N = o[o.length - 1] - o[o.length - 2]);
                                var I = (u - o[k]) / N;
                                if (p > n.longSwipesMs) {
                                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && (I >= n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (I > 1 - n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k))
                                } else {
                                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && t.slideTo(k + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
                                }
                            }
                        }.bind(i), i.onClick = function(e) {
                            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                        }.bind(i);
                        var l = "container" === r.touchEventsTarget ? a : o,
                            c = !!r.nested;
                        if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                            if (u.touch) {
                                var h = !("touchstart" !== s.start || !u.passiveListener || !r.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                l.addEventListener(s.start, i.onTouchStart, h), l.addEventListener(s.move, i.onTouchMove, u.passiveListener ? {
                                    passive: !1,
                                    capture: c
                                } : c), l.addEventListener(s.end, i.onTouchEnd, h)
                            }(r.simulateTouch && !_.ios && !_.android || r.simulateTouch && !u.touch && _.ios) && (l.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, c), e.addEventListener("mouseup", i.onTouchEnd, !1))
                        } else l.addEventListener(s.start, i.onTouchStart, !1), e.addEventListener(s.move, i.onTouchMove, c), e.addEventListener(s.end, i.onTouchEnd, !1);
                        (r.preventClicks || r.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0)
                    },
                    detachEvents: function() {
                        var t = this,
                            i = t.params,
                            n = t.touchEvents,
                            r = t.el,
                            s = t.wrapperEl,
                            a = "container" === i.touchEventsTarget ? r : s,
                            o = !!i.nested;
                        if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                            if (u.touch) {
                                var l = !("onTouchStart" !== n.start || !u.passiveListener || !i.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                a.removeEventListener(n.start, t.onTouchStart, l), a.removeEventListener(n.move, t.onTouchMove, o), a.removeEventListener(n.end, t.onTouchEnd, l)
                            }(i.simulateTouch && !_.ios && !_.android || i.simulateTouch && !u.touch && _.ios) && (a.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
                        } else a.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, o), e.removeEventListener(n.end, t.onTouchEnd, !1);
                        (i.preventClicks || i.preventClicksPropagation) && a.removeEventListener("click", t.onClick, !0), t.off(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var e = this,
                            t = e.activeIndex,
                            i = e.initialized,
                            n = e.loopedSlides;
                        void 0 === n && (n = 0);
                        var r = e.params,
                            s = r.breakpoints;
                        if (s && (!s || 0 !== Object.keys(s).length)) {
                            var a = e.getBreakpoint(s);
                            if (a && e.currentBreakpoint !== a) {
                                var o = a in s ? s[a] : void 0;
                                o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                                    var t = o[e];
                                    void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                });
                                var l = o || e.originalParams,
                                    c = l.direction && l.direction !== r.direction,
                                    u = r.loop && (l.slidesPerView !== r.slidesPerView || c);
                                c && i && e.changeDirection(), d.extend(e.params, l), d.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = a, u && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                            }
                        }
                    },
                    getBreakpoint: function(e) {
                        if (e) {
                            var i = !1,
                                n = [];
                            Object.keys(e).forEach(function(e) {
                                n.push(e)
                            }), n.sort(function(e, t) {
                                return parseInt(e, 10) - parseInt(t, 10)
                            });
                            for (var r = 0; r < n.length; r += 1) {
                                var s = n[r];
                                this.params.breakpointsInverse ? s <= t.innerWidth && (i = s) : s >= t.innerWidth && !i && (i = s)
                            }
                            return i || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this,
                            t = e.isLocked;
                        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var e = this.classNames,
                            t = this.params,
                            i = this.rtl,
                            n = this.$el,
                            r = [];
                        r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), u.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), 1 < t.slidesPerColumn && r.push("multirow"), _.android && r.push("android"), _.ios && r.push("ios"), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach(function(i) {
                            e.push(t.containerModifierClass + i)
                        }), n.addClass(e.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, i, n, r, s, a) {
                        var o;

                        function l() {
                            a && a()
                        }
                        e.complete && s ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, r && (o.sizes = r), n && (o.srcset = n), i && (o.src = i)) : l()
                    },
                    preloadImages: function() {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            T = {},
            S = function(e) {
                function t() {
                    for (var i, r, s, a = [], o = arguments.length; o--;) a[o] = arguments[o];
                    1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (r = (i = a)[0], s = i[1]), s || (s = {}), s = d.extend({}, s), r && !s.el && (s.el = r), e.call(this, s), Object.keys(C).forEach(function(e) {
                        Object.keys(C[e]).forEach(function(i) {
                            t.prototype[i] || (t.prototype[i] = C[e][i])
                        })
                    });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                n = t.params[i];
                            if ("object" != typeof n || null === n) return;
                            if (!(i in s && "enabled" in n)) return;
                            !0 === s[i] && (s[i] = {
                                enabled: !0
                            }), "object" != typeof s[i] || "enabled" in s[i] || (s[i].enabled = !0), s[i] || (s[i] = {
                                enabled: !1
                            })
                        }
                    });
                    var c = d.extend({}, E);
                    l.useModulesParams(c), l.params = d.extend({}, c, T, s), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, s);
                    var h = (l.$ = n)(l.params.el);
                    if (r = h[0]) {
                        if (1 < h.length) {
                            var p = [];
                            return h.each(function(e, i) {
                                var n = d.extend({}, s, {
                                    el: i
                                });
                                p.push(new t(n))
                            }), p
                        }
                        r.swiper = l, h.data("swiper", l);
                        var f, m, g = h.children("." + l.params.wrapperClass);
                        return d.extend(l, {
                            $el: h,
                            el: r,
                            $wrapperEl: g,
                            wrapperEl: g[0],
                            classNames: [],
                            slides: n(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === l.params.direction
                            },
                            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === h.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === g.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], u.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, l.touchEventsDesktop = {
                                start: m[0],
                                move: m[1],
                                end: m[2]
                            }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: d.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                e && (t.__proto__ = e);
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function() {
                    var e = this,
                        t = e.params,
                        i = e.slides,
                        n = e.slidesGrid,
                        r = e.size,
                        s = e.activeIndex,
                        a = 1;
                    if (t.centeredSlides) {
                        for (var o, l = i[s].swiperSlideSize, c = s + 1; c < i.length; c += 1) i[c] && !o && (a += 1, r < (l += i[c].swiperSlideSize) && (o = !0));
                        for (var d = s - 1; 0 <= d; d -= 1) i[d] && !o && (a += 1, r < (l += i[d].swiperSlideSize) && (o = !0))
                    } else
                        for (var u = s + 1; u < i.length; u += 1) n[u] - n[s] < r && (a += 1);
                    return a
                }, t.prototype.update = function() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                    }

                    function n() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }, t.prototype.changeDirection = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        n = i.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || ("vertical" === n && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + e), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), "horizontal" === n && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + e), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), i.params.direction = e, i.slides.each(function(t, i) {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }, t.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }, t.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        n = i.params,
                        r = i.$el,
                        s = i.$wrapperEl,
                        a = i.slides;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
                }, t.extendDefaults = function(e) {
                    d.extend(T, e)
                }, i.extendedDefaults.get = function() {
                    return T
                }, i.defaults.get = function() {
                    return E
                }, i.Class.get = function() {
                    return e
                }, i.$.get = function() {
                    return n
                }, Object.defineProperties(t, i), t
            }(p),
            k = {
                name: "device",
                proto: {
                    device: _
                },
                static: {
                    device: _
                }
            },
            N = {
                name: "support",
                proto: {
                    support: u
                },
                static: {
                    support: u
                }
            },
            M = {
                name: "browser",
                proto: {
                    browser: h
                },
                static: {
                    browser: h
                }
            },
            I = {
                name: "resize",
                create: function() {
                    var e = this;
                    d.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            D = {
                func: t.MutationObserver || t.WebkitMutationObserver,
                attach: function(e, i) {
                    void 0 === i && (i = {});
                    var n = this,
                        r = new D.func(function(e) {
                            if (1 !== e.length) {
                                var i = function() {
                                    n.emit("observerUpdate", e[0])
                                };
                                t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                            } else n.emit("observerUpdate", e[0])
                        });
                    r.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), n.observer.observers.push(r)
                },
                init: function() {
                    var e = this;
                    if (u.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }), this.observer.observers = []
                }
            },
            A = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function() {
                    d.extend(this, {
                        observer: {
                            init: D.init.bind(this),
                            attach: D.attach.bind(this),
                            destroy: D.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            L = {
                update: function(e) {
                    var t = this,
                        i = t.params,
                        n = i.slidesPerView,
                        r = i.slidesPerGroup,
                        s = i.centeredSlides,
                        a = t.params.virtual,
                        o = a.addSlidesBefore,
                        l = a.addSlidesAfter,
                        c = t.virtual,
                        u = c.from,
                        h = c.to,
                        p = c.slides,
                        f = c.slidesGrid,
                        m = c.renderSlide,
                        g = c.offset;
                    t.updateActiveIndex();
                    var v, b, y, w = t.activeIndex || 0;
                    v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (b = Math.floor(n / 2) + r + o, y = Math.floor(n / 2) + r + l) : (b = n + (r - 1) + o, y = r + l);
                    var _ = Math.max((w || 0) - y, 0),
                        x = Math.min((w || 0) + b, p.length - 1),
                        E = (t.slidesGrid[_] || 0) - (t.slidesGrid[0] || 0);

                    function C() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (d.extend(t.virtual, {
                            from: _,
                            to: x,
                            offset: E,
                            slidesGrid: t.slidesGrid
                        }), u === _ && h === x && !e) return t.slidesGrid !== f && E !== g && t.slides.css(v, E + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: E,
                        from: _,
                        to: x,
                        slides: function() {
                            for (var e = [], t = _; t <= x; t += 1) e.push(p[t]);
                            return e
                        }()
                    }), void C();
                    var T = [],
                        S = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var k = u; k <= h; k += 1)(k < _ || x < k) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var N = 0; N < p.length; N += 1) _ <= N && N <= x && (void 0 === h || e ? S.push(N) : (h < N && S.push(N), N < u && T.push(N)));
                    S.forEach(function(e) {
                        t.$wrapperEl.append(m(p[e], e))
                    }), T.sort(function(e, t) {
                        return t - e
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(m(p[e], e))
                    }), t.$wrapperEl.children(".swiper-slide").css(v, E + "px"), C()
                },
                renderSlide: function(e, t) {
                    var i = this,
                        r = i.params.virtual;
                    if (r.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                    var s = r.renderSlide ? n(r.renderSlide.call(i, e, t)) : n('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), r.cache && (i.virtual.cache[t] = s), s
                },
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e)
                        for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                    else this.virtual.slides.push(e);
                    this.virtual.update(!0)
                },
                prependSlide: function(e) {
                    var t = this,
                        i = t.activeIndex,
                        n = i + 1,
                        r = 1;
                    if (Array.isArray(e)) {
                        for (var s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.unshift(e[s]);
                        n = i + e.length, r = e.length
                    } else t.virtual.slides.unshift(e);
                    if (t.params.virtual.cache) {
                        var a = t.virtual.cache,
                            o = {};
                        Object.keys(a).forEach(function(e) {
                            o[parseInt(e, 10) + r] = a[e]
                        }), t.virtual.cache = o
                    }
                    t.virtual.update(!0), t.slideTo(n, 0)
                },
                removeSlide: function(e) {
                    var t = this;
                    if (null != e) {
                        var i = t.activeIndex;
                        if (Array.isArray(e))
                            for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), i = Math.max(i, 0);
                        else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
                        t.virtual.update(!0), t.slideTo(i, 0)
                    }
                },
                removeAllSlides: function() {
                    var e = this;
                    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                }
            },
            P = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        virtual: {
                            update: L.update.bind(e),
                            appendSlide: L.appendSlide.bind(e),
                            prependSlide: L.prependSlide.bind(e),
                            removeSlide: L.removeSlide.bind(e),
                            removeAllSlides: L.removeAllSlides.bind(e),
                            renderSlide: L.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            d.extend(e.params, t), d.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            z = {
                handle: function(i) {
                    var n = this,
                        r = n.rtlTranslate,
                        s = i;
                    s.originalEvent && (s = s.originalEvent);
                    var a = s.keyCode || s.charCode;
                    if (!n.allowSlideNext && (n.isHorizontal() && 39 === a || n.isVertical() && 40 === a)) return !1;
                    if (!n.allowSlidePrev && (n.isHorizontal() && 37 === a || n.isVertical() && 38 === a)) return !1;
                    if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                        if (n.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
                            var o = !1;
                            if (0 < n.$el.parents("." + n.params.slideClass).length && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
                            var l = t.innerWidth,
                                c = t.innerHeight,
                                d = n.$el.offset();
                            r && (d.left -= n.$el[0].scrollLeft);
                            for (var u = [
                                    [d.left, d.top],
                                    [d.left + n.width, d.top],
                                    [d.left, d.top + n.height],
                                    [d.left + n.width, d.top + n.height]
                                ], h = 0; h < u.length; h += 1) {
                                var p = u[h];
                                0 <= p[0] && p[0] <= l && 0 <= p[1] && p[1] <= c && (o = !0)
                            }
                            if (!o) return
                        }
                        n.isHorizontal() ? (37 !== a && 39 !== a || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (39 === a && !r || 37 === a && r) && n.slideNext(), (37 === a && !r || 39 === a && r) && n.slidePrev()) : (38 !== a && 40 !== a || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 40 === a && n.slideNext(), 38 === a && n.slidePrev()), n.emit("keyPress", a)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            O = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    d.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: z.enable.bind(this),
                            disable: z.disable.bind(this),
                            handle: z.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            $ = {
                lastScrollTime: d.now(),
                event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var t = "onwheel",
                        i = t in e;
                    if (!i) {
                        var n = e.createElement("div");
                        n.setAttribute(t, "return;"), i = "function" == typeof n[t]
                    }
                    return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i
                }() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0,
                        i = 0,
                        n = 0,
                        r = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: n,
                        pixelY: r
                    }
                },
                handleMouseEnter: function() {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function() {
                    this.mouseEntered = !1
                },
                handle: function(e) {
                    var i = e,
                        n = this,
                        r = n.params.mousewheel;
                    if (!n.mouseEntered && !r.releaseOnEdges) return !0;
                    i.originalEvent && (i = i.originalEvent);
                    var s = 0,
                        a = n.rtlTranslate ? -1 : 1,
                        o = $.normalize(i);
                    if (r.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                            s = o.pixelX * a
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                            s = o.pixelY
                        } else s = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
                    if (0 === s) return !0;
                    if (r.invert && (s = -s), n.params.freeMode) {
                        n.params.loop && n.loopFix();
                        var l = n.getTranslate() + s * r.sensitivity,
                            c = n.isBeginning,
                            u = n.isEnd;
                        if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !u && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = d.nextTick(function() {
                                n.slideToClosest()
                            }, 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                    } else {
                        if (60 < d.now() - n.mousewheel.lastScrollTime)
                            if (s < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (r.releaseOnEdges) return !0
                                } else n.slideNext(), n.emit("scroll", i);
                        else if (n.isBeginning && !n.params.loop || n.animating) {
                            if (r.releaseOnEdges) return !0
                        } else n.slidePrev(), n.emit("scroll", i);
                        n.mousewheel.lastScrollTime = (new t.Date).getTime()
                    }
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                },
                enable: function() {
                    var e = this;
                    if (!$.event) return !1;
                    if (e.mousewheel.enabled) return !1;
                    var t = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on($.event, e.mousewheel.handle), e.mousewheel.enabled = !0
                },
                disable: function() {
                    var e = this;
                    if (!$.event) return !1;
                    if (!e.mousewheel.enabled) return !1;
                    var t = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.off($.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
                }
            },
            j = {
                update: function() {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var i = e.navigation,
                            n = i.$nextEl,
                            r = i.$prevEl;
                        r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(e) {
                    e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function(e) {
                    e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function() {
                    var e, t, i = this,
                        r = i.params.navigation;
                    (r.nextEl || r.prevEl) && (r.nextEl && (e = n(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && 1 < e.length && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && (t = n(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && 1 < t.length && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && 0 < e.length && e.on("click", i.navigation.onNextClick), t && 0 < t.length && t.on("click", i.navigation.onPrevClick), d.extend(i.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this,
                        t = e.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                }
            },
            B = {
                update: function() {
                    var e = this,
                        t = e.rtl,
                        i = e.params.pagination;
                    if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var r, s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            a = e.pagination.$el,
                            o = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (r -= s - 2 * e.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                            var l, c, d, u = e.pagination.bullets;
                            if (i.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = r - e.pagination.dynamicBulletIndex, d = ((c = l + (Math.min(u.length, i.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < a.length) u.each(function(e, t) {
                                var s = n(t),
                                    a = s.index();
                                a === r && s.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= a && a <= c && s.addClass(i.bulletActiveClass + "-main"), a === l && s.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), a === c && s.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            });
                            else if (u.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                                for (var h = u.eq(l), p = u.eq(c), f = l; f <= c; f += 1) u.eq(f).addClass(i.bulletActiveClass + "-main");
                                h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), p.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                            }
                            if (i.dynamicBullets) {
                                var m = Math.min(u.length, i.dynamicMainBullets + 4),
                                    g = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                    v = t ? "right" : "left";
                                u.css(e.isHorizontal() ? v : "top", g + "px")
                            }
                        }
                        if ("fraction" === i.type && (a.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), a.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                            var b;
                            b = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            var y = (r + 1) / o,
                                w = 1,
                                _ = 1;
                            "horizontal" === b ? w = y : _ = y, a.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + _ + ")").transition(e.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(e, r + 1, o)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            n = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < s; a += 1) t.renderBullet ? r += t.renderBullet.call(e, a, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            n.html(r), e.pagination.bullets = n.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el) {
                        var i = n(t.el);
                        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                            t.preventDefault();
                            var i = n(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                        }), d.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = e.pagination.$el;
                        i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                    }
                }
            },
            H = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            i = e.rtlTranslate,
                            n = e.progress,
                            r = t.dragSize,
                            s = t.trackSize,
                            a = t.$dragEl,
                            o = t.$el,
                            l = e.params.scrollbar,
                            c = r,
                            d = (s - r) * n;
                        i ? 0 < (d = -d) ? (c = r - d, d = 0) : s < -d + r && (c = s + d) : d < 0 ? (c = r + d, d = 0) : s < d + r && (c = s - d), e.isHorizontal() ? (u.transforms3d ? a.transform("translate3d(" + d + "px, 0, 0)") : a.transform("translateX(" + d + "px)"), a[0].style.width = c + "px") : (u.transforms3d ? a.transform("translate3d(0px, " + d + "px, 0)") : a.transform("translateY(" + d + "px)"), a[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                            o[0].style.opacity = 0, o.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            i = t.$dragEl,
                            n = t.$el;
                        i[0].style.width = "", i[0].style.height = "";
                        var r, s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                            a = e.size / e.virtualSize,
                            o = a * (s / e.size);
                        r = "auto" === e.params.scrollbar.dragSize ? s * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px", n[0].style.display = 1 <= a ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), d.extend(t, {
                            trackSize: s,
                            divider: a,
                            moveDivider: o,
                            dragSize: r
                        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, i = this,
                        n = i.scrollbar,
                        r = i.rtlTranslate,
                        s = n.$el,
                        a = n.dragSize,
                        o = n.trackSize;
                    t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (o - a), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                    var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                    i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this,
                        i = t.params.scrollbar,
                        n = t.scrollbar,
                        r = t.$wrapperEl,
                        s = n.$el,
                        a = n.$dragEl;
                    t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), a.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), i.hide && s.css("opacity", 1), t.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        n = t.$el,
                        r = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this,
                        i = t.params.scrollbar,
                        n = t.scrollbar.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = d.nextTick(function() {
                        n.css("opacity", 0), n.transition(400)
                    }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
                },
                enableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar,
                            n = t.touchEventsTouch,
                            r = t.touchEventsDesktop,
                            s = t.params,
                            a = i.$el[0],
                            o = !(!u.passiveListener || !s.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!u.passiveListener || !s.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        u.touch ? (a.addEventListener(n.start, t.scrollbar.onDragStart, o), a.addEventListener(n.move, t.scrollbar.onDragMove, o), a.addEventListener(n.end, t.scrollbar.onDragEnd, l)) : (a.addEventListener(r.start, t.scrollbar.onDragStart, o), e.addEventListener(r.move, t.scrollbar.onDragMove, o), e.addEventListener(r.end, t.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar,
                            n = t.touchEventsTouch,
                            r = t.touchEventsDesktop,
                            s = t.params,
                            a = i.$el[0],
                            o = !(!u.passiveListener || !s.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!u.passiveListener || !s.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        u.touch ? (a.removeEventListener(n.start, t.scrollbar.onDragStart, o), a.removeEventListener(n.move, t.scrollbar.onDragMove, o), a.removeEventListener(n.end, t.scrollbar.onDragEnd, l)) : (a.removeEventListener(r.start, t.scrollbar.onDragStart, o), e.removeEventListener(r.move, t.scrollbar.onDragMove, o), e.removeEventListener(r.end, t.scrollbar.onDragEnd, l))
                    }
                },
                init: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            i = e.$el,
                            r = e.params.scrollbar,
                            s = n(r.el);
                        e.params.uniqueNavElements && "string" == typeof r.el && 1 < s.length && 1 === i.find(r.el).length && (s = i.find(r.el));
                        var a = s.find("." + e.params.scrollbar.dragClass);
                        0 === a.length && (a = n('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(a)), d.extend(t, {
                            $el: s,
                            el: s[0],
                            $dragEl: a,
                            dragEl: a[0]
                        }), r.draggable && t.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            R = {
                setTransform: function(e, t) {
                    var i = this.rtl,
                        r = n(e),
                        s = i ? -1 : 1,
                        a = r.attr("data-swiper-parallax") || "0",
                        o = r.attr("data-swiper-parallax-x"),
                        l = r.attr("data-swiper-parallax-y"),
                        c = r.attr("data-swiper-parallax-scale"),
                        d = r.attr("data-swiper-parallax-opacity");
                    if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * s + "%" : o * t * s + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                        var u = d - (d - 1) * (1 - Math.abs(t));
                        r[0].style.opacity = u
                    }
                    if (null == c) r.transform("translate3d(" + o + ", " + l + ", 0px)");
                    else {
                        var h = c - (c - 1) * (1 - Math.abs(t));
                        r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + h + ")")
                    }
                },
                setTranslate: function() {
                    var e = this,
                        t = e.$el,
                        i = e.slides,
                        r = e.progress,
                        s = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        e.parallax.setTransform(i, r)
                    }), i.each(function(t, i) {
                        var a = i.progress;
                        1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - r * (s.length - 1)), a = Math.min(Math.max(a, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                            e.parallax.setTransform(i, a)
                        })
                    })
                },
                setTransition: function(e) {
                    void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        var r = n(i),
                            s = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), r.transition(s)
                    })
                }
            },
            q = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        n = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
                },
                onGestureStart: function(e) {
                    var t = this,
                        i = t.params.zoom,
                        r = t.zoom,
                        s = r.gesture;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !u.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
                    }
                    s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!u.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, n.scaleMove = q.getDistanceBetweenTouches(e)
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = u.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!u.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !_.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (_.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this,
                        i = t.zoom,
                        n = i.gesture,
                        r = i.image,
                        s = i.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, r.isTouched && n.$slideEl)) {
                        r.isMoved || (r.width = n.$imageEl[0].offsetWidth, r.height = n.$imageEl[0].offsetHeight, r.startX = d.getTranslate(n.$imageWrapEl[0], "x") || 0, r.startY = d.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                        var a = r.width * i.scale,
                            o = r.height * i.scale;
                        if (!(a < n.slideWidth && o < n.slideHeight)) {
                            if (r.minX = Math.min(n.slideWidth / 2 - a / 2, 0), r.maxX = -r.minX, r.minY = Math.min(n.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !i.isScaling) {
                                if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                                if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = r.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = r.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (r.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (r.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(r.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(r.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = r.touchesCurrent.x, s.prevPositionY = r.touchesCurrent.y, s.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        n = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var r = 300,
                            s = 300,
                            a = n.x * r,
                            o = i.currentX + a,
                            l = n.y * s,
                            c = i.currentY + l;
                        0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (s = Math.abs((c - i.currentY) / n.y));
                        var d = Math.max(r, s);
                        i.currentX = o, i.currentY = c;
                        var u = i.width * e.scale,
                            h = i.height * e.scale;
                        i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in : function(e) {
                    var t, i, r, s, a, o, l, c, d, u, h, p, f, m, g, v, b = this,
                        y = b.zoom,
                        w = b.params.zoom,
                        _ = y.gesture,
                        x = y.image;
                    _.$slideEl || (_.$slideEl = b.clickedSlide ? n(b.clickedSlide) : b.slides.eq(b.activeIndex), _.$imageEl = _.$slideEl.find("img, svg, canvas"), _.$imageWrapEl = _.$imageEl.parent("." + w.containerClass)), _.$imageEl && 0 !== _.$imageEl.length && (_.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = _.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = _.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (g = _.$slideEl[0].offsetWidth, v = _.$slideEl[0].offsetHeight, r = _.$slideEl.offset().left + g / 2 - t, s = _.$slideEl.offset().top + v / 2 - i, l = _.$imageEl[0].offsetWidth, c = _.$imageEl[0].offsetHeight, d = l * y.scale, u = c * y.scale, f = -(h = Math.min(g / 2 - d / 2, 0)), m = -(p = Math.min(v / 2 - u / 2, 0)), (a = r * y.scale) < h && (a = h), f < a && (a = f), (o = s * y.scale) < p && (o = p), m < o && (o = m)) : o = a = 0, _.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + o + "px,0)"), _.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function() {
                    var e = this,
                        t = e.zoom,
                        i = e.params.zoom,
                        r = t.gesture;
                    r.$slideEl || (r.$slideEl = e.clickedSlide ? n(e.clickedSlide) : e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), r.$slideEl = void 0)
                },
                enable: function() {
                    var e = this,
                        t = e.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        u.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this,
                        t = e.zoom;
                    if (t.enabled) {
                        e.zoom.enabled = !1;
                        var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        u.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                }
            },
            W = {
                loadInSlide: function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.params.lazy;
                    if (void 0 !== e && 0 !== i.slides.length) {
                        var s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                            a = s.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                        !s.hasClass(r.elementClass) || s.hasClass(r.loadedClass) || s.hasClass(r.loadingClass) || (a = a.add(s[0])), 0 !== a.length && a.each(function(e, a) {
                            var o = n(a);
                            o.addClass(r.loadingClass);
                            var l = o.attr("data-background"),
                                c = o.attr("data-src"),
                                d = o.attr("data-srcset"),
                                u = o.attr("data-sizes");
                            i.loadImage(o[0], c || l, d, u, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), s.find("." + r.preloaderClass).remove(), i.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(i.params.slideDuplicateClass)) {
                                            var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(n.index(), !1)
                                        } else {
                                            var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(a.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", s[0], o[0])
                                }
                            }), i.emit("lazyImageLoad", s[0], o[0])
                        })
                    }
                },
                load: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        i = e.params,
                        r = e.slides,
                        s = e.activeIndex,
                        a = e.virtual && i.virtual.enabled,
                        o = i.lazy,
                        l = i.slidesPerView;

                    function c(e) {
                        if (a) {
                            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (r[e]) return !0;
                        return !1
                    }

                    function d(e) {
                        return a ? n(e).attr("data-swiper-slide-index") : n(e).index()
                    }
                    if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                        var r = a ? n(i).attr("data-swiper-slide-index") : n(i).index();
                        e.lazy.loadInSlide(r)
                    });
                    else if (1 < l)
                        for (var u = s; u < s + l; u += 1) c(u) && e.lazy.loadInSlide(u);
                    else e.lazy.loadInSlide(s);
                    if (o.loadPrevNext)
                        if (1 < l || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                            for (var h = o.loadPrevNextAmount, p = l, f = Math.min(s + p + Math.max(h, p), r.length), m = Math.max(s - Math.max(p, h), 0), g = s + l; g < f; g += 1) c(g) && e.lazy.loadInSlide(g);
                            for (var v = m; v < s; v += 1) c(v) && e.lazy.loadInSlide(v)
                        } else {
                            var b = t.children("." + i.slideNextClass);
                            0 < b.length && e.lazy.loadInSlide(d(b));
                            var y = t.children("." + i.slidePrevClass);
                            0 < y.length && e.lazy.loadInSlide(d(y))
                        }
                }
            },
            F = {
                LinearSpline: function(e, t) {
                    var i, n, r, s, a;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (a = function(e, t) {
                            for (n = -1, i = e.length; 1 < i - n;) e[r = i + n >> 1] <= t ? n = r : i = r;
                            return i
                        }(this.x, e), s = a - 1, (e - this.x[s]) * (this.y[a] - this.y[s]) / (this.x[a] - this.x[s]) + this.y[s]) : 0
                    }, this
                },
                getInterpolateFunction: function(e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new F.LinearSpline(t.slidesGrid, e.slidesGrid) : new F.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var i, n, r = this,
                        s = r.controller.control;

                    function a(e) {
                        var t = r.rtlTranslate ? -r.translate : r.translate;
                        "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), n = -r.controller.spline.interpolate(-t)), n && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), n = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(s))
                        for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof S && a(s[o]);
                    else s instanceof S && t !== s && a(s)
                },
                setTransition: function(e, t) {
                    var i, n = this,
                        r = n.controller.control;

                    function s(t) {
                        t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick(function() {
                            t.updateAutoHeight()
                        }), t.$wrapperEl.transitionEnd(function() {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof S && s(r[i]);
                    else r instanceof S && t !== r && s(r)
                }
            },
            U = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    var t = this,
                        i = t.params.a11y;
                    if (13 === e.keyCode) {
                        var r = n(e.target);
                        t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && r.is("." + t.params.pagination.bulletClass) && r[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                    }
                },
                updatePagination: function() {
                    var e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, r) {
                        var s = n(r);
                        e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
                    })
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, i, n = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t, i = this;
                    i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                }
            },
            V = {
                init: function() {
                    var e = this;
                    if (e.params.history) {
                        if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                        var i = e.history;
                        i.initialized = !0, i.paths = V.getPathValues(), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = V.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                            return "" !== e
                        }),
                        i = e.length;
                    return {
                        key: e[i - 2],
                        value: e[i - 1]
                    }
                },
                setHistory: function(e, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(i),
                            r = V.slugify(n.attr("data-history"));
                        t.location.pathname.includes(e) || (r = e + "/" + r);
                        var s = t.history.state;
                        s && s.value === r || (this.params.history.replaceState ? t.history.replaceState({
                            value: r
                        }, null, r) : t.history.pushState({
                            value: r
                        }, null, r))
                    }
                },
                slugify: function(e) {
                    return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    var n = this;
                    if (t)
                        for (var r = 0, s = n.slides.length; r < s; r += 1) {
                            var a = n.slides.eq(r);
                            if (V.slugify(a.attr("data-history")) === t && !a.hasClass(n.params.slideDuplicateClass)) {
                                var o = a.index();
                                n.slideTo(o, e, i)
                            }
                        } else n.slideTo(0, e, i)
                }
            },
            X = {
                onHashCange: function() {
                    var t = this,
                        i = e.location.hash.replace("#", "");
                    if (i !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                        var n = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
                        if (void 0 === n) return;
                        t.slideTo(n)
                    }
                },
                setHash: function() {
                    var i = this;
                    if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                        if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "");
                        else {
                            var n = i.slides.eq(i.activeIndex),
                                r = n.attr("data-hash") || n.attr("data-history");
                            e.location.hash = r || ""
                        }
                },
                init: function() {
                    var i = this;
                    if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                        i.hashNavigation.initialized = !0;
                        var r = e.location.hash.replace("#", "");
                        if (r)
                            for (var s = 0, a = i.slides.length; s < a; s += 1) {
                                var o = i.slides.eq(s);
                                if ((o.attr("data-hash") || o.attr("data-history")) === r && !o.hasClass(i.params.slideDuplicateClass)) {
                                    var l = o.index();
                                    i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                                }
                            }
                        i.params.hashNavigation.watchState && n(t).on("hashchange", i.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            Y = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, i)
                },
                start: function() {
                    var e = this;
                    return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
                },
                stop: function() {
                    var e = this;
                    return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            G = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                        var n = e.slides.eq(i),
                            r = -n[0].swiperSlideOffset;
                        e.params.virtualTranslate || (r -= e.translate);
                        var s = 0;
                        e.isHorizontal() || (s = r, r = 0);
                        var a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                        n.css({
                            opacity: a
                        }).transform("translate3d(" + r + "px, " + s + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        i = t.slides,
                        n = t.$wrapperEl;
                    if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        i.transitionEnd(function() {
                            if (!r && t && !t.destroyed) {
                                r = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                            }
                        })
                    }
                }
            },
            Q = {
                setTranslate: function() {
                    var e, t = this,
                        i = t.$el,
                        r = t.$wrapperEl,
                        s = t.slides,
                        a = t.width,
                        o = t.height,
                        l = t.rtlTranslate,
                        c = t.size,
                        d = t.params.cubeEffect,
                        u = t.isHorizontal(),
                        p = t.virtual && t.params.virtual.enabled,
                        f = 0;
                    d.shadow && (u ? (0 === (e = r.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), r.append(e)), e.css({
                        height: a + "px"
                    })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                    for (var m = 0; m < s.length; m += 1) {
                        var g = s.eq(m),
                            v = m;
                        p && (v = parseInt(g.attr("data-swiper-slide-index"), 10));
                        var b = 90 * v,
                            y = Math.floor(b / 360);
                        l && (b = -b, y = Math.floor(-b / 360));
                        var w = Math.max(Math.min(g[0].progress, 1), -1),
                            _ = 0,
                            x = 0,
                            E = 0;
                        v % 4 == 0 ? (_ = 4 * -y * c, E = 0) : (v - 1) % 4 == 0 ? (_ = 0, E = 4 * -y * c) : (v - 2) % 4 == 0 ? (_ = c + 4 * y * c, E = c) : (v - 3) % 4 == 0 && (_ = -c, E = 3 * c + 4 * c * y), l && (_ = -_), u || (x = _, _ = 0);
                        var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + _ + "px, " + x + "px, " + E + "px)";
                        if (w <= 1 && -1 < w && (f = 90 * v + 90 * w, l && (f = 90 * -v - 90 * w)), g.transform(C), d.slideShadows) {
                            var T = u ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                                S = u ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), g.append(T)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), g.append(S)), T.length && (T[0].style.opacity = Math.max(-w, 0)), S.length && (S[0].style.opacity = Math.max(w, 0))
                        }
                    }
                    if (r.css({
                            "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                            "transform-origin": "50% 50% -" + c / 2 + "px"
                        }), d.shadow)
                        if (u) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                        else {
                            var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                N = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                                M = d.shadowScale,
                                I = d.shadowScale / N,
                                D = d.shadowOffset;
                            e.transform("scale3d(" + M + ", 1, " + I + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / I + "px) rotateX(-90deg)")
                        }
                    var A = h.isSafari || h.isUiWebView ? -c / 2 : 0;
                    r.transform("translate3d(0px,0," + A + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            K = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, i = e.rtlTranslate, r = 0; r < t.length; r += 1) {
                        var s = t.eq(r),
                            a = s[0].progress;
                        e.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                        var o = -180 * a,
                            l = 0,
                            c = -s[0].swiperSlideOffset,
                            d = 0;
                        if (e.isHorizontal() ? i && (o = -o) : (d = c, l = -o, o = c = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, e.params.flipEffect.slideShadows) {
                            var u = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                h = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                            0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(u)), 0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), u.length && (u[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                        }
                        s.transform("translate3d(" + c + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        i = t.slides,
                        n = t.activeIndex,
                        r = t.$wrapperEl;
                    if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var s = !1;
                        i.eq(n).transitionEnd(function() {
                            if (!s && t && !t.destroyed) {
                                s = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                            }
                        })
                    }
                }
            },
            Z = {
                setTranslate: function() {
                    for (var e = this, t = e.width, i = e.height, r = e.slides, s = e.$wrapperEl, a = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), c = e.translate, d = l ? t / 2 - c : i / 2 - c, h = l ? o.rotate : -o.rotate, p = o.depth, f = 0, m = r.length; f < m; f += 1) {
                        var g = r.eq(f),
                            v = a[f],
                            b = (d - g[0].swiperSlideOffset - v / 2) / v * o.modifier,
                            y = l ? h * b : 0,
                            w = l ? 0 : h * b,
                            _ = -p * Math.abs(b),
                            x = l ? 0 : o.stretch * b,
                            E = l ? o.stretch * b : 0;
                        Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                        var C = "translate3d(" + E + "px," + x + "px," + _ + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                        if (g.transform(C), g[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
                            var T = l ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                                S = l ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), g.append(T)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), g.append(S)), T.length && (T[0].style.opacity = 0 < b ? b : 0), S.length && (S[0].style.opacity = 0 < -b ? -b : 0)
                        }
                    }(u.pointerEvents || u.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            J = {
                init: function() {
                    var e = this,
                        t = e.params.thumbs,
                        i = e.constructor;
                    t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, d.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), d.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : d.isObject(t.swiper) && (e.thumbs.swiper = new i(d.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var e = this,
                        t = e.thumbs.swiper;
                    if (t) {
                        var i = t.clickedIndex,
                            r = t.clickedSlide;
                        if (!(r && n(r).hasClass(e.params.thumbs.slideThumbActiveClass) || null == i)) {
                            var s;
                            if (s = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                                var a = e.activeIndex;
                                e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                                var o = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                    l = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                                s = void 0 === o ? l : void 0 === l ? o : l - a < a - o ? l : o
                            }
                            e.slideTo(s)
                        }
                    }
                },
                update: function(e) {
                    var t = this,
                        i = t.thumbs.swiper;
                    if (i) {
                        var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                        if (t.realIndex !== i.realIndex) {
                            var r, s = i.activeIndex;
                            if (i.params.loop) {
                                i.slides.eq(s).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, s = i.activeIndex);
                                var a = i.slides.eq(s).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                    o = i.slides.eq(s).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                r = void 0 === a ? o : void 0 === o ? a : o - s == s - a ? s : o - s < s - a ? o : a
                            } else r = t.realIndex;
                            i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = s < r ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : s < r && (r = r - n + 1), i.slideTo(r, e ? 0 : void 0))
                        }
                        var l = 1,
                            c = t.params.thumbs.slideThumbActiveClass;
                        if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(c), i.params.loop)
                            for (var d = 0; d < l; d += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + d) + '"]').addClass(c);
                        else
                            for (var u = 0; u < l; u += 1) i.slides.eq(t.realIndex + u).addClass(c)
                    }
                }
            },
            ee = [k, N, M, I, A, P, O, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: $.enable.bind(e),
                            disable: $.disable.bind(e),
                            handle: $.handle.bind(e),
                            handleMouseEnter: $.handleMouseEnter.bind(e),
                            handleMouseLeave: $.handleMouseLeave.bind(e),
                            lastScrollTime: d.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        navigation: {
                            init: j.init.bind(e),
                            update: j.update.bind(e),
                            destroy: j.destroy.bind(e),
                            onNextClick: j.onNextClick.bind(e),
                            onPrevClick: j.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(e) {
                        var t, i = this,
                            r = i.navigation,
                            s = r.$nextEl,
                            a = r.$prevEl;
                        !i.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(i.params.navigation.hiddenClass) : a && (t = a.hasClass(i.params.navigation.hiddenClass)), !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i), s && s.toggleClass(i.params.navigation.hiddenClass), a && a.toggleClass(i.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        pagination: {
                            init: B.init.bind(e),
                            render: B.render.bind(e),
                            update: B.update.bind(e),
                            destroy: B.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(e) {
                        var t = this;
                        t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !n(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        scrollbar: {
                            init: H.init.bind(e),
                            destroy: H.destroy.bind(e),
                            updateSize: H.updateSize.bind(e),
                            setTranslate: H.setTranslate.bind(e),
                            setTransition: H.setTransition.bind(e),
                            enableDraggable: H.enableDraggable.bind(e),
                            disableDraggable: H.disableDraggable.bind(e),
                            setDragPosition: H.setDragPosition.bind(e),
                            onDragStart: H.onDragStart.bind(e),
                            onDragMove: H.onDragMove.bind(e),
                            onDragEnd: H.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    d.extend(this, {
                        parallax: {
                            setTransform: R.setTransform.bind(this),
                            setTranslate: R.setTranslate.bind(this),
                            setTransition: R.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    init: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                        t[i] = q[i].bind(e)
                    }), d.extend(e, {
                        zoom: t
                    });
                    var i = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function() {
                            return i
                        },
                        set: function(t) {
                            if (i !== t) {
                                var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, n, r)
                            }
                            i = t
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    d.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: W.load.bind(this),
                            loadInSlide: W.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: F.getInterpolateFunction.bind(e),
                            setTranslate: F.setTranslate.bind(e),
                            setTransition: F.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        a11y: {
                            liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(U).forEach(function(t) {
                        e.a11y[t] = U[t].bind(e)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        history: {
                            init: V.init.bind(e),
                            setHistory: V.setHistory.bind(e),
                            setHistoryPopState: V.setHistoryPopState.bind(e),
                            scrollToSlide: V.scrollToSlide.bind(e),
                            destroy: V.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: X.init.bind(e),
                            destroy: X.destroy.bind(e),
                            setHash: X.setHash.bind(e),
                            onHashCange: X.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Y.run.bind(e),
                            start: Y.start.bind(e),
                            stop: Y.stop.bind(e),
                            pause: Y.pause.bind(e),
                            onTransitionEnd: function(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    d.extend(this, {
                        fadeEffect: {
                            setTranslate: G.setTranslate.bind(this),
                            setTransition: G.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t), d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    d.extend(this, {
                        cubeEffect: {
                            setTranslate: Q.setTranslate.bind(this),
                            setTransition: Q.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t), d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    d.extend(this, {
                        flipEffect: {
                            setTranslate: K.setTranslate.bind(this),
                            setTransition: K.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t), d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    d.extend(this, {
                        coverflowEffect: {
                            setTranslate: Z.setTranslate.bind(this),
                            setTransition: Z.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function() {
                    d.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: J.init.bind(this),
                            update: J.update.bind(this),
                            onThumbClick: J.onThumbClick.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this.params.thumbs;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition: function(e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy: function() {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
        return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ee), S
    }),
    function(e) {
        "use strict";
        ".banner-slider".length > 0 && e(".banner-slider").owlCarousel({
            autoplay: !0,
            dots: !1,
            nav: !0,
            loop: !0,
            margin: 30,
            lazyLoad: !0,
            center: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }), "pre code".length > 0 && document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e)
        }), ".main-menu".length > 0 && e(".main-menu").slimmenu({
            resizeWidth: "991",
            animSpeed: 500,
            easingEffect: "easeOutElastic"
        }), ".testimonial-slider".length > 0 && e(".testimonial-slider").owlCarousel({
            thumbs: !0,
            thumbsPrerendered: !0,
            autoplay: !0,
            dots: !1,
            mouseDrag: !1,
            stagePadding: 30,
            margin: 60,
            loop: !1,
            lazyLoad: !0,
            responsive: {
                0: {
                    items: 1,
                    dots: !0,
                    stagePadding: 15
                },
                768: {
                    items: 1,
                    dots: !0,
                    stagePadding: 15
                },
                1200: {
                    items: 1
                }
            }
        }), ".latest-slider".length > 0 && e(".latest-slider").owlCarousel({
            autoplay: !0,
            dots: !1,
            margin: 30,
            nav: !0,
            loop: !1,
            lazyLoad: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        var t = !1;
        if (e(window).scroll(function() {
                var i = e(this).scrollTop();
                !t && i > 100 ? (e(".scrollToTop").fadeIn(), t = !0) : t && i <= 100 && (e(".scrollToTop").fadeOut(), t = !1)
            }), e(".scrollToTop").click(function() {
                return e("html, body").animate({
                    scrollTop: 0
                }, 800), !1
            }), ".swiper-container".length > 0) new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: !0,
            loop: !0,
            centeredSlides: !0,
            slidesPerView: 2,
            initialSlide: 2,
            breakpoints: {
                991: {
                    slidesPerView: 1,
                    initialSlide: 2
                }
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 600,
                modifier: 1,
                slideShadows: !1
            },
            navigation: !1
        });
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 400,
            easing: "ease",
            once: !0,
            mirror: !1,
            anchorPlacement: "top-bottom"
        }), e(window).on("load", function() {
            e(".overlay-loader").fadeOut(1e3)
        }), e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = e(this.hash);
                if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
                    scrollTop: t.offset().top - 56
                }, 1e3, "easeInOutExpo"), !1
            }
        })
    }(jQuery);