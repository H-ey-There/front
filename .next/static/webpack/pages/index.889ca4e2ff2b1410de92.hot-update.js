webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/min/Desktop/Heythere/heythere-client/src/components/navbar.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Navbar() {\n  return __jsx(\"header\", {\n    className: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"logo.png\",\n    alt: \"YouTube Logo\",\n    className: \"youtube-logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  })), __jsx(\"form\", {\n    className: \"search-bar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: \"search-input\",\n    type: \"search\",\n    placeholder: \"Search\",\n    \"aria-label\": \"Search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"search-btn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"magnify.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"menu-icons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"/upload\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"video-plus.svg\",\n    alt: \"Upload Video\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  })), __jsx(\"a\", {\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"apps.svg\",\n    alt: \"Apps\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  })), __jsx(\"a\", {\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"bell.svg\",\n    alt: \"Notifications\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  })), __jsx(\"a\", {\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: \"menu-channel-icon\",\n    src: \"http:///unsplash.it/36/36?gravity=center\",\n    alt: \"Your Channel\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }))), __jsx(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"\\n  .header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 1rem;\\n  }\\n   .youtube-logo {\\n    height: 20px;\\n  }\\n  \\n  .search-bar {\\n    display: flex;\\n    flex-grow: 1;\\n    margin: 0 2rem 0 4rem;\\n  }\\n  \\n  .search-input {\\n    width: 100%;\\n    font-size: inherit;\\n    padding: .4em;\\n    border: 1px solid #777;\\n    border-top-right-radius: 0;\\n    border-bottom-right-radius: 0;\\n  }\\n  \\n  .search-btn {\\n    display: flex;\\n    align-items: center;\\n    padding: 0 1.25rem;\\n    border: 1px solid #777;\\n    background-color: #F8F8F8;\\n    border-left: none;\\n    border-top-left-radius: 0;\\n    border-bottom-left-radius: 0;\\n    cursor: pointer;\\n  }\\n  \\n  .search-btn:hover {\\n    background-color: #F0F0F0;\\n  }\\n  \\n  .menu-icons {\\n    display: grid;\\n    grid-template-columns: repeat(4, auto);\\n    align-items: center;\\n    gap: 1.5rem;\\n  }\\n  \\n  .menu-channel-icon {\\n    border-radius: 50%;\\n    width: 36px;\\n    height: 36px;\\n    background-color: #AAA;\\n  }\\n  \\n  .categories {\\n    padding: 1rem 2rem;\\n    border-top: 1px solid #999;\\n    border-bottom: 1px solid #999;\\n  }\\n  \\n  .category-section {\\n    display: flex;\\n    overflow: hidden;\\n  }\\n  \\n  .category {\\n    margin-right: 1rem;\\n    word-wrap: none;\\n    white-space: nowrap;\\n    border: 1px solid #CCC;\\n    border-radius: 900px;\\n    background-color: #E7E7E7;\\n    padding: .5rem 1rem;\\n    font-size: inherit;\\n    cursor: pointer;\\n    transition: background-color 150ms;\\n  }\\n  \\n  .category:hover {\\n    background-color: #DDD;\\n  }\\n  \\n  .category.active {\\n    background-color: #606060;\\n    color: white;\\n    border-color: #EEE;\\n  }\\n  \\n  .category:last-child {\\n    margin-right: 0;\\n  }\\n  \\n            \"));\n}\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnRzeD8zOWQ4Il0sIm5hbWVzIjpbIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQzdCLFNBQ0k7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLFVBQVQ7QUFBb0IsT0FBRyxFQUFDLGNBQXhCO0FBQXVDLGFBQVMsRUFBQyxjQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQyxjQUFqQjtBQUFnQyxRQUFJLEVBQUMsUUFBckM7QUFBOEMsZUFBVyxFQUFDLFFBQTFEO0FBQW1FLGtCQUFXLFFBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLENBSkosRUFVSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxnQkFBVDtBQUEwQixPQUFHLEVBQUMsY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxVQUFUO0FBQW9CLE9BQUcsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixFQU9JO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLFVBQVQ7QUFBb0IsT0FBRyxFQUFDLGVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsT0FBRyxFQUFDLDBDQUF2QztBQUNLLE9BQUcsRUFBQyxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLENBVkosRUF5Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3dkRBekJKLENBREo7QUEySEg7S0E1SHVCQSxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwibG9nby5wbmdcIiBhbHQ9XCJZb3VUdWJlIExvZ29cIiBjbGFzc05hbWU9XCJ5b3V0dWJlLWxvZ29cIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIm1hZ25pZnkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi91cGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ2aWRlby1wbHVzLnN2Z1wiIGFsdD1cIlVwbG9hZCBWaWRlb1wiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhcHBzLnN2Z1wiIGFsdD1cIkFwcHNcIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYmVsbC5zdmdcIiBhbHQ9XCJOb3RpZmljYXRpb25zXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnUtY2hhbm5lbC1pY29uXCIgc3JjPVwiaHR0cDovLy91bnNwbGFzaC5pdC8zNi8zNj9ncmF2aXR5PWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiWW91ciBDaGFubmVsXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlPntgXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAgLnlvdXR1YmUtbG9nbyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuc2VhcmNoLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luOiAwIDJyZW0gMCA0cmVtO1xuICB9XG4gIFxuICAuc2VhcmNoLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogLjRlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAuc2VhcmNoLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnNlYXJjaC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gIH1cbiAgXG4gIC5tZW51LWljb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5tZW51LWNoYW5uZWwtaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xuICB9XG4gIFxuICAuY2F0ZWdvcmllcyB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY2F0ZWdvcnkge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB3b3JkLXdyYXA6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RTc7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXM7XG4gIH1cbiAgXG4gIC5jYXRlZ29yeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjRUVFO1xuICB9XG4gIFxuICAuY2F0ZWdvcnk6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navbar.tsx\n");

/***/ })

})