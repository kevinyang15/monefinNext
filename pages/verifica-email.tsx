import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import useFormStore from '../state/useFormStore';
import LogoImg from '../public/assets/logo.svg';
import Button from '../components/Button';
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

const VerificaEmail = () => {
  const router = useRouter();
  const { email, nombrecompleto } = useFormStore();
  const [cooldown, setCooldown] = useState<number>(0);

  const webUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${LogoImg.src}`
    : '';

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    let timer: any;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const firstName = useMemo(() => {
    if (!nombrecompleto) return 'Usuario';
    const parts = nombrecompleto.split(' ');
    return parts.length > 1 ? parts[1] : parts[0];
  }, [nombrecompleto]);

  const resend = async () => {
    if (!email) return;
    setCooldown(30);
    try {
      await fetch('/api/sendVerification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (!email) {
      router.replace('/prestamos');
    } else {
      // trigger first email if arrived here directly
      resend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Confirmá tu email | Monefin</title>
        <meta name="description" content="Confirmá tu correo para continuar con tu solicitud." />
        <link rel="canonical" href={webUrl} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Confirmá tu email" />
        <meta property="og:description" content="Confirmá tu correo para continuar con tu solicitud." />
        <meta property="og:url" content={webUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logoUrl} />
      </Helmet>
      <Wrapper>
        <TitleText>Revisá tu correo</TitleText>
        <Subtext>
          {email ? `Te enviamos un correo a ${email}. Abrilo y tocá en "Confirmar" para continuar.` : 'Te redirigimos al formulario...'}
        </Subtext>
        <Button
          disabled={cooldown > 0}
          backgroundColor="#BDA1EC"
          textColor="#232323"
          text={cooldown > 0 ? `Reenviar en ${cooldown}s` : 'Reenviar correo'}
          onClick={resend}
        />
        <Spacer size={20} />
        <Subtext>Si no lo ves, revisá tu carpeta de Spam o Promociones.</Subtext>
      </Wrapper>
    </ScreenWrapper>
  );
};

export default VerificaEmail;

