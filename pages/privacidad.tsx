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
        La presente Política de Privacidad rige para el tratamiento de los datos personales que usted como usuario (“Usuario”) del sitio web, voluntariamente brinda a Pacific Creative Lab LTD (“Monefin”), al navegar por el mismo y utilizar los productos, servicios y/o herramientas (“Servicios”) dispuestos por Monefin a través de su sitio web (el “Sitio”). Esta Política debe leerse junto con los Términos de Uso.
      </Text>
      <Text>
        Al acceder al Sitio y utilizar los Servicios, el Usuario manifiesta estar consciente de esta Política de Privacidad. Monefin, operado por Pacific Creative Lab LTD, reitera su compromiso con la privacidad y protección de los datos personales de sus usuarios. Para cualquier consulta, puede escribir a <strong>info@monefin.net</strong>.
      </Text>
      <Text>
        <strong>1. Datos recopilados:</strong> Monefin no solicita ni almacena datos personales sensibles como DNI, CUIT, información bancaria o crediticia. El único dato que puede solicitarse es el correo electrónico, con el fin de enviar un newsletter informativo, previa suscripción voluntaria.
      </Text>
      <Text>
        <strong>2. Finalidad del tratamiento:</strong> El único uso de los datos recolectados (correo electrónico) es el envío de comunicaciones solicitadas. No se utilizan con fines de segmentación ni son compartidos con terceros.
      </Text>
      <Text>
        <strong>3. Seguridad:</strong> Los correos electrónicos son almacenados por proveedores que cumplen con estándares de seguridad como el RGPD. El usuario puede darse de baja en cualquier momento.
      </Text>
      <Text>
        <strong>4. No divulgación:</strong> Monefin no vende, comparte ni cede información personal. El sitio puede navegarse de forma anónima sin registrarse.
      </Text>
      <Text>
        <strong>5. Enlaces externos:</strong> Monefin contiene enlaces a sitios de terceros (bancos o financieras). No somos responsables por las políticas de privacidad ni contenido de dichos sitios.
      </Text>
      <Text>
        <strong>6. Modificaciones:</strong><br />
        6.1. El Usuario puede contactarnos por correo electrónico a <strong>info@monefin.net</strong>.<br />
        6.2. Monefin puede modificar esta Política de Privacidad en cualquier momento. Los cambios entran en vigencia inmediatamente a menos que se indique lo contrario. No se limitarán los derechos del Usuario sin su consentimiento explícito.
      </Text>
      <Text>
        <strong>Información legal de la empresa:</strong><br />
        Razón social: Pacific Creative Lab LTD<br />
        Dirección: Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves<br />
        Email: info@monefin.net<br />
        Sitio web: https://monefin.net
      </Text>
  <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default Privacy;
