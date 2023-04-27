// node_modules/.pnpm/iares@1.1.3_htm@3.1.1/node_modules/iares/dist/app/index.js
var createApp = function(params) {
  var hostElement = document.body;
  var appConfig = {};
  var mount = function() {
    params.onMount((appConfig === null || appConfig === void 0 ? void 0 : appConfig.context) || hostElement);
  };
  var unmount = function() {
  };
  var setup = function(params2) {
    Object.assign(appConfig, params2);
  };
  return { mount, unmount, setup };
};

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
var _createSelector = function(text) {
  return text.split(/(?=[A-Z])/).join("-").toLowerCase();
};
var _createId = function() {
  var randomStr = Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return "".concat(randomStr);
};
var _bindProps = function(element, props, isFactory, componentId, selector) {
  if (isFactory === void 0) {
    isFactory = true;
  }
  if (!props)
    return;
  var attrs = Object.keys(props);
  var isCssClass = function(value) {
    return /^class/.test(value);
  };
  var isEvent = function(value) {
    return /^on/.test(value);
  };
  var isAction = function(value) {
    return typeof value === "function";
  };
  attrs.forEach(function(attr) {
    if (isEvent(attr)) {
      var eventName = attr.toLowerCase().replace(/on/, "");
      var handler = props[attr];
      element.addEventListener(eventName, handler);
    }
    if (isEvent(attr) === isAction(props[attr]) && isFactory !== true && isEvent(attr) !== true) {
      element.setAttribute(attr, props[attr]);
    }
    if (isCssClass(attr)) {
      var styleElement = document.head.querySelector("[id=".concat(selector, "]"));
      var componentUUID = styleElement === null || styleElement === void 0 ? void 0 : styleElement.getAttribute("component-id");
      var cssClassNames = _applyCssContext(props[attr], componentUUID);
      element.setAttribute(attr, cssClassNames);
    }
  });
};
var _createChildrenByObject = function(template4, context, componentId, selector) {
  if (typeof template4 === "string") {
    return context.textContent += template4;
  }
  if (typeof (template4 === null || template4 === void 0 ? void 0 : template4.type) === "function") {
    _createComponent(template4, context);
    return;
  }
  if (typeof (template4 === null || template4 === void 0 ? void 0 : template4.type) === "string") {
    var element = document.createElement(template4.type);
    _bindProps(element, template4.props, false, componentId, selector);
    _createChildren(template4.children, element, componentId, selector);
    context.insertAdjacentElement("beforeend", element);
    return;
  }
  if (Array.isArray(template4)) {
    _createChildrenByArray(template4, context, componentId, selector);
    return;
  }
  if (typeof template4 === "object" && !Array.isArray(template4)) {
    var error = new Error();
    error.stack = "ComponentError:Component is not a named function and must be.\n    ".concat(JSON.stringify(template4), "\n    ");
    throw error;
  }
};
var _createChildrenByArray = function(template4, context, componentId, selector) {
  template4.forEach(function(templateItem) {
    _createChildrenByObject(templateItem, context, componentId, selector);
  });
};
var _createChildren = function(template4, context, componentId, selector) {
  return !Array.isArray(template4) ? _createChildrenByObject(template4, context, componentId, selector) : _createChildrenByArray(template4, context, componentId, selector);
};
var _hasStyles = function(selector) {
  return document.querySelector("style#".concat(selector));
};
var _applyCssContext = function(cssText, id) {
  if (!id)
    return cssText;
  var context = /ctx/g;
  return cssText.replace(context, id);
};
var _bindCssStyles = function(styles4, selector, componentId) {
  if (_hasStyles(selector))
    return;
  var css2 = _applyCssContext(styles4, componentId);
  var stylesElement = document.createElement("style");
  stylesElement.setAttribute("id", selector);
  stylesElement.setAttribute("component-id", componentId);
  stylesElement.insertAdjacentHTML("beforeend", css2);
  document.head.insertAdjacentElement("beforeend", stylesElement);
};
var _createEventDrive = function(element) {
  var execute = function(handler) {
    handler(element);
  };
  return { execute };
};
var _createComponent = function(template4, context) {
  var _a, _b;
  if (typeof template4.type !== "function")
    throw new Error("Component is not a named function and must be.");
  var componentFactory = template4.type, props = template4.props;
  var component = componentFactory({ props });
  var selector = _createSelector(componentFactory.name);
  var hostElement = document.createElement(selector);
  var state = ((_a = component === null || component === void 0 ? void 0 : component.store) === null || _a === void 0 ? void 0 : _a.state) || {};
  var actions = (component === null || component === void 0 ? void 0 : component.actions) || {};
  var hooks = component === null || component === void 0 ? void 0 : component.hooks;
  var componentId = _createId();
  var isFunction = true;
  var _eventDrive = _createEventDrive(hostElement);
  (_b = component === null || component === void 0 ? void 0 : component.store) === null || _b === void 0 ? void 0 : _b.watchState(function(data) {
    return _updateView(data);
  });
  _eventDrive.execute(function(element) {
    var _a2;
    (_a2 = hooks === null || hooks === void 0 ? void 0 : hooks.beforeMount) === null || _a2 === void 0 ? void 0 : _a2.call(hooks, element);
  });
  var _updateView = function(payload) {
    var _a2;
    _eventDrive.execute(function(element) {
      var _a3;
      (_a3 = hooks === null || hooks === void 0 ? void 0 : hooks.beforeRender) === null || _a3 === void 0 ? void 0 : _a3.call(hooks, element);
    });
    hostElement.innerHTML = "";
    (component === null || component === void 0 ? void 0 : component.styles) && _bindCssStyles(component === null || component === void 0 ? void 0 : component.styles(), selector, componentId);
    _bindProps(hostElement, template4.props, isFunction, componentId, selector);
    _createChildren(template4.children, hostElement, componentId, selector);
    context.insertAdjacentElement("beforeend", hostElement);
    var child = template4.type({ props: template4.props });
    if (child === null || child === void 0 ? void 0 : child.template) {
      var childHTM = (_a2 = child.template) === null || _a2 === void 0 ? void 0 : _a2.call(child, { props: props || {}, state, actions });
      _createChildrenByObject(childHTM, hostElement, componentId, selector);
    }
    if (!(child === null || child === void 0 ? void 0 : child.template) && typeof (template4 === null || template4 === void 0 ? void 0 : template4.type) === "function") {
      var childHTM = template4 === null || template4 === void 0 ? void 0 : template4.type({ props: props || {}, state, actions });
      _bindProps(hostElement, template4.props, isFunction, componentId, selector);
      if (!childHTM) {
        hostElement.remove();
        return;
      }
      _createChildrenByObject(childHTM, hostElement, componentId, selector);
    }
    var slotsOrigin = Array.from(context.querySelectorAll("slot[target]"));
    var slotsDestiny = Array.from(context.querySelectorAll("slot[id]"));
    var scope = {
      uuid: null,
      componentId: null
    };
    slotsOrigin.forEach(function(slotOrigin) {
      var _a3, _b2;
      var targetId = slotOrigin.getAttribute("target") || "";
      var targetContext = slotOrigin.getAttribute("ctx");
      var contextStyleElement = (_a3 = document.head) === null || _a3 === void 0 ? void 0 : _a3.querySelector("#".concat(targetContext));
      var componentContextElement = (_b2 = document.head) === null || _b2 === void 0 ? void 0 : _b2.querySelector("#".concat(selector));
      var slotTargetSelector = "slot[id=".concat(targetId, "]");
      var targetSlot = context.querySelector(slotTargetSelector);
      var slotFragment = document.createDocumentFragment();
      scope.uuid = (contextStyleElement === null || contextStyleElement === void 0 ? void 0 : contextStyleElement.getAttribute("component-id")) || null;
      scope.componentId = (componentContextElement === null || componentContextElement === void 0 ? void 0 : componentContextElement.getAttribute("component-id")) || null;
      Array.from(slotOrigin.children).forEach(function(childElement) {
        targetContext && childElement.setAttribute("sloted", targetContext);
        slotFragment.append(childElement);
        if (slotOrigin.textContent !== "" && slotFragment.textContent !== slotOrigin.textContent) {
          var tempalteError = new Error();
          tempalteError.stack = "TemplateError: Invalid slot element. A content is not a valid html element and must be.\n ".concat(slotOrigin.textContent);
          throw tempalteError;
        }
      });
      targetSlot === null || targetSlot === void 0 ? void 0 : targetSlot.after(slotFragment);
    });
    slotsOrigin.forEach(function(slot) {
      return slot.remove();
    });
    slotsDestiny.forEach(function(slot) {
      return slot.remove();
    });
    _eventDrive.execute(function(element) {
      var _a3;
      (_a3 = hooks === null || hooks === void 0 ? void 0 : hooks.afterRender) === null || _a3 === void 0 ? void 0 : _a3.call(hooks, element);
      var slotedElements = Array.from(hostElement.querySelectorAll("[sloted]"));
      var _bindCssContext = function(element2) {
        if (!scope.uuid)
          return;
        if (!scope.componentId)
          return;
        var regex = new RegExp(scope.componentId);
        var cssClassNames = element2.classList.toString();
        element2.className = cssClassNames.replace(regex, scope.uuid);
        var children = Array.from(element2.querySelectorAll('[class$="'.concat(scope.componentId, '"]')));
        children.forEach(function(element3) {
          return _bindCssContext(element3);
        });
      };
      slotedElements.forEach(function(element2) {
        return _bindCssContext(element2);
      });
    });
    eventDrive.on("ON-DESTROY", function(payload2) {
      _eventDrive.execute(function(element) {
        var _a3;
        (_a3 = hooks === null || hooks === void 0 ? void 0 : hooks.destroy) === null || _a3 === void 0 ? void 0 : _a3.call(hooks, element);
      });
    });
  };
  _updateView();
  _eventDrive.execute(function(element) {
    var _a2;
    (_a2 = hooks === null || hooks === void 0 ? void 0 : hooks.afterMount) === null || _a2 === void 0 ? void 0 : _a2.call(hooks, element);
  });
};
var render = function(template4, context) {
  if (context === void 0) {
    context = document.body;
  }
  !Array.isArray(template4) ? _createComponent(template4, context) : template4.forEach(function(templateItem) {
    return _createComponent(templateItem, context);
  });
};

