"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('gray200', 'whiteAlpha.900');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? 'glassTeal' : undefined,\n            color: active ? '#202023' : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/josephbrown/Desktop/MyApps/portfolio_website/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/josephbrown/Desktop/MyApps/portfolio_website/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this));\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#ffffff40', '#20202380'),\n        style: {\n            backdropFilter: 'blur(10px)'\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\"\n        }, void 0, false, {\n            fileName: \"/Users/josephbrown/Desktop/MyApps/portfolio_website/components/navbar.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/josephbrown/Desktop/MyApps/portfolio_website/components/navbar.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this));\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDTztBQWNQO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEdBQUssQ0FBQ2UsUUFBUSxHQUFHLFFBQVEsUUFBcUIsQ0FBQztRQUEzQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3BDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHRixJQUFJLEtBQUtELElBQUk7SUFDNUIsR0FBSyxDQUFDSSxhQUFhLEdBQUdQLG1FQUFpQixDQUFFLENBQVMsVUFBRyxDQUFnQjtJQUNyRSxNQUFNLDZFQUNEWixrREFBUTtRQUFDZSxJQUFJLEVBQUVBLElBQUk7OEZBQ2ZaLGtEQUFJO1lBQ0xpQixDQUFDLEVBQUUsQ0FBQztZQUNKQyxFQUFFLEVBQUVILE1BQU0sR0FBRyxDQUFXLGFBQUdJLFNBQVM7WUFDcENDLEtBQUssRUFBRUwsTUFBTSxHQUFHLENBQVMsV0FBR0MsYUFBYTtzQkFFcENGLFFBQVE7Ozs7Ozs7Ozs7O0FBSXpCLENBQUM7R0FkS0gsUUFBUTs7UUFFWUYsK0RBQWlCOzs7S0FGckNFLFFBQVE7QUFnQmQsR0FBSyxDQUFDVSxNQUFNLEdBQUdDLFFBQVEsQ0FBUkEsS0FBSyxFQUFHLENBQUM7O0lBQ3BCLEdBQUssQ0FBR1QsSUFBSSxHQUFLUyxLQUFLLENBQWRULElBQUk7SUFFWixNQUFNLDZFQUNEZCxpREFBRztRQUNKd0IsUUFBUSxFQUFDLENBQU87UUFDaEJDLEVBQUUsRUFBQyxDQUFLO1FBQ1JDLENBQUMsRUFBQyxDQUFNO1FBQ1JQLEVBQUUsRUFBRVQsbUVBQWlCLENBQUMsQ0FBVyxZQUFFLENBQVc7UUFDOUNpQixLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsY0FBYyxFQUFFLENBQVk7UUFBQSxDQUFDO1FBQ3JDQyxNQUFNLEVBQUUsQ0FBQztPQUNMTixLQUFLOzhGQUVKeEIsdURBQVM7WUFBQytCLE9BQU8sRUFBQyxDQUFNO1lBQUNaLENBQUMsRUFBRSxDQUFDO1lBQUVhLElBQUksRUFBQyxDQUFjO1lBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7OztBQUszRSxDQUFDO0lBbEJLVixNQUFNOztRQVFBWiwrREFBaUI7OztNQVJ2QlksTUFBTTtBQW1CWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBCb3gsXG4gICAgTGluayxcbiAgICBTdGFjayxcbiAgICBIZWFkaW5nLFxuICAgIEZsZXgsXG4gICAgTWVudSxcbiAgICBNZW51SXRlbSxcbiAgICBNZW51TGlzdCxcbiAgICBNZW51QnV0dG9uLFxuICAgIEljb25CdXR0b24sXG4gICAgdXNlQ29sb3JNb2RlVmFsdWVcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEh1bWJ1cmdlckljb259IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSggJ2dyYXkyMDAnICwgJ3doaXRlQWxwaGEuOTAwJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgIGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+e1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cbiAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCknfX1cbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgZGlzcGxheT1cImZsZXhcIiBwPXsyfSBtYXhXPVwiY29udGFpbmVyLm1kXCIgd3JhcD1cIndyYXBcIj5cblxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkh1bWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZiYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});