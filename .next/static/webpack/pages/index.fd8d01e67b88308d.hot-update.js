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

/***/ "./src/assests/Dashboard/indicator.js":
/*!********************************************!*\
  !*** ./src/assests/Dashboard/indicator.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar indicator = [\n    {\n        index: \"\",\n        grad: \"bg-gradient-to-tr from-skin-wrong1 to-skin-wrong2\",\n        label: \"Locked\",\n        theme: \"theme-red\",\n        svg: \"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\"\n    },\n    {\n        index: \"\",\n        grad: \"bg-gradient-to-tr from-skin-base1 to-skin-base2\",\n        label: \"Take test\",\n        theme: \"theme-orange\",\n        svg: \"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"\n    },\n    {\n        index: \"\",\n        grad: \"bg-gradient-to-tr from-skin-complete1 to-skin-complete2\",\n        label: \"Completed\",\n        theme: \"theme-green\",\n        svg: \"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\"\n    },\n    {\n        index: \"\",\n        grad: \"bg-gradient-to-tr from-skin-wrong1 to-skin-wrong2\",\n        label: \"Retake\",\n        theme: \"theme-red\",\n        svg: \"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\"\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (indicator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXN0cy9EYXNoYm9hcmQvaW5kaWNhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFNQSxTQUFTLEdBQUc7SUFDaEI7UUFDRUMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsSUFBSSxFQUFFLG1EQUFtRDtRQUN6REMsS0FBSyxFQUFFLFFBQVE7UUFDZkMsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLEdBQUcsRUFBRSx3R0FBd0c7S0FDOUc7SUFDRDtRQUNFSixLQUFLLEVBQUUsRUFBRTtRQUNUQyxJQUFJLEVBQUUsaURBQWlEO1FBQ3ZEQyxLQUFLLEVBQUUsV0FBVztRQUNsQkMsS0FBSyxFQUFFLGNBQWM7UUFDckJDLEdBQUcsRUFBRSx5SEFBeUg7S0FDL0g7SUFDRDtRQUNFSixLQUFLLEVBQUUsRUFBRTtRQUNUQyxJQUFJLEVBQUUseURBQXlEO1FBQy9EQyxLQUFLLEVBQUUsV0FBVztRQUNsQkMsS0FBSyxFQUFFLGFBQWE7UUFDcEJDLEdBQUcsRUFBRSxpaUJBQWlpQjtLQUN2aUI7SUFDRDtRQUNFSixLQUFLLEVBQUUsRUFBRTtRQUNUQyxJQUFJLEVBQUUsbURBQW1EO1FBQ3pEQyxLQUFLLEVBQUUsUUFBUTtRQUNmQyxLQUFLLEVBQUUsV0FBVztRQUNsQkMsR0FBRyxFQUFFLHlOQUF5TjtLQUMvTjtDQUVGO0FBRUQsK0RBQWVMLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXN0cy9EYXNoYm9hcmQvaW5kaWNhdG9yLmpzP2NhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5kaWNhdG9yID0gW1xyXG4gIHtcclxuICAgIGluZGV4OiBcIlwiLFxyXG4gICAgZ3JhZDogXCJiZy1ncmFkaWVudC10by10ciBmcm9tLXNraW4td3JvbmcxIHRvLXNraW4td3JvbmcyXCIsXHJcbiAgICBsYWJlbDogXCJMb2NrZWRcIixcclxuICAgIHRoZW1lOiBcInRoZW1lLXJlZFwiLFxyXG4gICAgc3ZnOiBcIk01IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAwelwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IFwiXCIsXHJcbiAgICBncmFkOiBcImJnLWdyYWRpZW50LXRvLXRyIGZyb20tc2tpbi1iYXNlMSB0by1za2luLWJhc2UyXCIsXHJcbiAgICBsYWJlbDogXCJUYWtlIHRlc3RcIixcclxuICAgIHRoZW1lOiBcInRoZW1lLW9yYW5nZVwiLFxyXG4gICAgc3ZnOiBcIk0xMy41ODYgMy41ODZhMiAyIDAgMTEyLjgyOCAyLjgyOGwtLjc5My43OTMtMi44MjgtMi44MjguNzkzLS43OTN6TTExLjM3OSA1Ljc5M0wzIDE0LjE3MlYxN2gyLjgyOGw4LjM4LTguMzc5LTIuODMtMi44Mjh6XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbmRleDogXCJcIixcclxuICAgIGdyYWQ6IFwiYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1za2luLWNvbXBsZXRlMSB0by1za2luLWNvbXBsZXRlMlwiLFxyXG4gICAgbGFiZWw6IFwiQ29tcGxldGVkXCIsXHJcbiAgICB0aGVtZTogXCJ0aGVtZS1ncmVlblwiLFxyXG4gICAgc3ZnOiBcIk02LjI2NyAzLjQ1NWEzLjA2NiAzLjA2NiAwIDAwMS43NDUtLjcyMyAzLjA2NiAzLjA2NiAwIDAxMy45NzYgMCAzLjA2NiAzLjA2NiAwIDAwMS43NDUuNzIzIDMuMDY2IDMuMDY2IDAgMDEyLjgxMiAyLjgxMmMuMDUxLjY0My4zMDQgMS4yNTQuNzIzIDEuNzQ1YTMuMDY2IDMuMDY2IDAgMDEwIDMuOTc2IDMuMDY2IDMuMDY2IDAgMDAtLjcyMyAxLjc0NSAzLjA2NiAzLjA2NiAwIDAxLTIuODEyIDIuODEyIDMuMDY2IDMuMDY2IDAgMDAtMS43NDUuNzIzIDMuMDY2IDMuMDY2IDAgMDEtMy45NzYgMCAzLjA2NiAzLjA2NiAwIDAwLTEuNzQ1LS43MjMgMy4wNjYgMy4wNjYgMCAwMS0yLjgxMi0yLjgxMiAzLjA2NiAzLjA2NiAwIDAwLS43MjMtMS43NDUgMy4wNjYgMy4wNjYgMCAwMTAtMy45NzYgMy4wNjYgMy4wNjYgMCAwMC43MjMtMS43NDUgMy4wNjYgMy4wNjYgMCAwMTIuODEyLTIuODEyem03LjQ0IDUuMjUyYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTAuNTg2IDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IFwiXCIsXHJcbiAgICBncmFkOiBcImJnLWdyYWRpZW50LXRvLXRyIGZyb20tc2tpbi13cm9uZzEgdG8tc2tpbi13cm9uZzJcIixcclxuICAgIGxhYmVsOiBcIlJldGFrZVwiLFxyXG4gICAgdGhlbWU6IFwidGhlbWUtcmVkXCIsXHJcbiAgICBzdmc6IFwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTguNzA3IDcuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0TDguNTg2IDEwbC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEwIDExLjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0TDExLjQxNCAxMGwxLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMCA4LjU4NiA4LjcwNyA3LjI5M3pcIixcclxuICB9LFxyXG4gXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRpY2F0b3I7XHJcbiJdLCJuYW1lcyI6WyJpbmRpY2F0b3IiLCJpbmRleCIsImdyYWQiLCJsYWJlbCIsInRoZW1lIiwic3ZnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assests/Dashboard/indicator.js\n");

/***/ })

});