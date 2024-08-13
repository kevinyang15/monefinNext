import React from 'react';
import styled from 'styled-components';
import Footer from '../containers/Footer';
import { Helmet } from 'react-helmet';



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
const FAQ = () => (

  <ScreenWrapper>
     <Helmet>
        <title>FAQ | Monefin</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo." />
        <link rel="canonical" href="https://monefin.net/faq" />
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
        <meta property="og:url" content="https://monefin.net/faq" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=""
        />
      </Helmet>
  <Wrapper>
    <TitleText>FAQ</TitleText>
    <h1>Preguntas Frecuentes</h1>
    <Text>Si no podés encontrar los que buscas. Envianos una consulta a <strong>info@monefin.net</strong> y te responderemos a la brevedad.</Text>
    <br />
    <h3>¿Como hago para pedir un préstamo?</h3>
    <Text>Con base en sus datos básicos, podemos analizar el estado de su crédito por adelantado. Con base en un análisis preliminar de sus datos, le mostramos opciones basadas en su perfil de crédito y ubicación. Puede elegir una o más ofertas de bancos y compañías financieras registradas en Argentina. Después de elegir la opción más conveniente, haga clic en "Finalizar la Solicitud". Y ¡Listo! Su solicitud será enviada y recibirá un correo electrónico con información detallada.</Text>
    <br />
    <h3>¿Qué pasa con mis datos?</h3>
    <Text>Clink gestiona los datos de sus usuarios de acuerdo con la normativa de protección de datos de carácter personal. Para más detalles sobre el uso de esta información, le recomendamos que lea nuestros términos y condiciones.</Text>
    <br />
    <h3>¿Qué es monefin?</h3>
    <Text>monefin es una plataforma online que te ayuda a encontrar las mejores ofertas de préstamos para tu perfil y ubicación de una forma muy sencilla. La tecnología exclusiva de nuestro sistema nos permite comparar entre todos los préstamos online disponibles mientras que definimos tu perfil crediticio en segundos y desde allí brindarte las mejores opciones de préstamos de bancos o financieras.</Text>
    <br />
    <h3>¿Cuanto tardo en recibir mi préstamo?</h3>
    <Text>Una vez que haya llenado el formulario, seleccionado la oferta de préstamo y enviado la solicitud, cada banco y compañía financiera realizará un análisis de crédito adicional que tardara segundos. En breve se pondrán en contacto con vos o dependiendo el producto ya podrás recibir el préstamos en tu cuenta bancaria.</Text>
    <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default FAQ;
