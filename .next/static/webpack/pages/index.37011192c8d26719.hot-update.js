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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resizeWindow */ \"./src/utils/resizeWindow.tsx\");\n/* harmony import */ var _style_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.sass */ \"./src/components/teste-swiper/style.module.sass\");\n/* harmony import */ var _style_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_sass__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tigre/image1.png */ \"./src/components/teste-swiper/images/tigre/image1.png\");\n/* harmony import */ var _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tigre/image2.png */ \"./src/components/teste-swiper/images/tigre/image2.png\");\n/* harmony import */ var _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/tigre/image3.png */ \"./src/components/teste-swiper/images/tigre/image3.png\");\n/* harmony import */ var _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/tigre/image4.png */ \"./src/components/teste-swiper/images/tigre/image4.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import required modules\n\n//import { useEffect, useState } from 'react'\n\n\n\n\n\n\n\n\n\n\nconst Area_Filmes = ()=>{\n    _s();\n    const { width, height } = (0,_utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const imagesTigre = [\n        _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _images_tigre_image3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _images_tigre_image2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _images_tigre_image1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _images_tigre_image4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().containerAreaFilmes),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n                slidesPerView: width ? width / 200 : 3,\n                spaceBetween: 5,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                ],\n                className: \"mySwiper\",\n                id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().swiper),\n                navigation: {\n                    nextEl: \".swiper-button-next\",\n                    prevEl: \".swiper-button-prev\"\n                },\n                loop: true,\n                speed: 1000,\n                autoplay: {\n                    delay: 3000,\n                    disableOnInteraction: false\n                },\n                breakpoints: {\n                    640: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 20\n                    },\n                    1024: {\n                        slidesPerView: 3,\n                        spaceBetween: 30\n                    },\n                    1280: {\n                        slidesPerView: 4,\n                        spaceBetween: 40\n                    },\n                    1366: {\n                        slidesPerView: 5,\n                        spaceBetween: 50\n                    }\n                },\n                children: imagesTigre.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                        id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().slideFilme),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            src: item,\n                            alt: \"Filme\",\n                            id: (_style_module_sass__WEBPACK_IMPORTED_MODULE_9___default().img)\n                        }, void 0, false, {\n                            fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/marcos/projetos-pessoais/siteVip/src/components/teste-swiper/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Area_Filmes, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _utils_resizeWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Area_Filmes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Area_Filmes);\nvar _c;\n$RefreshReg$(_c, \"Area_Filmes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXN0ZS1zd2lwZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZTtBQUVSO0FBRzFELDBCQUEwQjtBQUNhO0FBQ3ZDLDZDQUE2QztBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNsQjtBQUUvQixNQUFNZ0IsY0FBYzs7SUFFbEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHZCwrREFBbUJBO0lBRTdDLE1BQU1lLGNBQWM7UUFDbEJiLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO1FBQ1JDLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO1FBQ1JDLGdFQUFRQTtRQUNSQyxnRUFBUUE7UUFDUkMsZ0VBQVFBO0tBQ1Q7SUFFRCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2hCLHFFQUFlO2tCQUM3Qiw0RUFBQ2U7WUFBSUMsV0FBV2hCLCtFQUF5QjtzQkFDdkMsNEVBQUNMLGdEQUFNQTtnQkFDTHdCLGVBQWVQLFFBQVFBLFFBQVEsTUFBTTtnQkFDckNRLGNBQWM7Z0JBQ2RDLFNBQVM7b0JBQUN2QixzREFBVUE7b0JBQUVELG9EQUFRQTtpQkFBQztnQkFDL0JtQixXQUFVO2dCQUNWTSxJQUFJdEIsa0VBQVk7Z0JBQ2hCd0IsWUFBWTtvQkFDVkMsUUFBUTtvQkFDUkMsUUFBUTtnQkFFVjtnQkFDQUMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsVUFBVTtvQkFDUkMsT0FBTztvQkFDUEMsc0JBQXNCO2dCQUN4QjtnQkFDQUMsYUFBYTtvQkFDWCxLQUFLO3dCQUNIYixlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxLQUFLO3dCQUNIRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxNQUFNO3dCQUNKRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxNQUFNO3dCQUNKRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxNQUFNO3dCQUNKRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtnQkFDRjswQkFLQ04sWUFBWW1CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdEIsOERBQUN2QyxxREFBV0E7d0JBQWEwQixJQUFJdEIsc0VBQWdCO2tDQUMzQyw0RUFBQ1UsbURBQUtBOzRCQUFDMkIsS0FBS0g7NEJBQU1JLEtBQUk7NEJBQVFoQixJQUFJdEIsK0RBQVM7Ozs7Ozt1QkFEM0JtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTOUI7R0F4RU14Qjs7UUFFc0JaLDJEQUFtQkE7OztLQUZ6Q1k7QUEwRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdGUtc3dpcGVyL2luZGV4LnRzeD84ZmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xuXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi91dGlscy9yZXNpemVXaW5kb3cnXG5cblxuLy8gaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLm1vZHVsZS5zYXNzJ1xuLy9pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBwcm9kdXRvMSBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2UxLnBuZ1wiO1xuaW1wb3J0IHByb2R1dG8yIGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTIucG5nXCI7XG5pbXBvcnQgcHJvZHV0bzMgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlMy5wbmdcIjtcbmltcG9ydCBwcm9kdXRvNCBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2U0LnBuZ1wiO1xuaW1wb3J0IHByb2R1dG81IGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTQucG5nXCI7XG5pbXBvcnQgcHJvZHV0bzYgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlMy5wbmdcIjtcbmltcG9ydCBwcm9kdXRvNyBmcm9tIFwiLi9pbWFnZXMvdGlncmUvaW1hZ2UyLnBuZ1wiO1xuaW1wb3J0IHByb2R1dG84IGZyb20gXCIuL2ltYWdlcy90aWdyZS9pbWFnZTEucG5nXCI7XG5pbXBvcnQgcHJvZHV0bzkgZnJvbSBcIi4vaW1hZ2VzL3RpZ3JlL2ltYWdlNC5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBBcmVhX0ZpbG1lcyA9ICgpID0+IHtcblxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCBpbWFnZXNUaWdyZSA9IFtcbiAgICBwcm9kdXRvMSxcbiAgICBwcm9kdXRvMixcbiAgICBwcm9kdXRvMyxcbiAgICBwcm9kdXRvNCxcbiAgICBwcm9kdXRvNSxcbiAgICBwcm9kdXRvNixcbiAgICBwcm9kdXRvNyxcbiAgICBwcm9kdXRvOCxcbiAgICBwcm9kdXRvOSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lckFyZWFGaWxtZXN9PlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17d2lkdGggPyB3aWR0aCAvIDIwMCA6IDN9XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1fVxuICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uLCBBdXRvcGxheV19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXlTd2lwZXJcIlxuICAgICAgICAgIGlkPXtzdHlsZS5zd2lwZXJ9XG4gICAgICAgICAgbmF2aWdhdGlvbj17e1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG5cbiAgICAgICAgICB9fVxuICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgc3BlZWQ9ezEwMDB9XG4gICAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjgwOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTM2Njoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VzVGlncmUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9IGlkPXtzdHlsZS5zbGlkZUZpbG1lfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbX0gYWx0PVwiRmlsbWVcIiBpZD17c3R5bGUuaW1nfSAvPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFyZWFfRmlsbWVzO1xuIl0sIm5hbWVzIjpbIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJOYXZpZ2F0aW9uIiwidXNlV2luZG93RGltZW5zaW9ucyIsInN0eWxlIiwicHJvZHV0bzEiLCJwcm9kdXRvMiIsInByb2R1dG8zIiwicHJvZHV0bzQiLCJwcm9kdXRvNSIsInByb2R1dG82IiwicHJvZHV0bzciLCJwcm9kdXRvOCIsInByb2R1dG85IiwiSW1hZ2UiLCJBcmVhX0ZpbG1lcyIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VzVGlncmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjb250YWluZXJBcmVhRmlsbWVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJpZCIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJsb29wIiwic3BlZWQiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNsaWRlRmlsbWUiLCJzcmMiLCJhbHQiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/teste-swiper/index.tsx\n"));

/***/ })

});