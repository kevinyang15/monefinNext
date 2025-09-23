import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import useFormStore from '../state/useFormStore';

const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic100};
  width: 100%;
  border-radius: 1px;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 767px) {
    width: 70%;
    border-radius: 15px;
    margin: 40px auto;
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

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.basic1000};
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.basic1000};
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.basic1000};
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  color: #232323;
  padding: 14px 22px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.basic1000};
    color: #f5f5f5;
  }
`;

const Small = styled.p`
  font-size: 12px;
  color: #8a8a8a;
`;

type Status = 'loading' | 'success' | 'already' | 'expired' | 'error';

const EmailConfirmed: React.FC = () => {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('loading');
  const [code, setCode] = useState<string>('');
  const setNeedsConfirm = useFormStore((s) => s.setNeedsConfirm);
  const setCodeStore = useFormStore((s) => s.setCode);

  useEffect(() => {
    const run = async () => {
      // Esperar a que carguen los query params
      if (!router.isReady) return;
      const id = String(router.query.id || '');
      const token = String(router.query.token || '');
      const codeQP = String(router.query.code || ''); // MUY RECOMENDADO pasarlo en el link del mail

      if (!id || !token) {
        setStatus('error');
        return;
      }

      try {
        // Llamada a Cloud Function real confirm
        const qs = new URLSearchParams({ id, token });
        if (codeQP) qs.set('code', codeQP);

        const r = await fetch(
          'https://confirmpendingsignup-700926948640.europe-west1.run.app?' + qs.toString(),
          { method: 'GET' }
        );

        const data = await r.json().catch(() => ({}));

        if (r.status === 410) {
          setStatus('expired'); // token expirado
          return;
        }
        if (!data.ok && !data.already) {
          setStatus('error');
          return;
        }

        // Éxito o ya estaba confirmado (idempotencia)
        setStatus(data.already ? 'already' : 'success');

        // Guardar code (de query, o si tu CF lo devuelve en data.code, usalo)
        const finalCode = codeQP || data.code || '';
        setCode(finalCode);

        // Marcar confirmado en cookies (export estático) y actualizar store
        try {
          const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
          document.cookie = `mf_confirmed=true; Path=/; SameSite=Lax; ${isSecure ? 'Secure; ' : ''}Max-Age=604800`;
          if (finalCode) {
            document.cookie = `mf_code=${encodeURIComponent(finalCode)}; Path=/; SameSite=Lax; ${isSecure ? 'Secure; ' : ''}Max-Age=604800`;
            setCodeStore(finalCode);
          }
          setNeedsConfirm(false);
        } catch {}

        // Si tenés el code, redirigí directo a la página con prefijo
        if (finalCode) {
          // pequeño delay para que setee cookie antes de navegar
          setTimeout(() => router.replace(`/${finalCode}/espera`), 500);
        }
      } catch (e) {
        setStatus('error');
      }
    };

    run();
  }, [router.isReady]); // eslint-disable-line

  return (
    <ScreenWrapper>
      <Helmet>
        <title>Email confirmado | Monefin</title>
        <meta
          name="description"
          content="Tu email fue confirmado con éxito. Ahora podés comparar préstamos y tarjetas de crédito en Monefin."
        />
        <link rel="canonical" href="https://monefin.net/confirm" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Email confirmado en Monefin" />
        <meta
          property="og:description"
          content="Tu email fue confirmado con éxito. Ahora podés acceder a todas las ofertas de préstamos y tarjetas."
        />
        <meta property="og:url" content="https://monefin.net/confirm" />
        <meta property="og:type" content="website" />
      </Helmet>

      {status === 'loading' && (
        <>
          <Title>Validando tu confirmación…</Title>
          <Small>Un momento, por favor.</Small>
        </>
      )}

      {(status === 'success' || status === 'already') && (
        <>
          <Title>✅ ¡Email confirmado!</Title>
          <Subtitle>Gracias por verificar tu correo.</Subtitle>
          <Text>Ya podés acceder a las mejores ofertas de préstamos y tarjetas.</Text>
          {code ? (
            <Button href={`/${code}/ofertas`}>Ir a mis ofertas</Button>
          ) : (
            // Fallback si no tenés code en query ni response (no ideal si usás middleware estricto)
            <Button href="/prestamos">Comparar préstamos</Button>
          )}
          <Small>Si no ves la redirección automática, hacé clic en el botón.</Small>
        </>
      )}

      {status === 'expired' && (
        <>
          <Title>⚠️ Enlace expirado</Title>
          <Text>Tu enlace de confirmación venció. Pedí uno nuevo desde tu correo o iniciá el flujo otra vez.</Text>
          <Button href="/">Volver al inicio</Button>
        </>
      )}

      {status === 'error' && (
        <>
          <Title>❌ No pudimos confirmar tu email</Title>
          <Text>Revisá el enlace o probá nuevamente. Si el problema persiste, iniciá el flujo otra vez.</Text>
          <Button href="/">Volver al inicio</Button>
        </>
      )}
    </ScreenWrapper>
  );
};

export default EmailConfirmed;