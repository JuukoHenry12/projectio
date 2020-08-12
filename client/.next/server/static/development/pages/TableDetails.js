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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\juuko\\Desktop\\project\\client\\components\\Layout.tsx";

 //import Link from 'next/link'




var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Financial info' : _ref$title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }))), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/header-navigation */ "baseui/header-navigation");
/* harmony import */ var baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/link */ "baseui/link");
/* harmony import */ var baseui_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\juuko\\Desktop\\project\\client\\components\\Navbar.tsx";

 //import Link from 'next/link'




var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["HeaderNavigation"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationList"], {
    $align: baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["ALIGN"].left,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Account For Your Business")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationList"], {
    $align: baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["ALIGN"].center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationList"], {
    $align: baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["ALIGN"].right,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_link__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_link__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    href: "/TableDetails",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Table Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_header_navigation__WEBPACK_IMPORTED_MODULE_1__["StyledNavigationItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_link__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Logout"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/TableDetails.tsx":
/*!********************************!*\
  !*** ./pages/TableDetails.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/table */ "baseui/table");
/* harmony import */ var baseui_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/form-control */ "baseui/form-control");
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_form_control__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/select */ "baseui/select");
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(baseui_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseui/flex-grid */ "baseui/flex-grid");
/* harmony import */ var baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\juuko\\Desktop\\project\\client\\pages\\TableDetails.tsx";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 //import { useQuery,gql } from '@apollo/client';

var DATA = [];
var COLUMNS = ['Details', 'Item', 'Qauntity', 'amount'];

var TableDetails = function TableDetails() {
  var _useStyletron = Object(baseui__WEBPACK_IMPORTED_MODULE_5__["useStyletron"])(),
      _useStyletron2 = _slicedToArray(_useStyletron, 1),
      css = _useStyletron2[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      paymentDetails = _React$useState2[0],
      setPaymentDetails = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      Purchased = _React$useState4[0],
      setPurchased = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      Amount = _React$useState6[0],
      setAmount = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      Quantity = _React$useState8[0],
      setQuantiy = _React$useState8[1]; //const [Data, setData] = React.useState([]);


  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    setPaymentDetails([]);
    setPurchased([]);
    setAmount(0);
    setQuantiy(0);
  };

  var AddData = function AddData() {
    var pay = paymentDetails.map(function (item) {
      return item.id;
    });
    var pay1 = Purchased.map(function (item) {
      return item.id;
    });
    var merge = [].concat(_toConsumableArray(pay), _toConsumableArray(pay1), [Quantity, Amount]);
    DATA.push(merge);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    onSubmit: submitHandler,
    className: css({
      display: "flex",
      marginTop: '30px'
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    label: "Details",
    overrides: {
      Label: {
        style: {
          color: 'red',
          fontSize: '25px',
          fontFamily: 'aerial',
          marginBottom: '20px'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_select__WEBPACK_IMPORTED_MODULE_7__["Select"], {
    id: "select-id",
    value: paymentDetails,
    onChange: function onChange(_ref) {
      var value = _ref.value;
      return setPaymentDetails(value);
    },
    options: [{
      id: 'cash'
    }, {
      id: 'Credit Card'
    }],
    labelKey: "id",
    valueKey: "id",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    label: "Item",
    overrides: {
      Label: {
        style: {
          color: 'red',
          fontSize: '30px',
          fontFamily: 'aerial',
          display: 'flex',
          marginLeft: '20px'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_select__WEBPACK_IMPORTED_MODULE_7__["Select"], {
    id: "select-id",
    options: [{
      id: 'medicine'
    }, {
      id: 'sugar'
    }, {
      id: 'flavour'
    }, {
      id: 'Drugs'
    }],
    labelKey: "id",
    value: Purchased,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return setPurchased(value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 10
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    label: "Qualtity",
    overrides: {
      Label: {
        style: {
          fontSize: '25px',
          fontFamily: 'aerial',
          display: 'flex',
          marginLeft: '20px'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    min: 0,
    max: 100,
    type: "number",
    value: Quantity,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;
      return setQuantiy(value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    label: "Amount",
    overrides: {
      Label: {
        style: {
          color: 'red',
          fontSize: '25px',
          fontFamily: 'aerial',
          display: 'flex',
          marginLeft: '20px'
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    ref: inputRef,
    type: "number",
    value: Amount,
    onChange: function onChange(_ref4) {
      var value = _ref4.value;
      return setAmount(value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    shape: baseui_button__WEBPACK_IMPORTED_MODULE_6__["SHAPE"].pill,
    onClick: AddData,
    overrides: {
      BaseButton: {
        style: {
          marginLeft: '20px',
          height: '50px',
          width: "250px"
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 8
    }
  }, "submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGrid"], {
    flexGridColumnCount: 2,
    flexGridColumnGap: "scale800",
    flexGridRowGap: "scale800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGridItem"], {
    overrides: {
      Block: {
        style: function style(_ref5) {
          var $theme = _ref5.$theme;
          return {
            width: "calc((200% - ".concat($theme.sizing.scale800, ") / 3)")
          };
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_table__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: COLUMNS,
    data: DATA,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](baseui_flex_grid__WEBPACK_IMPORTED_MODULE_8__["FlexGridItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableDetails);

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/TableDetails.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/TableDetails.tsx */"./pages/TableDetails.tsx");


/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "baseui/button":
/*!********************************!*\
  !*** external "baseui/button" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/button");

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

/***/ "baseui/header-navigation":
/*!*******************************************!*\
  !*** external "baseui/header-navigation" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/header-navigation");

/***/ }),

/***/ "baseui/input":
/*!*******************************!*\
  !*** external "baseui/input" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/input");

/***/ }),

/***/ "baseui/link":
/*!******************************!*\
  !*** external "baseui/link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/link");

/***/ }),

/***/ "baseui/select":
/*!********************************!*\
  !*** external "baseui/select" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/select");

/***/ }),

/***/ "baseui/table":
/*!*******************************!*\
  !*** external "baseui/table" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/table");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=TableDetails.js.map