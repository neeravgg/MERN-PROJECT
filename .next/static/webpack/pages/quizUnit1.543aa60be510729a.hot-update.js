"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizUnit1",{

/***/ "./src/components/quiz.js":
/*!********************************!*\
  !*** ./src/components/quiz.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var srink = function srink() {\n        return Open ? \"pl-[20rem] px-20\" : \"pl-[10rem] px-20 \";\n    };\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 768px )\");\n    var Open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).Open;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref5[0], setCurrentQuestion = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), QuestionState = ref4.QuestionState, TestState = ref4.TestState;\n    var handleLabel = function() {\n        if (TestState === Practice1) return Practice - 1;\n        if (TestState === Practice2) return \"Practice-2\";\n        if (TestState === Practice3) return \"Practice-3\";\n        if (TestState === FinalTest) return \"Final-Test\";\n    };\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < QuestionState.length && setCurrentQuestion(nextQues);\n    };\n    var handleSubmitButton = function() {\n        var _loop = function(i) {\n            QuestionState[i].options.map(function(answer) {\n                var ref;\n                return answer.isCorrect && answer.answer === ((ref = selectedOptions[i]) === null || ref === void 0 ? void 0 : ref.answerByUser) && (newScore += 1);\n            });\n        };\n        var newScore = 0;\n        for(var i = 0; i < QuestionState.length; i++)_loop(i);\n        setScore(newScore);\n        setShowScore(true);\n        if (score >= 40 / QuestionState.length * 100) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-10\", \" px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col  w-screen  gap-12 pb-10 px-1 items-center\\n        \".concat(isTablet && \"gap-10 \", \" \").concat(isLaptop && \"gap-14  min-h-screen\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  \".concat(isLaptop && \"w-9/12\", \" \\n            \").concat(isTablet && \"w-11/12\", \" \\n           \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize \",\n                        children: handleLabel\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5\",\n                        children: [\n                            \"You scored \",\n                            score,\n                            \" out of \",\n                            QuestionState.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 p-10 rounded-xl shadow-sm bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark\",\n                                        children: [\n                                            \"Question \",\n                                            currentQuestion + 1,\n                                            \" of \",\n                                            QuestionState.length\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark\",\n                                        children: QuestionState[currentQuestion].question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full \",\n                                children: QuestionState[currentQuestion].options.map(function(answer, index) {\n                                    var ref;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted\",\n                                        onClick: function(e) {\n                                            return handleAnswerOption(answer.answer);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: answer.answer,\n                                                value: answer.answer,\n                                                checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                                onChange: function(e) {\n                                                    return handleAnswerOption(answer.answer);\n                                                },\n                                                className: \"w-6 h-6 bg-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-6 text-skin-base \",\n                                                children: answer.answer\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between w-full mt-4 text-white px-5 gap-6 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlePrevious,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: \"Previous\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: currentQuestion + 1 === QuestionState.length ? handleSubmitButton : handleNext,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: currentQuestion + 1 === QuestionState.length ? \"Submit\" : \"Next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"c9Rub7QFMhSVR5AWnny1qWzFkIk=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cG9uZW50cy9xdWl6LmpzP2JlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlYmFyQ29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1NpZGViYXJDb250ZXh0XCI7XHJcbmltcG9ydCBUZXN0Q29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1Rlc3RDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCIuLi9hc3Nlc3RzL2hvb2tzL3VzZU1lZGlhUXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgaXNMYXB0b3AgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiA3NjhweCApXCIpO1xyXG4gIGNvbnN0IHsgT3BlbiB9ID0gdXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1Njb3JlLCBzZXRTaG93U2NvcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgUXVlc3Rpb25TdGF0ZSwgVGVzdFN0YXRlIH0gPSB1c2VDb250ZXh0KFRlc3RDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGFiZWwgPSAoKSA9PiB7XHJcbiAgICBpZiAoVGVzdFN0YXRlID09PSBQcmFjdGljZTEpIHJldHVybiBQcmFjdGljZS0xO1xyXG4gICAgaWYgKFRlc3RTdGF0ZSA9PT0gUHJhY3RpY2UyKSByZXR1cm4gXCJQcmFjdGljZS0yXCI7XHJcbiAgICBpZiAoVGVzdFN0YXRlID09PSBQcmFjdGljZTMpIHJldHVybiBcIlByYWN0aWNlLTNcIjtcclxuICAgIGlmIChUZXN0U3RhdGUgPT09IEZpbmFsVGVzdCkgcmV0dXJuIFwiRmluYWwtVGVzdFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlck9wdGlvbiA9IChhbnN3ZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbXHJcbiAgICAgIChzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXSA9IHsgYW5zd2VyQnlVc2VyOiBhbnN3ZXIgfSksXHJcbiAgICBdKTtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbLi4uc2VsZWN0ZWRPcHRpb25zXSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJldlF1ZXMgPSBjdXJyZW50UXVlc3Rpb24gLSAxO1xyXG4gICAgcHJldlF1ZXMgPj0gMCAmJiBzZXRDdXJyZW50UXVlc3Rpb24ocHJldlF1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0UXVlcyA9IGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICBuZXh0UXVlcyA8IFF1ZXN0aW9uU3RhdGUubGVuZ3RoICYmIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1Njb3JlID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUXVlc3Rpb25TdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBRdWVzdGlvblN0YXRlW2ldLm9wdGlvbnMubWFwKFxyXG4gICAgICAgIChhbnN3ZXIpID0+XHJcbiAgICAgICAgICBhbnN3ZXIuaXNDb3JyZWN0ICYmXHJcbiAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PSBzZWxlY3RlZE9wdGlvbnNbaV0/LmFuc3dlckJ5VXNlciAmJlxyXG4gICAgICAgICAgKG5ld1Njb3JlICs9IDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzZXRTY29yZShuZXdTY29yZSk7XHJcbiAgICBzZXRTaG93U2NvcmUodHJ1ZSk7XHJcbiAgICBpZiAoc2NvcmUgPj0gKDQwIC8gUXVlc3Rpb25TdGF0ZS5sZW5ndGgpICogMTAwKSB7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc3JpbmsoKSB7XHJcbiAgICByZXR1cm4gT3BlbiA/IFwicGwtWzIwcmVtXSBweC0yMFwiIDogXCJwbC1bMTByZW1dIHB4LTIwIFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgICR7aXNMYXB0b3AgJiYgc3JpbmsoKX0gJHtcclxuICAgICAgICBpc1RhYmxldCAmJiBcInB4LTEwXCJcclxuICAgICAgfSBweC0yICBtdC0xNiBwdC0xMCBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuICBmbGV4ICBqdXN0aWZ5LWNlbnRlcmB9XHJcbiAgICA+XHJcbiAgICAgIHsvKiBtYWluIHBhZ2UgKi99XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAgdy1zY3JlZW4gIGdhcC0xMiBwYi0xMCBweC0xIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICR7aXNUYWJsZXQgJiYgXCJnYXAtMTAgXCJ9ICR7aXNMYXB0b3AgJiYgXCJnYXAtMTQgIG1pbi1oLXNjcmVlblwifSBgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBoLTUyICAgcm91bmRlZC0zeGwgYmctc2tpbi1iYXNlIGRhcms6YmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMzIzMjMyXSB0by1bIzI5MjkyOV0gZGFyazp0aGVtZS1kYXJrIHNoYWRvdy1tZCBweS03IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LWNlbnRlciAgZ2FwLTQgIHctZnVsbCAgJHtcclxuICAgICAgICAgICAgaXNMYXB0b3AgJiYgXCJ3LTkvMTJcIlxyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgICAgJHtpc1RhYmxldCAmJiBcInctMTEvMTJcIn0gXHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgdGV4dC0zeGwgdGV4dC1za2luLWJhc2UgYmctc2tpbi1tdXRlZCBib3JkZXItMiBib3JkZXItc2tpbi1iYXNlIHB4LTMgcHktMyB3LTkvMTIgcm91bmRlZC14bCBzaGFkb3ctc20gIGRhcms6dGhlbWUtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aGFuZGxlTGFiZWx9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dTY29yZSA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndy02LzEyIHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1za2luLWJhc2Ugcm91bmRlZC0yeGwgYmctc2tpbi1kdWxsIGRhcms6dGhlbWUtZGFyayBwLTUnPlxyXG4gICAgICAgICAgICAgIFlvdSBzY29yZWQge3Njb3JlfSBvdXQgb2Yge1F1ZXN0aW9uU3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTggcC0xMCByb3VuZGVkLXhsIHNoYWRvdy1zbSAgYmctc2tpbi1iYXNlIGRhcms6YmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMjIyMjIyXSB0by1bIzFhMWExYV0nPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLXNraW4tYmFzZSBiZy1za2luLW11dGVkIGRhcms6dGhlbWUtZGFyayBweC0xMCBweS01YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3B4LTEwIHB5LTUgdGV4dC14bCB0ZXh0LXNraW4tbXV0ZWQgcm91bmRlZC0yeGwgYmctc2tpbi1kdWxsIGRhcms6dGhlbWUtZGFyayc+XHJcbiAgICAgICAgICAgICAgICAgIFF1ZXN0aW9uIHtjdXJyZW50UXVlc3Rpb24gKyAxfSBvZiB7UXVlc3Rpb25TdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG10LTQgdGV4dC1tZCBtZDp0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtc2tpbi1iYXNlIGRhcms6dGhlbWUtZGFya2B9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtRdWVzdGlvblN0YXRlW2N1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LWZ1bGwgJz5cclxuICAgICAgICAgICAgICAgIHtRdWVzdGlvblN0YXRlW2N1cnJlbnRRdWVzdGlvbl0ub3B0aW9ucy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHktNCBwbC01IG0tMiBtbC0wIHNwYWNlLXgtMiBib3JkZXItMiBjdXJzb3ItcG9pbnRlciBib3JkZXItc2tpbi1tdXRlZCByb3VuZGVkLTJ4bCBiZy1za2luLW11dGVkIGRhcms6dGhlbWUtZGFyayBzaGFkb3ctc20gaG92ZXI6Ymctc2tpbi1idG4taG92ZXItbXV0ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUFuc3dlck9wdGlvbihhbnN3ZXIuYW5zd2VyKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthbnN3ZXIuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlci5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLmFuc3dlciA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zW2N1cnJlbnRRdWVzdGlvbl0/LmFuc3dlckJ5VXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBbnN3ZXJPcHRpb24oYW5zd2VyLmFuc3dlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYgYmctYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21sLTYgdGV4dC1za2luLWJhc2UgJz57YW5zd2VyLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtdC00IHRleHQtd2hpdGUgcHgtNSBnYXAtNiAnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LVs0OSVdIHB5LTMgYmctWyMwOTlhYjNdIGhvdmVyOmJnLVsjMDE3MTg1XSByb3VuZGVkLTN4bCB0ZXh0LXhsIHNoYWRvdy1tZCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gKyAxID09PSBRdWVzdGlvblN0YXRlLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVTdWJtaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIDogaGFuZGxlTmV4dFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bNDklXSBweS0zIGJnLVsjMDk5YWIzXSBob3ZlcjpiZy1bIzAxNzE4NV0gcm91bmRlZC0zeGwgdGV4dC14bCBzaGFkb3ctbWQnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gKyAxID09PSBRdWVzdGlvblN0YXRlLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJOZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiU2lkZWJhckNvbnRleHQiLCJUZXN0Q29udGV4dCIsInVzZU1lZGlhUXVlcnkiLCJRdWl6Iiwic3JpbmsiLCJPcGVuIiwiaXNMYXB0b3AiLCJpc1RhYmxldCIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInNlbGVjdGVkT3B0aW9ucyIsInNldFNlbGVjdGVkT3B0aW9ucyIsInNjb3JlIiwic2V0U2NvcmUiLCJzaG93U2NvcmUiLCJzZXRTaG93U2NvcmUiLCJRdWVzdGlvblN0YXRlIiwiVGVzdFN0YXRlIiwiaGFuZGxlTGFiZWwiLCJQcmFjdGljZTEiLCJQcmFjdGljZSIsIlByYWN0aWNlMiIsIlByYWN0aWNlMyIsIkZpbmFsVGVzdCIsImhhbmRsZUFuc3dlck9wdGlvbiIsImFuc3dlciIsImFuc3dlckJ5VXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQcmV2aW91cyIsInByZXZRdWVzIiwiaGFuZGxlTmV4dCIsIm5leHRRdWVzIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0QnV0dG9uIiwiaSIsIm9wdGlvbnMiLCJtYXAiLCJpc0NvcnJlY3QiLCJuZXdTY29yZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJxdWVzdGlvbiIsImluZGV4Iiwib25DbGljayIsImUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz.js\n");

/***/ })

});