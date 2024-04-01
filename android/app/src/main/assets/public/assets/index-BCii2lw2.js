function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ios.transition-aMkx9CvE.js", "assets/animation-DcG0tnGo.js", "assets/md.transition-DicQ9s7y.js", "assets/Tab1Page-D_o8rlXg.js", "assets/ExploreContainer-Cwqmg9TT.js", "assets/ExploreContainer-DE0VS_Pk.css", "assets/Tab2Page-CiTjasHC.js", "assets/Tab3Page-BMJLiyR9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

function Zg() {
  import.meta.url, import("_").catch(() => 1), async function* () {
  }().next()
}

(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver(i => {
    for (const s of i) if (s.type === "childList") for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r)
  }).observe(document, { childList: !0, subtree: !0 });

  function n(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s)
  }
})();

/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function Li(t, e) {
  const n = new Set(t.split(","));
  return e ? o => n.has(o.toLowerCase()) : o => n.has(o)
}

const rt = {}, Ve = [], Vt = () => {
  }, oc = () => !1,
  po = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  Oi = t => t.startsWith("onUpdate:"), vt = Object.assign, Bi = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  }, ic = Object.prototype.hasOwnProperty, J = (t, e) => ic.call(t, e), X = Array.isArray,
  Ue = t => mo(t) === "[object Map]", Xr = t => mo(t) === "[object Set]", Y = t => typeof t == "function",
  ht = t => typeof t == "string", on = t => typeof t == "symbol", ut = t => t !== null && typeof t == "object",
  Yr = t => (ut(t) || Y(t)) && Y(t.then) && Y(t.catch), Zr = Object.prototype.toString, mo = t => Zr.call(t),
  sc = t => mo(t).slice(8, -1), Qr = t => mo(t) === "[object Object]",
  Mi = t => ht(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  fn = Li(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  go = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
  }, rc = /-(\w)/g, Ye = go(t => t.replace(rc, (e, n) => n ? n.toUpperCase() : "")), lc = /\B([A-Z])/g,
  sn = go(t => t.replace(lc, "-$1").toLowerCase()), Jr = go(t => t.charAt(0).toUpperCase() + t.slice(1)),
  Lo = go(t => t ? "on".concat(Jr(t)) : ""), we = (t, e) => !Object.is(t, e), Oo = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e)
  }, Qn = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n })
  }, ac = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  };
let gs;
const tl = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function zi(t) {
  if (X(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], i = ht(o) ? fc(o) : zi(o);
      if (i) for (const s in i) e[s] = i[s]
    }
    return e
  } else if (ht(t) || ut(t)) return t
}

const cc = /;(?![^(]*\))/g, dc = /:([^]+)/, uc = /\/\*[^]*?\*\//g;

function fc(t) {
  const e = {};
  return t.replace(uc, "").split(cc).forEach(n => {
    if (n) {
      const o = n.split(dc);
      o.length > 1 && (e[o[0].trim()] = o[1].trim())
    }
  }), e
}

function Hi(t) {
  let e = "";
  if (ht(t)) e = t; else if (X(t)) for (let n = 0; n < t.length; n++) {
    const o = Hi(t[n]);
    o && (e += o + " ")
  } else if (ut(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim()
}

const hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pc = Li(hc);

function el(t) {
  return !!t || t === ""
}

const Qg = t => ht(t) ? t : t == null ? "" : X(t) || ut(t) && (t.toString === Zr || !Y(t.toString)) ? JSON.stringify(t, nl, 2) : String(t),
  nl = (t, e) => e && e.__v_isRef ? nl(t, e.value) : Ue(e) ? { ["Map(".concat(e.size, ")")]: [...e.entries()].reduce((n, [o, i], s) => (n[Bo(o, s) + " =>"] = i, n), {}) } : Xr(e) ? { ["Set(".concat(e.size, ")")]: [...e.values()].map(n => Bo(n)) } : on(e) ? Bo(e) : ut(e) && !X(e) && !Qr(e) ? String(e) : e,
  Bo = (t, e = "") => {
    var n;
    return on(t) ? "Symbol(".concat((n = t.description) != null ? n : e, ")") : t
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let Wt;

class mc {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Wt, !e && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1)
  }

  get active() {
    return this._active
  }

  run(e) {
    if (this._active) {
      const n = Wt;
      try {
        return Wt = this, e()
      } finally {
        Wt = n
      }
    }
  }

  on() {
    Wt = this
  }

  off() {
    Wt = this.parent
  }

  stop(e) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function gc(t, e = Wt) {
  e && e.active && e.effects.push(t)
}

function bc() {
  return Wt
}

let Te;

class Di {
  constructor(e, n, o, i) {
    this.fn = e, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, gc(this, i)
  }

  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Pe();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (vc(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Le()
    }
    return this._dirtyLevel >= 4
  }

  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0
  }

  run() {
    if (this._dirtyLevel = 0, !this.active) return this.fn();
    let e = ve, n = Te;
    try {
      return ve = !0, Te = this, this._runnings++, bs(this), this.fn()
    } finally {
      vs(this), this._runnings--, Te = n, ve = e
    }
  }

  stop() {
    var e;
    this.active && (bs(this), vs(this), (e = this.onStop) == null || e.call(this), this.active = !1)
  }
}

function vc(t) {
  return t.value
}

function bs(t) {
  t._trackId++, t._depsLength = 0
}

function vs(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++) ol(t.deps[e], t);
    t.deps.length = t._depsLength
  }
}

function ol(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup())
}

let ve = !0, si = 0;
const il = [];

function Pe() {
  il.push(ve), ve = !1
}

function Le() {
  const t = il.pop();
  ve = t === void 0 ? !0 : t
}

function ji() {
  si++
}

function Fi() {
  for (si--; !si && ri.length;) ri.shift()()
}

function sl(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const o = t.deps[t._depsLength];
    o !== e ? (o && ol(o, t), t.deps[t._depsLength++] = e) : t._depsLength++
  }
}

const ri = [];

function rl(t, e, n) {
  ji();
  for (const o of t.keys()) {
    let i;
    o._dirtyLevel < e && (i != null ? i : i = t.get(o) === o._trackId) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = e), o._shouldSchedule && (i != null ? i : i = t.get(o) === o._trackId) && (o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && ri.push(o.scheduler)))
  }
  Fi()
}

const ll = (t, e) => {
  const n = new Map;
  return n.cleanup = t, n.computed = e, n
}, li = new WeakMap, Ie = Symbol(""), ai = Symbol("");

function Rt(t, e, n) {
  if (ve && Te) {
    let o = li.get(t);
    o || li.set(t, o = new Map);
    let i = o.get(n);
    i || o.set(n, i = ll(() => o.delete(n))), sl(Te, i)
  }
}

function ce(t, e, n, o, i, s) {
  const r = li.get(t);
  if (!r) return;
  let l = [];
  if (e === "clear") l = [...r.values()]; else if (n === "length" && X(t)) {
    const a = Number(o);
    r.forEach((c, d) => {
      (d === "length" || !on(d) && d >= a) && l.push(c)
    })
  } else switch (n !== void 0 && l.push(r.get(n)), e) {
    case"add":
      X(t) ? Mi(n) && l.push(r.get("length")) : (l.push(r.get(Ie)), Ue(t) && l.push(r.get(ai)));
      break;
    case"delete":
      X(t) || (l.push(r.get(Ie)), Ue(t) && l.push(r.get(ai)));
      break;
    case"set":
      Ue(t) && l.push(r.get(Ie));
      break
  }
  ji();
  for (const a of l) a && rl(a, 4);
  Fi()
}

const yc = Li("__proto__,__v_isRef,__isVue"),
  al = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(on)),
  ys = wc();

function wc() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
    t[e] = function (...n) {
      const o = tt(this);
      for (let s = 0, r = this.length; s < r; s++) Rt(o, "get", s + "");
      const i = o[e](...n);
      return i === -1 || i === !1 ? o[e](...n.map(tt)) : i
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
    t[e] = function (...n) {
      Pe(), ji();
      const o = tt(this)[e].apply(this, n);
      return Fi(), Le(), o
    }
  }), t
}

function xc(t) {
  const e = tt(this);
  return Rt(e, "has", t), e.hasOwnProperty(t)
}

class cl {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n
  }

  get(e, n, o) {
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return o === (i ? s ? Oc : hl : s ? fl : ul).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const r = X(e);
    if (!i) {
      if (r && J(ys, n)) return Reflect.get(ys, n, o);
      if (n === "hasOwnProperty") return xc
    }
    const l = Reflect.get(e, n, o);
    return (on(n) ? al.has(n) : yc(n)) || (i || Rt(e, "get", n), s) ? l : At(l) ? r && Mi(n) ? l : l.value : ut(l) ? i ? ml(l) : vo(l) : l
  }
}

class dl extends cl {
  constructor(e = !1) {
    super(!1, e)
  }

  set(e, n, o, i) {
    let s = e[n];
    if (!this._isShallow) {
      const a = Ze(s);
      if (!Jn(o) && !Ze(o) && (s = tt(s), o = tt(o)), !X(e) && At(s) && !At(o)) return a ? !1 : (s.value = o, !0)
    }
    const r = X(e) && Mi(n) ? Number(n) < e.length : J(e, n), l = Reflect.set(e, n, o, i);
    return e === tt(i) && (r ? we(o, s) && ce(e, "set", n, o) : ce(e, "add", n, o)), l
  }

  deleteProperty(e, n) {
    const o = J(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && o && ce(e, "delete", n, void 0), i
  }

  has(e, n) {
    const o = Reflect.has(e, n);
    return (!on(n) || !al.has(n)) && Rt(e, "has", n), o
  }

  ownKeys(e) {
    return Rt(e, "iterate", X(e) ? "length" : Ie), Reflect.ownKeys(e)
  }
}

class kc extends cl {
  constructor(e = !1) {
    super(!0, e)
  }

  set(e, n) {
    return !0
  }

  deleteProperty(e, n) {
    return !0
  }
}

const _c = new dl, Ec = new kc, $c = new dl(!0), Ni = t => t, bo = t => Reflect.getPrototypeOf(t);

function Bn(t, e, n = !1, o = !1) {
  t = t.__v_raw;
  const i = tt(t), s = tt(e);
  n || (we(e, s) && Rt(i, "get", e), Rt(i, "get", s));
  const { has: r } = bo(i), l = o ? Ni : n ? Wi : yn;
  if (r.call(i, e)) return l(t.get(e));
  if (r.call(i, s)) return l(t.get(s));
  t !== i && t.get(e)
}

function Mn(t, e = !1) {
  const n = this.__v_raw, o = tt(n), i = tt(t);
  return e || (we(t, i) && Rt(o, "has", t), Rt(o, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i)
}

function zn(t, e = !1) {
  return t = t.__v_raw, !e && Rt(tt(t), "iterate", Ie), Reflect.get(t, "size", t)
}

function ws(t) {
  t = tt(t);
  const e = tt(this);
  return bo(e).has.call(e, t) || (e.add(t), ce(e, "add", t, t)), this
}

function xs(t, e) {
  e = tt(e);
  const n = tt(this), { has: o, get: i } = bo(n);
  let s = o.call(n, t);
  s || (t = tt(t), s = o.call(n, t));
  const r = i.call(n, t);
  return n.set(t, e), s ? we(e, r) && ce(n, "set", t, e) : ce(n, "add", t, e), this
}

function ks(t) {
  const e = tt(this), { has: n, get: o } = bo(e);
  let i = n.call(e, t);
  i || (t = tt(t), i = n.call(e, t)), o && o.call(e, t);
  const s = e.delete(t);
  return i && ce(e, "delete", t, void 0), s
}

function _s() {
  const t = tt(this), e = t.size !== 0, n = t.clear();
  return e && ce(t, "clear", void 0, void 0), n
}

function Hn(t, e) {
  return function (o, i) {
    const s = this, r = s.__v_raw, l = tt(r), a = e ? Ni : t ? Wi : yn;
    return !t && Rt(l, "iterate", Ie), r.forEach((c, d) => o.call(i, a(c), a(d), s))
  }
}

function Dn(t, e, n) {
  return function (...o) {
    const i = this.__v_raw, s = tt(i), r = Ue(s), l = t === "entries" || t === Symbol.iterator && r,
      a = t === "keys" && r, c = i[t](...o), d = n ? Ni : e ? Wi : yn;
    return !e && Rt(s, "iterate", a ? ai : Ie), {
      next() {
        const { value: u, done: f } = c.next();
        return f ? { value: u, done: f } : { value: l ? [d(u[0]), d(u[1])] : d(u), done: f }
      }, [Symbol.iterator]() {
        return this
      }
    }
  }
}

function ue(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this
  }
}

function Cc() {
  const t = {
    get(s) {
      return Bn(this, s)
    }, get size() {
      return zn(this)
    }, has: Mn, add: ws, set: xs, delete: ks, clear: _s, forEach: Hn(!1, !1)
  }, e = {
    get(s) {
      return Bn(this, s, !1, !0)
    }, get size() {
      return zn(this)
    }, has: Mn, add: ws, set: xs, delete: ks, clear: _s, forEach: Hn(!1, !0)
  }, n = {
    get(s) {
      return Bn(this, s, !0)
    }, get size() {
      return zn(this, !0)
    }, has(s) {
      return Mn.call(this, s, !0)
    }, add: ue("add"), set: ue("set"), delete: ue("delete"), clear: ue("clear"), forEach: Hn(!0, !1)
  }, o = {
    get(s) {
      return Bn(this, s, !0, !0)
    }, get size() {
      return zn(this, !0)
    }, has(s) {
      return Mn.call(this, s, !0)
    }, add: ue("add"), set: ue("set"), delete: ue("delete"), clear: ue("clear"), forEach: Hn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    t[s] = Dn(s, !1, !1), n[s] = Dn(s, !0, !1), e[s] = Dn(s, !1, !0), o[s] = Dn(s, !0, !0)
  }), [t, n, e, o]
}

const [Sc, Tc, Ic, Rc] = Cc();

function Vi(t, e) {
  const n = e ? t ? Rc : Ic : t ? Tc : Sc;
  return (o, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? o : Reflect.get(J(n, i) && i in o ? n : o, i, s)
}

const Ac = { get: Vi(!1, !1) }, Pc = { get: Vi(!1, !0) }, Lc = { get: Vi(!0, !1) }, ul = new WeakMap, fl = new WeakMap,
  hl = new WeakMap, Oc = new WeakMap;

function Bc(t) {
  switch (t) {
    case"Object":
    case"Array":
      return 1;
    case"Map":
    case"Set":
    case"WeakMap":
    case"WeakSet":
      return 2;
    default:
      return 0
  }
}

function Mc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Bc(sc(t))
}

function vo(t) {
  return Ze(t) ? t : Ui(t, !1, _c, Ac, ul)
}

function pl(t) {
  return Ui(t, !1, $c, Pc, fl)
}

function ml(t) {
  return Ui(t, !0, Ec, Lc, hl)
}

function Ui(t, e, n, o, i) {
  if (!ut(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  const s = i.get(t);
  if (s) return s;
  const r = Mc(t);
  if (r === 0) return t;
  const l = new Proxy(t, r === 2 ? o : n);
  return i.set(t, l), l
}

function We(t) {
  return Ze(t) ? We(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Ze(t) {
  return !!(t && t.__v_isReadonly)
}

function Jn(t) {
  return !!(t && t.__v_isShallow)
}

function gl(t) {
  return We(t) || Ze(t)
}

function tt(t) {
  const e = t && t.__v_raw;
  return e ? tt(e) : t
}

function bl(t) {
  return Object.isExtensible(t) && Qn(t, "__v_skip", !0), t
}

const yn = t => ut(t) ? vo(t) : t, Wi = t => ut(t) ? ml(t) : t;

class vl {
  constructor(e, n, o, i) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Di(() => e(this._value), () => Gn(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = o
  }

  get value() {
    const e = tt(this);
    return (!e._cacheable || e.effect.dirty) && we(e._value, e._value = e.effect.run()) && Gn(e, 4), yl(e), e.effect._dirtyLevel >= 2 && Gn(e, 2), e._value
  }

  set value(e) {
    this._setter(e)
  }

  get _dirty() {
    return this.effect.dirty
  }

  set _dirty(e) {
    this.effect.dirty = e
  }
}

function zc(t, e, n = !1) {
  let o, i;
  const s = Y(t);
  return s ? (o = t, i = Vt) : (o = t.get, i = t.set), new vl(o, i, s || !i, n)
}

function yl(t) {
  var e;
  ve && Te && (t = tt(t), sl(Te, (e = t.dep) != null ? e : t.dep = ll(() => t.dep = void 0, t instanceof vl ? t : void 0)))
}

function Gn(t, e = 4, n) {
  t = tt(t);
  const o = t.dep;
  o && rl(o, e)
}

function At(t) {
  return !!(t && t.__v_isRef === !0)
}

function qi(t) {
  return wl(t, !1)
}

function In(t) {
  return wl(t, !0)
}

function wl(t, e) {
  return At(t) ? t : new Hc(t, e)
}

class Hc {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : tt(e), this._value = n ? e : yn(e)
  }

  get value() {
    return yl(this), this._value
  }

  set value(e) {
    const n = this.__v_isShallow || Jn(e) || Ze(e);
    e = n ? e : tt(e), we(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : yn(e), Gn(this, 4))
  }
}

function ct(t) {
  return At(t) ? t.value : t
}

const Dc = {
  get: (t, e, n) => ct(Reflect.get(t, e, n)), set: (t, e, n, o) => {
    const i = t[e];
    return At(i) && !At(n) ? (i.value = n, !0) : Reflect.set(t, e, n, o)
  }
};

function xl(t) {
  return We(t) ? t : new Proxy(t, Dc)
}

/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function ye(t, e, n, o) {
  try {
    return o ? t(...o) : t()
  } catch (i) {
    yo(i, e, n)
  }
}

function Kt(t, e, n, o) {
  if (Y(t)) {
    const s = ye(t, e, n, o);
    return s && Yr(s) && s.catch(r => {
      yo(r, e, n)
    }), s
  }
  const i = [];
  for (let s = 0; s < t.length; s++) i.push(Kt(t[s], e, n, o));
  return i
}

function yo(t, e, n, o = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const r = e.proxy, l = "https://vuejs.org/error-reference/#runtime-".concat(n);
    for (; s;) {
      const c = s.ec;
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](t, r, l) === !1) return
      }
      s = s.parent
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      ye(a, null, 10, [t, r, l]);
      return
    }
  }
  jc(t, n, i, o)
}

function jc(t, e, n, o = !0) {
  console.error(t)
}

let wn = !1, ci = !1;
const wt = [];
let ne = 0;
const qe = [];
let he = null, Ee = 0;
const kl = Promise.resolve();
let Gi = null;

function _l(t) {
  const e = Gi || kl;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function Fc(t) {
  let e = ne + 1, n = wt.length;
  for (; e < n;) {
    const o = e + n >>> 1, i = wt[o], s = xn(i);
    s < t || s === t && i.pre ? e = o + 1 : n = o
  }
  return e
}

function Ki(t) {
  (!wt.length || !wt.includes(t, wn && t.allowRecurse ? ne + 1 : ne)) && (t.id == null ? wt.push(t) : wt.splice(Fc(t.id), 0, t), El())
}

function El() {
  !wn && !ci && (ci = !0, Gi = kl.then(Cl))
}

function Nc(t) {
  const e = wt.indexOf(t);
  e > ne && wt.splice(e, 1)
}

function Vc(t) {
  X(t) ? qe.push(...t) : (!he || !he.includes(t, t.allowRecurse ? Ee + 1 : Ee)) && qe.push(t), El()
}

function Es(t, e, n = wn ? ne + 1 : 0) {
  for (; n < wt.length; n++) {
    const o = wt[n];
    if (o && o.pre) {
      if (t && o.id !== t.uid) continue;
      wt.splice(n, 1), n--, o()
    }
  }
}

function $l(t) {
  if (qe.length) {
    const e = [...new Set(qe)].sort((n, o) => xn(n) - xn(o));
    if (qe.length = 0, he) {
      he.push(...e);
      return
    }
    for (he = e, Ee = 0; Ee < he.length; Ee++) he[Ee]();
    he = null, Ee = 0
  }
}

const xn = t => t.id == null ? 1 / 0 : t.id, Uc = (t, e) => {
  const n = xn(t) - xn(e);
  if (n === 0) {
    if (t.pre && !e.pre) return -1;
    if (e.pre && !t.pre) return 1
  }
  return n
};

function Cl(t) {
  ci = !1, wn = !0, wt.sort(Uc);
  try {
    for (ne = 0; ne < wt.length; ne++) {
      const e = wt[ne];
      e && e.active !== !1 && ye(e, null, 14)
    }
  } finally {
    ne = 0, wt.length = 0, $l(), wn = !1, Gi = null, (wt.length || qe.length) && Cl()
  }
}

function Wc(t, e, ...n) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || rt;
  let i = n;
  const s = e.startsWith("update:"), r = s && e.slice(7);
  if (r && r in o) {
    const d = "".concat(r === "modelValue" ? "model" : r, "Modifiers"), { number: u, trim: f } = o[d] || rt;
    f && (i = n.map(m => ht(m) ? m.trim() : m)), u && (i = n.map(ac))
  }
  let l, a = o[l = Lo(e)] || o[l = Lo(Ye(e))];
  !a && s && (a = o[l = Lo(sn(e))]), a && Kt(a, t, 6, i);
  const c = o[l + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {}; else if (t.emitted[l]) return;
    t.emitted[l] = !0, Kt(c, t, 6, i)
  }
}

function Sl(t, e, n = !1) {
  const o = e.emitsCache, i = o.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let r = {}, l = !1;
  if (!Y(t)) {
    const a = c => {
      const d = Sl(c, e, !0);
      d && (l = !0, vt(r, d))
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a)
  }
  return !s && !l ? (ut(t) && o.set(t, null), null) : (X(s) ? s.forEach(a => r[a] = null) : vt(r, s), ut(t) && o.set(t, r), r)
}

function wo(t, e) {
  return !t || !po(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), J(t, e[0].toLowerCase() + e.slice(1)) || J(t, sn(e)) || J(t, e))
}

let It = null, xo = null;

function to(t) {
  const e = It;
  return It = t, xo = t && t.type.__scopeId || null, e
}

function Jg(t) {
  xo = t
}

function tb() {
  xo = null
}

function qt(t, e = It, n) {
  if (!e || t._n) return t;
  const o = (...i) => {
    o._d && Ms(-1);
    const s = to(e);
    let r;
    try {
      r = t(...i)
    } finally {
      to(s), o._d && Ms(1)
    }
    return r
  };
  return o._n = !0, o._c = !0, o._d = !0, o
}

function Mo(t) {
  const {
    type: e,
    vnode: n,
    proxy: o,
    withProxy: i,
    props: s,
    propsOptions: [r],
    slots: l,
    attrs: a,
    emit: c,
    render: d,
    renderCache: u,
    data: f,
    setupState: m,
    ctx: w,
    inheritAttrs: v
  } = t;
  let x, b;
  const k = to(t);
  try {
    if (n.shapeFlag & 4) {
      const T = i || o, R = T;
      x = ee(d.call(R, T, u, s, m, f, w)), b = a
    } else {
      const T = e;
      x = ee(T.length > 1 ? T(s, { attrs: a, slots: l, emit: c }) : T(s, null)), b = e.props ? a : qc(a)
    }
  } catch (T) {
    gn.length = 0, yo(T, t, 1), x = st(kn)
  }
  let S = x;
  if (b && v !== !1) {
    const T = Object.keys(b), { shapeFlag: R } = S;
    T.length && R & 7 && (r && T.some(Oi) && (b = Gc(b, r)), S = Qe(S, b))
  }
  return n.dirs && (S = Qe(S), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && (S.transition = n.transition), x = S, to(k), x
}

const qc = t => {
  let e;
  for (const n in t) (n === "class" || n === "style" || po(n)) && ((e || (e = {}))[n] = t[n]);
  return e
}, Gc = (t, e) => {
  const n = {};
  for (const o in t) (!Oi(o) || !(o.slice(9) in e)) && (n[o] = t[o]);
  return n
};

function Kc(t, e, n) {
  const { props: o, children: i, component: s } = t, { props: r, children: l, patchFlag: a } = e, c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return o ? $s(o, r, c) : !!r;
    if (a & 8) {
      const d = e.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (r[f] !== o[f] && !wo(c, f)) return !0
      }
    }
  } else return (i || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? $s(o, r, c) : !0 : !!r;
  return !1
}

function $s(t, e, n) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    if (e[s] !== t[s] && !wo(n, s)) return !0
  }
  return !1
}

function Xc({ vnode: t, parent: e }, n) {
  for (; e;) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.el = t.el), o === t) (t = e.vnode).el = n, e = e.parent; else break
  }
}

const Yc = Symbol.for("v-ndc"), Zc = t => t.__isSuspense;

function Qc(t, e) {
  e && e.pendingBranch ? X(t) ? e.effects.push(...t) : e.effects.push(t) : Vc(t)
}

const Jc = Symbol.for("v-scx"), td = () => ft(Jc), jn = {};

function Ge(t, e, n) {
  return Tl(t, e, n)
}

function Tl(t, e, { immediate: n, deep: o, flush: i, once: s, onTrack: r, onTrigger: l } = rt) {
  if (e && s) {
    const $ = e;
    e = (..._) => {
      $(..._), R()
    }
  }
  const a = xt, c = $ => o === !0 ? $ : $e($, o === !1 ? 1 : void 0);
  let d, u = !1, f = !1;
  if (At(t) ? (d = () => t.value, u = Jn(t)) : We(t) ? (d = () => c(t), u = !0) : X(t) ? (f = !0, u = t.some($ => We($) || Jn($)), d = () => t.map($ => {
    if (At($)) return $.value;
    if (We($)) return c($);
    if (Y($)) return ye($, a, 2)
  })) : Y(t) ? e ? d = () => ye(t, a, 2) : d = () => (m && m(), Kt(t, a, 3, [w])) : d = Vt, e && o) {
    const $ = d;
    d = () => $e($())
  }
  let m, w = $ => {
    m = S.onStop = () => {
      ye($, a, 4), m = S.onStop = void 0
    }
  }, v;
  if ($o) if (w = Vt, e ? n && Kt(e, a, 3, [d(), f ? [] : void 0, w]) : d(), i === "sync") {
    const $ = td();
    v = $.__watcherHandles || ($.__watcherHandles = [])
  } else return Vt;
  let x = f ? new Array(t.length).fill(jn) : jn;
  const b = () => {
    if (!(!S.active || !S.dirty)) if (e) {
      const $ = S.run();
      (o || u || (f ? $.some((_, O) => we(_, x[O])) : we($, x))) && (m && m(), Kt(e, a, 3, [$, x === jn ? void 0 : f && x[0] === jn ? [] : x, w]), x = $)
    } else S.run()
  };
  b.allowRecurse = !!e;
  let k;
  i === "sync" ? k = b : i === "post" ? k = () => Tt(b, a && a.suspense) : (b.pre = !0, a && (b.id = a.uid), k = () => Ki(b));
  const S = new Di(d, Vt, k), T = bc(), R = () => {
    S.stop(), T && Bi(T.effects, S)
  };
  return e ? n ? b() : x = S.run() : i === "post" ? Tt(S.run.bind(S), a && a.suspense) : S.run(), v && v.push(R), R
}

function ed(t, e, n) {
  const o = this.proxy, i = ht(t) ? t.includes(".") ? Il(o, t) : () => o[t] : t.bind(o, o);
  let s;
  Y(e) ? s = e : (s = e.handler, n = e);
  const r = Rn(this), l = Tl(i, s.bind(o), n);
  return r(), l
}

function Il(t, e) {
  const n = e.split(".");
  return () => {
    let o = t;
    for (let i = 0; i < n.length && o; i++) o = o[n[i]];
    return o
  }
}

function $e(t, e, n = 0, o) {
  if (!ut(t) || t.__v_skip) return t;
  if (e && e > 0) {
    if (n >= e) return t;
    n++
  }
  if (o = o || new Set, o.has(t)) return t;
  if (o.add(t), At(t)) $e(t.value, e, n, o); else if (X(t)) for (let i = 0; i < t.length; i++) $e(t[i], e, n, o); else if (Xr(t) || Ue(t)) t.forEach(i => {
    $e(i, e, n, o)
  }); else if (Qr(t)) for (const i in t) $e(t[i], e, n, o);
  return t
}

function nd(t, e) {
  if (It === null) return t;
  const n = Co(It) || It.proxy, o = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, r, l, a = rt] = e[i];
    s && (Y(s) && (s = { mounted: s, updated: s }), s.deep && $e(r), o.push({
      dir: s,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }))
  }
  return t
}

function ke(t, e, n, o) {
  const i = t.dirs, s = e && e.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    s && (l.oldValue = s[r].value);
    let a = l.dir[o];
    a && (Pe(), Kt(a, n, 8, [t.el, l, t, e]), Le())
  }
}/*! #__NO_SIDE_EFFECTS__ */
function Pt(t, e) {
  return Y(t) ? vt({ name: t.name }, e, { setup: t }) : t
}

const Kn = t => !!t.type.__asyncLoader, Rl = t => t.type.__isKeepAlive;

function od(t, e) {
  Al(t, "a", e)
}

function id(t, e) {
  Al(t, "da", e)
}

function Al(t, e, n = xt) {
  const o = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i;) {
      if (i.isDeactivated) return;
      i = i.parent
    }
    return t()
  });
  if (ko(e, o, n), n) {
    let i = n.parent;
    for (; i && i.parent;) Rl(i.parent.vnode) && sd(o, e, n, i), i = i.parent
  }
}

function sd(t, e, n, o) {
  const i = ko(e, t, o, !0);
  Xi(() => {
    Bi(o[e], i)
  }, n)
}

function ko(t, e, n = xt, o = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...r) => {
      if (n.isUnmounted) return;
      Pe();
      const l = Rn(n), a = Kt(e, n, t, r);
      return l(), Le(), a
    });
    return o ? i.unshift(s) : i.push(s), s
  }
}

const de = t => (e, n = xt) => (!$o || t === "sp") && ko(t, (...o) => e(...o), n), rd = de("bm"), ld = de("m"),
  ad = de("bu"), cd = de("u"), dd = de("bum"), Xi = de("um"), ud = de("sp"), fd = de("rtg"), hd = de("rtc");

function pd(t, e = xt) {
  ko("ec", t, e)
}

const di = t => t ? ql(t) ? Co(t) || t.proxy : di(t.parent) : null, hn = vt(Object.create(null), {
  $: t => t,
  $el: t => t.vnode.el,
  $data: t => t.data,
  $props: t => t.props,
  $attrs: t => t.attrs,
  $slots: t => t.slots,
  $refs: t => t.refs,
  $parent: t => di(t.parent),
  $root: t => di(t.root),
  $emit: t => t.emit,
  $options: t => Yi(t),
  $forceUpdate: t => t.f || (t.f = () => {
    t.effect.dirty = !0, Ki(t.update)
  }),
  $nextTick: t => t.n || (t.n = _l.bind(t.proxy)),
  $watch: t => ed.bind(t)
}), zo = (t, e) => t !== rt && !t.__isScriptSetup && J(t, e), md = {
  get({ _: t }, e) {
    const { ctx: n, setupState: o, data: i, props: s, accessCache: r, type: l, appContext: a } = t;
    let c;
    if (e[0] !== "$") {
      const m = r[e];
      if (m !== void 0) switch (m) {
        case 1:
          return o[e];
        case 2:
          return i[e];
        case 4:
          return n[e];
        case 3:
          return s[e]
      } else {
        if (zo(o, e)) return r[e] = 1, o[e];
        if (i !== rt && J(i, e)) return r[e] = 2, i[e];
        if ((c = t.propsOptions[0]) && J(c, e)) return r[e] = 3, s[e];
        if (n !== rt && J(n, e)) return r[e] = 4, n[e];
        ui && (r[e] = 0)
      }
    }
    const d = hn[e];
    let u, f;
    if (d) return e === "$attrs" && Rt(t, "get", e), d(t);
    if ((u = l.__cssModules) && (u = u[e])) return u;
    if (n !== rt && J(n, e)) return r[e] = 4, n[e];
    if (f = a.config.globalProperties, J(f, e)) return f[e]
  }, set({ _: t }, e, n) {
    const { data: o, setupState: i, ctx: s } = t;
    return zo(i, e) ? (i[e] = n, !0) : o !== rt && J(o, e) ? (o[e] = n, !0) : J(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0)
  }, has({ _: { data: t, setupState: e, accessCache: n, ctx: o, appContext: i, propsOptions: s } }, r) {
    let l;
    return !!n[r] || t !== rt && J(t, r) || zo(e, r) || (l = s[0]) && J(l, r) || J(o, r) || J(hn, r) || J(i.config.globalProperties, r)
  }, defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : J(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
  }
};

