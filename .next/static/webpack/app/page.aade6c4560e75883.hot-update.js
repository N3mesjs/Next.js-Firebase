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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popUp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fireBaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fireBaseAuth.jsx */ \"(app-pages-browser)/./app/fireBaseAuth.jsx\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction popUp() {\n    _s();\n    const [arrayUtenti, setArrayUtenti] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"popUp.useEffect\": ()=>{}\n    }[\"popUp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup flex flex-col text-white bg-[#1f1f1f] p-[20px] rounded-2xl justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-[30px]\",\n                    children: \"Menu Crezione Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"chatname\",\n                            className: \"mb-[10px]\",\n                            children: \"Nome della chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"focus:outline-sky-600 p-[10px] mb-[20px]\",\n                            type: \"text\",\n                            id: \"chatname\",\n                            placeholder: \"Nome Chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mb-[10px]\",\n                            children: \"Membri: inserisci l'indirizzo e-mail dei membri che vuoi aggiungere(metti uno spazio tra ogni email)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"focus:outline-sky-600 p-[10px] mb-[20px]\",\n                            type: \"text\",\n                            placeholder: \"E-mail\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\PopUp.jsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(popUp, \"hGP93bApcBspIbWhJh1L2UU6T8o=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb3BVcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFVDtBQUNpQjtBQUNsQjtBQUUxQixTQUFTUzs7SUFFcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQ3ZCWCxnREFBU0E7MkJBQUMsS0FDVjswQkFBRyxFQUFFO0lBQ0wscUJBQ0k7a0JBQ0ksNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBd0I7Ozs7Ozs4QkFDdEMsOERBQUNFO29CQUFLRixXQUFVOztzQ0FDWiw4REFBQ0c7NEJBQU1DLEtBQUk7NEJBQVdKLFdBQVU7c0NBQVk7Ozs7OztzQ0FDNUMsOERBQUNLOzRCQUFNTCxXQUFVOzRCQUEyQ00sTUFBSzs0QkFBT0MsSUFBRzs0QkFBV0MsYUFBWTs7Ozs7O3NDQUNsRyw4REFBQ0w7NEJBQU1ILFdBQVU7c0NBQVk7Ozs7OztzQ0FDN0IsOERBQUNLOzRCQUFNTCxXQUFVOzRCQUEyQ00sTUFBSzs0QkFBT0UsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RztHQXBCd0JkIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE55bWVzXFxEb2N1bWVudHNcXEdpdEh1YlxcTmV4dC5qcy1GaXJlQmFzZVxcYXBwXFxQb3BVcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4vZmlyZUJhc2VBdXRoJztcclxuaW1wb3J0IHsgcmVmLCBzZXQsIG9uVmFsdWUsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZUJhc2VBdXRoLmpzeFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3BVcCgpe1xyXG5cclxuICAgIGNvbnN0IFthcnJheVV0ZW50aSwgc2V0QXJyYXlVdGVudGldID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAgZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIGJnLVsjMWYxZjFmXSBwLVsyMHB4XSByb3VuZGVkLTJ4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMzBweF1cIj5NZW51IENyZXppb25lIENoYXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF0bmFtZVwiIGNsYXNzTmFtZT1cIm1iLVsxMHB4XVwiPk5vbWUgZGVsbGEgY2hhdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtc2t5LTYwMCBwLVsxMHB4XSBtYi1bMjBweF1cIiB0eXBlPVwidGV4dFwiIGlkPVwiY2hhdG5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgQ2hhdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItWzEwcHhdXCI+TWVtYnJpOiBpbnNlcmlzY2kgbCdpbmRpcml6em8gZS1tYWlsIGRlaSBtZW1icmkgY2hlIHZ1b2kgYWdnaXVuZ2VyZShtZXR0aSB1bm8gc3BhemlvIHRyYSBvZ25pIGVtYWlsKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtc2t5LTYwMCBwLVsxMHB4XSBtYi1bMjBweF1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25WYWx1ZSIsImdldCIsImF1dGgiLCJwb3BVcCIsImFycmF5VXRlbnRpIiwic2V0QXJyYXlVdGVudGkiLCJlbWFpbCIsInNldEVtYWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/PopUp.jsx\n"));

/***/ })

});