"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/PopUp.jsx":
/*!***********************!*\
  !*** ./app/PopUp.jsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ popUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fireBaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fireBaseAuth.jsx */ \"(app-pages-browser)/./app/fireBaseAuth.jsx\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction popUp() {\n    _s();\n    const [arrayUtenti, setArrayUtenti] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Start listing users from the beginning, 1000 at a time.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup flex flex-col text-white bg-[#1f1f1f] p-[20px] rounded-2xl justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-[30px]\",\n                    children: \"Menu Crezione Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"chatname\",\n                            className: \"mb-[10px]\",\n                            children: \"Nome della chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"focus:outline-sky-600 p-[10px] mb-[20px]\",\n                            type: \"text\",\n                            id: \"chatname\",\n                            placeholder: \"Nome Chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mb-[10px]\",\n                            children: \"Membri: inserisci l'indirizzo e-mail dei membri che vuoi aggiungere(metti uno spazio tra ogni email)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"focus:outline-sky-600 p-[10px] mb-[20px]\",\n                            type: \"text\",\n                            placeholder: \"E-mail\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(popUp, \"g6KCxuUXNep0CmPeQaNioTk0Dls=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb3BVcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFVDtBQUNpQjtBQUNsQjtBQUUxQixTQUFTUzs7SUFFcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsMERBQTBEO0lBQzVEQyxnREFBU0EsQ0FBQyxLQUNWLEdBQUcsRUFBRTtJQUNMLHFCQUNJO2tCQUNJLDRFQUFDVTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXdCOzs7Ozs7OEJBQ3RDLDhEQUFDRTtvQkFBS0YsV0FBVTs7c0NBQ1osOERBQUNHOzRCQUFNQyxLQUFJOzRCQUFXSixXQUFVO3NDQUFZOzs7Ozs7c0NBQzVDLDhEQUFDSzs0QkFBTUwsV0FBVTs0QkFBMkNNLE1BQUs7NEJBQU9DLElBQUc7NEJBQVdDLGFBQVk7Ozs7OztzQ0FDbEcsOERBQUNMOzRCQUFNSCxXQUFVO3NDQUFZOzs7Ozs7c0NBQzdCLDhEQUFDSzs0QkFBTUwsV0FBVTs0QkFBMkNNLE1BQUs7NEJBQU9FLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEc7R0FuQndCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvUG9wVXAuanN4P2M0MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSAnLi9maXJlQmFzZUF1dGgnO1xuaW1wb3J0IHsgcmVmLCBzZXQsIG9uVmFsdWUsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL2ZpcmVCYXNlQXV0aC5qc3hcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3BVcCgpe1xuXG4gICAgY29uc3QgW2FycmF5VXRlbnRpLCBzZXRBcnJheVV0ZW50aV0gPSB1c2VTdGF0ZShbXSlcbiAgICAgIC8vIFN0YXJ0IGxpc3RpbmcgdXNlcnMgZnJvbSB0aGUgYmVnaW5uaW5nLCAxMDAwIGF0IGEgdGltZS5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAgZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIGJnLVsjMWYxZjFmXSBwLVsyMHB4XSByb3VuZGVkLTJ4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzMwcHhdXCI+TWVudSBDcmV6aW9uZSBDaGF0PC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF0bmFtZVwiIGNsYXNzTmFtZT1cIm1iLVsxMHB4XVwiPk5vbWUgZGVsbGEgY2hhdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLXNreS02MDAgcC1bMTBweF0gbWItWzIwcHhdXCIgdHlwZT1cInRleHRcIiBpZD1cImNoYXRuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIENoYXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi1bMTBweF1cIj5NZW1icmk6IGluc2VyaXNjaSBsJ2luZGlyaXp6byBlLW1haWwgZGVpIG1lbWJyaSBjaGUgdnVvaSBhZ2dpdW5nZXJlKG1ldHRpIHVubyBzcGF6aW8gdHJhIG9nbmkgZW1haWwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtc2t5LTYwMCBwLVsxMHB4XSBtYi1bMjBweF1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhYmFzZSIsInJlZiIsInNldCIsIm9uVmFsdWUiLCJnZXQiLCJhdXRoIiwicG9wVXAiLCJhcnJheVV0ZW50aSIsInNldEFycmF5VXRlbnRpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/PopUp.jsx\n"));

/***/ })

});