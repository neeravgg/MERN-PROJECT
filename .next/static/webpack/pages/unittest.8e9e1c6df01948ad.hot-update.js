"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/unittest",{

/***/ "./src/components/indicatorCards.js":
/*!******************************************!*\
  !*** ./src/components/indicatorCards.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndicatorCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/Dashboard/indicator */ \"./src/assests/Dashboard/indicator.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction IndicatorCards(props) {\n    var _this = this;\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var ref = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Unit1 = ref.Unit1, setUnit1 = ref.setUnit1, Unit2 = ref.Unit2, setUnit2 = ref.setUnit2, Unit3 = ref.Unit3, setUnit3 = ref.setUnit3, FinalUnit = ref.FinalUnit;\n    var stateMenu = [\n        {\n            states: Unit1,\n            titles: \"Unit 1\"\n        },\n        {\n            states: Unit2,\n            titles: \"Unit 2\"\n        },\n        {\n            states: Unit3,\n            titles: \"Unit 3\"\n        },\n        {\n            states: FinalUnit,\n            titles: \"Final test\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: stateMenu.filter(function(menu) {\n            return menu.index < props.value;\n        }).map(function(menu) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex-1 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md rounded-3xl gap-7 \".concat(isLaptop && \"hover:scale-105\", \" \").concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_2__[\"default\"][menu.states].grad),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-skin-black jus text-3xl font-bold py-3 text-center\",\n                            children: menu.titles\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onclick: \"/quiz\",\n                            className: \"\".concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_2__[\"default\"][menu.states].theme, \" bg-skin-btn-accent hover:bg-skin-btn-hover  px-2 py-3 rounded-3xl shadow-md \"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row gap-2 justify-center \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        class: \"h-9 w-9 text-skin-accent mt-1\",\n                                        viewBox: \"0 0 20 20\",\n                                        fill: \"currentColor\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"\".concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_2__[\"default\"][menu.states].svg),\n                                            \"clip-rule\": \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-skin-base text-xl font-semibold py-2\",\n                                        children: _assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_2__[\"default\"][menu.states].label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(IndicatorCards, \"KicSW5rgtL0ACr4PQgyr3+Idv0U=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = IndicatorCards;\nvar _c;\n$RefreshReg$(_c, \"IndicatorCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYzs7UUFFbkJELG9FQUFhOzs7QUFGUkMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbmRpY2F0b3JDYXJkcy5qcz8zNWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGluZGljYXRvciBmcm9tIFwiLi4vYXNzZXN0cy9EYXNoYm9hcmQvaW5kaWNhdG9yXCI7XHJcbmltcG9ydCBUZXN0Q29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1Rlc3RDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCIuLi9hc3Nlc3RzL2hvb2tzL3VzZU1lZGlhUXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGljYXRvckNhcmRzKHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcbiAgY29uc3QgeyBVbml0MSwgc2V0VW5pdDEsIFVuaXQyLCBzZXRVbml0MiwgVW5pdDMsIHNldFVuaXQzLCBGaW5hbFVuaXQgfSA9XHJcbiAgICBSZWFjdC51c2VDb250ZXh0KFRlc3RDb250ZXh0KTtcclxuICBjb25zdCBzdGF0ZU1lbnUgPSBbXHJcbiAgICB7IHN0YXRlczogVW5pdDEsIHRpdGxlczogXCJVbml0IDFcIiB9LFxyXG4gICAgeyBzdGF0ZXM6IFVuaXQyLCB0aXRsZXM6IFwiVW5pdCAyXCIgfSxcclxuICAgIHsgc3RhdGVzOiBVbml0MywgdGl0bGVzOiBcIlVuaXQgM1wiIH0sXHJcbiAgICB7IHN0YXRlczogRmluYWxVbml0ICwgdGl0bGVzOiBcIkZpbmFsIHRlc3RcIiB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzdGF0ZU1lbnUuZmlsdGVyKChtZW51KSA9PiBtZW51LmluZGV4IDwgcHJvcHMudmFsdWUpLm1hcCgobWVudSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleC0xICAnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHRyYW5zZm9ybSAgaC00OCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBweC0zIHB5LTQgc2hhZG93LW1kIHJvdW5kZWQtM3hsIGdhcC03ICR7XHJcbiAgICAgICAgICAgICAgaXNMYXB0b3AgJiYgXCJob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICB9ICR7aW5kaWNhdG9yW21lbnUuc3RhdGVzXS5ncmFkfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIHRleHQtc2tpbi1ibGFjayBqdXMgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTMgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIHttZW51LnRpdGxlc31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgey8qIHN0YXRlICovfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uY2xpY2s9Jy9xdWl6J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JbbWVudS5zdGF0ZXNdLnRoZW1lXHJcbiAgICAgICAgICAgICAgfSBiZy1za2luLWJ0bi1hY2NlbnQgaG92ZXI6Ymctc2tpbi1idG4taG92ZXIgIHB4LTIgcHktMyByb3VuZGVkLTN4bCBzaGFkb3ctbWQgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0yIGp1c3RpZnktY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2gtOSB3LTkgdGV4dC1za2luLWFjY2VudCAgIG10LTEnXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcclxuICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcclxuICAgICAgICAgICAgICAgICAgICBkPXtgJHtpbmRpY2F0b3JbbWVudS5zdGF0ZXNdLnN2Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT0nZXZlbm9kZCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNraW4tYmFzZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgcHktMic+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRpY2F0b3JbbWVudS5zdGF0ZXNdLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5kaWNhdG9yIiwiVGVzdENvbnRleHQiLCJ1c2VNZWRpYVF1ZXJ5IiwiSW5kaWNhdG9yQ2FyZHMiLCJwcm9wcyIsImlzTGFwdG9wIiwidXNlQ29udGV4dCIsIlVuaXQxIiwic2V0VW5pdDEiLCJVbml0MiIsInNldFVuaXQyIiwiVW5pdDMiLCJzZXRVbml0MyIsIkZpbmFsVW5pdCIsInN0YXRlTWVudSIsInN0YXRlcyIsInRpdGxlcyIsImZpbHRlciIsIm1lbnUiLCJpbmRleCIsInZhbHVlIiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ3JhZCIsInNwYW4iLCJidXR0b24iLCJvbmNsaWNrIiwidGhlbWUiLCJzdmciLCJ4bWxucyIsImNsYXNzIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZmlsbC1ydWxlIiwiZCIsImNsaXAtcnVsZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/indicatorCards.js\n");

/***/ })

});