function Cs(t) {
  return X(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}

let ui = !0;

function gd(t) {
  const e = Yi(t), n = t.proxy, o = t.ctx;
  ui = !1, e.beforeCreate && Ss(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: m,
    updated: w,
    activated: v,
    deactivated: x,
    beforeDestroy: b,
    beforeUnmount: k,
    destroyed: S,
    unmounted: T,
    render: R,
    renderTracked: $,
    renderTriggered: _,
    errorCaptured: O,
    serverPrefetch: j,
    expose: U,
    inheritAttrs: D,
    components: _t,
    directives: W,
    filters: Bt
  } = e;
  if (c && bd(c, o, null), r) for (const Q in r) {
    const N = r[Q];
    Y(N) && (o[Q] = N.bind(n))
  }
  if (i) {
    const Q = i.call(n, n);
    ut(Q) && (t.data = vo(Q))
  }
  if (ui = !0, s) for (const Q in s) {
    const N = s[Q], Mt = Y(N) ? N.bind(n, n) : Y(N.get) ? N.get.bind(n, n) : Vt,
      Zt = !Y(N) && Y(N.set) ? N.set.bind(n) : Vt, Qt = Nt({ get: Mt, set: Zt });
    Object.defineProperty(o, Q, { enumerable: !0, configurable: !0, get: () => Qt.value, set: Ct => Qt.value = Ct })
  }
  if (l) for (const Q in l) Pl(l[Q], o, n, Q);
  if (a) {
    const Q = Y(a) ? a.call(n) : a;
    Reflect.ownKeys(Q).forEach(N => {
      Ke(N, Q[N])
    })
  }
  d && Ss(d, t, "c");

  function dt(Q, N) {
    X(N) ? N.forEach(Mt => Q(Mt.bind(n))) : N && Q(N.bind(n))
  }

  if (dt(rd, u), dt(ld, f), dt(ad, m), dt(cd, w), dt(od, v), dt(id, x), dt(pd, O), dt(hd, $), dt(fd, _), dt(dd, k), dt(Xi, T), dt(ud, j), X(U)) if (U.length) {
    const Q = t.exposed || (t.exposed = {});
    U.forEach(N => {
      Object.defineProperty(Q, N, { get: () => n[N], set: Mt => n[N] = Mt })
    })
  } else t.exposed || (t.exposed = {});
  R && t.render === Vt && (t.render = R), D != null && (t.inheritAttrs = D), _t && (t.components = _t), W && (t.directives = W)
}

function bd(t, e, n = Vt) {
  X(t) && (t = fi(t));
  for (const o in t) {
    const i = t[o];
    let s;
    ut(i) ? "default" in i ? s = ft(i.from || o, i.default, !0) : s = ft(i.from || o) : s = ft(i), At(s) ? Object.defineProperty(e, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: r => s.value = r
    }) : e[o] = s
  }
}

function Ss(t, e, n) {
  Kt(X(t) ? t.map(o => o.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function Pl(t, e, n, o) {
  const i = o.includes(".") ? Il(n, o) : () => n[o];
  if (ht(t)) {
    const s = e[t];
    Y(s) && Ge(i, s)
  } else if (Y(t)) Ge(i, t.bind(n)); else if (ut(t)) if (X(t)) t.forEach(s => Pl(s, e, n, o)); else {
    const s = Y(t.handler) ? t.handler.bind(n) : e[t.handler];
    Y(s) && Ge(i, s, t)
  }
}

function Yi(t) {
  const e = t.type, { mixins: n, extends: o } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = t.appContext, l = s.get(e);
  let a;
  return l ? a = l : !i.length && !n && !o ? a = e : (a = {}, i.length && i.forEach(c => eo(a, c, r, !0)), eo(a, e, r)), ut(e) && s.set(e, a), a
}

function eo(t, e, n, o = !1) {
  const { mixins: i, extends: s } = e;
  s && eo(t, s, n, !0), i && i.forEach(r => eo(t, r, n, !0));
  for (const r in e) if (!(o && r === "expose")) {
    const l = vd[r] || n && n[r];
    t[r] = l ? l(t[r], e[r]) : e[r]
  }
  return t
}

const vd = {
  data: Ts,
  props: Is,
  emits: Is,
  methods: dn,
  computed: dn,
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
  components: dn,
  directives: dn,
  watch: wd,
  provide: Ts,
  inject: yd
};

function Ts(t, e) {
  return e ? t ? function () {
    return vt(Y(t) ? t.call(this, this) : t, Y(e) ? e.call(this, this) : e)
  } : e : t
}

function yd(t, e) {
  return dn(fi(t), fi(e))
}

function fi(t) {
  if (X(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e
  }
  return t
}

function Et(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}

function dn(t, e) {
  return t ? vt(Object.create(null), t, e) : e
}

function Is(t, e) {
  return t ? X(t) && X(e) ? [...new Set([...t, ...e])] : vt(Object.create(null), Cs(t), Cs(e != null ? e : {})) : e
}

function wd(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = vt(Object.create(null), t);
  for (const o in e) n[o] = Et(t[o], e[o]);
  return n
}

function Ll() {
  return {
    app: null,
    config: {
      isNativeTag: oc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}

let xd = 0;

function kd(t, e) {
  return function (o, i = null) {
    Y(o) || (o = vt({}, o)), i != null && !ut(i) && (i = null);
    const s = Ll(), r = new WeakSet;
    let l = !1;
    const a = s.app = {
      _uid: xd++,
      _component: o,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Kd,
      get config() {
        return s.config
      },
      set config(c) {
      },
      use(c, ...d) {
        return r.has(c) || (c && Y(c.install) ? (r.add(c), c.install(a, ...d)) : Y(c) && (r.add(c), c(a, ...d))), a
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), a
      },
      component(c, d) {
        return d ? (s.components[c] = d, a) : s.components[c]
      },
      directive(c, d) {
        return d ? (s.directives[c] = d, a) : s.directives[c]
      },
      mount(c, d, u) {
        if (!l) {
          const f = st(o, i);
          return f.appContext = s, u === !0 ? u = "svg" : u === !1 && (u = void 0), d && e ? e(f, c) : t(f, c, u), l = !0, a._container = c, c.__vue_app__ = a, Co(f.component) || f.component.proxy
        }
      },
      unmount() {
        l && (t(null, a._container), delete a._container.__vue_app__)
      },
      provide(c, d) {
        return s.provides[c] = d, a
      },
      runWithContext(c) {
        const d = pn;
        pn = a;
        try {
          return c()
        } finally {
          pn = d
        }
      }
    };
    return a
  }
}

let pn = null;

function Ke(t, e) {
  if (xt) {
    let n = xt.provides;
    const o = xt.parent && xt.parent.provides;
    o === n && (n = xt.provides = Object.create(o)), n[t] = e
  }
}

function ft(t, e, n = !1) {
  const o = xt || It;
  if (o || pn) {
    const i = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : pn._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && Y(e) ? e.call(o && o.proxy) : e
  }
}

function _d(t, e, n, o = !1) {
  const i = {}, s = {};
  Qn(s, Eo, 1), t.propsDefaults = Object.create(null), Ol(t, e, i, s);
  for (const r in t.propsOptions[0]) r in i || (i[r] = void 0);
  n ? t.props = o ? i : pl(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s
}

function Ed(t, e, n, o) {
  const { props: i, attrs: s, vnode: { patchFlag: r } } = t, l = tt(i), [a] = t.propsOptions;
  let c = !1;
  if ((o || r > 0) && !(r & 16)) {
    if (r & 8) {
      const d = t.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (wo(t.emitsOptions, f)) continue;
        const m = e[f];
        if (a) if (J(s, f)) m !== s[f] && (s[f] = m, c = !0); else {
          const w = Ye(f);
          i[w] = hi(a, l, w, m, t, !1)
        } else m !== s[f] && (s[f] = m, c = !0)
      }
    }
  } else {
    Ol(t, e, i, s) && (c = !0);
    let d;
    for (const u in l) (!e || !J(e, u) && ((d = sn(u)) === u || !J(e, d))) && (a ? n && (n[u] !== void 0 || n[d] !== void 0) && (i[u] = hi(a, l, u, void 0, t, !0)) : delete i[u]);
    if (s !== l) for (const u in s) (!e || !J(e, u)) && (delete s[u], c = !0)
  }
  c && ce(t, "set", "$attrs")
}

function Ol(t, e, n, o) {
  const [i, s] = t.propsOptions;
  let r = !1, l;
  if (e) for (let a in e) {
    if (fn(a)) continue;
    const c = e[a];
    let d;
    i && J(i, d = Ye(a)) ? !s || !s.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : wo(t.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, r = !0)
  }
  if (s) {
    const a = tt(n), c = l || rt;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = hi(i, a, u, c[u], t, !J(c, u))
    }
  }
  return r
}

function hi(t, e, n, o, i, s) {
  const r = t[n];
  if (r != null) {
    const l = J(r, "default");
    if (l && o === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && Y(a)) {
        const { propsDefaults: c } = i;
        if (n in c) o = c[n]; else {
          const d = Rn(i);
          o = c[n] = a.call(null, e), d()
        }
      } else o = a
    }
    r[0] && (s && !l ? o = !1 : r[1] && (o === "" || o === sn(n)) && (o = !0))
  }
  return o
}

function Bl(t, e, n = !1) {
  const o = e.propsCache, i = o.get(t);
  if (i) return i;
  const s = t.props, r = {}, l = [];
  let a = !1;
  if (!Y(t)) {
    const d = u => {
      a = !0;
      const [f, m] = Bl(u, e, !0);
      vt(r, f), m && l.push(...m)
    };
    !n && e.mixins.length && e.mixins.forEach(d), t.extends && d(t.extends), t.mixins && t.mixins.forEach(d)
  }
  if (!s && !a) return ut(t) && o.set(t, Ve), Ve;
  if (X(s)) for (let d = 0; d < s.length; d++) {
    const u = Ye(s[d]);
    Rs(u) && (r[u] = rt)
  } else if (s) for (const d in s) {
    const u = Ye(d);
    if (Rs(u)) {
      const f = s[d], m = r[u] = X(f) || Y(f) ? { type: f } : vt({}, f);
      if (m) {
        const w = Ls(Boolean, m.type), v = Ls(String, m.type);
        m[0] = w > -1, m[1] = v < 0 || w < v, (w > -1 || J(m, "default")) && l.push(u)
      }
    }
  }
  const c = [r, l];
  return ut(t) && o.set(t, c), c
}

function Rs(t) {
  return t[0] !== "$" && !fn(t)
}

function As(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || ""
}

function Ps(t, e) {
  return As(t) === As(e)
}

function Ls(t, e) {
  return X(e) ? e.findIndex(n => Ps(n, t)) : Y(e) && Ps(e, t) ? 0 : -1
}

const Ml = t => t[0] === "_" || t === "$stable", Zi = t => X(t) ? t.map(ee) : [ee(t)], $d = (t, e, n) => {
  if (e._n) return e;
  const o = qt((...i) => Zi(e(...i)), n);
  return o._c = !1, o
}, zl = (t, e, n) => {
  const o = t._ctx;
  for (const i in t) {
    if (Ml(i)) continue;
    const s = t[i];
    if (Y(s)) e[i] = $d(i, s, o); else if (s != null) {
      const r = Zi(s);
      e[i] = () => r
    }
  }
}, Hl = (t, e) => {
  const n = Zi(e);
  t.slots.default = () => n
}, Cd = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = tt(e), Qn(e, "_", n)) : zl(e, t.slots = {})
  } else t.slots = {}, e && Hl(t, e);
  Qn(t.slots, Eo, 1)
}, Sd = (t, e, n) => {
  const { vnode: o, slots: i } = t;
  let s = !0, r = rt;
  if (o.shapeFlag & 32) {
    const l = e._;
    l ? n && l === 1 ? s = !1 : (vt(i, e), !n && l === 1 && delete i._) : (s = !e.$stable, zl(e, i)), r = e
  } else e && (Hl(t, e), r = { default: 1 });
  if (s) for (const l in i) !Ml(l) && r[l] == null && delete i[l]
};

function pi(t, e, n, o, i = !1) {
  if (X(t)) {
    t.forEach((f, m) => pi(f, e && (X(e) ? e[m] : e), n, o, i));
    return
  }
  if (Kn(o) && !i) return;
  const s = o.shapeFlag & 4 ? Co(o.component) || o.component.proxy : o.el, r = i ? null : s, { i: l, r: a } = t,
    c = e && e.r, d = l.refs === rt ? l.refs = {} : l.refs, u = l.setupState;
  if (c != null && c !== a && (ht(c) ? (d[c] = null, J(u, c) && (u[c] = null)) : At(c) && (c.value = null)), Y(a)) ye(a, l, 12, [r, d]); else {
    const f = ht(a), m = At(a);
    if (f || m) {
      const w = () => {
        if (t.f) {
          const v = f ? J(u, a) ? u[a] : d[a] : a.value;
          i ? X(v) && Bi(v, s) : X(v) ? v.includes(s) || v.push(s) : f ? (d[a] = [s], J(u, a) && (u[a] = d[a])) : (a.value = [s], t.k && (d[t.k] = a.value))
        } else f ? (d[a] = r, J(u, a) && (u[a] = r)) : m && (a.value = r, t.k && (d[t.k] = r))
      };
      r ? (w.id = -1, Tt(w, n)) : w()
    }
  }
}

const Tt = Qc;

function Td(t) {
  return Id(t)
}

function Id(t, e) {
  const n = tl();
  n.__VUE__ = !0;
  const {
    insert: o,
    remove: i,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: m = Vt,
    insertStaticContent: w
  } = t, v = (h, p, g, C = null, y = null, P = null, M = void 0, A = null, L = !!p.dynamicChildren) => {
    if (h === p) return;
    h && !an(h, p) && (C = E(h), Ct(h, y, P, !0), h = null), p.patchFlag === -2 && (L = !1, p.dynamicChildren = null);
    const { type: I, ref: H, shapeFlag: q } = p;
    switch (I) {
      case _o:
        x(h, p, g, C);
        break;
      case kn:
        b(h, p, g, C);
        break;
      case Do:
        h == null && k(p, g, C, M);
        break;
      case se:
        _t(h, p, g, C, y, P, M, A, L);
        break;
      default:
        q & 1 ? R(h, p, g, C, y, P, M, A, L) : q & 6 ? W(h, p, g, C, y, P, M, A, L) : (q & 64 || q & 128) && I.process(h, p, g, C, y, P, M, A, L, F)
    }
    H != null && y && pi(H, h && h.ref, P, p || h, !p)
  }, x = (h, p, g, C) => {
    if (h == null) o(p.el = l(p.children), g, C); else {
      const y = p.el = h.el;
      p.children !== h.children && c(y, p.children)
    }
  }, b = (h, p, g, C) => {
    h == null ? o(p.el = a(p.children || ""), g, C) : p.el = h.el
  }, k = (h, p, g, C) => {
    [h.el, h.anchor] = w(h.children, p, g, C, h.el, h.anchor)
  }, S = ({ el: h, anchor: p }, g, C) => {
    let y;
    for (; h && h !== p;) y = f(h), o(h, g, C), h = y;
    o(p, g, C)
  }, T = ({ el: h, anchor: p }) => {
    let g;
    for (; h && h !== p;) g = f(h), i(h), h = g;
    i(p)
  }, R = (h, p, g, C, y, P, M, A, L) => {
    p.type === "svg" ? M = "svg" : p.type === "math" && (M = "mathml"), h == null ? $(p, g, C, y, P, M, A, L) : j(h, p, y, P, M, A, L)
  }, $ = (h, p, g, C, y, P, M, A) => {
    let L, I;
    const { props: H, shapeFlag: q, transition: V, dirs: K } = h;
    if (L = h.el = r(h.type, P, H && H.is, H), q & 8 ? d(L, h.children) : q & 16 && O(h.children, L, null, C, y, Ho(h, P), M, A), K && ke(h, null, C, "created"), _(L, h, h.scopeId, M, C), H) {
      for (const ot in H) ot !== "value" && !fn(ot) && s(L, ot, null, H[ot], P, h.children, C, y, yt);
      "value" in H && s(L, "value", null, H.value, P), (I = H.onVnodeBeforeMount) && te(I, C, h)
    }
    K && ke(h, null, C, "beforeMount");
    const Z = Rd(y, V);
    Z && V.beforeEnter(L), o(L, p, g), ((I = H && H.onVnodeMounted) || Z || K) && Tt(() => {
      I && te(I, C, h), Z && V.enter(L), K && ke(h, null, C, "mounted")
    }, y)
  }, _ = (h, p, g, C, y) => {
    if (g && m(h, g), C) for (let P = 0; P < C.length; P++) m(h, C[P]);
    if (y) {
      let P = y.subTree;
      if (p === P) {
        const M = y.vnode;
        _(h, M, M.scopeId, M.slotScopeIds, y.parent)
      }
    }
  }, O = (h, p, g, C, y, P, M, A, L = 0) => {
    for (let I = L; I < h.length; I++) {
      const H = h[I] = A ? pe(h[I]) : ee(h[I]);
      v(null, H, p, g, C, y, P, M, A)
    }
  }, j = (h, p, g, C, y, P, M) => {
    const A = p.el = h.el;
    let { patchFlag: L, dynamicChildren: I, dirs: H } = p;
    L |= h.patchFlag & 16;
    const q = h.props || rt, V = p.props || rt;
    let K;
    if (g && _e(g, !1), (K = V.onVnodeBeforeUpdate) && te(K, g, p, h), H && ke(p, h, g, "beforeUpdate"), g && _e(g, !0), I ? U(h.dynamicChildren, I, A, g, C, Ho(p, y), P) : M || N(h, p, A, null, g, C, Ho(p, y), P, !1), L > 0) {
      if (L & 16) D(A, p, q, V, g, C, y); else if (L & 2 && q.class !== V.class && s(A, "class", null, V.class, y), L & 4 && s(A, "style", q.style, V.style, y), L & 8) {
        const Z = p.dynamicProps;
        for (let ot = 0; ot < Z.length; ot++) {
          const at = Z[ot], pt = q[at], Ut = V[at];
          (Ut !== pt || at === "value") && s(A, at, pt, Ut, y, h.children, g, C, yt)
        }
      }
      L & 1 && h.children !== p.children && d(A, p.children)
    } else !M && I == null && D(A, p, q, V, g, C, y);
    ((K = V.onVnodeUpdated) || H) && Tt(() => {
      K && te(K, g, p, h), H && ke(p, h, g, "updated")
    }, C)
  }, U = (h, p, g, C, y, P, M) => {
    for (let A = 0; A < p.length; A++) {
      const L = h[A], I = p[A], H = L.el && (L.type === se || !an(L, I) || L.shapeFlag & 70) ? u(L.el) : g;
      v(L, I, H, null, C, y, P, M, !0)
    }
  }, D = (h, p, g, C, y, P, M) => {
    if (g !== C) {
      if (g !== rt) for (const A in g) !fn(A) && !(A in C) && s(h, A, g[A], null, M, p.children, y, P, yt);
      for (const A in C) {
        if (fn(A)) continue;
        const L = C[A], I = g[A];
        L !== I && A !== "value" && s(h, A, I, L, M, p.children, y, P, yt)
      }
      "value" in C && s(h, "value", g.value, C.value, M)
    }
  }, _t = (h, p, g, C, y, P, M, A, L) => {
    const I = p.el = h ? h.el : l(""), H = p.anchor = h ? h.anchor : l("");
    let { patchFlag: q, dynamicChildren: V, slotScopeIds: K } = p;
    K && (A = A ? A.concat(K) : K), h == null ? (o(I, g, C), o(H, g, C), O(p.children || [], g, H, y, P, M, A, L)) : q > 0 && q & 64 && V && h.dynamicChildren ? (U(h.dynamicChildren, V, g, y, P, M, A), (p.key != null || y && p === y.subTree) && Qi(h, p, !0)) : N(h, p, g, H, y, P, M, A, L)
  }, W = (h, p, g, C, y, P, M, A, L) => {
    p.slotScopeIds = A, h == null ? p.shapeFlag & 512 ? y.ctx.activate(p, g, C, M, L) : Bt(p, g, C, y, P, M, L) : Ft(h, p, L)
  }, Bt = (h, p, g, C, y, P, M) => {
    const A = h.component = Nd(h, C, y);
    if (Rl(h) && (A.ctx.renderer = F), Vd(A), A.asyncDep) {
      if (y && y.registerDep(A, dt), !h.el) {
        const L = A.subTree = st(kn);
        b(null, L, p, g)
      }
    } else dt(A, h, p, g, y, P, M)
  }, Ft = (h, p, g) => {
    const C = p.component = h.component;
    if (Kc(h, p, g)) if (C.asyncDep && !C.asyncResolved) {
      Q(C, p, g);
      return
    } else C.next = p, Nc(C.update), C.effect.dirty = !0, C.update(); else p.el = h.el, C.vnode = p
  }, dt = (h, p, g, C, y, P, M) => {
    const A = () => {
      if (h.isMounted) {
        let { next: H, bu: q, u: V, parent: K, vnode: Z } = h;
        {
          const ze = Dl(h);
          if (ze) {
            H && (H.el = Z.el, Q(h, H, M)), ze.asyncDep.then(() => {
              h.isUnmounted || A()
            });
            return
          }
        }
        let ot = H, at;
        _e(h, !1), H ? (H.el = Z.el, Q(h, H, M)) : H = Z, q && Oo(q), (at = H.props && H.props.onVnodeBeforeUpdate) && te(at, K, H, Z), _e(h, !0);
        const pt = Mo(h), Ut = h.subTree;
        h.subTree = pt, v(Ut, pt, u(Ut.el), E(Ut), h, y, P), H.el = pt.el, ot === null && Xc(h, pt.el), V && Tt(V, y), (at = H.props && H.props.onVnodeUpdated) && Tt(() => te(at, K, H, Z), y)
      } else {
        let H;
        const { el: q, props: V } = p, { bm: K, m: Z, parent: ot } = h, at = Kn(p);
        if (_e(h, !1), K && Oo(K), !at && (H = V && V.onVnodeBeforeMount) && te(H, ot, p), _e(h, !0), q && lt) {
          const pt = () => {
            h.subTree = Mo(h), lt(q, h.subTree, h, y, null)
          };
          at ? p.type.__asyncLoader().then(() => !h.isUnmounted && pt()) : pt()
        } else {
          const pt = h.subTree = Mo(h);
          v(null, pt, g, C, h, y, P), p.el = pt.el
        }
        if (Z && Tt(Z, y), !at && (H = V && V.onVnodeMounted)) {
          const pt = p;
          Tt(() => te(H, ot, pt), y)
        }
        (p.shapeFlag & 256 || ot && Kn(ot.vnode) && ot.vnode.shapeFlag & 256) && h.a && Tt(h.a, y), h.isMounted = !0, p = g = C = null
      }
    }, L = h.effect = new Di(A, Vt, () => Ki(I), h.scope), I = h.update = () => {
      L.dirty && L.run()
    };
    I.id = h.uid, _e(h, !0), I()
  }, Q = (h, p, g) => {
    p.component = h;
    const C = h.vnode.props;
    h.vnode = p, h.next = null, Ed(h, p.props, C, g), Sd(h, p.children, g), Pe(), Es(h), Le()
  }, N = (h, p, g, C, y, P, M, A, L = !1) => {
    const I = h && h.children, H = h ? h.shapeFlag : 0, q = p.children, { patchFlag: V, shapeFlag: K } = p;
    if (V > 0) {
      if (V & 128) {
        Zt(I, q, g, C, y, P, M, A, L);
        return
      } else if (V & 256) {
        Mt(I, q, g, C, y, P, M, A, L);
        return
      }
    }
    K & 8 ? (H & 16 && yt(I, y, P), q !== I && d(g, q)) : H & 16 ? K & 16 ? Zt(I, q, g, C, y, P, M, A, L) : yt(I, y, P, !0) : (H & 8 && d(g, ""), K & 16 && O(q, g, C, y, P, M, A, L))
  }, Mt = (h, p, g, C, y, P, M, A, L) => {
    h = h || Ve, p = p || Ve;
    const I = h.length, H = p.length, q = Math.min(I, H);
    let V;
    for (V = 0; V < q; V++) {
      const K = p[V] = L ? pe(p[V]) : ee(p[V]);
      v(h[V], K, g, null, y, P, M, A, L)
    }
    I > H ? yt(h, y, P, !0, !1, q) : O(p, g, C, y, P, M, A, L, q)
  }, Zt = (h, p, g, C, y, P, M, A, L) => {
    let I = 0;
    const H = p.length;
    let q = h.length - 1, V = H - 1;
    for (; I <= q && I <= V;) {
      const K = h[I], Z = p[I] = L ? pe(p[I]) : ee(p[I]);
      if (an(K, Z)) v(K, Z, g, null, y, P, M, A, L); else break;
      I++
    }
    for (; I <= q && I <= V;) {
      const K = h[q], Z = p[V] = L ? pe(p[V]) : ee(p[V]);
      if (an(K, Z)) v(K, Z, g, null, y, P, M, A, L); else break;
      q--, V--
    }
    if (I > q) {
      if (I <= V) {
        const K = V + 1, Z = K < H ? p[K].el : C;
        for (; I <= V;) v(null, p[I] = L ? pe(p[I]) : ee(p[I]), g, Z, y, P, M, A, L), I++
      }
    } else if (I > V) for (; I <= q;) Ct(h[I], y, P, !0), I++; else {
      const K = I, Z = I, ot = new Map;
      for (I = Z; I <= V; I++) {
        const zt = p[I] = L ? pe(p[I]) : ee(p[I]);
        zt.key != null && ot.set(zt.key, I)
      }
      let at, pt = 0;
      const Ut = V - Z + 1;
      let ze = !1, hs = 0;
      const ln = new Array(Ut);
      for (I = 0; I < Ut; I++) ln[I] = 0;
      for (I = K; I <= q; I++) {
        const zt = h[I];
        if (pt >= Ut) {
          Ct(zt, y, P, !0);
          continue
        }
        let Jt;
        if (zt.key != null) Jt = ot.get(zt.key); else for (at = Z; at <= V; at++) if (ln[at - Z] === 0 && an(zt, p[at])) {
          Jt = at;
          break
        }
        Jt === void 0 ? Ct(zt, y, P, !0) : (ln[Jt - Z] = I + 1, Jt >= hs ? hs = Jt : ze = !0, v(zt, p[Jt], g, null, y, P, M, A, L), pt++)
      }
      const ps = ze ? Ad(ln) : Ve;
      for (at = ps.length - 1, I = Ut - 1; I >= 0; I--) {
        const zt = Z + I, Jt = p[zt], ms = zt + 1 < H ? p[zt + 1].el : C;
        ln[I] === 0 ? v(null, Jt, g, ms, y, P, M, A, L) : ze && (at < 0 || I !== ps[at] ? Qt(Jt, g, ms, 2) : at--)
      }
    }
  }, Qt = (h, p, g, C, y = null) => {
    const { el: P, type: M, transition: A, children: L, shapeFlag: I } = h;
    if (I & 6) {
      Qt(h.component.subTree, p, g, C);
      return
    }
    if (I & 128) {
      h.suspense.move(p, g, C);
      return
    }
    if (I & 64) {
      M.move(h, p, g, F);
      return
    }
    if (M === se) {
      o(P, p, g);
      for (let q = 0; q < L.length; q++) Qt(L[q], p, g, C);
      o(h.anchor, p, g);
      return
    }
    if (M === Do) {
      S(h, p, g);
      return
    }
    if (C !== 2 && I & 1 && A) if (C === 0) A.beforeEnter(P), o(P, p, g), Tt(() => A.enter(P), y); else {
      const { leave: q, delayLeave: V, afterLeave: K } = A, Z = () => o(P, p, g), ot = () => {
        q(P, () => {
          Z(), K && K()
        })
      };
      V ? V(P, Z, ot) : ot()
    } else o(P, p, g)
  }, Ct = (h, p, g, C = !1, y = !1) => {
    const { type: P, props: M, ref: A, children: L, dynamicChildren: I, shapeFlag: H, patchFlag: q, dirs: V } = h;
    if (A != null && pi(A, null, g, h, !0), H & 256) {
      p.ctx.deactivate(h);
      return
    }
    const K = H & 1 && V, Z = !Kn(h);
    let ot;
    if (Z && (ot = M && M.onVnodeBeforeUnmount) && te(ot, p, h), H & 6) On(h.component, g, C); else {
      if (H & 128) {
        h.suspense.unmount(g, C);
        return
      }
      K && ke(h, null, p, "beforeUnmount"), H & 64 ? h.type.remove(h, p, g, y, F, C) : I && (P !== se || q > 0 && q & 64) ? yt(I, p, g, !1, !0) : (P === se && q & 384 || !y && H & 16) && yt(L, p, g), C && Be(h)
    }
    (Z && (ot = M && M.onVnodeUnmounted) || K) && Tt(() => {
      ot && te(ot, p, h), K && ke(h, null, p, "unmounted")
    }, g)
  }, Be = h => {
    const { type: p, el: g, anchor: C, transition: y } = h;
    if (p === se) {
      Me(g, C);
      return
    }
    if (p === Do) {
      T(h);
      return
    }
    const P = () => {
      i(g), y && !y.persisted && y.afterLeave && y.afterLeave()
    };
    if (h.shapeFlag & 1 && y && !y.persisted) {
      const { leave: M, delayLeave: A } = y, L = () => M(g, P);
      A ? A(h.el, P, L) : L()
    } else P()
  }, Me = (h, p) => {
    let g;
    for (; h !== p;) g = f(h), i(h), h = g;
    i(p)
  }, On = (h, p, g) => {
    const { bum: C, scope: y, update: P, subTree: M, um: A } = h;
    C && Oo(C), y.stop(), P && (P.active = !1, Ct(M, h, p, g)), A && Tt(A, p), Tt(() => {
      h.isUnmounted = !0
    }, p), p && p.pendingBranch && !p.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
  }, yt = (h, p, g, C = !1, y = !1, P = 0) => {
    for (let M = P; M < h.length; M++) Ct(h[M], p, g, C, y)
  }, E = h => h.shapeFlag & 6 ? E(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : f(h.anchor || h.el);
  let z = !1;
  const B = (h, p, g) => {
    h == null ? p._vnode && Ct(p._vnode, null, null, !0) : v(p._vnode || null, h, p, null, null, null, g), z || (z = !0, Es(), $l(), z = !1), p._vnode = h
  }, F = { p: v, um: Ct, m: Qt, r: Be, mt: Bt, mc: O, pc: N, pbc: U, n: E, o: t };
  let et, lt;
  return e && ([et, lt] = e(F)), { render: B, hydrate: et, createApp: kd(B, et) }
}

function Ho({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}

function _e({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n
}

function Rd(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function Qi(t, e, n = !1) {
  const o = t.children, i = e.children;
  if (X(o) && X(i)) for (let s = 0; s < o.length; s++) {
    const r = o[s];
    let l = i[s];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = pe(i[s]), l.el = r.el), n || Qi(r, l)), l.type === _o && (l.el = r.el)
  }
}

function Ad(t) {
  const e = t.slice(), n = [0];
  let o, i, s, r, l;
  const a = t.length;
  for (o = 0; o < a; o++) {
    const c = t[o];
    if (c !== 0) {
      if (i = n[n.length - 1], t[i] < c) {
        e[o] = i, n.push(o);
        continue
      }
      for (s = 0, r = n.length - 1; s < r;) l = s + r >> 1, t[n[l]] < c ? s = l + 1 : r = l;
      c < t[n[s]] && (s > 0 && (e[o] = n[s - 1]), n[s] = o)
    }
  }
  for (s = n.length, r = n[s - 1]; s-- > 0;) n[s] = r, r = e[r];
  return n
}

function Dl(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Dl(e)
}

const Pd = t => t.__isTeleport, mn = t => t && (t.disabled || t.disabled === ""),
  Os = t => typeof SVGElement < "u" && t instanceof SVGElement,
  Bs = t => typeof MathMLElement == "function" && t instanceof MathMLElement, mi = (t, e) => {
    const n = t && t.to;
    return ht(n) ? e ? e(n) : null : n
  }, Ld = {
    name: "Teleport", __isTeleport: !0, process(t, e, n, o, i, s, r, l, a, c) {
      const { mc: d, pc: u, pbc: f, o: { insert: m, querySelector: w, createText: v, createComment: x } } = c,
        b = mn(e.props);
      let { shapeFlag: k, children: S, dynamicChildren: T } = e;
      if (t == null) {
        const R = e.el = v(""), $ = e.anchor = v("");
        m(R, n, o), m($, n, o);
        const _ = e.target = mi(e.props, w), O = e.targetAnchor = v("");
        _ && (m(O, _), r === "svg" || Os(_) ? r = "svg" : (r === "mathml" || Bs(_)) && (r = "mathml"));
        const j = (U, D) => {
          k & 16 && d(S, U, D, i, s, r, l, a)
        };
        b ? j(n, $) : _ && j(_, O)
      } else {
        e.el = t.el;
        const R = e.anchor = t.anchor, $ = e.target = t.target, _ = e.targetAnchor = t.targetAnchor, O = mn(t.props),
          j = O ? n : $, U = O ? R : _;
        if (r === "svg" || Os($) ? r = "svg" : (r === "mathml" || Bs($)) && (r = "mathml"), T ? (f(t.dynamicChildren, T, j, i, s, r, l), Qi(t, e, !0)) : a || u(t, e, j, U, i, s, r, l, !1), b) O ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Fn(e, n, R, c, 1); else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const D = e.target = mi(e.props, w);
          D && Fn(e, D, null, c, 0)
        } else O && Fn(e, $, _, c, 1)
      }
      jl(e)
    }, remove(t, e, n, o, { um: i, o: { remove: s } }, r) {
      const { shapeFlag: l, children: a, anchor: c, targetAnchor: d, target: u, props: f } = t;
      if (u && s(d), r && s(c), l & 16) {
        const m = r || !mn(f);
        for (let w = 0; w < a.length; w++) {
          const v = a[w];
          i(v, e, n, m, !!v.dynamicChildren)
        }
      }
    }, move: Fn, hydrate: Od
  };

function Fn(t, e, n, { o: { insert: o }, m: i }, s = 2) {
  s === 0 && o(t.targetAnchor, e, n);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: d } = t, u = s === 2;
  if (u && o(r, e, n), (!u || mn(d)) && a & 16) for (let f = 0; f < c.length; f++) i(c[f], e, n, 2);
  u && o(l, e, n)
}

