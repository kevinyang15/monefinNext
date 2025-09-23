import React, { useEffect } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import UserForm from '../containers/UserForm';
import Footer from '../containers/Footer';
import CoinMonefin from '../public/assets/monefinCoin.json';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';
import { useRouter } from "next/router";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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

      Por favor, lea detenidamente los siguientes Términos y Condiciones (“Términos”) antes de utilizar www.monefin.net (“el Sitio”), operado por Pacific Creative Lab LTD (“la Compañía”, “nosotros”, “nos” o “nuestro”). La dirección registrada de la Compañía es Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves.

Estos Términos se rigen e interpretan de acuerdo con las leyes de San Cristóbal y Nieves. Cualquier disputa derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de dicho país. Los datos transmitidos y cedidos en o a través del Sitio son propiedad exclusiva de Pacific Creative Lab LTD. Al utilizar el Sitio, usted acepta que cualquier información proporcionada podrá ser utilizada por la Compañía conforme a la legislación aplicable y a nuestra Política de Privacidad.

Pacific Creative Lab LTD no es una entidad financiera ni otorga préstamos. El sitio monefin.net funciona únicamente como un comparador gratuito de servicios financieros ofrecidos por terceros. Toda la información publicada tiene fines informativos y publicitarios. La contratación de cualquier servicio o producto se realiza directamente con las entidades financieras correspondientes, bajo sus propias condiciones y políticas de aprobación crediticia.

El otorgamiento de préstamos está sujeto a evaluación crediticia y a las condiciones definidas por cada entidad financiera. En caso de aprobarse un préstamo, el monto, plazo, tasa de interés y demás condiciones serán determinadas exclusivamente por la entidad elegida.

Ejemplo orientativo: Para un préstamo de $200.000 en 36 meses, Tasa Nominal Anual (TNA) fija del 88.8%, Tasa Efectiva Anual (TEA) fija del 192.47%, Costo Financiero Total Nominal Anual (CFTNA) del 112.19%. Para un préstamo de $5.000 a 90 días con TNA del 88.8%, el cliente devolverá $5.949,21. Las tasas pueden variar según la entidad financiera, el perfil crediticio y el contexto normativo.
</Disclaimer>
      <Footer />
      </ContentWrapper>
    </Wrapper>
    </ScreenWrapper>
  );
};

export default BuscarOfertas;