// node_modules/.pnpm/iares@1.1.3_htm@3.1.1/node_modules/iares/dist/router/router.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v) {
      return step([n2, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
          return t2;
        if (y = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var router = function(_a) {
  var routes2 = _a.routes, context = _a.context;
  var _routes = routes2;
  var _routerElement;
  var execute = function(validator, callback, error) {
    if (validator())
      return callback({ isValid: validator() });
    if (error) {
      var erro = new Error(error().message);
      erro.name = error().name;
      throw erro;
    }
  };
  var _bindListeners = function() {
    window.addEventListener("hashchange", function() {
      var payload = { status: true };
      eventDrive.emit("ON-DESTROY", payload);
      _mountRouteByHash(null);
    });
  };
  var _setRouterElement = function() {
    var routerElement = context === null || context === void 0 ? void 0 : context.querySelector("router-view");
    execute(function() {
      return !!routerElement;
    }, function() {
      return _routerElement = routerElement;
    }, function() {
      return {
        name: "Router Error",
        message: "Router element (router-view) is not defined and must be."
      };
    });
  };
  var _loadMainRoute = function() {
    var mainRoute = _getMainRoute();
    execute(function() {
      return !!(mainRoute === null || mainRoute === void 0 ? void 0 : mainRoute.start);
    }, function() {
      return (mainRoute === null || mainRoute === void 0 ? void 0 : mainRoute.start) && navigate(mainRoute.start);
    }, function() {
      return {
        name: "Router Error",
        message: "Start router is not defined and must be."
      };
    });
  };
  var _getMainRoute = function() {
    return _routes.find(function(route) {
      return !!(route === null || route === void 0 ? void 0 : route.start);
    });
  };
  var _getRouteByHash = function(hash) {
    return _routes.find(function(route) {
      return route.regex.test(hash);
    });
  };
  var _getRouteDefault = function() {
    return _routes.find(function(route) {
      return route === null || route === void 0 ? void 0 : route.default;
    });
  };
  var _mountRouteByHash = function(hash) {
    return __awaiter(void 0, void 0, void 0, function() {
      var hashValue, route;
      return __generator(this, function(_a2) {
        hashValue = hash || window.location.hash || "";
        route = _getRouteByHash(hashValue) || _getRouteDefault();
        _routerElement.innerHTML = "";
        route === null || route === void 0 ? void 0 : route.mount({ context: _routerElement });
        return [
          2
          /*return*/
        ];
      });
    });
  };
  var _getHash = function() {
    return window.location.hash || null;
  };
  var _hasActiveRoute = function() {
    return !!_getHash();
  };
  var navigate = function(path) {
    return window.location.hash = path;
  };
  var init = function() {
    _bindListeners();
    _setRouterElement();
    _hasActiveRoute() ? _mountRouteByHash(_getHash()) : _loadMainRoute();
  };
  return { init, navigate };
};

// env-ns:env
var environment = "development";

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

// src/components/AppHello/index.ts
var template2 = () => html`
  <div class="wrap-ctx">
    <h1>Hello Word, I'm IARES!</h1>
  </div>
`;
var AppHello = () => {
  return {
    template: template2,
    styles: styles2
  };
};
var styles2 = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// src/routes/index.ts
var routes = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    }
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppHello} />`, context);
    }
  }
];

// src/components/AppMain/index.ts
var template3 = () => html`
  <div class="wrap-ctx">
    <router-view></router-view>
  </div>
`;
var AppMain = () => {
  return {
    template: template3,
    styles: styles3
  };
};
var styles3 = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    width:100vw;
    height: 100vh
  }
`;

// src/main.ts
var appHost = createApp({
  onMount(context, props) {
    render(html`<${AppMain} />`);
    router({ routes, context }).init();
  }
});
if (environment === "development") {
  new EventSource("esbuild").addEventListener("change", () => {
    window.location.reload();
  });
}
export {
  appHost
};
//# sourceMappingURL=main.js.map
