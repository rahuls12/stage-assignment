(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var $,
  h,
  tt,
  V,
  Le,
  nt,
  pe,
  be,
  he,
  Ae,
  rt,
  Z = {},
  ot = [],
  It = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  le = Array.isArray;
function R(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function it(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function T(e, t, n) {
  var r,
    o,
    i,
    l = {};
  for (i in t)
    i == "key" ? (r = t[i]) : i == "ref" ? (o = t[i]) : (l[i] = t[i]);
  if (
    (arguments.length > 2 &&
      (l.children = arguments.length > 3 ? $.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
  )
    for (i in e.defaultProps) l[i] === void 0 && (l[i] = e.defaultProps[i]);
  return z(e, l, r, o, null);
}
function z(e, t, n, r, o) {
  var i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++tt,
    __i: -1,
    __u: 0,
  };
  return o == null && h.vnode != null && h.vnode(i), i;
}
function Nt() {
  return { current: null };
}
function L(e) {
  return e.children;
}
function N(e, t) {
  (this.props = e), (this.context = t);
}
function q(e, t) {
  if (t == null) return e.__ ? q(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? q(e) : null;
}
function ut(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ut(e);
  }
}
function ye(e) {
  ((!e.__d && (e.__d = !0) && V.push(e) && !ue.__r++) ||
    Le !== h.debounceRendering) &&
    ((Le = h.debounceRendering) || nt)(ue);
}
function ue() {
  var e, t, n, r, o, i, l, s;
  for (V.sort(pe); (e = V.shift()); )
    e.__d &&
      ((t = V.length),
      (r = void 0),
      (i = (o = (n = e).__v).__e),
      (l = []),
      (s = []),
      n.__P &&
        (((r = R({}, o)).__v = o.__v + 1),
        h.vnode && h.vnode(r),
        Ce(
          n.__P,
          r,
          o,
          n.__n,
          n.__P.namespaceURI,
          32 & o.__u ? [i] : null,
          l,
          i ?? q(o),
          !!(32 & o.__u),
          s
        ),
        (r.__v = o.__v),
        (r.__.__k[r.__i] = r),
        at(l, r, s),
        r.__e != i && ut(r)),
      V.length > t && V.sort(pe));
  ue.__r = 0;
}
function lt(e, t, n, r, o, i, l, s, c, a, f) {
  var u,
    p,
    d,
    A,
    w,
    b = (r && r.__k) || ot,
    y = t.length;
  for (n.__d = c, Dt(n, t, b), c = n.__d, u = 0; u < y; u++)
    (d = n.__k[u]) != null &&
      ((p = d.__i === -1 ? Z : b[d.__i] || Z),
      (d.__i = u),
      Ce(e, d, p, o, i, l, s, c, a, f),
      (A = d.__e),
      d.ref &&
        p.ref != d.ref &&
        (p.ref && we(p.ref, null, d), f.push(d.ref, d.__c || A, d)),
      w == null && A != null && (w = A),
      65536 & d.__u || p.__k === d.__k
        ? (c = st(d, c, e))
        : typeof d.type == "function" && d.__d !== void 0
        ? (c = d.__d)
        : A && (c = A.nextSibling),
      (d.__d = void 0),
      (d.__u &= -196609));
  (n.__d = c), (n.__e = w);
}
function Dt(e, t, n) {
  var r,
    o,
    i,
    l,
    s,
    c = t.length,
    a = n.length,
    f = a,
    u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    (o = t[r]) != null && typeof o != "boolean" && typeof o != "function"
      ? ((l = r + u),
        ((o = e.__k[r] =
          typeof o == "string" ||
          typeof o == "number" ||
          typeof o == "bigint" ||
          o.constructor == String
            ? z(null, o, null, null, null)
            : le(o)
            ? z(L, { children: o }, null, null, null)
            : o.constructor === void 0 && o.__b > 0
            ? z(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
            : o).__ = e),
        (o.__b = e.__b + 1),
        (i = null),
        (s = o.__i = Pt(o, n, l, f)) !== -1 &&
          (f--, (i = n[s]) && (i.__u |= 131072)),
        i == null || i.__v === null
          ? (s == -1 && u--, typeof o.type != "function" && (o.__u |= 65536))
          : s !== l &&
            (s == l - 1
              ? u--
              : s == l + 1
              ? u++
              : (s > l ? u-- : u++, (o.__u |= 65536))))
      : (o = e.__k[r] = null);
  if (f)
    for (r = 0; r < a; r++)
      (i = n[r]) != null &&
        !(131072 & i.__u) &&
        (i.__e == e.__d && (e.__d = q(i)), ct(i, i));
}
function st(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && ((r[o].__ = e), (t = st(r[o], t, n)));
    return t;
  }
  e.__e != t &&
    (t && e.type && !n.contains(t) && (t = q(e)),
    n.insertBefore(e.__e, t || null),
    (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function U(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (le(e)
        ? e.some(function (n) {
            U(n, t);
          })
        : t.push(e)),
    t
  );
}
function Pt(e, t, n, r) {
  var o = e.key,
    i = e.type,
    l = n - 1,
    s = n + 1,
    c = t[n];
  if (c === null || (c && o == c.key && i === c.type && !(131072 & c.__u)))
    return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; l >= 0 || s < t.length; ) {
      if (l >= 0) {
        if ((c = t[l]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return l;
        l--;
      }
      if (s < t.length) {
        if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Ie(e, t, n) {
  t[0] === "-"
    ? e.setProperty(t, n ?? "")
    : (e[t] =
        n == null ? "" : typeof n != "number" || It.test(t) ? n : n + "px");
}
function re(e, t, n, r, o) {
  var i;
  e: if (t === "style")
    if (typeof n == "string") e.style.cssText = n;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || Ie(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || Ie(e.style, t, n[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t =
        t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = n),
      n
        ? r
          ? (n.u = r.u)
          : ((n.u = be), e.addEventListener(t, i ? Ae : he, i))
        : e.removeEventListener(t, i ? Ae : he, i);
  else {
    if (o == "http://www.w3.org/2000/svg")
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    )
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Ne(e) {
  return function (t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = be++;
      else if (t.t < n.u) return;
      return n(h.event ? h.event(t) : t);
    }
  };
}
function Ce(e, t, n, r, o, i, l, s, c, a) {
  var f,
    u,
    p,
    d,
    A,
    w,
    b,
    y,
    m,
    I,
    S,
    E,
    k,
    F,
    D,
    Q,
    M = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && ((c = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])),
    (f = h.__b) && f(t);
  e: if (typeof M == "function")
    try {
      if (
        ((y = t.props),
        (m = "prototype" in M && M.prototype.render),
        (I = (f = M.contextType) && r[f.__c]),
        (S = f ? (I ? I.props.value : f.__) : r),
        n.__c
          ? (b = (u = t.__c = n.__c).__ = u.__E)
          : (m
              ? (t.__c = u = new M(y, S))
              : ((t.__c = u = new N(y, S)),
                (u.constructor = M),
                (u.render = Ut)),
            I && I.sub(u),
            (u.props = y),
            u.state || (u.state = {}),
            (u.context = S),
            (u.__n = r),
            (p = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        m && u.__s == null && (u.__s = u.state),
        m &&
          M.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = R({}, u.__s)),
          R(u.__s, M.getDerivedStateFromProps(y, u.__s))),
        (d = u.props),
        (A = u.state),
        (u.__v = t),
        p)
      )
        m &&
          M.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          m && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (
          (m &&
            M.getDerivedStateFromProps == null &&
            y !== d &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(y, S),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(y, u.__s, S) === !1) ||
              t.__v === n.__v))
        ) {
          for (
            t.__v !== n.__v && ((u.props = y), (u.state = u.__s), (u.__d = !1)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.some(function (Y) {
                Y && (Y.__ = t);
              }),
              E = 0;
            E < u._sb.length;
            E++
          )
            u.__h.push(u._sb[E]);
          (u._sb = []), u.__h.length && l.push(u);
          break e;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, S),
          m &&
            u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(d, A, w);
            });
      }
      if (
        ((u.context = S),
        (u.props = y),
        (u.__P = e),
        (u.__e = !1),
        (k = h.__r),
        (F = 0),
        m)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            k && k(t),
            f = u.render(u.props, u.state, u.context),
            D = 0;
          D < u._sb.length;
          D++
        )
          u.__h.push(u._sb[D]);
        u._sb = [];
      } else
        do
          (u.__d = !1),
            k && k(t),
            (f = u.render(u.props, u.state, u.context)),
            (u.state = u.__s);
        while (u.__d && ++F < 25);
      (u.state = u.__s),
        u.getChildContext != null && (r = R(R({}, r), u.getChildContext())),
        m &&
          !p &&
          u.getSnapshotBeforeUpdate != null &&
          (w = u.getSnapshotBeforeUpdate(d, A)),
        lt(
          e,
          le(
            (Q =
              f != null && f.type === L && f.key == null ? f.props.children : f)
          )
            ? Q
            : [Q],
          t,
          n,
          r,
          o,
          i,
          l,
          s,
          c,
          a
        ),
        (u.base = t.__e),
        (t.__u &= -161),
        u.__h.length && l.push(u),
        b && (u.__E = u.__ = null);
    } catch (Y) {
      if (((t.__v = null), c || i != null)) {
        for (t.__u |= c ? 160 : 128; s && s.nodeType === 8 && s.nextSibling; )
          s = s.nextSibling;
        (i[i.indexOf(s)] = null), (t.__e = s);
      } else (t.__e = n.__e), (t.__k = n.__k);
      h.__e(Y, t, n);
    }
  else
    i == null && t.__v === n.__v
      ? ((t.__k = n.__k), (t.__e = n.__e))
      : (t.__e = Rt(n.__e, t, n, r, o, i, l, c, a));
  (f = h.diffed) && f(t);
}
function at(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) we(n[r], n[++r], n[++r]);
  h.__c && h.__c(t, e),
    e.some(function (o) {
      try {
        (e = o.__h),
          (o.__h = []),
          e.some(function (i) {
            i.call(o);
          });
      } catch (i) {
        h.__e(i, o.__v);
      }
    });
}
function Rt(e, t, n, r, o, i, l, s, c) {
  var a,
    f,
    u,
    p,
    d,
    A,
    w,
    b = n.props,
    y = t.props,
    m = t.type;
  if (
    (m === "svg"
      ? (o = "http://www.w3.org/2000/svg")
      : m === "math"
      ? (o = "http://www.w3.org/1998/Math/MathML")
      : o || (o = "http://www.w3.org/1999/xhtml"),
    i != null)
  ) {
    for (a = 0; a < i.length; a++)
      if (
        (d = i[a]) &&
        "setAttribute" in d == !!m &&
        (m ? d.localName === m : d.nodeType === 3)
      ) {
        (e = d), (i[a] = null);
        break;
      }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(y);
    (e = document.createElementNS(o, m, y.is && y)),
      s && (h.__m && h.__m(t, i), (s = !1)),
      (i = null);
  }
  if (m === null) b === y || (s && e.data === y) || (e.data = y);
  else {
    if (((i = i && $.call(e.childNodes)), (b = n.props || Z), !s && i != null))
      for (b = {}, a = 0; a < e.attributes.length; a++)
        b[(d = e.attributes[a]).name] = d.value;
    for (a in b)
      if (((d = b[a]), a != "children")) {
        if (a == "dangerouslySetInnerHTML") u = d;
        else if (!(a in y)) {
          if (
            (a == "value" && "defaultValue" in y) ||
            (a == "checked" && "defaultChecked" in y)
          )
            continue;
          re(e, a, null, d, o);
        }
      }
    for (a in y)
      (d = y[a]),
        a == "children"
          ? (p = d)
          : a == "dangerouslySetInnerHTML"
          ? (f = d)
          : a == "value"
          ? (A = d)
          : a == "checked"
          ? (w = d)
          : (s && typeof d != "function") || b[a] === d || re(e, a, d, b[a], o);
    if (f)
      s ||
        (u && (f.__html === u.__html || f.__html === e.innerHTML)) ||
        (e.innerHTML = f.__html),
        (t.__k = []);
    else if (
      (u && (e.innerHTML = ""),
      lt(
        e,
        le(p) ? p : [p],
        t,
        n,
        r,
        m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        i,
        l,
        i ? i[0] : n.__k && q(n, 0),
        s,
        c
      ),
      i != null)
    )
      for (a = i.length; a--; ) it(i[a]);
    s ||
      ((a = "value"),
      m === "progress" && A == null
        ? e.removeAttribute("value")
        : A !== void 0 &&
          (A !== e[a] ||
            (m === "progress" && !A) ||
            (m === "option" && A !== b[a])) &&
          re(e, a, A, b[a], o),
      (a = "checked"),
      w !== void 0 && w !== e[a] && re(e, a, w, b[a], o));
  }
  return e;
}
function we(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), (r && t == null) || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    h.__e(o, n);
  }
}
function ct(e, t, n) {
  var r, o;
  if (
    (h.unmount && h.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || we(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        h.__e(i, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k))
    for (o = 0; o < r.length; o++)
      r[o] && ct(r[o], t, n || typeof e.type != "function");
  n || it(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
}
function Ut(e, t, n) {
  return this.constructor(e, n);
}
function W(e, t, n) {
  var r, o, i, l;
  h.__ && h.__(e, t),
    (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
    (i = []),
    (l = []),
    Ce(
      t,
      (e = ((!r && n) || t).__k = T(L, null, [e])),
      o || Z,
      Z,
      t.namespaceURI,
      !r && n ? [n] : o ? null : t.firstChild ? $.call(t.childNodes) : null,
      i,
      !r && n ? n : o ? o.__e : t.firstChild,
      r,
      l
    ),
    at(i, e, l);
}
function dt(e, t) {
  W(e, t, dt);
}
function Tt(e, t, n) {
  var r,
    o,
    i,
    l,
    s = R({}, e.props);
  for (i in (e.type && e.type.defaultProps && (l = e.type.defaultProps), t))
    i == "key"
      ? (r = t[i])
      : i == "ref"
      ? (o = t[i])
      : (s[i] = t[i] === void 0 && l !== void 0 ? l[i] : t[i]);
  return (
    arguments.length > 2 &&
      (s.children = arguments.length > 3 ? $.call(arguments, 2) : n),
    z(e.type, s, r || e.key, o || e.ref, null)
  );
}
function Ft(e, t) {
  var n = {
    __c: (t = "__cC" + rt++),
    __: e,
    Consumer: function (r, o) {
      return r.children(o);
    },
    Provider: function (r) {
      var o, i;
      return (
        this.getChildContext ||
          ((o = new Set()),
          ((i = {})[t] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.componentWillUnmount = function () {
            o = null;
          }),
          (this.shouldComponentUpdate = function (l) {
            this.props.value !== l.value &&
              o.forEach(function (s) {
                (s.__e = !0), ye(s);
              });
          }),
          (this.sub = function (l) {
            o.add(l);
            var s = l.componentWillUnmount;
            l.componentWillUnmount = function () {
              o && o.delete(l), s && s.call(l);
            };
          })),
        r.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
($ = ot.slice),
  (h = {
    __e: function (e, t, n, r) {
      for (var o, i, l; (t = t.__); )
        if ((o = t.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                i.getDerivedStateFromError != null &&
                (o.setState(i.getDerivedStateFromError(e)), (l = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(e, r || {}), (l = o.__d)),
              l)
            )
              return (o.__E = o);
          } catch (s) {
            e = s;
          }
      throw e;
    },
  }),
  (tt = 0),
  (N.prototype.setState = function (e, t) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = R({}, this.state))),
      typeof e == "function" && (e = e(R({}, n), this.props)),
      e && R(n, e),
      e != null && this.__v && (t && this._sb.push(t), ye(this));
  }),
  (N.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), ye(this));
  }),
  (N.prototype.render = L),
  (V = []),
  (nt =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (pe = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (ue.__r = 0),
  (be = 0),
  (he = Ne(!1)),
  (Ae = Ne(!0)),
  (rt = 0);
var Qt = 0;
function _(e, t, n, r, o, i) {
  t || (t = {});
  var l,
    s,
    c = t;
  "ref" in t && ((l = t.ref), delete t.ref);
  var a = {
    type: e,
    props: c,
    key: n,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --Qt,
    __i: -1,
    __u: 0,
    __source: o,
    __self: i,
  };
  if (typeof e == "function" && (l = e.defaultProps))
    for (s in l) c[s] === void 0 && (c[s] = l[s]);
  return h.vnode && h.vnode(a), a;
}
var G,
  v,
  de,
  De,
  X = 0,
  ft = [],
  C = h,
  Pe = C.__b,
  Re = C.__r,
  Ue = C.diffed,
  Te = C.__c,
  Fe = C.unmount,
  Qe = C.__;
function j(e, t) {
  C.__h && C.__h(v, e, X || t), (X = 0);
  var n = v.__H || (v.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function x(e) {
  return (X = 1), ke(At, e);
}
function ke(e, t, n) {
  var r = j(G++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : At(void 0, t),
        function (s) {
          var c = r.__N ? r.__N[0] : r.__[0],
            a = r.t(c, s);
          c !== a && ((r.__N = [a, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = v),
      !v.u))
  ) {
    var o = function (s, c, a) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function (p) {
        return !!p.__c;
      });
      if (
        f.every(function (p) {
          return !p.__N;
        })
      )
        return !i || i.call(this, s, c, a);
      var u = !1;
      return (
        f.forEach(function (p) {
          if (p.__N) {
            var d = p.__[0];
            (p.__ = p.__N), (p.__N = void 0), d !== p.__[0] && (u = !0);
          }
        }),
        !(!u && r.__c.props === s) && (!i || i.call(this, s, c, a))
      );
    };
    v.u = !0;
    var i = v.shouldComponentUpdate,
      l = v.componentWillUpdate;
    (v.componentWillUpdate = function (s, c, a) {
      if (this.__e) {
        var f = i;
        (i = void 0), o(s, c, a), (i = f);
      }
      l && l.call(this, s, c, a);
    }),
      (v.shouldComponentUpdate = o);
  }
  return r.__N || r.__;
}
function B(e, t) {
  var n = j(G++, 3);
  !C.__s && xe(n.__H, t) && ((n.__ = e), (n.i = t), v.__H.__h.push(n));
}
function ee(e, t) {
  var n = j(G++, 4);
  !C.__s && xe(n.__H, t) && ((n.__ = e), (n.i = t), v.__h.push(n));
}
function O(e) {
  return (
    (X = 5),
    se(function () {
      return { current: e };
    }, [])
  );
}
function _t(e, t, n) {
  (X = 6),
    ee(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null);
            })
          : void 0;
      },
      n == null ? n : n.concat(e)
    );
}
function se(e, t) {
  var n = j(G++, 7);
  return xe(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function Se(e, t) {
  return (
    (X = 8),
    se(function () {
      return e;
    }, t)
  );
}
function H(e) {
  var t = v.context[e.__c],
    n = j(G++, 9);
  return (
    (n.c = e),
    t ? (n.__ == null && ((n.__ = !0), t.sub(v)), t.props.value) : e.__
  );
}
function pt(e, t) {
  C.useDebugValue && C.useDebugValue(t ? t(e) : e);
}
function ht() {
  var e = j(G++, 11);
  if (!e.__) {
    for (var t = v.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Yt() {
  for (var e; (e = ft.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(oe), e.__H.__h.forEach(me), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), C.__e(t, e.__v);
      }
}
(C.__b = function (e) {
  (v = null), Pe && Pe(e);
}),
  (C.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Qe && Qe(e, t);
  }),
  (C.__r = function (e) {
    Re && Re(e), (G = 0);
    var t = (v = e.__c).__H;
    t &&
      (de === v
        ? ((t.__h = []),
          (v.__h = []),
          t.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.i = n.__N = void 0);
          }))
        : (t.__h.forEach(oe), t.__h.forEach(me), (t.__h = []), (G = 0))),
      (de = v);
  }),
  (C.diffed = function (e) {
    Ue && Ue(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((ft.push(t) !== 1 && De === C.requestAnimationFrame) ||
          ((De = C.requestAnimationFrame) || Gt)(Yt)),
      t.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i), (n.i = void 0);
      })),
      (de = v = null);
  }),
  (C.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(oe),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || me(r);
          }));
      } catch (r) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          C.__e(r, n.__v);
      }
    }),
      Te && Te(e, t);
  }),
  (C.unmount = function (e) {
    Fe && Fe(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          oe(r);
        } catch (o) {
          t = o;
        }
      }),
      (n.__H = void 0),
      t && C.__e(t, n.__v));
  });
