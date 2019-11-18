webpackHotUpdate("static/development/pages/userBlogs.js",{

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




var BaseLayout = function BaseLayout(props) {
  var className = props.className,
      children = props.children,
      isAuthenticated = props.isAuthenticated,
      user = props.user,
      isSiteOwner = props.isSiteOwner,
      cannonical = props.cannonical;
  var headerType = props.headerType || "default";
  var title = props.title || "Chris Carr Portfolio";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "My name is Chris Carr and I am an experienced software engineer and freelance developer. I have a Bachelor degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from JavaScript development to modern mobile and web applications in React and Django. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "carr portfolio, carr developer, carr freelancig, carr programming"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Chris Carr - programmer, developer, bloger"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:locale",
    content: "en_EU"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "".concat("http://localhost:3000")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "My name is Chris Carr and I am an experienced software engineer and freelance developer."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
    rel: "stylesheet"
  }), cannonical && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "cannonical",
    href: "".concat("http://localhost:3000").concat(cannonical)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/ico",
    href: "/static/favicon.ico"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "port-nav-".concat(headerType),
    isAuthenticated: isAuthenticated,
    user: user,
    isSiteOwner: isSiteOwner
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "cover ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, children))));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ })

})
//# sourceMappingURL=userBlogs.js.bdf78694f5b4d5ff1d1b.hot-update.js.map