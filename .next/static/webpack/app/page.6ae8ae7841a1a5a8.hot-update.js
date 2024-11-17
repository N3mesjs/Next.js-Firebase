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

/***/ "(app-pages-browser)/./app/SignUp.jsx":
/*!************************!*\
  !*** ./app/SignUp.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fireBaseAuth.jsx */ \"(app-pages-browser)/./app/fireBaseAuth.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _images_google_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/google.png */ \"(app-pages-browser)/./app/images/google.png\");\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/user.png */ \"(app-pages-browser)/./app/images/user.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [errEmail, setErrEmail] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [errUsername, setErrUsername] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const variazioneEmail = (e)=>{\n        setEmail(e.target.value);\n    };\n    const variazioneUsername = (e)=>{\n        setUsername(e.target.value);\n    };\n    const variazionePassword = (e)=>{\n        setPassword(e.target.value);\n    };\n    async function GoogleSignUp() {\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__.auth, _fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__.provider);\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__.FirestoreDB, \"users\", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(docRef, {\n            email: result.user.email,\n            username: result.user.displayName,\n            photoURL: result.user.photoURL\n        });\n    }\n    async function handleSubmit() {\n        const queue = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__.FirestoreDB, \"users\"));\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(queue);\n        querySnapshot.forEach((doc)=>{\n            if (doc.data().email == email) {\n                setErrEmail(true);\n            } else if (doc.data().username == username) {\n                setErrUsername(true);\n            }\n        });\n        if (!errEmail || !errUsername) {\n            const result = await createUserWithEmailAndPassword(_fireBaseAuth_jsx__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            console.log(result);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex items-center justify-center h-screen bg-[#383838]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[20px] rounded-lg bg-[#272727] text-white flex flex-col items-center justify-center w-[400px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[20px] font-bold mb-[20px]\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: GoogleSignUp,\n                        className: \"flex items-center justify-center bg-[#ffffff] px-[20px] py-[10px] text-[#333] rounded-[10px] w-[250px] mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                src: _images_google_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                alt: \"google image\",\n                                className: \"rounded-[10px] mr-[10px]\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 172\n                            }, this),\n                            \"SignUp with Google\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"border-[1px] w-[150px] mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-col justify-center text-black\",\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"inpt\",\n                                type: \"email\",\n                                placeholder: \"email\",\n                                value: email,\n                                onChange: variazioneEmail,\n                                id: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"inpt\",\n                                type: \"text\",\n                                placeholder: \"username\",\n                                value: username,\n                                onChange: variazioneUsername,\n                                id: \"username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"inpt\",\n                                type: \"password\",\n                                placeholder: \"password\",\n                                value: password,\n                                onChange: variazionePassword,\n                                id: \"password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-[150px] rounded-[20px] py-[7px] px-[15px] bg-white\",\n                                    children: \"SignUp\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this),\n                    errEmail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red font-bold\",\n                        children: \"Un account con questa email esiste gi\\xe1!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 33\n                    }, this) : null,\n                    errUsername ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red font-bold\",\n                        children: \"Un account con questo username esiste gi\\xe1!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 36\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nymes\\\\Documents\\\\GitHub\\\\Next.js-FireBase\\\\app\\\\SignUp.jsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(SignIn, \"GNrXMnONlyEkHNEG9PTLDN74BeM=\");\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQ0FDN0csOERBQUNKO2dDQUFNZCxXQUFVO2dDQUFPZSxNQUFLO2dDQUFXQyxhQUFZO2dDQUFXbkMsT0FBT1Q7Z0NBQVU2QyxVQUFVbEM7Z0NBQW9CbUMsSUFBRzs7Ozs7OzBDQUNqSCw4REFBQ2pCO2dDQUFJRCxXQUFVOzBDQUNYLDRFQUFDRztvQ0FBT1ksTUFBSztvQ0FBU2YsV0FBVTs4Q0FBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUc5RjFCLHlCQUFXLDhEQUFDNkM7d0JBQUVuQixXQUFVO2tDQUFxQjs7Ozs7K0JBQThDO29CQUMzRnhCLDRCQUFjLDhEQUFDMkM7d0JBQUVuQixXQUFVO2tDQUFxQjs7Ozs7K0JBQWlEOzs7Ozs7Ozs7Ozs7O0FBTXRIO0dBdEV3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9TaWduVXAuanN4PzA5NDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIsIEZpcmVzdG9yZURCIH0gZnJvbSBcIi4vZmlyZUJhc2VBdXRoLmpzeFwiXHJcblxyXG5pbXBvcnQgeyBkb2MsIHNldERvYywgZ2V0RG9jcywgY29sbGVjdGlvbiwgcXVlcnksIEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgR29vZ2xlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2dvb2dsZS5wbmdcIlxyXG5pbXBvcnQgVXNlckltYWdlIGZyb20gXCIuL2ltYWdlcy91c2VyLnBuZ1wiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2VyckVtYWlsLCBzZXRFcnJFbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyVXNlcm5hbWUsIHNldEVyclVzZXJuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB2YXJpYXppb25lRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhcmlhemlvbmVVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFyaWF6aW9uZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBHb29nbGVTaWduVXAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKVxyXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhGaXJlc3RvcmVEQiwgXCJ1c2Vyc1wiLCByZXN1bHQudXNlci51aWQpOyAvL0RvYyBlIGNvbWUgaWwgcmVmLCBzZXJ2ZSBhIGluZGljYXJlIGlsIHBhdGggZGVsIGRhdGFiYXNlIGUgaW4gcXVlc3RvIGNhc28gcmljaGllZGUgdW4gaWQgdW5pdm9jbyBkYSBkYXJlIGFsIGRvY3VtZW50b1xyXG4gICAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TaSBwdW8gdXNhcmUgY29sbGVjdGlvbiBlIGZpcmVzdG9yZSBzaSBvY2N1cGVyYSBkaSBhc3NlZ25hcmUgdW4gaWQgdW5pdm9jb1xyXG4gICAgICAgICAgICBlbWFpbDogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQudXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgcGhvdG9VUkw6IHJlc3VsdC51c2VyLnBob3RvVVJMLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBxdWV1ZSA9IHF1ZXJ5KGNvbGxlY3Rpb24oRmlyZXN0b3JlREIsIFwidXNlcnNcIikpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHF1ZXVlKTtcclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2MuZGF0YSgpLmVtYWlsID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICAgIHNldEVyckVtYWlsKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkb2MuZGF0YSgpLnVzZXJuYW1lID09IHVzZXJuYW1lKXtcclxuICAgICAgICAgICAgICAgIHNldEVyclVzZXJuYW1lKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKCFlcnJFbWFpbCB8fCAhZXJyVXNlcm5hbWUpe1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBiZy1bIzM4MzgzOF1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1bMjBweF0gcm91bmRlZC1sZyBiZy1bIzI3MjcyN10gdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs0MDBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gZm9udC1ib2xkIG1iLVsyMHB4XVwiPlNpZ25JbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtHb29nbGVTaWduVXB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLVsjZmZmZmZmXSBweC1bMjBweF0gcHktWzEwcHhdIHRleHQtWyMzMzNdIHJvdW5kZWQtWzEwcHhdIHctWzI1MHB4XSBtYi00XCI+PEltYWdlIHNyYz17R29vZ2xlSW1hZ2V9IGFsdD0nZ29vZ2xlIGltYWdlJyBjbGFzc05hbWU9XCJyb3VuZGVkLVsxMHB4XSBtci1bMTBweF1cIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+U2lnblVwIHdpdGggR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSB3LVsxNTBweF0gbWItNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsYWNrXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB0XCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3ZhcmlhemlvbmVFbWFpbH0gaWQ9XCJlbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXt2YXJpYXppb25lVXNlcm5hbWV9IGlkPVwidXNlcm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB0XCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3ZhcmlhemlvbmVQYXNzd29yZH0gaWQ9XCJwYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1bMTUwcHhdIHJvdW5kZWQtWzIwcHhdIHB5LVs3cHhdIHB4LVsxNXB4XSBiZy13aGl0ZVwiPlNpZ25VcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAge2VyckVtYWlsID8gPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQgZm9udC1ib2xkXCI+VW4gYWNjb3VudCBjb24gcXVlc3RhIGVtYWlsIGVzaXN0ZSBnacOhITwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJVc2VybmFtZSA/IDxwIGNsYXNzTmFtZT1cInRleHQtcmVkIGZvbnQtYm9sZFwiPlVuIGFjY291bnQgY29uIHF1ZXN0byB1c2VybmFtZSBlc2lzdGUgZ2nDoSE8L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsic2lnbkluV2l0aFBvcHVwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aCIsInByb3ZpZGVyIiwiRmlyZXN0b3JlREIiLCJkb2MiLCJzZXREb2MiLCJnZXREb2NzIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiRmlyZXN0b3JlIiwiSW1hZ2UiLCJMaW5rIiwiR29vZ2xlSW1hZ2UiLCJVc2VySW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2lnbkluIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyRW1haWwiLCJzZXRFcnJFbWFpbCIsImVyclVzZXJuYW1lIiwic2V0RXJyVXNlcm5hbWUiLCJ2YXJpYXppb25lRW1haWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYXppb25lVXNlcm5hbWUiLCJ2YXJpYXppb25lUGFzc3dvcmQiLCJHb29nbGVTaWduVXAiLCJyZXN1bHQiLCJkb2NSZWYiLCJ1c2VyIiwidWlkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImhhbmRsZVN1Ym1pdCIsInF1ZXVlIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkYXRhIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImhyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SignUp.jsx\n"));

/***/ })

});