function Od(t, e, n, o, i, s, { o: { nextSibling: r, parentNode: l, querySelector: a } }, c) {
  const d = e.target = mi(e.props, a);
  if (d) {
    const u = d._lpa || d.firstChild;
    if (e.shapeFlag & 16) if (mn(e.props)) e.anchor = c(r(t), e, l(t), n, o, i, s), e.targetAnchor = u; else {
      e.anchor = r(t);
      let f = u;
      for (; f;) if (f = r(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
        e.targetAnchor = f, d._lpa = e.targetAnchor && r(e.targetAnchor);
        break
      }
      c(u, e, d, n, o, i, s)
    }
    jl(e)
  }
  return e.anchor && r(e.anchor)
}

const Bd = Ld;

function jl(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n && n !== t.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut()
  }
}

const se = Symbol.for("v-fgt"), _o = Symbol.for("v-txt"), kn = Symbol.for("v-cmt"), Do = Symbol.for("v-stc"), gn = [];
let Gt = null;

function Fl(t = !1) {
  gn.push(Gt = t ? null : [])
}

function Md() {
  gn.pop(), Gt = gn[gn.length - 1] || null
}

let _n = 1;

function Ms(t) {
  _n += t
}

function Nl(t) {
  return t.dynamicChildren = _n > 0 ? Gt || Ve : null, Md(), _n > 0 && Gt && Gt.push(t), t
}

function eb(t, e, n, o, i, s) {
  return Nl(Wl(t, e, n, o, i, s, !0))
}

function Vl(t, e, n, o, i) {
  return Nl(st(t, e, n, o, i, !0))
}

function gi(t) {
  return t ? t.__v_isVNode === !0 : !1
}

function an(t, e) {
  return t.type === e.type && t.key === e.key
}

const Eo = "__vInternal", Ul = ({ key: t }) => t != null ? t : null, Xn = ({
                                                                             ref: t,
                                                                             ref_key: e,
                                                                             ref_for: n
                                                                           }) => (typeof t == "number" && (t = "" + t), t != null ? ht(t) || At(t) || Y(t) ? {
  i: It,
  r: t,
  k: e,
  f: !!n
} : t : null);

function Wl(t, e = null, n = null, o = 0, i = null, s = t === se ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ul(e),
    ref: e && Xn(e),
    scopeId: xo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: It
  };
  return l ? (Ji(a, n), s & 128 && t.normalize(a)) : n && (a.shapeFlag |= ht(n) ? 8 : 16), _n > 0 && !r && Gt && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Gt.push(a), a
}

const st = zd;

function zd(t, e = null, n = null, o = 0, i = null, s = !1) {
  if ((!t || t === Yc) && (t = kn), gi(t)) {
    const l = Qe(t, e, !0);
    return n && Ji(l, n), _n > 0 && !s && Gt && (l.shapeFlag & 6 ? Gt[Gt.indexOf(t)] = l : Gt.push(l)), l.patchFlag |= -2, l
  }
  if (Gd(t) && (t = t.__vccOpts), e) {
    e = Hd(e);
    let { class: l, style: a } = e;
    l && !ht(l) && (e.class = Hi(l)), ut(a) && (gl(a) && !X(a) && (a = vt({}, a)), e.style = zi(a))
  }
  const r = ht(t) ? 1 : Zc(t) ? 128 : Pd(t) ? 64 : ut(t) ? 4 : Y(t) ? 2 : 0;
  return Wl(t, e, n, o, i, r, s, !0)
}

function Hd(t) {
  return t ? gl(t) || Eo in t ? vt({}, t) : t : null
}

function Qe(t, e, n = !1) {
  const { props: o, ref: i, patchFlag: s, children: r } = t, l = e ? Dd(o || {}, e) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && Ul(l),
    ref: e && e.ref ? n && i ? X(i) ? i.concat(Xn(e)) : [i, Xn(e)] : Xn(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: r,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== se ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Qe(t.ssContent),
    ssFallback: t.ssFallback && Qe(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  }
}

function Yn(t = " ", e = 0) {
  return st(_o, null, t, e)
}

function ee(t) {
  return t == null || typeof t == "boolean" ? st(kn) : X(t) ? st(se, null, t.slice()) : typeof t == "object" ? pe(t) : st(_o, null, String(t))
}

function pe(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Qe(t)
}

function Ji(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null) e = null; else if (X(e)) n = 16; else if (typeof e == "object") if (o & 65) {
    const i = e.default;
    i && (i._c && (i._d = !1), Ji(t, i()), i._c && (i._d = !0));
    return
  } else {
    n = 32;
    const i = e._;
    !i && !(Eo in e) ? e._ctx = It : i === 3 && It && (It.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
  } else Y(e) ? (e = { default: e, _ctx: It }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Yn(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n
}

function Dd(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const i in o) if (i === "class") e.class !== o.class && (e.class = Hi([e.class, o.class])); else if (i === "style") e.style = zi([e.style, o.style]); else if (po(i)) {
      const s = e[i], r = o[i];
      r && s !== r && !(X(s) && s.includes(r)) && (e[i] = s ? [].concat(s, r) : r)
    } else i !== "" && (e[i] = o[i])
  }
  return e
}

function te(t, e, n, o = null) {
  Kt(t, e, 7, [n, o])
}

const jd = Ll();
let Fd = 0;

function Nd(t, e, n) {
  const o = t.type, i = (e ? e.appContext : t.appContext) || jd, s = {
    uid: Fd++,
    vnode: t,
    type: o,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new mc(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Bl(o, i),
    emitsOptions: Sl(o, i),
    emit: null,
    emitted: null,
    propsDefaults: rt,
    inheritAttrs: o.inheritAttrs,
    ctx: rt,
    data: rt,
    props: rt,
    attrs: rt,
    slots: rt,
    refs: rt,
    setupState: rt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Wc.bind(null, s), t.ce && t.ce(s), s
}

let xt = null;
const ts = () => xt || It;
let no, bi;
{
  const t = tl(), e = (n, o) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(o), s => {
      i.length > 1 ? i.forEach(r => r(s)) : i[0](s)
    }
  };
  no = e("__VUE_INSTANCE_SETTERS__", n => xt = n), bi = e("__VUE_SSR_SETTERS__", n => $o = n)
}
const Rn = t => {
  const e = xt;
  return no(t), t.scope.on(), () => {
    t.scope.off(), no(e)
  }
}, zs = () => {
  xt && xt.scope.off(), no(null)
};

function ql(t) {
  return t.vnode.shapeFlag & 4
}

let $o = !1;

function Vd(t, e = !1) {
  e && bi(e);
  const { props: n, children: o } = t.vnode, i = ql(t);
  _d(t, n, i, e), Cd(t, o);
  const s = i ? Ud(t, e) : void 0;
  return e && bi(!1), s
}

function Ud(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null), t.proxy = bl(new Proxy(t.ctx, md));
  const { setup: o } = n;
  if (o) {
    const i = t.setupContext = o.length > 1 ? qd(t) : null, s = Rn(t);
    Pe();
    const r = ye(o, t, 0, [t.props, i]);
    if (Le(), s(), Yr(r)) {
      if (r.then(zs, zs), e) return r.then(l => {
        Hs(t, l, e)
      }).catch(l => {
        yo(l, t, 0)
      });
      t.asyncDep = r
    } else Hs(t, r, e)
  } else Gl(t, e)
}

function Hs(t, e, n) {
  Y(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ut(e) && (t.setupState = xl(e)), Gl(t, n)
}

let Ds;

function Gl(t, e, n) {
  const o = t.type;
  if (!t.render) {
    if (!e && Ds && !o.render) {
      const i = o.template || Yi(t).template;
      if (i) {
        const { isCustomElement: s, compilerOptions: r } = t.appContext.config, {
          delimiters: l,
          compilerOptions: a
        } = o, c = vt(vt({ isCustomElement: s, delimiters: l }, r), a);
        o.render = Ds(i, c)
      }
    }
    t.render = o.render || Vt
  }
  {
    const i = Rn(t);
    Pe();
    try {
      gd(t)
    } finally {
      Le(), i()
    }
  }
}

function Wd(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
    get(e, n) {
      return Rt(t, "get", "$attrs"), e[n]
    }
  }))
}

function qd(t) {
  const e = n => {
    t.exposed = n || {}
  };
  return {
    get attrs() {
      return Wd(t)
    }, slots: t.slots, emit: t.emit, expose: e
  }
}

function Co(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(xl(bl(t.exposed)), {
    get(e, n) {
      if (n in e) return e[n];
      if (n in hn) return hn[n](t)
    }, has(e, n) {
      return n in e || n in hn
    }
  }))
}

function Gd(t) {
  return Y(t) && "__vccOpts" in t
}

const Nt = (t, e) => zc(t, e, $o);

function kt(t, e, n) {
  const o = arguments.length;
  return o === 2 ? ut(e) && !X(e) ? gi(e) ? st(t, null, [e]) : st(t, e) : st(t, null, e) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && gi(n) && (n = [n]), st(t, e, n))
}

const Kd = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/const Xd = "http://www.w3.org/2000/svg", Yd = "http://www.w3.org/1998/Math/MathML",
  me = typeof document < "u" ? document : null, js = me && me.createElement("template"), Zd = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    },
    createElement: (t, e, n, o) => {
      const i = e === "svg" ? me.createElementNS(Xd, t) : e === "mathml" ? me.createElementNS(Yd, t) : me.createElement(t, n ? { is: n } : void 0);
      return t === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i
    },
    createText: t => me.createTextNode(t),
    createComment: t => me.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => me.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, o, i, s) {
      const r = n ? n.previousSibling : e.lastChild;
      if (i && (i === s || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling));) ; else {
        js.innerHTML = o === "svg" ? "<svg>".concat(t, "</svg>") : o === "mathml" ? "<math>".concat(t, "</math>") : t;
        const l = js.content;
        if (o === "svg" || o === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a)
        }
        e.insertBefore(l, n)
      }
      return [r ? r.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
  }, Qd = Symbol("_vtc");

