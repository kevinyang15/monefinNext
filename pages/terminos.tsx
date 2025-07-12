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

const Terms = () => (
  <ScreenWrapper>
          <Helmet>
        <title>Terminos y Condiciones | Monefin</title>
        <meta name="description" content="Préstamos simples y transparentes ¡Sin complicaciones! Solicita tu préstamo personal o tarjeta de crédito hoy mismo." />
        <link rel="canonical" href="https://monefin.net/terminos" />
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
        <meta property="og:url" content="https://monefin.net/terminos" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=""
        />
      </Helmet>
  <Wrapper>
    <TitleText>Términos y condiciones</TitleText>
    <h3>Términos y Condiciones</h3>
    <Text>
  Monefin es una plataforma operada por <strong>Pacific Creative Lab LTD</strong>, con domicilio
  en Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves
  (“la Compañía”). El sitio web <strong>www.monefin.net</strong> (“el Sitio Web”) permite a los
  usuarios (“Usuarios”) cargar sus datos para recibir ofertas de préstamos y otros productos
  financieros ofrecidos por terceros (“Entidades Financieras”). Al utilizar la plataforma,
  el Usuario acepta íntegramente estos Términos y Condiciones (“T&C”).
</Text>

<br />

<h4>1. Declaraciones y Reconocimientos del Usuario</h4>
<Text>
  a) El Usuario contrata voluntariamente los servicios informativos de Monefin.<br/>
  b) El Usuario suministra sus datos conforme a la <strong>Política de Privacidad</strong> y
     la Ley 25.326 argentina de protección de datos personales.<br/>
  c) Monefin <strong>no es</strong> entidad financiera ni otorga préstamos.<br/>
  d) Monefin no garantiza la aprobación de solicitudes: la decisión es exclusiva de cada Entidad
     Financiera con sus propias políticas de scoring y riesgo.<br/>
  e) Las tasas, montos y plazos informados son orientativos y pueden variar hasta el momento de
     la contratación directa con la Entidad Financiera.<br/>
  f) Monefin no se responsabiliza por la veracidad, calidad o legalidad de los productos
     ofrecidos por terceros.<br/>
</Text>

<br />

<h4>2. Responsabilidad del Usuario</h4>
<Text>
  El Usuario garantiza la veracidad de los datos ingresados y asume cualquier
  perjuicio derivado de información falsa o inexacta. Monefin podrá suspender o excluir
  a Usuarios que incumplan esta obligación.
</Text>

<br />

<h4>3. Limitaciones de Uso</h4>
<Text>
  a) Solo pueden utilizar la plataforma personas mayores de 18 años.<br/>
  b) Queda prohibido el uso para fines ilícitos, difusión de malware o violación de derechos
     de terceros.<br/>
  c) La Compañía podrá restringir o cancelar el acceso ante cualquier incumplimiento
     de estos T&C.<br/>
</Text>

<br />

<h4>4. Enlaces a Sitios de Terceros</h4>
<Text>
  El Sitio Web puede incluir enlaces a sitios o servicios de terceros. Monefin no controla
  dichos contenidos ni asume responsabilidad por ellos. El uso de esos enlaces es bajo
  riesgo exclusivo del Usuario.
</Text>

<br />

<h4>5. Propiedad Intelectual</h4>
<Text>
  Todas las marcas, logotipos, software y contenidos del Sitio Web son propiedad de
  Pacific Creative Lab LTD o se usan bajo licencia. Queda prohibida su reproducción,
  distribución o modificación sin autorización escrita.
</Text>

<br />

<h4>6. Imágenes y Opiniones de Usuarios</h4>
<Text>
  Monefin podrá utilizar imágenes u opiniones de Usuarios únicamente con su consentimiento
  previo, el que podrá ser revocado en cualquier momento enviando un correo a
  <em>info@monefin.net</em>.
</Text>

<br />

<h4>7. Ley Aplicable</h4>
<Text>
  Estos T&C se rigen por las leyes de <strong>San Cristóbal y Nieves</strong>. No obstante,
  para cuestiones de tratamiento de datos personales se observará
  la Ley argentina 25.326 cuando corresponda por el lugar de residencia del Usuario.
</Text>

<br />

<h4>8. Jurisdicción</h4>
<Text>
  Toda controversia derivada de estos T&C se someterá a los tribunales competentes de
  <strong>San Cristóbal y Nieves</strong>, sin perjuicio de los derechos que pudiera
  tener el Usuario en su jurisdicción de residencia conforme a la normativa de defensa
  del consumidor aplicable.
</Text>

<br />

<h4>9. Notificaciones</h4>
<Text>
  Toda comunicación deberá realizarse por escrito al correo <em>info@monefin.net</em>.
  Se considerará recibida a las 24 h de su envío.
</Text>

<br />

<h4>10. Modificaciones</h4>
<Text>
  La Compañía podrá actualizar estos T&C en cualquier momento. Las modificaciones serán
  efectivas desde su publicación en <em>www.monefin.net</em>. El uso continuado de la
  plataforma implica aceptación de los nuevos términos.
</Text>

<br />

<h4>11. Validez y Severabilidad</h4>
<Text>
  Si alguna cláusula de estos T&C fuera declarada inválida, las demás continuarán
  en pleno vigor.
</Text>

<br />

<h4>12. Permisos de WhatsApp o SMS</h4>
<Text>
  El Usuario que proporcione su número autoriza a recibir comunicaciones promocionales
  vía WhatsApp o SMS. Podrá solicitar la baja en cualquier momento siguiendo las
  instrucciones indicadas en cada mensaje.
</Text>
  <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default Terms;
