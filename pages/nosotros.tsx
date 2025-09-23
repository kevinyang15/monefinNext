import React, { useEffect } from 'react';
import styled from 'styled-components';
import  Link  from 'next/link';
import Footer from '../containers/Footer';
import hero from '../public/assets/hero.svg'

import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';

const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 36px;
  margin-top: 50px;
  padding-bottom: 100px;

  @media (orientation: portrait) and (max-width: 767px) {
    margin-top: 20px;
  }
`;

const TopLineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TopLineTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopLineTitle = styled.h2`
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.basic1000};
  margin: 0;
  margin-bottom: 5px;
  font-weight: 700;
  padding-top:20px;
  text-align: center;
`;

const TopLineSubtitle = styled.h3`
  font-size: 16px;
  line-height: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic1000};
  font-weight: 400;
  margin: 0;
`;


const MainTitle = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 800;
  margin: 8px 0;
  padding-bottom:10px;
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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const router = useRouter();
  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  padding-bottom:20px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic2000};
`;
const WrappedLink = styled(Link)`
  margin: 10px 0;
`;

const InnerLink = styled.span`
  color: #232323;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-out;

  :hover {
    color: #232323;
  }
`;

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Nosotros | Primera Fintech para todos</title>
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
      <TopLineWrapper>
        <TopLineTextWrapper>
          <TopLineTitle>Llegamos para ayudarte a mejorar tus finanzas de la mejor forma</TopLineTitle>
          <TopLineSubtitle>Te ayudamos a encontrar tu préstamo en segundos</TopLineSubtitle>
        </TopLineTextWrapper>
      </TopLineWrapper>
      <MainTitle>Hasta $10.000.000</MainTitle>
      <div className='w-full'>
        <img style={{ width:'100%', paddingBottom:'20px' }} src={hero.src} alt="monefin" />
      </div>
      <Text>Monefin.net es una plataforma online que te ayuda a encontrar las mejores ofertas de préstamos para tu perfil y ubicación de una forma muy sencilla.</Text>
      <Text>La tecnología exclusiva de nuestro sistema permite que en pocos segundos podamos definir las mejores ofertas de préstamos que más te convienen.</Text>
      <h3 style={{ margin:'0%' }}>¿Por que somos diferentes?</h3>
      <Text>Con la búsqueda personalizada de monefin ya no perdés tiempo con llamadas o largas esperas. En pocos segundos elegís y después se contactan contigo.
            monefin utiliza tecnología 100% segura que protege la privacidad de tu experiencia en el sitio.
      </Text>
      <WrappedLink href="/prestamos" passHref style={{ textDecoration: 'none', width: '80%', textAlign: 'center', background: '#bea9ed', padding: '15px', borderRadius: '10px' }}><InnerLink>Buscar préstamos</InnerLink></WrappedLink>
      <Disclaimer>

      Por favor, lea detenidamente los siguientes Términos y Condiciones (“Términos”) antes de utilizar www.monefin.net (“el Sitio”), operado por Pacific Creative Lab LTD (“la Compañía”, “nosotros”, “nos” o “nuestro”). La dirección registrada de la Compañía es Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves.

Estos Términos se rigen e interpretan de acuerdo con las leyes de San Cristóbal y Nieves. Cualquier disputa derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de dicho país. Los datos transmitidos y cedidos en o a través del Sitio son propiedad exclusiva de Pacific Creative Lab LTD. Al utilizar el Sitio, usted acepta que cualquier información proporcionada podrá ser utilizada por la Compañía conforme a la legislación aplicable y a nuestra Política de Privacidad.

Pacific Creative Lab LTD no es una entidad financiera ni otorga préstamos. El sitio monefin.net funciona únicamente como un comparador gratuito de servicios financieros ofrecidos por terceros. Toda la información publicada tiene fines informativos y publicitarios. La contratación de cualquier servicio o producto se realiza directamente con las entidades financieras correspondientes, bajo sus propias condiciones y políticas de aprobación crediticia.

El otorgamiento de préstamos está sujeto a evaluación crediticia y a las condiciones definidas por cada entidad financiera. En caso de aprobarse un préstamo, el monto, plazo, tasa de interés y demás condiciones serán determinadas exclusivamente por la entidad elegida.

Ejemplo orientativo: Para un préstamo de $200.000 en 36 meses, Tasa Nominal Anual (TNA) fija del 88.8%, Tasa Efectiva Anual (TEA) fija del 192.47%, Costo Financiero Total Nominal Anual (CFTNA) del 112.19%. Para un préstamo de $5.000 a 90 días con TNA del 88.8%, el cliente devolverá $5.949,21. Las tasas pueden variar según la entidad financiera, el perfil crediticio y el contexto normativo.
</Disclaimer>
      <Footer />
    </Wrapper>
    </ScreenWrapper>
  );
};

export default Home;
