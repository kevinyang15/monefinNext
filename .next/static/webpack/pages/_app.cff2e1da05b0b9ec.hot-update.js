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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useWindowProps */ \"./hooks/useWindowProps.ts\");\n/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopBar */ \"./components/TopBar.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        '\\n  body {\\n    font-family: \"Poppins\", sans-serif;\\n    background: #fafafa;\\n    padding: 0;\\n    margin: 0;\\n    background-color: #bea9ed;\\n    overflow-x: hidden;\\n  }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  overflow-x: hidden;\\n  background-color:red\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  width: 100%;\\n  border-radius: 1px;\\n\\n\\n  @media (min-width: 767px) {\\n    width: 70%;\\n    border-radius: 15px;\\n  }\\n\\n  @media (max-width: 320px) {\\n    width: 100%;\\n    border-radius: 15px;\\n  }\\n  @media (min-width: 1200px) {\\n    width: 40%;\\n    border-radius: 15px;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n// pages/_app.tsx\n\n\n\n\n // Importa los estilos de Tailwind CSS\nvar _s = $RefreshSig$();\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.createGlobalStyle)(_templateObject());\n_c = GlobalStyle;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Wrapper;\nvar ScreenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), function(props) {\n    return props.theme.colors.basic100;\n});\n_c2 = ScreenWrapper;\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var windowProps = (0,_hooks_useWindowProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDarkMode = ref[0], setIsDarkMode = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var matchDark = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        setIsDarkMode(matchDark.matches);\n        var listener = function(e) {\n            setIsDarkMode(e.matches);\n        };\n        matchDark.addEventListener(\"change\", listener);\n        return function() {\n            matchDark.removeEventListener(\"change\", listener);\n        };\n    }, []);\n    var theme = {\n        colors: {\n            primary: \"#4EEC91\",\n            background: isDarkMode ? \"#BDA1EC\" : \"#BDA1EC\",\n            basic100: isDarkMode ? \"#fff\" : \"#fff\",\n            basic150: \"#fafafa\",\n            basic300: \"#d1d1d1\",\n            basic400: \"#999\",\n            basic500: \"#666\",\n            basic1000: \"#3d3d3d\",\n            basic2000: \"#111827\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n                height: windowProps.height,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScreenWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kevin\\\\OneDrive\\\\Escritorio\\\\monefin-form-v2\\\\pages\\\\_app.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"Hlj9V6LMXxaOhIgfiTk4qTWrhNE=\", false, function() {\n    return [\n        _hooks_useWindowProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c3 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"ScreenWrapper\");\n$RefreshReg$(_c3, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsaUJBQWlCO0FBQ2tDO0FBQzBCO0FBQ3hCO0FBQ1g7QUFFWCxDQUFDLHNDQUFzQzs7QUFFdEUsSUFBTVEsV0FBVyxHQUFHSixvRUFBaUIsbUJBU3BDO0FBVEtJLEtBQUFBLFdBQVc7QUFXakIsSUFBTUMsT0FBTyxHQUFHTiw2REFBVSxvQkFRekI7QUFSS00sTUFBQUEsT0FBTztBQVViLElBQU1FLGFBQWEsR0FBR1IsNkRBQVUscUJBQ1YsU0FBQ1MsS0FBSztXQUFLQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRO0NBQUEsQ0FrQjNEO0FBbkJLSixNQUFBQSxhQUFhO0FBcUJuQixJQUFNSyxHQUFHLEdBQUcsZ0JBQXFEO1FBQWxEQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUNqQyxJQUFNQyxXQUFXLEdBQUdiLGlFQUFjLEVBQUU7SUFDcEMsSUFBb0NKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFwRHJELFVBb0RtQixHQUFtQkEsR0FBZSxHQUFsQyxFQXBEbkIsYUFvRGtDLEdBQUlBLEdBQWUsR0FBbkI7SUFFaENELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1xQixTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDO1FBQ25FSCxhQUFhLENBQUNDLFNBQVMsQ0FBQ0csT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLENBQXNCLEVBQUs7WUFDM0NOLGFBQWEsQ0FBQ00sQ0FBQyxDQUFDRixPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUNESCxTQUFTLENBQUNNLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDLENBQUM7UUFDL0MsT0FBTyxXQUFNO1lBQ1hKLFNBQVMsQ0FBQ08sbUJBQW1CLENBQUMsUUFBUSxFQUFFSCxRQUFRLENBQUMsQ0FBQztTQUNuRCxDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1iLEtBQUssR0FBRztRQUNaQyxNQUFNLEVBQUU7WUFDTmdCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCQyxVQUFVLEVBQUVYLFVBQVUsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUM5Q0wsUUFBUSxFQUFFSyxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDdENZLFFBQVEsRUFBRSxTQUFTO1lBQ25CQyxRQUFRLEVBQUUsU0FBUztZQUNuQkMsUUFBUSxFQUFFLE1BQU07WUFDaEJDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxTQUFTLEVBQUUsU0FBUztZQUNwQkMsU0FBUyxFQUFFLFNBQVM7U0FDckI7S0FDRjtJQUVELHFCQUNFLDhEQUFDaEMsNERBQWE7UUFBQ1EsS0FBSyxFQUFFQSxLQUFLOzswQkFDekIsOERBQUNMLFdBQVc7Ozs7cUJBQUc7MEJBQ2YsOERBQUNDLE9BQU87Z0JBQUM2QixNQUFNLEVBQUVuQixXQUFXLENBQUNtQixNQUFNOztrQ0FDakMsOERBQUMvQiwwREFBTTs7Ozs2QkFBRztrQ0FDViw4REFBQ0ksYUFBYTtrQ0FDWiw0RUFBQ00sU0FBUyxvQkFBS0MsU0FBUzs7OztpQ0FBSTs7Ozs7NkJBQ2Q7Ozs7OztxQkFDUjs7Ozs7O2FBQ0ksQ0FDaEI7Q0FDSDtHQXpDS0YsR0FBRzs7UUFDYVYsNkRBQWM7OztBQUQ5QlUsTUFBQUEsR0FBRztBQTJDVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlV2luZG93UHJvcHMgZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1Byb3BzXCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wQmFyXCI7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJzsgLy8gSW1wb3J0YSBsb3MgZXN0aWxvcyBkZSBUYWlsd2luZCBDU1NcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWE5ZWQ7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBoZWlnaHQ6IG51bWJlciB9PmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWRcclxuYDtcclxuXHJcbmNvbnN0IFNjcmVlbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFzaWMxMDB9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3Qgd2luZG93UHJvcHMgPSB1c2VXaW5kb3dQcm9wcygpO1xyXG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1hdGNoRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XHJcbiAgICBzZXRJc0RhcmtNb2RlKG1hdGNoRGFyay5tYXRjaGVzKTtcclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGU6IE1lZGlhUXVlcnlMaXN0RXZlbnQpID0+IHtcclxuICAgICAgc2V0SXNEYXJrTW9kZShlLm1hdGNoZXMpO1xyXG4gICAgfTtcclxuICAgIG1hdGNoRGFyay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtYXRjaERhcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgIHByaW1hcnk6IFwiIzRFRUM5MVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBpc0RhcmtNb2RlID8gXCIjQkRBMUVDXCIgOiBcIiNCREExRUNcIixcclxuICAgICAgYmFzaWMxMDA6IGlzRGFya01vZGUgPyBcIiNmZmZcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICBiYXNpYzE1MDogXCIjZmFmYWZhXCIsXHJcbiAgICAgIGJhc2ljMzAwOiBcIiNkMWQxZDFcIixcclxuICAgICAgYmFzaWM0MDA6IFwiIzk5OVwiLFxyXG4gICAgICBiYXNpYzUwMDogXCIjNjY2XCIsXHJcbiAgICAgIGJhc2ljMTAwMDogXCIjM2QzZDNkXCIsXHJcbiAgICAgIGJhc2ljMjAwMDogXCIjMTExODI3XCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPFdyYXBwZXIgaGVpZ2h0PXt3aW5kb3dQcm9wcy5oZWlnaHR9PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8U2NyZWVuV3JhcHBlcj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1NjcmVlbldyYXBwZXI+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiVGhlbWVQcm92aWRlciIsInVzZVdpbmRvd1Byb3BzIiwiVG9wQmFyIiwiR2xvYmFsU3R5bGUiLCJXcmFwcGVyIiwiZGl2IiwiU2NyZWVuV3JhcHBlciIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJiYXNpYzEwMCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpbmRvd1Byb3BzIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJtYXRjaERhcmsiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImxpc3RlbmVyIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJpbWFyeSIsImJhY2tncm91bmQiLCJiYXNpYzE1MCIsImJhc2ljMzAwIiwiYmFzaWM0MDAiLCJiYXNpYzUwMCIsImJhc2ljMTAwMCIsImJhc2ljMjAwMCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});