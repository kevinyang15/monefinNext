import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';
import WaitImg from '../public/assets/loading-transaction.json';

import GreenCheck from '../public/assets/check-green.svg';
import Item from '../components/Item';
import Spacer from '../components/Spacer';
import { sleep } from '../utils/utils';

import useFormStore from "../state/useFormStore";

const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 36px;
  margin-top: 20px;
  padding-bottom: 100px;
`;

const TitleText = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin: 20px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic1000};
`;

// const WaitImage = styled.img`
//   width: 60%;
//   height: auto;
//   max-width: 250px;
// `;

const MainText = styled.div`
  margin: 10px 0 20px 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basic2000};
`;

const Subtext = styled.h4`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic2000};
  margin: 5px 0 40px 0;
  text-align: center;
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

const Wait = () => {
  const router = useRouter();
  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';
  const [waitOver, setWaitOver] = useState<boolean>(false);
  const nombrecompleto = useFormStore((state) => state.nombrecompleto);

  const goToRejected = () => {
    if (router.pathname === '/espera') {
      router.push('/ofertas');
    }
  }

  const formatNombreCompleto = (nombre: string) => {
    const [firstName, lastName] = nombre.split(' ');
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return `${capitalize(lastName)} ${capitalize(firstName)}`;
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });

    sleep(5000).then(() => {
      setWaitOver(true);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (waitOver) goToRejected();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitOver]);

  return (
    <ScreenWrapper>
       <Helmet>
        <title>Buscando... | Buscá Préstamos Online</title>
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
       <TitleText style={{ fontWeight:'800' }}>  
         {`Hola 😁, ${nombrecompleto ? formatNombreCompleto(nombrecompleto) : ''}`}
       </TitleText>
       <TitleText style={{ fontWeight:'700' }}>Buscando ofertas...</TitleText>
      <Lottie animationData={WaitImg} height={150} width={150} style={{ width:'200px' }}/> 
      <MainText>¡Gracias por elegirnos!</MainText>
      <Subtext>¡Estamos buscando las mejores ofertas! Faltan <strong>algunos segundos...</strong></Subtext>
      <div>
      <Item
        icon={GreenCheck.src}
        text="Validando tus datos"
      />
      <Item
        icon={GreenCheck.src}
        text="Analizando perfil crediticio"
      />
      <Item
        icon={GreenCheck.src}
        text="Buscando las mejores ofertas"
      />
      </div>
      <Spacer size={30} />
      {/* <Footer /> */}
    </Wrapper>
    </ScreenWrapper>
  );
};

export default Wait;
