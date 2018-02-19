var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.2.1",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; d < c; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; f < d; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c,
                        d,
                        e,
                        f = b.getElementById(a);if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        }
                    }return [];
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }return !1;
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }return !1;
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; i < f; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, c, e) {
            var f,
                i,
                j,
                k,
                l,
                m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
                    }
                }
            }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext;function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c;
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c;
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; b < d; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(E(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(E(this, a || [], !0));
        }, is: function is(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var F,
        G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; a < c; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return K(a, "nextSibling");
        }, prev: function prev(a) {
            return K(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
        };
    });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
        var b = {};return r.each(a.match(L) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = e || a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), c <= h && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function N(a) {
        return a;
    }function O(a) {
        throw a;
    }function P(a, b, c, d) {
        var e;try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
        } catch (a) {
            c.apply(void 0, [a]);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                P(e[c], h(c), g.reject);
            }return g.promise();
        } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b;
        });
    };var R = r.Deferred();r.fn.ready = function (a) {
        return R.then(a)["catch"](function (a) {
            r.readyException(a);
        }), this;
    }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
        } }), r.ready.then = R.then;function S() {
        d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                T(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; h < i; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        U = function U(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function V() {
        this.expando = r.expando + V.uid++;
    }V.uid = 1, V.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var W = new V(),
        X = new V(),
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
    }function _(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = $(c);
            } catch (e) {}X.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return X.hasData(a) || W.hasData(a);
        }, data: function data(a, b, c) {
            return X.access(a, b, c);
        }, removeData: function removeData(a, b) {
            X.remove(a, b);
        }, _data: function _data(a, b, c) {
            return W.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            W.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    }W.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                X.set(this, a);
            }) : T(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    X.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                X.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    W.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function da(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ea = function ea(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function fa(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ga = {};function ha(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
    }function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        }for (f = 0; f < g; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ia(this, !0);
        }, hide: function hide() {
            return ia(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                da(this) ? r(this).show() : r(this).hide();
            });
        } });var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
        var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
    }function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
            W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
        }
    }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
                k = 0;while (f = g[k++]) {
                    la.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;function va() {
        return !0;
    }function wa() {
        return !1;
    }function xa() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function ya(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                ya(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
                    h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;while (j--) {
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && W.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = [],
                i = b.delegateCount,
                j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
                if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                    for (f = [], g = {}, c = 0; c < i; c++) {
                        d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                    }f.length && h.push({ elem: j, handlers: f });
                }
            }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a];
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== xa() && this.focus) return this.focus(), !1;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    if (this === xa() && this.blur) return this.blur(), !1;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
                }, _default: function _default(a) {
                    return B(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return ya(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return ya(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
    }function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ga(a) {
        var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Ha(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; c < d; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
        }
    }function Ia(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ja(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
                j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
            }
        }return a;
    }function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(za, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
                Ia(f[d], g[d]);
            }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
                Ha(f[d], g[d]);
            } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[W.expando] = void 0;
                    }c[X.expando] && (c[X.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ka(this, a, !0);
        }, remove: function remove(a) {
            return Ka(this, a);
        }, text: function text(a) {
            return T(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ja(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ja(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return T(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; c < d; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ja(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function Na(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Oa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Pa(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;function Wa(a) {
        if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;while (c--) {
            if (a = Ua[c] + b, a in Va) return a;
        }
    }function Xa(a) {
        var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }function Ya(a, b, c) {
        var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Za(a, b, c, d, e) {
        var f,
            g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
            "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        }return g;
    }function $a(a, b, c) {
        var d,
            e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b),
                i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
                    return $a(a, b, d);
                });
            }, set: function set(a, c, d) {
                var e,
                    f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
                    e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
    }), r.fn.extend({ css: function css(a, b) {
            return T(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
        } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
        bb,
        cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
    }function fb() {
        return a.setTimeout(function () {
            ab = void 0;
        }), ab = r.now();
    }function gb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
            c = ca[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function ib(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
                    p || ia([a]), W.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function jb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function kb(a, b, c) {
        var d,
            e,
            f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
    }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
                c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
            }
        }, prefilters: [ib], prefilter: function prefilter(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
        }, d;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && db.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = W.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; b < g; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (ab = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), ab = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), r.fx.start();
    }, r.fx.interval = 13, r.fx.start = function () {
        bb || (bb = !0, eb());
    }, r.fx.stop = function () {
        bb = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var lb,
        mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), lb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
        };
    });var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });function pb(a) {
        var b = a.match(L) || [];return b.join(" ");
    }function qb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, qb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(L) || [];while (c = this[i++]) {
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = pb(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, qb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(L) || [];while (c = this[i++]) {
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = pb(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
                } }, select: { get: function get(a) {
                    var b,
                        c,
                        d,
                        e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;h.push(b);
                        }
                    }return h;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
            } };
    });var tb = a.location,
        ub = r.now(),
        vb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
        var e;if (Array.isArray(b)) r.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            Ab(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            Ab(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(xb, "\r\n") };
                }) : { name: b.name, value: c.replace(xb, "\r\n") };
            }).get();
        } });var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Ob(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Pb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }if (f) return f !== i[0] && i.unshift(f), c[f];
    }function Qb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
        }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
            "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Eb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
        var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } };
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    }, r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || ra;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return T(this, function (a, d, e) {
                var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.holdReady = function (a) {
        a ? r.readyWait++ : r.ready(!0);
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Vb = a.jQuery,
        Wb = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }, b || (a.jQuery = a.$ = r), r;
});

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }function i(t) {
        return t && "[object Function]" === {}.toString.call(t);
    }function r(t, e) {
        if (1 !== t.nodeType) return [];var n = window.getComputedStyle(t, null);return e ? n[e] : n;
    }function o(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }function s(t) {
        if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body;var e = r(t),
            n = e.overflow,
            i = e.overflowX;return (/(auto|scroll)/.test(n + e.overflowY + i) ? t : s(o(t))
        );
    }function a(t) {
        var e = t && t.offsetParent,
            n = e && e.nodeName;return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === r(e, "position") ? a(e) : e : window.document.documentElement;
    }function l(t) {
        var e = t.nodeName;return "BODY" !== e && ("HTML" === e || a(t.firstElementChild) === t);
    }function c(t) {
        return null !== t.parentNode ? c(t.parentNode) : t;
    }function f(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s = o.commonAncestorContainer;if (t !== s && e !== s || i.contains(r)) return l(s) ? s : a(s);var h = c(t);return h.host ? f(h.host, e) : f(t, c(e).host);
    }function h(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;return (window.document.scrollingElement || i)[e];
        }return t[e];
    }function u(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = h(e, "top"),
            r = h(e, "left"),
            o = n ? -1 : 1;return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
    }function d(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";return +t["border" + n + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0];
    }function p(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], lt() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
    }function g() {
        var t = window.document.body,
            e = window.document.documentElement,
            n = lt() && window.getComputedStyle(e);return { height: p("Height", t, e, n), width: p("Width", t, e, n) };
    }function m(t) {
        return ut({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }function _(t) {
        var e = {};if (lt()) try {
            e = t.getBoundingClientRect();var n = h(t, "top"),
                i = h(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
        } catch (t) {} else e = t.getBoundingClientRect();var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            s = "HTML" === t.nodeName ? g() : {},
            a = s.width || t.clientWidth || o.right - o.left,
            l = s.height || t.clientHeight || o.bottom - o.top,
            c = t.offsetWidth - a,
            f = t.offsetHeight - l;if (c || f) {
            var u = r(t);c -= d(u, "x"), f -= d(u, "y"), o.width -= c, o.height -= f;
        }return m(o);
    }function v(t, e) {
        var n = lt(),
            i = "HTML" === e.nodeName,
            o = _(t),
            a = _(e),
            l = s(t),
            c = r(e),
            f = +c.borderTopWidth.split("px")[0],
            h = +c.borderLeftWidth.split("px")[0],
            d = m({ top: o.top - a.top - f, left: o.left - a.left - h, width: o.width, height: o.height });if (d.marginTop = 0, d.marginLeft = 0, !n && i) {
            var p = +c.marginTop.split("px")[0],
                g = +c.marginLeft.split("px")[0];d.top -= f - p, d.bottom -= f - p, d.left -= h - g, d.right -= h - g, d.marginTop = p, d.marginLeft = g;
        }return (n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (d = u(d, e)), d;
    }function E(t) {
        var e = window.document.documentElement,
            n = v(t, e),
            i = Math.max(e.clientWidth, window.innerWidth || 0),
            r = Math.max(e.clientHeight, window.innerHeight || 0),
            o = h(e),
            s = h(e, "left");return m({ top: o - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r });
    }function T(t) {
        var e = t.nodeName;return "BODY" !== e && "HTML" !== e && ("fixed" === r(t, "position") || T(o(t)));
    }function b(t, e, n, i) {
        var r = { top: 0, left: 0 },
            a = f(t, e);if ("viewport" === i) r = E(a);else {
            var l = void 0;"scrollParent" === i ? "BODY" === (l = s(o(t))).nodeName && (l = window.document.documentElement) : l = "window" === i ? window.document.documentElement : i;var c = v(l, a);if ("HTML" !== l.nodeName || T(a)) r = c;else {
                var h = g(),
                    u = h.height,
                    d = h.width;r.top += c.top - c.marginTop, r.bottom = u + c.top, r.left += c.left - c.marginLeft, r.right = d + c.left;
            }
        }return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r;
    }function C(t) {
        return t.width * t.height;
    }function A(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var s = b(n, i, o, r),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a).map(function (t) {
            return ut({ key: t }, a[t], { area: C(a[t]) });
        }).sort(function (t, e) {
            return e.area - t.area;
        }),
            c = l.filter(function (t) {
            var e = t.width,
                i = t.height;return e >= n.clientWidth && i >= n.clientHeight;
        }),
            f = c.length > 0 ? c[0].key : l[0].key,
            h = t.split("-")[1];return f + (h ? "-" + h : "");
    }function I(t, e, n) {
        return v(n, f(e, n));
    }function O(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }function y(t) {
        var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
        });
    }function D(t, e, n) {
        n = n.split("-")[0];var i = O(t),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[y(a)], r;
    }function S(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }function w(t, e, n) {
        if (Array.prototype.findIndex) return t.findIndex(function (t) {
            return t[e] === n;
        });var i = S(t, function (t) {
            return t[e] === n;
        });return t.indexOf(i);
    }function N(t, e, n) {
        return (void 0 === n ? t : t.slice(0, w(t, "name", n))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = t.function || t.fn;t.enabled && i(n) && (e.offsets.popper = m(e.offsets.popper), e.offsets.reference = m(e.offsets.reference), e = n(e, t));
        }), e;
    }function L() {
        if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = I(this.state, this.popper, this.reference), t.placement = A(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = D(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = N(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
        }
    }function P(t, e) {
        return t.some(function (t) {
            var n = t.name;return t.enabled && n === e;
        });
    }function R(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;if ("undefined" != typeof window.document.body.style[o]) return o;
        }return null;
    }function H() {
        return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }function k(t, e, n, i) {
        var r = "BODY" === t.nodeName,
            o = r ? window : t;o.addEventListener(e, n, { passive: !0 }), r || k(s(o.parentNode), e, n, i), i.push(o);
    }function W(t, e, n, i) {
        n.updateBound = i, window.addEventListener("resize", n.updateBound, { passive: !0 });var r = s(t);return k(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
    }function x() {
        this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate));
    }function M(t, e) {
        return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound);
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e;
    }function U() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
    }function V(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }function F(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(e[n]) && (i = "px"), t.style[n] = e[n] + i;
        });
    }function j(t, e) {
        Object.keys(e).forEach(function (n) {
            !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
        });
    }function B(t, e, n) {
        var i = S(t, function (t) {
            return t.name === e;
        }),
            r = !!i && t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order;
        });if (!r) {
            var o = "`" + e + "`",
                s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
        }return r;
    }function G(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t;
    }function K(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = pt.indexOf(t),
            i = pt.slice(n + 1).concat(pt.slice(0, n));return e ? i.reverse() : i;
    }function Q(t, e, n, i) {
        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            s = r[2];if (!o) return t;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                    a = n;break;case "%":case "%r":default:
                    a = i;}return m(a)[e] / 100 * o;
        }if ("vh" === s || "vw" === s) {
            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
        }return o;
    }function Y(t, e, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function (t) {
            return t.trim();
        }),
            a = s.indexOf(S(s, function (t) {
            return -1 !== t.search(/,|\s/);
        }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
            }, []).map(function (t) {
                return Q(t, r, e, n);
            });
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                V(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
            });
        }), r;
    }e = e && e.hasOwnProperty("default") ? e.default : e;for (var X = function () {
        function t(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }function n() {
            return { bindType: o.end, delegateType: o.end, handle: function handle(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                } };
        }function i() {
            if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in s) {
                if ("undefined" != typeof t.style[e]) return { end: s[e] };
            }return !1;
        }function r(t) {
            var n = this,
                i = !1;return e(this).one(a.TRANSITION_END, function () {
                i = !0;
            }), setTimeout(function () {
                i || a.triggerTransitionEnd(n);
            }, t), this;
        }var o = !1,
            s = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
            a = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
                do {
                    t += ~~(1e6 * Math.random());
                } while (document.getElementById(t));return t;
            }, getSelectorFromElement: function getSelectorFromElement(t) {
                var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || "");try {
                    return e(document).find(n).length > 0 ? n : null;
                } catch (t) {
                    return null;
                }
            }, reflow: function reflow(t) {
                return t.offsetHeight;
            }, triggerTransitionEnd: function triggerTransitionEnd(t) {
                e(t).trigger(o.end);
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(o);
            }, isElement: function isElement(t) {
                return (t[0] || t).nodeType;
            }, typeCheckConfig: function typeCheckConfig(e, n, i) {
                for (var r in i) {
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var o = i[r],
                            s = n[r],
                            l = s && a.isElement(s) ? "element" : t(s);if (!new RegExp(o).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".');
                    }
                }
            } };return o = i(), e.fn.emulateTransitionEnd = r, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a;
    }(), q = function q(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }, z = function z(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }, Z = function () {
        var t = "alert",
            n = e.fn[t],
            i = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
            r = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            o = function () {
            function t(t) {
                this._element = t;
            }var n = t.prototype;return n.close = function (t) {
                t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
            }, n.dispose = function () {
                e.removeData(this._element, "bs.alert"), this._element = null;
            }, n._getRootElement = function (t) {
                var n = X.getSelectorFromElement(t),
                    i = !1;return n && (i = e(n)[0]), i || (i = e(t).closest("." + r.ALERT)[0]), i;
            }, n._triggerCloseEvent = function (t) {
                var n = e.Event(i.CLOSE);return e(t).trigger(n), n;
            }, n._removeElement = function (t) {
                var n = this;e(t).removeClass(r.SHOW), X.supportsTransitionEnd() && e(t).hasClass(r.FADE) ? e(t).one(X.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e);
                }).emulateTransitionEnd(150) : this._destroyElement(t);
            }, n._destroyElement = function (t) {
                e(t).detach().trigger(i.CLOSED).remove();
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this),
                        r = i.data("bs.alert");r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this);
                });
            }, t._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this);
                };
            }, q(t, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }]), t;
        }();return e(document).on(i.CLICK_DATA_API, { DISMISS: '[data-dismiss="alert"]' }.DISMISS, o._handleDismiss(new o())), e.fn[t] = o._jQueryInterface, e.fn[t].Constructor = o, e.fn[t].noConflict = function () {
            return e.fn[t] = n, o._jQueryInterface;
        }, o;
    }(), J = function () {
        var t = "button",
            n = e.fn[t],
            i = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            r = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
            o = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
            s = function () {
            function t(t) {
                this._element = t;
            }var n = t.prototype;return n.toggle = function () {
                var t = !0,
                    n = !0,
                    o = e(this._element).closest(r.DATA_TOGGLE)[0];if (o) {
                    var s = e(this._element).find(r.INPUT)[0];if (s) {
                        if ("radio" === s.type) if (s.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;else {
                            var a = e(o).find(r.ACTIVE)[0];a && e(a).removeClass(i.ACTIVE);
                        }if (t) {
                            if (s.hasAttribute("disabled") || o.hasAttribute("disabled") || s.classList.contains("disabled") || o.classList.contains("disabled")) return;s.checked = !e(this._element).hasClass(i.ACTIVE), e(s).trigger("change");
                        }s.focus(), n = !1;
                    }
                }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE);
            }, n.dispose = function () {
                e.removeData(this._element, "bs.button"), this._element = null;
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                });
            }, q(t, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }]), t;
        }();return e(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();var n = t.target;e(n).hasClass(i.BUTTON) || (n = e(n).closest(r.BUTTON)), s._jQueryInterface.call(e(n), "toggle");
        }).on(o.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(r.BUTTON)[0];e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type));
        }), e.fn[t] = s._jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = function () {
            return e.fn[t] = n, s._jQueryInterface;
        }, s;
    }(), $ = function () {
        var t = "carousel",
            n = "bs.carousel",
            i = "." + n,
            r = e.fn[t],
            o = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
            s = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
            a = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            l = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
            c = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
            f = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
            h = function () {
            function r(t, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(f.INDICATORS)[0], this._addEventListeners();
            }var h = r.prototype;return h.next = function () {
                this._isSliding || this._slide(a.NEXT);
            }, h.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
            }, h.prev = function () {
                this._isSliding || this._slide(a.PREV);
            }, h.pause = function (t) {
                t || (this._isPaused = !0), e(this._element).find(f.NEXT_PREV)[0] && X.supportsTransitionEnd() && (X.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }, h.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }, h.to = function (t) {
                var n = this;this._activeElement = e(this._element).find(f.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(l.SLID, function () {
                    return n.to(t);
                });else {
                    if (i === t) return this.pause(), void this.cycle();var r = t > i ? a.NEXT : a.PREV;this._slide(r, this._items[t]);
                }
            }, h.dispose = function () {
                e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
            }, h._getConfig = function (n) {
                return n = e.extend({}, o, n), X.typeCheckConfig(t, n, s), n;
            }, h._addEventListeners = function () {
                var t = this;this._config.keyboard && e(this._element).on(l.KEYDOWN, function (e) {
                    return t._keydown(e);
                }), "hover" === this._config.pause && (e(this._element).on(l.MOUSEENTER, function (e) {
                    return t.pause(e);
                }).on(l.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                }), ("ontouchstart" in document.documentElement) && e(this._element).on(l.TOUCHEND, function () {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e);
                    }, 500 + t._config.interval);
                }));
            }, h._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
                        t.preventDefault(), this.prev();break;case 39:
                        t.preventDefault(), this.next();break;default:
                        return;}
            }, h._getItemIndex = function (t) {
                return this._items = e.makeArray(e(t).parent().find(f.ITEM)), this._items.indexOf(t);
            }, h._getItemByDirection = function (t, e) {
                var n = t === a.NEXT,
                    i = t === a.PREV,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;var s = (r + (t === a.PREV ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
            }, h._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t),
                    r = this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0]),
                    o = e.Event(l.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });return e(this._element).trigger(o), o;
            }, h._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    e(this._indicatorsElement).find(f.ACTIVE).removeClass(c.ACTIVE);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(c.ACTIVE);
                }
            }, h._slide = function (t, n) {
                var i,
                    r,
                    o,
                    s = this,
                    h = e(this._element).find(f.ACTIVE_ITEM)[0],
                    u = this._getItemIndex(h),
                    d = n || h && this._getItemByDirection(t, h),
                    p = this._getItemIndex(d),
                    g = Boolean(this._interval);if (t === a.NEXT ? (i = c.LEFT, r = c.NEXT, o = a.LEFT) : (i = c.RIGHT, r = c.PREV, o = a.RIGHT), d && e(d).hasClass(c.ACTIVE)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && h && d) {
                    this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(d);var m = e.Event(l.SLID, { relatedTarget: d, direction: o, from: u, to: p });X.supportsTransitionEnd() && e(this._element).hasClass(c.SLIDE) ? (e(d).addClass(r), X.reflow(d), e(h).addClass(i), e(d).addClass(i), e(h).one(X.TRANSITION_END, function () {
                        e(d).removeClass(i + " " + r).addClass(c.ACTIVE), e(h).removeClass(c.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                            return e(s._element).trigger(m);
                        }, 0);
                    }).emulateTransitionEnd(600)) : (e(h).removeClass(c.ACTIVE), e(d).addClass(c.ACTIVE), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle();
                }
            }, r._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data(n),
                        s = e.extend({}, o, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && e.extend(s, t);var a = "string" == typeof t ? t : s.slide;if (i || (i = new r(this, s), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof a) {
                        if ("undefined" == typeof i[a]) throw new Error('No method named "' + a + '"');i[a]();
                    } else s.interval && (i.pause(), i.cycle());
                });
            }, r._dataApiClickHandler = function (t) {
                var i = X.getSelectorFromElement(this);if (i) {
                    var o = e(i)[0];if (o && e(o).hasClass(c.CAROUSEL)) {
                        var s = e.extend({}, e(o).data(), e(this).data()),
                            a = this.getAttribute("data-slide-to");a && (s.interval = !1), r._jQueryInterface.call(e(o), s), a && e(o).data(n).to(a), t.preventDefault();
                    }
                }
            }, q(r, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return o;
                } }]), r;
        }();return e(document).on(l.CLICK_DATA_API, f.DATA_SLIDE, h._dataApiClickHandler), e(window).on(l.LOAD_DATA_API, function () {
            e(f.DATA_RIDE).each(function () {
                var t = e(this);h._jQueryInterface.call(t, t.data());
            });
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
            return e.fn[t] = r, h._jQueryInterface;
        }, h;
    }(), tt = function () {
        var t = "collapse",
            n = "bs.collapse",
            i = e.fn[t],
            r = { toggle: !0, parent: "" },
            o = { toggle: "boolean", parent: "(string|element)" },
            s = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
            a = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
            l = { WIDTH: "width", HEIGHT: "height" },
            c = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
            f = function () {
            function i(t, n) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(c.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r],
                        s = X.getSelectorFromElement(o);null !== s && e(s).filter(t).length > 0 && this._triggerArray.push(o);
                }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }var f = i.prototype;return f.toggle = function () {
                e(this._element).hasClass(a.SHOW) ? this.hide() : this.show();
            }, f.show = function () {
                var t = this;if (!this._isTransitioning && !e(this._element).hasClass(a.SHOW)) {
                    var r, o;if (this._parent && ((r = e.makeArray(e(this._parent).children().children(c.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                        var l = e.Event(s.SHOW);if (e(this._element).trigger(l), !l.isDefaultPrevented()) {
                            r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));var f = this._getDimension();e(this._element).removeClass(a.COLLAPSE).addClass(a.COLLAPSING), this._element.style[f] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(a.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var h = function h() {
                                e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).addClass(a.SHOW), t._element.style[f] = "", t.setTransitioning(!1), e(t._element).trigger(s.SHOWN);
                            };if (X.supportsTransitionEnd()) {
                                var u = "scroll" + (f[0].toUpperCase() + f.slice(1));e(this._element).one(X.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[f] = this._element[u] + "px";
                            } else h();
                        }
                    }
                }
            }, f.hide = function () {
                var t = this;if (!this._isTransitioning && e(this._element).hasClass(a.SHOW)) {
                    var n = e.Event(s.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", X.reflow(this._element), e(this._element).addClass(a.COLLAPSING).removeClass(a.COLLAPSE).removeClass(a.SHOW), this._triggerArray.length) for (var r = 0; r < this._triggerArray.length; r++) {
                            var o = this._triggerArray[r],
                                l = X.getSelectorFromElement(o);null !== l && (e(l).hasClass(a.SHOW) || e(o).addClass(a.COLLAPSED).attr("aria-expanded", !1));
                        }this.setTransitioning(!0);var c = function c() {
                            t.setTransitioning(!1), e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).trigger(s.HIDDEN);
                        };this._element.style[i] = "", X.supportsTransitionEnd() ? e(this._element).one(X.TRANSITION_END, c).emulateTransitionEnd(600) : c();
                    }
                }
            }, f.setTransitioning = function (t) {
                this._isTransitioning = t;
            }, f.dispose = function () {
                e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
            }, f._getConfig = function (n) {
                return n = e.extend({}, r, n), n.toggle = Boolean(n.toggle), X.typeCheckConfig(t, n, o), n;
            }, f._getDimension = function () {
                return e(this._element).hasClass(l.WIDTH) ? l.WIDTH : l.HEIGHT;
            }, f._getParent = function () {
                var t = this,
                    n = null;X.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(r).each(function (e, n) {
                    t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
                }), n;
            }, f._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                    var i = e(t).hasClass(a.SHOW);n.length && e(n).toggleClass(a.COLLAPSED, !i).attr("aria-expanded", i);
                }
            }, i._getTargetFromElement = function (t) {
                var n = X.getSelectorFromElement(t);return n ? e(n)[0] : null;
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var o = e(this),
                        s = o.data(n),
                        a = e.extend({}, r, o.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!s && a.toggle && /show|hide/.test(t) && (a.toggle = !1), s || (s = new i(this, a), o.data(n, s)), "string" == typeof t) {
                        if ("undefined" == typeof s[t]) throw new Error('No method named "' + t + '"');s[t]();
                    }
                });
            }, q(i, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return r;
                } }]), i;
        }();return e(document).on(s.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
                r = X.getSelectorFromElement(this);e(r).each(function () {
                var t = e(this),
                    r = t.data(n) ? "toggle" : i.data();f._jQueryInterface.call(t, r);
            });
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = i, f._jQueryInterface;
        }, f;
    }(), et = ["native code", "[object MutationObserverConstructor]"], nt = "undefined" != typeof window, it = ["Edge", "Trident", "Firefox"], rt = 0, ot = 0; ot < it.length; ot += 1) {
        if (nt && navigator.userAgent.indexOf(it[ot]) >= 0) {
            rt = 1;break;
        }
    }var st = nt && function (t) {
        return et.some(function (e) {
            return (t || "").toString().indexOf(e) > -1;
        });
    }(window.MutationObserver) ? function (t) {
        var e = !1,
            n = 0,
            i = document.createElement("span");return new MutationObserver(function () {
            t(), e = !1;
        }).observe(i, { attributes: !0 }), function () {
            e || (e = !0, i.setAttribute("x-index", n), n += 1);
        };
    } : function (t) {
        var e = !1;return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t();
            }, rt));
        };
    },
        at = void 0,
        lt = function lt() {
        return void 0 === at && (at = -1 !== navigator.appVersion.indexOf("MSIE 10")), at;
    },
        ct = function ct(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    },
        ft = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
        };
    }(),
        ht = function ht(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    },
        ut = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];for (var i in n) {
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
        }return t;
    },
        dt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pt = dt.slice(3),
        gt = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        mt = { placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        i = e.split("-")[1];if (i) {
                        var r = t.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            f = { start: ht({}, l, o[l]), end: ht({}, l, o[l] + o[c] - s[c]) };t.offsets.popper = ut({}, s, f[i]);
                    }return t;
                } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
                    var n = e.offset,
                        i = t.placement,
                        r = t.offsets,
                        o = r.popper,
                        s = r.reference,
                        a = i.split("-")[0],
                        l = void 0;return l = V(+n) ? [+n, 0] : Y(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
                }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, e) {
                    var n = e.boundariesElement || a(t.instance.popper);t.instance.reference === n && (n = a(n));var i = b(t.instance.popper, t.instance.reference, e.padding, n);e.boundaries = i;var r = e.priority,
                        o = t.offsets.popper,
                        s = { primary: function primary(t) {
                            var n = o[t];return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), ht({}, t, n);
                        }, secondary: function secondary(t) {
                            var n = "right" === t ? "left" : "top",
                                r = o[n];return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), ht({}, n, r);
                        } };return r.forEach(function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";o = ut({}, o, s[e](t));
                    }), t.offsets.popper = o, t;
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
                    var e = t.offsets,
                        n = e.popper,
                        i = e.reference,
                        r = t.placement.split("-")[0],
                        o = Math.floor,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
                } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
                    if (!B(t.instance.modifiers, "arrow", "keepTogether")) return t;var n = e.element;if ("string" == typeof n) {
                        if (!(n = t.instance.popper.querySelector(n))) return t;
                    } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var i = t.placement.split("-")[0],
                        o = t.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(i),
                        c = l ? "height" : "width",
                        f = l ? "Top" : "Left",
                        h = f.toLowerCase(),
                        u = l ? "left" : "top",
                        d = l ? "bottom" : "right",
                        p = O(n)[c];a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]);var g = a[h] + a[c] / 2 - p / 2,
                        _ = r(t.instance.popper, "margin" + f).replace("px", ""),
                        v = g - m(t.offsets.popper)[h] - _;return v = Math.max(Math.min(s[c] - p, v), 0), t.arrowElement = n, t.offsets.arrow = {}, t.offsets.arrow[h] = Math.round(v), t.offsets.arrow[u] = "", t;
                }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(t, e) {
                    if (P(t.instance.modifiers, "inner")) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var n = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                        i = t.placement.split("-")[0],
                        r = y(i),
                        o = t.placement.split("-")[1] || "",
                        s = [];switch (e.behavior) {case gt.FLIP:
                            s = [i, r];break;case gt.CLOCKWISE:
                            s = K(i);break;case gt.COUNTERCLOCKWISE:
                            s = K(i, !0);break;default:
                            s = e.behavior;}return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return t;i = t.placement.split("-")[0], r = y(i);var c = t.offsets.popper,
                            f = t.offsets.reference,
                            h = Math.floor,
                            u = "left" === i && h(c.right) > h(f.left) || "right" === i && h(c.left) < h(f.right) || "top" === i && h(c.bottom) > h(f.top) || "bottom" === i && h(c.top) < h(f.bottom),
                            d = h(c.left) < h(n.left),
                            p = h(c.right) > h(n.right),
                            g = h(c.top) < h(n.top),
                            m = h(c.bottom) > h(n.bottom),
                            _ = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            v = -1 !== ["top", "bottom"].indexOf(i),
                            E = !!e.flipVariations && (v && "start" === o && d || v && "end" === o && p || !v && "start" === o && g || !v && "end" === o && m);(u || _ || E) && (t.flipped = !0, (u || _) && (i = s[l + 1]), E && (o = G(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = ut({}, t.offsets.popper, D(t.instance.popper, t.offsets.reference, t.placement)), t = N(t.instance.modifiers, t, "flip"));
                    }), t;
                }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        i = t.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = y(e), t.offsets.popper = m(r), t;
                } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
                    if (!B(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
                        n = S(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name;
                    }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
                    }return t;
                } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
                    var n = e.x,
                        i = e.y,
                        r = t.offsets.popper,
                        o = S(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name;
                    }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : e.gpuAcceleration,
                        l = _(a(t.instance.popper)),
                        c = { position: r.position },
                        f = { left: Math.floor(r.left), top: Math.floor(r.top), bottom: Math.floor(r.bottom), right: Math.floor(r.right) },
                        h = "bottom" === n ? "top" : "bottom",
                        u = "right" === i ? "left" : "right",
                        d = R("transform"),
                        p = void 0,
                        g = void 0;if (g = "bottom" === h ? -l.height + f.bottom : f.top, p = "right" === u ? -l.width + f.right : f.left, s && d) c[d] = "translate3d(" + p + "px, " + g + "px, 0)", c[h] = 0, c[u] = 0, c.willChange = "transform";else {
                        var m = "bottom" === h ? -1 : 1,
                            v = "right" === u ? -1 : 1;c[h] = g * m, c[u] = p * v, c.willChange = h + ", " + u;
                    }var E = { "x-placement": t.placement };return t.attributes = ut({}, E, t.attributes), t.styles = ut({}, c, t.styles), t.arrowStyles = ut({}, t.offsets.arrow, t.arrowStyles), t;
                }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
                    return F(t.instance.popper, t.styles), j(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t;
                }, onLoad: function onLoad(t, e, n, i, r) {
                    var o = I(r, e, t),
                        s = A(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", s), F(e, { position: "absolute" }), n;
                }, gpuAcceleration: void 0 } } },
        _t = function () {
        function t(e, n) {
            var r = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};ct(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(r.update);
            }, this.update = st(this.update.bind(this)), this.options = ut({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e.jquery ? e[0] : e, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ut({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                r.options.modifiers[e] = ut({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                return ut({ name: t }, r.options.modifiers[t]);
            }).sort(function (t, e) {
                return t.order - e.order;
            }), this.modifiers.forEach(function (t) {
                t.enabled && i(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
            }), this.update();var s = this.options.eventsEnabled;s && this.enableEventListeners(), this.state.eventsEnabled = s;
        }return ft(t, [{ key: "update", value: function value() {
                return L.call(this);
            } }, { key: "destroy", value: function value() {
                return H.call(this);
            } }, { key: "enableEventListeners", value: function value() {
                return x.call(this);
            } }, { key: "disableEventListeners", value: function value() {
                return U.call(this);
            } }]), t;
    }();_t.Utils = ("undefined" != typeof window ? window : global).PopperUtils, _t.placements = dt, _t.Defaults = mt;var vt = function () {
        if ("undefined" == typeof _t) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t = "dropdown",
            n = "bs.dropdown",
            i = "." + n,
            r = e.fn[t],
            o = new RegExp("38|40|27"),
            s = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, CLICK: "click" + i, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
            a = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left" },
            l = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)" },
            c = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end" },
            f = { offset: 0, flip: !0 },
            h = { offset: "(number|string|function)", flip: "boolean" },
            u = function () {
            function r(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
            }var u = r.prototype;return u.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(a.DISABLED)) {
                    var t = r._getParentFromElement(this._element),
                        n = e(this._menu).hasClass(a.SHOW);if (r._clearMenus(), !n) {
                        var i = { relatedTarget: this._element },
                            o = e.Event(s.SHOW, i);if (e(t).trigger(o), !o.isDefaultPrevented()) {
                            var c = this._element;e(t).hasClass(a.DROPUP) && (e(this._menu).hasClass(a.MENULEFT) || e(this._menu).hasClass(a.MENURIGHT)) && (c = t), this._popper = new _t(c, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(l.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(a.SHOW), e(t).toggleClass(a.SHOW).trigger(e.Event(s.SHOWN, i));
                        }
                    }
                }
            }, u.dispose = function () {
                e.removeData(this._element, n), e(this._element).off(i), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null;
            }, u.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
            }, u._addEventListeners = function () {
                var t = this;e(this._element).on(s.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                });
            }, u._getConfig = function (n) {
                return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), X.typeCheckConfig(t, n, this.constructor.DefaultType), n;
            }, u._getMenuElement = function () {
                if (!this._menu) {
                    var t = r._getParentFromElement(this._element);this._menu = e(t).find(l.MENU)[0];
                }return this._menu;
            }, u._getPlacement = function () {
                var t = e(this._element).parent(),
                    n = c.BOTTOM;return t.hasClass(a.DROPUP) ? (n = c.TOP, e(this._menu).hasClass(a.MENURIGHT) && (n = c.TOPEND)) : e(this._menu).hasClass(a.MENURIGHT) && (n = c.BOTTOMEND), n;
            }, u._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0;
            }, u._getPopperConfig = function () {
                var t = this,
                    n = {};"function" == typeof this._config.offset ? n.fn = function (n) {
                    return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n;
                } : n.offset = this._config.offset;var i = { placement: this._getPlacement(), modifiers: { offset: n, flip: { enabled: this._config.flip } } };return this._inNavbar && (i.modifiers.applyStyle = { enabled: !this._inNavbar }), i;
            }, r._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data(n),
                        o = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if (i || (i = new r(this, o), e(this).data(n, i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');i[t]();
                    }
                });
            }, r._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var i = e.makeArray(e(l.DATA_TOGGLE)), o = 0; o < i.length; o++) {
                    var c = r._getParentFromElement(i[o]),
                        f = e(i[o]).data(n),
                        h = { relatedTarget: i[o] };if (f) {
                        var u = f._menu;if (e(c).hasClass(a.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(c, t.target))) {
                            var d = e.Event(s.HIDE, h);e(c).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(u).removeClass(a.SHOW), e(c).removeClass(a.SHOW).trigger(e.Event(s.HIDDEN, h)));
                        }
                    }
                }
            }, r._getParentFromElement = function (t) {
                var n,
                    i = X.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
            }, r._dataApiKeydownHandler = function (t) {
                if (!(!o.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(a.DISABLED)))) {
                    var n = r._getParentFromElement(this),
                        i = e(n).hasClass(a.SHOW);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var s = e(n).find(l.VISIBLE_ITEMS).get();if (s.length) {
                            var c = s.indexOf(t.target);38 === t.which && c > 0 && c--, 40 === t.which && c < s.length - 1 && c++, c < 0 && (c = 0), s[c].focus();
                        }
                    } else {
                        if (27 === t.which) {
                            var f = e(n).find(l.DATA_TOGGLE)[0];e(f).trigger("focus");
                        }e(this).trigger("click");
                    }
                }
            }, q(r, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return f;
                } }, { key: "DefaultType", get: function get() {
                    return h;
                } }]), r;
        }();return e(document).on(s.KEYDOWN_DATA_API, l.DATA_TOGGLE, u._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, l.MENU, u._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, u._clearMenus).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), u._jQueryInterface.call(e(this), "toggle");
        }).on(s.CLICK_DATA_API, l.FORM_CHILD, function (t) {
            t.stopPropagation();
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
            return e.fn[t] = r, u._jQueryInterface;
        }, u;
    }(),
        Et = function () {
        var t = "modal",
            n = ".bs.modal",
            i = e.fn[t],
            r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            o = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            s = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
            a = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
            l = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
            c = function () {
            function i(t, n) {
                this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(l.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
            }var c = i.prototype;return c.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
            }, c.show = function (t) {
                var n = this;if (!this._isTransitioning && !this._isShown) {
                    X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) && (this._isTransitioning = !0);var i = e.Event(s.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(a.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(s.CLICK_DISMISS, l.DATA_DISMISS, function (t) {
                        return n.hide(t);
                    }), e(this._dialog).on(s.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(s.MOUSEUP_DISMISS, function (t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function () {
                        return n._showElement(t);
                    }));
                }
            }, c.hide = function (t) {
                var n = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = e.Event(s.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;var r = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(s.FOCUSIN), e(this._element).removeClass(a.SHOW), e(this._element).off(s.CLICK_DISMISS), e(this._dialog).off(s.MOUSEDOWN_DISMISS), r ? e(this._element).one(X.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                        }).emulateTransitionEnd(300) : this._hideModal();
                    }
                }
            }, c.dispose = function () {
                e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
            }, c.handleUpdate = function () {
                this._adjustDialog();
            }, c._getConfig = function (n) {
                return n = e.extend({}, r, n), X.typeCheckConfig(t, n, o), n;
            }, c._showElement = function (t) {
                var n = this,
                    i = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && X.reflow(this._element), e(this._element).addClass(a.SHOW), this._config.focus && this._enforceFocus();var r = e.Event(s.SHOWN, { relatedTarget: t }),
                    o = function o() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
                };i ? e(this._dialog).one(X.TRANSITION_END, o).emulateTransitionEnd(300) : o();
            }, c._enforceFocus = function () {
                var t = this;e(document).off(s.FOCUSIN).on(s.FOCUSIN, function (n) {
                    document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus();
                });
            }, c._setEscapeEvent = function () {
                var t = this;this._isShown && this._config.keyboard ? e(this._element).on(s.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide());
                }) : this._isShown || e(this._element).off(s.KEYDOWN_DISMISS);
            }, c._setResizeEvent = function () {
                var t = this;this._isShown ? e(window).on(s.RESIZE, function (e) {
                    return t.handleUpdate(e);
                }) : e(window).off(s.RESIZE);
            }, c._hideModal = function () {
                var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    e(document.body).removeClass(a.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(s.HIDDEN);
                });
            }, c._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
            }, c._showBackdrop = function (t) {
                var n = this,
                    i = e(this._element).hasClass(a.FADE) ? a.FADE : "";if (this._isShown && this._config.backdrop) {
                    var r = X.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = a.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(s.CLICK_DISMISS, function (t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                    }), r && X.reflow(this._backdrop), e(this._backdrop).addClass(a.SHOW), !t) return;if (!r) return void t();e(this._backdrop).one(X.TRANSITION_END, t).emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(a.SHOW);var o = function o() {
                        n._removeBackdrop(), t && t();
                    };X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) ? e(this._backdrop).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o();
                } else t && t();
            }, c._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }, c._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }, c._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
            }, c._setScrollbar = function () {
                var t = this;if (this._isBodyOverflowing) {
                    e(l.FIXED_CONTENT).each(function (n, i) {
                        var r = e(i)[0].style.paddingRight,
                            o = e(i).css("padding-right");e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
                    }), e(l.STICKY_CONTENT).each(function (n, i) {
                        var r = e(i)[0].style.marginRight,
                            o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
                    }), e(l.NAVBAR_TOGGLER).each(function (n, i) {
                        var r = e(i)[0].style.marginRight,
                            o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px");
                    });var n = document.body.style.paddingRight,
                        i = e("body").css("padding-right");e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                }
            }, c._resetScrollbar = function () {
                e(l.FIXED_CONTENT).each(function (t, n) {
                    var i = e(n).data("padding-right");"undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right");
                }), e(l.STICKY_CONTENT + ", " + l.NAVBAR_TOGGLER).each(function (t, n) {
                    var i = e(n).data("margin-right");"undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
                });var t = e("body").data("padding-right");"undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right");
            }, c._getScrollbarWidth = function () {
                var t = document.createElement("div");t.className = a.SCROLLBAR_MEASURER, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
            }, i._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var r = e(this).data("bs.modal"),
                        o = e.extend({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
                        if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');r[t](n);
                    } else o.show && r.show(n);
                });
            }, q(i, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return r;
                } }]), i;
        }();return e(document).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function (t) {
            var n,
                i = this,
                r = X.getSelectorFromElement(this);r && (n = e(r)[0]);var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var a = e(n).one(s.SHOW, function (t) {
                t.isDefaultPrevented() || a.one(s.HIDDEN, function () {
                    e(i).is(":visible") && i.focus();
                });
            });c._jQueryInterface.call(e(n), o, this);
        }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function () {
            return e.fn[t] = i, c._jQueryInterface;
        }, c;
    }(),
        Tt = function () {
        if ("undefined" == typeof _t) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t = "tooltip",
            n = ".bs.tooltip",
            i = e.fn[t],
            r = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            o = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)" },
            s = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            a = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip" },
            l = { SHOW: "show", OUT: "out" },
            c = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
            f = { FADE: "fade", SHOW: "show" },
            h = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
            u = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
            d = function () {
            function i(t, e) {
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
            }var d = i.prototype;return d.enable = function () {
                this._isEnabled = !0;
            }, d.disable = function () {
                this._isEnabled = !1;
            }, d.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
            }, d.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var n = this.constructor.DATA_KEY,
                        i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                } else {
                    if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);this._enter(null, this);
                }
            }, d.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
            }, d.show = function () {
                var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var n = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
                        s = X.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(f.FADE);var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        c = this._getAttachment(a);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new _t(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: h.ARROW } }, onCreate: function onCreate(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                        }, onUpdate: function onUpdate(e) {
                            t._handlePopperPlacementChange(e);
                        } }), e(o).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);var d = function d() {
                        t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === l.OUT && t._leave(null, t);
                    };X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(X.TRANSITION_END, d).emulateTransitionEnd(i._TRANSITION_DURATION) : d();
                }
            }, d.hide = function (t) {
                var n = this,
                    i = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE),
                    o = function o() {
                    n._hoverState !== l.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
                };e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[u.CLICK] = !1, this._activeTrigger[u.FOCUS] = !1, this._activeTrigger[u.HOVER] = !1, X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "");
            }, d.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
            }, d.isWithContent = function () {
                return Boolean(this.getTitle());
            }, d.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t);
            }, d.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip;
            }, d.setContent = function () {
                var t = e(this.getTipElement());this.setElementContent(t.find(h.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW);
            }, d.setElementContent = function (t, n) {
                var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
            }, d.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
            }, d._getAttachment = function (t) {
                return s[t.toUpperCase()];
            }, d._setListeners = function () {
                var t = this;this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                        return t.toggle(e);
                    });else if (n !== u.MANUAL) {
                        var i = n === u.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            r = n === u.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
                            return t._enter(e);
                        }).on(r, t.config.selector, function (e) {
                            return t._leave(e);
                        });
                    }e(t.element).closest(".modal").on("hide.bs.modal", function () {
                        return t.hide();
                    });
                }), this.config.selector ? this.config = e.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
            }, d._fixTitle = function () {
                var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
            }, d._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? u.FOCUS : u.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === l.SHOW ? n._hoverState = l.SHOW : (clearTimeout(n._timeout), n._hoverState = l.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === l.SHOW && n.show();
                }, n.config.delay.show) : n.show());
            }, d._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? u.FOCUS : u.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = l.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === l.OUT && n.hide();
                }, n.config.delay.hide) : n.hide());
            }, d._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) {
                    if (this._activeTrigger[t]) return !0;
                }return !1;
            }, d._getConfig = function (n) {
                return "number" == typeof (n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), X.typeCheckConfig(t, n, this.constructor.DefaultType), n;
            }, d._getDelegateConfig = function () {
                var t = {};if (this.config) for (var e in this.config) {
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                }return t;
            }, d._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(r);null !== n && n.length > 0 && t.removeClass(n.join(""));
            }, d._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
            }, d._fixTransition = function () {
                var t = this.getTipElement(),
                    n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.tooltip"),
                        r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new i(this, r), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');n[t]();
                    }
                });
            }, q(i, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return a;
                } }, { key: "NAME", get: function get() {
                    return t;
                } }, { key: "DATA_KEY", get: function get() {
                    return "bs.tooltip";
                } }, { key: "Event", get: function get() {
                    return c;
                } }, { key: "EVENT_KEY", get: function get() {
                    return n;
                } }, { key: "DefaultType", get: function get() {
                    return o;
                } }]), i;
        }();return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface;
        }, d;
    }(),
        bt = function () {
        var t = "popover",
            n = ".bs.popover",
            i = e.fn[t],
            r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            o = e.extend({}, Tt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            s = e.extend({}, Tt.DefaultType, { content: "(string|element|function)" }),
            a = { FADE: "fade", SHOW: "show" },
            l = { TITLE: ".popover-header", CONTENT: ".popover-body" },
            c = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
            f = function (i) {
            function f() {
                return i.apply(this, arguments) || this;
            }z(f, i);var h = f.prototype;return h.isWithContent = function () {
                return this.getTitle() || this._getContent();
            }, h.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t);
            }, h.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip;
            }, h.setContent = function () {
                var t = e(this.getTipElement());this.setElementContent(t.find(l.TITLE), this.getTitle()), this.setElementContent(t.find(l.CONTENT), this._getContent()), t.removeClass(a.FADE + " " + a.SHOW);
            }, h._getContent = function () {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
            }, h._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(r);null !== n && n.length > 0 && t.removeClass(n.join(""));
            }, f._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.popover"),
                        i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new f(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');n[t]();
                    }
                });
            }, q(f, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return o;
                } }, { key: "NAME", get: function get() {
                    return t;
                } }, { key: "DATA_KEY", get: function get() {
                    return "bs.popover";
                } }, { key: "Event", get: function get() {
                    return c;
                } }, { key: "EVENT_KEY", get: function get() {
                    return n;
                } }, { key: "DefaultType", get: function get() {
                    return s;
                } }]), f;
        }(Tt);return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = i, f._jQueryInterface;
        }, f;
    }(),
        Ct = function () {
        var t = "scrollspy",
            n = e.fn[t],
            i = { offset: 10, method: "auto", target: "" },
            r = { offset: "number", method: "string", target: "(string|element)" },
            o = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
            s = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
            a = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
            l = { OFFSET: "offset", POSITION: "position" },
            c = function () {
            function n(t, n) {
                var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + a.NAV_LINKS + "," + this._config.target + " " + a.LIST_ITEMS + "," + this._config.target + " " + a.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(o.SCROLL, function (t) {
                    return i._process(t);
                }), this.refresh(), this._process();
            }var c = n.prototype;return c.refresh = function () {
                var t = this,
                    n = this._scrollElement !== this._scrollElement.window ? l.POSITION : l.OFFSET,
                    i = "auto" === this._config.method ? n : this._config.method,
                    r = i === l.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                    var n,
                        o = X.getSelectorFromElement(t);if (o && (n = e(o)[0]), n) {
                        var s = n.getBoundingClientRect();if (s.width || s.height) return [e(n)[i]().top + r, o];
                    }return null;
                }).filter(function (t) {
                    return t;
                }).sort(function (t, e) {
                    return t[0] - e[0];
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1]);
                });
            }, c.dispose = function () {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
            }, c._getConfig = function (n) {
                if ("string" != typeof (n = e.extend({}, i, n)).target) {
                    var o = e(n.target).attr("id");o || (o = X.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o;
                }return X.typeCheckConfig(t, n, r), n;
            }, c._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }, c._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }, c._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }, c._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                    }
                }
            }, c._activate = function (t) {
                this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                });var i = e(n.join(","));i.hasClass(s.DROPDOWN_ITEM) ? (i.closest(a.DROPDOWN).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), i.addClass(s.ACTIVE)) : (i.addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_LINKS + ", " + a.LIST_ITEMS).addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_ITEMS).children(a.NAV_LINKS).addClass(s.ACTIVE)), e(this._scrollElement).trigger(o.ACTIVATE, { relatedTarget: t });
            }, c._clear = function () {
                e(this._selector).filter(a.ACTIVE).removeClass(s.ACTIVE);
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data("bs.scrollspy"),
                        r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if (i || (i = new n(this, r), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');i[t]();
                    }
                });
            }, q(n, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }, { key: "Default", get: function get() {
                    return i;
                } }]), n;
        }();return e(window).on(o.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(a.DATA_SPY)), n = t.length; n--;) {
                var i = e(t[n]);c._jQueryInterface.call(i, i.data());
            }
        }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function () {
            return e.fn[t] = n, c._jQueryInterface;
        }, c;
    }(),
        At = function () {
        var t = e.fn.tab,
            n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
            i = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
            r = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
            o = function () {
            function t(t) {
                this._element = t;
            }var o = t.prototype;return o.show = function () {
                var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                    var o,
                        s,
                        a = e(this._element).closest(r.NAV_LIST_GROUP)[0],
                        l = X.getSelectorFromElement(this._element);if (a) {
                        var c = "UL" === a.nodeName ? r.ACTIVE_UL : r.ACTIVE;s = e.makeArray(e(a).find(c)), s = s[s.length - 1];
                    }var f = e.Event(n.HIDE, { relatedTarget: this._element }),
                        h = e.Event(n.SHOW, { relatedTarget: s });if (s && e(s).trigger(f), e(this._element).trigger(h), !h.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        l && (o = e(l)[0]), this._activate(this._element, a);var u = function u() {
                            var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                                r = e.Event(n.SHOWN, { relatedTarget: s });e(s).trigger(i), e(t._element).trigger(r);
                        };o ? this._activate(o, o.parentNode, u) : u();
                    }
                }
            }, o.dispose = function () {
                e.removeData(this._element, "bs.tab"), this._element = null;
            }, o._activate = function (t, n, o) {
                var s,
                    a = this,
                    l = (s = "UL" === n.nodeName ? e(n).find(r.ACTIVE_UL) : e(n).children(r.ACTIVE))[0],
                    c = o && X.supportsTransitionEnd() && l && e(l).hasClass(i.FADE),
                    f = function f() {
                    return a._transitionComplete(t, l, c, o);
                };l && c ? e(l).one(X.TRANSITION_END, f).emulateTransitionEnd(150) : f(), l && e(l).removeClass(i.SHOW);
            }, o._transitionComplete = function (t, n, o, s) {
                if (n) {
                    e(n).removeClass(i.ACTIVE);var a = e(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];a && e(a).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                }if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), o ? (X.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                    var l = e(t).closest(r.DROPDOWN)[0];l && e(l).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0);
                }s && s();
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this),
                        r = i.data("bs.tab");if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new Error('No method named "' + n + '"');r[n]();
                    }
                });
            }, q(t, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0-beta.2";
                } }]), t;
        }();return e(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function (t) {
            t.preventDefault(), o._jQueryInterface.call(e(this), "show");
        }), e.fn.tab = o._jQueryInterface, e.fn.tab.Constructor = o, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, o._jQueryInterface;
        }, o;
    }();return function () {
        if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), t.Util = X, t.Alert = Z, t.Button = J, t.Carousel = $, t.Collapse = tt, t.Dropdown = vt, t.Modal = Et, t.Popover = bt, t.Scrollspy = Ct, t.Tab = At, t.Tooltip = Tt, t;
}({}, $);
//# sourceMappingURL=bootstrap.bundle.min.js.map
$(function () {
    !function (a) {
        "use strict";

        a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = a(this.hash);
                if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
                    scrollTop: e.offset().top - 57
                }, 1e3, "easeInOutExpo"), !1;
            }
        }), a(".js-scroll-trigger").click(function () {
            a(".navbar-collapse").collapse("hide");
        }), a("body").scrollspy({
            target: "#mainNav", offset: 57
        });
        var e = function e() {

            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        e(), a(window).scroll(e);
    }(jQuery);
});