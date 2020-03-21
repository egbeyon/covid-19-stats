webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_utilsStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utilsStats */ "./utils/utilsStats.js");

var _jsxFileName = "C:\\Users\\Ebenezeri\\2020\\node\\second\\components\\Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n    \n    background: #f2f2f2;\n    font-size: 2rem;\n    padding: 2rem;\n    border-radius: 2rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
function Stats(_ref) {
  var url = _ref.url;

  // const stats  = useStats(url);
  var _useStats = Object(_utils_utilsStats__WEBPACK_IMPORTED_MODULE_3__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, "Error...");
  return __jsx(StatGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(StatBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Confirmed: "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, stats.confirmed)), __jsx(StatBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Deaths: "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, stats.deaths.value)), __jsx(StatBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Recovered: "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, stats.recovered.value)));
}

/***/ })

})
//# sourceMappingURL=index.js.2f0371a8a496fddaf201.hot-update.js.map