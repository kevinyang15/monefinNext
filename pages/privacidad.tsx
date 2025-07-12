import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Footer from '../containers/Footer';

const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center ;
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

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic2000};
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

const Privacy = () => (
  <ScreenWrapper>
      <Helmet>
        <title>Politicas de Privacidad | Monefin</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo." />
        <link rel="canonical" href="https://monefin.net/privacidad" />
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
        <meta property="og:url" content="https://monefin.net/privacidad" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=""
        />
      </Helmet>
  <Wrapper>
    <TitleText>Políticas de Privacidad</TitleText>
    <Text>
  La presente Política de Privacidad (“Política de Privacidad”) rige para el tratamiento de los datos personales que usted como usuario (“Usuario”) del sitio web, voluntariamente brinda a Pacific Creative Lab LTD (“Monefin”), al navegar por la misma y utilizar los productos, servicios y/o herramientas (“Servicios”) dispuestos para el Usuario por Monefin a través de su sitio web (el “Sitio”). Esta Política de Privacidad debe ser leída en conjunto con los respectivos términos de uso (“Términos de Uso”).
</Text>
<Text>
  Al acceder al Sitio y utilizar los Servicios, el Usuario manifiesta estar consciente de esta Política de Privacidad que rige su relación con Pacific Creative Lab LTD. Monefin, operado por Pacific Creative Lab LTD, reitera su compromiso con sus Usuarios y su preocupación por la privacidad y la protección de sus datos personales. En caso de dudas sobre esta Política de Privacidad, puede contactarnos a través del correo electrónico <strong>info@monefin.net</strong>.
</Text>
...
<Text>
  6.1. El Usuario podrá entrar en contacto con Monefin por correo electrónico <strong>info@monefin.net</strong>.<br/>
  6.2. Pacific Creative Lab LTD se reserva el derecho, a su sola discreción, de modificar, alterar o de otra manera actualizar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigencia desde el momento en que se indique; en su defecto, se entenderá que su aplicación es inmediata. Monefin no limitará los derechos de los Usuarios en virtud de esta Política de Privacidad sin su consentimiento explícito. Al hacer click en “ACEPTO”, el Usuario reconoce haber leído y comprendido la presente Política de Privacidad, otorgando su consentimiento para el tratamiento de los datos personales conforme a los fines detallados anteriormente.
</Text>
<Text>
  <strong>Información legal de la empresa:</strong><br/>
  Razón social: Pacific Creative Lab LTD<br/>
  Dirección: Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves<br/>
  Email: info@monefin.net<br/>
  Sitio web: https://monefin.net
</Text>
  <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default Privacy;
