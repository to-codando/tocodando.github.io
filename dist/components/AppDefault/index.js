// node_modules/.pnpm/htm@3.1.1/node_modules/htm/dist/htm.module.js
var n = function(t2, s, r, e) {
  var u;
  s[0] = 0;
  for (var h2 = 1; h2 < s.length; h2++) {
    var p = s[h2++], a = s[h2] ? (s[0] |= p ? 1 : 2, r[s[h2++]]) : s[++h2];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h2]] = a : 6 === p ? e[1][s[++h2]] += a + "" : p ? (u = t2.apply(a, n(t2, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h2 - 2] = 0, s[h2] = u)) : e.push(a);
  }
  return e;
};
var t = /* @__PURE__ */ new Map();
function htm_module_default(s) {
  var r = t.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n2) {
    for (var t2, s2, r2 = 1, e = "", u = "", h2 = [0], p = function(n3) {
      1 === r2 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e) : 3 === r2 && (n3 || e) ? (h2.push(3, n3, e), r2 = 2) : 2 === r2 && "..." === e && n3 ? h2.push(4, n3, 0) : 2 === r2 && e && !n3 ? h2.push(5, 0, true, e) : r2 >= 5 && ((e || !n3 && 5 === r2) && (h2.push(r2, 0, e, s2), r2 = 6), n3 && (h2.push(r2, n3, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n2.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n2[a].length; l++)
        t2 = n2[a][l], 1 === r2 ? "<" === t2 ? (p(), h2 = [h2], r2 = 3) : e += t2 : 4 === r2 ? "--" === e && ">" === t2 ? (r2 = 1, e = "") : e = t2 + e[0] : u ? t2 === u ? u = "" : e += t2 : '"' === t2 || "'" === t2 ? u = t2 : ">" === t2 ? (p(), r2 = 1) : r2 && ("=" === t2 ? (r2 = 5, s2 = e, e = "") : "/" === t2 && (r2 < 5 || ">" === n2[a][l + 1]) ? (p(), 3 === r2 && (h2 = h2[0]), r2 = h2, (h2 = h2[0]).push(2, 0, r2), r2 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p(), r2 = 2) : e += t2), 3 === r2 && "!--" === e && (r2 = 4, h2 = h2[0]);
    }
    return p(), h2;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}

// node_modules/.pnpm/iares@1.1.3_htm@3.1.1/node_modules/iares/dist/template/index.js
var css = function(tags) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  return tags.map(function(tag, index) {
    return "".concat(tag).concat(values[index] || "");
  }).join("");
};
function h(type, props) {
  var children = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }
  return { type, props, children };
}
var html = htm_module_default.bind(h);

// node_modules/.pnpm/iares@1.1.3_htm@3.1.1/node_modules/iares/dist/pubsub/index.js
var pubsubFactory = function() {
  var listeners = {};
  var _handlerExists = function(eventName, handler) {
    return !listeners.hasOwnProperty(eventName) || listeners[eventName].some(function(subscribedHandler) {
      return subscribedHandler.toString() === handler.toString() || subscribedHandler.name === handler.name || subscribedHandler === handler;
    });
  };
  var on = function(eventName, handler) {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!handler || typeof handler !== "function")
      throw new Error("Handler is not a function and must be.");
    if (!listeners.hasOwnProperty(eventName)) {
      listeners[eventName] = [handler];
      return { eventName, handler };
    }
    if (_handlerExists(eventName, handler)) {
      var handlerPosition = listeners[eventName].indexOf(handler);
      if (handlerPosition)
        listeners[eventName].splice(handlerPosition, 1, handler);
      return { eventName, handler };
    }
    listeners[eventName].push(handler);
    return { eventName, handler };
  };
  var off = function(_a) {
    var eventName = _a.eventName, handler = _a.handler;
    if (!listeners.hasOwnProperty(eventName))
      return;
    var eventListeners = listeners[eventName].filter(function(listener) {
      if (listener !== handler)
        return listener;
    });
    listeners[eventName] = eventListeners;
  };
  var emit = function(eventName, payload) {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!listeners.hasOwnProperty(eventName))
      return;
    listeners[eventName].forEach(function(handler) {
      handler(payload);
    });
  };
  return {
    on,
    off,
    emit
  };
};

// node_modules/.pnpm/iares@1.1.3_htm@3.1.1/node_modules/iares/dist/render/index.js
var eventDrive = pubsubFactory();

// src/components/AppDefault/index.ts
var template = () => html`
  <div>
      <h1>404</h1>
      <a href="#/">Voltar</a>
  </div>
`;
var AppDefault = () => {
  return {
    template,
    styles
  };
};
var styles = () => css`
  app-not-found {
    display: flex;
    justify-content: center;
  }

  .wrap-ctx h1 {
    font-size: 6em;
    color: var(--black-light)
  }

  .wrap-ctx a {
    color: var(--green-bright)
  }
`;
export {
  AppDefault,
  template
};
//# sourceMappingURL=index.js.map