function Jd(t, e, n) {
  const o = t[Qd];
  o && (e = (e ? [e, ...o] : [...o]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

const Fs = Symbol("_vod"), tu = Symbol("_vsh"), eu = Symbol(""), nu = /(^|;)\s*display\s*:/;

function ou(t, e, n) {
  const o = t.style, i = ht(n);
  let s = !1;
  if (n && !i) {
    if (e) if (ht(e)) for (const r of e.split(";")) {
      const l = r.slice(0, r.indexOf(":")).trim();
      n[l] == null && Zn(o, l, "")
    } else for (const r in e) n[r] == null && Zn(o, r, "");
    for (const r in n) r === "display" && (s = !0), Zn(o, r, n[r])
  } else if (i) {
    if (e !== n) {
      const r = o[eu];
      r && (n += ";" + r), o.cssText = n, s = nu.test(n)
    }
  } else e && t.removeAttribute("style");
  Fs in t && (t[Fs] = s ? o.display : "", t[tu] && (o.display = "none"))
}

const Ns = /\s*!important$/;

function Zn(t, e, n) {
  if (X(n)) n.forEach(o => Zn(t, e, o)); else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n); else {
    const o = iu(t, e);
    Ns.test(n) ? t.setProperty(sn(o), n.replace(Ns, ""), "important") : t[o] = n
  }
}

const Vs = ["Webkit", "Moz", "ms"], jo = {};

function iu(t, e) {
  const n = jo[e];
  if (n) return n;
  let o = Ye(e);
  if (o !== "filter" && o in t) return jo[e] = o;
  o = Jr(o);
  for (let i = 0; i < Vs.length; i++) {
    const s = Vs[i] + o;
    if (s in t) return jo[e] = s
  }
  return e
}

const Us = "http://www.w3.org/1999/xlink";

function su(t, e, n, o, i) {
  if (o && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(Us, e.slice(6, e.length)) : t.setAttributeNS(Us, e, n); else {
    const s = pc(e);
    n == null || s && !el(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n)
  }
}

function ru(t, e, n, o, i, s, r) {
  if (e === "innerHTML" || e === "textContent") {
    o && r(o, i, s), t[e] = n == null ? "" : n;
    return
  }
  const l = t.tagName;
  if (e === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const c = l === "OPTION" ? t.getAttribute("value") || "" : t.value, d = n == null ? "" : n;
    (c !== d || !("_value" in t)) && (t.value = d), n == null && t.removeAttribute(e), t._value = n;
    return
  }
  let a = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = el(n) : n == null && c === "string" ? (n = "", a = !0) : c === "number" && (n = 0, a = !0)
  }
  try {
    t[e] = n
  } catch (c) {
  }
  a && t.removeAttribute(e)
}

function lu(t, e, n, o) {
  t.addEventListener(e, n, o)
}

function au(t, e, n, o) {
  t.removeEventListener(e, n, o)
}

const Ws = Symbol("_vei");

function cu(t, e, n, o, i = null) {
  const s = t[Ws] || (t[Ws] = {}), r = s[e];
  if (o && r) r.value = o; else {
    const [l, a] = du(e);
    if (o) {
      const c = s[e] = hu(o, i);
      lu(t, l, c, a)
    } else r && (au(t, l, r, a), s[e] = void 0)
  }
}

const qs = /(?:Once|Passive|Capture)$/;

function du(t) {
  let e;
  if (qs.test(t)) {
    e = {};
    let o;
    for (; o = t.match(qs);) t = t.slice(0, t.length - o[0].length), e[o[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : sn(t.slice(2)), e]
}

let Fo = 0;
const uu = Promise.resolve(), fu = () => Fo || (uu.then(() => Fo = 0), Fo = Date.now());

function hu(t, e) {
  const n = o => {
    if (!o._vts) o._vts = Date.now(); else if (o._vts <= n.attached) return;
    Kt(pu(o, n.value), e, 5, [o])
  };
  return n.value = t, n.attached = fu(), n
}

function pu(t, e) {
  if (X(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0
    }, e.map(o => i => !i._stopped && o && o(i))
  } else return e
}

const Gs = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
  mu = (t, e, n, o, i, s, r, l, a) => {
    const
    c = i === "svg";
    e === "class" ? Jd(t, o, c) : e === "style" ? ou(t, n, o) : po(e) ? Oi(e) || cu(t, e, n, o, r) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : gu(t, e, o, c)) ? ru(t, e, o, s, r, l, a) : (e === "true-value" ? t._trueValue = o : e === "false-value" && (t._falseValue = o), su(t, e, o, c))
  };

function gu(t, e, n, o) {
  if (o) return !!(e === "innerHTML" || e === "textContent" || e in t && Gs(e) && Y(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
  }
  return Gs(e) && ht(n) ? !1 : e in t
}

const bu = vt({ patchProp: mu }, Zd);
let Ks;

function vu() {
  return Ks || (Ks = Td(bu))
}

const yu = (...t) => {
  const e = vu().createApp(...t), { mount: n } = e;
  return e.mount = o => {
    const i = xu(o);
    if (!i) return;
    const s = e._component;
    !Y(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const r = n(i, !1, wu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r
  }, e
};

function wu(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function xu(t) {
  return ht(t) ? document.querySelector(t) : t
}

const ku = "modulepreload", _u = function (t) {
  return "/" + t
}, Xs = {}, Dt = function (e, n, o) {
  let i = Promise.resolve();
  if (n && n.length > 0) {
    const s = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"),
      l = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
    i = Promise.all(n.map(a => {
      if (a = _u(a), a in Xs) return;
      Xs[a] = !0;
      const c = a.endsWith(".css"), d = c ? '[rel="stylesheet"]' : "";
      if (!!o) for (let m = s.length - 1; m >= 0; m--) {
        const w = s[m];
        if (w.href === a && (!c || w.rel === "stylesheet")) return
      } else if (document.querySelector('link[href="'.concat(a, '"]').concat(d))) return;
      const f = document.createElement("link");
      if (f.rel = c ? "stylesheet" : ku, c || (f.as = "script", f.crossOrigin = ""), f.href = a, l && f.setAttribute("nonce", l), document.head.appendChild(f), c) return new Promise((m, w) => {
        f.addEventListener("load", m), f.addEventListener("error", () => w(new Error("Unable to preload CSS for ".concat(a))))
      })
    }))
  }
  return i.then(() => e()).catch(s => {
    const r = new Event("vite:preloadError", { cancelable: !0 });
    if (r.payload = s, window.dispatchEvent(r), !r.defaultPrevented) throw s
  })
}, le = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  formAssociated: !1,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0,
  experimentalSlotFixes: !1
};
let He, vi, Je, es = !1, oo = !1, ns = !1, Ht = !1, Ys = null, yi = !1;
const Eu = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 }, Kl = t => {
    const e = new URL(t, mt.$resourcesUrl$);
    return e.origin !== Pn.location.origin ? e.href : e.pathname
  }, Re = (t, e = "") => () => {
  }, $u = "slot-fb{display:contents}slot-fb[hidden]{display:none}", Zs = "http://www.w3.org/1999/xlink", Qs = {},
  Cu = "http://www.w3.org/2000/svg", Su = "http://www.w3.org/1999/xhtml", Tu = t => t != null,
  os = t => (t = typeof t, t === "object" || t === "function");

function Iu(t) {
  var e, n, o;
  return (o = (n = (e = t.head) === null || e === void 0 ? void 0 : e.querySelector('meta[name="csp-nonce"]')) === null || n === void 0 ? void 0 : n.getAttribute("content")) !== null && o !== void 0 ? o : void 0
}

const G = (t, e, ...n) => {
    let o = null, i = null, s = null, r = !1, l = !1;
    const a = [], c = u => {
      for (let f = 0; f < u.length; f++) o = u[f], Array.isArray(o) ? c(o) : o != null && typeof o != "boolean" && ((r = typeof t != "function" && !os(o)) && (o = String(o)), r && l ? a[a.length - 1].$text$ += o : a.push(r ? io(null, o) : o), l = r)
    };
    if (c(n), e) {
      e.key && (i = e.key), e.name && (s = e.name);
      {
        const u = e.className || e.class;
        u && (e.class = typeof u != "object" ? u : Object.keys(u).filter(f => u[f]).join(" "))
      }
    }
    if (typeof t == "function") return t(e === null ? {} : e, a, Au);
    const d = io(t, null);
    return d.$attrs$ = e, a.length > 0 && (d.$children$ = a), d.$key$ = i, d.$name$ = s, d
  }, io = (t, e) => {
    const n = { $flags$: 0, $tag$: t, $text$: e, $elm$: null, $children$: null };
    return n.$attrs$ = null, n.$key$ = null, n.$name$ = null, n
  }, jt = {}, Ru = t => t && t.$tag$ === jt,
  Au = { forEach: (t, e) => t.map(Js).forEach(e), map: (t, e) => t.map(Js).map(e).map(Pu) }, Js = t => ({
    vattrs: t.$attrs$,
    vchildren: t.$children$,
    vkey: t.$key$,
    vname: t.$name$,
    vtag: t.$tag$,
    vtext: t.$text$
  }), Pu = t => {
    if (typeof t.vtag == "function") {
      const n = Object.assign({}, t.vattrs);
      return t.vkey && (n.key = t.vkey), t.vname && (n.name = t.vname), G(t.vtag, n, ...t.vchildren || [])
    }
    const e = io(t.vtag, t.vtext);
    return e.$attrs$ = t.vattrs, e.$children$ = t.vchildren, e.$key$ = t.vkey, e.$name$ = t.vname, e
  }, Lu = t => ra.map(e => e(t)).find(e => !!e), Ou = t => ra.push(t), Bu = t => Oe(t).$modeName$,
  Mu = (t, e) => t != null && !os(t) ? e & 4 ? t === "false" ? !1 : t === "" || !!t : e & 2 ? parseFloat(t) : e & 1 ? String(t) : t : t,
  zu = t => t, $t = (t, e, n) => {
    const o = zu(t);
    return { emit: i => Hu(o, e, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: i }) }
  }, Hu = (t, e, n) => {
    const o = mt.ce(e, n);
    return t.dispatchEvent(o), o
  }, tr = new WeakMap, Du = (t, e, n) => {
    let o = ro.get(t);
    hf && n ? (o = o || new CSSStyleSheet, typeof o == "string" ? o = e : o.replaceSync(e)) : o = e, ro.set(t, o)
  }, ju = (t, e, n) => {
    var o;
    const i = Xl(e, n), s = ro.get(i);
    if (t = t.nodeType === 11 ? t : Xt, s) if (typeof s == "string") {
      t = t.head || t;
      let r = tr.get(t), l;
      if (r || tr.set(t, r = new Set), !r.has(i)) {
        {
          l = Xt.createElement("style"), l.innerHTML = s;
          const a = (o = mt.$nonce$) !== null && o !== void 0 ? o : Iu(Xt);
          a != null && l.setAttribute("nonce", a), t.insertBefore(l, t.querySelector("link"))
        }
        e.$flags$ & 4 && (l.innerHTML += $u), r && r.add(i)
      }
    } else t.adoptedStyleSheets.includes(s) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, s]);
    return i
  }, Fu = t => {
    const e = t.$cmpMeta$, n = t.$hostElement$, o = e.$flags$, i = Re("attachStyles", e.$tagName$),
      s = ju(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e, t.$modeName$);
    o & 10 && (n["s-sc"] = s, n.classList.add(s + "-h"), o & 2 && n.classList.add(s + "-s")), i()
  }, Xl = (t, e) => "sc-" + (e && t.$flags$ & 32 ? t.$tagName$ + "-" + e : t.$tagName$), er = (t, e, n, o, i, s) => {
    if (n !== o) {
      let r = rr(t, e), l = e.toLowerCase();
      if (e === "class") {
        const a = t.classList, c = nr(n), d = nr(o);
        a.remove(...c.filter(u => u && !d.includes(u))), a.add(...d.filter(u => u && !c.includes(u)))
      } else if (e === "style") {
        for (const a in n) (!o || o[a] == null) && (a.includes("-") ? t.style.removeProperty(a) : t.style[a] = "");
        for (const a in o) (!n || o[a] !== n[a]) && (a.includes("-") ? t.style.setProperty(a, o[a]) : t.style[a] = o[a])
      } else if (e !== "key") if (e === "ref") o && o(t); else if (!t.__lookupSetter__(e) && e[0] === "o" && e[1] === "n") {
        if (e[2] === "-" ? e = e.slice(3) : rr(Pn, l) ? e = l.slice(2) : e = l[2] + e.slice(3), n || o) {
          const a = e.endsWith(Yl);
          e = e.replace(Vu, ""), n && mt.rel(t, e, n, a), o && mt.ael(t, e, o, a)
        }
      } else {
        const a = os(o);
        if ((r || a && o !== null) && !i) try {
          if (t.tagName.includes("-")) t[e] = o; else {
            const d = o == null ? "" : o;
            e === "list" ? r = !1 : (n == null || t[e] != d) && (t[e] = d)
          }
        } catch (d) {
        }
        let c = !1;
        l !== (l = l.replace(/^xlink\:?/, "")) && (e = l, c = !0), o == null || o === !1 ? (o !== !1 || t.getAttribute(e) === "") && (c ? t.removeAttributeNS(Zs, e) : t.removeAttribute(e)) : (!r || s & 4 || i) && !a && (o = o === !0 ? "" : o, c ? t.setAttributeNS(Zs, e, o) : t.setAttribute(e, o))
      }
    }
  }, Nu = /\s/, nr = t => t ? t.split(Nu) : [], Yl = "Capture", Vu = new RegExp(Yl + "$"), Zl = (t, e, n, o) => {
    const i = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, s = t && t.$attrs$ || Qs,
      r = e.$attrs$ || Qs;
    for (o in s) o in r || er(i, o, s[o], void 0, n, e.$flags$);
    for (o in r) er(i, o, s[o], r[o], n, e.$flags$)
  }, so = (t, e, n, o) => {
    var i;
    const s = e.$children$[n];
    let r = 0, l, a, c;
    if (es || (ns = !0, s.$tag$ === "slot" && (He && o.classList.add(He + "-s"), s.$flags$ |= s.$children$ ? 2 : 1)), s.$text$ !== null) l = s.$elm$ = Xt.createTextNode(s.$text$); else if (s.$flags$ & 1) l = s.$elm$ = Xt.createTextNode(""); else {
      if (Ht || (Ht = s.$tag$ === "svg"), l = s.$elm$ = Xt.createElementNS(Ht ? Cu : Su, s.$flags$ & 2 ? "slot-fb" : s.$tag$), Ht && s.$tag$ === "foreignObject" && (Ht = !1), Zl(null, s, Ht), Tu(He) && l["s-si"] !== He && l.classList.add(l["s-si"] = He), s.$children$) for (r = 0; r < s.$children$.length; ++r) a = so(t, s, r, l), a && l.appendChild(a);
      s.$tag$ === "svg" ? Ht = !1 : l.tagName === "foreignObject" && (Ht = !0)
    }
    return l["s-hn"] = Je, s.$flags$ & 3 && (l["s-sr"] = !0, l["s-cr"] = vi, l["s-sn"] = s.$name$ || "", l["s-rf"] = (i = s.$attrs$) === null || i === void 0 ? void 0 : i.ref, c = t && t.$children$ && t.$children$[n], c && c.$tag$ === s.$tag$ && t.$elm$ && En(t.$elm$, !1)), l
  }, En = (t, e) => {
    mt.$flags$ |= 1;
    const n = Array.from(t.childNodes);
    if (t["s-sr"] && le.experimentalSlotFixes) {
      let o = t;
      for (; o = o.nextSibling;) o && o["s-sn"] === t["s-sn"] && o["s-sh"] === Je && n.push(o)
    }
    for (let o = n.length - 1; o >= 0; o--) {
      const i = n[o];
      i["s-hn"] !== Je && i["s-ol"] && (ta(i).insertBefore(i, is(i)), i["s-ol"].remove(), i["s-ol"] = void 0, i["s-sh"] = void 0, ns = !0), e && En(i, e)
    }
    mt.$flags$ &= -2
  }, Ql = (t, e, n, o, i, s) => {
    let r = t["s-cr"] && t["s-cr"].parentNode || t, l;
    for (r.shadowRoot && r.tagName === Je && (r = r.shadowRoot); i <= s; ++i) o[i] && (l = so(null, n, i, t), l && (o[i].$elm$ = l, r.insertBefore(l, is(e))))
  }, Jl = (t, e, n) => {
    for (let o = e; o <= n; ++o) {
      const i = t[o];
      if (i) {
        const s = i.$elm$;
        oa(i), s && (oo = !0, s["s-ol"] ? s["s-ol"].remove() : En(s, !0), s.remove())
      }
    }
  }, Uu = (t, e, n, o, i = !1) => {
    let s = 0, r = 0, l = 0, a = 0, c = e.length - 1, d = e[0], u = e[c], f = o.length - 1, m = o[0], w = o[f], v, x;
    for (; s <= c && r <= f;) if (d == null) d = e[++s]; else if (u == null) u = e[--c]; else if (m == null) m = o[++r]; else if (w == null) w = o[--f]; else if (Nn(d, m, i)) De(d, m, i), d = e[++s], m = o[++r]; else if (Nn(u, w, i)) De(u, w, i), u = e[--c], w = o[--f]; else if (Nn(d, w, i)) (d.$tag$ === "slot" || w.$tag$ === "slot") && En(d.$elm$.parentNode, !1), De(d, w, i), t.insertBefore(d.$elm$, u.$elm$.nextSibling), d = e[++s], w = o[--f]; else if (Nn(u, m, i)) (d.$tag$ === "slot" || w.$tag$ === "slot") && En(u.$elm$.parentNode, !1), De(u, m, i), t.insertBefore(u.$elm$, d.$elm$), u = e[--c], m = o[++r]; else {
      for (l = -1, a = s; a <= c; ++a) if (e[a] && e[a].$key$ !== null && e[a].$key$ === m.$key$) {
        l = a;
        break
      }
      l >= 0 ? (x = e[l], x.$tag$ !== m.$tag$ ? v = so(e && e[r], n, l, t) : (De(x, m, i), e[l] = void 0, v = x.$elm$), m = o[++r]) : (v = so(e && e[r], n, r, t), m = o[++r]), v && ta(d.$elm$).insertBefore(v, is(d.$elm$))
    }
    s > c ? Ql(t, o[f + 1] == null ? null : o[f + 1].$elm$, n, o, r, f) : r > f && Jl(e, s, c)
  },
  Nn = (t, e, n = !1) => t.$tag$ === e.$tag$ ? t.$tag$ === "slot" ? t.$name$ === e.$name$ : n ? !0 : t.$key$ === e.$key$ : !1,
  is = t => t && t["s-ol"] || t, ta = t => (t["s-ol"] ? t["s-ol"] : t).parentNode, De = (t, e, n = !1) => {
    const o = e.$elm$ = t.$elm$, i = t.$children$, s = e.$children$, r = e.$tag$, l = e.$text$;
    let a;
    l === null ? (Ht = r === "svg" ? !0 : r === "foreignObject" ? !1 : Ht, r === "slot" && !es || Zl(t, e, Ht), i !== null && s !== null ? Uu(o, i, e, s, n) : s !== null ? (t.$text$ !== null && (o.textContent = ""), Ql(o, null, e, s, 0, s.length - 1)) : i !== null && Jl(i, 0, i.length - 1), Ht && r === "svg" && (Ht = !1)) : (a = o["s-cr"]) ? a.parentNode.textContent = l : t.$text$ !== l && (o.data = l)
  }, ea = t => {
    const e = t.childNodes;
    for (const n of e) if (n.nodeType === 1) {
      if (n["s-sr"]) {
        const o = n["s-sn"];
        n.hidden = !1;
        for (const i of e) if (i !== n) {
          if (i["s-hn"] !== n["s-hn"] || o !== "") {
            if (i.nodeType === 1 && (o === i.getAttribute("slot") || o === i["s-sn"])) {
              n.hidden = !0;
              break
            }
          } else if (i.nodeType === 1 || i.nodeType === 3 && i.textContent.trim() !== "") {
            n.hidden = !0;
            break
          }
        }
      }
      ea(n)
    }
  }, re = [], na = t => {
    let e, n, o;
    for (const i of t.childNodes) {
      if (i["s-sr"] && (e = i["s-cr"]) && e.parentNode) {
        n = e.parentNode.childNodes;
        const s = i["s-sn"];
        for (o = n.length - 1; o >= 0; o--) if (e = n[o], !e["s-cn"] && !e["s-nr"] && e["s-hn"] !== i["s-hn"] && !le.experimentalSlotFixes) if (or(e, s)) {
          let r = re.find(l => l.$nodeToRelocate$ === e);
          oo = !0, e["s-sn"] = e["s-sn"] || s, r ? (r.$nodeToRelocate$["s-sh"] = i["s-hn"], r.$slotRefNode$ = i) : (e["s-sh"] = i["s-hn"], re.push({
            $slotRefNode$: i,
            $nodeToRelocate$: e
          })), e["s-sr"] && re.map(l => {
            or(l.$nodeToRelocate$, e["s-sn"]) && (r = re.find(a => a.$nodeToRelocate$ === e), r && !l.$slotRefNode$ && (l.$slotRefNode$ = r.$slotRefNode$))
          })
        } else re.some(r => r.$nodeToRelocate$ === e) || re.push({ $nodeToRelocate$: e })
      }
      i.nodeType === 1 && na(i)
    }
  },
  or = (t, e) => t.nodeType === 1 ? t.getAttribute("slot") === null && e === "" || t.getAttribute("slot") === e : t["s-sn"] === e ? !0 : e === "",
  oa = t => {
    t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(oa)
  }, Wu = (t, e, n = !1) => {
    var o, i, s, r, l;
    const a = t.$hostElement$, c = t.$cmpMeta$, d = t.$vnode$ || io(null, null), u = Ru(e) ? e : G(null, null, e);
    if (Je = a.tagName, c.$attrsToReflect$ && (u.$attrs$ = u.$attrs$ || {}, c.$attrsToReflect$.map(([f, m]) => u.$attrs$[m] = a[f])), n && u.$attrs$) for (const f of Object.keys(u.$attrs$)) a.hasAttribute(f) && !["key", "ref", "style", "class"].includes(f) && (u.$attrs$[f] = a[f]);
    u.$tag$ = null, u.$flags$ |= 4, t.$vnode$ = u, u.$elm$ = d.$elm$ = a.shadowRoot || a, He = a["s-sc"], es = (c.$flags$ & 1) !== 0, vi = a["s-cr"], oo = !1, De(d, u, n);
    {
      if (mt.$flags$ |= 1, ns) {
        na(u.$elm$);
        for (const f of re) {
          const m = f.$nodeToRelocate$;
          if (!m["s-ol"]) {
            const w = Xt.createTextNode("");
            w["s-nr"] = m, m.parentNode.insertBefore(m["s-ol"] = w, m)
          }
        }
        for (const f of re) {
          const m = f.$nodeToRelocate$, w = f.$slotRefNode$;
          if (w) {
            const v = w.parentNode;
            let x = w.nextSibling;
            {
              let b = (o = m["s-ol"]) === null || o === void 0 ? void 0 : o.previousSibling;
              for (; b;) {
                let k = (i = b["s-nr"]) !== null && i !== void 0 ? i : null;
                if (k && k["s-sn"] === m["s-sn"] && v === k.parentNode && (k = k.nextSibling, !k || !k["s-nr"])) {
                  x = k;
                  break
                }
                b = b.previousSibling
              }
            }
            (!x && v !== m.parentNode || m.nextSibling !== x) && m !== x && (!m["s-hn"] && m["s-ol"] && (m["s-hn"] = m["s-ol"].parentNode.nodeName), v.insertBefore(m, x), m.nodeType === 1 && (m.hidden = (s = m["s-ih"]) !== null && s !== void 0 ? s : !1)), m && typeof w["s-rf"] == "function" && w["s-rf"](m)
          } else m.nodeType === 1 && (n && (m["s-ih"] = (r = m.hidden) !== null && r !== void 0 ? r : !1), m.hidden = !0)
        }
      }
      oo && ea(u.$elm$), mt.$flags$ &= -2, re.length = 0
    }
    if (le.experimentalScopedSlotChanges && c.$flags$ & 2) for (const f of u.$elm$.childNodes) f["s-hn"] !== Je && !f["s-sh"] && (n && f["s-ih"] == null && (f["s-ih"] = (l = f.hidden) !== null && l !== void 0 ? l : !1), f.hidden = !0);
    vi = void 0
  }, qu = (t, e) => {
  }, ss = (t, e) => (t.$flags$ |= 16, qu(t, t.$ancestorComponent$), xe(() => Gu(t, e))), Gu = (t, e) => {
    const n = t.$hostElement$, o = Re("scheduleUpdate", t.$cmpMeta$.$tagName$), i = n;
    let s;
    return e ? s = Xe(i, "componentWillLoad") : s = Xe(i, "componentWillUpdate"), s = ir(s, () => Xe(i, "componentWillRender")), o(), ir(s, () => Xu(t, i, e))
  }, ir = (t, e) => Ku(t) ? t.then(e) : e(), Ku = t => t instanceof Promise || t && t.then && typeof t.then == "function",
  Xu = async (t, e, n) => {
    const o = t.$hostElement$, i = Re("update", t.$cmpMeta$.$tagName$);
    o["s-rc"], n && Fu(t);
    const s = Re("render", t.$cmpMeta$.$tagName$);
    Yu(t, e, o, n), s(), i(), Zu(t)
  }, Yu = (t, e, n, o) => {
    try {
      Ys = e, e = e.render && e.render(), t.$flags$ &= -17, t.$flags$ |= 2, (le.hasRenderFn || le.reflect) && (le.vdomRender || le.reflect) && (le.hydrateServerSide || Wu(t, e, o))
    } catch (a) {
      An(a, t.$hostElement$)
    }
    return Ys = null, null
  }, Zu = t => {
    const e = t.$cmpMeta$.$tagName$, n = t.$hostElement$, o = Re("postUpdate", e), i = n;
    t.$ancestorComponent$, Xe(i, "componentDidRender"), t.$flags$ & 64 ? (Xe(i, "componentDidUpdate"), o()) : (t.$flags$ |= 64, Xe(i, "componentDidLoad"), o())
  }, wi = t => {
    {
      const e = Oe(t), n = e.$hostElement$.isConnected;
      return n && (e.$flags$ & 18) === 2 && ss(e, !1), n
    }
  }, Xe = (t, e, n) => {
    if (t && t[e]) try {
      return t[e](n)
    } catch (o) {
      An(o)
    }
  }, Qu = (t, e) => Oe(t).$instanceValues$.get(e), Ju = (t, e, n, o) => {
    const i = Oe(t), s = t, r = i.$instanceValues$.get(e), l = i.$flags$, a = s;
    n = Mu(n, o.$members$[e][0]);
    const c = Number.isNaN(r) && Number.isNaN(n);
    if (n !== r && !c) {
      i.$instanceValues$.set(e, n);
      {
        if (o.$watchers$ && l & 128) {
          const u = o.$watchers$[e];
          u && u.map(f => {
            try {
              a[f](n, r, e)
            } catch (m) {
              An(m, s)
            }
          })
        }
        if ((l & 18) === 2) {
          if (a.componentShouldUpdate && a.componentShouldUpdate(n, r, e) === !1) return;
          ss(i, !1)
        }
      }
    }
  }, tf = (t, e, n) => {
    var o;
    const i = t.prototype;
    if (e.$members$) {
      t.watchers && (e.$watchers$ = t.watchers);
      const s = Object.entries(e.$members$);
      s.map(([r, [l]]) => {
        (l & 31 || l & 32) && Object.defineProperty(i, r, {
          get() {
            return Qu(this, r)
          }, set(a) {
            Ju(this, r, a, e)
          }, configurable: !0, enumerable: !0
        })
      });
      {
        const r = new Map;
        i.attributeChangedCallback = function (l, a, c) {
          mt.jmp(() => {
            var d;
            const u = r.get(l);
            if (this.hasOwnProperty(u)) c = this[u], delete this[u]; else {
              if (i.hasOwnProperty(u) && typeof this[u] == "number" && this[u] == c) return;
              if (u == null) {
                const f = Oe(this), m = f == null ? void 0 : f.$flags$;
                if (m && !(m & 8) && m & 128 && c !== a) {
                  const v = this, x = (d = e.$watchers$) === null || d === void 0 ? void 0 : d[l];
                  x == null || x.forEach(b => {
                    v[b] != null && v[b].call(v, c, a, l)
                  })
                }
                return
              }
            }
            this[u] = c === null && typeof this[u] == "boolean" ? !1 : c
          })
        }, t.observedAttributes = Array.from(new Set([...Object.keys((o = e.$watchers$) !== null && o !== void 0 ? o : {}), ...s.filter(([l, a]) => a[0] & 15).map(([l, a]) => {
          var c;
          const d = a[1] || l;
          return r.set(d, l), a[0] & 512 && ((c = e.$attrsToReflect$) === null || c === void 0 || c.push([l, d])), d
        })]))
      }
    }
    return t
  }, ef = async (t, e, n, o) => {
    let i;
    if (!(e.$flags$ & 32) && (e.$flags$ |= 32, n.$lazyBundleId$, i = t.constructor, customElements.whenDefined(n.$tagName$).then(() => e.$flags$ |= 128), i.style)) {
      let r = i.style;
      typeof r != "string" && (r = r[e.$modeName$ = Lu(t)]);
      const l = Xl(n, e.$modeName$);
      if (!ro.has(l)) {
        const a = Re("registerStyles", n.$tagName$);
        Du(l, r, !!(n.$flags$ & 1)), a()
      }
    }
    e.$ancestorComponent$, ss(e, !0)
  }, sr = t => {
  }, nf = t => {
    if (!(mt.$flags$ & 1)) {
      const e = Oe(t), n = e.$cmpMeta$, o = Re("connectedCallback", n.$tagName$);
      e.$flags$ & 1 ? (ia(t, e, n.$listeners$), e != null && e.$lazyInstance$ ? sr(e.$lazyInstance$) : e != null && e.$onReadyPromise$ && e.$onReadyPromise$.then(() => sr(e.$lazyInstance$))) : (e.$flags$ |= 1, n.$flags$ & 12 && of(t), n.$members$ && Object.entries(n.$members$).map(([i, [s]]) => {
        if (s & 31 && t.hasOwnProperty(i)) {
          const r = t[i];
          delete t[i], t[i] = r
        }
      }), ef(t, e, n)), o()
    }
  }, of = t => {
    const e = t["s-cr"] = Xt.createComment("");
    e["s-cn"] = !0, t.insertBefore(e, t.firstChild)
  }, sf = async t => {
    if (!(mt.$flags$ & 1)) {
      const e = Oe(t);
      e.$rmListeners$ && (e.$rmListeners$.map(n => n()), e.$rmListeners$ = void 0)
    }
  }, Lt = (t, e) => {
    const n = { $flags$: e[0], $tagName$: e[1] };
    n.$members$ = e[2], n.$listeners$ = e[3], n.$watchers$ = t.$watchers$, n.$attrsToReflect$ = [];
    const o = t.prototype.connectedCallback, i = t.prototype.disconnectedCallback;
    return Object.assign(t.prototype, {
      __registerHost() {
        cf(this, n)
      }, connectedCallback() {
        nf(this), o && o.call(this)
      }, disconnectedCallback() {
        sf(this), i && i.call(this)
      }, __attachShadow() {
        this.attachShadow({ mode: "open", delegatesFocus: !!(n.$flags$ & 16) })
      }
    }), t.is = n.$tagName$, tf(t, n)
  }, ia = (t, e, n, o) => {
    n && n.map(([i, s, r]) => {
      const l = lf(t, i), a = rf(e, r), c = af(i);
      mt.ael(l, s, a, c), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => mt.rel(l, s, a, c))
    })
  }, rf = (t, e) => n => {
    try {
      le.lazyLoad || t.$hostElement$[e](n)
    } catch (o) {
      An(o)
    }
  }, lf = (t, e) => e & 4 ? Xt : e & 8 ? Pn : e & 16 ? Xt.body : t,
  af = t => uf ? { passive: (t & 1) !== 0, capture: (t & 2) !== 0 } : (t & 2) !== 0, sa = new WeakMap,
  Oe = t => sa.get(t), cf = (t, e) => {
    const n = { $flags$: 0, $hostElement$: t, $cmpMeta$: e, $instanceValues$: new Map };
    return ia(t, n, e.$listeners$), sa.set(t, n)
  }, rr = (t, e) => e in t, An = (t, e) => (0, console.error)(t, e), ro = new Map, ra = [],
  Pn = typeof window < "u" ? window : {}, Xt = Pn.document || { head: {} }, Ot = Pn.HTMLElement || class {
  }, mt = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: t => t(),
    raf: t => requestAnimationFrame(t),
    ael: (t, e, n, o) => t.addEventListener(e, n, o),
    rel: (t, e, n, o) => t.removeEventListener(e, n, o),
    ce: (t, e) => new CustomEvent(t, e)
  }, df = t => {
    Object.assign(mt, t)
  }, uf = (() => {
    let t = !1;
    try {
      Xt.addEventListener("e", null, Object.defineProperty({}, "passive", {
        get() {
          t = !0
        }
      }))
    } catch (e) {
    }
    return t
  })(), ff = t => Promise.resolve(t), hf = (() => {
    try {
      return new CSSStyleSheet, typeof new CSSStyleSheet().replaceSync == "function"
    } catch (t) {
    }
    return !1
  })(), xi = [], la = [], aa = (t, e) => n => {
    t.push(n), yi || (yi = !0, e && mt.$flags$ & 4 ? pf(ki) : mt.raf(ki))
  }, lr = t => {
    for (let e = 0; e < t.length; e++) try {
      t[e](performance.now())
    } catch (n) {
      An(n)
    }
    t.length = 0
  }, ki = () => {
    lr(xi), lr(la), (yi = xi.length > 0) && mt.raf(ki)
  }, pf = t => ff().then(t), $n = aa(xi, !1), xe = aa(la, !0);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const lo = (t, e) => {
    t.componentOnReady ? t.componentOnReady().then(n => e(n)) : ua(() => e(t))
  }, _i = t => t.componentOnReady !== void 0, ca = (t, e = []) => {
    const n = {};
    return e.forEach(o => {
      t.hasAttribute(o) && (t.getAttribute(o) !== null && (n[o] = t.getAttribute(o)), t.removeAttribute(o))
    }), n
  },
  mf = ["role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
  da = (t, e) => {
    let n = mf;
    return e && e.length > 0 && (n = n.filter(o => !e.includes(o))), ca(t, n)
  }, nb = (t, e, n, o) => {
    var i;
    if (typeof window < "u") {
      const s = window, r = (i = s == null ? void 0 : s.Ionic) === null || i === void 0 ? void 0 : i.config;
      if (r) {
        const l = r.get("_ael");
        if (l) return l(t, e, n, o);
        if (r._ael) return r._ael(t, e, n, o)
      }
    }
    return t.addEventListener(e, n, o)
  }, ob = (t, e, n, o) => {
    var i;
    if (typeof window < "u") {
      const s = window, r = (i = s == null ? void 0 : s.Ionic) === null || i === void 0 ? void 0 : i.config;
      if (r) {
        const l = r.get("_rel");
        if (l) return l(t, e, n, o);
        if (r._rel) return r._rel(t, e, n, o)
      }
    }
    return t.removeEventListener(e, n, o)
  },
  ua = t => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(t) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : setTimeout(t),
  fa = (t, e, n) => Math.max(t, Math.min(e, n)), St = (t, e) => {
    if (!t) {
      const n = "ASSERT: " + e;
      console.error(n);
      debugger;
      throw new Error(n)
    }
  }, ib = t => t.timeStamp || Date.now(), sb = t => {
    if (t) {
      const e = t.changedTouches;
      if (e && e.length > 0) {
        const n = e[0];
        return { x: n.clientX, y: n.clientY }
      }
      if (t.pageX !== void 0) return { x: t.pageX, y: t.pageY }
    }
    return { x: 0, y: 0 }
  }, ha = (t, e) => {
    if (t != null || (t = {}), e != null || (e = {}), t === e) return !0;
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !1;
    for (const o of n) if (!(o in e) || t[o] !== e[o]) return !1;
    return !0
  };/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gf = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
  bf = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class vf {
  constructor() {
    this.m = new Map
  }

  reset(e) {
    this.m = new Map(Object.entries(e))
  }

  get(e, n) {
    const o = this.m.get(e);
    return o !== void 0 ? o : n
  }

  getBoolean(e, n = !1) {
    const o = this.m.get(e);
    return o === void 0 ? n : typeof o == "string" ? o === "true" : !!o
  }

  getNumber(e, n) {
    const o = parseFloat(this.m.get(e));
    return isNaN(o) ? n !== void 0 ? n : NaN : o
  }

  set(e, n) {
    this.m.set(e, n)
  }
}

const it = new vf, yf = t => {
    try {
      const e = t.sessionStorage.getItem(pa);
      return e !== null ? JSON.parse(e) : {}
    } catch (e) {
      return {}
    }
  }, wf = (t, e) => {
    try {
      t.sessionStorage.setItem(pa, JSON.stringify(e))
    } catch (n) {
      return
    }
  }, xf = t => {
    const e = {};
    return t.location.search.slice(1).split("&").map(n => n.split("=")).map(([n, o]) => [decodeURIComponent(n), decodeURIComponent(o)]).filter(([n]) => kf(n, ar)).map(([n, o]) => [n.slice(ar.length), o]).forEach(([n, o]) => {
      e[n] = o
    }), e
  }, kf = (t, e) => t.substr(0, e.length) === e, ar = "ionic:", pa = "ionic-persist-config", _f = t => ma(t),
  be = (t, e) => (typeof t == "string" && (e = t, t = void 0), _f(t).includes(e)), ma = (t = window) => {
    if (typeof t > "u") return [];
    t.Ionic = t.Ionic || {};
    let e = t.Ionic.platforms;
    return e == null && (e = t.Ionic.platforms = Ef(t), e.forEach(n => t.document.documentElement.classList.add("plt-".concat(n)))), e
  }, Ef = t => {
    const e = it.get("platform");
    return Object.keys(cr).filter(n => {
      const o = e == null ? void 0 : e[n];
      return typeof o == "function" ? o(t) : cr[n](t)
    })
  }, $f = t => So(t) && !ba(t), rs = t => !!(Ae(t, /iPad/i) || Ae(t, /Macintosh/i) && So(t)), Cf = t => Ae(t, /iPhone/i),
  Sf = t => Ae(t, /iPhone|iPod/i) || rs(t), ga = t => Ae(t, /android|sink/i), Tf = t => ga(t) && !Ae(t, /mobile/i),
  If = t => {
    const e = t.innerWidth, n = t.innerHeight, o = Math.min(e, n), i = Math.max(e, n);
    return o > 390 && o < 520 && i > 620 && i < 800
  }, Rf = t => {
    const e = t.innerWidth, n = t.innerHeight, o = Math.min(e, n), i = Math.max(e, n);
    return rs(t) || Tf(t) || o > 460 && o < 820 && i > 780 && i < 1400
  }, So = t => Of(t, "(any-pointer:coarse)"), Af = t => !So(t), ba = t => va(t) || ya(t),
  va = t => !!(t.cordova || t.phonegap || t.PhoneGap), ya = t => {
    const e = t.Capacitor;
    return !!(e != null && e.isNative)
  }, Pf = t => Ae(t, /electron/i), Lf = t => {
    var e;
    return !!(!((e = t.matchMedia) === null || e === void 0) && e.call(t, "(display-mode: standalone)").matches || t.navigator.standalone)
  }, Ae = (t, e) => e.test(t.navigator.userAgent), Of = (t, e) => {
    var n;
    return (n = t.matchMedia) === null || n === void 0 ? void 0 : n.call(t, e).matches
  }, cr = {
    ipad: rs,
    iphone: Cf,
    ios: Sf,
    android: ga,
    phablet: If,
    tablet: Rf,
    cordova: va,
    capacitor: ya,
    electron: Pf,
    pwa: Lf,
    mobile: So,
    mobileweb: $f,
    desktop: Af,
    hybrid: ba
  };
let je;
const bt = t => t && Bu(t) || je, Bf = (t = {}) => {
  if (typeof window > "u") return;
  const e = window.document, n = window, o = n.Ionic = n.Ionic || {}, i = {};
  t._ael && (i.ael = t._ael), t._rel && (i.rel = t._rel), t._ce && (i.ce = t._ce), df(i);
  const s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, yf(n)), { persistConfig: !1 }), o.config), xf(n)), t);
  it.reset(s), it.getBoolean("persistConfig") && wf(n, s), ma(n), o.config = it, o.mode = je = it.get("mode", e.documentElement.getAttribute("mode") || (be(n, "ios") ? "ios" : "md")), it.set("mode", je), e.documentElement.setAttribute("mode", je), e.documentElement.classList.add(je), it.getBoolean("_testing") && it.set("animated", !1);
  const r = a => {
    var c;
    return (c = a.tagName) === null || c === void 0 ? void 0 : c.startsWith("ION-")
  }, l = a => ["ios", "md"].includes(a);
  Ou(a => {
    for (; a;) {
      const c = a.mode || a.getAttribute("mode");
      if (c) {
        if (l(c)) return c;
        r(a) && console.warn('Invalid ionic mode: "' + c + '", expected: "ios" or "md"')
      }
      a = a.parentElement
    }
    return je
  })
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let No;
const Mf = () => {
    if (typeof window > "u") return new Map;
    if (!No) {
      const t = window;
      t.Ionicons = t.Ionicons || {}, No = t.Ionicons.map = t.Ionicons.map || new Map
    }
    return No
  }, zf = t => {
    let e = Vo(t.src);
    return e || (e = wa(t.name, t.icon, t.mode, t.ios, t.md), e ? Hf(e, t) : t.icon && (e = Vo(t.icon), e || (e = Vo(t.icon[t.mode]), e)) ? e : null)
  }, Hf = (t, e) => {
    const n = Mf().get(t);
    if (n) return n;
    try {
      return Kl("svg/".concat(t, ".svg"))
    } catch (o) {
      console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(t, '". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'), e)
    }
  },
  wa = (t, e, n, o, i) => (n = (n && Vn(n)) === "ios" ? "ios" : "md", o && n === "ios" ? t = Vn(o) : i && n === "md" ? t = Vn(i) : (!t && e && !xa(e) && (t = e), ao(t) && (t = Vn(t))), !ao(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t),
  Vo = t => ao(t) && (t = t.trim(), xa(t)) ? t : null, xa = t => t.length > 0 && /(\/|\.)/.test(t),
  ao = t => typeof t == "string", Vn = t => t.toLowerCase(), Df = (t, e = []) => {
    const n = {};
    return e.forEach(o => {
      t.hasAttribute(o) && (t.getAttribute(o) !== null && (n[o] = t.getAttribute(o)), t.removeAttribute(o))
    }), n
  },
  jf = t => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl",
  Ff = t => {
    const e = document.createElement("div");
    e.innerHTML = t;
    for (let o = e.childNodes.length - 1; o >= 0; o--) e.childNodes[o].nodeName.toLowerCase() !== "svg" && e.removeChild(e.childNodes[o]);
    const n = e.firstElementChild;
    if (n && n.nodeName.toLowerCase() === "svg") {
      const o = n.getAttribute("class") || "";
      if (n.setAttribute("class", (o + " s-ion-icon").trim()), ka(n)) return e.innerHTML
    }
    return ""
  }, ka = t => {
    if (t.nodeType === 1) {
      if (t.nodeName.toLowerCase() === "script") return !1;
      for (let e = 0; e < t.attributes.length; e++) {
        const n = t.attributes[e].name;
        if (ao(n) && n.toLowerCase().indexOf("on") === 0) return !1
      }
      for (let e = 0; e < t.childNodes.length; e++) if (!ka(t.childNodes[e])) return !1
    }
    return !0
  }, Nf = t => t.startsWith("data:image/svg+xml"), Vf = t => t.indexOf(";utf8,") !== -1, Ce = new Map, dr = new Map;
let Uo;
const Uf = (t, e) => {
    let n = dr.get(t);
    if (!n) if (typeof fetch < "u" && typeof document < "u") if (Nf(t) && Vf(t)) {
      Uo || (Uo = new DOMParser);
      const i = Uo.parseFromString(t, "text/html").querySelector("svg");
      return i && Ce.set(t, i.outerHTML), Promise.resolve()
    } else n = fetch(t).then(o => {
      if (o.ok) return o.text().then(i => {
        i && e !== !1 && (i = Ff(i)), Ce.set(t, i || "")
      });
      Ce.set(t, "")
    }), dr.set(t, n); else return Ce.set(t, ""), Promise.resolve();
    return n
  },
  Wf = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
  qf = Wf, Gf = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = Kf(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
    }

    static get assetsDirs() {
      return ["svg"]
    }

    static get watchers() {
      return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }
    }

    static get style() {
      return qf
    }

    get el() {
      return this
    }

    componentWillLoad() {
      this.inheritedAttributes = Df(this.el, ["aria-label"])
    }

    connectedCallback() {
      this.waitUntilVisible(this.el, "50px", () => {
        this.isVisible = !0, this.loadIcon()
      })
    }

    componentDidLoad() {
      this.didLoadIcon || this.loadIcon()
    }

    disconnectedCallback() {
      this.io && (this.io.disconnect(), this.io = void 0)
    }

    waitUntilVisible(e, n, o) {
      if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
        const i = this.io = new window.IntersectionObserver(s => {
          s[0].isIntersecting && (i.disconnect(), this.io = void 0, o())
        }, { rootMargin: n });
        i.observe(e)
      } else o()
    }

    loadIcon() {
      if (this.isVisible) {
        const e = zf(this);
        e && (Ce.has(e) ? this.svgContent = Ce.get(e) : Uf(e, this.sanitize).then(() => this.svgContent = Ce.get(e)), this.didLoadIcon = !0)
      }
      this.iconName = wa(this.name, this.icon, this.mode, this.ios, this.md)
    }

    render() {
      const { flipRtl: e, iconName: n, inheritedAttributes: o, el: i } = this, s = this.mode || "md",
        r = n ? (n.includes("arrow") || n.includes("chevron")) && e !== !1 : !1, l = e || r;
      return G(jt, Object.assign({
        role: "img",
        class: Object.assign(Object.assign({ [s]: !0 }, Xf(this.color)), {
          ["icon-".concat(this.size)]: !!this.size,
          "flip-rtl": l,
          "icon-rtl": l && jf(i)
        })
      }, o), this.svgContent ? G("div", {
        class: "icon-inner",
        innerHTML: this.svgContent
      }) : G("div", { class: "icon-inner" }))
    }
  }, [1, "ion-icon", {
    mode: [1025],
    color: [1],
    ios: [1],
    md: [1],
    flipRtl: [4, "flip-rtl"],
    name: [513],
    src: [1],
    icon: [8],
    size: [1],
    lazy: [4],
    sanitize: [4],
    svgContent: [32],
    isVisible: [32]
  }, void 0, { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }]),
  Kf = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md",
  Xf = t => t ? { "ion-color": !0, ["ion-color-".concat(t)]: !0 } : null;

function Yf() {
  if (typeof customElements > "u") return;
  ["ion-icon"].forEach(e => {
    switch (e) {
      case"ion-icon":
        customElements.get(e) || customElements.define(e, Gf);
        break
    }
  })
}/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Zf = (t, ...e) => console.warn("[Ionic Warning]: ".concat(t), ...e),
  Qf = (t, ...e) => console.error("<".concat(t.tagName.toLowerCase(), "> must be used inside ").concat(e.join(" or "), "."));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const tn = (t, e) => e.closest(t) !== null, rn = (t, e) => typeof t == "string" && t.length > 0 ? Object.assign({
  "ion-color": !0,
  ["ion-color-".concat(t)]: !0
}, e) : e, Jf = /^[a-z][a-z0-9+\-.]*:/, th = async (t, e, n, o) => {
  if (t != null && t[0] !== "#" && !Jf.test(t)) {
    const i = document.querySelector("ion-router");
    if (i) return e != null && e.preventDefault(), i.push(t, n, o)
  }
  return !1
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const eh = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",
  nh = eh, oh = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded"
    }

    static get style() {
      return nh
    }

    get unbounded() {
      return this.type === "unbounded"
    }

    get el() {
      return this
    }

    async addRipple(e, n) {
      return new Promise(o => {
        $n(() => {
          const i = this.el.getBoundingClientRect(), s = i.width, r = i.height, l = Math.sqrt(s * s + r * r),
            a = Math.max(r, s), c = this.unbounded ? a : l + sh, d = Math.floor(a * rh), u = c / d;
          let f = e - i.left, m = n - i.top;
          this.unbounded && (f = s * .5, m = r * .5);
          const w = f - d * .5, v = m - d * .5, x = s * .5 - f, b = r * .5 - m;
          xe(() => {
            const k = document.createElement("div");
            k.classList.add("ripple-effect");
            const S = k.style;
            S.top = v + "px", S.left = w + "px", S.width = S.height = d + "px", S.setProperty("--final-scale", "".concat(u)), S.setProperty("--translate-end", "".concat(x, "px, ").concat(b, "px")), (this.el.shadowRoot || this.el).appendChild(k), setTimeout(() => {
              o(() => {
                ih(k)
              })
            }, 325)
          })
        })
      })
    }

    render() {
      const e = bt(this);
      return G(jt, {
        key: "9f2578664e5ff8a0a7e27cd90b2339bd430e72b8",
        role: "presentation",
        class: { [e]: !0, unbounded: this.unbounded }
      })
    }
  }, [1, "ion-ripple-effect", { type: [1], addRipple: [64] }]), ih = t => {
    t.classList.add("fade-out"), setTimeout(() => {
      t.remove()
    }, 200)
  }, sh = 10, rh = .5;

function _a() {
  if (typeof customElements > "u") return;
  ["ion-ripple-effect"].forEach(e => {
    switch (e) {
      case"ion-ripple-effect":
        customElements.get(e) || customElements.define(e, oh);
        break
    }
  })
}/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Un = typeof window < "u" ? window : void 0;
Un && (Un.CSS && Un.CSS.supports && Un.CSS.supports("--a: 0"));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const lh = t => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ah = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
  ch = ah, dh = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionScrollStart = $t(this, "ionScrollStart", 7), this.ionScroll = $t(this, "ionScroll", 7), this.ionScrollEnd = $t(this, "ionScrollEnd", 7), this.watchDog = null, this.isScrolling = !1, this.lastScroll = 0, this.queued = !1, this.cTop = -1, this.cBottom = -1, this.isMainContent = !0, this.resizeTimeout = null, this.tabsElement = null, this.detail = {
        scrollTop: 0,
        scrollLeft: 0,
        type: "scroll",
        event: void 0,
        startX: 0,
        startY: 0,
        startTime: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        currentTime: 0,
        data: void 0,
        isScrolling: !0
      }, this.color = void 0, this.fullscreen = !1, this.forceOverscroll = void 0, this.scrollX = !1, this.scrollY = !0, this.scrollEvents = !1
    }

    static get style() {
      return ch
    }

    get el() {
      return this
    }

    connectedCallback() {
      if (this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null, _i(this.el)) {
        const e = this.tabsElement = this.el.closest("ion-tabs");
        e !== null && (this.tabsLoadCallback = () => this.resize(), e.addEventListener("ionTabBarLoaded", this.tabsLoadCallback))
      }
    }

    disconnectedCallback() {
      if (this.onScrollEnd(), _i(this.el)) {
        const { tabsElement: e, tabsLoadCallback: n } = this;
        e !== null && n !== void 0 && e.removeEventListener("ionTabBarLoaded", n), this.tabsElement = null, this.tabsLoadCallback = void 0
      }
    }

    onResize() {
      this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), this.resizeTimeout = setTimeout(() => {
        this.el.offsetParent !== null && this.resize()
      }, 100)
    }

    shouldForceOverscroll() {
      const { forceOverscroll: e } = this, n = bt(this);
      return e === void 0 ? n === "ios" && be("ios") : e
    }

    resize() {
      this.fullscreen ? $n(() => this.readDimensions()) : (this.cTop !== 0 || this.cBottom !== 0) && (this.cTop = this.cBottom = 0, wi(this))
    }

    readDimensions() {
      const e = fh(this.el), n = Math.max(this.el.offsetTop, 0),
        o = Math.max(e.offsetHeight - n - this.el.offsetHeight, 0);
      (n !== this.cTop || o !== this.cBottom) && (this.cTop = n, this.cBottom = o, wi(this))
    }

    onScroll(e) {
      const n = Date.now(), o = !this.isScrolling;
      this.lastScroll = n, o && this.onScrollStart(), !this.queued && this.scrollEvents && (this.queued = !0, $n(i => {
        this.queued = !1, this.detail.event = e, hh(this.detail, this.scrollEl, i, o), this.ionScroll.emit(this.detail)
      }))
    }

    async getScrollElement() {
      return this.scrollEl || await new Promise(e => lo(this.el, e)), Promise.resolve(this.scrollEl)
    }

    async getBackgroundElement() {
      return this.backgroundContentEl || await new Promise(e => lo(this.el, e)), Promise.resolve(this.backgroundContentEl)
    }

    scrollToTop(e = 0) {
      return this.scrollToPoint(void 0, 0, e)
    }

    async scrollToBottom(e = 0) {
      const n = await this.getScrollElement(), o = n.scrollHeight - n.clientHeight;
      return this.scrollToPoint(void 0, o, e)
    }

    async scrollByPoint(e, n, o) {
      const i = await this.getScrollElement();
      return this.scrollToPoint(e + i.scrollLeft, n + i.scrollTop, o)
    }

    async scrollToPoint(e, n, o = 0) {
      const i = await this.getScrollElement();
      if (o < 32) {
        n != null && (i.scrollTop = n), e != null && (i.scrollLeft = e);
        return
      }
      let s, r = 0;
      const l = new Promise(m => s = m), a = i.scrollTop, c = i.scrollLeft, d = n != null ? n - a : 0,
        u = e != null ? e - c : 0, f = m => {
          const w = Math.min(1, (m - r) / o) - 1, v = Math.pow(w, 3) + 1;
          d !== 0 && (i.scrollTop = Math.floor(v * d + a)), u !== 0 && (i.scrollLeft = Math.floor(v * u + c)), v < 1 ? requestAnimationFrame(f) : s()
        };
      return requestAnimationFrame(m => {
        r = m, f(m)
      }), l
    }

    onScrollStart() {
      this.isScrolling = !0, this.ionScrollStart.emit({ isScrolling: !0 }), this.watchDog && clearInterval(this.watchDog), this.watchDog = setInterval(() => {
        this.lastScroll < Date.now() - 120 && this.onScrollEnd()
      }, 100)
    }

    onScrollEnd() {
      this.watchDog && clearInterval(this.watchDog), this.watchDog = null, this.isScrolling && (this.isScrolling = !1, this.ionScrollEnd.emit({ isScrolling: !1 }))
    }

    render() {
      const { isMainContent: e, scrollX: n, scrollY: o, el: i } = this, s = lh(i) ? "rtl" : "ltr", r = bt(this),
        l = this.shouldForceOverscroll(), a = r === "ios", c = e ? "main" : "div";
      return this.resize(), G(jt, {
        key: "65d85e1f7f85876a76eec79addc4bd9f697a5d84",
        class: rn(this.color, {
          [r]: !0,
          "content-sizing": tn("ion-popover", this.el),
          overscroll: l,
          ["content-".concat(s)]: !0
        }),
        style: { "--offset-top": "".concat(this.cTop, "px"), "--offset-bottom": "".concat(this.cBottom, "px") }
      }, G("div", {
        key: "e2ac474a62cbc864772c497469100436f41289ff",
        ref: d => this.backgroundContentEl = d,
        id: "background-content",
        part: "background"
      }), G(c, {
        key: "567a4bc2bcb13adfd987b088f95ac4b20b789f2c",
        class: { "inner-scroll": !0, "scroll-x": n, "scroll-y": o, overscroll: (n || o) && l },
        ref: d => this.scrollEl = d,
        onScroll: this.scrollEvents ? d => this.onScroll(d) : void 0,
        part: "scroll"
      }, G("slot", { key: "13909f87dd9f49bf1664ad95038499da376b9480" })), a ? G("div", { class: "transition-effect" }, G("div", { class: "transition-cover" }), G("div", { class: "transition-shadow" })) : null, G("slot", {
        key: "05b56c139e203cfd1e3dd08054e99328e97e9243",
        name: "fixed"
      }))
    }
  }, [1, "ion-content", {
    color: [513],
    fullscreen: [4],
    forceOverscroll: [1028, "force-overscroll"],
    scrollX: [4, "scroll-x"],
    scrollY: [4, "scroll-y"],
    scrollEvents: [4, "scroll-events"],
    getScrollElement: [64],
    getBackgroundElement: [64],
    scrollToTop: [64],
    scrollToBottom: [64],
    scrollByPoint: [64],
    scrollToPoint: [64]
  }, [[9, "resize", "onResize"]]]), uh = t => {
    var e;
    return t.parentElement ? t.parentElement : !((e = t.parentNode) === null || e === void 0) && e.host ? t.parentNode.host : null
  }, fh = t => {
    const e = t.closest("ion-tabs");
    if (e) return e;
    const n = t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
    return n || uh(t)
  }, hh = (t, e, n, o) => {
    const i = t.currentX, s = t.currentY, r = t.currentTime, l = e.scrollLeft, a = e.scrollTop, c = n - r;
    if (o && (t.startTime = n, t.startX = l, t.startY = a, t.velocityX = t.velocityY = 0), t.currentTime = n, t.currentX = t.scrollLeft = l, t.currentY = t.scrollTop = a, t.deltaX = l - t.startX, t.deltaY = a - t.startY, c > 0 && c < 100) {
      const d = (l - i) / c, u = (a - s) / c;
      t.velocityX = d * .7 + t.velocityX * .3, t.velocityY = u * .7 + t.velocityY * .3
    }
  };

