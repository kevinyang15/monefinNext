import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import LogoImg from '../public/assets/logo.svg';
import WaitImg from '../public/assets/loading-transaction.json';
import EmailImg from '../public/assets/email.json';

import GreenCheck from '../public/assets/check-green.svg';
import Item from '../components/Item';
import Spacer from '../components/Spacer';
import { sleep } from '../utils/utils';

import useFormStore from "../state/useFormStore";


const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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
  font-size: 20px;
  line-height: 24px;
  margin: 20px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic1000};
`;

// const WaitImage = styled.img`
//   width: 60%;
//   height: auto;
//   max-width: 250px;
// `;

const MainText = styled.div`
  margin: 10px 0 20px 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basic2000};
`;

const Subtext = styled.h4`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic2000};
  margin: 5px 0 40px 0;
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

const Wait = () => {
  const router = useRouter();
  const codeFromStore = useFormStore((s) => s.code);
  const needsConfirm = useFormStore((s) => s.needsConfirm);
  const setNeedsConfirm = useFormStore((s) => s.setNeedsConfirm);
  const setCodeStore = useFormStore((s) => s.setCode);
  const pendingId = useFormStore((s) => s.pendingId);
  const email = useFormStore((s) => s.email);
  const codeFromUrl = router.query.code as string;
  const code = codeFromUrl || codeFromStore;
  const webUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${router.route}` : '';
  const logoUrl = typeof window !== 'undefined' 
  ? `${window.location.origin}${LogoImg.src}` 
  : '';
  const [waitOver, setWaitOver] = useState<boolean>(false);
  const [resendAt, setResendAt] = useState<number>(0);
  const [resending, setResending] = useState<boolean>(false);
  const [resendCount, setResendCount] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [justUnlocked, setJustUnlocked] = useState<boolean>(false);
  const isCooldownOver = remaining <= 0;
  const canResend = isCooldownOver && resendCount < 2 && !resending;
  const prevIsCooldownOver = useRef<boolean>(isCooldownOver);
  const nombrecompleto = useFormStore((state) => state.nombrecompleto);

  const goToRejected = () => {
    if (code) router.push(`/${code}/ofertas`);
    else router.push('/prestamos'); // fallback si falta code
  }

  const formatNombreCompleto = (nombre: string) => {
    const [firstName, lastName] = nombre.split(' ');
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return `${capitalize(lastName)} ${capitalize(firstName)}`;
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });

    // Si la cookie mf_confirmed existe, forzar modo no-confirm y continuar flujo
    try {
      const cookies = typeof document !== 'undefined' ? document.cookie : '';
      const confirmed = /(?:^|; )mf_confirmed=true(?:;|$)/.test(cookies);
      if (confirmed && needsConfirm) {
        setNeedsConfirm(false);
      }
      // si no hay code en store pero sí en cookie, recuperarlo
      if (!codeFromStore) {
        const match = cookies.match(/(?:^|; )mf_code=([^;]+)/);
        const codeFromCookie = match ? decodeURIComponent(match[1]) : '';
        if (codeFromCookie) setCodeStore(codeFromCookie);
      }
    } catch {}

    const run = async () => {
      // cargar contador de reintentos y cooldown previos (por pestaña)
      try {
        const idKey = String(pendingId || email || 'anon');
        const storedCount = Number(localStorage.getItem(`mf_resendCount_${idKey}`) || '0');
        if (Number.isFinite(storedCount) && storedCount >= 0) setResendCount(storedCount);
        const storedAt = Number(localStorage.getItem(`mf_resendAllowedAt_${idKey}`) || '0');
        if (Number.isFinite(storedAt) && storedAt > Date.now()) setResendAt(storedAt);
      } catch {}

      if (!needsConfirm) {
        await sleep(50000);
        setWaitOver(true);
      } else if (resendAt === 0) {
        // primer cooldown de 30s (email se envió automáticamente al iniciar el flujo)
        setResendAt(Date.now() + 30000);
      }
    };
    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needsConfirm]);

  // Countdown del cooldown del botón
  useEffect(() => {
    const updateRemaining = () => {
      const secs = Math.max(0, Math.ceil((resendAt - Date.now()) / 1000));
      setRemaining(secs);
    };

    updateRemaining();

    if (resendAt <= Date.now()) {
      setRemaining(0);
      return;
    }

    const id = setInterval(() => {
      updateRemaining();
      if (Date.now() >= resendAt) {
        clearInterval(id);
      }
    }, 250);

    return () => clearInterval(id);
  }, [resendAt]);

  useEffect(() => {
    const wasCooldownOver = prevIsCooldownOver.current;

    if (!isCooldownOver) {
      setJustUnlocked(false);
    } else if (!wasCooldownOver && isCooldownOver && resendCount < 2) {
      setJustUnlocked(true);
    }

    prevIsCooldownOver.current = isCooldownOver;
  }, [isCooldownOver, resendCount]);

  useEffect(() => {
    if (!justUnlocked) return;
    const timeout = setTimeout(() => setJustUnlocked(false), 1600);
    return () => clearTimeout(timeout);
  }, [justUnlocked]);

  useEffect(() => {
    if (waitOver) goToRejected();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitOver]);

  const handleResend = async () => {
    if (!pendingId || !email || !code) return;
    if (resending) return;
    if (!canResend) return;
    if (resendCount >= 2) return;
    try {
      setResending(true);
  
      const r = await fetch('https://resendconfirmationemail-700926948640.europe-west1.run.app', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          pendingId,         // preferible porque es exacto
          // email,          // alternativo si no tenés pendingId
          code               // MUY IMPORTANTE para construir el confirmUrl
        })
      });
  
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        // errores de rate limit
        if (r.status === 429 && data?.retryAfterSeconds) {
          const next = Date.now() + data.retryAfterSeconds * 1000;
          setResendAt(next);
          try { localStorage.setItem(`mf_resendAllowedAt_${String(pendingId || email || 'anon')}`, String(next)); } catch {}
          return;
        }
        // fallback generic
        {
          const next = Date.now() + 30000;
          setResendAt(next);
          try { localStorage.setItem(`mf_resendAllowedAt_${String(pendingId || email || 'anon')}`, String(next)); } catch {}
        }
        return;
      }
  
      // éxito -> arrancá nuevo cooldown
      const nextAt = data?.nextAllowedAt ? new Date(data.nextAllowedAt).getTime() : (Date.now() + 30000);
      setResendAt(nextAt);
      try { localStorage.setItem(`mf_resendAllowedAt_${String(pendingId || email || 'anon')}`, String(nextAt)); } catch {}

      // incrementar contador de reintentos (máx 2)
      setResendCount((prev) => {
        const nextCount = Math.min(2, prev + 1);
        try { localStorage.setItem(`mf_resendCount_${String(pendingId || email || 'anon')}`, String(nextCount)); } catch {}
        return nextCount;
      });
  
    } catch (e) {
      // si falla, igual bloqueamos por 30s para evitar spam del botón
      const next = Date.now() + 30000;
      setResendAt(next);
      try { localStorage.setItem(`mf_resendAllowedAt_${String(pendingId || email || 'anon')}`, String(next)); } catch {}
    } finally {
      setResending(false);
    }
  };

  return (
    <ScreenWrapper>
       <Helmet>
        <title>Buscando... | Buscá Préstamos Online</title>
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
       <TitleText style={{ fontWeight:'800' }}>  
         {`Hola 😁, ${nombrecompleto ? formatNombreCompleto(nombrecompleto) : ''}`}
       </TitleText>
      {needsConfirm ? (
        <>
          <TitleText style={{ fontWeight:'700', textAlign:'center' }}>Confirmá tu email para continuar</TitleText>
          <Lottie animationData={EmailImg} height={150} width={150} style={{ width:'200px' }}/> 
          <MainText style={{ textAlign:'center' }}>Te enviamos un correo con el enlace de confirmación.</MainText>
          <button
            onClick={handleResend}
            disabled={!canResend}
            className="px-4 py-2 rounded-md"
            style={{
              background: resendCount >= 2 ? '#f8d7da' : canResend ? '#8358E8' : '#d1c6f2',
              color: resendCount >= 2 ? '#6b1d1d' : '#232323',
              fontWeight: 600,
              minWidth: 180,
              cursor: canResend ? 'pointer' : 'not-allowed',
              opacity: resending ? 0.85 : 1,
              transform: justUnlocked ? 'scale(1.05)' : 'scale(1)',
              boxShadow: justUnlocked ? '0 0 0 6px rgba(131, 88, 232, 0.35)' : 'none',
              transition: 'transform 0.25s ease, box-shadow 0.35s ease, background 0.3s ease, opacity 0.2s ease'
            }}
            >
            {resendCount >= 2
              ? 'Intentos agotados'
              : resending
                ? 'Reenviando…'
                : canResend
                  ? 'Reenviar email'
                  : `Esperá ${remaining}s`}
          </button>
          <Subtext style={{ textAlign:'center', fontSize:'12px' }}>
            {resendCount < 2
              ? `Podrás reenviar ${2 - resendCount} vez${(2 - resendCount) === 1 ? '' : 'es'} más. ${canResend ? '' : `Disponible en ${remaining}s.`}`
              : 'Ya utilizaste el máximo de reenvíos.'}
          </Subtext>
        </>
      ) : (
        <>
          <TitleText style={{ fontWeight:'700' }}>Buscando ofertas...</TitleText>
          <Lottie animationData={WaitImg} height={150} width={150} style={{ width:'200px' }}/> 
          <MainText>¡Gracias por elegirnos!</MainText>
          <Subtext>¡Estamos buscando las mejores ofertas! Faltan <strong>algunos segundos...</strong></Subtext>
        </>
      )}
      <Spacer size={30} />
      {/* <Footer /> */}
    </Wrapper>
    </ScreenWrapper>
  );
};

export default Wait;
