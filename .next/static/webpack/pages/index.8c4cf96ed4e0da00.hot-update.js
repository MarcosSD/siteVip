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

/***/ "./src/components/teste-swiper/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/teste-swiper/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resizeWindow */ \"./src/utils/resizeWindow.tsx\");\n/* harmony import */ var _style_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.sass */ \"./src/components/teste-swiper/style.module.sass\");\n/* harmony import */ var _style_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_sass__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tigre/image1.png */ \"./src/components/teste-swiper/images/tigre/image1.png\");\n/* harmony import */ var _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tigre/image2.png */ \"./src/components/teste-swiper/images/tigre/image2.png\");\n/* harmony import */ var _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/tigre/image3.png */ \"./src/components/teste-swiper/images/tigre/image3.png\");\n/* harmony import */ var _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/tigre/image4.png */ \"./src/components/teste-swiper/images/tigre/image4.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import required modules\n\n//import { useEffect, useState } from 'react'\n\n\n\n\n\n\n\n\n\n\nconst Area_Filmes = ()=>{\n    _s();\n    const { width, height } = (0,_utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const imagesTigre = [\n        _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().containerAreaFilmes),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n                //slidesPerView={width ? width / 200 : 6}\n                spaceBetween: 10,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                ],\n                className: \"mySwiper\",\n                id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().swiper),\n                loop: true,\n                speed: 1000,\n                autoplay: {\n                    delay: 3000,\n                    disableOnInteraction: false\n                },\n                breakpoints: {\n                    640: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 20\n                    }\n                },\n                children: imagesTigre.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                        id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().slideFilme),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            src: item,\n                            alt: \"Filme\",\n                            id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().img)\n                        }, void 0, false, {\n                            fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Area_Filmes, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Area_Filmes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Area_Filmes);\nvar _c;\n$RefreshReg$(_c, \"Area_Filmes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXN0ZS1zd2lwZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZTtBQUVSO0FBRzFELDBCQUEwQjtBQUNhO0FBQ3ZDLDZDQUE2QztBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNsQjtBQUUvQixNQUFNZ0IsY0FBYzs7SUFFbEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHZCwrREFBbUJBO0lBRTdDLE1BQU1lLGNBQWM7UUFDbEJiLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO1FBQ1JDLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO1FBQ1JDLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO0tBQ1Q7SUFFRCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2hCLHFFQUFlO2tCQUM3Qiw0RUFBQ2U7WUFBSUMsV0FBV2hCLCtFQUF5QjtzQkFDdkMsNEVBQUNMLGdEQUFNQTtnQkFDTCx5Q0FBeUM7Z0JBQ3pDd0IsY0FBYztnQkFDZEMsU0FBUztvQkFBQ3RCLHNEQUFVQTtvQkFBRUQsb0RBQVFBO2lCQUFDO2dCQUMvQm1CLFdBQVU7Z0JBQ1ZLLElBQUlyQixrRUFBWTtnQkFDaEJ1QixNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxVQUFVO29CQUNSQyxPQUFPO29CQUNQQyxzQkFBc0I7Z0JBQ3hCO2dCQUNBQyxhQUFhO29CQUNYLEtBQUs7d0JBQ0hDLGVBQWU7d0JBQ2ZWLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hVLGVBQWU7d0JBQ2ZWLGNBQWM7b0JBQ2hCO2dCQWFGOzBCQUtDTCxZQUFZZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQ3BDLHFEQUFXQTt3QkFBYXlCLElBQUlyQixzRUFBZ0I7a0NBQzNDLDRFQUFDVSxtREFBS0E7NEJBQUN3QixLQUFLSDs0QkFBTUksS0FBSTs0QkFBUWQsSUFBSXJCLCtEQUFTOzs7Ozs7dUJBRDNCZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlCO0dBbkVNckI7O1FBRXNCWiwyREFBbUJBOzs7S0FGekNZO0FBcUVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rlc3RlLXN3aXBlci9pbmRleC50c3g/OGZmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IHsgQXV0b3BsYXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcblxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vdXRpbHMvcmVzaXplV2luZG93J1xuXG5cbi8vIGltcG9ydCByZXF1aXJlZCBtb2R1bGVzXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Fzcydcbi8vaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgcHJvZHV0bzEgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlMS5wbmdcIjtcbmltcG9ydCBwcm9kdXRvMiBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2UyLnBuZ1wiO1xuaW1wb3J0IHByb2R1dG8zIGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTMucG5nXCI7XG5pbXBvcnQgcHJvZHV0bzQgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlNC5wbmdcIjtcbmltcG9ydCBwcm9kdXRvNSBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2U0LnBuZ1wiO1xuaW1wb3J0IHByb2R1dG82IGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTMucG5nXCI7XG5pbXBvcnQgcHJvZHV0bzcgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlMi5wbmdcIjtcbmltcG9ydCBwcm9kdXRvOCBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2UxLnBuZ1wiO1xuaW1wb3J0IHByb2R1dG85IGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTQucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgQXJlYV9GaWxtZXMgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgaW1hZ2VzVGlncmUgPSBbXG4gICAgcHJvZHV0bzEsXG4gICAgcHJvZHV0bzIsXG4gICAgcHJvZHV0bzMsXG4gICAgcHJvZHV0bzQsXG4gICAgcHJvZHV0bzUsXG4gICAgcHJvZHV0bzYsXG4gICAgcHJvZHV0bzcsXG4gICAgcHJvZHV0bzgsXG4gICAgcHJvZHV0bzksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJBcmVhRmlsbWVzfT5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIC8vc2xpZGVzUGVyVmlldz17d2lkdGggPyB3aWR0aCAvIDIwMCA6IDZ9XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxMH1cbiAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbiwgQXV0b3BsYXldfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyXCJcbiAgICAgICAgICBpZD17c3R5bGUuc3dpcGVyfVxuICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgc3BlZWQ9ezEwMDB9XG4gICAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIDEwMjQ6IHtcbiAgICAgICAgICAgIC8vICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgIC8vICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAxMjgwOiB7XG4gICAgICAgICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAvLyAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gMTM2Njoge1xuICAgICAgICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICAgICAgLy8gICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VzVGlncmUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9IGlkPXtzdHlsZS5zbGlkZUZpbG1lfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbX0gYWx0PVwiRmlsbWVcIiBpZD17c3R5bGUuaW1nfSAvPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFyZWFfRmlsbWVzO1xuIl0sIm5hbWVzIjpbIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJOYXZpZ2F0aW9uIiwidXNlV2luZG93RGltZW5zaW9ucyIsInN0eWxlIiwicHJvZHV0bzEiLCJwcm9kdXRvMiIsInByb2R1dG8zIiwicHJvZHV0bzQiLCJwcm9kdXRvNSIsInByb2R1dG82IiwicHJvZHV0bzciLCJwcm9kdXRvOCIsInByb2R1dG85IiwiSW1hZ2UiLCJBcmVhX0ZpbG1lcyIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VzVGlncmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjb250YWluZXJBcmVhRmlsbWVzIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsImlkIiwic3dpcGVyIiwibG9vcCIsInNwZWVkIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpZGVGaWxtZSIsInNyYyIsImFsdCIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/teste-swiper/index.tsx\n"));

/***/ })

});