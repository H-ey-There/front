module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/register.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Register; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/min/Desktop/Heythere/heythere-client/src/pages/register.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Register() {\n  return __jsx(\"div\", {\n    className: \"main-wrap\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"login-main\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, \"Join Now!\"), __jsx(\"input\", {\n    type: \"email\",\n    placeholder: \"email\",\n    className: \"box1 border1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"nickname\",\n    className: \"box1 border2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"password\",\n    className: \"box1 border2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    className: \"send\",\n    value: \"Go\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: \"message\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, \"Back to Login \", __jsx(\"a\", {\n    href: \"login.html\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 34\n    }\n  }, \"click here\"))), __jsx(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, `\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    text-decoration: none;\n  outline:none;\n}\nbody,a{\n    font-family: calibri;\n    font-size: 14px;\n    font-weight: normal;\n    color: #3B424D;\n    \n}\n.main-wrap{\n    background: #FF5335;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n.login-main{\n    width: 300px;\n    height: 200px;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background:#fcb1ac;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n.login-main p {\n    text-indent:10px;\n}\n\n.box1{\n    background: lighten(#FF5335, 30%);\n    height: 40px;\n    text-indent: 10px;\n    width: 90%;\n    margin-bottom: 2px;\n    color: #FF5335;\n    font-size: 15px;\n    font-weight: 400;\n}\n.border1{\n    border-radius: 5px 5px 0 0;\n}\n.border2{\n    border-radius: 0px 0 5px 5px;\n}\n\n.send{\n\n    width:  60px;\n    height: 60px;\n    border-radius: 50%;\n    position: absolute;\n    right: 9px;\n    top: 20px;\n    border: 5px solid lighten(#FF5335, 10%);\n    background: #FF5335;\n    font-size: 18px;\n    color: #fff;\n    font-weight: normal;\n    text-shadow: 1px 1px 2px #000;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    \n}\n\n.send:hover {\n    animation: spin 0.3s ease-in-out;\n    -webkit-animation: spin 0.3s ease-in-out;\n    -moz-animation: spin 0.3s ease-in-out;\n    -ms-animation: spin 0.3s ease-in-out;\n    -o-animation: spin 0.3s ease-in-out;\n    cursor: pointer;\n}\n\n\n@keyframes spin{\n    from{\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(360deg);\n    }\n}\n@-webkit-keyframes spin{\n    from{\n        -webkit-transform: rotate(0deg);\n    }\n    to{\n        -webkit-transform: rotate(360deg);\n    }\n}\n@-moz-keyframes spin{\n    from{\n        -moz-transform: rotate(0deg);\n    }\n    to{\n        -moz-transform: rotate(360deg);\n    }\n}\n@-o-keyframes spin{\n    from{\n        -o-transform: rotate(0deg);\n    }\n    to{\n        -o-transform: rotate(360deg);\n    }\n}\n\n\n            `));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4P2E2N2YiXSwibmFtZXMiOlsiUmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFULEdBQXFCO0FBQ2hDLFNBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsZUFBVyxFQUFDLE9BQWhDO0FBQXdDLGFBQVMsRUFBQyxjQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQyxVQUEvQjtBQUEwQyxhQUFTLEVBQUMsY0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixlQUFXLEVBQUMsVUFBbkM7QUFBOEMsYUFBUyxFQUFDLGNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQXNDLFNBQUssRUFBQyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWlCO0FBQUcsUUFBSSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBakIsQ0FQSixDQURKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUFULENBVkosQ0FESjtBQXFJSCIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWdpc3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbWFpblwiPlxuICAgICAgICAgICAgICAgIDxoMT5Kb2luIE5vdyE8L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYm94MSBib3JkZXIxXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmlja25hbWVcIiBjbGFzc05hbWU9XCJib3gxIGJvcmRlcjJcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJib3gxIGJvcmRlcjJcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZW5kXCIgdmFsdWU9XCJHb1wiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5CYWNrIHRvIExvZ2luIDxhIGhyZWY9XCJsb2dpbi5odG1sXCI+Y2xpY2sgaGVyZTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZT57YFxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOm5vbmU7XG59XG5ib2R5LGF7XG4gICAgZm9udC1mYW1pbHk6IGNhbGlicmk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICMzQjQyNEQ7XG4gICAgXG59XG4ubWFpbi13cmFwe1xuICAgIGJhY2tncm91bmQ6ICNGRjUzMzU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5sb2dpbi1tYWlue1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6I2ZjYjFhYztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dpbi1tYWluIHAge1xuICAgIHRleHQtaW5kZW50OjEwcHg7XG59XG5cbi5ib3gxe1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oI0ZGNTMzNSwgMzAlKTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgY29sb3I6ICNGRjUzMzU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYm9yZGVyMXtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cbi5ib3JkZXIye1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwIDVweCA1cHg7XG59XG5cbi5zZW5ke1xuXG4gICAgd2lkdGg6ICA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0ZW4oI0ZGNTMzNSwgMTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjRkY1MzM1O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFxufVxuXG4uc2VuZDpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbW96LWFuaW1hdGlvbjogc3BpbiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy1hbmltYXRpb246IHNwaW4gMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby1hbmltYXRpb246IHNwaW4gMC4zcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuQGtleWZyYW1lcyBzcGlue1xuICAgIGZyb217XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbntcbiAgICBmcm9te1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzcGlue1xuICAgIGZyb217XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRve1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuQC1vLWtleWZyYW1lcyBzcGlue1xuICAgIGZyb217XG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });