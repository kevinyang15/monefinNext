"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.0c8c023e.svg","height":196,"width":612});

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./hooks/useWindowProps.ts

const useWindowProps = ()=>{
    const getSize = ()=>({
            width:  false ? 0 : 0,
            height:  false ? 0 : 0,
            orientation:  false ? 0 : "portrait",
            isMobile:  false && 0
        })
    ;
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)(getSize);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return windowSize;
};
/* harmony default export */ const hooks_useWindowProps = (useWindowProps);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./public/assets/logo.svg
var logo = __webpack_require__(787);
;// CONCATENATED MODULE: ./components/TopBar.tsx






// import Image from 'next/image';  // Importa la etiqueta Image de Next.js
const Wrapper = (external_styled_components_default()).div`
  width: calc(100% - 140px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 70px;


  @media (orientation: portrait) and (max-width: 767px) {
    padding: 15px 0;
    justify-content: center;
  }

  @media (min-width: 768px) {
  .logoHome {
    width: 80%;
  }
}

/* Dispositivos móviles */
@media (max-width: 767px) {
  .logoHome {
    width: 80%;
    
  }
  .menuMobile {
    display: none;
  }
}
`;
const CustomLink = (external_styled_components_default()).a`
  /* color: ${({ theme  })=>theme.colors.basic100
}; */
  color: #232323;
  font-size: 17px;
  font-weight: 600;;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;

  @media (orientation: portrait) and (max-width: 767px) {
    display: none;
  }
`;
const TopBar = ()=>{
    const router = (0,router_.useRouter)();
    const onClickLogo = ()=>router.push("/")
    ;
    const isDarkMode =  false && 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        style: {
            display: "flex",
            justifyContent: "Center",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:pr-10 pr-0",
                children: isDarkMode ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "logoHome",
                    src: logo/* default.src */.Z.src,
                    alt: "monefin",
                    width: 200,
                    height: 60,
                    onClick: onClickLogo
                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "logoHome",
                    src: logo/* default.src */.Z.src,
                    alt: "monefin",
                    width: 200,
                    height: 60,
                    onClick: onClickLogo
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "menuMobile",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/buscar-ofertas",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink, {
                            style: {
                                padding: "20px"
                            },
                            children: "Buscar"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/nosotros",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink, {
                            style: {
                                padding: "20px"
                            },
                            children: "\xbfQu\xe9 hacemos?"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/faq",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink, {
                            style: {
                                padding: "20px"
                            },
                            children: "FAQ"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink, {
                        href: "https://blog.monefin.net",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            padding: "20px"
                        },
                        children: "Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contacto",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink, {
                            style: {
                                padding: "20px"
                            },
                            children: "Contacto"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TopBar = (TopBar);

;// CONCATENATED MODULE: ./public/assets/fondo-monefin.svg
/* harmony default export */ const fondo_monefin = ({"src":"/_next/static/media/fondo-monefin.601dc6ab.svg","height":1861,"width":2631});
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
;// CONCATENATED MODULE: ./pages/_app.tsx

// pages/_app.tsx





 // Importa los estilos de Tailwind CSS

const GlobalStyle = external_styled_components_.createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background: #fafafa;
    padding: 0;
    margin: 0;
    background-color: #bea9ed;
    overflow-x: hidden;
    background: url(${fondo_monefin.src}) no-repeat center center fixed; /* Aquí se establece la imagen de fondo */
    background-size: cover; /* Ajusta la imagen para que cubra todo el fondo */
  }
`;
const _app_Wrapper = (external_styled_components_default()).div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
`;
const ScreenWrapper = (external_styled_components_default()).div`
  background-color: ${(props)=>props.theme.colors.basic100
};
  width: 100%;
  border-radius: 1px;

  @media (min-width: 767px) {
    width: 70%;
    border-radius: 15px;
    background-color: transparent;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 320px) {
    width: 100%;
    border-radius: 15px;
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    width: 100%;
    border-radius: 15px;
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
`;
const App = ({ Component , pageProps  })=>{
    const windowProps = hooks_useWindowProps();
    const { 0: isDarkMode , 1: setIsDarkMode  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(matchDark.matches);
        const listener = (e)=>{
            setIsDarkMode(e.matches);
        };
        matchDark.addEventListener("change", listener);
        return ()=>{
            matchDark.removeEventListener("change", listener);
        };
    }, []);
    const theme = {
        colors: {
            primary: "#4EEC91",
            background: isDarkMode ? "#BDA1EC" : "#BDA1EC",
            basic100: isDarkMode ? "#fff" : "#fff",
            basic150: "#fafafa",
            basic300: "#d1d1d1",
            basic400: "#999",
            basic500: "#666",
            basic1000: "#3d3d3d",
            basic2000: "#111827"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_helmet_.Helmet, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2292291997787849",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-D37EQGQRLL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-D37EQGQRLL');
              `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-16665446279"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'AW-16665446279');
              `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-adsense-account",
                        content: "ca-pub-2292291997787849"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_app_Wrapper, {
                height: windowProps.height,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_TopBar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ScreenWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(9832)));
module.exports = __webpack_exports__;

})();