var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/runner/work/kuduairo-translator/kuduairo-translator/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var meta = () => {
  return { title: "Kuduairo Translator" };
};
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "css/global.css"
    }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false));
}

// route-module:/home/runner/work/kuduairo-translator/kuduairo-translator/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/utils/translate.tsx
init_react();
var PHONEMES_TRANSLATION = {
  "uro": "uairo",
  "ome": "osme",
  "amina": "asmina",
  "bem": "boain",
  "undo": "uaindo",
  "ouco": "osco",
  "ouquinho": "osquanho",
  "ntira": "ntoaira",
  "ista": "oaista",
  "oiro": "oairo",
  "nta": "inta",
  "ail": "oail",
  "uem": "ueim",
  "oria": "oairia",
  "ras": "reis",
  "usa": "uisa",
  "\xE7": "s",
  "\xE3o": "eum",
  "lar": "laire",
  "dia": "doaia",
  "vida": "voaida",
  "dida": "doaida"
};
var PHONEMES = Object.keys(PHONEMES_TRANSLATION);
var translate = (text) => {
  let translatedText = text.slice();
  for (const phoneme of PHONEMES) {
    translatedText = translatedText.replace(new RegExp(phoneme, "g"), PHONEMES_TRANSLATION[phoneme]);
  }
  return translatedText;
};
var translate_default = translate;

// app/images/handshake.png
var handshake_default = "/build/_assets/handshake-3DUQFU7N.png";

// app/components/contributors.tsx
init_react();
var import_react = __toModule(require("react"));
function Contributors() {
  const [contributors, setContributors] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    fetch("https://api.github.com/repos/leodlabs/kuduairo-translator/contributors").then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((data) => {
      data = data.map((contributor) => {
        return /* @__PURE__ */ React.createElement("div", {
          className: "col-lg-2 col-5",
          key: contributor.login
        }, /* @__PURE__ */ React.createElement("div", {
          className: "card"
        }, /* @__PURE__ */ React.createElement("img", {
          src: contributor.avatar_url,
          alt: contributor.login,
          className: "card-img-top"
        }), /* @__PURE__ */ React.createElement("div", {
          className: "card-body"
        }, /* @__PURE__ */ React.createElement("h5", {
          className: "card-title"
        }, contributor.login), /* @__PURE__ */ React.createElement("a", {
          href: contributor.html_url,
          target: `_blank`,
          className: "card-link"
        }, "Siga no GitHusb"))));
      });
      setContributors(data);
    });
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    className: "row mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 text-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Contribuidoaires"), /* @__PURE__ */ React.createElement("div", {
    className: `row justify-content-center mb-4`
  }, contributors ? contributors : "CARREGAINDO..."), /* @__PURE__ */ React.createElement("small", {
    className: "my-4"
  }, "Se contribuires no repositoairio do GitHusb teu noaime aparecer\xE1 aqui")));
}

// app/components/blurb.tsx
init_react();

// app/images/kuduairo.gif
var kuduairo_default = "/build/_assets/kuduairo-RIPEW75J.gif";

// app/components/blurb.tsx
var import_react_fast_marquee = __toModule(require("react-fast-marquee"));
function Blurb() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "row mt-4 blurb-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `row justify-content-center align-items-center mb-4`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 blurb-description"
  }, /* @__PURE__ */ React.createElement(import_react_fast_marquee.default, {
    gradient: false,
    speed: 200
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4"
  }, "AAAAAAAIII MINHA VOAIDA")), /* @__PURE__ */ React.createElement("p", {
    className: "blurb-paragraph"
  }, "Kuduruaistas de todas as iduaides se reuniram para codificaire esta oitava maravuailha do muaindo: o tradutoire oficiel de Portugueis Brasileirio para a lingua do Kuduairo. O tradutoire mais \u{1F4AF}% namayer para usuairios de angola, namibia, congo demo cratico e talveis do Brazil")), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 align-items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: kuduairo_default,
    alt: "Gisfe do Kuduairo",
    className: "img-fluid blurb-image"
  })))));
}

// app/components/footer.tsx
init_react();
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("a", {
    target: `_blank`,
    href: "https://github.com/leodlabs/kuduairo-translator"
  }, "Kuduairo Translator \xE9 um projeto de C\xF3sdigo Abeirto"));
}

// app/components/audio-player.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_react_howler = __toModule(require("react-howler"));

// app/audio/nofear.mp3
var nofear_default = "/build/_assets/nofear-WA76NAAA.mp3";

// app/components/audio-player.tsx
function AudioPlayer() {
  const [play, setPlay] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(import_react_howler.default, {
    src: nofear_default,
    playing: play,
    loop: true,
    html5: true
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "play-btn",
    onClick: () => setPlay(!play)
  }, !play ? "\u25B6" : "\u23F8"));
}

// route-module:/home/runner/work/kuduairo-translator/kuduairo-translator/app/routes/index.tsx
function Index() {
  const onTranslateClick = () => {
    const portugueseText = document.getElementById("portuguese-text").value;
    document.getElementById("kuduro-text").value = translate_default(portugueseText);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container h-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row justify-content-center"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "col-lg-12 text-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Kuduairo Translator"), /* @__PURE__ */ React.createElement("img", {
    src: handshake_default,
    alt: "Aperto de m\xE3os entre Braseil e Angoaila",
    className: "img-fluid handshake mb-3"
  }), /* @__PURE__ */ React.createElement(AudioPlayer, null)), /* @__PURE__ */ React.createElement("section", {
    className: "col-lg-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "portuguese-text"
  }, "Texto em Portugu\xEAs:"), /* @__PURE__ */ React.createElement("textarea", {
    id: "portuguese-text",
    name: "portuguese-text",
    className: "form-control",
    placeholder: "Escreva seu texto a ser traduzido para o Kuduairo",
    rows: 13
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "col-lg-2 my-auto text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-block btn-light mt-2",
    onClick: onTranslateClick
  }, "Traduzoaire!")), /* @__PURE__ */ React.createElement("section", {
    className: "col-lg-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "kuduro-text",
    className: "input-label"
  }, "Tradu\xE7\xE3o em Kuduairo:"), /* @__PURE__ */ React.createElement("textarea", {
    id: "kuduro-text",
    name: "kuduro-text",
    className: "form-control",
    onChange: (e) => e.preventDefault(),
    rows: 13,
    value: ""
  }))), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-4"
  }), /* @__PURE__ */ React.createElement(Blurb, null), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-4"
  }), /* @__PURE__ */ React.createElement(Contributors, null))), /* @__PURE__ */ React.createElement(Footer, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
