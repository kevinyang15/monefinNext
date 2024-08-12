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
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// import AnimatedNavigation from "./AnimatedNavigation";
import useWindowProps from "../hooks/useWindowProps";
import TopBar from "../components/TopBar";
import Fondo from "../public/assets/fondo-monefin.svg";
import { AppProps } from "next/app";
import LandingPage from "../components/Landing/Landing";


const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        <LandingPage />
      </main>
    </div>
  );
};

export default HomePage;
