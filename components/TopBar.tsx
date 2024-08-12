import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LogoImg from '../public/assets/logo.svg';
import Image from 'next/image';  // Importa la etiqueta Image de Next.js


const Wrapper = styled.div`
  width: calc(100% - 140px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 70px;


  @media (orientation: portrait) and (max-width: 767px) {
    padding: 15px 0;
    justify-content: center;
  }

  @media (min-width: 768px) {
  .logoHome {
    width: 80%;
  }
}

/* Dispositivos móviles */
@media (max-width: 767px) {
  .logoHome {
    width: 80%;
    
  }
  .menuMobile {
    display: none;
  }
}
`;

const CustomLink = styled.a`
  /* color: ${({ theme }) => theme.colors.basic100}; */
  color: #232323;
  font-size: 17px;
  font-weight: 600;;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;

  @media (orientation: portrait) and (max-width: 767px) {
    display: none;
  }
    
`;



const TopBar = () => {
  const router = useRouter();
  
  const onClickLogo = () => router.push('/');
  
  const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <Wrapper style={{ display: 'flex', justifyContent: 'Center', width: '100%'}}>
      
      <div>
         {isDarkMode ? (
           <Image  className='logoHome' src={LogoImg} alt="monefin" width={200} height={50} onClick={onClickLogo}/>
           ) : (
             <Image  className='logoHome' src={LogoImg} alt="monefin" width={200}  height={50} onClick={onClickLogo}/>
            )}      
      </div>
      <div className='menuMobile'>
        <Link href="/buscar-ofertas" passHref>
          <CustomLink style={{ padding: '20px' }}>Buscar</CustomLink>
        </Link>
        <Link href="/nosotros" passHref>
          <CustomLink style={{ padding: '20px' }}>¿Qué hacemos?</CustomLink>
        </Link>
        <Link href="/faq" passHref>
          <CustomLink style={{ padding: '20px' }}>FAQ</CustomLink>
        </Link>
        <CustomLink href="https://blog.monefin.net" target="_blank" rel="noopener noreferrer" style={{ padding: '20px' }}>Blog</CustomLink>
        <Link href="/contacto" passHref>
          <CustomLink style={{ padding: '20px' }}>Contacto</CustomLink>
        </Link>
        {/* <Link href="/terminos" passHref>
          <CustomLink style={{ padding: '20px' }}>Términos</CustomLink>
        </Link> */}
      </div>
    </Wrapper>
  );
};

export default TopBar;