var Ye = typeof requestAnimationFrame == "function";
function Gt(e) {
  var t,
    n = function () {
      clearTimeout(r), Ye && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 100);
  Ye && (t = requestAnimationFrame(n));
}
function oe(e) {
  var t = v,
    n = e.__c;
  typeof n == "function" && ((e.__c = void 0), n()), (v = t);
}
function me(e) {
  var t = v;
  (e.__c = e.__()), (v = t);
}
function xe(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function At(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Vt = "/stage-assignment/assets/Instagram-CQocc-CQ.png";
function Ot({ url: e }) {
  return _("div", {
    style: {
      borderRadius: "50%",
      background:
        "linear-gradient(115deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215))",
      width: "60px",
      height: "60px",
    },
    children: _("div", {
      style: {
        borderRadius: "50%",
        background: `url(${e})`,
        backgroundSize: "cover",
        width: "50px",
        height: "50px",
        position: "relative",
        top: "6%",
        left: "6%",
        border: "1px solid transparent",
      },
    }),
  });
}
function ge(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function ve(e, t) {
  (this.props = e), (this.context = t);
}
function qt(e, t) {
  function n(o) {
    var i = this.props.ref,
      l = i == o.ref;
    return (
      !l && i && (i.call ? i(null) : (i.current = null)),
      t ? !t(this.props, o) || !l : ge(this.props, o)
    );
  }
  function r(o) {
    return (this.shouldComponentUpdate = n), T(e, o);
  }
  return (
    (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
    (r.prototype.isReactComponent = !0),
    (r.__f = !0),
    r
  );
}
((ve.prototype = new N()).isPureReactComponent = !0),
  (ve.prototype.shouldComponentUpdate = function (e, t) {
    return ge(this.props, e) || ge(this.state, t);
  });
var Ge = h.__b;
h.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Ge && Ge(e);
};
var Wt =
  (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Xt(e) {
  function t(n) {
    if (!("ref" in n)) return e(n, null);
    var r = n.ref;
    delete n.ref;
    var o = e(n, r);
    return (n.ref = r), o;
  }
  return (
    (t.$$typeof = Wt),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var Ve = function (e, t) {
    return e == null ? null : U(U(e).map(t));
  },
  jt = {
    map: Ve,
    forEach: Ve,
    count: function (e) {
      return e ? U(e).length : 0;
    },
    only: function (e) {
      var t = U(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: U,
  },
  Jt = h.__e;
h.__e = function (e, t, n, r) {
  if (e.then) {
    for (var o, i = t; (i = i.__); )
      if ((o = i.__c) && o.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t);
  }
  Jt(e, t, n, r);
};
var Oe = h.unmount;
function yt(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (e.__c.__H = null)),
      (e = (function (r, o) {
        for (var i in o) r[i] = o[i];
        return r;
      })({}, e)).__c != null &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return yt(r, t, n);
        }))),
    e
  );
}
function mt(e, t, n) {
  return (
    e &&
      n &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return mt(r, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
    e
  );
}
function ie() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function gt(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Kt(e) {
  var t, n, r;
  function o(i) {
    if (
      (t ||
        (t = e()).then(
          function (l) {
            n = l.default || l;
          },
          function (l) {
            r = l;
          }
        ),
      r)
    )
      throw r;
    if (!n) throw t;
    return T(n, i);
  }
  return (o.displayName = "Lazy"), (o.__f = !0), o;
}
function K() {
  (this.u = null), (this.o = null);
}
(h.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Oe && Oe(e);
}),
  ((ie.prototype = new N()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = gt(r.__v),
      i = !1,
      l = function () {
        i || ((i = !0), (n.__R = null), o ? o(s) : s());
      };
    n.__R = l;
    var s = function () {
      if (!--r.__u) {
        if (r.state.__a) {
          var c = r.state.__a;
          r.__v.__k[0] = mt(c, c.__c.__P, c.__c.__O);
        }
        var a;
        for (r.setState({ __a: (r.__b = null) }); (a = r.t.pop()); )
          a.forceUpdate();
      }
    };
    r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
      e.then(l, l);
  }),
  (ie.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (ie.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = yt(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = t.__a && T(L, null, e.fallback);
    return o && (o.__u &= -33), [T(L, null, t.__a ? null : e.children), o];
  });
var qe = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function zt(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Zt(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    W(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    t.l ||
      ((t.i = n),
      (t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        contains: function () {
          return !0;
        },
        appendChild: function (r) {
          this.childNodes.push(r), t.i.appendChild(r);
        },
        insertBefore: function (r, o) {
          this.childNodes.push(r), t.i.appendChild(r);
        },
        removeChild: function (r) {
          this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
            t.i.removeChild(r);
        },
      })),
    W(T(zt, { context: t.context }, e.__v), t.l);
}
function $t(e, t) {
  var n = T(Zt, { __v: e, i: t });
  return (n.containerInfo = t), n;
}
((K.prototype = new N()).__a = function (e) {
  var t = this,
    n = gt(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (o) {
      var i = function () {
        t.props.revealOrder ? (r.push(o), qe(t, e, r)) : o();
      };
      n ? n(i) : i();
    }
  );
}),
  (K.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = U(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (K.prototype.componentDidUpdate = K.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        qe(e, n, t);
      });
    });
var vt =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  en =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  tn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  nn = /[A-Z0-9]/g,
  rn = typeof document < "u",
  on = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function un(e, t, n) {
  return (
    t.__k == null && (t.textContent = ""),
    W(e, t),
    typeof n == "function" && n(),
    e ? e.__c : null
  );
}
function ln(e, t, n) {
  return dt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
(N.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(N.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var We = h.event;
function sn() {}
function an() {
  return this.cancelBubble;
}
function cn() {
  return this.defaultPrevented;
}
h.event = function (e) {
  return (
    We && (e = We(e)),
    (e.persist = sn),
    (e.isPropagationStopped = an),
    (e.isDefaultPrevented = cn),
    (e.nativeEvent = e)
  );
};
var Be,
  dn = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Xe = h.vnode;
h.vnode = function (e) {
  typeof e.type == "string" &&
    (function (t) {
      var n = t.props,
        r = t.type,
        o = {},
        i = r.indexOf("-") === -1;
      for (var l in n) {
        var s = n[l];
        if (
          !(
            (l === "value" && "defaultValue" in n && s == null) ||
            (rn && l === "children" && r === "noscript") ||
            l === "class" ||
            l === "className"
          )
        ) {
          var c = l.toLowerCase();
          l === "defaultValue" && "value" in n && n.value == null
            ? (l = "value")
            : l === "download" && s === !0
            ? (s = "")
            : c === "translate" && s === "no"
            ? (s = !1)
            : c[0] === "o" && c[1] === "n"
            ? c === "ondoubleclick"
              ? (l = "ondblclick")
              : c !== "onchange" ||
                (r !== "input" && r !== "textarea") ||
                on(n.type)
              ? c === "onfocus"
                ? (l = "onfocusin")
                : c === "onblur"
                ? (l = "onfocusout")
                : tn.test(l) && (l = c)
              : (c = l = "oninput")
            : i && en.test(l)
            ? (l = l.replace(nn, "-$&").toLowerCase())
            : s === null && (s = void 0),
            c === "oninput" && o[(l = c)] && (l = "oninputCapture"),
            (o[l] = s);
        }
      }
      r == "select" &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = U(n.children).forEach(function (a) {
          a.props.selected = o.value.indexOf(a.props.value) != -1;
        })),
        r == "select" &&
          o.defaultValue != null &&
          (o.value = U(n.children).forEach(function (a) {
            a.props.selected = o.multiple
              ? o.defaultValue.indexOf(a.props.value) != -1
              : o.defaultValue == a.props.value;
          })),
        n.class && !n.className
          ? ((o.class = n.class), Object.defineProperty(o, "className", dn))
          : ((n.className && !n.class) || (n.class && n.className)) &&
            (o.class = o.className = n.className),
        (t.props = o);
    })(e),
    (e.$$typeof = vt),
    Xe && Xe(e);
};
var je = h.__r;
h.__r = function (e) {
  je && je(e), (Be = e.__c);
};
var Je = h.diffed;
h.diffed = function (e) {
  Je && Je(e);
  var t = e.props,
    n = e.__e;
  n != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== n.value &&
    (n.value = t.value == null ? "" : t.value),
    (Be = null);
};
var fn = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return Be.__n[e.__c].props.value;
      },
      useCallback: Se,
      useContext: H,
      useDebugValue: pt,
      useDeferredValue: Ct,
      useEffect: B,
      useId: ht,
      useImperativeHandle: _t,
      useInsertionEffect: kt,
      useLayoutEffect: ee,
      useMemo: se,
      useReducer: ke,
      useRef: O,
      useState: x,
      useSyncExternalStore: St,
      useTransition: wt,
    },
  },
};
function _n(e) {
  return T.bind(null, e);
}
function ae(e) {
  return !!e && e.$$typeof === vt;
}
function pn(e) {
  return ae(e) && e.type === L;
}
function hn(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function An(e) {
  return ae(e) ? Tt.apply(null, arguments) : e;
}
function yn(e) {
  return !!e.__k && (W(null, e), !0);
}
function mn(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var gn = function (e, t) {
    return e(t);
  },
  vn = function (e, t) {
    return e(t);
  },
  bn = L;
function bt(e) {
  e();
}
function Ct(e) {
  return e;
}
function wt() {
  return [!1, bt];
}
var kt = ee,
  Cn = ae;
function St(e, t) {
  var n = t(),
    r = x({ h: { __: n, v: t } }),
    o = r[0].h,
    i = r[1];
  return (
    ee(
      function () {
        (o.__ = n), (o.v = t), fe(o) && i({ h: o });
      },
      [e, n, t]
    ),
    B(
      function () {
        return (
          fe(o) && i({ h: o }),
          e(function () {
            fe(o) && i({ h: o });
          })
        );
      },
      [e]
    ),
    n
  );
}
function fe(e) {
  var t,
    n,
    r = e.v,
    o = e.__;
  try {
    var i = r();
    return !(
      ((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return !0;
  }
}
var Ee = {
  useState: x,
  useId: ht,
  useReducer: ke,
  useEffect: B,
  useLayoutEffect: ee,
  useInsertionEffect: kt,
  useTransition: wt,
  useDeferredValue: Ct,
  useSyncExternalStore: St,
  startTransition: bt,
  useRef: O,
  useImperativeHandle: _t,
  useMemo: se,
  useCallback: Se,
  useContext: H,
  useDebugValue: pt,
  version: "18.3.1",
  Children: jt,
  render: un,
  hydrate: ln,
  unmountComponentAtNode: yn,
  createPortal: $t,
  createElement: T,
  createContext: Ft,
  createFactory: _n,
  cloneElement: An,
  createRef: Nt,
  Fragment: L,
  isValidElement: ae,
  isElement: Cn,
  isFragment: pn,
  isMemo: hn,
  findDOMNode: mn,
  Component: N,
  PureComponent: ve,
  memo: qt,
  forwardRef: Xt,
  flushSync: vn,
  unstable_batchedUpdates: gn,
  StrictMode: bn,
  Suspense: ie,
  SuspenseList: K,
  lazy: Kt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fn,
};
const wn = { defaultInterval: 4e3, width: 360, height: 640 },
  J = Ee.createContext(wn),
  kn = { stories: [] },
  Me = Ee.createContext(kn),
  He = Ee.createContext({
    currentId: 0,
    videoDuration: 0,
    bufferAction: !1,
    pause: !1,
    next: () => {},
  }),
  Sn = (e) => {
    const t = H(J),
      {
        width: n,
        height: r,
        loader: o,
        header: i,
        storyStyles: l,
        storyInnerContainerStyles: s = {},
      } = t,
      c = (f, u) => {
        switch (f) {
          case "UPDATE_VIDEO_DURATION":
            return e.getVideoDuration(u.duration), { ack: "OK" };
        }
      },
      a = () => {
        let f = e.story.content,
          u = { width: n, height: r, loader: o, header: i, storyStyles: l };
        return (
          f &&
          _(f, {
            action: e.action,
            isPaused: e.playState,
            story: e.story,
            config: u,
            messageHandler: (p, d) => c(p, d) || { ack: "ERROR" },
          })
        );
      };
    return _("div", {
      style: { ...xn.story, ...s, width: n, height: r },
      children: a(),
    });
  },
  xn = {
    story: {
      display: "flex",
      position: "relative",
      overflow: "hidden",
      alignItems: "center",
    },
    storyContent: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "auto",
    },
  },
  Bn = (e) => {
    const { progressWrapperStyles: t } = H(J),
      n = { ...Mn.progress, ...t, ...En(e) };
    return _("div", { style: n, children: e.children });
  },
  En = ({ width: e }) => ({ width: `${e * 100}%` }),
  Mn = {
    progress: {
      height: 2,
      maxWidth: "100%",
      background: "#555",
      margin: 2,
      borderRadius: 2,
      WebkitBackfaceVisibility: "hidden",
      MozBackfaceVisibility: "hidden",
      msBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    },
  },
  Hn = (e) => {
    const { progressStyles: t } = H(J),
      { bufferAction: n, pause: r } = H(He),
      o = ({ active: s }) => {
        switch (s) {
          case 2:
            return { width: "100%" };
          case 1:
            return { transform: `scaleX(${e.count / 100})` };
          case 0:
            return { width: 0 };
          default:
            return { width: 0 };
        }
      },
      { width: i, active: l } = e;
    return _(Bn, {
      width: i,
      pause: r,
      bufferAction: n,
      children: _("div", { style: { ...Ln.inner, ...t, ...o({ active: l }) } }),
    });
  },
  Ln = {
    inner: {
      background: "#fff",
      height: "100%",
      maxWidth: "100%",
      borderRadius: 2,
      transformOrigin: "center left",
      WebkitBackfaceVisibility: "hidden",
      MozBackfaceVisibility: "hidden",
      msBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      WebkitPerspective: 1e3,
      MozPerspective: 1e3,
      msPerspective: 1e3,
      perspective: 1e3,
    },
  };
function _e() {
  return window.performance && window.performance.now
    ? window.performance.now()
    : new Date().getTime();
}
const In = () => {
    const [e, t] = x(0),
      n = O(),
      {
        currentId: r,
        next: o,
        videoDuration: i,
        pause: l,
        bufferAction: s,
      } = H(He),
      {
        defaultInterval: c,
        onStoryEnd: a,
        onStoryStart: f,
        progressContainerStyles: u,
      } = H(J),
      { stories: p } = H(Me);
    B(() => {
      t(0);
    }, [r, p]),
      B(
        () => (
          l || ((d.current = requestAnimationFrame(w)), (n.current = _e())),
          () => {
            d.current && cancelAnimationFrame(d.current);
          }
        ),
        [r, l]
      );
    let d = O(),
      A = e;
    const w = () => {
        A === 0 && b(), n.current == null && (n.current = _e());
        const S = _e(),
          E = S - n.current;
        (n.current = S),
          t((k) => {
            const F = m();
            return F && (A = k + (E * 100) / F), A;
          }),
          A < 100
            ? (d.current = requestAnimationFrame(w))
            : (y(), d.current && cancelAnimationFrame(d.current), o());
      },
      b = () => {
        f && f(r, p[r]);
      },
      y = () => {
        a && a(r, p[r]);
      },
      m = () =>
        p[r].type === "video"
          ? i
          : typeof p[r].duration == "number"
          ? p[r].duration
          : c,
      I = { opacity: l && !s ? 0 : 1 };
    return _("div", {
      style: { ...Nn.progressArr, ...u, ...I },
      children: p.map((S, E) =>
        _(
          Hn,
          {
            count: e,
            width: 1 / p.length,
            active: E === r ? 1 : E < r ? 2 : 0,
          },
          E
        )
      ),
    });
  },
  Nn = {
    progressArr: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
      flexWrap: "nowrap",
      position: "absolute",
      width: "98%",
      padding: 5,
      paddingTop: 7,
      alignSelf: "center",
      zIndex: 1001,
      filter: "drop-shadow(0 1px 8px #222)",
      transition: "opacity 400ms ease-in-out",
    },
  };
function Dn() {
  const e = O(!1);
  return (
    B(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    Se(() => e.current, [])
  );
}
const Pn = async (e) => {
    const t = e.map(
      (n) =>
        new Promise(function (r, o) {
          if (!n.url) return;
          if (n.type === "video") {
            const l = document.createElement("video");
            (l.src = n.url), (l.onloadeddata = r), (l.onerror = o);
            return;
          }
          const i = new Image();
          (i.src = n.url), (i.onload = r), (i.onerror = o);
        })
    );
    await Promise.all(t);
  },
  xt = new Set(),
  Rn = (e) => {
    e.forEach((t) => {
      t.url && xt.add(t.url);
    });
  },
  Un = (e) =>
    !e.url || xt.has(e.url)
      ? !1
      : e.preloadResource !== void 0
      ? e.preloadResource
      : e.type !== "video",
  Tn = (e, t, n) => {
    B(() => {
      const r = t + 1,
        o = t + n + 1,
        i = e.slice(r, o).filter(Un);
      Rn(i), Pn(i);
    }, [t, n, e]);
  };
function Fn() {
  const [e, t] = x(0),
    [n, r] = x(!0),
    [o, i] = x(!0),
    [l, s] = x(0),
    c = Dn();
  let a = O();
  const {
      width: f,
      height: u,
      loop: p,
      currentIndex: d,
      isPaused: A,
      keyboardNavigation: w,
      preventDefault: b,
      storyContainerStyles: y = {},
      onAllStoriesEnd: m,
      onPrevious: I,
      onNext: S,
      preloadCount: E,
    } = H(J),
    { stories: k } = H(Me);
  Tn(k, e, E || 0),
    B(() => {
      typeof d == "number" &&
        (d >= 0 && d < k.length
          ? Q(() => d)
          : console.error(
              "Index out of bounds. Current index was set to value more than the length of stories array.",
              d
            ));
    }, [d]),
    B(() => {
      typeof A == "boolean" && r(A);
    }, [A]),
    B(() => {
      if (typeof window < "u" && window.document && typeof w == "boolean" && w)
        return (
          document.addEventListener("keydown", F),
          () => {
            document.removeEventListener("keydown", F);
          }
        );
    }, [w]);
  const F = (g) => {
      g.key === "ArrowLeft"
        ? M()
        : g.key === "ArrowRight" && Y({ isSkippedByUser: !0 });
    },
    D = (g, ce) => {
      r(g === "pause"), i(!!ce);
    },
    Q = (g) => {
      t(g), D("pause", !0);
    },
    M = () => {
      I != null && I(), Q((g) => (g > 0 ? g - 1 : g));
    },
    Y = (g) => {
      S != null && g != null && g.isSkippedByUser && S(),
        c() && (p ? Mt() : Ht());
    },
    Mt = () => {
      Q((g) => (g >= k.length - 1 && m && m(e, k), (g + 1) % k.length));
    },
    Ht = () => {
      Q((g) => (g < k.length - 1 ? g + 1 : (m && m(e, k), g)));
    },
    te = (g) => {
      g.preventDefault(),
        (a.current = setTimeout(() => {
          D("pause");
        }, 200));
    },
    ne = (g) => (ce) => {
      ce.preventDefault(),
        a.current && clearTimeout(a.current),
        n ? D("play") : g === "next" ? Y({ isSkippedByUser: !0 }) : M();
    },
    Lt = (g) => {
      s(g * 1e3);
    };
  return _("div", {
    style: { ...Ke.container, ...y, width: f, height: u },
    children: [
      _(He.Provider, {
        value: {
          bufferAction: o,
          videoDuration: l,
          currentId: e,
          pause: n,
          next: Y,
        },
        children: _(In, {}),
      }),
      _(Sn, {
        action: D,
        bufferAction: o,
        playState: n,
        story: k[e],
        getVideoDuration: Lt,
      }),
      !b &&
        _("div", {
          style: Ke.overlay,
          children: [
            _("div", {
              style: { width: "50%", zIndex: 999 },
              onTouchStart: te,
              onTouchEnd: ne("previous"),
              onMouseDown: te,
              onMouseUp: ne("previous"),
            }),
            _("div", {
              style: { width: "50%", zIndex: 999 },
              onTouchStart: te,
              onTouchEnd: ne("next"),
              onMouseDown: te,
              onMouseUp: ne("next"),
            }),
          ],
        }),
    ],
  });
}
const Ke = {
    container: {
      display: "flex",
      flexDirection: "column",
      background: "#111",
      position: "relative",
      WebkitUserSelect: "none",
    },
    overlay: {
      position: "absolute",
      height: "inherit",
      width: "inherit",
      display: "flex",
    },
  },
  Qn = (e, t) => {
    let n = t
      .map((r) => ({ ...r, testerResult: r.tester(e) }))
      .filter((r) => r.testerResult.condition);
    return (
      n.sort((r, o) => o.testerResult.priority - r.testerResult.priority),
      n[0].renderer
    );
  },
  Yn =
    "data:image/svg+xml,%3c!--%20By%20Sam%20Herbert%20(@sherb),%20for%20everyone.%20More%20@%20http://goo.gl/7AJzbL%20--%3e%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'%20/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'%20/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'%20/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'%20/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e",
  Bt = () => _("img", { src: Yn, alt: "Loading..." }),
  Gn = ({ story: e, action: t, config: n }) => {
    const [r, o] = x(!1),
      { width: i, height: l, loader: s, storyStyles: c } = n;
    let a = { ...Vn.storyContent, ...(c || {}) };
    const f = () => {
      o(!0), t("play");
    };
    return _("div", {
      children: [
        _("img", { style: a, src: e.url, onLoad: f }),
        !r &&
          _("div", {
            style: {
              width: i,
              height: l,
              position: "absolute",
              left: 0,
              top: 0,
              background: "rgba(0, 0, 0, 0.9)",
              zIndex: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ccc",
            },
            children: s || _(Bt, {}),
          }),
      ],
    });
  },
  Vn = {
    story: { display: "flex", position: "relative", overflow: "hidden" },
    storyContent: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "auto",
    },
  },
  On = (e) => ({
    condition: !e.content && (!e.type || e.type === "image"),
    priority: 2,
  }),
  qn = { renderer: Gn, tester: On },
  Wn = ({ story: e, action: t, isPaused: n, config: r, messageHandler: o }) => {
    const [i, l] = x(!1),
      [s, c] = x(e.muted || !1),
      { width: a, height: f, loader: u, storyStyles: p } = r;
    let d = { ...ze.storyContent, ...(p || {}) },
      A = O(null);
    B(() => {
      A.current && (n ? A.current.pause() : A.current.play().catch(() => {}));
    }, [n]);
    const w = () => {
        t("pause", !0);
      },
      b = () => {
        t("play", !0);
      },
      y = () => {
        o("UPDATE_VIDEO_DURATION", {
          duration: A.current && A.current.duration,
        }),
          l(!0),
          A.current &&
            A.current
              .play()
              .then(() => {
                t("play");
              })
              .catch(() => {
                c(!0),
                  A.current &&
                    A.current.play().finally(() => {
                      t("play");
                    });
              });
      };
    return _("div", {
      style: ze.videoContainer,
      children: [
        _("video", {
          ref: A,
          style: d,
          src: e.url,
          controls: !1,
          onLoadedData: y,
          playsInline: !0,
          onWaiting: w,
          onPlaying: b,
          muted: s,
          autoPlay: !0,
          "webkit-playsinline": "true",
        }),
        !i &&
          _("div", {
            style: {
              width: a,
              height: f,
              position: "absolute",
              left: 0,
              top: 0,
              background: "rgba(0, 0, 0, 0.9)",
              zIndex: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ccc",
            },
            children: u || _(Bt, {}),
          }),
      ],
    });
  },
  ze = {
    storyContent: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "auto",
    },
    videoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  Xn = (e) => ({ condition: e.type === "video", priority: 2 }),
  jn = { renderer: Wn, tester: Xn },
  Jn = ({ story: e, action: t }) => (
    B(() => {
      t("play");
    }, [e]),
    _("div", {
      style: Ze.storyContent,
      children: _("p", {
        style: Ze.text,
        children: "This story could not be loaded.",
      }),
    })
  ),
  Ze = {
    storyContent: { width: "100%", maxHeight: "100%", margin: "auto" },
    text: { textAlign: "center", color: "white", width: "90%", margin: "auto" },
  },
  Kn = () => ({ condition: !0, priority: 1 }),
  zn = { renderer: Jn, tester: Kn },
  Zn = (e) => {
    B(() => {
      e.action("play");
    }, [e.story]);
    const t = e.story.originalContent;
    return typeof t == "function" ? _(t, { ...e }) : null;
  },
  $n = (e) => ({ condition: !!e.content, priority: 2 }),
  er = { renderer: Zn, tester: $n },
  $e = [qn, jn, er, zn],
  Et = function (e) {
    let t = e.renderers ? e.renderers.concat($e) : $e,
      n = {
        width: e.width,
        height: e.height,
        loader: e.loader,
        header: e.header,
        storyContainerStyles: e.storyContainerStyles,
        storyInnerContainerStyles: e.storyInnerContainerStyles,
        storyStyles: e.storyStyles,
        progressContainerStyles: e.progressContainerStyles,
        progressWrapperStyles: e.progressWrapperStyles,
        progressStyles: e.progressStyles,
        loop: e.loop,
        defaultInterval: e.defaultInterval,
        isPaused: e.isPaused,
        currentIndex: e.currentIndex,
        onStoryStart: e.onStoryStart,
        onStoryEnd: e.onStoryEnd,
        onAllStoriesEnd: e.onAllStoriesEnd,
        onNext: e.onNext,
        onPrevious: e.onPrevious,
        keyboardNavigation: e.keyboardNavigation,
        preventDefault: e.preventDefault,
        preloadCount: e.preloadCount,
      };
    const [r, o] = x({ stories: et(e.stories, t) });
    return (
      B(() => {
        o({ stories: et(e.stories, t) });
      }, [e.stories, e.renderers]),
      _(J.Provider, {
        value: n,
        children: _(Me.Provider, { value: r, children: _(Fn, {}) }),
      })
    );
  },
  et = (e, t) =>
    e.map((n) => {
      let r = {};
      typeof n == "string"
        ? ((r.url = n), (r.type = "image"))
        : typeof n == "object" && (r = Object.assign(r, n));
      let o = Qn(r, t);
      return (r.originalContent = r.content), (r.content = o), r;
    });
Et.defaultProps = {
  width: 360,
  height: 640,
  defaultInterval: 4e3,
  preloadCount: 1,
};
const P = [
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      type: "video",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1676231417481-5eae894e7f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676359912443-1bf438548584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676316698468-a907099ad5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      preloadResource: !1,
    },
    {
      url: "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
      preloadResource: !1,
    },
    {
      url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      preloadResource: !1,
    },
    {
      url: "data:image/jpeg;base64,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",
    },
    {
      url: "data:image/jpeg;base64,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",
    },
  ],
  tr = [
    {
      name: "Ravinder",
      url: "/stage-assignment/Ravinder.jpg",
      stories: [P[0]],
    },
    { name: "Tara", url: "/stage-assignment/Tara.jpg", stories: [P[1], P[2]] },
    { name: "Ankit", url: "/stage-assignment/Ankit.jpg", stories: P },
    {
      name: "Deepak",
      url: "/stage-assignment/Deepak.jpg",
      stories: [P[3], P[5], P[4]],
    },
    {
      name: "Soumya",
      url: "/stage-assignment/Soumya.jpg",
      stories: [P[2], P[4]],
    },
  ];
function nr() {
  const [e, t] = x(!1),
    [n, r] = x([]),
    o = (i) => {
      r(i), t(!0);
    };
  return e
    ? _(L, {
        children: _(Et, {
          stories: n,
          onAllStoriesEnd: () => {
            t(!1);
          },
        }),
      })
    : _(L, {
        children: [
          _("header", {
            children: _("img", { height: 40, src: Vt, alt: "Instagram Logo" }),
          }),
          _("section", {
            style: { display: "flex", flexDirection: "row" },
            children: tr.map((i) =>
              _("div", {
                style: { margin: "1.5%", cursor: "pointer" },
                onClick: () => {
                  o(i.stories);
                },
                children: [
                  _(Ot, { url: i.url }),
                  _("p", {
                    style: {
                      color: "black",
                      fontSize: "x-small",
                      position: "relative",
                      bottom: "5px",
                    },
                    children: i.name,
                  }),
                ],
              })
            ),
          }),
        ],
      });
}
function rr() {
  return _(nr, {});
}
W(_(rr, {}), document.getElementById("app"));
