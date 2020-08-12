module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/form-control */ "baseui/form-control");
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_form_control__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/block */ "baseui/block");
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/card */ "baseui/card");
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(baseui_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseui/flex-grid */ "baseui/flex-grid");
/* harmony import */ var baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\juuko\\Desktop\\project\\client\\pages\\index.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 //import styled from 'styled-components'



// Apollo client 
var IndexPage = function IndexPage() {
  var _useStyletron = Object(baseui__WEBPACK_IMPORTED_MODULE_4__["useStyletron"])(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      userName = _React$useState2[0],
      setUserName = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      password = _React$useState4[0],
      setpassword = _React$useState4[1];

  var OnhandleSubmit = function OnhandleSubmit(event) {
    event.preventDefault();
    setUserName("");
    setpassword("");
  };

  var login = function login() {
    if (userName == "henry" && password == "password") {} else {
      console.log("invalid users and password");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: css({
      width: '800px',
      marginTop: '80px',
      backgroundColor: 'ceral',
      marginLeft: '150px'
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_card__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    overrides: {
      Root: {
        style: {
          width: '1000px',
          background: '#212121'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_card__WEBPACK_IMPORTED_MODULE_7__["StyledBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_block__WEBPACK_IMPORTED_MODULE_5__["Block"], {
    as: "h2",
    overrides: {
      Block: {
        style: {
          color: '#fff',
          fontSize: '40px',
          fontFamily: 'aerial',
          alignText: 'center',
          marginTop: '20px',
          marginLeft: '100px'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Account Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGrid"], {
    flexGridColumnCount: 2,
    flexGridColumnGap: "scale900",
    flexGridRowGap: "scale900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGridItem"], {
    overrides: {
      Block: {
        style: function style(_ref) {
          var $theme = _ref.$theme;
          return {
            width: "calc((200% - ".concat($theme.sizing.scale800, ") / 3)")
          };
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: OnhandleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    label: "User Name",
    caption: "user name",
    overrides: {
      Label: {
        style: {
          color: 'white',
          fontSize: '30px',
          fontFamily: 'aerial'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    inputRef: inputRef,
    value: userName,
    onChange: function onChange(event) {
      return setpassword(event.currentTarget.value);
    },
    overrides: {
      Root: {
        style: {
          width: '50%',
          marginTop: theme.sizing.scale400,
          marginRight: theme.sizing.scale400
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    label: "password",
    caption: "password",
    overrides: {
      Label: {
        style: {
          color: 'white',
          fontSize: '30px',
          fontFamily: 'aerial'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    inputRef: inputRef,
    value: password,
    required: true,
    type: "password",
    onChange: function onChange(event) {
      return setpassword(event.currentTarget.value);
    },
    overrides: {
      Root: {
        style: {
          color: 'white',
          width: '50%',
          marginTop: theme.sizing.scale400,
          marginRight: theme.sizing.scale400
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/TableDetails",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: baseui_button__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, "Login")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGridItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Enjoy using the software")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "baseui/block":
/*!*******************************!*\
  !*** external "baseui/block" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/block");

/***/ }),

/***/ "baseui/button":
/*!********************************!*\
  !*** external "baseui/button" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/button");

/***/ }),

/***/ "baseui/card":
/*!******************************!*\
  !*** external "baseui/card" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/card");

/***/ }),

/***/ "baseui/flex-grid":
/*!***********************************!*\
  !*** external "baseui/flex-grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/flex-grid");

/***/ }),

/***/ "baseui/form-control":
/*!**************************************!*\
  !*** external "baseui/form-control" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/form-control");

/***/ }),

/***/ "baseui/input":
/*!*******************************!*\
  !*** external "baseui/input" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/input");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map