function ph() {
  if (typeof customElements > "u") return;
  ["ion-content"].forEach(e => {
    switch (e) {
      case"ion-content":
        customElements.get(e) || customElements.define(e, dh);
        break
    }
  })
}

const mh = ph;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gh = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.item-legacy.sc-ion-label-ios-h,.item-legacy .sc-ion-label-ios-h{white-space:nowrap;overflow:hidden}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-ios-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-ios-h,.item-skeleton-text .sc-ion-label-ios-h{overflow:hidden}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:0.875rem;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:0.875rem}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:1.375rem;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.0625rem;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
  bh = gh,
  vh = '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.item-legacy.sc-ion-label-md-h,.item-legacy .sc-ion-label-md-h{white-space:nowrap;overflow:hidden}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-md-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-md-h,.item-skeleton-text .sc-ion-label-md-h{overflow:hidden}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:1.25rem;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}',
  yh = vh, wh = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.ionColor = $t(this, "ionColor", 7), this.ionStyle = $t(this, "ionStyle", 7), this.inRange = !1, this.color = void 0, this.position = void 0, this.noAnimate = !1
    }

    static get watchers() {
      return { color: ["colorChanged"], position: ["positionChanged"] }
    }

    static get style() {
      return { ios: bh, md: yh }
    }

    get el() {
      return this
    }

    componentWillLoad() {
      this.inRange = !!this.el.closest("ion-range"), this.noAnimate = this.position === "floating", this.emitStyle(), this.emitColor()
    }

    componentDidLoad() {
      this.noAnimate && setTimeout(() => {
        this.noAnimate = !1
      }, 1e3)
    }

    colorChanged() {
      this.emitColor()
    }

    positionChanged() {
      this.emitStyle()
    }

    emitColor() {
      const { color: e } = this;
      this.ionColor.emit({ "item-label-color": e !== void 0, ["ion-color-".concat(e)]: e !== void 0 })
    }

    emitStyle() {
      const { inRange: e, position: n } = this;
      e || this.ionStyle.emit({ label: !0, ["label-".concat(n)]: n !== void 0 })
    }

    render() {
      const e = this.position, n = bt(this);
      return G(jt, {
        key: "c80cc1b4dcd56f614efc1e63ca80bca2f20a7151",
        class: rn(this.color, {
          [n]: !0,
          "in-item-color": tn("ion-item.ion-color", this.el),
          ["label-".concat(e)]: e !== void 0,
          "label-no-animate": this.noAnimate,
          "label-rtl": document.dir === "rtl"
        })
      })
    }
  }, [34, "ion-label", { color: [513], position: [1], noAnimate: [32] }, void 0, {
    color: ["colorChanged"],
    position: ["positionChanged"]
  }]);

function xh() {
  if (typeof customElements > "u") return;
  ["ion-label"].forEach(e => {
    switch (e) {
      case"ion-label":
        customElements.get(e) || customElements.define(e, wh);
        break
    }
  })
}/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gt = typeof window < "u" ? window : void 0, Wo = typeof document < "u" ? document : void 0;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const kh = () => {
  if (gt !== void 0) return gt.Capacitor
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ea = async (t, e, n, o, i, s) => {
  var r;
  if (t) return t.attachViewToDom(e, n, i, o);
  if (!s && typeof n != "string" && !(n instanceof HTMLElement)) throw new Error("framework delegate is missing");
  const l = typeof n == "string" ? (r = e.ownerDocument) === null || r === void 0 ? void 0 : r.createElement(n) : n;
  return o && o.forEach(a => l.classList.add(a)), i && Object.assign(l, i), e.appendChild(l), await new Promise(a => lo(l, a)), l
}, _h = (t, e) => {
  if (e) {
    if (t) {
      const n = e.parentElement;
      return t.removeViewFromDom(n, e)
    }
    e.remove()
  }
  return Promise.resolve()
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Eh = () => {
  let t;
  return {
    lock: async () => {
      const n = t;
      let o;
      return t = new Promise(i => o = i), n !== void 0 && await n, o
    }
  }
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const co = () => it.get("experimentalCloseWatcher", !1) && gt !== void 0 && "CloseWatcher" in gt, $h = () => {
    document.addEventListener("backbutton", () => {
    })
  }, Ch = () => {
    const t = document;
    let e = !1;
    const n = () => {
      if (e) return;
      let o = 0, i = [];
      const s = new CustomEvent("ionBackButton", {
        bubbles: !1, detail: {
          register(a, c) {
            i.push({ priority: a, handler: c, id: o++ })
          }
        }
      });
      t.dispatchEvent(s);
      const r = async a => {
        try {
          if (a != null && a.handler) {
            const c = a.handler(l);
            c != null && await c
          }
        } catch (c) {
          console.error(c)
        }
      }, l = () => {
        if (i.length > 0) {
          let a = {
            priority: Number.MIN_SAFE_INTEGER, handler: () => {
            }, id: -1
          };
          i.forEach(c => {
            c.priority >= a.priority && (a = c)
          }), e = !0, i = i.filter(c => c.id !== a.id), r(a).then(() => e = !1)
        }
      };
      l()
    };
    if (co()) {
      let o;
      const i = () => {
        o == null || o.destroy(), o = new gt.CloseWatcher, o.onclose = () => {
          n(), i()
        }
      };
      i()
    } else t.addEventListener("backbutton", n)
  }, Sh = 100, Th = 99, Ih = Object.freeze(Object.defineProperty({
    __proto__: null,
    MENU_BACK_BUTTON_PRIORITY: Th,
    OVERLAY_BACK_BUTTON_PRIORITY: Sh,
    blockHardwareBackButton: $h,
    shouldUseCloseWatcher: co,
    startHardwareBackButton: Ch
  }, Symbol.toStringTag, { value: "Module" })), ls = "ionViewWillEnter", as = "ionViewDidEnter", To = "ionViewWillLeave",
  Io = "ionViewDidLeave", qo = "ionViewWillUnload",
  Rh = () => Dt(() => import("./ios.transition-aMkx9CvE.js"), __vite__mapDeps([0, 1])),
  Ah = () => Dt(() => import("./md.transition-DicQ9s7y.js"), __vite__mapDeps([2, 1])), $a = t => new Promise((e, n) => {
    xe(() => {
      Ph(t), Lh(t).then(o => {
        o.animation && o.animation.destroy(), ur(t), e(o)
      }, o => {
        ur(t), n(o)
      })
    })
  }), Ph = t => {
    const e = t.enteringEl, n = t.leavingEl;
    Dh(e, n, t.direction), t.showGoBack ? e.classList.add("can-go-back") : e.classList.remove("can-go-back"), $i(e, !1), e.style.setProperty("pointer-events", "none"), n && ($i(n, !1), n.style.setProperty("pointer-events", "none"))
  }, Lh = async t => {
    const e = await Oh(t);
    return e && Eu.isBrowser ? Bh(e, t) : Mh(t)
  }, ur = t => {
    const e = t.enteringEl, n = t.leavingEl;
    e.classList.remove("ion-page-invisible"), e.style.removeProperty("pointer-events"), n !== void 0 && (n.classList.remove("ion-page-invisible"), n.style.removeProperty("pointer-events"))
  },
  Oh = async t => !t.leavingEl || !t.animated || t.duration === 0 ? void 0 : t.animationBuilder ? t.animationBuilder : t.mode === "ios" ? (await Rh()).iosTransitionAnimation : (await Ah()).mdTransitionAnimation,
  Bh = async (t, e) => {
    await Ca(e, !0);
    const n = t(e.baseEl, e);
    Sa(e.enteringEl, e.leavingEl);
    const o = await Hh(n, e);
    return e.progressCallback && e.progressCallback(void 0), o && Ta(e.enteringEl, e.leavingEl), {
      hasCompleted: o,
      animation: n
    }
  }, Mh = async t => {
    const e = t.enteringEl, n = t.leavingEl;
    return await Ca(t, !1), Sa(e, n), Ta(e, n), { hasCompleted: !0 }
  }, Ca = async (t, e) => {
    (t.deepWait !== void 0 ? t.deepWait : e) && await Promise.all([Ei(t.enteringEl), Ei(t.leavingEl)]), await zh(t.viewIsReady, t.enteringEl)
  }, zh = async (t, e) => {
    t && await t(e)
  }, Hh = (t, e) => {
    const n = e.progressCallback, o = new Promise(i => {
      t.onFinish(s => i(s === 1))
    });
    return n ? (t.progressStart(!0), n(t)) : t.play(), o
  }, Sa = (t, e) => {
    ae(e, To), ae(t, ls)
  }, Ta = (t, e) => {
    ae(t, as), ae(e, Io)
  }, ae = (t, e) => {
    if (t) {
      const n = new CustomEvent(e, { bubbles: !1, cancelable: !1 });
      t.dispatchEvent(n)
    }
  }, Ei = async t => {
    const e = t;
    if (e) {
      if (e.componentOnReady != null) {
        if (await e.componentOnReady() != null) return
      } else if (e.__registerHost != null) {
        await new Promise(o => ua(o));
        return
      }
      await Promise.all(Array.from(e.children).map(Ei))
    }
  }, $i = (t, e) => {
    e ? (t.setAttribute("aria-hidden", "true"), t.classList.add("ion-page-hidden")) : (t.hidden = !1, t.removeAttribute("aria-hidden"), t.classList.remove("ion-page-hidden"))
  }, Dh = (t, e, n) => {
    t !== void 0 && (t.style.zIndex = n === "back" ? "99" : "101"), e !== void 0 && (e.style.zIndex = "100")
  }, db = t => {
    if (t.classList.contains("ion-page")) return t;
    const e = t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
    return e || t
  };/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const jh = "ION-CONTENT", Ia = "ion-content", Ra = ".ion-content-scroll-host", Aa = "".concat(Ia, ", ").concat(Ra),
  cs = t => t.tagName === jh, fr = async t => cs(t) ? (await new Promise(e => lo(t, e)), t.getScrollElement()) : t,
  hr = t => {
    const e = t.querySelector(Ra);
    return e || t.querySelector(Aa)
  }, ub = t => t.closest(Aa), fb = (t, e) => cs(t) ? t.scrollToTop(e) : Promise.resolve(t.scrollTo({
    top: 0,
    left: 0,
    behavior: e > 0 ? "smooth" : "auto"
  })), hb = (t, e, n, o) => cs(t) ? t.scrollByPoint(e, n, o) : Promise.resolve(t.scrollBy({
    top: n,
    left: e,
    behavior: o > 0 ? "smooth" : "auto"
  })), pr = t => Qf(t, Ia);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Ci;
(function (t) {
  t.Unimplemented = "UNIMPLEMENTED", t.Unavailable = "UNAVAILABLE"
})(Ci || (Ci = {}));
var Si;
(function (t) {
  t.Body = "body", t.Ionic = "ionic", t.Native = "native", t.None = "none"
})(Si || (Si = {}));
const Fh = {
  getEngine() {
    const t = kh();
    if (t != null && t.isPluginAvailable("Keyboard")) return t.Plugins.Keyboard
  }, getResizeMode() {
    const t = this.getEngine();
    return t != null && t.getResizeMode ? t.getResizeMode().catch(e => {
      if (e.code !== Ci.Unimplemented) throw e
    }) : Promise.resolve(void 0)
  }
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Pa = t => {
  if (Wo === void 0 || t === Si.None || t === void 0) return null;
  const e = Wo.querySelector("ion-app");
  return e != null ? e : Wo.body
}, mr = t => {
  const e = Pa(t);
  return e === null ? 0 : e.clientHeight
}, Nh = async t => {
  let e, n, o, i;
  const s = async () => {
    const d = await Fh.getResizeMode(), u = d === void 0 ? void 0 : d.mode;
    e = () => {
      i === void 0 && (i = mr(u)), o = !0, r(o, u)
    }, n = () => {
      o = !1, r(o, u)
    }, gt == null || gt.addEventListener("keyboardWillShow", e), gt == null || gt.addEventListener("keyboardWillHide", n)
  }, r = (d, u) => {
    t && t(d, l(u))
  }, l = d => {
    if (i === 0 || i === mr(d)) return;
    const u = Pa(d);
    if (u !== null) return new Promise(f => {
      const m = () => {
        u.clientHeight === i && (w.disconnect(), f())
      }, w = new ResizeObserver(m);
      w.observe(u)
    })
  }, a = () => {
    gt == null || gt.removeEventListener("keyboardWillShow", e), gt == null || gt.removeEventListener("keyboardWillHide", n), e = n = void 0
  }, c = () => o;
  return await s(), { init: s, destroy: a, isKeyboardVisible: c }
};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Vh = "all 0.2s ease-in-out", gr = t => {
    const e = document.querySelector("".concat(t, ".ion-cloned-element"));
    if (e !== null) return e;
    const n = document.createElement(t);
    return n.classList.add("ion-cloned-element"), n.style.setProperty("display", "none"), document.body.appendChild(n), n
  }, br = t => {
    if (!t) return;
    const e = t.querySelectorAll("ion-toolbar");
    return {
      el: t, toolbars: Array.from(e).map(n => {
        const o = n.querySelector("ion-title");
        return {
          el: n,
          background: n.shadowRoot.querySelector(".toolbar-background"),
          ionTitleEl: o,
          innerTitleEl: o ? o.shadowRoot.querySelector(".toolbar-title") : null,
          ionButtonsEl: Array.from(n.querySelectorAll("ion-buttons"))
        }
      })
    }
  }, Uh = (t, e, n) => {
    $n(() => {
      const o = t.scrollTop, i = fa(1, 1 + -o / 500, 1.1);
      n.querySelector("ion-refresher.refresher-native") === null && xe(() => {
        Gh(e.toolbars, i)
      })
    })
  }, ds = (t, e) => {
    t.collapse !== "fade" && (e === void 0 ? t.style.removeProperty("--opacity-scale") : t.style.setProperty("--opacity-scale", e.toString()))
  }, Wh = (t, e, n) => {
    if (!t[0].isIntersecting) return;
    const o = t[0].intersectionRatio > .9 || n <= 0 ? 0 : (1 - t[0].intersectionRatio) * 100 / 75;
    ds(e.el, o === 1 ? void 0 : o)
  }, qh = (t, e, n, o) => {
    xe(() => {
      const i = o.scrollTop;
      Wh(t, e, i);
      const s = t[0], r = s.intersectionRect, l = r.width * r.height, a = s.rootBounds.width * s.rootBounds.height,
        c = l === 0 && a === 0, d = Math.abs(r.left - s.boundingClientRect.left),
        u = Math.abs(r.right - s.boundingClientRect.right), f = l > 0 && (d >= 5 || u >= 5);
      c || f || (s.isIntersecting ? (un(e, !1), un(n)) : (r.x === 0 && r.y === 0 || r.width !== 0 && r.height !== 0) && i > 0 && (un(e), un(n, !1), ds(e.el)))
    })
  }, un = (t, e = !0) => {
    const n = t.el;
    e ? (n.classList.remove("header-collapse-condense-inactive"), n.removeAttribute("aria-hidden")) : (n.classList.add("header-collapse-condense-inactive"), n.setAttribute("aria-hidden", "true"))
  }, Gh = (t = [], e = 1, n = !1) => {
    t.forEach(o => {
      const i = o.ionTitleEl, s = o.innerTitleEl;
      !i || i.size !== "large" || (s.style.transition = n ? Vh : "", s.style.transform = "scale3d(".concat(e, ", ").concat(e, ", 1)"))
    })
  }, vr = (t, e, n) => {
    $n(() => {
      const o = t.scrollTop, i = e.clientHeight, s = n ? n.clientHeight : 0;
      if (n !== null && o < s) {
        e.style.setProperty("--opacity-scale", "0"), t.style.setProperty("clip-path", "inset(".concat(i, "px 0px 0px 0px)"));
        return
      }
      const r = o - s, a = fa(0, r / 10, 1);
      xe(() => {
        t.style.removeProperty("clip-path"), e.style.setProperty("--opacity-scale", a.toString())
      })
    })
  },
  Kh = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}",
  Xh = Kh,
  Yh = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
  Zh = Yh, Qh = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.inheritedAttributes = {}, this.setupFadeHeader = async (e, n) => {
        const o = this.scrollEl = await fr(e);
        this.contentScrollCallback = () => {
          vr(this.scrollEl, this.el, n)
        }, o.addEventListener("scroll", this.contentScrollCallback), vr(this.scrollEl, this.el, n)
      }, this.collapse = void 0, this.translucent = !1
    }

    static get style() {
      return { ios: Xh, md: Zh }
    }

    get el() {
      return this
    }

    componentWillLoad() {
      this.inheritedAttributes = da(this.el)
    }

    componentDidLoad() {
      this.checkCollapsibleHeader()
    }

    componentDidUpdate() {
      this.checkCollapsibleHeader()
    }

    disconnectedCallback() {
      this.destroyCollapsibleHeader()
    }

    async checkCollapsibleHeader() {
      if (bt(this) !== "ios") return;
      const { collapse: n } = this, o = n === "condense", i = n === "fade";
      if (this.destroyCollapsibleHeader(), o) {
        const s = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), r = s ? hr(s) : null;
        xe(() => {
          const l = gr("ion-title");
          l.size = "large", gr("ion-back-button")
        }), await this.setupCondenseHeader(r, s)
      } else if (i) {
        const s = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), r = s ? hr(s) : null;
        if (!r) {
          pr(this.el);
          return
        }
        const l = r.querySelector('ion-header[collapse="condense"]');
        await this.setupFadeHeader(r, l)
      }
    }

    destroyCollapsibleHeader() {
      this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = void 0), this.scrollEl && this.contentScrollCallback && (this.scrollEl.removeEventListener("scroll", this.contentScrollCallback), this.contentScrollCallback = void 0), this.collapsibleMainHeader && (this.collapsibleMainHeader.classList.remove("header-collapse-main"), this.collapsibleMainHeader = void 0)
    }

    async setupCondenseHeader(e, n) {
      if (!e || !n) {
        pr(this.el);
        return
      }
      if (typeof IntersectionObserver > "u") return;
      this.scrollEl = await fr(e);
      const o = n.querySelectorAll("ion-header");
      if (this.collapsibleMainHeader = Array.from(o).find(l => l.collapse !== "condense"), !this.collapsibleMainHeader) return;
      const i = br(this.collapsibleMainHeader), s = br(this.el);
      if (!i || !s) return;
      un(i, !1), ds(i.el, 0);
      const r = l => {
        qh(l, i, s, this.scrollEl)
      };
      this.intersectionObserver = new IntersectionObserver(r, {
        root: e,
        threshold: [.25, .3, .4, .5, .6, .7, .8, .9, 1]
      }), this.intersectionObserver.observe(s.toolbars[s.toolbars.length - 1].el), this.contentScrollCallback = () => {
        Uh(this.scrollEl, s, e)
      }, this.scrollEl.addEventListener("scroll", this.contentScrollCallback), xe(() => {
        this.collapsibleMainHeader !== void 0 && this.collapsibleMainHeader.classList.add("header-collapse-main")
      })
    }

    render() {
      const { translucent: e, inheritedAttributes: n } = this, o = bt(this), i = this.collapse || "none",
        s = tn("ion-menu", this.el) ? "none" : "banner";
      return G(jt, Object.assign({
        key: "be4386a218c20dc4c18320dbbcfb25574d13d27e",
        role: s,
        class: {
          [o]: !0,
          ["header-".concat(o)]: !0,
          "header-translucent": this.translucent,
          ["header-collapse-".concat(i)]: !0,
          ["header-translucent-".concat(o)]: this.translucent
        }
      }, n), o === "ios" && e && G("div", { class: "header-background" }), G("slot", { key: "74c401fb331aeb40c733605fd580949ad53989b8" }))
    }
  }, [36, "ion-header", { collapse: [1], translucent: [4] }]);

function Jh() {
  if (typeof customElements > "u") return;
  ["ion-header"].forEach(e => {
    switch (e) {
      case"ion-header":
        customElements.get(e) || customElements.define(e, Qh);
        break
    }
  })
}

const tp = Jh;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ep = xh;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const uo = (t, e, n, o, i) => op(t[1], e[1], n[1], o[1], i).map(s => np(t[0], e[0], n[0], o[0], s)),
  np = (t, e, n, o, i) => {
    const s = 3 * e * Math.pow(i - 1, 2), r = -3 * n * i + 3 * n + o * i, l = t * Math.pow(i - 1, 3);
    return i * (s + i * r) - l
  },
  op = (t, e, n, o, i) => (t -= i, e -= i, n -= i, o -= i, sp(o - 3 * n + 3 * e - t, 3 * n - 6 * e + 3 * t, 3 * e - 3 * t, t).filter(r => r >= 0 && r <= 1)),
  ip = (t, e, n) => {
    const o = e * e - 4 * t * n;
    return o < 0 ? [] : [(-e + Math.sqrt(o)) / (2 * t), (-e - Math.sqrt(o)) / (2 * t)]
  }, sp = (t, e, n, o) => {
    if (t === 0) return ip(e, n, o);
    e /= t, n /= t, o /= t;
    const i = (3 * n - e * e) / 3, s = (2 * e * e * e - 9 * e * n + 27 * o) / 27;
    if (i === 0) return [Math.pow(-s, 1 / 3)];
    if (s === 0) return [Math.sqrt(-i), -Math.sqrt(-i)];
    const r = Math.pow(s / 2, 2) + Math.pow(i / 3, 3);
    if (r === 0) return [Math.pow(s / 2, 1 / 2) - e / 3];
    if (r > 0) return [Math.pow(-(s / 2) + Math.sqrt(r), 1 / 3) - Math.pow(s / 2 + Math.sqrt(r), 1 / 3) - e / 3];
    const l = Math.sqrt(Math.pow(-(i / 3), 3)), a = Math.acos(-(s / (2 * Math.sqrt(Math.pow(-(i / 3), 3))))),
      c = 2 * Math.pow(l, 1 / 3);
    return [c * Math.cos(a / 3) - e / 3, c * Math.cos((a + 2 * Math.PI) / 3) - e / 3, c * Math.cos((a + 4 * Math.PI) / 3) - e / 3]
  }, La = 1, Oa = 2, fo = 3;

class Ti {
  constructor(e, n) {
    this.component = e, this.params = n, this.state = La
  }

  async init(e) {
    if (this.state = Oa, !this.element) {
      const n = this.component;
      this.element = await Ea(this.delegate, e, n, ["ion-page", "ion-page-invisible"], this.params)
    }
  }

  _destroy() {
    St(this.state !== fo, "view state must be ATTACHED");
    const e = this.element;
    e && (this.delegate ? this.delegate.removeViewFromDom(e.parentElement, e) : e.remove()), this.nav = void 0, this.state = fo
  }
}

