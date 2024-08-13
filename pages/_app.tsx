// pages/_app.tsx
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useWindowProps from "../hooks/useWindowProps";
import TopBar from "../components/TopBar";
import { AppProps } from "next/app";
import Fondo from "../public/assets/fondo-monefin.svg";
import "../styles/globals.css"; // Importa los estilos de Tailwind CSS
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background: #fafafa;
    padding: 0;
    margin: 0;
    background-color: #bea9ed;
    overflow-x: hidden;
    background: url(${Fondo.src}) no-repeat center center fixed; /* Aquí se establece la imagen de fondo */
    background-size: cover; /* Ajusta la imagen para que cubra todo el fondo */
  }
`;

const Wrapper = styled.div<{ height: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
`;

const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic100};
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

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const windowProps = useWindowProps();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchDark.matches);
    const listener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    matchDark.addEventListener("change", listener);
    return () => {
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
      basic2000: "#111827",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2292291997787849"
          crossOrigin="anonymous"
        ></script>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D37EQGQRLL"
        ></script>
        <script>
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-D37EQGQRLL');
              `}
        </script>
        {/* <!-- Google tag (gtag.js) GOOGLE ADS MONEFIN--> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16665446279"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'AW-16665446279');
              `}
        </script>
        <meta
          name="google-adsense-account"
          content="ca-pub-2292291997787849"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" />
      </Helmet>
      <GlobalStyle />
      <Wrapper height={windowProps.height}>
        <TopBar />
        <ScreenWrapper>
          <Component {...pageProps} />
        </ScreenWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
