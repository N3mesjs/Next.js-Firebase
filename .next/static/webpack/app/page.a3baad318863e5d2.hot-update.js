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

/***/ "(app-pages-browser)/./app/SignIn.jsx":
/*!************************!*\
  !*** ./app/SignIn.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireBaseAuth.jsx */ \"(app-pages-browser)/./app/fireBaseAuth.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\n\nfunction SignIn() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__.auth, async (user)=>{\n            if (!user) {\n                const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__.auth, _fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__.provider);\n                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__.FirestoreDB, \"users\", result.user.uid);\n                await setDoc(docRef, {\n                    email: result.user.email,\n                    photoURL: result.user.photoURL\n                });\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_1__.FirestoreDB, \"users\"));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data().email);\n                });\n            }\n        });\n    }, []);\n}\n_s(SignIn, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TaWduSW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFb0U7QUFDSjtBQUVRO0FBRXRCO0FBRW5DLFNBQVNZOztJQUVwQkQsZ0RBQVNBLENBQUM7UUFDTlYsaUVBQWtCQSxDQUFDQyxtREFBSUEsRUFBRSxPQUFPVztZQUM1QixJQUFJLENBQUNBLE1BQU07Z0JBQ1AsTUFBTUMsU0FBUyxNQUFNZCw4REFBZUEsQ0FBQ0UsbURBQUlBLEVBQUVDLHVEQUFRQTtnQkFDbkQsTUFBTVksU0FBU1YsMERBQU1BLENBQUNELDBEQUFXQSxFQUFFLFNBQVNVLE9BQU9ELElBQUksQ0FBQ0csR0FBRztnQkFDM0QsTUFBTUMsT0FBT0YsUUFBUTtvQkFDakJHLE9BQU9KLE9BQU9ELElBQUksQ0FBQ0ssS0FBSztvQkFDeEJDLFVBQVVMLE9BQU9ELElBQUksQ0FBQ00sUUFBUTtnQkFDbEM7Z0JBR0EsTUFBTUMsSUFBSVoseURBQUtBLENBQUNELDhEQUFVQSxDQUFDSCwwREFBV0EsRUFBRTtnQkFFeEMsTUFBTWlCLGdCQUFnQixNQUFNZiwyREFBT0EsQ0FBQ2M7Z0JBQ3BDQyxjQUFjQyxPQUFPLENBQUMsQ0FBQ0M7b0JBQ25CQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLEVBQUUsRUFBRSxRQUFRSCxJQUFJSSxJQUFJLEdBQUdULEtBQUs7Z0JBQ2hEO1lBQ0o7UUFDSjtJQUNKLEdBQUcsRUFBRTtBQUNUO0dBdEJ3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1NpZ25Jbi5qc3g/OWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciwgRmlyZXN0b3JlREIgfSBmcm9tIFwiLi9maXJlQmFzZUF1dGguanN4XCJcclxuXHJcbmltcG9ydCB7IGFkZERvYywgZ2V0RG9jcywgY29sbGVjdGlvbiwgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NSZWYgPSBhZGREb2MoRmlyZXN0b3JlREIsIFwidXNlcnNcIiwgcmVzdWx0LnVzZXIudWlkKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHJlc3VsdC51c2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uKEZpcmVzdG9yZURCLCBcInVzZXJzXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKS5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxufVxyXG4iXSwibmFtZXMiOlsic2lnbkluV2l0aFBvcHVwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aCIsInByb3ZpZGVyIiwiRmlyZXN0b3JlREIiLCJhZGREb2MiLCJnZXREb2NzIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpZ25JbiIsInVzZXIiLCJyZXN1bHQiLCJkb2NSZWYiLCJ1aWQiLCJzZXREb2MiLCJlbWFpbCIsInBob3RvVVJMIiwicSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SignIn.jsx\n"));

/***/ })

});