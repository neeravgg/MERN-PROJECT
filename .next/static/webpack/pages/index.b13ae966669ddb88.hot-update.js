"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\n/* harmony import */ var _assests_Dashboard_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/Dashboard/Card */ \"./src/assests/Dashboard/Card.js\");\n/* harmony import */ var _assests_Dashboard_Middle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/Dashboard/Middle */ \"./src/assests/Dashboard/Middle.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DashBoard(props) {\n    var greet = function greet() {\n        var data = [\n            [\n                22,\n                \"Studying late,\"\n            ],\n            [\n                18,\n                \"Good evening,\"\n            ],\n            [\n                12,\n                \"Good afternoon,\"\n            ],\n            [\n                5,\n                \"Good morning,\"\n            ],\n            [\n                0,\n                \"Whoa, early bird,\"\n            ], \n        ], hr = new Date().getHours();\n        for(var i = 0; i < data.length; i++){\n            if (hr >= data[i][0]) {\n                return data[i][1];\n            }\n        }\n    };\n    var srink = function srink() {\n        return Open ? \"pl-[17rem] px-5\" : \"pl-[7rem] px-5\";\n    };\n    _s();\n    var Open = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).Open;\n    var isLarge = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 1440px)\");\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 768px )\");\n    var isPhone = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 375px)\");\n    var isSmall = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 374px)\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-10\", \" px-2 mt-16 pt-5 min-h-screen min-w-screen  flex  justify-center   \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col  min-h-screen w-screen \".concat(isTablet && \"gap-10 \", \" \").concat(isLaptop && \"gap-14\", \" gap-12  \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" pl-3 flex flex-row flex-none rounded-3xl bg-skin-base shadow-md dark:bg-gradient-to-r from-[#323232] to-[#292929] py-3 w-full justify-center align-middle gap-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"images/profile.jpeg\",\n                            alt: \"\",\n                            className: \" w-20 h-20 shadow-sm border border-skin-base dark:theme-dark justify-center align-middle rounded-full object-cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex flex-col justify-center gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-baseline flex-wrap  gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat(isLaptop && \"text-3xl\", \"  text-2xl text-skin-muted dark:theme-dark font-semibold  \"),\n                                            children: greet()\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \" text-3xl text-skin-base dark:theme-dark font-bold capitalize  \",\n                                            children: \"prabhjot singh\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(isTablet && \"text-lg block\", \" text-md text-skin-muted dark:theme-dark italic hidden md:block\"),\n                                    children: \"Here is all your progress and more\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-1 md:px-24 lg:px-6 xl:px-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assests_Dashboard_Middle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assests_Dashboard_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\dashboard.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n};\n_s(DashBoard, \"54HS7klebA+821ACkTjyDiGfrPg=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = DashBoard;\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLElBQUksZUFBZSxFQUM1QixpRUFBK0QsQ0FBQzs4Q0FDbEUsb0NBRUQ7Ozs7O3dDQUFPOzs7Ozs7Z0NBQ0g7Ozs7Ozt3QkFDRjs4QkFDTiw4REFBQ0csS0FBRztvQkFBQ0MsU0FBUyxFQUFHLGlDQUErQjs4QkFDOUMsNEVBQUNuQixpRUFBTTs7Ozs0QkFBRzs7Ozs7d0JBQ047OEJBQ04sOERBQUNrQixLQUFHOzhCQUNGLDRFQUFDbkIsK0RBQUk7Ozs7NEJBQUc7Ozs7O3dCQUNKOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBakZ1QkUsU0FBUzs7UUFFZkgsb0VBQWE7UUFDWkEsb0VBQWE7UUFDYkEsb0VBQWE7UUFDZEEsb0VBQWE7UUFDYkEsb0VBQWE7OztBQU5QRyxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC5qcz81NGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXJDb250ZXh0IGZyb20gXCIuLi9hc3Nlc3RzL2NvbnRleHQvU2lkZWJhckNvbnRleHRcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIi4uL2Fzc2VzdHMvaG9va3MvdXNlTWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vYXNzZXN0cy9EYXNoYm9hcmQvQ2FyZFwiO1xyXG5pbXBvcnQgTWlkZGxlIGZyb20gXCIuLi9hc3Nlc3RzL0Rhc2hib2FyZC9NaWRkbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZChwcm9wcykge1xyXG4gIGNvbnN0IHsgT3BlbiB9ID0gUmVhY3QudXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XHJcbiAgY29uc3QgaXNMYXJnZSA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxNDQwcHgpXCIpO1xyXG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogNzY4cHggKVwiKTtcclxuICBjb25zdCBpc1Bob25lID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDM3NXB4KVwiKTtcclxuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDM3NHB4KVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gZ3JlZXQoKSB7XHJcbiAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICBbMjIsIFwiU3R1ZHlpbmcgbGF0ZSxcIl0sXHJcbiAgICAgICAgWzE4LCBcIkdvb2QgZXZlbmluZyxcIl0sXHJcbiAgICAgICAgWzEyLCBcIkdvb2QgYWZ0ZXJub29uLFwiXSxcclxuICAgICAgICBbNSwgXCJHb29kIG1vcm5pbmcsXCJdLFxyXG4gICAgICAgIFswLCBcIldob2EsIGVhcmx5IGJpcmQsXCJdLFxyXG4gICAgICBdLFxyXG4gICAgICBociA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaHIgPj0gZGF0YVtpXVswXSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhW2ldWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNyaW5rKCkge1xyXG4gICAgcmV0dXJuIE9wZW4gPyBcInBsLVsxN3JlbV0gcHgtNVwiIDogXCJwbC1bN3JlbV0gcHgtNVwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgICR7aXNMYXB0b3AgJiYgc3JpbmsoKX0gJHtcclxuICAgICAgICBpc1RhYmxldCAmJiBcInB4LTEwXCJcclxuICAgICAgfSBweC0yIG10LTE2IHB0LTUgbWluLWgtc2NyZWVuIG1pbi13LXNjcmVlbiAgZmxleCAganVzdGlmeS1jZW50ZXIgICBgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAgbWluLWgtc2NyZWVuIHctc2NyZWVuICR7XHJcbiAgICAgICAgICBpc1RhYmxldCAmJiBcImdhcC0xMCBcIlxyXG4gICAgICAgIH0gJHtpc0xhcHRvcCAmJiBcImdhcC0xNFwifSBnYXAtMTIgIGB9XHJcbiAgICAgID5cclxuICAgICAgICB7LyogcHJvZmlsZSBiYWRnZSAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2AgcGwtMyBmbGV4IGZsZXgtcm93IGZsZXgtbm9uZSByb3VuZGVkLTN4bCBiZy1za2luLWJhc2Ugc2hhZG93LW1kIGRhcms6YmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMzIzMjMyXSB0by1bIzI5MjkyOV0gcHktMyB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGdhcC00IGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9J2ltYWdlcy9wcm9maWxlLmpwZWcnXHJcbiAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Agdy0yMCBoLTIwIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLXNraW4tYmFzZSBkYXJrOnRoZW1lLWRhcmsganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBHcmVldCB0ZXh0Ki99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC0xYH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgIGZsZXggaXRlbXMtYmFzZWxpbmUgZmxleC13cmFwICBnYXAtMmB9PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBpc0xhcHRvcCAmJiBcInRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgIH0gIHRleHQtMnhsIHRleHQtc2tpbi1tdXRlZCBkYXJrOnRoZW1lLWRhcmsgZm9udC1zZW1pYm9sZCAgYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Z3JlZXQoKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCB0ZXh0LTN4bCB0ZXh0LXNraW4tYmFzZSBkYXJrOnRoZW1lLWRhcmsgZm9udC1ib2xkIGNhcGl0YWxpemUgIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgcHJhYmhqb3Qgc2luZ2hcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBpc1RhYmxldCAmJiBcInRleHQtbGcgYmxvY2tcIlxyXG4gICAgICAgICAgICAgIH0gdGV4dC1tZCB0ZXh0LXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIGl0YWxpYyBoaWRkZW4gbWQ6YmxvY2tgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSGVyZSBpcyBhbGwgeW91ciBwcm9ncmVzcyBhbmQgbW9yZVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCBweC0xIG1kOnB4LTI0IGxnOnB4LTYgeGw6cHgtMjBgfT5cclxuICAgICAgICAgIDxNaWRkbGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENhcmQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGViYXJDb250ZXh0IiwidXNlTWVkaWFRdWVyeSIsIkNhcmQiLCJNaWRkbGUiLCJEYXNoQm9hcmQiLCJwcm9wcyIsImdyZWV0IiwiZGF0YSIsImhyIiwiRGF0ZSIsImdldEhvdXJzIiwiaSIsImxlbmd0aCIsInNyaW5rIiwiT3BlbiIsInVzZUNvbnRleHQiLCJpc0xhcmdlIiwiaXNMYXB0b3AiLCJpc1RhYmxldCIsImlzUGhvbmUiLCJpc1NtYWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard.js\n");

/***/ })

});