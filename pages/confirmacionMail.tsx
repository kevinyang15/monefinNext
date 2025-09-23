import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../containers/Footer';
import { Helmet } from 'react-helmet';

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

const Title = styled.h1`
  font-size: 22px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.basic2000};
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic1000};
`;

const ConfirmacionMail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Confirmá tu email | Monefin</title>
        <meta name="description" content="Te enviamos un email con un enlace para continuar." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Wrapper>
        <Title>Revisá tu correo</Title>
        <Text>Te enviamos un email con un enlace para continuar tu solicitud. Abrí el enlace para seguir.</Text>
      </Wrapper>
      <Footer />
    </ScreenWrapper>
  );
};

export default ConfirmacionMail;

