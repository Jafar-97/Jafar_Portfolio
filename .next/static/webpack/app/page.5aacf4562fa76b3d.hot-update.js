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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"75b9ccec0aa0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzkwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjc1YjljY2VjMGFhMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/achievements.tsx":
/*!*****************************************!*\
  !*** ./src/components/achievements.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _sectionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionWrapper */ \"(app-pages-browser)/./src/components/sectionWrapper.tsx\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./src/utils/motion.ts\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./src/constants/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst FeedbackCard = (param)=>/*#__PURE__*/ {\n    let { index, achievement, name, designation, image, link } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"down\", \"spring\", index * 0.5, 0.75),\n        className: \"relative rounded-3xl bg-text p-10 shadow-card xs:w-[320px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-10 top-10 flex justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>window.location.href = \"\".concat(link),\n                    onKeyDown: (event)=>{\n                        if (event.key === \"Enter\") {\n                            window.location.href = \"\".concat(link);\n                        }\n                    },\n                    className: \"m-1 flex h-7 w-7 cursor-pointer items-center justify-center text-background transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary hover:opacity-100 focus:-translate-y-[2px] focus:text-primary focus:opacity-100\",\n                    tabIndex: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        height: \"1em\",\n                        viewBox: \"0 0 512 512\",\n                        className: \"text-current\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 10\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[48px] font-black text-background\",\n                children: \"`\"\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[18px] tracking-wider text-background\",\n                        children: achievement\n                    }, void 0, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-7 flex items-center justify-between gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[16px] font-medium text-background\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-accent\",\n                                                children: \"@\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            \" \",\n                                            name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 text-[12px] text-background opacity-75\",\n                                        children: designation\n                                    }, void 0, false, {\n                                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: image,\n                                alt: \"Feedback by \".concat(name),\n                                className: \"h-10 w-10 rounded-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c = FeedbackCard;\nconst Feedbacks = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pointer-events-auto mt-12 rounded-[20px] bg-secondary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"padding min-h-[300px] rounded-2xl bg-gradient-to-b from-primary to-accent md:bg-gradient-to-r\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"section-subtitle\",\n                            children: \"Some Awards and Achievements\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"section-title pointer-events-none\",\n                            children: \"Hackathon Wins\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"paddingX -mt-20 flex flex-wrap gap-7 pb-14\",\n                children: _constants_index__WEBPACK_IMPORTED_MODULE_3__.achievements.map((achievement, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeedbackCard, {\n                        index: index,\n                        ...achievement\n                    }, achievement.name, false, {\n                        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darshee/Documents/Personal Projects/Portfolio/src/components/achievements.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Feedbacks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,_sectionWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Feedbacks, \"\"));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FeedbackCard\");\n$RefreshReg$(_c1, \"Feedbacks\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjaGlldmVtZW50cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBQ0g7QUFDUTtBQUNKO0FBQ0U7QUFFcEQsTUFBTU0sZUFBZTtRQUFDLEVBQ3BCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsSUFBSSxFQVFMO1dBQ0MsOERBQUNaLGlEQUFNQSxDQUFDYSxHQUFHO1FBQUNDLFVBQVVaLHFEQUFNQSxDQUFDLFFBQVEsVUFBVUssUUFBUSxLQUFLO1FBQW1CUSxXQUFVOzswQkFDdkYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFDQ0csU0FBUyxJQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxHQUFRLE9BQUxQO29CQUMxQ1EsV0FBVyxDQUFDQzt3QkFDVixJQUFJQSxNQUFNQyxHQUFHLEtBQUssU0FBUzs0QkFDekJMLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLEdBQVEsT0FBTFA7d0JBQzVCO29CQUNGO29CQUNBRyxXQUFVO29CQUNWUSxVQUFVOzhCQUVULDRFQUFDQzt3QkFBSUMsUUFBTzt3QkFBTUMsU0FBUTt3QkFBY1gsV0FBVTtrQ0FDekMsNEVBQUNZOzRCQUNDQyxHQUFFOzRCQUNGQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDQztnQkFBRWYsV0FBVTswQkFBeUM7Ozs7OzswQkFFdEQsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ2U7d0JBQUVmLFdBQVU7a0NBQThDUDs7Ozs7O2tDQUUzRCw4REFBQ0s7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDRjtnQ0FBSUUsV0FBVTs7a0RBQ2IsOERBQUNlO3dDQUFFZixXQUFVOzswREFDWCw4REFBQ2dCO2dEQUFLaEIsV0FBVTswREFBYzs7Ozs7OzRDQUFROzRDQUFFTjs7Ozs7OztrREFFMUMsOERBQUNxQjt3Q0FBRWYsV0FBVTtrREFBK0NMOzs7Ozs7Ozs7Ozs7MENBRzlELDhEQUFDTCxtREFBS0E7Z0NBQUMyQixLQUFLckI7Z0NBQU9zQixLQUFLLGVBQW9CLE9BQUx4QjtnQ0FBUU0sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25EO0tBcERSVDtBQXVETixNQUFNNEIsWUFBWTtJQUNoQixxQkFDRSw4REFBQ3JCO1FBQUlFLFdBQVU7OzBCQUNiLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ2YsaURBQU1BLENBQUNhLEdBQUc7b0JBQUNDLFVBQVVYLDBEQUFXQTs7c0NBQy9CLDhEQUFDMkI7NEJBQUVmLFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2hDLDhEQUFDb0I7NEJBQUdwQixXQUFVO3NDQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDWlgsMERBQVlBLENBQUNnQyxHQUFHLENBQUMsQ0FBQzVCLGFBQWFELHNCQUM5Qiw4REFBQ0Q7d0JBQW9DQyxPQUFPQTt3QkFBUSxHQUFHQyxXQUFXO3VCQUEvQ0EsWUFBWUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QztNQWhCTXlCO0FBa0JOLCtEQUFlLE1BQUFqQywyREFBY0EsQ0FBQ2lDLFdBQVcsS0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2hpZXZlbWVudHMudHN4PzQ4MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFyaWFudHMsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25XcmFwcGVyIGZyb20gJy4vc2VjdGlvbldyYXBwZXInO1xuaW1wb3J0IHsgZmFkZUluLCB0ZXh0VmFyaWFudCB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5pbXBvcnQgeyBhY2hpZXZlbWVudHMgfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IEltYWdlLCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBGZWVkYmFja0NhcmQgPSAoe1xuICBpbmRleCxcbiAgYWNoaWV2ZW1lbnQsXG4gIG5hbWUsXG4gIGRlc2lnbmF0aW9uLFxuICBpbWFnZSxcbiAgbGluayxcbn06IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWNoaWV2ZW1lbnQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNpZ25hdGlvbjogc3RyaW5nO1xuICBpbWFnZTogU3RhdGljSW1hZ2VEYXRhO1xuICBsaW5rOiBzdHJpbmc7XG59KSA9PiAoXG4gIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW4oJ2Rvd24nLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNzUpIGFzIFZhcmlhbnRzfSBjbGFzc05hbWU9J3JlbGF0aXZlIHJvdW5kZWQtM3hsIGJnLXRleHQgcC0xMCBzaGFkb3ctY2FyZCB4czp3LVszMjBweF0nPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0xMCB0b3AtMTAgZmxleCBqdXN0aWZ5LWVuZCc+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xpbmt9YCl9XG4gICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtsaW5rfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J20tMSBmbGV4IGgtNyB3LTcgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LVsycHhdIGhvdmVyOnRleHQtcHJpbWFyeSBob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czotdHJhbnNsYXRlLXktWzJweF0gZm9jdXM6dGV4dC1wcmltYXJ5IGZvY3VzOm9wYWNpdHktMTAwJ1xuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgID5cbiAgICAgICAgIDxzdmcgaGVpZ2h0PScxZW0nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyBjbGFzc05hbWU9J3RleHQtY3VycmVudCc+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPSdNMzIwIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJoODIuN0wyMDEuNCAyNjUuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEw0NDggMTA5LjNWMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJWMzJjMC0xNy43LTE0LjMtMzItMzItMzJIMzIwek04MCAzMkMzNS44IDMyIDAgNjcuOCAwIDExMlY0MzJjMCA0NC4yIDM1LjggODAgODAgODBINDAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwVjMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMlY0MzJjMCA4LjgtNy4yIDE2LTE2IDE2SDgwYy04LjggMC0xNi03LjItMTYtMTZWMTEyYzAtOC44IDcuMi0xNiAxNi0xNkgxOTJjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIODB6J1xuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8cCBjbGFzc05hbWU9J3RleHQtWzQ4cHhdIGZvbnQtYmxhY2sgdGV4dC1iYWNrZ3JvdW5kJz4mIzk2OzwvcD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xJz5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bMThweF0gdHJhY2tpbmctd2lkZXIgdGV4dC1iYWNrZ3JvdW5kJz57YWNoaWV2ZW1lbnR9PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LTEgZmxleC1jb2wnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bMTZweF0gZm9udC1tZWRpdW0gdGV4dC1iYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1hY2NlbnQnPkA8L3NwYW4+IHtuYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTEgdGV4dC1bMTJweF0gdGV4dC1iYWNrZ3JvdW5kIG9wYWNpdHktNzUnPntkZXNpZ25hdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e2BGZWVkYmFjayBieSAke25hbWV9YH0gY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlcicgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5jb25zdCBGZWVkYmFja3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BvaW50ZXItZXZlbnRzLWF1dG8gbXQtMTIgcm91bmRlZC1bMjBweF0gYmctc2Vjb25kYXJ5Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWRkaW5nIG1pbi1oLVszMDBweF0gcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXByaW1hcnkgdG8tYWNjZW50IG1kOmJnLWdyYWRpZW50LXRvLXInPlxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17dGV4dFZhcmlhbnQoKSBhcyBWYXJpYW50c30+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzZWN0aW9uLXN1YnRpdGxlJz5Tb21lIEF3YXJkcyBhbmQgQWNoaWV2ZW1lbnRzPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUgcG9pbnRlci1ldmVudHMtbm9uZSc+SGFja2F0aG9uIFdpbnM8L2gyPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWRkaW5nWCAtbXQtMjAgZmxleCBmbGV4LXdyYXAgZ2FwLTcgcGItMTQnPlxuICAgICAgICB7YWNoaWV2ZW1lbnRzLm1hcCgoYWNoaWV2ZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEZlZWRiYWNrQ2FyZCBrZXk9e2FjaGlldmVtZW50Lm5hbWV9IGluZGV4PXtpbmRleH0gey4uLmFjaGlldmVtZW50fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldyYXBwZXIoRmVlZGJhY2tzLCAnJyk7Il0sIm5hbWVzIjpbIm1vdGlvbiIsIlNlY3Rpb25XcmFwcGVyIiwiZmFkZUluIiwidGV4dFZhcmlhbnQiLCJhY2hpZXZlbWVudHMiLCJJbWFnZSIsIkZlZWRiYWNrQ2FyZCIsImluZGV4IiwiYWNoaWV2ZW1lbnQiLCJuYW1lIiwiZGVzaWduYXRpb24iLCJpbWFnZSIsImxpbmsiLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvbktleURvd24iLCJldmVudCIsImtleSIsInRhYkluZGV4Iiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsInBhdGgiLCJkIiwiZmlsbCIsInAiLCJzcGFuIiwic3JjIiwiYWx0IiwiRmVlZGJhY2tzIiwiaDIiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/achievements.tsx\n"));

/***/ })

});