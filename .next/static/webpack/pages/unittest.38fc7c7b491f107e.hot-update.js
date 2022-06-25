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

/***/ "./src/components/Quiz.js":
/*!********************************!*\
  !*** ./src/components/Quiz.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/QnA/questions_1.json */ \"./src/assests/QnA/questions_1.json\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref4[0], setCurrentQuestion = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length && setCurrentQuestion(nextQues);\n    };\n    var handleSubmitButton = function() {\n        var _loop = function(i) {\n            _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__[i].answerOptions.map(function(answer) {\n                var ref;\n                return answer.isCorrect && answer.answer === ((ref = selectedOptions[i]) === null || ref === void 0 ? void 0 : ref.answerByUser) && (newScore += 1);\n            });\n        };\n        var newScore = 0;\n        for(var i = 0; i < _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length; i++)_loop(i);\n        setScore(newScore);\n        setShowScore(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-3xl font-semibold text-center text-white\",\n            children: [\n                \"You scored \",\n                score,\n                \" out of \",\n                _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-start w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"mt-10 text-xl text-white/60\",\n                            children: [\n                                \"Question \",\n                                currentQuestion + 1,\n                                \" of \",\n                                _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 text-2xl text-white\",\n                            children: _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__[currentQuestion].question\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__[currentQuestion].options.map(function(answer, index) {\n                        var ref;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white rounded-xl bg-white/5\",\n                            onClick: function(e) {\n                                return handleAnswerOption(answer.answer);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    name: answer.answer,\n                                    value: answer.answer,\n                                    checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                    onChange: function(e) {\n                                        return handleAnswerOption(answer.answer);\n                                    },\n                                    className: \"w-6 h-6 bg-black\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-6 text-white\",\n                                    children: answer.answer\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between w-full mt-4 text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handlePrevious,\n                            className: \"w-[49%] py-3 bg-indigo-600 rounded-lg\",\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: currentQuestion + 1 === _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length ? handleSubmitButton : handleNext,\n                            className: \"w-[49%] py-3 bg-indigo-600 rounded-lg\",\n                            children: currentQuestion + 1 === _assests_QnA_questions_1_json__WEBPACK_IMPORTED_MODULE_2__.length ? \"Submit\" : \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Quiz.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"P7BSjdOoOYmaOsptyHSyumniJGs=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7Ozs7aUNBZ0JOO3FCQUNQLENBQUM7Ozs7O3dCQUNFOzhCQUNOLDhEQUFDTixLQUFHO29CQUFDRSxTQUFTLEVBQUMsNkNBQTZDOztzQ0FDMUQsOERBQUNjLFFBQU07NEJBQ0xULE9BQU8sRUFBRWxCLGNBQWM7NEJBQ3ZCYSxTQUFTLEVBQUMsdUNBQXVDO3NDQUNsRCxVQUVEOzs7OztnQ0FBUztzQ0FDVCw4REFBQ2MsUUFBTTs0QkFDTFQsT0FBTyxFQUNML0IsZUFBZSxHQUFHLENBQUMsS0FBS0YsaUVBQWdCLEdBQ3BDb0Isa0JBQWtCLEdBQ2xCSCxVQUFVOzRCQUVoQlcsU0FBUyxFQUFDLHVDQUF1QztzQ0FFaEQxQixlQUFlLEdBQUcsQ0FBQyxLQUFLRixpRUFBZ0IsR0FBRyxRQUFRLEdBQUcsTUFBTTs7Ozs7Z0NBQ3REOzs7Ozs7d0JBQ0w7O3dCQUNMOzs7OztZQUVELENBQ047Q0FDSDtHQWxHdUJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9RdWl6LmpzPzMzMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBxdWVzdGlvbnMgZnJvbSBcIi4uL2Fzc2VzdHMvUW5BL3F1ZXN0aW9uc18xLmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb25zLCBzZXRTZWxlY3RlZE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzaG93U2NvcmUsIHNldFNob3dTY29yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlck9wdGlvbiA9IChhbnN3ZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbXHJcbiAgICAgIChzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXSA9IHsgYW5zd2VyQnlVc2VyOiBhbnN3ZXIgfSksXHJcbiAgICBdKTtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbLi4uc2VsZWN0ZWRPcHRpb25zXSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJldlF1ZXMgPSBjdXJyZW50UXVlc3Rpb24gLSAxO1xyXG4gICAgcHJldlF1ZXMgPj0gMCAmJiBzZXRDdXJyZW50UXVlc3Rpb24ocHJldlF1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0UXVlcyA9IGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICBuZXh0UXVlcyA8IHF1ZXN0aW9ucy5sZW5ndGggJiYgc2V0Q3VycmVudFF1ZXN0aW9uKG5leHRRdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3U2NvcmUgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcXVlc3Rpb25zW2ldLmFuc3dlck9wdGlvbnMubWFwKFxyXG4gICAgICAgIChhbnN3ZXIpID0+XHJcbiAgICAgICAgICBhbnN3ZXIuaXNDb3JyZWN0ICYmXHJcbiAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PSBzZWxlY3RlZE9wdGlvbnNbaV0/LmFuc3dlckJ5VXNlciAmJlxyXG4gICAgICAgICAgKG5ld1Njb3JlICs9IDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzZXRTY29yZShuZXdTY29yZSk7XHJcbiAgICBzZXRTaG93U2NvcmUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaG93U2NvcmUgPyAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgIFlvdSBzY29yZWQge3Njb3JlfSBvdXQgb2Yge3F1ZXN0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgdy1mdWxsJz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbXQtMTAgdGV4dC14bCB0ZXh0LXdoaXRlLzYwJz5cclxuICAgICAgICAgICAgICBRdWVzdGlvbiB7Y3VycmVudFF1ZXN0aW9uICsgMX0gb2Yge3F1ZXN0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IHRleHQtMnhsIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCc+XHJcbiAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBweS00IHBsLTUgbS0yIG1sLTAgc3BhY2UteC0yIGJvcmRlci0yIGN1cnNvci1wb2ludGVyIGJvcmRlci13aGl0ZSByb3VuZGVkLXhsIGJnLXdoaXRlLzUnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlci5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlci5hbnN3ZXIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zW2N1cnJlbnRRdWVzdGlvbl0/LmFuc3dlckJ5VXNlclxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYgYmctYmxhY2snXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtbC02IHRleHQtd2hpdGUnPnthbnN3ZXIuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXQtNCB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bNDklXSBweS0zIGJnLWluZGlnby02MDAgcm91bmRlZC1sZydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gKyAxID09PSBxdWVzdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgID8gaGFuZGxlU3VibWl0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIDogaGFuZGxlTmV4dFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzQ5JV0gcHktMyBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtbGcnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uICsgMSA9PT0gcXVlc3Rpb25zLmxlbmd0aCA/IFwiU3VibWl0XCIgOiBcIk5leHRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJxdWVzdGlvbnMiLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwic2NvcmUiLCJzZXRTY29yZSIsInNob3dTY29yZSIsInNldFNob3dTY29yZSIsImhhbmRsZUFuc3dlck9wdGlvbiIsImFuc3dlciIsImFuc3dlckJ5VXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQcmV2aW91cyIsInByZXZRdWVzIiwiaGFuZGxlTmV4dCIsIm5leHRRdWVzIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0QnV0dG9uIiwiaSIsImFuc3dlck9wdGlvbnMiLCJtYXAiLCJpc0NvcnJlY3QiLCJuZXdTY29yZSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiaDQiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJpbmRleCIsIm9uQ2xpY2siLCJlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Quiz.js\n");

/***/ })

});