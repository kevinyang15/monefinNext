import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import UserForm from '../containers/UserForm';
import Footer from '../containers/Footer';
import CoinMonefin from '../public/assets/monefinCoin.json';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';
import { useRouter } from "next/router";


const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 36px;
  margin-top: 50px;
  padding-bottom: 100px;

  @media (orientation: portrait) and (max-width: 767px) {
    margin-top: 20px;
  }

  @media (orientation: portrait) and (max-width: 400px) {
    margin-top: 20px;
    margin: 20px 20px;
    align-items: stretch;
  }
`;

const ContentWrapper = styled.div`


`;

const TopLineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 9rem;

  @media (max-width: 1600px) {
    padding: 0px 0rem;
      }

`;

const TopLineTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopLineTitle = styled.h1`
  font-size: 22px;
  line-height: 24px;
  color: '${({ theme }) => theme.colors.basic1000}';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
  @media (orientation: portrait) and (max-width: 400px) {
    font-size: 22px;
      }
`;

const TopLineSubtitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.basic1000};
  font-weight: 300;
  margin: 0;
  @media (orientation: portrait) and (max-width: 400px) {
    font-size: 14px;
    line-height:20px;
    font-weight: 400;
      }
`;

const Wallet = styled.img`
  width: 135px;
  height: 80px;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 700;
  margin: 8px 0;
`;

const Disclaimer = styled.p`
  margin-top: 30px;
  font-size: 11px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.basic1000};
  font-weight: 300;
  text-align: justify;
`;
const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic100};
  width: 100%;
  border-radius: 1px;
  display: flex;
  justify-content: center;

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

const BuscarOfertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  
  const router = useRouter()
  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';
  return (
    <ScreenWrapper>
        <Helmet>
        <title>Buscá Préstamos Online</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo." />
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
          content="¡La primera Fintech para todos! Préstamos simples y transparentes. ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo."
        />
        <meta property="og:url" content={webUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={logoUrl}
        />
      </Helmet>
    <Wrapper>
      <ContentWrapper>
      <TopLineWrapper>
        <TopLineTextWrapper>
          <TopLineTitle>¡Encontrá Préstamos de hasta $10.000.000!</TopLineTitle>
          <TopLineSubtitle>¡Además obtené tu tarjeta de crédito!</TopLineSubtitle>
        </TopLineTextWrapper>
        <Lottie animationData={CoinMonefin} height={150} width={150} style={{ width:'200px' }}/> 
        {/* <Wallet src={WalletImg} alt="Billetera" /> */}
      </TopLineWrapper>
      <UserForm />
      <Disclaimer>
      Antes de utilizar el sitio web www.monefin.net ("el Sitio"), propiedad de CRED IT FINDER LTD. La dirección registrada de la Compañía es Hope Hill Road, Road Town, VG1110, Islas Vírgenes Británicas. Al utilizar el Sitio, usted acepta que los datos proporcionados pueden ser utilizados por la Compañía de acuerdo con la legislación aplicable y la Política de Privacidad del Sitio.

El otorgamiento de préstamos personales está sujeto a calificación crediticia y condiciones de contratación, establecidas por la entidad financiera elegida en función de la calificación crediticia resultante. Monto en pesos: máximo $10.000.000, mínimo $1.000. Plazo: máximo 36 meses, mínimo 3 meses. Ejemplo: para un préstamo de $200.000 a 36 meses, Tasa Nominal Anual fija (88.8%), Tasa Efectiva Anual fija (192.47%), Costo Financiero Total Nominal Anual: 112.19%.

Ejemplo de préstamo: Para un préstamo de $5.000 a 90 días con TNA de 88.8%, el cliente devolverá $5.949.21. Tasa Máxima Efectiva Anual: 192.47%. Tasa Mínima Efectiva Anual: 25%.

Tenga en cuenta que la información en este Sitio es meramente informativa y no constituye asesoramiento financiero o legal. Nos reservamos el derecho de modificar estos términos en cualquier momento. Si no está de acuerdo, le recomendamos que se abstenga de utilizar el Sitio.      </Disclaimer>
      <Footer />
      </ContentWrapper>
    </Wrapper>
    </ScreenWrapper>
  );
};

export default BuscarOfertas;
