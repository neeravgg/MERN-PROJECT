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

/***/ "./src/components/indicatorCards.js":
/*!******************************************!*\
  !*** ./src/components/indicatorCards.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndicatorCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/Dashboard/indicator */ \"./src/assests/Dashboard/indicator.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction IndicatorCards(props) {\n    var _this = this;\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"(min-width: 1024px)\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), Practice1 = ref.Practice1, Practice2 = ref.Practice2, Practice3 = ref.Practice3, FinalTest = ref.FinalTest, setTestState = ref.setTestState;\n    var stateMenu = [\n        {\n            index: \"1\",\n            link: \"/quizUnit1\",\n            states: Practice1,\n            titles: \"Practice-1\"\n        },\n        {\n            index: \"2\",\n            link: \"/quizUnit2\",\n            states: Practice2,\n            titles: \"Practice-2\"\n        },\n        {\n            index: \"3\",\n            link: \"/quizUnit3\",\n            states: Practice3,\n            titles: \"Practice-3\"\n        },\n        {\n            index: \"4\",\n            link: \"/quizFT\",\n            states: FinalTest,\n            titles: \"Final-Test\"\n        }, \n    ];\n    var handleLock = function(state, link) {\n        setTestState(state);\n        return state !== 0 ? link : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: stateMenu.filter(function(Menu) {\n            return Menu.index <= props.value;\n        }).map(function(menu) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex-1 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md rounded-3xl gap-7 \".concat(isLaptop && \"hover:scale-105\", \" \").concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"][menu.states].grad),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-skin-black text-3xl font-bold py-3 text-center\",\n                            children: menu.titles\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: handleLock(menu.states, menu.link),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onc: true,\n                                className: \"\".concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"][menu.states].theme, \" bg-skin-btn-accent hover:bg-skin-btn-hover  px-2 py-3 rounded-3xl shadow-md \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row gap-2 justify-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            class: \"h-9 w-9 text-skin-accent mt-1\",\n                                            viewBox: \"0 0 20 20\",\n                                            fill: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"\".concat(_assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"][menu.states].svg),\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-skin-base text-xl font-semibold py-2\",\n                                            children: _assests_Dashboard_indicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"][menu.states].label\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\indicatorCards.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(IndicatorCards, \"9jxvfZ5te8PcvPbhryZYxbVNatg=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = IndicatorCards;\nvar _c;\n$RefreshReg$(_c, \"IndicatorCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO2dEQUNuQkMsQ0FBQyxFQUFFLEVBQUMsQ0FBNkIsT0FBM0J0QyxvRUFBUyxDQUFDc0IsSUFBSSxDQUFDUixNQUFNLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBRTtnREFDbENRLFdBQVMsRUFBQyxTQUFTOzs7OztxREFDbkI7Ozs7O2lEQUNFO3NEQUNOLDhEQUFDYixNQUFJOzRDQUFDRixTQUFTLEVBQUMsMkNBQTJDO3NEQUN4RHhCLG9FQUFTLENBQUNzQixJQUFJLENBQUNSLE1BQU0sQ0FBQyxDQUFDMEIsS0FBSzs7Ozs7aURBQ3hCOzs7Ozs7eUNBQ0g7Ozs7O3FDQUNDOzs7OztpQ0FDSjs7Ozs7O3lCQUNIOzs7OztxQkFDRjtTQUNQLENBQUM7cUJBQ0gsQ0FDSDtDQUNIO0dBckV1QnJDLGNBQWM7O1FBQ25CRCxvRUFBYTs7O0FBRFJDLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kaWNhdG9yQ2FyZHMuanM/MzVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSBcIi4uL2Fzc2VzdHMvRGFzaGJvYXJkL2luZGljYXRvclwiO1xyXG5pbXBvcnQgVGVzdENvbnRleHQgZnJvbSBcIi4uL2Fzc2VzdHMvY29udGV4dC9UZXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiLi4vYXNzZXN0cy9ob29rcy91c2VNZWRpYVF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRpY2F0b3JDYXJkcyhwcm9wcykge1xyXG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcbiAgY29uc3Qge1xyXG4gICAgUHJhY3RpY2UxLFxyXG4gICAgUHJhY3RpY2UyLFxyXG4gICAgUHJhY3RpY2UzLFxyXG4gICAgRmluYWxUZXN0LFxyXG4gICAgc2V0VGVzdFN0YXRlLFxyXG4gIH0gPSB1c2VDb250ZXh0KFRlc3RDb250ZXh0KTtcclxuICBjb25zdCBzdGF0ZU1lbnUgPSBbXHJcbiAgICB7IGluZGV4OiBcIjFcIiwgbGluazogXCIvcXVpelVuaXQxXCIsIHN0YXRlczogUHJhY3RpY2UxLCB0aXRsZXM6IFwiUHJhY3RpY2UtMVwiIH0sXHJcbiAgICB7IGluZGV4OiBcIjJcIiwgbGluazogXCIvcXVpelVuaXQyXCIsIHN0YXRlczogUHJhY3RpY2UyLCB0aXRsZXM6IFwiUHJhY3RpY2UtMlwiIH0sXHJcbiAgICB7IGluZGV4OiBcIjNcIiwgbGluazogXCIvcXVpelVuaXQzXCIsIHN0YXRlczogUHJhY3RpY2UzLCB0aXRsZXM6IFwiUHJhY3RpY2UtM1wiIH0sXHJcbiAgICB7IGluZGV4OiBcIjRcIiwgbGluazogXCIvcXVpekZUXCIsIHN0YXRlczogRmluYWxUZXN0LCB0aXRsZXM6IFwiRmluYWwtVGVzdFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9jayA9IChzdGF0ZSwgbGluaykgPT4ge1xyXG4gICAgc2V0VGVzdFN0YXRlKHN0YXRlKVxyXG4gICAgcmV0dXJuIHN0YXRlICE9PSAwID8gbGluayA6IFwiXCI7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N0YXRlTWVudVxyXG4gICAgICAgIC5maWx0ZXIoKE1lbnUpID0+IE1lbnUuaW5kZXggPD0gcHJvcHMudmFsdWUpXHJcbiAgICAgICAgLm1hcCgobWVudSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4LTEgICc+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHRyYW5zZm9ybSAgaC00OCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBweC0zIHB5LTQgc2hhZG93LW1kIHJvdW5kZWQtM3hsIGdhcC03ICR7XHJcbiAgICAgICAgICAgICAgICBpc0xhcHRvcCAmJiBcImhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgfSAke2luZGljYXRvclttZW51LnN0YXRlc10uZ3JhZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIHRpdGxlICovfVxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyB0ZXh0LXNraW4tYmxhY2sgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTMgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAge21lbnUudGl0bGVzfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIHN0YXRlICovfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hhbmRsZUxvY2sobWVudS5zdGF0ZXMsIG1lbnUubGluayl9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25jXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yW21lbnUuc3RhdGVzXS50aGVtZVxyXG4gICAgICAgICAgICAgICAgICB9IGJnLXNraW4tYnRuLWFjY2VudCBob3ZlcjpiZy1za2luLWJ0bi1ob3ZlciAgcHgtMiBweS0zIHJvdW5kZWQtM3hsIHNoYWRvdy1tZCBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSdoLTkgdy05IHRleHQtc2tpbi1hY2NlbnQgICBtdC0xJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD17YCR7aW5kaWNhdG9yW21lbnUuc3RhdGVzXS5zdmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPSdldmVub2RkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc2tpbi1iYXNlIHRleHQteGwgZm9udC1zZW1pYm9sZCBweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRpY2F0b3JbbWVudS5zdGF0ZXNdLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwiaW5kaWNhdG9yIiwiVGVzdENvbnRleHQiLCJ1c2VNZWRpYVF1ZXJ5IiwiSW5kaWNhdG9yQ2FyZHMiLCJwcm9wcyIsImlzTGFwdG9wIiwiUHJhY3RpY2UxIiwiUHJhY3RpY2UyIiwiUHJhY3RpY2UzIiwiRmluYWxUZXN0Iiwic2V0VGVzdFN0YXRlIiwic3RhdGVNZW51IiwiaW5kZXgiLCJsaW5rIiwic3RhdGVzIiwidGl0bGVzIiwiaGFuZGxlTG9jayIsInN0YXRlIiwiZmlsdGVyIiwiTWVudSIsInZhbHVlIiwibWFwIiwibWVudSIsImRpdiIsImNsYXNzTmFtZSIsImdyYWQiLCJzcGFuIiwiaHJlZiIsImJ1dHRvbiIsIm9uYyIsInRoZW1lIiwic3ZnIiwieG1sbnMiLCJjbGFzcyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/indicatorCards.js\n");

/***/ })

});