// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './_app';
// import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// pages/index.tsx
import React  from "react";
// import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// import AnimatedNavigation from "./AnimatedNavigation";
// import useWindowProps from "../hooks/useWindowProps";
// import TopBar from "../components/TopBar";
// import Fondo from "../public/assets/fondo-monefin.svg";
// import { AppProps } from "next/app";
import LandingPage from "../components/Landing/Landing";
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';

const HomePage: React.FC = () => {

  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';
  
  return (
    <div>
      <Helmet>
        <title>Inicio - Primera Fintech para Todos</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu Préstamo Personal o Tarjeta de Crédito hoy mismo." />
        <link rel="canonical" href={webUrl} />
        <meta
          name="keywords"
          content="Préstamos, Créditos, Ahorro, Planes de Ahorro, Servicios Financieros, Inversiones, Fintech, Créditos Online, Préstamos Online"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Buscá ofertas de préstamos"
        />
        <meta
          property="og:description"
          content="¡La primera Fintech para todos! Préstamos simples y transparentes. ¡Sin complicaciones! Solicita tu préstamo personal hoy mismo."
        />
        <meta property="og:url" content={webUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={logoUrl}
        />
      </Helmet>
      <main>
        <LandingPage />
      </main>
    </div>
  );
};

export default HomePage;
