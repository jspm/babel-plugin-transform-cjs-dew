var exports = {};
/**
 * AgoraWebSDK_N-v4.18.2-0-g8d83af1d-dirty Copyright AgoraInc.
 */

!function (e, t) {
  exports = t();
}(exports, function () {
  "use strict";
  /*! formdata-polyfill. MIT License. Jimmy W?rting <https://jimmy.warting.se/opensource> */
  !function () {
    var e;
    function i(e) {
      var t = 0;
      return function () {
        return t < e.length ? {
          done: !1,
          value: e[t++]
        } : {
          done: !0
        };
      };
    }
    var n = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, i) {
      return e == Array.prototype || e == Object.prototype || (e[t] = i.value), e;
    };
    var r,
      o = function (e) {
        e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof t && t];
        for (var i = 0; i < e.length; ++i) {
          var n = e[i];
          if (n && n.Math == Math) return n;
        }
        throw Error("Cannot find global object");
      }(this || _global);
    function s(e, t) {
      if (t) e: {
        var i = o;
        e = e.split(".");
        for (var r = 0; r < e.length - 1; r++) {
          var s = e[r];
          if (!(s in i)) break e;
          i = i[s];
        }
        (t = t(r = i[e = e[e.length - 1]])) != r && null != t && n(i, e, {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
    }
    function a(e) {
      return (e = {
        next: e
      })[Symbol.iterator] = function () {
        return this || _global;
      }, e;
    }
    function c(e) {
      var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
      return t ? t.call(e) : {
        next: i(e)
      };
    }
    if (s("Symbol", function (e) {
      function t(e, t) {
        (this || _global).A = e, n(this || _global, "description", {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
      if (e) return e;
      t.prototype.toString = function () {
        return (this || _global).A;
      };
      var i = "jscomp_symbol_" + (1000000000 * Math.random() >>> 0) + "_",
        r = 0;
      return function e(n) {
        if ((this || _global) instanceof e) throw new TypeError("Symbol is not a constructor");
        return new t(i + (n || "") + "_" + r++, n);
      };
    }), s("Symbol.iterator", function (e) {
      if (e) return e;
      e = Symbol("Symbol.iterator");
      for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < t.length; r++) {
        var s = o[t[r]];
        "function" == typeof s && "function" != typeof s.prototype[e] && n(s.prototype, e, {
          configurable: !0,
          writable: !0,
          value: function () {
            return a(i(this || _global));
          }
        });
      }
      return e;
    }), "function" == typeof Object.setPrototypeOf) r = Object.setPrototypeOf;else {
      var d;
      e: {
        var u = {};
        try {
          u.__proto__ = {
            a: !0
          }, d = u.a;
          break e;
        } catch (e) {}
        d = !1;
      }
      r = d ? function (e, t) {
        if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
        return e;
      } : null;
    }
    var l = r;
    function h() {
      (this || _global).m = !1, (this || _global).j = null, (this || _global).v = void 0, (this || _global).h = 1, (this || _global).u = (this || _global).C = 0, (this || _global).l = null;
    }
    function p(e) {
      if (e.m) throw new TypeError("Generator is already running");
      e.m = !0;
    }
    function _(e, t) {
      return e.h = 3, {
        value: t
      };
    }
    function E(e) {
      (this || _global).g = new h(), (this || _global).G = e;
    }
    function m(e, t, i, n) {
      try {
        var r = t.call(e.g.j, i);
        if (!(r instanceof Object)) throw new TypeError("Iterator result " + r + " is not an object");
        if (!r.done) return e.g.m = !1, r;
        var o = r.value;
      } catch (t) {
        return e.g.j = null, e.g.s(t), f(e);
      }
      return e.g.j = null, n.call(e.g, o), f(e);
    }
    function f(e) {
      for (; e.g.h;) try {
        var t = e.G(e.g);
        if (t) return e.g.m = !1, {
          value: t.value,
          done: !1
        };
      } catch (t) {
        e.g.v = void 0, e.g.s(t);
      }
      if (e.g.m = !1, e.g.l) {
        if (t = e.g.l, e.g.l = null, t.F) throw t.D;
        return {
          value: t.return,
          done: !0
        };
      }
      return {
        value: void 0,
        done: !0
      };
    }
    function S(e) {
      (this || _global).next = function (t) {
        return e.o(t);
      }, (this || _global).throw = function (t) {
        return e.s(t);
      }, (this || _global).return = function (t) {
        return function (e, t) {
          p(e.g);
          var i = e.g.j;
          return i ? m(e, "return" in i ? i.return : function (e) {
            return {
              value: e,
              done: !0
            };
          }, t, e.g.return) : (e.g.return(t), f(e));
        }(e, t);
      }, (this || _global)[Symbol.iterator] = function () {
        return this || _global;
      };
    }
    function T(e, t) {
      return t = new S(new E(t)), l && e.prototype && l(t, e.prototype), t;
    }
    if (h.prototype.o = function (e) {
      (this || _global).v = e;
    }, h.prototype.s = function (e) {
      (this || _global).l = {
        D: e,
        F: !0
      }, (this || _global).h = (this || _global).C || (this || _global).u;
    }, h.prototype.return = function (e) {
      (this || _global).l = {
        return: e
      }, (this || _global).h = (this || _global).u;
    }, E.prototype.o = function (e) {
      return p((this || _global).g), (this || _global).g.j ? m(this || _global, (this || _global).g.j.next, e, (this || _global).g.o) : ((this || _global).g.o(e), f(this || _global));
    }, E.prototype.s = function (e) {
      return p((this || _global).g), (this || _global).g.j ? m(this || _global, (this || _global).g.j.throw, e, (this || _global).g.o) : ((this || _global).g.s(e), f(this || _global));
    }, s("Array.prototype.entries", function (e) {
      return e || function () {
        return function (e, t) {
          e instanceof String && (e += "");
          var i = 0,
            n = !1,
            r = {
              next: function () {
                if (!n && i < e.length) {
                  var r = i++;
                  return {
                    value: t(r, e[r]),
                    done: !1
                  };
                }
                return n = !0, {
                  done: !0,
                  value: void 0
                };
              }
            };
          return r[Symbol.iterator] = function () {
            return r;
          }, r;
        }(this || _global, function (e, t) {
          return [e, t];
        });
      };
    }), "undefined" != typeof Blob && ("undefined" == typeof FormData || !FormData.prototype.keys)) {
      var g = function (e, t) {
          for (var i = 0; i < e.length; i++) t(e[i]);
        },
        R = function (e) {
          return e.replace(/\r?\n|\r/g, "\r\n");
        },
        I = function (e, t, i) {
          return t instanceof Blob ? (i = void 0 !== i ? String(i + "") : "string" == typeof t.name ? t.name : "blob", t.name === i && "[object Blob]" !== Object.prototype.toString.call(t) || (t = new File([t], i)), [String(e), t]) : [String(e), String(t)];
        },
        C = function (e, t) {
          if (e.length < t) throw new TypeError(t + " argument required, but only " + e.length + " present.");
        },
        v = "object" == typeof globalThis ? globalThis : "object" == typeof window ? window : "object" == typeof self ? self : this || _global,
        y = v.FormData,
        A = v.XMLHttpRequest && v.XMLHttpRequest.prototype.send,
        O = v.Request && v.fetch,
        N = v.navigator && v.navigator.sendBeacon,
        b = v.Element && v.Element.prototype,
        w = v.Symbol && Symbol.toStringTag;
      w && (Blob.prototype[w] || (Blob.prototype[w] = "Blob"), "File" in v && !File.prototype[w] && (File.prototype[w] = "File"));
      try {
        new File([], "");
      } catch (e) {
        v.File = function (e, t, i) {
          return e = new Blob(e, i || {}), Object.defineProperties(e, {
            name: {
              value: t
            },
            lastModified: {
              value: +(i && void 0 !== i.lastModified ? new Date(i.lastModified) : new Date())
            },
            toString: {
              value: function () {
                return "[object File]";
              }
            }
          }), w && Object.defineProperty(e, w, {
            value: "File"
          }), e;
        };
      }
      var D = function (e) {
          return e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
        },
        P = function (e) {
          (this || _global).i = [];
          var t = this || _global;
          e && g(e.elements, function (e) {
            if (e.name && !e.disabled && "submit" !== e.type && "button" !== e.type && !e.matches("form fieldset[disabled] *")) if ("file" === e.type) {
              var i = e.files && e.files.length ? e.files : [new File([], "", {
                type: "application/octet-stream"
              })];
              g(i, function (i) {
                t.append(e.name, i);
              });
            } else "select-multiple" === e.type || "select-one" === e.type ? g(e.options, function (i) {
              !i.disabled && i.selected && t.append(e.name, i.value);
            }) : "checkbox" === e.type || "radio" === e.type ? e.checked && t.append(e.name, e.value) : (i = "textarea" === e.type ? R(e.value) : e.value, t.append(e.name, i));
          });
        };
      if ((e = P.prototype).append = function (e, t, i) {
        C(arguments, 2), (this || _global).i.push(I(e, t, i));
      }, e.delete = function (e) {
        C(arguments, 1);
        var t = [];
        e = String(e), g((this || _global).i, function (i) {
          i[0] !== e && t.push(i);
        }), (this || _global).i = t;
      }, e.entries = function e() {
        var t,
          i = this || _global;
        return T(e, function (e) {
          if (1 == e.h && (t = 0), 3 != e.h) return t < i.i.length ? e = _(e, i.i[t]) : (e.h = 0, e = void 0), e;
          t++, e.h = 2;
        });
      }, e.forEach = function (e, t) {
        C(arguments, 1);
        for (var i = c(this || _global), n = i.next(); !n.done; n = i.next()) {
          var r = c(n.value);
          n = r.next().value, r = r.next().value, e.call(t, r, n, this || _global);
        }
      }, e.get = function (e) {
        C(arguments, 1);
        var t = (this || _global).i;
        e = String(e);
        for (var i = 0; i < t.length; i++) if (t[i][0] === e) return t[i][1];
        return null;
      }, e.getAll = function (e) {
        C(arguments, 1);
        var t = [];
        return e = String(e), g((this || _global).i, function (i) {
          i[0] === e && t.push(i[1]);
        }), t;
      }, e.has = function (e) {
        C(arguments, 1), e = String(e);
        for (var t = 0; t < (this || _global).i.length; t++) if ((this || _global).i[t][0] === e) return !0;
        return !1;
      }, e.keys = function e() {
        var t,
          i,
          n,
          r,
          o = this || _global;
        return T(e, function (e) {
          if (1 == e.h && (t = c(o), i = t.next()), 3 != e.h) return i.done ? void (e.h = 0) : (n = i.value, r = c(n), _(e, r.next().value));
          i = t.next(), e.h = 2;
        });
      }, e.set = function (e, t, i) {
        C(arguments, 2), e = String(e);
        var n = [],
          r = I(e, t, i),
          o = !0;
        g((this || _global).i, function (t) {
          t[0] === e ? o && (o = !n.push(r)) : n.push(t);
        }), o && n.push(r), (this || _global).i = n;
      }, e.values = function e() {
        var t,
          i,
          n,
          r,
          o = this || _global;
        return T(e, function (e) {
          if (1 == e.h && (t = c(o), i = t.next()), 3 != e.h) return i.done ? void (e.h = 0) : (n = i.value, (r = c(n)).next(), _(e, r.next().value));
          i = t.next(), e.h = 2;
        });
      }, P.prototype._asNative = function () {
        for (var e = new y(), t = c(this || _global), i = t.next(); !i.done; i = t.next()) {
          var n = c(i.value);
          i = n.next().value, n = n.next().value, e.append(i, n);
        }
        return e;
      }, P.prototype._blob = function () {
        var e = "----formdata-polyfill-" + Math.random(),
          t = [],
          i = "--" + e + "\r\nContent-Disposition: form-data; name=\"";
        return this.forEach(function (e, n) {
          return "string" == typeof e ? t.push(i + D(R(n)) + "\"\r\n\r\n" + R(e) + "\r\n") : t.push(i + D(R(n)) + "\"; filename=\"" + D(e.name) + "\"\r\nContent-Type: " + (e.type || "application/octet-stream") + "\r\n\r\n", e, "\r\n");
        }), t.push("--" + e + "--"), new Blob(t, {
          type: "multipart/form-data; boundary=" + e
        });
      }, P.prototype[Symbol.iterator] = function () {
        return this.entries();
      }, P.prototype.toString = function () {
        return "[object FormData]";
      }, b && !b.matches && (b.matches = b.matchesSelector || b.mozMatchesSelector || b.msMatchesSelector || b.oMatchesSelector || b.webkitMatchesSelector || function (e) {
        for (var t = (e = ((this || _global).document || (this || _global).ownerDocument).querySelectorAll(e)).length; 0 <= --t && e.item(t) !== (this || _global););
        return -1 < t;
      }), w && (P.prototype[w] = "FormData"), A) {
        var L = v.XMLHttpRequest.prototype.setRequestHeader;
        v.XMLHttpRequest.prototype.setRequestHeader = function (e, t) {
          L.call(this || _global, e, t), "content-type" === e.toLowerCase() && ((this || _global).B = !0);
        }, v.XMLHttpRequest.prototype.send = function (e) {
          e instanceof P ? (e = e._blob(), (this || _global).B || this.setRequestHeader("Content-Type", e.type), A.call(this || _global, e)) : A.call(this || _global, e);
        };
      }
      O && (v.fetch = function (e, t) {
        return t && t.body && t.body instanceof P && (t.body = t.body._blob()), O.call(this || _global, e, t);
      }), N && (v.navigator.sendBeacon = function (e, t) {
        return t instanceof P && (t = t._asNative()), N.call(this || _global, e, t);
      }), v.FormData = P;
    }
  }();
  const jC = () => {
      const e = GE("AREAS");
      0 === e.length && e.push(SS.GLOBAL);
      return zi(e).call(e, (e, t, i) => {
        const n = FC(t);
        return n ? 0 === i ? n : "".concat(e, ",").concat(n) : e;
      }, "");
    },
    FC = e => e === SS.OVERSEA ? "".concat(IS.ASIA, ",").concat(IS.EUROPE, ",").concat(IS.AFRICA, ",").concat(IS.NORTH_AMERICA, ",").concat(IS.SOUTH_AMERICA, ",").concat(IS.OCEANIA) : IS[e],
    BC = e => {
      const t = {
        CODE: "",
        WEBCS_DOMAIN: [],
        WEBCS_DOMAIN_BACKUP_LIST: [],
        PROXY_CS: [],
        CDS_AP: [],
        ACCOUNT_REGISTER: [],
        UAP_AP: [],
        EVENT_REPORT_DOMAIN: [],
        EVENT_REPORT_BACKUP_DOMAIN: [],
        LOG_UPLOAD_SERVER: [],
        PROXY_SERVER_TYPE3: []
      };
      return e.map(e => {
        const i = CS[e],
          n = Object.keys(i);
        n && n.map(e => {
          "CODE" !== e && (t[e] = t[e].concat(i[e]));
        });
      }), t;
    },
    GC = {
      GLOBAL: {
        ASIA: [SS.CHINA, SS.JAPAN, SS.INDIA, SS.KOREA, SS.HKMC],
        EUROPE: [],
        NORTH_AMERICA: [SS.US],
        SOUTH_AMERICA: [],
        OCEANIA: [],
        AFRICA: []
      }
    },
    WC = Object.keys(GC[SS.GLOBAL]),
    HC = [SS.CHINA, SS.NORTH_AMERICA, SS.EUROPE, SS.ASIA, SS.JAPAN, SS.INDIA, SS.OCEANIA, SS.SOUTH_AMERICA, SS.AFRICA, SS.KOREA, SS.HKMC, SS.US],
    KC = function (e, t) {
      let i = [];
      if (e.includes(SS.GLOBAL)) {
        const o = [SS.GLOBAL, SS.OVERSEA],
          s = Object.keys(CS);
        if (t === SS.GLOBAL) throw new SE(fE.INVALID_PARAMS, "GLOBAL is an invalid excludedArea value");
        if (t === SS.CHINA) i = [SS.OVERSEA];else if (r = t, WC.includes(r)) {
          const e = (n = t, GC[SS.GLOBAL][n] || []),
            r = [...o, t, ...e];
          i = s.filter(e => !r.includes(e));
        } else if (function (e) {
          let t = !1;
          return WC.forEach(i => {
            GC[SS.GLOBAL][i].includes(e) && (t = !0);
          }), t;
        }(t)) {
          const e = function (e) {
              let t;
              return WC.forEach(i => {
                GC[SS.GLOBAL][i].includes(e) && (t = i);
              }), t;
            }(t),
            n = [...o, e, t];
          i = s.filter(e => !n.includes(e));
        } else i = e;
        i = function (e) {
          const t = [];
          return HC.forEach(i => {
            e.includes(i) && t.push(i);
          }), t.concat(e.filter(e => !HC.includes(e)));
        }(i);
      } else i = e;
      var n, r;
      return i;
    };
  function YC(e) {
    if (!e && GE("AREAS").includes(SS.EXTENSIONS)) return OE.debug("update area from ap : reset"), void qC(DE, !0);
    if (!GE("AREAS").includes(SS.GLOBAL) || !e) return;
    let t = CS.EXTENSIONS;
    t && (t = {
      CODE: FC(SS.EXTENSIONS),
      WEBCS_DOMAIN: ["ap-web-1-".concat(e, ".agora.io")],
      WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-".concat(e, ".ap.sd-rtn.com")],
      PROXY_CS: ["proxy-ap-web-".concat(e, ".agora.io")],
      CDS_AP: ["cds-ap-web-1-".concat(e, ".agora.io"), "cds-ap-web-2-".concat(e, ".ap.sd-rtn.com")],
      ACCOUNT_REGISTER: ["sua-ap-web-1-".concat(e, ".agora.io"), "sua-ap-web-2-".concat(e, ".ap.sd-rtn.com")],
      UAP_AP: ["uap-ap-web-1-".concat(e, ".agora.io"), "uap-ap-web-2-".concat(e, ".ap.sd-rtn.com")],
      EVENT_REPORT_DOMAIN: ["statscollector-1-".concat(e, ".agora.io")],
      EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-".concat(e, ".agora.io")],
      LOG_UPLOAD_SERVER: ["logservice-".concat(e, ".agora.io")],
      PROXY_SERVER_TYPE3: ["webrtc-cloud-proxy-".concat(e, ".agora.io")]
    }, OE.debug("update area from ap success: ".concat(e, ",config is "), t), BE("AREAS", [SS.EXTENSIONS], !0), Object.keys(t).map(e => {
      if ("LOG_UPLOAD_SERVER" === e || "EVENT_REPORT_DOMAIN" === e || "EVENT_REPORT_BACKUP_DOMAIN" === e || "PROXY_SERVER_TYPE3" === e) {
        BE(e, t[e][0]);
      } else BE(e, t[e]);
    }));
  }
  function qC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const i = Pg.reportApiInvoke(null, {
      name: _f.SET_AREA,
      options: e,
      tag: Ef.TRACER
    });
    try {
      let n = [];
      if ("string" == typeof e && (n = [e]), Array.isArray(e) && (e.forEach(e => {
        if (!RS.includes(e)) throw new SE(fE.INVALID_PARAMS, "invalid area code");
      }), n = e), "[object Object]" === Object.prototype.toString.call(e)) {
        const {
          areaCode: t,
          excludedArea: i
        } = e;
        if (!t) throw new SE(fE.INVALID_PARAMS, "area code is needed");
        let r = t;
        "string" == typeof t && (r = [t]), n = i ? KC(r, i) : r;
      }
      if (!t) {
        if (HE.AREAS) {
          const e = new SE(fE.PROHIBITED_OPERATION, "setArea is prohibited because of config-distribute");
          return i.onError(e), void OE.warning("setArea is prohibited because of config-distribute");
        }
        if (n.includes(SS.GLOBAL) && GE("AREAS") === SS.EXTENSIONS) {
          const e = new SE(fE.PROHIBITED_OPERATION, "setArea is prohibited because of ap extensions");
          return i.onError(e), void OE.warning("setArea is prohibited because of ap extensions");
        }
      }
      BE("AREAS", n, t);
      const r = BC(n);
      Object.keys(r).map(e => {
        if ("LOG_UPLOAD_SERVER" === e || "EVENT_REPORT_DOMAIN" === e || "EVENT_REPORT_BACKUP_DOMAIN" === e || "PROXY_SERVER_TYPE3" === e) {
          BE(e, r[e][0]);
        } else BE(e, r[e]);
      }), OE.debug("set area success:", n.join(","));
    } catch (e) {
      throw i.onError(e), e;
    }
    i.onSuccess();
  }
  function JC(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function XC(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? JC(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : JC(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let zC = 1;
  function QC(e, t, i, n, r) {
    zC += 1;
    const o = {
        sid: i.sid,
        command: "convergeAllocateEdge",
        uid: "666",
        appId: i.appId,
        ts: Math.floor(Date.now() / 1000),
        seq: zC,
        requestId: zC,
        version: bE,
        cname: i.cname
      },
      s = {
        service_name: t,
        json_body: JSON.stringify(o)
      };
    let a,
      c,
      d = e[0];
    return RE(async () => {
      a = Date.now();
      const e = await gg(d, {
        data: s,
        cancelToken: n,
        headers: {
          "X-Packet-Service-Type": "0",
          "X-Packet-URI": "61"
        }
      });
      if (c = Date.now() - a, 0 !== e.code) {
        const t = new SE(fE.UNEXPECTED_RESPONSE, "live streaming ap error, code" + e.code, {
          retry: !0,
          responseTime: c
        });
        throw OE.error(t.toString()), t;
      }
      const i = JSON.parse(e.json_body);
      if (200 !== i.code) {
        const e = new SE(fE.UNEXPECTED_RESPONSE, "live streaming app center error, code: ".concat(i.code, ", reason: ").concat(i.reason), {
          code: i.code,
          responseTime: c
        });
        throw OE.error(e.toString()), e;
      }
      if (!i.servers || 0 === i.servers.length) {
        const e = new SE(fE.UNEXPECTED_RESPONSE, "live streaming app center empty server", {
          code: i.code,
          responseTime: c
        });
        throw OE.error(e.toString()), e;
      }
      const r = function (e, t) {
        return {
          addressList: e.servers.map(e => "wss://".concat(e.address.replace(/\./g, "-"), ".").concat(GE("WORKER_DOMAIN"), ":").concat(e.wss, "?serviceName=").concat(encodeURIComponent(t))),
          workerToken: e.workerToken,
          vid: e.vid
        };
      }(i, t);
      return GE("LIVE_STREAMING_ADDRESS") && (r.addressList = GE("LIVE_STREAMING_ADDRESS") instanceof Array ? GE("LIVE_STREAMING_ADDRESS") : [GE("LIVE_STREAMING_ADDRESS")]), XC(XC({}, r), {}, {
        responseTime: c
      });
    }, (n, r) => (Pg.apworkerEvent(i.sid, {
      success: !0,
      sc: 200,
      serviceName: t,
      responseDetail: JSON.stringify(n.addressList),
      firstSuccess: 0 === r,
      responseTime: c,
      serverIp: e[r % e.length]
    }), !1), (n, r) => (Pg.apworkerEvent(i.sid, {
      success: !1,
      sc: n.data && n.data.code || 200,
      serviceName: t,
      responseTime: c,
      serverIp: e[r % e.length]
    }), !!(n.code !== fE.OPERATION_ABORTED && n.code !== fE.UNEXPECTED_RESPONSE || n.data && n.data.retry) && (d = e[(r + 1) % e.length], !0)), r);
  }
  let ZC = 1;
  function $C(e, t, i, n) {
    let {
      url: r,
      areaCode: o
    } = e;
    const s = Date.now();
    let a;
    const [c, d] = rv(t, o, [XS.CHOOSE_SERVER]);
    let u = Ig.networkState;
    return RE(async () => {
      u && Ig.networkState === PS.OFFLINE && Ig.onlineWaiter && (await Sl.race([Ig.onlineWaiter, zI(n && n.maxRetryTimeout || TE.maxRetryTimeout)])), u = Ig.networkState;
      const {
        data: e,
        headers: o
      } = await gg(r, {
        data: c,
        cancelToken: i,
        headers: {
          "Content-Type": "multipart/form-data;"
        }
      }, !0, !0);
      a = "1" === o.http3 ? 1 : -1, Pg.reportResourceTiming(r, t.sid), tv(e, r, t, s, [XS.CHOOSE_SERVER], a);
      const d = WI(e, XS.CHOOSE_SERVER);
      return iv(d), jI(d, r);
    }, e => (e && Pg.joinChooseServer(t.sid, {
      lts: s,
      succ: !0,
      csAddr: r,
      opid: d,
      serverList: e.gatewayAddrs.map(e => e.address),
      ec: null,
      cid: e.cid.toString(),
      uid: e.uid.toString(),
      csIp: e.csIp,
      unilbsServerIds: [XS.CHOOSE_SERVER].toString(),
      isHttp3: a
    }), !1), e => e.code !== fE.OPERATION_ABORTED && (e.code === fE.CAN_NOT_GET_GATEWAY_SERVER ? e.data.retry : (Pg.joinChooseServer(t.sid, {
      lts: s,
      succ: !1,
      csAddr: r,
      serverList: null,
      opid: d,
      ec: e.code,
      csIp: e.data && e.data.csIp,
      unilbsServerIds: [XS.CHOOSE_SERVER].toString(),
      extend: JSON.stringify({
        networkState: u
      }),
      isHttp3: a
    }), OE.warning("[".concat(t.clientId, "] Choose server network error, retry"), e), !0)), n);
  }
  function ev(e, t, i, n) {
    let r,
      {
        url: o,
        areaCode: s,
        serviceIds: a
      } = e;
    const c = Date.now(),
      [d, u] = rv(t, s, a);
    let l = void 0;
    return RE(async () => {
      l && Ig.networkState === PS.OFFLINE && Ig.onlineWaiter && (await Sl.race([Ig.onlineWaiter, zI(n && n.maxRetryTimeout || TE.maxRetryTimeout)])), l = Ig.networkState;
      const {
        data: e,
        headers: s
      } = await gg(o, {
        data: d,
        cancelToken: i,
        headers: {
          "Content-Type": "multipart/form-data;"
        }
      }, !0, !0);
      r = "1" === s.http3 ? 1 : -1, Pg.reportResourceTiming(o, t.sid), tv(e, o, t, c, a, r);
      const u = WI(e, XS.CHOOSE_SERVER),
        h = WI(e, "proxy5" === t.cloudProxyServer ? XS.CLOUD_PROXY_5 : "proxy3" === t.cloudProxyServer || "proxy4" === t.cloudProxyServer ? XS.CLOUD_PROXY : XS.CLOUD_PROXY_FALLBACK);
      return iv(u), {
        gatewayInfo: jI(u, o),
        proxyInfo: h,
        url: o
      };
    }, e => (e.gatewayInfo && Pg.joinChooseServer(t.sid, {
      lts: c,
      succ: !0,
      csAddr: o,
      serverList: e.gatewayInfo.gatewayAddrs.map(e => e.address),
      ec: null,
      opid: u,
      cid: e.gatewayInfo.cid.toString(),
      uid: e.gatewayInfo.uid.toString(),
      csIp: e.gatewayInfo.csIp,
      unilbsServerIds: a.toString(),
      isHttp3: r
    }), e.proxyInfo && Pg.joinWebProxyAP(t.sid, {
      lts: c,
      sucess: 1,
      apServerAddr: o,
      turnServerAddrList: e.proxyInfo.addresses.map(e => e.ip).join(","),
      errorCode: null,
      eventType: t.cloudProxyServer,
      unilbsServerIds: a.toString()
    }), !1), e => e.code !== fE.OPERATION_ABORTED && (e.code === fE.CAN_NOT_GET_GATEWAY_SERVER ? e.data.retry : (Pg.joinWebProxyAP(t.sid, {
      lts: c,
      sucess: 0,
      apServerAddr: o,
      turnServerAddrList: null,
      errorCode: e.code,
      eventType: t.cloudProxyServer,
      unilbsServerIds: a.toString(),
      extend: JSON.stringify({
        networkState: l
      })
    }), OE.warning("[".concat(t.clientId, "] multi unilbs network error, retry"), e), !0)), n);
  }
  const tv = (e, t, i, n, r, o) => {
      const s = [],
        a = s => {
          4096 === s.flag ? Pg.joinChooseServer(i.sid, {
            lts: n,
            succ: !1,
            csAddr: t,
            opid: e.opid,
            serverList: null,
            ec: s.error.message,
            csIp: s.error.data && s.error.data.csIp,
            unilbsServerIds: r.toString(),
            isHttp3: o
          }) : 1048576 !== s.flag && 4194304 !== s.flag && 4194310 !== s.flag || Pg.joinWebProxyAP(i.sid, {
            lts: n,
            sucess: 0,
            apServerAddr: t,
            turnServerAddrList: null,
            errorCode: s.error.code,
            eventType: i.cloudProxyServer,
            unilbsServerIds: r.toString()
          });
        };
      if (e.response_body.forEach(t => {
        const i = t.buffer.code;
        if (23 === t.uri && 0 === i && !t.buffer.edges_services) if (4194310 === t.buffer.flag) OE.warning("no edge services in ap response of proxy fallback, will not set proxy in iceServers"), t.buffer.edges_services = [];else {
          const i = {
            error: new SE(fE.CAN_NOT_GET_GATEWAY_SERVER, "no edge services in ap response", {
              retry: !0,
              csIp: e.detail[502]
            }),
            flag: t.buffer.flag
          };
          s.push(i), a(i);
        }
        if (0 !== i) {
          const n = gC(i),
            r = {
              error: new SE(fE.CAN_NOT_GET_GATEWAY_SERVER, n.desc, {
                desc: n.desc,
                retry: n.retry,
                csIp: e.detail[502]
              }),
              flag: t.buffer.flag
            };
          4194310 === t.buffer.flag ? OE.warning(r.error.toString()) : s.push(r), a(r);
        }
      }), s.length) throw OE.warning("[".concat(i.clientId, "] multi unilbs ").concat(t, " failed, ").concat(s.map(e => "flag: ".concat(e.flag, ", message: ").concat(e.error.message, ", retry: ").concat(e.error.data.retry)).join(" | "))), new SE(fE.CAN_NOT_GET_GATEWAY_SERVER, s.map(e => "flag: ".concat(e.flag, ", message: ").concat(e.error.message)).join(" | "), {
        retry: !!s.find(e => e.error.data.retry),
        csIp: e.detail[502],
        desc: [...new Set(s.map(e => {
          var t, i;
          return null == e || null === (t = e.error) || void 0 === t || null === (i = t.data) || void 0 === i ? void 0 : i.desc;
        }).filter(e => !!e))]
      });
    },
    iv = e => {
      var t, i, n, r;
      if (e.addresses && 0 === e.addresses.length && 0 === e.code) throw new SE(fE.CAN_NOT_GET_GATEWAY_SERVER, "void gateway address", {
        retry: !0,
        csIp: e.detail && e.detail[502]
      });
      GE("AP_AREA") && (null !== (n = e.detail) && void 0 !== n && n[23] && "string" == typeof (null === (r = e.detail) || void 0 === r ? void 0 : r[23]) ? YC(e.detail[23].toLowerCase()) : YC());
      if (null !== (t = e.detail) && void 0 !== t && t[19] && "string" == typeof (null === (i = e.detail) || void 0 === i ? void 0 : i[19])) {
        const t = e.detail[19],
          i = null == t ? void 0 : t.split(";");
        for (let t = 0; t < i.length; t++) {
          var o;
          const n = mh(o = i[t]).call(o);
          e.addresses[t] && i && (e.addresses[t].fingerprint = n);
        }
      }
      if (GE("GATEWAY_ADDRESS") && GE("GATEWAY_ADDRESS").length > 0) {
        OE.debug("assign gateway address to", GE("GATEWAY_ADDRESS"));
        const t = GE("GATEWAY_ADDRESS").map(t => {
          var i, n;
          const r = null !== (i = null === (n = e.addresses.find(e => e.ip === t.ip && e.port === t.port)) || void 0 === n ? void 0 : n.fingerprint) && void 0 !== i ? i : "";
          return {
            ip: t.ip,
            port: t.port,
            ticket: e.addresses[0] && e.addresses[0].ticket,
            fingerprint: r
          };
        });
        e.addresses = t;
      }
    },
    nv = (e, t) => {
      if (e.response_body && e.response_body.length) {
        const t = e.response_body[0];
        if (0 !== t.buffer.code) {
          const e = gC(t.buffer.code);
          throw new SE(fE.UPDATE_TICKET_FAILED, "[".concat(t.buffer.code, "]: ").concat(e.desc), {
            retry: e.retry
          });
        }
        return t.buffer.ticket;
      }
      throw OE.debug("update ticket request received ap response without response body:", t), new SE(fE.UPDATE_TICKET_FAILED, "cannot find response body from ap response", {
        retry: !1
      });
    },
    rv = (e, t, i) => {
      const n = Math.floor(Math.random() * 10 ** 12),
        r = {
          appid: e.appId,
          client_ts: Date.now(),
          opid: n,
          sid: e.sid,
          request_bodies: [{
            uri: 22,
            buffer: {
              cname: e.cname,
              detail: {
                6: e.stringUid,
                11: t,
                12: GE("USE_NEW_TOKEN") ? "1" : void 0,
                22: t
              },
              key: e.token,
              service_ids: i,
              uid: e.uid || 0
            }
          }]
        };
      r.request_bodies.forEach(t => {
        e.multiIP && e.multiIP.gateway_ip && (t.buffer.detail[5] = JSON.stringify({
          vocs_ip: [e.multiIP.uni_lbs_ip],
          vos_ip: [e.multiIP.gateway_ip]
        }));
      });
      const o = new FormData();
      return o.append("request", JSON.stringify(r)), [o, n];
    },
    ov = (e, t) => {
      const i = Math.floor(Math.random() * 10 ** 12),
        n = {
          appid: e.appId,
          client_ts: Date.now(),
          opid: i,
          sid: e.sid,
          request_bodies: [{
            uri: 28,
            buffer: {
              cname: e.cname,
              detail: {
                1: "",
                6: e.stringUid,
                12: "1"
              },
              token: e.token,
              service_ids: t,
              uid: e.uid || 0,
              edges_services: e.apResponse.addresses.map(e => ({
                ip: e.ip,
                port: e.port
              }))
            }
          }]
        },
        r = new FormData();
      return r.append("request", JSON.stringify(n)), [r, i];
    };
  let sv = 0;
  async function av(e, t, i, n) {
    const r = async function (e, t, i, n) {
      let r = null;
      const o = [],
        s = async () => {
          const r = GE("WEBCS_DOMAIN").slice(0, GE("AJAX_REQUEST_CONCURRENT")).map(t => ({
              url: e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(t + "/api/v2/transpond/webrtc?v=2") : "https://".concat(t, "/api/v2/transpond/webrtc?v=2"),
              areaCode: jC()
            })),
            s = n.recordJoinChannelService({
              startTs: Date.now(),
              status: "pending",
              service: "chooseServer",
              urls: r.map(e => e.url)
            }),
            a = await fC({
              fragementLength: GE("FRAGEMENT_LENGTH"),
              referenceList: r,
              asyncMapHandler: n => (OE.debug("[".concat(e.clientId, "] Connect to choose_server:"), n.url), $C(n, e, t, i)),
              allFailedhandler: e => {
                throw n.recordJoinChannelService({
                  endTs: Date.now(),
                  status: "error",
                  errors: e
                }, s), e[0];
              },
              promisesCollector: o
            });
          return n.recordJoinChannelService({
            endTs: Date.now(),
            status: "success"
          }, s), a;
        },
        a = async () => {
          if (await zI(1000), null !== r) return r;
          const s = GE("WEBCS_DOMAIN_BACKUP_LIST").map(t => ({
              url: e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(t + "/api/v2/transpond/webrtc?v=2") : "https://".concat(t, "/api/v2/transpond/webrtc?v=2"),
              areaCode: jC()
            })),
            a = n.recordJoinChannelService({
              endTs: void 0,
              startTs: Date.now(),
              status: "pending",
              service: "chooseServer",
              urls: s.map(e => e.url)
            }),
            c = await fC({
              fragementLength: GE("FRAGEMENT_LENGTH"),
              referenceList: s,
              asyncMapHandler: n => (OE.debug("[".concat(e.clientId, "] Connect to backup choose_server:"), n.url), $C(n, e, t, i)),
              allFailedhandler: e => {
                throw n.recordJoinChannelService({
                  endTs: Date.now(),
                  status: "error",
                  errors: e
                }, a), e[0];
              },
              promisesCollector: o
            });
          return n.recordJoinChannelService({
            endTs: Date.now(),
            status: "success"
          }, a), c;
        };
      try {
        return r = await iC([s(), a()]), o.length && o.forEach(e => e.cancel && "function" == typeof e.cancel && e.cancel()), r;
      } catch (e) {
        throw e[0];
      }
    }(e, t, i, n);
    return {
      gatewayInfo: await r
    };
  }
  async function cv(e, t, i, n, r) {
    const o = e.cloudProxyServer;
    if ("disabled" === o) {
      if (!n) return;
      if (e.useLocalAccessPoint) return await av(e, t, i, r);
      if (GE("JOIN_WITH_FALLBACK_MEDIA_PROXY")) {
        const {
          gatewayInfo: n,
          proxyInfo: o
        } = await lv(e, t, i, r);
        return e.turnServer && "auto" !== e.turnServer.mode || (e.turnServer = {
          mode: "manual",
          servers: o.map(e => ({
            turnServerURL: e.address,
            tcpport: e.tcpport || PE.tcpport,
            udpport: e.udpport || PE.udpport,
            username: e.username || PE.username,
            password: e.password || PE.password,
            forceturn: !1,
            security: !0
          }))
        }), {
          gatewayInfo: n
        };
      }
      return await av(e, t, i, r);
    }
    const {
        proxyInfo: s,
        gatewayInfo: a
      } = await lv(e, t, i, r),
      c = {
        gatewayInfo: a
      };
    return e.turnServer = {
      mode: "manual",
      servers: s.map(e => ({
        turnServerURL: e.address,
        tcpport: "proxy3" === o ? void 0 : e.tcpport ? e.tcpport : PE.tcpport,
        udpport: "proxy4" === o ? void 0 : e.udpport ? e.udpport : PE.udpport,
        username: e.username || PE.username,
        password: e.password || PE.password,
        forceturn: "proxy4" !== o,
        security: "proxy5" === o
      }))
    }, OE.debug("[".concat(e.clientId, "] set proxy server: ").concat(e.proxyServer, ", mode: ").concat(o)), c;
  }
  async function dv(e, t, i, n, r) {
    const o = GE("ACCOUNT_REGISTER").slice(0, GE("AJAX_REQUEST_CONCURRENT"));
    let s = [];
    s = t.proxyServer ? o.map(e => "https://".concat(t.proxyServer, "/ap/?url=").concat(e + "/api/v1")) : o.map(e => "https://".concat(e, "/api/v1"));
    const a = null == r ? void 0 : r.recordJoinChannelService({
      startTs: Date.now(),
      status: "pending",
      service: "stringUID",
      urls: s
    });
    try {
      const o = await async function (e, t, i, n, r) {
        const o = Date.now(),
          s = {
            sid: i.sid,
            opid: 10,
            appid: i.appId,
            string_uid: t
          };
        let a = e[0];
        const c = await RE(() => gg(a + "".concat(-1 === a.indexOf("?") ? "?" : "&", "action=stringuid"), {
          data: s,
          cancelToken: n,
          headers: {
            "X-Packet-Service-Type": 0,
            "X-Packet-URI": 72
          }
        }), (i, n) => {
          if (0 === i.code) {
            if (i.uid <= 0 || i.uid >= Math.pow(2, 32)) throw OE.error("Invalid Uint Uid ".concat(t, " => ").concat(i.uid), i), Pg.reqUserAccount(s.sid, {
              lts: o,
              success: !1,
              serverAddr: a,
              stringUid: s.string_uid,
              uid: i.uid,
              errorCode: fE.INVALID_UINT_UID_FROM_STRING_UID,
              extend: s
            }), new SE(fE.INVALID_UINT_UID_FROM_STRING_UID);
            return Pg.reqUserAccount(s.sid, {
              lts: o,
              success: !0,
              serverAddr: a,
              stringUid: s.string_uid,
              uid: i.uid,
              errorCode: null,
              extend: s
            }), !1;
          }
          const r = gC(i.code);
          return r.retry && (a = e[(n + 1) % e.length]), Pg.reqUserAccount(s.sid, {
            lts: o,
            success: !1,
            serverAddr: a,
            stringUid: s.string_uid,
            uid: i.uid,
            errorCode: r.desc,
            extend: s
          }), r.retry;
        }, (t, i) => t.code !== fE.OPERATION_ABORTED && (Pg.reqUserAccount(s.sid, {
          lts: o,
          success: !1,
          serverAddr: a,
          stringUid: s.string_uid,
          uid: null,
          errorCode: t.code,
          extend: s
        }), a = e[(i + 1) % e.length], !0), r);
        if (0 !== c.code) {
          const e = gC(c.code);
          throw new SE(fE.UNEXPECTED_RESPONSE, e.desc);
        }
        return c;
      }(s, e, t, i, n);
      return null == r || r.recordJoinChannelService({
        status: "success",
        endTs: Date.now()
      }, a), o.uid;
    } catch (e) {
      throw null == r || r.recordJoinChannelService({
        status: "error",
        endTs: Date.now(),
        errors: [e]
      }, a), e;
    }
  }
  async function uv(e, t, i) {
    const n = GE("CDS_AP").slice(0, GE("AJAX_REQUEST_CONCURRENT")).map(t => e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(t + "/api/v1") : "https://".concat(t, "/api/v1?action=config")).map(n => function (e, t, i, n) {
      const r = xh(),
        o = {
          flag: 64,
          cipher_method: 0,
          features: {
            device: r.name,
            system: r.os,
            system_general: navigator.userAgent,
            vendor: t.appId,
            version: bE,
            cname: t.cname,
            sid: t.sid,
            session_id: t.sid,
            detail: "",
            proxyServer: t.proxyServer
          }
        };
      return RE(() => gg(e, {
        data: o,
        timeout: 1000,
        cancelToken: i,
        headers: {
          "X-Packet-Service-Type": 0,
          "X-Packet-URI": 54
        }
      }), void 0, e => e.code !== fE.OPERATION_ABORTED, n);
    }(n, e, t, i));
    let r = null,
      o = null,
      s = {};
    try {
      r = await iC(n);
    } catch (e) {
      if (e.code === fE.OPERATION_ABORTED) throw e;
      o = e;
    }
    n.forEach(e => e.cancel());
    if (Pg.reportApiInvoke(e.sid, {
      name: _f.REQUEST_CONFIG_DISTRIBUTE,
      options: {
        error: o,
        res: r
      }
    }).onSuccess(), r && r.test_tags) try {
      s = function (e) {
        if (!e.test_tags) return {};
        const t = e.test_tags,
          i = Object.keys(t),
          n = {};
        return i.forEach(e => {
          var i;
          const r = mh(i = e.slice(4)).call(i),
            o = JSON.parse(t[e])[1];
          n[r] = o;
        }), n;
      }(r);
    } catch (e) {}
    return s;
  }
  async function lv(e, t, i, n) {
    const r = GE("PROXY_SERVER_TYPE3"),
      o = (e, t, i) => {
        let n = i || r;
        return Array.isArray(n) && (n = t % 2 == 0 ? r[1] : r[0]), "https://".concat(n, "/ap/?url=").concat(e);
      };
    let s = null;
    const a = [],
      c = async () => {
        const r = GE("WEBCS_DOMAIN").slice(0, GE("AJAX_REQUEST_CONCURRENT")).map((t, i) => {
            let n;
            return n = "disabled" === e.cloudProxyServer && e.proxyServer ? o("".concat(t, "/api/v2/transpond/webrtc?v=2"), i, e.proxyServer) : "disabled" === e.cloudProxyServer || "fallback" === e.cloudProxyServer ? "https://".concat(t, "/api/v2/transpond/webrtc?v=2") : o("".concat(t, "/api/v2/transpond/webrtc?v=2"), i), {
              url: n,
              areaCode: jC(),
              serviceIds: [XS.CHOOSE_SERVER, "proxy5" === e.cloudProxyServer ? XS.CLOUD_PROXY_5 : "proxy3" === e.cloudProxyServer || "proxy4" === e.cloudProxyServer ? XS.CLOUD_PROXY : XS.CLOUD_PROXY_FALLBACK]
            };
          }),
          s = n.recordJoinChannelService({
            startTs: Date.now(),
            status: "pending",
            service: "chooseServer",
            urls: r.map(e => e.url)
          }),
          c = await fC({
            fragementLength: GE("FRAGEMENT_LENGTH"),
            referenceList: r,
            asyncMapHandler: n => (OE.debug("[".concat(e.clientId, "] Connect to choose_server:"), n.url), ev(n, e, t, i)),
            allFailedhandler: e => {
              throw n.recordJoinChannelService({
                endTs: Date.now(),
                status: "error",
                errors: e
              }, s), e[0];
            },
            promisesCollector: a
          });
        return n.recordJoinChannelService({
          endTs: Date.now(),
          status: "success"
        }, s), c;
      },
      d = async () => {
        if (await zI(1000), null !== s) return s;
        const r = GE("WEBCS_DOMAIN_BACKUP_LIST").map((t, i) => {
            let n;
            return n = "disabled" === e.cloudProxyServer && e.proxyServer ? o("".concat(t, "/api/v2/transpond/webrtc?v=2"), i, e.proxyServer) : "disabled" === e.cloudProxyServer || "fallback" === e.cloudProxyServer ? "https://".concat(t, "/api/v2/transpond/webrtc?v=2") : o("".concat(t, "/api/v2/transpond/webrtc?v=2"), i), {
              url: n,
              areaCode: jC(),
              serviceIds: [XS.CHOOSE_SERVER, "proxy5" === e.cloudProxyServer ? XS.CLOUD_PROXY_5 : "proxy3" === e.cloudProxyServer || "proxy4" === e.cloudProxyServer ? XS.CLOUD_PROXY : XS.CLOUD_PROXY_FALLBACK]
            };
          }),
          c = n.recordJoinChannelService({
            startTs: Date.now(),
            status: "pending",
            service: "chooseServer",
            urls: r.map(e => e.url)
          }),
          d = await fC({
            fragementLength: GE("FRAGEMENT_LENGTH"),
            referenceList: r,
            asyncMapHandler: n => (OE.debug("[".concat(e.clientId, "] Connect to backup choose_server:"), n.url), ev(n, e, t, i)),
            allFailedhandler: e => {
              throw n.recordJoinChannelService({
                endTs: Date.now(),
                status: "error",
                errors: e
              }, c), e[0];
            },
            promisesCollector: a
          });
        return n.recordJoinChannelService({
          endTs: Date.now(),
          status: "success"
        }, c), d;
      };
    let u, l, h;
    try {
      ({
        gatewayInfo: u,
        proxyInfo: l,
        url: h
      } = await iC([c(), d()]));
    } catch (e) {
      throw e[0];
    }
    if (a.length && a.forEach(e => e.cancel && "function" == typeof e.cancel && e.cancel()), !u || !l) throw new SE(fE.UNEXPECTED_ERROR, "missing gateway or proxy response").print();
    if (e.apUrl = h, "disabled" !== e.cloudProxyServer && Array.isArray(r) && h) {
      const t = /^https?:\/\/(.+?)(\/.*)?$/.exec(h)[1];
      r.includes(t) && (e.proxyServer = t, OE.setProxyServer(t), Pg.setProxyServer(t));
    }
    return s = {
      gatewayInfo: u,
      proxyInfo: await HI(l, u.uid)
    }, s;
  }
  async function hv(e, t, i, n) {
    const r = GE("UAP_AP").slice(0, GE("AJAX_REQUEST_CONCURRENT")).map(e => t.proxyServer ? "https://".concat(t.proxyServer, "/ap/?url=").concat(e + "/api/v1?action=uap") : "https://".concat(e, "/api/v1?action=uap"));
    return await QC(r, e, t, i, n);
  }
  async function pv(e, t, i) {
    const n = GE("UAP_AP").slice(0, GE("AJAX_REQUEST_CONCURRENT")).map(t => e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(t + "/api/v1?action=uap") : "https://".concat(t, "/api/v1?action=uap")).map(n => function (e, t, i, n) {
      const r = {
        command: "convergeAllocateEdge",
        sid: t.sid,
        appId: t.appId,
        token: t.token,
        ts: Date.now(),
        version: bE,
        cname: t.cname,
        uid: t.uid.toString(),
        requestId: ZC,
        seq: ZC
      };
      ZC += 1;
      const o = {
        service_name: "tele_channel",
        json_body: JSON.stringify(r)
      };
      return RE(async () => {
        const t = await gg(e, {
          data: o,
          cancelToken: i,
          headers: {
            "X-Packet-Service-Type": 0,
            "X-Packet-URI": 61
          }
        });
        if (0 !== t.code) {
          const e = new SE(fE.UNEXPECTED_RESPONSE, "cross channel ap error, code" + t.code, {
            retry: !0
          });
          throw OE.error(e.toString()), e;
        }
        const n = JSON.parse(t.json_body);
        if (200 !== n.code) {
          const e = new SE(fE.UNEXPECTED_RESPONSE, "cross channel app center error, code: ".concat(n.code, ", reason: ").concat(n.reason));
          throw OE.error(e.toString()), e;
        }
        if (!n.servers || 0 === n.servers.length) {
          const e = new SE(fE.UNEXPECTED_RESPONSE, "cross channel app center empty server");
          throw OE.error(e.toString()), e;
        }
        return {
          vid: n.vid,
          workerToken: n.workerToken,
          addressList: (GE("CHANNEL_MEDIA_RELAY_SERVERS") || n.servers).map(e => "wss://".concat(e.address.replace(/\./g, "-"), ".").concat(GE("WORKER_DOMAIN"), ":").concat(e.wss))
        };
      }, void 0, e => !!(e.code !== fE.OPERATION_ABORTED && e.code !== fE.UNEXPECTED_RESPONSE || e.data && e.data.retry), n);
    }(n, e, t, i));
    try {
      const e = await iC(n);
      return n.forEach(e => e.cancel()), e;
    } catch (e) {
      throw e[0];
    }
  }
  async function _v(e, t, i) {
    let n = null;
    const r = [],
      o = async o => {
        const s = GE(o ? "WEBCS_DOMAIN_BACKUP_LIST" : "WEBCS_DOMAIN").map(t => e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(t + "/api/v2/transpond/webrtc?v=2") : "https://".concat(t, "/api/v2/transpond/webrtc?v=2"));
        return o && (await zI(1000), null !== n) ? n : await fC({
          fragementLength: GE("FRAGEMENT_LENGTH"),
          referenceList: s,
          asyncMapHandler: n => (OE.debug("[".concat(e.clientId, "] update ticket, Connect to ").concat(o ? "backup" : "", " choose_server:"), n), function (e, t, i, n) {
            const [r] = ov(t, [XS.CHOOSE_SERVER]);
            let o = Ig.networkState;
            return RE(async () => {
              o && Ig.networkState === PS.OFFLINE && Ig.onlineWaiter && (await Sl.race([Ig.onlineWaiter, zI(n && n.maxRetryTimeout || TE.maxRetryTimeout)])), o = Ig.networkState;
              const t = await gg(e, {
                data: r,
                cancelToken: i,
                headers: {
                  "Content-Type": "multipart/form-data;"
                }
              }, !0);
              return nv(t, e);
            }, () => !1, e => e.code !== fE.OPERATION_ABORTED && (e.code === fE.UPDATE_TICKET_FAILED ? e.data.retry : (OE.warning("[".concat(t.clientId, "] update ticket network error, retry"), e), !0)), n);
          }(n, e, t, i)),
          allFailedhandler: e => {
            throw e[0];
          },
          promisesCollector: r
        });
      };
    try {
      return n = await iC([o(!1), o(!0)]), r.length && r.forEach(e => e.cancel && "function" == typeof e.cancel && e.cancel()), n;
    } catch (e) {
      throw e[0];
    }
  }
  function Ev(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function mv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ev(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ev(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class fv extends EE {
    constructor() {
      super(), _p(this, "configs", void 0), _p(this, "joinInfo", void 0), _p(this, "cancelToken", void 0), _p(this, "retryConfig", {
        timeout: 3000,
        timeoutFactor: 1.5,
        maxRetryCount: 1,
        maxRetryTimeout: 10000
      }), _p(this, "interval", void 0), _p(this, "mutex", new Ug("config-distribute")), _p(this, "mutableParamsRead", !1);
    }
    startGetConfigDistribute(e, t) {
      this.joinInfo = e, this.cancelToken = t, this.interval && this.stopGetConfigDistribute(), GE("ENABLE_CONFIG_DISTRIBUTE") && (this.updateConfigDistribute(), this.interval = window.setInterval(() => {
        this.updateConfigDistribute();
      }, GE("CONFIG_DISTRIBUTE_INTERVAL")));
    }
    stopGetConfigDistribute() {
      this.interval && clearInterval(this.interval), this.interval = void 0, this.joinInfo = void 0, this.cancelToken = void 0;
    }
    async awaitConfigDistributeComplete() {
      if (!this.mutex.isLocked) return;
      (await this.mutex.lock())();
    }
    async updateConfigDistribute() {
      if (!this.mutableParamsRead) {
        this.mutableParamsRead = !0;
        Pg.reportApiInvoke(null, {
          options: void 0,
          name: _f.LOAD_CONFIG_FROM_LOCALSTORAGE,
          tag: Ef.TRACER
        }).onSuccess(JSON.stringify(HE));
      }
      if (!this.joinInfo || !this.cancelToken || !this.retryConfig) return void OE.debug("[config-distribute] get config distribute interrupted have no joininfo");
      let e;
      const t = await this.mutex.lock();
      try {
        e = await uv(this.joinInfo, this.cancelToken, this.retryConfig), OE.debug("[config-distribute] get config distribute", JSON.stringify(e)), e.limit_bitrate && this.handleBitrateLimit(e.limit_bitrate), this.cacheGlobalParameterConfig(e), this.configs = e;
      } catch (e) {
        const t = new SE(fE.NETWORK_RESPONSE_ERROR, e);
        OE.warning("[config-distribute] ".concat(t.toString()));
      } finally {
        t();
      }
    }
    getBitrateLimit() {
      return this.configs ? this.configs.limit_bitrate : void 0;
    }
    handleBitrateLimit(e) {
      var t;
      (t = e) && t.uplink && t.id && void 0 !== t.uplink.max_bitrate && void 0 !== t.uplink.min_bitrate && (this.configs && this.configs.limit_bitrate ? this.configs && this.configs.limit_bitrate && this.configs.limit_bitrate.id !== e.id && this.emit(vS.UPDATE_BITRATE_LIMIT, e) : this.emit(vS.UPDATE_BITRATE_LIMIT, e));
    }
    getLowStreamConfigDistribute() {
      return this.configs && this.configs.limit_bitrate && mv({}, this.configs.limit_bitrate.low_stream_uplink);
    }
    cacheGlobalParameterConfig(e) {
      var t;
      const i = Hm(t = Object.keys(e).filter(e => /^webrtc_ng_global_parameter/.test(e))).call(t);
      for (let t = 0; t < i.length; t++) for (let n = i.length - 1; n > t; n--) {
        const t = i[n];
        if ("number" == typeof e[t].__priority) {
          const r = e[t].__priority,
            o = i[n - 1];
          if ("number" == typeof e[o].__priority) {
            if (!(r > e[o].__priority)) continue;
            {
              const e = t;
              i[n] = i[n - 1], i[n - 1] = e;
            }
          } else {
            const e = t;
            i[n] = i[n - 1], i[n - 1] = e;
          }
        }
      }
      const n = {};
      i.forEach(t => {
        const i = e[t],
          r = i.__expires;
        Object.keys(i).forEach(e => {
          "__priority" === e || "__expires" === e || Object.prototype.hasOwnProperty.call(n, e) || (n[e] = mv({
            value: i[e]
          }, r && {
            expires: r
          }));
        });
      });
      try {
        const e = JSON.stringify(n),
          t = window.btoa(e);
        window.localStorage.setItem("websdk_ng_global_parameter", t), OE.debug("Caching global parameters ".concat(e));
      } catch (e) {
        OE.error("Error caching global parameters:", e.message);
      }
    }
  }
  function Sv(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Tv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Sv(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Sv(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class gv extends EE {
    constructor(e, t, i, n) {
      super(), _p(this, "spec", void 0), _p(this, "token", void 0), _p(this, "websocket", void 0), _p(this, "pingpongTimer", void 0), _p(this, "reconnectMode", "retry"), _p(this, "serviceMode", void 0), _p(this, "reqId", 0), _p(this, "commandReqId", 0), _p(this, "handleWebSocketOpen", () => {
        this.reconnectMode = "retry", this.startPingPong();
      }), _p(this, "handleWebSocketMessage", e => {
        if (!e.data) return;
        const t = JSON.parse(e.data);
        t.requestId ? this.emit("@".concat(t.requestId, "-").concat(t.sid), t) : this.serviceMode === Kf.INJECT ? this.emit(Zf.INJECT_STREAM_STATUS, t) : (Pg.workerEvent(this.spec.sid, {
          actionType: "status",
          serverCode: t.code,
          workerType: this.serviceMode === Kf.TRANSCODE ? 1 : 2
        }), this.emit(Zf.PUBLISH_STREAM_STATUS, t));
      }), this.spec = t, this.token = e, this.serviceMode = n, this.websocket = new vC("live-streaming", i), this.websocket.on(Hf.CONNECTED, this.handleWebSocketOpen), this.websocket.on(Hf.ON_MESSAGE, this.handleWebSocketMessage), this.websocket.on(Hf.REQUEST_NEW_URLS, (e, t) => {
        nC(this, Zf.REQUEST_NEW_ADDRESS).then(e).catch(t);
      }), this.websocket.on(Hf.RECONNECTING, () => {
        this.websocket.reconnectMode = this.reconnectMode;
      });
    }
    init(e) {
      return this.websocket.init(e);
    }
    async request(e, t, i, n) {
      this.reqId += 1, "request" === e && (this.commandReqId += 1);
      const r = this.commandReqId,
        o = this.reqId;
      if (!o || !this.websocket) throw new SE(fE.UNEXPECTED_ERROR);
      const s = Tv({
        command: e,
        sdkVersion: "4.18.2" === bE ? "0.0.1" : bE,
        seq: o,
        requestId: o,
        allocate: i,
        cname: this.spec.cname,
        appId: this.spec.appId,
        sid: this.spec.sid,
        uid: this.spec.uid.toString(),
        ts: Math.floor(Date.now() / 1000)
      }, t);
      if ("closed" === this.websocket.state) throw new SE(fE.WS_DISCONNECT);
      const a = () => new Sl((e, t) => {
        this.websocket.once(Hf.CLOSED, () => t(new SE(fE.WS_ABORT))), this.websocket.once(Hf.CONNECTED, e);
      });
      "connected" !== this.websocket.state && (await a()), s.clientRequest && (s.clientRequest.workerToken = this.token);
      const c = new Sl((e, t) => {
        const i = () => {
          t(new SE(fE.WS_ABORT));
        };
        this.websocket.once(Hf.RECONNECTING, i), this.websocket.once(Hf.CLOSED, i), this.once("@".concat(o, "-").concat(this.spec.sid), t => {
          e(t);
        });
      });
      n && Pg.workerEvent(this.spec.sid, Tv(Tv({}, n), {}, {
        requestId: r,
        actionType: "request",
        payload: JSON.stringify(t.clientRequest),
        serverCode: 0,
        code: 0
      }));
      const d = Date.now();
      this.websocket.sendMessage(s);
      let u = null;
      try {
        u = await c;
      } catch (n) {
        if ("closed" === this.websocket.state) throw n;
        return await a(), await this.request(e, t, i);
      }
      return n && Pg.workerEvent(this.spec.sid, Tv(Tv({}, n), {}, {
        requestId: r,
        actionType: "response",
        payload: JSON.stringify(u.serverResponse),
        serverCode: u.code,
        success: 200 === u.code,
        responseTime: Date.now() - d
      })), 200 !== u.code && this.handleResponseError(u), u;
    }
    tryNextAddress() {
      this.reconnectMode = "tryNext", this.websocket.reconnect("tryNext");
    }
    close() {
      const e = "4.18.2" === bE ? "0.0.1" : bE;
      this.reqId += 1, "connected" === this.websocket.state ? (this.websocket.sendMessage({
        command: "request",
        appId: this.spec.appId,
        cname: this.spec.cname,
        uid: this.spec.uid.toString(),
        sdkVersion: e,
        sid: this.spec.sid,
        seq: this.reqId,
        ts: Math.floor(Date.now() / 1000),
        requestId: this.reqId,
        clientRequest: {
          command: "DestroyWorker"
        }
      }), this.websocket.close(!1, !0)) : this.websocket.close(!1), this.pingpongTimer && (window.clearInterval(this.pingpongTimer), this.pingpongTimer = void 0);
    }
    handleResponseError(e) {
      switch (e.code) {
        case eS.LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM:
          return void OE.warning("live stream response already exists stream");
        case eS.LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR:
        case eS.LIVE_STREAM_RESPONSE_BAD_STREAM:
        case eS.LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR:
          return new SE(fE.LIVE_STREAMING_INVALID_ARGUMENT, "", {
            code: e.code
          }).throw();
        case eS.LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST:
          if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
          throw new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", {
            retry: !0
          });
        case eS.LIVE_STREAM_RESPONSE_NOT_AUTHORIZED:
          return new SE(fE.LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED, "", {
            code: e.code
          }).throw();
        case eS.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE:
          {
            const t = new SE(fE.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE);
            return this.emit(Zf.WARNING, t, e.serverResponse.url);
          }
        case eS.LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN:
          {
            const t = new SE(fE.LIVE_STREAMING_WARN_FREQUENT_REQUEST);
            return this.emit(Zf.WARNING, t, e.serverResponse.url);
          }
        case eS.LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH:
          throw new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", {
            retry: !0
          });
        case eS.LIVE_STREAM_RESPONSE_NOT_SUPPORTED:
          return new SE(fE.LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED, "", {
            code: e.code
          }).throw();
        case eS.LIVE_STREAM_RESPONSE_MAX_STREAM_NUM:
          {
            const t = new SE(fE.LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT);
            return this.emit(Zf.WARNING, t, e.serverResponse.url);
          }
        case eS.LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR:
          return new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", {
            code: e.code
          }).throw();
        case eS.LIVE_STREAM_RESPONSE_RESOURCE_LIMIT:
          throw new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream resource limit", {
            retry: !0,
            changeAddress: !0
          });
        case eS.LIVE_STREAM_RESPONSE_WORKER_LOST:
        case eS.LIVE_STREAM_RESPONSE_WORKER_QUIT:
          if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
          throw new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {
            retry: !0,
            changeAddress: !0
          });
        case eS.ERROR_FAIL_SEND_MESSAGE:
          if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
          if ("UpdateTranscoding" === e.serverResponse.command || "ControlStream" === e.serverResponse.command) return new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {
            code: e.code
          }).throw();
          throw new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {
            retry: !0,
            changeAddress: !0
          });
        case eS.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
          return new SE(fE.LIVE_STREAMING_CDN_ERROR, "", {
            code: e.code
          }).throw();
      }
    }
    startPingPong() {
      this.pingpongTimer && window.clearInterval(this.pingpongTimer), this.pingpongTimer = window.setInterval(() => {
        "connected" === this.websocket.state && this.request("ping", {}).catch(eC);
      }, 6000);
    }
  }
  function Rv(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Iv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Rv(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Rv(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class Cv extends EE {
    constructor(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TE,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TE;
      super(), _p(this, "onLiveStreamWarning", void 0), _p(this, "onLiveStreamError", void 0), _p(this, "onInjectStatusChange", void 0), _p(this, "spec", void 0), _p(this, "retryTimeout", 10000), _p(this, "connection", void 0), _p(this, "httpRetryConfig", void 0), _p(this, "wsRetryConfig", void 0), _p(this, "streamingTasks", new Map()), _p(this, "isStartingStreamingTask", !1), _p(this, "taskMutex", new Ug("live-streaming")), _p(this, "cancelToken", pE.CancelToken.source()), _p(this, "transcodingConfig", void 0), _p(this, "injectConfig", Iv({}, Qf)), _p(this, "injectLoopTimes", 0), _p(this, "uapResponse", void 0), _p(this, "lastTaskId", 1), _p(this, "statusError", new Map()), this.spec = e, this.httpRetryConfig = i, this.wsRetryConfig = t;
    }
    async setTranscodingConfig(e) {
      const t = Iv(Iv({}, zf), e);
      66 !== t.videoCodecProfile && 77 !== t.videoCodecProfile && 100 !== t.videoCodecProfile && (OE.debug("[".concat(this.spec.clientId, "] set transcoding config, fix video codec profile: ").concat(t.videoCodecProfile, " -> 100")), t.videoCodecProfile = 100), t.transcodingUsers || (t.transcodingUsers = t.userConfigs), t.transcodingUsers && (t.transcodingUsers = t.transcodingUsers.map(e => Iv(Iv(Iv({}, qf), e), {}, {
        zOrder: e.zOrder ? e.zOrder + 1 : 1
      }))), function (e) {
        $m(e.width) || qm(e.width, "config.width", 0, 10000), $m(e.height) || qm(e.height, "config.height", 0, 10000), $m(e.videoBitrate) || qm(e.videoBitrate, "config.videoBitrate", 1, 1000000), $m(e.videoFrameRate) || qm(e.videoFrameRate, "config.videoFrameRate"), $m(e.lowLatency) || Km(e.lowLatency, "config.lowLatency"), $m(e.audioSampleRate) || Ym(e.audioSampleRate, "config.audioSampleRate", [32000, 44100, 48000]), $m(e.audioBitrate) || qm(e.audioBitrate, "config.audioBitrate", 1, 128), $m(e.audioChannels) || Ym(e.audioChannels, "config.audioChannels", [1, 2, 3, 4, 5]), $m(e.videoGop) || qm(e.videoGop, "config.videoGop"), $m(e.videoCodecProfile) || Ym(e.videoCodecProfile, "config.videoCodecProfile", [66, 77, 100]), $m(e.userCount) || qm(e.userCount, "config.userCount", 0, 17), $m(e.backgroundColor) || qm(e.backgroundColor, "config.backgroundColor", 0, 16777215), $m(e.userConfigExtraInfo) || Xm(e.userConfigExtraInfo, "config.userConfigExtraInfo", 0, 4096, !1), e.transcodingUsers && !$m(e.transcodingUsers) && (zm(e.transcodingUsers, "config.transcodingUsers"), e.transcodingUsers.forEach((e, t) => {
          Zm(e.uid), $m(e.x) || qm(e.x, "transcodingUser[".concat(t, "].x"), 0, 10000), $m(e.y) || qm(e.y, "transcodingUser[".concat(t, "].y"), 0, 10000), $m(e.width) || qm(e.width, "transcodingUser[".concat(t, "].width"), 0, 10000), $m(e.height) || qm(e.height, "transcodingUser[".concat(t, "].height"), 0, 10000), $m(e.zOrder) || qm(e.zOrder - 1, "transcodingUser[".concat(t, "].zOrder"), 0, 100), $m(e.alpha) || qm(e.alpha, "transcodingUser[".concat(t, "].alpha"), 0, 1, !1);
        })), $m(e.watermark) || Xf(e.watermark, "watermark"), $m(e.backgroundImage) || Xf(e.backgroundImage, "backgroundImage"), e.images && !$m(e.images) && (zm(e.images, "config.images"), e.images.forEach((e, t) => {
          Xf(e, "images[".concat(t, "]"));
        }));
      }(t);
      const i = [];
      t.images && i.push(...t.images.map(e => Iv(Iv(Iv({}, Jf), e), {}, {
        zOrder: 255
      }))), t.backgroundImage && (i.push(Iv(Iv(Iv({}, Jf), t.backgroundImage), {}, {
        zOrder: 0
      })), delete t.backgroundImage), t.watermark && (i.push(Iv(Iv(Iv({}, Jf), t.watermark), {}, {
        zOrder: 255
      })), delete t.watermark), t.images = i, t.transcodingUsers && (t.userConfigs = t.transcodingUsers.map(e => Iv({}, e)), t.userCount = t.transcodingUsers.length, delete t.transcodingUsers);
      const n = (t.userConfigs || []).map(e => "number" == typeof e.uid ? Sl.resolve(e.uid) : dv(e.uid, this.spec, this.cancelToken.token, this.httpRetryConfig));
      if ((await Sl.all(n)).forEach((e, i) => {
        t.userConfigs && t.userConfigs[i] && (t.userConfigs[i].uid = e);
      }), this.transcodingConfig = t, this.connection) try {
        var r;
        const e = await this.connection.request("request", {
          clientRequest: {
            command: "UpdateTranscoding",
            transcodingConfig: this.transcodingConfig
          }
        }, !1, {
          command: "UpdateTranscoding",
          workerType: 1,
          requestByUser: !0,
          tid: Array.from(IR(r = this.streamingTasks).call(r)).map(e => e.taskId).join("#")
        });
        OE.debug("[".concat(this.spec.clientId, "] update live transcoding config success, code: ").concat(e.code, ", config:"), JSON.stringify(this.transcodingConfig));
      } catch (e) {
        if (!e.data || !e.data.retry) throw e;
        e.data.changeAddress && this.connection.tryNextAddress(), this.streamingTasks.forEach(t => {
          OE.warning("[".concat(this.spec.clientId, "] live streaming receive error"), e.toString(), "try to republish", t.url), this.startLiveStreamingTask(t.url, t.mode, e).then(() => {
            OE.debug("[".concat(this.spec.clientId, "] live streaming republish ").concat(t.url, " success"));
          }).catch(e => {
            OE.error("[".concat(this.spec.clientId, "] live streaming republish failed"), t.url, e.toString()), this.onLiveStreamError && this.onLiveStreamError(t.url, e);
          });
        });
      }
    }
    setInjectStreamConfig(e, t) {
      this.injectConfig = Object.assign({}, this.injectConfig, e), this.injectLoopTimes = t;
    }
    async startLiveStreamingTask(e, t, i) {
      var n;
      if (Array.from(IR(n = this.streamingTasks).call(n)).find(e => e.mode === Kf.INJECT) && t === Kf.INJECT) return new SE(fE.LIVE_STREAMING_TASK_CONFLICT, "inject stream over limit").throw();
      if (!this.transcodingConfig && t === Kf.TRANSCODE) throw new SE(fE.INVALID_OPERATION, "[LiveStreaming] no transcoding config found, can not start transcoding streaming task");
      let r = {
        command: "PublishStream",
        ts: Date.now(),
        url: e,
        uid: this.spec.uid.toString(),
        autoDestroyTime: 100,
        acceptImageTimeout: !0
      };
      OE.debug("[".concat(this.spec.clientId, "] start live streaming ").concat(e, ", mode: ").concat(t));
      const o = await this.taskMutex.lock();
      if (!this.connection && i) return void o();
      if (this.streamingTasks.get(e) && !i) return o(), new SE(fE.LIVE_STREAMING_TASK_CONFLICT).throw();
      try {
        this.connection || (this.connection = await this.connect(t));
      } catch (e) {
        throw o(), e;
      }
      switch (t) {
        case Kf.TRANSCODE:
          r.transcodingConfig = Iv({}, this.transcodingConfig);
          break;
        case Kf.RAW:
          break;
        case Kf.INJECT:
          r = {
            cname: this.spec.cname,
            command: "InjectStream",
            sid: this.spec.sid,
            transcodingConfig: this.injectConfig,
            ts: Date.now(),
            url: e,
            loopTimes: this.injectLoopTimes
          };
      }
      this.uapResponse && this.uapResponse.vid && (r.vid = this.uapResponse.vid), this.isStartingStreamingTask = !0;
      const s = this.lastTaskId++;
      try {
        const n = new Sl((t, n) => {
            zI(this.retryTimeout).then(() => {
              if (i) return n(i);
              const t = this.statusError.get(e);
              return t ? (this.statusError.delete(e), n(t)) : void 0;
            });
          }),
          a = await Sl.race([this.connection.request("request", {
            clientRequest: r
          }, !0, {
            url: e,
            command: "PublishStream",
            workerType: t === Kf.TRANSCODE ? 1 : 2,
            requestByUser: !i,
            tid: s.toString()
          }), n]);
        this.isStartingStreamingTask = !1, OE.debug("[".concat(this.spec.clientId, "] live streaming started, code: ").concat(a.code)), this.streamingTasks.set(e, {
          clientRequest: r,
          mode: t,
          url: e,
          taskId: s
        }), o();
      } catch (n) {
        if (o(), this.isStartingStreamingTask = !1, !n.data || !n.data.retry || i) throw n;
        return n.data.changeAddress ? (this.connection.tryNextAddress(), await this.startLiveStreamingTask(e, t, n)) : await this.startLiveStreamingTask(e, t, n);
      }
    }
    stopLiveStreamingTask(e) {
      return new Sl((t, i) => {
        const n = this.streamingTasks.get(e);
        if (!n || !this.connection) return new SE(fE.UNEXPECTED_ERROR, "can not find streaming task to stop").throw();
        const r = n.mode;
        n.abortTask = () => {
          OE.debug("[".concat(this.spec.clientId, "] stop live streaming success(worker exception)")), this.streamingTasks.delete(e), t();
        }, this.connection.request("request", {
          clientRequest: {
            command: r === Kf.INJECT ? "UninjectStream" : "UnpublishStream",
            url: n.url
          }
        }, !1, {
          url: e,
          command: "UnPublishStream",
          workerType: r === Kf.TRANSCODE ? 1 : 2,
          requestByUser: !0,
          tid: (this.lastTaskId++).toString()
        }).then(i => {
          OE.debug("[".concat(this.spec.clientId, "] stop live streaming success, code: ").concat(i.code)), this.streamingTasks.delete(e), 0 === this.streamingTasks.size && r !== Kf.INJECT && (this.connection && this.connection.close(), this.connection = void 0), t(), r === Kf.INJECT && this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_STOP_SUCCESS, this.spec.uid, e);
        }).catch(i);
      });
    }
    async controlInjectStream(e, t, i, n) {
      const r = this.streamingTasks.get(e);
      if (!r || !this.connection || r.mode !== Kf.INJECT) throw new SE(fE.INVALID_OPERATION, "can not find inject stream task to control");
      return (await this.connection.request("request", {
        clientRequest: {
          command: "ControlStream",
          url: e,
          control: t,
          audioVolume: i,
          position: n
        }
      })).serverResponse;
    }
    resetAllTask() {
      var e;
      const t = Array.from(IR(e = this.streamingTasks).call(e));
      this.terminate();
      for (const e of t) this.startLiveStreamingTask(e.url, e.mode).catch(t => {
        this.onLiveStreamError && this.onLiveStreamError(e.url, t);
      });
    }
    terminate() {
      this.cancelToken && this.cancelToken.cancel(), this.streamingTasks = new Map(), this.isStartingStreamingTask = !1, this.statusError = new Map(), this.cancelToken = pE.CancelToken.source(), this.uapResponse = void 0, this.connection && this.connection.close(), this.connection = void 0;
    }
    async connect(e) {
      if (this.connection) throw new SE(fE.UNEXPECTED_ERROR, "live streaming connection has already connected");
      const t = await nC(this, $f.REQUEST_WORKER_MANAGER_LIST, e);
      return this.uapResponse = t, this.connection = new gv(t.workerToken, this.spec, this.wsRetryConfig, e), this.connection.on(Zf.WARNING, (e, t) => this.onLiveStreamWarning && this.onLiveStreamWarning(t, e)), this.connection.on(Zf.PUBLISH_STREAM_STATUS, e => this.handlePublishStreamServer(e)), this.connection.on(Zf.INJECT_STREAM_STATUS, e => this.handleInjectStreamServerStatus(e)), this.connection.on(Zf.REQUEST_NEW_ADDRESS, (t, i) => {
        if (!this.connection) return i(new SE(fE.UNEXPECTED_ERROR, "can not get new live streaming address list"));
        nC(this, $f.REQUEST_WORKER_MANAGER_LIST, e).then(e => {
          this.uapResponse = e, t(e.addressList);
        }).catch(i);
      }), await this.connection.init(t.addressList), this.connection;
    }
    handlePublishStreamServer(e) {
      const t = e.serverStatus && e.serverStatus.url || "empty_url",
        i = this.streamingTasks.get(t),
        n = e.reason;
      switch (e.code) {
        case eS.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
        case eS.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
          {
            const n = new SE(fE.LIVE_STREAMING_CDN_ERROR, "", {
              code: e.code
            });
            if (i) return OE.error(n.toString()), this.onLiveStreamError && this.onLiveStreamError(t, n);
            if (!this.isStartingStreamingTask) return;
            this.statusError.set(t, n);
          }
        case eS.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE:
          {
            const e = new SE(fE.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE, n);
            return this.onLiveStreamWarning && this.onLiveStreamWarning(t, e);
          }
        case eS.LIVE_STREAM_RESPONSE_WORKER_LOST:
        case eS.LIVE_STREAM_RESPONSE_WORKER_QUIT:
          {
            var r;
            if (!this.connection) return;
            this.connection.tryNextAddress();
            const t = Array.from(IR(r = this.streamingTasks).call(r));
            for (const i of t) i.abortTask ? i.abortTask() : (OE.warning("[".concat(this.spec.clientId, "] publish stream status code"), e.code, "try to republish", i.url), this.startLiveStreamingTask(i.url, i.mode, new SE(fE.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", {
              code: e.code
            })).then(() => {
              OE.debug("[".concat(this.spec.clientId, "] republish live stream success"), i.url);
            }).catch(e => {
              OE.error(e.toString()), this.onLiveStreamError && this.onLiveStreamError(i.url, e);
            }));
            return;
          }
      }
    }
    handleInjectStreamServerStatus(e) {
      const t = Number(e.uid),
        i = e.serverStatus && e.serverStatus.url;
      switch (e.code) {
        case 200:
          return void (this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_START_SUCCESS, t, i));
        case 451:
          return this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_START_ALREADY_EXISTS, t, i), void this.streamingTasks.delete(i);
        case 453:
          return this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_START_UNAUTHORIZED, t, i), void this.streamingTasks.delete(i);
        case 470:
          return this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_BROKEN, t, i), void this.streamingTasks.delete(i);
        case 499:
          return this.onInjectStatusChange && this.onInjectStatusChange(Yf.INJECT_STREAM_STATUS_START_TIMEOUT, t, i), void this.streamingTasks.delete(i);
        default:
          return void OE.debug("inject stream server status", e);
      }
    }
    hasUrl(e) {
      return this.streamingTasks.has(e);
    }
  }
  class vv {
    constructor() {
      _p(this, "destChannelMediaInfos", new Map()), _p(this, "srcChannelMediaInfo", void 0);
    }
    setSrcChannelInfo(e) {
      TS(e), this.srcChannelMediaInfo = e;
    }
    addDestChannelInfo(e) {
      TS(e), this.destChannelMediaInfos.set(e.channelName, e);
    }
    removeDestChannelInfo(e) {
      Qm(e), this.destChannelMediaInfos.delete(e);
    }
    getSrcChannelMediaInfo() {
      return this.srcChannelMediaInfo;
    }
    getDestChannelMediaInfo() {
      return this.destChannelMediaInfos;
    }
  }
  function yv(e) {
    if (!(e instanceof vv)) {
      return new SE(fE.INVALID_PARAMS, "Config should be instance of [ChannelMediaRelayConfiguration]").throw();
    }
    const t = e.getSrcChannelMediaInfo(),
      i = e.getDestChannelMediaInfo();
    if (!t) {
      return new SE(fE.INVALID_PARAMS, "srcChannelMediaInfo should not be empty").throw();
    }
    if (0 === i.size) {
      return new SE(fE.INVALID_PARAMS, "destChannelMediaInfo should not be empty").throw();
    }
  }
  class Av extends EE {
    constructor(e, t, i) {
      super(), _p(this, "ws", void 0), _p(this, "requestId", 1), _p(this, "heartBeatTimer", void 0), _p(this, "joinInfo", void 0), _p(this, "clientId", void 0), _p(this, "onOpen", () => {
        this.emit("open"), this.startHeartBeatCheck();
      }), _p(this, "onClose", e => {
        this.emit("close"), this.dispose();
      }), _p(this, "onMessage", e => {
        const t = JSON.parse(e.data);
        if (!t || "serverResponse" !== t.command || !t.requestId) return t && "serverStatus" === t.command && t.serverStatus && t.serverStatus.command ? (this.emit("status", t.serverStatus), void this.emit(t.serverStatus.command, t.serverStatus)) : void 0;
        this.emit("req_".concat(t.requestId), t);
      }), this.joinInfo = e, this.clientId = t, this.ws = new vC("cross-channel-".concat(this.clientId), i), this.ws.on(Hf.RECONNECTING, () => {
        this.ws.reconnectMode = "retry", this.emit("reconnecting");
      }), this.ws.on(Hf.CONNECTED, this.onOpen), this.ws.on(Hf.ON_MESSAGE, this.onMessage), this.ws.on(Hf.CLOSED, this.onClose);
    }
    isConnect() {
      return "connected" === this.ws.state;
    }
    sendMessage(e) {
      const t = this.requestId++;
      return e.requestId = t, e.seq = t, this.ws.sendMessage(e), t;
    }
    waitStatus(e) {
      return new Sl((t, i) => {
        const n = window.setTimeout(() => {
          i(new SE(fE.TIMEOUT, "wait status timeout, status: ".concat(e)));
        }, 5000);
        this.once(e, r => {
          window.clearTimeout(n), r.state && 0 !== r.state ? i(new SE(fE.CROSS_CHANNEL_WAIT_STATUS_ERROR, "wait status error, status: ".concat(e))) : t(void 0);
        }), this.once("dispose", () => {
          window.clearTimeout(n), i(new SE(fE.WS_ABORT));
        });
      });
    }
    async request(e) {
      if ("closed" === this.ws.state) throw new SE(fE.WS_DISCONNECT);
      const t = () => new Sl((e, t) => {
        this.ws.once(Hf.CLOSED, () => t(new SE(fE.WS_ABORT))), this.ws.once(Hf.CONNECTED, e);
      });
      "connected" !== this.ws.state && (await t());
      const i = this.sendMessage(e),
        n = new Sl((e, t) => {
          const n = () => {
            t(new SE(fE.WS_ABORT));
          };
          this.ws.once(Hf.RECONNECTING, n), this.ws.once(Hf.CLOSED, n), this.once("req_".concat(i), e), zI(3000).then(() => {
            this.removeAllListeners("req_".concat(i)), this.ws.off(Hf.RECONNECTING, n), this.ws.off(Hf.CLOSED, n), t(new SE(fE.TIMEOUT, "cross channel ws request timeout"));
          });
        }),
        r = await n;
      if (!r || 200 !== r.code) throw new SE(fE.CROSS_CHANNEL_SERVER_ERROR_RESPONSE, "response: ".concat(JSON.stringify(r)));
      return r;
    }
    async connect(e) {
      this.ws.removeAllListeners(Hf.REQUEST_NEW_URLS), this.ws.on(Hf.REQUEST_NEW_URLS, t => {
        t(e);
      }), await this.ws.init(e);
    }
    dispose() {
      this.clearHeartBeatCheck(), this.emit("dispose"), this.removeAllListeners(), this.ws.close();
    }
    sendPing(e) {
      const t = this.requestId++;
      return e.requestId = t, this.ws.sendMessage(e), t;
    }
    startHeartBeatCheck() {
      this.heartBeatTimer && window.clearInterval(this.heartBeatTimer), this.heartBeatTimer = window.setInterval(() => {
        this.sendPing({
          command: "ping",
          appId: this.joinInfo.appId,
          cname: this.joinInfo.cname,
          uid: this.joinInfo.uid.toString(),
          sid: this.joinInfo.sid,
          ts: +new Date(),
          requestId: 0
        });
      }, 3000);
    }
    clearHeartBeatCheck() {
      window.clearInterval(this.heartBeatTimer), this.heartBeatTimer = void 0;
    }
  }
  class Ov extends EE {
    set state(e) {
      e !== this._state && (e !== rS.RELAY_STATE_FAILURE && (this.errorCode = oS.RELAY_OK), this.emit("state", e, this.errorCode), this._state = e);
    }
    get state() {
      return this._state;
    }
    constructor(e, t, i, n, r) {
      super(), _p(this, "joinInfo", void 0), _p(this, "sid", void 0), _p(this, "clientId", void 0), _p(this, "cancelToken", pE.CancelToken.source()), _p(this, "workerToken", void 0), _p(this, "requestId", 0), _p(this, "signal", void 0), _p(this, "prevChannelMediaConfig", void 0), _p(this, "httpRetryConfig", void 0), _p(this, "_resolution", void 0), _p(this, "_state", rS.RELAY_STATE_IDLE), _p(this, "errorCode", oS.RELAY_OK), _p(this, "onStatus", e => {
        OE.debug("[".concat(this.clientId, "] ChannelMediaStatus: ").concat(JSON.stringify(e))), e && e.command && ("onAudioPacketReceived" === e.command && this.emit("event", nS.PACKET_RECEIVED_AUDIO_FROM_SRC), "onVideoPacketReceived" === e.command && this.emit("event", nS.PACKET_RECEIVED_VIDEO_FROM_SRC), "onSrcTokenPrivilegeDidExpire" === e.command && (this.errorCode = oS.SRC_TOKEN_EXPIRED, this.state = rS.RELAY_STATE_FAILURE), "onDestTokenPrivilegeDidExpire" === e.command && (this.errorCode = oS.DEST_TOKEN_EXPIRED, this.state = rS.RELAY_STATE_FAILURE));
      }), _p(this, "onReconnect", async () => {
        OE.debug("[".concat(this.clientId, "] ChannelMediaSocket disconnect, reconnecting")), this.emit("event", nS.NETWORK_DISCONNECTED), this.state = rS.RELAY_STATE_IDLE, this.prevChannelMediaConfig && this.sendStartRelayMessage(this.prevChannelMediaConfig).catch(e => {
          this.state !== rS.RELAY_STATE_IDLE && (OE.error("auto restart channel media relay failed", e.toString()), this.errorCode = oS.SERVER_CONNECTION_LOST, this.state = rS.RELAY_STATE_FAILURE);
        });
      }), this.joinInfo = e, this.clientId = t, this.sid = $I(), this.signal = new Av(this.joinInfo, this.clientId, i), this.httpRetryConfig = n, this._resolution = r;
    }
    async startChannelMediaRelay(e) {
      if (this.state !== rS.RELAY_STATE_IDLE) throw new SE(fE.INVALID_OPERATION);
      this.state = rS.RELAY_STATE_CONNECTING, await this.connect(), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: connect success"));
      try {
        await this.sendStartRelayMessage(e);
      } catch (e) {
        if (e.data && e.data.serverResponse && "SetSourceChannel" === e.data.serverResponse.command) throw new SE(fE.CROSS_CHANNEL_FAILED_JOIN_SRC);
        if (e.data && e.data.serverResponse && "SetDestChannelStatus" === e.serverResponse.command) throw new SE(fE.CROSS_CHANNEL_FAILED_JOIN_DEST);
        if (e.data && e.data.serverResponse && "StartPacketTransfer" === e.serverResponse.command) throw new SE(fE.CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST);
        throw e;
      }
      this.prevChannelMediaConfig = e;
    }
    async updateChannelMediaRelay(e) {
      if (this.state !== rS.RELAY_STATE_RUNNING) throw new SE(fE.INVALID_OPERATION);
      await this.sendUpdateMessage(e), this.prevChannelMediaConfig = e;
    }
    async setVideoProfile(e) {
      if (this._resolution = e, this.state !== rS.RELAY_STATE_RUNNING) throw new SE(fE.INVALID_OPERATION);
      const t = this.genMessage(iS.SetVideoProfile);
      await this.signal.request(t), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: setVideoProfile success"));
    }
    async stopChannelMediaRelay() {
      await this.sendStopRelayMessage(), OE.debug("[".concat(this.clientId, "] stopChannelMediaRelay: send stop message success")), this.state = rS.RELAY_STATE_IDLE, this.dispose();
    }
    dispose() {
      OE.debug("[".concat(this.clientId, "] disposeChannelMediaRelay")), this.cancelToken.cancel(), this.cancelToken = pE.CancelToken.source(), this.state = rS.RELAY_STATE_IDLE, this.emit("dispose"), this.signal.dispose(), this.prevChannelMediaConfig = void 0;
    }
    async connect() {
      const e = await pv(this.joinInfo, this.cancelToken.token, this.httpRetryConfig);
      this.workerToken = e.workerToken, await this.signal.connect(e.addressList), this.emit("event", nS.NETWORK_CONNECTED), this.signal.on("status", this.onStatus), this.signal.on("reconnecting", this.onReconnect);
    }
    async sendStartRelayMessage(e) {
      const t = this.genMessage(iS.StopPacketTransfer);
      await this.signal.request(t), await this.signal.waitStatus("Normal Quit"), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: StopPacketTransfer success"));
      const i = this.genMessage(iS.SetSdkProfile, e);
      await this.signal.request(i), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSdkProfile success"));
      const n = this.genMessage(iS.SetSourceChannel, e);
      await this.signal.request(n), await this.signal.waitStatus("SetSourceChannelStatus"), this.emit("event", nS.PACKET_JOINED_SRC_CHANNEL), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSourceChannel success"));
      const r = this.genMessage(iS.SetSourceUserId, e);
      await this.signal.request(r), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSourceUserId success"));
      const o = this.genMessage(iS.SetDestChannel, e);
      await this.signal.request(o), await this.signal.waitStatus("SetDestChannelStatus"), this.emit("event", nS.PACKET_JOINED_DEST_CHANNEL), OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetDestChannel success"));
      const s = this.genMessage(iS.StartPacketTransfer, e);
      await this.signal.request(s), this.emit("event", nS.PACKET_SENT_TO_DEST_CHANNEL), this.state = rS.RELAY_STATE_RUNNING, OE.debug("[".concat(this.clientId, "] startChannelMediaRelay: StartPacketTransfer success")), this.setVideoProfile(this._resolution);
    }
    async sendUpdateMessage(e) {
      const t = this.genMessage(iS.UpdateDestChannel, e);
      await this.signal.request(t), this.emit("event", nS.PACKET_UPDATE_DEST_CHANNEL), OE.debug("[".concat(this.clientId, "] sendUpdateMessage: UpdateDestChannel success"));
    }
    async sendStopRelayMessage() {
      const e = this.genMessage(iS.StopPacketTransfer);
      await this.signal.request(e), OE.debug("[".concat(this.clientId, "] sendStopRelayMessage: StopPacketTransfer success"));
    }
    genMessage(e, t) {
      const i = [],
        n = [],
        r = [];
      this.requestId += 1;
      const o = {
        appId: this.joinInfo.appId,
        cname: this.joinInfo.cname,
        uid: this.joinInfo.uid.toString(),
        sdkVersion: bE,
        sid: this.sid,
        ts: Date.now(),
        requestId: this.requestId,
        seq: this.requestId,
        allocate: !0,
        clientRequest: {}
      };
      "4.18.2" === o.sdkVersion && (o.sdkVersion = "0.0.1");
      let s = null,
        a = null;
      switch (e) {
        case iS.SetSdkProfile:
          return o.clientRequest = {
            command: "SetSdkProfile",
            type: "multi_channel"
          }, o;
        case iS.SetSourceChannel:
          if (a = t && t.getSrcChannelMediaInfo(), !a) throw new SE(fE.UNEXPECTED_ERROR, "can not find source config");
          return o.clientRequest = {
            command: "SetSourceChannel",
            uid: "0",
            channelName: a.channelName,
            token: a.token || this.joinInfo.appId
          }, o;
        case iS.SetSourceUserId:
          if (a = t && t.getSrcChannelMediaInfo(), !a) throw new SE(fE.UNEXPECTED_ERROR, "can not find source config");
          return o.clientRequest = {
            command: "SetSourceUserId",
            uid: a.uid + ""
          }, o;
        case iS.SetDestChannel:
          if (s = t && t.getDestChannelMediaInfo(), !s) throw new SE(fE.UNEXPECTED_ERROR, "can not find dest config");
          return s.forEach(e => {
            i.push(e.channelName), n.push(e.uid + ""), r.push(e.token || this.joinInfo.appId);
          }), o.clientRequest = {
            command: "SetDestChannel",
            channelName: i,
            uid: n,
            token: r
          }, o;
        case iS.StartPacketTransfer:
          return o.clientRequest = {
            command: "StartPacketTransfer"
          }, o;
        case iS.Reconnect:
          return o.clientRequest = {
            command: "Reconnect"
          }, o;
        case iS.StopPacketTransfer:
          return o.clientRequest = {
            command: "StopPacketTransfer"
          }, o;
        case iS.UpdateDestChannel:
          if (s = t && t.getDestChannelMediaInfo(), !s) throw new SE(fE.UNEXPECTED_ERROR, "can not find dest config");
          return s.forEach(e => {
            i.push(e.channelName), n.push(e.uid + ""), r.push(e.token || this.joinInfo.appId);
          }), o.clientRequest = {
            command: "UpdateDestChannel",
            channelName: i,
            uid: n,
            token: r
          }, o;
        case iS.SetVideoProfile:
          o.clientRequest = {
            command: "SetVideoProfile",
            width: this._resolution.width,
            height: this._resolution.height
          };
      }
      return o;
    }
  }
  const Nv = e => {
      const t = document.createElement("canvas");
      return t.width = 2, t.height = 2, new Sl((i, n) => {
        t.toBlob(async e => {
          if (t.remove(), e) {
            const n = await bv(e);
            i({
              buffer: n,
              width: t.width,
              height: t.height
            });
          } else n(new SE(fE.CONVERTING_VIDEO_FRAME_TO_BLOB_FAILED));
        }, e, 1);
      });
    },
    bv = async e => {
      const t = await e.arrayBuffer();
      return new Uint8Array(t);
    };
  function wv(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Dv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wv(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : wv(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class Pv {
    get videoElementStatus() {
      return this._videoElementStatus;
    }
    set videoElementStatus(e) {
      e !== this._videoElementStatus && (OE.debug("[".concat(this.trackId, "] video-element-status change ").concat(this._videoElementStatus, " => ").concat(e)), this._videoElementStatus = e);
    }
    constructor(e) {
      _p(this, "trackId", void 0), _p(this, "config", void 0), _p(this, "onFirstVideoFrameDecoded", void 0), _p(this, "freezeTimeCounterList", []), _p(this, "renderFreezeAccTime", 0), _p(this, "isKeepLastFrame", !1), _p(this, "timeUpdatedCount", 0), _p(this, "freezeTime", 0), _p(this, "playbackTime", 0), _p(this, "lastTimeUpdatedTime", 0), _p(this, "autoplayFailed", !1), _p(this, "videoTrack", void 0), _p(this, "videoElement", void 0), _p(this, "cacheVideoElement", void 0), _p(this, "videoElementCheckInterval", void 0), _p(this, "_videoElementStatus", sf.NONE), _p(this, "isGettingVideoDimensions", !1), _p(this, "startGetVideoDimensions", () => {
        const e = () => {
          if (this.isGettingVideoDimensions = !0, this.videoElement.videoWidth * this.videoElement.videoHeight > 4) return OE.debug("[".concat(this.trackId, "] current video dimensions:"), this.videoElement.videoWidth, this.videoElement.videoHeight), void (this.isGettingVideoDimensions = !1);
          setTimeout(e, 500);
        };
        !this.isGettingVideoDimensions && e();
      }), _p(this, "autoResumeAfterInterruption", () => {
        this.videoTrack && "live" === this.videoTrack.readyState && "running" === Gg.curState && (OE.debug("[track-".concat(this.trackId, "] video element paused, auto resume for ").concat(jh())), ep() ? (this.videoElement.srcObject = null, this.videoElement.srcObject = new MediaStream([this.videoTrack]), this.videoElement.play()) : (this.videoElement.pause(), this.videoElement.play()));
      }), _p(this, "handleVideoEvents", e => {
        switch (e.type) {
          case "play":
          case "playing":
            this.startGetVideoDimensions(), this.videoElementStatus = sf.PLAYING;
            break;
          case "loadeddata":
            if (this.onFirstVideoFrameDecoded && this.onFirstVideoFrameDecoded(), this.cacheVideoElement) {
              try {
                this.cacheVideoElement.srcObject = null, this.cacheVideoElement.remove();
              } catch (e) {}
              this.cacheVideoElement = void 0;
            }
            break;
          case "canplay":
            this.videoElementStatus = sf.CANPLAY;
            break;
          case "stalled":
            this.videoElementStatus = sf.STALLED;
            break;
          case "suspend":
            this.videoElementStatus = sf.SUSPEND;
            break;
          case "pause":
            this.videoElementStatus = sf.PAUSED, Yh() || tp() || Hh() && this.autoplayFailed || !this.videoTrack || "live" !== this.videoTrack.readyState || (OE.debug("[track-".concat(this.trackId, "] video element paused, auto resume")), this.videoElement.play());
            break;
          case "waiting":
            this.videoElementStatus = sf.WAITING;
            break;
          case "abort":
            this.videoElementStatus = sf.ABORT;
            break;
          case "ended":
            this.videoElementStatus = sf.ENDED;
            break;
          case "emptied":
            this.videoElementStatus = sf.EMPTIED;
            break;
          case "error":
            {
              this.videoElementStatus = sf.ERROR;
              const e = this.videoElement.error;
              e && OE.error("[".concat(this.trackId, "] media error, code: ").concat(e.code, ", message: ").concat(e.message));
              break;
            }
          case "timeupdate":
            {
              const e = performance.now();
              if (this.timeUpdatedCount += 1, this.timeUpdatedCount < 10) return void (this.lastTimeUpdatedTime = e);
              const t = e - this.lastTimeUpdatedTime,
                i = this.lastTimeUpdatedTime;
              if (this.lastTimeUpdatedTime = e, MI.lastVisibleTime < MI.lastHiddenTime || i < MI.lastHiddenTime || i < MI.lastVisibleTime) return;
              for (t > GE("VIDEO_FREEZE_DURATION") && (this.freezeTime += t), this.playbackTime += t; this.playbackTime >= 6000;) {
                this.playbackTime -= 6000;
                const e = Math.min(6000, this.freezeTime);
                this.freezeTimeCounterList.push(e), this.freezeTime = Math.max(0, this.freezeTime - 6000);
              }
              break;
            }
        }
      }), _p(this, "autoResumeAfterInterruptionOnIOS15_16", () => {
        this.videoTrack && "live" === this.videoTrack.readyState && (OE.debug("[track-".concat(this.trackId, "] video element paused, auto resume for ").concat(jh())), ep() ? (this.videoElement.srcObject = null, this.videoElement.srcObject = new MediaStream([this.videoTrack]), this.videoElement.play()) : (this.videoElement.pause(), this.videoElement.play()));
      }), this.trackId = e.trackId, this.config = e, e.element instanceof HTMLVideoElement ? this.videoElement = e.element : this.videoElement = document.createElement("video"), Gg.on(kg.IOS_INTERRUPTION_END, this.autoResumeAfterInterruption), Gg.on(kg.IOS_15_16_INTERRUPTION_END, this.autoResumeAfterInterruptionOnIOS15_16);
    }
    getVideoElement() {
      return this.videoElement;
    }
    getContainerElement() {
      var e;
      return null !== (e = this.videoElement.parentElement) && void 0 !== e ? e : void 0;
    }
    updateConfig(e) {
      this.config = e, this.trackId = e.trackId, e.element !== this.videoElement && (this.destroy(), this.videoElement = e.element), this.videoTrack && this.initVideoElement();
    }
    updateVideoTrack(e) {
      this.videoTrack !== e && (this.videoTrack = e, this.initVideoElement());
    }
    play(e) {
      const t = this.videoElement.play();
      t && t.catch && t.catch(t => {
        e && Pg.autoplayFailed(e, "video", t.message, this.trackId), "NotAllowedError" === t.name ? (OE.warning("detected video element autoplay failed", t), this.autoplayFailed = !0, this.handleAutoPlayFailed()) : OE.warning("[".concat(this.trackId, "] play warning: "), t);
      });
      const i = xh();
      if (("Safari" === i.name && 15 === Number(i.version) || Zh()) && t && t.then && t.catch) {
        const e = () => {
          this.config.mirror && (this.videoElement.style.transform = "rotateY(180deg)");
        };
        t.then(e).catch(e);
      }
    }
    getCurrentFrame() {
      const e = document.createElement("canvas");
      e.width = this.videoElement.videoWidth, e.height = this.videoElement.videoHeight;
      const t = e.getContext("2d");
      if (!t) return OE.error("create canvas context failed!"), new ImageData(2, 2);
      t.drawImage(this.videoElement, 0, 0, e.width, e.height);
      const i = t.getImageData(0, 0, e.width, e.height);
      return e.remove(), i;
    }
    async getCurrentFrameToUint8Array(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const i = document.createElement("canvas");
      i.width = this.videoElement.videoWidth, i.height = this.videoElement.videoHeight;
      const n = i.getContext("2d");
      return n ? (n.drawImage(this.videoElement, 0, 0, i.width, i.height), new Sl((n, r) => {
        i.toBlob(async e => {
          if (i.remove(), e) {
            const t = await bv(e);
            n({
              buffer: t,
              width: i.width,
              height: i.height
            });
          } else r(new SE(fE.CONVERTING_VIDEO_FRAME_TO_BLOB_FAILED));
        }, e, t < 0 ? 0.1 : t > 1 ? 1 : t);
      })) : await Nv(e);
    }
    destroy() {
      Gg.off(kg.IOS_INTERRUPTION_END, this.autoResumeAfterInterruption), Gg.off(kg.IOS_15_16_INTERRUPTION_END, this.autoResumeAfterInterruptionOnIOS15_16), this.videoElement.srcObject = null, this.resetVideoElement(), this.freezeTimeCounterList = [];
    }
    initVideoElement() {
      if (this.videoElementStatus = sf.INIT, !this.videoElementCheckInterval && (Lv.forEach(e => {
        this.videoElement.addEventListener(e, this.handleVideoEvents);
      }), this.videoElementCheckInterval = window.setInterval(() => {
        (function (e) {
          return e !== document.body && document.body.contains(e);
        })(this.videoElement) || (this.videoElementStatus = sf.DESTROYED);
      }, 1000), GE("ENABLE_VIDEO_FRAME_CALLBACK"))) {
        var e, t;
        let i;
        const n = (e, t) => {
          if (this.videoElementStatus === sf.PLAYING) {
            if (i) {
              const e = t.presentationTime - i.presentationTime;
              e > GE("VIDEO_FREEZE_DURATION") && MI.lastVisibleTime >= MI.lastHiddenTime && i.timestamp > MI.lastVisibleTime && i.timestamp > MI.lastHiddenTime && (this.renderFreezeAccTime += e);
            }
            i = Dv(Dv({}, t), {}, {
              timestamp: e
            });
          }
          var r, o;
          GE("ENABLE_VIDEO_FRAME_CALLBACK") && (null === (r = (o = this.videoElement).requestVideoFrameCallback) || void 0 === r || r.call(o, n));
        };
        null === (e = (t = this.videoElement).requestVideoFrameCallback) || void 0 === e || e.call(t, n);
      }
      this.videoElement.controls = !1, this.videoElement.setAttribute("playsinline", ""), op() && (this.videoElement.poster = "noposter");
      const i = xh();
      if ("Safari" === i.name && 15 === Number(i.version) || Zh() || !this.config.mirror || (this.videoElement.style.transform = "rotateY(180deg)"), this.config.fit ? this.videoElement.style.objectFit = this.config.fit : this.videoElement.style.objectFit = "cover", this.videoElement.setAttribute("muted", ""), this.videoElement.muted = !0, this.videoElement.srcObject && this.videoElement.srcObject instanceof MediaStream) {
        this.videoElement.srcObject.getVideoTracks()[0] !== this.videoTrack && (this.videoElement.srcObject = this.videoTrack ? new MediaStream([this.videoTrack]) : null, Kh() && this.videoElement.load());
      } else this.videoElement.srcObject = this.videoTrack ? new MediaStream([this.videoTrack]) : null, Kh() && this.videoElement.load();
      const n = this.videoElement.play();
      void 0 !== n && n.catch(e => {
        OE.debug("[".concat(this.trackId, "] playback interrupted"), e.toString());
      });
    }
    resetVideoElement() {
      Lv.forEach(e => {
        this.videoElement && this.videoElement.removeEventListener(e, this.handleVideoEvents);
      }), this.videoElementCheckInterval && (window.clearInterval(this.videoElementCheckInterval), this.videoElementCheckInterval = void 0), this.videoElementStatus = sf.NONE;
    }
    handleAutoPlayFailed() {
      const e = t => {
        t.preventDefault(), this.videoElement.play().then(() => {
          OE.debug("[".concat(this.trackId, "] Video element for trackId:").concat(this.trackId, " autoplay resumed."));
        }).catch(e => {
          OE.error(e);
        }), this.autoplayFailed = !1, sp() ? document.body.removeEventListener("click", e, !0) : (document.body.removeEventListener("touchstart", e, !0), document.body.removeEventListener("mousedown", e, !0));
      };
      sp() ? document.body.addEventListener("click", e, !0) : (document.body.addEventListener("touchstart", e, !0), document.body.addEventListener("mousedown", e, !0)), yg();
    }
  }
  const Lv = ["play", "playing", "loadeddata", "canplay", "pause", "stalled", "suspend", "waiting", "abort", "emptied", "ended", "timeupdate", "error"];
  class kv extends Pv {
    constructor(e) {
      super(e), _p(this, "container", void 0), _p(this, "slot", void 0), this.slot = e.element, this.updateConfig(e);
    }
    updateConfig(e) {
      this.config = e, this.trackId = e.trackId;
      const t = e.element;
      t !== this.slot && (this.destroy(), this.slot = t), this.createElements();
    }
    updateVideoTrack(e) {
      this.videoTrack !== e && (this.videoTrack = e, this.createElements());
    }
    play(e) {
      var t;
      null !== (t = this.container) && void 0 !== t && t.contains(this.videoElement) && super.play(e);
    }
    getCurrentFrame() {
      var e;
      return null !== (e = this.container) && void 0 !== e && e.contains(this.videoElement) ? super.getCurrentFrame() : new ImageData(2, 2);
    }
    async getCurrentFrameToUint8Array(e) {
      var t;
      let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return null !== (t = this.container) && void 0 !== t && t.contains(this.videoElement) ? await super.getCurrentFrameToUint8Array(e, i) : await Nv(e);
    }
    destroy() {
      if (super.destroy(), this.videoElement.remove(), this.videoElement = document.createElement("video"), this.container) {
        try {
          this.container.remove(), this.slot.removeChild(this.container);
        } catch (e) {}
        this.container = void 0;
      }
    }
    createElements() {
      this.container || (this.container = document.createElement("div")), this.container.id = "agora-video-player-".concat(this.trackId), this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.position = "relative", this.container.style.overflow = "hidden", this.videoTrack ? (this.container.style.backgroundColor = "black", GE("KEEP_LAST_FRAME") && this.isKeepLastFrame && this.videoElement.paused && this.resetVideoElement(), this.mountedVideoElement()) : this.unmountedVideoElement(), this.slot.appendChild(this.container);
    }
    mountedVideoElement() {
      var e;
      !this.container || null !== (e = this.container) && void 0 !== e && e.contains(this.videoElement) || this.container.appendChild(this.videoElement), super.initVideoElement(), this.videoElement.id = "video_".concat(this.trackId), this.videoElement.className = "agora_video_player", this.videoElement.style.width = "100%", this.videoElement.style.height = "100%", this.videoElement.style.position = "absolute", this.videoElement.style.left = "0", this.videoElement.style.top = "0";
    }
    unmountedVideoElement() {
      var e;
      if (null !== (e = this.container) && void 0 !== e && e.contains(this.videoElement)) {
        super.resetVideoElement();
        try {
          this.container && this.container.removeChild(this.videoElement);
        } catch (e) {}
        this.videoElement = document.createElement("video");
      }
    }
    resetVideoElement() {
      var e;
      null !== (e = this.container) && void 0 !== e && e.contains(this.videoElement) && (super.resetVideoElement(), this.cacheVideoElement = this.videoElement, this.videoElement = document.createElement("video"));
    }
    getContainerElement() {
      return this.container;
    }
  }
  function Mv(e) {
    const t = {};
    e.facingMode && (t.facingMode = e.facingMode), e.cameraId && (t.deviceId = {
      exact: e.cameraId
    });
    const i = UE(e.encoderConfig);
    return t.width = i.width, t.height = i.height, !np() && i.frameRate && (t.frameRate = i.frameRate), xh().name === wh.EDGE && "object" == typeof t.frameRate && (t.frameRate.max = 60), Kh() && (t.frameRate = {
      ideal: 30,
      max: 30
    }), t;
  }
  function Uv(e) {
    const t = {};
    e.screenSourceType && (t.mediaSource = e.screenSourceType), e.extensionId && Wh() && (t.extensionId = e.extensionId);
    const {
      displaySurface: i,
      selfBrowserSurface: n,
      surfaceSwitching: r,
      systemAudio: o
    } = e;
    (qh(107) || Jh(107) || Xh(93)) && (i && (Ym(i, "displaySurface", ["browser", "window", "monitor"]), t.displaySurface = i), n ? (Ym(n, "selfBrowserSurface", ["exclude", "include"]), t.selfBrowserSurface = n) : t.selfBrowserSurface = "include", r && (Ym(r, "surfaceSwitching", ["exclude", "include"]), t.surfaceSwitching = r)), (qh(105) || Jh(105) || Xh(91)) && o && (Ym(o, "systemAudio", ["exclude", "include"]), t.systemAudio = o), e.electronScreenSourceId && (t.sourceId = e.electronScreenSourceId);
    const s = e.encoderConfig ? xE(e.encoderConfig) : null;
    return t.mandatory = {
      chromeMediaSource: "desktop",
      maxWidth: s ? s.width : void 0,
      maxHeight: s ? s.height : void 0
    }, s && (s.frameRate && ("number" == typeof s.frameRate ? (t.mandatory.maxFrameRate = s.frameRate, t.mandatory.minFrameRate = s.frameRate) : (t.mandatory.maxFrameRate = s.frameRate.max || s.frameRate.ideal || s.frameRate.exact || void 0, t.mandatory.minFrameRate = s.frameRate.min || s.frameRate.ideal || s.frameRate.exact || void 0), t.frameRate = s.frameRate), s.width && (t.width = s.width), s.height && (t.height = s.height)), t;
  }
  function xv(e) {
    const t = {};
    if (np() || (void 0 !== e.AGC && (t.autoGainControl = e.AGC), void 0 !== e.AEC && (t.echoCancellation = e.AEC), void 0 !== e.ANS && (t.noiseSuppression = e.ANS, Wh() && e.ANS && (t.googHighpassFilter = e.ANS))), e.encoderConfig) {
      const i = FE(e.encoderConfig);
      t.channelCount = i.stereo ? 2 : 1, t.sampleRate = i.sampleRate, t.sampleSize = i.sampleSize;
    }
    return e.microphoneId && (t.deviceId = {
      exact: e.microphoneId
    }), op() && (t.sampleRate = void 0), t;
  }
  var Vv, jv;
  !function (e) {
    e.COVERED = "COVERED", e.POSITION = "POSITION", e.SIZE = "SIZE", e.STYLE = "STYLE";
  }(Vv || (Vv = {})), function (e) {
    e.UNMOUNTED = "UNMOUNTED", e.INVALID_HTML_ELEMENT = "INVALID_HTML_ELEMENT";
  }(jv || (jv = {}));
  var Fv,
    Bv,
    Gv,
    Wv,
    Hv,
    Kv,
    Yv,
    qv,
    Jv,
    Xv,
    zv,
    Qv,
    Zv,
    $v,
    ey,
    ty,
    iy,
    ny,
    ry,
    oy,
    sy,
    ay,
    cy,
    dy,
    uy,
    ly,
    hy,
    py,
    _y,
    Ey,
    my,
    fy,
    Sy,
    Ty,
    gy = new class {
      constructor() {
        _p(this, "_clientSize", null), _p(this, "getClientWidth", () => document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth), _p(this, "getClientHeight", () => document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight), _p(this, "getStyle", e => window.getComputedStyle(e, null)), _p(this, "checkCssVisibleProperty", e => {
          let t = !0;
          const i = this.getStyle(e),
            {
              display: n,
              visibility: r,
              opacity: o,
              filter: s
            } = i;
          if (("none" === n || ["hidden", "collapse"].includes(r) || Number(o) < 0.1) && (t = !1), !t) return !1;
          if (s) {
            s.split(" ").filter(e => {
              const t = e.split("(")[0];
              return ["brightness", "blur", "opacity"].includes(t);
            }).map(e => {
              const [t, i] = e.split(/\(|\)/);
              return [t, Number(i.match(/^[0-9\.]+/))];
            }).forEach(e => {
              const [i, n] = e;
              switch (i) {
                case "brightness":
                  (n < 0.1 || n > 3) && (t = !1);
                  break;
                case "blur":
                  n > 3 && (t = !1);
                  break;
                case "opacity":
                  n < 0.1 && (t = !1);
              }
            });
          }
          return t;
        }), _p(this, "checkPropertyUpToAllParentNodes", (e, t) => {
          let i = !0,
            n = !0;
          const r = e => t(e);
          let o = e;
          for (; o && n;) {
            r(o) || (i = !1, n = !1), o = o.parentElement, o || (n = !1);
          }
          return i;
        }), _p(this, "checkActualCssVisibleIncludeInherit", e => this.checkPropertyUpToAllParentNodes(e, this.checkCssVisibleProperty)), _p(this, "getSizeAboutClient", e => {
          const {
              width: t,
              height: i,
              left: n,
              right: r,
              top: o,
              bottom: s
            } = e.getBoundingClientRect(),
            a = this.getClientWidth(),
            c = this.getClientHeight();
          return {
            width: t,
            height: i,
            left: n,
            right: r,
            top: o,
            bottom: s,
            clientWidth: a,
            clientHeight: c,
            clientMin: Math.min(a, c)
          };
        }), _p(this, "checkActualSize", () => {
          const {
            width: e,
            height: t,
            clientMin: i
          } = this._clientSize;
          return this.checkSizeIsVisible(e, t, i);
        }), _p(this, "elementFromPoint", (e, t) => document.elementFromPoint ? document.elementFromPoint(e, t) : null), _p(this, "checkCoverForAPoint", (e, t, i) => {
          const n = this.elementFromPoint(e, t);
          return null !== n && n !== i;
        }), _p(this, "getPointPositionList", () => {
          const {
              width: e,
              height: t,
              left: i,
              top: n
            } = this._clientSize,
            r = e / 6,
            o = t / 6,
            s = [],
            a = 10 ** 6;
          for (let e = 0; e < 5; e++) for (let t = 0; t < 5; t++) {
            const c = (i * a + (0 === e ? 0.1 : 4 === e ? (r * e * a - 100000) / a : r * e) * a) / a,
              d = (n * a + (0 === t ? 0.1 : 4 === t ? (o * t * a - 100000) / a : o * t) * a) / a;
            s.push({
              x: c,
              y: d
            });
          }
          return [...s];
        }), _p(this, "checkElementCover", e => this.getPointPositionList().map(t => this.checkCoverForAPoint(t.x, t.y, e)).filter(e => !!e).length > 6), _p(this, "checkSizeIsVisible", (e, t, i) => (e > 50 || i / e <= 10) && (t > 50 || i / t <= 10)), _p(this, "checkSizeOfPartInClient", () => {
          const {
            left: e,
            right: t,
            top: i,
            bottom: n,
            clientHeight: r,
            clientWidth: o,
            clientMin: s
          } = this._clientSize;
          let a, c, d, u;
          if (e < 0) a = 0;else {
            if (!(e < o)) return !1;
            a = e;
          }
          if (t < 0) return !1;
          if (c = t < o ? t : o, i < 0) d = 0;else {
            if (!(i < r)) return !1;
            d = i;
          }
          if (n < 0) return !1;
          u = n < r ? n : r;
          const l = c - a,
            h = u - d;
          return this.checkSizeIsVisible(l, h, s);
        }), _p(this, "returnHiddenResult", e => (this._clientSize = null, {
          visible: !1,
          reason: e
        })), _p(this, "checkOneElementVisible", e => {
          if (e instanceof HTMLElement) {
            if (this.checkElementIsMountedOnDom(e)) {
              if (this.checkActualCssVisibleIncludeInherit(e)) {
                if (this._clientSize = this.getSizeAboutClient(e), this.checkElementCover(e)) return this.returnHiddenResult(Vv.COVERED);
                {
                  const e = this.checkActualSize(),
                    t = this.checkSizeOfPartInClient();
                  return e && !t ? this.returnHiddenResult(Vv.POSITION) : e ? (this._clientSize = null, {
                    visible: !0
                  }) : this.returnHiddenResult(Vv.SIZE);
                }
              }
              return this.returnHiddenResult(Vv.STYLE);
            }
            return this.returnHiddenResult(jv.UNMOUNTED);
          }
          return this.returnHiddenResult(jv.INVALID_HTML_ELEMENT);
        }), _p(this, "checkElementIsMountedOnDom", e => this.checkPropertyUpToAllParentNodes(e, e => "HTML" !== e.nodeName.toUpperCase() ? null !== e.parentElement : !!document.documentElement));
      }
    }();
  function Ry(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Iy(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ry(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ry(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let Cy = (Fv = Dg({
      argsMap: (e, t, i) => [e.getTrackId(), "string" == typeof t ? t : t instanceof HTMLVideoElement ? "HTMLVideoElement" : "HTMLElement", i]
    }), Bv = _R(), Gv = Dg({
      argsMap: e => [e.getTrackId()]
    }), Wv = xg("LocalVideoTrack", "_enabledMutex"), Hv = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), Kv = _R(), Yv = xg("LocalVideoTrack", "_enabledMutex"), qv = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), Jv = _R(), Xv = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), zv = _R(), Qv = _R(), Zv = Dg({
      argsMap: (e, t, i) => [e.getTrackId(), t, i]
    }), $v = _R(), ey = _R(), ty = _R(), iy = _R(), ny = _R(), ry = _R(), oy = _R(), sy = Dg({
      argsMap: (e, t) => [e.getTrackId(), t.name]
    }), ay = Dg({
      argsMap: e => [e.getTrackId()]
    }), cy = Dg({
      argsMap: e => [e.getTrackId()]
    }), dy = Dg({
      argsMap: (e, t, i) => [e.getTrackId(), t.label, i]
    }), ag((uy = class e extends Vg {
      get isPlaying() {
        return !(!this._player || this._player.videoElementStatus !== sf.PLAYING);
      }
      get processorContext() {
        return this._processorContext;
      }
      set processorContext(e) {
        this._processorContext = e;
      }
      get __className__() {
        return "LocalVideoTrack";
      }
      constructor(e, t, i, n, r, o) {
        if (super(e, r), _p(this, "trackMediaType", "video"), _p(this, "_player", void 0), _p(this, "_videoVisibleTimer", null), _p(this, "_previousVideoVisibleStatus", void 0), _p(this, "_clearPreviousVideoVisibleStatus", () => this._previousVideoVisibleStatus = void 0), _p(this, "_encoderConfig", void 0), _p(this, "_scalabiltyMode", {
          numSpatialLayers: 1,
          numTemporalLayers: 1
        }), _p(this, "_optimizationMode", void 0), _p(this, "_videoHeight", void 0), _p(this, "_videoWidth", void 0), _p(this, "_forceBitrateLimit", void 0), _p(this, "_enabled", !0), _p(this, "processorDestination", void 0), _p(this, "_processorContext", void 0), Hh()) {
          const {
            width: t,
            height: i
          } = e.getSettings();
          this._videoWidth = t, this._videoHeight = i;
        } else this.updateMediaStreamTrackResolution();
        this._encoderConfig = t, this._scalabiltyMode = i, this._optimizationMode = n, this._hints = o || [], -1 === this._hints.indexOf(lS.SCREEN_TRACK) && this.updateBitrateFromProfile(), t && -1 !== this._hints.indexOf(lS.CUSTOM_TRACK) && this.setEncoderConfiguration(t), this.processorContext = new AR(this.getTrackId(), "local"), this.processorDestination = new yR(this.processorContext), this.bindProcessorDestinationEvents();
      }
      play(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" == typeof e) {
          const t = document.getElementById(e);
          t ? e = t : (OE.warning("[".concat(this.getTrackId(), "] can not find \"#").concat(e, "\" element, use document.body")), e = document.body);
        }
        OE.debug("[".concat(this.getTrackId(), "] start video playback in ").concat(e instanceof HTMLVideoElement ? "HTMLVideoElement" : "HTMLElement"), JSON.stringify(t));
        const i = Iy(Iy(Iy({}, this._getDefaultPlayerConfig()), t), {}, {
          trackId: this.getTrackId(),
          element: e
        });
        this._player ? this._player.updateConfig(i) : (e instanceof HTMLVideoElement ? this._player = new Pv(i) : this._player = new kv(i), this._player.updateVideoTrack(this._mediaStreamTrack)), this._player.play(), this._videoVisibleTimer && window.clearInterval(this._videoVisibleTimer), this._clearPreviousVideoVisibleStatus(), this._videoVisibleTimer = window.setInterval(() => {
          try {
            const e = this.getVideoElementVisibleStatus();
            this.safeEmit(mS.VIDEO_ELEMENT_VISIBLE_STATUS, e);
          } catch (e) {}
        }, GE("CHECK_VIDEO_VISIBLE_INTERVAL"));
      }
      stop() {
        this._player && (this._videoVisibleTimer && (window.clearInterval(this._videoVisibleTimer), this._videoVisibleTimer = null), this._clearPreviousVideoVisibleStatus(), this._player.destroy(), this._player = void 0, OE.debug("[".concat(this.getTrackId(), "] stop video playback")));
      }
      async setEnabled(e, t) {
        if (!t) {
          if (e === this._enabled) return;
          this.stateCheck("enabled", e);
        }
        if (OE.info("[".concat(this.getTrackId(), "] start setEnabled"), e), !e) {
          this._originMediaStreamTrack.enabled = !1;
          try {
            await rC(this, uS.NEED_DISABLE_TRACK, this);
          } catch (e) {
            throw OE.error("[".concat(this.getTrackId(), "] setEnabled to false error"), e.toString()), e;
          }
          return t || (this._enabled = !1), void OE.info("[".concat(this.getTrackId(), "] setEnabled to false success"));
        }
        this._originMediaStreamTrack.enabled = !0;
        try {
          await rC(this, uS.NEED_ENABLE_TRACK, this);
        } catch (e) {
          throw OE.error("[".concat(this.getTrackId(), "] setEnabled to true error"), e.toString()), e;
        }
        OE.info("[".concat(this.getTrackId(), "] setEnabled to true success")), t || (this._enabled = !0);
      }
      async setMuted(e) {
        e !== this._muted && (this.stateCheck("muted", e), this._muted = e, this._originMediaStreamTrack.enabled = !e, OE.debug("[".concat(this.getTrackId(), "] start set muted: ").concat(e)), e ? await rC(this, uS.NEED_MUTE_TRACK, this) : await rC(this, uS.NEED_UNMUTE_TRACK, this));
      }
      async setEncoderConfiguration(e, t) {
        if (!this._enabled) throw new SE(fE.TRACK_IS_DISABLED, "can not set encoder configuration when track is disabled");
        if (e = UE(e), this._forceBitrateLimit && (e.bitrateMax = this._forceBitrateLimit.max_bitrate ? this._forceBitrateLimit.max_bitrate : e.bitrateMax, e.bitrateMin = this._forceBitrateLimit.min_bitrate ? this._forceBitrateLimit.min_bitrate : e.bitrateMin), e.width || e.height || e.frameRate) {
          const t = Mv({
            encoderConfig: e
          });
          (Hh() || Yh() || tp()) && (t.deviceId = void 0), OE.debug("[".concat(this.getTrackId(), "] setEncoderConfiguration applyConstraints"), JSON.stringify(e), JSON.stringify(t));
          try {
            await this._originMediaStreamTrack.applyConstraints(t), this.updateMediaStreamTrackResolution();
          } catch (e) {
            const t = new SE(fE.UNEXPECTED_ERROR, e.toString());
            throw OE.error("[".concat(this.getTrackId(), "] applyConstraints error"), t.toString()), t;
          }
        }
        this._encoderConfig = e, -1 === this._hints.indexOf(lS.SCREEN_TRACK) && this.updateBitrateFromProfile();
        try {
          await rC(this, uS.NEED_UPDATE_VIDEO_ENCODER, this);
        } catch (e) {
          return e.throw();
        }
      }
      getStats() {
        hC(() => {
          OE.warning("[deprecated] LocalVideoTrack.getStats will be removed in the future, use AgoraRTCClient.getLocalVideoStats instead");
        }, "localVideoTrackGetStatsWarning");
        const e = oC(this, uS.GET_STATS);
        return e || Iy({}, Ff);
      }
      async setBeautyEffect(e) {
        OE.error("LocalVideoTrack.setBeautyEffect was deprecated, please migrate to agora-extension-beauty-effect");
      }
      getCurrentFrameData() {
        return this._player ? this._player.getCurrentFrame() : new ImageData(2, 2);
      }
      async getCurrentFrameImage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this._player ? this._player.getCurrentFrameToUint8Array(e, t) : await Nv(e);
      }
      clone(t, i, n, r) {
        const o = this._mediaStreamTrack.clone();
        return new e(o, t, i, n, r);
      }
      async setBitrateLimit(e) {
        if (OE.debug("[".concat(this.getTrackId(), "] set bitrate limit, ").concat(JSON.stringify(e))), e) {
          this._forceBitrateLimit = e, this._encoderConfig && (this._encoderConfig.bitrateMax ? this._encoderConfig.bitrateMax = this._encoderConfig.bitrateMax < e.max_bitrate ? this._encoderConfig.bitrateMax : e.max_bitrate : this._encoderConfig.bitrateMax = e.max_bitrate, this._encoderConfig.bitrateMin, this._encoderConfig.bitrateMin = e.min_bitrate);
          try {
            await rC(this, uS.NEED_UPDATE_VIDEO_ENCODER, this);
          } catch (e) {
            return e.throw();
          }
        }
      }
      async setOptimizationMode(e) {
        if ("motion" !== e && "detail" !== e && "balanced" !== e) return void OE.error(fE.INVALID_PARAMS, "optimization mode must be motion, detail or balanced");
        const t = this._optimizationMode;
        try {
          this._optimizationMode = e, await rC(this, uS.SET_OPTIMIZATION_MODE, this);
        } catch (e) {
          throw this._optimizationMode = t, OE.error("[".concat(this.getTrackId(), "] set optimization mode failed"), e.toString()), e;
        }
        OE.info("[".concat(this.getTrackId(), "] set optimization mode success (").concat(e, ")"));
      }
      setScalabiltyMode(e) {
        if (1 === e.numSpatialLayers && 1 !== e.numTemporalLayers) return OE.error(fE.INVALID_PARAMS, "scalability mode currently not supported, no SVC."), void (this._scalabiltyMode = {
          numSpatialLayers: 1,
          numTemporalLayers: 1
        });
        this._scalabiltyMode = e, OE.info("[".concat(this.getTrackId(), "] set scalability mode success (").concat(e, ")"));
      }
      updateMediaStreamTrackResolution() {
        tC(this._originMediaStreamTrack).then(e => {
          let [t, i] = e;
          this._videoHeight = i, this._videoWidth = t;
        }).catch(eC);
      }
      _updatePlayerSource() {
        this._player && this._player.updateVideoTrack(this._mediaStreamTrack);
      }
      _getDefaultPlayerConfig() {
        return {
          fit: "contain"
        };
      }
      updateBitrateFromProfile() {
        if (!this._encoderConfig) return;
        const {
          width: e,
          height: t,
          frameRate: i
        } = this.getMediaStreamTrackSettings();
        if (!e || !t || !i) return;
        const [n, r] = function (e, t, i) {
          const n = GE("BITRATE_ADAPTER_TYPE");
          let r;
          const o = 200 * Math.pow(i / 15, 0.6) * Math.pow(e * t / 640 / 360, 0.75),
            s = o;
          if ("STANDARD_BITRATE" === n) r = 4 * o;else {
            if ("COMPATIABLE_BITRATE" !== n) return;
            r = 2 * o;
          }
          return [Math.floor(r), Math.floor(s)];
        }(e, t, i) || [void 0, void 0];
        this._encoderConfig.bitrateMin || this._encoderConfig.bitrateMax || (this._encoderConfig.bitrateMin = r, this._encoderConfig.bitrateMax = n, OE.debug("[".concat(this.getTrackId(), "] update bitrate from profile, [w: ").concat(e, ", h: ").concat(t, ", fps: ").concat(i, "] => [brMax: ").concat(n, ", brMin: ").concat(r, "]")));
      }
      getVideoElementVisibleStatus() {
        try {
          var e, t;
          const i = null == this || null === (e = this._player) || void 0 === e ? void 0 : e.getContainerElement(),
            n = {
              track: this,
              element: null == this || null === (t = this._player) || void 0 === t ? void 0 : t.getVideoElement(),
              slot: null == i ? void 0 : i.parentElement
            },
            {
              element: r,
              slot: o
            } = n;
          if (this.isPlaying && r instanceof HTMLVideoElement && o instanceof HTMLElement) {
            const e = gy.checkOneElementVisible(r),
              t = Object.assign({}, e);
            if (t.visible !== this._previousVideoVisibleStatus) {
              this._previousVideoVisibleStatus = t.visible;
              const e = Pg.reportApiInvoke(null, {
                tag: Ef.TRACER,
                name: _f.LOCAL_VIDEO_TRACK_GET_VIDEO_VISIBLE,
                options: [this.getTrackId()]
              });
              t.visible ? e.onSuccess("Video is visible") : e.onSuccess("Invisible because of ".concat(t.reason));
            }
            return t;
          }
          return;
        } catch (e) {
          throw new SE(fE.GET_VIDEO_ELEMENT_VISIBLE_ERROR, e.message);
        }
      }
      async renewMediaStreamTrack(e) {}
      pipe(e) {
        if (this.processor === e) return e;
        if (e._source) throw new SE(fE.INVALID_OPERATION, "Processor ".concat(e.name, " already piped, please call unpipe beforehand."));
        return this.unpipe(), this.processor = e, this.processor._source = this, e.updateInput({
          track: this._originMediaStreamTrack,
          context: this.processorContext
        }), e;
      }
      unpipe() {
        if (!this.processor) return;
        const e = this.processor;
        this.processor._source = void 0, this.processor = void 0, e.reset();
      }
      close() {
        super.close(), this.unbindProcessorDestinationEvents(), this.unbindProcessorContextEvents(), this.unpipe(), this.processorDestination._source && this.processorDestination._source.unpipe();
      }
      async replaceTrack(e, t) {
        if (!(e instanceof MediaStreamTrack)) throw new SE(fE.INVALID_PARAMS, "track should be an instance of MediaStreamTrack");
        if ("video" !== e.kind) throw new SE(fE.INVALID_PARAMS, "track should be a video MediaStreamTrack");
        await this._updateOriginMediaStreamTrack(e, t, !0), this.updateMediaStreamTrackResolution();
      }
      bindProcessorDestinationEvents() {
        this.processorDestination.on(kS.ON_TRACK, async e => {
          e ? e !== this._mediaStreamTrack && (this._mediaStreamTrack = e, this._updatePlayerSource(), await rC(this, uS.NEED_REPLACE_TRACK, this)) : this._mediaStreamTrack !== this._originMediaStreamTrack && (this._mediaStreamTrack = this._originMediaStreamTrack, this._updatePlayerSource(), await rC(this, uS.NEED_REPLACE_TRACK, this));
        });
      }
      unbindProcessorDestinationEvents() {
        this.processorDestination.removeAllListeners(kS.ON_TRACK);
      }
      unbindProcessorContextEvents() {
        this.processorContext.removeAllListeners(MS.REQUEST_UPDATE_CONSTRAINTS), this.processorContext.removeAllListeners(MS.REQUEST_CONSTRAINTS);
      }
    }).prototype, "play", [Fv, Bv], Object.getOwnPropertyDescriptor(uy.prototype, "play"), uy.prototype), ag(uy.prototype, "stop", [Gv], Object.getOwnPropertyDescriptor(uy.prototype, "stop"), uy.prototype), ag(uy.prototype, "setEnabled", [Wv, Hv, Kv], Object.getOwnPropertyDescriptor(uy.prototype, "setEnabled"), uy.prototype), ag(uy.prototype, "setMuted", [Yv, qv, Jv], Object.getOwnPropertyDescriptor(uy.prototype, "setMuted"), uy.prototype), ag(uy.prototype, "setEncoderConfiguration", [Xv, zv], Object.getOwnPropertyDescriptor(uy.prototype, "setEncoderConfiguration"), uy.prototype), ag(uy.prototype, "getStats", [Qv], Object.getOwnPropertyDescriptor(uy.prototype, "getStats"), uy.prototype), ag(uy.prototype, "setBeautyEffect", [Zv, $v], Object.getOwnPropertyDescriptor(uy.prototype, "setBeautyEffect"), uy.prototype), ag(uy.prototype, "getCurrentFrameData", [ey], Object.getOwnPropertyDescriptor(uy.prototype, "getCurrentFrameData"), uy.prototype), ag(uy.prototype, "getCurrentFrameImage", [ty], Object.getOwnPropertyDescriptor(uy.prototype, "getCurrentFrameImage"), uy.prototype), ag(uy.prototype, "setBitrateLimit", [iy], Object.getOwnPropertyDescriptor(uy.prototype, "setBitrateLimit"), uy.prototype), ag(uy.prototype, "setOptimizationMode", [ny], Object.getOwnPropertyDescriptor(uy.prototype, "setOptimizationMode"), uy.prototype), ag(uy.prototype, "setScalabiltyMode", [ry], Object.getOwnPropertyDescriptor(uy.prototype, "setScalabiltyMode"), uy.prototype), ag(uy.prototype, "updateMediaStreamTrackResolution", [oy], Object.getOwnPropertyDescriptor(uy.prototype, "updateMediaStreamTrackResolution"), uy.prototype), ag(uy.prototype, "pipe", [sy], Object.getOwnPropertyDescriptor(uy.prototype, "pipe"), uy.prototype), ag(uy.prototype, "unpipe", [ay], Object.getOwnPropertyDescriptor(uy.prototype, "unpipe"), uy.prototype), ag(uy.prototype, "close", [cy], Object.getOwnPropertyDescriptor(uy.prototype, "close"), uy.prototype), ag(uy.prototype, "replaceTrack", [dy], Object.getOwnPropertyDescriptor(uy.prototype, "replaceTrack"), uy.prototype), uy),
    vy = (ly = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), hy = _R(), py = xg("CameraVideoTrack", "_enabledMutex"), _y = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), Ey = _R(), my = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), fy = _R(), Sy = Dg({
      argsMap: e => [e.getTrackId()]
    }), ag((Ty = class extends Cy {
      get __className__() {
        return "CameraVideoTrack";
      }
      constructor(e, t, i, n, r, o) {
        super(e, UE(t.encoderConfig), n, r, o), _p(this, "_config", void 0), _p(this, "_originalConstraints", void 0), _p(this, "_constraints", void 0), _p(this, "_enabled", !0), _p(this, "_deviceName", "default"), _p(this, "tryResumeVideoForIOS15_16WeChat", async () => {
          (Zh() || $h()) && !function () {
            const e = xh();
            if (e.os !== bh.IOS || !e.osVersion) return !1;
            const t = e.osVersion.split(".");
            return 15 === Number(t[0]) && Number(t[1]) >= 2;
          }() && ip() && this._enabled && !this._isClosed && (OE.debug("[".concat(this.getTrackId(), "] try capture camera media device for interrupted iOS 15 device on WeChat.")), await this.renewMediaStreamTrack());
        }), this._config = t, this._originalConstraints = i, this._constraints = i, this._deviceName = e.label, this._encoderConfig = UE(this._config.encoderConfig), Gg.on(kg.IOS_15_16_INTERRUPTION_END, this.tryResumeVideoForIOS15_16WeChat), Gg.on(kg.IOS_INTERRUPTION_END, this.tryResumeVideoForIOS15_16WeChat), this.bindProcessorContextEvents();
      }
      async setDevice(e) {
        if (OE.info("[".concat(this.getTrackId(), "] set device to ").concat(e)), this._enabled) try {
          const t = await lR.getDeviceById(e),
            i = {};
          i.video = Iy({}, this._constraints), i.video.deviceId = {
            exact: e
          }, i.video.facingMode = void 0, this._originMediaStreamTrack.stop();
          let n = null;
          try {
            n = await aR(i, this.getTrackId());
          } catch (e) {
            throw OE.error("[".concat(this.getTrackId(), "] setDevice failed"), e.toString()), n = await aR({
              video: this._constraints
            }, this.getTrackId()), await this._updateOriginMediaStreamTrack(n.getVideoTracks()[0], !1), e;
          }
          await this._updateOriginMediaStreamTrack(n.getVideoTracks()[0], !1), this.updateMediaStreamTrackResolution(), this._deviceName = t.label, this._config.cameraId = e, this._constraints.deviceId = {
            exact: e
          };
        } catch (e) {
          throw OE.error("[".concat(this.getTrackId(), "] setDevice error"), e.toString()), e;
        } else try {
          const t = await lR.getDeviceById(e);
          this._deviceName = t.label, this._config.cameraId = e, this._constraints.deviceId = {
            exact: e
          };
        } catch (e) {
          throw OE.error("[".concat(this.getTrackId(), "] setDevice error"), e.toString()), e;
        }
        OE.info("[".concat(this.getTrackId(), "] setDevice success"));
      }
      async setEnabled(e, t) {
        if (!t) {
          if (e === this._enabled) return;
          this.stateCheck("enabled", e);
        }
        if (OE.info("[".concat(this.getTrackId(), "] start setEnabled"), e), e) {
          try {
            if (this.isExternalTrack) this._originMediaStreamTrack.enabled = !0;else {
              const e = await aR({
                video: this._constraints
              }, this.getTrackId());
              await this._updateOriginMediaStreamTrack(e.getVideoTracks()[0], !1);
            }
            await rC(this, uS.NEED_ENABLE_TRACK, this);
          } catch (e) {
            throw OE.error("[".concat(this.getTrackId(), "] setEnabled true error"), e.toString()), e;
          }
          this.updateMediaStreamTrackResolution(), OE.info("[".concat(this.getTrackId(), "] setEnabled to true success")), t || (this._enabled = !0);
        } else {
          this.isExternalTrack ? this._originMediaStreamTrack.enabled = !1 : (this._originMediaStreamTrack.onended = null, this._originMediaStreamTrack.stop()), t || (this._enabled = !1);
          try {
            await rC(this, uS.NEED_DISABLE_TRACK, this);
          } catch (e) {
            throw OE.error("[".concat(this.getTrackId(), "] setEnabled to false error"), e.toString()), e;
          }
          OE.info("[".concat(this.getTrackId(), "] setEnabled to false success"));
        }
      }
      async setEncoderConfiguration(e, t) {
        if (!this._enabled) throw new SE(fE.TRACK_IS_DISABLED, "can not set encoder configuration when track is disabled");
        e = UE(e), this._forceBitrateLimit && (e.bitrateMax = this._forceBitrateLimit.max_bitrate ? this._forceBitrateLimit.max_bitrate : e.bitrateMax, e.bitrateMin = this._forceBitrateLimit.min_bitrate ? this._forceBitrateLimit.min_bitrate : e.bitrateMin);
        const i = uC(this._config);
        i.encoderConfig = e;
        const n = Mv(i);
        (Hh() || Yh() || tp()) && (n.deviceId = void 0), OE.debug("[".concat(this.getTrackId(), "] setEncoderConfiguration applyConstraints"), JSON.stringify(e), JSON.stringify(n));
        try {
          await this._originMediaStreamTrack.applyConstraints(n), this.updateMediaStreamTrackResolution();
        } catch (e) {
          const t = new SE(fE.UNEXPECTED_ERROR, e.toString());
          throw OE.error("[".concat(this.getTrackId(), "] applyConstraints error"), t.toString()), t;
        }
        this._config = i, this._constraints = n, this._originalConstraints = n, this._encoderConfig = e, -1 === this._hints.indexOf(lS.SCREEN_TRACK) && this.updateBitrateFromProfile();
        try {
          await rC(this, uS.NEED_UPDATE_VIDEO_ENCODER, this);
        } catch (e) {
          return e.throw();
        }
      }
      _getDefaultPlayerConfig() {
        return {
          mirror: !0,
          fit: "cover"
        };
      }
      onTrackEnded() {
        if ((Yh() || tp()) && this._enabled && !this._isClosed && Gg.duringInterruption) {
          const e = async () => {
            Gg.off(kg.IOS_INTERRUPTION_END, e), this._enabled && !this._isClosed && (OE.debug("[".concat(this.getTrackId(), "] try capture camera media device for interrupted iOS device.")), await this.setEnabled(!1), await this.setEnabled(!0));
          };
          Gg.on(kg.IOS_INTERRUPTION_END, e);
        } else OE.debug("[".concat(this.getTrackId(), "] track ended")), this.safeEmit(mS.TRACK_ENDED);
      }
      async renewMediaStreamTrack(e) {
        const t = e || this._constraints,
          i = lR.searchDeviceIdByName(this._deviceName);
        if (i && !t.deviceId && (t.deviceId = {
          exact: i
        }), this._enabled) {
          const e = await aR({
            video: t
          }, this.getTrackId());
          this._constraints = t, await this._updateOriginMediaStreamTrack(e.getVideoTracks()[0], !0), this.updateMediaStreamTrackResolution();
        }
      }
      close() {
        super.close(), Gg.off(kg.IOS_15_16_INTERRUPTION_END, this.tryResumeVideoForIOS15_16WeChat), Gg.off(kg.IOS_INTERRUPTION_END, this.tryResumeVideoForIOS15_16WeChat);
      }
      bindProcessorContextEvents() {
        this.processorContext.on(MS.REQUEST_UPDATE_CONSTRAINTS, async (e, t, i) => {
          try {
            const i = Object.assign({}, this._originalConstraints, ...e);
            await this.renewMediaStreamTrack(i), t();
          } catch (e) {
            i(e);
          }
        }), this.processorContext.on(MS.REQUEST_CONSTRAINTS, async e => {
          e(this._originMediaStreamTrack.getSettings());
        });
      }
    }).prototype, "setDevice", [ly, hy], Object.getOwnPropertyDescriptor(Ty.prototype, "setDevice"), Ty.prototype), ag(Ty.prototype, "setEnabled", [py, _y, Ey], Object.getOwnPropertyDescriptor(Ty.prototype, "setEnabled"), Ty.prototype), ag(Ty.prototype, "setEncoderConfiguration", [my, fy], Object.getOwnPropertyDescriptor(Ty.prototype, "setEncoderConfiguration"), Ty.prototype), ag(Ty.prototype, "close", [Sy], Object.getOwnPropertyDescriptor(Ty.prototype, "close"), Ty.prototype), Ty);
  class yy {
    get hasVideo() {
      return this._video_enabled_ && !this._video_muted_ && this._video_added_;
    }
    get hasAudio() {
      return this._audio_enabled_ && !this._audio_muted_ && this._audio_added_;
    }
    get audioTrack() {
      if (this.hasAudio) return this._audioTrack;
    }
    get videoTrack() {
      if (this.hasVideo) return this._videoTrack;
    }
    constructor(e, t) {
      _p(this, "uid", void 0), _p(this, "_uintid", void 0), _p(this, "_trust_in_room_", !0), _p(this, "_trust_audio_enabled_state_", !0), _p(this, "_trust_video_enabled_state_", !0), _p(this, "_trust_audio_mute_state_", !0), _p(this, "_trust_video_mute_state_", !0), _p(this, "_audio_muted_", !1), _p(this, "_video_muted_", !1), _p(this, "_audio_enabled_", !0), _p(this, "_video_enabled_", !0), _p(this, "_audio_added_", !1), _p(this, "_video_added_", !1), _p(this, "_trust_video_stream_added_state_", !0), _p(this, "_trust_audio_stream_added_state_", !0), _p(this, "_audioTrack", void 0), _p(this, "_videoTrack", void 0), _p(this, "_audioSSRC", void 0), _p(this, "_videoSSRC", void 0), _p(this, "_audioOrtc", void 0), _p(this, "_videoOrtc", void 0), _p(this, "_cname", void 0), _p(this, "_rtxSsrcId", void 0), this.uid = e, this._uintid = t;
    }
  }
  var Ay = fl,
    Oy = pd,
    Ny = Rd;
  Ii({
    target: "Promise",
    stat: !0
  }, {
    try: function (e) {
      var t = Oy.f(this || _global),
        i = Ny(e);
      return (i.error ? t.reject : t.resolve)(i.value), t.promise;
    }
  });
  var by = Ay,
    wy = Ii,
    Dy = h,
    Py = i,
    Ly = QS,
    ky = q,
    My = je,
    Uy = bi,
    xy = im,
    Vy = oT,
    jy = FT,
    Fy = ae,
    By = rt("isConcatSpreadable"),
    Gy = 9007199254740991,
    Wy = "Maximum allowed index exceeded",
    Hy = Dy.TypeError,
    Ky = Fy >= 51 || !Py(function () {
      var e = [];
      return e[By] = !1, e.concat()[0] !== e;
    }),
    Yy = jy("concat"),
    qy = function (e) {
      if (!ky(e)) return !1;
      var t = e[By];
      return void 0 !== t ? !!t : Ly(e);
    };
  wy({
    target: "Array",
    proto: !0,
    forced: !Ky || !Yy
  }, {
    concat: function (e) {
      var t,
        i,
        n,
        r,
        o,
        s = My(this || _global),
        a = Vy(s, 0),
        c = 0;
      for (t = -1, n = arguments.length; t < n; t++) if (qy(o = -1 === t ? s : arguments[t])) {
        if (c + (r = Uy(o)) > Gy) throw Hy(Wy);
        for (i = 0; i < r; i++, c++) i in o && xy(a, c, o[i]);
      } else {
        if (c >= Gy) throw Hy(Wy);
        xy(a, c++, o);
      }
      return a.length = c, a;
    }
  });
  var Jy = {},
    Xy = k,
    zy = K,
    Qy = Pn.f,
    Zy = cm,
    $y = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  Jy.f = function (e) {
    return $y && "Window" == Xy(e) ? function (e) {
      try {
        return Qy(e);
      } catch (e) {
        return Zy($y);
      }
    }(e) : Qy(zy(e));
  };
  var eA = {},
    tA = rt;
  eA.f = tA;
  var iA = J,
    nA = Ge,
    rA = eA,
    oA = Ht.f,
    sA = function (e) {
      var t = iA.Symbol || (iA.Symbol = {});
      nA(t, e) || oA(t, e, {
        value: rA.f(e)
      });
    },
    aA = Ii,
    cA = h,
    dA = $,
    uA = f,
    lA = C,
    hA = d,
    pA = g,
    _A = ue,
    EA = i,
    mA = Ge,
    fA = QS,
    SA = S,
    TA = q,
    gA = u,
    RA = fe,
    IA = zt,
    CA = je,
    vA = K,
    yA = Et,
    AA = wo,
    OA = w,
    NA = Pr,
    bA = hr,
    wA = Pn,
    DA = Jy,
    PA = Zn,
    LA = T,
    kA = Ht,
    MA = dr,
    UA = v,
    xA = pc,
    VA = xs,
    jA = we.exports,
    FA = Gn,
    BA = qe,
    GA = rt,
    WA = eA,
    HA = sA,
    KA = ta,
    YA = bs,
    qA = pT.forEach,
    JA = pn("hidden"),
    XA = "Symbol",
    zA = GA("toPrimitive"),
    QA = YA.set,
    ZA = YA.getterFor(XA),
    $A = Object.prototype,
    eO = cA.Symbol,
    tO = eO && eO.prototype,
    iO = cA.TypeError,
    nO = cA.QObject,
    rO = dA("JSON", "stringify"),
    oO = LA.f,
    sO = kA.f,
    aO = DA.f,
    cO = UA.f,
    dO = hA([].push),
    uO = jA("symbols"),
    lO = jA("op-symbols"),
    hO = jA("string-to-symbol-registry"),
    pO = jA("symbol-to-string-registry"),
    _O = jA("wks"),
    EO = !nO || !nO.prototype || !nO.prototype.findChild,
    mO = pA && EA(function () {
      return 7 != NA(sO({}, "a", {
        get: function () {
          return sO(this || _global, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (e, t, i) {
      var n = oO($A, t);
      n && delete $A[t], sO(e, t, i), n && e !== $A && sO($A, t, n);
    } : sO,
    fO = function (e, t) {
      var i = uO[e] = NA(tO);
      return QA(i, {
        type: XA,
        tag: e,
        description: t
      }), pA || (i.description = t), i;
    },
    SO = function (e, t, i) {
      e === $A && SO(lO, t, i), IA(e);
      var n = yA(t);
      return IA(i), mA(uO, n) ? (i.enumerable ? (mA(e, JA) && e[JA][n] && (e[JA][n] = !1), i = NA(i, {
        enumerable: OA(0, !1)
      })) : (mA(e, JA) || sO(e, JA, OA(1, {})), e[JA][n] = !0), mO(e, n, i)) : sO(e, n, i);
    },
    TO = function (e, t) {
      IA(e);
      var i = vA(t),
        n = bA(i).concat(CO(i));
      return qA(n, function (t) {
        pA && !lA(gO, i, t) || SO(e, t, i[t]);
      }), e;
    },
    gO = function (e) {
      var t = yA(e),
        i = lA(cO, this || _global, t);
      return !((this || _global) === $A && mA(uO, t) && !mA(lO, t)) && (!(i || !mA(this || _global, t) || !mA(uO, t) || mA(this || _global, JA) && (this || _global)[JA][t]) || i);
    },
    RO = function (e, t) {
      var i = vA(e),
        n = yA(t);
      if (i !== $A || !mA(uO, n) || mA(lO, n)) {
        var r = oO(i, n);
        return !r || !mA(uO, n) || mA(i, JA) && i[JA][n] || (r.enumerable = !0), r;
      }
    },
    IO = function (e) {
      var t = aO(vA(e)),
        i = [];
      return qA(t, function (e) {
        mA(uO, e) || mA(FA, e) || dO(i, e);
      }), i;
    },
    CO = function (e) {
      var t = e === $A,
        i = aO(t ? lO : vA(e)),
        n = [];
      return qA(i, function (e) {
        !mA(uO, e) || t && !mA($A, e) || dO(n, uO[e]);
      }), n;
    };
  (_A || (VA(tO = (eO = function () {
    if (gA(tO, this || _global)) throw iO("Symbol is not a constructor");
    var e = arguments.length && void 0 !== arguments[0] ? AA(arguments[0]) : void 0,
      t = BA(e),
      i = function (e) {
        (this || _global) === $A && lA(i, lO, e), mA(this || _global, JA) && mA((this || _global)[JA], t) && ((this || _global)[JA][t] = !1), mO(this || _global, t, OA(1, e));
      };
    return pA && EO && mO($A, t, {
      configurable: !0,
      set: i
    }), fO(t, e);
  }).prototype, "toString", function () {
    return ZA(this || _global).tag;
  }), VA(eO, "withoutSetter", function (e) {
    return fO(BA(e), e);
  }), UA.f = gO, kA.f = SO, MA.f = TO, LA.f = RO, wA.f = DA.f = IO, PA.f = CO, WA.f = function (e) {
    return fO(GA(e), e);
  }, pA && sO(tO, "description", {
    configurable: !0,
    get: function () {
      return ZA(this || _global).description;
    }
  })), aA({
    global: !0,
    wrap: !0,
    forced: !_A,
    sham: !_A
  }, {
    Symbol: eO
  }), qA(bA(_O), function (e) {
    HA(e);
  }), aA({
    target: XA,
    stat: !0,
    forced: !_A
  }, {
    for: function (e) {
      var t = AA(e);
      if (mA(hO, t)) return hO[t];
      var i = eO(t);
      return hO[t] = i, pO[i] = t, i;
    },
    keyFor: function (e) {
      if (!RA(e)) throw iO(e + " is not a symbol");
      if (mA(pO, e)) return pO[e];
    },
    useSetter: function () {
      EO = !0;
    },
    useSimple: function () {
      EO = !1;
    }
  }), aA({
    target: "Object",
    stat: !0,
    forced: !_A,
    sham: !pA
  }, {
    create: function (e, t) {
      return void 0 === t ? NA(e) : TO(NA(e), t);
    },
    defineProperty: SO,
    defineProperties: TO,
    getOwnPropertyDescriptor: RO
  }), aA({
    target: "Object",
    stat: !0,
    forced: !_A
  }, {
    getOwnPropertyNames: IO,
    getOwnPropertySymbols: CO
  }), aA({
    target: "Object",
    stat: !0,
    forced: EA(function () {
      PA.f(1);
    })
  }, {
    getOwnPropertySymbols: function (e) {
      return PA.f(CA(e));
    }
  }), rO) && aA({
    target: "JSON",
    stat: !0,
    forced: !_A || EA(function () {
      var e = eO();
      return "[null]" != rO([e]) || "{}" != rO({
        a: e
      }) || "{}" != rO(Object(e));
    })
  }, {
    stringify: function (e, t, i) {
      var n = xA(arguments),
        r = t;
      if ((TA(t) || void 0 !== e) && !RA(e)) return fA(t) || (t = function (e, t) {
        if (SA(r) && (t = lA(r, this || _global, e, t)), !RA(t)) return t;
      }), n[1] = t, uA(rO, null, n);
    }
  });
  if (!tO[zA]) {
    var vO = tO.valueOf;
    VA(tO, zA, function (e) {
      return lA(vO, this || _global);
    });
  }
  KA(eO, XA), FA[JA] = !0, sA("asyncIterator"), sA("hasInstance"), sA("isConcatSpreadable"), sA("iterator"), sA("match"), sA("matchAll"), sA("replace"), sA("search"), sA("species"), sA("split"), sA("toPrimitive"), sA("toStringTag"), sA("unscopables"), ta(h.JSON, "JSON", !0);
  var yO = J.Symbol;
  sA("asyncDispose"), sA("dispose"), sA("matcher"), sA("metadata"), sA("observable"), sA("patternMatch"), sA("replaceAll");
  var AO = yO,
    OO = eA.f("asyncIterator"),
    NO = OO;
  function bO(e) {
    (this || _global).wrapped = e;
  }
  function wO(e) {
    var t, i;
    function n(t, i) {
      try {
        var o = e[t](i),
          s = o.value,
          a = s instanceof bO;
        by.resolve(a ? s.wrapped : s).then(function (e) {
          a ? n("return" === t ? "return" : "next", e) : r(o.done ? "return" : "normal", e);
        }, function (e) {
          n("throw", e);
        });
      } catch (e) {
        r("throw", e);
      }
    }
    function r(e, r) {
      switch (e) {
        case "return":
          t.resolve({
            value: r,
            done: !0
          });
          break;
        case "throw":
          t.reject(r);
          break;
        default:
          t.resolve({
            value: r,
            done: !1
          });
      }
      (t = t.next) ? n(t.key, t.arg) : i = null;
    }
    (this || _global)._invoke = function (e, r) {
      return new by(function (o, s) {
        var a = {
          key: e,
          arg: r,
          resolve: o,
          reject: s,
          next: null
        };
        i ? i = i.next = a : (t = i = a, n(e, r));
      });
    }, "function" != typeof e.return && ((this || _global).return = void 0);
  }
  function DO(e) {
    return function () {
      return new wO(e.apply(this || _global, arguments));
    };
  }
  function PO(e) {
    return new bO(e);
  }
  wO.prototype["function" == typeof AO && NO || "@@asyncIterator"] = function () {
    return this || _global;
  }, wO.prototype.next = function (e) {
    return this._invoke("next", e);
  }, wO.prototype.throw = function (e) {
    return this._invoke("throw", e);
  }, wO.prototype.return = function (e) {
    return this._invoke("return", e);
  };
  var LO = eA.f("iterator");
  function kO(e, t) {
    var i = {},
      n = !1;
    function r(i, r) {
      return n = !0, r = new by(function (t) {
        t(e[i](r));
      }), {
        done: !1,
        value: t(r)
      };
    }
    return i[void 0 !== AO && LO || "@@iterator"] = function () {
      return this || _global;
    }, i.next = function (e) {
      return n ? (n = !1, e) : r("next", e);
    }, "function" == typeof e.throw && (i.throw = function (e) {
      if (n) throw n = !1, e;
      return r("throw", e);
    }), "function" == typeof e.return && (i.return = function (e) {
      return n ? (n = !1, e) : r("return", e);
    }), i;
  }
  var MO = OO,
    UO = {
      exports: {}
    };
  function xO(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function VO(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xO(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : xO(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  function jO(e, t, i, n, r, o, s) {
    let a = [],
      c = [],
      d = [],
      u = [],
      l = !1,
      h = !1;
    if (UO.exports.parse(e).mediaDescriptions.forEach(e => {
      s && s !== e.attributes.direction || ("video" !== e.media.mediaType || l || (c = e.attributes.payloads, u = e.attributes.extmaps, l = !0), "audio" !== e.media.mediaType || h || (a = e.attributes.payloads, d = e.attributes.extmaps, h = !0));
    }), !u || 0 === c.length) throw new Error("Cannot get video capabilities from SDP.");
    if (!d || 0 === a.length) throw new Error("Cannot get audio capabilities from SDP.");
    return c.forEach(e => {
      var t;
      null !== (t = e.rtpMap) && void 0 !== t && t.clockRate && (e.rtpMap.clockRate = parseInt(e.rtpMap.clockRate));
    }), a.forEach(e => {
      var t;
      null !== (t = e.rtpMap) && void 0 !== t && t.clockRate && (e.rtpMap.clockRate = parseInt(e.rtpMap.clockRate));
    }), t && (a = a.filter(e => {
      var t;
      return "rtx" !== (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase());
    }), c = c.filter(e => {
      var t;
      return "rtx" !== (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase());
    })), i && (c = c.filter(e => {
      var t;
      return !/(red)|(ulpfec)|(flexfec)/i.test((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName) || "");
    })), n && (a = a.filter(e => {
      var t;
      return !/(red)|(ulpfec)|(flexfec)/i.test((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName) || "");
    })), r && (null == r ? void 0 : r.length) > 0 && (a = a.filter(e => {
      var t;
      return r.includes((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "");
    })), o && (null == o ? void 0 : o.length) > 0 && (c = c.filter(e => {
      var t;
      return o.includes((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "");
    })), {
      audioCodecs: a,
      videoCodecs: c,
      audioExtensions: d,
      videoExtensions: u
    };
  }
  function FO(e) {
    const t = UO.exports.parse(e);
    let i, n;
    for (const e of t.mediaDescriptions) {
      if (!i) {
        const t = e.attributes.iceUfrag,
          n = e.attributes.icePwd;
        if (!t || !n) throw new Error("Cannot get iceUfrag or icePwd from SDP.");
        i = {
          iceUfrag: t,
          icePwd: n
        };
      }
      if (!n) {
        const t = e.attributes.fingerprints;
        t.length > 0 && (n = {
          fingerprints: t
        });
      }
    }
    if (!n && t.attributes.fingerprints.length > 0 && (n = {
      fingerprints: t.attributes.fingerprints
    }), !n || !i) throw new Error("Cannot get iceParameters or dtlsParameters from SDP.");
    return {
      iceParameters: i,
      dtlsParameters: n
    };
  }
  function BO(e, t) {
    const i = [],
      n = e.attributes.ssrcGroups.filter(e => "FID" === e.semantic),
      r = e.attributes.ssrcGroups.find(e => "SIM" === e.semantic),
      o = e.attributes.ssrcs;
    if (r) r.ssrcIds.forEach(e => {
      var r;
      const o = null === (r = n.find(t => t.ssrcIds[0] === e)) || void 0 === r ? void 0 : r.ssrcIds[1];
      i.push({
        ssrcId: e,
        rtx: t ? o : void 0
      });
    });else if (n.length > 0) {
      const e = n[0].ssrcIds[0],
        r = n[0].ssrcIds[1];
      i.push({
        ssrcId: e,
        rtx: t ? r : void 0
      });
    } else {
      if (0 === o.length) throw new Error("No ssrcs found on local media description.");
      i.push({
        ssrcId: o[0].ssrcId
      });
    }
    return i;
  }
  function GO(e, t) {
    const {
      cname: i
    } = e;
    let n;
    t && t.ip && "number" == typeof t.port ? (n = [{
      foundation: "udpcandidate",
      componentId: "1",
      transport: "udp",
      priority: "2103266323",
      connectionAddress: t.ip,
      port: t.port.toString(),
      type: "host",
      extension: {}
    }], OE.debug("Using remote candidate from AP ".concat(t.ip, ":").concat(t.port)), t.ip6 && (n.push({
      foundation: "udpcandidate",
      componentId: "1",
      transport: "udp",
      priority: "2103266323",
      connectionAddress: t.ip6,
      port: t.port.toString(),
      type: "host",
      extension: {}
    }), OE.debug("Using IPV6 remote candidate from AP ".concat(t.ip6, ":").concat(t.port)))) : n = e.iceParameters.candidates.map(e => ({
      foundation: e.foundation,
      componentId: "1",
      transport: e.protocol,
      priority: e.priority.toString(),
      connectionAddress: e.ip,
      port: e.port.toString(),
      type: e.type,
      extension: {}
    }));
    const r = {
        fingerprints: e.dtlsParameters.fingerprints.map(e => ({
          hashFunction: e.algorithm,
          fingerprint: e.fingerprint
        }))
      },
      o = {
        iceUfrag: e.iceParameters.iceUfrag,
        icePwd: e.iceParameters.icePwd
      };
    let s;
    switch (e.dtlsParameters.role) {
      case "server":
        s = "passive";
        break;
      case "client":
        s = "active";
        break;
      case "auto":
        s = "actpass";
    }
    return {
      dtlsParameters: r,
      iceParameters: o,
      candidates: n,
      rtpCapabilities: ZO(e.rtpCapabilities),
      setup: s,
      cname: i
    };
  }
  function WO(e, t, i) {
    const n = [],
      r = [];
    return e.forEach(e => {
      let {
        ssrcId: o,
        rtx: s
      } = e;
      const a = ZI(8, "track-"),
        c = {
          ssrcId: o,
          attributes: VO({
            label: a,
            mslabel: i = i || ZI(10, ""),
            msid: "".concat(i, " ").concat(a)
          }, t && {
            cname: t
          })
        };
      if (n.push(c), void 0 !== s) {
        const e = {
          ssrcId: s,
          attributes: VO({
            label: a,
            mslabel: i,
            msid: "".concat(i, " ").concat(a)
          }, t && {
            cname: t
          })
        };
        n.push(e), r.push({
          semantic: "FID",
          ssrcIds: [o, s]
        });
      }
    }), e.length > 1 && r.push({
      semantic: "SIM",
      ssrcIds: e.map(e => {
        let {
          ssrcId: t
        } = e;
        return t;
      })
    }), {
      ssrcs: n,
      ssrcGroups: r
    };
  }
  function HO(e, t) {
    t instanceof yI && e.attributes.payloads.forEach(e => {
      var i;
      const n = null === (i = e.rtpMap) || void 0 === i ? void 0 : i.encodingName.toLowerCase();
      if (!n || -1 === ["opus", "pcmu", "pcma", "g722"].indexOf(n)) return;
      e.fmtp || (e.fmtp = {
        parameters: {}
      }), e.fmtp.parameters.minptime = "10", e.fmtp.parameters.useinbandfec = "1";
      const r = t._encoderConfig;
      r && "pcmu" !== n && "pcma" !== n && "g722" !== n && (r.bitrate && !Kh() && (e.fmtp.parameters.maxaveragebitrate = "".concat(Math.floor(1000 * r.bitrate))), r.sampleRate && (e.fmtp.parameters.maxplaybackrate = "".concat(r.sampleRate), e.fmtp.parameters["sprop-maxcapturerate"] = "".concat(r.sampleRate)), r.stereo && (e.fmtp.parameters.stereo = "1", e.fmtp.parameters["sprop-stereo"] = "1"));
    });
  }
  function KO(e) {
    const t = e.attributes.unrecognized.findIndex(e => "x-google-flag" === e.attField && "conference" === e.attValue);
    -1 !== t && e.attributes.unrecognized.splice(t, 1);
  }
  function YO(e, t) {
    if (!(t instanceof Cy && t._encoderConfig && -1 === t._hints.indexOf(lS.SCREEN_TRACK))) return;
    const i = t._encoderConfig;
    JS().supportMinBitrate && i.bitrateMin && e.attributes.payloads.forEach(e => {
      var t;
      ["h264", "h265", "vp8", "vp9", "av1"].includes((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "") && (e.fmtp || (e.fmtp = {
        parameters: {}
      }), e.fmtp.parameters["x-google-min-bitrate"] = "".concat(i.bitrateMin));
    }), JS().supportMinBitrate && !t._hints.includes(lS.LOW_STREAM) && i.bitrateMax && e.attributes.payloads.forEach(e => {
      var t;
      ["h264", "h265", "vp8", "vp9", "av1"].includes((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "") && (e.fmtp || (e.fmtp = {
        parameters: {}
      }), e.fmtp.parameters["x-google-start-bitrate"] = "".concat(GE("X_GOOGLE_START_BITRATE") || Math.floor(i.bitrateMax)));
    });
  }
  function qO(e) {
    if ("video" !== e.media.mediaType) return;
    const t = xh();
    if (t.name !== wh.SAFARI && t.os !== bh.IOS) return;
    const i = e.attributes.extmaps.findIndex(e => /video-orientation/g.test(e.extensionName));
    -1 !== i && e.attributes.extmaps.splice(i, 1);
  }
  function JO(e, t, i) {
    if (!t) return;
    let n, r;
    if ("video" === e.media.mediaType ? (n = i.videoExtensions, r = i.videoCodecs) : (n = i.audioExtensions, r = i.audioCodecs), !0 === t.twcc) {
      const t = n.find(e => "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.extensionName);
      if (t) {
        e.attributes.extmaps.find(e => "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.extensionName) || e.attributes.extmaps.push({
          entry: t.entry,
          extensionName: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01"
        });
        (function (e, t) {
          return t.filter(t => !!e.find(e => e.payloadType === t.payloadType && !!e.rtcpFeedbacks.find(e => "transport-cc" === e.type)));
        })(r, e.attributes.payloads).forEach(e => {
          e.rtcpFeedbacks.find(e => "transport-cc" === e.type) || e.rtcpFeedbacks.push({
            type: "transport-cc"
          });
        });
      }
    } else if (!1 === t.twcc) {
      const t = e.attributes.extmaps.findIndex(e => "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.extensionName);
      -1 !== t && e.attributes.extmaps.splice(t, 1), e.attributes.payloads.forEach(e => {
        const t = e.rtcpFeedbacks.findIndex(e => "transport-cc" === e.type);
        -1 !== t && e.rtcpFeedbacks.splice(t, 1);
      });
    }
    if (!0 === t.remb) {
      const t = n.find(e => "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.extensionName);
      if (t) {
        e.attributes.extmaps.find(e => "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.extensionName) || e.attributes.extmaps.push({
          entry: t.entry,
          extensionName: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"
        });
        (function (e, t) {
          return t.filter(t => !!e.find(e => e.payloadType === t.payloadType && !!e.rtcpFeedbacks.find(e => "goog-remb" === e.type)));
        })(r, e.attributes.payloads).forEach(e => {
          e.rtcpFeedbacks.find(e => "goog-remb" === e.type) || e.rtcpFeedbacks.push({
            type: "goog-remb"
          });
        });
      }
    } else if (!1 === t.remb) {
      const t = e.attributes.extmaps.findIndex(e => "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.extensionName);
      -1 !== t && e.attributes.extmaps.splice(t, 1), e.attributes.payloads.forEach(e => {
        const t = e.rtcpFeedbacks.findIndex(e => "goog-remb" === e.type);
        -1 !== t && e.rtcpFeedbacks.splice(t, 1);
      });
    }
  }
  function XO(e, t, i) {
    if (Kh()) return;
    if ("video" !== e.media.mediaType) return;
    if (!(t instanceof Cy)) return;
    if ("vp9" !== i && "vp8" !== i) return;
    if ("vp8" === i && !GE("SIMULCAST")) return;
    if (void 0 === t._scalabiltyMode || t._scalabiltyMode.numSpatialLayers <= 1) return;
    const n = "vp8" === i ? 2 : t._scalabiltyMode.numSpatialLayers,
      r = e.attributes.ssrcs[0],
      o = e.attributes.ssrcGroups.find(e => "FID" === e.semantic && e.ssrcIds[0] === r.ssrcId),
      s = {
        semantic: "SIM",
        ssrcIds: [r.ssrcId]
      };
    for (let t = 1; t < n; t++) e.attributes.ssrcs.push({
      ssrcId: r.ssrcId + t,
      attributes: uC(r.attributes)
    }), s.ssrcIds.push(r.ssrcId + t), o && (e.attributes.ssrcs.push({
      ssrcId: o.ssrcIds[1] + t,
      attributes: uC(r.attributes)
    }), e.attributes.ssrcGroups.push({
      semantic: "FID",
      ssrcIds: [r.ssrcId + t, o.ssrcIds[1] + t]
    }));
    e.attributes.ssrcGroups.unshift(s);
  }
  async function zO(e, t, i, n, r) {
    const o = new RTCPeerConnection();
    o.addTransceiver("video", {
      direction: "sendonly"
    }), o.addTransceiver("audio", {
      direction: "sendonly"
    }), o.addTransceiver("video", {
      direction: "recvonly"
    }), o.addTransceiver("audio", {
      direction: "recvonly"
    });
    const s = (await o.createOffer()).sdp,
      a = jO(s, e, t, i, n, r, "sendonly"),
      c = jO(s, e, t, i, n, r, "recvonly"),
      d = {
        audioCodecs: [],
        audioExtensions: [],
        videoCodecs: [],
        videoExtensions: []
      },
      u = {
        audioCodecs: [],
        audioExtensions: [],
        videoCodecs: [],
        videoExtensions: []
      },
      l = {
        audioCodecs: [],
        audioExtensions: [],
        videoCodecs: [],
        videoExtensions: []
      };
    if (QO(a, c, "videoExtensions", d, u, l), QO(a, c, "videoCodecs", d, u, l), QO(a, c, "audioExtensions", d, u, l), QO(a, c, "audioCodecs", d, u, l), GE("RAISE_H264_BASELINE_PRIORITY")) {
      const e = l.videoCodecs.findIndex(e => {
        var t, i;
        return "h264" === (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLocaleLowerCase()) && "42001f" === (null === (i = e.fmtp) || void 0 === i ? void 0 : i.parameters["profile-level-id"]);
      });
      if (-1 !== e) {
        const t = l.videoCodecs.findIndex(e => {
          var t;
          return "h264" === (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLocaleLowerCase());
        });
        if (t < e) {
          OE.debug("raising H264 baseline profile priority");
          const i = l.videoCodecs[e];
          l.videoCodecs.splice(e, 1), l.videoCodecs.splice(t, 0, i);
        }
        -1 !== t && (u.videoCodecs = u.videoCodecs.filter(e => {
          var t, i;
          return !("h264" === (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLocaleLowerCase()) && "42001f" !== (null === (i = e.fmtp) || void 0 === i ? void 0 : i.parameters["profile-level-id"]));
        })), -1 !== t && GE("FILTER_SEND_H264_BASELINE") && (d.videoCodecs = d.videoCodecs.filter(e => {
          var t, i;
          return !("h264" === (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLocaleLowerCase()) && "42001f" !== (null === (i = e.fmtp) || void 0 === i ? void 0 : i.parameters["profile-level-id"]));
        }));
      }
    }
    try {
      o.close();
    } catch (e) {}
    return {
      send: d,
      recv: u,
      sendrecv: l
    };
  }
  function QO(e, t, i, n, r, o) {
    if ("videoExtensions" === i || "audioExtensions" === i) {
      const s = [];
      return e[i].forEach(e => {
        t[i].some((t, i) => {
          if (e.entry === t.entry && e.extensionName === t.extensionName) return s.push(i), !0;
        }) ? o[i].push(e) : n[i].push(e);
      }), void t[i].forEach((e, t) => {
        -1 === s.indexOf(t) && r[i].push(e);
      });
    }
    if ("videoCodecs" === i || "audioCodecs" === i) {
      const s = [];
      return e[i].forEach(e => {
        t[i].some((t, i) => {
          if (e.payloadType === t.payloadType && JSON.stringify(e) === JSON.stringify(t)) return s.push(i), !0;
        }) ? o[i].push(e) : n[i].push(e);
      }), void t[i].forEach((e, t) => {
        -1 === s.indexOf(t) && r[i].push(e);
      });
    }
  }
  function ZO(e) {
    const {
      send: t,
      recv: i,
      sendrecv: n
    } = e;
    if (!n) {
      if (!t || !i) throw new Error("cannot merge rtp capabilities because one of send or recv is empty!");
      return {
        send: t,
        recv: i
      };
    }
    let r, o;
    return t ? (r = {
      audioCodecs: [],
      audioExtensions: [],
      videoCodecs: [],
      videoExtensions: []
    }, r.audioCodecs = [...t.audioCodecs, ...n.audioCodecs], r.videoCodecs = [...t.videoCodecs, ...n.videoCodecs], r.audioExtensions = [...t.audioExtensions, ...n.audioExtensions], r.videoExtensions = [...t.videoExtensions, ...n.videoExtensions]) : r = n, i ? (o = {
      audioCodecs: [],
      audioExtensions: [],
      videoCodecs: [],
      videoExtensions: []
    }, o.audioCodecs = [...i.audioCodecs, ...n.audioCodecs], o.videoCodecs = [...i.videoCodecs, ...n.videoCodecs], o.audioExtensions = [...i.audioExtensions, ...n.audioExtensions], o.videoExtensions = [...i.videoExtensions, ...n.videoExtensions]) : o = n, {
      send: r,
      recv: o
    };
  }
  function $O(e) {
    if ("audio" !== e.media.mediaType) return;
    e.attributes.payloads.filter(e => {
      var t;
      return "opus" === (null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase());
    }).forEach(e => {
      e.fmtp || (e.fmtp = {
        parameters: {}
      }), e.fmtp.parameters.stereo = "1", e.fmtp.parameters["sprop-stereo"] = "1";
    });
  }
  function eN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function tN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? eN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : eN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  !function (e, t) {
    e.exports = (() => {
      var e = {
          8: (e, t, i) => {
            i.r(t), i.d(t, {
              Parser: () => I,
              Printer: () => O,
              parse: () => D,
              print: () => P
            });
            const n = "\n",
              r = "".concat("\r").concat(n),
              o = " ";
            let s;
            function a(e) {
              return e >= "0" && e <= "9";
            }
            function c(e) {
              return e >= "!" && e <= "~";
            }
            function d(e) {
              return c(e) || e >= "\x80" && e <= "\xFF";
            }
            function u(e) {
              return "!" === e || e >= "#" && e <= "'" || e >= "*" && e <= "+" || e >= "-" && e <= "." || e >= "0" && e <= "9" || e >= "A" && e <= "Z" || e >= "^" && e <= "~";
            }
            function l(e) {
              return e >= "1" && e <= "9";
            }
            function h(e) {
              return e >= "A" && e <= "Z" || e >= "a" && e <= "z";
            }
            function p(e) {
              return "d" === e || "h" === e || "m" === e || "s" === e;
            }
            function _(e) {
              return e > "\x01" && e < "\t" || e > "\x0B" && e < "\f" || e > "\x0E" && e < "\xFF";
            }
            function E(e) {
              return h(e) || a(e) || "+" === e || "/" === e;
            }
            function m(e) {
              return a(e) || h(e) || "+" === e || "/" === e || "-" === e || "_" === e;
            }
            function f(e) {
              return h(e) || a(e) || "+" === e || "/" === e;
            }
            function S(e, t) {
              var i = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), i.push.apply(i, n);
              }
              return i;
            }
            function T(e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(i), !0).forEach(function (t) {
                  g(e, t, i[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
              }
              return e;
            }
            function g(e, t, i) {
              return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = i, e;
            }
            !function (e) {
              e.VERSION = "v", e.ORIGIN = "o", e.SESSION_NAME = "s", e.INFORMATION = "i", e.URI = "u", e.EMAIL = "e", e.PHONE = "p", e.CONNECTION = "c", e.BANDWIDTH = "b", e.TIME = "t", e.REPEAT = "r", e.ZONE_ADJUSTMENTS = "z", e.KEY = "k", e.ATTRIBUTE = "a", e.MEDIA = "m";
            }(s || (s = {}));
            class R {
              consumeText(e, t) {
                let i = t;
                for (; i < e.length;) {
                  const t = e[i];
                  if ("\0" === t || "\r" === t || t === n) break;
                  i += 1;
                }
                if (i - t == 0) throw new Error("Invalid text, at ".concat(e));
                return i;
              }
              consumeUnicastAddress(e, t, i) {
                return this.consumeTill(e, t, o);
              }
              consumeOneOrMore(e, t, i) {
                let n = t;
                for (; i(e[n]);) n++;
                if (n - t == 0) throw new Error("Invalid rule at ".concat(t, "."));
                return n;
              }
              consumeSpace(e, t) {
                if (e[t] === o) return t + 1;
                throw new Error("Invalid space at ".concat(t, "."));
              }
              consumeIP4Address(e, t) {
                let i = t;
                for (let t = 0; t < 4; t++) if (i = this.consumeDecimalUChar(e, i), 3 !== t) {
                  if ("." !== e[i]) throw new Error("Invalid IP4 address.");
                  i++;
                }
                return i;
              }
              consumeDecimalUChar(e, t) {
                let i = t;
                for (let t = 0; t < 3 && a(e[i]); t++, i++);
                if (i - t == 0) throw new Error("Invalid decimal uchar.");
                const n = parseInt(e.slice(t, i));
                if (n >= 0 && n <= 255) return i;
                throw new Error("Invalid decimal uchar");
              }
              consumeIP6Address(e, t) {
                let i = this.consumeHexpart(e, t);
                return ":" === e[i] ? (i += 1, i = this.consumeIP4Address(e, i), i) : i;
              }
              consumeHexpart(e, t) {
                let i = t;
                if (":" === e[i] && ":" === e[i + 1]) {
                  i += 2;
                  try {
                    i = this.consumeHexseq(e, i);
                  } catch (e) {}
                  return i;
                }
                if (i = this.consumeHexseq(e, i), ":" === e[i] && ":" === e[i + 1]) {
                  i += 2;
                  try {
                    i = this.consumeHexseq(e, i);
                  } catch (e) {}
                  return i;
                }
                return i;
              }
              consumeHexseq(e, t) {
                let i = t;
                for (; i = this.consumeHex4(e, i), ":" === e[i] && ":" !== e[i + 1];) i += 1;
                return i;
              }
              consumeHex4(e, t) {
                let i = 0;
                for (; i < 4; i++) if (!((n = e[t + i]) >= "0" && n <= "9" || n >= "a" && n <= "f" || n >= "A" && n <= "F")) {
                  if (0 === i) throw new Error("Invalid hex 4");
                  break;
                }
                var n;
                return t + i;
              }
              consumeFQDN(e, t) {
                let i = t;
                for (; a(e[i]) || h(e[i]) || "-" === e[i] || "." === e[i];) i += 1;
                if (i - t < 4) throw new Error("Invalid FQDN");
                return i;
              }
              consumeExtnAddr(e, t) {
                return this.consumeOneOrMore(e, t, d);
              }
              consumeMulticastAddress(e, t, i) {
                switch (i) {
                  case "IP4":
                  case "ip4":
                    return this.consumeIP4MulticastAddress(e, t);
                  case "IP6":
                  case "ip6":
                    return this.consumeIP6MulticastAddress(e, t);
                  default:
                    try {
                      return this.consumeFQDN(e, t);
                    } catch (i) {
                      return this.consumeExtnAddr(e, t);
                    }
                }
              }
              consumeIP6MulticastAddress(e, t) {
                const i = this.consumeHexpart(e, t);
                return "/" === e[i] ? this.consumeInteger(e, i + 1) : i;
              }
              consumeIP4MulticastAddress(e, t) {
                let i = t + 3;
                const n = e.slice(t, i),
                  r = parseInt(n);
                if (r < 224 || r > 239) throw new Error("Invalid IP4 multicast address, IPv4 multicast addresses may be in the range 224.0.0.0 to 239.255.255.255.");
                for (let t = 0; t < 3; t++) {
                  if ("." !== e[i]) throw new Error("Invalid IP4 multicast address.");
                  i += 1, i = this.consumeDecimalUChar(e, i);
                }
                return "/" === e[i] && (i += 1), i = this.consumeTTL(e, i), "/" === e[i] && (i = this.consumeInteger(e, i)), i;
              }
              consumeInteger(e, t) {
                if (!l(e[t])) throw new Error("Invalid integer.");
                for (t += 1; a(e[t]);) t += 1;
                return t;
              }
              consumeTTL(e, t) {
                if ("0" === e[t]) return t + 1;
                if (!l(e[t])) throw new Error("Invalid TTL.");
                t += 1;
                for (let i = 0; i < 2 && a(e[t]); i++) t += 1;
                return t;
              }
              consumeToken(e, t) {
                return this.consumeOneOrMore(e, t, u);
              }
              consumeTime(e, t) {
                let i = t;
                if ("0" === e[i]) return i + 1;
                for (l(e[i]) && (i += 1); a(e[i]);) i++;
                if (i - t < 10) throw new Error("Invalid time");
                return i;
              }
              consumeAddress(e, t) {
                return this.consumeTill(e, t, o);
              }
              consumeTypedTime(e, t) {
                let i = t;
                return i = this.consumeOneOrMore(e, i, a), p(e[i]) ? i + 1 : i;
              }
              consumeRepeatInterval(e, t) {
                if (!l(e[t])) throw new Error("Invalid repeat interval");
                for (t += 1; a(e[t]);) t += 1;
                return p(e[t]) && (t += 1), t;
              }
              consumePort(e, t) {
                return this.consumeOneOrMore(e, t, a);
              }
              consume(e, t, i) {
                for (let n = 0; n < i.length; n++) {
                  if (t + n >= e.length) throw new Error("consume exceeding value length");
                  if (e[t + n] !== i[n]) throw new Error("consume ".concat(i, " failed at ").concat(n));
                }
                return t + i.length;
              }
              consumeTill(e, t, i) {
                let n = t;
                for (; n < e.length && ("string" != typeof i || e[n] !== i) && ("function" != typeof i || !i(e[n]));) n++;
                return n;
              }
            }
            class I extends R {
              constructor() {
                super(), g(this, "records", []), g(this, "currentLine", 0);
              }
              parse(e) {
                const t = this.probeEOL(e);
                this.records = e.split(t).filter(e => !!e.trim()).map(this.parseLine), this.currentLine = 0;
                const i = this.parseVersion(),
                  n = this.parseOrigin(),
                  r = this.parseSessionName(),
                  o = this.parseInformation(),
                  s = this.parseUri(),
                  a = this.parseEmail(),
                  c = this.parsePhone(),
                  d = this.parseConnection(),
                  u = this.parseBandWidth(),
                  l = this.parseTimeFields(),
                  h = this.parseKey(),
                  p = this.parseSessionAttribute(),
                  _ = this.parseMediaDescription();
                if (this.currentLine !== this.records.length) throw new Error("parsing failed, non exhaustive sdp lines.");
                return {
                  version: i,
                  origin: n,
                  sessionName: r,
                  information: o,
                  uri: s,
                  emails: a,
                  phones: c,
                  connection: d,
                  bandwidths: u,
                  timeFields: l,
                  key: h,
                  attributes: p,
                  mediaDescriptions: _
                };
              }
              getCurrentRecord() {
                const e = this.records[this.currentLine];
                if (!e) throw new Error("Record doesn't exit.");
                return e;
              }
              probeEOL(e) {
                for (let t = 0; t < e.length; t++) if (e[t] === n) return "\r" === e[t - 1] ? r : n;
                throw new Error("Invalid newline character.");
              }
              parseLine(e, t) {
                if (e.length < 2) throw new Error("Invalid sdp line, sdp line should be of form <type>=<value>.");
                const i = e[0];
                if ("=" !== e[1]) throw new Error("Invalid sdp line, <type> should be a single character followed by an \"=\" sign.");
                return {
                  type: i,
                  value: e.slice(2),
                  line: t,
                  cur: 0
                };
              }
              parseSessionAttribute() {
                const e = new v();
                for (; this.currentLine < this.records.length;) {
                  const t = this.getCurrentRecord();
                  if (t.type !== s.ATTRIBUTE) break;
                  const i = {
                    attField: this.extractOneOrMore(t, e => u(e) && ":" !== e),
                    _cur: 0
                  };
                  ":" === t.value[t.cur] && (t.cur += 1, i.attValue = this.extractOneOrMore(t, _)), e.parse(i), this.currentLine++;
                }
                return e.digest();
              }
              parseMediaAttributes(e) {
                const t = new y(e);
                for (; this.currentLine < this.records.length;) {
                  const e = this.getCurrentRecord();
                  if (e.type !== s.ATTRIBUTE) break;
                  const i = {
                    attField: this.extractOneOrMore(e, e => u(e) && ":" !== e),
                    _cur: 0
                  };
                  ":" === e.value[e.cur] && (e.cur += 1, i.attValue = this.extractOneOrMore(e, _)), t.parse(i), this.currentLine++;
                }
                return t.digest();
              }
              parseKey() {
                const e = this.getCurrentRecord();
                if (e.type === s.KEY) {
                  if ("prompt" === e.value || "clear:" === e.value || "base64:" === e.value || "uri:" === e.value) return e.value;
                  throw this.currentLine++, new Error("Invalid key.");
                }
              }
              parseZone() {
                const e = this.getCurrentRecord();
                if (e.type === s.ZONE_ADJUSTMENTS) {
                  const t = [];
                  for (;;) try {
                    const i = this.extract(e, this.consumeTime);
                    this.consumeSpaceForRecord(e);
                    let n = !1;
                    "-" === e.value[e.cur] && (n = !0, e.cur += 1);
                    const r = this.extract(e, this.consumeTypedTime);
                    t.push({
                      time: i,
                      typedTime: r,
                      back: n
                    });
                  } catch (e) {
                    break;
                  }
                  if (0 === t.length) throw new Error("Invalid zone adjustments");
                  return this.currentLine++, t;
                }
                return [];
              }
              parseRepeat() {
                const e = [];
                for (;;) {
                  const t = this.getCurrentRecord();
                  if (t.type !== s.REPEAT) break;
                  {
                    const i = this.extract(t, this.consumeRepeatInterval),
                      n = this.parseTypedTime(t);
                    e.push({
                      repeatInterval: i,
                      typedTimes: n
                    }), this.currentLine++;
                  }
                }
                return e;
              }
              parseTypedTime(e) {
                const t = [];
                for (;;) try {
                  this.consumeSpaceForRecord(e), t.push(this.extract(e, this.consumeTypedTime));
                } catch (e) {
                  break;
                }
                if (0 === t.length) throw new Error("Invalid typed time.");
                return t;
              }
              parseTime() {
                const e = this.getCurrentRecord(),
                  t = this.extract(e, this.consumeTime);
                this.consumeSpaceForRecord(e);
                const i = this.extract(e, this.consumeTime);
                return this.currentLine++, {
                  startTime: t,
                  stopTime: i
                };
              }
              parseBandWidth() {
                const e = [];
                for (; this.currentLine < this.records.length;) {
                  const t = this.getCurrentRecord();
                  if (t.type !== s.BANDWIDTH) break;
                  {
                    const i = this.extractOneOrMore(t, u);
                    if (":" !== t.value[t.cur]) throw new Error("Invalid bandwidth field.");
                    t.cur++;
                    const n = this.extractOneOrMore(t, a);
                    e.push({
                      bwtype: i,
                      bandwidth: n
                    }), this.currentLine++;
                  }
                }
                return e;
              }
              parseVersion() {
                const e = this.getCurrentRecord();
                if (e.type !== s.VERSION) throw new Error("first sdp record must be version");
                const t = e.value.slice(0, this.consumeOneOrMore(e.value, 0, a));
                if (t.length !== e.value.length) throw new Error("invalid proto version, \"v=".concat(e.value, "\""));
                return this.currentLine++, t;
              }
              parseOrigin() {
                const e = this.getCurrentRecord();
                if (e.type !== s.ORIGIN) throw new Error("second line of sdp must be origin");
                const t = this.extractOneOrMore(e, d);
                this.consumeSpaceForRecord(e);
                const i = this.extractOneOrMore(e, a);
                this.consumeSpaceForRecord(e);
                const n = this.extractOneOrMore(e, a);
                this.consumeSpaceForRecord(e);
                const r = this.extractOneOrMore(e, u);
                this.consumeSpaceForRecord(e);
                const o = this.extractOneOrMore(e, u);
                this.consumeSpaceForRecord(e);
                const c = this.extract(e, this.consumeUnicastAddress);
                return this.currentLine++, {
                  username: t,
                  sessId: i,
                  sessVersion: n,
                  nettype: r,
                  addrtype: o,
                  unicastAddress: c
                };
              }
              parseSessionName() {
                const e = this.getCurrentRecord();
                if (e.type === s.SESSION_NAME) {
                  const t = this.extract(e, this.consumeText);
                  return this.currentLine++, t;
                }
              }
              parseInformation() {
                const e = this.getCurrentRecord();
                if (e.type !== s.INFORMATION) return;
                const t = this.extract(e, this.consumeText);
                return this.currentLine++, t;
              }
              parseUri() {
                const e = this.getCurrentRecord();
                if (e.type === s.URI) return this.currentLine++, e.value;
              }
              parseEmail() {
                const e = [];
                for (;;) {
                  const t = this.getCurrentRecord();
                  if (t.type !== s.EMAIL) break;
                  e.push(t.value), this.currentLine++;
                }
                return e;
              }
              parsePhone() {
                const e = [];
                for (;;) {
                  const t = this.getCurrentRecord();
                  if (t.type !== s.PHONE) break;
                  e.push(t.value), this.currentLine++;
                }
                return e;
              }
              parseConnection() {
                const e = this.getCurrentRecord();
                if (e.type === s.CONNECTION) {
                  const t = this.extractOneOrMore(e, u);
                  this.consumeSpaceForRecord(e);
                  const i = this.extractOneOrMore(e, u);
                  this.consumeSpaceForRecord(e);
                  const n = this.extract(e, this.consumeAddress);
                  return this.currentLine++, {
                    nettype: t,
                    addrtype: i,
                    address: n
                  };
                }
              }
              parseMedia() {
                const e = this.getCurrentRecord(),
                  t = this.extract(e, this.consumeToken);
                this.consumeSpaceForRecord(e);
                let i = this.extract(e, this.consumePort);
                "/" === e.value[e.cur] && (e.cur += 1, i += this.extract(e, this.consumeInteger)), this.consumeSpaceForRecord(e);
                const n = [];
                for (n.push(this.extract(e, this.consumeToken)); "/" === e.value[e.cur];) e.cur += 1, n.push(this.extract(e, this.consumeToken));
                if (0 === n.length) throw new Error("Invalid proto");
                const r = this.parseFmt(e);
                return this.currentLine++, {
                  mediaType: t,
                  port: i,
                  protos: n,
                  fmts: r
                };
              }
              parseTimeFields() {
                const e = [];
                for (; this.getCurrentRecord().type === s.TIME;) {
                  const t = this.parseTime(),
                    i = this.parseRepeat(),
                    n = this.parseZone();
                  e.push({
                    time: t,
                    repeats: i,
                    zones: n
                  });
                }
                return e;
              }
              parseMediaDescription() {
                const e = [];
                for (; this.currentLine < this.records.length && this.getCurrentRecord().type === s.MEDIA;) {
                  const t = this.parseMedia(),
                    i = this.parseInformation(),
                    n = this.parseConnections(),
                    r = this.parseBandWidth(),
                    o = this.parseKey(),
                    s = this.parseMediaAttributes(t);
                  e.push({
                    media: t,
                    information: i,
                    connections: n,
                    bandwidths: r,
                    key: o,
                    attributes: s
                  });
                }
                return e;
              }
              parseConnections() {
                const e = [];
                for (; this.currentLine < this.records.length && this.getCurrentRecord().type === s.CONNECTION;) e.push(this.parseConnection());
                return e;
              }
              parseFmt(e) {
                const t = [];
                for (;;) try {
                  this.consumeSpaceForRecord(e), t.push(this.extract(e, this.consumeToken));
                } catch (e) {
                  break;
                }
                if (0 === t.length) throw new Error("Invalid fmts");
                return t;
              }
              extract(e, t, ...i) {
                const n = t.call(this, e.value, e.cur, ...i),
                  r = e.value.slice(e.cur, n);
                return e.cur = n, r;
              }
              extractOneOrMore(e, t) {
                const i = this.consumeOneOrMore(e.value, e.cur, t),
                  n = e.value.slice(e.cur, i);
                return e.cur = i, n;
              }
              consumeSpaceForRecord(e) {
                if (e.value[e.cur] !== o) throw new Error("Invalid space at ".concat(e.cur, "."));
                e.cur += 1;
              }
            }
            class C extends R {
              constructor(...e) {
                super(...e), g(this, "attributes", void 0), g(this, "digested", !1);
              }
              extractOneOrMore(e, t, i) {
                const n = this.consumeOneOrMore(e.attValue, e._cur, t),
                  r = e.attValue.slice(e._cur, n),
                  [o, s] = i || [];
                if ("number" == typeof o && r.length < o) throw new Error("error in length, should be more or equal than ".concat(o, " characters."));
                if ("number" == typeof s && r.length > s) throw new Error("error in length, should be less or equal than ".concat(s, " characters."));
                return e._cur = n, r;
              }
              consumeAttributeSpace(e) {
                if (e.attValue[e._cur] !== o) throw new Error("Invalid space at ".concat(e._cur, "."));
                e._cur += 1;
              }
              extract(e, t, ...i) {
                if (!e.attValue) throw new Error("Nothing to extract from attValue.");
                const n = t.call(this, e.attValue, e._cur, ...i),
                  r = e.attValue.slice(e._cur, n);
                return e._cur = n, r;
              }
              atEnd(e) {
                if (!e.attValue) throw new Error();
                return e._cur >= e.attValue.length;
              }
              peekChar(e) {
                if (!e.attValue) throw new Error();
                return e.attValue[e._cur];
              }
              peek(e, t) {
                if (!e.attValue) throw new Error();
                for (let i = 0; i < t.length; i++) if (t[i] !== e.attValue[e._cur + i]) return !1;
                return !0;
              }
              parseIceUfrag(e) {
                if (this.attributes.iceUfrag) throw new Error("Invalid ice-ufrag, should be only a single line if 'a=ice-ufrag'");
                this.attributes.iceUfrag = this.extractOneOrMore(e, E, [4, 256]);
              }
              parseIcePwd(e) {
                if (this.attributes.icePwd) throw new Error("Invalid ice-pwd, should be only a single line if 'a=ice-pwd'");
                this.attributes.icePwd = this.extractOneOrMore(e, E, [22, 256]);
              }
              parseIceOptions(e) {
                if (this.attributes.iceOptions) throw new Error("Invalid ice-options, should be only one 'ice-options' line");
                const t = [];
                for (; !this.atEnd(e);) {
                  t.push(this.extractOneOrMore(e, E));
                  try {
                    this.consumeAttributeSpace(e);
                  } catch (t) {
                    if (this.atEnd(e)) break;
                    throw t;
                  }
                }
                this.attributes.iceOptions = t;
              }
              parseFingerprint(e) {
                const t = this.extract(e, this.consumeToken);
                this.consumeAttributeSpace(e);
                const i = this.extract(e, this.consumeTill);
                this.attributes.fingerprints.push({
                  hashFunction: t,
                  fingerprint: i
                });
              }
              parseExtmap(e) {
                const t = this.extractOneOrMore(e, a);
                let i;
                "/" === this.peekChar(e) && (this.extract(e, this.consume, "/"), i = this.extract(e, this.consumeToken)), this.consumeAttributeSpace(e);
                const n = this.extract(e, this.consumeTill, o),
                  r = T(T({
                    entry: parseInt(t, 10)
                  }, i && {
                    direction: i
                  }), {}, {
                    extensionName: n
                  });
                this.peekChar(e) === o && (this.consumeAttributeSpace(e), r.extensionAttributes = this.extract(e, this.consumeTill)), this.attributes.extmaps.push(r);
              }
              parseSetup(e) {
                if (this.attributes.setup) throw new Error("must only be one single 'a=setup' line.");
                const t = this.extract(e, this.consumeTill);
                if ("active" !== t && "passive" !== t && "actpass" !== t && "holdconn" !== t) throw new Error("role must be one of 'active', 'passive', 'actpass', 'holdconn'.");
                this.attributes.setup = t;
              }
            }
            class v extends C {
              constructor(...e) {
                super(...e), g(this, "attributes", {
                  unrecognized: [],
                  groups: [],
                  extmaps: [],
                  fingerprints: [],
                  identities: []
                });
              }
              parse(e) {
                if (this.digested) throw new Error("already digested");
                try {
                  switch (e.attField) {
                    case "group":
                      this.parseGroup(e);
                      break;
                    case "ice-lite":
                      this.parseIceLite();
                      break;
                    case "ice-ufrag":
                      this.parseIceUfrag(e);
                      break;
                    case "ice-pwd":
                      this.parseIcePwd(e);
                      break;
                    case "ice-options":
                      this.parseIceOptions(e);
                      break;
                    case "fingerprint":
                      this.parseFingerprint(e);
                      break;
                    case "setup":
                      this.parseSetup(e);
                      break;
                    case "tls-id":
                      this.parseTlsId(e);
                      break;
                    case "identity":
                      this.parseIdentity(e);
                      break;
                    case "extmap":
                      this.parseExtmap(e);
                      break;
                    case "msid-semantic":
                      this.parseMsidSemantic(e);
                      break;
                    default:
                      e.ignored = !0, this.attributes.unrecognized.push(e);
                  }
                } catch (t) {
                  throw console.error("parsing session attribute ".concat(e.attField, " error, \"a=").concat(e.attField, ":").concat(e.attValue, "\"")), t;
                }
                if (!e.ignored && e.attValue && !this.atEnd(e)) throw new Error("attribute parsing error");
              }
              digest() {
                return this.digested = !0, this.attributes;
              }
              parseGroup(e) {
                const t = this.extract(e, this.consumeToken),
                  i = [];
                for (; !this.atEnd(e) && this.peekChar(e) === o;) this.consumeAttributeSpace(e), i.push(this.extract(e, this.consumeToken));
                this.attributes.groups.push({
                  semantic: t,
                  identificationTag: i
                });
              }
              parseIceLite() {
                if (this.attributes.iceLite) throw new Error("Invalid ice-lite, should be only a single line of 'a=ice-lite'");
                this.attributes.iceLite = !0;
              }
              parseTlsId(e) {
                if (this.attributes.tlsId) throw new Error("must be only one tld-id line");
                this.attributes.tlsId = this.extractOneOrMore(e, m);
              }
              parseIdentity(e) {
                const t = this.extractOneOrMore(e, f),
                  i = [];
                for (; !this.atEnd(e) && this.peekChar(e) === o;) {
                  this.consumeAttributeSpace(e);
                  const t = this.extract(e, this.consumeToken);
                  this.extract(e, this.consume, "=");
                  const n = this.extractOneOrMore(e, e => e !== o && _(e));
                  i.push({
                    name: t,
                    value: n
                  });
                }
                this.attributes.identities.push({
                  assertionValue: t,
                  extensions: i
                });
              }
              parseMsidSemantic(e) {
                this.peekChar(e) === o && this.consumeAttributeSpace(e);
                const t = {
                  semantic: this.extract(e, this.consumeToken),
                  identifierList: []
                };
                for (;;) {
                  try {
                    this.consumeAttributeSpace(e);
                  } catch (e) {
                    break;
                  }
                  if ("*" === this.peekChar(e)) {
                    this.extract(e, this.consume, "*"), t.applyForAll = !0;
                    break;
                  }
                  {
                    const i = this.extract(e, this.consumeTill, o);
                    t.identifierList.push(i);
                  }
                }
                this.attributes.msidSemantic = t;
              }
            }
            class y extends C {
              constructor(e) {
                super(), g(this, "attributes", void 0), -1 !== e.protos.indexOf("RTP") || e.protos.indexOf("rtp"), this.attributes = {
                  unrecognized: [],
                  candidates: [],
                  extmaps: [],
                  fingerprints: [],
                  imageattr: [],
                  msids: [],
                  remoteCandidatesList: [],
                  rids: [],
                  ssrcs: [],
                  ssrcGroups: [],
                  rtcpFeedbackWildcards: [],
                  payloads: []
                };
              }
              parse(e) {
                if (this.digested) throw new Error("already digested");
                try {
                  switch (e.attField) {
                    case "extmap":
                      this.parseExtmap(e);
                      break;
                    case "setup":
                      this.parseSetup(e);
                      break;
                    case "ice-ufrag":
                      this.parseIceUfrag(e);
                      break;
                    case "ice-pwd":
                      this.parseIcePwd(e);
                      break;
                    case "ice-options":
                      this.parseIceOptions(e);
                      break;
                    case "candidate":
                      this.parseCandidate(e);
                      break;
                    case "remote-candidate":
                      this.parseRemoteCandidate(e);
                      break;
                    case "end-of-candidates":
                      this.parseEndOfCandidates();
                      break;
                    case "fingerprint":
                      this.parseFingerprint(e);
                      break;
                    case "rtpmap":
                      this.parseRtpmap(e);
                      break;
                    case "ptime":
                      this.parsePtime(e);
                      break;
                    case "maxptime":
                      this.parseMaxPtime(e);
                      break;
                    case "sendrecv":
                    case "recvonly":
                    case "sendonly":
                    case "inactive":
                      this.parseDirection(e);
                      break;
                    case "ssrc":
                      this.parseSSRC(e);
                      break;
                    case "fmtp":
                      this.parseFmtp(e);
                      break;
                    case "rtcp-fb":
                      this.parseRtcpFb(e);
                      break;
                    case "rtcp-mux":
                      this.parseRTCPMux();
                      break;
                    case "rtcp-mux-only":
                      this.parseRTCPMuxOnly();
                      break;
                    case "rtcp-rsize":
                      this.parseRTCPRsize();
                      break;
                    case "rtcp":
                      this.parseRTCP(e);
                      break;
                    case "mid":
                      this.parseMid(e);
                      break;
                    case "msid":
                      this.parseMsid(e);
                      break;
                    case "imageattr":
                      this.parseImageAttr(e);
                      break;
                    case "rid":
                      this.parseRid(e);
                      break;
                    case "simulcast":
                      this.parseSimulcast(e);
                      break;
                    case "sctp-port":
                      this.parseSctpPort(e);
                      break;
                    case "max-message-size":
                      this.parseMaxMessageSize(e);
                      break;
                    case "ssrc-group":
                      this.parseSSRCGroup(e);
                      break;
                    default:
                      e.ignored = !0, this.attributes.unrecognized.push(e);
                  }
                } catch (t) {
                  throw console.error("parsing media attribute ".concat(e.attField, " error, \"a=").concat(e.attField, ":").concat(e.attValue, "\"")), t;
                }
                if (!e.ignored && e.attValue && !this.atEnd(e)) throw new Error("attribute parsing error");
              }
              parseCandidate(e) {
                const t = this.extractOneOrMore(e, E, [1, 32]);
                this.consumeAttributeSpace(e);
                const i = this.extractOneOrMore(e, a, [1, 5]);
                this.consumeAttributeSpace(e);
                const n = this.extract(e, this.consumeToken);
                this.consumeAttributeSpace(e);
                const r = this.extractOneOrMore(e, a, [1, 10]);
                this.consumeAttributeSpace(e);
                const s = this.extract(e, this.consumeAddress);
                this.consumeAttributeSpace(e);
                const d = this.extract(e, this.consumePort);
                this.consumeAttributeSpace(e), this.extract(e, this.consume, "typ"), this.consumeAttributeSpace(e);
                const u = {
                  foundation: t,
                  componentId: i,
                  transport: n,
                  priority: r,
                  connectionAddress: s,
                  port: d,
                  type: this.extract(e, this.consumeToken),
                  extension: {}
                };
                for (this.peek(e, " raddr") && (this.extract(e, this.consume, " raddr"), this.consumeAttributeSpace(e), u.relAddr = this.extract(e, this.consumeAddress)), this.peek(e, " rport") && (this.extract(e, this.consume, " rport"), this.consumeAttributeSpace(e), u.relPort = this.extract(e, this.consumePort)); this.peekChar(e) === o;) {
                  this.consumeAttributeSpace(e);
                  const t = this.extract(e, this.consumeToken);
                  this.consumeAttributeSpace(e), u.extension[t] = this.extractOneOrMore(e, c);
                }
                this.attributes.candidates.push(u);
              }
              parseRemoteCandidate(e) {
                const t = [];
                for (;;) {
                  const i = this.extractOneOrMore(e, a, [1, 5]);
                  this.consumeAttributeSpace(e);
                  const n = this.extract(e, this.consumeAddress);
                  this.consumeAttributeSpace(e);
                  const r = this.extract(e, this.consumePort);
                  t.push({
                    componentId: i,
                    connectionAddress: n,
                    port: r
                  });
                  try {
                    this.consumeAttributeSpace(e);
                  } catch (e) {
                    break;
                  }
                }
                this.attributes.remoteCandidatesList.push(t);
              }
              parseEndOfCandidates() {
                if (this.attributes.endOfCandidates) throw new Error("must be only one line of end-of-candidates");
                this.attributes.endOfCandidates = !0;
              }
              parseRtpmap(e) {
                const t = this.extract(e, this.consumeToken);
                this.consumeAttributeSpace(e);
                const i = this.extract(e, this.consumeTill, "/");
                this.extract(e, this.consume, "/");
                const n = {
                  encodingName: i,
                  clockRate: this.extractOneOrMore(e, a)
                };
                this.atEnd(e) || "/" !== this.peekChar(e) || (this.extract(e, this.consume, "/"), n.encodingParameters = parseInt(this.extract(e, this.consumeTill), 10));
                const r = this.attributes.payloads.find(e => e.payloadType === parseInt(t, 10));
                r ? r.rtpMap = n : this.attributes.payloads.push({
                  payloadType: parseInt(t, 10),
                  rtpMap: n,
                  rtcpFeedbacks: []
                });
              }
              parsePtime(e) {
                if (this.attributes.ptime) throw new Error("must be only one line of ptime");
                this.attributes.ptime = this.extract(e, this.consumeTill);
              }
              parseMaxPtime(e) {
                if (this.attributes.maxPtime) throw new Error("must be only one line of ptime");
                this.attributes.maxPtime = this.extract(e, this.consumeTill);
              }
              parseDirection(e) {
                if (this.attributes.direction) throw new Error("must be only one line of direction info");
                this.attributes.direction = e.attField;
              }
              parseSSRC(e) {
                const t = this.extractOneOrMore(e, a);
                this.consumeAttributeSpace(e);
                const i = this.extract(e, this.consumeTill, ":");
                let n;
                ":" === this.peekChar(e) && (this.extract(e, this.consume, ":"), n = this.extract(e, this.consumeTill));
                const r = this.attributes.ssrcs.find(e => e.ssrcId === parseInt(t, 10));
                r ? r.attributes[i] = n : this.attributes.ssrcs.push({
                  ssrcId: parseInt(t, 10),
                  attributes: {
                    [i]: n
                  }
                });
              }
              parseFmtp(e) {
                const t = this.extract(e, this.consumeTill, o);
                this.consumeAttributeSpace(e);
                const i = this.extract(e, this.consumeTill),
                  n = {};
                i.split(";").forEach(e => {
                  let [t, i] = e.split("=");
                  t = t.trim();
                  const r = "string" == typeof i ? i.trim() : null;
                  "string" == typeof t && t.length > 0 && (n[t] = r);
                });
                const r = this.attributes.payloads.find(e => e.payloadType === parseInt(t, 10));
                r ? r.fmtp = {
                  parameters: n
                } : this.attributes.payloads.push({
                  payloadType: parseInt(t, 10),
                  rtcpFeedbacks: [],
                  fmtp: {
                    parameters: n
                  }
                });
              }
              parseFmtParameters(e) {
                const t = {},
                  i = this.extract(e, this.consumeTill, "=");
                e._cur++;
                const n = this.extract(e, this.consumeTill, ";");
                for (t[i] = n; ";" === e.attValue[e._cur];) {
                  const i = this.extract(e, this.consumeTill, "=");
                  e._cur++;
                  const n = this.extract(e, this.consumeTill, ";");
                  t[i] = n;
                }
                return t;
              }
              parseRtcpFb(e) {
                let t = "";
                t = "*" === this.peekChar(e) ? this.extract(e, this.consume, "*") : this.extract(e, this.consumeTill, o), this.consumeAttributeSpace(e);
                const i = this.extract(e, this.consumeTill, o);
                let n;
                switch (i) {
                  case "trr-int":
                    n = {
                      type: i,
                      interval: this.extract(e, this.consumeTill)
                    };
                    break;
                  case "ack":
                  case "nack":
                  default:
                    {
                      const t = {
                        type: i
                      };
                      this.peekChar(e) === o && (this.consumeAttributeSpace(e), t.parameter = this.extract(e, this.consumeToken), this.peekChar(e) === o && (t.additional = this.extract(e, this.consumeTill))), n = t;
                    }
                }
                if ("*" === t) this.attributes.rtcpFeedbackWildcards.push(n);else {
                  const e = this.attributes.payloads.find(e => e.payloadType === parseInt(t, 10));
                  e ? e.rtcpFeedbacks.push(n) : this.attributes.payloads.push({
                    payloadType: parseInt(t, 10),
                    rtcpFeedbacks: [n]
                  });
                }
              }
              parseRTCPMux() {
                if (this.attributes.rtcpMux) throw new Error("must be single line of rtcp-mux");
                this.attributes.rtcpMux = !0;
              }
              parseRTCPMuxOnly() {
                if (this.attributes.rtcpMuxOnly) throw new Error("must be single line of rtcp-only");
                this.attributes.rtcpMuxOnly = !0;
              }
              parseRTCPRsize() {
                if (this.attributes.rtcpRsize) throw new Error("must be single line of rtcp-rsize");
                this.attributes.rtcpRsize = !0;
              }
              parseRTCP(e) {
                if (this.attributes.rtcp) throw new Error("must be single line of rtcp");
                const t = {
                  port: this.extract(e, this.consumePort)
                };
                this.peekChar(e) === o && (this.consumeAttributeSpace(e), t.netType = this.extractOneOrMore(e, u), this.consumeAttributeSpace(e), t.addressType = this.extractOneOrMore(e, u), this.consumeAttributeSpace(e), t.address = this.extract(e, this.consumeAddress)), this.attributes.rtcp = t;
              }
              parseMsid(e) {
                const t = {
                  id: this.extractOneOrMore(e, u, [1, 64])
                };
                this.peekChar(e) === o && (this.consumeAttributeSpace(e), t.appdata = this.extractOneOrMore(e, u, [1, 64])), this.attributes.msids.push(t);
              }
              parseImageAttr(e) {
                this.attributes.imageattr.push(e.attValue);
              }
              parseRid(e) {
                const t = this.extractOneOrMore(e, e => h(e) || a(e) || "_" === e || "-" === e);
                this.consumeAttributeSpace(e);
                const i = {
                  id: t,
                  direction: this.extract(e, this.consumeToken),
                  params: []
                };
                if (this.peekChar(e) === o) {
                  if (this.consumeAttributeSpace(e), this.peek(e, "pt=")) {
                    this.extract(e, this.consume, "pt=");
                    const t = [];
                    for (;;) {
                      const i = this.extract(e, this.consumeToken);
                      t.push(i);
                      try {
                        this.extract(e, this.consume, ",");
                      } catch (e) {
                        break;
                      }
                    }
                    i.payloads = t, this.peekChar(e) === o && this.extract(e, this.consume, o);
                  }
                  for (;;) {
                    const t = this.extract(e, this.consumeToken);
                    switch (t) {
                      case "depend":
                        {
                          const n = {
                            type: t,
                            rids: this.extract(e, this.consume, "=").split(",")
                          };
                          i.params.push(n);
                          break;
                        }
                      case "max-width":
                      case "height-width":
                      case "max-fps":
                      case "max-fs":
                      case "max-br":
                      case "max-pps":
                      case "max-bpp":
                      default:
                        {
                          const n = {
                            type: t
                          };
                          "=" === this.peekChar(e) && (this.extract(e, this.consume, "="), n.val = this.extract(e, this.consumeTill, ";")), i.params.push(n);
                        }
                    }
                    try {
                      this.extract(e, this.consume, ";");
                    } catch (e) {
                      break;
                    }
                  }
                }
                this.attributes.rids.push(i);
              }
              parseSimulcast(e) {
                if (this.attributes.simulcast) throw new Error("must be single line of simulcast");
                this.attributes.simulcast = e.attValue, this.extract(e, this.consumeTill);
              }
              parseSctpPort(e) {
                this.attributes.sctpPort = this.extractOneOrMore(e, a, [1, 5]);
              }
              parseMaxMessageSize(e) {
                this.attributes.maxMessageSize = this.extractOneOrMore(e, a, [1, void 0]);
              }
              digest() {
                return this.digested = !0, this.attributes;
              }
              parseMid(e) {
                this.attributes.mid = this.extract(e, this.consumeToken);
              }
              parseSSRCGroup(e) {
                const t = this.extract(e, this.consumeToken),
                  i = [];
                for (;;) try {
                  this.consumeAttributeSpace(e);
                  const t = this.extract(e, this.consumeInteger);
                  i.push(parseInt(t, 10));
                } catch (e) {
                  break;
                }
                this.attributes.ssrcGroups.push({
                  semantic: t,
                  ssrcIds: i
                });
              }
            }
            function A(e, t, i) {
              return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = i, e;
            }
            class O {
              constructor() {
                A(this, "eol", r);
              }
              print(e, t) {
                let i = "";
                return t && (this.eol = t), i += this.printVersion(e.version), i += this.printOrigin(e.origin), i += this.printSessionName(e.sessionName), i += this.printInformation(e.information), i += this.printUri(e.uri), i += this.printEmail(e.emails), i += this.printPhone(e.phones), i += this.printConnection(e.connection), i += this.printBandwidth(e.bandwidths), i += this.printTimeFields(e.timeFields), i += this.printKey(e.key), i += this.printSessionAttributes(e.attributes), i += this.printMediaDescription(e.mediaDescriptions), i;
              }
              printVersion(e) {
                return "v=".concat(e).concat(this.eol);
              }
              printOrigin(e) {
                return "o=".concat(e.username, " ").concat(e.sessId, " ").concat(e.sessVersion, " ").concat(e.nettype, " ").concat(e.addrtype, " ").concat(e.unicastAddress).concat(this.eol);
              }
              printSessionName(e) {
                return e ? "s=".concat(e).concat(this.eol) : "";
              }
              printInformation(e) {
                return e ? "i=".concat(e).concat(this.eol) : "";
              }
              printUri(e) {
                return e ? "u=".concat(e).concat(this.eol) : "";
              }
              printEmail(e) {
                let t = "";
                for (const i of e) t += "e=".concat(i).concat(this.eol);
                return t;
              }
              printPhone(e) {
                let t = "";
                for (const i of e) t += "e=".concat(i).concat(this.eol);
                return t;
              }
              printConnection(e) {
                return e ? "c=".concat(e.nettype, " ").concat(e.addrtype, " ").concat(e.address).concat(this.eol) : "";
              }
              printBandwidth(e) {
                let t = "";
                for (const i of e) t += "b=".concat(i.bwtype, ":").concat(i.bandwidth).concat(this.eol);
                return t;
              }
              printTimeFields(e) {
                let t = "";
                for (const i of e) {
                  t += "t=".concat(i.time.startTime, " ").concat(i.time.startTime).concat(this.eol);
                  for (const e of i.repeats) t += "r=".concat(e.repeatInterval, " ").concat(e.typedTimes.join(" ")).concat(this.eol);
                  i.zoneAdjustments && (t += "z=", t += "z=".concat(i.zoneAdjustments.map(e => "".concat(e.time, " ").concat(e.back ? "-" : "", " ").concat(e.typedTime)).join(" ")).concat(this.eol), t += this.eol);
                }
                return t;
              }
              printKey(e) {
                return e ? "k=".concat(e).concat(this.eol) : "";
              }
              printAttributes(e) {
                let t = "";
                for (const i of e) t += "a=".concat(i.attField).concat(i.attValue ? ":".concat(i.attValue) : "").concat(this.eol);
                return t;
              }
              printMediaDescription(e) {
                let t = "";
                for (const i of e) t += this.printMedia(i.media), t += this.printInformation(i.information), t += this.printConnections(i.connections), t += this.printBandwidth(i.bandwidths), t += this.printKey(i.key), t += this.printMediaAttributes(i);
                return t;
              }
              printConnections(e) {
                let t = "";
                for (const i of e) t += this.printConnection(i);
                return t;
              }
              printMedia(e) {
                return "m=".concat(e.mediaType, " ").concat(e.port, " ").concat(e.protos.join("/"), " ").concat(e.fmts.join(" ")).concat(this.eol);
              }
              printSessionAttributes(e) {
                return new b(this.eol).print(e);
              }
              printMediaAttributes(e) {
                return new w(this.eol).print(e);
              }
            }
            class N {
              constructor(e) {
                A(this, "eol", void 0), this.eol = e;
              }
              printIceUfrag(e) {
                return void 0 === e ? "" : "a=ice-ufrag:".concat(e).concat(this.eol);
              }
              printIcePwd(e) {
                return void 0 === e ? "" : "a=ice-pwd:".concat(e).concat(this.eol);
              }
              printIceOptions(e) {
                return void 0 === e ? "" : "a=ice-options:".concat(e.join(o)).concat(this.eol);
              }
              printFingerprints(e) {
                return e.length > 0 ? e.map(e => "a=fingerprint:".concat(e.hashFunction).concat(o).concat(e.fingerprint)).join(this.eol) + this.eol : "";
              }
              printExtmap(e) {
                return e.map(e => "a=extmap:".concat(e.entry).concat(e.direction ? "/".concat(e.direction) : "").concat(o).concat(e.extensionName).concat(e.extensionAttributes ? "".concat(o).concat(e.extensionAttributes) : "").concat(this.eol)).join("");
              }
              printSetup(e) {
                return void 0 === e ? "" : "a=setup:".concat(e).concat(this.eol);
              }
              printUnrecognized(e) {
                return e.map(e => "a=".concat(e.attField).concat(e.attValue ? ":".concat(e.attValue) : "").concat(this.eol)).join("");
              }
            }
            class b extends N {
              print(e) {
                let t = "";
                return t += this.printGroups(e.groups), t += this.printMsidSemantic(e.msidSemantic), t += this.printIceLite(e.iceLite), t += this.printIceUfrag(e.iceUfrag), t += this.printIcePwd(e.icePwd), t += this.printIceOptions(e.iceOptions), t += this.printFingerprints(e.fingerprints), t += this.printSetup(e.setup), t += this.printTlsId(e.tlsId), t += this.printIdentity(e.identities), t += this.printExtmap(e.extmaps), t += this.printUnrecognized(e.unrecognized), t;
              }
              printGroups(e) {
                let t = "";
                return e.length > 0 && (t += e.map(e => "a=group:".concat(e.semantic).concat(e.identificationTag.map(e => "".concat(o).concat(e)).join("")).concat(this.eol)).join("")), t;
              }
              printIceLite(e) {
                return void 0 === e ? "" : "a=ice-lite" + this.eol;
              }
              printTlsId(e) {
                return e ? "a=tls-id:".concat(e).concat(this.eol) : "";
              }
              printIdentity(e) {
                return 0 === e.length ? "" : e.map(e => "a=identity:".concat(e.assertionValue).concat(e.extensions.map(e => "".concat(o).concat(e.name).concat(e.value ? "=".concat(e.value) : "")))).join(this.eol) + this.eol;
              }
              printMsidSemantic(e) {
                if (!e) return "";
                let t = "a=msid-semantic:".concat(e.semantic);
                return e.applyForAll ? t += "".concat(o, "*") : e.identifierList.length > 0 && (t += e.identifierList.map(e => "".concat(o).concat(e))), t + this.eol;
              }
            }
            class w extends N {
              print(e) {
                const t = e.attributes;
                let i = "";
                return i += this.printRTCP(t.rtcp), i += this.printIceUfrag(t.iceUfrag), i += this.printIcePwd(t.icePwd), i += this.printIceOptions(t.iceOptions), i += this.printCandidates(t.candidates), i += this.printRemoteCandidatesList(t.remoteCandidatesList), i += this.printEndOfCandidates(t.endOfCandidates), i += this.printFingerprints(t.fingerprints), i += this.printSetup(t.setup), i += this.printMid(t.mid), i += this.printExtmap(t.extmaps), i += this.printRTPRelated(t), i += this.printPtime(t.ptime), i += this.printMaxPtime(t.maxPtime), i += this.printDirection(t.direction), i += this.printSSRCGroups(t.ssrcGroups), i += this.printSSRC(t.ssrcs), i += this.printRTCPMux(t.rtcpMux), i += this.printRTCPMuxOnly(t.rtcpMuxOnly), i += this.printRTCPRsize(t.rtcpRsize), i += this.printMSId(t.msids), i += this.printImageattr(t.imageattr), i += this.printRid(t.rids), i += this.printSimulcast(t.simulcast), i += this.printSCTPPort(t.sctpPort), i += this.printMaxMessageSize(t.maxMessageSize), i += this.printUnrecognized(t.unrecognized), i;
              }
              printCandidates(e) {
                return e.map(e => "a=candidate:".concat(e.foundation).concat(o).concat(e.componentId).concat(o).concat(e.transport).concat(o).concat(e.priority).concat(o).concat(e.connectionAddress).concat(o).concat(e.port).concat(o, "typ").concat(o).concat(e.type).concat(e.relAddr ? "".concat(o, "raddr").concat(o).concat(e.relAddr) : "").concat(e.relPort ? "".concat(o, "rport").concat(o).concat(e.relPort) : "").concat(Object.keys(e.extension).map(t => "".concat(o).concat(t).concat(o).concat(e.extension[t])).join("")).concat(this.eol)).join("");
              }
              printRemoteCandidatesList(e) {
                return e.map(e => "a=remote-candidates:".concat(e.join(o)).concat(this.eol)).join("");
              }
              printEndOfCandidates(e) {
                return void 0 === e ? "" : "a=end-of-candidates" + this.eol;
              }
              printRTPRelated(e) {
                if (!e.payloads) return "";
                const t = e.payloads;
                let i = "";
                i += e.rtcpFeedbackWildcards.map(e => this.printRTCPFeedback("*", e)).join("");
                for (const e of t) i += this.printRtpMap(e.payloadType, e.rtpMap), i += this.printFmtp(e.payloadType, e.fmtp), i += e.rtcpFeedbacks.map(t => this.printRTCPFeedback(e.payloadType, t)).join("");
                return i;
              }
              printFmtp(e, t) {
                if (!t) return "";
                const i = Object.keys(t.parameters);
                return 1 === i.length && null === t.parameters[i[0]] ? "a=fmtp:".concat(e).concat(o).concat(i[0]).concat(this.eol) : "a=fmtp:".concat(e).concat(o).concat(Object.keys(t.parameters).map(e => "".concat(e, "=").concat(t.parameters[e])).join(";")).concat(this.eol);
              }
              printRtpMap(e, t) {
                return t ? "a=rtpmap:".concat(e).concat(o).concat(t.encodingName, "/").concat(t.clockRate).concat(t.encodingParameters ? "/".concat(t.encodingParameters) : "").concat(this.eol) : "";
              }
              printRTCPFeedback(e, t) {
                let i = "a=rtcp-fb:".concat(e).concat(o),
                  n = t;
                switch (n.type) {
                  case "trr-int":
                    i += "ttr-int".concat(o).concat(n.interval);
                    break;
                  case "ack":
                  case "nack":
                  default:
                    n = n, i += "".concat(n.type), n.parameter && (i += "".concat(o).concat(n.parameter), n.additional && (i += "".concat(o).concat(n.additional)));
                }
                return i + this.eol;
              }
              printPtime(e) {
                return void 0 === e ? "" : "a=ptime:".concat(e).concat(this.eol);
              }
              printMaxPtime(e) {
                return void 0 === e ? "" : "a=maxptime:".concat(e).concat(this.eol);
              }
              printDirection(e) {
                return void 0 === e ? "" : "a=".concat(e).concat(this.eol);
              }
              printSSRC(e) {
                return e.map(e => Object.keys(e.attributes).map(t => "a=ssrc:".concat(e.ssrcId.toString(10)).concat(o).concat(t).concat(e.attributes[t] ? ":".concat(e.attributes[t]) : "").concat(this.eol)).join("")).join("");
              }
              printRTCPMux(e) {
                return void 0 === e ? "" : "a=rtcp-mux".concat(this.eol);
              }
              printRTCPMuxOnly(e) {
                return void 0 === e ? "" : "a=rtcp-mux-only".concat(this.eol);
              }
              printRTCPRsize(e) {
                return void 0 === e ? "" : "a=rtcp-rsize".concat(this.eol);
              }
              printRTCP(e) {
                if (void 0 === e) return "";
                let t = "a=rtcp:".concat(e.port);
                return e.netType && (t += "".concat(o).concat(e.netType)), e.addressType && (t += "".concat(o).concat(e.addressType)), e.address && (t += "".concat(o).concat(e.address)), t + this.eol;
              }
              printMSId(e) {
                return e.map(e => "a=msid:".concat(e.id).concat(e.appdata ? "".concat(o).concat(e.appdata) : "").concat(this.eol)).join("");
              }
              printImageattr(e) {
                return e.map(e => "a=imageattr:".concat(e).concat(this.eol)).join("");
              }
              printRid(e) {
                return e.map(e => {
                  let t = "a=rid:".concat(e.id).concat(o).concat(e.direction);
                  return e.payloads && (t += "".concat(o, "pt=").concat(e.payloads.join(","))), e.params.length > 0 && (t += "".concat(o).concat(e.params.map(e => "depend" === e.type ? "depend=".concat(e.rids.join(",")) : "".concat(e.type, "=").concat(e.val)).join(";"))), t + this.eol;
                }).join("");
              }
              printSimulcast(e) {
                return void 0 === e ? "" : "a=simulcast:".concat(e).concat(this.eol);
              }
              printSCTPPort(e) {
                return void 0 === e ? "" : "a=sctp-port:".concat(e).concat(this.eol);
              }
              printMaxMessageSize(e) {
                return void 0 === e ? "" : "a=max-message-size:".concat(e).concat(this.eol);
              }
              printMid(e) {
                return void 0 === e ? "" : "a=mid:".concat(e).concat(this.eol);
              }
              printSSRCGroups(e) {
                return e.map(e => "a=ssrc-group:".concat(e.semantic).concat(e.ssrcIds.map(e => "".concat(o).concat(e.toString(10))).join("")).concat(this.eol)).join("");
              }
            }
            function D(e) {
              return new I().parse(e);
            }
            function P(e, t) {
              return new O().print(e, t);
            }
          }
        },
        t = {};
      function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
          exports: {}
        };
        return e[n](r, r.exports, i), r.exports;
      }
      return i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
      }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, i(8);
    })();
  }(UO);
  class iN {
    constructor(e) {
      _p(this, "sessionDesc", void 0), _p(this, "localCapabilities", void 0), _p(this, "rtpCapabilities", void 0), _p(this, "candidates", void 0), _p(this, "iceParameters", void 0), _p(this, "dtlsParameters", void 0), _p(this, "setup", void 0), _p(this, "currentMidIndex", void 0), _p(this, "cname", void 0), e = uC(e);
      const {
          remoteIceParameters: t,
          remoteDtlsParameters: i,
          candidates: n,
          remoteRTPCapabilities: r,
          remoteSetup: o,
          localCapabilities: s,
          sdkCodec: a,
          cname: c
        } = e,
        d = UO.exports.parse("v=0\no=- 0 0 IN IP4 127.0.0.1\ns=AgoraGateway\nt=0 0\na=group:BUNDLE audio video\na=msid-semantic: WMS\na=ice-lite\nm=audio 9 UDP/TLS/RTP/SAVPF 0\nc=IN IP4 127.0.0.1\na=rtcp:9 IN IP4 0.0.0.0\na=sendrecv\na=rtcp-mux\na=rtcp-rsize\na=mid:audio\nm=video 9 UDP/TLS/RTP/SAVPF 0\nc=IN IP4 127.0.0.1\na=rtcp:9 IN IP4 0.0.0.0\na=sendrecv\na=rtcp-mux\na=rtcp-rsize\na=mid:video\n");
      this.rtpCapabilities = r, this.candidates = n, this.iceParameters = t, this.dtlsParameters = i, this.setup = o, this.localCapabilities = s, this.cname = c;
      for (let e = 0; e < d.mediaDescriptions.length; e++) {
        const s = d.mediaDescriptions[e];
        s.attributes.iceUfrag = t.iceUfrag, s.attributes.icePwd = t.icePwd, s.attributes.fingerprints = i.fingerprints, s.attributes.candidates = n, s.attributes.setup = o, "video" === s.media.mediaType && (s.media.fmts = r.videoCodecs.map(e => e.payloadType.toString(10)), s.attributes.payloads = r.videoCodecs, s.attributes.extmaps = r.videoExtensions), "audio" === s.media.mediaType && (s.media.fmts = r.audioCodecs.map(e => e.payloadType.toString(10)), s.attributes.payloads = r.audioCodecs, s.attributes.extmaps = r.audioExtensions), d.mediaDescriptions[e] = this.mungMediaDesc(s);
      }
      this.sessionDesc = d, this.currentMidIndex = d.mediaDescriptions.length - 1;
    }
    toString() {
      return UO.exports.print(this.sessionDesc);
    }
    send(e, t, i) {
      const {
          ssrcs: n,
          ssrcGroups: r
        } = WO(t, this.cname),
        o = this.sessionDesc.mediaDescriptions.find(t => e === AS.VIDEO ? "video" === t.media.mediaType : "audio" === t.media.mediaType),
        s = n[0].attributes.label,
        a = n[0].attributes.mslabel;
      return o.attributes.ssrcs = o.attributes.ssrcs.concat(n), o.attributes.ssrcGroups = o.attributes.ssrcGroups.concat(r), {
        id: s,
        mslabel: a
      };
    }
    batchSend(e) {
      return e.map(e => {
        let {
          kind: t,
          ssrcMsg: i
        } = e;
        return this.send(t, i, void 0);
      });
    }
    stopSending(e) {
      this.sessionDesc.mediaDescriptions.forEach(t => {
        const i = [],
          n = [],
          r = [];
        t.attributes.ssrcs.forEach(t => {
          e.includes(t.attributes.label || "") ? r.push(t) : i.push(t);
        }), t.attributes.ssrcGroups.forEach(e => {
          r.map(e => e.ssrcId).includes(e.ssrcIds[0]) || n.push(e);
        }), t.attributes.ssrcs = i, t.attributes.ssrcGroups = n;
      });
    }
    mute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.mute."));
      t.attributes.direction = "inactive";
    }
    unmute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.unmute."));
      t.attributes.direction = "sendonly";
    }
    receive(e, t, i) {
      e.forEach((e, t) => {
        const i = e._mediaStreamTrack,
          n = this.sessionDesc.mediaDescriptions.findIndex(e => e.attributes.mid === i.kind),
          r = this.mungRecvMediaDsec(this.sessionDesc.mediaDescriptions[n], e);
        this.sessionDesc.mediaDescriptions[n] = r;
      });
    }
    stopReceiving(e) {}
    updateCandidates(e) {
      e === OS.TCP ? this.candidates.forEach(e => {
        -1 === this.candidates.findIndex(t => "tcp" === t.transport && t.connectionAddress === e.connectionAddress && t.port === e.port) && this.candidates.push(tN(tN({}, e), {}, {
          foundation: "tcpcandidate",
          priority: Number(e.priority) - 1 + "",
          transport: "tcp",
          port: Number(e.port) + 90 + ""
        }));
      }) : this.candidates = this.candidates.filter(e => "tcp" !== e.transport);
      for (const e of this.sessionDesc.mediaDescriptions) e.attributes.candidates = this.candidates;
    }
    restartICE(e) {
      e = uC(e), this.iceParameters = e, this.sessionDesc.mediaDescriptions.forEach(t => {
        t.attributes.iceUfrag = e.iceUfrag, t.attributes.icePwd = e.icePwd;
      });
    }
    predictReceivingMids(e) {
      const t = [];
      for (let i = 0; i < e; i++) t.push((this.currentMidIndex + i + 1).toString(10));
      return t;
    }
    mungRecvMediaDsec(e, t) {
      const i = uC(e);
      return HO(i, t), YO(i, t), i;
    }
    updateRecvMedia(e, t) {
      const i = this.sessionDesc.mediaDescriptions.findIndex(t => t.attributes.mid === e);
      if (-1 !== i) {
        const e = this.mungRecvMediaDsec(this.sessionDesc.mediaDescriptions[i], t);
        this.sessionDesc.mediaDescriptions[i] = e;
      }
    }
    bumpMid(e) {
      this.currentMidIndex += e;
    }
    updateTrackLabel(e, t, i) {
      const n = this.sessionDesc.mediaDescriptions.find(t => e === AS.VIDEO ? "video" === t.attributes.mid : "audio" === t.attributes.mid);
      if (n) {
        const e = n.attributes.ssrcs.find(e => e.attributes.label === t);
        var r;
        if (e) e.attributes.label = i, null === (r = e.attributes.msid) || void 0 === r || r.replace(t, i);
      }
    }
    mungMediaDesc(e) {
      const t = uC(e);
      return KO(t), function (e) {
        const t = e.attributes.extmaps.find(e => "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.extensionName);
        t && e.attributes.extmaps.splice(e.attributes.extmaps.indexOf(t), 1), e.attributes.payloads.forEach(e => {
          const t = e.rtcpFeedbacks.findIndex(e => "transport-cc" === e.type);
          -1 !== t && e.rtcpFeedbacks.splice(t, 1);
        });
      }(t), t;
    }
    getSSRC(e) {
      for (const t of this.sessionDesc.mediaDescriptions) for (const i of t.attributes.ssrcs) if (i.attributes.label === e) return [i];
    }
  }
  function nN(e) {
    if (Array.isArray(e)) return e.map(e => e);
    if (!rN(e)) return e;
    const t = {};
    for (const i in e) rN(e[i]) || Array.isArray(e[i]) ? t[i] = nN(e[i]) : t[i] = e[i];
    return t;
  }
  function rN(e) {
    return !("object" != typeof e || Array.isArray(e) || !e);
  }
  function oN() {
    const e = navigator.userAgent.toLocaleLowerCase().match(/chrome\/[\d]*/i);
    return e && e[0] ? Number(e[0].split("/")[1]) : null;
  }
  function sN(e) {
    if (!window.RTCStatsReport) return !1;
    return e.getStats() instanceof Sl;
  }
  class aN {
    constructor(e) {
      _p(this, "input", []), _p(this, "size", void 0), this.size = e;
    }
    add(e) {
      this.input.push(e), this.input.length > this.size && this.input.splice(0, 1);
    }
    diffMean() {
      return 0 === this.input.length ? 0 : (this.input[this.input.length - 1] - this.input[0]) / this.input.length;
    }
  }
  const cN = {
      address: "unknown",
      candidateType: "unknown",
      id: "unknown",
      port: 0,
      priority: 0,
      protocol: "unknown",
      type: "unknown"
    },
    dN = {
      timestamp: 0,
      bitrate: {
        actualEncoded: 0,
        transmit: 0
      },
      sendPacketLossRate: 0,
      recvPacketLossRate: 0,
      videoRecv: [],
      videoSend: [],
      audioRecv: [],
      audioSend: [],
      selectedCandidatePair: {
        id: "unknown",
        localCandidate: cN,
        remoteCandidate: cN
      }
    },
    uN = {
      firsCount: 0,
      nacksCount: 0,
      plisCount: 0,
      framesDecodeCount: 0,
      framesDecodeInterval: 0,
      framesDecodeFreezeTime: 0,
      decodeFrameRate: 0,
      bytes: 0,
      packetsLost: 0,
      packetLostRate: 0,
      packets: 0,
      ssrc: 0,
      qpSumPerFrame: 0
    },
    lN = {
      firsCount: 0,
      nacksCount: 0,
      plisCount: 0,
      frameCount: 0,
      bytes: 0,
      packets: 0,
      packetsLost: 0,
      packetLostRate: 0,
      ssrc: 0,
      rttMs: 0,
      qpSumPerFrame: 0
    },
    hN = {
      bytes: 0,
      packets: 0,
      packetsLost: 0,
      packetLostRate: 0,
      ssrc: 0,
      rttMs: 0
    },
    pN = {
      jitterBufferMs: 0,
      jitterMs: 0,
      bytes: 0,
      packetsLost: 0,
      packetLostRate: 0,
      packets: 0,
      ssrc: 0,
      receivedFrames: 0,
      droppedFrames: 0,
      concealedSamples: 0
    };
  function _N(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function EN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _N(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : _N(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class mN {
    constructor(e, t) {
      _p(this, "onFirstVideoReceived", void 0), _p(this, "onFirstVideoDecoded", void 0), _p(this, "onFirstAudioReceived", void 0), _p(this, "onFirstVideoDecodedTimeout", void 0), _p(this, "onFirstAudioDecoded", void 0), _p(this, "onSelectedLocalCandidateChanged", void 0), _p(this, "onSelectedRemoteCandidateChanged", void 0), _p(this, "videoIsReady", !1), _p(this, "videoIsReady2", {}), _p(this, "pc", void 0), _p(this, "options", void 0), _p(this, "intervalTimer", void 0), _p(this, "stats", nN(dN)), _p(this, "isFirstVideoReceived", {}), _p(this, "isFirstVideoDecoded", {}), _p(this, "isFirstAudioReceived", {}), _p(this, "isFirstAudioDecoded", {}), _p(this, "isFirstVideoDecodedTimeout", {}), _p(this, "lossRateWindowStats", []), this.pc = e, this.options = t, this.intervalTimer = window.setInterval(async () => {
        this.updateStats();
      }, this.options.updateInterval);
    }
    getStats() {
      return this.stats;
    }
    getSelectedCandidatePair() {
      return new Sl(e => {
        e({
          local: EN({}, cN),
          remote: EN({}, cN)
        });
      });
    }
    setVideoIsReady(e) {
      this.videoIsReady = e;
    }
    setVideoIsReady2(e, t) {
      this.videoIsReady2[e] = t;
    }
    getVideoIsReady(e) {
      return this.videoIsReady2[e] || !1;
    }
    setIsFirstAudioDecoded(e) {}
    destroy() {
      window.clearInterval(this.intervalTimer), this.pc = void 0;
    }
    calcLossRate(e) {
      this.lossRateWindowStats.push(e), this.lossRateWindowStats.length > this.options.lossRateInterval && this.lossRateWindowStats.splice(0, 1);
      const t = this.lossRateWindowStats.length,
        i = ["videoSend", "audioSend", "videoRecv", "audioRecv"];
      let n = 0,
        r = 0,
        o = 0,
        s = 0;
      for (const a of i) e[a].forEach((e, i) => {
        if (!this.lossRateWindowStats[t - 1][a][i] || !this.lossRateWindowStats[0][a][i]) return;
        const c = this.lossRateWindowStats[t - 1][a][i].packets - this.lossRateWindowStats[0][a][i].packets,
          d = this.lossRateWindowStats[t - 1][a][i].packetsLost - this.lossRateWindowStats[0][a][i].packetsLost;
        "videoSend" === a || "audioSend" === a ? (n += c, o += d) : (r += c, s += d), Number.isNaN(c) || Number.isNaN(c) ? e.packetLostRate = 0 : e.packetLostRate = c <= 0 || d <= 0 ? 0 : d / (c + d);
      });
      e.sendPacketLossRate = n <= 0 || o <= 0 ? 0 : o / (n + o), e.recvPacketLossRate = r <= 0 || s <= 0 ? 0 : s / (r + s);
    }
  }
  function fN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function SN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? fN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : fN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class TN extends mN {
    constructor() {
      super(...arguments), _p(this, "_stats", dN), _p(this, "lastDecodeVideoReceiverStats", new Map());
    }
    async updateStats() {
      const e = await this._getStats(),
        t = this.statsResponsesToObjects(e);
      this._stats = nN(dN);
      const i = t.filter(e => "ssrc" === e.type);
      this.processSSRCStats(i);
      const n = t.find(e => "VideoBwe" === e.type);
      n && this.processBandwidthStats(n), this._stats.timestamp = Date.now(), this.calcLossRate(this._stats), this.stats = this._stats;
    }
    processBandwidthStats(e) {
      this._stats.bitrate = {
        actualEncoded: Number(e.googActualEncBitrate),
        targetEncoded: Number(e.googTargetEncBitrate),
        retransmit: Number(e.googRetransmitBitrate),
        transmit: Number(e.googTransmitBitrate)
      }, this._stats.sendBandwidth = Number(e.googAvailableSendBandwidth);
    }
    processSSRCStats(e) {
      e.forEach(e => {
        const t = e.id.includes("send");
        switch ("".concat(e.mediaType, "_").concat(t ? "send" : "recv")) {
          case "video_send":
            {
              const t = nN(lN);
              t.codec = e.googCodecName, t.adaptionChangeReason = "none", e.googCpuLimitedResolution && (t.adaptionChangeReason = "cpu"), e.googBandwidthLimitedResolution && (t.adaptionChangeReason = "bandwidth"), t.avgEncodeMs = Number(e.googAvgEncodeMs), t.inputFrame = {
                width: Number(e.googFrameWidthInput) || Number(e.googFrameWidthSent),
                height: Number(e.googFrameHeightInput) || Number(e.googFrameHeightSent),
                frameRate: Number(e.googFrameRateInput)
              }, t.sentFrame = {
                width: Number(e.googFrameWidthSent),
                height: Number(e.googFrameHeightSent),
                frameRate: Number(e.googFrameRateInput)
              }, t.firsCount = Number(e.googFirReceived), t.nacksCount = Number(e.googNacksReceived), t.plisCount = Number(e.googPlisReceived), t.frameCount = Number(e.framesEncoded), t.bytes = Number(e.bytesSent), t.packets = Number(e.packetsSent), t.packetsLost = Number(e.packetsLost), t.ssrc = Number(e.ssrc), t.rttMs = Number(e.googRtt || 0), this._stats.videoSend.push(t), this._stats.rtt = t.rttMs;
              break;
            }
          case "video_recv":
            {
              const t = nN(uN),
                i = this.lastDecodeVideoReceiverStats.get(Number(e.ssrc));
              if (t.codec = e.googCodecName, t.targetDelayMs = Number(e.googTargetDelayMs), t.renderDelayMs = Number(e.googRenderDelayMs), t.currentDelayMs = Number(e.googCurrentDelayMs), t.minPlayoutDelayMs = Number(e.googMinPlayoutDelayMs), t.decodeMs = Number(e.googDecodeMs), t.maxDecodeMs = Number(e.googMaxDecodeMs), t.receivedFrame = {
                width: Number(e.googFrameWidthReceived),
                height: Number(e.googFrameHeightReceived),
                frameRate: Number(e.googFrameRateReceived)
              }, t.decodedFrame = {
                width: Number(e.googFrameWidthReceived),
                height: Number(e.googFrameHeightReceived),
                frameRate: Number(e.googFrameRateDecoded)
              }, t.decodeFrameRate = Number(e.googFrameRateDecoded), t.outputFrame = {
                width: Number(e.googFrameWidthReceived),
                height: Number(e.googFrameHeightReceived),
                frameRate: Number(e.googFrameRateOutput)
              }, t.jitterBufferMs = Number(e.googJitterBufferMs), t.firsCount = Number(e.googFirsSent), t.nacksCount = Number(e.googNacksSent), t.plisCount = Number(e.googPlisSent), t.framesDecodeCount = Number(e.framesDecoded), t.bytes = Number(e.bytesReceived), t.packets = Number(e.packetsReceived), t.packetsLost = Number(e.packetsLost), t.ssrc = Number(e.ssrc), t.packets > 0 && !this.isFirstVideoReceived[t.ssrc] && (this.onFirstVideoReceived && this.onFirstVideoReceived(t.ssrc), this.isFirstVideoReceived[t.ssrc] = !0), t.framesDecodeCount > 0 && !this.isFirstVideoDecoded[t.ssrc] && (this.onFirstVideoDecoded && this.onFirstVideoDecoded(t.ssrc, t.decodedFrame.width, t.decodedFrame.height), this.isFirstVideoDecoded[t.ssrc] = !0), i) {
                const n = i.stats,
                  r = Date.now() - i.lts;
                t.framesDecodeFreezeTime = n.framesDecodeFreezeTime, t.framesDecodeInterval = n.framesDecodeInterval, t.framesDecodeCount > n.framesDecodeCount && this.isFirstVideoDecoded[t.ssrc] ? (i.lts = Date.now(), t.framesDecodeInterval = r, t.framesDecodeInterval >= this.options.freezeRateLimit && (this.getVideoIsReady(parseInt(e.ssrc, 10)) ? t.framesDecodeFreezeTime += t.framesDecodeInterval : this.setVideoIsReady2(parseInt(e.ssrc, 10), !0))) : t.framesDecodeCount < i.stats.framesDecodeCount && (t.framesDecodeInterval = 0);
              }
              this.lastDecodeVideoReceiverStats.set(t.ssrc, {
                stats: SN({}, t),
                lts: Date.now()
              }), this._stats.videoRecv.push(t);
              break;
            }
          case "audio_recv":
            {
              const t = nN(pN);
              t.codec = e.googCodecName, t.outputLevel = Math.abs(Number(e.audioOutputLevel)) / 32767, t.decodingCNG = Number(e.googDecodingCNG), t.decodingCTN = Number(e.googDecodingCTN), t.decodingCTSG = Number(e.googDecodingCTSG), t.decodingNormal = Number(e.googDecodingNormal), t.decodingPLC = Number(e.googDecodingPLC), t.decodingPLCCNG = Number(e.googDecodingPLCCNG), t.expandRate = Number(e.googExpandRate), t.accelerateRate = Number(e.googAccelerateRate), t.preemptiveExpandRate = Number(e.googPreemptiveExpandRate), t.secondaryDecodedRate = Number(e.googSecondaryDecodedRate), t.speechExpandRate = Number(e.googSpeechExpandRate), t.preferredJitterBufferMs = Number(e.googPreferredJitterBufferMs), t.jitterBufferMs = Number(e.googJitterBufferMs), t.jitterMs = Number(e.googJitterReceived), t.bytes = Number(e.bytesReceived), t.packets = Number(e.packetsReceived), t.packetsLost = Number(e.packetsLost), t.ssrc = Number(e.ssrc), t.receivedFrames = Number(e.googDecodingCTN) || Number(e.packetsReceived), t.droppedFrames = Number(e.googDecodingPLC) + Number(e.googDecodingPLCCNG) || Number(e.packetsLost), t.receivedFrames > 0 && !this.isFirstAudioReceived[t.ssrc] && (this.onFirstAudioReceived && this.onFirstAudioReceived(t.ssrc), this.isFirstAudioReceived[t.ssrc] = !0), t.decodingNormal > 0 && !this.isFirstAudioDecoded[t.ssrc] && (this.onFirstAudioDecoded && this.onFirstAudioDecoded(t.ssrc), this.isFirstAudioDecoded[t.ssrc] = !0), this._stats.audioRecv.push(t);
              break;
            }
          case "audio_send":
            {
              const t = nN(hN);
              t.codec = e.googCodecName, t.inputLevel = Math.abs(Number(e.audioInputLevel)) / 32767, t.aecReturnLoss = Number(e.googEchoCancellationReturnLoss || 0), t.aecReturnLossEnhancement = Number(e.googEchoCancellationReturnLossEnhancement || 0), t.residualEchoLikelihood = Number(e.googResidualEchoLikelihood || 0), t.residualEchoLikelihoodRecentMax = Number(e.googResidualEchoLikelihoodRecentMax || 0), t.bytes = Number(e.bytesSent), t.packets = Number(e.packetsSent), t.packetsLost = Number(e.packetsLost), t.ssrc = Number(e.ssrc), t.rttMs = Number(e.googRtt || 0), this._stats.rtt = t.rttMs, this._stats.audioSend.push(t);
              break;
            }
        }
      });
    }
    _getStats() {
      return new Sl((e, t) => {
        this.pc.getStats(e, t);
      });
    }
    statsResponsesToObjects(e) {
      const t = [];
      return e.result().forEach(e => {
        const i = {
          id: e.id,
          timestamp: e.timestamp.valueOf().toString(),
          type: e.type
        };
        e.names().forEach(t => {
          i[t] = e.stat(t);
        }), t.push(i);
      }), t;
    }
  }
  function gN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function RN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : gN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class IN extends mN {
    constructor() {
      super(...arguments), _p(this, "_stats", dN), _p(this, "report", void 0), _p(this, "lastDecodeVideoReceiverStats", new Map()), _p(this, "lastVideoFramesRecv", new Map()), _p(this, "lastVideoFramesSent", new Map()), _p(this, "lastVideoFramesDecode", new Map()), _p(this, "lastVideoJBDelay", new Map()), _p(this, "lastAudioJBDelay", new Map()), _p(this, "mediaBytesSent", new Map()), _p(this, "mediaBytesRetransmit", new Map()), _p(this, "mediaBytesTargetEncode", new Map()), _p(this, "lastEncoderMs", new Map());
    }
    async updateStats() {
      this.report = await this.pc.getStats(), this._stats = nN(dN), this.report.forEach(e => {
        switch (e.type) {
          case kh.OUTBOUND:
            "audio" === e.mediaType ? this.processAudioOutboundStats(e) : "video" === e.mediaType && this.processVideoOutboundStats(e);
            break;
          case kh.INBOUND:
            "audio" === e.mediaType ? this.processAudioInboundStats(e) : "video" === e.mediaType && this.processVideoInboundStats(e);
            break;
          case kh.TRANSPORT:
            {
              const t = this.report.get(e.selectedCandidatePairId);
              t && this.processCandidatePairStats(t);
              break;
            }
          case kh.CANDIDATE_PAIR:
            e.selected && this.processCandidatePairStats(e);
        }
      }), this.updateSendBitrate(), this._stats.timestamp = Date.now(), this.calcLossRate(this._stats), this.stats = this._stats;
    }
    async getSelectedCandidatePair() {
      const e = await this.pc.getStats(),
        t = {
          local: RN({}, cN),
          remote: RN({}, cN)
        };
      return e.forEach(i => {
        let n;
        if (i.type === kh.TRANSPORT && (n = e.get(i.selectedCandidatePairId)), i.type === kh.CANDIDATE_PAIR && i.selected && (n = i), n) {
          const i = (e, t) => {
            e.type = t.type, e.id = t.id, t.address && (e.address = t.address), t.candidateType && (e.candidateType = t.candidateType), t.port && (e.port = t.port), t.priority && (e.priority = t.priority), t.protocol && (e.protocol = t.protocol), t.relayProtocol && (e.relayProtocol = t.relayProtocol);
          };
          if (n.localCandidateId) {
            const r = e.get(n.localCandidateId);
            r && i(t.local, r);
          }
          if (n.remoteCandidateId) {
            const r = e.get(n.remoteCandidateId);
            r && i(t.remote, r);
          }
        }
      }), t;
    }
    processCandidatePairStats(e) {
      if (this._stats.sendBandwidth = e.availableOutgoingBitrate || 0, e.currentRoundTripTime && (this._stats.rtt = 1000 * e.currentRoundTripTime), this._stats.videoSend.forEach(t => {
        e.currentRoundTripTime && (t.rttMs = 1000 * e.currentRoundTripTime);
      }), this._stats.audioSend.forEach(t => {
        e.currentRoundTripTime && (t.rttMs = 1000 * e.currentRoundTripTime);
      }), this._stats.selectedCandidatePair.id = e.id, e.localCandidateId) {
        const t = this.report.get(e.localCandidateId);
        t && this.processCandidateStats(t);
      }
      if (e.remoteCandidateId) {
        const t = this.report.get(e.remoteCandidateId);
        t && this.processCandidateStats(t);
      }
    }
    processCandidateStats(e) {
      let t;
      e.type === kh.LOCAL_CANDIDATE && (t = this._stats.selectedCandidatePair.localCandidate), e.type === kh.REMOTE_CANDIDATE && (t = this._stats.selectedCandidatePair.remoteCandidate), t && (t.type = e.type, t.id = e.id, e.address && (t.address = e.address), e.candidateType && (t.candidateType = e.candidateType), e.port && (t.port = e.port), e.priority && (t.priority = e.priority), e.protocol && (t.protocol = e.protocol), e.relayProtocol && (t.relayProtocol = e.relayProtocol), e.type === kh.LOCAL_CANDIDATE && this.stats.selectedCandidatePair.localCandidate.id !== t.id && this.onSelectedLocalCandidateChanged && this.onSelectedLocalCandidateChanged(RN({}, t), RN({}, this.stats.selectedCandidatePair.localCandidate)), e.type === kh.REMOTE_CANDIDATE && this.stats.selectedCandidatePair.remoteCandidate.id !== t.id && this.onSelectedRemoteCandidateChanged && this.onSelectedRemoteCandidateChanged(RN({}, t), RN({}, this.stats.selectedCandidatePair.remoteCandidate)));
    }
    processAudioInboundStats(e) {
      let t = this._stats.audioRecv.find(t => t.ssrc === e.ssrc);
      t || (t = nN(pN), this._stats.audioRecv.push(t)), t.ssrc = e.ssrc, t.packets = e.packetsReceived, t.packetsLost = e.packetsLost, t.bytes = e.bytesReceived, t.jitterMs = 1000 * e.jitter, this.processAudioTrackReceiverStats(e, e.trackId, t), e.codecId && (t.codec = this.getCodecFromCodecStats(e.codecId)), t.receivedFrames || (t.receivedFrames = e.packetsReceived), t.droppedFrames || (t.droppedFrames = e.packetsLost), t.receivedFrames > 0 && !this.isFirstAudioReceived[t.ssrc] && (this.onFirstAudioReceived && this.onFirstAudioReceived(t.ssrc), this.isFirstAudioReceived[t.ssrc] = !0), t.outputLevel && t.outputLevel > 0 && !this.isFirstAudioDecoded[t.ssrc] && (this.onFirstAudioDecoded && this.onFirstAudioDecoded(t.ssrc), this.isFirstAudioDecoded[t.ssrc] = !0), "number" == typeof e.concealedSamples && (t.concealedSamples = e.concealedSamples);
    }
    processVideoInboundStats(e) {
      let t = this._stats.videoRecv.find(t => t.ssrc === e.ssrc);
      t || (t = nN(uN), this._stats.videoRecv.push(t)), t.ssrc = e.ssrc, t.packets = e.packetsReceived, t.packetsLost = e.packetsLost, t.bytes = e.bytesReceived, t.firsCount = e.firCount, t.nacksCount = e.nackCount, t.plisCount = e.pliCount, t.framesDecodeCount = e.framesDecoded, t.totalInterFrameDelay = e.totalInterFrameDelay, t.totalSquaredInterFrameDelay = e.totalSquaredInterFrameDelay;
      const i = this.lastDecodeVideoReceiverStats.get(t.ssrc),
        n = this.lastVideoFramesDecode.get(t.ssrc),
        r = Date.now();
      if (t.framesDecodeCount > 0 && !this.isFirstVideoDecoded[t.ssrc]) {
        const e = t.decodedFrame ? t.decodedFrame.width : 0,
          i = t.decodedFrame ? t.decodedFrame.height : 0;
        this.onFirstVideoDecoded && this.onFirstVideoDecoded(t.ssrc, e, i), this.isFirstVideoDecoded[t.ssrc] = !0;
      }
      if (i) {
        const n = i.stats,
          o = r - i.lts;
        t.framesDecodeFreezeTime = n.framesDecodeFreezeTime, t.framesDecodeInterval = n.framesDecodeInterval, !this.isFirstVideoDecoded[t.ssrc] && o > this.options.firstVideoDecodedTimeout && !this.isFirstVideoDecodedTimeout[t.ssrc] && (this.onFirstVideoDecodedTimeout && this.onFirstVideoDecodedTimeout(t.ssrc), this.isFirstVideoDecodedTimeout[t.ssrc] = !0), t.framesDecodeCount > n.framesDecodeCount && this.isFirstVideoDecoded[t.ssrc] ? (i.lts = Date.now(), t.framesDecodeInterval = o, t.framesDecodeInterval >= this.options.freezeRateLimit && (this.getVideoIsReady(parseInt(e.ssrc)) ? t.framesDecodeFreezeTime += t.framesDecodeInterval : this.setVideoIsReady2(parseInt(e.ssrc, 10), !0))) : t.framesDecodeCount < n.framesDecodeCount && (t.framesDecodeInterval = 0), e.framesDecoded && e.qpSum && (i.stats.framesDecodeCount > e.framesDecoded ? t.qpSumPerFrame = e.qpSum / e.framesDecoded : t.qpSumPerFrame = (e.qpSum - i.qpSum) / (e.framesDecoded - i.stats.framesDecodeCount));
      }
      n && r - n.lts >= 800 ? (t.decodeFrameRate = Math.round((t.framesDecodeCount - n.count) / ((r - n.lts) / 1000)), this.lastVideoFramesDecode.set(t.ssrc, {
        count: t.framesDecodeCount,
        lts: r,
        rate: t.decodeFrameRate
      })) : n ? t.decodeFrameRate = n.rate : this.lastVideoFramesDecode.set(t.ssrc, {
        count: t.framesDecodeCount,
        lts: r,
        rate: 0
      }), e.totalDecodeTime && (t.decodeMs = 1000 * e.totalDecodeTime), this.processVideoTrackReceiverStats(e, e.trackId, t), e.codecId && (t.codec = this.getCodecFromCodecStats(e.codecId)), e.framerateMean && (t.framesRateFirefox = e.framerateMean), t.packets > 0 && !this.isFirstVideoReceived[t.ssrc] && (this.onFirstVideoReceived && this.onFirstVideoReceived(t.ssrc), this.isFirstVideoReceived[t.ssrc] = !0), this.lastDecodeVideoReceiverStats.set(t.ssrc, {
        stats: RN({}, t),
        lts: i ? i.lts : Date.now(),
        qpSum: e.qpSum
      });
    }
    processVideoOutboundStats(e) {
      let t = this._stats.videoSend.find(t => t.ssrc === e.ssrc);
      t || (t = nN(lN), this._stats.videoSend.push(t));
      const i = this.mediaBytesSent.get(e.ssrc);
      if (i) i.add(e.bytesSent);else {
        const t = new aN(10);
        t.add(e.bytesSent), this.mediaBytesSent.set(e.ssrc, t);
      }
      if (void 0 !== e.retransmittedBytesSent) {
        const t = this.mediaBytesRetransmit.get(e.ssrc);
        if (t) t.add(e.retransmittedBytesSent);else {
          const t = new aN(10);
          t.add(e.retransmittedBytesSent), this.mediaBytesRetransmit.set(e.ssrc, t);
        }
      }
      if (e.totalEncodedBytesTarget) {
        const t = this.mediaBytesTargetEncode.get(e.ssrc);
        if (t) t.add(e.totalEncodedBytesTarget);else {
          const t = new aN(10);
          t.add(e.totalEncodedBytesTarget), this.mediaBytesTargetEncode.set(e.ssrc, t);
        }
      }
      if (t.ssrc = e.ssrc, t.bytes = e.bytesSent, t.packets = e.packetsSent, t.firsCount = e.firCount, t.nacksCount = e.nackCount, t.plisCount = e.pliCount, t.frameCount = e.framesEncoded, t.adaptionChangeReason = e.qualityLimitationReason, t.scalabilityMode = e.scalabilityMode, e.totalEncodeTime && e.framesEncoded) {
        const i = this.lastEncoderMs.get(e.ssrc);
        if (!i || i.lastFrameCount > e.framesEncoded) t.avgEncodeMs = 1000 * e.totalEncodeTime / e.framesEncoded;else {
          const n = e.framesEncoded - i.lastFrameCount,
            r = e.totalEncodeTime - i.lastEncoderTime;
          t.avgEncodeMs = 1000 * r / n;
        }
      }
      if (e.framesEncoded && e.qpSum) {
        const i = this.lastEncoderMs.get(e.ssrc);
        !i || i.lastFrameCount > e.framesEncoded ? t.qpSumPerFrame = e.qpSum / e.framesEncoded : t.qpSumPerFrame = (e.qpSum - i.lastQpSum) / (e.framesEncoded - i.lastFrameCount);
      }
      if (this.lastEncoderMs.set(e.ssrc, {
        lastFrameCount: e.framesEncoded,
        lastEncoderTime: e.totalEncodeTime,
        lastQpSum: e.qpSum,
        lts: Date.now()
      }), e.codecId && (t.codec = this.getCodecFromCodecStats(e.codecId)), e.mediaSourceId && this.processVideoMediaSource(e.mediaSourceId, t), this.processVideoTrackSenderStats(e, e.trackId, t), e.remoteId) this.processRemoteInboundStats(e.remoteId, t);else {
        const i = this.findRemoteStatsId(e.ssrc, kh.REMOTE_INBOUND);
        i && this.processRemoteInboundStats(i, t);
      }
    }
    processAudioOutboundStats(e) {
      let t = this._stats.audioSend.find(t => t.ssrc === e.ssrc);
      if (t || (t = nN(hN), this._stats.audioSend.push(t)), t.ssrc = e.ssrc, t.packets = e.packetsSent, t.bytes = e.bytesSent, e.mediaSourceId && this.processAudioMediaSource(e.mediaSourceId, t), e.codecId && (t.codec = this.getCodecFromCodecStats(e.codecId)), this.processAudioTrackSenderStats(e, e.trackId, t), e.remoteId) this.processRemoteInboundStats(e.remoteId, t);else {
        const i = this.findRemoteStatsId(e.ssrc, kh.REMOTE_INBOUND);
        i && this.processRemoteInboundStats(i, t);
      }
    }
    findRemoteStatsId(e, t) {
      var i;
      const n = Array.from(IR(i = this.report).call(i)).find(i => i.type === t && i.ssrc === e);
      return n ? n.id : null;
    }
    processVideoMediaSource(e, t) {
      const i = this.report.get(e);
      i && i.width && i.height && i.framesPerSecond && (t.inputFrame = {
        width: i.width,
        height: i.height,
        frameRate: i.framesPerSecond
      });
    }
    processAudioMediaSource(e, t) {
      const i = this.report.get(e);
      i && (t.inputLevel = i.audioLevel);
    }
    processVideoTrackSenderStats(e, t, i) {
      var n, r, o;
      const s = t ? this.report.get(t) : void 0,
        a = null !== (n = null == s ? void 0 : s.framesSent) && void 0 !== n ? n : e.framesSent;
      let c = null !== (r = null == s ? void 0 : s.frameWidth) && void 0 !== r ? r : e.frameWidth,
        d = null !== (o = null == s ? void 0 : s.frameHeight) && void 0 !== o ? o : e.frameHeight;
      if ("number" != typeof a) return;
      "number" == typeof c && "number" == typeof d || (c = 0, d = 0);
      let u = 0;
      const l = Date.now(),
        h = this.lastVideoFramesSent.get(i.ssrc);
      h && l - h.lts >= 800 ? (u = Math.round((a - h.count) / ((l - h.lts) / 1000)), this.lastVideoFramesSent.set(i.ssrc, {
        count: a,
        lts: l,
        rate: u
      })) : h ? u = h.rate : this.lastVideoFramesSent.set(i.ssrc, {
        count: a,
        lts: l,
        rate: 0
      }), i.sentFrame = {
        width: c,
        height: d,
        frameRate: Math.max(0, u)
      };
    }
    processVideoTrackReceiverStats(e, t, i) {
      var n, r, o, s, a;
      const c = t ? this.report.get(t) : void 0,
        d = null !== (n = null == c ? void 0 : c.framesReceived) && void 0 !== n ? n : e.framesReceived,
        u = null !== (r = null == c ? void 0 : c.frameWidth) && void 0 !== r ? r : e.frameWidth,
        l = null !== (o = null == c ? void 0 : c.frameHeight) && void 0 !== o ? o : e.frameHeight,
        h = null !== (s = null == c ? void 0 : c.jitterBufferDelay) && void 0 !== s ? s : e.jitterBufferDelay,
        p = null !== (a = null == c ? void 0 : c.jitterBufferEmittedCount) && void 0 !== a ? a : e.jitterBufferEmittedCount;
      if ("number" == typeof d) {
        const e = this.lastVideoFramesRecv.get(i.ssrc),
          t = Date.now();
        i.framesReceivedCount = d;
        let n = 0;
        e && t - e.lts >= 800 ? (n = Math.round((d - e.count) / ((t - e.lts) / 1000)), this.lastVideoFramesRecv.set(i.ssrc, {
          count: d,
          lts: t,
          rate: n
        })) : e ? n = e.rate : this.lastVideoFramesRecv.set(i.ssrc, {
          count: d,
          lts: t,
          rate: 0
        }), i.receivedFrame = {
          width: u || 0,
          height: l || 0,
          frameRate: n || 0
        }, i.decodedFrame = {
          width: u || 0,
          height: l || 0,
          frameRate: i.decodeFrameRate || 0
        }, i.outputFrame = {
          width: u || 0,
          height: l || 0,
          frameRate: i.decodeFrameRate || 0
        };
      }
      if (h && p) {
        let e = this.lastVideoJBDelay.get(i.ssrc);
        this.lastVideoJBDelay.set(i.ssrc, {
          jitterBufferDelay: h,
          jitterBufferEmittedCount: p
        }), e || (e = {
          jitterBufferDelay: 0,
          jitterBufferEmittedCount: 0
        });
        const t = 1000 * (h - e.jitterBufferDelay) / (p - e.jitterBufferEmittedCount);
        i.jitterBufferMs = t, i.currentDelayMs = Math.round(t);
      }
    }
    processAudioTrackSenderStats(e, t, i) {
      var n, r, o, s;
      const a = t ? this.report.get(t) : void 0,
        c = null !== (n = null !== (r = null == a ? void 0 : a.echoReturnLoss) && void 0 !== r ? r : e.echoReturnLoss) && void 0 !== n ? n : 0,
        d = null !== (o = null !== (s = null == a ? void 0 : a.echoReturnLossEnhancement) && void 0 !== s ? s : e.echoReturnLossEnhancement) && void 0 !== o ? o : 0;
      i.aecReturnLoss = c, i.aecReturnLossEnhancement = d;
    }
    processAudioTrackReceiverStats(e, t, i) {
      var n, r, o, s, a, c, d;
      const u = t ? this.report.get(t) : void 0,
        l = null !== (n = null == u ? void 0 : u.removedSamplesForAcceleration) && void 0 !== n ? n : e.removedSamplesForAcceleration,
        h = null !== (r = null == u ? void 0 : u.totalSamplesReceived) && void 0 !== r ? r : e.totalSamplesReceived,
        p = null !== (o = null == u ? void 0 : u.jitterBufferDelay) && void 0 !== o ? o : e.jitterBufferDelay,
        _ = null !== (s = null == u ? void 0 : u.jitterBufferEmittedCount) && void 0 !== s ? s : e.jitterBufferEmittedCount,
        E = null !== (a = null == u ? void 0 : u.audioLevel) && void 0 !== a ? a : null == e ? void 0 : e.audioLevel,
        m = null !== (c = null == u ? void 0 : u.totalSamplesDuration) && void 0 !== c ? c : null == e ? void 0 : e.totalSamplesDuration,
        f = null !== (d = null == u ? void 0 : u.concealedSamples) && void 0 !== d ? d : e.concealedSamples;
      if (l && h && (i.accelerateRate = l / h), p && _) {
        let e = this.lastAudioJBDelay.get(i.ssrc);
        this.lastAudioJBDelay.set(i.ssrc, {
          jitterBufferDelay: p,
          jitterBufferEmittedCount: _
        }), e || (e = {
          jitterBufferDelay: 0,
          jitterBufferEmittedCount: 0
        });
        const t = 1000 * (p - e.jitterBufferDelay) / (_ - e.jitterBufferEmittedCount);
        i.jitterBufferMs = Math.round(t);
      }
      i.outputLevel = E;
      let S = 1920;
      m && h && (S = h / m / 50, i.receivedFrames = Math.round(h / S)), f && (i.droppedFrames = Math.round(f / S));
    }
    processRemoteInboundStats(e, t) {
      const i = this.report.get(e);
      i && (t.packetsLost = i.packetsLost, i.roundTripTime && (t.rttMs = 1000 * i.roundTripTime));
    }
    getCodecFromCodecStats(e) {
      const t = this.report.get(e);
      if (!t) return "";
      const i = t.mimeType.match(/\/(.*)$/);
      return i && i[1] ? i[1] : "";
    }
    updateSendBitrate() {
      let e = 0,
        t = null,
        i = null;
      this.mediaBytesSent.forEach(t => {
        e += t.diffMean();
      }), this.mediaBytesRetransmit.forEach(e => {
        t = null === t ? e.diffMean() : t + e.diffMean();
      }), this.mediaBytesTargetEncode.forEach(e => {
        i = null === i ? e.diffMean() : i + e.diffMean();
      });
      const n = null !== t ? e - t : e;
      this._stats.bitrate = {
        actualEncoded: 8 * n / (this.options.updateInterval / 1000),
        transmit: 8 * e / (this.options.updateInterval / 1000)
      }, null !== t && (this._stats.bitrate.retransmit = 8 * t / (this.options.updateInterval / 1000)), null !== i && (this._stats.bitrate.targetEncoded = 8 * i / (this.options.updateInterval / 1000));
    }
  }
  class CN extends mN {
    updateStats() {
      return Sl.resolve();
    }
  }
  function vN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
      n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
      r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10000;
    const o = oN();
    return o ? o < 76 ? new TN(e, {
      updateInterval: t,
      lossRateInterval: i,
      freezeRateLimit: n,
      firstVideoDecodedTimeout: r
    }) : new IN(e, {
      updateInterval: t,
      lossRateInterval: i,
      freezeRateLimit: n,
      firstVideoDecodedTimeout: r
    }) : sN(e) ? new IN(e, {
      updateInterval: t,
      lossRateInterval: i,
      freezeRateLimit: n,
      firstVideoDecodedTimeout: r
    }) : new CN(e, {
      updateInterval: t,
      lossRateInterval: i,
      freezeRateLimit: n,
      firstVideoDecodedTimeout: r
    });
  }
  var yN;
  function AN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function ON(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? AN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : AN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let NN = (ag((yN = class e extends YS {
    get peerConnectionState() {
      return this.peerConnection.connectionState;
    }
    get iceConnectionState() {
      return this.peerConnection.iceConnectionState;
    }
    get currentLocalDescription() {
      return this.peerConnection.currentLocalDescription;
    }
    get currentRemoteDescription() {
      return this.peerConnection.currentRemoteDescription;
    }
    constructor(t, i) {
      super(t, i), _p(this, "store", void 0), _p(this, "peerConnection", void 0), _p(this, "remoteSDP", void 0), _p(this, "initialOffer", void 0), _p(this, "statsFilter", void 0), _p(this, "useRTX", !1), _p(this, "localCapabilities", void 0), _p(this, "localCandidateCount", 0), _p(this, "allCandidatesReceived", !1), _p(this, "establishPromise", void 0), _p(this, "mutex", new Ug("P2PConnection-mutex")), this.store = i, this.peerConnection = new RTCPeerConnection(e.resolvePCConfiguration(t), {
        optional: [{
          googDscp: !0
        }]
      }), this.statsFilter = vN(this.peerConnection, GE("STATS_UPDATE_INTERVAL"), void 0, Kh() ? 1200 : void 0), this.bindPCEvents(), this.bindStatsEvents(), this.store.p2pId = this.store.p2pId + 1, this.establishPromise = this.establish();
    }
    async establish() {
      try {
        const e = await this.peerConnection.createOffer({
          offerToReceiveAudio: !0,
          offerToReceiveVideo: !0
        });
        if (!e.sdp) throw new Error("Cannot get initialOffer.sdp when trying to establish PeerConnection.");
        const t = FO(e.sdp),
          i = jO(e.sdp, !this.useRTX, GE("FILTER_VIDEO_FEC"), GE("FILTER_AUDIO_FEC"), ["opus"]);
        return this.localCapabilities = i, this.initialOffer = e, ON(ON({}, t), {}, {
          rtpCapabilities: {
            send: {
              audioCodecs: [],
              audioExtensions: [],
              videoCodecs: [],
              videoExtensions: []
            },
            recv: {
              audioCodecs: [],
              audioExtensions: [],
              videoCodecs: [],
              videoExtensions: []
            },
            sendrecv: i
          },
          offerSDP: e.sdp
        });
      } catch (e) {
        throw new SE(fE.GET_LOCAL_CONNECTION_PARAMS_FAILED, e.toString());
      }
    }
    async connect(e, t, i, n, r, o) {
      try {
        if (!this.initialOffer) throw new Error("Cannot establish P2PConnection without initial offer.");
        this.remoteSDP = new iN({
          remoteIceParameters: e,
          remoteDtlsParameters: t,
          candidates: i,
          remoteRTPCapabilities: n.send,
          remoteSetup: r,
          localCapabilities: this.localCapabilities,
          sdkCodec: this.store.codec,
          cname: o
        });
        const s = this.remoteSDP.toString();
        await this.peerConnection.setLocalDescription(this.initialOffer), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: s
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.connect failed; ".concat(e.toString()));
      }
    }
    send(e, t) {
      var i = this;
      return DO(function* () {
        const n = yield PO(i.mutex.lock());
        try {
          if (!i.remoteSDP) throw new Error("Cannot call P2PConnection.send before remote SDP created");
          const r = e.map(e => i.peerConnection.addTrack(e._mediaStreamTrack)),
            o = yield PO(i.peerConnection.createOffer()),
            s = UO.exports.parse(o.sdp),
            a = e.map(e => {
              const t = e._mediaStreamTrack,
                n = s.mediaDescriptions.find(e => e.attributes.mid === t.kind);
              if (!n) throw new Error("Cannot extract ssrc from mediaDescription.");
              return function (e, t, i) {
                const n = e.attributes.ssrcs.filter(e => e.attributes.label === t),
                  r = e.attributes.ssrcGroups;
                if (0 === n.length) throw new Error("Cannot extract ssrc from plan-b SDP.");
                if (r && n.length > 1) {
                  const e = r.find(e => -1 !== e.ssrcIds.indexOf(n[0].ssrcId));
                  return e ? [{
                    ssrcId: e.ssrcIds[0],
                    rtx: i ? e.ssrcIds[1] : void 0
                  }] : [{
                    ssrcId: n[0].ssrcId
                  }];
                }
                return [{
                  ssrcId: n[0].ssrcId
                }];
              }(n, t.id, i.useRTX);
            });
          let c;
          try {
            c = yield a;
          } catch (e) {
            throw r.forEach(e => {
              Hh() && e.replaceTrack(null), i.peerConnection.removeTrack(e);
            }), e;
          }
          const d = i.mungSendOfferSDP(o.sdp, e);
          i.remoteSDP.receive(e, t, c);
          const u = i.remoteSDP.toString();
          return yield PO(i.peerConnection.setLocalDescription({
            type: "offer",
            sdp: d
          })), yield PO(i.applySendEncodings(r, e)), yield PO(i.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: u
          })), e.map((e, t) => {
            const i = e._mediaStreamTrack.id;
            return {
              localSSRC: a[t],
              id: i
            };
          });
        } catch (e) {
          throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.send failed; ".concat(e.toString()));
        } finally {
          n();
        }
      })();
    }
    async stopSending(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.stopSending before remote SDP created");
        const t = this.peerConnection.getSenders().filter(t => {
          var i;
          return -1 !== e.indexOf((null === (i = t.track) || void 0 === i ? void 0 : i.id) || "");
        });
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length when trying to call P2PConnection.stopSending.");
        t.map(e => {
          Hh() && e.replaceTrack(null), this.peerConnection.removeTrack(e);
        });
        const i = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(i), this.remoteSDP.stopReceiving(e);
        const n = this.remoteSDP.toString();
        await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: n
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.stopSending failed; ".concat(e.toString()));
      }
    }
    async receive(e, t, i, n) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.receive ".concat(e, " before remoteSDP created."));
        const {
            id: i,
            mslabel: r
          } = this.remoteSDP.send(e, t, n),
          o = new Sl((t, n) => {
            const o = setTimeout(() => {
                n(new Error("Cannot receive track, id: ".concat(i)));
              }, 10000),
              s = n => {
                const a = xh();
                if (("Safari" === a.name && 11 === Number(a.version) || Yh()) && n.track.id !== i && n.streams[0].id === r) {
                  var c;
                  const r = n.streams[0].getTracks()[0];
                  return null === (c = this.remoteSDP) || void 0 === c || c.updateTrackLabel(e, i, n.track.id), this.peerConnection.removeEventListener("track", s), clearTimeout(o), void t(r);
                }
                if (n.track.id === i) return this.peerConnection.removeEventListener("track", s), clearTimeout(o), void t(n.track);
              };
            this.peerConnection.addEventListener("track", s);
          }),
          s = this.remoteSDP.toString();
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: s
        });
        const a = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(a);
        return {
          track: await o,
          id: i
        };
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.receive failed; ".concat(e.toString()));
      }
    }
    async stopReceiving(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.stopReceiving before remote SDP created.");
        this.remoteSDP.stopSending(e);
        const t = this.remoteSDP.toString();
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const i = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(i);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection stopReceiving failed; ".concat(e.toString()));
      }
    }
    async muteRemote(e) {}
    async unmuteRemote(e) {}
    async muteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.muteLocal before remote SDP created.");
        const t = this.peerConnection.getSenders().filter(t => {
          var i;
          return -1 !== e.indexOf((null === (i = t.track) || void 0 === i ? void 0 : i.id) || "");
        });
        if (t.length !== e.length) throw new Error("sender' length doesn't match mids' length.");
        t.map(e => {
          if (Hh() && e.track) e.track.enabled = !1;else {
            const t = e.getParameters();
            t.encodings.forEach(e => e.active = !1), e.setParameters(t);
          }
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.muteLocal failed; ".concat(e.toString()));
      }
    }
    async unmuteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.unmuteLocal before remote SDP created.");
        const t = this.peerConnection.getSenders().filter(t => {
          var i;
          return -1 !== e.indexOf((null === (i = t.track) || void 0 === i ? void 0 : i.id) || "");
        });
        if (t.length !== e.length) throw new Error("Senders' length doesn't match mids' length.");
        t.map(async e => {
          if (Hh() && e.track) e.track.enabled = !0;else {
            const t = e.getParameters();
            t.encodings.forEach(e => e.active = !0), await e.setParameters(t);
          }
        });
        const i = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(i);
        const n = this.remoteSDP.toString();
        await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: n
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.unmuteLocal failed; ".concat(e.toString()));
      }
    }
    restartICE(e) {
      var t = this;
      return DO(function* () {
        const i = yield PO(t.mutex.lock("From P2PConnection.restartICE"));
        try {
          if (!t.remoteSDP) throw new Error("Cannot restartICE before remoteSDP created.");
          if (JS().supportPCSetConfiguration) {
            const i = t.peerConnection.getConfiguration(),
              n = e === OS.RELAY ? "relay" : "all";
            i.iceTransportPolicy !== n && (OE.debug("[".concat(t.store.clientId, "] restartICE change iceTransportPolicy from [").concat(i.iceTransportPolicy, "] to [").concat(n, "]")), i.iceTransportPolicy = n, t.peerConnection.setConfiguration(i));
          } else if (e === OS.RELAY) return;
          e !== OS.RELAY && t.remoteSDP.updateCandidates(e);
          const n = yield PO(t.peerConnection.createOffer({
            iceRestart: !0
          }));
          if (!n.sdp) throw new Error("Cannot restartICE because restart offer SDP does not exist.");
          const r = FO(n.sdp),
            {
              remoteIceParameters: o
            } = yield r.iceParameters;
          t.remoteSDP.restartICE(o);
          const s = t.remoteSDP.toString();
          yield PO(t.peerConnection.setLocalDescription(n)), yield PO(t.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: s
          }));
        } catch (e) {
          OE.warning("[".concat(t.store.clientId, "] restart ICE failed, abort operation"), e);
        } finally {
          i();
        }
      })();
    }
    close() {
      var e;
      this.peerConnection.close(), null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, "closed"), this.unbindPCEvents(), this.unbindStatsEvents(), this.removeAllListeners(), this.statsFilter.destroy();
    }
    getStats() {
      return this.statsFilter.getStats();
    }
    getRemoteVideoIsReady(e) {
      return this.statsFilter.getVideoIsReady(e);
    }
    async updateEncoderConfig(e, t) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.updateEncoderConfig before remote SDP created.");
        const e = await this.peerConnection.createOffer(),
          i = this.mungSendOfferSDP(e.sdp, [t]);
        this.remoteSDP.updateRecvMedia(t._mediaStreamTrack.kind, t);
        const n = this.remoteSDP.toString();
        await this.peerConnection.setLocalDescription({
          type: "offer",
          sdp: i
        }), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: n
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, e.toString());
      }
    }
    async updateSendParameters(e, t) {
      const i = this.peerConnection.getSenders().filter(t => {
        var i;
        return (null === (i = t.track) || void 0 === i ? void 0 : i.id) === e;
      });
      1 === i.length && (await this.applySendEncodings(i, [t]));
    }
    setStatsRemoteVideoIsReady(e, t) {
      this.statsFilter.setVideoIsReady2(e, t);
    }
    async replaceTrack(e, t) {
      const i = this.peerConnection.getSenders().find(e => {
        var i;
        return (null === (i = e.track) || void 0 === i ? void 0 : i.id) === t;
      });
      i && (await i.replaceTrack(e._mediaStreamTrack));
    }
    bindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = () => {
        var e;
        null === (e = this.onICEConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.iceConnectionState);
      }, this.peerConnection.onconnectionstatechange = () => {
        var e;
        null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.connectionState);
      }, this.peerConnection.onicecandidate = e => {
        e.candidate ? this.localCandidateCount += 1 : (this.peerConnection.onicecandidate = null, this.allCandidatesReceived = !0, OE.debug("[".concat(this.store.clientId, "] [pc-").concat(this.store.p2pId, "] local candidate count"), this.localCandidateCount));
      }, setTimeout(() => {
        this.allCandidatesReceived || (this.allCandidatesReceived = !0, OE.debug("[".concat(this.store.clientId, "] [pc-").concat(this.store.p2pId, "] onicecandidate timeout, local candidate count"), this.localCandidateCount));
      }, GE("CANDIDATE_TIMEOUT"));
    }
    unbindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = null, this.peerConnection.onconnectionstatechange = null, this.peerConnection.onsignalingstatechange = null, this.peerConnection.onicecandidateerror = null, this.peerConnection.onicecandidate = null, this.peerConnection.ontrack = null;
    }
    static resolvePCConfiguration(t) {
      const i = {
        iceServers: [],
        sdpSemantics: "plan-b"
      };
      return t.iceServers ? i.iceServers = t.iceServers : t.turnServer && "off" !== t.turnServer.mode && (Uf(t.turnServer.servers) ? i.iceServers = t.turnServer.servers : (i.iceServers && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.servers)), GE("USE_TURN_SERVER_OF_GATEWAY") && i.iceServers && t.turnServer.serversFromGateway && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.serversFromGateway)), t.turnServer.servers.concat(t.turnServer.serversFromGateway || []).forEach(e => {
        e.forceturn && (i.iceTransportPolicy = "relay");
      }))), i;
    }
    static turnServerConfigToIceServers(e) {
      const t = [];
      return e.forEach(e => {
        e.security ? e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turns:".concat(e.turnServerURL, ":").concat(e.tcpport, "?transport=tcp")
        }) : (e.udpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.udpport, "?transport=udp")
        }), e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.tcpport, "?transport=tcp")
        }));
      }), t;
    }
    async applySendEncodings(e, t) {
      try {
        if (!JS().supportSetRtpSenderParameters) return;
        if (e.length !== t.length) return;
        for (let n = 0; n < e.length; n++) {
          var i;
          const r = e[n],
            o = t[n];
          if (!o) continue;
          const s = {},
            a = {};
          if (o instanceof Cy) switch (o._optimizationMode) {
            case "motion":
              s.degradationPreference = "maintain-framerate";
              break;
            case "detail":
              s.degradationPreference = "maintain-resolution";
              break;
            default:
              s.degradationPreference = "balanced";
          }
          if (GE("DSCP_TYPE") && rp()) {
            const e = GE("DSCP_TYPE");
            ["very-low", "low", "medium", "high"].includes(e) && (a.networkPriority = e);
          }
          const c = r.getParameters(),
            d = null === (i = c.encodings) || void 0 === i ? void 0 : i[0];
          d && Object.assign(d, a), Object.assign(c, s), await r.setParameters(c);
        }
      } catch (e) {
        OE.debug("[".concat(this.store.clientId, "] Apply RTPSendEncodings failed."));
      }
    }
    mungSendOfferSDP(e, t) {
      const i = UO.exports.parse(e);
      return t.forEach((e, t) => {
        const n = e._mediaStreamTrack,
          r = i.mediaDescriptions.find(e => e.attributes.mid === n.kind);
        r && HO(r, e);
      }), UO.exports.print(i);
    }
    bindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = e => {
        var t;
        null === (t = this.onFirstAudioReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoReceived = e => {
        var t;
        null === (t = this.onFirstVideoReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstAudioDecoded = e => {
        var t;
        null === (t = this.onFirstAudioDecoded) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoDecoded = (e, t, i) => {
        var n;
        null === (n = this.onFirstVideoDecoded) || void 0 === n || n.call(this, e, t, i);
      }, this.statsFilter.onSelectedLocalCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedLocalCandidateChanged) || void 0 === i || i.call(this, e, t);
      }, this.statsFilter.onSelectedRemoteCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedRemoteCandidateChanged) || void 0 === i || i.call(this, e, t);
      };
    }
    unbindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = void 0, this.statsFilter.onFirstVideoReceived = void 0, this.statsFilter.onFirstAudioDecoded = void 0, this.statsFilter.onFirstVideoDecoded = void 0, this.statsFilter.onSelectedLocalCandidateChanged = void 0, this.statsFilter.onSelectedRemoteCandidateChanged = void 0;
    }
    async batchReceive(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.batchReceive before remoteSDP created.");
        const t = this.remoteSDP.batchSend(e).map((t, i) => {
            let {
              id: n,
              mslabel: r
            } = t;
            const {
              kind: o
            } = e[i];
            return new Sl((e, t) => {
              const i = setTimeout(() => {
                  t(new Error("Cannot receive track, id: ".concat(n)));
                }, 10000),
                s = t => {
                  const a = xh();
                  if ("Safari" === a.name && 11 === Number(a.version) && t.track.id !== n && t.streams[0].id === r) {
                    var c;
                    const r = t.streams[0].getTracks()[0];
                    return null === (c = this.remoteSDP) || void 0 === c || c.updateTrackLabel(o, n, t.track.id), this.peerConnection.removeEventListener("track", s), clearTimeout(i), void e({
                      track: r,
                      id: n
                    });
                  }
                  if (t.track.id === n) return this.peerConnection.removeEventListener("track", s), clearTimeout(i), void e({
                    track: t.track,
                    id: n
                  });
                };
              this.peerConnection.addEventListener("track", s);
            });
          }),
          i = this.remoteSDP.toString();
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: i
        });
        const n = await this.peerConnection.createAnswer();
        return await this.peerConnection.setLocalDescription(n), await Sl.all(t);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.receive failed; ".concat(e.toString()));
      }
    }
    async getRemoteSSRC(e) {
      if (!this.remoteSDP) return;
      const t = this.remoteSDP.getSSRC(e);
      return null == t ? void 0 : t[0].ssrcId;
    }
    setConfiguration(t) {
      if (JS().supportPCSetConfiguration) {
        const i = e.resolvePCConfiguration(t);
        this.peerConnection.setConfiguration(i);
      }
    }
  }).prototype, "connect", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "connect"), yN.prototype), ag(yN.prototype, "stopSending", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "stopSending"), yN.prototype), ag(yN.prototype, "receive", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "receive"), yN.prototype), ag(yN.prototype, "stopReceiving", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "stopReceiving"), yN.prototype), ag(yN.prototype, "muteRemote", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "muteRemote"), yN.prototype), ag(yN.prototype, "unmuteRemote", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "unmuteRemote"), yN.prototype), ag(yN.prototype, "muteLocal", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "muteLocal"), yN.prototype), ag(yN.prototype, "unmuteLocal", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "unmuteLocal"), yN.prototype), ag(yN.prototype, "close", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "close"), yN.prototype), ag(yN.prototype, "updateEncoderConfig", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "updateEncoderConfig"), yN.prototype), ag(yN.prototype, "updateSendParameters", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "updateSendParameters"), yN.prototype), ag(yN.prototype, "replaceTrack", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "replaceTrack"), yN.prototype), ag(yN.prototype, "getRemoteSSRC", [bN], Object.getOwnPropertyDescriptor(yN.prototype, "getRemoteSSRC"), yN.prototype), yN);
  function bN(e, t, i) {
    const n = e[t];
    if ("function" != typeof n) throw new Error("Cannot use mutex on object property.");
    return i.value = async function () {
      const e = (this || _global).mutex,
        i = await e.lock("Locking from P2PConnection.".concat(t));
      try {
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return await n.apply(this || _global, o);
      } finally {
        i();
      }
    }, i;
  }
  function wN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function DN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : wN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const PN = "9",
    LN = 40000;
  class kN {
    get localCapabilities() {
      return uC(this._localCapabilities);
    }
    get rtpCapabilities() {
      return uC(this._rtpCapabilities);
    }
    get candidates() {
      return uC(this._candidates);
    }
    get iceParameters() {
      return uC(this._iceParameters);
    }
    get dtlsParameters() {
      return uC(this._dtlsParameters);
    }
    constructor(e) {
      _p(this, "sessionDesc", void 0), _p(this, "_localCapabilities", void 0), _p(this, "_rtpCapabilities", void 0), _p(this, "_candidates", void 0), _p(this, "_iceParameters", void 0), _p(this, "_dtlsParameters", void 0), _p(this, "setup", void 0), _p(this, "currentMidIndex", void 0), _p(this, "cname", void 0), _p(this, "firefoxSsrcMidMap", new Map()), e = uC(e);
      const {
          remoteIceParameters: t,
          remoteDtlsParameters: i,
          candidates: n,
          remoteRTPCapabilities: r,
          remoteSetup: o,
          localCapabilities: s,
          cname: a
        } = e,
        c = UO.exports.parse("v=0\no=- 0 0 IN IP4 127.0.0.1\ns=AgoraGateway\nt=0 0\na=group:BUNDLE 0 1\na=msid-semantic: WMS\na=ice-lite\nm=video 9 UDP/TLS/RTP/SAVPF 0\nc=IN IP4 127.0.0.1\na=rtcp:9 IN IP4 0.0.0.0\na=sendonly\na=rtcp-mux\na=rtcp-rsize\na=mid:0\nm=audio 9 UDP/TLS/RTP/SAVPF 0\nc=IN IP4 127.0.0.1\na=rtcp:9 IN IP4 0.0.0.0\na=sendonly\na=rtcp-mux\na=rtcp-rsize\na=mid:1\n");
      this._rtpCapabilities = r, this._candidates = n, this._iceParameters = t, this._dtlsParameters = i, this._localCapabilities = s, this.setup = o, this.cname = a;
      const d = this.rtpCapabilities.send;
      for (const e of c.mediaDescriptions) {
        if (e.attributes.iceUfrag = t.iceUfrag, e.attributes.icePwd = t.icePwd, e.attributes.fingerprints = i.fingerprints, e.attributes.candidates = n, e.attributes.setup = o, "video" === e.media.mediaType && (e.media.fmts = d.videoCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = d.videoCodecs, e.attributes.extmaps = d.videoExtensions, GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: LN,
            rtx: GE("USE_SUB_RTX") ? 40001 : void 0
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
        if ("audio" === e.media.mediaType && (e.media.fmts = d.audioCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = d.audioCodecs, e.attributes.extmaps = d.audioExtensions, $O(e), GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: 20000
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
      }
      this.sessionDesc = c, this.currentMidIndex = c.mediaDescriptions.length - 1;
    }
    preloadRemoteMedia() {
      const e = GE("PRELOAD_MEDIA_COUNT");
      this.rtpCapabilities;
      const t = this.candidates,
        i = this.dtlsParameters,
        n = this.iceParameters,
        r = this.rtpCapabilities.send;
      for (let o = 1; o < e; o++) {
        const e = 2 * o + 20000,
          s = 2 * o + LN,
          {
            ssrcs: a,
            ssrcGroups: c
          } = WO([{
            ssrcId: e
          }], this.cname),
          {
            ssrcs: d,
            ssrcGroups: u
          } = WO([{
            ssrcId: s,
            rtx: GE("USE_SUB_RTX") ? s + 1 : void 0
          }], this.cname);
        this.sessionDesc.mediaDescriptions.push({
          media: {
            mediaType: "video",
            port: PN,
            protos: ["UDP", "TLS", "RTP", "SAVPF"],
            fmts: r.videoCodecs.map(e => e.payloadType.toString(10))
          },
          connections: [{
            nettype: "IN",
            addrtype: "IP4",
            address: "127.0.0.1"
          }],
          bandwidths: [],
          attributes: {
            iceUfrag: n.iceUfrag,
            icePwd: n.icePwd,
            unrecognized: [],
            candidates: t,
            extmaps: r.videoExtensions,
            fingerprints: i.fingerprints,
            imageattr: [],
            msids: [],
            remoteCandidatesList: [],
            rids: [],
            ssrcs: d,
            ssrcGroups: u,
            rtcpFeedbackWildcards: [],
            payloads: r.videoCodecs,
            rtcp: {
              port: "9",
              netType: "IN",
              addressType: "IP4",
              address: "0.0.0.0"
            },
            setup: this.setup,
            direction: "sendonly",
            rtcpMux: !0,
            rtcpRsize: !0,
            mid: "".concat(2 * o)
          }
        }), this.sessionDesc.mediaDescriptions.push({
          media: {
            mediaType: "audio",
            port: PN,
            protos: ["UDP", "TLS", "RTP", "SAVPF"],
            fmts: r.audioCodecs.map(e => e.payloadType.toString(10))
          },
          connections: [{
            nettype: "IN",
            addrtype: "IP4",
            address: "127.0.0.1"
          }],
          bandwidths: [],
          attributes: {
            iceUfrag: n.iceUfrag,
            icePwd: n.icePwd,
            unrecognized: [],
            candidates: t,
            extmaps: r.audioExtensions,
            fingerprints: i.fingerprints,
            imageattr: [],
            msids: [],
            remoteCandidatesList: [],
            rids: [],
            ssrcs: a,
            ssrcGroups: c,
            rtcpFeedbackWildcards: [],
            payloads: r.audioCodecs,
            rtcp: {
              port: "9",
              netType: "IN",
              addressType: "IP4",
              address: "0.0.0.0"
            },
            setup: this.setup,
            direction: "sendonly",
            rtcpMux: !0,
            rtcpRsize: !0,
            mid: "".concat(2 * o + 1)
          }
        }), this.currentMidIndex += 2;
      }
      this.updateBundleMids();
    }
    toString() {
      return UO.exports.print(this.sessionDesc);
    }
    send(e, t, i, n) {
      const {
          ssrcs: r,
          ssrcGroups: o
        } = WO(t, this.cname, GE("SYNC_GROUP") ? i : void 0),
        s = this.findPreloadMediaDesc(r);
      if (s) {
        if (Kh() && this.firefoxSsrcMidMap.set(r[0].ssrcId, s.attributes.mid), n && (n.twcc || n.remb)) {
          const e = this.sessionDesc.mediaDescriptions.indexOf(s);
          return this.sessionDesc.mediaDescriptions[e] = this.mungSendMediaDesc(s, n), {
            mid: s.attributes.mid,
            needExchangeSDP: !0
          };
        }
        return {
          mid: s.attributes.mid,
          needExchangeSDP: !1
        };
      }
      {
        const t = this.findAvailableMediaIndex(e, r);
        let i;
        return -1 === t || 1 === t && (Hh() || zh()) || 0 === t && GE("USE_SUB_RTX") || Qh() ? (i = this.createOrRecycleSendMedia(e, r, o, "sendonly", n), this.updateBundleMids()) : (i = uC(this.sessionDesc.mediaDescriptions[t]), i.attributes.direction = "sendonly", i.attributes.ssrcs = r, i.attributes.ssrcGroups = o, this.sessionDesc.mediaDescriptions[t] = this.mungSendMediaDesc(i, n)), Kh() && this.firefoxSsrcMidMap.set(r[0].ssrcId, i.attributes.mid), {
          mid: i.attributes.mid,
          needExchangeSDP: !0
        };
      }
    }
    batchSend(e) {
      const t = e.map(e => {
          let {
            kind: t,
            ssrcMsg: i,
            mslabel: n
          } = e;
          return this.send(t, i, n);
        }),
        i = [];
      let n = !1;
      return t.forEach(e => {
        let {
          mid: t,
          needExchangeSDP: r
        } = e;
        r && (n = !0), i.push(t);
      }), {
        mids: i,
        needExchangeSDP: n
      };
    }
    stopSending(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => t.attributes.mid && -1 !== e.indexOf(t.attributes.mid));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.stopSending.");
      t.forEach(e => {
        "0" === e.attributes.mid || Kh() || Qh() ? e.attributes.ssrcs = [] : (e.attributes.ssrcs = [], e.attributes.direction = "inactive", e.media.port = "0");
      }), this.updateBundleMids();
    }
    mute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.mute."));
      t.attributes.direction = "inactive";
    }
    unmute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.unmute."));
      t.attributes.direction = "sendonly";
    }
    muteRemote(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => e.includes(t.attributes.mid || ""));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.muteRemote.");
      t.forEach(e => {
        e.attributes.direction = "inactive";
      });
    }
    unmuteRemote(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => e.includes(t.attributes.mid || ""));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.muteRemote.");
      t.forEach(e => {
        e.attributes.direction = "recvonly";
      });
    }
    receive(e, t, i, n) {
      e.forEach((e, r) => {
        this.createOrRecycleRecvMedia(e, [], "recvonly", t, i, n[r]);
      }), this.updateBundleMids();
    }
    stopReceiving(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => -1 !== e.indexOf(t.attributes.mid));
      if (t.length !== e.length) throw new Error("MediaDescriptions' length doesn't match mids's length when calling RemoteSDP.receive.");
      t.forEach(e => {
        e.media.port = "0", e.attributes.direction = "inactive";
      }), this.updateBundleMids();
    }
    updateCandidates(e) {
      e === OS.TCP ? this._candidates.forEach(e => {
        -1 === this._candidates.findIndex(t => "tcp" === t.transport && t.connectionAddress === e.connectionAddress && t.port === e.port) && this._candidates.push(DN(DN({}, e), {}, {
          foundation: "tcpcandidate",
          priority: Number(e.priority) - 1 + "",
          transport: "tcp",
          port: Number(e.port) + 90 + ""
        }));
      }) : this._candidates = this._candidates.filter(e => "tcp" !== e.transport);
      for (const e of this.sessionDesc.mediaDescriptions) e.attributes.candidates = this.candidates;
    }
    restartICE(e) {
      e = uC(e), this._iceParameters = e, this.sessionDesc.mediaDescriptions.forEach(t => {
        t.attributes.iceUfrag = e.iceUfrag, t.attributes.icePwd = e.icePwd;
      });
    }
    predictReceivingMids(e) {
      const t = [];
      for (let i = 0; i < e; i++) t.push((this.currentMidIndex + i + 1).toString(10));
      return t;
    }
    findAvailableMediaIndex(e, t) {
      return this.sessionDesc.mediaDescriptions.findIndex(i => {
        const n = i.media.mediaType === e && "0" !== i.media.port && ("sendonly" === i.attributes.direction || "sendrecv" === i.attributes.direction) && 0 === i.attributes.ssrcs.length;
        if (Kh()) {
          if (n) {
            const e = this.firefoxSsrcMidMap.get(t[0].ssrcId);
            return !(e || "0" !== i.attributes.mid && "1" !== i.attributes.mid) || !(!e || e !== i.attributes.mid);
          }
          return !1;
        }
        return n;
      });
    }
    createOrRecycleRecvMedia(e, t, i, n, r, o) {
      const s = e._mediaStreamTrack.kind,
        a = this.rtpCapabilities.recv,
        c = this.localCapabilities.send;
      let d = [];
      if (s === AS.VIDEO) {
        var u, l;
        if (GE("H264_PROFILE_LEVEL_ID") && "h264" === n && (d = a.videoCodecs.filter(e => {
          var t, i;
          return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(n) && (null == e || null === (i = e.fmtp) || void 0 === i ? void 0 : i.parameters["profile-level-id"]) === GE("H264_PROFILE_LEVEL_ID");
        })), !d || 0 === (null === (u = d) || void 0 === u ? void 0 : u.length)) {
          const e = c.videoCodecs.filter(e => {
            var t;
            return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(n);
          });
          0 !== e.length && (d = a.videoCodecs.filter(t => e.some(e => e.payloadType === t.payloadType)));
        }
        if (GE("USE_PUB_RTX")) {
          const e = d.map(e => e.payloadType.toString()),
            t = a.videoCodecs.filter(t => {
              var i, n;
              return "rtx" === (null === (i = t.rtpMap) || void 0 === i ? void 0 : i.encodingName) && e.includes((null === (n = t.fmtp) || void 0 === n ? void 0 : n.parameters.apt) || "");
            });
          d = [...d, ...t];
        }
        if (0 === d.length) OE.warning("codec ".concat(n, " not included in rtpCapabilities, fallback to default payloads: ").concat(null === (l = a.videoCodecs[0].rtpMap) || void 0 === l ? void 0 : l.encodingName)), d = a.videoCodecs;
      } else d = a.audioCodecs.filter(e => {
        var t;
        return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(r);
      }), 0 === d.length && (OE.warning("codec ".concat(r, " not included in rtpCapabilities, fallback to opus")), d = a.audioCodecs.filter(e => {
        var t;
        return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes("opus");
      }));
      const h = s === AS.VIDEO ? a.videoExtensions : a.audioExtensions;
      this.currentMidIndex += 1;
      const p = "".concat(this.currentMidIndex);
      let _ = {
        media: {
          mediaType: s,
          port: PN,
          protos: ["UDP", "TLS", "RTP", "SAVPF"],
          fmts: d.map(e => e.payloadType.toString(10))
        },
        connections: [{
          nettype: "IN",
          addrtype: "IP4",
          address: "127.0.0.1"
        }],
        bandwidths: [],
        attributes: {
          iceUfrag: this.iceParameters.iceUfrag,
          icePwd: this.iceParameters.icePwd,
          unrecognized: [],
          candidates: this.candidates,
          extmaps: h,
          fingerprints: this.dtlsParameters.fingerprints,
          imageattr: [],
          msids: [],
          remoteCandidatesList: [],
          rids: [],
          ssrcs: t,
          ssrcGroups: [],
          rtcpFeedbackWildcards: [],
          payloads: d,
          rtcp: {
            port: "9",
            netType: "IN",
            addressType: "IP4",
            address: "0.0.0.0"
          },
          setup: this.setup,
          direction: i,
          rtcpMux: !0,
          rtcpRsize: !0,
          mid: "".concat(p)
        }
      };
      _ = this.mungRecvMediaDsec(_, e, o);
      const E = this.findFirstClosedMedia(s);
      if (E) {
        const e = this.sessionDesc.mediaDescriptions.indexOf(E);
        this.sessionDesc.mediaDescriptions[e] = _;
      } else this.sessionDesc.mediaDescriptions.push(_);
      return _;
    }
    createOrRecycleSendMedia(e, t, i, n, r) {
      const o = this.rtpCapabilities.send,
        s = e === AS.VIDEO ? o.videoCodecs : o.audioCodecs,
        a = e === AS.VIDEO ? o.videoExtensions : o.audioExtensions;
      this.currentMidIndex += 1;
      const c = "".concat(this.currentMidIndex);
      let d = {
        media: {
          mediaType: e,
          port: PN,
          protos: ["UDP", "TLS", "RTP", "SAVPF"],
          fmts: s.map(e => e.payloadType.toString(10))
        },
        connections: [{
          nettype: "IN",
          addrtype: "IP4",
          address: "127.0.0.1"
        }],
        bandwidths: [],
        attributes: {
          iceUfrag: this.iceParameters.iceUfrag,
          icePwd: this.iceParameters.icePwd,
          unrecognized: [],
          candidates: this.candidates,
          extmaps: a,
          fingerprints: this.dtlsParameters.fingerprints,
          imageattr: [],
          msids: [],
          remoteCandidatesList: [],
          rids: [],
          ssrcs: t,
          ssrcGroups: i,
          rtcpFeedbackWildcards: [],
          payloads: s,
          rtcp: {
            port: "9",
            netType: "IN",
            addressType: "IP4",
            address: "0.0.0.0"
          },
          setup: this.setup,
          direction: n,
          rtcpMux: !0,
          rtcpRsize: !0,
          mid: "".concat(c)
        }
      };
      d = this.mungSendMediaDesc(d, r);
      const u = this.findFirstClosedMedia(e);
      if (u) {
        const e = this.sessionDesc.mediaDescriptions.indexOf(u);
        this.sessionDesc.mediaDescriptions[e] = d;
      } else this.sessionDesc.mediaDescriptions.push(d);
      return d;
    }
    updateBundleMids() {
      this.sessionDesc.attributes.groups[0].identificationTag = this.sessionDesc.mediaDescriptions.filter(e => "0" !== e.media.port).map(e => e.attributes.mid);
    }
    mungRecvMediaDsec(e, t, i) {
      const n = uC(e);
      return KO(n), HO(n, t), YO(n, t), qO(n), JO(n, i, this.localCapabilities.send), n;
    }
    mungSendMediaDesc(e, t) {
      const i = uC(e);
      return JO(i, t, this.localCapabilities.recv), $O(i), i;
    }
    updateRecvMedia(e, t) {
      const i = this.sessionDesc.mediaDescriptions.findIndex(t => t.attributes.mid === e);
      if (-1 !== i) {
        const e = this.mungRecvMediaDsec(this.sessionDesc.mediaDescriptions[i], t);
        this.sessionDesc.mediaDescriptions[i] = e;
      }
    }
    bumpMid(e) {
      this.currentMidIndex += e;
    }
    findFirstClosedMedia(e) {
      return this.sessionDesc.mediaDescriptions.find(t => Kh() ? "0" === t.media.port && t.media.mediaType === e : "0" === t.media.port);
    }
    findPreloadMediaDesc(e) {
      return this.sessionDesc.mediaDescriptions.find(t => {
        var i, n;
        return (null === (i = t.attributes) || void 0 === i || null === (n = i.ssrcs[0]) || void 0 === n ? void 0 : n.ssrcId) === e[0].ssrcId;
      });
    }
    getSSRC(e) {
      var t;
      return null === (t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e)) || void 0 === t ? void 0 : t.attributes.ssrcs;
    }
  }
  var MN;
  function UN(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function xN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? UN(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : UN(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let VN = (ag((MN = class e extends YS {
    get currentLocalDescription() {
      return this.peerConnection.currentLocalDescription;
    }
    get currentRemoteDescription() {
      return this.peerConnection.currentRemoteDescription;
    }
    get peerConnectionState() {
      return this.peerConnection.connectionState;
    }
    get iceConnectionState() {
      return this.peerConnection.iceConnectionState;
    }
    get dtlsTransportState() {
      var e, t, i;
      return null !== (e = null === (t = this.peerConnection.getReceivers()[0]) || void 0 === t || null === (i = t.transport) || void 0 === i ? void 0 : i.state) && void 0 !== e ? e : null;
    }
    constructor(t, i) {
      super(t, i), _p(this, "store", void 0), _p(this, "peerConnection", void 0), _p(this, "remoteSDP", void 0), _p(this, "initialOffer", void 0), _p(this, "transportEventReceiver", void 0), _p(this, "statsFilter", void 0), _p(this, "localCapabilities", void 0), _p(this, "localCandidateCount", 0), _p(this, "allCandidatesReceived", !1), _p(this, "selectedCandidatePairTimer", void 0), _p(this, "establishPromise", void 0), _p(this, "mutex", new Ug("P2PConnection-mutex")), this.store = i, this.peerConnection = new RTCPeerConnection(e.resolvePCConfiguration(t), {
        optional: [{
          googDscp: !0
        }]
      }), this.statsFilter = vN(this.peerConnection, GE("STATS_UPDATE_INTERVAL"), void 0, Kh() ? 1200 : void 0), this.bindPCEvents(), this.bindStatsEvents(), this.store.p2pId = this.store.p2pId + 1, this.establishPromise = this.establish();
    }
    async establish() {
      try {
        this.peerConnection.addTransceiver("video", {
          direction: "recvonly"
        }), this.peerConnection.addTransceiver("audio", {
          direction: "recvonly"
        });
        const e = await this.peerConnection.createOffer();
        if (!e.sdp) throw new Error("Cannot get initialOffer.sdp when trying to establish PeerConnection.");
        const t = FO(e.sdp),
          i = await zO(!GE("USE_PUB_RTX") && !GE("USE_SUB_RTX"), GE("FILTER_VIDEO_FEC"), GE("FILTER_AUDIO_FEC"));
        return this.localCapabilities = ZO(i), this.initialOffer = e, xN(xN({}, t), {}, {
          rtpCapabilities: i,
          offerSDP: e.sdp
        });
      } catch (e) {
        throw new SE(fE.GET_LOCAL_CONNECTION_PARAMS_FAILED, e.toString());
      }
    }
    async connect(e, t, i, n, r, o) {
      try {
        if (!this.initialOffer) throw new Error("Cannot establish P2PConnection without initial offer.");
        this.remoteSDP = new kN({
          remoteIceParameters: e,
          remoteDtlsParameters: t,
          candidates: i,
          remoteRTPCapabilities: n,
          remoteSetup: r,
          localCapabilities: this.localCapabilities,
          cname: o
        });
        const s = this.remoteSDP.toString(),
          a = UO.exports.parse(this.initialOffer.sdp),
          c = a.mediaDescriptions.find(e => "audio" === e.media.mediaType);
        c && $O(c);
        const d = UO.exports.print(a),
          u = this.logSDPExchange(d || "", "offer", "local", "connect");
        this.store.descriptionStart(), await this.peerConnection.setLocalDescription({
          type: "offer",
          sdp: d
        }), null == u || u(s), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: s
        });
        const l = this.peerConnection.getTransceivers()[0];
        if (null != l && l.receiver && this.tryBindTransportEvents(l.receiver), GE("PRELOAD_MEDIA_COUNT") > 0) {
          this.remoteSDP.preloadRemoteMedia();
          const e = this.remoteSDP.toString();
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: e
          });
          const t = await this.peerConnection.createAnswer();
          await this.peerConnection.setLocalDescription(t);
        }
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.connect failed; ".concat(e.toString()));
      }
    }
    send(e, t, i) {
      var n = this;
      return DO(function* () {
        const r = yield PO(n.mutex.lock("From P2PConnection.send"));
        try {
          if (!n.remoteSDP) throw new Error("Cannot call P2PConnection.send before remote SDP created");
          const o = [];
          e.forEach(e => {
            const t = n.peerConnection.addTransceiver(e._mediaStreamTrack, {
              direction: "sendonly"
            });
            o.push(t), e._updateRtpTransceiver(t);
          }), Kh() && !0 === GE("SIMULCAST") && (yield PO(n.applySimulcastForFirefox(o, e)));
          const s = yield PO(n.peerConnection.createOffer()),
            a = n.remoteSDP.predictReceivingMids(e.length),
            c = n.mungSendOfferSDP(s.sdp, e, a),
            d = UO.exports.parse(c),
            u = a.map(e => {
              const t = d.mediaDescriptions.find(t => t.attributes.mid === e);
              if (!t) throw new Error("Cannot extract ssrc from mediaDescription.");
              return BO(t, GE("USE_PUB_RTX"));
            });
          let l;
          try {
            l = yield u;
          } catch (r) {
            l = [], n.remoteSDP.receive(e, t, i, l);
            const o = n.remoteSDP.toString();
            throw yield PO(n.peerConnection.setLocalDescription({
              type: "offer",
              sdp: c
            })), yield PO(n.peerConnection.setRemoteDescription({
              type: "answer",
              sdp: o
            })), yield PO(n.stopSending(a, !0)), r;
          }
          n.remoteSDP.receive(e, t, i, l);
          const h = n.remoteSDP.toString(),
            p = n.logSDPExchange(c, "offer", "local", "send");
          return yield PO(n.peerConnection.setLocalDescription({
            type: "offer",
            sdp: c
          })), yield PO(n.applySimulcastEncodings(o, e)), yield PO(n.applySendEncodings(o, e)), null == p || p(h), yield PO(n.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: h
          })), o.map((e, t) => {
            const i = a[t];
            return {
              localSSRC: u[t],
              id: i,
              transceiver: e
            };
          });
        } catch (e) {
          throw e instanceof SE ? e : new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.send failed; ".concat(e.toString()));
        } finally {
          r();
        }
      })();
    }
    async stopSending(e, t) {
      const i = t ? void 0 : await this.mutex.lock("From P2PConnection.stopSending");
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.stopSending before remote SDP created");
        const t = this.peerConnection.getTransceivers().filter(t => -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length when trying to call P2PConnection.stopSending.");
        t.map(e => {
          var t;
          e.direction = "inactive", null === (t = e.stop) || void 0 === t || t.call(e);
        });
        const n = await this.peerConnection.createOffer(),
          r = this.logSDPExchange(n.sdp || "", "offer", "local", "stopSending");
        await this.peerConnection.setLocalDescription(n), this.remoteSDP.stopReceiving(e);
        const o = this.remoteSDP.toString();
        null == r || r(o), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: o
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.stopSending failed; ".concat(e.toString()));
      } finally {
        i && i();
      }
    }
    async receive(e, t, i, n) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.receive ".concat(e, " before remoteSDP created."));
        const {
          mid: r,
          needExchangeSDP: o
        } = this.remoteSDP.send(e, t, i, n);
        if (o) {
          const t = this.remoteSDP.toString(),
            i = this.logSDPExchange(t, "offer", "remote", "receive");
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: t
          });
          const n = await this.peerConnection.createAnswer(),
            o = this.mungReceiveAnswerSDP(n.sdp, r, e);
          null == i || i(o || ""), await this.peerConnection.setLocalDescription({
            type: "answer",
            sdp: o
          }), OE.debug("[".concat(this.store.clientId, "] [P2PConnection] receive ").concat(e, " by exchanging SDP."));
        } else OE.debug("[".concat(this.store.clientId, "] [P2PConnection] receive ").concat(e, " no need to exchange SDP."));
        const s = this.peerConnection.getTransceivers().find(e => e.mid === r);
        if (!s) throw new Error("Cannot get transceiver after setLocalDescription.");
        return {
          track: s.receiver.track,
          id: r,
          transceiver: s
        };
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.receive failed; ".concat(e.toString()));
      }
    }
    async batchReceive(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.batchReceive before remoteSDP created.");
        const {
          mids: t,
          needExchangeSDP: i
        } = this.remoteSDP.batchSend(e);
        if (i) {
          const e = this.remoteSDP.toString(),
            t = this.logSDPExchange(e, "offer", "remote", "receive");
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: e
          });
          const i = await this.peerConnection.createAnswer();
          null == t || t(i.sdp || ""), await this.peerConnection.setLocalDescription(i), OE.debug("[".concat(this.store.clientId, "] [P2PConnection] batchReceive by exchanging SDP."));
        } else OE.debug("[".concat(this.store.clientId, "] [P2PConnection] batchReceive no need to exchange SDP."));
        return t.map(e => {
          const t = this.peerConnection.getTransceivers().find(t => t.mid === e);
          if (!t) throw new Error("Cannot get transceiver after setLocalDescription.");
          return {
            track: t.receiver.track,
            id: e,
            transceiver: t
          };
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.receive failed; ".concat(e.toString()));
      }
    }
    async stopReceiving(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.stopReceiving before remote SDP created.");
        this.remoteSDP.stopSending(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "stopReceiving");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection stopReceiving failed; ".concat(e.toString()));
      }
    }
    async muteRemote(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.muteRemote mid=".concat(e, " before remote SDP created."));
        this.remoteSDP.mute(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "muteRemote");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.muteRemote failed; ".concat(e.toString()));
      }
    }
    async unmuteRemote(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.unmuteRemote mid=".concat(e, " before remote SDP created."));
        this.remoteSDP.unmute(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "unmuteRemote");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.unmuteRemote failed; ".concat(e.toString()));
      }
    }
    async muteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.muteLocal before remote SDP created.");
        const t = this.peerConnection.getTransceivers().filter(t => t.mid && -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length.");
        t.map(e => {
          e.direction = "inactive";
        });
        const i = await this.peerConnection.createOffer(),
          n = this.logSDPExchange(i.sdp || "", "offer", "local", "muteLocal");
        await this.peerConnection.setLocalDescription(i), this.remoteSDP.muteRemote(e);
        const r = this.remoteSDP.toString();
        null == n || n(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.muteLocal failed; ".concat(e.toString()));
      }
    }
    async unmuteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.unmuteLocal before remote SDP created.");
        const t = this.peerConnection.getTransceivers().filter(t => t.mid && -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length.");
        t.map(async (e, t) => {
          e.direction = "sendonly";
        });
        const i = await this.peerConnection.createOffer(),
          n = this.logSDPExchange(i.sdp || "", "offer", "local", "unmuteLocal");
        await this.peerConnection.setLocalDescription(i), this.remoteSDP.unmuteRemote(e);
        const r = this.remoteSDP.toString();
        null == n || n(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "P2PConnection.unmuteLocal failed; ".concat(e.toString()));
      }
    }
    restartICE(e) {
      var t = this;
      return DO(function* () {
        const i = yield PO(t.mutex.lock("From P2PConnection.restartICE"));
        try {
          if (!t.remoteSDP) throw new Error("Cannot restartICE before remoteSDP created.");
          if (JS().supportPCSetConfiguration) {
            const i = t.peerConnection.getConfiguration(),
              n = e === OS.RELAY ? "relay" : "all";
            i.iceTransportPolicy !== n && (OE.debug("[".concat(t.store.clientId, "] restartICE change iceTransportPolicy from [").concat(i.iceTransportPolicy, "] to [").concat(n, "]")), i.iceTransportPolicy = n, t.peerConnection.setConfiguration(i));
          } else if (e === OS.RELAY) return;
          e !== OS.RELAY && t.remoteSDP.updateCandidates(e);
          const n = yield PO(t.peerConnection.createOffer({
            iceRestart: !0
          }));
          if (!n.sdp) throw new Error("Cannot restartICE because restart offer SDP does not exist.");
          const r = FO(n.sdp),
            {
              remoteIceParameters: o
            } = yield r.iceParameters;
          t.remoteSDP.restartICE(o);
          const s = t.remoteSDP.toString(),
            a = t.logSDPExchange(n.sdp || "", "offer", "local", "restartICE");
          t.store.descriptionStart(), yield PO(t.peerConnection.setLocalDescription(n)), null == a || a(s), yield PO(t.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: s
          }));
        } catch (e) {
          OE.warning("[".concat(t.store.clientId, "] restart ICE failed, abort operation"), e);
        } finally {
          i();
        }
      })();
    }
    close() {
      var e;
      this.peerConnection.close(), null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, "closed"), this.tryUnbindTransportEvents(), this.unbindPCEvents(), this.unbindStatsEvents(), this.removeAllListeners(), this.transportEventReceiver = void 0, this.statsFilter.destroy();
    }
    getStats() {
      return this.statsFilter.getStats();
    }
    getRemoteVideoIsReady(e) {
      return this.statsFilter.getVideoIsReady(e);
    }
    async updateEncoderConfig(e, t) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call P2PConnection.updateEncoderConfig before remote SDP created.");
        const i = await this.peerConnection.createOffer(),
          n = this.mungSendOfferSDP(i.sdp, [t], [e]);
        this.remoteSDP.updateRecvMedia(e, t);
        const r = this.remoteSDP.toString(),
          o = this.logSDPExchange(n, "offer", "local", "updateEncoderConfig");
        await this.peerConnection.setLocalDescription({
          type: "offer",
          sdp: n
        }), null == o || o(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, e.toString());
      }
    }
    async updateSendParameters(e, t) {
      const i = this.peerConnection.getTransceivers().filter(t => t.mid === e);
      1 === i.length && (this.isVP8Simulcast(t) ? Kh() || (await this.applySimulcastEncodings(i, [t])) : await this.applySendEncodings(i, [t]));
    }
    setStatsRemoteVideoIsReady(e, t) {
      this.statsFilter.setVideoIsReady2(e, t);
    }
    async replaceTrack(e, t) {
      const i = this.peerConnection.getTransceivers().find(e => e.mid === t);
      i && (await i.sender.replaceTrack(e._mediaStreamTrack));
    }
    async getSelectedCandidatePair() {
      const e = this.peerConnection.getReceivers();
      if (e.length > 0 && e[0].transport && e[0].transport.iceTransport && e[0].transport.iceTransport.getSelectedCandidatePair && e[0].transport.iceTransport.getSelectedCandidatePair()) {
        const t = e[0].transport.iceTransport,
          {
            local: i,
            remote: n
          } = t.getSelectedCandidatePair();
        return {
          local: xN(xN({}, cN), {}, {
            candidateType: i.type,
            protocol: i.protocol,
            address: i.address,
            port: i.port
          }),
          remote: xN(xN({}, cN), {}, {
            candidateType: n.type,
            protocol: n.protocol,
            address: n.address,
            port: n.port
          })
        };
      }
      return this.statsFilter.getSelectedCandidatePair();
    }
    bindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = () => {
        var e;
        null === (e = this.onICEConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.iceConnectionState);
      }, this.peerConnection.onconnectionstatechange = () => {
        var e;
        null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.connectionState);
      }, this.peerConnection.onicecandidate = e => {
        e.candidate ? this.localCandidateCount += 1 : (this.peerConnection.onicecandidate = null, this.allCandidatesReceived = !0, OE.debug("[".concat(this.store.clientId, "] [pc-").concat(this.store.p2pId, "] local candidate count"), this.localCandidateCount));
      }, setTimeout(() => {
        this.allCandidatesReceived || (this.allCandidatesReceived = !0, OE.debug("[".concat(this.store.clientId, "] [pc-").concat(this.store.p2pId, "] onicecandidate timeout, local candidate count"), this.localCandidateCount));
      }, GE("CANDIDATE_TIMEOUT"));
    }
    unbindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = null, this.peerConnection.onconnectionstatechange = null, this.peerConnection.onsignalingstatechange = null, this.peerConnection.onicecandidateerror = null, this.peerConnection.onicecandidate = null, this.peerConnection.ontrack = null;
    }
    static resolvePCConfiguration(t) {
      const i = {
        iceServers: []
      };
      return t.iceServers ? i.iceServers = t.iceServers : t.turnServer && "off" !== t.turnServer.mode && (Uf(t.turnServer.servers) ? i.iceServers = t.turnServer.servers : (i.iceServers && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.servers)), GE("USE_TURN_SERVER_OF_GATEWAY") && i.iceServers && t.turnServer.serversFromGateway && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.serversFromGateway)), GE("FORCE_TURN_TCP") ? i.iceTransportPolicy = "relay" : t.turnServer.servers.concat(t.turnServer.serversFromGateway || []).forEach(e => {
        e.forceturn && (i.iceTransportPolicy = "relay");
      }))), GE("ENABLE_ENCODED_TRANSFORM") && JS().supportWebRTCEncodedTransform && (i.encodedInsertableStreams = !0), i;
    }
    static turnServerConfigToIceServers(e) {
      const t = [];
      return e.forEach(e => {
        e.security ? e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turns:".concat(VI(e.turnServerURL), ":").concat(e.tcpport, "?transport=tcp")
        }) : (e.udpport && !GE("FORCE_TURN_TCP") && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.udpport, "?transport=udp")
        }), e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.tcpport, "?transport=tcp")
        }));
      }), t;
    }
    tryBindTransportEvents(e) {
      const t = e.transport;
      if (t) {
        this.transportEventReceiver = e, t.onstatechange = () => {
          var e;
          null != t && t.state && (null === (e = this.onDTLSTransportStateChange) || void 0 === e || e.call(this, t.state));
        }, t.onerror = e => {
          var t;
          null === (t = this.onDTLSTransportError) || void 0 === t || t.call(this, "error" in e ? e.error : e);
        };
        const i = t.iceTransport;
        i && (i.onstatechange = () => {
          const e = null == t ? void 0 : t.iceTransport.state;
          var i;
          e && (null === (i = this.onICETransportStateChange) || void 0 === i || i.call(this, e));
        }, i.getSelectedCandidatePair && (i.onselectedcandidatepairchange = () => {
          if (i.getSelectedCandidatePair()) {
            const {
              local: e,
              remote: t
            } = i.getSelectedCandidatePair();
            OE.info("[".concat(this.store.clientId, "] [pc-").concat(this.store.p2pId, "] selectedcandidatepairchange: local ").concat(JSON.stringify({
              candidateType: e.type,
              protocol: e.protocol
            }), ", remote ").concat(JSON.stringify({
              candidateType: t.type,
              protocol: t.protocol,
              address: t.address,
              port: t.port
            }), " )"));
          }
        }));
      }
    }
    tryUnbindTransportEvents() {
      this.transportEventReceiver && this.transportEventReceiver.transport && (this.transportEventReceiver.transport.onstatechange = null, this.transportEventReceiver.transport.onerror = null, this.transportEventReceiver.transport.iceTransport && (this.transportEventReceiver.transport.iceTransport.onstatechange = null));
    }
    async applySendEncodings(e, t) {
      try {
        if (!JS().supportSetRtpSenderParameters) return;
        if (e.length !== t.length) return;
        for (let c = 0; c < e.length; c++) {
          const d = e[c],
            u = t[c];
          if (u && u instanceof Cy) {
            var i, n;
            if (this.isVP8Simulcast(u)) continue;
            const e = {},
              t = {};
            switch (u._optimizationMode) {
              case "motion":
                e.degradationPreference = "maintain-framerate";
                break;
              case "detail":
                e.degradationPreference = "maintain-resolution";
                break;
              default:
                e.degradationPreference = "balanced";
            }
            var r, o, s, a;
            if (null !== (i = u._encoderConfig) && void 0 !== i && i.bitrateMax) t.maxBitrate = 1000 * (null === (r = u._encoderConfig) || void 0 === r ? void 0 : r.bitrateMax);
            if (u._hints.includes(lS.LOW_STREAM)) null !== (o = u._encoderConfig) && void 0 !== o && o.frameRate && (t.maxFramerate = FI(u._encoderConfig.frameRate)), null !== (s = u._encoderConfig) && void 0 !== s && s.scaleResolutionDownBy && (null === (a = u._encoderConfig) || void 0 === a ? void 0 : a.scaleResolutionDownBy) > 1 && (t.scaleResolutionDownBy = u._encoderConfig.scaleResolutionDownBy);
            if (GE("DSCP_TYPE") && rp()) {
              const e = GE("DSCP_TYPE");
              ["very-low", "low", "medium", "high"].includes(e) && (t.networkPriority = e);
            }
            const c = d.sender.getParameters(),
              l = null === (n = c.encodings) || void 0 === n ? void 0 : n[0];
            Kh() && !l && (e.encodings = [t]), l && Object.assign(l, t), Object.assign(c, e), await d.sender.setParameters(c);
          }
        }
      } catch (e) {
        OE.debug("[".concat(this.store.clientId, "] Apply RTPSendEncodings failed."));
      }
    }
    mungSendOfferSDP(e, t, i) {
      const n = UO.exports.parse(e);
      return t.forEach((e, t) => {
        const r = i[t],
          o = n.mediaDescriptions.find(e => e.attributes.mid === r);
        o && (HO(o, e), XO(o, e, this.store.codec));
      }), UO.exports.print(n);
    }
    mungReceiveAnswerSDP(e, t, i) {
      const n = UO.exports.parse(e),
        r = n.mediaDescriptions.find(e => e.attributes.mid === t);
      return r && i === AS.AUDIO && "audio" === r.media.mediaType && $O(r), UO.exports.print(n);
    }
    bindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = e => {
        var t;
        null === (t = this.onFirstAudioReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoReceived = e => {
        var t;
        null === (t = this.onFirstVideoReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstAudioDecoded = e => {
        var t;
        null === (t = this.onFirstAudioDecoded) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoDecoded = (e, t, i) => {
        var n;
        null === (n = this.onFirstVideoDecoded) || void 0 === n || n.call(this, e, t, i);
      }, this.statsFilter.onSelectedLocalCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedLocalCandidateChanged) || void 0 === i || i.call(this, e, t);
      }, this.statsFilter.onSelectedRemoteCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedRemoteCandidateChanged) || void 0 === i || i.call(this, e, t);
      }, this.statsFilter.onFirstVideoDecodedTimeout = e => {
        var t;
        null === (t = this.onFirstVideoDecodedTimeout) || void 0 === t || t.call(this, e);
      };
    }
    unbindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = void 0, this.statsFilter.onFirstVideoReceived = void 0, this.statsFilter.onFirstAudioDecoded = void 0, this.statsFilter.onFirstVideoDecoded = void 0, this.statsFilter.onSelectedLocalCandidateChanged = void 0, this.statsFilter.onSelectedRemoteCandidateChanged = void 0, this.statsFilter.onFirstVideoDecodedTimeout = void 0;
    }
    async applySimulcastForFirefox(e, t) {
      if (e.length === t.length) for (let s = 0; s < e.length; s++) {
        var i, n, r, o;
        const a = e[s],
          c = t[s];
        if (c instanceof Cy && !c._hints.includes(lS.LOW_STREAM) && null !== (i = c._encoderConfig) && void 0 !== i && i.bitrateMax && (null === (n = c._encoderConfig) || void 0 === n ? void 0 : n.bitrateMax) > 200 && null !== (r = c._scalabiltyMode) && void 0 !== r && r.numSpatialLayers && (null === (o = c._scalabiltyMode) || void 0 === o ? void 0 : o.numSpatialLayers) > 1 && "vp8" === this.store.codec) {
          const e = {},
            t = {
              high: 1000 * (c._encoderConfig.bitrateMax - 50),
              medium: 50000
            };
          e.encodings = [{
            rid: "m",
            active: !0,
            maxBitrate: t.medium,
            scaleResolutionDownBy: 4
          }, {
            rid: "h",
            active: !0,
            maxBitrate: t.high
          }];
          const i = a.sender.getParameters();
          await a.sender.setParameters(Object.assign(i, e));
        }
      }
    }
    async applySimulcastEncodings(e, t) {
      if (!Kh() && e.length === t.length) for (let i = 0; i < e.length; i++) {
        const n = t[i];
        if (n instanceof Cy && this.isVP8Simulcast(n)) {
          const t = e[i],
            r = {},
            o = {
              high: 1000 * (n._encoderConfig.bitrateMax - 50),
              medium: 50000
            };
          r.encodings = [{
            active: !0,
            adaptivePtime: !1,
            networkPriority: "high",
            priority: "high",
            maxBitrate: o.high
          }, {
            active: !0,
            adaptivePtime: !1,
            networkPriority: "low",
            priority: "low",
            maxBitrate: o.medium,
            scaleResolutionDownBy: 4
          }];
          const s = t.sender.getParameters();
          await t.sender.setParameters(Object.assign(s, r));
        }
      }
    }
    isVP8Simulcast(e) {
      var t, i, n, r;
      return !!(e instanceof Cy && GE("SIMULCAST") && "vp8" === this.store.codec && !e._hints.includes(lS.LOW_STREAM) && null !== (t = e._encoderConfig) && void 0 !== t && t.bitrateMax && (null === (i = e._encoderConfig) || void 0 === i ? void 0 : i.bitrateMax) > 200 && null !== (n = e._scalabiltyMode) && void 0 !== n && n.numSpatialLayers && (null === (r = e._scalabiltyMode) || void 0 === r ? void 0 : r.numSpatialLayers) > 1);
    }
    logSDPExchange(e, t, i, n) {
      if (GE("SDP_LOGGING")) return OE.upload("[".concat(this.store.clientId, "] exchanging ").concat(i, " ").concat(t, " SDP during P2PConnection.").concat(n, "\n"), e), "offer" === t ? e => {
        this.logSDPExchange(e, "answer", "local" === i ? "remote" : "local", n);
      } : void 0;
    }
    async getRemoteSSRC(e) {
      if (!this.remoteSDP) return;
      const t = this.remoteSDP.getSSRC(e);
      return null == t ? void 0 : t[0].ssrcId;
    }
    setConfiguration(t) {
      if (JS().supportPCSetConfiguration) {
        const i = e.resolvePCConfiguration(t);
        this.peerConnection.setConfiguration(i);
      }
    }
  }).prototype, "connect", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "connect"), MN.prototype), ag(MN.prototype, "receive", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "receive"), MN.prototype), ag(MN.prototype, "batchReceive", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "batchReceive"), MN.prototype), ag(MN.prototype, "stopReceiving", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "stopReceiving"), MN.prototype), ag(MN.prototype, "muteRemote", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "muteRemote"), MN.prototype), ag(MN.prototype, "unmuteRemote", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "unmuteRemote"), MN.prototype), ag(MN.prototype, "muteLocal", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "muteLocal"), MN.prototype), ag(MN.prototype, "unmuteLocal", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "unmuteLocal"), MN.prototype), ag(MN.prototype, "close", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "close"), MN.prototype), ag(MN.prototype, "updateEncoderConfig", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "updateEncoderConfig"), MN.prototype), ag(MN.prototype, "updateSendParameters", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "updateSendParameters"), MN.prototype), ag(MN.prototype, "replaceTrack", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "replaceTrack"), MN.prototype), ag(MN.prototype, "getRemoteSSRC", [jN], Object.getOwnPropertyDescriptor(MN.prototype, "getRemoteSSRC"), MN.prototype), MN);
  function jN(e, t, i) {
    const n = e[t];
    if ("function" != typeof n) throw new Error("Cannot use mutex on object property.");
    return i.value = async function () {
      const e = (this || _global).mutex,
        i = await e.lock("From P2PConnection.".concat(t));
      try {
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return await n.apply(this || _global, o);
      } finally {
        i();
      }
    }, i;
  }
  function FN(e, t) {
    let i = document.createElement("video"),
      n = document.createElement("canvas");
    i.setAttribute("style", "display:none"), n.setAttribute("style", "display:none"), i.setAttribute("muted", ""), i.muted = !0, i.setAttribute("autoplay", ""), i.autoplay = !0, i.setAttribute("playsinline", ""), n.width = FI(t.width), n.height = FI(t.height);
    const r = FI(t.framerate || 15);
    document.body.append(i), document.body.append(n);
    let o = e._mediaStreamTrack;
    i.srcObject = new MediaStream([o]), i.play();
    const s = n.getContext("2d");
    if (!s) throw new SE(fE.UNEXPECTED_ERROR, "can not get canvas context");
    const a = JS(),
      c = n.captureStream(a.supportRequestFrame ? 0 : r).getVideoTracks()[0],
      d = Jg(() => (() => {
        if (i.paused && i.play(), i.videoHeight > 2 && i.videoWidth > 2) {
          const e = i.videoWidth,
            t = i.videoHeight / e,
            r = n.width * t;
          Math.abs(r - n.height) >= 2 && (OE.debug("adjust low stream resolution", "".concat(n.width, "x").concat(n.height, " -> ").concat(n.width, "x").concat(r)), n.height = r);
        }
        s.drawImage(i, 0, 0, n.width, n.height), c.requestFrame && c.requestFrame(), o !== e._mediaStreamTrack && (o = e._mediaStreamTrack, i.srcObject = new MediaStream([o]));
      })(), r),
      u = c.stop;
    return c.stop = () => {
      u.call(c), d(), i && (i.remove(), i = null), n && (n.width = 0, n.remove(), n = null), OE.debug("clean low stream renderer");
    }, c;
  }
  var BN, GN, WN, HN, KN, YN, qN, JN, XN, zN, QN, ZN;
  function $N(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function eb(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $N(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : $N(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class tb extends Lg {
    getUserId() {
      return this._userId;
    }
    constructor(e, t, i, n) {
      super(e, "track-".concat(e.kind, "-").concat(t, "-").concat(n.clientId, "_").concat(ZI(5, ""))), _p(this, "_userId", void 0), _p(this, "_uintId", void 0), _p(this, "_isDestroyed", !1), _p(this, "store", void 0), _p(this, "processor", void 0), _p(this, "processorContext", void 0), this._userId = t, this._uintId = i, this.store = n;
    }
    _updateOriginMediaStreamTrack(e) {
      this._originMediaStreamTrack = e, this._mediaStreamTrack = e, this._updatePlayerSource(), this.processor && this.processor.updateInput({
        track: this._originMediaStreamTrack,
        context: this.processorContext
      });
    }
    _destroy() {
      this._isDestroyed = !0, OE.info("[".concat(this.getTrackId(), "] is destroyed")), this.stop(), super.close();
    }
    getProcessorStats() {
      return this.processorContext.gatherStats();
    }
    getProcessorUsage() {
      return this.processorContext.gatherUsage();
    }
  }
  let ib = (BN = Dg({
      argsMap: (e, t, i) => [e.getTrackId(), "string" == typeof t ? t : t instanceof HTMLVideoElement ? "HTMLVideoElement" : "HTMLElement", i]
    }), GN = Dg({
      argsMap: e => [e.getTrackId()]
    }), WN = Dg({
      argsMap: (e, t) => [e.getTrackId(), t.name]
    }), HN = Dg({
      argsMap: e => [e.getTrackId()]
    }), ag((KN = class extends tb {
      get isPlaying() {
        return !(!this._player || this._player.videoElementStatus !== sf.PLAYING);
      }
      get __className__() {
        return "RemoteVideoTrack";
      }
      constructor(e, t, i, n) {
        super(e, t, i, n), _p(this, "_videoVisibleTimer", null), _p(this, "_previousVideoVisibleStatus", void 0), _p(this, "_clearPreviousVideoVisibleStatus", () => this._previousVideoVisibleStatus = void 0), _p(this, "trackMediaType", "video"), _p(this, "_videoWidth", void 0), _p(this, "_videoHeight", void 0), _p(this, "_player", void 0), _p(this, "processorDestination", void 0), _p(this, "processorContext", void 0), this.updateMediaStreamTrackResolution(), this.processorContext = new AR(this.getTrackId(), "remote"), this.processorDestination = new yR(this.processorContext), this.bindProcessorDestinationEvents();
      }
      getStats() {
        hC(() => {
          OE.warning("[deprecated] RemoteVideoTrack.getStats will be removed in the future, use AgoraRTCClient.getRemoteVideoStats instead");
        }, "remoteVideoTrackGetStatsWarning");
        return oC(this, uS.GET_STATS) || eb({}, Wf);
      }
      play(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" == typeof e) {
          const t = document.getElementById(e);
          t ? e = t : (OE.warning("[".concat(this.getTrackId(), "] can not find \"#").concat(e, "\" element, use document.body")), e = document.body);
        }
        OE.debug("[".concat(this.getTrackId(), "] start video playback in ").concat(e instanceof HTMLVideoElement ? "HTMLVideoElement" : "HTMLElement"), JSON.stringify(t));
        const i = eb(eb({
          fit: "cover"
        }, t), {}, {
          trackId: this.getTrackId(),
          element: e
        });
        this._player ? this._player.updateConfig(i) : (e instanceof HTMLVideoElement ? this._player = new Pv(i) : this._player = new kv(i), this._player.updateVideoTrack(this._mediaStreamTrack), this._player.onFirstVideoFrameDecoded = () => {
          this.store.subscribe(this.getUserId(), "video", void 0, void 0, Date.now()), this.safeEmit(fS.FIRST_FRAME_DECODED);
        }), this._player.play(this.store.sessionId || void 0), this._videoVisibleTimer && window.clearInterval(this._videoVisibleTimer), this._clearPreviousVideoVisibleStatus(), this._videoVisibleTimer = window.setInterval(() => {
          try {
            const e = this.getVideoElementVisibleStatus();
            this.safeEmit(fS.VIDEO_ELEMENT_VISIBLE_STATUS, e);
          } catch (e) {}
        }, GE("CHECK_VIDEO_VISIBLE_INTERVAL"));
      }
      stop() {
        this._player && (this._videoVisibleTimer && (window.clearInterval(this._videoVisibleTimer), this._videoVisibleTimer = null), this._clearPreviousVideoVisibleStatus(), this._player.destroy(), this._player = void 0, OE.debug("[".concat(this.getTrackId(), "] stop video playback")));
      }
      getCurrentFrameData() {
        return this._player ? this._player.getCurrentFrame() : new ImageData(2, 2);
      }
      updateMediaStreamTrackResolution() {
        tC(this._originMediaStreamTrack).then(e => {
          let [t, i] = e;
          this._videoHeight = i, this._videoWidth = t;
        }).catch(eC);
      }
      _updatePlayerSource() {
        OE.debug("[".concat(this.getTrackId(), "] update player source track")), this._player && this._player.updateVideoTrack(this._mediaStreamTrack);
      }
      getVideoElementVisibleStatus() {
        try {
          var e, t;
          const i = null == this || null === (e = this._player) || void 0 === e ? void 0 : e.getContainerElement(),
            n = {
              track: this,
              element: null == this || null === (t = this._player) || void 0 === t ? void 0 : t.getVideoElement(),
              slot: null == i ? void 0 : i.parentElement
            },
            {
              element: r,
              slot: o
            } = n;
          if (this.isPlaying && r instanceof HTMLVideoElement && o instanceof HTMLElement) {
            const e = gy.checkOneElementVisible(r),
              t = Object.assign({}, e);
            if (t.visible !== this._previousVideoVisibleStatus) {
              this._previousVideoVisibleStatus = t.visible;
              const e = Pg.reportApiInvoke(null, {
                tag: Ef.TRACER,
                name: _f.REMOTE_VIDEO_TRACK_GET_VIDEO_VISIBLE,
                options: [this.getTrackId()]
              });
              t.visible ? e.onSuccess("Video is visible") : e.onSuccess("Invisible because of ".concat(t.reason));
            }
            return t;
          }
          return;
        } catch (e) {
          throw new SE(fE.GET_VIDEO_ELEMENT_VISIBLE_ERROR, e.message);
        }
      }
      pipe(e) {
        if (this.processor === e) return e;
        if (e._source) throw new SE(fE.INVALID_OPERATION, "Processor ".concat(e.name, " already piped, please call unpipe beforehand."));
        return this.unpipe(), this.processor = e, this.processor._source = this, e.updateInput({
          track: this._originMediaStreamTrack,
          context: this.processorContext
        }), e;
      }
      unpipe() {
        if (!this.processor) return;
        const e = this.processor;
        this.processor._source = void 0, this.processor = void 0, e.reset();
      }
      bindProcessorDestinationEvents() {
        this.processorDestination.on(kS.ON_TRACK, async e => {
          e ? e !== this._mediaStreamTrack && (this._mediaStreamTrack = e, this._updatePlayerSource()) : this._mediaStreamTrack !== this._originMediaStreamTrack && (this._mediaStreamTrack = this._originMediaStreamTrack, this._updatePlayerSource());
        });
      }
      unbindProcessorDestinationEvents() {
        this.processorDestination.removeAllListeners(kS.ON_TRACK);
      }
      _destroy() {
        super._destroy(), this.unbindProcessorDestinationEvents();
      }
    }).prototype, "play", [BN], Object.getOwnPropertyDescriptor(KN.prototype, "play"), KN.prototype), ag(KN.prototype, "stop", [GN], Object.getOwnPropertyDescriptor(KN.prototype, "stop"), KN.prototype), ag(KN.prototype, "pipe", [WN], Object.getOwnPropertyDescriptor(KN.prototype, "pipe"), KN.prototype), ag(KN.prototype, "unpipe", [HN], Object.getOwnPropertyDescriptor(KN.prototype, "unpipe"), KN.prototype), KN),
    nb = (YN = Dg({
      argsMap: (e, t) => [e.getTrackId(), t],
      throttleTime: 300
    }), qN = Dg({
      argsMap: (e, t) => [e.getTrackId(), t]
    }), JN = Dg({
      argsMap: e => [e.getTrackId()]
    }), XN = Dg({
      argsMap: e => [e.getTrackId()]
    }), zN = Dg({
      argsMap: (e, t) => [e.getTrackId(), t.name]
    }), QN = Dg({
      argsMap: e => [e.getTrackId()]
    }), ag((ZN = class extends tb {
      get isPlaying() {
        return this._useAudioElement ? pR.isPlaying(this.getTrackId()) : this._source.isPlayed;
      }
      get __className__() {
        return "RemoteAudioTrack";
      }
      constructor(e, t, i, n) {
        super(e, t, i, n), _p(this, "trackMediaType", "audio"), _p(this, "_source", void 0), _p(this, "_useAudioElement", !0), _p(this, "_volume", 100), _p(this, "processorContext", void 0), _p(this, "processorDestination", void 0), _p(this, "_played", !1), _p(this, "_bypassWebAudio", !1), GE("DISABLE_WEBAUDIO") ? (this._source = new bR(), this._bypassWebAudio = !0, this._useAudioElement = !0) : (this._source = new Qg(e, !0), GE("REMOTE_AUDIO_TRACK_USES_WEB_AUDIO") && (this._useAudioElement = !1)), this._source.once(Lf.RECEIVE_TRACK_BUFFER, () => {
          this.safeEmit(fS.FIRST_FRAME_DECODED);
        }), this.processorContext = new NR(this._source.context, this.getTrackId(), "remote"), this.processorDestination = new OR(this.processorContext), this.bindProcessorDestinationEvents(), this._source.on(Lf.UPDATE_SOURCE, () => {
          this.processor && this.processor.updateInput({
            node: this._source.processSourceNode,
            context: this.processorContext
          });
        });
      }
      setAudioFrameCallback(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
        if (!e) return this._source.removeAllListeners(Lf.ON_AUDIO_BUFFER), void this._source.stopGetAudioBuffer();
        this._source.startGetAudioBuffer(t), this._source.removeAllListeners(Lf.ON_AUDIO_BUFFER), this._source.on(Lf.ON_AUDIO_BUFFER, t => e(t));
      }
      setVolume(e) {
        this._volume = e, this._useAudioElement ? pR.setVolume(this.getTrackId(), e) : this._source.setVolume(e / 100);
      }
      async setPlaybackDevice(e) {
        if (!this._useAudioElement) throw new SE(fE.NOT_SUPPORTED, "your browser does not support setting the audio output device");
        await pR.setSinkID(this.getTrackId(), e);
      }
      getVolumeLevel() {
        return this._source.getAccurateVolumeLevel();
      }
      getStats() {
        hC(() => {
          OE.warning("[deprecated] RemoteAudioTrack.getStats will be removed in the future, use AgoraRTCClient.getRemoteAudioStats instead");
        }, "remoteAudioTrackGetStatsWarning");
        return oC(this, uS.GET_STATS) || eb({}, Bf);
      }
      play() {
        OE.debug("[".concat(this.getTrackId(), "] start audio playback")), this._played = !0, this._useAudioElement ? (OE.debug("[".concat(this.getTrackId(), "] use audio element to play")), pR.play(this._mediaStreamTrack, this.getTrackId(), this._volume, this.store.sessionId || void 0)) : this._source.play();
      }
      stop() {
        OE.debug("[".concat(this.getTrackId(), "] stop audio playback")), this._played = !1, this._useAudioElement ? pR.stop(this.getTrackId()) : this._source.stop();
      }
      _destroy() {
        super._destroy(), this._played = !1, this.unbindProcessorDestinationEvents(), this._source.destroy();
      }
      _isFreeze() {
        return this._source.isFreeze;
      }
      _updatePlayerSource() {
        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        OE.debug("[".concat(this.getTrackId(), "] update player source track")), e && this._source.updateTrack(this._mediaStreamTrack), this._useAudioElement && pR.updateTrack(this.getTrackId(), this._mediaStreamTrack);
      }
      pipe(e) {
        if (this._bypassWebAudio) throw new SE(fE.NOT_SUPPORTED, "can not pipe extension when WebAudio disabled");
        if (this.processor === e) return e;
        if (e._source) throw new SE(fE.INVALID_OPERATION, "Processor ".concat(e.name, " already piped, please call unpipe beforehand."));
        return this.unpipe(), this.processor = e, this.processor._source = this, e.updateInput({
          track: this._originMediaStreamTrack,
          node: this._source.processSourceNode,
          context: this.processorContext
        }), e;
      }
      unpipe() {
        var e;
        if (this._bypassWebAudio) throw new SE(fE.NOT_SUPPORTED, "can not unpipe extension when WebAudio disabled");
        if (!this.processor) return;
        const t = this.processor;
        null === (e = this._source.processSourceNode) || void 0 === e || e.disconnect(), this.processor._source = !1, this.processor = void 0, t.reset();
      }
      bindProcessorDestinationEvents() {
        this.processorDestination.on(kS.ON_TRACK, async e => {
          e ? e !== this._mediaStreamTrack && (this._mediaStreamTrack = e, this._updatePlayerSource(!1), this._source.processedNode = this._source.createMediaStreamSourceNode(e)) : this._mediaStreamTrack !== this._originMediaStreamTrack && (this._mediaStreamTrack = this._originMediaStreamTrack, this._updatePlayerSource());
        }), this.processorDestination.on(kS.ON_NODE, e => {
          this._source.processedNode = e;
          const t = !e;
          this._useAudioElement !== t && (this._played ? (this.stop(), this._useAudioElement = t, this.play()) : this._useAudioElement = t);
        });
      }
      unbindProcessorDestinationEvents() {
        this.processorDestination.removeAllListeners(kS.ON_TRACK), this.processorDestination.removeAllListeners(kS.ON_NODE);
      }
    }).prototype, "setVolume", [YN], Object.getOwnPropertyDescriptor(ZN.prototype, "setVolume"), ZN.prototype), ag(ZN.prototype, "setPlaybackDevice", [qN], Object.getOwnPropertyDescriptor(ZN.prototype, "setPlaybackDevice"), ZN.prototype), ag(ZN.prototype, "play", [JN], Object.getOwnPropertyDescriptor(ZN.prototype, "play"), ZN.prototype), ag(ZN.prototype, "stop", [XN], Object.getOwnPropertyDescriptor(ZN.prototype, "stop"), ZN.prototype), ag(ZN.prototype, "pipe", [zN], Object.getOwnPropertyDescriptor(ZN.prototype, "pipe"), ZN.prototype), ag(ZN.prototype, "unpipe", [QN], Object.getOwnPropertyDescriptor(ZN.prototype, "unpipe"), ZN.prototype), ZN);
  function rb(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function ob(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? rb(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : rb(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  class sb extends EE {
    constructor() {
      super(), _p(this, "uplinkStatsUploadInterval", void 0), _p(this, "uplinkRelatedStatsUploadInterval", void 0), _p(this, "uplinkDenoiserStatsUploadInterval", void 0), _p(this, "transportStatsUploadInterval", void 0), _p(this, "uplinkExtensionStatsUploadInterval", void 0), _p(this, "downlinkExtensionStatsUploadInterval", void 0), _p(this, "extensionUsageStatsUploadInterval", void 0), _p(this, "downlinkStatsUploadInterval", void 0), _p(this, "downlinkRelatedStatsUploadInterval", void 0), _p(this, "lastStats", void 0), _p(this, "uploadUnplinkStarted", !1), _p(this, "uploadDownlinkStarted", !1), _p(this, "uploadTransportStarted", !1), _p(this, "uploadExtensionUsageStarted", !1), _p(this, "requestStats", void 0), _p(this, "requestLocalMedia", void 0), _p(this, "requestRemoteMedia", void 0), _p(this, "requestAllTracks", void 0), _p(this, "requestVideoIsReady", void 0), _p(this, "requestUpload", void 0);
    }
    startUploadTransportStats() {
      this.uploadTransportStarted || (this.uploadTransportStarted = !0, this.transportStatsUploadInterval && window.clearInterval(this.transportStatsUploadInterval), this.transportStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestStats) || void 0 === e ? void 0 : e.call(this);
        t && this.uploadTransportStats(t);
      }, 1000));
    }
    startUploadExtensionUsageStats() {
      if (this.uploadExtensionUsageStarted) return;
      this.uploadExtensionUsageStarted = !0, this.extensionUsageStatsUploadInterval && window.clearInterval(this.extensionUsageStatsUploadInterval);
      const e = new Map();
      this.extensionUsageStatsUploadInterval = window.setInterval(async () => {
        var t, i, n;
        const r = Date.now(),
          o = {
            connectionInterval: GE("EXTENSION_USAGE_UPLOAD_INTERVAL") / 1000,
            details: [],
            lts: r
          };
        let s = [];
        const a = (null === (t = this.requestAllTracks) || void 0 === t ? void 0 : t.call(this)) || [];
        for (const e of a) !e.muted && e.enabled && (s = s.concat(await e.getProcessorUsage()));
        const c = (null === (i = this.requestRemoteMedia) || void 0 === i ? void 0 : i.call(this)) || [];
        for (const [e, t] of c) t.has(AS.VIDEO) && e.videoTrack && (s = s.concat(await e.videoTrack.getProcessorUsage())), t.has(AS.AUDIO) && e.audioTrack && (s = s.concat(await e.audioTrack.getProcessorUsage()));
        if (0 === s.length) return;
        o.details = function (e, t) {
          const i = {};
          for (const {
            id: s,
            value: a,
            level: c,
            direction: d
          } of e) {
            var n;
            const e = null !== (n = t.get(s)) && void 0 !== n ? n : 0,
              u = 2 === a ? e + GE("EXTENSION_USAGE_UPLOAD_INTERVAL") / 1000 : e;
            var r, o;
            t.set(s, u), i[s] ? (2 === a && (i[s].value = a), c > i[s].level && (i[s].level = c), "remote" === d && (i[s].remoteUidCount += 1), i[s].totalTs = null !== (r = t.get(s)) && void 0 !== r ? r : 0) : i[s] = {
              value: a,
              level: c,
              remoteUidCount: "local" === d ? 0 : 1,
              totalTs: null !== (o = t.get(s)) && void 0 !== o ? o : 0
            };
          }
          return Object.keys(i).map(e => {
            const {
              level: t,
              value: n,
              totalTs: r
            } = i[e];
            return {
              id: e,
              level: t,
              value: n,
              totalTs: r
            };
          });
        }(s, e);
        const d = Date.now(),
          u = d > r ? d : r + 1;
        null === (n = this.requestUpload) || void 0 === n || n.call(this, wf.EXTENSION_USAGE_STATS, {
          usageStats: o,
          sendTs: u
        });
      }, GE("EXTENSION_USAGE_UPLOAD_INTERVAL"));
    }
    startUploadUplinkStats() {
      this.uploadUnplinkStarted || (this.uploadUnplinkStarted = !0, this.uplinkStatsUploadInterval && window.clearInterval(this.uplinkStatsUploadInterval), this.uplinkStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestStats) || void 0 === e ? void 0 : e.call(this);
        t && (this.uploadUplinkStats(t), this.lastStats = t);
      }, 3000), this.uplinkRelatedStatsUploadInterval && window.clearInterval(this.uplinkRelatedStatsUploadInterval), this.uplinkRelatedStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestStats) || void 0 === e ? void 0 : e.call(this);
        t && this.uploadRelatedUplinkStats(t, this.lastStats), this.lastStats = t;
      }, 1000), this.uplinkDenoiserStatsUploadInterval && window.clearInterval(this.uplinkDenoiserStatsUploadInterval), this.uplinkDenoiserStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestAllTracks) || void 0 === e ? void 0 : e.call(this);
        t && this.uploadDenoiserStats(t);
      }, 2000), this.uplinkExtensionStatsUploadInterval && window.clearInterval(this.uplinkExtensionStatsUploadInterval), this.uplinkExtensionStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestAllTracks) || void 0 === e ? void 0 : e.call(this);
        t && this.uploadExtensionStats(t);
      }, 2000));
    }
    uploadTransportStats(e) {
      dC(() => {
        var t;
        null === (t = this.requestUpload) || void 0 === t || t.call(this, wf.TRANSPORT_STATS, function (e) {
          const t = {
            connectionType: 100,
            googRtt: e.rtt
          };
          if ("relay" === e.selectedCandidatePair.localCandidate.candidateType) {
            const i = e.selectedCandidatePair.localCandidate.relayProtocol;
            "udp" === i && (t.connectionType = 101), "tcp" === i && (t.connectionType = 103), "tls" === i && (t.connectionType = 104);
          }
          return t;
        }(e));
      });
    }
    uploadUplinkStats(e) {
      var t;
      ((null === (t = this.requestLocalMedia) || void 0 === t ? void 0 : t.call(this)) || []).forEach(t => {
        let [i, {
          track: n,
          ssrcs: r
        }] = t;
        switch (i) {
          case bS.LocalVideoLowTrack:
          case bS.LocalVideoTrack:
            {
              const t = function (e, t, i) {
                  var n;
                  const r = t.videoSend.find(t => t.ssrc === e);
                  if (!r) return null;
                  const o = {
                    id: ZI(10, ""),
                    timestamp: new Date(t.timestamp).toISOString(),
                    mediaType: "video",
                    type: "ssrc",
                    ssrc: r.ssrc.toString()
                  };
                  switch (o.A_vstd = i._originMediaStreamTrack && !i._originMediaStreamTrack.enabled || i._mediaStreamTrack && !i._mediaStreamTrack.enabled ? "1" : "0", r.sentFrame && (o.A_fhs = r.sentFrame.height.toString(), o.A_frs = r.sentFrame.frameRate.toString(), o.A_fws = r.sentFrame.width.toString()), r.adaptionChangeReason) {
                    case "none":
                      o.A_ac = "0";
                      break;
                    case "cpu":
                      o.A_ac = "1";
                      break;
                    case "bandwidth":
                      o.A_ac = "2";
                      break;
                    case "other":
                      o.A_ac = "3";
                  }
                  return o.A_lvps = af[i._player ? i._player.videoElementStatus : "uninit"].toString(), o.A_nr = null === (n = r.nacksCount) || void 0 === n ? void 0 : n.toString(), r.avgEncodeMs && (o.A_aem = r.avgEncodeMs.toFixed(0).toString()), o;
                }(r[0].ssrcId, e, n),
                o = i === bS.LocalVideoTrack ? function (e, t, i) {
                  var n, r, o, s, a, c, d, u;
                  const l = t.videoSend.find(t => t.ssrc === e);
                  if (!l) return null;
                  const h = {
                      id: ZI(10, ""),
                      timestamp: new Date(t.timestamp).toISOString(),
                      mediaType: "video",
                      type: "ssrc",
                      ssrc: l.ssrc.toString()
                    },
                    p = null !== (n = null !== (r = null === (o = l.inputFrame) || void 0 === o ? void 0 : o.height) && void 0 !== r ? r : null == i ? void 0 : i._videoHeight) && void 0 !== n ? n : 0,
                    _ = null !== (s = null !== (a = null === (c = l.inputFrame) || void 0 === c ? void 0 : c.width) && void 0 !== a ? a : null == i ? void 0 : i._videoWidth) && void 0 !== s ? s : 0,
                    E = null !== (d = null === (u = l.inputFrame) || void 0 === u ? void 0 : u.frameRate) && void 0 !== d ? d : 0;
                  return p && (h.A_fhi = p + ""), _ && (h.A_fwi = _ + ""), E && (h.A_fri = E + ""), h;
                }(r[0].ssrcId, e, n) : null;
              t && dC(() => {
                var e;
                return null === (e = this.requestUpload) || void 0 === e ? void 0 : e.call(this, wf.PUBLISH_STATS, {
                  stream_type: i === bS.LocalVideoLowTrack ? "low" : "high",
                  stats: ob(ob({}, t), o)
                });
              });
              const s = function (e) {
                const t = {
                  id: "bweforvideo",
                  timestamp: new Date(e.timestamp).toISOString(),
                  type: "VideoBwe"
                };
                return e.bitrate.retransmit && (t.A_rb = e.bitrate.retransmit.toString()), e.bitrate.targetEncoded && (t.A_teb = e.bitrate.targetEncoded.toString()), t.A_aeb = e.bitrate.actualEncoded.toString(), t.A_tb = e.bitrate.transmit.toString(), void 0 !== e.sendBandwidth && (t.A_asb = e.sendBandwidth.toString()), t;
              }(e);
              s && setTimeout(() => {
                var e;
                return null === (e = this.requestUpload) || void 0 === e ? void 0 : e.call(this, wf.PUBLISH_STATS, {
                  stream_type: i === bS.LocalVideoLowTrack ? "low" : "high",
                  stats: s
                });
              }, 1000);
              break;
            }
          case bS.LocalAudioTrack:
            {
              const t = function (e, t, i) {
                const n = t.audioSend.find(t => t.ssrc === e);
                if (!n) return null;
                const r = {
                  id: ZI(10, ""),
                  timestamp: new Date(t.timestamp).toISOString(),
                  mediaType: "audio",
                  type: "ssrc",
                  ssrc: n.ssrc.toString()
                };
                return r.A_astd = i._originMediaStreamTrack && !i._originMediaStreamTrack.enabled || i._mediaStreamTrack && !i._mediaStreamTrack.enabled ? "1" : "0", n.inputLevel ? r.A_ail = Math.round(100 * n.inputLevel).toString() : r.A_ail = Math.round(100 * i._source.getAccurateVolumeLevel()).toString(), r.A_apil = Math.round(100 * i._source.getAccurateVolumeLevel()).toString(), n.aecReturnLoss && (r.A_ecrl = Math.round(n.aecReturnLoss).toString()), n.aecReturnLossEnhancement && (r.A_ecrle = Math.round(n.aecReturnLossEnhancement).toString()), r;
              }(r[0].ssrcId, e, n);
              t && dC(() => {
                var e;
                return null === (e = this.requestUpload) || void 0 === e ? void 0 : e.call(this, wf.PUBLISH_STATS, {
                  stream_type: "high",
                  stats: t
                });
              });
              break;
            }
        }
      });
    }
    uploadRelatedUplinkStats(e, t) {
      var i;
      ((null === (i = this.requestLocalMedia) || void 0 === i ? void 0 : i.call(this)) || []).filter(e => {
        let [t] = e;
        return t === bS.LocalVideoLowTrack || t === bS.LocalVideoTrack;
      }).forEach(t => {
        let [i, {
          ssrcs: n
        }] = t;
        const r = function (e, t) {
          const i = t.videoSend.find(t => t.ssrc === e);
          return i ? {
            mediaType: "video",
            isVideoMute: !1,
            frameRateInput: i.inputFrame && i.inputFrame.frameRate.toString(),
            frameRateSent: i.sentFrame && i.sentFrame.frameRate.toString(),
            googRtt: i.rttMs.toString(),
            qpSumPerFrame: Math.floor(i.qpSumPerFrame).toString()
          } : null;
        }(n[0].ssrcId, e);
        r && dC(() => {
          var e;
          null === (e = this.requestUpload) || void 0 === e || e.call(this, wf.PUBLISH_RELATED_STATS, {
            stream_type: i === bS.LocalVideoLowTrack ? "low" : "high",
            stats: r
          });
        });
      });
    }
    uploadDenoiserStats(e) {
      for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (o instanceof AI) {
          var t, i, n;
          const e = null === (t = (i = o._external).getDenoiserStats) || void 0 === t ? void 0 : t.call(i);
          return void (e && (null === (n = this.requestUpload) || void 0 === n || n.call(this, wf.DENOISER_STATS, e)));
        }
      }
    }
    uploadExtensionStats(e) {
      for (let t = 0; t < e.length; t++) {
        e[t].getProcessorStats().forEach(e => {
          var t;
          null === (t = this.requestUpload) || void 0 === t || t.call(this, e.type, e.stats);
        });
      }
    }
    stopUploadUplinkStats() {
      this.uploadUnplinkStarted && (this.uploadUnplinkStarted = !1, this.uplinkStatsUploadInterval && window.clearInterval(this.uplinkStatsUploadInterval), this.uplinkRelatedStatsUploadInterval && window.clearInterval(this.uplinkRelatedStatsUploadInterval), this.uplinkDenoiserStatsUploadInterval && window.clearInterval(this.uplinkDenoiserStatsUploadInterval), this.uplinkStatsUploadInterval = void 0, this.uplinkRelatedStatsUploadInterval = void 0, this.uplinkDenoiserStatsUploadInterval = void 0);
    }
    startUploadDownlinkStats() {
      if (this.uploadDownlinkStarted) return;
      let e;
      this.uploadDownlinkStarted = !0, this.downlinkStatsUploadInterval && window.clearInterval(this.downlinkStatsUploadInterval);
      let t = !1;
      this.downlinkStatsUploadInterval = window.setInterval(() => {
        var i;
        const n = null === (i = this.requestStats) || void 0 === i ? void 0 : i.call(this);
        n && (this.uploadDownlinkStats(n, t, e), e = n), t = !t;
      }, 3000), this.downlinkRelatedStatsUploadInterval && window.clearInterval(this.downlinkRelatedStatsUploadInterval), this.downlinkRelatedStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestStats) || void 0 === e ? void 0 : e.call(this);
        t && (this.uploadRelatedDownlinkStats(t, this.lastStats), this.lastStats = t);
      }, 1000), this.downlinkExtensionStatsUploadInterval && window.clearInterval(this.downlinkExtensionStatsUploadInterval), this.downlinkExtensionStatsUploadInterval = window.setInterval(() => {
        var e;
        const t = null === (e = this.requestRemoteMedia) || void 0 === e ? void 0 : e.call(this);
        t && this.uploadDownlinkExtensionStats(t);
      }, 2000);
    }
    uploadDownlinkStats(e, t, i) {
      var n;
      ((null === (n = this.requestRemoteMedia) || void 0 === n ? void 0 : n.call(this)) || []).forEach(n => {
        let [r, o] = n;
        if (o.has(AS.VIDEO) && r.videoTrack) {
          const n = r.videoTrack ? function (e, t, i, n, r) {
            const o = t.videoRecv.find(t => t.ssrc === e);
            if (!o) return null;
            const s = {
              id: ZI(10, ""),
              timestamp: new Date(t.timestamp).toISOString(),
              mediaType: "video",
              type: "ssrc",
              ssrc: o.ssrc.toString()
            };
            var a, c;
            if (s.bytesReceived = o.bytes.toString(), s.packetsLost = o.packetsLost.toString(), s.packetsReceived = o.packets.toString(), o.framesRateFirefox && (s.A_frr = o.framesRateFirefox.toString()), o.receivedFrame ? (s.A_frr = o.receivedFrame.frameRate.toString(), s.A_fhr = o.receivedFrame.height.toString(), s.A_fwr = o.receivedFrame.width.toString()) : (s.A_fhr = null === (a = n._videoHeight) || void 0 === a ? void 0 : a.toString(), s.A_fwr = null === (c = n._videoWidth) || void 0 === c ? void 0 : c.toString()), s.A_frd = o.decodeFrameRate.toString(), o.outputFrame && (s.A_fro = o.outputFrame.frameRate.toString()), void 0 !== o.jitterBufferMs && (s.A_jbm = Math.floor(o.jitterBufferMs).toString()), void 0 !== o.currentDelayMs && (s.A_cdm = Math.floor(o.currentDelayMs).toString()), s.A_fs = o.firsCount.toString(), s.A_ns = o.nacksCount.toString(), s.A_ps = o.plisCount.toString(), n && (s.A_vrtd = n._originMediaStreamTrack.enabled && n._mediaStreamTrack.enabled ? "0" : "1"), n._player && n._player.freezeTimeCounterList.length > 0 && (s.A_vrft = Math.round(n._player.freezeTimeCounterList.splice(0, 1)[0]).toString()), r && n._player && "visible" === MI.visibility) {
              const e = Math.min(6000, n._player.renderFreezeAccTime);
              s.A_vrrft = Math.round(e).toString(), n._player.renderFreezeAccTime = Math.max(0, n._player.renderFreezeAccTime - e);
            }
            if (s.A_rvps = af[n._player ? n._player.videoElementStatus : "uninit"].toString(), i) {
              const t = i.videoRecv.find(t => t.ssrc === e);
              if (t && void 0 !== o.totalInterFrameDelay && void 0 !== o.totalSquaredInterFrameDelay && void 0 !== t.totalInterFrameDelay && void 0 !== t.totalSquaredInterFrameDelay) {
                const e = o.totalInterFrameDelay - t.totalInterFrameDelay,
                  i = o.totalSquaredInterFrameDelay - t.totalSquaredInterFrameDelay,
                  n = o.framesDecodeCount - t.framesDecodeCount,
                  r = e / n * 1000,
                  a = Math.round(1000 * Math.sqrt((i - Math.pow(e, 2) / n) / n));
                !isNaN(a) && r + a > Math.max(3 * r, r + 150) && (s.A_ifdsd = a.toString());
              }
            }
            return s;
          }(r._videoSSRC, e, i, r.videoTrack, t) : void 0;
          n && dC(() => {
            var e;
            return null === (e = this.requestUpload) || void 0 === e ? void 0 : e.call(this, wf.SUBSCRIBE_STATS, {
              stream_id: r.uid,
              stats: n
            });
          });
        }
        if (o.has(AS.AUDIO) && r.audioTrack) {
          const t = r.audioTrack ? function (e, t, i, n) {
            const r = t.audioRecv.find(t => t.ssrc === e);
            if (!r) return null;
            const o = {
              id: ZI(10, ""),
              timestamp: new Date(t.timestamp).toISOString(),
              mediaType: "audio",
              type: "ssrc",
              ssrc: r.ssrc.toString()
            };
            if (o.bytesReceived = r.bytes.toString(), o.packetsLost = r.packetsLost.toString(), o.packetsReceived = r.packets.toString(), r.outputLevel ? o.A_aol = Math.round(100 * r.outputLevel).toString() : o.A_aol = Math.round(100 * n._source.getAccurateVolumeLevel()).toString(), o.A_apol = Math.round(100 * n._source.getAccurateVolumeLevel()).toString(), n && (o.A_artd = n._originMediaStreamTrack.enabled && n._mediaStreamTrack.enabled ? "0" : "1"), o.A_jr = r.jitterMs.toString(), o.A_jbm = Math.floor(r.jitterBufferMs).toString(), o.A_cdm = Math.floor(r.jitterBufferMs).toString(), o.A_raps = af[pR.getPlayerState(n.getTrackId())].toString(), i) {
              const t = i.audioRecv.find(t => t.ssrc === e);
              if (t) {
                const e = r.concealedSamples - t.concealedSamples;
                e > 0 && (o.A_cs = Math.round(e).toString());
              }
            }
            return o;
          }(r._audioSSRC, e, i, r.audioTrack) : void 0;
          t && dC(() => {
            var e;
            return null === (e = this.requestUpload) || void 0 === e ? void 0 : e.call(this, wf.SUBSCRIBE_STATS, {
              stream_id: r.uid,
              stats: t
            });
          });
        }
      });
    }
    uploadRelatedDownlinkStats(e, t) {
      var i;
      ((null === (i = this.requestRemoteMedia) || void 0 === i ? void 0 : i.call(this)) || []).forEach(i => {
        let [n, r] = i;
        if (r.has(AS.VIDEO) && n.videoTrack) {
          var o;
          const i = !0 === (n._videoSSRC && (null === (o = this.requestVideoIsReady) || void 0 === o ? void 0 : o.call(this, n._videoSSRC)) || !1),
            r = function (e, t, i, n, r, o) {
              const s = i.videoRecv.find(t => t.ssrc === e),
                a = r ? r.videoRecv.find(t => t.ssrc === e) : void 0;
              if (!s) return null;
              const c = kI.isRemoteVideoFreeze(o, s, a) && t,
                d = {
                  mediaType: "video",
                  isVideoMute: !1,
                  peerId: n,
                  frameRateReceived: s.receivedFrame && s.receivedFrame.frameRate.toString(),
                  frameRateDecoded: s.decodedFrame && s.decodedFrame.frameRate.toString(),
                  isFreeze: c,
                  bytesReceived: s.bytes.toString(),
                  packetsReceived: s.packets.toString(),
                  packetsLost: s.packetsLost.toString(),
                  qpSumPerFrame: Math.floor(s.qpSumPerFrame).toString()
                };
              return s.framesRateFirefox && (d.frameRateDecoded = s.framesRateFirefox.toString(), d.frameRateReceived = s.framesRateFirefox.toString()), d;
            }(n._videoSSRC, i, e, n.uid, t, n.videoTrack);
          r && dC(() => {
            var e;
            null === (e = this.requestUpload) || void 0 === e || e.call(this, wf.SUBSCRIBE_RELATED_STATS, {
              stream_id: n.uid,
              stats: r
            });
          });
        }
        if (r.has(AS.AUDIO) && n.audioTrack) {
          const t = function (e, t, i, n) {
            const r = t.audioRecv.find(t => t.ssrc === e);
            if (!r) return null;
            const o = kI.isRemoteAudioFreeze(n);
            return {
              mediaType: "audio",
              isAudioMute: !1,
              peerId: i,
              googJitterReceived: r.jitterMs.toString(),
              isFreeze: o,
              bytesReceived: r.bytes.toString(),
              packetsReceived: r.packets.toString(),
              packetsLost: r.packetsLost.toString(),
              frameReceived: r.receivedFrames.toString(),
              frameDropped: r.droppedFrames.toString()
            };
          }(n._audioSSRC, e, n.uid, n.audioTrack);
          t && dC(() => {
            var e;
            null === (e = this.requestUpload) || void 0 === e || e.call(this, wf.SUBSCRIBE_RELATED_STATS, {
              stream_id: n.uid,
              stats: t
            });
          });
        }
      });
    }
    stopUploadDownlinkStats() {
      this.uploadDownlinkStarted && (this.uploadDownlinkStarted = !1, this.downlinkStatsUploadInterval && window.clearInterval(this.downlinkStatsUploadInterval), this.downlinkRelatedStatsUploadInterval && window.clearInterval(this.downlinkRelatedStatsUploadInterval), this.downlinkStatsUploadInterval = void 0, this.downlinkRelatedStatsUploadInterval = void 0);
    }
    stopUploadTransportStats() {
      this.uploadTransportStarted && (this.uploadTransportStarted = !1, this.transportStatsUploadInterval && window.clearInterval(this.transportStatsUploadInterval), this.transportStatsUploadInterval = void 0);
    }
    stopUploadExtensionUsageStats() {
      this.uploadExtensionUsageStarted && (this.uploadExtensionUsageStarted = !1, this.extensionUsageStatsUploadInterval && window.clearInterval(this.extensionUsageStatsUploadInterval), this.extensionUsageStatsUploadInterval = void 0);
    }
    uploadDownlinkExtensionStats(e) {
      e.forEach(e => {
        let [t, i] = e;
        if (i.has(AS.VIDEO) && t.videoTrack) {
          t.videoTrack.getProcessorStats().forEach(e => {
            var t;
            null === (t = this.requestUpload) || void 0 === t || t.call(this, e.type, e.stats);
          });
        }
        if (i.has(AS.AUDIO) && t.audioTrack) {
          t.audioTrack.getProcessorStats().forEach(e => {
            var t;
            null === (t = this.requestUpload) || void 0 === t || t.call(this, e.type, e.stats);
          });
        }
      });
    }
  }
  function ab(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function cb(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ab(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ab(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const db = "v=0\no=- 0 0 IN IP4 127.0.0.1\ns=AgoraGateway\nt=0 0\na=group:BUNDLE 0\na=msid-semantic: WMS\na=ice-lite\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\nc=IN IP4 127.0.0.1\na=mid:0\n",
    ub = "9",
    lb = 20000,
    hb = 40000;
  class pb {
    get localCapabilities() {
      return uC(this._localCapabilities);
    }
    get rtpCapabilities() {
      return uC(this._rtpCapabilities);
    }
    get candidates() {
      return uC(this._candidates);
    }
    get iceParameters() {
      return uC(this._iceParameters);
    }
    get dtlsParameters() {
      return uC(this._dtlsParameters);
    }
    constructor(e) {
      _p(this, "sessionDesc", void 0), _p(this, "_localCapabilities", void 0), _p(this, "_rtpCapabilities", void 0), _p(this, "_candidates", void 0), _p(this, "_iceParameters", void 0), _p(this, "_dtlsParameters", void 0), _p(this, "setup", void 0), _p(this, "currentMidIndex", void 0), _p(this, "cname", void 0), _p(this, "firefoxSsrcMidMap", new Map()), e = uC(e);
      const {
          remoteIceParameters: t,
          remoteDtlsParameters: i,
          candidates: n,
          remoteRTPCapabilities: r,
          remoteSetup: o,
          localCapabilities: s,
          cname: a
        } = e,
        c = UO.exports.parse(db);
      this._rtpCapabilities = r, this._candidates = n, this._iceParameters = t, this._dtlsParameters = i, this._localCapabilities = s, this.setup = o, this.cname = a;
      const d = this.rtpCapabilities.send;
      for (const e of c.mediaDescriptions) {
        if (e.attributes.iceUfrag = t.iceUfrag, e.attributes.icePwd = t.icePwd, e.attributes.fingerprints = i.fingerprints, e.attributes.candidates = n, e.attributes.setup = o, "application" === e.media.mediaType && (e.attributes.sctpPort = "5000"), "video" === e.media.mediaType && (e.media.fmts = d.videoCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = d.videoCodecs, e.attributes.extmaps = d.videoExtensions, GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: hb,
            rtx: GE("USE_SUB_RTX") ? 40001 : void 0
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
        if ("audio" === e.media.mediaType && (e.media.fmts = d.audioCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = d.audioCodecs, e.attributes.extmaps = d.audioExtensions, $O(e), GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: lb
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
      }
      this.sessionDesc = c, this.currentMidIndex = c.mediaDescriptions.length - 1;
    }
    updateRemoteRTPCapabilities(e) {
      const t = UO.exports.parse(db);
      this._rtpCapabilities = e;
      const i = this.rtpCapabilities.send;
      for (const e of t.mediaDescriptions) {
        if (e.attributes.iceUfrag = this._iceParameters.iceUfrag, e.attributes.icePwd = this._iceParameters.icePwd, e.attributes.fingerprints = this._dtlsParameters.fingerprints, e.attributes.candidates = this._candidates, e.attributes.setup = this.setup, "application" === e.media.mediaType && (e.attributes.sctpPort = "5000"), "video" === e.media.mediaType && (e.media.fmts = i.videoCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = i.videoCodecs, e.attributes.extmaps = i.videoExtensions, GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: hb,
            rtx: GE("USE_SUB_RTX") ? 40001 : void 0
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
        if ("audio" === e.media.mediaType && (e.media.fmts = i.audioCodecs.map(e => e.payloadType.toString(10)), e.attributes.payloads = i.audioCodecs, e.attributes.extmaps = i.audioExtensions, GE("PRELOAD_MEDIA_COUNT") > 0)) {
          const {
            ssrcs: t,
            ssrcGroups: i
          } = WO([{
            ssrcId: lb
          }], this.cname);
          e.attributes.ssrcs = t, e.attributes.ssrcGroups = i;
        }
      }
      this.sessionDesc = t, this.currentMidIndex = t.mediaDescriptions.length - 1;
    }
    preloadRemoteMedia(e) {
      this.rtpCapabilities;
      const t = this.candidates,
        i = this.dtlsParameters,
        n = this.iceParameters,
        r = this.rtpCapabilities.send;
      for (let o = 1; o < e; o++) {
        const e = 2 * o + lb,
          s = 2 * o + hb,
          {
            ssrcs: a,
            ssrcGroups: c
          } = WO([{
            ssrcId: e
          }], this.cname),
          {
            ssrcs: d,
            ssrcGroups: u
          } = WO([{
            ssrcId: s,
            rtx: GE("USE_SUB_RTX") ? s + 1 : void 0
          }], this.cname);
        this.sessionDesc.mediaDescriptions.push({
          media: {
            mediaType: "video",
            port: ub,
            protos: ["UDP", "TLS", "RTP", "SAVPF"],
            fmts: r.videoCodecs.map(e => e.payloadType.toString(10))
          },
          connections: [{
            nettype: "IN",
            addrtype: "IP4",
            address: "127.0.0.1"
          }],
          bandwidths: [],
          attributes: {
            iceUfrag: n.iceUfrag,
            icePwd: n.icePwd,
            unrecognized: [],
            candidates: t,
            extmaps: r.videoExtensions,
            fingerprints: i.fingerprints,
            imageattr: [],
            msids: [],
            remoteCandidatesList: [],
            rids: [],
            ssrcs: d,
            ssrcGroups: u,
            rtcpFeedbackWildcards: [],
            payloads: r.videoCodecs,
            rtcp: {
              port: "9",
              netType: "IN",
              addressType: "IP4",
              address: "0.0.0.0"
            },
            setup: this.setup,
            direction: "sendonly",
            rtcpMux: !0,
            rtcpRsize: !0,
            mid: "".concat(2 * o - 1)
          }
        }), this.sessionDesc.mediaDescriptions.push({
          media: {
            mediaType: "audio",
            port: ub,
            protos: ["UDP", "TLS", "RTP", "SAVPF"],
            fmts: r.audioCodecs.map(e => e.payloadType.toString(10))
          },
          connections: [{
            nettype: "IN",
            addrtype: "IP4",
            address: "127.0.0.1"
          }],
          bandwidths: [],
          attributes: {
            iceUfrag: n.iceUfrag,
            icePwd: n.icePwd,
            unrecognized: [],
            candidates: t,
            extmaps: r.audioExtensions,
            fingerprints: i.fingerprints,
            imageattr: [],
            msids: [],
            remoteCandidatesList: [],
            rids: [],
            ssrcs: a,
            ssrcGroups: c,
            rtcpFeedbackWildcards: [],
            payloads: r.audioCodecs,
            rtcp: {
              port: "9",
              netType: "IN",
              addressType: "IP4",
              address: "0.0.0.0"
            },
            setup: this.setup,
            direction: "sendonly",
            rtcpMux: !0,
            rtcpRsize: !0,
            mid: "".concat(2 * o)
          }
        }), this.currentMidIndex += 2;
      }
      this.updateBundleMids();
    }
    toString() {
      return UO.exports.print(this.sessionDesc);
    }
    send(e, t, i, n) {
      const {
          ssrcs: r,
          ssrcGroups: o
        } = WO(t, this.cname, GE("SYNC_GROUP") ? i : void 0),
        s = this.findPreloadMediaDesc(r);
      if (s) {
        if (Kh() && this.firefoxSsrcMidMap.set(r[0].ssrcId, s.attributes.mid), n && (n.twcc || n.remb)) {
          const e = this.sessionDesc.mediaDescriptions.indexOf(s);
          return this.sessionDesc.mediaDescriptions[e] = this.mungSendMediaDesc(s, n), {
            mid: s.attributes.mid,
            needExchangeSDP: !0
          };
        }
        return {
          mid: s.attributes.mid,
          needExchangeSDP: !1
        };
      }
      {
        const t = this.findAvailableMediaIndex(e, r);
        let i;
        return -1 === t || Hh() || Yh() || zh() || 0 === t && GE("USE_SUB_RTX") ? (i = this.createOrRecycleSendMedia(e, r, o, "sendonly", n), this.updateBundleMids()) : (i = uC(this.sessionDesc.mediaDescriptions[t]), i.attributes.direction = "sendonly", i.attributes.ssrcs = r, i.attributes.ssrcGroups = o, this.sessionDesc.mediaDescriptions[t] = this.mungSendMediaDesc(i, n)), Kh() && this.firefoxSsrcMidMap.set(r[0].ssrcId, i.attributes.mid), {
          mid: i.attributes.mid,
          needExchangeSDP: !0
        };
      }
    }
    batchSend(e) {
      const t = e.map(e => {
          let {
            kind: t,
            ssrcMsg: i,
            mslabel: n
          } = e;
          return this.send(t, i, n);
        }),
        i = [];
      let n = !1;
      return t.forEach(e => {
        let {
          mid: t,
          needExchangeSDP: r
        } = e;
        r && (n = !0), i.push(t);
      }), {
        mids: i,
        needExchangeSDP: n
      };
    }
    stopSending(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => t.attributes.mid && -1 !== e.indexOf(t.attributes.mid));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.stopSending.");
      t.forEach(e => {
        "0" === e.attributes.mid || Kh() || Hh() || Yh() ? e.attributes.ssrcs = [] : (e.attributes.ssrcs = [], e.attributes.direction = "inactive", e.media.port = "0");
      }), this.updateBundleMids();
    }
    mute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.mute."));
      t.attributes.direction = "inactive";
    }
    unmute(e) {
      const t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e);
      if (!t) throw new Error("mediaDescription not found with ".concat(e, " in remote SDP when calling RemoteSDP.unmute."));
      t.attributes.direction = "sendonly";
    }
    muteRemote(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => e.includes(t.attributes.mid || ""));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.muteRemote.");
      t.forEach(e => {
        e.attributes.direction = "inactive";
      });
    }
    unmuteRemote(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => e.includes(t.attributes.mid || ""));
      if (t.length !== e.length) throw new Error("mediaDescriptions' length doesn't match mids' length when calling RemoteSDP.muteRemote.");
      t.forEach(e => {
        e.attributes.direction = "recvonly";
      });
    }
    receive(e, t, i, n) {
      e.forEach((e, r) => {
        this.createOrRecycleRecvMedia(e, [], "recvonly", t, i, n[r]);
      }), this.updateBundleMids();
    }
    stopReceiving(e) {
      const t = this.sessionDesc.mediaDescriptions.filter(t => -1 !== e.indexOf(t.attributes.mid));
      if (t.length !== e.length) throw new Error("MediaDescriptions' length doesn't match mids's length when calling RemoteSDP.receive.");
      t.forEach(e => {
        e.media.port = "0", e.attributes.direction = "inactive";
      }), this.updateBundleMids();
    }
    updateCandidates(e) {
      e === OS.TCP ? this._candidates.forEach(e => {
        -1 === this._candidates.findIndex(t => "tcp" === t.transport && t.connectionAddress === e.connectionAddress && t.port === e.port) && this._candidates.push(cb(cb({}, e), {}, {
          foundation: "tcpcandidate",
          priority: Number(e.priority) - 1 + "",
          transport: "tcp",
          port: Number(e.port) + 90 + ""
        }));
      }) : this._candidates = this._candidates.filter(e => "tcp" !== e.transport);
      for (const e of this.sessionDesc.mediaDescriptions) e.attributes.candidates = this.candidates;
    }
    restartICE(e) {
      e = uC(e), this._iceParameters = e, this.sessionDesc.mediaDescriptions.forEach(t => {
        t.attributes.iceUfrag = e.iceUfrag, t.attributes.icePwd = e.icePwd;
      });
    }
    predictReceivingMids(e) {
      const t = [];
      for (let i = 0; i < e; i++) t.push((this.currentMidIndex + i + 1).toString(10));
      return t;
    }
    findAvailableMediaIndex(e, t) {
      return this.sessionDesc.mediaDescriptions.findIndex(i => {
        const n = i.media.mediaType === e && "0" !== i.media.port && ("sendonly" === i.attributes.direction || "sendrecv" === i.attributes.direction) && 0 === i.attributes.ssrcs.length;
        if (Kh()) {
          if (n) {
            const e = this.firefoxSsrcMidMap.get(t[0].ssrcId);
            return !(e || "0" !== i.attributes.mid && "1" !== i.attributes.mid) || !(!e || e !== i.attributes.mid);
          }
          return !1;
        }
        return n;
      });
    }
    createOrRecycleRecvMedia(e, t, i, n, r, o) {
      const s = e._mediaStreamTrack.kind,
        a = this.rtpCapabilities.recv,
        c = this.localCapabilities.send;
      let d = [];
      if (s === AS.VIDEO) {
        var u, l;
        if (GE("H264_PROFILE_LEVEL_ID") && "h264" === n && (d = a.videoCodecs.filter(e => {
          var t, i;
          return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(n) && (null == e || null === (i = e.fmtp) || void 0 === i ? void 0 : i.parameters["profile-level-id"]) === GE("H264_PROFILE_LEVEL_ID");
        })), !d || 0 === (null === (u = d) || void 0 === u ? void 0 : u.length)) {
          const e = c.videoCodecs.filter(e => {
            var t;
            return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(n);
          });
          0 !== e.length && (d = a.videoCodecs.filter(t => e.some(e => e.payloadType === t.payloadType)));
        }
        if (GE("USE_PUB_RTX")) {
          const e = d.map(e => e.payloadType.toString()),
            t = a.videoCodecs.filter(t => {
              var i, n;
              return "rtx" === (null === (i = t.rtpMap) || void 0 === i ? void 0 : i.encodingName) && e.includes((null === (n = t.fmtp) || void 0 === n ? void 0 : n.parameters.apt) || "");
            });
          d = [...d, ...t];
        }
        if (0 === d.length) OE.warning("codec ".concat(n, " not included in rtpCapabilities, fallback to default payloads: ").concat(null === (l = a.videoCodecs[0].rtpMap) || void 0 === l ? void 0 : l.encodingName)), d = a.videoCodecs;
      } else d = a.audioCodecs.filter(e => {
        var t;
        return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes(r);
      }), 0 === d.length && (OE.warning("codec ".concat(r, " not included in rtpCapabilities, fallback to opus")), d = a.audioCodecs.filter(e => {
        var t;
        return ((null === (t = e.rtpMap) || void 0 === t ? void 0 : t.encodingName.toLowerCase()) || "").includes("opus");
      }));
      const h = s === AS.VIDEO ? a.videoExtensions : a.audioExtensions;
      this.currentMidIndex += 1;
      const p = "".concat(this.currentMidIndex);
      let _ = {
        media: {
          mediaType: s,
          port: ub,
          protos: ["UDP", "TLS", "RTP", "SAVPF"],
          fmts: d.map(e => e.payloadType.toString(10))
        },
        connections: [{
          nettype: "IN",
          addrtype: "IP4",
          address: "127.0.0.1"
        }],
        bandwidths: [],
        attributes: {
          iceUfrag: this.iceParameters.iceUfrag,
          icePwd: this.iceParameters.icePwd,
          unrecognized: [],
          candidates: this.candidates,
          extmaps: h,
          fingerprints: this.dtlsParameters.fingerprints,
          imageattr: [],
          msids: [],
          remoteCandidatesList: [],
          rids: [],
          ssrcs: t,
          ssrcGroups: [],
          rtcpFeedbackWildcards: [],
          payloads: d,
          rtcp: {
            port: "9",
            netType: "IN",
            addressType: "IP4",
            address: "0.0.0.0"
          },
          setup: this.setup,
          direction: i,
          rtcpMux: !0,
          rtcpRsize: !0,
          mid: "".concat(p)
        }
      };
      _ = this.mungRecvMediaDsec(_, e, o);
      const E = this.findFirstClosedMedia(s);
      if (E) {
        const e = this.sessionDesc.mediaDescriptions.indexOf(E);
        this.sessionDesc.mediaDescriptions[e] = _;
      } else this.sessionDesc.mediaDescriptions.push(_);
      return _;
    }
    createOrRecycleSendMedia(e, t, i, n, r) {
      const o = this.rtpCapabilities.send,
        s = e === AS.VIDEO ? o.videoCodecs : o.audioCodecs,
        a = e === AS.VIDEO ? o.videoExtensions : o.audioExtensions;
      this.currentMidIndex += 1;
      const c = "".concat(this.currentMidIndex);
      let d = {
        media: {
          mediaType: e,
          port: ub,
          protos: ["UDP", "TLS", "RTP", "SAVPF"],
          fmts: s.map(e => e.payloadType.toString(10))
        },
        connections: [{
          nettype: "IN",
          addrtype: "IP4",
          address: "127.0.0.1"
        }],
        bandwidths: [],
        attributes: {
          iceUfrag: this.iceParameters.iceUfrag,
          icePwd: this.iceParameters.icePwd,
          unrecognized: [],
          candidates: this.candidates,
          extmaps: a,
          fingerprints: this.dtlsParameters.fingerprints,
          imageattr: [],
          msids: [],
          remoteCandidatesList: [],
          rids: [],
          ssrcs: t,
          ssrcGroups: i,
          rtcpFeedbackWildcards: [],
          payloads: s,
          rtcp: {
            port: "9",
            netType: "IN",
            addressType: "IP4",
            address: "0.0.0.0"
          },
          setup: this.setup,
          direction: n,
          rtcpMux: !0,
          rtcpRsize: !0,
          mid: "".concat(c)
        }
      };
      d = this.mungSendMediaDesc(d, r);
      const u = this.findFirstClosedMedia(e);
      if (u) {
        const e = this.sessionDesc.mediaDescriptions.indexOf(u);
        this.sessionDesc.mediaDescriptions[e] = d;
      } else this.sessionDesc.mediaDescriptions.push(d);
      return d;
    }
    updateBundleMids() {
      this.sessionDesc.attributes.groups[0].identificationTag = this.sessionDesc.mediaDescriptions.filter(e => "0" !== e.media.port).map(e => e.attributes.mid);
    }
    mungRecvMediaDsec(e, t, i) {
      const n = uC(e);
      return KO(n), HO(n, t), YO(n, t), qO(n), JO(n, i, this.localCapabilities.send), n;
    }
    mungSendMediaDesc(e, t) {
      const i = uC(e);
      return JO(i, t, this.localCapabilities.recv), $O(i), i;
    }
    updateRecvMedia(e, t) {
      const i = this.sessionDesc.mediaDescriptions.findIndex(t => t.attributes.mid === e);
      if (-1 !== i) {
        const e = this.mungRecvMediaDsec(this.sessionDesc.mediaDescriptions[i], t);
        this.sessionDesc.mediaDescriptions[i] = e;
      }
    }
    bumpMid(e) {
      this.currentMidIndex += e;
    }
    findFirstClosedMedia(e) {
      return this.sessionDesc.mediaDescriptions.find(t => Kh() ? "0" === t.media.port && t.media.mediaType === e : "0" === t.media.port);
    }
    findPreloadMediaDesc(e) {
      return this.sessionDesc.mediaDescriptions.find(t => {
        var i, n;
        return (null === (i = t.attributes) || void 0 === i || null === (n = i.ssrcs[0]) || void 0 === n ? void 0 : n.ssrcId) === e[0].ssrcId;
      });
    }
    getSSRC(e) {
      var t;
      return null === (t = this.sessionDesc.mediaDescriptions.find(t => t.attributes.mid === e)) || void 0 === t ? void 0 : t.attributes.ssrcs;
    }
  }
  var _b;
  function Eb(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function mb(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Eb(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Eb(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let fb = (ag((_b = class e extends YS {
    get currentLocalDescription() {
      return this.peerConnection.currentLocalDescription;
    }
    get currentRemoteDescription() {
      return this.peerConnection.currentRemoteDescription;
    }
    get peerConnectionState() {
      return this.peerConnection.connectionState;
    }
    get iceConnectionState() {
      return this.peerConnection.iceConnectionState;
    }
    constructor(e, t, i) {
      super(e, t), _p(this, "store", void 0), _p(this, "peerConnection", void 0), _p(this, "remoteSDP", void 0), _p(this, "initialOffer", void 0), _p(this, "transportEventReceiver", void 0), _p(this, "statsFilter", void 0), _p(this, "localCapabilities", void 0), _p(this, "localCandidateCount", 0), _p(this, "allCandidatesReceived", !1), _p(this, "establishPromise", void 0), _p(this, "mutex", new Ug("NVExtentionsConnection-mutex")), _p(this, "rtcMedia", void 0), this.store = t, this.peerConnection = i, this.statsFilter = vN(this.peerConnection, GE("STATS_UPDATE_INTERVAL"), void 0, Kh() ? 1200 : void 0), this.bindPCEvents(), this.bindStatsEvents(), this.store.p2pId = this.store.p2pId + 1, this.establishPromise = this.establish();
    }
    async establish(e) {
      try {
        const e = await this.peerConnection.createOffer();
        if (!e.sdp) throw new Error("Cannot get initialOffer.sdp when trying to establish PeerConnection.");
        const t = FO(e.sdp),
          i = await zO(!GE("USE_PUB_RTX") && !GE("USE_SUB_RTX"), GE("FILTER_VIDEO_FEC"), GE("FILTER_AUDIO_FEC"));
        return this.localCapabilities = i, this.initialOffer = e, mb(mb({}, t), {}, {
          rtpCapabilities: i,
          offerSDP: e.sdp
        });
      } catch (e) {
        throw new SE(fE.GET_LOCAL_CONNECTION_PARAMS_FAILED, e.toString());
      }
    }
    async connect(e, t, i, n, r, o) {
      try {
        if (!this.initialOffer) throw new Error("Cannot establish NVConnection without initial offer.");
        this.remoteSDP = new pb({
          remoteIceParameters: e,
          remoteDtlsParameters: t,
          candidates: i,
          remoteRTPCapabilities: n,
          remoteSetup: r,
          localCapabilities: ZO(this.localCapabilities),
          cname: o
        });
        const s = this.remoteSDP.toString(),
          a = UO.exports.parse(this.initialOffer.sdp),
          c = a.mediaDescriptions.find(e => "audio" === e.media.mediaType);
        c && $O(c);
        const d = UO.exports.print(a),
          u = this.logSDPExchange(d || "", "offer", "local", "connect");
        await this.peerConnection.setLocalDescription({
          type: "offer",
          sdp: d
        }), null == u || u(s), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: s
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NV.connect failed; ".concat(e.toString()));
      }
    }
    async updateRemoteConnect(e) {
      var t, i, n;
      null === (t = this.remoteSDP) || void 0 === t || t.updateRemoteRTPCapabilities(e), null === (i = this.remoteSDP) || void 0 === i || i.preloadRemoteMedia(2);
      const r = null === (n = this.remoteSDP) || void 0 === n ? void 0 : n.toString();
      await this.peerConnection.setRemoteDescription({
        type: "offer",
        sdp: r
      });
      const o = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(o), OE.debug("[NVExtentionsConnection] updateRemoteRTPCapabilities by exchanging SDP.");
    }
    send(e, t, i) {
      var n = this;
      return DO(function* () {
        const r = yield PO(n.mutex.lock("From NVExtentionsConnection.send"));
        try {
          if (!n.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.send before remote SDP created");
          const o = [];
          e.forEach(e => {
            const t = n.peerConnection.addTransceiver(e._mediaStreamTrack, {
              direction: "sendonly"
            });
            o.push(t);
          }), Kh() && !0 === GE("SIMULCAST") && (yield PO(n.applySimulcastForFirefox(o, e)));
          const s = yield PO(n.peerConnection.createOffer()),
            a = n.remoteSDP.predictReceivingMids(e.length),
            c = n.mungSendOfferSDP(s.sdp, e, a),
            d = UO.exports.parse(c),
            u = a.map(e => {
              const t = d.mediaDescriptions.find(t => t.attributes.mid === e);
              if (!t) throw new Error("Cannot extract ssrc from mediaDescription.");
              return BO(t, GE("USE_PUB_RTX"));
            });
          let l;
          try {
            l = yield u;
          } catch (r) {
            l = [], n.remoteSDP.receive(e, t, i, l);
            const o = n.remoteSDP.toString();
            throw yield PO(n.peerConnection.setLocalDescription({
              type: "offer",
              sdp: c
            })), yield PO(n.peerConnection.setRemoteDescription({
              type: "answer",
              sdp: o
            })), yield PO(n.stopSending(a, !0)), r;
          }
          n.remoteSDP.receive(e, t, i, l);
          const h = n.remoteSDP.toString(),
            p = n.logSDPExchange(c, "offer", "local", "send");
          return yield PO(n.peerConnection.setLocalDescription({
            type: "offer",
            sdp: c
          })), yield PO(n.applySimulcastEncodings(o, e)), yield PO(n.applySendEncodings(o, e)), null == p || p(h), yield PO(n.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: h
          })), o.map((e, t) => {
            const i = a[t];
            return {
              localSSRC: u[t],
              id: i,
              transceiver: e
            };
          });
        } catch (e) {
          throw e instanceof SE ? e : new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.send failed; ".concat(e.toString()));
        } finally {
          r();
        }
      })();
    }
    async stopSending(e, t) {
      const i = t ? void 0 : await this.mutex.lock("From NVExtentionsConnection.stopSending");
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.stopSending before remote SDP created");
        const t = this.peerConnection.getTransceivers().filter(t => -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length when trying to call NVExtentionsConnection.stopSending.");
        t.map(e => {
          var t;
          e.direction = "inactive", null === (t = e.stop) || void 0 === t || t.call(e);
        });
        const n = await this.peerConnection.createOffer(),
          r = this.logSDPExchange(n.sdp || "", "offer", "local", "stopSending");
        await this.peerConnection.setLocalDescription(n), this.remoteSDP.stopReceiving(e);
        const o = this.remoteSDP.toString();
        null == r || r(o), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: o
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.stopSending failed; ".concat(e.toString()));
      } finally {
        i && i();
      }
    }
    async receive(e, t, i, n) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.receive ".concat(e, " before remoteSDP created."));
        const {
          mid: r,
          needExchangeSDP: o
        } = this.remoteSDP.send(e, t, i, n);
        if (o) {
          const t = this.remoteSDP.toString(),
            i = this.logSDPExchange(t, "offer", "remote", "receive");
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: t
          });
          const n = await this.peerConnection.createAnswer(),
            o = this.mungReceiveAnswerSDP(n.sdp, r, e);
          null == i || i(o || ""), await this.peerConnection.setLocalDescription({
            type: "answer",
            sdp: o
          }), OE.debug("[NVExtentionsConnection] receive ".concat(e, " by exchanging SDP."));
        } else OE.debug("[NVExtentionsConnection] receive ".concat(e, " no need to exchange SDP."));
        const s = this.peerConnection.getTransceivers().find(e => e.mid === r);
        if (!s) throw new Error("Cannot get transceiver after setLocalDescription.");
        return {
          track: s.receiver.track,
          id: r
        };
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.receive failed; ".concat(e.toString()));
      }
    }
    async batchReceive(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.batchReceive before remoteSDP created.");
        const {
          mids: t,
          needExchangeSDP: i
        } = this.remoteSDP.batchSend(e);
        if (i) {
          const e = this.remoteSDP.toString(),
            t = this.logSDPExchange(e, "offer", "remote", "receive");
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: e
          });
          const i = await this.peerConnection.createAnswer();
          null == t || t(i.sdp || ""), await this.peerConnection.setLocalDescription(i), OE.debug("[NVExtentionsConnection] batchReceive by exchanging SDP.");
        } else OE.debug("[NVExtentionsConnection] batchReceive no need to exchange SDP.");
        return t.map(e => {
          const t = this.peerConnection.getTransceivers().find(t => t.mid === e);
          if (!t) throw new Error("Cannot get transceiver after setLocalDescription.");
          return {
            track: t.receiver.track,
            id: e
          };
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.receive failed; ".concat(e.toString()));
      }
    }
    async stopReceiving(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.stopReceiving before remote SDP created.");
        this.remoteSDP.stopSending(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "stopReceiving");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection stopReceiving failed; ".concat(e.toString()));
      }
    }
    async muteRemote(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.muteRemote mid=".concat(e, " before remote SDP created."));
        this.remoteSDP.mute(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "muteRemote");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.muteRemote failed; ".concat(e.toString()));
      }
    }
    async unmuteRemote(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.unmuteRemote mid=".concat(e, " before remote SDP created."));
        this.remoteSDP.unmute(e);
        const t = this.remoteSDP.toString(),
          i = this.logSDPExchange(t, "offer", "remote", "unmuteRemote");
        await this.peerConnection.setRemoteDescription({
          type: "offer",
          sdp: t
        });
        const n = await this.peerConnection.createAnswer();
        null == i || i(n.sdp || ""), await this.peerConnection.setLocalDescription(n);
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.unmuteRemote failed; ".concat(e.toString()));
      }
    }
    async muteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.muteLocal before remote SDP created.");
        const t = this.peerConnection.getTransceivers().filter(t => t.mid && -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length.");
        t.map(e => {
          e.direction = "inactive";
        });
        const i = await this.peerConnection.createOffer(),
          n = this.logSDPExchange(i.sdp || "", "offer", "local", "muteLocal");
        await this.peerConnection.setLocalDescription(i), this.remoteSDP.muteRemote(e);
        const r = this.remoteSDP.toString();
        null == n || n(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.muteLocal failed; ".concat(e.toString()));
      }
    }
    async unmuteLocal(e) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.unmuteLocal before remote SDP created.");
        const t = this.peerConnection.getTransceivers().filter(t => t.mid && -1 !== e.indexOf(t.mid));
        if (t.length !== e.length) throw new Error("Transceivers' length doesn't match mids' length.");
        t.map(async (e, t) => {
          e.direction = "sendonly";
        });
        const i = await this.peerConnection.createOffer(),
          n = this.logSDPExchange(i.sdp || "", "offer", "local", "unmuteLocal");
        await this.peerConnection.setLocalDescription(i), this.remoteSDP.unmuteRemote(e);
        const r = this.remoteSDP.toString();
        null == n || n(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, "NVExtentionsConnection.unmuteLocal failed; ".concat(e.toString()));
      }
    }
    restartICE(e) {
      var t = this;
      return DO(function* () {
        const i = yield PO(t.mutex.lock("From NVExtentionsConnection.restartICE"));
        try {
          if (!t.remoteSDP) throw new Error("Cannot restartICE before remoteSDP created.");
          if (JS().supportPCSetConfiguration) {
            const i = t.peerConnection.getConfiguration(),
              n = e === OS.RELAY ? "relay" : "all";
            i.iceTransportPolicy !== n && (OE.debug("restartICE change iceTransportPolicy from [".concat(i.iceTransportPolicy, "] to [").concat(n, "]")), i.iceTransportPolicy = n, t.peerConnection.setConfiguration(i));
          } else if (e === OS.RELAY) return;
          e !== OS.RELAY && t.remoteSDP.updateCandidates(e);
          const n = yield PO(t.peerConnection.createOffer({
            iceRestart: !0
          }));
          if (!n.sdp) throw new Error("Cannot restartICE because restart offer SDP does not exist.");
          const r = FO(n.sdp),
            {
              remoteIceParameters: o
            } = yield r.iceParameters;
          t.remoteSDP.restartICE(o);
          const s = t.remoteSDP.toString(),
            a = t.logSDPExchange(n.sdp || "", "offer", "local", "restartICE");
          yield PO(t.peerConnection.setLocalDescription(n)), null == a || a(s), yield PO(t.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: s
          }));
        } catch (e) {
          OE.warning("restart ICE failed, abort operation", e);
        } finally {
          i();
        }
      })();
    }
    close() {
      var e;
      null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, "closed"), this.unbindPCEvents(), this.unbindStatsEvents(), this.removeAllListeners(), this.transportEventReceiver = void 0, this.statsFilter.destroy();
    }
    getStats() {
      return this.statsFilter.getStats();
    }
    getRemoteVideoIsReady(e) {
      return this.statsFilter.getVideoIsReady(e);
    }
    async updateEncoderConfig(e, t) {
      try {
        if (!this.remoteSDP) throw new Error("Cannot call NVExtentionsConnection.updateEncoderConfig before remote SDP created.");
        const i = await this.peerConnection.createOffer(),
          n = this.mungSendOfferSDP(i.sdp, [t], [e]);
        this.remoteSDP.updateRecvMedia(e, t);
        const r = this.remoteSDP.toString(),
          o = this.logSDPExchange(n, "offer", "local", "updateEncoderConfig");
        await this.peerConnection.setLocalDescription({
          type: "offer",
          sdp: n
        }), null == o || o(r), await this.peerConnection.setRemoteDescription({
          type: "answer",
          sdp: r
        });
      } catch (e) {
        throw new SE(fE.EXCHANGE_SDP_FAILED, e.toString());
      }
    }
    async updateSendParameters(e, t) {
      const i = this.peerConnection.getTransceivers().filter(t => t.mid === e);
      1 === i.length && (this.isVP8Simulcast(t) ? Kh() || (await this.applySimulcastEncodings(i, [t])) : await this.applySendEncodings(i, [t]));
    }
    setStatsRemoteVideoIsReady(e, t) {
      this.statsFilter.setVideoIsReady2(e, t);
    }
    async replaceTrack(e, t) {
      const i = this.peerConnection.getTransceivers().find(e => e.mid === t);
      i && (await i.sender.replaceTrack(e._mediaStreamTrack));
    }
    getP2PConnectionParams() {
      var e;
      if (null === (e = this.peerConnection.currentLocalDescription) || void 0 === e || !e.sdp || !this.localCapabilities) throw new Error();
      return mb(mb({}, FO(this.peerConnection.currentLocalDescription.sdp)), {}, {
        rtpCapabilities: this.localCapabilities
      });
    }
    bindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = () => {
        var e;
        null === (e = this.onICEConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.iceConnectionState);
      }, this.peerConnection.onconnectionstatechange = () => {
        var e;
        null === (e = this.onConnectionStateChange) || void 0 === e || e.call(this, this.peerConnection.connectionState);
      }, this.peerConnection.onicecandidate = e => {
        e.candidate ? this.localCandidateCount += 1 : (this.peerConnection.onicecandidate = null, this.allCandidatesReceived = !0, OE.debug("[pc-".concat(this.store.p2pId, "] local candidate count"), this.localCandidateCount));
      }, setTimeout(() => {
        this.allCandidatesReceived || (this.allCandidatesReceived = !0, OE.debug("[pc-".concat(this.store.p2pId, "] onicecandidate timeout, local candidate count"), this.localCandidateCount));
      }, GE("CANDIDATE_TIMEOUT"));
    }
    unbindPCEvents() {
      this.peerConnection.oniceconnectionstatechange = null, this.peerConnection.onconnectionstatechange = null, this.peerConnection.onsignalingstatechange = null, this.peerConnection.onicecandidateerror = null, this.peerConnection.onicecandidate = null, this.peerConnection.ontrack = null;
    }
    static resolvePCConfiguration(t) {
      const i = {
        iceServers: []
      };
      return t.iceServers ? i.iceServers = t.iceServers : t.turnServer && "off" !== t.turnServer.mode && (Uf(t.turnServer.servers) ? i.iceServers = t.turnServer.servers : (i.iceServers && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.servers)), GE("USE_TURN_SERVER_OF_GATEWAY") && i.iceServers && t.turnServer.serversFromGateway && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.serversFromGateway)), GE("FORCE_TURN_TCP") ? i.iceTransportPolicy = "relay" : t.turnServer.servers.concat(t.turnServer.serversFromGateway || []).forEach(e => {
        e.forceturn && (i.iceTransportPolicy = "relay");
      }))), i;
    }
    static turnServerConfigToIceServers(e) {
      const t = [];
      return e.forEach(e => {
        e.security ? e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turns:".concat(VI(e.turnServerURL), ":").concat(e.tcpport, "?transport=tcp")
        }) : (e.udpport && !GE("FORCE_TURN_TCP") && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.udpport, "?transport=udp")
        }), e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.tcpport, "?transport=tcp")
        }));
      }), t;
    }
    async applySendEncodings(e, t) {
      try {
        if (!JS().supportSetRtpSenderParameters) return;
        if (e.length !== t.length) return;
        for (let c = 0; c < e.length; c++) {
          const d = e[c],
            u = t[c];
          if (u && u instanceof Cy) {
            var i, n;
            if (this.isVP8Simulcast(u)) continue;
            const e = {},
              t = {};
            switch (u._optimizationMode) {
              case "motion":
                e.degradationPreference = "maintain-framerate";
                break;
              case "detail":
                e.degradationPreference = "maintain-resolution";
                break;
              default:
                e.degradationPreference = "balanced";
            }
            var r, o, s, a;
            if (null !== (i = u._encoderConfig) && void 0 !== i && i.bitrateMax) t.maxBitrate = 1000 * (null === (r = u._encoderConfig) || void 0 === r ? void 0 : r.bitrateMax);
            if (u._hints.includes(lS.LOW_STREAM)) null !== (o = u._encoderConfig) && void 0 !== o && o.frameRate && (t.maxFramerate = FI(u._encoderConfig.frameRate)), null !== (s = u._encoderConfig) && void 0 !== s && s.scaleResolutionDownBy && (null === (a = u._encoderConfig) || void 0 === a ? void 0 : a.scaleResolutionDownBy) > 1 && (t.scaleResolutionDownBy = u._encoderConfig.scaleResolutionDownBy);
            if (GE("DSCP_TYPE") && rp()) {
              const e = GE("DSCP_TYPE");
              ["very-low", "low", "medium", "high"].includes(e) && (t.networkPriority = e);
            }
            const c = d.sender.getParameters(),
              l = null === (n = c.encodings) || void 0 === n ? void 0 : n[0];
            Kh() && !l && (e.encodings = [t]), l && Object.assign(l, t), Object.assign(c, e), await d.sender.setParameters(c);
          }
        }
      } catch (e) {
        OE.debug("Apply RTPSendEncodings failed.");
      }
    }
    mungSendOfferSDP(e, t, i) {
      const n = UO.exports.parse(e);
      return t.forEach((e, t) => {
        const r = i[t],
          o = n.mediaDescriptions.find(e => e.attributes.mid === r);
        o && (HO(o, e), XO(o, e, this.store.codec));
      }), UO.exports.print(n);
    }
    mungReceiveAnswerSDP(e, t, i) {
      const n = UO.exports.parse(e),
        r = n.mediaDescriptions.find(e => e.attributes.mid === t);
      return r && i === AS.AUDIO && "audio" === r.media.mediaType && $O(r), UO.exports.print(n);
    }
    bindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = e => {
        var t;
        null === (t = this.onFirstAudioReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoReceived = e => {
        var t;
        null === (t = this.onFirstVideoReceived) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstAudioDecoded = e => {
        var t;
        null === (t = this.onFirstAudioDecoded) || void 0 === t || t.call(this, e);
      }, this.statsFilter.onFirstVideoDecoded = (e, t, i) => {
        var n;
        null === (n = this.onFirstVideoDecoded) || void 0 === n || n.call(this, e, t, i);
      }, this.statsFilter.onSelectedLocalCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedLocalCandidateChanged) || void 0 === i || i.call(this, e, t);
      }, this.statsFilter.onSelectedRemoteCandidateChanged = (e, t) => {
        var i;
        null === (i = this.onSelectedRemoteCandidateChanged) || void 0 === i || i.call(this, e, t);
      }, this.statsFilter.onFirstVideoDecodedTimeout = e => {
        var t;
        null === (t = this.onFirstVideoDecodedTimeout) || void 0 === t || t.call(this, e);
      };
    }
    unbindStatsEvents() {
      this.statsFilter.onFirstAudioReceived = void 0, this.statsFilter.onFirstVideoReceived = void 0, this.statsFilter.onFirstAudioDecoded = void 0, this.statsFilter.onFirstVideoDecoded = void 0, this.statsFilter.onSelectedLocalCandidateChanged = void 0, this.statsFilter.onSelectedRemoteCandidateChanged = void 0, this.statsFilter.onFirstVideoDecodedTimeout = void 0;
    }
    async applySimulcastForFirefox(e, t) {
      if (e.length === t.length) for (let s = 0; s < e.length; s++) {
        var i, n, r, o;
        const a = e[s],
          c = t[s];
        if (c instanceof Cy && !c._hints.includes(lS.LOW_STREAM) && null !== (i = c._encoderConfig) && void 0 !== i && i.bitrateMax && (null === (n = c._encoderConfig) || void 0 === n ? void 0 : n.bitrateMax) > 200 && null !== (r = c._scalabiltyMode) && void 0 !== r && r.numSpatialLayers && (null === (o = c._scalabiltyMode) || void 0 === o ? void 0 : o.numSpatialLayers) > 1 && "vp8" === this.store.codec) {
          const e = {},
            t = {
              high: 1000 * (c._encoderConfig.bitrateMax - 50),
              medium: 50000
            };
          e.encodings = [{
            rid: "m",
            active: !0,
            maxBitrate: t.medium,
            scaleResolutionDownBy: 4
          }, {
            rid: "h",
            active: !0,
            maxBitrate: t.high
          }];
          const i = a.sender.getParameters();
          await a.sender.setParameters(Object.assign(i, e));
        }
      }
    }
    async applySimulcastEncodings(e, t) {
      if (!Kh() && e.length === t.length) for (let i = 0; i < e.length; i++) {
        const n = t[i];
        if (n instanceof Cy && this.isVP8Simulcast(n)) {
          const t = e[i],
            r = {},
            o = {
              high: 1000 * (n._encoderConfig.bitrateMax - 50),
              medium: 50000
            };
          r.encodings = [{
            active: !0,
            adaptivePtime: !1,
            networkPriority: "high",
            priority: "high",
            maxBitrate: o.high
          }, {
            active: !0,
            adaptivePtime: !1,
            networkPriority: "low",
            priority: "low",
            maxBitrate: o.medium,
            scaleResolutionDownBy: 4
          }];
          const s = t.sender.getParameters();
          await t.sender.setParameters(Object.assign(s, r));
        }
      }
    }
    isVP8Simulcast(e) {
      var t, i, n, r;
      return !!(e instanceof Cy && GE("SIMULCAST") && "vp8" === this.store.codec && !e._hints.includes(lS.LOW_STREAM) && null !== (t = e._encoderConfig) && void 0 !== t && t.bitrateMax && (null === (i = e._encoderConfig) || void 0 === i ? void 0 : i.bitrateMax) > 200 && null !== (n = e._scalabiltyMode) && void 0 !== n && n.numSpatialLayers && (null === (r = e._scalabiltyMode) || void 0 === r ? void 0 : r.numSpatialLayers) > 1);
    }
    logSDPExchange(e, t, i, n) {
      if (GE("SDP_LOGGING")) return OE.upload("exchanging ".concat(i, " ").concat(t, " SDP during NVExtentionsConnection.").concat(n, "\n"), e), "offer" === t ? e => {
        this.logSDPExchange(e, "answer", "local" === i ? "remote" : "local", n);
      } : void 0;
    }
    async getRemoteSSRC(e) {
      if (!this.remoteSDP) return;
      const t = this.remoteSDP.getSSRC(e);
      return null == t ? void 0 : t[0].ssrcId;
    }
    setConfiguration(t) {
      if (JS().supportPCSetConfiguration) {
        const i = e.resolvePCConfiguration(t);
        this.peerConnection.setConfiguration(i);
      }
    }
  }).prototype, "connect", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "connect"), _b.prototype), ag(_b.prototype, "updateRemoteConnect", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "updateRemoteConnect"), _b.prototype), ag(_b.prototype, "receive", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "receive"), _b.prototype), ag(_b.prototype, "batchReceive", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "batchReceive"), _b.prototype), ag(_b.prototype, "stopReceiving", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "stopReceiving"), _b.prototype), ag(_b.prototype, "muteRemote", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "muteRemote"), _b.prototype), ag(_b.prototype, "unmuteRemote", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "unmuteRemote"), _b.prototype), ag(_b.prototype, "muteLocal", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "muteLocal"), _b.prototype), ag(_b.prototype, "unmuteLocal", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "unmuteLocal"), _b.prototype), ag(_b.prototype, "close", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "close"), _b.prototype), ag(_b.prototype, "updateEncoderConfig", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "updateEncoderConfig"), _b.prototype), ag(_b.prototype, "updateSendParameters", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "updateSendParameters"), _b.prototype), ag(_b.prototype, "replaceTrack", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "replaceTrack"), _b.prototype), ag(_b.prototype, "getRemoteSSRC", [Sb], Object.getOwnPropertyDescriptor(_b.prototype, "getRemoteSSRC"), _b.prototype), _b);
  function Sb(e, t, i) {
    const n = e[t];
    if ("function" != typeof n) throw new Error("Cannot use mutex on object property.");
    return i.value = async function () {
      const e = (this || _global).mutex,
        i = await e.lock("From NVExtentionsConnection.".concat(t));
      try {
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return await n.apply(this || _global, o);
      } finally {
        i();
      }
    }, i;
  }
  var Tb;
  function gb(e) {
    var t,
      i,
      n,
      r = 2;
    for ("undefined" != typeof Symbol && (i = MO, n = Symbol.iterator); r--;) {
      if (i && null != (t = e[i])) return t.call(e);
      if (n && null != (t = e[n])) return new Rb(t.call(e));
      i = "@@asyncIterator", n = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function Rb(e) {
    function t(e) {
      if (Object(e) !== e) return Sl.reject(new TypeError(e + " is not an object."));
      var t = e.done;
      return Sl.resolve(e.value).then(function (e) {
        return {
          value: e,
          done: t
        };
      });
    }
    return (Rb = function (e) {
      (this || _global).s = e, (this || _global).n = e.next;
    }).prototype = {
      s: null,
      n: null,
      next: function () {
        return t((this || _global).n.apply((this || _global).s, arguments));
      },
      return: function (e) {
        var i = (this || _global).s.return;
        return void 0 === i ? Sl.resolve({
          value: e,
          done: !0
        }) : t(i.apply((this || _global).s, arguments));
      },
      throw: function (e) {
        var i = (this || _global).s.return;
        return void 0 === i ? Sl.reject(e) : t(i.apply((this || _global).s, arguments));
      }
    }, new Rb(e);
  }
  let Ib = (ag((Tb = class e extends YS {
    get currentLocalDescription() {
      return this.peerConnection.currentLocalDescription;
    }
    get currentRemoteDescription() {
      return this.peerConnection.currentRemoteDescription;
    }
    get peerConnectionState() {
      return this.peerConnection.connectionState;
    }
    get iceConnectionState() {
      return this.peerConnection.iceConnectionState;
    }
    constructor(t, i) {
      super(t, i), _p(this, "store", void 0), _p(this, "peerConnection", void 0), _p(this, "cname", void 0), _p(this, "mutex", new Ug("DataChannelConnection-mutex")), _p(this, "dataChannel", void 0), _p(this, "_p2pConnection", void 0), _p(this, "establishPromise", void 0), _p(this, "_nvMedia", void 0), this.store = i, this.store.dcId = this.store.dcId + 1, this.peerConnection = new RTCPeerConnection(e.resolvePCConfiguration(t), {
        optional: [{
          googDscp: !0
        }]
      }), this.dataChannel = this.peerConnection.createDataChannel("agora-signal", {
        ordered: !1,
        maxPacketLifeTime: 50
      }), this.dataChannel.binaryType = "arraybuffer", this._p2pConnection = new fb(t, i, this.peerConnection), this.bindPCEvents(), this.establishPromise = this._p2pConnection.establishPromise;
    }
    async establish() {
      var e;
      const t = null === (e = this._nvMedia) || void 0 === e ? void 0 : e.getLocalRtpCapabilities();
      return await this._p2pConnection.establish(t);
    }
    getP2PConnectionParams() {
      return this._p2pConnection.getP2PConnectionParams();
    }
    async connect(e, t, i, n, r, o) {
      return this.cname = o, await this._p2pConnection.connect(e, t, i, n, r, o), await new Sl((e, t) => {
        const n = setTimeout(() => {
          this.closeSignal(), t(new SE(fE.DATACHANNEL_CONNECTION_TIMEOUT, "Datachannel connection timed out, candidates: ".concat(JSON.stringify(i))));
        }, 2000);
        this.dataChannel.onopen = () => {
          if ("open" === this.dataChannel.readyState) return clearTimeout(n), void e();
        }, this.dataChannel.onerror = e => {
          this.closeSignal(), t(e);
        };
      }), {
        transmitter: this.dataChannel,
        close: this.closeSignal.bind(this)
      };
    }
    send(e, t, i) {
      var n = this;
      return DO(function* () {
        const r = yield PO(n.mutex.lock("From DataChannelConnection.send"));
        try {
          return yield* kO(gb(n._p2pConnection.send(e, t, i)), PO);
        } finally {
          r();
        }
      })();
    }
    async stopSending(e, t) {
      return this._p2pConnection.stopSending(e, t);
    }
    async receive(e, t, i, n) {
      return this._nvMedia ? (OE.debug("[DataChannelConnection] receive ".concat(e, " by DataChannel.")), await this._nvMedia.reveiveByRTCMedia(e, t, this.cname)) : (OE.debug("[DataChannelConnection] receive ".concat(e, " by WebRTC.")), await this._p2pConnection.receive(e, t, i, n));
    }
    async batchReceive(e) {
      return [...(await this._p2pConnection.batchReceive(e))];
    }
    async stopReceiving(e) {
      return await this._p2pConnection.stopReceiving(e);
    }
    async muteRemote(e) {
      return await this._p2pConnection.muteRemote(e);
    }
    async unmuteRemote(e) {
      return await this._p2pConnection.unmuteRemote(e);
    }
    async muteLocal(e) {
      return await this._p2pConnection.muteLocal(e);
    }
    async unmuteLocal(e) {
      return await this._p2pConnection.unmuteLocal(e);
    }
    restartICE(e) {
      var t = this;
      return DO(function* () {
        return yield* kO(gb(t._p2pConnection.restartICE(e)), PO);
      })();
    }
    close() {
      var e;
      null === (e = this._nvMedia) || void 0 === e || e.close(), this._p2pConnection.close(), this.unbindConnectionEvents(this._p2pConnection);
    }
    getStats() {
      return this._p2pConnection.getStats();
    }
    getRemoteVideoIsReady(e) {
      return this._p2pConnection.getRemoteVideoIsReady(e);
    }
    updateRemoteConnect(e) {
      var t;
      null === (t = this._nvMedia) || void 0 === t || t.setRemoteRtpCapabilities(e), this._p2pConnection.updateRemoteConnect(e);
    }
    async updateEncoderConfig(e, t) {
      return await this._p2pConnection.updateEncoderConfig(e, t);
    }
    async updateSendParameters(e, t) {
      return await this._p2pConnection.updateSendParameters(e, t);
    }
    setStatsRemoteVideoIsReady(e, t) {
      this._p2pConnection.setStatsRemoteVideoIsReady(e, t);
    }
    async replaceTrack(e, t) {
      return await this._p2pConnection.replaceTrack(e, t);
    }
    async getRemoteSSRC(e) {
      return this._p2pConnection.getRemoteSSRC(e);
    }
    logSDPExchange(e, t, i, n) {
      if (GE("SDP_LOGGING")) return OE.upload("exchanging ".concat(i, " ").concat(t, " SDP during DataChannelConnection.").concat(n, "\n"), e), "offer" === t ? e => {
        this.logSDPExchange(e, "answer", "local" === i ? "remote" : "local", n);
      } : void 0;
    }
    static resolvePCConfiguration(t) {
      const i = {
        iceServers: []
      };
      return t.iceServers ? i.iceServers = t.iceServers : t.turnServer && "off" !== t.turnServer.mode && (Uf(t.turnServer.servers) ? i.iceServers = t.turnServer.servers : (i.iceServers && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.servers)), GE("USE_TURN_SERVER_OF_GATEWAY") && i.iceServers && t.turnServer.serversFromGateway && i.iceServers.push(...e.turnServerConfigToIceServers(t.turnServer.serversFromGateway)), GE("FORCE_TURN_TCP") ? i.iceTransportPolicy = "relay" : t.turnServer.servers.concat(t.turnServer.serversFromGateway || []).forEach(e => {
        e.forceturn && (i.iceTransportPolicy = "relay");
      }))), i;
    }
    static turnServerConfigToIceServers(e) {
      const t = [];
      return e.forEach(e => {
        e.security ? e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turns:".concat(VI(e.turnServerURL), ":").concat(e.tcpport, "?transport=tcp")
        }) : (e.udpport && !GE("FORCE_TURN_TCP") && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.udpport, "?transport=udp")
        }), e.tcpport && t.push({
          username: e.username,
          credential: e.password,
          credentialType: "password",
          urls: "turn:".concat(e.turnServerURL, ":").concat(e.tcpport, "?transport=tcp")
        }));
      }), t;
    }
    bindPCEvents() {
      this._p2pConnection.onICEConnectionStateChange = e => {
        var t;
        return null === (t = this.onICEConnectionStateChange) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onConnectionStateChange = e => {
        var t;
        return null === (t = this.onConnectionStateChange) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onDTLSTransportStateChange = e => {
        var t;
        return null === (t = this.onDTLSTransportStateChange) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onDTLSTransportError = e => {
        var t;
        return null === (t = this.onDTLSTransportError) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onICETransportStateChange = e => {
        var t;
        return null === (t = this.onICETransportStateChange) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onFirstAudioReceived = e => {
        var t;
        return null === (t = this.onFirstAudioReceived) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onFirstVideoReceived = e => {
        var t;
        return null === (t = this.onFirstVideoReceived) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onFirstAudioDecoded = e => {
        var t;
        return null === (t = this.onFirstAudioDecoded) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onFirstVideoDecoded = (e, t, i) => {
        var n;
        return null === (n = this.onFirstVideoDecoded) || void 0 === n ? void 0 : n.call(this, e, t, i);
      }, this._p2pConnection.onFirstVideoDecodedTimeout = e => {
        var t;
        return null === (t = this.onFirstVideoDecodedTimeout) || void 0 === t ? void 0 : t.call(this, e);
      }, this._p2pConnection.onSelectedLocalCandidateChanged = (e, t) => {
        var i;
        return null === (i = this.onSelectedLocalCandidateChanged) || void 0 === i ? void 0 : i.call(this, e, t);
      }, this._p2pConnection.onSelectedRemoteCandidateChanged = (e, t) => {
        var i;
        return null === (i = this.onSelectedRemoteCandidateChanged) || void 0 === i ? void 0 : i.call(this, e, t);
      };
    }
    closeSignal() {
      this.dataChannel.close(), this.peerConnection.close();
    }
    unbindConnectionEvents(e) {
      e.onConnectionStateChange = void 0, e.onICEConnectionStateChange = void 0, e.onICETransportStateChange = void 0, e.onDTLSTransportStateChange = void 0, e.onDTLSTransportError = void 0, e.onFirstAudioDecoded = void 0, e.onFirstAudioReceived = void 0, e.onFirstVideoDecoded = void 0, e.onFirstVideoReceived = void 0, e.onSelectedLocalCandidateChanged = void 0, e.onSelectedRemoteCandidateChanged = void 0, e.onFirstVideoDecodedTimeout = void 0;
    }
    setConfiguration(e) {
      this._p2pConnection.setConfiguration(e);
    }
  }).prototype, "connect", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "connect"), Tb.prototype), ag(Tb.prototype, "receive", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "receive"), Tb.prototype), ag(Tb.prototype, "stopReceiving", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "stopReceiving"), Tb.prototype), ag(Tb.prototype, "muteRemote", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "muteRemote"), Tb.prototype), ag(Tb.prototype, "unmuteRemote", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "unmuteRemote"), Tb.prototype), ag(Tb.prototype, "muteLocal", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "muteLocal"), Tb.prototype), ag(Tb.prototype, "unmuteLocal", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "unmuteLocal"), Tb.prototype), ag(Tb.prototype, "close", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "close"), Tb.prototype), ag(Tb.prototype, "updateEncoderConfig", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "updateEncoderConfig"), Tb.prototype), ag(Tb.prototype, "updateSendParameters", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "updateSendParameters"), Tb.prototype), ag(Tb.prototype, "replaceTrack", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "replaceTrack"), Tb.prototype), ag(Tb.prototype, "getRemoteSSRC", [Cb], Object.getOwnPropertyDescriptor(Tb.prototype, "getRemoteSSRC"), Tb.prototype), Tb);
  function Cb(e, t, i) {
    const n = e[t];
    if ("function" != typeof n) throw new Error("Cannot use mutex on object property.");
    return i.value = async function () {
      const e = (this || _global).mutex,
        i = await e.lock("From DataChannelConnection.".concat(t));
      try {
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return await n.apply(this || _global, o);
      } finally {
        i();
      }
    }, i;
  }
  var vb;
  function yb(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Ab(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? yb(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : yb(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  function Ob(e) {
    var t,
      i,
      n,
      r = 2;
    for ("undefined" != typeof Symbol && (i = MO, n = Symbol.iterator); r--;) {
      if (i && null != (t = e[i])) return t.call(e);
      if (n && null != (t = e[n])) return new Nb(t.call(e));
      i = "@@asyncIterator", n = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function Nb(e) {
    function t(e) {
      if (Object(e) !== e) return Sl.reject(new TypeError(e + " is not an object."));
      var t = e.done;
      return Sl.resolve(e.value).then(function (e) {
        return {
          value: e,
          done: t
        };
      });
    }
    return (Nb = function (e) {
      (this || _global).s = e, (this || _global).n = e.next;
    }).prototype = {
      s: null,
      n: null,
      next: function () {
        return t((this || _global).n.apply((this || _global).s, arguments));
      },
      return: function (e) {
        var i = (this || _global).s.return;
        return void 0 === i ? Sl.resolve({
          value: e,
          done: !0
        }) : t(i.apply((this || _global).s, arguments));
      },
      throw: function (e) {
        var i = (this || _global).s.return;
        return void 0 === i ? Sl.reject(e) : t(i.apply((this || _global).s, arguments));
      }
    }, new Nb(e);
  }
  let bb = (ag((vb = class extends EE {
    get state() {
      return this._state;
    }
    set state(e) {
      const t = this._state;
      this._state = e, this.emit(DS.StateChange, t, this._state);
    }
    constructor(e, t) {
      super(), _p(this, "store", void 0), _p(this, "statsUploader", void 0), _p(this, "connection", void 0), _p(this, "localTrackMap", new Map()), _p(this, "remoteUserMap", new Map()), _p(this, "pendingLocalTracks", []), _p(this, "pendingRemoteTracks", []), _p(this, "statsCollector", void 0), _p(this, "isPlanB", !1), _p(this, "shouldForwardP2PCreation", void 0), _p(this, "iceFailedCount", 0), _p(this, "dtlsFailedCount", 0), _p(this, "mutex", new Ug("P2PChannel-mutex")), _p(this, "_state", wS.Disconnected), _p(this, "_pcStatsUploadType", GE("NEW_ICE_RESTART") ? NS.FIRST_CONNECTION : NS.OLD_FIRST_CONNECTION), _p(this, "_isInRestartIce", !1), _p(this, "_isStartRestartIce", !1), _p(this, "_restartStates", ["disconnected", "failed"]), _p(this, "_restartTimer", void 0), _p(this, "_isFirstConnected", !0), _p(this, "handleMuteLocalTrack", async (e, t, i) => {
        const n = await this.mutex.lock("Locking from P2PChannel.handleMuteLocalTrack");
        try {
          if (!this.connection || this.state !== wS.Connected) return void i(new SE(fE.INVALID_OPERATION, "Cannot call P2PChannel.handleMuteLocalTrack before connection established."));
          const r = this.filterTobeMutedTracks(e);
          if (0 === r.length) return void t();
          const o = r.find(e => "videoLowTrack" === e[0]);
          if (o) {
            o[1].track._originMediaStreamTrack.stop();
          }
          await this.connection.muteLocal(r.map(e => {
            let [, {
              id: t
            }] = e;
            return t;
          }));
          const s = this.createMuteMessage(r);
          await rC(this, DS.RequestMuteLocal, s), t();
        } catch (e) {
          i(e);
        } finally {
          n();
        }
      }), _p(this, "handleUnmuteLocalTrack", async (e, t, i) => {
        const n = await this.mutex.lock("Locking from P2PChannel.handleUnmuteLocalTrack");
        try {
          if (!this.connection || this.state !== wS.Connected) return void i(new SE(fE.INVALID_OPERATION, "Cannot call P2PChannel.handleUnmuteLocalTrack before connection established."));
          const r = this.filterTobeUnmutedTracks(e);
          if (0 === r.length) return void t();
          const o = r.find(e => "videoLowTrack" === e[0]);
          if (o) {
            const t = o[1];
            if (t.track._originMediaStreamTrack.stop(), JS().supportDualStreamEncoding) {
              const i = e._mediaStreamTrack.clone();
              t.track._mediaStreamTrack = i, t.track._originMediaStreamTrack = i;
            } else {
              const i = FN(e, sC(this, DS.RequestLowStreamParameter));
              t.track._mediaStreamTrack = i, t.track._originMediaStreamTrack = i;
            }
            await new Sl((e, i) => {
              this.handleReplaceTrack(t.track, e, i, !0);
            });
          }
          await this.connection.unmuteLocal(r.map(e => {
            let [, {
              id: t
            }] = e;
            return t;
          }));
          const s = this.createUnmuteMessage(r);
          await rC(this, DS.RequestUnmuteLocal, s), t();
        } catch (e) {
          i(e);
        } finally {
          n();
        }
      }), _p(this, "handleUpdateVideoEncoder", async (e, t, i) => {
        const n = await this.mutex.lock("Locking from P2PChannel.handleSetVideoEncoder");
        try {
          const i = this.localTrackMap.get(bS.LocalVideoTrack);
          if (!this.connection || !i || i.track !== e || this.state !== wS.Connected) return void t();
          const {
            id: r,
            track: o
          } = i;
          await this.connection.updateSendParameters(r, o), await this.connection.updateEncoderConfig(r, o), this.emit(DS.UpdateVideoEncoder, o), t();
        } catch (e) {
          i(e);
        } finally {
          n();
        }
      }), _p(this, "handleSetOptimizationMode", async (e, t, i) => {
        const n = await this.mutex.lock("Locking from P2PChannel.handleSetOptimizationMode");
        try {
          const i = this.localTrackMap.get(bS.LocalVideoTrack);
          if (!this.connection || !i || i.track !== e || this.state !== wS.Connected) return;
          const {
            id: r,
            track: o
          } = i;
          await this.connection.updateSendParameters(r, o), t();
        } catch (e) {
          i(e);
        } finally {
          n();
        }
      }), _p(this, "handleReplaceTrack", async (e, t, i, n) => {
        let r;
        OE.debug("[".concat(this.store.clientId, "] P2PChannel handleReplaceTrack for [track-id-").concat(e.getTrackId(), "]")), "boolean" == typeof n && n || (r = await this.mutex.lock("From P2PChannel.handleReplaceTrack"));
        try {
          var o;
          const i = Array.from(this.localTrackMap.entries()).find(t => {
            let [, {
              track: i
            }] = t;
            return e === i;
          });
          if (!this.connection || !i || this.state !== wS.Connected) return void t();
          if (await (null === (o = this.connection) || void 0 === o ? void 0 : o.replaceTrack(e, i[1].id)), this.isPlanB) {
            const t = i[1];
            t.id = e._mediaStreamTrack.id, this.localTrackMap.set(i[0], t);
          }
          if (i[0] === bS.LocalVideoTrack && JS().supportDualStreamEncoding) {
            const t = this.localTrackMap.get(bS.LocalVideoLowTrack);
            if (t) {
              const i = e._mediaStreamTrack.clone();
              t.track._originMediaStreamTrack.stop(), t.track._mediaStreamTrack = i, t.track._originMediaStreamTrack = i, await new Sl((e, i) => {
                this.handleReplaceTrack(t.track, e, i, !0);
              });
            }
          }
          t();
        } catch (e) {
          i(e);
        } finally {
          var s;
          null === (s = r) || void 0 === s || s();
        }
      }), _p(this, "handleGetLocalVideoStats", e => {
        e(this.statsCollector.getLocalVideoTrackStats());
      }), _p(this, "handleGetLocalAudioStats", e => {
        e(this.statsCollector.getLocalAudioTrackStats());
      }), _p(this, "handleGetRemoteVideoStats", e => this.statsCollector.getRemoteVideoTrackStats(e.uid)[e.uid]), _p(this, "handleGetRemoteAudioStats", e => this.statsCollector.getRemoteAudioTrackStats(e.uid)[e.uid]), this.store = e, this.statsCollector = t, this.statsCollector.addP2PChannel(this), this.statsUploader = new sb(), this.bindStatsUploaderEvents(), this.isPlanB = !JS().supportUnifiedPlan || GE("CHROME_FORCE_PLAN_B") && rp(), this.shouldForwardP2PCreation = GE("FORWARD_P2P_CREATION") && JS().supportPCSetConfiguration, this.shouldForwardP2PCreation && (this.connection = this.store.useDataChannel ? new Ib({}, this.store) : this.isPlanB ? new NN({}, this.store) : new VN({}, this.store), this.bindConnectionEvents(this.connection));
    }
    async startP2PConnection(e, t) {
      var i;
      this.state = wS.New;
      const n = this.shouldForwardP2PCreation && "closed" === (null === (i = this.connection) || void 0 === i ? void 0 : i.peerConnectionState);
      if (this.shouldForwardP2PCreation && !n || (n && this.connection && (OE.warning("[".concat(this.store.clientId, "] P2PChannel.startP2PConnection ForwardP2P closed.")), this.connection.close(), this.unbindConnectionEvents(this.connection)), this.connection = this.store.useDataChannel ? new Ib(e, this.store) : this.isPlanB ? new NN(e, this.store) : new VN(e, this.store), this.bindConnectionEvents(this.connection)), !this.connection) throw new SE(fE.UNEXPECTED_ERROR, "Cannot P2PChannel.startConnection before P2PConnection initialization .");
      return this._pcStatsUploadType = GE("NEW_ICE_RESTART") ? NS.FIRST_CONNECTION : NS.OLD_FIRST_CONNECTION, this._isFirstConnected = !0, this._isInRestartIce = !1, this._isStartRestartIce = !1, this.connection.setConfiguration(e), this.connection.establishPromise;
    }
    async connect(e, t, i, n, r, o) {
      if (!this.connection) throw new SE(fE.UNEXPECTED_ERROR, "Cannot P2PChannel.connect before P2PChannel.startP2PConnection .");
      this.connection instanceof Ib ? this.connection.updateRemoteConnect(n) : (this.store.peerConnectionStart(), await this.connection.connect(e, t, i, n, r, o), this.statsUploader.startUploadTransportStats(), this.statsUploader.startUploadExtensionUsageStats(), this.state = wS.Connected);
    }
    async preConnect(e, t, i, n, r, o) {
      if (!this.connection) throw new SE(fE.UNEXPECTED_ERROR, "Cannot P2PChannel.connect before P2PChannel.startP2PConnection .");
      this.store.peerConnectionStart();
      const s = await this.connection.connect(e, t, i, n, r, o);
      return this.statsUploader.startUploadTransportStats(), this.statsUploader.startUploadExtensionUsageStats(), this.state = wS.Connected, s;
    }
    getEstablishParams() {
      if (this.connection instanceof Ib) return this.connection.getP2PConnectionParams();
      throw new Error("Only DataChannelConnection needs to obtain establishParams");
    }
    publish(e, t, i) {
      var n = this;
      return DO(function* () {
        const r = yield PO(n.mutex.lock("From P2PChannel.publish"));
        try {
          if (!n.connection || n.state !== wS.Connected) {
            if (n.state === wS.Disconnected) throw new SE(fE.UNEXPECTED_ERROR, "PeerConnection already disconnected.");
            n.throwIfTrackTypeNotMatch(e);
            const t = e.filter(e => -1 === n.pendingLocalTracks.indexOf(e));
            return void (n.pendingLocalTracks = n.pendingLocalTracks.concat(t));
          }
          n.store.pubId = n.store.pubId + 1, DI.markPublishStart(n.store.clientId, n.store.pubId);
          const o = n.filterTobePublishedTracks(e, t, i);
          if (0 === o.length) return void (yield PO(n.tryToUnmuteAudio(e)));
          yield* kO(Ob(n.doPublish(n.connection, o)), PO);
        } finally {
          r();
        }
      })();
    }
    doPublish(e, t) {
      var i = this;
      return DO(function* () {
        t.forEach(e => {
          let {
            track: t,
            type: n
          } = e;
          const r = Date.now();
          i.store.publish(t.getTrackId(), n === bS.LocalAudioTrack ? "audio" : "video", r);
        }), i.bindLocalTrackEvents(t);
        const n = yield PO(e.send(t.map(e => {
            let {
              track: t
            } = e;
            return t;
          }), i.store.codec, i.store.audioCodec)),
          r = (yield PO(n.next())).value,
          o = i.createGatewayPublishMessage(t, r);
        let s;
        try {
          s = yield o;
        } catch (e) {
          throw n.throw(e), (null == e ? void 0 : e.code) === fE.WS_ABORT && t.forEach(e => {
            let {
              track: t
            } = e;
            -1 === i.pendingLocalTracks.indexOf(t) && i.pendingLocalTracks.push(t);
          }), i.unbindLocalTrackEvents(t), e;
        }
        const a = i.mapPubResToRemoteConfig(o, s),
          c = (yield PO(n.next(a))).value;
        t.forEach(e => {
          let {
            type: t
          } = e;
          i.statsCollector.addLocalStats(t);
        }), i.assignLocalTracks(t, c), i.statsUploader.startUploadUplinkStats(), t.forEach(e => {
          let {
            track: t,
            type: n
          } = e;
          const r = Date.now();
          i.store.publish(t.getTrackId(), n === bS.LocalAudioTrack ? "audio" : "video", void 0, r);
        });
      })();
    }
    publishLowStream(e) {
      var t = this;
      return DO(function* () {
        if (!t.connection || t.state !== wS.Connected) return;
        const i = yield PO(t.mutex.lock("Locking from P2PChannel.publishLowStream"));
        try {
          const r = t.localTrackMap.get(bS.LocalVideoTrack);
          if (!r) throw new SE(fE.UNEXPECTED_ERROR, "Could not find high stream");
          if (t.localTrackMap.has(bS.LocalVideoLowTrack)) throw new SE(fE.UNEXPECTED_ERROR, "[".concat(t.store.clientId, "] Can't publish low stream when stream already publish"));
          const o = [{
            track: t.getLowVideoTrack(r.track, e),
            type: bS.LocalVideoLowTrack
          }];
          if (yield* kO(Ob(t.doPublish(t.connection, o)), PO), r.track.muted || !r.track.enabled) {
            var n;
            const e = null === (n = t.localTrackMap.get(bS.LocalVideoLowTrack)) || void 0 === n ? void 0 : n.id;
            void 0 !== e && (yield PO(t.connection.muteLocal([e])));
          }
        } finally {
          i();
        }
      })();
    }
    async republish() {
      this.pendingLocalTracks.length > 0 && (OE.debug("[".concat(this.store.clientId, "] Emit P2PChannelEvents.RequestRePublish to republish tracks.")), await nC(this, DS.RequestRePublish, this.pendingLocalTracks), this.emit(DS.MediaReconnectEnd, this.store.uid), this.pendingLocalTracks = []);
    }
    async reSubscribe(e) {
      for (let e = this.pendingRemoteTracks.length - 1; e >= 0; e--) {
        const {
          user: t,
          kind: i
        } = this.pendingRemoteTracks[e];
        (i !== AS.AUDIO || t._audio_added_ && t._audioSSRC) && (i !== AS.VIDEO || t._video_added_ && t._videoSSRC) || this.pendingRemoteTracks.splice(e, 1);
      }
      if (e) await nC(this, DS.RequestReSubscribe, this.pendingRemoteTracks);else for (const {
        user: e,
        kind: t
      } of this.pendingRemoteTracks) await this.subscribe(e, t, t === AS.VIDEO ? e._videoSSRC : e._audioSSRC);
      this.pendingRemoteTracks.forEach(e => {
        let {
          user: t
        } = e;
        this.emit(DS.MediaReconnectEnd, t.uid);
      }), this.pendingRemoteTracks = [];
    }
    async unpublish(e) {
      if (!this.connection || this.state !== wS.Connected) return void e.forEach(e => {
        const t = this.pendingLocalTracks.indexOf(e);
        -1 !== t && this.pendingLocalTracks.splice(t, 1);
      });
      const t = this.filterTobeUnpublishedTracks(e);
      if (0 === t.length) return;
      const i = t.find(e => "videoLowTrack" === e[0]);
      if (i) {
        i[1].track.close();
      }
      return this.doUnpublish(this.connection, t);
    }
    async unpublishLowStream() {
      if (!this.connection || this.state !== wS.Connected) return;
      const e = this.localTrackMap.get(bS.LocalVideoLowTrack);
      if (!e) return;
      e.track.close();
      const t = [[bS.LocalVideoLowTrack, e]];
      return this.doUnpublish(this.connection, t);
    }
    async doUnpublish(e, t) {
      const i = this.createGatewayUnpublishMessage(t);
      return await e.stopSending(t.map(e => {
        let [, {
          id: t
        }] = e;
        return t;
      })), this.withdrawLocalTracks(t), this.unbindLocalTrackEvents(t.map(e => {
        let [t, {
          track: i
        }] = e;
        return {
          type: t,
          track: i
        };
      })), t.forEach(e => {
        let [t] = e;
        this.statsCollector.removeLocalStats(t);
      }), 0 === this.localTrackMap.size && this.statsUploader.stopUploadUplinkStats(), i;
    }
    async subscribe(e, t, i, n, r) {
      var o;
      if (!this.connection || this.state !== wS.Connected) throw new SE(fE.INVALID_OPERATION, "Cannot subscribe remote user when peerConnection disconnected.");
      if (null !== (o = this.remoteUserMap.get(e)) && void 0 !== o && o.has(t)) return;
      let s,
        a,
        c = void 0;
      if (r) {
        const i = r.find(e => {
          let {
            stream_type: i
          } = e;
          return i === t;
        });
        if (!i) throw new SE(fE.UNEXPECTED_ERROR, "Cannot subscribe to remote ".concat(t, " for user: ").concat(e.uid, " because subscribe answer from gateway does not contain stream_type: ").concat(t, "."));
        const n = await this.connection.receive(t, i.ssrcs, String(e._uintid), i.attributes);
        this.connection instanceof VN && (c = n.transceiver), s = n.track, a = n.id;
      } else {
        const r = await this.connection.receive(t, [{
          ssrcId: i,
          rtx: n
        }], String(e._uintid), void 0);
        this.connection instanceof VN && (c = r.transceiver), s = r.track, a = r.id;
      }
      t === AS.AUDIO ? (e._audioTrack ? e._audioTrack._updateOriginMediaStreamTrack(s) : (e._audioTrack = new nb(s, e.uid, e._uintid, this.store), OE.info("[".concat(this.store.clientId, "] [").concat(this.store.p2pId, "] create remote audio track: ").concat(e._audioTrack.getTrackId()))), c && e._audioTrack._updateRtpTransceiver(c), this.bindRemoteTrackEvents(e, e._audioTrack)) : (e._videoTrack ? e._videoTrack._updateOriginMediaStreamTrack(s) : (e._videoTrack = new ib(s, e.uid, e._uintid, this.store), OE.info("[".concat(this.store.clientId, "] [").concat(this.store.p2pId, "] create remote video track: ").concat(e._videoTrack.getTrackId()))), c && e._videoTrack._updateRtpTransceiver(c), this.bindRemoteTrackEvents(e, e._videoTrack));
      const d = this.remoteUserMap.get(e);
      d ? d.set(t, a) : this.remoteUserMap.set(e, new Map([[t, a]])), this.statsCollector.addRemoteStats(e.uid), this.statsUploader.startUploadDownlinkStats();
      const u = this.pendingRemoteTracks.findIndex(i => {
        let {
          user: n,
          kind: r
        } = i;
        return n.uid === e.uid && t === r;
      });
      -1 !== u && (this.pendingRemoteTracks.splice(u, 1), this.emit(DS.MediaReconnectEnd, e.uid));
    }
    async massSubscribe(e) {
      return this.massSubscribeNoLock(e);
    }
    async massSubscribeNoLock(e) {
      if (!this.connection || this.state !== wS.Connected) throw new SE(fE.INVALID_OPERATION, "Cannot subscribeAll remote users when peerConnection disconnected.");
      e = e.filter(e => {
        var t;
        let {
          user: i,
          mediaType: n
        } = e;
        return !(null !== (t = this.remoteUserMap.get(i)) && void 0 !== t && t.has(n));
      });
      const t = await this.connection.batchReceive(e.map(e => {
        let {
          user: t,
          mediaType: i,
          ssrcId: n,
          rtxSsrcId: r
        } = e;
        return {
          kind: i,
          ssrcMsg: [{
            ssrcId: n,
            rtx: r
          }],
          mslabel: String(t._uintid)
        };
      }));
      e.forEach((e, i) => {
        let {
          user: n,
          mediaType: r
        } = e;
        const {
          track: o,
          id: s,
          transceiver: a
        } = t[i];
        r === AS.AUDIO ? (n._audioTrack ? n._audioTrack._updateOriginMediaStreamTrack(o) : (n._audioTrack = new nb(o, n.uid, n._uintid, this.store), OE.info("[".concat(this.store.clientId, "] [").concat(this.store.p2pId, "] create remote audio track: ").concat(n._audioTrack.getTrackId()))), a && n._audioTrack._updateRtpTransceiver(a), this.bindRemoteTrackEvents(n, n._audioTrack)) : (n._videoTrack ? n._videoTrack._updateOriginMediaStreamTrack(o) : (n._videoTrack = new ib(o, n.uid, n._uintid, this.store), OE.info("[".concat(this.store.clientId, "] [").concat(this.store.p2pId, "] create remote video track: ").concat(n._videoTrack.getTrackId()))), a && n._videoTrack._updateRtpTransceiver(a), this.bindRemoteTrackEvents(n, n._videoTrack));
        const c = this.remoteUserMap.get(n);
        c ? c.set(r, s) : this.remoteUserMap.set(n, new Map([[r, s]])), this.statsCollector.addRemoteStats(n.uid), this.statsUploader.startUploadDownlinkStats();
        const d = this.pendingRemoteTracks.findIndex(e => {
          let {
            user: t,
            kind: i
          } = e;
          return t.uid === n.uid && r === i;
        });
        -1 !== d && (this.pendingRemoteTracks.splice(d, 1), this.emit(DS.MediaReconnectEnd, n.uid));
      });
    }
    async unsubscribe(e, t, i) {
      const n = this.pendingRemoteTracks.filter(i => {
        let {
          user: n,
          kind: r
        } = i;
        return void 0 !== t ? n.uid === e.uid && t === r : n.uid === e.uid;
      });
      if (n.forEach(e => {
        const t = this.pendingRemoteTracks.indexOf(e);
        this.pendingRemoteTracks.splice(t, 1);
      }), this.connection && this.state === wS.Connected || i || n.forEach(t => {
        let {
          kind: i
        } = t;
        var n;
        if (i === AS.AUDIO) null === (n = e._audioTrack) || void 0 === n || n._destroy(), e._audioTrack = void 0;else if (i === AS.VIDEO) {
          var r;
          null === (r = e._videoTrack) || void 0 === r || r._destroy(), e._videoTrack = void 0;
        }
      }), !this.connection || this.state !== wS.Connected) return;
      const r = this.filterTobeUnSubscribedTracks(e, t);
      if (0 === r.length) return;
      await this.connection.stopReceiving(r.map(e => {
        let [, {
          id: t
        }] = e;
        return t;
      }));
      const o = this.createUnsubscribeMessage(r);
      return this.withdrawRemoteTracks(r), 0 === this.remoteUserMap.size && this.statsUploader.stopUploadDownlinkStats(), r.forEach(e => {
        let [t, {
          kind: n
        }] = e;
        var r, o;
        n === AS.VIDEO && t._videoSSRC && (null === (r = this.connection) || void 0 === r || r.setStatsRemoteVideoIsReady(t._videoSSRC, !1));
        if (n === AS.VIDEO) this.unbindRemoteTrackEvents(t._videoTrack), i || (null === (o = t._videoTrack) || void 0 === o || o._destroy(), t._videoTrack = void 0);else if (n === AS.AUDIO) {
          var s;
          if (this.unbindRemoteTrackEvents(t._audioTrack), !i) null === (s = t._audioTrack) || void 0 === s || s._destroy(), t._audioTrack = void 0;
        }
      }), o;
    }
    async massUnsubscribe(e) {
      return this.massUnsubscribeNoLock(e);
    }
    async massUnsubscribeNoLock(e) {
      let t = [];
      for (const {
        user: i,
        mediaType: n
      } of e) {
        const e = this.pendingRemoteTracks.filter(e => {
          let {
            user: t,
            kind: r
          } = e;
          return void 0 !== n ? t.uid === i.uid && n === r : t.uid === i.uid;
        });
        e.forEach(e => {
          const t = this.pendingRemoteTracks.indexOf(e);
          this.pendingRemoteTracks.splice(t, 1);
        }), t = t.concat(e);
      }
      if (!this.connection || this.state !== wS.Connected) return void t.forEach(e => {
        let {
          user: t,
          kind: i
        } = e;
        var n;
        if (i === AS.AUDIO) null === (n = t._audioTrack) || void 0 === n || n._destroy(), t._audioTrack = void 0;else if (i === AS.VIDEO) {
          var r;
          null === (r = t._videoTrack) || void 0 === r || r._destroy(), t._videoTrack = void 0;
        }
      });
      const i = zi(e).call(e, (e, t) => {
        let {
          user: i,
          mediaType: n
        } = t;
        const r = this.filterTobeUnSubscribedTracks(i, n);
        return e.concat(r);
      }, []);
      if (0 === i.length) return;
      await this.connection.stopReceiving(i.map(e => {
        let [, {
          id: t
        }] = e;
        return t;
      }));
      const n = this.createUnsubscribeAllMessage(i);
      return this.withdrawRemoteTracks(i), 0 === this.remoteUserMap.size && this.statsUploader.stopUploadDownlinkStats(), i.forEach(e => {
        let [t, {
          kind: i
        }] = e;
        var n, r;
        i === AS.VIDEO && t._videoSSRC && (null === (n = this.connection) || void 0 === n || n.setStatsRemoteVideoIsReady(t._videoSSRC, !1));
        if (i === AS.VIDEO) this.unbindRemoteTrackEvents(t._videoTrack), null === (r = t._videoTrack) || void 0 === r || r._destroy(), t._videoTrack = void 0;else if (i === AS.AUDIO) {
          var o;
          this.unbindRemoteTrackEvents(t._audioTrack), null === (o = t._audioTrack) || void 0 === o || o._destroy(), t._audioTrack = void 0;
        }
      }), n;
    }
    async muteRemote(e, t) {
      if (!this.connection) return;
      const i = this.remoteUserMap.get(e);
      if (!i) return void OE.warning("[".concat(this.store.clientId, "] P2PChannel.muteRemote has no remote user ").concat(e.uid, "."));
      if (!i.get(t)) return void OE.warning("[".concat(this.store.clientId, "] P2PChannel.muteRemote has no remote user ").concat(e.uid, " media type ").concat(t, "."));
      const n = t === AS.VIDEO ? e._videoSSRC : e._audioSSRC;
      void 0 !== n && this.connection.setStatsRemoteVideoIsReady(n, !1);
    }
    async unmuteRemote(e, t) {
      return this.unmuteRemoteNoLock(e, t);
    }
    async unmuteRemoteNoLock(e, t) {
      if (!this.connection) return;
      const i = this.remoteUserMap.get(e);
      if (!i) return void OE.warning("[".concat(this.store.clientId, "] P2PChannel.unmuteRemote has no remote user ").concat(e.uid, "."));
      i.get(t) || OE.warning("[".concat(this.store.clientId, "] P2PChannel.unmuteRemote has no remote user ").concat(e.uid, " media type ").concat(t, "."));
    }
    getAllTracks(e) {
      const t = this.localTrackMap.get(bS.LocalAudioTrack);
      if ((null == t ? void 0 : t.track) instanceof NI) {
        const i = t.track;
        return Array.from(this.localTrackMap.entries()).filter(e => {
          let [t] = e;
          return t !== bS.LocalAudioTrack;
        }).filter(t => {
          let [i] = t;
          return !(e && i === bS.LocalVideoLowTrack);
        }).map(e => {
          let [, {
            track: t
          }] = e;
          return t;
        }).concat(i.trackList);
      }
      return Array.from(this.localTrackMap.entries()).filter(t => {
        let [i] = t;
        return !(e && i === bS.LocalVideoLowTrack);
      }).map(e => {
        let [, {
          track: t
        }] = e;
        return t;
      });
    }
    reportPublishEvent(e, t, i, n, r) {
      if (e) {
        const i = this.localTrackMap.get(bS.LocalAudioTrack),
          o = n ? this.localTrackMap.get(bS.LocalVideoLowTrack) : this.localTrackMap.get(bS.LocalVideoTrack);
        Pg.publish(this.store.sessionId, {
          eventElapse: DI.measureFromPublishStart(this.store.clientId, this.store.pubId),
          succ: e,
          ec: t,
          audioName: null == i ? void 0 : i.track.getTrackLabel(),
          videoName: null == o ? void 0 : o.track.getTrackLabel(),
          screenshare: -1 !== (null == o ? void 0 : o.track._hints.indexOf(lS.SCREEN_TRACK)),
          audio: !!i,
          video: !!o,
          p2pid: this.store.p2pId,
          publishRequestid: this.store.pubId,
          extend: r
        });
      } else {
        var o;
        i || (i = []);
        const s = i.find(e => e instanceof yI),
          a = n ? null === (o = this.localTrackMap.get(bS.LocalVideoTrack)) || void 0 === o ? void 0 : o.track : i.find(e => e instanceof Cy);
        Pg.publish(this.store.sessionId, {
          eventElapse: DI.measureFromPublishStart(this.store.clientId, this.store.pubId),
          succ: e,
          ec: t,
          audioName: null == s ? void 0 : s.getTrackLabel(),
          videoName: null == a ? void 0 : a.getTrackLabel(),
          screenshare: -1 !== (null == a ? void 0 : a._hints.indexOf(lS.SCREEN_TRACK)),
          audio: !!s,
          video: !!a,
          p2pid: this.store.p2pId,
          publishRequestid: this.store.pubId,
          extend: r
        });
      }
    }
    reportSubscribeEvent(e, t, i, n) {
      const r = n === AS.VIDEO ? i._videoSSRC : i._audioSSRC;
      r && Pg.subscribe(this.store.sessionId, {
        succ: e,
        ec: t,
        video: n === AS.VIDEO,
        audio: n === AS.AUDIO,
        peerid: i.uid,
        subscribeRequestid: n === AS.VIDEO ? i._videoSSRC : i._audioSSRC,
        p2pid: this.store.p2pId,
        eventElapse: DI.measureFromSubscribeStart(this.store.clientId, r)
      });
    }
    reset() {
      OE.debug("[".concat(this.store.clientId, "] P2PChannel.reset")), this.mutex = new Ug("P2PChannel-mutex"), this.connection && (this.connection.close(), this.unbindConnectionEvents(this.connection), this.connection = void 0), this.shouldForwardP2PCreation && (this.connection = this.store.useDataChannel ? new Ib({}, this.store) : this.isPlanB ? new NN({}, this.store) : new VN({}, this.store), this.bindConnectionEvents(this.connection)), this.statsUploader.stopUploadUplinkStats(), this.statsUploader.stopUploadDownlinkStats(), this.statsUploader.stopUploadTransportStats(), this.statsUploader.stopUploadExtensionUsageStats(), this.unbindLocalTrackEvents(), this.unbindAllRemoteTrackEvents(), this.unbindRtpTransceiver();
      const e = this.localTrackMap.get(bS.LocalAudioTrack);
      if ((null == e ? void 0 : e.track) instanceof NI) {
        if (e.track.trackList.length > 0) {
          const t = e.track;
          e.track.trackList.forEach(e => {
            t.removeAudioTrack(e);
          });
        }
        e.track.close();
      }
      this.localTrackMap.clear(), this.remoteUserMap.clear(), this.statsCollector.removeRemoteStats(), this.statsCollector.removeLocalStats(), this.iceFailedCount = 0, this.dtlsFailedCount = 0, this.pendingLocalTracks = [], this.pendingRemoteTracks = [], this.state = wS.Disconnected;
    }
    getStats() {
      var e;
      return null === (e = this.connection) || void 0 === e ? void 0 : e.getStats();
    }
    getRemoteVideoIsReady(e) {
      var t;
      return (null === (t = this.connection) || void 0 === t ? void 0 : t.getRemoteVideoIsReady(e)) || !1;
    }
    getLocalAudioVolume() {
      const e = this.localTrackMap.get(bS.LocalAudioTrack);
      if (e) return e.track.getVolumeLevel();
    }
    getLocalVideoSize() {
      const e = this.localTrackMap.get(bS.LocalVideoTrack);
      if (e) return {
        width: e.track._videoWidth || 0,
        height: e.track._videoHeight || 0
      };
    }
    getEncoderConfig(e) {
      const t = this.localTrackMap.get(e);
      return t && t.track instanceof Cy || t && t.track instanceof yI ? t.track._encoderConfig : void 0;
    }
    getLocalMedia(e) {
      return this.localTrackMap.get(e);
    }
    hasLocalMedia() {
      return this.localTrackMap.size > 0;
    }
    hasRemoteMedia(e, t) {
      if (!e) return this.remoteUserMap.size > 0;
      const i = this.remoteUserMap.get(e);
      return !!i && (!t || i.has(t));
    }
    async hasRemoteMediaWithLock(e, t) {
      if (!e) return this.remoteUserMap.size > 0;
      const i = this.remoteUserMap.get(e);
      return !!i && (!t || i.has(t));
    }
    getRemoteMedia(e) {
      var t;
      const i = Array.from(Eg(t = this.remoteUserMap).call(t)).find(t => t.uid === e);
      return i ? {
        audioTrack: i.audioTrack,
        audioSSRC: i._audioSSRC,
        videoTrack: i.videoTrack,
        videoSSRC: i._videoSSRC
      } : {};
    }
    getAudioLevels() {
      let e = Array.from(this.remoteUserMap.entries()).map(e => {
        let [t] = e;
        return {
          uid: t.uid,
          level: t.audioTrack ? 100 * t.audioTrack._source.getAccurateVolumeLevel() : 0
        };
      });
      const t = this.localTrackMap.get(bS.LocalAudioTrack);
      return t && e.push({
        level: 100 * t.track._source.getAccurateVolumeLevel(),
        uid: this.store.uid
      }), e = Hm(e).call(e, (e, t) => e.level - t.level), e;
    }
    async disconnectForReconnect() {
      this.connection && (OE.debug("[".concat(this.store.clientId, "] P2PChannel.disconnectForReconnect closing P2PConnection")), this.state = wS.Reconnecting, GE("KEEP_LAST_FRAME") && 0 !== this.remoteUserMap.size && Array.from(this.remoteUserMap.entries()).forEach(e => {
        let [t] = e;
        var i;
        t._videoTrack && t._videoTrack._player && (null === (i = t._videoTrack._player.getVideoElement()) || void 0 === i || i.pause(), t._videoTrack._player.isKeepLastFrame = !0, t._videoTrack._originMediaStreamTrack.stop());
      }), this.connection.close(), this.unbindConnectionEvents(this.connection), this.connection = void 0, this.shouldForwardP2PCreation && (this.connection = this.store.useDataChannel ? new Ib({}, this.store) : this.isPlanB ? new NN({}, this.store) : new VN({}, this.store), this.bindConnectionEvents(this.connection)), 0 !== this.localTrackMap.size && (Array.from(this.localTrackMap.entries()).forEach(e => {
        let [t, {
          track: i
        }] = e;
        switch (t) {
          case bS.LocalVideoTrack:
            i._hints.includes(lS.LOW_STREAM) ? i.close() : this.pendingLocalTracks.push(i);
            break;
          case bS.LocalAudioTrack:
            i instanceof NI ? this.pendingLocalTracks = this.pendingLocalTracks.concat(i.trackList) : this.pendingLocalTracks.push(i);
            break;
          case bS.LocalVideoLowTrack:
        }
      }), this.emit(DS.MediaReconnectStart, this.store.uid)), this.unbindLocalTrackEvents(), this.localTrackMap.clear(), 0 !== this.remoteUserMap.size && Array.from(this.remoteUserMap.entries()).forEach(e => {
        let [t, i] = e;
        Array.from(Eg(i).call(i)).forEach(e => {
          this.setPendingRemoteMedia(t, e);
        }), this.emit(DS.MediaReconnectStart, t.uid);
      }), this.unbindAllRemoteTrackEvents(), this.remoteUserMap.clear(), this.statsUploader.stopUploadUplinkStats(), this.statsUploader.stopUploadDownlinkStats(), this.statsUploader.stopUploadTransportStats(), OE.debug("[".concat(this.store.clientId, "] P2PChannel disconnected, waiting to reconnect.")));
    }
    hasPendingRemoteMedia(e, t) {
      for (const i of this.pendingRemoteTracks) {
        const {
          user: n,
          kind: r
        } = i;
        if ((e instanceof yy ? e.uid : e) === n.uid && t === r) return !0;
      }
      return !1;
    }
    setPendingRemoteMedia(e, t) {
      this.hasPendingRemoteMedia(e, t) || this.pendingRemoteTracks.push({
        user: e,
        kind: t
      });
    }
    restartICE(e) {
      var t = this;
      return DO(function* () {
        if (!t.connection || t.state !== wS.Connected || t.connection instanceof Ib) return;
        const i = yield PO(t.mutex.lock("From P2PChannel.restartICE"));
        let n;
        try {
          n = yield PO(t.connection.restartICE(e));
          const r = yield PO(n.next());
          if (r.done) return;
          const o = r.value,
            s = yield o;
          switch (t.reportPCDisconnectedOrFailed(e), e) {
            case OS.TCP:
              t._pcStatsUploadType = NS.TCP_RESTART;
              break;
            case OS.RELAY:
              t._pcStatsUploadType = NS.RELAY_RESTART;
              break;
            default:
              t._pcStatsUploadType = NS.OLD_RESTART;
          }
          t._isInRestartIce = !0, n.next(s);
        } catch (e) {
          var r;
          null === (r = n) || void 0 === r || r.throw(e);
        } finally {
          i();
        }
      })();
    }
    getUplinkNetworkQuality() {
      if (!this.connection) return 0;
      const e = this.connection.getStats(),
        t = this.localTrackMap.get(bS.LocalVideoTrack),
        i = this.localTrackMap.get(bS.LocalAudioTrack),
        n = e.videoSend.find(e => e.ssrc === (null == t ? void 0 : t.ssrcs[0].ssrcId)),
        r = e.audioSend.find(e => e.ssrc === (null == i ? void 0 : i.ssrcs[0].ssrcId));
      if (!n || !r) return 1;
      const o = oC(this, DS.NeedSignalRTT),
        s = n ? n.rttMs : void 0,
        a = r ? r.rttMs : void 0,
        c = s && a ? (s + a) / 2 : s || a,
        d = (c && o ? (c + o) / 2 : c || o) || 0,
        u = 100 * e.sendPacketLossRate * 0.7 / 50 + 0.3 * d / 1500,
        l = u < 0.17 ? 1 : u < 0.36 ? 2 : u < 0.59 ? 3 : u < 0.1 ? 4 : 5,
        h = null == t ? void 0 : t.track;
      if (h && h._encoderConfig && -1 === h._hints.indexOf(lS.SCREEN_TRACK)) {
        const t = h._encoderConfig.bitrateMax,
          i = e.bitrate.actualEncoded;
        if (t && i) {
          const e = (1000 * t - i) / (1000 * t);
          return XE[e < 0.15 ? 0 : e < 0.3 ? 1 : e < 0.45 ? 2 : e < 0.6 ? 3 : 4][l];
        }
      }
      return l;
    }
    getDownlinkNetworkQuality() {
      if (!this.connection) return 0;
      const e = this.connection.getStats();
      let t = 0;
      return Array.from(this.remoteUserMap.entries()).forEach(i => {
        let [n] = i;
        const r = n._audioSSRC,
          o = n._videoSSRC,
          s = e.audioRecv.find(e => e.ssrc === r),
          a = e.videoRecv.find(e => e.ssrc === o);
        if (!s && !a) return void (t += 1);
        const c = oC(this, DS.NeedSignalRTT),
          d = e.rtt,
          u = (d && c ? (d + c) / 2 : d || c) || 0,
          l = s ? s.jitterMs : void 0,
          h = e.recvPacketLossRate;
        let p = 0.7 * h * 100 / 50 + 0.3 * u / 1500;
        l && (p = 0.6 * h * 100 / 50 + 0.2 * u / 1500 + 0.2 * l / 400);
        t += p < 0.1 ? 1 : p < 0.17 ? 2 : p < 0.36 ? 3 : p < 0.59 ? 4 : 5;
      }), this.remoteUserMap.size > 0 ? Math.round(t / this.remoteUserMap.size) : t;
    }
    async muteLocalTrack(e) {
      return new Sl((t, i) => {
        this.handleMuteLocalTrack(e, t, i);
      });
    }
    filterTobePublishedTracks(e, t, i) {
      const n = [],
        r = JS(),
        o = this.getAllTracks();
      e = cC(e = e.filter(e => -1 === o.indexOf(e)));
      let s = !1,
        a = !1;
      for (const o of e) {
        if (o instanceof Cy && (this.localTrackMap.has(bS.LocalVideoTrack) || s ? new SE(fE.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS).throw() : (n.push({
          track: o,
          type: bS.LocalVideoTrack
        }), s = !0), t)) {
          const e = this.getLowVideoTrack(o, i);
          n.push({
            track: e,
            type: bS.LocalVideoLowTrack
          });
        }
        if (o instanceof yI) {
          const e = this.localTrackMap.get(bS.LocalAudioTrack);
          if (e) {
            if (!(e.track instanceof NI)) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio or your browser does not support audio mixing");
            if (o._bypassWebAudio) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio");
            e.track.addAudioTrack(o), this.bindLocalAudioTrackEvents(o, !0);
          } else if (a) {
            const e = n.find(e => {
              let {
                type: t
              } = e;
              return t === bS.LocalAudioTrack;
            });
            if (!(e.track instanceof NI)) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio or your browser does not support audio mixing");
            if (o._bypassWebAudio) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio");
            e.track.addAudioTrack(o);
          } else {
            if (!r.webAudioMediaStreamDest || o instanceof NI || o._bypassWebAudio) n.push({
              track: o,
              type: bS.LocalAudioTrack
            });else {
              const e = new NI();
              e.addAudioTrack(o), n.push({
                track: e,
                type: bS.LocalAudioTrack
              });
            }
            a = !0;
          }
        }
      }
      return n;
    }
    filterTobeUnpublishedTracks(e) {
      const t = [],
        i = this.getAllTracks();
      e = cC(e = e.filter(e => -1 !== i.indexOf(e)));
      for (const i of e) {
        if (i instanceof yI) {
          const e = this.localTrackMap.get(bS.LocalAudioTrack);
          if (!e) continue;
          e.track instanceof NI ? (e.track.removeAudioTrack(i), this.unbindLocalAudioTrackEvents(i), 0 === e.track.trackList.length && (t.push([bS.LocalAudioTrack, e]), e.track.close())) : t.push([bS.LocalAudioTrack, e]);
        }
        if (i instanceof Cy) {
          const e = this.localTrackMap.get(bS.LocalVideoTrack);
          if (!e) continue;
          t.push([bS.LocalVideoTrack, e]);
          const i = this.localTrackMap.get(bS.LocalVideoLowTrack);
          i && t.push([bS.LocalVideoLowTrack, i]);
        }
      }
      return t;
    }
    bindLocalTrackEvents(e) {
      e.forEach(e => {
        let {
          track: t,
          type: i
        } = e;
        switch (i) {
          case bS.LocalVideoTrack:
            t.addListener(uS.GET_STATS, this.handleGetLocalVideoStats), t.addListener(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), t.addListener(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), t.addListener(uS.NEED_UPDATE_VIDEO_ENCODER, this.handleUpdateVideoEncoder), t.addListener(uS.SET_OPTIMIZATION_MODE, this.handleSetOptimizationMode), t.addListener(uS.NEED_REPLACE_TRACK, this.handleReplaceTrack), t.addListener(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), t.addListener(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack);
            break;
          case bS.LocalAudioTrack:
            this.bindLocalAudioTrackEvents(t);
            break;
          case bS.LocalVideoLowTrack:
        }
      });
    }
    bindLocalAudioTrackEvents(e, t) {
      e instanceof NI ? e.trackList.forEach(e => {
        e.addListener(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), e.addListener(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), e.addListener(uS.GET_STATS, this.handleGetLocalAudioStats), e.addListener(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), e.addListener(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack);
      }) : (e.addListener(uS.GET_STATS, this.handleGetLocalAudioStats), e.addListener(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), e.addListener(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), e.addListener(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), e.addListener(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack), t || e.addListener(uS.NEED_REPLACE_TRACK, this.handleReplaceTrack));
    }
    unbindLocalTrackEvents(e) {
      e || (e = Array.from(this.localTrackMap.entries()).map(e => {
        let [t, {
          track: i
        }] = e;
        return {
          track: i,
          type: t
        };
      })), e.forEach(e => {
        let {
          track: t,
          type: i
        } = e;
        switch (i) {
          case bS.LocalVideoTrack:
            t.off(uS.GET_STATS, this.handleGetLocalVideoStats), t.off(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), t.off(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), t.off(uS.NEED_UPDATE_VIDEO_ENCODER, this.handleUpdateVideoEncoder), t.off(uS.SET_OPTIMIZATION_MODE, this.handleSetOptimizationMode), t.off(uS.NEED_REPLACE_TRACK, this.handleReplaceTrack), t.off(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), t.off(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack);
            break;
          case bS.LocalAudioTrack:
            this.unbindLocalAudioTrackEvents(t);
            break;
          case bS.LocalVideoLowTrack:
        }
      });
    }
    unbindLocalAudioTrackEvents(e) {
      e instanceof NI ? e.trackList.forEach(e => {
        e.off(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), e.off(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), e.off(uS.GET_STATS, this.handleGetLocalAudioStats), e.off(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), e.off(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack);
      }) : (e.off(uS.GET_STATS, this.handleGetLocalAudioStats), e.off(uS.NEED_DISABLE_TRACK, this.handleMuteLocalTrack), e.off(uS.NEED_ENABLE_TRACK, this.handleUnmuteLocalTrack), e.off(uS.NEED_REPLACE_TRACK, this.handleReplaceTrack), e.off(uS.NEED_MUTE_TRACK, this.handleMuteLocalTrack), e.off(uS.NEED_UNMUTE_TRACK, this.handleUnmuteLocalTrack));
    }
    bindRemoteTrackEvents(e, t) {
      t instanceof ib && t.addListener(uS.GET_STATS, t => {
        t(this.handleGetRemoteVideoStats(e));
      }), t instanceof nb && t.addListener(uS.GET_STATS, t => {
        t(this.handleGetRemoteAudioStats(e));
      });
    }
    unbindRemoteTrackEvents(e) {
      e && e.removeAllListeners(uS.GET_STATS);
    }
    unbindAllRemoteTrackEvents() {
      Array.from(this.remoteUserMap.entries()).forEach(e => {
        let [t, i] = e;
        i.has(AS.AUDIO) && this.unbindRemoteTrackEvents(t._audioTrack), i.has(AS.VIDEO) && this.unbindRemoteTrackEvents(t._videoTrack);
      });
    }
    createGatewayPublishMessage(e, t) {
      return e.map((e, i) => {
        let n,
          r,
          {
            track: o,
            type: s
          } = e;
        switch (s) {
          case bS.LocalAudioTrack:
            n = sS.Audio, r = {
              dtx: o instanceof AI && o._config.DTX,
              hq: !1,
              lq: !1,
              stereo: !1,
              speech: !1
            };
            break;
          case bS.LocalVideoTrack:
            n = o._hints.includes(lS.SCREEN_TRACK) ? sS.Screen : sS.High, r = Ab(Ab({}, BI(o)), {}, {
              codec: this.store.codec
            });
            break;
          case bS.LocalVideoLowTrack:
            n = sS.Low, r = Ab(Ab({}, BI(o)), {}, {
              codec: this.store.codec
            });
        }
        return {
          stream_type: n,
          attributes: r,
          ssrcs: t[i]
        };
      });
    }
    createGatewayUnpublishMessage(e) {
      return e.map(e => {
        let t,
          [i, {
            track: n,
            ssrcs: r,
            id: o
          }] = e;
        switch (i) {
          case bS.LocalVideoTrack:
            t = n._hints.includes(lS.SCREEN_TRACK) ? sS.Screen : sS.High;
            break;
          case bS.LocalAudioTrack:
            t = sS.Audio;
            break;
          case bS.LocalVideoLowTrack:
            t = sS.Low;
        }
        return {
          stream_type: t,
          ssrcs: r,
          mid: o
        };
      });
    }
    assignLocalTracks(e, t) {
      e.forEach((e, i) => {
        let {
          track: n,
          type: r
        } = e;
        this.localTrackMap.set(r, {
          track: n,
          id: t[i].id,
          ssrcs: t[i].localSSRC
        });
      });
    }
    withdrawLocalTracks(e) {
      e.forEach(e => {
        let [t] = e;
        this.localTrackMap.delete(t);
      });
    }
    bindConnectionEvents(e) {
      e.onConnectionStateChange = async t => {
        if (OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.onConnectionStateChange(").concat(t, ")")), this.emit(DS.PeerConnectionStateChange, t), "connected" !== t || this.store.keyMetrics.peerConnectionEnd || this.store.peerConnectionEnd(), "connected" === t && (this._restartTimer && (clearTimeout(this._restartTimer), this._restartTimer = void 0), (this._isFirstConnected || this._isInRestartIce) && this.reportPCStats(Date.now(), !0, this._pcStatsUploadType), this._isInRestartIce = !1, this._isFirstConnected = !1, this._isStartRestartIce = !1), GE("NEW_ICE_RESTART")) {
          if (this._restartStates.includes(t)) {
            if (this._isStartRestartIce) return;
            this._isStartRestartIce = !0;
            const t = t => {
                if ("disconnected" === e.iceConnectionState || "checking" === e.iceConnectionState || "failed" === e.iceConnectionState) {
                  OE.debug("[".concat(this.store.clientId, "] [P2PChannel] start use restartICE, type is ").concat(t));
                  "CONNECTED" === oC(this, DS.QueryClientConnectionState) && this.emit(DS.RequestRestartICE, t);
                }
              },
              i = () => {
                "disconnected" !== e.iceConnectionState && "checking" !== e.iceConnectionState && "failed" !== e.iceConnectionState || (this.reportPCStats(Date.now(), !1, this._pcStatsUploadType), OE.debug("[".concat(this.store.clientId, "] P2PConnection disconnected timeout, force reconnect")), setTimeout(() => this.emit(DS.P2PLost), 0), this.iceFailedCount += 1, this.requestReconnect());
              },
              n = GE("ICE_RESTART_INTERVAL");
            return void (this._restartTimer = window.setTimeout(() => {
              if (GE("JOIN_WITH_FALLBACK_MEDIA_PROXY_FORCE") && JS().supportPCSetConfiguration) t(OS.RELAY), this._restartTimer = window.setTimeout(i, n);else if (Kh()) t(OS.UDP), this._restartTimer = window.setTimeout(i, 4000);else {
                if (t(OS.TCP), JS().supportPCSetConfiguration) return void (this._restartTimer = window.setTimeout(() => {
                  t(OS.RELAY), this._restartTimer = window.setTimeout(i, n);
                }, n));
                this._restartTimer = window.setTimeout(i, n);
              }
            }, 800));
          }
        } else {
          if ("disconnected" === t && "disconnected" === e.iceConnectionState) return setTimeout(() => {
            if ("disconnected" === e.iceConnectionState && GE("ICE_RESTART")) {
              "CONNECTED" === oC(this, DS.QueryClientConnectionState) && this.emit(DS.RequestRestartICE);
            }
          }, 800), void setTimeout(() => {
            "disconnected" === e.peerConnectionState && (OE.debug("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection disconnected timeout 4000ms, force reconnect")), this.reportPCStats(Date.now(), !1, this._pcStatsUploadType), this._isInRestartIce = !1, setTimeout(() => this.emit(DS.P2PLost), 0), this.iceFailedCount += 1, this.requestReconnect());
          }, 4000);
          "failed" === t && (OE.debug("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection state failed, force reconnect")), this.reportPCDisconnectedOrFailed(), setTimeout(() => this.emit(DS.P2PLost), 0), this.iceFailedCount += 1, await this.requestReconnect());
        }
      }, e.onICEConnectionStateChange = e => {
        "connected" !== e || this.store.keyMetrics.iceConnectionEnd || this.store.iceConnectionEnd(), OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.onICEConnectionStateChange(").concat(e, ")")), Pg.reportApiInvoke(this.store.sessionId, {
          name: "ICEConnectionStateChange",
          options: e,
          tag: Ef.TRACER
        }).onSuccess(), this.emit(DS.IceConnectionStateChange, e);
      }, e.onICETransportStateChange = e => {
        OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.onICETransportStateChange(").concat(e, ")"));
      }, e.onDTLSTransportStateChange = e => {
        OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.onDTLSTransportStateChange(").concat(e, ")"));
      }, e.onDTLSTransportError = e => {
        OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.onDTLSTransportError(").concat(e, ")"));
      }, e.onFirstAudioDecoded = e => {
        var t;
        const i = Array.from(Eg(t = this.remoteUserMap).call(t)).find(t => t._audioSSRC === e);
        var n;
        i && (this.store.subscribe(i.uid, "audio", void 0, void 0, void 0, Date.now()), null === (n = i.audioTrack) || void 0 === n || n.emit(fS.FIRST_FRAME_DECODED), Pg.firstRemoteFrame(this.store.sessionId, uf.FIRST_AUDIO_DECODE, lf.FIRST_AUDIO_DECODE, {
          peer: i._uintid,
          subscribeElapse: DI.measureFromSubscribeStart(this.store.clientId, e),
          subscribeRequestid: e,
          p2pid: this.store.p2pId
        }));
      }, e.onFirstAudioReceived = e => {
        var t;
        const i = Array.from(Eg(t = this.remoteUserMap).call(t)).find(t => t._audioSSRC === e);
        i && Pg.firstRemoteFrame(this.store.sessionId, uf.FIRST_AUDIO_RECEIVED, lf.FIRST_AUDIO_RECEIVED, {
          peer: i._uintid,
          subscribeElapse: DI.measureFromSubscribeStart(this.store.clientId, e),
          subscribeRequestid: e,
          p2pid: this.store.p2pId
        });
      }, e.onFirstVideoDecoded = (e, t, i) => {
        this.reportVideoFirstFrameDecoded(e, t, i);
      }, e.onFirstVideoReceived = e => {
        var t;
        const i = Array.from(Eg(t = this.remoteUserMap).call(t)).find(t => t._videoSSRC === e);
        i && Pg.firstRemoteFrame(this.store.sessionId, uf.FIRST_VIDEO_RECEIVED, lf.FIRST_VIDEO_RECEIVED, {
          peer: i._uintid,
          subscribeElapse: DI.measureFromSubscribeStart(this.store.clientId, e),
          subscribeRequestid: e,
          p2pid: this.store.p2pId
        });
      }, e.onSelectedLocalCandidateChanged = (e, t) => {
        const i = "relay" === e.candidateType,
          n = "relay" === t.candidateType;
        "unknown" !== t.candidateType && i === n || this.emit(DS.ConnectionTypeChange, i), OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.SelectedLocalCandidateChanged(").concat(JSON.stringify(YI(t)), " -> ").concat(JSON.stringify(YI(e)), ")"));
      }, e.onSelectedRemoteCandidateChanged = (e, t) => {
        OE.info("[".concat(this.store.clientId, "] [p2pId: ").concat(this.store.p2pId, "]: P2PConnection.SelectedRemoteCandidateChanged(").concat(JSON.stringify(YI(t)), " -> ").concat(JSON.stringify(YI(e)), ")"));
      }, e.onFirstVideoDecodedTimeout = e => {
        this.reportVideoFirstFrameDecoded(e, void 0, void 0, !0);
      };
    }
    unbindConnectionEvents(e) {
      e.onConnectionStateChange = void 0, e.onICEConnectionStateChange = void 0, e.onICETransportStateChange = void 0, e.onDTLSTransportStateChange = void 0, e.onDTLSTransportError = void 0, e.onFirstAudioDecoded = void 0, e.onFirstAudioReceived = void 0, e.onFirstVideoDecoded = void 0, e.onFirstVideoReceived = void 0, e.onSelectedLocalCandidateChanged = void 0, e.onSelectedRemoteCandidateChanged = void 0, e.onFirstVideoDecodedTimeout = void 0;
    }
    filterTobeMutedTracks(e) {
      const t = [];
      if (-1 === this.getAllTracks().indexOf(e)) return t;
      const i = this.localTrackMap.get(bS.LocalAudioTrack);
      if (e instanceof yI && (null == i ? void 0 : i.track) instanceof NI) return i.track.isActive || t.push([bS.LocalAudioTrack, i]), t;
      const n = Array.from(this.localTrackMap.entries()).find(t => {
        let [, {
          track: i
        }] = t;
        return e === i;
      });
      if (n && (t.push(n), n[0] === bS.LocalVideoTrack)) {
        const e = this.localTrackMap.get(bS.LocalVideoLowTrack);
        e && t.push([bS.LocalVideoLowTrack, e]);
      }
      return t;
    }
    filterTobeUnmutedTracks(e) {
      const t = [],
        i = this.localTrackMap.get(bS.LocalAudioTrack);
      if (e instanceof yI && (null == i ? void 0 : i.track) instanceof NI) return i.track.isActive && t.push([bS.LocalAudioTrack, i]), t;
      const n = Array.from(this.localTrackMap.entries()).find(t => {
        let [, {
          track: i
        }] = t;
        return e === i;
      });
      if (n) if (n[0] === bS.LocalVideoTrack) {
        t.push(n);
        const e = this.localTrackMap.get(bS.LocalVideoLowTrack);
        e && t.push([bS.LocalVideoLowTrack, e]);
      } else t.push(n);
      return t;
    }
    createMuteMessage(e) {
      return e.map(e => {
        let t,
          [i, {
            track: n,
            ssrcs: r,
            id: o
          }] = e;
        switch (i) {
          case bS.LocalAudioTrack:
            t = sS.Audio;
            break;
          case bS.LocalVideoTrack:
            t = n._hints.includes(lS.SCREEN_TRACK) ? sS.Screen : sS.High;
            break;
          case bS.LocalVideoLowTrack:
            t = sS.Low;
        }
        return {
          stream_type: t,
          ssrcs: r,
          mid: o
        };
      });
    }
    createUnmuteMessage(e) {
      return e.map(e => {
        let t,
          [i, {
            track: n,
            ssrcs: r,
            id: o
          }] = e;
        switch (i) {
          case bS.LocalAudioTrack:
            t = sS.Audio;
            break;
          case bS.LocalVideoTrack:
            t = n._hints.includes(lS.SCREEN_TRACK) ? sS.Screen : sS.High;
            break;
          case bS.LocalVideoLowTrack:
            t = sS.Low;
        }
        return {
          stream_type: t,
          ssrcs: r,
          mid: o
        };
      });
    }
    filterTobeUnSubscribedTracks(e, t) {
      const i = [],
        n = this.remoteUserMap.get(e);
      if (!n) return i;
      if (t) {
        const r = n.get(t);
        if (!r) return i;
        i.push([e, {
          kind: t,
          id: r
        }]);
      } else Array.from(n.entries()).forEach(t => {
        let [n, r] = t;
        i.push([e, {
          kind: n,
          id: r
        }]);
      });
      return i;
    }
    createUnsubscribeMessage(e) {
      const t = [];
      return e.forEach(e => {
        let [i, {
          kind: n,
          id: r
        }] = e;
        switch (n) {
          case AS.VIDEO:
            return void (i._videoSSRC && t.push({
              stream_type: AS.VIDEO,
              ssrcId: i._videoSSRC
            }));
          case AS.AUDIO:
            return void (i._audioSSRC && t.push({
              stream_type: AS.AUDIO,
              ssrcId: i._audioSSRC
            }));
        }
      }), t;
    }
    createUnsubscribeAllMessage(e) {
      const t = new Map();
      return e.forEach(e => {
        let [i, {
          kind: n
        }] = e;
        if (t.has(i)) {
          let e = t.get(i);
          n === AS.VIDEO ? e |= cS.Video : e |= cS.Audio, t.set(i, e);
        } else n === AS.VIDEO ? t.set(i, cS.Video) : t.set(i, cS.Audio);
      }), {
        users: Array.from(t.entries()).map(e => {
          let [t, i] = e;
          return {
            stream_id: t.uid,
            stream_type: i
          };
        })
      };
    }
    withdrawRemoteTracks(e) {
      e.forEach(e => {
        let [t, {
          kind: i
        }] = e;
        const n = this.remoteUserMap.get(t);
        n && (n.delete(i), 0 === Array.from(n.entries()).length && this.remoteUserMap.delete(t));
      });
    }
    async updateBitrateLimit(e) {
      const t = this.localTrackMap.get(bS.LocalVideoTrack),
        i = this.localTrackMap.get(bS.LocalVideoLowTrack);
      t && (await t.track.setBitrateLimit(e.uplink)), i && e.low_stream_uplink && (await i.track.setBitrateLimit({
        max_bitrate: e.low_stream_uplink.bitrate,
        min_bitrate: e.low_stream_uplink.bitrate || 0
      }));
    }
    isP2PDisconnected() {
      if (this.connection) {
        return "connected" !== this.connection.peerConnectionState;
      }
      return !0;
    }
    mapPubResToRemoteConfig(e, t) {
      return e.map((e, i) => {
        var n;
        let {
          stream_type: r
        } = e;
        return null === (n = t.find(e => {
          let {
            stream_type: t
          } = e;
          return r === t;
        })) || void 0 === n ? void 0 : n.attributes;
      });
    }
    async tryToUnmuteAudio(e) {
      for (let i = 0; i < e.length; i++) if (e[i] instanceof yI) {
        var t;
        const n = this.filterTobeUnmutedTracks(e[i]);
        if (0 === n.length) continue;
        await (null === (t = this.connection) || void 0 === t ? void 0 : t.unmuteLocal(n.map(e => {
          let [, {
            id: t
          }] = e;
          return t;
        })));
        const r = this.createUnmuteMessage(n);
        return void (await rC(this, DS.RequestUnmuteLocal, r));
      }
    }
    bindStatsUploaderEvents() {
      this.statsUploader.requestStats = () => this.getStats(), this.statsUploader.requestLocalMedia = () => Array.from(this.localTrackMap.entries()), this.statsUploader.requestRemoteMedia = () => Array.from(this.remoteUserMap.entries()), this.statsUploader.requestVideoIsReady = e => {
        var t;
        return !(null === (t = this.connection) || void 0 === t || !t.getRemoteVideoIsReady(e));
      }, this.statsUploader.requestUpload = (e, t) => this.emit(DS.RequestUploadStats, e, t), this.statsUploader.requestAllTracks = () => this.getAllTracks();
    }
    unbindStatsUploaderEvents() {
      this.statsUploader.requestStats = void 0, this.statsUploader.requestLocalMedia = void 0, this.statsUploader.requestRemoteMedia = void 0, this.statsUploader.requestVideoIsReady = void 0;
    }
    async requestReconnect() {
      this.dtlsFailedCount += 1, await zI(gE(this.dtlsFailedCount, TE)), this.emit(DS.RequestReconnect);
    }
    async reconnectP2P() {
      const e = Array.from(this.localTrackMap.entries()),
        t = this.createGatewayUnpublishMessage(e);
      Array.from(this.remoteUserMap.entries()), t.length > 0 && (await nC(this, DS.RequestUnpublishForReconnectPC, t)), this.disconnectForReconnect(), this.emit(DS.RequestReconnectPC);
    }
    canPublishLowStream() {
      return this.localTrackMap.has(bS.LocalVideoTrack) || this.pendingLocalTracks.some(e => e instanceof Cy);
    }
    throwIfTrackTypeNotMatch(e) {
      if (e.filter(e => e instanceof Cy).length > 1) throw new SE(fE.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS);
      if (e.filter(e => e instanceof yI).length > 1 && (e.some(e => e instanceof yI && e._bypassWebAudio) || !JS().webAudioMediaStreamDest)) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio or your browser doesn't support MediaStreamDestNode");
      for (const t of e) {
        if (t instanceof Cy && this.pendingLocalTracks.some(e => e instanceof Cy)) throw new SE(fE.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS);
        if (t instanceof yI && this.pendingLocalTracks.some(e => e instanceof yI) && (!JS().webAudioMediaStreamDest || t._bypassWebAudio || this.pendingLocalTracks.some(e => e instanceof yI && e._bypassWebAudio))) throw new SE(fE.NOT_SUPPORTED, "cannot publish multiple tracks which one of them configured with bypassWebAudio or your browser doesn't support MediaStreamDestNode");
      }
    }
    getLowVideoTrack(e, t) {
      const i = JS().supportDualStreamEncoding,
        n = Ab(Ab({}, {
          width: 160,
          height: 120,
          framerate: 15,
          bitrate: 50
        }), t);
      let r;
      r = i ? e._mediaStreamTrack.clone() : FN(e, n);
      const o = ZI(8, "track-low-"),
        s = new Cy(r, Ab(Ab({}, i && {
          scaleResolutionDownBy: KI(n, e)
        }), {}, {
          frameRate: n.framerate,
          bitrateMax: n.bitrate,
          bitrateMin: n.bitrate
        }), void 0, void 0, o);
      return s.on(ES.TRANSCEIVER_UPDATED, t => {
        e._updateRtpTransceiver(t, hS.LOW_STREAM);
      }), s._hints.push(lS.LOW_STREAM), e.addListener(uS.NEED_CLOSE, () => {
        s.close();
      }), s;
    }
    async globalLock() {
      return this.mutex.lock("From P2PChannel.globalLock");
    }
    async reportPCStats(e, t, i) {
      let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      if (this.connection && this.connection instanceof VN) {
        var r, o, s, a;
        const c = this.store.keyMetrics.descriptionStart || 0,
          {
            iceConnectionState: d,
            dtlsTransportState: u,
            peerConnectionState: l
          } = this.connection,
          {
            local: h,
            remote: p
          } = await this.connection.getSelectedCandidatePair();
        Pg.pcStats(this.store.sessionId, {
          startTime: c,
          eventElapse: e - c || 0,
          iceconnectionsate: d,
          dtlsstate: u,
          connectionstate: l,
          intSucc: t ? 1 : 2,
          error: n,
          selectedLocalCandidateProtocol: null !== (r = null == h ? void 0 : h.protocol) && void 0 !== r ? r : "",
          selectedLocalCandidateType: null !== (o = h.candidateType) && void 0 !== o ? o : "",
          selectedLocalCandidateAddress: "".concat(h.address, ":").concat(h.port),
          selectedRemoteCandidateProtocol: null !== (s = p.protocol) && void 0 !== s ? s : "",
          selectedRemoteCandidateType: null !== (a = p.candidateType) && void 0 !== a ? a : "",
          selectedRemoteCandidateAddress: "".concat(p.address, ":").concat(p.port),
          restartCnt: i
        });
      }
    }
    reportVideoFirstFrameDecoded(e, t, i, n) {
      var r;
      const o = Array.from(Eg(r = this.remoteUserMap).call(r)).find(t => t._videoSSRC === e);
      if (o) {
        n || this.store.subscribe(o.uid, "video", void 0, void 0, void 0, void 0, Date.now());
        const r = this.store.keyMetrics,
          s = r.subscribe.find(e => e.userId === o.uid && "video" === e.type);
        Pg.firstRemoteVideoDecode(this.store.sessionId, uf.FIRST_VIDEO_DECODE, lf.FIRST_VIDEO_DECODE, {
          peer: o._uintid,
          videowidth: t,
          videoheight: i,
          subscribeElapse: DI.measureFromSubscribeStart(this.store.clientId, e),
          subscribeRequestid: e,
          p2pid: this.store.p2pId,
          apEnd: r.requestAPEnd || 0,
          apStart: r.requestAPStart || 0,
          joinGwEnd: r.joinGatewayEnd || 0,
          joinGwStart: r.joinGatewayStart || 0,
          pcEnd: r.peerConnectionEnd || 0,
          pcStart: r.peerConnectionStart || 0,
          subscriberEnd: (null == s ? void 0 : s.subscribeEnd) || 0,
          subscriberStart: (null == s ? void 0 : s.subscribeStart) || 0,
          videoAddNotify: (null == s ? void 0 : s.streamAdded) || 0,
          state: n ? 1 : 0
        });
      }
    }
    async remoteMediaSsrcChanged(e, t, i) {
      if (!this.connection) return !1;
      const n = this.remoteUserMap.get(e);
      if (!n) return !1;
      const r = n.get(t);
      if (!r) return !1;
      const o = await this.connection.getRemoteSSRC(r);
      return void 0 !== o && o !== i;
    }
    resetConnection(e) {
      OE.debug("[".concat(this.store.clientId, "] [P2PChannel] reset connection to ").concat(e)), this.state === wS.Connected ? (OE.debug("[".concat(this.store.clientId, "] [P2PChannel] fallback to websocket but P2PChannel state still connected, disconnect first")), this.disconnectForReconnect()) : (this.connection && (this.connection.close(), this.unbindConnectionEvents(this.connection), this.connection = void 0), this.shouldForwardP2PCreation && (this.connection = e === dS.datachannel ? new Ib({}, this.store) : this.isPlanB ? new NN({}, this.store) : new VN({}, this.store), this.bindConnectionEvents(this.connection)));
    }
    unbindRtpTransceiver() {
      0 !== this.localTrackMap.size && Array.from(this.localTrackMap.entries()).forEach(e => {
        let [t, {
          track: i
        }] = e;
        t === bS.LocalVideoLowTrack ? i._updateRtpTransceiver(void 0, hS.LOW_STREAM) : i._updateRtpTransceiver(void 0);
      });
    }
    reportPCDisconnectedOrFailed(e) {
      this.connection && this.connection instanceof VN && ("disconnected" !== this.connection.iceConnectionState && "checking" !== this.connection.iceConnectionState && "failed" !== this.connection.iceConnectionState || (this._isFirstConnected ? (this.reportPCStats(Date.now(), !1, this._pcStatsUploadType), this._isFirstConnected = !1) : this._pcStatsUploadType === NS.TCP_RESTART && e === OS.RELAY ? this.reportPCStats(Date.now(), !1, this._pcStatsUploadType) : this.reportPCStats(Date.now(), !1, NS.DISCONNECTED_OR_FAILED)));
    }
  }).prototype, "startP2PConnection", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "startP2PConnection"), vb.prototype), ag(vb.prototype, "connect", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "connect"), vb.prototype), ag(vb.prototype, "preConnect", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "preConnect"), vb.prototype), ag(vb.prototype, "unpublish", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "unpublish"), vb.prototype), ag(vb.prototype, "unpublishLowStream", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "unpublishLowStream"), vb.prototype), ag(vb.prototype, "subscribe", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "subscribe"), vb.prototype), ag(vb.prototype, "massSubscribe", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "massSubscribe"), vb.prototype), ag(vb.prototype, "unsubscribe", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "unsubscribe"), vb.prototype), ag(vb.prototype, "massUnsubscribe", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "massUnsubscribe"), vb.prototype), ag(vb.prototype, "muteRemote", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "muteRemote"), vb.prototype), ag(vb.prototype, "unmuteRemote", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "unmuteRemote"), vb.prototype), ag(vb.prototype, "hasRemoteMediaWithLock", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "hasRemoteMediaWithLock"), vb.prototype), ag(vb.prototype, "disconnectForReconnect", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "disconnectForReconnect"), vb.prototype), ag(vb.prototype, "updateBitrateLimit", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "updateBitrateLimit"), vb.prototype), ag(vb.prototype, "remoteMediaSsrcChanged", [wb], Object.getOwnPropertyDescriptor(vb.prototype, "remoteMediaSsrcChanged"), vb.prototype), vb);
  function wb(e, t, i) {
    const n = e[t];
    if ("function" != typeof n) throw new Error("Cannot use mutex on object property.");
    return i.value = async function () {
      const e = (this || _global).mutex,
        i = await e.lock("From P2PChannel.".concat(t));
      try {
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return await n.apply(this || _global, o);
      } finally {
        i();
      }
    }, i;
  }
  function Db(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function Pb(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Db(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Db(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var Lb;
  !function (e) {
    e.SET_SESSION_ID = "SET_SESSION_ID", e.SET_P2P_ID = "SET_P2P_id", e.SET_DC_ID = "SET_DC_id", e.SET_UID = "SET_UID", e.SET_PUB_ID = "SET_PUB_ID", e.SET_CLOUD_PROXY_SERVER_MODE = "SET_CLOUD_PROXY_SERVER_MODE", e.KEY_METRIC_CLIENT_CREATED = "KEY_METRIC_CLIENT_CREATED", e.KEY_METRIC_JOIN_START = "KEY_METRIC_JOIN_START", e.AVOID_JOIN_START = "AVOID_JOIN_START", e.KEY_METRIC_JOIN_END = "KEY_METRIC_JOIN_END", e.KEY_METRIC_REQUEST_AP_START = "KEY_METRIC_REQUEST_AP_START", e.KEY_METRIC_REQUEST_AP_END = "KEY_METRIC_REQUEST_AP_END", e.KEY_METRIC_JOIN_GATEWAY_START = "KEY_METRIC_JOIN_GATEWAY_START", e.KEY_METRIC_JOIN_GATEWAY_END = "KEY_METRIC_JOIN_GATEWAY_END", e.KEY_METRIC_PEER_CONNECTION_START = "KEY_METRIC_PEER_CONNECTION_START", e.KEY_METRIC_PEER_CONNECTION_END = "KEY_METRIC_PEER_CONNECTION_END", e.KEY_METRIC_DESCRIPTION_START = "KEY_METRIC_DESCRIPTION_START", e.KEY_METRIC_ICE_CONNECTION_END = "KEY_METRIC_ICE_CONNECTION_END", e.KEY_METRIC_SIGNAL_CHANNEL_OPEN = "KEY_METRIC_SIGNAL_CHANNEL_OPEN", e.KEY_METRIC_PUBLISH = "KEY_METRIC_PUBLISH", e.KEY_METRIC_SUBSCRIBE = "KEY_METRIC_SUBSCRIBE", e.RECORD_JOIN_CHANNEL_SERVICE = "RECORD_JOIN_CHANNEL_SERVICE", e.RESET_JOIN_CHANNEL_SERVICE_RECORDS = "RESET_JOIN_CHANNEL_SERVICE_RECORDS", e.RESET_KEY_METRICS = "RESET_KEY_METRICS", e.SET_USE_DATACHANNEL = "SET_USE_DATACHANNEL";
  }(Lb || (Lb = {}));
  class kb {
    constructor(e, t, i, n) {
      _p(this, "state", void 0), this.state = {
        codec: e,
        audioCodec: t,
        mode: i,
        clientId: n,
        sessionId: null,
        p2pId: 0,
        dcId: 0,
        pubId: 0,
        subId: 0,
        avoidJoinStart: 0,
        keyMetrics: {
          publish: [],
          subscribe: []
        },
        joinChannelServiceRecords: [],
        cloudProxyServerMode: "disabled",
        useDataChannel: !1
      };
    }
    dispatch(e) {
      this.state = function (e, t) {
        switch (t.type) {
          case Lb.SET_SESSION_ID:
            return Pb(Pb({}, e), {}, {
              sessionId: t.sessionId
            });
          case Lb.SET_P2P_ID:
            return Pb(Pb({}, e), {}, {
              p2pId: t.p2pId
            });
          case Lb.SET_UID:
            return Pb(Pb({}, e), {}, {
              uid: t.uid
            });
          case Lb.SET_PUB_ID:
            return Pb(Pb({}, e), {}, {
              pubId: t.pubId
            });
          case Lb.KEY_METRIC_CLIENT_CREATED:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                clientCreated: t.metric
              })
            });
          case Lb.KEY_METRIC_JOIN_START:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                joinStart: t.metric
              })
            });
          case Lb.AVOID_JOIN_START:
            return Pb(Pb({}, e), {}, {
              avoidJoinStart: t.avoidJoinStart
            });
          case Lb.KEY_METRIC_JOIN_END:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                joinEnd: t.metric
              })
            });
          case Lb.KEY_METRIC_REQUEST_AP_START:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                requestAPStart: t.metric
              })
            });
          case Lb.KEY_METRIC_REQUEST_AP_END:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                requestAPEnd: t.metric
              })
            });
          case Lb.KEY_METRIC_JOIN_GATEWAY_START:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                joinGatewayStart: t.metric
              })
            });
          case Lb.KEY_METRIC_JOIN_GATEWAY_END:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                joinGatewayEnd: t.metric
              })
            });
          case Lb.KEY_METRIC_PEER_CONNECTION_START:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                peerConnectionStart: t.metric
              })
            });
          case Lb.KEY_METRIC_PEER_CONNECTION_END:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                peerConnectionEnd: t.metric
              })
            });
          case Lb.KEY_METRIC_DESCRIPTION_START:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                descriptionStart: t.metric
              })
            });
          case Lb.KEY_METRIC_SIGNAL_CHANNEL_OPEN:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                signalChannelOpen: t.metric
              })
            });
          case Lb.KEY_METRIC_ICE_CONNECTION_END:
            return Pb(Pb({}, e), {}, {
              keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                iceConnectionEnd: t.metric
              })
            });
          case Lb.KEY_METRIC_PUBLISH:
            {
              const i = e.keyMetrics.publish,
                n = i.findIndex(e => e.trackId === t.metric.trackId);
              return -1 !== n ? (i[n] = Pb(Pb({}, i[n]), t.metric), Pb(Pb({}, e), {}, {
                keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                  publish: [...i]
                })
              })) : Pb(Pb({}, e), {}, {
                keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                  publish: [...e.keyMetrics.publish, t.metric]
                })
              });
            }
          case Lb.KEY_METRIC_SUBSCRIBE:
            {
              const i = e.keyMetrics.subscribe,
                n = i.findIndex(e => e.userId === t.metric.userId && e.type === t.metric.type);
              return -1 !== n ? (i[n] = Pb(Pb({}, i[n]), t.metric), Pb(Pb({}, e), {}, {
                keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                  subscribe: [...i]
                })
              })) : Pb(Pb({}, e), {}, {
                keyMetrics: Pb(Pb({}, e.keyMetrics), {}, {
                  subscribe: [...e.keyMetrics.subscribe, t.metric]
                })
              });
            }
          case Lb.SET_CLOUD_PROXY_SERVER_MODE:
            return e.cloudProxyServerMode = t.mode, e;
          case Lb.RECORD_JOIN_CHANNEL_SERVICE:
            return "number" != typeof t.index ? e.joinChannelServiceRecords = [...e.joinChannelServiceRecords, t.record] : (e.joinChannelServiceRecords[t.index] = Pb(Pb({}, e.joinChannelServiceRecords[t.index]), t.record), e.joinChannelServiceRecords = [...e.joinChannelServiceRecords]), e;
          case Lb.RESET_JOIN_CHANNEL_SERVICE_RECORDS:
            return e.joinChannelServiceRecords = [], e;
          case Lb.RESET_KEY_METRICS:
            return e.keyMetrics = {
              publish: [],
              subscribe: []
            }, e;
          case Lb.SET_USE_DATACHANNEL:
            return Pb(Pb({}, e), {}, {
              useDataChannel: t.val
            });
          default:
            return e;
        }
      }(this.state, e);
    }
    set sessionId(e) {
      this.dispatch({
        type: Lb.SET_SESSION_ID,
        sessionId: e
      });
    }
    get sessionId() {
      return this.state.sessionId;
    }
    get codec() {
      return this.state.codec;
    }
    get audioCodec() {
      return this.state.audioCodec;
    }
    get clientId() {
      return this.state.clientId;
    }
    set p2pId(e) {
      this.dispatch({
        type: Lb.SET_P2P_ID,
        p2pId: e
      });
    }
    get p2pId() {
      return this.state.p2pId;
    }
    set dcId(e) {
      this.dispatch({
        type: Lb.SET_DC_ID,
        dcId: e
      });
    }
    get dcId() {
      return this.state.dcId;
    }
    set uid(e) {
      this.dispatch({
        type: Lb.SET_UID,
        uid: e
      });
    }
    get uid() {
      return this.state.uid;
    }
    set pubId(e) {
      this.dispatch({
        type: Lb.SET_PUB_ID,
        pubId: e
      });
    }
    get pubId() {
      return this.state.pubId;
    }
    set cloudProxyServerMode(e) {
      this.dispatch({
        type: Lb.SET_CLOUD_PROXY_SERVER_MODE,
        mode: e
      });
    }
    get cloudProxyServerMode() {
      return this.state.cloudProxyServerMode;
    }
    set useDataChannel(e) {
      this.dispatch({
        type: Lb.SET_USE_DATACHANNEL,
        val: e
      });
    }
    get useDataChannel() {
      return this.state.useDataChannel;
    }
    clientCreated() {
      this.dispatch({
        type: Lb.KEY_METRIC_CLIENT_CREATED,
        metric: Date.now()
      });
    }
    joinStart() {
      this.dispatch({
        type: Lb.KEY_METRIC_JOIN_START,
        metric: Date.now()
      });
    }
    joinEnd() {
      this.dispatch({
        type: Lb.KEY_METRIC_JOIN_END,
        metric: Date.now()
      });
    }
    requestAPStart() {
      this.dispatch({
        type: Lb.KEY_METRIC_REQUEST_AP_START,
        metric: Date.now()
      });
    }
    requestAPEnd() {
      this.dispatch({
        type: Lb.KEY_METRIC_REQUEST_AP_END,
        metric: Date.now()
      });
    }
    joinGatewayStart() {
      this.dispatch({
        type: Lb.KEY_METRIC_JOIN_GATEWAY_START,
        metric: Date.now()
      });
    }
    joinGatewayEnd() {
      this.dispatch({
        type: Lb.KEY_METRIC_JOIN_GATEWAY_END,
        metric: Date.now()
      });
    }
    peerConnectionStart() {
      this.dispatch({
        type: Lb.KEY_METRIC_PEER_CONNECTION_START,
        metric: Date.now()
      });
    }
    peerConnectionEnd() {
      this.dispatch({
        type: Lb.KEY_METRIC_PEER_CONNECTION_END,
        metric: Date.now()
      });
    }
    descriptionStart() {
      this.dispatch({
        type: Lb.KEY_METRIC_DESCRIPTION_START,
        metric: Date.now()
      });
    }
    signalChannelOpen() {
      this.dispatch({
        type: Lb.KEY_METRIC_SIGNAL_CHANNEL_OPEN,
        metric: Date.now()
      });
    }
    iceConnectionEnd() {
      this.dispatch({
        type: Lb.KEY_METRIC_ICE_CONNECTION_END,
        metric: Date.now()
      });
    }
    publish(e, t, i, n) {
      this.dispatch({
        type: Lb.KEY_METRIC_PUBLISH,
        metric: Pb(Pb({
          trackId: e,
          type: t
        }, i && {
          publishStart: i
        }), n && {
          publishEnd: n
        })
      });
    }
    subscribe(e, t, i, n, r, o, s) {
      this.dispatch({
        type: Lb.KEY_METRIC_SUBSCRIBE,
        metric: Pb(Pb(Pb(Pb(Pb({
          userId: e,
          type: t
        }, i && {
          subscribeStart: i
        }), n && {
          subscribeEnd: n
        }), r && {
          firstFrame: r
        }), o && {
          streamAdded: o
        }), s && {
          firstDecoded: s
        })
      });
    }
    massSubscribe(e, t, i, n) {
      e.forEach(e => {
        this.dispatch({
          type: Lb.KEY_METRIC_SUBSCRIBE,
          metric: Pb(Pb(Pb({
            userId: e.userId,
            type: e.type
          }, t && {
            subscribeStart: t
          }), i && {
            subscribeEnd: i
          }), n && {
            firstFrame: n
          })
        });
      });
    }
    get keyMetrics() {
      return this.state.keyMetrics;
    }
    recordJoinChannelService(e, t) {
      "gateway" === e.service && Array.isArray(e.urls) && (e.urls = e.urls.map(e => e.replace(/(\d+)-\d+-\d+-(\d+)/, "$1-*-*-$2")));
      try {
        return "number" != typeof t ? (this.dispatch({
          type: Lb.RECORD_JOIN_CHANNEL_SERVICE,
          record: Pb(Pb({}, e), {}, {
            sessionId: this.sessionId,
            cloudProxyMode: this.cloudProxyServerMode,
            uid: this.uid
          })
        }), this.state.joinChannelServiceRecords.length - 1) : (t < 0 || t >= this.state.joinChannelServiceRecords.length || this.dispatch({
          type: Lb.RECORD_JOIN_CHANNEL_SERVICE,
          record: e,
          index: t
        }), t);
      } catch (e) {
        return 0;
      }
    }
    resetJoinChannelServiceRecords() {
      this.dispatch({
        type: Lb.RESET_JOIN_CHANNEL_SERVICE_RECORDS
      });
    }
    resetKeyMetrics() {
      this.dispatch({
        type: Lb.RESET_KEY_METRICS
      });
    }
    get joinChannelServiceRecords() {
      try {
        return this.state.joinChannelServiceRecords;
      } catch (e) {
        return [];
      }
    }
    get avoidJoinStart() {
      return this.state.avoidJoinStart;
    }
    set avoidJoinStart(e) {
      this.dispatch({
        type: Lb.AVOID_JOIN_START,
        avoidJoinStart: e
      });
    }
  }
  let Mb;
  const Ub = () => "HTTPS" === (Mb || Mb || (Mb = (window.location.protocol.split(":")[0] || "").toUpperCase(), Mb)),
    xb = () => void 0 !== window.isSecureContext;
  function Vb(e) {
    let t = Xb();
    return function (e, t) {
      let i = e.appId;
      void 0 !== i && (dw(t, 10), iw(t, i));
      let n = e.cid;
      void 0 !== n && (dw(t, 16), dw(t, n));
      let r = e.cname;
      void 0 !== r && (dw(t, 26), iw(t, r));
      let o = e.deviceId;
      void 0 !== o && (dw(t, 34), iw(t, o));
      let s = e.elapse;
      void 0 !== s && (dw(t, 40), uw(t, s));
      let a = e.fileSize;
      void 0 !== a && (dw(t, 48), uw(t, qb(a)));
      let c = e.height;
      void 0 !== c && (dw(t, 56), uw(t, qb(c)));
      let d = e.jpg;
      void 0 !== d && (dw(t, 66), dw(t, d.length), function (e, t) {
        let i = $b(e, t.length);
        e.bytes.set(t, i);
      }(t, d));
      let u = e.networkType;
      void 0 !== u && (dw(t, 72), uw(t, qb(u)));
      let l = e.osType;
      void 0 !== l && (dw(t, 80), uw(t, qb(l)));
      let h = e.requestId;
      void 0 !== h && (dw(t, 90), iw(t, h));
      let p = e.sdkVersion;
      void 0 !== p && (dw(t, 98), iw(t, p));
      let _ = e.sequence;
      void 0 !== _ && (dw(t, 104), uw(t, qb(_)));
      let E = e.sid;
      void 0 !== E && (dw(t, 114), iw(t, E));
      let m = e.timestamp;
      void 0 !== m && (dw(t, 120), uw(t, m));
      let f = e.uid;
      void 0 !== f && (dw(t, 128), dw(t, f));
      let S = e.vid;
      void 0 !== S && (dw(t, 136), dw(t, S));
      let T = e.width;
      void 0 !== T && (dw(t, 144), uw(t, qb(T)));
      let g = e.service;
      void 0 !== g && (dw(t, 152), dw(t, g));
      let R = e.callbackData;
      void 0 !== R && (dw(t, 162), iw(t, R));
      let I = e.jpgEncryption;
      void 0 !== I && (dw(t, 168), dw(t, I));
      let C = e.requestType;
      void 0 !== C && (dw(t, 176), dw(t, C));
      let v = e.scorePorn;
      void 0 !== v && (dw(t, 185), aw(t, v));
      let y = e.scoreSexy;
      void 0 !== y && (dw(t, 193), aw(t, y));
      let A = e.scoreNeutral;
      void 0 !== A && (dw(t, 201), aw(t, A));
      let O = e.scene;
      void 0 !== O && (dw(t, 208), dw(t, O));
      let N = e.ossFilePrefix;
      void 0 !== N && (dw(t, 218), iw(t, N));
      let b = e.serviceVendor;
      if (void 0 !== b) for (let e of b) {
        dw(t, 226);
        let i = Xb();
        Bb(e, i), dw(t, i.limit), nw(t, i), zb(i);
      }
    }(e, t), function (e) {
      let t = e.bytes,
        i = e.limit;
      return t.length === i ? t : t.subarray(0, i);
    }(t);
  }
  function jb(e) {
    return function (e) {
      let t = {};
      e: for (; !Zb(e);) {
        let i = cw(e);
        switch (i >>> 3) {
          case 0:
            break e;
          case 1:
            t.code = cw(e);
            break;
          case 2:
            t.msg = tw(e, cw(e));
            break;
          case 3:
            {
              let i = Gb(e);
              t.data = Fb(e), e.limit = i;
              break;
            }
          default:
            Wb(e, 7 & i);
        }
      }
      return t;
    }({
      bytes: t = e,
      offset: 0,
      limit: t.length
    });
    var t;
  }
  function Fb(e) {
    let t = {};
    e: for (; !Zb(e);) {
      let i = cw(e);
      switch (i >>> 3) {
        case 0:
          break e;
        case 1:
          t.requestId = tw(e, cw(e));
          break;
        case 2:
          t.requestType = cw(e) >>> 0;
          break;
        case 3:
          t.scorePorn = sw(e);
          break;
        case 4:
          t.scoreSexy = sw(e);
          break;
        case 5:
          t.scoreNeutral = sw(e);
          break;
        case 6:
          t.requestScene = cw(e) >>> 0;
          break;
        case 7:
          t.scene = cw(e) >>> 0;
          break;
        default:
          Wb(e, 7 & i);
      }
    }
    return t;
  }
  function Bb(e, t) {
    let i = e.service;
    void 0 !== i && (dw(t, 8), dw(t, i));
    let n = e.vendor;
    void 0 !== n && (dw(t, 16), dw(t, n));
    let r = e.token;
    void 0 !== r && (dw(t, 26), iw(t, r));
    let o = e.callbackUrl;
    void 0 !== o && (dw(t, 34), iw(t, o));
  }
  function Gb(e) {
    let t = cw(e),
      i = e.limit;
    return e.limit = e.offset + t, i;
  }
  function Wb(e, t) {
    switch (t) {
      case 0:
        for (; 128 & rw(e););
        break;
      case 2:
        Qb(e, cw(e));
        break;
      case 5:
        Qb(e, 4);
        break;
      case 1:
        Qb(e, 8);
        break;
      default:
        throw new Error("Unimplemented type: " + t);
    }
  }
  let Hb = new Float32Array(1);
  new Uint8Array(Hb.buffer);
  let Kb = new Float64Array(1),
    Yb = new Uint8Array(Kb.buffer);
  function qb(e) {
    return {
      low: e |= 0,
      high: e >> 31,
      unsigned: e >= 0
    };
  }
  let Jb = [];
  function Xb() {
    const e = Jb.pop();
    return e ? (e.offset = e.limit = 0, e) : {
      bytes: new Uint8Array(64),
      offset: 0,
      limit: 0
    };
  }
  function zb(e) {
    Jb.push(e);
  }
  function Qb(e, t) {
    if (e.offset + t > e.limit) throw new Error("Skip past limit");
    e.offset += t;
  }
  function Zb(e) {
    return e.offset >= e.limit;
  }
  function $b(e, t) {
    let i = e.bytes,
      n = e.offset,
      r = e.limit,
      o = n + t;
    if (o > i.length) {
      let t = new Uint8Array(2 * o);
      t.set(i), e.bytes = t;
    }
    return e.offset = o, o > r && (e.limit = o), n;
  }
  function ew(e, t) {
    let i = e.offset;
    if (i + t > e.limit) throw new Error("Read past limit");
    return e.offset += t, i;
  }
  function tw(e, t) {
    let i = ew(e, t),
      n = String.fromCharCode,
      r = e.bytes,
      o = "\uFFFD",
      s = "";
    for (let e = 0; e < t; e++) {
      let a,
        c,
        d,
        u,
        l = r[e + i];
      0 == (128 & l) ? s += n(l) : 192 == (224 & l) ? e + 1 >= t ? s += o : (a = r[e + i + 1], 128 != (192 & a) ? s += o : (u = (31 & l) << 6 | 63 & a, u < 128 ? s += o : (s += n(u), e++))) : 224 == (240 & l) ? e + 2 >= t ? s += o : (a = r[e + i + 1], c = r[e + i + 2], 32896 != (49344 & (a | c << 8)) ? s += o : (u = (15 & l) << 12 | (63 & a) << 6 | 63 & c, u < 2048 || u >= 55296 && u <= 57343 ? s += o : (s += n(u), e += 2))) : 240 == (248 & l) ? e + 3 >= t ? s += o : (a = r[e + i + 1], c = r[e + i + 2], d = r[e + i + 3], 8421504 != (12632256 & (a | c << 8 | d << 16)) ? s += o : (u = (7 & l) << 18 | (63 & a) << 12 | (63 & c) << 6 | 63 & d, u < 65536 || u > 1114111 ? s += o : (u -= 65536, s += n(55296 + (u >> 10), 56320 + (1023 & u)), e += 3))) : s += o;
    }
    return s;
  }
  function iw(e, t) {
    let i = t.length,
      n = 0;
    for (let e = 0; e < i; e++) {
      let r = t.charCodeAt(e);
      r >= 55296 && r <= 56319 && e + 1 < i && (r = (r << 10) + t.charCodeAt(++e) - 56613888), n += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
    }
    dw(e, n);
    let r = $b(e, n),
      o = e.bytes;
    for (let e = 0; e < i; e++) {
      let n = t.charCodeAt(e);
      n >= 55296 && n <= 56319 && e + 1 < i && (n = (n << 10) + t.charCodeAt(++e) - 56613888), n < 128 ? o[r++] = n : (n < 2048 ? o[r++] = n >> 6 & 31 | 192 : (n < 65536 ? o[r++] = n >> 12 & 15 | 224 : (o[r++] = n >> 18 & 7 | 240, o[r++] = n >> 12 & 63 | 128), o[r++] = n >> 6 & 63 | 128), o[r++] = 63 & n | 128);
    }
  }
  function nw(e, t) {
    let i = $b(e, t.limit),
      n = e.bytes,
      r = t.bytes;
    for (let e = 0, o = t.limit; e < o; e++) n[e + i] = r[e];
  }
  function rw(e) {
    return e.bytes[ew(e, 1)];
  }
  function ow(e, t) {
    let i = $b(e, 1);
    e.bytes[i] = t;
  }
  function sw(e) {
    let t = ew(e, 8),
      i = e.bytes;
    return Yb[0] = i[t++], Yb[1] = i[t++], Yb[2] = i[t++], Yb[3] = i[t++], Yb[4] = i[t++], Yb[5] = i[t++], Yb[6] = i[t++], Yb[7] = i[t++], Kb[0];
  }
  function aw(e, t) {
    let i = $b(e, 8),
      n = e.bytes;
    Kb[0] = t, n[i++] = Yb[0], n[i++] = Yb[1], n[i++] = Yb[2], n[i++] = Yb[3], n[i++] = Yb[4], n[i++] = Yb[5], n[i++] = Yb[6], n[i++] = Yb[7];
  }
  function cw(e) {
    let t,
      i = 0,
      n = 0;
    do {
      t = rw(e), i < 32 && (n |= (127 & t) << i), i += 7;
    } while (128 & t);
    return n;
  }
  function dw(e, t) {
    for (t >>>= 0; t >= 128;) ow(e, 127 & t | 128), t >>>= 7;
    ow(e, t);
  }
  function uw(e, t) {
    let i = t.low >>> 0,
      n = (t.low >>> 28 | t.high << 4) >>> 0,
      r = t.high >>> 24,
      o = 0 === r ? 0 === n ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 1 << 21 ? 7 : 8 : r < 128 ? 9 : 10,
      s = $b(e, o),
      a = e.bytes;
    switch (o) {
      case 10:
        a[s + 9] = r >>> 7 & 1;
      case 9:
        a[s + 8] = 9 !== o ? 128 | r : 127 & r;
      case 8:
        a[s + 7] = 8 !== o ? n >>> 21 | 128 : n >>> 21 & 127;
      case 7:
        a[s + 6] = 7 !== o ? n >>> 14 | 128 : n >>> 14 & 127;
      case 6:
        a[s + 5] = 6 !== o ? n >>> 7 | 128 : n >>> 7 & 127;
      case 5:
        a[s + 4] = 5 !== o ? 128 | n : 127 & n;
      case 4:
        a[s + 3] = 4 !== o ? i >>> 21 | 128 : i >>> 21 & 127;
      case 3:
        a[s + 2] = 3 !== o ? i >>> 14 | 128 : i >>> 14 & 127;
      case 2:
        a[s + 1] = 2 !== o ? i >>> 7 | 128 : i >>> 7 & 127;
      case 1:
        a[s] = 1 !== o ? 128 | i : 127 & i;
    }
  }
  const lw = async (e, t, i) => {
      const n = function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 2) t.push(parseInt(e.slice(i, i + 2), 16));
          return Uint8Array.from(t);
        }(function (e) {
          const t = "0123456789abcdef";
          function i(e) {
            let i,
              n = "";
            for (i = 0; i <= 3; i++) n += t.charAt(e >> 8 * i + 4 & 15) + t.charAt(e >> 8 * i & 15);
            return n;
          }
          function n(e, t) {
            const i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
          }
          function r(e, t, i, r, o, s) {
            return n(function (e, t) {
              return e << t | e >>> 32 - t;
            }(n(n(t, e), n(r, s)), o), i);
          }
          function o(e, t, i, n, o, s, a) {
            return r(t & i | ~t & n, e, t, o, s, a);
          }
          function s(e, t, i, n, o, s, a) {
            return r(t & n | i & ~n, e, t, o, s, a);
          }
          function a(e, t, i, n, o, s, a) {
            return r(t ^ i ^ n, e, t, o, s, a);
          }
          function c(e, t, i, n, o, s, a) {
            return r(i ^ (t | ~n), e, t, o, s, a);
          }
          const d = function (e) {
            let t;
            const i = 1 + (e.length + 8 >> 6),
              n = new Array(16 * i);
            for (t = 0; t < 16 * i; t++) n[t] = 0;
            for (t = 0; t < e.length; t++) n[t >> 2] |= e.charCodeAt(t) << t % 4 * 8;
            return n[t >> 2] |= 128 << t % 4 * 8, n[16 * i - 2] = 8 * e.length, n;
          }(e);
          let u,
            l,
            h,
            p,
            _,
            E = 1732584193,
            m = -271733879,
            f = -1732584194,
            S = 271733878;
          for (u = 0; u < d.length; u += 16) l = E, h = m, p = f, _ = S, E = o(E, m, f, S, d[u + 0], 7, -680876936), S = o(S, E, m, f, d[u + 1], 12, -389564586), f = o(f, S, E, m, d[u + 2], 17, 606105819), m = o(m, f, S, E, d[u + 3], 22, -1044525330), E = o(E, m, f, S, d[u + 4], 7, -176418897), S = o(S, E, m, f, d[u + 5], 12, 1200080426), f = o(f, S, E, m, d[u + 6], 17, -1473231341), m = o(m, f, S, E, d[u + 7], 22, -45705983), E = o(E, m, f, S, d[u + 8], 7, 1770035416), S = o(S, E, m, f, d[u + 9], 12, -1958414417), f = o(f, S, E, m, d[u + 10], 17, -42063), m = o(m, f, S, E, d[u + 11], 22, -1990404162), E = o(E, m, f, S, d[u + 12], 7, 1804603682), S = o(S, E, m, f, d[u + 13], 12, -40341101), f = o(f, S, E, m, d[u + 14], 17, -1502002290), m = o(m, f, S, E, d[u + 15], 22, 1236535329), E = s(E, m, f, S, d[u + 1], 5, -165796510), S = s(S, E, m, f, d[u + 6], 9, -1069501632), f = s(f, S, E, m, d[u + 11], 14, 643717713), m = s(m, f, S, E, d[u + 0], 20, -373897302), E = s(E, m, f, S, d[u + 5], 5, -701558691), S = s(S, E, m, f, d[u + 10], 9, 38016083), f = s(f, S, E, m, d[u + 15], 14, -660478335), m = s(m, f, S, E, d[u + 4], 20, -405537848), E = s(E, m, f, S, d[u + 9], 5, 568446438), S = s(S, E, m, f, d[u + 14], 9, -1019803690), f = s(f, S, E, m, d[u + 3], 14, -187363961), m = s(m, f, S, E, d[u + 8], 20, 1163531501), E = s(E, m, f, S, d[u + 13], 5, -1444681467), S = s(S, E, m, f, d[u + 2], 9, -51403784), f = s(f, S, E, m, d[u + 7], 14, 1735328473), m = s(m, f, S, E, d[u + 12], 20, -1926607734), E = a(E, m, f, S, d[u + 5], 4, -378558), S = a(S, E, m, f, d[u + 8], 11, -2022574463), f = a(f, S, E, m, d[u + 11], 16, 1839030562), m = a(m, f, S, E, d[u + 14], 23, -35309556), E = a(E, m, f, S, d[u + 1], 4, -1530992060), S = a(S, E, m, f, d[u + 4], 11, 1272893353), f = a(f, S, E, m, d[u + 7], 16, -155497632), m = a(m, f, S, E, d[u + 10], 23, -1094730640), E = a(E, m, f, S, d[u + 13], 4, 681279174), S = a(S, E, m, f, d[u + 0], 11, -358537222), f = a(f, S, E, m, d[u + 3], 16, -722521979), m = a(m, f, S, E, d[u + 6], 23, 76029189), E = a(E, m, f, S, d[u + 9], 4, -640364487), S = a(S, E, m, f, d[u + 12], 11, -421815835), f = a(f, S, E, m, d[u + 15], 16, 530742520), m = a(m, f, S, E, d[u + 2], 23, -995338651), E = c(E, m, f, S, d[u + 0], 6, -198630844), S = c(S, E, m, f, d[u + 7], 10, 1126891415), f = c(f, S, E, m, d[u + 14], 15, -1416354905), m = c(m, f, S, E, d[u + 5], 21, -57434055), E = c(E, m, f, S, d[u + 12], 6, 1700485571), S = c(S, E, m, f, d[u + 3], 10, -1894986606), f = c(f, S, E, m, d[u + 10], 15, -1051523), m = c(m, f, S, E, d[u + 1], 21, -2054922799), E = c(E, m, f, S, d[u + 8], 6, 1873313359), S = c(S, E, m, f, d[u + 15], 10, -30611744), f = c(f, S, E, m, d[u + 6], 15, -1560198380), m = c(m, f, S, E, d[u + 13], 21, 1309151649), E = c(E, m, f, S, d[u + 4], 6, -145523070), S = c(S, E, m, f, d[u + 11], 10, -1120210379), f = c(f, S, E, m, d[u + 2], 15, 718787259), m = c(m, f, S, E, d[u + 9], 21, -343485551), E = n(E, l), m = n(m, h), f = n(f, p), S = n(S, _);
          return i(E) + i(m) + i(f) + i(S);
        }("" + t + i)).slice(0, 16),
        r = n.slice(0, 12),
        o = await window.crypto.subtle.importKey("raw", n, "AES-GCM", !0, ["encrypt"]);
      return new Uint8Array(await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: r
      }, o, e));
    },
    hw = async (e, t, i) => await lw(e.buffer, t, i);
  function pw(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  const _w = new Map([["moderation", 1], ["supervise", 2]]);
  class Ew extends EE {
    get connectionState() {
      return this._connectionState;
    }
    set connectionState(e) {
      if (this._connectionState === e) return;
      const t = this._connectionState;
      this._connectionState = e, this.emit(VS.CONNECTION_STATE_CHANGE, t, e);
    }
    get inspectType() {
      return this._inspectType;
    }
    set inspectType(e) {
      var t;
      this._inspectMode = zi(t = e.map(e => _w.get(e) || 0)).call(t, (e, t) => e + t), this._inspectType = e;
    }
    get quality() {
      return this._quality;
    }
    set quality(e) {
      this._quality = e > 1 ? 1 : e < 0.1 ? 0.1 : e, this.qualityTimer && (window.clearTimeout(this.qualityTimer), this.qualityTimer = null), this._quality >= 1 || (this.qualityTimer = window.setTimeout(() => {
        this.quality = this._quality / this.qualityRatio;
      }, 60000));
    }
    constructor(e) {
      super(), _p(this, "name", "AgoraRTCVideoContentInspect"), _p(this, "_connectionState", US.CONNECTING), _p(this, "_innerConnectionState", void 0), _p(this, "sequence", 0), _p(this, "inspectStartTime", void 0), _p(this, "workerManagerConnection", void 0), _p(this, "workerConnection", void 0), _p(this, "workerMessageLengthLimit", void 0), _p(this, "inspectIntervalMinimum", void 0), _p(this, "qualityRatio", void 0), _p(this, "_connectInfo", void 0), _p(this, "_cancelTokenSource", pE.CancelToken.source()), _p(this, "_retryConfig", void 0), _p(this, "wmSequence", 0), _p(this, "inspectInterval", void 0), _p(this, "inspectTimer", null), _p(this, "ossFilePrefix", void 0), _p(this, "extraInfo", void 0), _p(this, "_inspectType", void 0), _p(this, "_inspectMode", void 0), _p(this, "_quality", 1), _p(this, "qualityTimer", null), _p(this, "_inspectId", void 0), _p(this, "_needWorkUrlOnly", !1), _p(this, "inspectImage", () => {
        if (this.connectionState !== US.CONNECTED) throw new SE(fE.OPERATION_ABORTED, "content inspect service connection status is ".concat(this.connectionState));
        this.inspectTimer && (window.clearInterval(this.inspectTimer), this.inspectTimer = null), this.inspectTimer = window.setInterval(() => {
          this.connectionState === US.CONNECTED ? this.requestToInspectImage() : OE.debug("[".concat(this._inspectId, "] Inspect State is not connected , "), this.connectionState);
        }, this.inspectInterval < this.inspectIntervalMinimum ? this.inspectIntervalMinimum : this.inspectInterval), this.requestToInspectImage();
      }), this._inspectId = ZI(5, "inspect-"), this.workerMessageLengthLimit = GE("VIDEO_INSPECT_WORKER_MESSAGE_LENGTH_LIMIT"), this.inspectIntervalMinimum = GE("VIDEO_INSPECT_INTERVAL_MINIMUM"), this.qualityRatio = GE("VIDEO_INSPECT_QUALITY_RATIO"), this.inspectInterval = e.interval, this.ossFilePrefix = e.ossFilePrefix, this.extraInfo = e.extraInfo, this.inspectType = e.inspectType, this.inspectStartTime = Number(Date.now()), this.workerManagerConnection = new vC("worker-manager-" + this._inspectId, TE), this.on(VS.STATE_CHANGE, (e, t) => {
        this._innerConnectionState = e, OE.debug("[".concat(this._inspectId, "] Inspect operation :").concat(xS[e], " ").concat(t || ""));
      }), this.handleWorkerManagerEvents(), this.workerConnection = new vC("worker-" + this._inspectId, TE), this.handleWorkerEvents();
    }
    async init(e, t) {
      this.emit(VS.STATE_CHANGE, xS.CONNECT_AP), this._connectInfo = e;
      const i = this._cancelTokenSource.token;
      return this._retryConfig = t, new Sl((n, r) => {
        this.on(VS.CONNECTION_STATE_CHANGE, (e, t) => {
          t === US.CONNECTED && n();
        }), this.requestAP(e, i, t).then(e => {
          this.connectWorkerManager(e);
        }).catch(e => {
          r(e);
        });
      });
    }
    async requestAP(e, t, i) {
      const n = GE("WEBCS_DOMAIN").map(e => "https://".concat(e, "/api/v1")),
        r = await function (e, t, i, n) {
          let {
            appId: r,
            areaCode: o,
            cname: s,
            sid: a,
            token: c,
            uid: d
          } = t;
          sv++;
          const u = "image_moderation_api",
            l = {
              service_name: u,
              json_body: JSON.stringify({
                appId: r,
                areaCode: o,
                cname: s,
                command: "allocateEdge",
                requestId: sv,
                seq: sv,
                sid: a,
                token: c,
                ts: Date.now(),
                uid: d + ""
              })
            };
          let h,
            p,
            _ = e[0];
          return RE(async () => {
            h = Date.now();
            const e = await gg(_, {
              data: l,
              cancelToken: i,
              headers: {
                "X-Packet-Service-Type": "0",
                "X-Packet-URI": "61"
              },
              params: {
                action: "wrtc_gateway"
              }
            });
            if (p = Date.now() - h, 0 !== e.code) {
              const t = new SE(fE.UNEXPECTED_RESPONSE, "image inspect ap error, code" + e.code, {
                retry: !0,
                responseTime: p
              });
              throw OE.error(t.toString()), t;
            }
            const t = JSON.parse(e.json_body);
            if (200 !== t.code) {
              const e = new SE(fE.UNEXPECTED_RESPONSE, "image inspect ap error, code: ".concat(t.code, ", reason: ").concat(t.reason), {
                code: t.code,
                responseTime: p
              });
              throw OE.error(e.toString()), e;
            }
            if (!t.servers || !Array.isArray(t.servers) || 0 === t.servers.length) {
              const e = new SE(fE.UNEXPECTED_RESPONSE, "image inspect ap empty server", {
                code: t.code,
                responseTime: p
              });
              throw OE.error(e.toString()), e;
            }
            const n = GE("VIDEO_INSPECT_WORKER_MANAGER_HOST"),
              r = GE("VIDEO_INSPECT_WORKER_MANAGER_PORT");
            return {
              addressList: t.servers.map(e => {
                let {
                  address: t,
                  wss: i
                } = e;
                if (t && i) return "wss://".concat(t.replace(/\./g, "-"), ".").concat(n, ":").concat(r || i);
              }).filter(e => !!e),
              workerToken: t.workerToken,
              vid: t.vid,
              responseTime: p
            };
          }, (t, i) => (Pg.apworkerEvent(a, {
            success: !0,
            sc: 200,
            serviceName: u,
            responseDetail: JSON.stringify(t.addressList),
            firstSuccess: 0 === i,
            responseTime: p,
            serverIp: e[i % e.length]
          }), !1), (t, i) => (Pg.apworkerEvent(a, {
            success: !1,
            sc: t.data && t.data.code || 200,
            serviceName: u,
            responseTime: p,
            serverIp: e[i % e.length]
          }), !!(t.code !== fE.OPERATION_ABORTED && t.code !== fE.UNEXPECTED_RESPONSE || t.data && t.data.retry) && (_ = e[(i + 1) % e.length], !0)), n);
        }(n, e, t, i);
      this.emit(VS.STATE_CHANGE, xS.AP_CONNECTED);
      const {
        addressList: o
      } = r;
      return this.wmSequence++, o;
    }
    async connectWorkerManager(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this._needWorkUrlOnly = t, this.emit(VS.STATE_CHANGE, xS.CONNECT_WORKER_MANAGER), await this.workerManagerConnection.init(e, 10000);
    }
    async connectWorker(e) {
      await this.workerConnection.init([e]);
    }
    handleWorkerManagerEvents() {
      this.workerManagerConnection.on(Hf.CONNECTED, async () => {
        this.emit(VS.STATE_CHANGE, xS.WORKER_MANAGER_CONNECTED, this.workerManagerConnection.url), this.workerManagerConnection.sendMessage({
          appId: this._connectInfo.appId,
          cname: this._connectInfo.cname,
          uid: this._connectInfo.uid + "",
          sdkVersion: "4.18.2",
          sid: this._connectInfo.sid,
          seq: this.wmSequence,
          ts: Number(Date.now()),
          requestId: Math.floor(1000000000000 * Math.random()),
          allocate: !0,
          clientRequest: {
            command: "join"
          }
        }, !0);
      }), this.workerManagerConnection.on(Hf.CLOSED, () => {
        this._innerConnectionState < xS.GET_WORKER_MANAGER_RESPONSE && OE.debug("[".concat(this._inspectId, "] Inspect worker manager is closed before connecting worker"));
      }), this.workerManagerConnection.on(Hf.FAILED, () => {
        this._innerConnectionState < xS.GET_WORKER_MANAGER_RESPONSE && OE.debug("[".concat(this._inspectId, "] Connecting inspect worker manager is failed before connecting worker"));
      }), this.workerManagerConnection.on(Hf.RECONNECTING, () => {
        this._innerConnectionState < xS.GET_WORKER_MANAGER_RESPONSE && OE.debug("[".concat(this._inspectId, "] Inspect worker manager is reconnecting before connecting worker"));
      }), this.workerManagerConnection.on(Hf.ON_MESSAGE, async e => {
        this.emit(VS.STATE_CHANGE, xS.GET_WORKER_MANAGER_RESPONSE);
        const t = this.workerManagerConnection.url;
        this.workerManagerConnection.close();
        const i = JSON.parse(e.data);
        if (200 !== i.code) throw OE.error("[".concat(this._inspectId, "] Unexpected code ").concat(i.code, " from worker manager")), new SE(fE.UNEXPECTED_RESPONSE, "response code of worker is unexpected", i);
        if (!(i.serverResponse && i.serverResponse.portWss && t)) throw OE.error("[".concat(this._inspectId, "] Unexpected content from worker manager : ").concat(JSON.stringify(i))), new SE(fE.UNEXPECTED_RESPONSE, "response content of worker is unexpected", i);
        {
          const e = GE("VIDEO_INSPECT_WORKER_PORT") || i.serverResponse.portWss,
            n = t.replace(/:\d+\/?$/, ":".concat(e));
          this.emit(VS.STATE_CHANGE, xS.CONNECT_WORKER, n), this._needWorkUrlOnly ? this.emit(VS.REQUEST_NEW_WORKER_URL, n) : await this.connectWorker(n);
        }
      }), this.workerManagerConnection.on(Hf.WILL_RECONNECT, (e, t) => {
        t(e);
      }), this.workerManagerConnection.on(Hf.REQUEST_NEW_URLS, (e, t) => {
        this.requestAP(this._connectInfo, this._cancelTokenSource.token, this._retryConfig).then(e).catch(t);
      });
    }
    handleWorkerEvents() {
      this.workerConnection.on(Hf.CONNECTED, async () => {
        this.emit(VS.STATE_CHANGE, xS.WORKER_CONNECTED, this.workerConnection.url), this.connectionState = US.CONNECTED;
      }), this.workerConnection.on(Hf.ON_MESSAGE, async e => {
        if (e.data instanceof ArrayBuffer) {
          const i = jb(new Uint8Array(e.data));
          if (GE("SHOW_VIDEO_INSPECT_WORKER_MESSAGE") && OE.debug("[".concat(this._inspectId, "] Response message for worker of inspect content "), JSON.stringify(i)), 200 === i.code) {
            if (Array.isArray(this.inspectType) && 1 === this.inspectType.length && "supervise" === this.inspectType[0]) return void this.emit(VS.INSPECT_RESULT, void 0, void 0);
            if (i.data && i.data.scorePorn && i.data.scoreSexy && i.data.scoreNeutral) {
              var t;
              const e = {
                  porn: i.data.scorePorn,
                  sexy: i.data.scoreSexy,
                  neutral: i.data.scoreNeutral
                },
                n = zi(t = Object.keys(e)).call(t, (t, i) => e[t] > e[i] ? t : i, "porn"),
                r = Object.keys(e).find(e => e === n);
              this.emit(VS.INSPECT_RESULT, r);
            } else this.emit(VS.INSPECT_RESULT, void 0, new SE(fE.UNEXPECTED_RESPONSE, i.code + "", "There is an unexpected data on message"));
          } else this.emit(VS.INSPECT_RESULT, void 0, new SE(fE.UNEXPECTED_RESPONSE, i.code + "", i.msg));
        } else OE.error("[".concat(this._inspectId, "] Unexpected message type from worker")), this.emit(VS.INSPECT_RESULT, void 0, new SE(fE.UNEXPECTED_RESPONSE, "invalid worker message type"));
      }), this.workerConnection.on(Hf.CLOSED, () => {
        this.connectionState = US.CLOSED;
      }), this.workerConnection.on(Hf.FAILED, () => {
        this.connectionState = US.CLOSED;
      }), this.workerConnection.on(Hf.RECONNECTING, () => {
        this.connectionState = this.connectionState === US.CONNECTED ? US.RECONNECTING : US.CONNECTING;
      }), this.workerConnection.on(Hf.WILL_RECONNECT, (e, t) => {
        "recover" === e && t(e), t("tryNext");
      }), this.workerConnection.on(Hf.REQUEST_NEW_URLS, (e, t) => {
        this.workerManagerConnection.close(), this.once(VS.REQUEST_NEW_WORKER_URL, t => {
          e([t]);
        }), this.requestAP(this._connectInfo, this._cancelTokenSource.token, this._retryConfig).then(e => {
          this.connectWorkerManager(e, !0);
        }).catch(e => {
          t(e);
        });
      });
    }
    static intToLong(e) {
      return {
        low: e |= 0,
        high: e >> 31,
        unsigned: e >= 0
      };
    }
    async requestToInspectImage() {
      this.sequence++;
      const e = oC(this, VS.CLIENT_LOCAL_VIDEO_TRACK),
        t = {
          appId: this._connectInfo.appId,
          cname: this._connectInfo.cname,
          cid: this._connectInfo.cid,
          sid: this._connectInfo.sid,
          uid: this._connectInfo.uid,
          vid: this._connectInfo.vid
        };
      if (e) {
        if (!e.isPlaying) return void this.emit(VS.INSPECT_RESULT, void 0, new SE(fE.INVALID_OPERATION, "Only the track being played can be inspected"));
        const i = await this.generateRequestData(e, t);
        this.workerConnection.sendMessage(i, !0, !0);
      } else this.emit(VS.INSPECT_RESULT, void 0, new SE(fE.INVALID_OPERATION, "Only the track being published can be inspected"));
    }
    async generateRequestData(e, t) {
      let {
        appId: i,
        cname: n,
        cid: r,
        vid: o,
        sid: s,
        uid: a
      } = t;
      const c = Date.now(),
        d = await e.getCurrentFrameImage("image/jpeg", this.quality),
        u = await hw(d, i, n),
        l = this.sequence + "-" + r + "-" + a + "-" + c + "-" + ZI(12, ""),
        h = {
          appId: i,
          cid: r,
          cname: n,
          deviceId: "",
          elapse: Ew.intToLong(Number(c - this.inspectStartTime)),
          fileSize: u.byteLength,
          jpgEncryption: 2,
          height: d.height,
          width: d.width,
          jpg: u,
          networkType: 6,
          osType: 7,
          requestId: l,
          sdkVersion: "4.18.2",
          sequence: this.sequence,
          sid: s,
          timestamp: Ew.intToLong(c),
          uid: a,
          vid: o,
          service: this._inspectMode,
          callbackData: this.extraInfo,
          ossFilePrefix: this.ossFilePrefix
        };
      void 0 === this.extraInfo && delete h.callbackData, void 0 === this.ossFilePrefix && delete h.ossFilePrefix;
      const p = Vb(h);
      if (p.byteLength < this.workerMessageLengthLimit) {
        if (GE("SHOW_VIDEO_INSPECT_WORKER_MESSAGE")) {
          const e = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2 ? pw(Object(i), !0).forEach(function (t) {
                _p(e, t, i[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : pw(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
            }
            return e;
          }({}, h);
          delete e.jpg, OE.debug("[".concat(this._inspectId, "] Request message for worker of inspect content "), JSON.stringify(e));
        }
        return p;
      }
      {
        const t = this.quality * this.qualityRatio;
        return this.quality = t, await this.generateRequestData(e, {
          appId: i,
          cname: n,
          cid: r,
          vid: o,
          sid: s,
          uid: a
        });
      }
    }
    close() {
      this._cancelTokenSource.cancel(), this._cancelTokenSource = pE.CancelToken.source(), this.workerManagerConnection && this.workerManagerConnection.close(), this.workerConnection && this.workerConnection.close(), this.inspectTimer && window.clearInterval(this.inspectTimer), this.inspectTimer = null, this.connectionState = US.CLOSED, this.emit(VS.STATE_CHANGE, xS.CLOSED);
    }
  }
  function mw(e) {
    let t = function () {
      const e = gw.pop();
      return e ? (e.offset = e.limit = 0, e) : {
        bytes: new Uint8Array(64),
        offset: 0,
        limit: 0
      };
    }();
    return function (e, t) {
      let i = e.appId;
      void 0 !== i && (Dw(t, 10), Ow(t, i));
      let n = e.cid;
      void 0 !== n && (Dw(t, 16), Dw(t, n));
      let r = e.cname;
      void 0 !== r && (Dw(t, 26), Ow(t, r));
      let o = e.deviceId;
      void 0 !== o && (Dw(t, 34), Ow(t, o));
      let s = e.elapse;
      void 0 !== s && (Dw(t, 40), Lw(t, s));
      let a = e.fileSize;
      void 0 !== a && (Dw(t, 48), Lw(t, Tw(a)));
      let c = e.height;
      void 0 !== c && (Dw(t, 56), Lw(t, Tw(c)));
      let d = e.jpg;
      void 0 !== d && (Dw(t, 66), Dw(t, d.length), yw(t, d));
      let u = e.networkType;
      void 0 !== u && (Dw(t, 72), Lw(t, Tw(u)));
      let l = e.osType;
      void 0 !== l && (Dw(t, 80), Lw(t, Tw(l)));
      let h = e.requestId;
      void 0 !== h && (Dw(t, 90), Ow(t, h));
      let p = e.sdkVersion;
      void 0 !== p && (Dw(t, 98), Ow(t, p));
      let _ = e.sequence;
      void 0 !== _ && (Dw(t, 104), Lw(t, Tw(_)));
      let E = e.sid;
      void 0 !== E && (Dw(t, 114), Ow(t, E));
      let m = e.timestamp;
      void 0 !== m && (Dw(t, 120), Lw(t, m));
      let f = e.uid;
      void 0 !== f && (Dw(t, 128), Dw(t, f));
      let S = e.vid;
      void 0 !== S && (Dw(t, 136), Dw(t, S));
      let T = e.width;
      void 0 !== T && (Dw(t, 144), Lw(t, Tw(T)));
      let g = e.service;
      void 0 !== g && (Dw(t, 152), Dw(t, g));
      let R = e.callbackData;
      void 0 !== R && (Dw(t, 162), Dw(t, R.length), yw(t, R));
      let I = e.ticket;
      void 0 !== I && (Dw(t, 170), Ow(t, I));
    }(e, t), function (e) {
      let t = e.bytes,
        i = e.limit;
      return t.length === i ? t : t.subarray(0, i);
    }(t);
  }
  function fw(e) {
    return function (e) {
      let t = {};
      e: for (; !Iw(e);) {
        let i = ww(e);
        switch (i >>> 3) {
          case 0:
            break e;
          case 1:
            t.code = ww(e);
            break;
          case 2:
            t.msg = Aw(e, ww(e));
            break;
          case 3:
            t.requestId = Aw(e, ww(e));
            break;
          case 4:
            t.timestamp = Pw(e, !1);
            break;
          default:
            Sw(e, 7 & i);
        }
      }
      return t;
    }({
      bytes: t = e,
      offset: 0,
      limit: t.length
    });
    var t;
  }
  function Sw(e, t) {
    switch (t) {
      case 0:
        for (; 128 & Nw(e););
        break;
      case 2:
        Rw(e, ww(e));
        break;
      case 5:
        Rw(e, 4);
        break;
      case 1:
        Rw(e, 8);
        break;
      default:
        throw new Error("Unimplemented type: " + t);
    }
  }
  function Tw(e) {
    return {
      low: e |= 0,
      high: e >> 31,
      unsigned: e >= 0
    };
  }
  let gw = [];
  function Rw(e, t) {
    if (e.offset + t > e.limit) throw new Error("Skip past limit");
    e.offset += t;
  }
  function Iw(e) {
    return e.offset >= e.limit;
  }
  function Cw(e, t) {
    let i = e.bytes,
      n = e.offset,
      r = e.limit,
      o = n + t;
    if (o > i.length) {
      let t = new Uint8Array(2 * o);
      t.set(i), e.bytes = t;
    }
    return e.offset = o, o > r && (e.limit = o), n;
  }
  function vw(e, t) {
    let i = e.offset;
    if (i + t > e.limit) throw new Error("Read past limit");
    return e.offset += t, i;
  }
  function yw(e, t) {
    let i = Cw(e, t.length);
    e.bytes.set(t, i);
  }
  function Aw(e, t) {
    let i = vw(e, t),
      n = String.fromCharCode,
      r = e.bytes,
      o = "\uFFFD",
      s = "";
    for (let e = 0; e < t; e++) {
      let a,
        c,
        d,
        u,
        l = r[e + i];
      0 == (128 & l) ? s += n(l) : 192 == (224 & l) ? e + 1 >= t ? s += o : (a = r[e + i + 1], 128 != (192 & a) ? s += o : (u = (31 & l) << 6 | 63 & a, u < 128 ? s += o : (s += n(u), e++))) : 224 == (240 & l) ? e + 2 >= t ? s += o : (a = r[e + i + 1], c = r[e + i + 2], 32896 != (49344 & (a | c << 8)) ? s += o : (u = (15 & l) << 12 | (63 & a) << 6 | 63 & c, u < 2048 || u >= 55296 && u <= 57343 ? s += o : (s += n(u), e += 2))) : 240 == (248 & l) ? e + 3 >= t ? s += o : (a = r[e + i + 1], c = r[e + i + 2], d = r[e + i + 3], 8421504 != (12632256 & (a | c << 8 | d << 16)) ? s += o : (u = (7 & l) << 18 | (63 & a) << 12 | (63 & c) << 6 | 63 & d, u < 65536 || u > 1114111 ? s += o : (u -= 65536, s += n(55296 + (u >> 10), 56320 + (1023 & u)), e += 3))) : s += o;
    }
    return s;
  }
  function Ow(e, t) {
    let i = t.length,
      n = 0;
    for (let e = 0; e < i; e++) {
      let r = t.charCodeAt(e);
      r >= 55296 && r <= 56319 && e + 1 < i && (r = (r << 10) + t.charCodeAt(++e) - 56613888), n += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
    }
    Dw(e, n);
    let r = Cw(e, n),
      o = e.bytes;
    for (let e = 0; e < i; e++) {
      let n = t.charCodeAt(e);
      n >= 55296 && n <= 56319 && e + 1 < i && (n = (n << 10) + t.charCodeAt(++e) - 56613888), n < 128 ? o[r++] = n : (n < 2048 ? o[r++] = n >> 6 & 31 | 192 : (n < 65536 ? o[r++] = n >> 12 & 15 | 224 : (o[r++] = n >> 18 & 7 | 240, o[r++] = n >> 12 & 63 | 128), o[r++] = n >> 6 & 63 | 128), o[r++] = 63 & n | 128);
    }
  }
  function Nw(e) {
    return e.bytes[vw(e, 1)];
  }
  function bw(e, t) {
    let i = Cw(e, 1);
    e.bytes[i] = t;
  }
  function ww(e) {
    let t,
      i = 0,
      n = 0;
    do {
      t = Nw(e), i < 32 && (n |= (127 & t) << i), i += 7;
    } while (128 & t);
    return n;
  }
  function Dw(e, t) {
    for (t >>>= 0; t >= 128;) bw(e, 127 & t | 128), t >>>= 7;
    bw(e, t);
  }
  function Pw(e, t) {
    let i,
      n = 0,
      r = 0,
      o = 0;
    return i = Nw(e), n = 127 & i, 128 & i && (i = Nw(e), n |= (127 & i) << 7, 128 & i && (i = Nw(e), n |= (127 & i) << 14, 128 & i && (i = Nw(e), n |= (127 & i) << 21, 128 & i && (i = Nw(e), r = 127 & i, 128 & i && (i = Nw(e), r |= (127 & i) << 7, 128 & i && (i = Nw(e), r |= (127 & i) << 14, 128 & i && (i = Nw(e), r |= (127 & i) << 21, 128 & i && (i = Nw(e), o = 127 & i, 128 & i && (i = Nw(e), o |= (127 & i) << 7))))))))), {
      low: n | r << 28,
      high: r >>> 4 | o << 24,
      unsigned: t
    };
  }
  function Lw(e, t) {
    let i = t.low >>> 0,
      n = (t.low >>> 28 | t.high << 4) >>> 0,
      r = t.high >>> 24,
      o = 0 === r ? 0 === n ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 1 << 21 ? 7 : 8 : r < 128 ? 9 : 10,
      s = Cw(e, o),
      a = e.bytes;
    switch (o) {
      case 10:
        a[s + 9] = r >>> 7 & 1;
      case 9:
        a[s + 8] = 9 !== o ? 128 | r : 127 & r;
      case 8:
        a[s + 7] = 8 !== o ? n >>> 21 | 128 : n >>> 21 & 127;
      case 7:
        a[s + 6] = 7 !== o ? n >>> 14 | 128 : n >>> 14 & 127;
      case 6:
        a[s + 5] = 6 !== o ? n >>> 7 | 128 : n >>> 7 & 127;
      case 5:
        a[s + 4] = 5 !== o ? 128 | n : 127 & n;
      case 4:
        a[s + 3] = 4 !== o ? i >>> 21 | 128 : i >>> 21 & 127;
      case 3:
        a[s + 2] = 3 !== o ? i >>> 14 | 128 : i >>> 14 & 127;
      case 2:
        a[s + 1] = 2 !== o ? i >>> 7 | 128 : i >>> 7 & 127;
      case 1:
        a[s] = 1 !== o ? 128 | i : 127 & i;
    }
  }
  const kw = {},
    Mw = {},
    Uw = 4294967296,
    xw = 18446744073709552000,
    Vw = xw / 2,
    jw = Hw(0, !0),
    Fw = Hw(0),
    Bw = Kw(0, -2147483648, !1),
    Gw = Kw(-1, 2147483647, !1),
    Ww = Kw(-1, -1, !0);
  function Hw(e, t) {
    let i, n, r;
    return t ? (r = 0 <= (e >>>= 0) && e < 256) && (n = Mw[e], n) ? n : (i = Kw(e, 0, !0), r && (Mw[e] = i), i) : (r = -128 <= (e |= 0) && e < 128) && (n = kw[e], n) ? n : (i = Kw(e, e < 0 ? -1 : 0, !1), r && (kw[e] = i), i);
  }
  function Kw(e, t, i) {
    return {
      low: 0 | e,
      high: 0 | t,
      unsigned: !!i
    };
  }
  function Yw(e, t) {
    if (isNaN(e)) return t ? jw : Fw;
    if (t) {
      if (e < 0) return jw;
      if (e >= xw) return Ww;
    } else {
      if (e <= -Vw) return Bw;
      if (e + 1 >= Vw) return Gw;
    }
    return e < 0 ? t ? jw : Fw : Kw(e % Uw | 0, e / Uw | 0, t);
  }
  function qw(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  class Jw extends EE {
    get connectionState() {
      return this._connectionState;
    }
    set connectionState(e) {
      if (this._connectionState === e) return;
      const t = this._connectionState;
      this._connectionState = e, this.emit(HS.CONNECTION_STATE_CHANGE, e, t);
    }
    get quality() {
      return this._quality;
    }
    set quality(e) {
      this._quality = e > 1 ? 1 : e < 0.1 ? 0.1 : e, this._qualityTimer && (window.clearTimeout(this._qualityTimer), this._qualityTimer = null), this._quality >= 1 || (this._qualityTimer = window.setTimeout(() => {
        this.quality = this._quality / this._qualityRatio;
      }, 60000));
    }
    constructor(e) {
      var t;
      super(), _p(this, "name", "AgoraRTCImageModeration"), _p(this, "_connectionState", WS.CONNECTING), _p(this, "_sequence", 0), _p(this, "_moderationStartTime", void 0), _p(this, "_workerConnection", void 0), _p(this, "_workerMessageLengthLimit", void 0), _p(this, "_qualityRatio", void 0), _p(this, "_connectInfo", void 0), _p(this, "_cancelTokenSource", pE.CancelToken.source()), _p(this, "_retryConfig", void 0), _p(this, "_moderationInterval", void 0), _p(this, "_moderationTimer", null), _p(this, "_moderationMode", 1), _p(this, "_quality", 1), _p(this, "_qualityTimer", null), _p(this, "_ticket", void 0), _p(this, "_moderationIntervalMinimum", void 0), _p(this, "_uploadFailedNum", 0), _p(this, "_uploadNum", 0), _p(this, "_uploadTimer", null), _p(this, "_moderationId", void 0), _p(this, "inspectImage", () => {
        if (this.connectionState !== WS.CONNECTED) throw new SE(fE.OPERATION_ABORTED, "image moderation service connection status is ".concat(this.connectionState));
        this._moderationTimer && (window.clearInterval(this._moderationTimer), this._moderationTimer = null), this._moderationTimer = window.setInterval(() => {
          this.connectionState === WS.CONNECTED ? this.requestToInspectImage() : OE.debug("[".concat(this._moderationId, "] Moderation State is not connected , "), this.connectionState);
        }, this._moderationInterval < this._moderationIntervalMinimum ? this._moderationIntervalMinimum : this._moderationInterval), this.requestToInspectImage();
      }), this._moderationId = ZI(5, "image-moderation-"), this._workerMessageLengthLimit = GE("IMAGE_MODERATION_WORKER_MESSAGE_LENGTH_LIMIT"), this._moderationIntervalMinimum = GE("IMAGE_MODERATION_INTERVAL_MINIMUM"), this._moderationInterval = null !== (t = e.interval) && void 0 !== t ? t : 1000, this._qualityRatio = GE("IMAGE_MODERATION_QUALITY_RATIO"), this._moderationStartTime = Number(Date.now()), this._workerConnection = new vC("worker-" + this._moderationId, TE), this.on(HS.STATE_CHANGE, (e, t) => {
        OE.debug("[".concat(this._moderationId, "] Moderation operation :").concat(KS[e], " ").concat(t || ""));
      }), this.handleWorkerEvents();
    }
    async init(e, t) {
      this.emit(HS.STATE_CHANGE, KS.CONNECT_AP), this._connectInfo = e;
      const i = this._cancelTokenSource.token;
      return this._retryConfig = t, new Sl((n, r) => {
        this.on(HS.CONNECTION_STATE_CHANGE, (e, t) => {
          e === WS.CONNECTED && n();
        }), this.requestAP(e, i, t).then(e => {
          this.connectWorker(e);
        }).catch(e => {
          r(e);
        });
      });
    }
    updateConfig(e) {
      var t;
      this._moderationInterval = null !== (t = e.interval) && void 0 !== t ? t : 1000, OE.debug("[".concat(this._moderationId, "] updateConfig: ").concat(JSON.stringify(e))), this.connectionState === WS.CONNECTED && this.inspectImage();
    }
    async requestAP(e, t, i) {
      const n = GE("WEBCS_DOMAIN").map(e => "https://".concat(e, "/api/v1")),
        r = await function (e, t, i, n) {
          let {
            appId: r,
            areaCode: o,
            cname: s,
            sid: a,
            token: c,
            uid: d
          } = t;
          sv++;
          const u = "moderation_plugin",
            l = {
              service_name: u,
              json_body: JSON.stringify({
                appId: r,
                areaCode: o,
                cname: s,
                command: "allocateEdge",
                requestId: sv,
                seq: sv,
                sid: a,
                appToken: c,
                ts: Date.now(),
                uid: d + ""
              })
            };
          let h,
            p,
            _ = e[0];
          return RE(async () => {
            h = Date.now();
            const e = await gg(_, {
              data: l,
              cancelToken: i,
              headers: {
                "X-Packet-Service-Type": "0",
                "X-Packet-URI": "61"
              },
              params: {
                action: "wrtc_gateway"
              }
            });
            if (p = Date.now() - h, 0 !== e.code) {
              const t = new SE(fE.UNEXPECTED_RESPONSE, "moderation plugin ap error, code" + e.code, {
                retry: !0,
                responseTime: p
              });
              throw OE.error(t.toString()), t;
            }
            const t = JSON.parse(e.json_body);
            if (200 !== t.code) {
              const e = new SE(fE.UNEXPECTED_RESPONSE, "moderation plugin ap error, code: ".concat(t.code, ", reason: ").concat(t.reason), {
                code: t.code,
                responseTime: p
              });
              throw OE.error(e.toString()), e;
            }
            if (!t.servers || !Array.isArray(t.servers) || 0 === t.servers.length) {
              const e = new SE(fE.UNEXPECTED_RESPONSE, "moderation plugin ap empty server", {
                code: t.code,
                responseTime: p
              });
              throw OE.error(e.toString()), e;
            }
            if (!t.servers.some(e => !!e.wss)) {
              const e = new SE(fE.UNEXPECTED_RESPONSE, "moderation plugin ap empty port", {
                code: t.code,
                responseTime: p
              });
              throw OE.error(e.toString()), e;
            }
            const n = GE("IMAGE_MODERATION_WORKER_HOST");
            return {
              addressList: t.servers.map(e => {
                let {
                  address: t,
                  wss: i
                } = e;
                if (t && i) return "wss://".concat(t.replace(/\./g, "-"), ".").concat(n, ":").concat(i, "/moderation");
              }).filter(e => !!e),
              workerToken: t.workerToken,
              vid: t.vid,
              ticket: t.appTicket,
              responseTime: p
            };
          }, (t, i) => (Pg.apworkerEvent(a, {
            success: !0,
            sc: 200,
            serviceName: u,
            responseDetail: JSON.stringify(t.addressList),
            firstSuccess: 0 === i,
            responseTime: p,
            serverIp: e[i % e.length]
          }), !1), (t, i) => (Pg.apworkerEvent(a, {
            success: !1,
            sc: t.data && t.data.code || 200,
            serviceName: u,
            responseTime: p,
            serverIp: e[i % e.length]
          }), !!(t.code !== fE.OPERATION_ABORTED && t.code !== fE.UNEXPECTED_RESPONSE || t.data && t.data.retry) && (_ = e[(i + 1) % e.length], !0)), n);
        }(n, e, t, i);
      this.emit(HS.STATE_CHANGE, KS.AP_CONNECTED);
      const {
        addressList: o,
        ticket: s
      } = r;
      return this._ticket = s, o;
    }
    async connectWorker(e) {
      this.emit(HS.STATE_CHANGE, KS.CONNECT_WORKER), await this._workerConnection.init(e, 10000);
    }
    handleWorkerEvents() {
      this._workerConnection.on(Hf.CONNECTED, async () => {
        this.emit(HS.STATE_CHANGE, KS.WORKER_CONNECTED, this._workerConnection.url), this.connectionState = WS.CONNECTED;
      }), this._workerConnection.on(Hf.CLOSED, () => {
        this.connectionState = WS.CLOSED;
      }), this._workerConnection.on(Hf.FAILED, () => {
        this.connectionState = WS.CLOSED;
      }), this._workerConnection.on(Hf.RECONNECTING, () => {
        this.connectionState = this.connectionState === WS.CONNECTED ? WS.RECONNECTING : WS.CONNECTING;
      }), this._workerConnection.on(Hf.ON_MESSAGE, async e => {
        if (e.data instanceof ArrayBuffer) {
          const t = fw(new Uint8Array(e.data));
          GE("SHOW_IMAGE_MODERATION_WORKER_MESSAGE") && OE.debug("[".concat(this._moderationId, "] Response message for worker of image moderation "), JSON.stringify(t)), this._uploadNum++, void 0 === t.code || 0 === t.code || (this._uploadFailedNum++, OE.error("[".concat(this._moderationId, "] Error response from worke, code is ").concat(t.code, ", msg is ").concat(t.msg)), this._uploadTimer || (this._uploadTimer = window.setTimeout(() => {
            Pg.reportApiInvoke(this._connectInfo.sid || null, {
              name: _f.IMAGE_MODERATION_UPLOAD,
              options: [this._uploadFailedNum, this._uploadNum, t.code],
              tag: Ef.TRACER
            }).onError(new SE(fE.IMAGE_MODERATION_UPLOAD_FAILED, t.msg)), this._uploadTimer = null;
          }, GE("IMAGE_MODERATION_UPLOAD_REPORT_INTERVAL"))));
        } else OE.error("[".concat(this._moderationId, "] Unexpected message type from worker"));
      }), this._workerConnection.on(Hf.WILL_RECONNECT, (e, t) => {
        "recover" === e && t(e), t("tryNext");
      }), this._workerConnection.on(Hf.REQUEST_NEW_URLS, (e, t) => {
        this.requestAP(this._connectInfo, this._cancelTokenSource.token, this._retryConfig).then(e).catch(t);
      });
    }
    static intToLong(e) {
      return {
        low: e |= 0,
        high: e >> 31,
        unsigned: e >= 0
      };
    }
    async requestToInspectImage() {
      const e = oC(this, HS.CLIENT_LOCAL_VIDEO_TRACK),
        t = {
          appId: this._connectInfo.appId,
          cname: this._connectInfo.cname,
          cid: this._connectInfo.cid,
          sid: this._connectInfo.sid,
          uid: this._connectInfo.uid,
          vid: this._connectInfo.vid
        };
      if (e) {
        if (!e.isPlaying) return void (GE("SHOW_IMAGE_MODERATION_WORKER_MESSAGE") && OE.debug("Only the track being played can be inspected"));
        this._sequence++;
        const i = await this.generateRequestData(e, t);
        this._workerConnection.sendMessage(i, !0, !0);
      } else GE("SHOW_IMAGE_MODERATION_WORKER_MESSAGE") && OE.debug("Only the track being published can be inspected");
    }
    async generateRequestData(e, t) {
      let {
        appId: i,
        cname: n,
        cid: r,
        vid: o,
        sid: s,
        uid: a
      } = t;
      const c = Date.now(),
        d = await e.getCurrentFrameImage("image/jpeg", this.quality),
        u = await hw(d, i, n),
        l = this._sequence + "-" + r + "-" + a + "-" + c + "-" + ZI(12, ""),
        h = {
          appId: i,
          cid: r,
          cname: n,
          deviceId: "",
          elapse: Jw.intToLong(Number(c - this._moderationStartTime)),
          fileSize: d.buffer.byteLength,
          height: d.height,
          width: d.width,
          jpg: u,
          networkType: 6,
          osType: 7,
          requestId: l,
          sdkVersion: "4.18.2",
          sequence: this._sequence,
          sid: s,
          timestamp: Yw(c),
          uid: a,
          vid: o,
          service: this._moderationMode,
          ticket: this._ticket
        },
        p = mw(h);
      if (p.byteLength < this._workerMessageLengthLimit) {
        if (GE("SHOW_IMAGE_MODERATION_WORKER_MESSAGE")) {
          const e = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2 ? qw(Object(i), !0).forEach(function (t) {
                _p(e, t, i[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : qw(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
            }
            return e;
          }({}, h);
          delete e.jpg, OE.debug("[".concat(this._moderationId, "] Request message for worker of image moderation service: "), JSON.stringify(e));
        }
        return p;
      }
      {
        const t = this.quality * this._qualityRatio;
        return this.quality = t, await this.generateRequestData(e, {
          appId: i,
          cname: n,
          cid: r,
          vid: o,
          sid: s,
          uid: a
        });
      }
    }
    close() {
      this._cancelTokenSource.cancel(), this._cancelTokenSource = pE.CancelToken.source(), this._workerConnection && this._workerConnection.close(), this._moderationTimer && window.clearInterval(this._moderationTimer), this._moderationTimer = null, this._uploadTimer && window.clearTimeout(this._uploadTimer), this._uploadTimer = null, this.connectionState = WS.CLOSED, this.emit(HS.STATE_CHANGE, KS.CLOSED);
    }
  }
  var Xw, zw, Qw, Zw, $w, eD, tD, iD, nD, rD, oD, sD, aD, cD, dD, uD, lD, hD, pD, _D, ED, mD, fD, SD, TD, gD, RD, ID, CD, vD, yD, AD, OD, ND, bD, wD, DD, PD, LD, kD;
  function MD(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function UD(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? MD(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : MD(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  let xD = (Xw = Dg(), zw = Dg({
    argsMap: (e, t) => (Array.isArray(t) || (t = [t]), t.map(e => e ? Object(e).toString() : "null"))
  }), Qw = Dg({
    argsMap: (e, t) => (t || (t = []), Array.isArray(t) || (t = [t]), t.map(e => e.getTrackId()))
  }), Zw = Dg({
    argsMap: (e, t, i) => [t.uid, i]
  }), $w = Dg({
    argsMap: (e, t) => t.map(e => {
      let {
        user: t,
        mediaType: i
      } = e;
      return [null == t ? void 0 : t.uid, i];
    })
  }), eD = Dg({
    argsMap: (e, t, i) => [t.uid, i]
  }), tD = Dg({
    argsMap: (e, t) => t.map(e => {
      let {
        user: t,
        mediaType: i
      } = e;
      return {
        uid: null == t ? void 0 : t.uid,
        mediaType: i
      };
    })
  }), iD = Dg(), nD = Dg(), rD = Dg(), oD = Dg(), sD = Dg(), aD = Dg(), cD = Dg(), dD = Dg(), uD = Dg(), lD = Dg(), hD = Dg(), pD = Dg(), _D = Dg(), ED = Dg(), mD = Dg({
    argsMap: (e, t) => [t]
  }), fD = Dg(), SD = Dg(), TD = Dg(), gD = Dg(), RD = Dg(), ID = Dg(), CD = Dg(), vD = Dg(), yD = Dg(), AD = Dg(), OD = Dg({
    argsMap: (e, t) => (Array.isArray(t) || (t = [t]), [JSON.stringify(t)])
  }), ND = Dg(), bD = Dg(), wD = Dg(), DD = Dg(), PD = Dg({
    reportResult: !0
  }), LD = Dg(), ag((kD = class extends EE {
    get connectionState() {
      return this._gateway.state;
    }
    get remoteUsers() {
      return this._users;
    }
    get localTracks() {
      return this._p2pChannel.getAllTracks(!0);
    }
    get uid() {
      return this._uid;
    }
    get channelName() {
      return this._channelName;
    }
    get mode() {
      return this._config.mode;
    }
    get role() {
      var e;
      return (null === (e = this._config) || void 0 === e ? void 0 : e.role) || "audience";
    }
    get codec() {
      return this._config.codec;
    }
    get audioCodec() {
      return this._config.audioCodec || "opus";
    }
    get isStringUID() {
      return !!this._joinInfo && !!this._joinInfo.stringUid;
    }
    get __className__() {
      return "Client";
    }
    constructor(e) {
      let t;
      if (super(), _p(this, "store", void 0), _p(this, "_uid", void 0), _p(this, "_channelName", void 0), _p(this, "_uintUid", void 0), _p(this, "_users", []), _p(this, "_config", void 0), _p(this, "_clientId", void 0), _p(this, "_appId", void 0), _p(this, "_sessionId", null), _p(this, "_key", void 0), _p(this, "_joinInfo", void 0), _p(this, "_gateway", void 0), _p(this, "_statsCollector", void 0), _p(this, "_configDistribute", void 0), _p(this, "_leaveMutex", new Ug("client-leave")), _p(this, "_publishMutex", new Ug("client-publish")), _p(this, "_renewTokenMutex", new Ug("client-renewtoken")), _p(this, "_subscribeMutex", new Ug("client-subscribe")), _p(this, "_encryptionMode", "none"), _p(this, "_encryptionSecret", null), _p(this, "_encryptionSalt", null), _p(this, "_proxyServer", void 0), _p(this, "_turnServer", {
        servers: [],
        mode: "auto"
      }), _p(this, "_cloudProxyServerMode", "disabled"), _p(this, "_isDualStreamEnabled", !1), _p(this, "_defaultStreamFallbackType", void 0), _p(this, "_lowStreamParameter", void 0), _p(this, "_streamFallbackTypeCacheMap", new Map()), _p(this, "_remoteStreamTypeCacheMap", new Map()), _p(this, "_axiosCancelSource", pE.CancelToken.source()), _p(this, "_audioVolumeIndicationInterval", void 0), _p(this, "_networkQualityInterval", void 0), _p(this, "_userOfflineTimeout", void 0), _p(this, "_streamRemovedTimeout", void 0), _p(this, "_injectStreamingClient", void 0), _p(this, "_liveTranscodeStreamingClient", void 0), _p(this, "_liveRawStreamingClient", void 0), _p(this, "_channelMediaRelayClient", void 0), _p(this, "_networkQualitySensitivity", "normal"), _p(this, "_p2pChannel", void 0), _p(this, "_useLocalAccessPoint", !1), _p(this, "_setLocalAPVersion", void 0), _p(this, "_joinAndNotLeaveYet", !1), _p(this, "_numberOfJoinCount", 0), _p(this, "_remoteDefaultVideoStreamType", void 0), _p(this, "_inspect", void 0), _p(this, "_moderation", void 0), _p(this, "_license", void 0), _p(this, "_handleLocalTrackEnable", (e, t, i) => {
        this.publish(e, !1).then(t).catch(i);
      }), _p(this, "_handleLocalTrackDisable", (e, t, i) => {
        this.unpublish(e).then(t).catch(i);
      }), _p(this, "_handleUserOnline", e => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(e.uid, this.channelName)) return void OE.debug("[".concat(e.uid, "] will be ignored in local"));
        this.isStringUID && "string" != typeof e.uid && OE.error("[".concat(this._clientId, "] StringUID is Mixed with UintUID"));
        const t = this._users.find(t => t.uid === e.uid);
        if (t) t._trust_in_room_ = !0;else {
          const t = new yy(e.uid, e.uint_id || e.uid);
          this._users.push(t), OE.debug("[".concat(this._clientId, "] user online"), e.uid), this.safeEmit(yf.USER_JOINED, t);
        }
      }), _p(this, "_handleUserOffline", e => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(e.uid, this.channelName)) return;
        const t = this._users.find(t => t.uid === e.uid);
        t && (this._handleRemoveStream(e), aC(this._users, t), this._remoteStreamTypeCacheMap.delete(t.uid), this._streamFallbackTypeCacheMap.delete(t.uid), OE.debug("[".concat(this._clientId, "] user offline"), e.uid, "reason:", e.reason), this.safeEmit(yf.USER_LEAVED, t, e.reason));
      }), _p(this, "_handleAddAudioOrVideoStream", (e, t, i, n, r, o, s) => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(t, this.channelName)) return;
        const a = this._users.find(e => e.uid === t);
        if (!a) return void OE.error("[".concat(this._clientId, "] can not find target user!(on_add_stream)"));
        OE.debug("[".concat(this._clientId, "] stream added with uid ").concat(t, ", type ").concat(e)), this.store.subscribe(a.uid, e, void 0, void 0, void 0, Date.now());
        const c = "audio" === e ? a.hasAudio : a.hasVideo;
        a._uintid || (a._uintid = r || t), "audio" === e ? a._trust_audio_stream_added_state_ = !0 : a._trust_video_stream_added_state_ = !0, "audio" === e ? (a._audio_added_ = !0, void 0 !== i && (a._audioSSRC = i), void 0 !== n && (a._cname = n), o && (a._audioOrtc = o)) : (a._video_added_ = !0, void 0 !== i && (a._videoSSRC = i), void 0 !== n && (a._cname = n), void 0 !== s && (a._rtxSsrcId = s), o && (a._videoOrtc = o)), ("audio" === e ? a.hasAudio : a.hasVideo) && !c && (OE.info("[".concat(this._clientId, "] remote user ").concat(a.uid, " published ").concat(e)), this.safeEmit(yf.USER_PUBLISHED, a, e)), "video" === e ? Pg.onGatewayStream(this._sessionId, uf.ON_ADD_VIDEO_STREAM, lf.ON_ADD_VIDEO_STREAM, {
          peer: r || t
        }) : Pg.onGatewayStream(this._sessionId, uf.ON_ADD_AUDIO_STREAM, lf.ON_ADD_AUDIO_STREAM, {
          peer: r || t
        }), this._p2pChannel.remoteMediaSsrcChanged(a, e, i).then(t => {
          if (t) return OE.debug("[".concat(this._clientId, "] resubscribe ").concat(e, " for user ").concat(a.uid, " after rejoin because SSRC id changed.")), this._p2pChannel.unsubscribe(a, e, !0).then(() => this._subscribe(a, e, !0).catch(e => {
            OE.error("[".concat(this._clientId, "] resubscribe error"), e.toString());
          }));
        }), this._p2pChannel.hasPendingRemoteMedia(a, e) && (OE.debug("[".concat(this._clientId, "] resubscribe ").concat(e, " for user ").concat(a.uid, " after reconnect.")), this._subscribe(a, e, !0).catch(e => {
          OE.error("[".concat(this._clientId, "] resubscribe error"), e.toString());
        }));
      }), _p(this, "_handleRemoveStream", e => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(e.uid, this.channelName)) return;
        const t = this._users.find(t => t.uid === e.uid);
        if (!t) return void OE.warning("[".concat(this._clientId, "] can not find target user!(on_remove_stream)"));
        OE.debug("[".concat(this._clientId, "] stream removed with uid ").concat(e.uid));
        let i = () => {};
        t.hasAudio && t.hasVideo ? i = () => {
          OE.info("[".concat(this._clientId, "] remote user ").concat(t.uid, " unpublished audio track")), this.safeEmit(yf.USER_UNPUBLISHED, t, "audio"), OE.info("[".concat(this._clientId, "] remote user ").concat(t.uid, " unpublished video track")), this.safeEmit(yf.USER_UNPUBLISHED, t, "video");
        } : t.hasVideo ? i = () => {
          OE.info("[".concat(this._clientId, "] remote user ").concat(t.uid, " unpublished video track")), this.safeEmit(yf.USER_UNPUBLISHED, t, "video");
        } : t.hasAudio && (i = () => {
          OE.info("[".concat(this._clientId, "] remote user ").concat(t.uid, " unpublished audio track")), this.safeEmit(yf.USER_UNPUBLISHED, t, "audio");
        }), t._trust_audio_stream_added_state_ = !0, t._trust_video_stream_added_state_ = !0, t._audio_added_ = !1, t._video_added_ = !1, this._p2pChannel.unsubscribe(t).then(e => {
          if (e) return this._gateway.unsubscribe(e, t.uid);
        }), t._audioSSRC = void 0, t._videoSSRC = void 0, t._audioOrtc = void 0, t._videoOrtc = void 0, t._rtxSsrcId = void 0, Pg.onGatewayStream(this._sessionId, uf.ON_REMOVE_STREAM, lf.ON_REMOVE_STREAM, {
          peer: e.uint_id || e.uid
        }), i();
      }), _p(this, "_handleSetStreamLocalEnable", (e, t, i) => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(t, this.channelName)) return;
        const n = this._users.find(e => e.uid === t);
        if (!n) return void OE.error("[".concat(this._clientId, "] can not find target user!(disable_local)"));
        OE.debug("[".concat(this._clientId, "] local ").concat(e, " ").concat(i ? "enabled" : "disabled", " with uid ").concat(t));
        const r = "audio" === e ? n.hasAudio : n.hasVideo;
        if ("audio" === e) {
          n._trust_audio_enabled_state_ = !0;
          const e = n._audio_enabled_;
          if (n._audio_enabled_ = i, n._audio_enabled_ === e) return;
          {
            const e = n._audio_enabled_ ? "enable-local-audio" : "disable-local-audio";
            OE.debug("[".concat(this._clientId, "] user-info-updated, uid: ").concat(t, ", msg: ").concat(e)), this.safeEmit(yf.USER_INFO_UPDATED, t, e);
          }
        } else {
          n._trust_video_enabled_state_ = !0;
          const e = n._video_enabled_;
          if (n._video_enabled_ = i, n._video_enabled_ === e) return;
          {
            const e = n._video_enabled_ ? "enable-local-video" : "disable-local-video";
            OE.debug("[".concat(this._clientId, "] user-info-update, uid: ").concat(t, ", msg: ").concat(e)), this.safeEmit(yf.USER_INFO_UPDATED, t, e);
          }
        }
        const o = "audio" === e ? n.hasAudio : n.hasVideo;
        return r !== o ? !r && o ? (OE.info("[".concat(this._clientId, "] remote user ").concat(t, " published ").concat(e)), void this.safeEmit(yf.USER_PUBLISHED, n, e)) : ("video" === e && n._videoTrack && n._videoTrack._destroy(), "audio" === e && n._audioTrack, this._p2pChannel.muteRemote(n, e), OE.info("[".concat(this._clientId, "] remote user ").concat(t, " unpublished ").concat(e)), void this.safeEmit(yf.USER_UNPUBLISHED, n, e)) : void 0;
      }), _p(this, "_handleMuteStream", (e, t, i) => {
        if (GE("BLOCK_LOCAL_CLIENT") && ZE(e, this.channelName)) return;
        OE.debug("[".concat(this._clientId, "] receive mute message"), e, t, i);
        const n = this._users.find(t => t.uid === e);
        if (!n) return void OE.warning("[".concat(this._clientId, "] can not find remote user, ignore mute event, uid: ").concat(e));
        const r = "audio" === t ? n.hasAudio : n.hasVideo;
        if ("audio" === t) {
          n._trust_audio_mute_state_ = !0;
          const t = n._audio_muted_;
          if (n._audio_muted_ = i, n._audio_muted_ === t) return;
          {
            const t = n._audio_muted_ ? "mute-audio" : "unmute-audio";
            OE.debug("[".concat(this._clientId, "] user-info-update, uid: ").concat(e, ", msg: ").concat(t)), this.safeEmit(yf.USER_INFO_UPDATED, e, t);
          }
        } else {
          n._trust_video_mute_state_ = !0;
          const t = n._video_muted_;
          if (n._video_muted_ = i, n._video_muted_ === t) return;
          {
            const t = n._video_muted_ ? "mute-video" : "unmute-video";
            OE.debug("[".concat(this._clientId, "] user-info-update, uid: ").concat(e, ", msg: ").concat(t)), this.safeEmit(yf.USER_INFO_UPDATED, e, t);
          }
        }
        const o = "audio" === t ? n.hasAudio : n.hasVideo;
        if (r !== o) {
          if (!r && o) {
            return ("audio" === t ? n._audioSSRC : n._videoSSRC) ? (OE.info("[".concat(this._clientId, "] remote user ").concat(e, " published ").concat(t)), void this.safeEmit(yf.USER_PUBLISHED, n, t)) : void OE.warning("[".concat(this._clientId, "] remote user ").concat(e, " receive ").concat(t, " unmute message  before add stream message, ").concat(t, " SSRC doesn't exist yet."));
          }
          "video" === t && n._videoTrack && n._videoTrack._destroy(), "audio" === t && n._audioTrack, this._p2pChannel.muteRemote(n, t), OE.info("[".concat(this._clientId, "] remote user ").concat(e, " unpublished ").concat(t)), this.safeEmit(yf.USER_UNPUBLISHED, n, t);
        }
      }), _p(this, "_handleP2PLost", async e => {
        OE.debug("[".concat(this._clientId, "] receive p2p lost"), e), parseInt(e.p2pid, 10) === this.store.p2pId ? await this._p2pChannel.requestReconnect() : OE.warning("[".concat(this._clientId, "] P2PLost stream not found"), e);
      }), _p(this, "_handleTokenWillExpire", () => {
        OE.debug("[".concat(this._clientId, "] received message onTokenPrivilegeWillExpire")), this.safeEmit(yf.ON_TOKEN_PRIVILEGE_WILL_EXPIRE);
      }), _p(this, "_handleBeforeUnload", e => {
        "beforeunload" === e.type && void 0 !== e.returnValue && "" !== e.returnValue || (this.leave(), OE.info("[".concat(this._clientId, "] auto leave onbeforeunload or pagehide")));
      }), _p(this, "_handleUpdateNetworkQuality", () => {
        if ("normal" === this._networkQualitySensitivity) return;
        if (navigator && void 0 !== navigator.onLine && !navigator.onLine) return void this.safeEmit(yf.NETWORK_QUALITY, {
          downlinkNetworkQuality: 6,
          uplinkNetworkQuality: 6
        });
        const e = {
          downlinkNetworkQuality: 0,
          uplinkNetworkQuality: 0
        };
        e.uplinkNetworkQuality = this._p2pChannel.getUplinkNetworkQuality(), e.downlinkNetworkQuality = this._p2pChannel.getDownlinkNetworkQuality(), this.safeEmit(yf.NETWORK_QUALITY, e);
      }), this._config = e, this._clientId = ZI(5, "client-"), this.store = new kb(e.codec, e.audioCodec, e.mode, this._clientId), this.store.clientCreated(), e.proxyServer && this.setProxyServer(e.proxyServer, !0), e.turnServer && this.setTurnServer(e.turnServer, !0), OE.info("[".concat(this._clientId, "] Initializing AgoraRTC client v").concat(bE, " build: ").concat(NE, ", mode: ").concat(this.mode, ", codec: ").concat(this.codec)), e.clientRoleOptions) try {
        Vf(e.clientRoleOptions), t = Object.assign({}, e.clientRoleOptions);
      } catch (e) {
        OE.warning("[".concat(this._clientId, "] ").concat(e.toString()));
      }
      this._statsCollector = new kI(this.store), this._statsCollector.onStatsException = (e, t, i) => {
        OE.debug("[".concat(this._clientId, "] receive exception msg, code: ").concat(e, ", msg: ").concat(t, ", uid: ").concat(i)), this.safeEmit(yf.EXCEPTION, {
          code: e,
          msg: t,
          uid: i
        });
      }, this._statsCollector.onUploadPublishDuration = (e, t, i, n) => {
        const r = this._users.find(t => t.uid === e);
        r && Pg.peerPublishStatus(this._sessionId, {
          subscribeElapse: n,
          audioPublishDuration: t,
          videoPublishDuration: i,
          peer: r._uintid
        });
      }, this.store.useDataChannel = JS().supportDataChannel && GE("SIGNAL_CHANNEL"), this._gateway = new VC(this.store, {
        clientId: this._clientId,
        mode: this.mode,
        codec: this.codec,
        websocketRetryConfig: e.websocketRetryConfig || TE,
        httpRetryConfig: e.httpRetryConfig || TE,
        forceWaitGatewayResponse: void 0 === e.forceWaitGatewayResponse || e.forceWaitGatewayResponse,
        statsCollector: this._statsCollector,
        role: e.role,
        clientRoleOptions: t
      }), this._configDistribute = new fv(), this._p2pChannel = new bb(this.store, this._statsCollector), this._handleP2PChannelEvents(), this._handleGatewayEvents(), this._handleGatewaySignalEvents();
    }
    async join(e, t, i, n, r) {
      const o = ++this._numberOfJoinCount;
      this.store.joinStart(), n && (this.store.uid = n);
      const s = Ub(),
        a = xb() ? window.isSecureContext : "Browser Not Support";
      if (!xb() && !s || !window.isSecureContext) {
        const e = "The website must be running in a secure context (About secure context: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts ), otherwise the media collection will be restricted by the browser";
        OE.warning(e);
      }
      const c = $I();
      "DISCONNECTED" === this.connectionState && (this.store.avoidJoinStart = Math.round(Date.now()), OE.debug("[".concat(this._clientId, "] set avoidJoinStart to ").concat(this.store.avoidJoinStart)));
      const d = Pg.reportApiInvoke(c, {
        name: _f.JOIN,
        options: [e, t, i, n],
        states: {
          isHttps: s,
          isSecureContext: a
        },
        tag: Ef.TRACER
      });
      Pg.setAppId(e);
      try {
        if (!i && null !== i) throw new SE(fE.INVALID_PARAMS, "Invalid token: ".concat(i, ". If you don not use token, set it to null"));
        i && Xm(i, "token", 1, 2047), Xm(e, "appid", 1, 2047), Qm(t), n && Zm(n), r && Xm(r, "optionalInfo", 1, 2047);
      } catch (e) {
        throw d.onError(e), e;
      }
      if (OE.info("[".concat(this._clientId, "] start join channel ").concat(t, ", join number: ").concat(o)), this._leaveMutex.isLocked) {
        OE.debug("[".concat(this._clientId, "] join: waiting leave operation"));
        (await this._leaveMutex.lock())(), OE.debug("[".concat(this._clientId, "] join: continue"));
      }
      if (this._joinAndNotLeaveYet = !0, "DISCONNECTED" !== this.connectionState) {
        const e = new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Client already in connecting/connected state"));
        throw d.onError(e), e;
      }
      this._sessionId || (this._sessionId = c, this.store.sessionId = this._sessionId), this._gateway.state = "CONNECTING";
      const u = UD({
        clientId: this._clientId,
        appId: e,
        sid: this._sessionId,
        cname: t,
        uid: "string" != typeof n ? n : null,
        turnServer: this._turnServer,
        proxyServer: this._proxyServer,
        token: i || e,
        cloudProxyServer: this._cloudProxyServerMode,
        optionalInfo: r,
        license: this._license,
        useLocalAccessPoint: this._useLocalAccessPoint
      }, void 0 !== this._remoteDefaultVideoStreamType && {
        defaultVideoStream: this._remoteDefaultVideoStreamType
      });
      if (this._useLocalAccessPoint && (u.setLocalAPVersion = this._setLocalAPVersion), "string" == typeof n && (u.stringUid = n, this._uintUid ? (u.uid = this._uintUid, this._uintUid = void 0) : u.uid = 0), "none" !== this._encryptionMode && this._encryptionSecret) {
        if (u.aesmode = this._encryptionMode, u.aespassword = await (async e => {
          const t = pC("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCMnXAHkKIGAM+x4N22gCI+Wyu\nSTM9ztkT3uYslTT2PuKmZfPzhH6kVdO7PTjGCOZnAsyb3oTtWat0KcxQ4jxvqQV+\nHvYl3iI1Yd4vl2c3qRMJPLtRDfNxa2Mcxgq7e9aEUibzdd0st+OJAy3tOj/Y0aVy\nxQiYDz3vqa6bP29adwIDAQAB"),
            i = await window.crypto.subtle.importKey("spki", t, {
              name: "RSA-OAEP",
              hash: "SHA-256"
            }, !0, ["encrypt"]),
            n = Ag(e),
            r = await window.crypto.subtle.encrypt({
              name: "RSA-OAEP"
            }, i, n);
          return _C(new Uint8Array(r));
        })(this._encryptionSecret), !this._joinAndNotLeaveYet) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Client already left"));
        this._encryptionSalt && (u.aessalt = this._encryptionSalt);
      }
      this._startSession(this._sessionId, {
        channel: t,
        appId: e
      });
      const l = this._sessionId;
      setTimeout(() => {
        "CONNECTING" === this.connectionState && l === this._sessionId && Pg.joinChannelTimeout(this._sessionId, 5);
      }, 5000);
      try {
        let n;
        const r = u.cloudProxyServer;
        if (["proxy3", "proxy4", "proxy5"].includes(r)) {
          const e = GE("PROXY_SERVER_TYPE3");
          Array.isArray(e) ? u.proxyServer = e[0] : u.proxyServer = e;
        }
        if (Pg.setProxyServer(u.proxyServer), OE.setProxyServer(u.proxyServer), this.store.requestAPStart(), u.stringUid && !u.uid) {
          const e = await dv(u.stringUid, u, this._axiosCancelSource.token, this._config.httpRetryConfig || TE, this.store);
          OE.debug("[".concat(this._clientId, "] getUserAccount Success ").concat(u.stringUid, " => ").concat(e)), u.uid = e, n = await cv(u, this._axiosCancelSource.token, this._config.httpRetryConfig || TE, !0, this.store);
        } else n = await cv(u, this._axiosCancelSource.token, this._config.httpRetryConfig || TE, !0, this.store);
        if (!this._joinAndNotLeaveYet) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Client already left"));
        this.store.requestAPEnd(), setTimeout(() => {
          this._configDistribute.startGetConfigDistribute(u, this._axiosCancelSource.token), this._configDistribute.on(vS.UPDATE_BITRATE_LIMIT, e => {
            this._p2pChannel.updateBitrateLimit(e);
          });
        }, 0), this._key = i || e;
        const o = n.gatewayInfo;
        this._joinInfo = UD(UD({}, u), {}, {
          cid: o.cid,
          uid: u.uid ? u.uid : o.uid,
          vid: o.vid,
          apResponse: o.res,
          uni_lbs_ip: o.uni_lbs_ip,
          gatewayAddrs: o.gatewayAddrs
        });
        const s = await this._joinGateway();
        if (!this._joinAndNotLeaveYet) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Client already left"));
        d.onSuccess(s), this._appId = e, this._channelName = u.cname, this._uid = s, this.store.uid = s, setTimeout(() => {
          this._networkQualityInterval && window.clearInterval(this._networkQualityInterval), this._networkQualityInterval = window.setInterval(this._handleUpdateNetworkQuality, 2000), window.addEventListener(Hh() ? "beforeunload" : "pagehide", this._handleBeforeUnload);
        }, 0);
        const a = u.stringUid ? "string uid: ".concat(u.stringUid, ",uid: ").concat(u.uid) : "uid: ".concat(this._uid);
        return OE.info("[".concat(this._clientId, "] Joining channel success: channel: ").concat(t, ",").concat(a)), setTimeout(() => {
          OE.startUpload();
        }, 5000), this.store.joinEnd(), h = this, zE.includes(h) || zE.push(h), s;
      } catch (e) {
        const t = Array.isArray(e) ? e[0] : e;
        throw t && t.code === fE.OPERATION_ABORTED ? OE.warning("[".concat(this._clientId, "] join number: ").concat(o, ", Joining channel failed, rollback"), t) : OE.error("[".concat(this._clientId, "] join number: ").concat(o, ", Joining channel failed, rollback"), t), t.code !== fE.OPERATION_ABORTED && this._numberOfJoinCount === o && (this._gateway.state = "DISCONNECTED", this._reset()), d.onError(t), t;
      }
      var h;
    }
    _joinGateway() {
      if (!this._joinInfo || !this._key) throw new SE(fE.INVALID_OPERATION);
      return this._gateway.join(this._joinInfo, this._key, !("disabled" !== this._joinInfo.cloudProxyServer || this._joinInfo.proxyServer || !GE("JOIN_WITH_FALLBACK_SIGNAL_PROXY"))).then(e => e).catch(e => {
        if (e.code === fE.INIT_WEBSOCKET_TIMEOUT) return this._gateway.leave(!0, vf.FALLBACK), e;
        if (e.code === fE.INIT_DATACHANNEL_TIMEOUT) return this._gateway.leave(!0, vf.FALLBACK), e;
        throw e;
      }).then(e => {
        if (e instanceof SE) {
          if (e.code === fE.INIT_WEBSOCKET_TIMEOUT) {
            if (OE.info("[".concat(this._clientId, "] join timeout, fallback to proxy")), !this._joinInfo || !this._key) throw new SE(fE.INVALID_OPERATION);
            this._joinInfo.cloudProxyServer = "fallback", this._cloudProxyServerMode = "fallback", this.store.cloudProxyServerMode = "fallback";
            const e = GE("PROXY_SERVER_TYPE3");
            if (Array.isArray(e)) {
              if (this._joinInfo.apUrl) {
                const t = /^https?:\/\/(.+?)(\/.*)?$/.exec(this._joinInfo.apUrl)[1].split("."),
                  i = t.slice(t.length - 2).join(".");
                e.forEach(e => {
                  this._joinInfo && e.includes(i) && (this._joinInfo.proxyServer = e);
                }), this._joinInfo.proxyServer || (this._joinInfo.proxyServer = e[0]);
              } else this._joinInfo.proxyServer = e[0];
            } else this._joinInfo.proxyServer = e;
            const t = GE("LOG_UPLOAD_SERVER").match(/.+:(\d{1,5})$/);
            t && t[1] && "443" !== t[1] && OE.setProxyServer(this._joinInfo.proxyServer), "443" !== GE("STATS_COLLECTOR_PORT").toString() && Pg.setProxyServer(this._joinInfo.proxyServer);
            return Pg.reportApiInvoke(this._sessionId, {
              name: _f.JOIN_FALLBACK_TO_PROXY,
              options: [this._joinInfo.proxyServer],
              tag: Ef.TRACER
            }).onSuccess(), this.safeEmit(yf.JOIN_FALLBACK_TO_PROXY, this._joinInfo.proxyServer), GE("JOIN_WITH_FALLBACK_MEDIA_PROXY_FORCE") && this._joinInfo.turnServer.servers.forEach(e => {
              "forceturn" in e && (e.forceturn = !0);
            }), this._gateway.join(this._joinInfo, this._key);
          }
          if (OE.info("[".concat(this._clientId, "] join by datachannel timeout, fallback to websocket")), !this._joinInfo || !this._key) throw new SE(fE.INVALID_OPERATION);
          return Pg.reportApiInvoke(this._sessionId, {
            name: _f.DATACHANNEL_FAILBACK,
            options: [this.store.clientId],
            tag: Ef.TRACER
          }).onSuccess(), this._joinGateway();
        }
        return e;
      }).then(e => e);
    }
    async leave() {
      OE.info("[".concat(this._clientId, "] Leaving channel")), window.removeEventListener(Hh() ? "beforeunload" : "pagehide", this._handleBeforeUnload), this._reset(), function (e) {
        const t = zE.indexOf(e);
        -1 !== t && zE.splice(t, 1);
      }(this);
      const e = await this._leaveMutex.lock();
      if ("DISCONNECTED" === this.connectionState) return OE.info("[".concat(this._clientId, "] Leaving channel repeated, success")), void e();
      await this._gateway.leave("CONNECTED" !== this.connectionState), OE.info("[".concat(this._clientId, "] Leaving channel success")), this._joinAndNotLeaveYet = !1, this.store.resetJoinChannelServiceRecords(), e();
    }
    async publish(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (Array.isArray(e) || (e = [e]), 0 === e.length) throw new SE(fE.INVALID_PARAMS, "track list is empty");
      if ("audience" === this._gateway.role) throw new SE(fE.INVALID_OPERATION, "audience can not publish stream");
      for (const i of e) {
        if (!(i instanceof Vg)) throw new SE(fE.INVALID_PARAMS, "parameter is not local track");
        if (!i._enabled && t) throw new SE(fE.TRACK_IS_DISABLED, "can not publish a disabled track: ".concat(i.getTrackId()));
      }
      OE.info("[".concat(this._clientId, "] Publishing tracks, id ").concat(e.map(e => "".concat(e.getTrackId(), " "))));
      const i = await this._publishMutex.lock();
      await this._configDistribute.awaitConfigDistributeComplete(), t && e.forEach(e => {
        const t = this._configDistribute.getBitrateLimit();
        e instanceof Cy && t && e.setBitrateLimit(t.uplink);
      });
      try {
        await this._publishHighStream(e), OE.info("[".concat(this._clientId, "] Publish success, id ").concat(e.map(e => "".concat(e.getTrackId(), " "))));
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] publish error"), e.toString()), e;
      } finally {
        i();
      }
    }
    async unpublish(e) {
      if (!this._joinInfo || void 0 === this._uid) throw new SE(fE.INVALID_OPERATION, "Can't unpublish stream, haven't joined yet!");
      e ? Array.isArray(e) || (e = [e]) : e = this._p2pChannel.getAllTracks(!0), OE.info("[".concat(this._clientId, "] Unpublish tracks, tracks ").concat(e.map(e => "".concat(e.getTrackId(), " ")), " "));
      const t = await this._publishMutex.lock();
      try {
        const i = await this._p2pChannel.unpublish(e);
        i && (await this._gateway.unpublish(i, this._uid)), OE.info("[".concat(this._clientId, "] Unpublish success,tracks ").concat(e.map(e => "".concat(e.getTrackId()))));
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] unpublish error"), e.toString()), e;
      } finally {
        t && t();
      }
    }
    async subscribe(e, t) {
      return this._subscribe(e, t);
    }
    async _subscribe(e, t, i) {
      if (Ym(t, "mediaType", ["audio", "video"]), !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "Can't subscribe stream, not joined");
      if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Can't subscribe stream in ".concat(this.connectionState, " state"));
      if (!this._users.find(t => t === e)) {
        const t = new SE(fE.INVALID_REMOTE_USER, "user is not in the channel");
        throw OE.error("[".concat(this._clientId, "] can not subscribe ").concat(e.uid, ", this user is not in the channel")), t;
      }
      if (!e.hasAudio && !e.hasVideo) {
        const t = new SE(fE.INVALID_REMOTE_USER, "user is not published");
        throw OE.error("[".concat(this._clientId, "] can not subscribe ").concat(e.uid, ", user is not published")), t;
      }
      if (!(i || ("audio" !== t || e.hasAudio && void 0 !== e._audioSSRC) && ("video" !== t || e.hasVideo && void 0 !== e._videoSSRC))) {
        const i = new SE(fE.REMOTE_USER_IS_NOT_PUBLISHED);
        throw OE.error("[".concat(this._clientId, "] can not subscribe ").concat(e.uid, " with mediaType ").concat(t, ", remote track is not published")), i;
      }
      const n = "audio" === t ? e._audioSSRC : e._videoSSRC,
        r = "audio" === t ? e._audioOrtc : e._videoOrtc,
        o = "video" === t ? e._rtxSsrcId : void 0,
        s = {
          stream_type: "audio" === t ? AS.AUDIO : AS.VIDEO,
          ssrcId: n
        },
        a = await this._subscribeMutex.lock();
      OE.info("[".concat(this._clientId, "] subscribe user ").concat(e.uid, ", mediaType: ").concat(t));
      try {
        if (await this._p2pChannel.hasRemoteMediaWithLock(e, t)) await this._p2pChannel.unmuteRemote(e, t);else try {
          DI.markSubscribeStart(this.store.clientId, n), this.store.subscribe(e.uid, t, Date.now()), await this._p2pChannel.subscribe(e, t, n, o, r);
          try {
            await this._gateway.subscribe(e.uid, s, !0);
          } catch (i) {
            if ((null == i ? void 0 : i.code) !== fE.WS_ABORT) throw await this._p2pChannel.unsubscribe(e, t), i;
            await this._p2pChannel.unsubscribe(e, t, !0), this._p2pChannel.setPendingRemoteMedia(e, t);
          }
          this.store.subscribe(e.uid, t, void 0, Date.now()), this._p2pChannel.reportSubscribeEvent(!0, null, e, t);
        } catch (i) {
          throw this._p2pChannel.reportSubscribeEvent(!1, null == i ? void 0 : i.code, e, t), i;
        }
        OE.info("[".concat(this._clientId, "] subscribe success user ").concat(e.uid, ", mediaType: ").concat(t)), this._defaultStreamFallbackType && this.setStreamFallbackOption(e.uid, this._defaultStreamFallbackType).catch(e => {
          OE.warning("[".concat(this._clientId, "] auto set fallback failed"), e);
        });
        const i = "audio" === t ? e._audioTrack : e._videoTrack;
        if (!i) throw new SE(fE.UNEXPECTED_ERROR, "can not find remote track in user object");
        return i;
      } catch (t) {
        throw OE.error("[".concat(this._clientId, "] subscribe user ").concat(e.uid, " error"), t), t;
      } finally {
        a();
      }
    }
    async massSubscribe(e) {
      if (zm(e, "subscribeList"), !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "Can't subscribe stream, not joined");
      if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Can't subscribe stream in ".concat(this.connectionState, " state"));
      const t = Date.now(),
        i = new Map(),
        n = await this._subscribeMutex.lock();
      OE.info("[".concat(this._clientId, "]start massSubscribe user ").concat(e.map(e => {
        let {
          user: t,
          mediaType: i
        } = e;
        return "user: ".concat(null == t ? void 0 : t.uid, ", mediaType: ").concat(i);
      }).join("; ")));
      const r = (e = [...e]).map(e => {
          let {
            user: t,
            mediaType: i
          } = e;
          return {
            user: t,
            mediaType: i
          };
        }),
        o = await this._p2pChannel.globalLock();
      try {
        var s;
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t],
            {
              user: o,
              mediaType: s
            } = n;
          if (Ym(s, "mediaType", ["audio", "video"]), !o) {
            const e = new SE(fE.INVALID_PARAMS, "user property does not exist in subscribeList item");
            throw OE.error("[".concat(this._clientId, "] user property does not exist in subscribeList item")), e;
          }
          if (!this._users.find(e => e === o)) {
            const i = new SE(fE.INVALID_REMOTE_USER, "user is not in the channel");
            OE.error("[".concat(this._clientId, "] can not massSubscribe ").concat(o.uid, ", this user is not in the channel")), r[t].error = i, e.splice(t, 1);
            continue;
          }
          if ("audio" === s && (!o.hasAudio || void 0 === o._audioSSRC) || "video" === s && (!o.hasVideo || void 0 === o._videoSSRC)) {
            const i = new SE(fE.REMOTE_USER_IS_NOT_PUBLISHED);
            OE.error("[".concat(this._clientId, "] can not subscribe ").concat(o.uid, " with mediaType ").concat(s, ", remote user is not published")), r[t].error = i, e.splice(t, 1);
            continue;
          }
          const a = cS.Video | cS.LwoVideo,
            c = i.get(o);
          if (c) {
            if ("video" === s ? c & a : c & cS.Audio) {
              e.splice(t, 1), OE.warning("[".concat(this._clientId, "] repeat massSubscribe user:").concat(o.uid, ", mediaType:").concat(s, " twice"));
              continue;
            }
            i.set(o, c | ("video" === s ? a : cS.Audio));
          } else i.set(o, "video" === s ? a : cS.Audio);
        }
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t],
            {
              user: r,
              mediaType: o
            } = n,
            s = cS.Video | cS.LwoVideo;
          if (this._p2pChannel.hasRemoteMedia(r, o)) {
            await this._p2pChannel.unmuteRemoteNoLock(r, o);
            const n = i.get(r);
            i.set(r, "video" === o ? n ^ s : n ^ cS.Audio), e.splice(t, 1);
          }
        }
        this.store.massSubscribe(e.map(e => ({
          userId: e.user.uid,
          type: e.mediaType
        })), t);
        const a = zi(s = Array.from(i.entries())).call(s, (e, t) => {
          let [i, n] = t;
          if (0 === n) return e;
          const r = {
            stream_id: i.uid,
            stream_type: n
          };
          return n & cS.Audio && (r.audio_ssrc = i._audioSSRC), n & cS.Video && (r.video_ssrc = i._videoSSRC), e.push(r), e;
        }, []);
        try {
          e.length > 0 && (await this._p2pChannel.massSubscribeNoLock(e.map(e => {
            let {
              user: t,
              mediaType: i
            } = e;
            return {
              user: t,
              mediaType: i,
              ssrcId: i === AS.VIDEO ? t._videoSSRC : t._audioSSRC,
              rtxSsrcId: i === AS.VIDEO ? t._rtxSsrcId : void 0
            };
          })));
          const i = new Map();
          if (a.length > 0) {
            const e = await this._gateway.subscribeAll(a, !0);
            ((null == e ? void 0 : e.users) || []).forEach(e => {
              let {
                stream_id: t,
                video_error_code: n,
                audio_error_code: r,
                error_code: o
              } = e;
              (n || r || o) && i.set(t, {
                video_error_code: n,
                audio_error_code: r,
                error_code: o
              });
            });
          }
          if (Array.from(i.entries()).length > 0) {
            const e = Array.from(i.entries()).map(e => {
              let t,
                [i, n] = e;
              n.error_code || n.video_error_code && n.audio_error_code ? t = void 0 : n.video_error_code ? t = AS.VIDEO : n.audio_error_code && (t = AS.AUDIO);
              return {
                user: this.remoteUsers.find(e => e.uid === i),
                mediaType: t
              };
            });
            await this._p2pChannel.massUnsubscribeNoLock(e);
          }
          for (const e of r) {
            const t = i.get(e.user.uid);
            if (t) {
              const i = t.error_code || "audio" === e.mediaType && t.audio_error_code || "video" === e.mediaType && t.video_error_code;
              if (i) {
                const t = IC(i);
                OE.error("user:".concat(e.user.uid, " mediaType:").concat(e.mediaType, " has massSubscribe error ").concat(t.desc)), e.error = new SE(fE.SUBSCRIBE_FAILED, "code ".concat(i, ": ").concat(t.desc));
              }
            }
            e.error || ("video" === e.mediaType ? e.track = e.user.videoTrack : e.track = e.user.audioTrack);
          }
          return this.store.massSubscribe(r.filter(e => !e.error).map(e => ({
            userId: e.user.uid,
            type: e.mediaType
          })), void 0, Date.now()), r.forEach(e => {
            var i;
            Pg.subscribe(this.store.sessionId, {
              succ: !!e.error,
              ec: (null === (i = e.error) || void 0 === i ? void 0 : i.code) || null,
              video: e.mediaType === AS.VIDEO,
              audio: e.mediaType === AS.AUDIO,
              peerid: e.user.uid,
              subscribeRequestid: e.mediaType === AS.VIDEO ? e.user._videoSSRC : e.user._audioSSRC,
              p2pid: this.store.p2pId,
              eventElapse: Math.floor(performance.now() - t)
            }, !0);
          }), OE.info("[".concat(this._clientId, "] massSubscribe success ").concat(e.map(e => {
            let {
              user: t,
              mediaType: i
            } = e;
            return "user: ".concat(null == t ? void 0 : t.uid, ", mediaType: ").concat(i);
          }).join("; "))), r;
        } catch (t) {
          throw await this._p2pChannel.massUnsubscribeNoLock(e), t;
        }
      } finally {
        o(), n();
      }
    }
    async unsubscribe(e, t) {
      if (t && Ym(t, "mediaType", ["audio", "video"]), !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "Can't unsubscribe stream, haven't joined yet!");
      if (!this._users.find(t => t === e)) {
        const t = new SE(fE.INVALID_REMOTE_USER, "user is not in the channel");
        throw OE.error("[".concat(this._clientId, "] can not unsubscribe ").concat(e.uid, ", user is not in the channel")), t;
      }
      OE.info("[".concat(this._clientId, "] unsubscribe uid: ").concat(e.uid, ", mediaType: ").concat(t));
      const i = await this._subscribeMutex.lock();
      try {
        const n = await this._p2pChannel.unsubscribe(e, t);
        n && (await this._gateway.unsubscribe(n, e.uid)), OE.info("[".concat(this._clientId, "] unsubscribe success uid: ").concat(e.uid, ", mediaType: ").concat(t));
      } catch (t) {
        if (t.code === fE.DISCONNECT_P2P) return void OE.warning("disconnecting p2p, abort unsubscribe request.");
        throw OE.error("[".concat(this._clientId, "] unsubscribe user ").concat(e.uid, " error"), t.toString()), t;
      } finally {
        i();
      }
    }
    async massUnsubscribe(e) {
      if (zm(e, "unsubscribeList"), !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "Can't unsubscribeAll stream, haven't joined yet!");
      OE.info("[".concat(this._clientId, "] start massUnsubscribe ").concat(e.map(e => {
        let {
          user: t,
          mediaType: i
        } = e;
        return "user: ".concat(null == t ? void 0 : t.uid, ", mediaType: ").concat(i, ";");
      }).join())), e = [...e];
      const t = new Map();
      for (let i = e.length - 1; i >= 0; i--) {
        const {
          user: n,
          mediaType: r
        } = e[i];
        if (!n) {
          const e = new SE(fE.INVALID_PARAMS, "user property does not exist in unsubscribeList item");
          throw OE.error("[".concat(this._clientId, "] user property does not exist in unsubscribeList item")), e;
        }
        Ym(r, "mediaType", ["video", "audio", void 0]);
        if (!this._users.find(e => e === n)) {
          OE.warning("[".concat(this._clientId, "] can not unsubscribe ").concat(n.uid, ", user is not in the channel")), e.splice(i, 1);
          continue;
        }
        const o = cS.Video | cS.LwoVideo;
        if (t.has(n)) {
          const s = t.get(n);
          let a;
          switch (r) {
            case "video":
              a = s & o;
              break;
            case "audio":
              a = s & cS.Audio;
              break;
            default:
              a = s & (cS.Audio | o);
          }
          if (a) {
            OE.warning("[".concat(this._clientId, "] repeat massUnsubscribe user:").concat(n.uid, ",mediaType:").concat(r, " twice.")), e.splice(i, 1);
            continue;
          }
          r ? "audio" === r ? t.set(n, s | cS.Audio) : "video" === r && t.set(n, s | o) : t.set(n, s | cS.Audio | o);
        } else r ? "audio" === r ? t.set(n, cS.Audio) : "video" === r && t.set(n, o) : t.set(n, cS.Audio | o);
      }
      try {
        const t = await this._p2pChannel.massUnsubscribe(e);
        t && (await this._gateway.massUnsubscribe(t)), OE.info("[".concat(this._clientId, "] massUnsubscribe success ").concat(e.map(e => {
          let {
            user: t,
            mediaType: i
          } = e;
          return "user: ".concat(null == t ? void 0 : t.uid, ", mediaType: ").concat(i, ";");
        }).join()));
      } catch (e) {
        if (e.code === fE.DISCONNECT_P2P) return void OE.warning("[".concat(this._clientId, "] disconnecting p2p, abort unsubscribe request."));
        throw OE.error("[".concat(this._clientId, "] massUnsubscribe error"), e.toString()), e;
      }
    }
    setLowStreamParameter(e) {
      !function (e) {
        if (!e) throw new SE(fE.INVALID_PARAMS);
        $m(e.width) || Jm(e.width, "streamParameter.width"), $m(e.height) || Jm(e.height, "streamParameter.height"), $m(e.framerate) || Jm(e.framerate, "streamParameter.framerate"), $m(e.bitrate) || qm(e.bitrate, "streamParameter.bitrate");
      }(e), (!e.width && e.height || e.width && !e.height) && OE.warning("[".concat(this._clientId, "] The width and height parameters take effect only when both are set")), OE.info("[".concat(this._clientId, "] set low stream parameter to"), JSON.stringify(e));
      const t = this._configDistribute.getLowStreamConfigDistribute();
      t && t.bitrate && e.bitrate && t.bitrate < e.bitrate && (e.bitrate = t.bitrate), this._lowStreamParameter = e;
    }
    async enableDualStream() {
      if (!JS().supportDualStream) throw Pg.streamSwitch(this._sessionId, {
        lts: Date.now(),
        isdual: !0,
        succ: !1
      }), new SE(fE.NOT_SUPPORTED, "Your browser is not support dual stream");
      if (this._isDualStreamEnabled) throw new SE(fE.INVALID_OPERATION, "Dual stream is already enabled");
      if (this._p2pChannel.canPublishLowStream()) try {
        await this._publishLowStream();
      } catch (e) {
        throw Pg.streamSwitch(this._sessionId, {
          lts: Date.now(),
          isdual: !0,
          succ: !1
        }), e;
      }
      this._isDualStreamEnabled = !0, Pg.streamSwitch(this._sessionId, {
        lts: Date.now(),
        isdual: !0,
        succ: !0
      }), OE.info("[".concat(this._clientId, "] enable dual stream"));
    }
    async disableDualStream() {
      if (this._isDualStreamEnabled) {
        if (!this._joinInfo) throw new SE(fE.INVALID_OPERATION, "Can't publish stream, haven't joined yet!");
        if (this._p2pChannel.getLocalMedia(bS.LocalVideoLowTrack)) try {
          const e = await this._p2pChannel.unpublishLowStream();
          e && (await this._gateway.unpublish(e, this._joinInfo.stringUid || this._joinInfo.uid));
        } catch (e) {
          throw Pg.streamSwitch(this._sessionId, {
            lts: Date.now(),
            isdual: !1,
            succ: !1
          }), e;
        }
        this._isDualStreamEnabled = !1, Pg.streamSwitch(this._sessionId, {
          lts: Date.now(),
          isdual: !1,
          succ: !0
        }), OE.info("[".concat(this._clientId, "] disable dual stream"));
      }
    }
    async setClientRole(e, t) {
      if (function (e) {
        Ym(e, "role", ["audience", "host"]);
      }(e), t && Vf(t), "rtc" === this.mode) throw OE.warning("[".concat(this._clientId, "]rtc mode can not use setClientRole")), new SE(fE.INVALID_OPERATION, "rtc mode can not use setClientRole");
      if (t && t.level && "host" === e) throw new SE(fE.INVALID_OPERATION, "host mode can not set audience latency level");
      if ("audience" === e && this._p2pChannel.hasLocalMedia()) throw new SE(fE.INVALID_OPERATION, "can not set client role to audience when publishing stream");
      await this._gateway.setClientRole(e, t), this._config.role = e, OE.info("[".concat(this._clientId, "] set client role to ").concat(e, ", level: ").concat(t && t.level));
    }
    setProxyServer(e, t) {
      if (Xm(e, "proxyServer"), !t) {
        if ("DISCONNECTED" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Set proxy server before join channel");
        if ("disabled" !== this._cloudProxyServerMode || this._useLocalAccessPoint) throw new SE(fE.INVALID_OPERATION, "You have already set the proxy");
      }
      this._proxyServer = e, Pg.setProxyServer(this._proxyServer), OE.setProxyServer(this._proxyServer), OE.info("[".concat(this._clientId, "] Set proxy server ").concat(t ? "by initialize call" : "", " success."));
    }
    setTurnServer(e, t) {
      if (Array.isArray(e) || (e = [e]), !t) {
        if ("DISCONNECTED" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Set turn server before join channel");
        if ("disabled" !== this._cloudProxyServerMode || this._useLocalAccessPoint) throw new SE(fE.INVALID_OPERATION, "You have already set the proxy");
      }
      if (Uf(e)) return this._turnServer = {
        servers: e,
        mode: "original-manual"
      }, void OE.info("[".concat(this._clientId, "] Set original turnserver ").concat(t ? "by initialize call" : "", " success: ").concat(e.map(e => e.urls).join(","), "."));
      e.forEach(e => xf(e)), this._turnServer = {
        servers: e,
        mode: "manual"
      }, OE.info("[".concat(this._clientId, "] Set turnserver ").concat(t ? "by initialize call" : "", " success."));
    }
    setLicense(e) {
      if ("DISCONNECTED" !== this.connectionState) {
        throw new SE(fE.INVALID_OPERATION, "you should set license before join channel");
      }
      if (Xm(e, "license", 32, 32), !/^[A-Za-z\d]+$/.test(e)) throw new SE(fE.INVALID_PARAMS, "license should only contains characters from A-Z a-z 0-9");
      this._license = e, OE.info("[".concat(this._clientId, "] set license success"), e);
    }
    startProxyServer(e) {
      if ("DISCONNECTED" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Start proxy server before join channel");
      if (this._proxyServer || "manual" === this._turnServer.mode || this._useLocalAccessPoint) throw new SE(fE.INVALID_OPERATION, "You have already set the proxy");
      const t = [3, 4, 5];
      let i;
      switch (void 0 === e && (e = 3), e) {
        case 1:
        case 2:
          throw new SE(fE.NOT_SUPPORTED, "proxy mode 1/2 has been deprecated and not supported.");
        case 3:
          i = "proxy3";
          break;
        case 4:
          i = "proxy4";
          break;
        case 5:
          i = "proxy5";
          break;
        default:
          throw new SE(fE.INVALID_PARAMS, "proxy server mode must be ".concat(t.join("|")));
      }
      this._cloudProxyServerMode = i, this.store.cloudProxyServerMode = i, OE.info("[".concat(this._clientId, "] set cloud proxy server mode to"), this._cloudProxyServerMode);
    }
    stopProxyServer() {
      if ("DISCONNECTED" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "Stop proxy server after leave channel");
      Pg.setProxyServer(), OE.setProxyServer(), this._cloudProxyServerMode = "disabled", this.store.cloudProxyServerMode = "disabled", OE.info("[".concat(this._clientId, "] set cloud proxy server mode to"), this._cloudProxyServerMode), this._proxyServer = void 0, this._turnServer = {
        mode: "auto",
        servers: []
      };
    }
    setLocalAccessPointsV2(e) {
      if (!e.accessPoints) throw new SE(fE.INVALID_PARAMS, "accessPoints is required.");
      zm(e.accessPoints.serverList, "accessPoints.serverList"), Xm(e.accessPoints.domain, "accessPoints.domain");
      const t = (e, t) => {
        qm(e, t, 0, 65535, !0);
      };
      let i = 443;
      if (e.accessPoints.port && (t(e.accessPoints.port, "accessPoints.port"), i = e.accessPoints.port), this._proxyServer || "disabled" !== this._cloudProxyServerMode) throw new SE(fE.INVALID_OPERATION, "set local access point failed, You have already set the cloud proxy");
      GE("CLOSE_AFB_FOR_LOCAL_AP") && (BE("JOIN_WITH_FALLBACK_SIGNAL_PROXY", !1), BE("JOIN_WITH_FALLBACK_MEDIA_PROXY", !1));
      const n = /^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
        r = e.accessPoints.domain,
        o = e.accessPoints.serverList.map(e => n.test(e) ? "".concat(e.replace(/\./g, "-"), ".").concat(r) : e),
        s = o.map(e => "".concat(e, ":").concat(i));
      this._useLocalAccessPoint = !0, this._setLocalAPVersion = 2, BE("WEBCS_DOMAIN", s), BE("WEBCS_DOMAIN_BACKUP_LIST", s), BE("GATEWAY_DOMAINS", [r]), e.report && e.report.hostname && Array.isArray(e.report.hostname) && e.report.hostname.length ? (zm(e.report.hostname, "report.hostname"), BE("EVENT_REPORT_DOMAIN", e.report.hostname[0]), BE("EVENT_REPORT_BACKUP_DOMAIN", e.report.hostname[1] || e.report.hostname[0])) : (BE("EVENT_REPORT_DOMAIN", o[0]), BE("EVENT_REPORT_BACKUP_DOMAIN", o[1] || o[0]));
      let a = 6443;
      e.report && e.report.port && (t(e.report.port, "report.port"), a = e.report.port), BE("STATS_COLLECTOR_PORT", a), e.report ? BE("ENABLE_EVENT_REPORT", !0) : BE("ENABLE_EVENT_REPORT", !1);
      let c = "";
      e.log && e.log.hostname && Array.isArray(e.log.hostname) && e.log.hostname.length ? (zm(e.log.hostname, "log.hostname"), c = e.log.hostname[0]) : c = o[0];
      let d = 6444;
      e.log && e.log.port && (t(e.log.port, "log.port"), d = e.log.port), BE("LOG_UPLOAD_SERVER", "".concat(c, ":").concat(d));
      let u = [];
      e.cds && e.cds.hostname && Array.isArray(e.cds.hostname) && e.cds.hostname.length ? (zm(e.cds.hostname, "cds.hostname"), u = e.cds.hostname) : u = o;
      let l = 443;
      e.cds && e.cds.port && (t(e.cds.port, "cds.port"), l = e.cds.port), BE("CDS_AP", u.map(e => "".concat(e, ":").concat(l))), e.cds ? BE("ENABLE_CONFIG_DISTRIBUTE", !0) : BE("ENABLE_CONFIG_DISTRIBUTE", !1), OE.info("set local access point v2 success");
    }
    setLocalAccessPoints(e, t) {
      if (zm(e, "serverList"), Xm(t, "domain"), this._proxyServer || "disabled" !== this._cloudProxyServerMode) throw new SE(fE.INVALID_OPERATION, "set local access point failed, You have already set the cloud proxy");
      const i = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      e = e.map(e => i.test(e) ? "".concat(e.replace(/\./g, "-"), ".").concat(t) : e), this._useLocalAccessPoint = !0, this._setLocalAPVersion = 1, BE("WEBCS_DOMAIN", e), BE("WEBCS_DOMAIN_BACKUP_LIST", e), BE("GATEWAY_DOMAINS", [t]), BE("EVENT_REPORT_DOMAIN", e[0]), BE("EVENT_REPORT_BACKUP_DOMAIN", e[1] || e[0]), BE("LOG_UPLOAD_SERVER", "".concat(e[0], ":6444")), OE.info("[".concat(this._clientId, "] set local access point success"));
    }
    async setRemoteDefaultVideoStreamType(e) {
      if (Ym(e, "streamType", [0, 1]), this._remoteDefaultVideoStreamType = e, this._joinInfo) try {
        await this._gateway.setDefaultRemoteVideoStreamType(e), this._joinInfo.defaultVideoStream = this._remoteDefaultVideoStreamType;
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] set default remote video stream type error"), e.toString()), e;
      } else OE.debug("[".concat(this._clientId, "] haven't joined yet, cache remoteDefaultVideoStreamType ").concat(e));
    }
    async setRemoteVideoStreamType(e, t) {
      Ym(t, "streamType", [0, 1]);
      try {
        await this._gateway.setRemoteVideoStreamType(e, t), setTimeout(() => {
          const t = this._users.find(t => t.uid === e);
          t && t.videoTrack && t.videoTrack.updateMediaStreamTrackResolution();
        }, 2000);
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] set remote video stream type error"), e.toString()), e;
      }
      OE.info("[".concat(this._clientId, "] set remote ").concat(e, " video stream type to ").concat(t)), this._remoteStreamTypeCacheMap.set(e, t);
    }
    async setStreamFallbackOption(e, t) {
      Ym(t, "fallbackType", [0, 1, 2]);
      try {
        await this._gateway.setStreamFallbackOption(e, t);
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] set stream fallback option"), e.toString()), e;
      }
      OE.info("[".concat(this._clientId, "] set remote ").concat(e, " stream fallback type to ").concat(t)), this._streamFallbackTypeCacheMap.set(e, t);
    }
    setEncryptionConfig(e, t, i) {
      !function (e) {
        Ym(e, "encryptionMode", ["aes-128-xts", "aes-256-xts", "aes-128-ecb", "sm4-128-ecb", "aes-128-gcm", "aes-256-gcm", "aes-128-gcm2", "aes-256-gcm2", "none"]);
      }(e), Xm(t, "secret");
      if (["aes-128-gcm2", "aes-256-gcm2"].includes(e)) {
        if (!i || !(i instanceof Uint8Array && 32 === i.length)) throw new SE(fE.INVALID_PARAMS, "salt must be an Uint8Array and exactly equal to 32 bytes");
      } else if (i) throw new SE(fE.INVALID_PARAMS, "current encrypt mode does not need salt");
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*,.<>?/:;'\"|{}\\[\\]])(?=.{8,})").test(t) || OE.warning("The secret is not strong:\n      The secret must contain at least 1 lowercase alphabetical character,\n      The secret must contain at least 1 uppercase alphabetical character,\n      The secret must contain at least 1 numeric character,\n      The secret must contain at least one special character,\n      The secret must be eight characters or longer.\n      "), this._encryptionMode = e, this._encryptionSecret = t, i && (this._encryptionSalt = _C(i));
    }
    async renewToken(e) {
      if (Xm(e, "token", 1, 2047), !this._key || !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "renewToken should not be called before user join");
      const t = this._key;
      this._key = e, this._joinInfo && (this._joinInfo.token = e);
      const i = await this._renewTokenMutex.lock();
      try {
        if (GE("USE_NEW_TOKEN")) {
          OE.debug("[".concat(this._clientId, "] start renew token with ticket from unilbs"));
          const t = await _v(this._joinInfo, this._axiosCancelSource.token, this._config.httpRetryConfig || TE);
          OE.debug("[".concat(this._clientId, "] get ticket from unilbs success")), await this._gateway.renewToken({
            token: e,
            ticket: t
          });
        } else OE.debug("[".concat(this._clientId, "] start renew token without ticket")), await this._gateway.renewToken({
          token: e
        });
        OE.debug("[".concat(this._clientId, "] renewToken success"));
      } catch (e) {
        throw this._key = t, this._joinInfo.token = t, OE.error("[".concat(this._clientId, "] renewToken failed"), e.toString()), e;
      } finally {
        i();
      }
    }
    enableAudioVolumeIndicator() {
      this._audioVolumeIndicationInterval ? OE.warning("you have already enabled audio volume indicator!") : this._audioVolumeIndicationInterval = window.setInterval(() => {
        const e = this._p2pChannel.getAudioLevels();
        this.safeEmit(yf.VOLUME_INDICATOR, e);
      }, GE("AUDIO_VOLUME_INDICATION_INTERVAL") || 2000);
    }
    getRTCStats() {
      const e = this._statsCollector.getRTCStats(),
        t = this._gateway.getInChannelInfo();
      return e.Duration = Math.round(t.duration / 1000), e;
    }
    async startLiveStreaming(e, t) {
      if (!t) {
        if ("h264" !== this.codec) throw new SE(fE.LIVE_STREAMING_INVALID_RAW_STREAM, "raw streaming is only support h264");
        if (!this._p2pChannel.hasLocalMedia()) throw new SE(fE.LIVE_STREAMING_INVALID_RAW_STREAM, "can not find stream to raw streaming");
      }
      if (this._liveRawStreamingClient && this._liveRawStreamingClient.hasUrl(e) || this._liveTranscodeStreamingClient && this._liveTranscodeStreamingClient.hasUrl(e)) throw new SE(fE.LIVE_STREAMING_TASK_CONFLICT);
      const i = t ? Kf.TRANSCODE : Kf.RAW;
      return this._createLiveStreamingClient(i).startLiveStreamingTask(e, i);
    }
    setLiveTranscoding(e) {
      return this._createLiveStreamingClient(Kf.TRANSCODE).setTranscodingConfig(e);
    }
    async stopLiveStreaming(e) {
      const t = [this._liveRawStreamingClient, this._liveTranscodeStreamingClient].filter(t => t && t.hasUrl(e));
      if (!t.length) throw new SE(fE.INVALID_PARAMS, "can not find live streaming url to stop");
      await Sl.all(t.map(t => t && t.stopLiveStreamingTask(e)));
    }
    async addInjectStreamUrl(e, t) {
      if (!this._joinInfo) throw new SE(fE.INVALID_OPERATION, "can not addInjectStreamUrl, no joininfo");
      const i = this._createLiveStreamingClient(Kf.INJECT);
      i.setInjectStreamConfig(t, 0), await i.startLiveStreamingTask(e, Kf.INJECT);
    }
    async removeInjectStreamUrl() {
      var e;
      const t = this._createLiveStreamingClient(Kf.INJECT),
        i = Array.from(IR(e = t.streamingTasks).call(e)).find(e => e.mode === Kf.INJECT);
      if (!this._joinInfo || !i) throw new SE(fE.INVALID_OPERATION, "can remove addInjectStreamUrl, no joininfo or inject task");
      await t.stopLiveStreamingTask(i.url);
    }
    async startChannelMediaRelay(e) {
      yv(e);
      const t = this._createChannelMediaRelayClient();
      await t.startChannelMediaRelay(e);
    }
    async updateChannelMediaRelay(e) {
      yv(e);
      const t = this._createChannelMediaRelayClient();
      await t.updateChannelMediaRelay(e);
    }
    async stopChannelMediaRelay() {
      const e = this._createChannelMediaRelayClient();
      await e.stopChannelMediaRelay(), this._statsCollector.onStatsChanged && (this._statsCollector.onStatsChanged = void 0);
    }
    sendStreamMessage(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this._joinInfo) throw new SE(fE.INVALID_OPERATION, "can not send data stream, not joined");
      if ("string" == typeof e) {
        e = new TextEncoder().encode(e);
      }
      if (new Blob([e]).size > 1024) throw new SE(fE.INVALID_PARAMS, "stream message out of range.");
      return this._gateway.signal.request(bf.DATA_STREAM, {
        payload: _C(e)
      }, !t);
    }
    sendMetadata(e) {
      if (!this._joinInfo) throw new SE(fE.INVALID_OPERATION, "can not send metadata, not joined");
      if (new Blob([e]).size > 1024) throw new SE(fE.METADATA_OUT_OF_RANGE);
      return this._gateway.signal.request(bf.SEND_METADATA, {
        session_id: this._joinInfo.sid,
        metadata: _C(e)
      });
    }
    async sendCustomReportMessage(e) {
      if (Array.isArray(e) || (e = [e]), e.forEach(cf), !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "can not send custom report, not joined");
      await Pg.sendCustomReportMessage(this._joinInfo.sid, e);
    }
    getLocalAudioStats() {
      return this._statsCollector.getLocalAudioTrackStats();
    }
    getRemoteAudioStats() {
      return this._statsCollector.getRemoteAudioTrackStats();
    }
    getLocalVideoStats() {
      return this._statsCollector.getLocalVideoTrackStats();
    }
    getRemoteVideoStats() {
      return this._statsCollector.getRemoteVideoTrackStats();
    }
    getRemoteNetworkQuality() {
      return this._statsCollector.getRemoteNetworkQualityStats();
    }
    async pickSVCLayer(e, t) {
      Ym(t.spatialLayer, "spatialLayer", [0, 1, 2, 3]), Ym(t.temporalLayer, "temporalLayer", [0, 1, 2, 3]);
      try {
        await this._gateway.pickSVCLayer(e, t);
      } catch (e) {
        throw OE.error("[".concat(this._clientId, "] pick SVC layer failed"), e.toString()), e;
      }
    }
    _reset() {
      if (OE.debug("[".concat(this._clientId, "] reset client")), this._axiosCancelSource.cancel(), this._axiosCancelSource = pE.CancelToken.source(), this._streamFallbackTypeCacheMap = new Map(), this._remoteStreamTypeCacheMap = new Map(), this._configDistribute.stopGetConfigDistribute(), this._joinInfo = void 0, this._proxyServer = void 0, this._defaultStreamFallbackType = void 0, this._sessionId = null, this.store.sessionId = null, this._statsCollector.reset(), this._key = void 0, this._appId = void 0, this._uid = void 0, this.store.uid = void 0, this._channelName = void 0, this._encryptionMode = "none", this._encryptionSecret = null, this._encryptionSalt = null, this._users.forEach(e => {
        e._audioTrack && e._audioTrack._destroy(), e._videoTrack && e._videoTrack._destroy();
      }), this._users = [], this._audioVolumeIndicationInterval && (window.clearInterval(this._audioVolumeIndicationInterval), this._audioVolumeIndicationInterval = void 0), "fallback" === this._cloudProxyServerMode && (this._cloudProxyServerMode = "disabled", this.store.cloudProxyServerMode = "disabled"), this._p2pChannel.reset(), this._publishMutex = new Ug("client-publish"), this._subscribeMutex = new Ug("client-subscribe"), this._networkQualityInterval && (window.clearInterval(this._networkQualityInterval), this._networkQualityInterval = void 0), this._injectStreamingClient && (this._injectStreamingClient.terminate(), this._injectStreamingClient.removeAllListeners(), this._injectStreamingClient = void 0), this._liveRawStreamingClient && (this._liveRawStreamingClient.terminate(), this._liveRawStreamingClient.removeAllListeners(), this._liveRawStreamingClient = void 0), this._liveTranscodeStreamingClient && (this._liveTranscodeStreamingClient.terminate(), this._liveTranscodeStreamingClient.removeAllListeners(), this._liveTranscodeStreamingClient = void 0), this._channelMediaRelayClient && (this._channelMediaRelayClient.dispose(), this._channelMediaRelayClient = void 0), this._inspect) try {
        this._inspect.close(), this._inspect = void 0;
      } catch (e) {}
      if (this._moderation) try {
        this.setImageModeration(!1);
      } catch (e) {}
    }
    _startSession(e, t) {
      const i = e || $I();
      e ? OE.debug("[".concat(this._clientId, "] new Session ").concat(i)) : OE.debug("[".concat(this._clientId, "] renewSession ").concat(this._sessionId, " => ").concat(i)), this._sessionId = i, this.store.sessionId = i, t ? Pg.sessionInit(this._sessionId, {
        lts: new Date().getTime(),
        cname: t.channel,
        appid: t.appId,
        mode: this.mode
      }) : this._joinInfo ? Pg.sessionInit(this._sessionId, {
        lts: new Date().getTime(),
        cname: this._joinInfo.cname,
        appid: this._joinInfo.appId,
        mode: this.mode
      }) : this._gateway.joinInfo && Pg.sessionInit(this._sessionId, {
        lts: new Date().getTime(),
        cname: this._gateway.joinInfo.cname,
        appid: this._gateway.joinInfo.appId,
        mode: this.mode
      }), this._joinInfo && (this._joinInfo.sid = i), this._gateway.joinInfo && (this._gateway.joinInfo.sid = i);
    }
    async _publishHighStream(e) {
      if (!this._joinInfo || void 0 === this._uid) throw new SE(fE.INVALID_OPERATION, "Can't publish stream, haven't joined yet!");
      if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "can not publish stream in ".concat(this.connectionState, " state"));
      if ("auto" === this._turnServer.mode && GE("FORCE_TURN") && !GE("TURN_ENABLE_TCP") && !GE("TURN_ENABLE_UDP")) throw new SE(fE.UNEXPECTED_ERROR, "force TURN With No TURN Configuration");
      OE.debug("[".concat(this._clientId, "] publish high stream"));
      try {
        const i = await this._p2pChannel.publish(e, this._isDualStreamEnabled, this._lowStreamParameter),
          n = (await i.next()).value;
        if (n) {
          var t;
          let e;
          try {
            e = await this._gateway.publish(this._uid, n, !0);
          } catch (e) {
            if (e.code !== fE.DISCONNECT_P2P) throw i.throw(e), e;
          }
          await i.next((null === (t = e) || void 0 === t ? void 0 : t.ortc) || []);
        }
        this._p2pChannel.reportPublishEvent(!0, null);
        for (const t of e) t instanceof Cy && t._encoderConfig && this._gateway.setVideoProfile(t._encoderConfig), !t.muted && t.enabled || (await this._p2pChannel.muteLocalTrack(t));
      } catch (t) {
        if (this._p2pChannel.reportPublishEvent(!1, null == t ? void 0 : t.code, e), (null == t ? void 0 : t.code) === fE.WS_ABORT) return;
        throw t;
      }
    }
    async _publishLowStream() {
      if (!this._joinInfo || void 0 === this._uid) throw new SE(fE.INVALID_OPERATION, "Can't publish stream, haven't joined yet!");
      if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new SE(fE.INVALID_OPERATION, "can not publish stream in ".concat(this.connectionState, " state"));
      OE.debug("[".concat(this._clientId, "] publish low stream"));
      const e = this._configDistribute.getLowStreamConfigDistribute();
      e && e.bitrate && (this._lowStreamParameter || (this._lowStreamParameter = {
        width: 160,
        height: 120,
        framerate: 15,
        bitrate: 50
      }), this._lowStreamParameter && this._lowStreamParameter.bitrate && e.bitrate < this._lowStreamParameter.bitrate && (this._lowStreamParameter.bitrate = e.bitrate));
      try {
        const e = await this._p2pChannel.publishLowStream(this._lowStreamParameter),
          i = (await e.next()).value;
        if (i) {
          var t;
          let n;
          try {
            n = await this._gateway.publish(this._uid, i, !0);
          } catch (t) {
            if (t.code !== fE.DISCONNECT_P2P) throw e.throw(t), t;
          }
          e.next((null === (t = n) || void 0 === t ? void 0 : t.ortc) || []), this._p2pChannel.reportPublishEvent(!0, null, void 0, !0);
        }
      } catch (e) {
        if (this._p2pChannel.reportPublishEvent(!1, null == e ? void 0 : e.code, void 0, !0), (null == e ? void 0 : e.code) === fE.WS_ABORT) return;
        throw e;
      }
    }
    _createLiveStreamingClient(e) {
      if (!this._joinInfo || !this._appId) {
        return new SE(fE.INVALID_OPERATION, "can not create live streaming client, please join channel first").throw();
      }
      const t = () => new Cv(this._joinInfo, this._config.websocketRetryConfig || TE, this._config.httpRetryConfig || TE),
        i = e => {
          e.onLiveStreamError = (e, t) => {
            Pg.reportApiInvoke(this._sessionId, {
              name: _f.ON_LIVE_STREAM_ERROR,
              options: [e, t],
              tag: Ef.TRACER
            }).onSuccess(), this.safeEmit(yf.LIVE_STREAMING_ERROR, e, t);
          }, e.onLiveStreamWarning = (e, t) => {
            Pg.reportApiInvoke(this._sessionId, {
              name: _f.ON_LIVE_STREAM_WARNING,
              options: [e, t],
              tag: Ef.TRACER
            }).onSuccess(), this.safeEmit(yf.LIVE_STREAMING_WARNING, e, t);
          }, e.on($f.REQUEST_WORKER_MANAGER_LIST, (e, t, i) => {
            if (!this._joinInfo) return i(new SE(fE.INVALID_OPERATION, "can not find join info to get worker manager"));
            hv(e, this._joinInfo, this._axiosCancelSource.token, TE).then(t).catch(i);
          });
        };
      switch (e) {
        case Kf.RAW:
          return this._liveRawStreamingClient || (this._liveRawStreamingClient = t(), i(this._liveRawStreamingClient)), this._liveRawStreamingClient;
        case Kf.TRANSCODE:
          return this._liveTranscodeStreamingClient || (this._liveTranscodeStreamingClient = t(), i(this._liveTranscodeStreamingClient)), this._liveTranscodeStreamingClient;
        case Kf.INJECT:
          return this._injectStreamingClient || (this._injectStreamingClient = t(), this._injectStreamingClient.on($f.REQUEST_WORKER_MANAGER_LIST, (e, t, i) => {
            if (!this._joinInfo) return i(new SE(fE.INVALID_OPERATION, "can not find join info to get worker manager"));
            hv(e, this._joinInfo, this._axiosCancelSource.token, TE).then(t).catch(i);
          }), this._injectStreamingClient.onInjectStatusChange = (e, t, i) => {
            this.emit(yf.INJECT_STREAM_STATUS, e, t, i);
          }), this._injectStreamingClient;
      }
    }
    _createChannelMediaRelayClient() {
      if (!this._joinInfo) {
        return new SE(fE.INVALID_OPERATION, "can not create channel media relay client, please join channel first").throw();
      }
      if (!this._channelMediaRelayClient) {
        const {
            sendResolutionWidth: e,
            sendResolutionHeight: t
          } = this.getLocalVideoStats(),
          i = {
            width: e,
            height: t
          };
        this._channelMediaRelayClient = new Ov(this._joinInfo, this._clientId, this._config.websocketRetryConfig || TE, this._config.httpRetryConfig || TE, i), this._channelMediaRelayClient.on("state", e => {
          e === rS.RELAY_STATE_FAILURE && this._channelMediaRelayClient && this._channelMediaRelayClient.dispose(), this.safeEmit(yf.CHANNEL_MEDIA_RELAY_STATE, e);
        }), this._channelMediaRelayClient.on("event", e => {
          this.safeEmit(yf.CHANNEL_MEDIA_RELAY_EVENT, e);
        }), this._statsCollector.onStatsChanged = (e, t) => {
          var i;
          "resolution" === e && (null === (i = this._channelMediaRelayClient) || void 0 === i || i.setVideoProfile(t));
        };
      }
      return this._channelMediaRelayClient;
    }
    _handleGatewayEvents() {
      this._gateway.on(aS.DISCONNECT_P2P, async () => {
        await this._p2pChannel.disconnectForReconnect();
      }), this._gateway.on(aS.CONNECTION_STATE_CHANGE, (e, t, i) => {
        var n;
        if (i === vf.FALLBACK) return;
        const r = () => {
          this.safeEmit(yf.CONNECTION_STATE_CHANGE, e, t, i);
        };
        if (Pg.reportApiInvoke(this._sessionId || (null === (n = this._gateway.joinInfo) || void 0 === n ? void 0 : n.sid) || null, {
          name: _f.CONNECTION_STATE_CHANGE,
          options: [e, t, i],
          tag: Ef.TRACER
        }).onSuccess(JSON.stringify({
          cur: e,
          prev: t,
          reason: i
        })), OE.info("[".concat(this._clientId, "] connection state change: ").concat(t, " -> ").concat(e)), "DISCONNECTED" === e) return this._reset(), void r();
        if ("RECONNECTING" === e) this._users.forEach(e => {
          e._trust_in_room_ = !1, e._trust_audio_enabled_state_ = !1, e._trust_video_enabled_state_ = !1, e._trust_audio_mute_state_ = !1, e._trust_video_mute_state_ = !1, e._trust_audio_stream_added_state_ = !1, e._trust_video_stream_added_state_ = !1, e._audioSSRC = void 0, e._videoSSRC = void 0, e._videoOrtc = void 0, e._audioOrtc = void 0, e._cname = void 0, e._rtxSsrcId = void 0;
        }), this._userOfflineTimeout && window.clearTimeout(this._userOfflineTimeout), this._streamRemovedTimeout && window.clearTimeout(this._streamRemovedTimeout), this._userOfflineTimeout = void 0, this._streamRemovedTimeout = void 0;else if ("CONNECTED" === e) {
          var o;
          this._streamFallbackTypeCacheMap.forEach((e, t) => {
            this._gateway.setStreamFallbackOption(t, e).catch(e => {
              OE.warning("[".concat(this._clientId, "] auto set stream fallback option failed"), e);
            });
          }), this._remoteStreamTypeCacheMap.forEach((e, t) => {
            this._gateway.setRemoteVideoStreamType(t, e).catch(e => {
              OE.warning("[".concat(this._clientId, "] auto set remote stream type failed"), e);
            });
          }), void 0 !== this._remoteDefaultVideoStreamType && void 0 === (null === (o = this._joinInfo) || void 0 === o ? void 0 : o.defaultVideoStream) && this.setRemoteDefaultVideoStreamType(this._remoteDefaultVideoStreamType).then(() => {
            OE.debug("[".concat(this._clientId, "] setRemoteDefaultVideoStreamType after gateway connected"));
          }).catch(e => {
            OE.error("[".concat(this._clientId, "] setRemoteDefaultVideoStreamType after gateway failed, ").concat(e));
          }), this._p2pChannel.republish(), this._userOfflineTimeout = window.setTimeout(() => {
            if ("CONNECTED" !== this.connectionState) return;
            this._userOfflineTimeout = void 0;
            this._users.filter(e => !e._trust_in_room_).forEach(e => {
              OE.debug("[".concat(this._clientId, "] user offline timeout, emit user offline ").concat(e.uid)), this._handleUserOffline({
                uid: e.uid
              });
            });
          }, 3000), this._streamRemovedTimeout = window.setTimeout(() => {
            "CONNECTED" === this.connectionState && (this._streamRemovedTimeout = void 0, this._users.forEach(e => {
              e._trust_audio_mute_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch audio unmute event ").concat(e.uid)), this._handleMuteStream(e.uid, "audio", !1)), e._trust_video_mute_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch video unmute event ").concat(e.uid)), this._handleMuteStream(e.uid, "video", !1)), e._trust_audio_enabled_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch enable local audio ").concat(e.uid)), this._handleSetStreamLocalEnable("audio", e.uid, !0)), e._trust_video_enabled_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch enable local video ").concat(e.uid)), this._handleSetStreamLocalEnable("video", e.uid, !0)), e._trust_video_stream_added_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch reset video stream added ").concat(e.uid)), this._handleResetAddStream(e, "video")), e._trust_audio_stream_added_state_ || (OE.debug("[".concat(this._clientId, "] auto dispatch reset audio stream added ").concat(e.uid)), this._handleResetAddStream(e, "audio")), e._video_added_ || e._audio_added_ || (OE.debug("[".concat(this._clientId, "] auto dispatch stream remove ").concat(e.uid)), this._handleRemoveStream({
                uid: e.uid,
                uint_id: e._uintid
              }));
            }));
          }, 1000);
        }
        r();
      }), this._gateway.on(aS.REQUEST_NEW_GATEWAY_LIST, (e, t) => {
        if (!this._joinInfo) return t(new SE(fE.UNEXPECTED_ERROR, "can not recover, no join info"));
        av(this._joinInfo, this._axiosCancelSource.token, this._config.httpRetryConfig || TE, this.store).then(t => {
          this._joinInfo && (this._joinInfo.apResponse = t.gatewayInfo.res, this._joinInfo.gatewayAddrs = t.gatewayInfo.gatewayAddrs, this._joinInfo.uni_lbs_ip = t.gatewayInfo.uni_lbs_ip), e(t.gatewayInfo.gatewayAddrs.map(e => {
            if (this._joinInfo && this._joinInfo.proxyServer) {
              const t = e.address.split(":");
              return "wss://".concat(this._joinInfo.proxyServer, "/ws/?h=").concat(t[0], "&p=").concat(t[1]);
            }
            return "wss://".concat(e.address);
          }));
        }).catch(t);
      }), this._gateway.on(aS.NETWORK_QUALITY, e => {
        "normal" === this._networkQualitySensitivity && this.safeEmit(yf.NETWORK_QUALITY, e);
      }), this._gateway.on(aS.STREAM_TYPE_CHANGE, (e, t) => {
        this.safeEmit(yf.STREAM_TYPE_CHANGED, e, t);
        Pg.reportApiInvoke(this._sessionId, {
          name: _f.STREAM_TYPE_CHANGE,
          options: [e, t],
          tag: Ef.TRACER
        }).onSuccess(JSON.stringify({
          uid: e,
          streamType: t
        }));
      }), this._gateway.on(aS.IS_P2P_DISCONNECTED, e => {
        this._p2pChannel.isP2PDisconnected() ? e(!0) : this._p2pChannel.hasLocalMedia() || this._p2pChannel.hasRemoteMedia() ? e(!1) : e(!0);
      }), this._gateway.on(aS.NEED_RENEW_SESSION, () => {
        this._startSession();
      }), this._gateway.on(aS.REQUEST_P2P_CONNECTION_PARAMS, async (e, t, i) => {
        try {
          t(await this._p2pChannel.startP2PConnection(e));
        } catch (e) {
          i(e);
        }
      }), this._gateway.on(aS.JOIN_RESPONSE, (e, t) => {
        const {
          dtlsParameters: i,
          iceParameters: n,
          candidates: r,
          rtpCapabilities: o,
          setup: s,
          cname: a
        } = GO(e.ortc, t);
        this._p2pChannel.connect(n, i, r, o, s, a);
      }), this._gateway.on(aS.REQUEST_DC_CONNECTION_PARAMS, e => {
        e(this._p2pChannel.getEstablishParams());
      }), this._gateway.on(aS.RESET_SIGNAL, e => {
        this._p2pChannel.resetConnection(e), this._handleGatewaySignalEvents();
      }), this._gateway.on(aS.DATACHANNEL_FAILBACK, () => {
        this._joinGateway();
      }), this._gateway.on(aS.DATACHANNEL_PRECONNECT, async (e, t, i, n) => {
        var r, o, s, a, c, d;
        await this._p2pChannel.startP2PConnection({
          turnServer: null === (r = this._joinInfo) || void 0 === r ? void 0 : r.turnServer
        }, !0);
        const u = function (e, t) {
          let i;
          return t && t.ip && "number" == typeof t.port ? (i = [{
            foundation: "udpcandidate",
            componentId: "1",
            transport: "udp",
            priority: "2103266323",
            connectionAddress: t.ip,
            port: t.port.toString(),
            type: "host",
            extension: {}
          }], OE.debug("Using remote candidate from AP ".concat(t.ip, ":").concat(t.port)), t.ip6 && (i.push({
            foundation: "udpcandidate",
            componentId: "1",
            transport: "udp",
            priority: "2103266323",
            connectionAddress: t.ip6,
            port: t.port.toString(),
            type: "host",
            extension: {}
          }), OE.debug("Using IPV6 remote candidate from AP ".concat(t.ip6, ":").concat(t.port)))) : i = [{
            foundation: "udpcandidate",
            componentId: "1",
            transport: "udp",
            priority: "2103266323",
            connectionAddress: e.ip,
            port: e.port.toString(),
            type: "host",
            extension: {}
          }], i;
        }(e, t);
        return this._p2pChannel.preConnect({
          iceUfrag: "".concat(null === (o = this._joinInfo) || void 0 === o ? void 0 : o.apResponse.cid, "_").concat(null === (s = this._joinInfo) || void 0 === s ? void 0 : s.apResponse.cert),
          icePwd: "".concat(null === (a = this._joinInfo) || void 0 === a ? void 0 : a.apResponse.cid, "_").concat(null === (c = this._joinInfo) || void 0 === c ? void 0 : c.apResponse.cert)
        }, {
          fingerprints: [{
            hashFunction: "sha-256",
            fingerprint: null !== (d = GE("FINGERPRINT")) && void 0 !== d ? d : e.fingerprint
          }]
        }, u, {
          send: {
            audioCodecs: [],
            videoCodecs: [],
            audioExtensions: [],
            videoExtensions: []
          },
          recv: {
            audioCodecs: [],
            videoCodecs: [],
            audioExtensions: [],
            videoExtensions: []
          }
        }, "active", "o/i14u9pJrxRKAsu").then(i).catch(n);
      });
    }
    _handleGatewaySignalEvents() {
      this._gateway.signal.on(Df.ON_USER_ONLINE, this._handleUserOnline), this._gateway.signal.on(Df.ON_USER_OFFLINE, this._handleUserOffline), this._gateway.signal.on(Df.ON_ADD_AUDIO_STREAM, e => this._handleAddAudioOrVideoStream("audio", e.uid, e.ssrcId, e.cname, e.uint_id, e.ortc)), this._gateway.signal.on(Df.ON_ADD_VIDEO_STREAM, e => this._handleAddAudioOrVideoStream("video", e.uid, e.ssrcId, e.cname, e.uint_id, e.ortc, e.rtxSsrcId)), this._gateway.signal.on(Df.ON_REMOVE_STREAM, this._handleRemoveStream), this._gateway.signal.on(Df.ON_P2P_LOST, this._handleP2PLost), this._gateway.signal.on(Df.MUTE_AUDIO, e => this._handleMuteStream(e.uid, "audio", !0)), this._gateway.signal.on(Df.UNMUTE_AUDIO, e => this._handleMuteStream(e.uid, "audio", !1)), this._gateway.signal.on(Df.MUTE_VIDEO, e => this._handleMuteStream(e.uid, "video", !0)), this._gateway.signal.on(Df.UNMUTE_VIDEO, e => this._handleMuteStream(e.uid, "video", !1)), this._gateway.signal.on(Df.RECEIVE_METADATA, e => {
        const t = pC(e.metadata);
        this.safeEmit(yf.RECEIVE_METADATA, e.uid, t);
      }), this._gateway.signal.on(Df.ON_DATA_STREAM, e => {
        e.seq && delete e.seq, e.payload = pC(e.payload), this.safeEmit(yf.STREAM_MESSAGE, e.uid, e.payload), this.onStreamMessage && this.onStreamMessage(e);
      }), this._gateway.signal.on(Df.ON_CRYPT_ERROR, () => {
        hC(() => {
          OE.warning("[".concat(this._clientId, "] on crypt error")), this.safeEmit(yf.CRYPT_ERROR);
        }, this._sessionId);
      }), this._gateway.signal.on(Df.ON_TOKEN_PRIVILEGE_WILL_EXPIRE, this._handleTokenWillExpire), this._gateway.signal.on(Df.ON_TOKEN_PRIVILEGE_DID_EXPIRE, () => {
        OE.warning("[".concat(this._clientId, "] received message onTokenPrivilegeDidExpire, please get new token and join again")), this._gateway.leave(!0), this.safeEmit(yf.ON_TOKEN_PRIVILEGE_DID_EXPIRE), this._reset();
      }), this._gateway.signal.on(Df.ON_STREAM_FALLBACK_UPDATE, e => {
        OE.debug("[".concat(this._clientId, "] stream fallback peerId: ").concat(e.stream_id, ", attr: ").concat(e.stream_type)), this.safeEmit(yf.STREAM_FALLBACK, e.stream_id, 1 === e.stream_type ? "fallback" : "recover");
      }), this._gateway.signal.on(Df.ON_PUBLISH_STREAM, e => {
        this.uid === this._uid && (this._p2pChannel.reportPublishEvent(!0, null, void 0, !1, JSON.stringify({
          proxy: e.proxy
        })), OE.info("[".concat(this._clientId, "] on publish stream, ").concat(JSON.stringify(e))));
      }), this._gateway.signal.on(Df.ENABLE_LOCAL_VIDEO, e => {
        this._handleSetStreamLocalEnable("video", e.uid, !0);
      }), this._gateway.signal.on(Df.DISABLE_LOCAL_VIDEO, e => {
        this._handleSetStreamLocalEnable("video", e.uid, !1);
      }), this._gateway.signal.on(Nf.REQUEST_TIMEOUT, (e, t) => {
        if (this._joinInfo) switch (e) {
          case bf.PUBLISH:
            {
              if (!t) return;
              const e = (t = t).ortc;
              if (e) {
                var i, n, r, o;
                const s = e.some(e => {
                    let {
                      stream_type: t
                    } = e;
                    return t === sS.Audio;
                  }),
                  a = e.some(e => {
                    let {
                      stream_type: t
                    } = e;
                    return t !== sS.Audio;
                  }),
                  c = e.some(e => {
                    let {
                      stream_type: t
                    } = e;
                    return t === sS.Screen || t === sS.ScreenLow;
                  });
                "offer" === t.state && Pg.publish(this._joinInfo.sid, {
                  eventElapse: DI.measureFromPublishStart(this.store.clientId, this.store.pubId),
                  succ: !1,
                  ec: fE.TIMEOUT,
                  audio: s,
                  video: a,
                  p2pid: t.p2p_id,
                  publishRequestid: this.store.pubId,
                  screenshare: c,
                  audioName: s ? null === (i = e.find(e => {
                    let {
                      stream_type: t
                    } = e;
                    return t === sS.Audio;
                  })) || void 0 === i || null === (n = i.ssrcs[0]) || void 0 === n ? void 0 : n.ssrcId.toString() : void 0,
                  videoName: a ? null === (r = e.find(e => {
                    let {
                      stream_type: t
                    } = e;
                    return t !== sS.Audio;
                  })) || void 0 === r || null === (o = r.ssrcs[0]) || void 0 === o ? void 0 : o.ssrcId.toString() : void 0
                });
              }
              break;
            }
          case bf.SUBSCRIBE:
            (t = t) && Pg.subscribe(this._joinInfo.sid, {
              succ: !1,
              ec: fE.TIMEOUT,
              audio: t.stream_type === AS.AUDIO,
              video: t.stream_type === AS.VIDEO,
              peerid: t.stream_id,
              subscribeRequestid: t.ssrcId,
              p2pid: this.store.p2pId,
              eventElapse: DI.measureFromSubscribeStart(this.store.clientId, t.ssrcId)
            });
        }
      }), this._gateway.signal.on(Df.ON_P2P_OK, e => {
        this.uid, this._uid;
      }), this._gateway.signal.on(Df.ON_PUBLISHED_USER_LIST, e => {
        if (null == e || !e.users) return;
        GE("BLOCK_LOCAL_CLIENT") && (e.users = e.users.filter(e => !ZE(e.audio_ssrc, this.channelName)));
        const t = [],
          i = [];
        for (const n of e.users) {
          let e = this._users.find(e => e.uid === n.stream_id);
          e ? e._trust_in_room_ = !0 : (e = new yy(n.stream_id, n.stream_id), this._users.push(e), 0 === this.getListeners(yf.PUBLISHED_USER_LIST).length && (OE.debug("[".concat(this._clientId, "] user online"), n.stream_id), this.safeEmit(yf.USER_JOINED, e)));
          const r = cS.Audio & n.stream_type,
            o = (cS.Video | cS.LwoVideo) & n.stream_type,
            s = r && e.hasAudio,
            a = o && e.hasVideo;
          o && (e._trust_video_stream_added_state_ = !0, e._video_added_ = !0, e._videoSSRC = n.video_ssrc, e._rtxSsrcId = n.video_rtx), r && (e._trust_audio_stream_added_state_ = !0, e._audio_added_ = !0, e._audioSSRC = n.audio_ssrc), r && !s && 0 === this.getListeners(yf.PUBLISHED_USER_LIST).length && (OE.info("[".concat(this._clientId, "] remote user ").concat(e.uid, " published audio")), this.safeEmit(yf.USER_PUBLISHED, e, "audio")), o && !a && 0 === this.getListeners(yf.PUBLISHED_USER_LIST).length && (OE.info("[".concat(this._clientId, "] remote user ").concat(e.uid, " published video")), this.safeEmit(yf.USER_PUBLISHED, e, "video")), (r && !s || o && !a) && t.push(e), o && this._p2pChannel.hasPendingRemoteMedia(e, "video") && i.push({
            user: e,
            mediaType: "video"
          }), r && this._p2pChannel.hasPendingRemoteMedia(e, "audio") && i.push({
            user: e,
            mediaType: "audio"
          });
        }
        i.length > 0 && (OE.debug("[".concat(this._clientId, "] RE massSubscribe after reconnect ").concat(i.map(e => "user: ".concat(e.user.uid, ", mediaType: ").concat(e.mediaType)).join("; "), " ")), this.massSubscribe(i).catch(e => {
          OE.error("[".concat(this._clientId, "] mass resubscribe error"), e.toString());
        })), this.getListeners(yf.PUBLISHED_USER_LIST).length > 0 ? (OE.info("[".concat(this._clientId, "] client emit user-list event, users: ").concat(t.map(e => e.uid).join(", "))), this.safeEmit(yf.PUBLISHED_USER_LIST, t)) : OE.info("[".concat(this._clientId, "] client not emit user-list event case there is no user-list listener, users: ").concat(t.map(e => e.uid).join(", ")));
      });
    }
    _handleP2PChannelEvents() {
      this._p2pChannel.on(DS.RequestMuteLocal, async (e, t, i) => {
        if (this._joinInfo) try {
          await this._gateway.muteLocal(e, this._joinInfo.stringUid || this._joinInfo.uid), t();
        } catch (e) {
          e.code === fE.DISCONNECT_P2P ? t() : i(e);
        } else t();
      }), this._p2pChannel.on(DS.RequestUnmuteLocal, async (e, t, i) => {
        if (this._joinInfo) try {
          await this._gateway.unmuteLocal(e, this._joinInfo.stringUid || this._joinInfo.uid), t();
        } catch (e) {
          e.code === fE.DISCONNECT_P2P ? t() : i(e);
        } else t();
      }), this._p2pChannel.on(DS.RequestRePublish, (e, t, i) => {
        this.publish(e, !1).then(t).catch(i);
      }), this._p2pChannel.on(DS.RequestReSubscribe, async (e, t, i) => {
        try {
          for (const {
            user: t,
            kind: i
          } of e) i === AS.VIDEO ? await this.subscribe(t, "video") : await this.subscribe(t, "audio");
          t();
        } catch (e) {
          i(e);
        }
      }), this._p2pChannel.on(DS.RequestUploadStats, (e, t) => {
        this._gateway.uploadStats(e, t);
      }), this._p2pChannel.on(DS.MediaReconnectStart, e => {
        this.safeEmit(yf.MEDIA_RECONNECT_START, e);
      }), this._p2pChannel.on(DS.MediaReconnectEnd, e => {
        this.safeEmit(yf.MEDIA_RECONNECT_END, e);
      }), this._p2pChannel.on(DS.NeedSignalRTT, e => {
        e(this._gateway.getSignalRTT());
      }), this._p2pChannel.on(DS.RequestRestartICE, async e => {
        const t = await this._p2pChannel.restartICE(e),
          i = await t.next();
        if (i.done) return;
        const n = i.value;
        let r;
        try {
          r = await this._gateway.restartICE({
            iceParameters: n
          });
        } catch (e) {
          return void t.throw(e);
        }
        const {
          iceParameters: o
        } = function (e) {
          const t = e.iceParameters;
          return {
            iceParameters: {
              iceUfrag: t.iceUfrag,
              icePwd: t.icePwd
            }
          };
        }(r);
        await t.next({
          remoteIceParameters: o
        });
      }), this._p2pChannel.on(DS.RequestReconnect, async () => {
        this._gateway.reconnect();
      }), this._p2pChannel.on(DS.RequestReconnectPC, async () => {
        var e;
        const {
            iceParameters: t,
            dtlsParameters: i,
            rtpCapabilities: n
          } = await this._p2pChannel.startP2PConnection({
            turnServer: null === (e = this._joinInfo) || void 0 === e ? void 0 : e.turnServer
          }),
          {
            gatewayEstablishParams: r,
            gatewayAddress: o
          } = await this._gateway.reconnectPC({
            iceParameters: t,
            dtlsParameters: i,
            rtpCapabilities: n
          }),
          {
            dtlsParameters: s,
            iceParameters: a,
            candidates: c,
            rtpCapabilities: d,
            setup: u,
            cname: l
          } = GO(r, o);
        await this._p2pChannel.connect(a, s, c, d, u, l), await this._p2pChannel.republish(), await this._p2pChannel.reSubscribe();
      }), this._p2pChannel.on(DS.RequestUnpublishForReconnectPC, async (e, t, i) => {
        this._joinInfo && void 0 !== this._uid ? (await this._gateway.unpublish(e, this._uid), t()) : i();
      }), this._p2pChannel.on(DS.P2PLost, () => {
        this.safeEmit(yf.P2P_LOST, this.store.uid);
      }), this._p2pChannel.on(DS.UpdateVideoEncoder, e => {
        e._encoderConfig && this._gateway.setVideoProfile(e._encoderConfig);
      }), this._p2pChannel.on(DS.ConnectionTypeChange, e => {
        this.safeEmit(yf.IS_USING_CLOUD_PROXY, e);
      }), this._p2pChannel.on(DS.RequestLowStreamParameter, e => {
        e(this._lowStreamParameter || {
          width: 160,
          height: 120,
          framerate: 15,
          bitrate: 50
        });
      }), this._p2pChannel.on(DS.QueryClientConnectionState, e => {
        e(this.connectionState);
      });
    }
    getKeyMetrics() {
      return this.store.keyMetrics;
    }
    async enableContentInspect(e) {
      if ("CONNECTED" !== this.connectionState || !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Client did not join channel"));
      if (this._inspect) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] Inspect content service already in connecting/connected state"));
      if (!e) throw new SE(fE.INVALID_PARAMS, "[".concat(this._clientId, "] inspectConfig is necessary"));
      if (!e.inspectType || !Array.isArray(e.inspectType)) throw new SE(fE.INVALID_PARAMS, "[".concat(this._clientId, "] inspectConfig.inspectType is necessary and is an instance of Array."));
      {
        const t = [...new Set(e.inspectType)];
        t.forEach(e => {
          if (!["supervise", "moderation"].includes(e)) throw new SE(fE.INVALID_PARAMS, "[".concat(this._clientId, "] ").concat(e, " is not a valid inspect type."));
        }), e.inspectType = t;
      }
      if (e && e.extraInfo && e.extraInfo.length > 1024) throw new SE(fE.INVALID_PARAMS, "[".concat(this._clientId, "] inspectConfig.extraInfo length cannot exceed 1024 bytes"));
      try {
        const t = new Ew(e);
        this._inspect = t, this.handleVideoInspectEvents(this._inspect), await t.init({
          appId: this._joinInfo.appId,
          areaCode: "",
          cname: this._joinInfo.cname,
          sid: this._joinInfo.sid,
          token: this._joinInfo.token,
          uid: this._joinInfo.uid,
          cid: this._joinInfo.cid,
          vid: this._joinInfo.vid ? Number(this._joinInfo.vid) : 0
        }, TE);
      } catch (e) {
        throw Array.isArray(e) ? e[0] : e;
      }
    }
    async disableContentInspect() {
      if (!this._inspect) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] inspectVideoContent not started"));
      try {
        this._inspect.close(), this._inspect = void 0;
      } catch (e) {
        throw Array.isArray(e) ? e[0] : e;
      }
    }
    async setImageModeration(e, t) {
      if (Km(e, "enabled"), e) {
        if (!t) throw new SE(fE.INVALID_PARAMS, "[".concat(this._clientId, "] config is necessary"));
        if (qm(t.interval, "interval", 1000, 1 / 0), "CONNECTED" !== this.connectionState || !this._joinInfo) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] can not enable image moderation, not joined\""));
        try {
          if (this._moderation) return void this._moderation.updateConfig(t);
          const e = new Jw(t);
          this._moderation = e, this.handleImageModerationEvents(this._moderation), await e.init({
            appId: this._joinInfo.appId,
            areaCode: "",
            cname: this._joinInfo.cname,
            sid: this._joinInfo.sid,
            token: this._joinInfo.token,
            uid: this._joinInfo.uid,
            cid: this._joinInfo.cid,
            vid: this._joinInfo.vid ? Number(this._joinInfo.vid) : 0
          }, TE);
        } catch (e) {
          throw Array.isArray(e) ? e[0] : e;
        }
      } else {
        if (!this._moderation) throw new SE(fE.INVALID_OPERATION, "[".concat(this._clientId, "] image moderation not started"));
        try {
          this._moderation.close(), this._moderation.removeAllListeners(), this._moderation = void 0;
        } catch (e) {
          throw Array.isArray(e) ? e[0] : e;
        }
      }
    }
    handleImageModerationEvents(e) {
      e.on(HS.CONNECTION_STATE_CHANGE, (t, i) => {
        switch (this.emit(yf.IMAGE_MODERATION_CONNECTION_STATE_CHANGE, t, i), t) {
          case WS.CONNECTED:
            if ("CONNECTED" !== this.connectionState) throw this.setImageModeration(!1), new SE(fE.OPERATION_ABORTED, "Image moderation was cancelled because it left the channel");
            e.inspectImage();
        }
      }), e.on(HS.CLIENT_LOCAL_VIDEO_TRACK, e => {
        e(this.localTracks.filter(e => "video" === e.trackMediaType)[0]);
      });
    }
    handleVideoInspectEvents(e) {
      e.on(VS.CONNECTION_STATE_CHANGE, (t, i) => {
        switch (this.emit(yf.CONTENT_INSPECT_CONNECTION_STATE_CHANGE, t, i), i) {
          case US.CONNECTED:
            if ("CONNECTED" !== this.connectionState) return void this.emit(yf.CONTENT_INSPECT_ERROR, new SE(fE.OPERATION_ABORTED, "Content inspect was cancelled because it left the channel"));
            e.inspectImage();
        }
      }), e.on(VS.INSPECT_RESULT, (e, t) => {
        var i;
        if ((null == t ? void 0 : t.code) === fE.INVALID_OPERATION && "DISCONNECTED" === this.connectionState) return OE.debug("Stop inspect content because that has left channel"), null == this || null === (i = this._inspect) || void 0 === i || i.close(), void (this._inspect = void 0);
        this.emit(yf.CONTENT_INSPECT_RESULT, e, t);
      }), e.on(VS.CLIENT_LOCAL_VIDEO_TRACK, e => {
        e(this.localTracks.filter(e => "video" === e.trackMediaType)[0]);
      });
    }
    getJoinChannelServiceRecords() {
      return OE.debug("getJoinChannelServiceRecords"), this.store.joinChannelServiceRecords;
    }
    async setPublishAudioFilterEnabled(e) {
      Km(e, "enabled"), BE("ENABLE_PUBLISH_AUDIO_FILTER", e), this._joinInfo && (await this._gateway.setPublishAudioFilterEnabled(e));
    }
    _handleResetAddStream(e, t) {
      switch (t) {
        case "audio":
          e._audio_added_ = !1, e._trust_audio_stream_added_state_ = !0;
          break;
        case "video":
          e._video_added_ = !1, e._trust_video_stream_added_state_ = !0;
      }
    }
  }).prototype, "leave", [Xw], Object.getOwnPropertyDescriptor(kD.prototype, "leave"), kD.prototype), ag(kD.prototype, "publish", [zw], Object.getOwnPropertyDescriptor(kD.prototype, "publish"), kD.prototype), ag(kD.prototype, "unpublish", [Qw], Object.getOwnPropertyDescriptor(kD.prototype, "unpublish"), kD.prototype), ag(kD.prototype, "subscribe", [Zw], Object.getOwnPropertyDescriptor(kD.prototype, "subscribe"), kD.prototype), ag(kD.prototype, "massSubscribe", [$w], Object.getOwnPropertyDescriptor(kD.prototype, "massSubscribe"), kD.prototype), ag(kD.prototype, "unsubscribe", [eD], Object.getOwnPropertyDescriptor(kD.prototype, "unsubscribe"), kD.prototype), ag(kD.prototype, "massUnsubscribe", [tD], Object.getOwnPropertyDescriptor(kD.prototype, "massUnsubscribe"), kD.prototype), ag(kD.prototype, "setLowStreamParameter", [iD], Object.getOwnPropertyDescriptor(kD.prototype, "setLowStreamParameter"), kD.prototype), ag(kD.prototype, "enableDualStream", [nD], Object.getOwnPropertyDescriptor(kD.prototype, "enableDualStream"), kD.prototype), ag(kD.prototype, "disableDualStream", [rD], Object.getOwnPropertyDescriptor(kD.prototype, "disableDualStream"), kD.prototype), ag(kD.prototype, "setClientRole", [oD], Object.getOwnPropertyDescriptor(kD.prototype, "setClientRole"), kD.prototype), ag(kD.prototype, "setProxyServer", [sD], Object.getOwnPropertyDescriptor(kD.prototype, "setProxyServer"), kD.prototype), ag(kD.prototype, "setTurnServer", [aD], Object.getOwnPropertyDescriptor(kD.prototype, "setTurnServer"), kD.prototype), ag(kD.prototype, "setLicense", [cD], Object.getOwnPropertyDescriptor(kD.prototype, "setLicense"), kD.prototype), ag(kD.prototype, "startProxyServer", [dD], Object.getOwnPropertyDescriptor(kD.prototype, "startProxyServer"), kD.prototype), ag(kD.prototype, "stopProxyServer", [uD], Object.getOwnPropertyDescriptor(kD.prototype, "stopProxyServer"), kD.prototype), ag(kD.prototype, "setLocalAccessPointsV2", [lD], Object.getOwnPropertyDescriptor(kD.prototype, "setLocalAccessPointsV2"), kD.prototype), ag(kD.prototype, "setLocalAccessPoints", [hD], Object.getOwnPropertyDescriptor(kD.prototype, "setLocalAccessPoints"), kD.prototype), ag(kD.prototype, "setRemoteDefaultVideoStreamType", [pD], Object.getOwnPropertyDescriptor(kD.prototype, "setRemoteDefaultVideoStreamType"), kD.prototype), ag(kD.prototype, "setRemoteVideoStreamType", [_D], Object.getOwnPropertyDescriptor(kD.prototype, "setRemoteVideoStreamType"), kD.prototype), ag(kD.prototype, "setStreamFallbackOption", [ED], Object.getOwnPropertyDescriptor(kD.prototype, "setStreamFallbackOption"), kD.prototype), ag(kD.prototype, "setEncryptionConfig", [mD], Object.getOwnPropertyDescriptor(kD.prototype, "setEncryptionConfig"), kD.prototype), ag(kD.prototype, "renewToken", [fD], Object.getOwnPropertyDescriptor(kD.prototype, "renewToken"), kD.prototype), ag(kD.prototype, "enableAudioVolumeIndicator", [SD], Object.getOwnPropertyDescriptor(kD.prototype, "enableAudioVolumeIndicator"), kD.prototype), ag(kD.prototype, "startLiveStreaming", [TD], Object.getOwnPropertyDescriptor(kD.prototype, "startLiveStreaming"), kD.prototype), ag(kD.prototype, "setLiveTranscoding", [gD], Object.getOwnPropertyDescriptor(kD.prototype, "setLiveTranscoding"), kD.prototype), ag(kD.prototype, "stopLiveStreaming", [RD], Object.getOwnPropertyDescriptor(kD.prototype, "stopLiveStreaming"), kD.prototype), ag(kD.prototype, "addInjectStreamUrl", [ID], Object.getOwnPropertyDescriptor(kD.prototype, "addInjectStreamUrl"), kD.prototype), ag(kD.prototype, "removeInjectStreamUrl", [CD], Object.getOwnPropertyDescriptor(kD.prototype, "removeInjectStreamUrl"), kD.prototype), ag(kD.prototype, "startChannelMediaRelay", [vD], Object.getOwnPropertyDescriptor(kD.prototype, "startChannelMediaRelay"), kD.prototype), ag(kD.prototype, "updateChannelMediaRelay", [yD], Object.getOwnPropertyDescriptor(kD.prototype, "updateChannelMediaRelay"), kD.prototype), ag(kD.prototype, "stopChannelMediaRelay", [AD], Object.getOwnPropertyDescriptor(kD.prototype, "stopChannelMediaRelay"), kD.prototype), ag(kD.prototype, "sendCustomReportMessage", [OD], Object.getOwnPropertyDescriptor(kD.prototype, "sendCustomReportMessage"), kD.prototype), ag(kD.prototype, "pickSVCLayer", [ND], Object.getOwnPropertyDescriptor(kD.prototype, "pickSVCLayer"), kD.prototype), ag(kD.prototype, "enableContentInspect", [bD], Object.getOwnPropertyDescriptor(kD.prototype, "enableContentInspect"), kD.prototype), ag(kD.prototype, "disableContentInspect", [wD], Object.getOwnPropertyDescriptor(kD.prototype, "disableContentInspect"), kD.prototype), ag(kD.prototype, "setImageModeration", [DD], Object.getOwnPropertyDescriptor(kD.prototype, "setImageModeration"), kD.prototype), ag(kD.prototype, "getJoinChannelServiceRecords", [PD], Object.getOwnPropertyDescriptor(kD.prototype, "getJoinChannelServiceRecords"), kD.prototype), ag(kD.prototype, "setPublishAudioFilterEnabled", [LD], Object.getOwnPropertyDescriptor(kD.prototype, "setPublishAudioFilterEnabled"), kD.prototype), kD);
  class VD extends zg {
    set currentState(e) {
      e !== this._currentState && (this._currentState = e, this.safeEmit(Lf.AUDIO_SOURCE_STATE_CHANGE, this._currentState));
    }
    get currentState() {
      return this._currentState;
    }
    constructor(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(), _p(this, "audioBuffer", void 0), _p(this, "sourceNode", void 0), _p(this, "startPlayTime", 0), _p(this, "startPlayOffset", 0), _p(this, "pausePlayTime", 0), _p(this, "options", void 0), _p(this, "currentLoopCount", 0), _p(this, "currentPlaybackSpeed", 100), _p(this, "_currentState", "stopped"), this.audioBuffer = e, this.options = t, this.startPlayOffset = this.options.startPlayTime || 0;
    }
    createWebAudioDiagram() {
      return this.context.createGain();
    }
    get duration() {
      return this.audioBuffer.duration;
    }
    get playbackSpeed() {
      return this.currentPlaybackSpeed;
    }
    get currentTime() {
      return "stopped" === this.currentState ? 0 : "paused" === this.currentState ? this.pausePlayTime : ((this.context.currentTime - this.startPlayTime) * (this.playbackSpeed / 100) + this.startPlayOffset) % this.audioBuffer.duration;
    }
    updateOptions(e) {
      "stopped" === this.currentState ? (this.options = e, this.startPlayOffset = this.options.startPlayTime || 0) : OE.warning("can not set audio source options");
    }
    startProcessAudioBuffer() {
      this.sourceNode && this.stopProcessAudioBuffer(), this.sourceNode = this.createSourceNode(), this.startSourceNode(), this.currentState = "playing";
    }
    pauseProcessAudioBuffer() {
      this.sourceNode && "playing" === this.currentState && (this.pausePlayTime = this.currentTime, this.sourceNode.onended = null, this.sourceNode.stop(), this.sourceNode.buffer = null, this.sourceNode = this.createSourceNode(), this.currentState = "paused");
    }
    seekAudioBuffer(e) {
      this.sourceNode && (this.sourceNode.onended = null, "playing" === this.currentState && this.sourceNode.stop(), this.sourceNode = this.createSourceNode(), "playing" === this.currentState ? (this.startPlayOffset = e, this.startSourceNode()) : "paused" === this.currentState && (this.pausePlayTime = e));
    }
    resumeProcessAudioBuffer() {
      "paused" === this.currentState && this.sourceNode && (this.startPlayOffset = this.pausePlayTime, this.pausePlayTime = 0, this.startSourceNode(), this.currentState = "playing");
    }
    stopProcessAudioBuffer() {
      if (this.sourceNode) {
        this.sourceNode.onended = null;
        try {
          this.sourceNode.stop();
        } catch (e) {}
        this.reset();
      }
    }
    setAudioBufferPlaybackSpeed(e) {
      this.sourceNode && ("playing" === this.currentState && (this.startPlayOffset = this.currentTime, this.startPlayTime = this.context.currentTime), this.sourceNode.playbackRate.value = e / 100), this.currentPlaybackSpeed = e;
    }
    startSourceNode() {
      this.sourceNode && this.sourceNode.buffer && (this.sourceNode.start(0, this.startPlayOffset), this.startPlayTime = this.context.currentTime, this.sourceNode.onended = this.handleSourceNodeEnded.bind(this));
    }
    createSourceNode() {
      const e = this.context.createBufferSource();
      return e.buffer = this.audioBuffer, e.loop = !!this.options.loop, e.connect(this.outputNode), e.playbackRate.value = this.currentPlaybackSpeed / 100, e;
    }
    handleSourceNodeEnded() {
      if (this.currentLoopCount += 1, this.options.cycle && this.options.cycle > this.currentLoopCount) return this.startPlayOffset = 0, this.sourceNode = void 0, void this.startProcessAudioBuffer();
      this.reset();
    }
    reset() {
      this.startPlayOffset = this.options.startPlayTime || 0, this.currentState = "stopped", this.sourceNode && (this.sourceNode.disconnect(), this.sourceNode = void 0), this.currentLoopCount = 0;
    }
  }
  const jD = new Map();
  async function FD(e, t) {
    let i = null;
    if ("string" == typeof e) {
      const t = jD.get(e);
      if (t) return OE.debug("use cached audio resource: ", e), t;
      try {
        i = (await RE(() => pE.get(e, {
          responseType: "arraybuffer"
        }), void 0, void 0, {
          maxRetryCount: 3
        })).data;
      } catch (e) {
        throw new SE(fE.FETCH_AUDIO_FILE_FAILED, e.toString());
      }
    } else {
      const t = new Sl((t, i) => {
        const n = new FileReader();
        n.onload = e => {
          e.target ? t(e.target.result) : i(new SE(fE.READ_LOCAL_AUDIO_FILE_ERROR));
        }, n.onerror = () => {
          i(new SE(fE.READ_LOCAL_AUDIO_FILE_ERROR));
        }, n.readAsArrayBuffer(e);
      });
      i = await t;
    }
    const n = await function (e) {
      const t = Hg();
      return new Sl((i, n) => {
        t.decodeAudioData(e, e => {
          i(e);
        }, e => {
          n(new SE(fE.DECODE_AUDIO_FILE_FAILED, e.toString()));
        });
      });
    }(i);
    return "string" == typeof e && t && jD.set(e, n), n;
  }
  function BD(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function GD(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? BD(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : BD(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  function WD(e, t, i, n) {
    i.optimizationMode && (n && n.width && n.height ? (i.encoderConfig = GD(GD({}, n), {}, {
      bitrateMin: n.bitrateMin,
      bitrateMax: n.bitrateMax
    }), "motion" !== i.optimizationMode && "detail" !== i.optimizationMode || (t.contentHint = i.optimizationMode, t.contentHint === i.optimizationMode ? OE.debug("[".concat(e, "] set content hint to"), i.optimizationMode) : OE.debug("[".concat(e, "] set content hint failed")))) : OE.warning("[".concat(e, "] can not apply optimization mode bitrate config, no encoderConfig")));
  }
  const HD = xh().name;
  function KD(e, t, i, n) {
    let r,
      o = 0,
      s = null;
    return new Sl((a, c) => {
      setTimeout(() => {
        r && (r(), a(o));
      }, t), r = Jg(() => {
        !function () {
          o > n && r && (r(), a(o));
          const t = i.getContext("2d");
          if (!t) {
            const e = new SE(fE.UNEXPECTED_ERROR, "can not get canvas 2d context.");
            return OE.error(e.toString()), void c(e);
          }
          t.drawImage(e, 0, 0, 160, 120);
          const d = t.getImageData(0, 0, i.width, i.height),
            u = Math.floor(d.data.length / 3);
          if (s) {
            for (let e = 0; e < u; e += 3) if (d.data[e] !== s[e]) return o += 1, void (s = d.data);
            s = d.data;
          } else s = d.data;
        }();
      }, 30);
    });
  }
  class YD {
    constructor(e, t) {
      _p(this, "id", 0), _p(this, "element", void 0), _p(this, "peerPair", void 0), _p(this, "context", void 0), _p(this, "audioPlayerElement", void 0), _p(this, "audioTrack", void 0), YD.count += 1, this.id = YD.count, this.element = e, this.context = t;
    }
    initPeers() {
      this.peerPair = [new RTCPeerConnection(), new RTCPeerConnection()], this.peerPair[1].ontrack = e => {
        const t = document.createElement("audio");
        t.srcObject = new MediaStream([e.track]), t.play(), this.audioPlayerElement = t;
      };
    }
    async switchSdp() {
      if (!this.peerPair) return;
      const e = async (e, t) => {
          const i = "offer" === t ? await e.createOffer() : await e.createAnswer();
          return await e.setLocalDescription(i), "complete" === e.iceGatheringState ? e.localDescription : new Sl(t => {
            e.onicegatheringstatechange = () => {
              "complete" === e.iceGatheringState && t(e.localDescription);
            };
          });
        },
        t = async (e, t) => await e.setRemoteDescription(t);
      try {
        const i = await e(this.peerPair[0], "offer");
        await t(this.peerPair[1], i);
        const n = await e(this.peerPair[1], "answer");
        await t(this.peerPair[0], n);
      } catch (e) {
        throw new SE(fE.LOCAL_AEC_ERROR, e.toString()).print();
      }
    }
    async getTracksFromMediaElement(e) {
      if (this.audioTrack) return this.audioTrack;
      let t;
      try {
        e instanceof HTMLVideoElement && (e.captureStream ? e.captureStream() : e.mozCaptureStream()), t = this.context.createMediaStreamDestination();
        this.context.createMediaElementSource(e).connect(t);
      } catch (e) {
        throw new SE(fE.LOCAL_AEC_ERROR, e.toString()).print();
      }
      if (!t) {
        throw new SE(fE.LOCAL_AEC_ERROR, "no dest node when local aec").print();
      }
      const i = t.stream.getAudioTracks()[0];
      return this.audioTrack = i, i;
    }
    getElement() {
      return this.element;
    }
    async startEchoCancellation() {
      this.context.resume(), this.peerPair && this.close(), this.initPeers();
      const e = this.element,
        t = await this.getTracksFromMediaElement(e);
      this.peerPair && this.peerPair[0].addTrack(t), await this.switchSdp();
    }
    close() {
      OE.debug("close echo cancellation unit, id is", this.id), this.audioPlayerElement && this.audioPlayerElement.pause(), this.peerPair && this.peerPair.forEach(e => {
        e.close();
      }), this.peerPair = void 0, this.audioPlayerElement = void 0;
    }
  }
  var qD, JD;
  _p(YD, "count", 0);
  const XD = window.AudioContext || window.webkitAudioContext;
  const zD = new (qD = Dg({
    report: Pg
  }), ag((JD = class {
    constructor() {
      _p(this, "units", []), _p(this, "context", void 0);
    }
    processExternalMediaAEC(e) {
      if (!this._doesEnvironmentNeedAEC()) return OE.debug("the system does not need to process local aec"), -1;
      this.context || (this.context = new XD());
      let t = this.units.find(t => t && t.getElement() === e);
      return t || (t = new YD(e, this.context), this.units.push(t)), t.startEchoCancellation(), OE.debug("start processing local audio echo cancellation, id is", t.id), t.id;
    }
    _doesEnvironmentNeedAEC() {
      return xh().name !== wh.SAFARI;
    }
  }).prototype, "processExternalMediaAEC", [qD], Object.getOwnPropertyDescriptor(JD.prototype, "processExternalMediaAEC"), JD.prototype), JD)();
  function QD(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function ZD(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? QD(Object(i), !0).forEach(function (t) {
        _p(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : QD(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const $D = window || document;
  function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!$D) return;
    const i = tP._cspEventHandlerPointer;
    if (i && t) return void console.error(i, t);
    const n = e => {
      if (!(e && e.blockedURI && (tP.onSecurityPolicyViolation || tP.getListeners(BS.SECURITY_POLICY_VIOLATION).length > 0))) return;
      const t = e.blockedURI;
      GE("CSP_DETECTED_HOSTNAME_LIST").some(e => t.includes(e)) && (tP.onSecurityPolicyViolation && "function" == typeof tP.onSecurityPolicyViolation && tP.onSecurityPolicyViolation(e), tP.getListeners(BS.SECURITY_POLICY_VIOLATION).length > 0 && tP.safeEmit(BS.SECURITY_POLICY_VIOLATION, e));
    };
    i && $D.removeEventListener("securitypolicyviolation", i), (t || e && "function" == typeof e || tP.getListeners(BS.SECURITY_POLICY_VIOLATION).length > 0) && $D.addEventListener("securitypolicyviolation", n), tP._cspEventHandlerPointer = n;
  }
  BE("PROCESS_ID", "process-".concat(ZI(8, ""), "-").concat(ZI(4, ""), "-").concat(ZI(4, ""), "-").concat(ZI(4, ""), "-").concat(ZI(12, ""))), function () {
    const e = xh();
    qS.getDisplayMedia = function (e) {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) return !0;
      return !1;
    }(), qS.getStreamFromExtension = e.name === wh.CHROME && Number(e.version) > 34, qS.supportUnifiedPlan = function () {
      if (!window.RTCRtpTransceiver) return !1;
      if (!("currentDirection" in RTCRtpTransceiver.prototype)) return !1;
      const e = new RTCPeerConnection();
      let t = !1;
      try {
        e.addTransceiver("audio"), t = !0;
      } catch (e) {}
      return e.close(), t;
    }(), qS.supportMinBitrate = e.name === wh.CHROME || e.name === wh.EDGE, qS.supportSetRtpSenderParameters = function () {
      const e = xh();
      if (!window.RTCRtpSender || !window.RTCRtpSender.prototype.setParameters || !window.RTCRtpSender.prototype.getParameters) return !1;
      return !!rp() || !(!Hh() && !Fh()) || e.name === wh.FIREFOX && Number(e.version) >= 64;
    }(), e.name === wh.SAFARI && (Number(e.version) >= 14 ? qS.supportDualStream = !0 : qS.supportDualStream = !1), qS.webAudioMediaStreamDest = function () {
      const e = xh();
      if (e.name === wh.SAFARI && Number(e.version) < 12) return !1;
      return !0;
    }(), qS.supportReplaceTrack = function () {
      if (!window.RTCRtpSender) return !1;
      if ("function" == typeof RTCRtpSender.prototype.replaceTrack) return !0;
      return !1;
    }(), qS.supportWebGL = "undefined" != typeof WebGLRenderingContext, qS.supportRequestFrame = !!window.CanvasCaptureMediaStreamTrack, rp() || (qS.webAudioWithAEC = !0), qS.supportShareAudio = function () {
      const e = xh();
      if ((e.os === bh.WIN_10 || e.os === bh.WIN_81 || e.os === bh.WIN_7 || e.os === bh.LINUX || e.os === bh.MAC_OS) && e.name === wh.CHROME && Number(e.version) >= 74) return !0;
      return !1;
    }(), qS.supportDualStreamEncoding = function () {
      const e = xh();
      if (GE("DISABLE_WEBAUDIO")) return !0;
      return "Safari" === e.name && Number(e.version) >= 14 || !!("Chrome" === e.name && /Windows/i.test(e.os || "") && Number(e.version) >= 100 && GE("CHROME_DUAL_STREAM_USE_ENCODING"));
    }(), qS.supportDataChannel = function () {
      if (qh(76) || function (e) {
        const t = xh();
        return !(t.name !== wh.FIREFOX || !t.osVersion) && Number(t.version) >= e;
      }(68) || function (e) {
        const t = xh();
        return !(t.name !== wh.SAFARI || !t.osVersion) && Number(t.version) >= e;
      }(14)) return !0;
      return !1;
    }(), qS.supportPCSetConfiguration = function () {
      const e = window.RTCPeerConnection;
      return !Kh() && !!e && e.prototype.setConfiguration instanceof Function;
    }(), qS.supportWebRTCEncodedTransform = function () {
      const e = xh();
      return "Chrome" === e.name && Number(e.version) >= 86;
    }(), OE.info("browser compatibility", JSON.stringify(qS), JSON.stringify(e));
  }(), function () {
    let e;
    try {
      e = window.localStorage.getItem("websdk_ng_global_parameter");
    } catch (e) {
      return void OE.error("Error loading sdk config", e.message);
    }
    if (e) try {
      const t = JSON.parse(window.atob(e)),
        i = Date.now();
      OE.debug("Loading global parameters from cache", t), Object.keys(t).forEach(e => {
        if (Object.prototype.hasOwnProperty.call(WE, e)) {
          const {
            value: n,
            expires: r
          } = t[e];
          if (r && r <= i) return;
          HE[e] = n, WE[e] = n;
        }
      });
    } catch (t) {
      OE.error("Error loading mutableParamsCache: ".concat(e), t.message);
    }
  }(), Array.isArray(HE.AREAS) && HE.AREAS.length > 0 && qC(HE.AREAS, !0);
  const tP = function (e) {
    const t = new EE(),
      i = e,
      n = {
        getListeners: t.getListeners.bind(t),
        on: (e, i) => (function (e, t) {
          e === BS.SECURITY_POLICY_VIOLATION && eP(t, !0);
        }(e, i), t.on.bind(t)(e, i)),
        addListener: t.addListener.bind(t),
        once: t.once.bind(t),
        off: t.off.bind(t),
        removeAllListeners: t.removeAllListeners.bind(t),
        emit: t.emit.bind(t),
        safeEmit: t.safeEmit.bind(t)
      };
    return ZD(ZD({}, i), n);
  }({
    __CLIENT_LIST__: zE,
    __TRACK_LIST__: QE,
    VERSION: bE,
    BUILD: NE,
    setParameter: (e, t, i) => {
      OE.debug("setParameter key:".concat(e, ", value:").concat(JSON.stringify(t))), BE(e, t, i);
    },
    getParameter: GE,
    getSupportedCodec: async function () {
      let e = {
        audio: [],
        video: []
      };
      try {
        let t = new RTCPeerConnection();
        t.addTransceiver("video", {
          direction: "recvonly"
        }), t.addTransceiver("audio", {
          direction: "recvonly"
        });
        const i = (await t.createOffer()).sdp;
        if (!i) return e;
        t.close(), t = null, e = function (e) {
          const t = {
            video: [],
            audio: []
          };
          return e.match(/ VP8/i) && t.video.push("VP8"), e.match(/ VP9/i) && t.video.push("VP9"), e.match(/ AV1/i) && t.video.push("AV1"), e.match(/ H264/i) && t.video.push("H264"), e.match(/ H265/i) && t.video.push("H265"), e.match(/ opus/i) && t.audio.push("OPUS"), e.match(/ PCMU/i) && t.audio.push("PCMU"), e.match(/ PCMA/i) && t.audio.push("PCMA"), e.match(/ G722/i) && t.audio.push("G722"), t;
        }(i);
      } catch (e) {
        throw new SE(fE.CREATE_OFFER_FAILED, e.toString && e.toString()).print();
      }
      return e;
    },
    checkSystemRequirements: function () {
      const e = Pg.reportApiInvoke(null, {
        name: _f.CHECK_SYSTEM_REQUIREMENTS,
        options: [],
        tag: Ef.TRACER
      });
      let t = !1;
      try {
        const e = window.RTCPeerConnection,
          i = navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
          n = window.WebSocket;
        t = !!(e && i && n);
      } catch (e) {
        return OE.error("check system requirement failed: ", e), !1;
      }
      let i = !1;
      const n = xh();
      n.name === wh.CHROME && Number(n.version) >= 58 && (!Gh() || Bh()) && (i = !0), n.name === wh.FIREFOX && Number(n.version) >= 56 && (i = !0), n.name === wh.OPERA && Number(n.version) >= 45 && (i = !0), n.name === wh.SAFARI && Number(n.version) >= 11 && (i = !0), (ip() || xh().name === wh.QQ) && (i = !0), OE.debug("checkSystemRequirements, api:", t, "browser", i);
      const r = t && i;
      return e.onSuccess(r), r;
    },
    getDevices: function (e) {
      return lR.enumerateDevices(!0, !0, e);
    },
    getMicrophones: function (e) {
      return lR.getRecordingDevices(e);
    },
    getCameras: function (e) {
      return lR.getCamerasDevices(e);
    },
    getElectronScreenSources: eR,
    getPlaybackDevices: function (e) {
      return lR.getSpeakers(e);
    },
    createClient: function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        codec: "vp8",
        audioCodec: "opus",
        mode: "rtc"
      };
      const t = Pg.reportApiInvoke(null, {
        name: _f.CREATE_CLIENT,
        options: [e],
        tag: Ef.TRACER
      });
      try {
        Mf(e);
      } catch (e) {
        throw t.onError(e), e;
      }
      return void 0 === e.audioCodec && (e.audioCodec = "opus"), t.onSuccess(), new xD(UD(UD({
        forceWaitGatewayResponse: !0
      }, e), {}, {
        role: "rtc" === e.mode ? "host" : e.role || "audience"
      }));
    },
    createCameraVideoTrack: async function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = Pg.reportApiInvoke(null, {
          tag: Ef.TRACER,
          name: _f.CREATE_CAM_VIDEO_TRACK,
          options: [GD({}, e)]
        }),
        i = Mv(e),
        n = ZI(8, "track-cam-");
      let r = null;
      OE.info("start create camera video track with config", JSON.stringify(e), "trackId", n);
      try {
        r = (await aR({
          video: i
        }, n)).getVideoTracks()[0] || null;
      } catch (e) {
        throw t.onError(e), e;
      }
      if (!r) {
        const e = new SE(fE.UNEXPECTED_ERROR, "can not find track in media stream");
        return t.onError(e), e.throw();
      }
      e.optimizationMode && WD(n, r, e, UE(e.encoderConfig));
      const o = new vy(r, e, i, e.scalabiltyMode ? VE(e.scalabiltyMode) : {
        numSpatialLayers: 1,
        numTemporalLayers: 1
      }, e.optimizationMode, n);
      return t.onSuccess(o.getTrackId()), OE.info("create camera video success, trackId:", n), o;
    },
    createCustomVideoTrack: function (e) {
      const t = Pg.reportApiInvoke(null, {
          tag: Ef.TRACER,
          name: _f.CREATE_CUSTOM_VIDEO_TRACK,
          options: [e]
        }),
        i = new Cy(e.mediaStreamTrack, {
          width: e.width,
          height: e.height,
          frameRate: e.frameRate,
          bitrateMax: e.bitrateMax,
          bitrateMin: e.bitrateMin
        }, e.scalabiltyMode ? VE(e.scalabiltyMode) : {
          numSpatialLayers: 1,
          numTemporalLayers: 1
        }, e.optimizationMode, ZI(8, "track-cus-"), [lS.CUSTOM_TRACK]);
      return t.onSuccess(i.getTrackId()), OE.info("create custom video track success with config", e, "trackId", i.getTrackId()), i;
    },
    createScreenVideoTrack: async function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "disable";
      const i = Pg.reportApiInvoke(null, {
        tag: Ef.TRACER,
        name: _f.CREATE_SCREEN_VIDEO_TRACK,
        options: [GD({}, e), t]
      });
      e.encoderConfig ? "string" == typeof e.encoderConfig || e.encoderConfig.width && e.encoderConfig.height || (e.encoderConfig.width = {
        max: 1920
      }, e.encoderConfig.height = {
        max: 1080
      }) : e.encoderConfig = "1080p_2";
      const n = Uv(e),
        r = ZI(8, "track-scr-v-");
      let o = null,
        s = null;
      const a = JS();
      if (!a.supportShareAudio && "enable" === t) {
        const e = new SE(fE.NOT_SUPPORTED, "your browser or platform is not support share-screen with audio");
        return i.onError(e), e.throw();
      }
      OE.info("start create screen video track with config", e, "withAudio", t, "trackId", r);
      try {
        const e = await aR({
          screen: n,
          screenAudio: "auto" === t ? a.supportShareAudio : "enable" === t
        }, r);
        o = e.getVideoTracks()[0] || null, s = e.getAudioTracks()[0] || null;
      } catch (e) {
        throw i.onError(e), e;
      }
      if (!o) {
        const e = new SE(fE.UNEXPECTED_ERROR, "can not find track in media stream");
        return i.onError(e), e.throw();
      }
      if (!s && "enable" === t) {
        o && o.stop();
        const e = new SE(fE.SHARE_AUDIO_NOT_ALLOWED);
        return i.onError(e), e.throw();
      }
      e.optimizationMode || (e.optimizationMode = "detail"), e.optimizationMode && (WD(r, o, e, e.encoderConfig && xE(e.encoderConfig)), e.encoderConfig && "string" != typeof e.encoderConfig && (e.encoderConfig.bitrateMin = e.encoderConfig.bitrateMax));
      const c = new Cy(o, e.encoderConfig ? xE(e.encoderConfig) : {}, e.scalabiltyMode ? VE(e.scalabiltyMode) : {
        numSpatialLayers: 1,
        numTemporalLayers: 1
      }, e.optimizationMode, r, [lS.SCREEN_TRACK]);
      if (!s) return i.onSuccess(c.getTrackId()), OE.info("create screen video track success", "video:", c.getTrackId()), c;
      const d = new yI(s, void 0, ZI(8, "track-scr-a-"), !1, !0);
      return i.onSuccess([c.getTrackId(), d.getTrackId()]), OE.info("create screen video track success", "video:", c.getTrackId(), "audio:", d.getTrackId()), [c, d];
    },
    createMicrophoneAndCameraTracks: async function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const i = Pg.reportApiInvoke(null, {
          tag: Ef.TRACER,
          name: _f.CREATE_MIC_AND_CAM_TRACKS,
          options: [e, t]
        }),
        n = Mv(t),
        r = xv(e),
        o = ZI(8, "track-mic-"),
        s = ZI(8, "track-cam-");
      let a = null,
        c = null;
      OE.info("start create camera video track(".concat(s, ") and microphone audio track(").concat(o, ") with config, audio: ").concat(JSON.stringify(e), ", video: ").concat(JSON.stringify(t)));
      try {
        const e = await aR({
          audio: r,
          video: n
        }, "".concat(o, "-").concat(s));
        a = e.getAudioTracks()[0], c = e.getVideoTracks()[0];
      } catch (e) {
        throw i.onError(e), e;
      }
      if (!a || !c) {
        const e = new SE(fE.UNEXPECTED_ERROR, "can not find tracks in media stream");
        return i.onError(e), e.throw();
      }
      t.optimizationMode && WD(s, c, t, UE(t.encoderConfig));
      const d = new AI(a, e, r, o),
        u = new vy(c, t, n, t.scalabiltyMode ? VE(t.scalabiltyMode) : {
          numSpatialLayers: 1,
          numTemporalLayers: 1
        }, t.optimizationMode, s);
      return i.onSuccess([d.getTrackId(), u.getTrackId()]), OE.info("create camera video track(".concat(s, ") and microphone audio track(").concat(o, ") success")), [d, u];
    },
    createMicrophoneAudioTrack: async function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = Pg.reportApiInvoke(null, {
          tag: Ef.TRACER,
          name: _f.CREATE_MIC_AUDIO_TRACK,
          options: [e]
        }),
        i = xv(e),
        n = ZI(8, "track-mic-");
      let r = null;
      OE.info("start create microphone audio track with config", JSON.stringify(e), "trackId", n);
      try {
        r = (await aR({
          audio: i
        }, n)).getAudioTracks()[0] || null;
      } catch (e) {
        throw t.onError(e), e;
      }
      if (!r) {
        const e = new SE(fE.UNEXPECTED_ERROR, "can not find track in media stream");
        return t.onError(e), e.throw();
      }
      const o = new AI(r, e, i, n);
      return t.onSuccess(o.getTrackId()), OE.info("create microphone audio track success, trackId:", n), o;
    },
    createCustomAudioTrack: function (e) {
      const t = Pg.reportApiInvoke(null, {
          tag: Ef.TRACER,
          name: _f.CREATE_CUSTOM_AUDIO_TRACK,
          options: [e]
        }),
        i = new yI(e.mediaStreamTrack, e.encoderConfig ? FE(e.encoderConfig) : {}, ZI(8, "track-cus-"), !1, !0);
      return OE.info("create custom audio track success with config", e, "trackId", i.getTrackId()), t.onSuccess(i.getTrackId()), i;
    },
    createBufferSourceAudioTrack: async function (e) {
      const t = Pg.reportApiInvoke(null, {
        tag: Ef.TRACER,
        name: _f.CREATE_BUFFER_AUDIO_TRACK,
        options: [e]
      });
      if (GE("DISABLE_WEBAUDIO")) throw new SE(fE.NOT_SUPPORTED, "can not create BufferSourceAudioTrack when WebAudio disabled");
      const i = ZI(8, "track-buf-");
      OE.info("start create buffer source audio track with config", JSON.stringify(e), "trackId", i);
      const n = e.source;
      if (!(e.source instanceof AudioBuffer)) try {
        e.source = await FD(e.source, e.cacheOnlineFile);
      } catch (e) {
        return t.onError(e), e.throw();
      }
      const r = new VD(e.source),
        o = new OI(n, r, e.encoderConfig ? FE(e.encoderConfig) : {}, i);
      return OE.info("create buffer source audio track success, trackId:", i), t.onSuccess(o.getTrackId()), o;
    },
    setAppType: function (e) {
      if (OE.debug("setAppType: ".concat(e)), !(Number.isInteger(e) && e >= 0)) throw OE.debug("Invalid appType"), new SE(fE.INVALID_PARAMS, "invalid app type", e);
      BE("APP_TYPE", Math.floor(e));
    },
    setLogLevel: function (e) {
      OE.setLogLevel(e);
    },
    enableLogUpload: function () {
      GE("USE_NEW_LOG") ? BE("UPLOAD_LOG", !0) : OE.enableLogUpload();
    },
    disableLogUpload: function () {
      GE("USE_NEW_LOG") ? BE("UPLOAD_LOG", !1) : OE.disableLogUpload();
    },
    createChannelMediaRelayConfiguration: function () {
      return new vv();
    },
    checkAudioTrackIsActive: async function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5000;
      const i = Pg.reportApiInvoke(null, {
        tag: Ef.TRACER,
        name: _f.CHECK_AUDIO_TRACK_IS_ACTIVE,
        options: [t]
      });
      if (!(e instanceof yI || e instanceof nb)) {
        const e = new SE(fE.INVALID_TRACK, "the parameter is not a audio track");
        return i.onError(e), e.throw();
      }
      t && t < 1000 && (t = 1000);
      const n = e instanceof yI ? e.getTrackLabel() : "remote_track",
        r = e.getVolumeLevel();
      let o = r,
        s = r;
      const a = Date.now();
      return new Sl(r => {
        const c = setInterval(() => {
          const d = e.getVolumeLevel();
          o = d > o ? d : o, s = d < s ? d : s;
          const u = o - s > 0.0001,
            l = Date.now() - a;
          if (u || l > t) {
            clearInterval(c);
            const t = u,
              s = {
                duration: l,
                deviceLabel: n,
                maxVolumeLevel: o,
                result: t
              };
            OE.info("[track-".concat(e.getTrackId(), "] check audio track active completed. ").concat(JSON.stringify(s))), i.onSuccess(s), r(t);
          }
        }, 200);
      });
    },
    checkVideoTrackIsActive: async function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5000;
      const i = Pg.reportApiInvoke(null, {
        tag: Ef.TRACER,
        name: _f.CHECK_VIDEO_TRACK_IS_ACTIVE,
        options: [t]
      });
      if (!(e instanceof Cy || e instanceof ib)) {
        const e = new SE(fE.INVALID_TRACK, "the parameter is not a video track");
        return i.onError(e), e.throw();
      }
      const n = 4;
      t && t < 1000 && (t = 1000);
      const r = e instanceof Cy ? e.getTrackLabel() : "remote_track",
        o = e.getMediaStreamTrack(!0),
        s = document.createElement("video");
      s.style.width = "1px", s.style.height = "1px", s.setAttribute("muted", ""), s.muted = !0, s.setAttribute("playsinline", ""), s.controls = !1, (Hh() || Fh()) && (s.style.opacity = "0.01", s.style.position = "fixed", s.style.left = "0", s.style.top = "0", document.body.appendChild(s)), s.srcObject = new MediaStream([o]), s.play();
      const a = document.createElement("canvas");
      a.width = 160, a.height = 120;
      let c = 0,
        d = 0;
      try {
        const e = Date.now();
        c = await KD(s, t, a, n), d = Date.now() - e;
      } catch (e) {
        throw i.onError(e), e;
      }
      HD === wh.SAFARI && (s.pause(), s.remove()), s.srcObject = null;
      const u = c > n,
        l = {
          duration: d,
          changedPicNum: c,
          deviceLabel: r,
          result: u
        };
      return OE.info("[track-".concat(e.getTrackId(), "] check video track active completed. ").concat(JSON.stringify(l))), i.onSuccess(l), u;
    },
    setArea: qC,
    audioElementPlayCenter: pR,
    processExternalMediaAEC: function (e) {
      zD.processExternalMediaAEC(e);
    },
    registerExtensions: function (e) {
      e.forEach(e => {
        const t = e;
        t.__registered__ = !0, t.logger.hookLog = OE.extLog, t.reporter.hookApiInvoke = Pg.extApiInvoke, t.parameters && Object.keys(t.parameters).forEach(e => {
          t.parameters[e] = GE(e);
        });
      });
    },
    ChannelMediaRelayError: oS,
    ChannelMediaRelayEvent: nS,
    ChannelMediaRelayState: rS,
    RemoteStreamFallbackType: _S,
    RemoteStreamType: pS,
    ConnectionDisconnectedReason: vf,
    AudienceLatencyLevelType: Cf,
    AREAS: SS
  });
  return Object.defineProperties(tP, {
    onAudioAutoplayFailed: {
      get: () => vg.onAudioAutoplayFailed,
      set: e => {
        vg.onAudioAutoplayFailed = e;
      }
    },
    onAutoplayFailed: {
      get: () => vg.onAutoplayFailed,
      set: e => {
        vg.onAutoplayFailed = e;
      }
    },
    _onSecurityPolicyViolation: {
      value: void 0,
      writable: !0
    },
    _cspEventHandlerPointer: {
      value: void 0,
      writable: !0
    },
    onSecurityPolicyViolation: {
      get: () => tP._onSecurityPolicyViolation,
      set(e) {
        tP._onSecurityPolicyViolation = e, eP(e);
      }
    }
  }), lR.on(ff.CAMERA_DEVICE_CHANGED, e => {
    OE.info("camera device changed", JSON.stringify(e)), tP.onCameraChanged && tP.onCameraChanged(e), tP.safeEmit(BS.CAMERA_CHANGED, e);
  }), lR.on(ff.RECORDING_DEVICE_CHANGED, e => {
    OE.info("microphone device changed", JSON.stringify(e)), tP.onMicrophoneChanged && tP.onMicrophoneChanged(e), tP.safeEmit(BS.MICROPHONE_CHANGED, e);
  }), lR.on(ff.PLAYOUT_DEVICE_CHANGED, e => {
    OE.debug("playout device changed", JSON.stringify(e)), tP.onPlaybackDeviceChanged && tP.onPlaybackDeviceChanged(e), tP.safeEmit(BS.PLAYBACK_DEVICE_CHANGED, e);
  }), pR.onAutoplayFailed = () => {
    OE.info("detect audio element autoplay failed"), vg.onAudioAutoplayFailed && vg.onAudioAutoplayFailed();
  }, Gg.on("autoplay-failed", () => {
    OE.info("detect webaudio autoplay failed"), vg.onAudioAutoplayFailed && vg.onAudioAutoplayFailed(), tP.safeEmit(BS.AUTOPLAY_FAILED);
  }), window && (window.__ARTC__ = tP), tP;
});
