import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';
import Spacer from '../components/Spacer';

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
  font-size: 22px;
  line-height: 28px;
  margin: 20px 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.basic1000};
  text-align: center;
`;

const Subtext = styled.h4`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic2000};
  margin: 5px 0 16px 0;
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

const Confirmacion = () => {
  const router = useRouter();

  const webUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${LogoImg.src}`
    : '';

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace('/espera');
    }, 2000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <ScreenWrapper>
      <Helmet>
        <title>¡Email confirmado! | Monefin</title>
        <meta name="description" content="Tu correo fue confirmado. Continuamos buscando tus ofertas." />
        <link rel="canonical" href={webUrl} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="¡Email confirmado!" />
        <meta property="og:description" content="Tu correo fue confirmado." />
        <meta property="og:url" content={webUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logoUrl} />
      </Helmet>
      <Wrapper>
        <TitleText>¡Listo! Confirmamos tu correo ✅</TitleText>
        <Subtext>Te llevamos a tus ofertas...</Subtext>
        <Spacer size={30} />
      </Wrapper>
    </ScreenWrapper>
  );
};

export default Confirmacion;

