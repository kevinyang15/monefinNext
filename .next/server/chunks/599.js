"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 2422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const ButtonWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  width: ${({ width  })=>width || "60%"
};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor  })=>backgroundColor
};
  // color: ${({ textColor  })=>textColor
};
  color: #232323;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: ${({ theme , backgroundColor  })=>backgroundColor === "transparent" ? `1px solid ${theme.colors.basic400}` : "none"
};
  outline: none;
  border-radius: 15px;
  padding: 20px 0;
  transition: opacity 0.3 ease-out;
  opacity: 1;
  margin: 5px 0;
  box-shadow: 0px 5px 10px #2323233d;

  :hover {
    opacity: 0.9;
    box-shadow: 0px 5px 7px #23232373;
  }

  :focus {
    opacity: 0.9;
    box-shadow: 0px 5px 7px #23232373;
  }

  :disabled {
    opacity: 0.6;
    box-shadow: 0px 5px 10px #2323233d;
  }

  @media (orientation: portrait) and (max-width: 767px) {
    width: 100%;

  }

`;
const Button = ({ text , backgroundColor , textColor , onClick , disabled =false , width  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWrapper, {
        disabled: disabled,
        backgroundColor: backgroundColor || "transparent",
        textColor: textColor,
        onClick: onClick,
        width: width,
        children: text
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useFormStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        nombrecompleto: null,
        setNombrecompleto: (nombrecompleto)=>set((state)=>({
                    nombrecompleto
                })
            )
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;