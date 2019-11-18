webpackHotUpdate("static/development/pages/blogs.js",{

/***/ "./pages/blogs.js":
/*!************************!*\
  !*** ./pages/blogs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Blogs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blogs, _React$Component);

  function Blogs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Blogs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Blogs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderBlogs", function (blogs) {
      return blogs.map(function (blog, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: index,
          className: "post-preview"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
          route: "/blogs/".concat(blog.slug)
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
          className: "post-title"
        }, blog.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
          className: "post-subtitle"
        }, Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["shortenText"])(blog.subTitle)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "post-meta"
        }, "Posted by", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: "#"
        }, " ", blog.author, " "), moment__WEBPACK_IMPORTED_MODULE_9___default()(parseInt(blog.createdAt, 10)).format("LL")));
      });
    });

    return _this;
  }

  _createClass(Blogs, [{
    key: "render",
    value: function render() {
      var blogs = this.props.blogs;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props.auth, {
        headerType: "landing",
        className: "blog-listing-page",
        title: "Filip Jerga - Newest Blogs to Read"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          backgroundImage: "url('/static/images/home-bg.jpg')"
        },
        className: "jsx-3280519500" + " " + "masthead"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "row"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3280519500"
      }, "Fresh Blogs"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3280519500" + " " + "subheading"
      }, "Programming, travelling...")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "blog-body"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: "10",
        lg: "8",
        className: "mx-auto"
      }, this.renderBlogs(blogs), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        className: "jsx-3280519500" + " " + "btn btn-primary float-right"
      }, "Older Posts \u2192")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-3280519500" + " " + "list-inline text-center"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-3280519500" + " " + "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.facebook.com/groups/217273012433804/?jazoest=26510012195869511271971084598756511378108122691091131211141201017010910474116557610010645897511574116115668565119119586510012177701165586491061151219048557183120488290847377451207611983109114112118697610912011183109109521091159581",
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3280519500" + " " + "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fab fa-facebook-f fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-3280519500" + " " + "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/ChrisKCarr",
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3280519500" + " " + "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fab fa-github fa-stack-1x fa-inverse"
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3280519500" + " " + "copyright text-muted"
      }, "Copyright \xA9 Chris Carr 2019")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3280519500",
        css: "@import url(\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\");\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvc2VpL3Byb2plY3RzL0NocmlzS0NhcnJfUG9ydGZvbGlvL2Zyb250ZW5kL3BvcnRmb2xpby9wYWdlcy9ibG9ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSFcsQUFFbUYiLCJmaWxlIjoiL1VzZXJzL2tyenlzenRvZi9zZWkvcHJvamVjdHMvQ2hyaXNLQ2Fycl9Qb3J0Zm9saW8vZnJvbnRlbmQvcG9ydGZvbGlvL3BhZ2VzL2Jsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0XCI7XG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFzZVBhZ2VcIjtcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5pbXBvcnQgeyBnZXRCbG9ncyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBzaG9ydGVuVGV4dCB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jbGFzcyBCbG9ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGxldCBibG9ncyA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGJsb2dzID0gYXdhaXQgZ2V0QmxvZ3MocmVxKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBibG9ncyB9O1xuICB9XG5cbiAgcmVuZGVyQmxvZ3MgPSBibG9ncyA9PlxuICAgIGJsb2dzLm1hcCgoYmxvZywgaW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3XCI+XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57YmxvZy50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBvc3Qtc3VidGl0bGVcIj57c2hvcnRlblRleHQoYmxvZy5zdWJUaXRsZSl9PC9oMz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1tZXRhXCI+XG4gICAgICAgICAgUG9zdGVkIGJ5XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj4ge2Jsb2cuYXV0aG9yfSA8L2E+XG4gICAgICAgICAge21vbWVudChwYXJzZUludChibG9nLmNyZWF0ZWRBdCwgMTApKS5mb3JtYXQoXCJMTFwiKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmxvZ3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VMYXlvdXRcbiAgICAgICAgey4uLnRoaXMucHJvcHMuYXV0aH1cbiAgICAgICAgaGVhZGVyVHlwZT17XCJsYW5kaW5nXCJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2ctbGlzdGluZy1wYWdlXCJcbiAgICAgICAgdGl0bGU9XCJGaWxpcCBKZXJnYSAtIE5ld2VzdCBCbG9ncyB0byBSZWFkXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvc3RhdGljL2ltYWdlcy9ob21lLWJnLmpwZycpXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT5GcmVzaCBCbG9nczwvaDE+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+UHJvZ3JhbW1pbmcsIHRyYXZlbGxpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QmFzZVBhZ2UgY2xhc3NOYW1lPVwiYmxvZy1ib2R5XCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgbWQ9XCIxMFwiIGxnPVwiOFwiIGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQmxvZ3MoYmxvZ3MpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIE9sZGVyIFBvc3RzICZyYXJyO1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvMjE3MjczMDEyNDMzODA0Lz9qYXpvZXN0PTI2NTEwMDEyMTk1ODY5NTExMjcxOTcxMDg0NTk4NzU2NTExMzc4MTA4MTIyNjkxMDkxMTMxMjExMTQxMjAxMDE3MDEwOTEwNDc0MTE2NTU3NjEwMDEwNjQ1ODk3NTExNTc0MTE2MTE1NjY4NTY1MTE5MTE5NTg2NTEwMDEyMTc3NzAxMTY1NTg2NDkxMDYxMTUxMjE5MDQ4NTU3MTgzMTIwNDg4MjkwODQ3Mzc3NDUxMjA3NjExOTgzMTA5MTE0MTEyMTE4Njk3NjEwOTEyMDExMTgzMTA5MTA5NTIxMDkxMTU5NTgxXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZiBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NocmlzS0NhcnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUgZmEtc3RhY2stMnhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBDaHJpcyBDYXJyIDIwMTlcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9CYXNlUGFnZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNS4wL2Nzcy9hbGwuY3NzXCIpO1xuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0Jhc2VMYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ncztcbiJdfQ== */\n/*@ sourceURL=/Users/krzysztof/sei/projects/ChrisKCarr_Portfolio/frontend/portfolio/pages/blogs.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, blogs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                blogs = [];
                _context.prev = 2;
                _context.next = 5;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["getBlogs"])(req);

              case 5:
                blogs = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 11:
                return _context.abrupt("return", {
                  blogs: blogs
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Blogs;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blogs);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blogs")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blogs.js.62e2b8a46e03870a249e.hot-update.js.map