const yr = (t, e, n) => !t || t.component !== e ? !1 : ha(t.params, n),
  wr = (t, e) => t ? t instanceof Ti ? t : new Ti(t, e) : null,
  rp = t => t.map(e => e instanceof Ti ? e : "component" in e ? wr(e.component, e.componentProps === null ? void 0 : e.componentProps) : wr(e, void 0)).filter(e => e !== null),
  lp = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", ap = lp,
  cp = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = $t(this, "ionNavWillLoad", 7), this.ionNavWillChange = $t(this, "ionNavWillChange", 3), this.ionNavDidChange = $t(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0
    }

    static get watchers() {
      return { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] }
    }

    static get style() {
      return ap
    }

    get el() {
      return this
    }

    swipeGestureChanged() {
      this.gesture && this.gesture.enable(this.swipeGesture === !0)
    }

    rootChanged() {
      this.root !== void 0 && this.didLoad !== !1 && (this.useRouter || this.root !== void 0 && this.setRoot(this.root, this.rootParams))
    }

    componentWillLoad() {
      if (this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null, this.swipeGesture === void 0) {
        const e = bt(this);
        this.swipeGesture = it.getBoolean("swipeBackEnabled", e === "ios")
      }
      this.ionNavWillLoad.emit()
    }

    async componentDidLoad() {
      this.didLoad = !0, this.rootChanged(), this.gesture = (await Dt(() => import("./swipe-back-Cwih8Ng6.js"), [])).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged()
    }

    connectedCallback() {
      this.destroyed = !1
    }

    disconnectedCallback() {
      for (const e of this.views) ae(e.element, qo), e._destroy();
      this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.transInstr.length = 0, this.views.length = 0, this.destroyed = !0
    }

    push(e, n, o, i) {
      return this.insert(-1, e, n, o, i)
    }

    insert(e, n, o, i, s) {
      return this.insertPages(e, [{ component: n, componentProps: o }], i, s)
    }

    insertPages(e, n, o, i) {
      return this.queueTrns({ insertStart: e, insertViews: n, opts: o }, i)
    }

    pop(e, n) {
      return this.removeIndex(-1, 1, e, n)
    }

    popTo(e, n, o) {
      const i = { removeStart: -1, removeCount: -1, opts: n };
      return typeof e == "object" && e.component ? (i.removeView = e, i.removeStart = 1) : typeof e == "number" && (i.removeStart = e + 1), this.queueTrns(i, o)
    }

    popToRoot(e, n) {
      return this.removeIndex(1, -1, e, n)
    }

    removeIndex(e, n = 1, o, i) {
      return this.queueTrns({ removeStart: e, removeCount: n, opts: o }, i)
    }

    setRoot(e, n, o, i) {
      return this.setPages([{ component: e, componentProps: n }], o, i)
    }

    setPages(e, n, o) {
      return n != null || (n = {}), n.animated !== !0 && (n.animated = !1), this.queueTrns({
        insertStart: 0,
        insertViews: e,
        removeStart: 0,
        removeCount: -1,
        opts: n
      }, o)
    }

    setRouteId(e, n, o, i) {
      const s = this.getActiveSync();
      if (yr(s, e, n)) return Promise.resolve({ changed: !1, element: s.element });
      let r;
      const l = new Promise(d => r = d);
      let a;
      const c = {
        updateURL: !1, viewIsReady: d => {
          let u;
          const f = new Promise(m => u = m);
          return r({
            changed: !0, element: d, markVisible: async () => {
              u(), await a
            }
          }), f
        }
      };
      if (o === "root") a = this.setRoot(e, n, c); else {
        const d = this.views.find(u => yr(u, e, n));
        d ? a = this.popTo(d, Object.assign(Object.assign({}, c), {
          direction: "back",
          animationBuilder: i
        })) : o === "forward" ? a = this.push(e, n, Object.assign(Object.assign({}, c), { animationBuilder: i })) : o === "back" && (a = this.setRoot(e, n, Object.assign(Object.assign({}, c), {
          direction: "back",
          animated: !0,
          animationBuilder: i
        })))
      }
      return l
    }

    async getRouteId() {
      const e = this.getActiveSync();
      if (e) return { id: e.element.tagName, params: e.params, element: e.element }
    }

    async getActive() {
      return this.getActiveSync()
    }

    async getByIndex(e) {
      return this.views[e]
    }

    async canGoBack(e) {
      return this.canGoBackSync(e)
    }

    async getPrevious(e) {
      return this.getPreviousSync(e)
    }

    getLength() {
      return this.views.length
    }

    getActiveSync() {
      return this.views[this.views.length - 1]
    }

    canGoBackSync(e = this.getActiveSync()) {
      return !!(e && this.getPreviousSync(e))
    }

    getPreviousSync(e = this.getActiveSync()) {
      if (!e) return;
      const n = this.views, o = n.indexOf(e);
      return o > 0 ? n[o - 1] : void 0
    }

    async queueTrns(e, n) {
      var o, i;
      if (this.isTransitioning && (!((o = e.opts) === null || o === void 0) && o.skipIfBusy)) return !1;
      const s = new Promise((r, l) => {
        e.resolve = r, e.reject = l
      });
      if (e.done = n, e.opts && e.opts.updateURL !== !1 && this.useRouter) {
        const r = document.querySelector("ion-router");
        if (r) {
          const l = await r.canTransition();
          if (l === !1) return !1;
          if (typeof l == "string") return r.push(l, e.opts.direction || "back"), !1
        }
      }
      return ((i = e.insertViews) === null || i === void 0 ? void 0 : i.length) === 0 && (e.insertViews = void 0), this.transInstr.push(e), this.nextTrns(), s
    }

    success(e, n) {
      if (this.destroyed) {
        this.fireError("nav controller was destroyed", n);
        return
      }
      if (n.done && n.done(e.hasCompleted, e.requiresTransition, e.enteringView, e.leavingView, e.direction), n.resolve(e.hasCompleted), n.opts.updateURL !== !1 && this.useRouter) {
        const o = document.querySelector("ion-router");
        if (o) {
          const i = e.direction === "back" ? "back" : "forward";
          o.navChanged(i)
        }
      }
    }

    failed(e, n) {
      if (this.destroyed) {
        this.fireError("nav controller was destroyed", n);
        return
      }
      this.transInstr.length = 0, this.fireError(e, n)
    }

    fireError(e, n) {
      n.done && n.done(!1, !1, e), n.reject && !this.destroyed ? n.reject(e) : n.resolve(!1)
    }

    nextTrns() {
      if (this.isTransitioning) return !1;
      const e = this.transInstr.shift();
      return e ? (this.runTransition(e), !0) : !1
    }

    async runTransition(e) {
      try {
        this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(e);
        const n = this.getActiveSync(), o = this.getEnteringView(e, n);
        if (!n && !o) throw new Error("no views in the stack to be removed");
        o && o.state === La && await o.init(this.el), this.postViewInit(o, n, e);
        const i = (e.enteringRequiresTransition || e.leavingRequiresTransition) && o !== n;
        i && e.opts && n && (e.opts.direction === "back" && (e.opts.animationBuilder = e.opts.animationBuilder || (o == null ? void 0 : o.animationBuilder)), n.animationBuilder = e.opts.animationBuilder);
        let s;
        i ? s = await this.transition(o, n, e) : s = {
          hasCompleted: !0,
          requiresTransition: !1
        }, this.success(s, e), this.ionNavDidChange.emit()
      } catch (n) {
        this.failed(n, e)
      }
      this.isTransitioning = !1, this.nextTrns()
    }

    prepareTI(e) {
      var n, o, i;
      const s = this.views.length;
      if ((n = e.opts) !== null && n !== void 0 || (e.opts = {}), (o = (i = e.opts).delegate) !== null && o !== void 0 || (i.delegate = this.delegate), e.removeView !== void 0) {
        St(e.removeStart !== void 0, "removeView needs removeStart"), St(e.removeCount !== void 0, "removeView needs removeCount");
        const a = this.views.indexOf(e.removeView);
        if (a < 0) throw new Error("removeView was not found");
        e.removeStart += a
      }
      e.removeStart !== void 0 && (e.removeStart < 0 && (e.removeStart = s - 1), e.removeCount < 0 && (e.removeCount = s - e.removeStart), e.leavingRequiresTransition = e.removeCount > 0 && e.removeStart + e.removeCount === s), e.insertViews && ((e.insertStart < 0 || e.insertStart > s) && (e.insertStart = s), e.enteringRequiresTransition = e.insertStart === s);
      const r = e.insertViews;
      if (!r) return;
      St(r.length > 0, "length can not be zero");
      const l = rp(r);
      if (l.length === 0) throw new Error("invalid views to insert");
      for (const a of l) {
        a.delegate = e.opts.delegate;
        const c = a.nav;
        if (c && c !== this) throw new Error("inserted view was already inserted");
        if (a.state === fo) throw new Error("inserted view was already destroyed")
      }
      e.insertViews = l
    }

    getEnteringView(e, n) {
      const o = e.insertViews;
      if (o !== void 0) return o[o.length - 1];
      const i = e.removeStart;
      if (i !== void 0) {
        const s = this.views, r = i + e.removeCount;
        for (let l = s.length - 1; l >= 0; l--) {
          const a = s[l];
          if ((l < i || l >= r) && a !== n) return a
        }
      }
    }

    postViewInit(e, n, o) {
      var i, s, r;
      St(n || e, "Both leavingView and enteringView are null"), St(o.resolve, "resolve must be valid"), St(o.reject, "reject must be valid");
      const l = o.opts, { insertViews: a, removeStart: c, removeCount: d } = o;
      let u;
      if (c !== void 0 && d !== void 0) {
        St(c >= 0, "removeStart can not be negative"), St(d >= 0, "removeCount can not be negative"), u = [];
        for (let m = c; m < c + d; m++) {
          const w = this.views[m];
          w !== void 0 && w !== e && w !== n && u.push(w)
        }
        (i = l.direction) !== null && i !== void 0 || (l.direction = "back")
      }
      const f = this.views.length + ((s = a == null ? void 0 : a.length) !== null && s !== void 0 ? s : 0) - (d != null ? d : 0);
      if (St(f >= 0, "final balance can not be negative"), f === 0) throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
      if (a) {
        let m = o.insertStart;
        for (const w of a) this.insertViewAt(w, m), m++;
        o.enteringRequiresTransition && ((r = l.direction) !== null && r !== void 0 || (l.direction = "forward"))
      }
      if (u && u.length > 0) {
        for (const m of u) ae(m.element, To), ae(m.element, Io), ae(m.element, qo);
        for (const m of u) this.destroyView(m)
      }
    }

    async transition(e, n, o) {
      const i = o.opts, s = i.progressAnimation ? u => {
        u !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, u.onFinish(() => {
          this.gestureOrAnimationInProgress = !1
        }, { oneTimeCallback: !0 }), u.progressEnd(0, 0, 0)) : this.sbAni = u
      } : void 0, r = bt(this), l = e.element, a = n && n.element, c = Object.assign(Object.assign({
        mode: r,
        showGoBack: this.canGoBackSync(e),
        baseEl: this.el,
        progressCallback: s,
        animated: this.animated && it.getBoolean("animated", !0),
        enteringEl: l,
        leavingEl: a
      }, i), { animationBuilder: i.animationBuilder || this.animation || it.get("navAnimation") }), { hasCompleted: d } = await $a(c);
      return this.transitionFinish(d, e, n, i)
    }

    transitionFinish(e, n, o, i) {
      const s = e ? n : o;
      return s && this.unmountInactiveViews(s), {
        hasCompleted: e,
        requiresTransition: !0,
        enteringView: n,
        leavingView: o,
        direction: i.direction
      }
    }

    insertViewAt(e, n) {
      const o = this.views, i = o.indexOf(e);
      i > -1 ? (St(e.nav === this, "view is not part of the nav"), o.splice(i, 1), o.splice(n, 0, e)) : (St(!e.nav, "nav is used"), e.nav = this, o.splice(n, 0, e))
    }

    removeView(e) {
      St(e.state === Oa || e.state === fo, "view state should be loaded or destroyed");
      const n = this.views, o = n.indexOf(e);
      St(o > -1, "view must be part of the stack"), o >= 0 && n.splice(o, 1)
    }

    destroyView(e) {
      e._destroy(), this.removeView(e)
    }

    unmountInactiveViews(e) {
      if (this.destroyed) return;
      const n = this.views, o = n.indexOf(e);
      for (let i = n.length - 1; i >= 0; i--) {
        const s = n[i], r = s.element;
        r && (i > o ? (ae(r, qo), this.destroyView(s)) : i < o && $i(r, !0))
      }
    }

    canStart() {
      return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync()
    }

    onStart() {
      this.gestureOrAnimationInProgress = !0, this.pop({ direction: "back", progressAnimation: !0 })
    }

    onMove(e) {
      this.sbAni && this.sbAni.progressStep(e)
    }

    onEnd(e, n, o) {
      if (this.sbAni) {
        this.sbAni.onFinish(() => {
          this.gestureOrAnimationInProgress = !1
        }, { oneTimeCallback: !0 });
        let i = e ? -.001 : .001;
        e ? i += uo([0, 0], [.32, .72], [0, 1], [1, 1], n)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), i += uo([0, 0], [1, 0], [.68, .28], [1, 1], n)[0]), this.sbAni.progressEnd(e ? 1 : 0, i, o)
      } else this.gestureOrAnimationInProgress = !1
    }

    render() {
      return G("slot", { key: "8254ea10bef0575c13f8b0ddbe4643bec19f2366" })
    }
  }, [1, "ion-nav", {
    delegate: [16],
    swipeGesture: [1028, "swipe-gesture"],
    animated: [4],
    animation: [16],
    rootParams: [16],
    root: [1],
    push: [64],
    insert: [64],
    insertPages: [64],
    pop: [64],
    popTo: [64],
    popToRoot: [64],
    removeIndex: [64],
    setRoot: [64],
    setPages: [64],
    setRouteId: [64],
    getRouteId: [64],
    getActive: [64],
    getByIndex: [64],
    canGoBack: [64],
    getPrevious: [64]
  }, void 0, { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] }]);

function dp() {
  if (typeof customElements > "u") return;
  ["ion-nav"].forEach(e => {
    switch (e) {
      case"ion-nav":
        customElements.get(e) || customElements.define(e, cp);
        break
    }
  })
}

const up = dp;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const fp = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
  hp = fp,
  pp = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}",
  mp = pp, gp = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionStyle = $t(this, "ionStyle", 7), this.color = void 0, this.size = void 0
    }

    static get watchers() {
      return { size: ["sizeChanged"] }
    }

    static get style() {
      return { ios: hp, md: mp }
    }

    get el() {
      return this
    }

    sizeChanged() {
      this.emitStyle()
    }

    connectedCallback() {
      this.emitStyle()
    }

    emitStyle() {
      const e = this.getSize();
      this.ionStyle.emit({ ["title-".concat(e)]: !0 })
    }

    getSize() {
      return this.size !== void 0 ? this.size : "default"
    }

    render() {
      const e = bt(this), n = this.getSize();
      return G(jt, {
        key: "2642d433ba678b67503b7f1e9d0ae0390250bec8",
        class: rn(this.color, { [e]: !0, ["title-".concat(n)]: !0, "title-rtl": document.dir === "rtl" })
      }, G("div", {
        key: "355184542e26b53296f7143d099cfebc3de7b569",
        class: "toolbar-title"
      }, G("slot", { key: "aed07a34c22e4b1f34cdf40fea35481674d8941f" })))
    }
  }, [33, "ion-title", { color: [513], size: [1] }, void 0, { size: ["sizeChanged"] }]);

function bp() {
  if (typeof customElements > "u") return;
  ["ion-title"].forEach(e => {
    switch (e) {
      case"ion-title":
        customElements.get(e) || customElements.define(e, gp);
        break
    }
  })
}

const vp = bp;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const yp = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
  wp = yp,
  xp = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
  kp = xp, _p = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.childrenStyles = new Map, this.color = void 0
    }

    static get style() {
      return { ios: wp, md: kp }
    }

    get el() {
      return this
    }

    componentWillLoad() {
      const e = Array.from(this.el.querySelectorAll("ion-buttons")), n = e.find(s => s.slot === "start");
      n && n.classList.add("buttons-first-slot");
      const o = e.reverse(),
        i = o.find(s => s.slot === "end") || o.find(s => s.slot === "primary") || o.find(s => s.slot === "secondary");
      i && i.classList.add("buttons-last-slot")
    }

    childrenStyle(e) {
      e.stopPropagation();
      const n = e.target.tagName, o = e.detail, i = {}, s = this.childrenStyles.get(n) || {};
      let r = !1;
      Object.keys(o).forEach(l => {
        const a = "toolbar-".concat(l), c = o[l];
        c !== s[a] && (r = !0), c && (i[a] = !0)
      }), r && (this.childrenStyles.set(n, i), wi(this))
    }

    render() {
      const e = bt(this), n = {};
      return this.childrenStyles.forEach(o => {
        Object.assign(n, o)
      }), G(jt, {
        key: "fdd8621b4f69ce650b5aaf4fb6bffde29aa5ad65",
        class: Object.assign(Object.assign({}, n), rn(this.color, { [e]: !0, "in-toolbar": tn("ion-toolbar", this.el) }))
      }, G("div", {
        key: "c6ad5434546e2046a83574ea92a03a3f77d0a9e3",
        class: "toolbar-background"
      }), G("div", {
        key: "3b79dd20c3e8252cacfd46a82428df9ba0b8b86e",
        class: "toolbar-container"
      }, G("slot", {
        key: "514259a8b76db9f3a587a7667b5e37fd8ade9481",
        name: "start"
      }), G("slot", {
        key: "d9ab68f0626f4ac8b83d21663eb67a47b76d809b",
        name: "secondary"
      }), G("div", {
        key: "2c21da88b67a7d7eef280e517bda9982264c7be4",
        class: "toolbar-content"
      }, G("slot", { key: "ac2b7c8f20c5ac755df9032809c73eab9e767e36" })), G("slot", {
        key: "2ddd3b7e3803f2d56c32743dcfc114ddcb8684a2",
        name: "primary"
      }), G("slot", { key: "27483847d4333b4492506da33185c9ba1aa824a7", name: "end" })))
    }
  }, [33, "ion-toolbar", { color: [513] }, [[0, "ionStyle", "childrenStyle"]]]);

function Ep() {
  if (typeof customElements > "u") return;
  ["ion-toolbar"].forEach(e => {
    switch (e) {
      case"ion-toolbar":
        customElements.get(e) || customElements.define(e, _p);
        break
    }
  })
}

const $p = Ep;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Cp = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
  Sp = Cp,
  Tp = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',
  Ip = Tp, Rp = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.inheritedAttributes = {}, this.onClick = async e => {
        const n = this.el.closest("ion-nav");
        return e.preventDefault(), n && await n.canGoBack() ? n.pop({
          animationBuilder: this.routerAnimation,
          skipIfBusy: !0
        }) : th(this.defaultHref, e, "back", this.routerAnimation)
      }, this.color = void 0, this.defaultHref = void 0, this.disabled = !1, this.icon = void 0, this.text = void 0, this.type = "button", this.routerAnimation = void 0
    }

    static get style() {
      return { ios: Sp, md: Ip }
    }

    get backButtonIcon() {
      const e = this.icon;
      return e != null ? e : bt(this) === "ios" ? it.get("backButtonIcon", bf) : it.get("backButtonIcon", gf)
    }

    get backButtonText() {
      const e = bt(this) === "ios" ? "Back" : null;
      return this.text != null ? this.text : it.get("backButtonText", e)
    }

    get hasIconOnly() {
      return this.backButtonIcon && !this.backButtonText
    }

    get rippleType() {
      return this.hasIconOnly ? "unbounded" : "bounded"
    }

    get el() {
      return this
    }

    componentWillLoad() {
      this.inheritedAttributes = da(this.el), this.defaultHref === void 0 && (this.defaultHref = it.get("backButtonDefaultHref"))
    }

    render() {
      const {
        color: e,
        defaultHref: n,
        disabled: o,
        type: i,
        hasIconOnly: s,
        backButtonIcon: r,
        backButtonText: l,
        icon: a,
        inheritedAttributes: c
      } = this, d = n !== void 0, u = bt(this), f = c["aria-label"] || l || "back";
      return G(jt, {
        key: "175fff2d7a41d2deaaf7b781c5ba2aac9311ebf4",
        onClick: this.onClick,
        class: rn(e, {
          [u]: !0,
          button: !0,
          "back-button-disabled": o,
          "back-button-has-icon-only": s,
          "in-toolbar": tn("ion-toolbar", this.el),
          "in-toolbar-color": tn("ion-toolbar[color]", this.el),
          "ion-activatable": !0,
          "ion-focusable": !0,
          "show-back-button": d
        })
      }, G("button", {
        key: "59fe30c167ea82e2431e45d46060a01bcb2aea77",
        type: i,
        disabled: o,
        class: "button-native",
        part: "native",
        "aria-label": f
      }, G("span", {
        key: "3d704fb7ef001446361e7a09d43763a771b242b9",
        class: "button-inner"
      }, r && G("ion-icon", {
        part: "icon",
        icon: r,
        "aria-hidden": "true",
        lazy: !1,
        "flip-rtl": a === void 0
      }), l && G("span", {
        part: "text",
        "aria-hidden": "true",
        class: "button-text"
      }, l)), u === "md" && G("ion-ripple-effect", { type: this.rippleType })))
    }
  }, [33, "ion-back-button", {
    color: [513],
    defaultHref: [1025, "default-href"],
    disabled: [516],
    icon: [1],
    text: [1],
    type: [1],
    routerAnimation: [16]
  }]);

function Ap() {
  if (typeof customElements > "u") return;
  ["ion-back-button", "ion-icon", "ion-ripple-effect"].forEach(e => {
    switch (e) {
      case"ion-back-button":
        customElements.get(e) || customElements.define(e, Rp);
        break;
      case"ion-icon":
        customElements.get(e) || Yf();
        break;
      case"ion-ripple-effect":
        customElements.get(e) || _a();
        break
    }
  })
}

const Pp = Ap, Lp = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",
  Op = Lp, Bp = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = $t(this, "ionNavWillLoad", 7), this.ionNavWillChange = $t(this, "ionNavWillChange", 3), this.ionNavDidChange = $t(this, "ionNavDidChange", 3), this.lockController = Eh(), this.gestureOrAnimationInProgress = !1, this.mode = bt(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0
    }

    static get watchers() {
      return { swipeHandler: ["swipeHandlerChanged"] }
    }

    static get style() {
      return Op
    }

    get el() {
      return this
    }

    swipeHandlerChanged() {
      this.gesture && this.gesture.enable(this.swipeHandler !== void 0)
    }

    async connectedCallback() {
      const e = () => {
        this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart()
      };
      this.gesture = (await Dt(() => import("./swipe-back-Cwih8Ng6.js"), [])).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => e(), n => {
        var o;
        return (o = this.ani) === null || o === void 0 ? void 0 : o.progressStep(n)
      }, (n, o, i) => {
        if (this.ani) {
          this.ani.onFinish(() => {
            this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(n)
          }, { oneTimeCallback: !0 });
          let s = n ? -.001 : .001;
          n ? s += uo([0, 0], [.32, .72], [0, 1], [1, 1], o)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), s += uo([0, 0], [1, 0], [.68, .28], [1, 1], o)[0]), this.ani.progressEnd(n ? 1 : 0, s, i)
        } else this.gestureOrAnimationInProgress = !1
      }), this.swipeHandlerChanged()
    }

    componentWillLoad() {
      this.ionNavWillLoad.emit()
    }

    disconnectedCallback() {
      this.gesture && (this.gesture.destroy(), this.gesture = void 0)
    }

    async commit(e, n, o) {
      const i = await this.lockController.lock();
      let s = !1;
      try {
        s = await this.transition(e, n, o)
      } catch (r) {
        console.error(r)
      }
      return i(), s
    }

    async setRouteId(e, n, o, i) {
      return {
        changed: await this.setRoot(e, n, {
          duration: o === "root" ? 0 : void 0,
          direction: o === "back" ? "back" : "forward",
          animationBuilder: i
        }), element: this.activeEl
      }
    }

    async getRouteId() {
      const e = this.activeEl;
      return e ? { id: e.tagName, element: e, params: this.activeParams } : void 0
    }

    async setRoot(e, n, o) {
      if (this.activeComponent === e && ha(n, this.activeParams)) return !1;
      const i = this.activeEl, s = await Ea(this.delegate, this.el, e, ["ion-page", "ion-page-invisible"], n);
      return this.activeComponent = e, this.activeEl = s, this.activeParams = n, await this.commit(s, i, o), await _h(this.delegate, i), !0
    }

    async transition(e, n, o = {}) {
      if (n === e) return !1;
      this.ionNavWillChange.emit();
      const { el: i, mode: s } = this, r = this.animated && it.getBoolean("animated", !0),
        l = o.animationBuilder || this.animation || it.get("navAnimation");
      return await $a(Object.assign(Object.assign({
        mode: s,
        animated: r,
        enteringEl: e,
        leavingEl: n,
        baseEl: i,
        deepWait: _i(i),
        progressCallback: o.progressAnimation ? a => {
          a !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, a.onFinish(() => {
            this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1)
          }, { oneTimeCallback: !0 }), a.progressEnd(0, 0, 0)) : this.ani = a
        } : void 0
      }, o), { animationBuilder: l })), this.ionNavDidChange.emit(), !0
    }

    render() {
      return G("slot", { key: "e4eaa40478f70742d0ff7602ed5f83879da9f1b4" })
    }
  }, [1, "ion-router-outlet", {
    mode: [1025],
    delegate: [16],
    animated: [4],
    animation: [16],
    swipeHandler: [16],
    commit: [64],
    setRouteId: [64],
    getRouteId: [64]
  }, void 0, { swipeHandler: ["swipeHandlerChanged"] }]);

function Mp() {
  if (typeof customElements > "u") return;
  ["ion-router-outlet"].forEach(e => {
    switch (e) {
      case"ion-router-outlet":
        customElements.get(e) || customElements.define(e, Bp);
        break
    }
  })
}

const zp = Mp;/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Fe = typeof document < "u";

function Hp(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module"
}

const nt = Object.assign;

function Go(t, e) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    n[o] = Yt(i) ? i.map(t) : t(i)
  }
  return n
}

const bn = () => {
  }, Yt = Array.isArray, Ba = /#/g, Dp = /&/g, jp = /\//g, Fp = /=/g, Np = /\?/g, Ma = /\+/g, Vp = /%5B/g, Up = /%5D/g,
  za = /%5E/g, Wp = /%60/g, Ha = /%7B/g, qp = /%7C/g, Da = /%7D/g, Gp = /%20/g;

function us(t) {
  return encodeURI("" + t).replace(qp, "|").replace(Vp, "[").replace(Up, "]")
}

function Kp(t) {
  return us(t).replace(Ha, "{").replace(Da, "}").replace(za, "^")
}

function Ii(t) {
  return us(t).replace(Ma, "%2B").replace(Gp, "+").replace(Ba, "%23").replace(Dp, "%26").replace(Wp, "`").replace(Ha, "{").replace(Da, "}").replace(za, "^")
}

function Xp(t) {
  return Ii(t).replace(Fp, "%3D")
}

function Yp(t) {
  return us(t).replace(Ba, "%23").replace(Np, "%3F")
}

function Zp(t) {
  return t == null ? "" : Yp(t).replace(jp, "%2F")
}

function Cn(t) {
  try {
    return decodeURIComponent("" + t)
  } catch (e) {
  }
  return "" + t
}

const Qp = /\/$/, Jp = t => t.replace(Qp, "");

function Ko(t, e, n = "/") {
  let o, i = {}, s = "", r = "";
  const l = e.indexOf("#");
  let a = e.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (o = e.slice(0, a), s = e.slice(a + 1, l > -1 ? l : e.length), i = t(s)), l > -1 && (o = o || e.slice(0, l), r = e.slice(l, e.length)), o = om(o != null ? o : e, n), {
    fullPath: o + (s && "?") + s + r,
    path: o,
    query: i,
    hash: Cn(r)
  }
}

function tm(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "")
}

