import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../containers/Footer';
import ContactComponent from '../components/ContactComponent/ContactComponent';
import { Helmet } from 'react-helmet';


// const Wrapper = styled.div`
//   height: auto;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   margin: 0 36px;
//   margin-top: 50px;
//   padding-bottom: 100px;

//   @media (orientation: portrait) and (max-width: 767px) {
//     margin-top: 20px;
//   }

//   @media (orientation: portrait) and (max-width: 400px) {
//     margin-top: 20px;
//     margin: 20px 20px;
//     align-items: stretch;
//   }
// `;

// const ContentWrapper = styled.div`


// `;

// const TopLineWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 0px 9rem;

//   @media (max-width: 1600px) {
//     padding: 0px 0rem;
//       }

// `;

// const TopLineTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// const TopLineTitle = styled.h1`
//   font-size: 22px;
//   line-height: 24px;
//   color: '${({ theme }) => theme.colors.basic1000}';
//   margin: 0;
//   margin-bottom: 5px;
//   font-weight: 600;
//   @media (orientation: portrait) and (max-width: 400px) {
//     font-size: 22px;
//       }
// `;

// const TopLineSubtitle = styled.h2`
//   font-size: 20px;
//   line-height: 24px;
//   color: ${({ theme }) => theme.colors.basic1000};
//   font-weight: 300;
//   margin: 0;
//   @media (orientation: portrait) and (max-width: 400px) {
//     font-size: 14px;
//     line-height:20px;
//     font-weight: 400;
//       }
// `;

// const Wallet = styled.img`
//   width: 135px;
//   height: 80px;
// `;

// const MainTitle = styled.h1`
//   font-size: 20px;
//   color: ${({ theme }) => theme.colors.background};
//   font-weight: 700;
//   margin: 8px 0;
// `;

// const Disclaimer = styled.p`
//   margin-top: 30px;
//   font-size: 11px;
//   line-height: 15px;
//   color: ${({ theme }) => theme.colors.basic1000};
//   font-weight: 300;
//   text-align: justify;
// `;
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

const Contacto = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Contacto | Monefin</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo." />
        <link rel="canonical" href="https://monefin.net/contacto" />
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
          content="¡La primera Fintech para todos! Préstamos simples y transparentes. ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo."
        />
        <meta property="og:url" content="https://monefin.net/contacto" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=""
        />
      </Helmet>
      <ContactComponent />
      <Footer />
    </ScreenWrapper>
  );
};

export default Contacto;
