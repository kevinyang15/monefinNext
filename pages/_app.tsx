// pages/_app.tsx
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useWindowProps from "../hooks/useWindowProps";
import TopBar from "../components/TopBar";
import { AppProps } from "next/app";
import '../styles/globals.css'; // Importa los estilos de Tailwind CSS

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background: #fafafa;
    padding: 0;
    margin: 0;
    background-color: #bea9ed;
    overflow-x: hidden;

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
  }

  @media (max-width: 320px) {
    width: 100%;
    border-radius: 15px;
  }
  @media (min-width: 1200px) {
    width: 40%;
    border-radius: 15px;
  }
`;

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const windowProps = useWindowProps();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);
    const listener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    matchDark.addEventListener('change', listener);
    return () => {
      matchDark.removeEventListener('change', listener);
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