function xr(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function em(t, e, n) {
  const o = e.matched.length - 1, i = n.matched.length - 1;
  return o > -1 && o === i && en(e.matched[o], n.matched[i]) && ja(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function en(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}

function ja(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!nm(t[n], e[n])) return !1;
  return !0
}

function nm(t, e) {
  return Yt(t) ? kr(t, e) : Yt(e) ? kr(e, t) : t === e
}

function kr(t, e) {
  return Yt(e) ? t.length === e.length && t.every((n, o) => n === e[o]) : t.length === 1 && t[0] === e
}

function om(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"), o = t.split("/"), i = o[o.length - 1];
  (i === ".." || i === ".") && o.push("");
  let s = n.length - 1, r, l;
  for (r = 0; r < o.length; r++) if (l = o[r], l !== ".") if (l === "..") s > 1 && s--; else break;
  return n.slice(0, s).join("/") + "/" + o.slice(r).join("/")
}

var Sn;
(function (t) {
  t.pop = "pop", t.push = "push"
})(Sn || (Sn = {}));
var vn;
(function (t) {
  t.back = "back", t.forward = "forward", t.unknown = ""
})(vn || (vn = {}));

function im(t) {
  if (!t) if (Fe) {
    const e = document.querySelector("base");
    t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Jp(t)
}

const sm = /^[^#]+#/;

function rm(t, e) {
  return t.replace(sm, "#") + e
}

function lm(t, e) {
  const n = document.documentElement.getBoundingClientRect(), o = t.getBoundingClientRect();
  return { behavior: e.behavior, left: o.left - n.left - (e.left || 0), top: o.top - n.top - (e.top || 0) }
}

const Ro = () => ({ left: window.scrollX, top: window.scrollY });

function am(t) {
  let e;
  if ("el" in t) {
    const n = t.el, o = typeof n == "string" && n.startsWith("#"),
      i = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    e = lm(i, t)
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}

function _r(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}

const Ri = new Map;

function cm(t, e) {
  Ri.set(t, e)
}

function dm(t) {
  const e = Ri.get(t);
  return Ri.delete(t), e
}

let um = () => location.protocol + "//" + location.host;

function Fa(t, e) {
  const { pathname: n, search: o, hash: i } = e, s = t.indexOf("#");
  if (s > -1) {
    let l = i.includes(t.slice(s)) ? t.slice(s).length : 1, a = i.slice(l);
    return a[0] !== "/" && (a = "/" + a), xr(a, "")
  }
  return xr(n, t) + o + i
}

function fm(t, e, n, o) {
  let i = [], s = [], r = null;
  const l = ({ state: f }) => {
    const m = Fa(t, location), w = n.value, v = e.value;
    let x = 0;
    if (f) {
      if (n.value = m, e.value = f, r && r === w) {
        r = null;
        return
      }
      x = v ? f.position - v.position : 0
    } else o(m);
    i.forEach(b => {
      b(n.value, w, { delta: x, type: Sn.pop, direction: x ? x > 0 ? vn.forward : vn.back : vn.unknown })
    })
  };

  function a() {
    r = n.value
  }

  function c(f) {
    i.push(f);
    const m = () => {
      const w = i.indexOf(f);
      w > -1 && i.splice(w, 1)
    };
    return s.push(m), m
  }

  function d() {
    const { history: f } = window;
    f.state && f.replaceState(nt({}, f.state, { scroll: Ro() }), "")
  }

  function u() {
    for (const f of s) f();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", d)
  }

  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", d, { passive: !0 }), {
    pauseListeners: a,
    listen: c,
    destroy: u
  }
}

function Er(t, e, n, o = !1, i = !1) {
  return { back: t, current: e, forward: n, replaced: o, position: window.history.length, scroll: i ? Ro() : null }
}

function hm(t) {
  const { history: e, location: n } = window, o = { value: Fa(t, n) }, i = { value: e.state };
  i.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function s(a, c, d) {
    const u = t.indexOf("#"),
      f = u > -1 ? (n.host && document.querySelector("base") ? t : t.slice(u)) + a : um() + t + a;
    try {
      e[d ? "replaceState" : "pushState"](c, "", f), i.value = c
    } catch (m) {
      console.error(m), n[d ? "replace" : "assign"](f)
    }
  }

  function r(a, c) {
    const d = nt({}, e.state, Er(i.value.back, a, i.value.forward, !0), c, { position: i.value.position });
    s(a, d, !0), o.value = a
  }

  function l(a, c) {
    const d = nt({}, i.value, e.state, { forward: a, scroll: Ro() });
    s(d.current, d, !0);
    const u = nt({}, Er(o.value, a, null), { position: d.position + 1 }, c);
    s(a, u, !1), o.value = a
  }

  return { location: o, state: i, push: l, replace: r }
}

function pm(t) {
  t = im(t);
  const e = hm(t), n = fm(t, e.state, e.location, e.replace);

  function o(s, r = !0) {
    r || n.pauseListeners(), history.go(s)
  }

  const i = nt({ location: "", base: t, go: o, createHref: rm.bind(null, t) }, e, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", { enumerable: !0, get: () => e.state.value }), i
}

function mm(t) {
  return typeof t == "string" || t && typeof t == "object"
}

function Na(t) {
  return typeof t == "string" || typeof t == "symbol"
}

const fe = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Va = Symbol("");
var $r;
(function (t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})($r || ($r = {}));

function nn(t, e) {
  return nt(new Error, { type: t, [Va]: !0 }, e)
}

function ie(t, e) {
  return t instanceof Error && Va in t && (e == null || !!(t.type & e))
}

const Cr = "[^/]+?", gm = { sensitive: !1, strict: !1, start: !0, end: !0 }, bm = /[.+*?^${}()[\]/\\]/g;

function vm(t, e) {
  const n = nt({}, gm, e), o = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const c of t) {
    const d = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      let m = 40 + (n.sensitive ? .25 : 0);
      if (f.type === 0) u || (i += "/"), i += f.value.replace(bm, "\\$&"), m += 40; else if (f.type === 1) {
        const { value: w, repeatable: v, optional: x, regexp: b } = f;
        s.push({ name: w, repeatable: v, optional: x });
        const k = b || Cr;
        if (k !== Cr) {
          m += 10;
          try {
            new RegExp("(".concat(k, ")"))
          } catch (T) {
            throw new Error('Invalid custom RegExp for param "'.concat(w, '" (').concat(k, "): ") + T.message)
          }
        }
        let S = v ? "((?:".concat(k, ")(?:/(?:").concat(k, "))*)") : "(".concat(k, ")");
        u || (S = x && c.length < 2 ? "(?:/".concat(S, ")") : "/" + S), x && (S += "?"), i += S, m += 20, x && (m += -8), v && (m += -20), k === ".*" && (m += -50)
      }
      d.push(m)
    }
    o.push(d)
  }
  if (n.strict && n.end) {
    const c = o.length - 1;
    o[c][o[c].length - 1] += .7000000000000001
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && (i += "(?:/|$)");
  const r = new RegExp(i, n.sensitive ? "" : "i");

  function l(c) {
    const d = c.match(r), u = {};
    if (!d) return null;
    for (let f = 1; f < d.length; f++) {
      const m = d[f] || "", w = s[f - 1];
      u[w.name] = m && w.repeatable ? m.split("/") : m
    }
    return u
  }

  function a(c) {
    let d = "", u = !1;
    for (const f of t) {
      (!u || !d.endsWith("/")) && (d += "/"), u = !1;
      for (const m of f) if (m.type === 0) d += m.value; else if (m.type === 1) {
        const { value: w, repeatable: v, optional: x } = m, b = w in c ? c[w] : "";
        if (Yt(b) && !v) throw new Error('Provided param "'.concat(w, '" is an array but it is not repeatable (* or + modifiers)'));
        const k = Yt(b) ? b.join("/") : b;
        if (!k) if (x) f.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = !0); else throw new Error('Missing required param "'.concat(w, '"'));
        d += k
      }
    }
    return d || "/"
  }

  return { re: r, score: o, keys: s, parse: l, stringify: a }
}

function ym(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const o = e[n] - t[n];
    if (o) return o;
    n++
  }
  return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
}

function wm(t, e) {
  let n = 0;
  const o = t.score, i = e.score;
  for (; n < o.length && n < i.length;) {
    const s = ym(o[n], i[n]);
    if (s) return s;
    n++
  }
  if (Math.abs(i.length - o.length) === 1) {
    if (Sr(o)) return 1;
    if (Sr(i)) return -1
  }
  return i.length - o.length
}

function Sr(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}

const xm = { type: 0, value: "" }, km = /[a-zA-Z0-9_]/;

function _m(t) {
  if (!t) return [[]];
  if (t === "/") return [[xm]];
  if (!t.startsWith("/")) throw new Error('Invalid path "'.concat(t, '"'));

  function e(m) {
    throw new Error("ERR (".concat(n, ')/"').concat(c, '": ').concat(m))
  }

  let n = 0, o = n;
  const i = [];
  let s;

  function r() {
    s && i.push(s), s = []
  }

  let l = 0, a, c = "", d = "";

  function u() {
    c && (n === 0 ? s.push({
      type: 0,
      value: c
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && e("A repeatable param (".concat(c, ") must be alone in its segment. eg: '/:ids+.")), s.push({
      type: 1,
      value: c,
      regexp: d,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : e("Invalid state to consume buffer"), c = "")
  }

  function f() {
    c += a
  }

  for (; l < t.length;) {
    if (a = t[l++], a === "\\" && n !== 2) {
      o = n, n = 4;
      continue
    }
    switch (n) {
      case 0:
        a === "/" ? (c && u(), r()) : a === ":" ? (u(), n = 1) : f();
        break;
      case 4:
        f(), n = o;
        break;
      case 1:
        a === "(" ? n = 2 : km.test(a) ? f() : (u(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + a : n = 3 : d += a;
        break;
      case 3:
        u(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, d = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return n === 2 && e('Unfinished custom RegExp for param "'.concat(c, '"')), u(), r(), i
}

function Em(t, e, n) {
  const o = vm(_m(t.path), n), i = nt(o, { record: t, parent: e, children: [], alias: [] });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function $m(t, e) {
  const n = [], o = new Map;
  e = Rr({ strict: !1, end: !0, sensitive: !1 }, e);

  function i(d) {
    return o.get(d)
  }

  function s(d, u, f) {
    const m = !f, w = Cm(d);
    w.aliasOf = f && f.record;
    const v = Rr(e, d), x = [w];
    if ("alias" in d) {
      const S = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const T of S) x.push(nt({}, w, {
        components: f ? f.record.components : w.components,
        path: T,
        aliasOf: f ? f.record : w
      }))
    }
    let b, k;
    for (const S of x) {
      const { path: T } = S;
      if (u && T[0] !== "/") {
        const R = u.record.path, $ = R[R.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (T && $ + T)
      }
      if (b = Em(S, u, v), f ? f.alias.push(b) : (k = k || b, k !== b && k.alias.push(b), m && d.name && !Ir(b) && r(d.name)), w.children) {
        const R = w.children;
        for (let $ = 0; $ < R.length; $++) s(R[$], b, f && f.children[$])
      }
      f = f || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && a(b)
    }
    return k ? () => {
      r(k)
    } : bn
  }

  function r(d) {
    if (Na(d)) {
      const u = o.get(d);
      u && (o.delete(d), n.splice(n.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r))
    } else {
      const u = n.indexOf(d);
      u > -1 && (n.splice(u, 1), d.record.name && o.delete(d.record.name), d.children.forEach(r), d.alias.forEach(r))
    }
  }

  function l() {
    return n
  }

  function a(d) {
    let u = 0;
    for (; u < n.length && wm(d, n[u]) >= 0 && (d.record.path !== n[u].record.path || !Ua(d, n[u]));) u++;
    n.splice(u, 0, d), d.record.name && !Ir(d) && o.set(d.record.name, d)
  }

  function c(d, u) {
    let f, m = {}, w, v;
    if ("name" in d && d.name) {
      if (f = o.get(d.name), !f) throw nn(1, { location: d });
      v = f.record.name, m = nt(Tr(u.params, f.keys.filter(k => !k.optional).concat(f.parent ? f.parent.keys.filter(k => k.optional) : []).map(k => k.name)), d.params && Tr(d.params, f.keys.map(k => k.name))), w = f.stringify(m)
    } else if (d.path != null) w = d.path, f = n.find(k => k.re.test(w)), f && (m = f.parse(w), v = f.record.name); else {
      if (f = u.name ? o.get(u.name) : n.find(k => k.re.test(u.path)), !f) throw nn(1, {
        location: d,
        currentLocation: u
      });
      v = f.record.name, m = nt({}, u.params, d.params), w = f.stringify(m)
    }
    const x = [];
    let b = f;
    for (; b;) x.unshift(b.record), b = b.parent;
    return { name: v, path: w, params: m, matched: x, meta: Tm(x) }
  }

  return t.forEach(d => s(d)), { addRoute: s, resolve: c, removeRoute: r, getRoutes: l, getRecordMatcher: i }
}

function Tr(t, e) {
  const n = {};
  for (const o of e) o in t && (n[o] = t[o]);
  return n
}

function Cm(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: Sm(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  }
}

function Sm(t) {
  const e = {}, n = t.props || !1;
  if ("component" in t) e.default = n; else for (const o in t.components) e[o] = typeof n == "object" ? n[o] : n;
  return e
}

function Ir(t) {
  for (; t;) {
    if (t.record.aliasOf) return !0;
    t = t.parent
  }
  return !1
}

function Tm(t) {
  return t.reduce((e, n) => nt(e, n.meta), {})
}

function Rr(t, e) {
  const n = {};
  for (const o in t) n[o] = o in e ? e[o] : t[o];
  return n
}

function Ua(t, e) {
  return e.children.some(n => n === t || Ua(t, n))
}

function Ai(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const o = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < o.length; ++i) {
    const s = o[i].replace(Ma, " "), r = s.indexOf("="), l = Cn(r < 0 ? s : s.slice(0, r)),
      a = r < 0 ? null : Cn(s.slice(r + 1));
    if (l in e) {
      let c = e[l];
      Yt(c) || (c = e[l] = [c]), c.push(a)
    } else e[l] = a
  }
  return e
}

function Ar(t) {
  let e = "";
  for (let n in t) {
    const o = t[n];
    if (n = Xp(n), o == null) {
      o !== void 0 && (e += (e.length ? "&" : "") + n);
      continue
    }
    (Yt(o) ? o.map(s => s && Ii(s)) : [o && Ii(o)]).forEach(s => {
      s !== void 0 && (e += (e.length ? "&" : "") + n, s != null && (e += "=" + s))
    })
  }
  return e
}

function Im(t) {
  const e = {};
  for (const n in t) {
    const o = t[n];
    o !== void 0 && (e[n] = Yt(o) ? o.map(i => i == null ? null : "" + i) : o == null ? o : "" + o)
  }
  return e
}

const Wa = Symbol(""), Pr = Symbol(""), fs = Symbol(""), Ao = Symbol(""), Pi = Symbol("");

function cn() {
  let t = [];

  function e(o) {
    return t.push(o), () => {
      const i = t.indexOf(o);
      i > -1 && t.splice(i, 1)
    }
  }

  function n() {
    t = []
  }

  return { add: e, list: () => t.slice(), reset: n }
}

function ge(t, e, n, o, i, s = r => r()) {
  const r = o && (o.enterCallbacks[i] = o.enterCallbacks[i] || []);
  return () => new Promise((l, a) => {
    const c = f => {
      f === !1 ? a(nn(4, { from: n, to: e })) : f instanceof Error ? a(f) : mm(f) ? a(nn(2, {
        from: e,
        to: f
      })) : (r && o.enterCallbacks[i] === r && typeof f == "function" && r.push(f), l())
    }, d = s(() => t.call(o && o.instances[i], e, n, c));
    let u = Promise.resolve(d);
    t.length < 3 && (u = u.then(c)), u.catch(f => a(f))
  })
}

function Xo(t, e, n, o, i = s => s()) {
  const s = [];
  for (const r of t) for (const l in r.components) {
    let a = r.components[l];
    if (!(e !== "beforeRouteEnter" && !r.instances[l])) if (Rm(a)) {
      const d = (a.__vccOpts || a)[e];
      d && s.push(ge(d, n, o, r, l, i))
    } else {
      let c = a();
      s.push(() => c.then(d => {
        if (!d) return Promise.reject(new Error("Couldn't resolve component \"".concat(l, '" at "').concat(r.path, '"')));
        const u = Hp(d) ? d.default : d;
        r.components[l] = u;
        const m = (u.__vccOpts || u)[e];
        return m && ge(m, n, o, r, l, i)()
      }))
    }
  }
  return s
}

function Rm(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Lr(t) {
  const e = ft(fs), n = ft(Ao), o = Nt(() => e.resolve(ct(t.to))), i = Nt(() => {
      const { matched: a } = o.value, { length: c } = a, d = a[c - 1], u = n.matched;
      if (!d || !u.length) return -1;
      const f = u.findIndex(en.bind(null, d));
      if (f > -1) return f;
      const m = Or(a[c - 2]);
      return c > 1 && Or(d) === m && u[u.length - 1].path !== m ? u.findIndex(en.bind(null, a[c - 2])) : f
    }), s = Nt(() => i.value > -1 && Om(n.params, o.value.params)),
    r = Nt(() => i.value > -1 && i.value === n.matched.length - 1 && ja(n.params, o.value.params));

  function l(a = {}) {
    return Lm(a) ? e[ct(t.replace) ? "replace" : "push"](ct(t.to)).catch(bn) : Promise.resolve()
  }

  return { route: o, href: Nt(() => o.value.href), isActive: s, isExactActive: r, navigate: l }
}

const Am = Pt({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: "page" }
  },
  useLink: Lr,
  setup(t, { slots: e }) {
    const n = vo(Lr(t)), { options: o } = ft(fs), i = Nt(() => ({
      [Br(t.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      [Br(t.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = e.default && e.default(n);
      return t.custom ? s : kt("a", {
        "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: i.value
      }, s)
    }
  }
}), Pm = Am;

function Lm(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}

function Om(t, e) {
  for (const n in e) {
    const o = e[n], i = t[n];
    if (typeof o == "string") {
      if (o !== i) return !1
    } else if (!Yt(i) || i.length !== o.length || o.some((s, r) => s !== i[r])) return !1
  }
  return !0
}

function Or(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}

const Br = (t, e, n) => t != null ? t : e != null ? e : n, Bm = Pt({
  name: "RouterView",
  inheritAttrs: !1,
  props: { name: { type: String, default: "default" }, route: Object },
  compatConfig: { MODE: 3 },
  setup(t, { attrs: e, slots: n }) {
    const o = ft(Pi), i = Nt(() => t.route || o.value), s = ft(Pr, 0), r = Nt(() => {
      let c = ct(s);
      const { matched: d } = i.value;
      let u;
      for (; (u = d[c]) && !u.components;) c++;
      return c
    }), l = Nt(() => i.value.matched[r.value]);
    Ke(Pr, Nt(() => r.value + 1)), Ke(Wa, l), Ke(Pi, i);
    const a = qi();
    return Ge(() => [a.value, l.value, t.name], ([c, d, u], [f, m, w]) => {
      d && (d.instances[u] = c, m && m !== d && c && c === f && (d.leaveGuards.size || (d.leaveGuards = m.leaveGuards), d.updateGuards.size || (d.updateGuards = m.updateGuards))), c && d && (!m || !en(d, m) || !f) && (d.enterCallbacks[u] || []).forEach(v => v(c))
    }, { flush: "post" }), () => {
      const c = i.value, d = t.name, u = l.value, f = u && u.components[d];
      if (!f) return Mr(n.default, { Component: f, route: c });
      const m = u.props[d], w = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null,
        x = kt(f, nt({}, w, e, {
          onVnodeUnmounted: b => {
            b.component.isUnmounted && (u.instances[d] = null)
          }, ref: a
        }));
      return Mr(n.default, { Component: x, route: c }) || x
    }
  }
});

function Mr(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n
}

const Mm = Bm;

function zm(t) {
  const e = $m(t.routes, t), n = t.parseQuery || Ai, o = t.stringifyQuery || Ar, i = t.history, s = cn(), r = cn(),
    l = cn(), a = In(fe);
  let c = fe;
  Fe && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Go.bind(null, E => "" + E), u = Go.bind(null, Zp), f = Go.bind(null, Cn);

  function m(E, z) {
    let B, F;
    return Na(E) ? (B = e.getRecordMatcher(E), F = z) : F = E, e.addRoute(F, B)
  }

  function w(E) {
    const z = e.getRecordMatcher(E);
    z && e.removeRoute(z)
  }

  function v() {
    return e.getRoutes().map(E => E.record)
  }

  function x(E) {
    return !!e.getRecordMatcher(E)
  }

  function b(E, z) {
    if (z = nt({}, z || a.value), typeof E == "string") {
      const p = Ko(n, E, z.path), g = e.resolve({ path: p.path }, z), C = i.createHref(p.fullPath);
      return nt(p, g, { params: f(g.params), hash: Cn(p.hash), redirectedFrom: void 0, href: C })
    }
    let B;
    if (E.path != null) B = nt({}, E, { path: Ko(n, E.path, z.path).path }); else {
      const p = nt({}, E.params);
      for (const g in p) p[g] == null && delete p[g];
      B = nt({}, E, { params: u(p) }), z.params = u(z.params)
    }
    const F = e.resolve(B, z), et = E.hash || "";
    F.params = d(f(F.params));
    const lt = tm(o, nt({}, E, { hash: Kp(et), path: F.path })), h = i.createHref(lt);
    return nt({ fullPath: lt, hash: et, query: o === Ar ? Im(E.query) : E.query || {} }, F, {
      redirectedFrom: void 0,
      href: h
    })
  }

  function k(E) {
    return typeof E == "string" ? Ko(n, E, a.value.path) : nt({}, E)
  }

  function S(E, z) {
    if (c !== E) return nn(8, { from: z, to: E })
  }

  function T(E) {
    return _(E)
  }

  function R(E) {
    return T(nt(k(E), { replace: !0 }))
  }

  function $(E) {
    const z = E.matched[E.matched.length - 1];
    if (z && z.redirect) {
      const { redirect: B } = z;
      let F = typeof B == "function" ? B(E) : B;
      return typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = k(F) : { path: F }, F.params = {}), nt({
        query: E.query,
        hash: E.hash,
        params: F.path != null ? {} : E.params
      }, F)
    }
  }

  function _(E, z) {
    const B = c = b(E), F = a.value, et = E.state, lt = E.force, h = E.replace === !0, p = $(B);
    if (p) return _(nt(k(p), {
      state: typeof p == "object" ? nt({}, et, p.state) : et,
      force: lt,
      replace: h
    }), z || B);
    const g = B;
    g.redirectedFrom = z;
    let C;
    return !lt && em(o, F, B) && (C = nn(16, {
      to: g,
      from: F
    }), Qt(F, F, !0, !1)), (C ? Promise.resolve(C) : U(g, F)).catch(y => ie(y) ? ie(y, 2) ? y : Zt(y) : N(y, g, F)).then(y => {
      if (y) {
        if (ie(y, 2)) return _(nt({ replace: h }, k(y.to), {
          state: typeof y.to == "object" ? nt({}, et, y.to.state) : et,
          force: lt
        }), z || g)
      } else y = _t(g, F, !0, h, et);
      return D(g, F, y), y
    })
  }

  function O(E, z) {
    const B = S(E, z);
    return B ? Promise.reject(B) : Promise.resolve()
  }

  function j(E) {
    const z = Me.values().next().value;
    return z && typeof z.runWithContext == "function" ? z.runWithContext(E) : E()
  }

  function U(E, z) {
    let B;
    const [F, et, lt] = Hm(E, z);
    B = Xo(F.reverse(), "beforeRouteLeave", E, z);
    for (const p of F) p.leaveGuards.forEach(g => {
      B.push(ge(g, E, z))
    });
    const h = O.bind(null, E, z);
    return B.push(h), yt(B).then(() => {
      B = [];
      for (const p of s.list()) B.push(ge(p, E, z));
      return B.push(h), yt(B)
    }).then(() => {
      B = Xo(et, "beforeRouteUpdate", E, z);
      for (const p of et) p.updateGuards.forEach(g => {
        B.push(ge(g, E, z))
      });
      return B.push(h), yt(B)
    }).then(() => {
      B = [];
      for (const p of lt) if (p.beforeEnter) if (Yt(p.beforeEnter)) for (const g of p.beforeEnter) B.push(ge(g, E, z)); else B.push(ge(p.beforeEnter, E, z));
      return B.push(h), yt(B)
    }).then(() => (E.matched.forEach(p => p.enterCallbacks = {}), B = Xo(lt, "beforeRouteEnter", E, z, j), B.push(h), yt(B))).then(() => {
      B = [];
      for (const p of r.list()) B.push(ge(p, E, z));
      return B.push(h), yt(B)
    }).catch(p => ie(p, 8) ? p : Promise.reject(p))
  }

  function D(E, z, B) {
    l.list().forEach(F => j(() => F(E, z, B)))
  }

  function _t(E, z, B, F, et) {
    const lt = S(E, z);
    if (lt) return lt;
    const h = z === fe, p = Fe ? history.state : {};
    B && (F || h ? i.replace(E.fullPath, nt({ scroll: h && p && p.scroll }, et)) : i.push(E.fullPath, et)), a.value = E, Qt(E, z, B, h), Zt()
  }

  let W;

  function Bt() {
    W || (W = i.listen((E, z, B) => {
      if (!On.listening) return;
      const F = b(E), et = $(F);
      if (et) {
        _(nt(et, { replace: !0 }), F).catch(bn);
        return
      }
      c = F;
      const lt = a.value;
      Fe && cm(_r(lt.fullPath, B.delta), Ro()), U(F, lt).catch(h => ie(h, 12) ? h : ie(h, 2) ? (_(h.to, F).then(p => {
        ie(p, 20) && !B.delta && B.type === Sn.pop && i.go(-1, !1)
      }).catch(bn), Promise.reject()) : (B.delta && i.go(-B.delta, !1), N(h, F, lt))).then(h => {
        h = h || _t(F, lt, !1), h && (B.delta && !ie(h, 8) ? i.go(-B.delta, !1) : B.type === Sn.pop && ie(h, 20) && i.go(-1, !1)), D(F, lt, h)
      }).catch(bn)
    }))
  }

  let Ft = cn(), dt = cn(), Q;

  function N(E, z, B) {
    Zt(E);
    const F = dt.list();
    return F.length ? F.forEach(et => et(E, z, B)) : console.error(E), Promise.reject(E)
  }

  function Mt() {
    return Q && a.value !== fe ? Promise.resolve() : new Promise((E, z) => {
      Ft.add([E, z])
    })
  }

  function Zt(E) {
    return Q || (Q = !E, Bt(), Ft.list().forEach(([z, B]) => E ? B(E) : z()), Ft.reset()), E
  }

  function Qt(E, z, B, F) {
    const { scrollBehavior: et } = t;
    if (!Fe || !et) return Promise.resolve();
    const lt = !B && dm(_r(E.fullPath, 0)) || (F || !B) && history.state && history.state.scroll || null;
    return _l().then(() => et(E, z, lt)).then(h => h && am(h)).catch(h => N(h, E, z))
  }

  const Ct = E => i.go(E);
  let Be;
  const Me = new Set, On = {
    currentRoute: a,
    listening: !0,
    addRoute: m,
    removeRoute: w,
    hasRoute: x,
    getRoutes: v,
    resolve: b,
    options: t,
    push: T,
    replace: R,
    go: Ct,
    back: () => Ct(-1),
    forward: () => Ct(1),
    beforeEach: s.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: dt.add,
    isReady: Mt,
    install(E) {
      const z = this;
      E.component("RouterLink", Pm), E.component("RouterView", Mm), E.config.globalProperties.$router = z, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ct(a)
      }), Fe && !Be && a.value === fe && (Be = !0, T(i.location).catch(et => {
      }));
      const B = {};
      for (const et in fe) Object.defineProperty(B, et, { get: () => a.value[et], enumerable: !0 });
      E.provide(fs, z), E.provide(Ao, pl(B)), E.provide(Pi, a);
      const F = E.unmount;
      Me.add(E), E.unmount = function () {
        Me.delete(E), Me.size < 1 && (c = fe, W && W(), W = null, a.value = fe, Be = !1, Q = !1), F()
      }
    }
  };

  function yt(E) {
    return E.reduce((z, B) => z.then(() => j(B)), Promise.resolve())
  }

  return On
}

function Hm(t, e) {
  const n = [], o = [], i = [], s = Math.max(e.matched.length, t.matched.length);
  for (let r = 0; r < s; r++) {
    const l = e.matched[r];
    l && (t.matched.find(c => en(c, l)) ? o.push(l) : n.push(l));
    const a = t.matched[r];
    a && (e.matched.find(c => en(c, a)) || i.push(a))
  }
  return [n, o, i]
}

function Dm() {
  return ft(Ao)
}/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const jm = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
  Fm = jm,
  Nm = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
  Vm = Nm, Um = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = $t(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = e => {
        (e.key === "Enter" || e.key === " ") && this.selectTab(e)
      }, this.onClick = e => {
        this.selectTab(e)
      }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0
    }

    static get style() {
      return { ios: Fm, md: Vm }
    }

    get hasLabel() {
      return !!this.el.querySelector("ion-label")
    }

    get hasIcon() {
      return !!this.el.querySelector("ion-icon")
    }

    get el() {
      return this
    }

    onTabBarChanged(e) {
      const n = e.target, o = this.el.parentElement;
      (e.composedPath().includes(o) || n != null && n.contains(this.el)) && (this.selected = this.tab === e.detail.tab)
    }

    componentWillLoad() {
      this.inheritedAttributes = Object.assign({}, ca(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = it.get("tabButtonLayout", "icon-top"))
    }

    selectTab(e) {
      this.tab !== void 0 && (this.disabled || this.ionTabButtonClick.emit({
        tab: this.tab,
        href: this.href,
        selected: this.selected
      }), e.preventDefault())
    }

    render() {
      const {
        disabled: e,
        hasIcon: n,
        hasLabel: o,
        href: i,
        rel: s,
        target: r,
        layout: l,
        selected: a,
        tab: c,
        inheritedAttributes: d
      } = this, u = bt(this), f = { download: this.download, href: i, rel: s, target: r };
      return G(jt, {
        key: "32ec1fb183523dadaaed6689add4a042d0fdd69a",
        onClick: this.onClick,
        onKeyup: this.onKeyUp,
        id: c !== void 0 ? "tab-button-".concat(c) : null,
        class: {
          [u]: !0,
          "tab-selected": a,
          "tab-disabled": e,
          "tab-has-label": o,
          "tab-has-icon": n,
          "tab-has-label-only": o && !n,
          "tab-has-icon-only": n && !o,
          ["tab-layout-".concat(l)]: !0,
          "ion-activatable": !0,
          "ion-selectable": !0,
          "ion-focusable": !0
        }
      }, G("a", Object.assign({ key: "9e56304c52e30ae3a3dca434fa0b41eccc873faa" }, f, {
        class: "button-native",
        part: "native",
        role: "tab",
        "aria-selected": a ? "true" : null,
        "aria-disabled": e ? "true" : null,
        tabindex: e ? "-1" : void 0
      }, d), G("span", {
        key: "34eae18c23584742a25d20b4038aa1742d9ab0d8",
        class: "button-inner"
      }, G("slot", { key: "4bc9629861f5ce3f1ef87ac77bc027ba0dea694c" })), u === "md" && G("ion-ripple-effect", { type: "unbounded" })))
    }
  }, [33, "ion-tab-button", {
    disabled: [4],
    download: [1],
    href: [1],
    rel: [1],
    layout: [1025],
    selected: [1028],
    tab: [1],
    target: [1]
  }, [[8, "ionTabBarChanged", "onTabBarChanged"]]]);

function Wm() {
  if (typeof customElements > "u") return;
  ["ion-tab-button", "ion-ripple-effect"].forEach(e => {
    switch (e) {
      case"ion-tab-button":
        customElements.get(e) || customElements.define(e, Um);
        break;
      case"ion-ripple-effect":
        customElements.get(e) || _a();
        break
    }
  })
}

const qm = Wm;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Gm = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",
  Km = Gm,
  Xm = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}",
  Ym = Xm, Zm = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = $t(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = $t(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1
    }

    static get watchers() {
      return { selectedTab: ["selectedTabChanged"] }
    }

    static get style() {
      return { ios: Km, md: Ym }
    }

    get el() {
      return this
    }

    selectedTabChanged() {
      this.selectedTab !== void 0 && this.ionTabBarChanged.emit({ tab: this.selectedTab })
    }

    componentWillLoad() {
      this.selectedTabChanged()
    }

    async connectedCallback() {
      this.keyboardCtrl = await Nh(async (e, n) => {
        e === !1 && n !== void 0 && await n, this.keyboardVisible = e
      })
    }

    disconnectedCallback() {
      this.keyboardCtrl && this.keyboardCtrl.destroy()
    }

    componentDidLoad() {
      this.ionTabBarLoaded.emit()
    }

    render() {
      const { color: e, translucent: n, keyboardVisible: o } = this, i = bt(this),
        s = o && this.el.getAttribute("slot") !== "top";
      return G(jt, {
        key: "51e4bdbce8c7107c1114a39618b4a9a941876bb1",
        role: "tablist",
        "aria-hidden": s ? "true" : null,
        class: rn(e, { [i]: !0, "tab-bar-translucent": n, "tab-bar-hidden": s })
      }, G("slot", { key: "c11618f97e93deb0a56f33c904481b4811c685ec" }))
    }
  }, [33, "ion-tab-bar", {
    color: [513],
    selectedTab: [1, "selected-tab"],
    translucent: [4],
    keyboardVisible: [32]
  }, void 0, { selectedTab: ["selectedTabChanged"] }]);

function Qm() {
  if (typeof customElements > "u") return;
  ["ion-tab-bar"].forEach(e => {
    switch (e) {
      case"ion-tab-bar":
        customElements.get(e) || customElements.define(e, Zm);
        break
    }
  })
}

const Jm = Qm,
  tg = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",
  eg = tg, ng = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost()
    }

    static get style() {
      return eg
    }

    get el() {
      return this
    }

    componentDidLoad() {
      ig(async () => {
        const e = be(window, "hybrid");
        if (it.getBoolean("_testing") || Dt(() => import("./index9-eQicldAl.js"), []).then(i => i.startTapClick(it)), it.getBoolean("statusTap", e) && Dt(() => import("./status-tap-Cf80mk3q.js"), []).then(i => i.startStatusTap()), it.getBoolean("inputShims", og())) {
          const i = be(window, "ios") ? "ios" : "android";
          Dt(() => import("./input-shims-Ctb6B_Zf.js"), []).then(s => s.startInputShims(it, i))
        }
        const n = await Dt(() => Promise.resolve().then(() => Ih), void 0), o = e || co();
        it.getBoolean("hardwareBackButton", o) ? n.startHardwareBackButton() : (co() && Zf("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."), n.blockHardwareBackButton()), typeof window < "u" && Dt(() => import("./keyboard2-yWmjdbvd.js"), []).then(i => i.startKeyboardAssist(window)), Dt(() => import("./focus-visible-supuXXMI.js"), []).then(i => this.focusVisible = i.startFocusVisible())
      })
    }

    async setFocus(e) {
      this.focusVisible && this.focusVisible.setFocus(e)
    }

    render() {
      const e = bt(this);
      return G(jt, {
        key: "0ac01df6d90d8185017e1f8e8f02cdf407e6c94b",
        class: { [e]: !0, "ion-page": !0, "force-statusbar-padding": it.getBoolean("_forceStatusbarPadding") }
      })
    }
  }, [0, "ion-app", { setFocus: [64] }]),
  og = () => !!(be(window, "ios") && be(window, "mobile") || be(window, "android") && be(window, "mobileweb")),
  ig = t => {
    "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t, 32)
  };

function sg() {
  if (typeof customElements > "u") return;
  ["ion-app"].forEach(e => {
    switch (e) {
      case"ion-app":
        customElements.get(e) || customElements.define(e, ng);
        break
    }
  })
}

const rg = sg;
let Yo;
const lg = () => {
    if (typeof window > "u") return new Map;
    if (!Yo) {
      const t = window;
      t.Ionicons = t.Ionicons || {}, Yo = t.Ionicons.map = t.Ionicons.map || new Map
    }
    return Yo
  }, ag = t => {
    let e = Zo(t.src);
    return e || (e = qa(t.name, t.icon, t.mode, t.ios, t.md), e ? cg(e, t) : t.icon && (e = Zo(t.icon), e || (e = Zo(t.icon[t.mode]), e)) ? e : null)
  }, cg = (t, e) => {
    const n = lg().get(t);
    if (n) return n;
    try {
      return Kl("svg/".concat(t, ".svg"))
    } catch (o) {
      console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(t, '". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'), e)
    }
  },
  qa = (t, e, n, o, i) => (n = (n && Wn(n)) === "ios" ? "ios" : "md", o && n === "ios" ? t = Wn(o) : i && n === "md" ? t = Wn(i) : (!t && e && !Ga(e) && (t = e), ho(t) && (t = Wn(t))), !ho(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t),
  Zo = t => ho(t) && (t = t.trim(), Ga(t)) ? t : null, Ga = t => t.length > 0 && /(\/|\.)/.test(t),
  ho = t => typeof t == "string", Wn = t => t.toLowerCase(), dg = (t, e = []) => {
    const n = {};
    return e.forEach(o => {
      t.hasAttribute(o) && (t.getAttribute(o) !== null && (n[o] = t.getAttribute(o)), t.removeAttribute(o))
    }), n
  },
  ug = t => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl",
  fg = t => {
    const e = document.createElement("div");
    e.innerHTML = t;
    for (let o = e.childNodes.length - 1; o >= 0; o--) e.childNodes[o].nodeName.toLowerCase() !== "svg" && e.removeChild(e.childNodes[o]);
    const n = e.firstElementChild;
    if (n && n.nodeName.toLowerCase() === "svg") {
      const o = n.getAttribute("class") || "";
      if (n.setAttribute("class", (o + " s-ion-icon").trim()), Ka(n)) return e.innerHTML
    }
    return ""
  }, Ka = t => {
    if (t.nodeType === 1) {
      if (t.nodeName.toLowerCase() === "script") return !1;
      for (let e = 0; e < t.attributes.length; e++) {
        const n = t.attributes[e].name;
        if (ho(n) && n.toLowerCase().indexOf("on") === 0) return !1
      }
      for (let e = 0; e < t.childNodes.length; e++) if (!Ka(t.childNodes[e])) return !1
    }
    return !0
  }, hg = t => t.startsWith("data:image/svg+xml"), pg = t => t.indexOf(";utf8,") !== -1, Se = new Map, zr = new Map;
let Qo;
const mg = (t, e) => {
    let n = zr.get(t);
    if (!n) if (typeof fetch < "u" && typeof document < "u") if (hg(t) && pg(t)) {
      Qo || (Qo = new DOMParser);
      const i = Qo.parseFromString(t, "text/html").querySelector("svg");
      return i && Se.set(t, i.outerHTML), Promise.resolve()
    } else n = fetch(t).then(o => {
      if (o.ok) return o.text().then(i => {
        i && e !== !1 && (i = fg(i)), Se.set(t, i || "")
      });
      Se.set(t, "")
    }), zr.set(t, n); else return Se.set(t, ""), Promise.resolve();
    return n
  },
  gg = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
  bg = Lt(class extends Ot {
    constructor() {
      super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = vg(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
    }

    static get assetsDirs() {
      return ["svg"]
    }

    static get watchers() {
      return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }
    }

    static get style() {
      return gg
    }

    get el() {
      return this
    }

    componentWillLoad() {
      this.inheritedAttributes = dg(this.el, ["aria-label"])
    }

    connectedCallback() {
      this.waitUntilVisible(this.el, "50px", () => {
        this.isVisible = !0, this.loadIcon()
      })
    }

    componentDidLoad() {
      this.didLoadIcon || this.loadIcon()
    }

    disconnectedCallback() {
      this.io && (this.io.disconnect(), this.io = void 0)
    }

    waitUntilVisible(e, n, o) {
      if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
        const i = this.io = new window.IntersectionObserver(s => {
          s[0].isIntersecting && (i.disconnect(), this.io = void 0, o())
        }, { rootMargin: n });
        i.observe(e)
      } else o()
    }

    loadIcon() {
      if (this.isVisible) {
        const e = ag(this);
        e && (Se.has(e) ? this.svgContent = Se.get(e) : mg(e, this.sanitize).then(() => this.svgContent = Se.get(e)), this.didLoadIcon = !0)
      }
      this.iconName = qa(this.name, this.icon, this.mode, this.ios, this.md)
    }

    render() {
      const { flipRtl: e, iconName: n, inheritedAttributes: o, el: i } = this, s = this.mode || "md",
        r = n ? (n.includes("arrow") || n.includes("chevron")) && e !== !1 : !1, l = e || r;
      return G(jt, Object.assign({
        role: "img",
        class: Object.assign(Object.assign({ [s]: !0 }, yg(this.color)), {
          ["icon-".concat(this.size)]: !!this.size,
          "flip-rtl": l,
          "icon-rtl": l && ug(i)
        })
      }, o), this.svgContent ? G("div", {
        class: "icon-inner",
        innerHTML: this.svgContent
      }) : G("div", { class: "icon-inner" }))
    }
  }, [1, "ion-icon", {
    mode: [1025],
    color: [1],
    ios: [1],
    md: [1],
    flipRtl: [4, "flip-rtl"],
    name: [513],
    src: [1],
    icon: [8],
    size: [1],
    lazy: [4],
    sanitize: [4],
    svgContent: [32],
    isVisible: [32]
  }]), vg = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md",
  yg = t => t ? { "ion-color": !0, ["ion-color-".concat(t)]: !0 } : null;

function wg() {
  if (typeof customElements > "u") return;
  ["ion-icon"].forEach(e => {
    switch (e) {
      case"ion-icon":
        customElements.get(e) || customElements.define(e, bg);
        break
    }
  })
}

const xg = wg;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Hr;
(function (t) {
  t.Dark = "DARK", t.Light = "LIGHT", t.Default = "DEFAULT"
})(Hr || (Hr = {}));
const Dr = "update:modelValue", Jo = "modelValue", kg = "routerLink", jr = "navManager", _g = "router", Eg = "aria",
  Ne = Symbol(), ti = { default: Ne }, Fr = t => (t == null ? void 0 : t.split(" ")) || [], $g = (t, e, n = []) => {
    var o;
    return [...Array.from(((o = t.value) === null || o === void 0 ? void 0 : o.classList) || []), ...n].filter((i, s, r) => !e.has(i) && r.indexOf(i) === s)
  }, Ln = (t, e, n = [], o, i) => {
    e !== void 0 && e();
    const s = Pt((r, { attrs: l, slots: a, emit: c }) => {
      var d;
      let u = r[o];
      const f = qi(), m = new Set(Fr(l.class)), w = {
          created: S => {
            (Array.isArray(i) ? i : [i]).forEach(R => {
              S.addEventListener(R.toLowerCase(), $ => {
                u = ($ == null ? void 0 : $.target)[o], c(Dr, u)
              })
            })
          }
        }, v = ts(),
        b = ((d = v == null ? void 0 : v.appContext) === null || d === void 0 ? void 0 : d.provides[jr]) ? ft(jr) : void 0,
        k = S => {
          const { routerLink: T } = r;
          if (T !== Ne) if (b !== void 0) {
            let R = { event: S };
            for (const $ in r) {
              const _ = r[$];
              r.hasOwnProperty($) && $.startsWith(_g) && _ !== Ne && (R[$] = _)
            }
            b.navigate(R)
          } else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")
        };
      return () => {
        u = r[o], Fr(l.class).forEach(_ => {
          m.add(_)
        });
        const S = r.onClick, T = _ => {
          S !== void 0 && S(_), _.defaultPrevented || k(_)
        };
        let R = { ref: f, class: $g(f, m), onClick: T };
        for (const _ in r) {
          const O = r[_];
          (r.hasOwnProperty(_) && O !== Ne || _.startsWith(Eg)) && (R[_] = O)
        }
        o && (r[Jo] !== Ne ? R = Object.assign(Object.assign({}, R), { [o]: r[Jo] }) : u !== Ne && (R = Object.assign(Object.assign({}, R), { [o]: u })));
        const $ = kt(t, R, a.default && a.default());
        return o === void 0 ? $ : nd($, [[w]])
      }
    });
    return typeof s != "function" && (s.name = t, s.props = { [kg]: ti }, n.forEach(r => {
      s.props[r] = ti
    }), o && (s.props[Jo] = ti, s.emits = [Dr])), s
  },
  Eb = Ln("ion-content", mh, ["color", "fullscreen", "forceOverscroll", "scrollX", "scrollY", "scrollEvents", "ionScrollStart", "ionScroll", "ionScrollEnd"]),
  $b = Ln("ion-header", tp, ["collapse", "translucent"]),
  ei = Ln("ion-label", ep, ["color", "position", "ionColor", "ionStyle"]),
  Cb = Ln("ion-title", vp, ["color", "size", "ionStyle"]), Sb = Ln("ion-toolbar", $p, ["color"]);
var oe;
(function (t) {
  t.WillEnter = "onIonViewWillEnter", t.DidEnter = "onIonViewDidEnter", t.WillLeave = "onIonViewWillLeave", t.DidLeave = "onIonViewDidLeave"
})(oe || (oe = {}));
const Cg = { [ls]: oe.WillEnter, [as]: oe.DidEnter, [To]: oe.WillLeave, [Io]: oe.DidLeave }, Nr = { main: 0 },
  Sg = (t = "main") => {
    var e;
    const n = ((e = Nr[t]) !== null && e !== void 0 ? e : 0) + 1;
    return Nr[t] = n, n.toString()
  }, qn = (t, e, n) => {
    t != null && t[n] && t[n].bind(e == null ? void 0 : e.value)();
    const o = e == null ? void 0 : e.value;
    if (o != null && o[n] && o[n](), o) {
      const i = Cg[n], s = o[i];
      s && s.forEach(r => r())
    }
  }, Xa = () => {
    if (typeof window < "u") {
      const t = window.Ionic;
      if (t && t.config) return t.config
    }
    return null
  }, Tg = (t, e, n) => {
    if (n) {
      const o = n, i = o.proxy[t] || (o.proxy[t] = []);
      o.exposed && (o.exposed[t] = i);
      const s = (...r) => {
        if (!o.isUnmounted) return r ? e(...r) : e()
      };
      return i.push(s), s
    } else console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")
  }, Po = t => (e, n = ts()) => Tg(t, e, n);
Po(oe.WillEnter);
Po(oe.DidEnter);
Po(oe.WillLeave);
Po(oe.DidLeave);
const ni = t => t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), Ig = () => ({
  ael: (t, e, n, o) => t.addEventListener(ni(e), n, o),
  rel: (t, e, n, o) => t.removeEventListener(ni(e), n, o),
  ce: (t, e) => new CustomEvent(ni(t), e)
}), Rg = {
  async install(t, e = {}) {
    typeof document < "u" && document.documentElement.classList.add("ion-ce");
    const { ael: n, rel: o, ce: i } = Ig();
    Bf(Object.assign(Object.assign({}, e), { _ael: n, _rel: o, _ce: i }))
  }
}, Ag = Pt((t, { attrs: e, slots: n }) => {
  Pp();
  const o = ft("navManager"), i = () => {
    if (o === void 0) return;
    const s = e["default-href"] || e.defaultHref, r = e["router-animation"] || e.routerAnimation;
    o.handleNavigateBack(s, r)
  };
  return () => kt("ion-back-button", Object.assign({ onClick: i }, e), n.default && n.default())
});
Ag.name = "IonBackButton";
const Pg = Pt({
    name: "IonPage", props: {
      registerIonPage: {
        type: Function, default: () => {
        }
      }
    }, mounted() {
      this.$props.registerIonPage(this.$refs.ionPage)
    }, setup(t, { attrs: e, slots: n }) {
      return () => kt("div", Object.assign(Object.assign({}, e), {
        class: "ion-page",
        ref: "ionPage"
      }), n.default && n.default())
    }
  }), Vr = t => !t.classList.contains("ion-page-hidden") && !t.classList.contains("ion-page-invisible"), Ur = Symbol(0),
  Ya = Pt({
    name: "IonRouterOutlet", setup() {
      zp();
      const t = ft(Ao), e = Dm(), n = ft(Ur, 0), o = Nt(() => e.matched[n]);
      let i, s;
      Ke(Ur, n + 1), Ke(Wa, o);
      const r = qi(), l = Sg("ion-router-outlet"), a = ft("navManager"), c = ft("viewStacks"), d = In([]);
      let u = !1, f;
      Ge(() => [e, o.value], ([T, R]) => {
        if (R !== void 0) {
          const $ = R !== i, _ = T.matched[T.matched.length - 1] === R && T.path !== s;
          ($ || _) && k(o)
        }
        i = R, s = T.path
      }, { deep: !0 });
      const m = () => {
        const T = Xa();
        if (!(T && T.get("swipeBackEnabled", r.value.mode === "ios"))) return !1;
        const $ = c.getViewStack(l);
        if (!$ || $.length <= 1) return !1;
        const _ = a.getLeavingRouteInfo();
        return !!c.findViewItemByRouteInfo({ pathname: _.pushedByRoute || "" }, l)
      }, w = async () => {
        const T = a.getLeavingRouteInfo(), { routerAnimation: R } = T,
          $ = c.findViewItemByRouteInfo({ pathname: T.pushedByRoute || "" }, l), _ = c.findViewItemByRouteInfo(T, l);
        if (_) {
          let O = R;
          const j = $.ionPageElement, U = _.ionPageElement, D = $.routerAnimation;
          O === void 0 && D !== void 0 && (O = D), _.routerAnimation = O, await x(j, U, "back", a.canGoBack(2), !0, O)
        }
        return Promise.resolve()
      }, v = T => {
        if (T) u = !0, a.handleNavigateBack(); else {
          const R = a.getCurrentRouteInfo(), $ = c.findViewItemByRouteInfo({ pathname: R.pushedByRoute || "" }, l);
          $.ionPageElement.setAttribute("aria-hidden", "true"), $.ionPageElement.classList.add("ion-page-hidden")
        }
      };
      Ge(r, () => {
        r.value.swipeHandler = { canStart: m, onStart: w, onEnd: v }
      });
      const x = async (T, R, $, _, O, j) => {
        if (u) return u = !1, Promise.resolve(!1);
        if (T === R) return Promise.resolve(!1);
        T.classList.add("ion-page-invisible");
        const U = $ === void 0 || $ === "root" || $ === "none";
        return await r.value.commit(T, R, {
          duration: U && j === void 0 ? 0 : void 0,
          direction: $,
          showGoBack: _,
          progressAnimation: O,
          animationBuilder: j
        })
      }, b = async () => {
        const T = a.getCurrentRouteInfo(), {
          routerDirection: R,
          routerAction: $,
          routerAnimation: _,
          prevRouteLastPathname: O,
          delta: j
        } = T, U = c.findViewItemByRouteInfo(T, l);
        let D = c.findLeavingViewItemByRouteInfo(T, l);
        const _t = U.ionPageElement;
        if (_t === void 0 && console.warn("[@ionic/vue Warning]: The view you are trying to render for path ".concat(T.pathname, " does not have the required <ion-page> component. Transitions and lifecycle methods may not work as expected.\n\nSee https://ionicframework.com/docs/vue/navigation#ionpage for more information.")), U !== D && (!D && O && (D = c.findViewItemByPathname(O, l)), !(Vr(_t) && (D == null ? void 0 : D.ionPageElement) !== void 0 && !Vr(D.ionPageElement)))) {
          if (qn(U.vueComponent, U.vueComponentRef, ls), D != null && D.ionPageElement && U !== D) {
            let W = _;
            const Bt = D.ionPageElement;
            qn(D.vueComponent, D.vueComponentRef, To);
            const Ft = U.routerAnimation;
            W === void 0 && R === "back" && Ft !== void 0 && (W = Ft), D.routerAnimation = W, await x(_t, Bt, R, !!T.pushedByRoute, !1, W), Bt.classList.add("ion-page-hidden"), Bt.setAttribute("aria-hidden", "true");
            const dt = c.size() === 1;
            $ === "replace" ? (D.mount = !1, D.ionPageElement = void 0, D.ionRoute = !1) : $ === "push" && R === "forward" ? dt && c.mountIntermediaryViews(l, D, j) : R !== "none" && D && U !== D && (D.mount = !1, D.ionPageElement = void 0, D.ionRoute = !1, dt && c.unmountLeavingViews(l, U, j)), qn(D.vueComponent, D.vueComponentRef, Io)
          } else requestAnimationFrame(() => _t.classList.remove("ion-page-invisible"));
          qn(U.vueComponent, U.vueComponentRef, as), d.value = c.getChildrenToRender(l)
        }
      }, k = T => {
        const R = e.matched[0];
        if (f || (f = R.path), !T.value || T.value !== R && R.path !== f) return;
        const $ = a.getCurrentRouteInfo();
        let _ = c.findViewItemByRouteInfo($, l);
        _ || (_ = c.createViewItem(l, T.value.components.default, T.value, $), c.add(_)), _.mount ? b() : (_.mount = !0, _.registerCallback = () => {
          b(), _.registerCallback = void 0
        }), d.value = c.getChildrenToRender(l)
      };
      return o.value && k(o), Xi(() => c.clear(l)), {
        id: l,
        components: d,
        injectedRoute: t,
        ionRouterOutlet: r,
        registerIonPage: (T, R) => {
          const $ = T.ionPageElement;
          c.registerIonPage(T, R), T.registerCallback ? (R.classList.add("ion-page-invisible"), T.registerCallback()) : $ && !$.classList.contains("ion-page-invisible") && R.classList.remove("ion-page-invisible")
        }
      }
    }, render() {
      const { components: t, registerIonPage: e, injectedRoute: n } = this;
      return kt("ion-router-outlet", { ref: "ionRouterOutlet" }, t && t.map(o => {
        var i, s;
        let r = { ref: o.vueComponentRef, key: o.pathname, registerIonPage: d => e(o, d) };
        const l = (s = (i = o.matchedRoute) === null || i === void 0 ? void 0 : i.props) === null || s === void 0 ? void 0 : s.default,
          c = l ? l === !0 ? o.params : typeof l == "function" ? (() => {
            var d;
            const u = (d = o.vueComponentData) === null || d === void 0 ? void 0 : d.propsFunctionResult;
            if (u) return u;
            {
              const f = l(n);
              return o.vueComponentData = Object.assign(Object.assign({}, o.vueComponentData), { propsFunctionResult: f }), f
            }
          })() : l : null;
        return r = Object.assign(Object.assign({}, r), c), kt(o.vueComponent, r)
      }))
    }
  }), oi = Pt({
    name: "IonTabButton",
    props: {
      _getTabState: { type: Function, default: () => ({}) },
      disabled: Boolean,
      download: String,
      href: String,
      rel: String,
      layout: String,
      selected: Boolean,
      tab: String,
      target: String
    },
    setup(t, { slots: e }) {
      qm();
      const n = ft("navManager"), o = i => {
        i.cancelable && i.preventDefault();
        const { tab: s, href: r, _getTabState: l } = t, a = l(), c = a.tabs[s] || {}, d = c.originalHref || r,
          u = c.currentHref || r;
        a.activeTab === s ? d !== u && n.resetTab(s) : n.changeTab(s, u)
      };
      return () => kt("ion-tab-button", Object.assign({ onClick: o }, t), e.default && e.default())
    }
  }), Wr = "ionTabsWillChange", qr = "ionTabsDidChange",
  Gr = t => t.type && (t.type.name === "IonRouterOutlet" || t.type === "ion-router-outlet"),
  Lg = t => t.type && (t.type.name === "IonTabBar" || t.type === "ion-tab-bar"), Og = Pt({
    name: "IonTabs", emits: [Wr, qr], render() {
      var t;
      const { $slots: e, $emit: n } = this, o = e.default && e.default();
      let i;
      if (o && o.length > 0 && (i = o.find(r => Gr(r))), !i) throw new Error("IonTabs must contain an IonRouterOutlet. See https://ionicframework.com/docs/vue/navigation#working-with-tabs for more information.");
      let s = [kt("div", {
        class: "tabs-inner",
        style: { position: "relative", flex: "1", contain: "layout size style" }
      }, i)];
      if (o && o.length > 0) {
        const r = o.filter(c => !c.type || !Gr(c)), l = r.find(c => Lg(c)),
          a = l && ((t = l.props) === null || t === void 0 ? void 0 : t.slot) === "top";
        l && (l.props || (l.props = {}), l.props._tabsWillChange = c => n(Wr, { tab: c }), l.props._tabsDidChange = c => n(qr, { tab: c })), a ? s = [...r, ...s] : s = [...s, ...r]
      }
      return kt("ion-tabs", {
        style: {
          display: "flex",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          "flex-direction": "column",
          width: "100%",
          height: "100%",
          contain: "layout size style",
          "z-index": "0"
        }
      }, s)
    }
  }), Za = t => {
    var e;
    return ((e = t.type) === null || e === void 0 ? void 0 : e.name) === "IonTabButton"
  }, Qa = t => {
    let e = [];
    return t.forEach(n => {
      if (Za(n)) e.push(n); else if (Array.isArray(n.children) && n.children.length > 1) {
        const o = Qa(n.children);
        e = [...e, ...o]
      }
    }), e
  }, Bg = Pt({
    name: "IonTabBar", props: {
      _tabsWillChange: {
        type: Function, default: () => {
        }
      }, _tabsDidChange: {
        type: Function, default: () => {
        }
      }
    }, data() {
      return { tabState: { activeTab: void 0, tabs: {} }, tabVnodes: [] }
    }, updated() {
      this.setupTabState(ft("navManager"))
    }, methods: {
      setupTabState(t) {
        const e = this.$data.tabState, n = ts();
        (this.$data.tabVnodes = Qa(n.subTree.children || [])).forEach(i => {
          e.tabs[i.props.tab] = {
            originalHref: i.props.href,
            currentHref: i.props.href,
            ref: i
          }, i.component.props._getTabState = () => e
        }), this.checkActiveTab(t)
      }, checkActiveTab(t) {
        const e = t.getCurrentRouteInfo(), n = this.$data.tabVnodes, { tabs: o, activeTab: i } = this.$data.tabState,
          s = this.$data.tabState, l = Object.keys(o).find(u => {
            const f = o[u].originalHref;
            return e.pathname.startsWith(f)
          });
        if (n.forEach(u => {
          const f = o[u.props.tab];
          (!f || f.originalHref !== u.props.href) && (o[u.props.tab] = {
            originalHref: u.props.href,
            currentHref: u.props.href,
            ref: u
          })
        }), l && i) {
          const u = this.$data.tabState.tabs[i].currentHref;
          if (l !== i || u !== e.pathname) {
            const f = e.search ? "?".concat(e.search) : "";
            o[l] = Object.assign(Object.assign({}, o[l]), { currentHref: e.pathname + f })
          }
          e.routerAction === "pop" && l !== i && (o[i] = Object.assign(Object.assign({}, o[i]), { currentHref: o[i].originalHref }))
        }
        const a = n.find(u => {
          var f;
          return Za(u) && ((f = u.props) === null || f === void 0 ? void 0 : f.tab) === l
        }), c = this.$refs.ionTabBar, d = l !== i;
        c && (a ? (d && this.$props._tabsWillChange(l), t.handleSetCurrentTab(l), c.selectedTab = s.activeTab = l, d && this.$props._tabsDidChange(l)) : c.selectedTab = s.activeTab = "")
      }
    }, mounted() {
      const t = ft("navManager");
      this.setupTabState(t), t.registerHistoryChangeListener(() => this.checkActiveTab(t))
    }, setup(t, { slots: e }) {
      return Jm(), () => kt("ion-tab-bar", { ref: "ionTabBar" }, e.default && e.default())
    }
  }), Tn = In([]), Ja = Pt((t, {
    attrs: e,
    slots: n
  }) => (rg(), () => kt("ion-app", Object.assign({}, e), [n.default && n.default(), ...Tn.value])));
Ja.name = "IonApp";
const Mg = t => {
  Tn.value = [...Tn.value, t]
}, zg = t => {
  Tn.value = Tn.value.filter(e => e !== t)
}, Hg = (t = Mg, e = zg) => {
  const n = new WeakMap;
  return {
    attachViewToDom: (s, r, l = {}, a) => {
      const c = document.createElement("div");
      a && c.classList.add(...a), s.appendChild(c);
      const d = kt(Bd, { to: c }, kt(r, Object.assign({}, l)));
      return n.set(c, d), t(d), Promise.resolve(c)
    }, removeViewFromDom: (s, r) => {
      const l = n.get(r);
      return l && e(l), Promise.resolve()
    }
  }
}, tc = Pt(t => {
  up();
  const e = In([]), i = Hg(s => e.value = [...e.value, s], s => e.value = e.value.filter(r => r !== s));
  return () => kt("ion-nav", Object.assign(Object.assign({}, t), { delegate: i }), e.value)
});
tc.name = "IonNav";
tc.props = {
  animated: { type: Boolean, default: !0 },
  animation: { type: Function, default: void 0 },
  root: { type: [Function, Object, String], default: void 0 },
  rootParams: { type: Object, default: void 0 },
  swipeGesture: { type: Boolean, default: void 0 }
};
const ii = Pt({
    name: "IonIcon",
    props: {
      color: String,
      flipRtl: Boolean,
      icon: String,
      ios: String,
      lazy: String,
      md: String,
      mode: String,
      name: String,
      size: String,
      src: String
    },
    setup(t, { slots: e }) {
      return xg(), () => {
        var n, o;
        const { icon: i, ios: s, md: r, mode: l } = t;
        let a;
        const c = Xa(), d = l || (c == null ? void 0 : c.get("mode"));
        return s || r ? d === "ios" ? a = (n = s != null ? s : r) !== null && n !== void 0 ? n : i : a = (o = r != null ? r : s) !== null && o !== void 0 ? o : i : a = i, kt("ion-icon", Object.assign(Object.assign({}, t), { icon: a }), e)
      }
    }
  }), Dg = Pt({
    __name: "App", setup(t) {
      return (e, n) => (Fl(), Vl(ct(Ja), null, { default: qt(() => [st(ct(Ya))]), _: 1 }))
    }
  }), jg = () => {
    const t = [], e = {}, n = v => {
      switch (v.routerAction) {
        case"pop":
          i(v);
          break;
        default:
          s(v);
          break
      }
      v.routerDirection === "root" && (r(), s(v))
    }, o = v => {
      const x = t.findIndex(k => k.id === v.id);
      x > -1 && t.splice(x, 1, v);
      const b = e[v.tab || ""];
      if (b) {
        const k = b.findIndex(S => S.id === v.id);
        k > -1 ? b.splice(k, 1, v) : b.push(v)
      } else v.tab && (e[v.tab] = [v])
    }, i = v => {
      const x = l(v.tab);
      let b;
      if (x) {
        for (b = x[x.length - 1]; b && b.id !== v.id;) x.pop(), b = x[x.length - 1];
        x.pop(), x.push(v)
      }
      for (b = t[t.length - 1]; b && b.id !== v.id;) t.pop(), b = t[t.length - 1];
      t.pop(), t.push(v)
    }, s = v => {
      const x = l(v.tab);
      x && (x[x.length - 1] && x[x.length - 1].id === v.id && x.pop(), x.push(v)), t.push(v)
    }, r = v => {
      if (v) {
        const { position: x, tab: b } = v, k = t.findIndex(R => R.position === x);
        if (k === -1) return;
        t.splice(k);
        const S = R => {
          const $ = e[R].findIndex(_ => _.position === x);
          $ !== -1 && e[R].splice($)
        }, T = e[b];
        if (b && T) S(b); else for (const R in e) S(R)
      } else {
        for (const x in e) e[x] = [];
        t.length = 0
      }
    }, l = v => {
      let x;
      return v && (x = e[v], x || (x = e[v] = [])), x
    }, a = () => t.length, c = (v, x) => {
      const b = x - v;
      return t[b] || d()
    }, d = () => t[t.length - 1];
    return {
      current: c,
      size: a,
      last: d,
      add: n,
      canGoBack: (v = 1, x, b) => b - v >= x,
      update: o,
      getFirstRouteInfoForTab: v => {
        const x = l(v);
        if (x) return x[0]
      },
      getCurrentRouteInfoForTab: v => {
        const x = l(v);
        if (x) return x[x.length - 1]
      },
      findLastLocation: (v, x = -1) => {
        const b = l(v.tab);
        if (b) {
          if (x < -1) return b[b.length - 1 + x];
          for (let k = b.length - 2; k >= 0; k--) {
            const S = b[k];
            if (S && S.pathname === v.pushedByRoute) return S
          }
        }
        if (x < -1) return t[t.length - 1 + x];
        for (let k = t.length - 2; k >= 0; k--) {
          const S = t[k];
          if (S && S.pathname === v.pushedByRoute) return S
        }
      },
      clearHistory: r
    }
  }, Kr = { main: 0 }, ec = (t = "main") => {
    var e;
    const n = ((e = Kr[t]) !== null && e !== void 0 ? e : 0) + 1;
    return Kr[t] = n, n.toString()
  }, Fg = (t, e) => {
    let n = { direction: void 0, action: void 0, delta: void 0 };
    e.afterEach((_, O, j) => {
      if (j) return;
      const { direction: U, action: D, delta: _t } = n;
      s = t.history.state.position;
      const W = t.history.state.replaced ? "replace" : void 0;
      u(_, D || W, U, _t), n = { direction: void 0, action: void 0, delta: void 0 }
    });
    const o = jg();
    let i = t.history.state.position, s = t.history.state.position, r, l;
    const a = [];
    typeof document < "u" && document.addEventListener("ionBackButton", _ => {
      _.detail.register(0, O => {
        t.history.go(-1), O()
      })
    }), t.history.listen((_, O, j) => {
      n = {
        delta: j.delta,
        action: j.type === "pop" && j.delta >= 1 ? "push" : j.type,
        direction: j.direction === "" ? "forward" : j.direction
      }
    });
    const c = (_, O) => {
      const j = o.current(i, s);
      if (j && j.pushedByRoute) {
        const U = o.findLastLocation(j);
        U ? (l = Object.assign(Object.assign({}, U), {
          routerAction: "pop",
          routerDirection: "back",
          routerAnimation: O || j.routerAnimation
        }), j.lastPathname === j.pushedByRoute || U.pathname === j.pushedByRoute && !j.tab && !U.tab ? e.back() : e.go(U.position - j.position)) : d(_, "pop", "back", O)
      } else d(_, "pop", "back", O)
    }, d = (_, O, j, U, D) => {
      S(O, j, U, D), O === "push" ? e.push(_) : e.replace(_)
    }, u = (_, O, j, U) => {
      let D;
      if (l) if (l.routerAction === "replace") D = o.current(i, s); else if (l.routerAction === "pop") D = o.current(i, s + 1), O === "replace" && o.clearHistory(); else {
        const W = l.routerDirection === "root" ? s : s - 1;
        D = o.current(i, W)
      } else D = r;
      if (D || (D = { pathname: "", search: "" }), D.pathname + D.search !== _.fullPath) {
        if (!l) {
          if (O === "replace") l = { routerAction: "replace", routerDirection: "none" }; else if (O === "pop") {
            const Q = o.current(i, s - U);
            if (Q && Q.pushedByRoute) {
              const N = o.findLastLocation(Q, U);
              l = Object.assign(Object.assign({}, N), { routerAction: "pop", routerDirection: "back" })
            } else l = { routerAction: "pop", routerDirection: "none" }
          }
          l || (l = { routerAction: "push", routerDirection: j || "forward" })
        }
        let W;
        if (l != null && l.id) W = Object.assign(Object.assign({}, l), { lastPathname: D.pathname }); else {
          const Q = l.routerAction === "push" && l.routerDirection === "forward";
          if (W = Object.assign(Object.assign({ id: ec("routeInfo") }, l), {
            lastPathname: D.pathname,
            pathname: _.path,
            search: _.fullPath && _.fullPath.split("?")[1] || "",
            params: _.params && _.params,
            prevRouteLastPathname: D.lastPathname
          }), Q) W.pushedByRoute = D.pathname !== "" ? D.pathname : void 0; else if (W.routerAction === "pop") {
            const N = o.findLastLocation(W);
            W.pushedByRoute = N == null ? void 0 : N.pushedByRoute
          } else if (W.routerAction === "push" && W.tab !== D.tab) {
            const N = o.getCurrentRouteInfoForTab(W.tab);
            W.pushedByRoute = N == null ? void 0 : N.pushedByRoute
          } else if (W.routerAction === "replace") {
            const N = o.current(i, s), Mt = N == null ? void 0 : N.pushedByRoute,
              Zt = Mt !== void 0 && Mt !== W.pathname ? Mt : W.pushedByRoute;
            W.lastPathname = (N == null ? void 0 : N.pathname) || W.lastPathname, W.pushedByRoute = Zt, W.routerDirection = (N == null ? void 0 : N.routerDirection) || W.routerDirection, W.routerAnimation = (N == null ? void 0 : N.routerAnimation) || W.routerAnimation, W.prevRouteLastPathname = N == null ? void 0 : N.lastPathname
          }
        }
        W.position = s, W.delta = U;
        const Bt = o.size(), Ft = s - i, dt = Bt === Ft && Bt > 0 && O === "replace";
        Bt > Ft || dt ? (W.routerAction === "push" || W.routerAction === "replace") && U === void 0 && (o.clearHistory(W), o.add(W)) : o.add(W), o.size() === 1 && (i = W.position), r = W
      }
      l = void 0, a.forEach(W => W(r))
    }, f = () => r, m = (_ = 1) => o.canGoBack(_, i, s), w = _ => {
      const { routerAnimation: O, routerDirection: j, routerLink: U } = _;
      S("push", j, O), e.push(U)
    }, v = _ => {
      const O = o.getFirstRouteInfoForTab(_);
      O && e.go(O.position - s)
    }, x = (_, O) => {
      if (!O) return;
      const j = o.getCurrentRouteInfoForTab(_), [U] = O.split("?");
      j ? (l = Object.assign(Object.assign({}, l), {
        routerAction: "push",
        routerDirection: "none",
        tab: _
      }), j.pathname === U ? e.push({ path: j.pathname, query: Ai(j.search) }) : e.push({
        path: U,
        query: Ai(j.search)
      })) : d(U, "push", "none", void 0, _)
    }, b = _ => {
      const O = Object.assign({}, o.current(i, s));
      O.tab !== _ && (O.tab = _, o.update(O));
      const j = o.findLastLocation(O);
      O.pushedByRoute !== O.lastPathname && (j == null ? void 0 : j.tab) !== _ && (O.pushedByRoute = void 0, o.update(O))
    }, k = _ => {
      a.push(_)
    }, S = (_ = "push", O = "forward", j, U) => {
      l = { routerAction: _, routerDirection: O, routerAnimation: j, tab: U }
    };
    return {
      handleNavigate: d,
      getLeavingRouteInfo: () => o.current(i, s),
      handleNavigateBack: c,
      handleSetCurrentTab: b,
      getCurrentRouteInfo: f,
      canGoBack: m,
      navigate: w,
      resetTab: v,
      changeTab: x,
      registerHistoryChangeListener: k,
      goBack: _ => {
        S("pop", "back", _), e.back()
      },
      goForward: _ => {
        S("push", "forward", _), e.forward()
      }
    }
  }, Ng = t => {
    const e = {}, n = () => Object.keys(e).length, o = b => {
        delete e[b]
      }, i = b => e[b], s = (b, k) => {
        b.ionPageElement = k, b.ionRoute = !0, b.matchedRoute.instances = { default: b.vueComponentRef.value }
      }, r = (b, k) => d(b.pathname, k, !1), l = (b, k, S = !0) => d(b.lastPathname, k, S), a = (b, k) => d(b, k, !1),
      c = (b, k) => k.find(S => {
        if (S.pathname === b) return S
      }), d = (b, k, S = !1) => {
        const T = R => {
          if (S && !R.ionRoute || b === "") return !1;
          const _ = t.resolve(b).matched.find(O => O === R.matchedRoute);
          if (_) return _.path.includes(":") && b !== R.pathname ? !1 : R
        };
        if (k) {
          const R = e[k];
          if (!R) return;
          const $ = t ? R.find(T) : c(b, R);
          if ($) return $
        } else for (const R in e) {
          const $ = e[R], _ = c(b, $);
          if (_) return _
        }
      };
    return {
      unmountLeavingViews: (b, k, S = 1) => {
        const T = e[b];
        if (!T) return;
        const R = T.findIndex($ => $ === k);
        for (let $ = R + 1; $ < R - S; $++) {
          const _ = T[$];
          _.mount = !1, _.ionPageElement = void 0, _.ionRoute = !1, _.matchedRoute.instances = {}
        }
      },
      mountIntermediaryViews: (b, k, S = 1) => {
        const T = e[b];
        if (!T) return;
        const R = T.findIndex($ => $ === k);
        for (let $ = R + 1; $ < R + S; $++) T[$].mount = !0
      },
      clear: o,
      findViewItemByRouteInfo: r,
      findLeavingViewItemByRouteInfo: l,
      findViewItemByPathname: a,
      createViewItem: (b, k, S, T, R) => ({
        id: ec("viewItem"),
        pathname: T.pathname,
        outletId: b,
        matchedRoute: S,
        ionPageElement: R,
        vueComponent: k,
        vueComponentRef: In(),
        ionRoute: !1,
        mount: !1,
        exact: T.pathname === S.path,
        params: T.params,
        vueComponentData: {}
      }),
      getChildrenToRender: b => e[b] ? e[b].filter(T => T.mount) : [],
      add: b => {
        const { outletId: k } = b;
        e[k] ? e[k].push(b) : e[k] = [b]
      },
      remove: (b, k) => {
        if (!k) throw Error("outletId required");
        const S = e[k];
        S && (e[k] = S.filter(T => T.id !== b.id))
      },
      registerIonPage: s,
      getViewStack: i,
      size: n
    }
  }, Vg = t => {
    const e = Object.assign({}, t);
    delete e.tabsPrefix;
    const n = zm(e), o = Fg(t, n), i = Ng(n), s = n.install.bind(n);
    n.install = l => {
      l.provide("navManager", o), l.provide("viewStacks", i), s(l)
    };
    const r = n.isReady.bind(n);
    return n.isReady = () => r(), n
  }, Ug = t => pm(t),
  Wg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>",
  qg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>",
  Gg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>",
  Kg = Pt({
    __name: "TabsPage", setup(t) {
      return (e, n) => (Fl(), Vl(ct(Pg), null, {
        default: qt(() => [st(ct(Og), null, {
          default: qt(() => [st(ct(Ya)), st(ct(Bg), { slot: "bottom" }, {
            default: qt(() => [st(ct(oi), {
              tab: "tab1",
              href: "/tabs/tab1"
            }, {
              default: qt(() => [st(ct(ii), {
                "aria-hidden": "true",
                icon: ct(Gg)
              }, null, 8, ["icon"]), st(ct(ei), null, { default: qt(() => [Yn("Tab 1")]), _: 1 })]), _: 1
            }), st(ct(oi), { tab: "tab2", href: "/tabs/tab2" }, {
              default: qt(() => [st(ct(ii), {
                "aria-hidden": "true",
                icon: ct(Wg)
              }, null, 8, ["icon"]), st(ct(ei), null, { default: qt(() => [Yn("Tab 2")]), _: 1 })]), _: 1
            }), st(ct(oi), { tab: "tab3", href: "/tabs/tab3" }, {
              default: qt(() => [st(ct(ii), {
                "aria-hidden": "true",
                icon: ct(qg)
              }, null, 8, ["icon"]), st(ct(ei), null, { default: qt(() => [Yn("Tab 3")]), _: 1 })]), _: 1
            })]), _: 1
          })]), _: 1
        })]), _: 1
      }))
    }
  }), Xg = [{ path: "/", redirect: "/tabs/tab1" }, {
    path: "/tabs/",
    component: Kg,
    children: [{ path: "", redirect: "/tabs/tab1" }, {
      path: "tab1",
      component: () => Dt(() => import("./Tab1Page-D_o8rlXg.js"), __vite__mapDeps([3, 4, 5]))
    }, {
      path: "tab2",
      component: () => Dt(() => import("./Tab2Page-CiTjasHC.js"), __vite__mapDeps([6, 4, 5]))
    }, { path: "tab3", component: () => Dt(() => import("./Tab3Page-BMJLiyR9.js"), __vite__mapDeps([7, 4, 5])) }]
  }], nc = Vg({ history: Ug("/"), routes: Xg }), Yg = yu(Dg).use(Rg).use(nc);
nc.isReady().then(() => {
  Yg.mount("#app")
});
export {
  lo as A,
  xe as B,
  fb as C,
  nb as D,
  ob as E,
  Si as F,
  fr as G,
  hb as H,
  Sb as I,
  Fh as K,
  Zg as __vite_legacy_guard,
  st as a,
  Cb as b,
  Vl as c,
  Pt as d,
  Yn as e,
  $b as f,
  Eb as g,
  Pg as h,
  eb as i,
  Wl as j,
  tb as k,
  lh as l,
  fa as m,
  db as n,
  Fl as o,
  Jg as p,
  gt as q,
  ua as r,
  Wo as s,
  Qg as t,
  ct as u,
  ib as v,
  qt as w,
  sb as x,
  $n as y,
  ub as z
};
