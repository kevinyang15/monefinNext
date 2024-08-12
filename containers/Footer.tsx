import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LogoContrast from '../public/assets/logo.svg';
import Image from 'next/image';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;

// const FooterLogo = styled.img`
//   width: 25%;
//   max-width: 220px;
//   height: auto;
//   align-self: center;
//   margin-top: 60px;
//   cursor: pointer;
// `;

const WrappedLink = styled.a`
  margin: 5px 0;

  @media (orientation: portrait) and (max-width: 767px) {
    margin: 5px 0;
  }
`;

const CustomLink = styled.a`
  color: #232323;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-out;

  :hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const InnerLink = styled.span`
  color: #232323;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-out;

  :hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Footer = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Inicio</InnerLink></WrappedLink>
      </Link>
      <Link href="/buscar-ofertas" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Buscar ofertas</InnerLink></WrappedLink>
      </Link>
      <CustomLink href="https://blog.monefin.net" target="_blank" rel="noopener noreferrer">Blog</CustomLink>
      <Link href="/contacto" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Contacto</InnerLink></WrappedLink>
      </Link>
      <Link href="/nosotros" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>¿Qué hacemos?</InnerLink></WrappedLink>
      </Link>
      <Link href="/faq" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Preguntas Frecuentes</InnerLink></WrappedLink>
      </Link>
      <Link href="/terminos" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Términos y condiciones</InnerLink></WrappedLink>
      </Link>
      <Link href="/privacidad" passHref>
        <WrappedLink style={{ textDecoration: 'none' }}><InnerLink>Políticas de Privacidad</InnerLink></WrappedLink>
      </Link>
      <Image onClick={() => router.push('/')} src={LogoContrast} alt="monefin" width={200}/>
    </Wrapper>
  );
};

export default Footer;
