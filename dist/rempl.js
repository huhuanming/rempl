window.rempl = function rempl() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var require_socket_io_slim = __commonJS({
    "node_modules/socket.io-client/dist/socket.io.slim.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.io = e() : t.io = e();
      }(exports, function() {
        return function(t) {
          function e(n) {
            if (r[n])
              return r[n].exports;
            var o = r[n] = { exports: {}, id: n, loaded: false };
            return t[n].call(o.exports, o, o.exports, e), o.loaded = true, o.exports;
          }
          var r = {};
          return e.m = t, e.c = r, e.p = "", e(0);
        }([function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            (typeof t2 == "undefined" ? "undefined" : o(t2)) === "object" && (e2 = t2, t2 = void 0), e2 = e2 || {};
            var r2, n2 = i(t2), s2 = n2.source, p = n2.id, h = n2.path, u = c[p] && h in c[p].nsps, f = e2.forceNew || e2["force new connection"] || e2.multiplex === false || u;
            return f ? r2 = a(s2, e2) : (c[p] || (c[p] = a(s2, e2)), r2 = c[p]), n2.query && !e2.query && (e2.query = n2.query), r2.socket(n2.path, e2);
          }
          var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(1), s = r(4), a = r(9);
          r(3)("socket.io-client");
          t.exports = e = n;
          var c = e.managers = {};
          e.protocol = s.protocol, e.connect = n, e.Manager = r(9), e.Socket = r(34);
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            var r2 = t2;
            e2 = e2 || typeof location != "undefined" && location, t2 == null && (t2 = e2.protocol + "//" + e2.host), typeof t2 == "string" && (t2.charAt(0) === "/" && (t2 = t2.charAt(1) === "/" ? e2.protocol + t2 : e2.host + t2), /^(https?|wss?):\/\//.test(t2) || (t2 = typeof e2 != "undefined" ? e2.protocol + "//" + t2 : "https://" + t2), r2 = o(t2)), r2.port || (/^(http|ws)$/.test(r2.protocol) ? r2.port = "80" : /^(http|ws)s$/.test(r2.protocol) && (r2.port = "443")), r2.path = r2.path || "/";
            var n2 = r2.host.indexOf(":") !== -1, i = n2 ? "[" + r2.host + "]" : r2.host;
            return r2.id = r2.protocol + "://" + i + ":" + r2.port, r2.href = r2.protocol + "://" + i + (e2 && e2.port === r2.port ? "" : ":" + r2.port), r2;
          }
          var o = r(2);
          r(3)("socket.io-client:url");
          t.exports = n;
        }, function(t, e) {
          function r(t2, e2) {
            var r2 = /\/{2,9}/g, n2 = e2.replace(r2, "/").split("/");
            return e2.substr(0, 1) != "/" && e2.length !== 0 || n2.splice(0, 1), e2.substr(e2.length - 1, 1) == "/" && n2.splice(n2.length - 1, 1), n2;
          }
          function n(t2, e2) {
            var r2 = {};
            return e2.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t3, e3, n2) {
              e3 && (r2[e3] = n2);
            }), r2;
          }
          var o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
          t.exports = function(t2) {
            var e2 = t2, s = t2.indexOf("["), a = t2.indexOf("]");
            s != -1 && a != -1 && (t2 = t2.substring(0, s) + t2.substring(s, a).replace(/:/g, ";") + t2.substring(a, t2.length));
            for (var c = o.exec(t2 || ""), p = {}, h = 14; h--; )
              p[i[h]] = c[h] || "";
            return s != -1 && a != -1 && (p.source = e2, p.host = p.host.substring(1, p.host.length - 1).replace(/;/g, ":"), p.authority = p.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), p.ipv6uri = true), p.pathNames = r(p, p.path), p.queryKey = n(p, p.query), p;
          };
        }, function(t, e) {
          "use strict";
          t.exports = function() {
            return function() {
            };
          };
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            var r2 = "" + t2.type;
            if (e.BINARY_EVENT !== t2.type && e.BINARY_ACK !== t2.type || (r2 += t2.attachments + "-"), t2.nsp && t2.nsp !== "/" && (r2 += t2.nsp + ","), t2.id != null && (r2 += t2.id), t2.data != null) {
              var n2 = i(t2.data);
              if (n2 === false)
                return m;
              r2 += n2;
            }
            return r2;
          }
          function i(t2) {
            try {
              return JSON.stringify(t2);
            } catch (t3) {
              return false;
            }
          }
          function s(t2, e2) {
            function r2(t3) {
              var r3 = l.deconstructPacket(t3), n2 = o(r3.packet), i2 = r3.buffers;
              i2.unshift(n2), e2(i2);
            }
            l.removeBlobs(t2, r2);
          }
          function a() {
            this.reconstructor = null;
          }
          function c(t2) {
            var r2 = 0, n2 = { type: Number(t2.charAt(0)) };
            if (e.types[n2.type] == null)
              return u("unknown packet type " + n2.type);
            if (e.BINARY_EVENT === n2.type || e.BINARY_ACK === n2.type) {
              for (var o2 = ""; t2.charAt(++r2) !== "-" && (o2 += t2.charAt(r2), r2 != t2.length); )
                ;
              if (o2 != Number(o2) || t2.charAt(r2) !== "-")
                throw new Error("Illegal attachments");
              n2.attachments = Number(o2);
            }
            if (t2.charAt(r2 + 1) === "/")
              for (n2.nsp = ""; ++r2; ) {
                var i2 = t2.charAt(r2);
                if (i2 === ",")
                  break;
                if (n2.nsp += i2, r2 === t2.length)
                  break;
              }
            else
              n2.nsp = "/";
            var s2 = t2.charAt(r2 + 1);
            if (s2 !== "" && Number(s2) == s2) {
              for (n2.id = ""; ++r2; ) {
                var i2 = t2.charAt(r2);
                if (i2 == null || Number(i2) != i2) {
                  --r2;
                  break;
                }
                if (n2.id += t2.charAt(r2), r2 === t2.length)
                  break;
              }
              n2.id = Number(n2.id);
            }
            if (t2.charAt(++r2)) {
              var a2 = p(t2.substr(r2)), c2 = a2 !== false && (n2.type === e.ERROR || d(a2));
              if (!c2)
                return u("invalid payload");
              n2.data = a2;
            }
            return n2;
          }
          function p(t2) {
            try {
              return JSON.parse(t2);
            } catch (t3) {
              return false;
            }
          }
          function h(t2) {
            this.reconPack = t2, this.buffers = [];
          }
          function u(t2) {
            return { type: e.ERROR, data: "parser error: " + t2 };
          }
          var f = (r(3)("socket.io-parser"), r(5)), l = r(6), d = r(7), y = r(8);
          e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = n, e.Decoder = a;
          var m = e.ERROR + '"encode error"';
          n.prototype.encode = function(t2, r2) {
            if (e.BINARY_EVENT === t2.type || e.BINARY_ACK === t2.type)
              s(t2, r2);
            else {
              var n2 = o(t2);
              r2([n2]);
            }
          }, f(a.prototype), a.prototype.add = function(t2) {
            var r2;
            if (typeof t2 == "string")
              r2 = c(t2), e.BINARY_EVENT === r2.type || e.BINARY_ACK === r2.type ? (this.reconstructor = new h(r2), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", r2)) : this.emit("decoded", r2);
            else {
              if (!y(t2) && !t2.base64)
                throw new Error("Unknown type: " + t2);
              if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
              r2 = this.reconstructor.takeBinaryData(t2), r2 && (this.reconstructor = null, this.emit("decoded", r2));
            }
          }, a.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }, h.prototype.takeBinaryData = function(t2) {
            if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
              var e2 = l.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), e2;
            }
            return null;
          }, h.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = [];
          };
        }, function(t, e, r) {
          function n(t2) {
            if (t2)
              return o(t2);
          }
          function o(t2) {
            for (var e2 in n.prototype)
              t2[e2] = n.prototype[e2];
            return t2;
          }
          t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t2, e2) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
          }, n.prototype.once = function(t2, e2) {
            function r2() {
              this.off(t2, r2), e2.apply(this, arguments);
            }
            return r2.fn = e2, this.on(t2, r2), this;
          }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t2, e2) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0)
              return this._callbacks = {}, this;
            var r2 = this._callbacks["$" + t2];
            if (!r2)
              return this;
            if (arguments.length == 1)
              return delete this._callbacks["$" + t2], this;
            for (var n2, o2 = 0; o2 < r2.length; o2++)
              if (n2 = r2[o2], n2 === e2 || n2.fn === e2) {
                r2.splice(o2, 1);
                break;
              }
            return r2.length === 0 && delete this._callbacks["$" + t2], this;
          }, n.prototype.emit = function(t2) {
            this._callbacks = this._callbacks || {};
            for (var e2 = new Array(arguments.length - 1), r2 = this._callbacks["$" + t2], n2 = 1; n2 < arguments.length; n2++)
              e2[n2 - 1] = arguments[n2];
            if (r2) {
              r2 = r2.slice(0);
              for (var n2 = 0, o2 = r2.length; n2 < o2; ++n2)
                r2[n2].apply(this, e2);
            }
            return this;
          }, n.prototype.listeners = function(t2) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
          }, n.prototype.hasListeners = function(t2) {
            return !!this.listeners(t2).length;
          };
        }, function(t, e, r) {
          function n(t2, e2) {
            if (!t2)
              return t2;
            if (s(t2)) {
              var r2 = { _placeholder: true, num: e2.length };
              return e2.push(t2), r2;
            }
            if (i(t2)) {
              for (var o2 = new Array(t2.length), a2 = 0; a2 < t2.length; a2++)
                o2[a2] = n(t2[a2], e2);
              return o2;
            }
            if (typeof t2 == "object" && !(t2 instanceof Date)) {
              var o2 = {};
              for (var c2 in t2)
                o2[c2] = n(t2[c2], e2);
              return o2;
            }
            return t2;
          }
          function o(t2, e2) {
            if (!t2)
              return t2;
            if (t2 && t2._placeholder)
              return e2[t2.num];
            if (i(t2))
              for (var r2 = 0; r2 < t2.length; r2++)
                t2[r2] = o(t2[r2], e2);
            else if (typeof t2 == "object")
              for (var n2 in t2)
                t2[n2] = o(t2[n2], e2);
            return t2;
          }
          var i = r(7), s = r(8), a = Object.prototype.toString, c = typeof Blob == "function" || typeof Blob != "undefined" && a.call(Blob) === "[object BlobConstructor]", p = typeof File == "function" || typeof File != "undefined" && a.call(File) === "[object FileConstructor]";
          e.deconstructPacket = function(t2) {
            var e2 = [], r2 = t2.data, o2 = t2;
            return o2.data = n(r2, e2), o2.attachments = e2.length, { packet: o2, buffers: e2 };
          }, e.reconstructPacket = function(t2, e2) {
            return t2.data = o(t2.data, e2), t2.attachments = void 0, t2;
          }, e.removeBlobs = function(t2, e2) {
            function r2(t3, a2, h) {
              if (!t3)
                return t3;
              if (c && t3 instanceof Blob || p && t3 instanceof File) {
                n2++;
                var u = new FileReader();
                u.onload = function() {
                  h ? h[a2] = this.result : o2 = this.result, --n2 || e2(o2);
                }, u.readAsArrayBuffer(t3);
              } else if (i(t3))
                for (var f = 0; f < t3.length; f++)
                  r2(t3[f], f, t3);
              else if (typeof t3 == "object" && !s(t3))
                for (var l in t3)
                  r2(t3[l], l, t3);
            }
            var n2 = 0, o2 = t2;
            r2(o2), n2 || e2(o2);
          };
        }, function(t, e) {
          var r = {}.toString;
          t.exports = Array.isArray || function(t2) {
            return r.call(t2) == "[object Array]";
          };
        }, function(t, e) {
          function r(t2) {
            return n && Buffer.isBuffer(t2) || o && (t2 instanceof ArrayBuffer || i(t2));
          }
          t.exports = r;
          var n = typeof Buffer == "function" && typeof Buffer.isBuffer == "function", o = typeof ArrayBuffer == "function", i = function(t2) {
            return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t2) : t2.buffer instanceof ArrayBuffer;
          };
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            if (!(this instanceof n))
              return new n(t2, e2);
            t2 && (typeof t2 == "undefined" ? "undefined" : o(t2)) === "object" && (e2 = t2, t2 = void 0), e2 = e2 || {}, e2.path = e2.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e2, this.reconnection(e2.reconnection !== false), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(e2.randomizationFactor || 0.5), this.backoff = new f({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(e2.timeout == null ? 2e4 : e2.timeout), this.readyState = "closed", this.uri = t2, this.connecting = [], this.lastPing = null, this.encoding = false, this.packetBuffer = [];
            var r2 = e2.parser || c;
            this.encoder = new r2.Encoder(), this.decoder = new r2.Decoder(), this.autoConnect = e2.autoConnect !== false, this.autoConnect && this.open();
          }
          var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(10), s = r(34), a = r(5), c = r(4), p = r(36), h = r(37), u = (r(3)("socket.io-client:manager"), r(33)), f = r(38), l = Object.prototype.hasOwnProperty;
          t.exports = n, n.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var t2 in this.nsps)
              l.call(this.nsps, t2) && this.nsps[t2].emit.apply(this.nsps[t2], arguments);
          }, n.prototype.updateSocketIds = function() {
            for (var t2 in this.nsps)
              l.call(this.nsps, t2) && (this.nsps[t2].id = this.generateId(t2));
          }, n.prototype.generateId = function(t2) {
            return (t2 === "/" ? "" : t2 + "#") + this.engine.id;
          }, a(n.prototype), n.prototype.reconnection = function(t2) {
            return arguments.length ? (this._reconnection = !!t2, this) : this._reconnection;
          }, n.prototype.reconnectionAttempts = function(t2) {
            return arguments.length ? (this._reconnectionAttempts = t2, this) : this._reconnectionAttempts;
          }, n.prototype.reconnectionDelay = function(t2) {
            return arguments.length ? (this._reconnectionDelay = t2, this.backoff && this.backoff.setMin(t2), this) : this._reconnectionDelay;
          }, n.prototype.randomizationFactor = function(t2) {
            return arguments.length ? (this._randomizationFactor = t2, this.backoff && this.backoff.setJitter(t2), this) : this._randomizationFactor;
          }, n.prototype.reconnectionDelayMax = function(t2) {
            return arguments.length ? (this._reconnectionDelayMax = t2, this.backoff && this.backoff.setMax(t2), this) : this._reconnectionDelayMax;
          }, n.prototype.timeout = function(t2) {
            return arguments.length ? (this._timeout = t2, this) : this._timeout;
          }, n.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
          }, n.prototype.open = n.prototype.connect = function(t2, e2) {
            if (~this.readyState.indexOf("open"))
              return this;
            this.engine = i(this.uri, this.opts);
            var r2 = this.engine, n2 = this;
            this.readyState = "opening", this.skipReconnect = false;
            var o2 = p(r2, "open", function() {
              n2.onopen(), t2 && t2();
            }), s2 = p(r2, "error", function(e3) {
              if (n2.cleanup(), n2.readyState = "closed", n2.emitAll("connect_error", e3), t2) {
                var r3 = new Error("Connection error");
                r3.data = e3, t2(r3);
              } else
                n2.maybeReconnectOnOpen();
            });
            if (this._timeout !== false) {
              var a2 = this._timeout;
              a2 === 0 && o2.destroy();
              var c2 = setTimeout(function() {
                o2.destroy(), r2.close(), r2.emit("error", "timeout"), n2.emitAll("connect_timeout", a2);
              }, a2);
              this.subs.push({ destroy: function() {
                clearTimeout(c2);
              } });
            }
            return this.subs.push(o2), this.subs.push(s2), this;
          }, n.prototype.onopen = function() {
            this.cleanup(), this.readyState = "open", this.emit("open");
            var t2 = this.engine;
            this.subs.push(p(t2, "data", h(this, "ondata"))), this.subs.push(p(t2, "ping", h(this, "onping"))), this.subs.push(p(t2, "pong", h(this, "onpong"))), this.subs.push(p(t2, "error", h(this, "onerror"))), this.subs.push(p(t2, "close", h(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", h(this, "ondecoded")));
          }, n.prototype.onping = function() {
            this.lastPing = new Date(), this.emitAll("ping");
          }, n.prototype.onpong = function() {
            this.emitAll("pong", new Date() - this.lastPing);
          }, n.prototype.ondata = function(t2) {
            this.decoder.add(t2);
          }, n.prototype.ondecoded = function(t2) {
            this.emit("packet", t2);
          }, n.prototype.onerror = function(t2) {
            this.emitAll("error", t2);
          }, n.prototype.socket = function(t2, e2) {
            function r2() {
              ~u(o2.connecting, n2) || o2.connecting.push(n2);
            }
            var n2 = this.nsps[t2];
            if (!n2) {
              n2 = new s(this, t2, e2), this.nsps[t2] = n2;
              var o2 = this;
              n2.on("connecting", r2), n2.on("connect", function() {
                n2.id = o2.generateId(t2);
              }), this.autoConnect && r2();
            }
            return n2;
          }, n.prototype.destroy = function(t2) {
            var e2 = u(this.connecting, t2);
            ~e2 && this.connecting.splice(e2, 1), this.connecting.length || this.close();
          }, n.prototype.packet = function(t2) {
            var e2 = this;
            t2.query && t2.type === 0 && (t2.nsp += "?" + t2.query), e2.encoding ? e2.packetBuffer.push(t2) : (e2.encoding = true, this.encoder.encode(t2, function(r2) {
              for (var n2 = 0; n2 < r2.length; n2++)
                e2.engine.write(r2[n2], t2.options);
              e2.encoding = false, e2.processPacketQueue();
            }));
          }, n.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
              var t2 = this.packetBuffer.shift();
              this.packet(t2);
            }
          }, n.prototype.cleanup = function() {
            for (var t2 = this.subs.length, e2 = 0; e2 < t2; e2++) {
              var r2 = this.subs.shift();
              r2.destroy();
            }
            this.packetBuffer = [], this.encoding = false, this.lastPing = null, this.decoder.destroy();
          }, n.prototype.close = n.prototype.disconnect = function() {
            this.skipReconnect = true, this.reconnecting = false, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
          }, n.prototype.onclose = function(t2) {
            this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t2), this._reconnection && !this.skipReconnect && this.reconnect();
          }, n.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
              return this;
            var t2 = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = false;
            else {
              var e2 = this.backoff.duration();
              this.reconnecting = true;
              var r2 = setTimeout(function() {
                t2.skipReconnect || (t2.emitAll("reconnect_attempt", t2.backoff.attempts), t2.emitAll("reconnecting", t2.backoff.attempts), t2.skipReconnect || t2.open(function(e3) {
                  e3 ? (t2.reconnecting = false, t2.reconnect(), t2.emitAll("reconnect_error", e3.data)) : t2.onreconnect();
                }));
              }, e2);
              this.subs.push({ destroy: function() {
                clearTimeout(r2);
              } });
            }
          }, n.prototype.onreconnect = function() {
            var t2 = this.backoff.attempts;
            this.reconnecting = false, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t2);
          };
        }, function(t, e, r) {
          t.exports = r(11), t.exports.parser = r(19);
        }, function(t, e, r) {
          function n(t2, e2) {
            return this instanceof n ? (e2 = e2 || {}, t2 && typeof t2 == "object" && (e2 = t2, t2 = null), t2 ? (t2 = p(t2), e2.hostname = t2.host, e2.secure = t2.protocol === "https" || t2.protocol === "wss", e2.port = t2.port, t2.query && (e2.query = t2.query)) : e2.host && (e2.hostname = p(e2.host).host), this.secure = e2.secure != null ? e2.secure : typeof location != "undefined" && location.protocol === "https:", e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.agent = e2.agent || false, this.hostname = e2.hostname || (typeof location != "undefined" ? location.hostname : "localhost"), this.port = e2.port || (typeof location != "undefined" && location.port ? location.port : this.secure ? 443 : 80), this.query = e2.query || {}, typeof this.query == "string" && (this.query = h.decode(this.query)), this.upgrade = e2.upgrade !== false, this.path = (e2.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e2.forceJSONP, this.jsonp = e2.jsonp !== false, this.forceBase64 = !!e2.forceBase64, this.enablesXDR = !!e2.enablesXDR, this.withCredentials = e2.withCredentials !== false, this.timestampParam = e2.timestampParam || "t", this.timestampRequests = e2.timestampRequests, this.transports = e2.transports || ["polling", "websocket"], this.transportOptions = e2.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e2.policyPort || 843, this.rememberUpgrade = e2.rememberUpgrade || false, this.binaryType = null, this.onlyBinaryUpgrades = e2.onlyBinaryUpgrades, this.perMessageDeflate = e2.perMessageDeflate !== false && (e2.perMessageDeflate || {}), this.perMessageDeflate === true && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = e2.pfx || null, this.key = e2.key || null, this.passphrase = e2.passphrase || null, this.cert = e2.cert || null, this.ca = e2.ca || null, this.ciphers = e2.ciphers || null, this.rejectUnauthorized = e2.rejectUnauthorized === void 0 || e2.rejectUnauthorized, this.forceNode = !!e2.forceNode, this.isReactNative = typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self == "undefined" || this.isReactNative) && (e2.extraHeaders && Object.keys(e2.extraHeaders).length > 0 && (this.extraHeaders = e2.extraHeaders), e2.localAddress && (this.localAddress = e2.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new n(t2, e2);
          }
          function o(t2) {
            var e2 = {};
            for (var r2 in t2)
              t2.hasOwnProperty(r2) && (e2[r2] = t2[r2]);
            return e2;
          }
          var i = r(12), s = r(5), a = (r(3)("engine.io-client:socket"), r(33)), c = r(19), p = r(2), h = r(27);
          t.exports = n, n.priorWebsocketSuccess = false, s(n.prototype), n.protocol = c.protocol, n.Socket = n, n.Transport = r(18), n.transports = r(12), n.parser = r(19), n.prototype.createTransport = function(t2) {
            var e2 = o(this.query);
            e2.EIO = c.protocol, e2.transport = t2;
            var r2 = this.transportOptions[t2] || {};
            this.id && (e2.sid = this.id);
            var n2 = new i[t2]({ query: e2, socket: this, agent: r2.agent || this.agent, hostname: r2.hostname || this.hostname, port: r2.port || this.port, secure: r2.secure || this.secure, path: r2.path || this.path, forceJSONP: r2.forceJSONP || this.forceJSONP, jsonp: r2.jsonp || this.jsonp, forceBase64: r2.forceBase64 || this.forceBase64, enablesXDR: r2.enablesXDR || this.enablesXDR, withCredentials: r2.withCredentials || this.withCredentials, timestampRequests: r2.timestampRequests || this.timestampRequests, timestampParam: r2.timestampParam || this.timestampParam, policyPort: r2.policyPort || this.policyPort, pfx: r2.pfx || this.pfx, key: r2.key || this.key, passphrase: r2.passphrase || this.passphrase, cert: r2.cert || this.cert, ca: r2.ca || this.ca, ciphers: r2.ciphers || this.ciphers, rejectUnauthorized: r2.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: r2.perMessageDeflate || this.perMessageDeflate, extraHeaders: r2.extraHeaders || this.extraHeaders, forceNode: r2.forceNode || this.forceNode, localAddress: r2.localAddress || this.localAddress, requestTimeout: r2.requestTimeout || this.requestTimeout, protocols: r2.protocols || void 0, isReactNative: this.isReactNative });
            return n2;
          }, n.prototype.open = function() {
            var t2;
            if (this.rememberUpgrade && n.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
              t2 = "websocket";
            else {
              if (this.transports.length === 0) {
                var e2 = this;
                return void setTimeout(function() {
                  e2.emit("error", "No transports available");
                }, 0);
              }
              t2 = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t2 = this.createTransport(t2);
            } catch (t3) {
              return this.transports.shift(), void this.open();
            }
            t2.open(), this.setTransport(t2);
          }, n.prototype.setTransport = function(t2) {
            var e2 = this;
            this.transport && this.transport.removeAllListeners(), this.transport = t2, t2.on("drain", function() {
              e2.onDrain();
            }).on("packet", function(t3) {
              e2.onPacket(t3);
            }).on("error", function(t3) {
              e2.onError(t3);
            }).on("close", function() {
              e2.onClose("transport close");
            });
          }, n.prototype.probe = function(t2) {
            function e2() {
              if (u.onlyBinaryUpgrades) {
                var t3 = !this.supportsBinary && u.transport.supportsBinary;
                h2 = h2 || t3;
              }
              h2 || (p2.send([{ type: "ping", data: "probe" }]), p2.once("packet", function(t4) {
                if (!h2)
                  if (t4.type === "pong" && t4.data === "probe") {
                    if (u.upgrading = true, u.emit("upgrading", p2), !p2)
                      return;
                    n.priorWebsocketSuccess = p2.name === "websocket", u.transport.pause(function() {
                      h2 || u.readyState !== "closed" && (c2(), u.setTransport(p2), p2.send([{ type: "upgrade" }]), u.emit("upgrade", p2), p2 = null, u.upgrading = false, u.flush());
                    });
                  } else {
                    var e3 = new Error("probe error");
                    e3.transport = p2.name, u.emit("upgradeError", e3);
                  }
              }));
            }
            function r2() {
              h2 || (h2 = true, c2(), p2.close(), p2 = null);
            }
            function o2(t3) {
              var e3 = new Error("probe error: " + t3);
              e3.transport = p2.name, r2(), u.emit("upgradeError", e3);
            }
            function i2() {
              o2("transport closed");
            }
            function s2() {
              o2("socket closed");
            }
            function a2(t3) {
              p2 && t3.name !== p2.name && r2();
            }
            function c2() {
              p2.removeListener("open", e2), p2.removeListener("error", o2), p2.removeListener("close", i2), u.removeListener("close", s2), u.removeListener("upgrading", a2);
            }
            var p2 = this.createTransport(t2, { probe: 1 }), h2 = false, u = this;
            n.priorWebsocketSuccess = false, p2.once("open", e2), p2.once("error", o2), p2.once("close", i2), this.once("close", s2), this.once("upgrading", a2), p2.open();
          }, n.prototype.onOpen = function() {
            if (this.readyState = "open", n.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause)
              for (var t2 = 0, e2 = this.upgrades.length; t2 < e2; t2++)
                this.probe(this.upgrades[t2]);
          }, n.prototype.onPacket = function(t2) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
              switch (this.emit("packet", t2), this.emit("heartbeat"), t2.type) {
                case "open":
                  this.onHandshake(JSON.parse(t2.data));
                  break;
                case "pong":
                  this.setPing(), this.emit("pong");
                  break;
                case "error":
                  var e2 = new Error("server error");
                  e2.code = t2.data, this.onError(e2);
                  break;
                case "message":
                  this.emit("data", t2.data), this.emit("message", t2.data);
              }
          }, n.prototype.onHandshake = function(t2) {
            this.emit("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.upgrades = this.filterUpgrades(t2.upgrades), this.pingInterval = t2.pingInterval, this.pingTimeout = t2.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
          }, n.prototype.onHeartbeat = function(t2) {
            clearTimeout(this.pingTimeoutTimer);
            var e2 = this;
            e2.pingTimeoutTimer = setTimeout(function() {
              e2.readyState !== "closed" && e2.onClose("ping timeout");
            }, t2 || e2.pingInterval + e2.pingTimeout);
          }, n.prototype.setPing = function() {
            var t2 = this;
            clearTimeout(t2.pingIntervalTimer), t2.pingIntervalTimer = setTimeout(function() {
              t2.ping(), t2.onHeartbeat(t2.pingTimeout);
            }, t2.pingInterval);
          }, n.prototype.ping = function() {
            var t2 = this;
            this.sendPacket("ping", function() {
              t2.emit("ping");
            });
          }, n.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush();
          }, n.prototype.flush = function() {
            this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }, n.prototype.write = n.prototype.send = function(t2, e2, r2) {
            return this.sendPacket("message", t2, e2, r2), this;
          }, n.prototype.sendPacket = function(t2, e2, r2, n2) {
            if (typeof e2 == "function" && (n2 = e2, e2 = void 0), typeof r2 == "function" && (n2 = r2, r2 = null), this.readyState !== "closing" && this.readyState !== "closed") {
              r2 = r2 || {}, r2.compress = r2.compress !== false;
              var o2 = { type: t2, data: e2, options: r2 };
              this.emit("packetCreate", o2), this.writeBuffer.push(o2), n2 && this.once("flush", n2), this.flush();
            }
          }, n.prototype.close = function() {
            function t2() {
              n2.onClose("forced close"), n2.transport.close();
            }
            function e2() {
              n2.removeListener("upgrade", e2), n2.removeListener("upgradeError", e2), t2();
            }
            function r2() {
              n2.once("upgrade", e2), n2.once("upgradeError", e2);
            }
            if (this.readyState === "opening" || this.readyState === "open") {
              this.readyState = "closing";
              var n2 = this;
              this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? r2() : t2();
              }) : this.upgrading ? r2() : t2();
            }
            return this;
          }, n.prototype.onError = function(t2) {
            n.priorWebsocketSuccess = false, this.emit("error", t2), this.onClose("transport error", t2);
          }, n.prototype.onClose = function(t2, e2) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
              var r2 = this;
              clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t2, e2), r2.writeBuffer = [], r2.prevBufferLen = 0;
            }
          }, n.prototype.filterUpgrades = function(t2) {
            for (var e2 = [], r2 = 0, n2 = t2.length; r2 < n2; r2++)
              ~a(this.transports, t2[r2]) && e2.push(t2[r2]);
            return e2;
          };
        }, function(t, e, r) {
          function n(t2) {
            var e2, r2 = false, n2 = false, a2 = t2.jsonp !== false;
            if (typeof location != "undefined") {
              var c = location.protocol === "https:", p = location.port;
              p || (p = c ? 443 : 80), r2 = t2.hostname !== location.hostname || p !== t2.port, n2 = t2.secure !== c;
            }
            if (t2.xdomain = r2, t2.xscheme = n2, e2 = new o(t2), "open" in e2 && !t2.forceJSONP)
              return new i(t2);
            if (!a2)
              throw new Error("JSONP disabled");
            return new s(t2);
          }
          var o = r(13), i = r(16), s = r(30), a = r(31);
          e.polling = n, e.websocket = a;
        }, function(t, e, r) {
          var n = r(14), o = r(15);
          t.exports = function(t2) {
            var e2 = t2.xdomain, r2 = t2.xscheme, i = t2.enablesXDR;
            try {
              if (typeof XMLHttpRequest != "undefined" && (!e2 || n))
                return new XMLHttpRequest();
            } catch (t3) {
            }
            try {
              if (typeof XDomainRequest != "undefined" && !r2 && i)
                return new XDomainRequest();
            } catch (t3) {
            }
            if (!e2)
              try {
                return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
              } catch (t3) {
              }
          };
        }, function(t, e) {
          try {
            t.exports = typeof XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest();
          } catch (e2) {
            t.exports = false;
          }
        }, function(t, e) {
          t.exports = function() {
            return typeof self != "undefined" ? self : typeof window != "undefined" ? window : Function("return this")();
          }();
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            if (c.call(this, t2), this.requestTimeout = t2.requestTimeout, this.extraHeaders = t2.extraHeaders, typeof location != "undefined") {
              var e2 = location.protocol === "https:", r2 = location.port;
              r2 || (r2 = e2 ? 443 : 80), this.xd = typeof location != "undefined" && t2.hostname !== location.hostname || r2 !== t2.port, this.xs = t2.secure !== e2;
            }
          }
          function i(t2) {
            this.method = t2.method || "GET", this.uri = t2.uri, this.xd = !!t2.xd, this.xs = !!t2.xs, this.async = t2.async !== false, this.data = t2.data !== void 0 ? t2.data : null, this.agent = t2.agent, this.isBinary = t2.isBinary, this.supportsBinary = t2.supportsBinary, this.enablesXDR = t2.enablesXDR, this.withCredentials = t2.withCredentials, this.requestTimeout = t2.requestTimeout, this.pfx = t2.pfx, this.key = t2.key, this.passphrase = t2.passphrase, this.cert = t2.cert, this.ca = t2.ca, this.ciphers = t2.ciphers, this.rejectUnauthorized = t2.rejectUnauthorized, this.extraHeaders = t2.extraHeaders, this.create();
          }
          function s() {
            for (var t2 in i.requests)
              i.requests.hasOwnProperty(t2) && i.requests[t2].abort();
          }
          var a = r(13), c = r(17), p = r(5), h = r(28), u = (r(3)("engine.io-client:polling-xhr"), r(15));
          if (t.exports = o, t.exports.Request = i, h(o, c), o.prototype.supportsBinary = true, o.prototype.request = function(t2) {
            return t2 = t2 || {}, t2.uri = this.uri(), t2.xd = this.xd, t2.xs = this.xs, t2.agent = this.agent || false, t2.supportsBinary = this.supportsBinary, t2.enablesXDR = this.enablesXDR, t2.withCredentials = this.withCredentials, t2.pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized, t2.requestTimeout = this.requestTimeout, t2.extraHeaders = this.extraHeaders, new i(t2);
          }, o.prototype.doWrite = function(t2, e2) {
            var r2 = typeof t2 != "string" && t2 !== void 0, n2 = this.request({ method: "POST", data: t2, isBinary: r2 }), o2 = this;
            n2.on("success", e2), n2.on("error", function(t3) {
              o2.onError("xhr post error", t3);
            }), this.sendXhr = n2;
          }, o.prototype.doPoll = function() {
            var t2 = this.request(), e2 = this;
            t2.on("data", function(t3) {
              e2.onData(t3);
            }), t2.on("error", function(t3) {
              e2.onError("xhr poll error", t3);
            }), this.pollXhr = t2;
          }, p(i.prototype), i.prototype.create = function() {
            var t2 = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
            t2.pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized;
            var e2 = this.xhr = new a(t2), r2 = this;
            try {
              e2.open(this.method, this.uri, this.async);
              try {
                if (this.extraHeaders) {
                  e2.setDisableHeaderCheck && e2.setDisableHeaderCheck(true);
                  for (var n2 in this.extraHeaders)
                    this.extraHeaders.hasOwnProperty(n2) && e2.setRequestHeader(n2, this.extraHeaders[n2]);
                }
              } catch (t3) {
              }
              if (this.method === "POST")
                try {
                  this.isBinary ? e2.setRequestHeader("Content-type", "application/octet-stream") : e2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (t3) {
                }
              try {
                e2.setRequestHeader("Accept", "*/*");
              } catch (t3) {
              }
              "withCredentials" in e2 && (e2.withCredentials = this.withCredentials), this.requestTimeout && (e2.timeout = this.requestTimeout), this.hasXDR() ? (e2.onload = function() {
                r2.onLoad();
              }, e2.onerror = function() {
                r2.onError(e2.responseText);
              }) : e2.onreadystatechange = function() {
                if (e2.readyState === 2)
                  try {
                    var t3 = e2.getResponseHeader("Content-Type");
                    (r2.supportsBinary && t3 === "application/octet-stream" || t3 === "application/octet-stream; charset=UTF-8") && (e2.responseType = "arraybuffer");
                  } catch (t4) {
                  }
                e2.readyState === 4 && (e2.status === 200 || e2.status === 1223 ? r2.onLoad() : setTimeout(function() {
                  r2.onError(typeof e2.status == "number" ? e2.status : 0);
                }, 0));
              }, e2.send(this.data);
            } catch (t3) {
              return void setTimeout(function() {
                r2.onError(t3);
              }, 0);
            }
            typeof document != "undefined" && (this.index = i.requestsCount++, i.requests[this.index] = this);
          }, i.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup();
          }, i.prototype.onData = function(t2) {
            this.emit("data", t2), this.onSuccess();
          }, i.prototype.onError = function(t2) {
            this.emit("error", t2), this.cleanup(true);
          }, i.prototype.cleanup = function(t2) {
            if (typeof this.xhr != "undefined" && this.xhr !== null) {
              if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n, t2)
                try {
                  this.xhr.abort();
                } catch (t3) {
                }
              typeof document != "undefined" && delete i.requests[this.index], this.xhr = null;
            }
          }, i.prototype.onLoad = function() {
            var t2;
            try {
              var e2;
              try {
                e2 = this.xhr.getResponseHeader("Content-Type");
              } catch (t3) {
              }
              t2 = e2 === "application/octet-stream" || e2 === "application/octet-stream; charset=UTF-8" ? this.xhr.response || this.xhr.responseText : this.xhr.responseText;
            } catch (t3) {
              this.onError(t3);
            }
            t2 != null && this.onData(t2);
          }, i.prototype.hasXDR = function() {
            return typeof XDomainRequest != "undefined" && !this.xs && this.enablesXDR;
          }, i.prototype.abort = function() {
            this.cleanup();
          }, i.requestsCount = 0, i.requests = {}, typeof document != "undefined") {
            if (typeof attachEvent == "function")
              attachEvent("onunload", s);
            else if (typeof addEventListener == "function") {
              var f = "onpagehide" in u ? "pagehide" : "unload";
              addEventListener(f, s, false);
            }
          }
        }, function(t, e, r) {
          function n(t2) {
            var e2 = t2 && t2.forceBase64;
            p && !e2 || (this.supportsBinary = false), o.call(this, t2);
          }
          var o = r(18), i = r(27), s = r(19), a = r(28), c = r(29);
          r(3)("engine.io-client:polling");
          t.exports = n;
          var p = function() {
            var t2 = r(13), e2 = new t2({ xdomain: false });
            return e2.responseType != null;
          }();
          a(n, o), n.prototype.name = "polling", n.prototype.doOpen = function() {
            this.poll();
          }, n.prototype.pause = function(t2) {
            function e2() {
              r2.readyState = "paused", t2();
            }
            var r2 = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
              var n2 = 0;
              this.polling && (n2++, this.once("pollComplete", function() {
                --n2 || e2();
              })), this.writable || (n2++, this.once("drain", function() {
                --n2 || e2();
              }));
            } else
              e2();
          }, n.prototype.poll = function() {
            this.polling = true, this.doPoll(), this.emit("poll");
          }, n.prototype.onData = function(t2) {
            var e2 = this, r2 = function(t3, r3, n2) {
              return e2.readyState === "opening" && t3.type === "open" && e2.onOpen(), t3.type === "close" ? (e2.onClose(), false) : void e2.onPacket(t3);
            };
            s.decodePayload(t2, this.socket.binaryType, r2), this.readyState !== "closed" && (this.polling = false, this.emit("pollComplete"), this.readyState === "open" && this.poll());
          }, n.prototype.doClose = function() {
            function t2() {
              e2.write([{ type: "close" }]);
            }
            var e2 = this;
            this.readyState === "open" ? t2() : this.once("open", t2);
          }, n.prototype.write = function(t2) {
            var e2 = this;
            this.writable = false;
            var r2 = function() {
              e2.writable = true, e2.emit("drain");
            };
            s.encodePayload(t2, this.supportsBinary, function(t3) {
              e2.doWrite(t3, r2);
            });
          }, n.prototype.uri = function() {
            var t2 = this.query || {}, e2 = this.secure ? "https" : "http", r2 = "";
            this.timestampRequests !== false && (t2[this.timestampParam] = c()), this.supportsBinary || t2.sid || (t2.b64 = 1), t2 = i.encode(t2), this.port && (e2 === "https" && Number(this.port) !== 443 || e2 === "http" && Number(this.port) !== 80) && (r2 = ":" + this.port), t2.length && (t2 = "?" + t2);
            var n2 = this.hostname.indexOf(":") !== -1;
            return e2 + "://" + (n2 ? "[" + this.hostname + "]" : this.hostname) + r2 + this.path + t2;
          };
        }, function(t, e, r) {
          function n(t2) {
            this.path = t2.path, this.hostname = t2.hostname, this.port = t2.port, this.secure = t2.secure, this.query = t2.query, this.timestampParam = t2.timestampParam, this.timestampRequests = t2.timestampRequests, this.readyState = "", this.agent = t2.agent || false, this.socket = t2.socket, this.enablesXDR = t2.enablesXDR, this.withCredentials = t2.withCredentials, this.pfx = t2.pfx, this.key = t2.key, this.passphrase = t2.passphrase, this.cert = t2.cert, this.ca = t2.ca, this.ciphers = t2.ciphers, this.rejectUnauthorized = t2.rejectUnauthorized, this.forceNode = t2.forceNode, this.isReactNative = t2.isReactNative, this.extraHeaders = t2.extraHeaders, this.localAddress = t2.localAddress;
          }
          var o = r(19), i = r(5);
          t.exports = n, i(n.prototype), n.prototype.onError = function(t2, e2) {
            var r2 = new Error(t2);
            return r2.type = "TransportError", r2.description = e2, this.emit("error", r2), this;
          }, n.prototype.open = function() {
            return this.readyState !== "closed" && this.readyState !== "" || (this.readyState = "opening", this.doOpen()), this;
          }, n.prototype.close = function() {
            return this.readyState !== "opening" && this.readyState !== "open" || (this.doClose(), this.onClose()), this;
          }, n.prototype.send = function(t2) {
            if (this.readyState !== "open")
              throw new Error("Transport not open");
            this.write(t2);
          }, n.prototype.onOpen = function() {
            this.readyState = "open", this.writable = true, this.emit("open");
          }, n.prototype.onData = function(t2) {
            var e2 = o.decodePacket(t2, this.socket.binaryType);
            this.onPacket(e2);
          }, n.prototype.onPacket = function(t2) {
            this.emit("packet", t2);
          }, n.prototype.onClose = function() {
            this.readyState = "closed", this.emit("close");
          };
        }, function(t, e, r) {
          function n(t2, r2) {
            var n2 = "b" + e.packets[t2.type] + t2.data.data;
            return r2(n2);
          }
          function o(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            var o2 = t2.data, i2 = new Uint8Array(o2), s2 = new Uint8Array(1 + o2.byteLength);
            s2[0] = v[t2.type];
            for (var a2 = 0; a2 < i2.length; a2++)
              s2[a2 + 1] = i2[a2];
            return n2(s2.buffer);
          }
          function i(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            var o2 = new FileReader();
            return o2.onload = function() {
              e.encodePacket({ type: t2.type, data: o2.result }, r2, true, n2);
            }, o2.readAsArrayBuffer(t2.data);
          }
          function s(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            if (g)
              return i(t2, r2, n2);
            var o2 = new Uint8Array(1);
            o2[0] = v[t2.type];
            var s2 = new w([o2.buffer, t2.data]);
            return n2(s2);
          }
          function a(t2) {
            try {
              t2 = d.decode(t2, { strict: false });
            } catch (t3) {
              return false;
            }
            return t2;
          }
          function c(t2, e2, r2) {
            for (var n2 = new Array(t2.length), o2 = l(t2.length, r2), i2 = function(t3, r3, o3) {
              e2(r3, function(e3, r4) {
                n2[t3] = r4, o3(e3, n2);
              });
            }, s2 = 0; s2 < t2.length; s2++)
              i2(s2, t2[s2], o2);
          }
          var p, h = r(20), u = r(21), f = r(22), l = r(23), d = r(24);
          typeof ArrayBuffer != "undefined" && (p = r(25));
          var y = typeof navigator != "undefined" && /Android/i.test(navigator.userAgent), m = typeof navigator != "undefined" && /PhantomJS/i.test(navigator.userAgent), g = y || m;
          e.protocol = 3;
          var v = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, b = h(v), k = { type: "error", data: "parser error" }, w = r(26);
          e.encodePacket = function(t2, e2, r2, i2) {
            typeof e2 == "function" && (i2 = e2, e2 = false), typeof r2 == "function" && (i2 = r2, r2 = null);
            var a2 = t2.data === void 0 ? void 0 : t2.data.buffer || t2.data;
            if (typeof ArrayBuffer != "undefined" && a2 instanceof ArrayBuffer)
              return o(t2, e2, i2);
            if (typeof w != "undefined" && a2 instanceof w)
              return s(t2, e2, i2);
            if (a2 && a2.base64)
              return n(t2, i2);
            var c2 = v[t2.type];
            return t2.data !== void 0 && (c2 += r2 ? d.encode(String(t2.data), { strict: false }) : String(t2.data)), i2("" + c2);
          }, e.encodeBase64Packet = function(t2, r2) {
            var n2 = "b" + e.packets[t2.type];
            if (typeof w != "undefined" && t2.data instanceof w) {
              var o2 = new FileReader();
              return o2.onload = function() {
                var t3 = o2.result.split(",")[1];
                r2(n2 + t3);
              }, o2.readAsDataURL(t2.data);
            }
            var i2;
            try {
              i2 = String.fromCharCode.apply(null, new Uint8Array(t2.data));
            } catch (e2) {
              for (var s2 = new Uint8Array(t2.data), a2 = new Array(s2.length), c2 = 0; c2 < s2.length; c2++)
                a2[c2] = s2[c2];
              i2 = String.fromCharCode.apply(null, a2);
            }
            return n2 += btoa(i2), r2(n2);
          }, e.decodePacket = function(t2, r2, n2) {
            if (t2 === void 0)
              return k;
            if (typeof t2 == "string") {
              if (t2.charAt(0) === "b")
                return e.decodeBase64Packet(t2.substr(1), r2);
              if (n2 && (t2 = a(t2), t2 === false))
                return k;
              var o2 = t2.charAt(0);
              return Number(o2) == o2 && b[o2] ? t2.length > 1 ? { type: b[o2], data: t2.substring(1) } : { type: b[o2] } : k;
            }
            var i2 = new Uint8Array(t2), o2 = i2[0], s2 = f(t2, 1);
            return w && r2 === "blob" && (s2 = new w([s2])), { type: b[o2], data: s2 };
          }, e.decodeBase64Packet = function(t2, e2) {
            var r2 = b[t2.charAt(0)];
            if (!p)
              return { type: r2, data: { base64: true, data: t2.substr(1) } };
            var n2 = p.decode(t2.substr(1));
            return e2 === "blob" && w && (n2 = new w([n2])), { type: r2, data: n2 };
          }, e.encodePayload = function(t2, r2, n2) {
            function o2(t3) {
              return t3.length + ":" + t3;
            }
            function i2(t3, n3) {
              e.encodePacket(t3, !!s2 && r2, false, function(t4) {
                n3(null, o2(t4));
              });
            }
            typeof r2 == "function" && (n2 = r2, r2 = null);
            var s2 = u(t2);
            return r2 && s2 ? w && !g ? e.encodePayloadAsBlob(t2, n2) : e.encodePayloadAsArrayBuffer(t2, n2) : t2.length ? void c(t2, i2, function(t3, e2) {
              return n2(e2.join(""));
            }) : n2("0:");
          }, e.decodePayload = function(t2, r2, n2) {
            if (typeof t2 != "string")
              return e.decodePayloadAsBinary(t2, r2, n2);
            typeof r2 == "function" && (n2 = r2, r2 = null);
            var o2;
            if (t2 === "")
              return n2(k, 0, 1);
            for (var i2, s2, a2 = "", c2 = 0, p2 = t2.length; c2 < p2; c2++) {
              var h2 = t2.charAt(c2);
              if (h2 === ":") {
                if (a2 === "" || a2 != (i2 = Number(a2)))
                  return n2(k, 0, 1);
                if (s2 = t2.substr(c2 + 1, i2), a2 != s2.length)
                  return n2(k, 0, 1);
                if (s2.length) {
                  if (o2 = e.decodePacket(s2, r2, false), k.type === o2.type && k.data === o2.data)
                    return n2(k, 0, 1);
                  var u2 = n2(o2, c2 + i2, p2);
                  if (u2 === false)
                    return;
                }
                c2 += i2, a2 = "";
              } else
                a2 += h2;
            }
            return a2 !== "" ? n2(k, 0, 1) : void 0;
          }, e.encodePayloadAsArrayBuffer = function(t2, r2) {
            function n2(t3, r3) {
              e.encodePacket(t3, true, true, function(t4) {
                return r3(null, t4);
              });
            }
            return t2.length ? void c(t2, n2, function(t3, e2) {
              var n3 = e2.reduce(function(t4, e3) {
                var r3;
                return r3 = typeof e3 == "string" ? e3.length : e3.byteLength, t4 + r3.toString().length + r3 + 2;
              }, 0), o2 = new Uint8Array(n3), i2 = 0;
              return e2.forEach(function(t4) {
                var e3 = typeof t4 == "string", r3 = t4;
                if (e3) {
                  for (var n4 = new Uint8Array(t4.length), s2 = 0; s2 < t4.length; s2++)
                    n4[s2] = t4.charCodeAt(s2);
                  r3 = n4.buffer;
                }
                e3 ? o2[i2++] = 0 : o2[i2++] = 1;
                for (var a2 = r3.byteLength.toString(), s2 = 0; s2 < a2.length; s2++)
                  o2[i2++] = parseInt(a2[s2]);
                o2[i2++] = 255;
                for (var n4 = new Uint8Array(r3), s2 = 0; s2 < n4.length; s2++)
                  o2[i2++] = n4[s2];
              }), r2(o2.buffer);
            }) : r2(new ArrayBuffer(0));
          }, e.encodePayloadAsBlob = function(t2, r2) {
            function n2(t3, r3) {
              e.encodePacket(t3, true, true, function(t4) {
                var e2 = new Uint8Array(1);
                if (e2[0] = 1, typeof t4 == "string") {
                  for (var n3 = new Uint8Array(t4.length), o2 = 0; o2 < t4.length; o2++)
                    n3[o2] = t4.charCodeAt(o2);
                  t4 = n3.buffer, e2[0] = 0;
                }
                for (var i2 = t4 instanceof ArrayBuffer ? t4.byteLength : t4.size, s2 = i2.toString(), a2 = new Uint8Array(s2.length + 1), o2 = 0; o2 < s2.length; o2++)
                  a2[o2] = parseInt(s2[o2]);
                if (a2[s2.length] = 255, w) {
                  var c2 = new w([e2.buffer, a2.buffer, t4]);
                  r3(null, c2);
                }
              });
            }
            c(t2, n2, function(t3, e2) {
              return r2(new w(e2));
            });
          }, e.decodePayloadAsBinary = function(t2, r2, n2) {
            typeof r2 == "function" && (n2 = r2, r2 = null);
            for (var o2 = t2, i2 = []; o2.byteLength > 0; ) {
              for (var s2 = new Uint8Array(o2), a2 = s2[0] === 0, c2 = "", p2 = 1; s2[p2] !== 255; p2++) {
                if (c2.length > 310)
                  return n2(k, 0, 1);
                c2 += s2[p2];
              }
              o2 = f(o2, 2 + c2.length), c2 = parseInt(c2);
              var h2 = f(o2, 0, c2);
              if (a2)
                try {
                  h2 = String.fromCharCode.apply(null, new Uint8Array(h2));
                } catch (t3) {
                  var u2 = new Uint8Array(h2);
                  h2 = "";
                  for (var p2 = 0; p2 < u2.length; p2++)
                    h2 += String.fromCharCode(u2[p2]);
                }
              i2.push(h2), o2 = f(o2, c2);
            }
            var l2 = i2.length;
            i2.forEach(function(t3, o3) {
              n2(e.decodePacket(t3, r2, true), o3, l2);
            });
          };
        }, function(t, e) {
          t.exports = Object.keys || function(t2) {
            var e2 = [], r = Object.prototype.hasOwnProperty;
            for (var n in t2)
              r.call(t2, n) && e2.push(n);
            return e2;
          };
        }, function(t, e, r) {
          function n(t2) {
            if (!t2 || typeof t2 != "object")
              return false;
            if (o(t2)) {
              for (var e2 = 0, r2 = t2.length; e2 < r2; e2++)
                if (n(t2[e2]))
                  return true;
              return false;
            }
            if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(t2) || typeof ArrayBuffer == "function" && t2 instanceof ArrayBuffer || s && t2 instanceof Blob || a && t2 instanceof File)
              return true;
            if (t2.toJSON && typeof t2.toJSON == "function" && arguments.length === 1)
              return n(t2.toJSON(), true);
            for (var i2 in t2)
              if (Object.prototype.hasOwnProperty.call(t2, i2) && n(t2[i2]))
                return true;
            return false;
          }
          var o = r(7), i = Object.prototype.toString, s = typeof Blob == "function" || typeof Blob != "undefined" && i.call(Blob) === "[object BlobConstructor]", a = typeof File == "function" || typeof File != "undefined" && i.call(File) === "[object FileConstructor]";
          t.exports = n;
        }, function(t, e) {
          t.exports = function(t2, e2, r) {
            var n = t2.byteLength;
            if (e2 = e2 || 0, r = r || n, t2.slice)
              return t2.slice(e2, r);
            if (e2 < 0 && (e2 += n), r < 0 && (r += n), r > n && (r = n), e2 >= n || e2 >= r || n === 0)
              return new ArrayBuffer(0);
            for (var o = new Uint8Array(t2), i = new Uint8Array(r - e2), s = e2, a = 0; s < r; s++, a++)
              i[a] = o[s];
            return i.buffer;
          };
        }, function(t, e) {
          function r(t2, e2, r2) {
            function o(t3, n2) {
              if (o.count <= 0)
                throw new Error("after called too many times");
              --o.count, t3 ? (i = true, e2(t3), e2 = r2) : o.count !== 0 || i || e2(null, n2);
            }
            var i = false;
            return r2 = r2 || n, o.count = t2, t2 === 0 ? e2() : o;
          }
          function n() {
          }
          t.exports = r;
        }, function(t, e) {
          function r(t2) {
            for (var e2, r2, n2 = [], o2 = 0, i2 = t2.length; o2 < i2; )
              e2 = t2.charCodeAt(o2++), e2 >= 55296 && e2 <= 56319 && o2 < i2 ? (r2 = t2.charCodeAt(o2++), (64512 & r2) == 56320 ? n2.push(((1023 & e2) << 10) + (1023 & r2) + 65536) : (n2.push(e2), o2--)) : n2.push(e2);
            return n2;
          }
          function n(t2) {
            for (var e2, r2 = t2.length, n2 = -1, o2 = ""; ++n2 < r2; )
              e2 = t2[n2], e2 > 65535 && (e2 -= 65536, o2 += d(e2 >>> 10 & 1023 | 55296), e2 = 56320 | 1023 & e2), o2 += d(e2);
            return o2;
          }
          function o(t2, e2) {
            if (t2 >= 55296 && t2 <= 57343) {
              if (e2)
                throw Error("Lone surrogate U+" + t2.toString(16).toUpperCase() + " is not a scalar value");
              return false;
            }
            return true;
          }
          function i(t2, e2) {
            return d(t2 >> e2 & 63 | 128);
          }
          function s(t2, e2) {
            if ((4294967168 & t2) == 0)
              return d(t2);
            var r2 = "";
            return (4294965248 & t2) == 0 ? r2 = d(t2 >> 6 & 31 | 192) : (4294901760 & t2) == 0 ? (o(t2, e2) || (t2 = 65533), r2 = d(t2 >> 12 & 15 | 224), r2 += i(t2, 6)) : (4292870144 & t2) == 0 && (r2 = d(t2 >> 18 & 7 | 240), r2 += i(t2, 12), r2 += i(t2, 6)), r2 += d(63 & t2 | 128);
          }
          function a(t2, e2) {
            e2 = e2 || {};
            for (var n2, o2 = e2.strict !== false, i2 = r(t2), a2 = i2.length, c2 = -1, p2 = ""; ++c2 < a2; )
              n2 = i2[c2], p2 += s(n2, o2);
            return p2;
          }
          function c() {
            if (l >= f)
              throw Error("Invalid byte index");
            var t2 = 255 & u[l];
            if (l++, (192 & t2) == 128)
              return 63 & t2;
            throw Error("Invalid continuation byte");
          }
          function p(t2) {
            var e2, r2, n2, i2, s2;
            if (l > f)
              throw Error("Invalid byte index");
            if (l == f)
              return false;
            if (e2 = 255 & u[l], l++, (128 & e2) == 0)
              return e2;
            if ((224 & e2) == 192) {
              if (r2 = c(), s2 = (31 & e2) << 6 | r2, s2 >= 128)
                return s2;
              throw Error("Invalid continuation byte");
            }
            if ((240 & e2) == 224) {
              if (r2 = c(), n2 = c(), s2 = (15 & e2) << 12 | r2 << 6 | n2, s2 >= 2048)
                return o(s2, t2) ? s2 : 65533;
              throw Error("Invalid continuation byte");
            }
            if ((248 & e2) == 240 && (r2 = c(), n2 = c(), i2 = c(), s2 = (7 & e2) << 18 | r2 << 12 | n2 << 6 | i2, s2 >= 65536 && s2 <= 1114111))
              return s2;
            throw Error("Invalid UTF-8 detected");
          }
          function h(t2, e2) {
            e2 = e2 || {};
            var o2 = e2.strict !== false;
            u = r(t2), f = u.length, l = 0;
            for (var i2, s2 = []; (i2 = p(o2)) !== false; )
              s2.push(i2);
            return n(s2);
          }
          var u, f, l, d = String.fromCharCode;
          t.exports = { version: "2.1.2", encode: a, decode: h };
        }, function(t, e) {
          !function(t2) {
            "use strict";
            e.encode = function(e2) {
              var r, n = new Uint8Array(e2), o = n.length, i = "";
              for (r = 0; r < o; r += 3)
                i += t2[n[r] >> 2], i += t2[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t2[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t2[63 & n[r + 2]];
              return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
            }, e.decode = function(e2) {
              var r, n, o, i, s, a = 0.75 * e2.length, c = e2.length, p = 0;
              e2[e2.length - 1] === "=" && (a--, e2[e2.length - 2] === "=" && a--);
              var h = new ArrayBuffer(a), u = new Uint8Array(h);
              for (r = 0; r < c; r += 4)
                n = t2.indexOf(e2[r]), o = t2.indexOf(e2[r + 1]), i = t2.indexOf(e2[r + 2]), s = t2.indexOf(e2[r + 3]), u[p++] = n << 2 | o >> 4, u[p++] = (15 & o) << 4 | i >> 2, u[p++] = (3 & i) << 6 | 63 & s;
              return h;
            };
          }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        }, function(t, e) {
          function r(t2) {
            return t2.map(function(t3) {
              if (t3.buffer instanceof ArrayBuffer) {
                var e2 = t3.buffer;
                if (t3.byteLength !== e2.byteLength) {
                  var r2 = new Uint8Array(t3.byteLength);
                  r2.set(new Uint8Array(e2, t3.byteOffset, t3.byteLength)), e2 = r2.buffer;
                }
                return e2;
              }
              return t3;
            });
          }
          function n(t2, e2) {
            e2 = e2 || {};
            var n2 = new i();
            return r(t2).forEach(function(t3) {
              n2.append(t3);
            }), e2.type ? n2.getBlob(e2.type) : n2.getBlob();
          }
          function o(t2, e2) {
            return new Blob(r(t2), e2 || {});
          }
          var i = typeof i != "undefined" ? i : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" && MozBlobBuilder, s = function() {
            try {
              var t2 = new Blob(["hi"]);
              return t2.size === 2;
            } catch (t3) {
              return false;
            }
          }(), a = s && function() {
            try {
              var t2 = new Blob([new Uint8Array([1, 2])]);
              return t2.size === 2;
            } catch (t3) {
              return false;
            }
          }(), c = i && i.prototype.append && i.prototype.getBlob;
          typeof Blob != "undefined" && (n.prototype = Blob.prototype, o.prototype = Blob.prototype), t.exports = function() {
            return s ? a ? Blob : o : c ? n : void 0;
          }();
        }, function(t, e) {
          e.encode = function(t2) {
            var e2 = "";
            for (var r in t2)
              t2.hasOwnProperty(r) && (e2.length && (e2 += "&"), e2 += encodeURIComponent(r) + "=" + encodeURIComponent(t2[r]));
            return e2;
          }, e.decode = function(t2) {
            for (var e2 = {}, r = t2.split("&"), n = 0, o = r.length; n < o; n++) {
              var i = r[n].split("=");
              e2[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
            }
            return e2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            var r = function() {
            };
            r.prototype = e2.prototype, t2.prototype = new r(), t2.prototype.constructor = t2;
          };
        }, function(t, e) {
          "use strict";
          function r(t2) {
            var e2 = "";
            do
              e2 = s[t2 % a] + e2, t2 = Math.floor(t2 / a);
            while (t2 > 0);
            return e2;
          }
          function n(t2) {
            var e2 = 0;
            for (h = 0; h < t2.length; h++)
              e2 = e2 * a + c[t2.charAt(h)];
            return e2;
          }
          function o() {
            var t2 = r(+new Date());
            return t2 !== i ? (p = 0, i = t2) : t2 + "." + r(p++);
          }
          for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, h = 0; h < a; h++)
            c[s[h]] = h;
          o.encode = r, o.decode = n, t.exports = o;
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            i.call(this, t2), this.query = this.query || {}, c || (c = a.___eio = a.___eio || []), this.index = c.length;
            var e2 = this;
            c.push(function(t3) {
              e2.onData(t3);
            }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
              e2.script && (e2.script.onerror = n);
            }, false);
          }
          var i = r(17), s = r(28), a = r(15);
          t.exports = o;
          var c, p = /\n/g, h = /\\n/g;
          s(o, i), o.prototype.supportsBinary = false, o.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this);
          }, o.prototype.doPoll = function() {
            var t2 = this, e2 = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e2.async = true, e2.src = this.uri(), e2.onerror = function(e3) {
              t2.onError("jsonp poll error", e3);
            };
            var r2 = document.getElementsByTagName("script")[0];
            r2 ? r2.parentNode.insertBefore(e2, r2) : (document.head || document.body).appendChild(e2), this.script = e2;
            var n2 = typeof navigator != "undefined" && /gecko/i.test(navigator.userAgent);
            n2 && setTimeout(function() {
              var t3 = document.createElement("iframe");
              document.body.appendChild(t3), document.body.removeChild(t3);
            }, 100);
          }, o.prototype.doWrite = function(t2, e2) {
            function r2() {
              n2(), e2();
            }
            function n2() {
              if (o2.iframe)
                try {
                  o2.form.removeChild(o2.iframe);
                } catch (t4) {
                  o2.onError("jsonp polling iframe removal error", t4);
                }
              try {
                var t3 = '<iframe src="javascript:0" name="' + o2.iframeId + '">';
                i2 = document.createElement(t3);
              } catch (t4) {
                i2 = document.createElement("iframe"), i2.name = o2.iframeId, i2.src = "javascript:0";
              }
              i2.id = o2.iframeId, o2.form.appendChild(i2), o2.iframe = i2;
            }
            var o2 = this;
            if (!this.form) {
              var i2, s2 = document.createElement("form"), a2 = document.createElement("textarea"), c2 = this.iframeId = "eio_iframe_" + this.index;
              s2.className = "socketio", s2.style.position = "absolute", s2.style.top = "-1000px", s2.style.left = "-1000px", s2.target = c2, s2.method = "POST", s2.setAttribute("accept-charset", "utf-8"), a2.name = "d", s2.appendChild(a2), document.body.appendChild(s2), this.form = s2, this.area = a2;
            }
            this.form.action = this.uri(), n2(), t2 = t2.replace(h, "\\\n"), this.area.value = t2.replace(p, "\\n");
            try {
              this.form.submit();
            } catch (t3) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
              o2.iframe.readyState === "complete" && r2();
            } : this.iframe.onload = r2;
          };
        }, function(t, e, r) {
          function n(t2) {
            var e2 = t2 && t2.forceBase64;
            e2 && (this.supportsBinary = false), this.perMessageDeflate = t2.perMessageDeflate, this.usingBrowserWebSocket = o && !t2.forceNode, this.protocols = t2.protocols, this.usingBrowserWebSocket || (u = i), s.call(this, t2);
          }
          var o, i, s = r(18), a = r(19), c = r(27), p = r(28), h = r(29);
          r(3)("engine.io-client:websocket");
          if (typeof WebSocket != "undefined" ? o = WebSocket : typeof self != "undefined" && (o = self.WebSocket || self.MozWebSocket), typeof window == "undefined")
            try {
              i = r(32);
            } catch (t2) {
            }
          var u = o || i;
          t.exports = n, p(n, s), n.prototype.name = "websocket", n.prototype.supportsBinary = true, n.prototype.doOpen = function() {
            if (this.check()) {
              var t2 = this.uri(), e2 = this.protocols, r2 = {};
              this.isReactNative || (r2.agent = this.agent, r2.perMessageDeflate = this.perMessageDeflate, r2.pfx = this.pfx, r2.key = this.key, r2.passphrase = this.passphrase, r2.cert = this.cert, r2.ca = this.ca, r2.ciphers = this.ciphers, r2.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (r2.headers = this.extraHeaders), this.localAddress && (r2.localAddress = this.localAddress);
              try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e2 ? new u(t2, e2) : new u(t2) : new u(t2, e2, r2);
              } catch (t3) {
                return this.emit("error", t3);
              }
              this.ws.binaryType === void 0 && (this.supportsBinary = false), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = true, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
            }
          }, n.prototype.addEventListeners = function() {
            var t2 = this;
            this.ws.onopen = function() {
              t2.onOpen();
            }, this.ws.onclose = function() {
              t2.onClose();
            }, this.ws.onmessage = function(e2) {
              t2.onData(e2.data);
            }, this.ws.onerror = function(e2) {
              t2.onError("websocket error", e2);
            };
          }, n.prototype.write = function(t2) {
            function e2() {
              r2.emit("flush"), setTimeout(function() {
                r2.writable = true, r2.emit("drain");
              }, 0);
            }
            var r2 = this;
            this.writable = false;
            for (var n2 = t2.length, o2 = 0, i2 = n2; o2 < i2; o2++)
              !function(t3) {
                a.encodePacket(t3, r2.supportsBinary, function(o3) {
                  if (!r2.usingBrowserWebSocket) {
                    var i3 = {};
                    if (t3.options && (i3.compress = t3.options.compress), r2.perMessageDeflate) {
                      var s2 = typeof o3 == "string" ? Buffer.byteLength(o3) : o3.length;
                      s2 < r2.perMessageDeflate.threshold && (i3.compress = false);
                    }
                  }
                  try {
                    r2.usingBrowserWebSocket ? r2.ws.send(o3) : r2.ws.send(o3, i3);
                  } catch (t4) {
                  }
                  --n2 || e2();
                });
              }(t2[o2]);
          }, n.prototype.onClose = function() {
            s.prototype.onClose.call(this);
          }, n.prototype.doClose = function() {
            typeof this.ws != "undefined" && this.ws.close();
          }, n.prototype.uri = function() {
            var t2 = this.query || {}, e2 = this.secure ? "wss" : "ws", r2 = "";
            this.port && (e2 === "wss" && Number(this.port) !== 443 || e2 === "ws" && Number(this.port) !== 80) && (r2 = ":" + this.port), this.timestampRequests && (t2[this.timestampParam] = h()), this.supportsBinary || (t2.b64 = 1), t2 = c.encode(t2), t2.length && (t2 = "?" + t2);
            var n2 = this.hostname.indexOf(":") !== -1;
            return e2 + "://" + (n2 ? "[" + this.hostname + "]" : this.hostname) + r2 + this.path + t2;
          }, n.prototype.check = function() {
            return !(!u || "__initialize" in u && this.name === n.prototype.name);
          };
        }, function(t, e) {
        }, function(t, e) {
          var r = [].indexOf;
          t.exports = function(t2, e2) {
            if (r)
              return t2.indexOf(e2);
            for (var n = 0; n < t2.length; ++n)
              if (t2[n] === e2)
                return n;
            return -1;
          };
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2, r2) {
            this.io = t2, this.nsp = e2, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, r2 && r2.query && (this.query = r2.query), this.io.autoConnect && this.open();
          }
          var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(4), s = r(5), a = r(35), c = r(36), p = r(37), h = (r(3)("socket.io-client:socket"), r(27)), u = r(21);
          t.exports = e = n;
          var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, l = s.prototype.emit;
          s(n.prototype), n.prototype.subEvents = function() {
            if (!this.subs) {
              var t2 = this.io;
              this.subs = [c(t2, "open", p(this, "onopen")), c(t2, "packet", p(this, "onpacket")), c(t2, "close", p(this, "onclose"))];
            }
          }, n.prototype.open = n.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.reconnecting || this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this);
          }, n.prototype.send = function() {
            var t2 = a(arguments);
            return t2.unshift("message"), this.emit.apply(this, t2), this;
          }, n.prototype.emit = function(t2) {
            if (f.hasOwnProperty(t2))
              return l.apply(this, arguments), this;
            var e2 = a(arguments), r2 = { type: (this.flags.binary !== void 0 ? this.flags.binary : u(e2)) ? i.BINARY_EVENT : i.EVENT, data: e2 };
            return r2.options = {}, r2.options.compress = !this.flags || this.flags.compress !== false, typeof e2[e2.length - 1] == "function" && (this.acks[this.ids] = e2.pop(), r2.id = this.ids++), this.connected ? this.packet(r2) : this.sendBuffer.push(r2), this.flags = {}, this;
          }, n.prototype.packet = function(t2) {
            t2.nsp = this.nsp, this.io.packet(t2);
          }, n.prototype.onopen = function() {
            if (this.nsp !== "/")
              if (this.query) {
                var t2 = o(this.query) === "object" ? h.encode(this.query) : this.query;
                this.packet({ type: i.CONNECT, query: t2 });
              } else
                this.packet({ type: i.CONNECT });
          }, n.prototype.onclose = function(t2) {
            this.connected = false, this.disconnected = true, delete this.id, this.emit("disconnect", t2);
          }, n.prototype.onpacket = function(t2) {
            var e2 = t2.nsp === this.nsp, r2 = t2.type === i.ERROR && t2.nsp === "/";
            if (e2 || r2)
              switch (t2.type) {
                case i.CONNECT:
                  this.onconnect();
                  break;
                case i.EVENT:
                  this.onevent(t2);
                  break;
                case i.BINARY_EVENT:
                  this.onevent(t2);
                  break;
                case i.ACK:
                  this.onack(t2);
                  break;
                case i.BINARY_ACK:
                  this.onack(t2);
                  break;
                case i.DISCONNECT:
                  this.ondisconnect();
                  break;
                case i.ERROR:
                  this.emit("error", t2.data);
              }
          }, n.prototype.onevent = function(t2) {
            var e2 = t2.data || [];
            t2.id != null && e2.push(this.ack(t2.id)), this.connected ? l.apply(this, e2) : this.receiveBuffer.push(e2);
          }, n.prototype.ack = function(t2) {
            var e2 = this, r2 = false;
            return function() {
              if (!r2) {
                r2 = true;
                var n2 = a(arguments);
                e2.packet({ type: u(n2) ? i.BINARY_ACK : i.ACK, id: t2, data: n2 });
              }
            };
          }, n.prototype.onack = function(t2) {
            var e2 = this.acks[t2.id];
            typeof e2 == "function" && (e2.apply(this, t2.data), delete this.acks[t2.id]);
          }, n.prototype.onconnect = function() {
            this.connected = true, this.disconnected = false, this.emitBuffered(), this.emit("connect");
          }, n.prototype.emitBuffered = function() {
            var t2;
            for (t2 = 0; t2 < this.receiveBuffer.length; t2++)
              l.apply(this, this.receiveBuffer[t2]);
            for (this.receiveBuffer = [], t2 = 0; t2 < this.sendBuffer.length; t2++)
              this.packet(this.sendBuffer[t2]);
            this.sendBuffer = [];
          }, n.prototype.ondisconnect = function() {
            this.destroy(), this.onclose("io server disconnect");
          }, n.prototype.destroy = function() {
            if (this.subs) {
              for (var t2 = 0; t2 < this.subs.length; t2++)
                this.subs[t2].destroy();
              this.subs = null;
            }
            this.io.destroy(this);
          }, n.prototype.close = n.prototype.disconnect = function() {
            return this.connected && this.packet({ type: i.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
          }, n.prototype.compress = function(t2) {
            return this.flags.compress = t2, this;
          }, n.prototype.binary = function(t2) {
            return this.flags.binary = t2, this;
          };
        }, function(t, e) {
          function r(t2, e2) {
            var r2 = [];
            e2 = e2 || 0;
            for (var n = e2 || 0; n < t2.length; n++)
              r2[n - e2] = t2[n];
            return r2;
          }
          t.exports = r;
        }, function(t, e) {
          "use strict";
          function r(t2, e2, r2) {
            return t2.on(e2, r2), { destroy: function() {
              t2.removeListener(e2, r2);
            } };
          }
          t.exports = r;
        }, function(t, e) {
          var r = [].slice;
          t.exports = function(t2, e2) {
            if (typeof e2 == "string" && (e2 = t2[e2]), typeof e2 != "function")
              throw new Error("bind() requires a function");
            var n = r.call(arguments, 2);
            return function() {
              return e2.apply(t2, n.concat(r.call(arguments)));
            };
          };
        }, function(t, e) {
          function r(t2) {
            t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
          }
          t.exports = r, r.prototype.duration = function() {
            var t2 = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
              var e2 = Math.random(), r2 = Math.floor(e2 * this.jitter * t2);
              t2 = (1 & Math.floor(10 * e2)) == 0 ? t2 - r2 : t2 + r2;
            }
            return 0 | Math.min(t2, this.max);
          }, r.prototype.reset = function() {
            this.attempts = 0;
          }, r.prototype.setMin = function(t2) {
            this.ms = t2;
          }, r.prototype.setMax = function(t2) {
            this.max = t2;
          }, r.prototype.setJitter = function(t2) {
            this.jitter = t2;
          };
        }]);
      });
    }
  });
  var version = "foo";
  function check(it) {
    return it && it.Math === Math && it;
  }
  var resolvedGlobalThis = check(typeof globalThis === "object" && globalThis) || check(typeof window === "object" && window) || check(typeof self === "object" && self) || check(typeof global === "object" && global) || function() {
    return this;
  }() || Function("return this")();
  var resolvedTop = resolvedGlobalThis.top || resolvedGlobalThis;
  var resolvedParent = resolvedGlobalThis.parent || resolvedGlobalThis;
  var resolvedOpener = resolvedGlobalThis.opener || null;
  var ReactiveValue = class {
    constructor(value) {
      this.handler = null;
      this.value = value;
    }
    set(value) {
      if (!Object.is(this.value, value)) {
        this.value = value;
        this.apply();
      }
    }
    get() {
      return this.value;
    }
    on(fn, context) {
      let cursor = this.handler;
      while (cursor !== null) {
        if (cursor.fn === fn && cursor.context === context) {
          console.warn("ReactiveValue#on: duplicate fn & context pair");
        }
        cursor = cursor.handler;
      }
      this.handler = {
        fn,
        context,
        handler: this.handler
      };
    }
    link(fn, context) {
      this.on(fn, context);
      fn.call(context, this.value);
    }
    off(fn, context) {
      let cursor = this.handler;
      let prev = this;
      while (cursor !== null) {
        if (cursor.fn === fn && cursor.context === context) {
          cursor.fn = function() {
          };
          prev.handler = cursor.handler;
          return;
        }
        prev = cursor;
        cursor = cursor.handler;
      }
      console.warn("ReactiveValue#off: fn & context pair not found, nothing was removed");
    }
    apply() {
      let cursor = this.handler;
      while (cursor !== null) {
        cursor.fn.call(cursor.context, this.value);
        cursor = cursor.handler;
      }
    }
  };
  function normalize(oldList, newList) {
    const uniqueItems = [...new Set(Array.isArray(newList) ? newList : [])];
    const diff = uniqueItems.length !== oldList.length || uniqueItems.some((endpoint) => !oldList.includes(endpoint));
    return diff ? uniqueItems : oldList;
  }
  var EndpointList = class extends ReactiveValue {
    constructor(list) {
      super(normalize([], list));
    }
    set(newValue) {
      super.set(normalize(this.value, newValue));
    }
  };
  var EndpointListSet = class extends EndpointList {
    constructor() {
      super([]);
      this.endpointLists = /* @__PURE__ */ new Set();
    }
    set() {
      super.set([].concat(...[...this.endpointLists].map((endpointList) => endpointList.value)));
    }
    add(endpointList) {
      if (!this.endpointLists.has(endpointList)) {
        this.endpointLists.add(endpointList);
        endpointList.on(this.set, this);
        this.set();
      }
    }
    remove(endpointList) {
      if (this.endpointLists.has(endpointList)) {
        this.endpointLists.delete(endpointList);
        endpointList.off(this.set, this);
        this.set();
      }
    }
  };
  var _a;
  var trustedEmptyHTML = (_a = resolvedGlobalThis.trustedTypes) == null ? void 0 : _a.emptyHTML;
  function genUID(len) {
    function base36(val) {
      return Math.round(val).toString(36);
    }
    let result = base36(10 + 25 * Math.random());
    if (!len) {
      len = 16;
    }
    while (result.length < len) {
      result += base36(Date.now() * Math.random());
    }
    return result.substr(0, len);
  }
  function subscribe(list, item) {
    list.push(item);
    return () => {
      const idx = list.indexOf(item);
      if (idx !== -1) {
        list.splice(idx, 1);
      }
    };
  }
  var DEBUG = false;
  var DEBUG_PREFIX = "[rempl][event-transport] ";
  var allTransports = [];
  var EventTransport = class {
    constructor(name, connectTo, win) {
      this.connections = /* @__PURE__ */ new Map();
      this.connected = new ReactiveValue(false);
      this.endpointGetUI = /* @__PURE__ */ new Map();
      this.ownEndpoints = new EndpointList();
      this.remoteEndpoints = new EndpointListSet();
      this.initCallbacks = [];
      this.dataCallbacks = [];
      this.sendCallbacks = /* @__PURE__ */ new Map();
      this.inited = false;
      if (allTransports.length === 0 && typeof addEventListener === "function") {
        addEventListener("message", (e) => {
          for (const transport2 of allTransports) {
            transport2._onMessage(e);
          }
        }, false);
      }
      allTransports.push(this);
      this.name = name;
      this.connectTo = connectTo;
      this.inputChannelId = `${name}/${genUID()}`;
      this.realm = win || resolvedGlobalThis;
      this.ownEndpoints.on((endpoints2) => {
        if (this.connected.value) {
          this.send({
            type: "endpoints",
            data: [endpoints2]
          });
        }
      });
      if (typeof this.realm.postMessage !== "function" || typeof addEventListener !== "function") {
        console.warn(DEBUG_PREFIX + "Event (postMessage) transport isn't supported");
        return;
      }
      this._handshake(false);
    }
    static get(name, connectTo, win) {
      if (!win) {
        win = resolvedGlobalThis;
      }
      const transport2 = allTransports.find((transport3) => transport3.name === name && transport3.connectTo === connectTo && transport3.realm === win);
      return transport2 || new EventTransport(name, connectTo, win);
    }
    _handshake(inited) {
      this._send(`${this.connectTo}:connect`, {
        type: "handshake",
        initiator: this.name,
        inited,
        endpoints: this.ownEndpoints.value
      });
    }
    _onMessage(event) {
      var _a2;
      if (event.source !== this.realm || event.target !== resolvedGlobalThis) {
        return;
      }
      const data = event.data || {};
      const connectTo = `${this.name}:connect`;
      switch (data.to) {
        case connectTo:
          if (((_a2 = data.payload) == null ? void 0 : _a2.initiator) === this.connectTo) {
            this._onConnect(data.from, data.payload);
          }
          break;
        case this.inputChannelId:
          if (this.connections.has(data.from)) {
            this._onData(data.from, data.payload);
          } else {
            console.warn(DEBUG_PREFIX + "unknown incoming connection", data.from);
          }
          break;
      }
    }
    _onConnect(from, payload) {
      if (!payload.inited) {
        this._handshake(true);
      }
      if (!this.connections.has(from)) {
        const endpoints2 = new EndpointList(payload.endpoints);
        this.remoteEndpoints.add(endpoints2);
        this.connections.set(from, {
          ttl: Date.now(),
          endpoints: endpoints2
        });
        this._send(from, {
          type: "connect",
          endpoints: this.ownEndpoints.value
        });
      }
      this.inited = true;
    }
    _onData(from, payload) {
      var _a2, _b, _c;
      if (DEBUG) {
        console.log(DEBUG_PREFIX + "receive from " + this.connectTo, payload.type, payload);
      }
      switch (payload.type) {
        case "connect": {
          (_a2 = this.connections.get(from)) == null ? void 0 : _a2.endpoints.set(payload.endpoints);
          this.connected.set(true);
          this.initCallbacks.splice(0).forEach((args) => this.onInit(...args));
          break;
        }
        case "endpoints": {
          (_b = this.connections.get(from)) == null ? void 0 : _b.endpoints.set(payload.data[0]);
          break;
        }
        case "disconnect": {
          (_c = this.connections.get(from)) == null ? void 0 : _c.endpoints.set([]);
          this.connected.set(false);
          break;
        }
        case "callback": {
          if (payload.callback) {
            const callback = this.sendCallbacks.get(payload.callback);
            if (typeof callback === "function") {
              callback(...payload.data);
              this.sendCallbacks.delete(payload.callback);
            }
          }
          break;
        }
        case "data": {
          let args = payload.data;
          const callback = payload.callback;
          if (callback) {
            args = args.concat(this._wrapCallback(from, callback));
          }
          for (const { endpoint, fn } of this.dataCallbacks) {
            if (endpoint === payload.endpoint) {
              fn(...args);
            }
          }
          break;
        }
        case "getRemoteUI": {
          if (!payload.endpoint) {
            return;
          }
          const getUI = this.endpointGetUI.get(payload.endpoint);
          if (typeof getUI !== "function") {
            console.warn(DEBUG_PREFIX + "receive unknown endpoint for getRemoteUI(): " + payload.endpoint);
            if (payload.callback) {
              this._wrapCallback(from, payload.callback)("Wrong endpoint \u2013 " + payload.endpoint);
            }
          } else {
            if (payload.callback) {
              const callback = this._wrapCallback(from, payload.callback);
              getUI(payload.data[0] || {}).catch((error) => ({ error: String(error == null ? void 0 : error.message) })).then((res) => {
                if ("error" in res) {
                  callback(res.error);
                } else {
                  callback(null, res.type, res.value);
                }
              });
            }
          }
          break;
        }
        default:
          console.warn(DEBUG_PREFIX + "Unknown message type `" + payload.type + "` for `" + this.name + "`", payload);
      }
    }
    _wrapCallback(to, callback) {
      return (...args) => this._send(to, {
        type: "callback",
        callback,
        data: args
      });
    }
    _send(to, payload) {
      if (DEBUG) {
        console.log(DEBUG_PREFIX + "emit event", to, payload);
      }
      if (typeof this.realm.postMessage === "function") {
        const message = {
          from: this.inputChannelId,
          to,
          payload
        };
        this.realm.postMessage(message, "*");
      }
    }
    subscribeToEndpoint(endpoint, fn) {
      return subscribe(this.dataCallbacks, {
        endpoint,
        fn
      });
    }
    sendToEndpoint(endpoint, type, ...args) {
      let callback = null;
      if (args.length && typeof args[args.length - 1] === "function") {
        callback = genUID();
        this.sendCallbacks.set(callback, args.pop());
      }
      this.send({
        type,
        endpoint,
        data: args,
        callback
      });
    }
    send(payload) {
      for (const channelId of this.connections.keys()) {
        this._send(channelId, payload);
      }
    }
    onInit(endpoint, callback) {
      const id = endpoint.id || null;
      if (id) {
        this.ownEndpoints.set(this.ownEndpoints.value.concat(id));
        if (typeof endpoint.getRemoteUI === "function") {
          this.endpointGetUI.set(id, endpoint.getRemoteUI);
        }
      }
      if (this.inited) {
        callback({
          connected: this.connected,
          subscribe: this.subscribeToEndpoint.bind(this, id),
          getRemoteUI: this.sendToEndpoint.bind(this, id, "getRemoteUI"),
          send: this.sendToEndpoint.bind(this, id, "data")
        });
      } else {
        this.initCallbacks.push([endpoint, callback]);
      }
      return this;
    }
    sync(endpoint) {
      const channel = genUID(8) + ":" + this.connectTo;
      this.onInit(endpoint, (api) => {
        api.subscribe(endpoint.processInput.bind(endpoint));
        api.connected.link((connected) => {
          endpoint.setupChannel(channel, api.send, this.remoteEndpoints, connected);
        });
      });
      return this;
    }
  };
  var Namespace = class {
    constructor(name, owner) {
      this.methods = /* @__PURE__ */ Object.create(null);
      this.remoteMethodWrappers = /* @__PURE__ */ Object.create(null);
      this.remoteMethods = [];
      this.listeners = null;
      this.name = name;
      this.owner = owner;
      this.methods = /* @__PURE__ */ Object.create(null);
    }
    isMethodProvided(methodName) {
      return methodName in this.methods;
    }
    provide(methodName, fn) {
      if (typeof methodName === "string") {
        if (typeof fn === "function") {
          this.methods[methodName] = fn;
          this.owner.scheduleProvidedMethodsUpdate();
        }
      } else {
        const methods = methodName;
        for (const [methodName2, fn2] of Object.entries(methods)) {
          if (typeof fn2 === "function") {
            this.methods[methodName2] = fn2;
            this.owner.scheduleProvidedMethodsUpdate();
          }
        }
      }
    }
    revoke(methodName) {
      if (Array.isArray(methodName)) {
        methodName.forEach(this.revoke, this);
      } else {
        if (this.isMethodProvided(methodName)) {
          delete this.methods[methodName];
          this.owner.scheduleProvidedMethodsUpdate();
        }
      }
    }
    isRemoteMethodExists(methodName) {
      return this.remoteMethods.includes(methodName);
    }
    callRemote(method, ...args) {
      let callback = null;
      if (args.length && typeof args[args.length - 1] === "function") {
        callback = args.pop();
        console.warn("[rempl] Using a callback for Namespace#callMethod() is deprecated, use returned promise value instead");
      }
      return new Promise((resolve) => {
        const callPacket = {
          type: "call",
          ns: this.name,
          method,
          args
        };
        this.owner.send(callPacket, (...args2) => {
          resolve(args2[0]);
          callback == null ? void 0 : callback(...args2);
        });
      });
    }
    getRemoteMethod(methodName) {
      let methodWrapper = this.remoteMethodWrappers[methodName];
      if (typeof methodWrapper !== "function") {
        methodWrapper = this.remoteMethodWrappers[methodName] = Object.assign((...args) => {
          if (methodWrapper.available) {
            return this.callRemote(methodName, ...args);
          }
          return Promise.reject(new Error(`[rempl] ${this.owner.getName()} ns("${this.name}") has no available remote method "${methodName}`));
        }, {
          available: this.remoteMethods.indexOf(methodName) !== -1
        });
      }
      return methodWrapper;
    }
    onRemoteMethodsChanged(callback) {
      const listener = {
        event: "remoteMethodsChanged",
        callback,
        listeners: this.listeners
      };
      this.listeners = listener;
      callback([...this.remoteMethods]);
      return () => {
        let cursor = this.listeners;
        let prev = this;
        while (cursor !== null) {
          if (cursor === listener) {
            prev.listeners = cursor.listeners;
            break;
          }
          prev = cursor;
          cursor = cursor.listeners;
        }
      };
    }
    static invoke(namespace, method, args, callback) {
      let callbackCalled = false;
      args = args.concat((...args2) => {
        callbackCalled = true;
        callback(...args2);
        console.warn("[rempl] Using a callback in provided methods has been deprecated, just return a value or promise instead");
      });
      Promise.resolve(namespace.methods[method].apply(null, args)).then((value) => {
        if (!callbackCalled) {
          callback(value);
        }
      });
    }
    static notifyRemoteMethodsChanged(namespace) {
      let cursor = namespace.listeners;
      for (const method in namespace.remoteMethodWrappers) {
        namespace.remoteMethodWrappers[method].available = namespace.remoteMethods.includes(method);
      }
      while (cursor !== null) {
        if (cursor.event === "remoteMethodsChanged") {
          cursor.callback.call(null, [...namespace.remoteMethods]);
        }
        cursor = cursor.listeners;
      }
    }
  };
  var Endpoint = class {
    constructor(id) {
      this.type = "Endpoint";
      this.channels = [];
      this.connected = new ReactiveValue(false);
      this.remoteEndpoints = new EndpointListSet();
      this.id = id || null;
      this.namespaces = /* @__PURE__ */ Object.create(null);
      this.remoteEndpoints.on((endpoints2) => {
        this.connected.set(endpoints2.includes(this.id || "*"));
      }, this);
    }
    get namespaceClass() {
      return Namespace;
    }
    getName() {
      return this.type + (this.id ? "#" + this.id : "");
    }
    ns(name) {
      let namespace = this.namespaces[name];
      if (!namespace) {
        namespace = Object.assign(new this.namespaceClass(name, this));
        this.namespaces[name] = namespace;
      }
      return namespace;
    }
    send(packet, callback = null) {
      for (const { send: send2 } of this.channels) {
        send2(packet, callback);
      }
    }
    requestRemoteApi() {
      this.send({ type: "getProvidedMethods" }, (methods) => {
        this.setRemoteApi(methods);
      });
    }
    setRemoteApi(api) {
      const changed = [];
      if (!api) {
        api = {};
      }
      for (const name in api) {
        if (Array.isArray(api[name])) {
          const ns = this.ns(name);
          const methods = api[name].slice().sort();
          const different = ns.remoteMethods.length !== methods.length || ns.remoteMethods.some(function(value, idx) {
            return value !== methods[idx];
          });
          if (different) {
            ns.remoteMethods = methods;
            changed.push(ns);
          }
        }
      }
      for (const name in this.namespaces) {
        if (Array.isArray(api[name]) === false) {
          const ns = this.namespaces[name];
          ns.remoteMethods = [];
          changed.push(ns);
        }
      }
      changed.forEach((ns) => Namespace.notifyRemoteMethodsChanged(ns));
    }
    getProvidedApi() {
      const api = /* @__PURE__ */ Object.create(null);
      for (const name in this.namespaces) {
        api[name] = Object.keys(this.namespaces[name].methods).sort();
      }
      return api;
    }
    scheduleProvidedMethodsUpdate() {
      if (!this.providedMethodsUpdateTimer) {
        this.providedMethodsUpdateTimer = setTimeout(() => {
          this.providedMethodsUpdateTimer = null;
          this.send({
            type: "remoteMethods",
            methods: this.getProvidedApi()
          });
        }, 0);
      }
    }
    processInput(packet, callback) {
      switch (packet.type) {
        case "call": {
          const thePacket = packet;
          const ns = this.ns(thePacket.ns || "*");
          if (!ns.isMethodProvided(thePacket.method)) {
            return console.warn(`[rempl][sync] ${this.getName()} (namespace: ${thePacket.ns || "default"}) has no remote method:`, thePacket.method);
          }
          Namespace.invoke(ns, thePacket.method, thePacket.args, callback);
          break;
        }
        case "remoteMethods": {
          const thePacket = packet;
          this.setRemoteApi(thePacket.methods);
          break;
        }
        case "getProvidedMethods":
          callback(this.getProvidedApi());
          break;
        default:
          console.warn("[rempl][sync] " + this.getName() + "Unknown packet type:", packet.type);
      }
    }
    setupChannel(type, send2, remoteEndpoints, available) {
      if (available) {
        this.channels.push({
          type,
          send: send2
        });
        this.remoteEndpoints.add(remoteEndpoints);
      } else {
        for (let i = 0; i < this.channels.length; i++) {
          if (this.channels[i].type === type && this.channels[i].send === send2) {
            this.remoteEndpoints.remove(remoteEndpoints);
            this.channels.splice(i, 1);
            break;
          }
        }
      }
    }
  };
  var PublisherNamespace = class extends Namespace {
    constructor(name, owner) {
      super(name, owner);
      this._lastData = null;
      this.provide("init", () => this._lastData);
      this.publish = (payload) => {
        this._lastData = payload;
        owner.send({
          type: "data",
          ns: this.name,
          payload
        });
      };
    }
  };
  var Publisher = class extends Endpoint {
    constructor() {
      super(...arguments);
      this.type = "Publisher";
    }
    get namespaceClass() {
      return PublisherNamespace;
    }
  };
  var subscribers = /* @__PURE__ */ new Map();
  var SubscriberNamespace = class extends Namespace {
    constructor(name, endpoint) {
      super(name, endpoint);
      subscribers.set(this, []);
    }
    subscribe(fn) {
      this.callRemote("init").then(fn);
      return subscribe(subscribers.get(this) || [], fn);
    }
  };
  var Subscriber = class extends Endpoint {
    constructor(id) {
      super(id);
      this.type = "Subscriber";
      this.connected.on((connected) => {
        if (connected) {
          this.requestRemoteApi();
          for (const name in this.namespaces) {
            const ns = this.namespaces[name];
            const nsSubscribers = subscribers.get(ns) || [];
            if (nsSubscribers.length) {
              ns.callRemote("init").then((data) => {
                for (const callback of nsSubscribers) {
                  callback(data);
                }
              });
            }
          }
        } else {
          this.setRemoteApi();
        }
      });
    }
    get namespaceClass() {
      return SubscriberNamespace;
    }
    processInput(packet, callback) {
      switch (packet.type) {
        case "data": {
          const { ns, payload } = packet;
          const nsSubscribers = subscribers.get(this.ns(ns || "*"));
          if (nsSubscribers) {
            nsSubscribers.slice().forEach((callback2) => callback2(payload));
          }
          break;
        }
        default:
          super.processInput(packet, callback);
      }
    }
  };
  var subscribers2 = /* @__PURE__ */ new Map();
  var EnvPublisher = class extends Publisher {
    linkWindow(target) {
      EventTransport.get("rempl-env-publisher", "rempl-env-subscriber", target).sync(this);
    }
  };
  function getEnv(id) {
    let subscriber2 = subscribers2.get(id);
    if (!subscriber2) {
      subscribers2.set(id, subscriber2 = new Subscriber(id));
      EventTransport.get("rempl-env-subscriber", "rempl-env-publisher", resolvedParent).sync(subscriber2);
    }
    return subscriber2;
  }
  function createEnv(id) {
    return new EnvPublisher(id);
  }
  function initSandboxScript() {
    addEventListener("message", function handleMessage(event) {
      const { action, scripts } = event.data || {};
      if (action === "rempl-sandbox-init-scripts" && scripts) {
        removeEventListener("message", handleMessage);
        for (const [sourceURL, source] of Object.entries(scripts)) {
          Function(`${source}
//# sourceURL=${sourceURL}`)();
        }
      }
    });
  }
  var initEnvSubscriberMessage = /* @__PURE__ */ new WeakMap();
  if (resolvedParent !== resolvedGlobalThis) {
    addEventListener("message", function(event) {
      const data = event.data || {};
      if (event.source && data.to === "rempl-env-publisher:connect") {
        initEnvSubscriberMessage.set(event.source, data);
      }
    }, true);
  }
  function createSandbox(settings2, callback) {
    function initSandbox(sandboxWindow) {
      if (settings2.type === "script") {
        sandboxWindow.postMessage({
          action: "rempl-sandbox-init-scripts",
          scripts: settings2.content
        }, "*");
      }
      if (resolvedParent !== resolvedGlobalThis && sandboxWindow !== resolvedGlobalThis) {
        let toSandbox = NaN;
        let toEnv = NaN;
        if (onEnvMessage) {
          removeEventListener("message", onEnvMessage, true);
          onEnvMessage = null;
        }
        addEventListener("message", onEnvMessage = function(event) {
          const data = event.data || {};
          switch (data.to) {
            case "rempl-env-subscriber:connect":
            case toSandbox:
              toEnv = data.from;
              sandboxWindow.postMessage(data, "*");
              break;
            case "rempl-env-publisher:connect":
            case toEnv:
              toSandbox = data.from;
              resolvedParent.postMessage(data);
              break;
          }
        }, true);
        if (settings2.type !== "script") {
          const initMessage = initEnvSubscriberMessage.get(sandboxWindow);
          if (initMessage) {
            toSandbox = initMessage.from;
            resolvedParent.postMessage(initMessage);
          }
        }
      }
      transport2 = EventTransport.get("rempl-sandbox", "rempl-subscriber", sandboxWindow).onInit({}, (api) => callback(api));
      if (connected) {
        transport2.ownEndpoints.set(["*"]);
      }
    }
    let iframe = null;
    let onEnvMessage = null;
    let transport2 = null;
    let connected = false;
    settings2 = settings2 || {};
    if (settings2.window) {
      initSandbox(settings2.window);
    } else {
      iframe = document.createElement("iframe");
      iframe.name = genUID();
      iframe.onload = () => (iframe == null ? void 0 : iframe.contentWindow) && initSandbox(iframe.contentWindow);
      iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-popups allow-modals");
      if (settings2.type === "url") {
        iframe.src = settings2.content;
      } else if (settings2.sandboxSrc) {
        iframe.src = settings2.sandboxSrc;
      } else {
        iframe.srcdoc = "<!doctype html><script>(" + String(initSandboxScript) + ")()<\/script>";
      }
      (settings2.container || document.documentElement).appendChild(iframe);
    }
    const sandbox2 = {
      setConnected(state) {
        connected = state;
        if (transport2) {
          transport2.ownEndpoints.set(connected ? ["*"] : []);
        }
      },
      destroy() {
        if (onEnvMessage) {
          removeEventListener("message", onEnvMessage, true);
          onEnvMessage = null;
        }
        if (transport2) {
          transport2.ownEndpoints.set([]);
        }
        if (iframe !== null) {
          iframe.remove();
          iframe.setAttribute("srcdoc", trustedEmptyHTML);
          iframe.setAttribute("src", trustedEmptyHTML);
          iframe = null;
        }
      }
    };
    return sandbox2;
  }
  function createElement_default(config) {
    function createElement(options) {
      var _a2;
      const element = document.createElement(options.tagName || "div");
      for (const [name, value] of Object.entries(options)) {
        switch (name) {
          case "tagName":
            break;
          case "ref":
            if (typeof value === "string") {
              map[value] = element;
            }
            break;
          case "style":
            element.setAttribute("style", Object.entries(value).map(([property, value2]) => property + ":" + value2).join(";"));
            break;
          case "events":
            for (const event in options.events) {
              element.addEventListener(event, options.events[event], false);
            }
            break;
          case "children":
            (_a2 = options.children) == null ? void 0 : _a2.forEach(function(child) {
              element.appendChild(typeof child === "string" ? document.createTextNode(child) : createElement(child));
            });
            break;
          default:
            element.setAttribute(name, value);
        }
      }
      return element;
    }
    const map = {};
    map.element = createElement(config);
    return map;
  }
  var style_default = '/* src/host/in-page/style.css */\n:host {\n  position: fixed;\n  z-index: 100000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(8px);\n  opacity: 1;\n  font-family:\n    Tahoma,\n    Verdana,\n    Arial,\n    sans-serif;\n  font-size: 12px;\n  transition: all cubic-bezier(0.25, 0.59, 0, 1.11) 0.2s;\n  border: 0 solid #aaa;\n}\n@supports not (backdrop-filter: blur(8px)) {\n  :host {\n    background: rgba(255, 255, 255, 0.95);\n  }\n}\n:host([side="left"]) {\n  right: 50%;\n  border-right-width: 2px;\n}\n:host([side="right"]) {\n  left: 50%;\n  border-left-width: 2px;\n}\n:host([side="top"]) {\n  bottom: 50%;\n  border-bottom-width: 2px;\n}\n:host([side="bottom"]) {\n  top: 50%;\n  border-top-width: 2px;\n}\n.host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  padding: 0 0 0 24px;\n  background: #f8f8f8 no-repeat 4px center / 16px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YTJlMWRlYi1kYzVhLTFiNDEtYTQ2OC0xYmU4ZjEyYzdkMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkNGQUMzNTZCQkM4MTFFNjg1QjhENzFGM0IzRkMzNjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkNGQUMzNTVCQkM4MTFFNjg1QjhENzFGM0IzRkMzNjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmE1NDdhODktNWJjOC05MzQ2LWI2NTctYzAwMGQ4ZjQxOTg4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZhMmUxZGViLWRjNWEtMWI0MS1hNDY4LTFiZThmMTJjN2QzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn3Ab4gAAAPQSURBVHjatFfNSxtBFH+JiZootWojFBUqmtioiZUWbLUt1YOI9A9QaIsWSw/1mIMInryqN8EiVKVCKx48VFA8SLUeqlSUxI+qaGyhBy1RbNQkxmT7Zt1Ns7uzcTfaBz8Sdmbe783M+xrNGqgSG+Ixwo64h8jgvu8jviGciBmES6lCjQIDEhCvES8RdxXqXUC8Q7xFhGJN1F6gqB6xiehRQQ7c3B5ubX28BvQjPiDyIH7J43T0qzGAHPkXRCNcnTRyOhPEAzrK5FnEfbUMSampYCwpAYPNBklFRZBYXg6BmRnYaW3lpzzkdD+I5YTvEc9iEel0OjAWFoLBaoVkux30SJpgsYAmPx8gOVkwl1ldhfXiYrGKIcRz2gk8FZMbs7PZXRGiJCRMQGiRDDIylIUYrtdotcCEw9GfCccwYkx8AiSW08mfgsFB0FVVAeTmXvryf1kKwbu5If58wOcQ3glf8eTssVRUUMkDTid812io2O/qguD2tmSNwW6j2ZXOcUYMcESP+kdHVe90z+GALfQDsRHJNpvcEgdvgBVhEex0eflCwtsME8Gt2VnQo2MS8XR3C+Ylog/JCOG0EgNqxCM+BQYIdllZCTcc54cYWBPGFXHcGFJDDCgTfz1yYS3x+1UZETo8PPcfk0kYCWYz6BOT5JaVabnKJpCzYBCYjQ3F5McTE6wPELneKEqgej2k3imVW2oneSCTNnKGR6m322VJieeLJXd8HFJqa6WRgI54MD9PU5MpW4yCKvzAUF0N+VtbVHLWEaXZUFCMPLQBv8ulKApu9vWBb2oKftbVUfMAewvyBni0XBcjkROnU9Hu05qbIbO9HYLr67DX1kbvaLA4yYiTGLBINWBnB5PzviIj0lta2F/v8DD8GRmRTsjJAYMpi7Z0kRgwSRsJ4/GGsZopEV1WFnsVRH7jaTDHx5I5xlKqQ08SA0jmoMbcmUIDiFxraGCzIbmKg95eqaNKMyLhXOOjoJOmNKAiEjQpKWDq6IjUBbFDGuslrWGnbDmOBCmWZBN6+GWE2d1lk1pgehp+4PWIy3F0Q/IC8UmQ4ZaWwKSUyesFZnMTQkh2iiFMwvgEr/DY7RY3JDyXpCMa49qlSFfkP0BDj44AsN/75xhnwKDSMBKRZBVYWQEfIXItQ/A0oMTUIb4bojWlpFcriG5KT7E70qSlgX9uDnxkV0jq93jivZGv0f2g3MuItM6fuS72KoV0xE/ELyVaLSATHiEGrpB8gNMZUvMyakI0INyXIHZzOprifRt+RJgRb7gHp1JZ4NaYOR2Xeh3/1+f5XwEGANZLOnq2peEfAAAAAElFTkSuQmCC);\n  border-bottom: 1px solid #ddd;\n  white-space: nowrap;\n}\n.tab {\n  display: inline-block;\n  padding: 5px 10px;\n  color: #666;\n  line-height: 1;\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n}\n.tab:hover {\n  background: #eee;\n}\n.tab_selected {\n  color: #444;\n  border-bottom: 2px solid rgba(62, 130, 247, 0.6);\n  margin-bottom: -1px;\n}\n.layout-buttons {\n  display: flex;\n}\n.layout-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 28px;\n  height: 24px;\n  color: rgb(100, 100, 100);\n  cursor: pointer;\n}\n.layout-button:hover {\n  background: rgb(66, 128, 236);\n  color: white;\n}\n.layout-button:before {\n  content: "";\n  width: 15px;\n  height: 13px;\n  border: 2px solid currentColor;\n  box-sizing: border-box;\n}\n:host([side="left"]) .layout-button[side=left],\n:host([side="right"]) .layout-button[side=right],\n:host([side="top"]) .layout-button[side=top],\n:host([side="bottom"]) .layout-button[side=bottom],\n:host([side="fit the page"]) .layout-button[side="fit the page"] {\n  color: rgb(66, 128, 236);\n  background: none;\n  cursor: default;\n}\n.layout-button[side=external]:before {\n  height: 10px;\n  width: 13px;\n  border-width: 0 0 2px 2px;\n  margin-bottom: -3px;\n}\n.layout-button[side=external]:after {\n  content: "";\n  height: 10px;\n  width: 13px;\n  border: 2px solid currentColor;\n  box-sizing: border-box;\n  margin-top: -3px;\n  margin-left: -10px;\n}\n.layout-button[side=top]:before {\n  border-top-width: 5px;\n}\n.layout-button[side=right]:before {\n  border-right-width: 5px;\n}\n.layout-button[side=bottom]:before {\n  border-bottom-width: 5px;\n}\n.layout-button[side=left]:before {\n  border-left-width: 5px;\n}\n.close-button {\n  position: relative;\n  width: 28px;\n  text-align: center;\n  font: 20px Arial, sans-serif;\n  color: rgb(90, 90, 90);\n  cursor: pointer;\n}\n.close-button:hover {\n  color: black;\n}\n.close-button:after {\n  content: "\\d7";\n  line-height: 24px;\n}\n.sandbox {\n  flex: 1 1 auto;\n  position: relative;\n}\niframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n}\n';
  var publishers = [];
  var selectedPublisher = null;
  var selectPublisher = () => {
  };
  var view = null;
  var onClose;
  var settings = {};
  function setSetting(name, value) {
    settings[name] = value;
    try {
      localStorage.rempl = JSON.stringify(settings);
    } catch (e) {
    }
  }
  function updateTabSelectedState(tabEl) {
    tabEl.classList.toggle("tab_selected", tabEl.getAttribute("publisher") === selectedPublisher);
  }
  function updatePublisherList() {
    const { tabs } = getView();
    tabs.innerHTML = trustedEmptyHTML;
    for (const publisher of publishers) {
      const { element } = createElement_default({
        publisher,
        class: "tab",
        children: [publisher],
        events: {
          click() {
            selectPublisher(publisher);
          }
        }
      });
      updateTabSelectedState(element);
      tabs.appendChild(element);
    }
  }
  function getView() {
    if (view === null) {
      const wrapperEl = document.createElement("div");
      const shadow = wrapperEl.attachShadow({ mode: "open" });
      const styleEl = document.createElement("style");
      const content = createElement_default({
        class: "host",
        children: [
          {
            class: "toolbar",
            children: [
              {
                ref: "tabs",
                style: {
                  display: "flex",
                  flex: "1"
                }
              },
              {
                ref: "buttons",
                class: "layout-buttons",
                children: [
                  ...["left", "top", "bottom", "right", "fit the page"].map((side) => ({
                    side,
                    title: `Dock to ${side}`,
                    class: "layout-button",
                    events: {
                      click() {
                        wrapperEl.setAttribute("side", side);
                        setSetting("host-dock", side);
                      }
                    }
                  })),
                  {
                    class: "close-button",
                    events: {
                      click() {
                        onClose == null ? void 0 : onClose();
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            ref: "sandbox",
            class: "sandbox"
          }
        ]
      });
      try {
        Object.assign(settings, JSON.parse(localStorage.rempl || "{}"));
      } catch (e) {
      }
      wrapperEl.setAttribute("side", settings["host-dock"] || "bottom");
      styleEl.append(document.createTextNode(style_default));
      shadow.append(styleEl);
      shadow.append(content.element);
      view = __spreadValues({
        wrapper: wrapperEl
      }, content);
      updatePublisherList();
    }
    return view;
  }
  function showView(closeCallback) {
    const { wrapper } = getView();
    onClose = closeCallback;
    wrapper.style.display = "";
    if (!document.contains(wrapper)) {
      (document.body || document.documentElement).append(wrapper);
    }
  }
  function softHideView() {
    getView().wrapper.style.display = "none";
  }
  function hideView() {
    getView().wrapper.remove();
  }
  var view_default = {
    show: showView,
    hide: hideView,
    softHide: softHideView,
    getSandboxContainer() {
      return getView().sandbox;
    },
    setPublisherList(publisherList, selectPublisherFn) {
      publishers = publisherList;
      selectPublisher = selectPublisherFn;
      updatePublisherList();
    },
    selectPublisher(id) {
      if (selectedPublisher !== id) {
        selectedPublisher = id;
        if (view) {
          Array.from(getView().tabs.children).forEach((el) => updateTabSelectedState(el));
        }
      }
    }
  };
  var publishers2 = [];
  var selectedPublisherId = null;
  var autoSelectPublisher = false;
  var teardownTimer;
  var transport = null;
  var sandbox = null;
  var host = null;
  function cleanupSandbox() {
    if (sandbox !== null) {
      sandbox.destroy();
      sandbox = null;
    }
  }
  function selectPublisher2(publisherId = null) {
    if (!publisherId) {
      publisherId = null;
    }
    if (publisherId !== selectedPublisherId) {
      autoSelectPublisher = false;
      selectedPublisherId = publisherId;
      if (selectedPublisherId) {
        view_default.selectPublisher(selectedPublisherId);
        view_default.show(host.deactivate);
        transport.onInit({ id: selectedPublisherId }, function initSandbox(papi) {
          papi.getRemoteUI((error, type, content) => {
            const sandboxContainerEl = view_default.getSandboxContainer();
            cleanupSandbox();
            if (error) {
              const errorEl = document.createElement("div");
              errorEl.append("Error on loading UI: ", error);
              errorEl.setAttribute("style", "margin:10px;padding:5px 10px;border-radius:3px;border:1px solid #eba8a8;color:#f34040;background:#ffe0e0;");
              sandboxContainerEl.innerHTML = trustedEmptyHTML;
              sandboxContainerEl.append(errorEl);
            } else {
              sandbox = createSandbox({
                container: sandboxContainerEl,
                type,
                content
              }, (api) => {
                papi.subscribe(api.send);
                api.subscribe(papi.send);
              });
              sandbox.setConnected(true);
            }
          });
        });
      } else {
        view_default.hide();
        cleanupSandbox();
      }
    }
  }
  function getHost() {
    if (host !== null) {
      return host;
    }
    transport = EventTransport.get("rempl-inpage-host", "rempl-inpage-publisher");
    transport.remoteEndpoints.on((endpoints2) => {
      publishers2 = endpoints2;
      view_default.setPublisherList(publishers2, selectPublisher2);
      if (autoSelectPublisher && !selectedPublisherId && publishers2.length) {
        selectPublisher2(publishers2[0]);
      }
    });
    return host = {
      activate(publisher) {
        const publisherId = typeof publisher === "string" ? publisher : (publisher == null ? void 0 : publisher.id) || selectedPublisherId || publishers2[0] || null;
        clearTimeout(teardownTimer);
        selectPublisher2(publisherId);
        view_default.show(host.deactivate);
        if (!selectedPublisherId) {
          autoSelectPublisher = true;
        }
      },
      deactivate(publisher) {
        const publisherId = typeof publisher === "string" ? publisher : (publisher == null ? void 0 : publisher.id) || null;
        autoSelectPublisher = false;
        if (!publisherId || publisherId === selectedPublisherId) {
          view_default.softHide();
          clearTimeout(teardownTimer);
          teardownTimer = setTimeout(() => selectPublisher2(), 15e3);
        }
      }
    };
  }
  var TransportPublisher = class extends Publisher {
    constructor(id, getRemoteUI, options) {
      super(id);
      this.options = options || {};
      this.getRemoteUI = (settings2) => {
        try {
          return Promise.resolve(getRemoteUI(settings2)).then((result) => {
            if (result.type === "script") {
              return {
                type: "script",
                value: {
                  "publisher-ui.js": result.value
                }
              };
            }
            return result;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      };
    }
  };
  var publishers3 = /* @__PURE__ */ new Map();
  var ws = null;
  function getPublisher(id, getRemoteUI, options) {
    let publisher = publishers3.get(id);
    if (publisher) {
      console.warn(`[rempl] Publisher with ID "${id}" has been already created`);
      return publisher;
    }
    publisher = new TransportPublisher(id, getRemoteUI, options);
    publishers3.set(id, publisher);
    if (ws) {
      ws.sync(publisher);
    }
    return publisher;
  }
  function resolveWsUri(settings2, uri) {
    switch (uri) {
      case "implicit":
      case void 0:
        return settings2.explicit || settings2.implicit;
      case "explicit":
        return settings2.explicit;
    }
    return uri;
  }
  function connect(auto, createWsTransport, fetchWsSettings2, uri) {
    if (ws === null) {
      uri = auto ? fetchWsSettings2().explicit : resolveWsUri(fetchWsSettings2(), uri);
      if (typeof uri === "string") {
        ws = createWsTransport(uri);
        for (const publisher of publishers3.values()) {
          ws.sync(publisher);
        }
      } else if (!auto) {
        console.warn("[rempl] Connection to WS server doesn't established since bad value for URI", uri);
      }
    } else {
      console.warn("[rempl] Connection to WS server already set");
    }
  }
  var import_socket_io_slim = __toESM(require_socket_io_slim(), 1);
  var endpoints = /* @__PURE__ */ Object.create(null);
  var INFO_UPDATE_TIME = 100;
  var DEBUG2 = false;
  var DEBUG_PREFIX2 = "[rempl][ws-transport] ";
  function valuesChanged(a, b) {
    for (const key of Object.keys(a)) {
      const value1 = a[key];
      const value2 = b[key];
      if (Array.isArray(value1)) {
        if (valuesChanged(value1, value2)) {
          return true;
        }
      } else {
        if (String(value1) !== String(value2)) {
          return true;
        }
      }
    }
    return false;
  }
  function normalizeUri(uri) {
    uri = String(uri);
    if (/^\d+$/.test(uri)) {
      return "ws://localhost:" + uri;
    }
    return uri.replace(/^http:\/\//i, "ws://").replace(/^https:\/\//i, "wss://").replace(/^([a-z]+:\/\/)|^/i, function(m, protocol) {
      protocol = protocol ? protocol.toLowerCase() : "";
      return protocol === "ws://" || protocol === "wss://" ? protocol : "ws://";
    });
  }
  function subscribe2(endpoint, fn) {
    return subscribe(this.dataCallbacks, {
      endpoint,
      fn
    });
  }
  function send(endpoint, callback) {
    this.send("rempl:from publisher", endpoint, callback);
  }
  function onConnect() {
    clearInterval(this.sendInfoTimer);
    this.connected.set(true);
    this.info = this.getInfo();
    this.send("rempl:endpoint connect", this.info, (data) => {
      if ("id" in data) {
        this.setClientId(data.id);
      }
      this.sendInfoTimer = setInterval(this.sendInfo.bind(this), INFO_UPDATE_TIME);
    });
    if (DEBUG2) {
      console.log(DEBUG_PREFIX2 + "connected");
    }
  }
  function onGetUI(id, settings2, callback) {
    const publisherMeta = this.publishersMap.get(id);
    if (!publisherMeta) {
      if (DEBUG2) {
        console.error(DEBUG_PREFIX2 + "Publisher `" + id + "` isn't registered");
      }
      callback("Publisher `" + id + "` isn't registered");
      return;
    }
    return publisherMeta.getRemoteUI(settings2 || {}).catch((error) => ({ error: String(error == null ? void 0 : error.message) })).then((res) => {
      if ("error" in res) {
        callback(res.error);
      } else {
        callback(null, res.type, res.value);
      }
    });
  }
  function onData(id, ...args) {
    if (!this.publishersMap.has(id)) {
      if (DEBUG2) {
        console.error(DEBUG_PREFIX2 + "Publisher `" + id + "` isn't registered");
      }
      return;
    }
    this.dataCallbacks.forEach(function(callback) {
      if (callback.endpoint === id) {
        callback.fn.apply(null, args);
      }
    });
  }
  function onDisconnect() {
    if (DEBUG2) {
      console.log(DEBUG_PREFIX2 + "disconnected");
    }
    clearInterval(this.sendInfoTimer);
    this.connected.set(false);
  }
  var WsTransport = class {
    constructor(uri, socketIO2) {
      this.publishers = [];
      this.publishersMap = /* @__PURE__ */ new Map();
      this.dataCallbacks = [];
      this.connected = new ReactiveValue(false);
      this.ownEndpoints = new EndpointList();
      this.remoteEndpoints = new EndpointList();
      this.sessionId = genUID();
      this.id = null;
      this.sendInfoTimer = null;
      this.info = this.getInfo();
      if (DEBUG2) {
        console.log(DEBUG_PREFIX2 + "connecting to " + normalizeUri(uri));
      }
      this.socket = socketIO2.connect(normalizeUri(uri), { transports: ["websocket"] }).on("connect", onConnect.bind(this)).on("disconnect", onDisconnect.bind(this)).on("rempl:get ui", onGetUI.bind(this)).on("rempl:to publisher", onData.bind(this));
    }
    static get(endpoint, socketIO2) {
      if (endpoint in endpoints) {
        return endpoints[endpoint];
      }
      return endpoints[endpoint] = new this(endpoint, socketIO2);
    }
    get type() {
      return "unknown";
    }
    setClientId(id) {
      this.id = id;
    }
    send(name, arg, callback) {
      this.socket.emit(name, arg, callback);
    }
    getInfo() {
      return {
        id: this.id,
        sessionId: this.sessionId,
        type: this.type,
        publishers: [...this.publishers]
      };
    }
    sendInfo() {
      const newInfo = this.getInfo();
      if (valuesChanged(this.info, newInfo)) {
        this.info = newInfo;
        this.send("rempl:endpoint info", this.info);
      }
    }
    createApi(publisher) {
      if (this.publishersMap.has(publisher.id)) {
        if (DEBUG2) {
          console.error(DEBUG_PREFIX2 + "Publisher `" + publisher.id + "` is already registered");
        }
        return;
      }
      if (publisher.id) {
        this.publishers.push(publisher.id);
        this.publishersMap.set(publisher.id, {
          getRemoteUI: publisher.getRemoteUI
        });
      }
      this.sendInfo();
      return {
        connected: this.connected,
        send: send.bind(this, publisher.id),
        subscribe: subscribe2.bind(this, publisher.id)
      };
    }
    sync(publisher) {
      const api = this.createApi(publisher);
      if (api) {
        api.subscribe(publisher.processInput.bind(publisher));
        api.connected.link((connected) => {
          publisher.setupChannel("ws", api.send, this.remoteEndpoints, connected);
        });
      }
    }
  };
  var style_default2 = "/* src/publisher/browser/identify/style.css */\n:host {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100000000;\n  background: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  line-height: 1.5;\n  font-family:\n    Tahoma,\n    Verdana,\n    Arial,\n    sans-serif;\n}\nh1 {\n  font-size: 100px;\n  font-size: 33vh;\n  font-size: clamp(20px, 33vh, 100px);\n  font-weight: normal;\n  margin: 0;\n}\nbutton {\n  font-size: 18px;\n  line-height: 1;\n  padding: 12px 24px;\n  background: #3bafda;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n";
  var identifyWidgetId = "rempl-identify-widget";
  var cancelOverlay = null;
  function createOverlay(origin, num) {
    const overlayEl2 = document.createElement("div");
    const shadow = overlayEl2.attachShadow({ mode: "closed" });
    const styleEl = document.createElement("style");
    const buttonsEl = document.createElement("div");
    const headerEl = document.createElement("h1");
    overlayEl2.id = identifyWidgetId;
    overlayEl2.dataset.origin = origin;
    headerEl.textContent = num;
    styleEl.textContent = style_default2;
    shadow.append(styleEl, headerEl, buttonsEl);
    return {
      overlayEl: overlayEl2,
      createButton(name, pickPublisher) {
        const wrapperEl = buttonsEl.appendChild(document.createElement("div"));
        const buttonEl = wrapperEl.appendChild(document.createElement("button"));
        wrapperEl.setAttribute("style", "margin-bottom:5px");
        buttonEl.textContent = name;
        buttonEl.addEventListener("click", pickPublisher);
      }
    };
  }
  function postIdentifyMessage(params) {
    postMessage(__spreadValues({ to: identifyWidgetId }, params));
  }
  function startIdentify(origin, num, callback) {
    if (typeof document === "undefined") {
      return;
    }
    const existingWidget = document.querySelector("#" + identifyWidgetId);
    if (!existingWidget || existingWidget.dataset.origin !== origin) {
      if (existingWidget) {
        postMessage({ op: "stop-identify" });
      }
      const { overlayEl: overlayEl2, createButton } = createOverlay(origin, String(num));
      const documentStyleOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.appendChild(overlayEl2);
      const onMessageCallback = (event) => {
        const { data } = event;
        if ((data == null ? void 0 : data.to) === identifyWidgetId) {
          switch (data.op) {
            case "add-publisher":
              createButton(data.name || data.id, () => callback(data.id));
              break;
            case "stop-identify":
              console.log("stop-indentify");
              cancelOverlay == null ? void 0 : cancelOverlay();
              break;
          }
        }
      };
      addEventListener("message", onMessageCallback);
      cancelOverlay = () => {
        removeEventListener("message", onMessageCallback);
        document.body.style.overflow = documentStyleOverflow;
        overlayEl2.remove();
        cancelOverlay = null;
      };
    }
  }
  function stopIdentify() {
    if (typeof cancelOverlay === "function") {
      cancelOverlay();
    }
  }
  var STORAGE_KEY = "rempl:id";
  function fetchWsSettings() {
    function fetchEnvVariable() {
      if (typeof REMPL_SERVER !== "undefined" && REMPL_SERVER !== resolvedGlobalThis.REMPL_SERVER) {
        return REMPL_SERVER;
      }
    }
    function fetchMeta() {
      const meta = typeof document !== "undefined" ? document.querySelector('meta[name="rempl:server"]') : void 0;
      return meta && meta.getAttribute("content") || void 0;
    }
    const location2 = {
      protocol: "ws:",
      hostname: void 0
    };
    const implicitUri = location2.protocol + "//" + (location2.hostname || "localhost") + ":8177";
    let explicitUri = void 0;
    let setup = fetchEnvVariable();
    if (setup === void 0) {
      setup = fetchMeta();
    }
    switch (setup) {
      case "none":
      case void 0:
      case false:
        break;
      case "implicit":
      case "auto":
      case true:
        explicitUri = implicitUri;
        break;
      default:
        if (typeof setup === "string") {
          explicitUri = setup;
        }
    }
    return {
      explicit: explicitUri || implicitUri,
      implicit: implicitUri
    };
  }
  var BrowserWsTransport = class extends WsTransport {
    constructor(uri) {
      super(uri, import_socket_io_slim.default);
      const self2 = this;
      try {
        this.id = sessionStorage[STORAGE_KEY];
      } catch (e) {
      }
      this.socket.on("rempl:identify", function(num, callback) {
        startIdentify(this.io.uri, num, callback);
        for (const publisherId of self2.publishers) {
          postIdentifyMessage({
            op: "add-publisher",
            id: publisherId,
            name: publisherId
          });
        }
      }).on("rempl:stop identify", stopIdentify).on("disconnect", stopIdentify);
    }
    get type() {
      return "browser";
    }
    setClientId(id) {
      super.setClientId(id);
      try {
        sessionStorage[STORAGE_KEY] = this.id;
      } catch (e) {
      }
    }
    getInfo() {
      var _a2, _b, _c, _d;
      return __spreadProps(__spreadValues({}, super.getInfo()), {
        location: String(" "),
        title: ((_b = (_a2 = resolvedTop) == null ? void 0 : _a2.document) == null ? void 0 : _b.title) || ((_d = (_c = resolvedTop) == null ? void 0 : _c.location) == null ? void 0 : _d.href) || "Unknown"
      });
    }
  };
  function createBrowserWsTransport(uri) {
    return new BrowserWsTransport(uri);
  }
  function createPublisher(id, getRemoteUI, options) {
    connect(true, createBrowserWsTransport, fetchWsSettings);
    const publisher = getPublisher(id, getRemoteUI, options);
    EventTransport.get("rempl-self-publisher", "rempl-self-subscriber").sync(publisher);
    return Object.assign(publisher.ns("*"), {
      ns: publisher.ns.bind(publisher)
    });
  }
  function connectPublisherWs(uri) {
    connect(false, createBrowserWsTransport, fetchWsSettings, uri);
  }
  var style_default3 = '/* src/subscriber/browser/disconnected-overlay/style.css */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n    backdrop-filter: blur(0) grayscale(0);\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes dot-blink {\n  50% {\n    opacity: 1;\n  }\n}\n:host {\n  position: fixed;\n  z-index: 10000000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  font: 12px arial;\n  transition: opacity 0.5s;\n  background: #fffe;\n  animation-name: fade-in;\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n}\n@supports (backdrop-filter: blur(1px)) {\n  :host {\n    background: #fff8;\n    backdrop-filter: blur(5px) grayscale(0.8);\n  }\n}\n:host::before {\n  content: "Publisher connection is lost";\n  margin: 30px 0 5px;\n  display: inline-block;\n  padding: 4px;\n}\n.dot {\n  background-color: #5096fa;\n  display: inline-block;\n  vertical-align: middle;\n  height: 6px;\n  width: 6px;\n  margin: 3px;\n  opacity: 0;\n  animation-name: dot-blink;\n  animation-duration: 0.65s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  border-radius: 50%;\n}\n.dot:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.dot:nth-child(2) {\n  animation-delay: 0.175s;\n}\n.dot:nth-child(3) {\n  animation-delay: 0.25s;\n}\n';
  var overlayEl = null;
  function initOverlayEl() {
    if (overlayEl === null) {
      overlayEl = document.createElement("div");
      const shadow = overlayEl.attachShadow({ mode: "closed" });
      const styleEl = document.createElement("style");
      const dotsEl = document.createElement("div");
      styleEl.textContent = style_default3;
      dotsEl.append(...Array.from({ length: 3 }, () => {
        const el = document.createElement("div");
        el.className = "dot";
        return el;
      }));
      shadow.append(styleEl, dotsEl);
    }
    return overlayEl;
  }
  function setOverlayVisible(visible) {
    if (visible && typeof document !== "undefined") {
      document.body.append(initOverlayEl());
    } else if (overlayEl) {
      overlayEl.remove();
    }
  }
  var subscriber = null;
  function createSubscriber() {
    subscriber = new Subscriber();
    const connectedObservable = Object.assign(subscriber.connected, { defaultOverlay: true });
    connectedObservable.link((connected) => {
      if (connected) {
        setOverlayVisible(false);
      } else if (connectedObservable.defaultOverlay) {
        setOverlayVisible(true);
      }
    });
    EventTransport.get("rempl-subscriber", "rempl-sandbox", resolvedOpener || resolvedParent).sync(subscriber);
    return subscriber;
  }
  function getSubscriber() {
    if (subscriber === null) {
      subscriber = createSubscriber();
    }
    return Object.assign(subscriber.ns("*"), {
      connected: subscriber.connected,
      ns: subscriber.ns.bind(subscriber)
    });
  }
  function getSelfSubscriber(id) {
    const subscriber2 = new Subscriber(id);
    EventTransport.get("rempl-self-subscriber", "rempl-self-publisher").sync(subscriber2);
    return Object.assign(subscriber2.ns("*"), {
      connected: subscriber2.connected,
      ns: subscriber2.ns.bind(subscriber2)
    });
  }
  function scriptFromFile(filename, includeRempl = false) {
    let cache = null;
    return function(settings2) {
      if (!settings2.dev && cache !== null) {
        return { type: "script", value: cache };
      }
      return fetch(filename).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! File "${filename}", status: ${response.status}`);
        }
        return response.text();
      }).then((response) => ({
        type: "script",
        value: cache = (includeRempl && typeof rempl === "function" ? "var rempl = (" + rempl.toString() + ")();" : "") + response
      }));
    };
  }
  ;
  return {
    connectPublisherWs,
    createEnv,
    createPublisher,
    createSandbox,
    getEnv,
    getHost,
    getSelfSubscriber,
    getSubscriber,
    scriptFromFile,
    version
  };
}();
