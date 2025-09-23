import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Footer from '../containers/Footer';
import MuiCard from '@mui/material/Card';
import RejectedImg from '../public/assets/rejected.svg';
import imgBlog from '../public/assets/monefin-pj-blog.svg'
import Spacer from '../components/Spacer';
import Button from '../components/Button';

import Cards from '../components/Cards';
import data from '../utils/data.json';

import useFormStore from "../state/useFormStore";

import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';


interface OfferCard {
  id: number;
  name: string;
  imagen: string;
  titulo: string;
  subtitulo: string;
  texto: string;
  content: string;
  description?: string;
  button: string;
  url: string;
  recomendado: boolean;
}

const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 36px;
  padding-bottom: 100px;

  @media (orientation: portrait) and (max-width: 767px) {
    margin: 0 20px;

  }

`;

const WaitImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100px;
  margin-top:20px;
`;

const MainText = styled.div`
  margin: 30px 0 20px 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basic2000};
`;

const Subtext = styled.h4`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic2000};
  margin: 0 0 40px 0;
  text-align: center;
  width: 80%;

  @media (orientation: portrait) and (max-width: 767px) {
    width: 100%;
  }
`;

// const ExtraText = styled.h5`
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.colors.basic2000};
//   margin: 30px 0 0 0;
//   text-align: center;
// `;

// const ButtonWrapper = styled.div`
//   width: 100%;
//   margin-top: 20px;

//   @media (orientation: portrait) and (max-width: 767px) {
//     width: 100%;
//   }
// `;

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

const Results = () => {
  const router = useRouter();
  // const codeFromStore = useFormStore((s) => s.code);
  // const codeFromUrl = router.query.code as string;
  // const code = codeFromUrl || codeFromStore;

  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';
  
  // const theme = useTheme();
  const nombrecompleto = useFormStore((state) => state.nombrecompleto);

  const utmMedium = useFormStore((state) => state.utmMedium);

  // console.log(utmMedium)

  const formatNombreCompleto = (nombre: string) => {
    const [firstName, lastName] = nombre.split(' ');
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return `${capitalize(lastName)} ${capitalize(firstName)}`;
  }

  const goToBlog = () => {
    window.open('https://blog.monefin.net');
  }
  // const goToBlogCard = () => {
  //   window.open('https://blog.monefin.net/tarjeta-santander');
  // }

  const [cards, setCards] = useState<OfferCard[]>([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Ofertas | Buscá Préstamos Online</title>
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
      <div className='flex items-center'>
        <WaitImage src={RejectedImg.src} alt="Resultados" />
        <MainText>{`Ofertas disponibles ${nombrecompleto ? 'para ' + formatNombreCompleto(nombrecompleto) : ''} 🎉`}</MainText>
      </div>
      <div className="flex flex-col items-center justify-center p-4 w-full">
        {/* {cards.map(card => (
          <Cards key={card.id} {...card} />
        ))} */}
{cards
  .filter((card) => {
    // Mostrar todas si el utm es 'capitalya'
    if (utmMedium === 'capitalya') return true;

    // Ocultar solo la de 'capitalya' si no coincide el utm
    return card.name !== 'capitalya';
  })
  .map((card) => (
    <Cards key={card.id} {...card} />
  ))
}
      </div>
      <MuiCard style={{boxShadow:"none"}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <WaitImage src={imgBlog.src} alt="Resultados" />  
        </div>
        <h1 style={{display:'flex',justifyContent:'center',fontSize:'16px',textAlign:'center'}}>Conocé más opciones en nuestro Blog</h1>
        <Button
          width= '100%'
          backgroundColor="#BDA1EC"
          textColor="#232323"
          text="¡Ver más opciones! 💳"
          onClick={goToBlog}
        />
      </MuiCard>
      <Subtext>¡Enteraté las últimas noticias del mundo financiero y que no te agarren de sorpresa!</Subtext>
    
      <Spacer size={80} />
      <Footer />
    </Wrapper>
    </ScreenWrapper>
  )
};

export default Results;
