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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1eaf224d7371\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzkwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFlYWYyMjRkNzM3MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/achievements.tsx":
/*!*****************************************!*\
  !*** ./src/components/achievements.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _sectionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionWrapper */ \"(app-pages-browser)/./src/components/sectionWrapper.tsx\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./src/utils/motion.ts\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./src/constants/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst FeedbackCard = (param)=>/*#__PURE__*/ {\n    let { index, achievement, name, designation, image, link } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"down\", \"spring\", index * 0.5, 0.75),\n        className: \"relative rounded-3xl bg-text p-10 shadow-card xs:w-[320px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-10 top-10 flex justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>window.location.href = \"\".concat(link),\n                    onKeyDown: (event)=>{\n                        if (event.key === \"Enter\") {\n                            window.location.href = \"\".concat(link);\n                        }\n                    },\n                    className: \"m-1 flex h-7 w-7 cursor-pointer items-center justify-center text-background transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary hover:opacity-100 focus:-translate-y-[2px] focus:text-primary focus:opacity-100\",\n                    tabIndex: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        height: \"1em\",\n                        viewBox: \"0 0 512 512\",\n                        className: \"text-current\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 10\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[48px] font-black text-background\"\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[18px] tracking-wider text-background\",\n                        children: achievement\n                    }, void 0, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-7 flex items-center justify-between gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[16px] font-medium text-background\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-accent\",\n                                                children: \"@\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            \" \",\n                                            name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 text-[12px] text-background opacity-75\",\n                                        children: designation\n                                    }, void 0, false, {\n                                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: image,\n                                alt: \"Feedback by \".concat(name),\n                                className: \"h-10 w-10 rounded-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c = FeedbackCard;\nconst Feedbacks = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pointer-events-auto mt-12 rounded-[20px] bg-secondary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"padding min-h-[300px] rounded-2xl bg-gradient-to-b from-primary to-accent md:bg-gradient-to-r\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"section-subtitle\",\n                            children: \"Some Awards and Achievements\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"section-title pointer-events-none\",\n                            children: \"Hackathon Wins\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"paddingX -mt-20 flex flex-wrap gap-7 pb-14\",\n                children: _constants_index__WEBPACK_IMPORTED_MODULE_3__.achievements.map((achievement, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeedbackCard, {\n                        index: index,\n                        ...achievement\n                    }, achievement.name, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Feedbacks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,_sectionWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Feedbacks, \"\"));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FeedbackCard\");\n$RefreshReg$(_c1, \"Feedbacks\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjaGlldmVtZW50cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBQ0g7QUFDUTtBQUNKO0FBQ0U7QUFFcEQsTUFBTU0sZUFBZTtRQUFDLEVBQ3BCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsSUFBSSxFQVFMO1dBQ0MsOERBQUNaLGlEQUFNQSxDQUFDYSxHQUFHO1FBQUNDLFVBQVVaLHFEQUFNQSxDQUFDLFFBQVEsVUFBVUssUUFBUSxLQUFLO1FBQW1CUSxXQUFVOzswQkFDdkYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFDQ0csU0FBUyxJQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxHQUFRLE9BQUxQO29CQUMxQ1EsV0FBVyxDQUFDQzt3QkFDVixJQUFJQSxNQUFNQyxHQUFHLEtBQUssU0FBUzs0QkFDekJMLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLEdBQVEsT0FBTFA7d0JBQzVCO29CQUNGO29CQUNBRyxXQUFVO29CQUNWUSxVQUFVOzhCQUVULDRFQUFDQzt3QkFBSUMsUUFBTzt3QkFBTUMsU0FBUTt3QkFBY1gsV0FBVTtrQ0FDekMsNEVBQUNZOzRCQUNDQyxHQUFFOzRCQUNGQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDQztnQkFBRWYsV0FBVTs7Ozs7OzBCQUViLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNlO3dCQUFFZixXQUFVO2tDQUE4Q1A7Ozs7OztrQ0FFM0QsOERBQUNLO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDZTt3Q0FBRWYsV0FBVTs7MERBQ1gsOERBQUNnQjtnREFBS2hCLFdBQVU7MERBQWM7Ozs7Ozs0Q0FBUTs0Q0FBRU47Ozs7Ozs7a0RBRTFDLDhEQUFDcUI7d0NBQUVmLFdBQVU7a0RBQStDTDs7Ozs7Ozs7Ozs7OzBDQUc5RCw4REFBQ0wsbURBQUtBO2dDQUFDMkIsS0FBS3JCO2dDQUFPc0IsS0FBSyxlQUFvQixPQUFMeEI7Z0NBQVFNLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUduRDtLQXBEUlQ7QUF1RE4sTUFBTTRCLFlBQVk7SUFDaEIscUJBQ0UsOERBQUNyQjtRQUFJRSxXQUFVOzswQkFDYiw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNmLGlEQUFNQSxDQUFDYSxHQUFHO29CQUFDQyxVQUFVWCwwREFBV0E7O3NDQUMvQiw4REFBQzJCOzRCQUFFZixXQUFVO3NDQUFtQjs7Ozs7O3NDQUNoQyw4REFBQ29COzRCQUFHcEIsV0FBVTtzQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd0RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1pYLDBEQUFZQSxDQUFDZ0MsR0FBRyxDQUFDLENBQUM1QixhQUFhRCxzQkFDOUIsOERBQUNEO3dCQUFvQ0MsT0FBT0E7d0JBQVEsR0FBR0MsV0FBVzt1QkFBL0NBLFlBQVlDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7TUFoQk15QjtBQWtCTiwrREFBZSxNQUFBakMsMkRBQWNBLENBQUNpQyxXQUFXLEtBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWNoaWV2ZW1lbnRzLnRzeD80ODMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhcmlhbnRzLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBTZWN0aW9uV3JhcHBlciBmcm9tICcuL3NlY3Rpb25XcmFwcGVyJztcbmltcG9ydCB7IGZhZGVJbiwgdGV4dFZhcmlhbnQgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuaW1wb3J0IHsgYWNoaWV2ZW1lbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgRmVlZGJhY2tDYXJkID0gKHtcbiAgaW5kZXgsXG4gIGFjaGlldmVtZW50LFxuICBuYW1lLFxuICBkZXNpZ25hdGlvbixcbiAgaW1hZ2UsXG4gIGxpbmssXG59OiB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjaGlldmVtZW50OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzaWduYXRpb246IHN0cmluZztcbiAgaW1hZ2U6IFN0YXRpY0ltYWdlRGF0YTtcbiAgbGluazogc3RyaW5nO1xufSkgPT4gKFxuICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZmFkZUluKCdkb3duJywgJ3NwcmluZycsIGluZGV4ICogMC41LCAwLjc1KSBhcyBWYXJpYW50c30gY2xhc3NOYW1lPSdyZWxhdGl2ZSByb3VuZGVkLTN4bCBiZy10ZXh0IHAtMTAgc2hhZG93LWNhcmQgeHM6dy1bMzIwcHhdJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMTAgdG9wLTEwIGZsZXgganVzdGlmeS1lbmQnPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtsaW5rfWApfVxuICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bGlua31gO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdtLTEgZmxleCBoLTcgdy03IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJhY2tncm91bmQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGhvdmVyOi10cmFuc2xhdGUteS1bMnB4XSBob3Zlcjp0ZXh0LXByaW1hcnkgaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6LXRyYW5zbGF0ZS15LVsycHhdIGZvY3VzOnRleHQtcHJpbWFyeSBmb2N1czpvcGFjaXR5LTEwMCdcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICA+XG4gICAgICAgICA8c3ZnIGhlaWdodD0nMWVtJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgY2xhc3NOYW1lPSd0ZXh0LWN1cnJlbnQnPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD0nTTMyMCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMyaDgyLjdMMjAxLjQgMjY1LjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDBMNDQ4IDEwOS4zVjE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMySDMyMHpNODAgMzJDMzUuOCAzMiAwIDY3LjggMCAxMTJWNDMyYzAgNDQuMiAzNS44IDgwIDgwIDgwSDQwMGM0NC4yIDAgODAtMzUuOCA4MC04MFYzMjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJWNDMyYzAgOC44LTcuMiAxNi0xNiAxNkg4MGMtOC44IDAtMTYtNy4yLTE2LTE2VjExMmMwLTguOCA3LjItMTYgMTYtMTZIMTkyYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDgweidcbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVs0OHB4XSBmb250LWJsYWNrIHRleHQtYmFja2dyb3VuZCc+PC9wPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTEnPlxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxOHB4XSB0cmFja2luZy13aWRlciB0ZXh0LWJhY2tncm91bmQnPnthY2hpZXZlbWVudH08L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC03IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBmbGV4LWNvbCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxNnB4XSBmb250LW1lZGl1bSB0ZXh0LWJhY2tncm91bmQnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWFjY2VudCc+QDwvc3Bhbj4ge25hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LVsxMnB4XSB0ZXh0LWJhY2tncm91bmQgb3BhY2l0eS03NSc+e2Rlc2lnbmF0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17YEZlZWRiYWNrIGJ5ICR7bmFtZX1gfSBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmNvbnN0IEZlZWRiYWNrcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtYXV0byBtdC0xMiByb3VuZGVkLVsyMHB4XSBiZy1zZWNvbmRhcnknPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZGRpbmcgbWluLWgtWzMwMHB4XSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeSB0by1hY2NlbnQgbWQ6YmctZ3JhZGllbnQtdG8tcic+XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXt0ZXh0VmFyaWFudCgpIGFzIFZhcmlhbnRzfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NlY3Rpb24tc3VidGl0bGUnPlNvbWUgQXdhcmRzIGFuZCBBY2hpZXZlbWVudHM8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSBwb2ludGVyLWV2ZW50cy1ub25lJz5IYWNrYXRob24gV2luczwvaDI+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZGRpbmdYIC1tdC0yMCBmbGV4IGZsZXgtd3JhcCBnYXAtNyBwYi0xNCc+XG4gICAgICAgIHthY2hpZXZlbWVudHMubWFwKChhY2hpZXZlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8RmVlZGJhY2tDYXJkIGtleT17YWNoaWV2ZW1lbnQubmFtZX0gaW5kZXg9e2luZGV4fSB7Li4uYWNoaWV2ZW1lbnR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uV3JhcHBlcihGZWVkYmFja3MsICcnKTsiXSwibmFtZXMiOlsibW90aW9uIiwiU2VjdGlvbldyYXBwZXIiLCJmYWRlSW4iLCJ0ZXh0VmFyaWFudCIsImFjaGlldmVtZW50cyIsIkltYWdlIiwiRmVlZGJhY2tDYXJkIiwiaW5kZXgiLCJhY2hpZXZlbWVudCIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsImltYWdlIiwibGluayIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5IiwidGFiSW5kZXgiLCJzdmciLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJmaWxsIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJGZWVkYmFja3MiLCJoMiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/achievements.tsx\n"));

/***/ })

});