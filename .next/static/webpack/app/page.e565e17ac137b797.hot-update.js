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

/***/ "(app-pages-browser)/./components/GeneratePHPCode.jsx":
/*!****************************************!*\
  !*** ./components/GeneratePHPCode.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst GeneratePHPCode = (param)=>{\n    let { classes, relations } = param;\n    const generatePHPCode = ()=>{\n        let code = \"<?php\\n\\n\";\n        classes.forEach((cls)=>{\n            code += \"class \".concat(cls.name, \" {\\n\");\n            const attributes = cls.attributes || []; // Ensure attributes is defined\n            attributes.forEach((attr)=>{\n                code += \"    public $\".concat(attr.name, \";\\n\");\n            });\n            code += \"}\\n\\n\";\n        });\n        // Add relations logic if applicable\n        return code;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-bold mb-4\",\n                children: \"Code PHP\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ABDELLAH\\\\Desktop\\\\EMSI\\\\Uml\\\\DIAGRAMME-UML-v2\\\\components\\\\GeneratePHPCode.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"bg-gray-100 p-4 rounded-md whitespace-pre-wrap text-sm overflow-auto max-h-96\",\n                children: generatePHPCode()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ABDELLAH\\\\Desktop\\\\EMSI\\\\Uml\\\\DIAGRAMME-UML-v2\\\\components\\\\GeneratePHPCode.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ABDELLAH\\\\Desktop\\\\EMSI\\\\Uml\\\\DIAGRAMME-UML-v2\\\\components\\\\GeneratePHPCode.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_c = GeneratePHPCode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratePHPCode);\nvar _c;\n$RefreshReg$(_c, \"GeneratePHPCode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR2VuZXJhdGVQSFBDb2RlLmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxrQkFBa0I7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRTtJQUMzQyxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSUMsT0FBTztRQUNYSCxRQUFRSSxPQUFPLENBQUMsQ0FBQ0M7WUFDZkYsUUFBUSxTQUFrQixPQUFURSxJQUFJQyxJQUFJLEVBQUM7WUFDMUIsTUFBTUMsYUFBYUYsSUFBSUUsVUFBVSxJQUFJLEVBQUUsRUFBRSwrQkFBK0I7WUFDeEVBLFdBQVdILE9BQU8sQ0FBQyxDQUFDSTtnQkFDbEJMLFFBQVEsZUFBeUIsT0FBVkssS0FBS0YsSUFBSSxFQUFDO1lBQ25DO1lBQ0FILFFBQVE7UUFDVjtRQUNBLG9DQUFvQztRQUNwQyxPQUFPQTtJQUNUO0lBRUEscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQXlCOzs7Ozs7MEJBQ3ZDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlQ7Ozs7Ozs7Ozs7OztBQUlUO0tBdkJJSDtBQXlCSiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dlbmVyYXRlUEhQQ29kZS5qc3g/MDViZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHZW5lcmF0ZVBIUENvZGUgPSAoeyBjbGFzc2VzLCByZWxhdGlvbnMgfSkgPT4ge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVQSFBDb2RlID0gKCkgPT4ge1xyXG4gICAgICBsZXQgY29kZSA9IFwiPD9waHBcXG5cXG5cIjtcclxuICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBjb2RlICs9IGBjbGFzcyAke2Nscy5uYW1lfSB7XFxuYDtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gY2xzLmF0dHJpYnV0ZXMgfHwgW107IC8vIEVuc3VyZSBhdHRyaWJ1dGVzIGlzIGRlZmluZWRcclxuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgIGNvZGUgKz0gYCAgICBwdWJsaWMgJCR7YXR0ci5uYW1lfTtcXG5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvZGUgKz0gXCJ9XFxuXFxuXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBBZGQgcmVsYXRpb25zIGxvZ2ljIGlmIGFwcGxpY2FibGVcclxuICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItNFwiPkNvZGUgUEhQPC9oMj5cclxuICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLW1kIHdoaXRlc3BhY2UtcHJlLXdyYXAgdGV4dC1zbSBvdmVyZmxvdy1hdXRvIG1heC1oLTk2XCI+XHJcbiAgICAgICAgICB7Z2VuZXJhdGVQSFBDb2RlKCl9XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlUEhQQ29kZTtcclxuICAiXSwibmFtZXMiOlsiR2VuZXJhdGVQSFBDb2RlIiwiY2xhc3NlcyIsInJlbGF0aW9ucyIsImdlbmVyYXRlUEhQQ29kZSIsImNvZGUiLCJmb3JFYWNoIiwiY2xzIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/GeneratePHPCode.jsx\n"));

/***/ })

});