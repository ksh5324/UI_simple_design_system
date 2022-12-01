"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Header: () => Header,
  Page: () => Page
});
module.exports = __toCommonJS(src_exports);

// src/stories/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      ),
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};

// src/stories/Header.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "wrapper", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
              fill: "#FFF"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
              fill: "#555AB9"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
              fill: "#91BAF8"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: user ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: user.name }),
      "!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "small", onClick: onLogout, label: "Log out" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "small", onClick: onLogin, label: "Log in" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Button,
      {
        primary: true,
        size: "small",
        onClick: onCreateAccount,
        label: "Sign up"
      }
    )
  ] }) })
] }) });

// src/stories/Page.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Page = () => {
  const [user, setUser] = import_react.default.useState();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Header,
      {
        user,
        onLogin: () => setUser({ name: "Jane Doe" }),
        onLogout: () => setUser(void 0),
        onCreateAccount: () => setUser({ name: "Jane Doe" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: "Pages in Storybook" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
        "We recommend building UIs with a",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: "https://componentdriven.org",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: "component-driven" })
          }
        ),
        " ",
        "process starting with atomic components and ending with pages."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: 'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories' }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: "Assemble data in the page component from your services. You can mock these services out using Storybook." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
        "Get a guided tutorial on component-driven development at",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: "https://storybook.js.org/tutorials/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Storybook tutorials"
          }
        ),
        ". Read more in the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: "https://storybook.js.org/docs",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "docs"
          }
        ),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "tip-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "tip", children: "Tip" }),
        " Adjust the width of the canvas with the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "svg",
          {
            width: "10",
            height: "10",
            viewBox: "0 0 12 12",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "path",
              {
                d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
                id: "a",
                fill: "#999"
              }
            ) })
          }
        ),
        "Viewports addon in the toolbar"
      ] })
    ] })
  ] });
};
