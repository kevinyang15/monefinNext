import type { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = ctx.query as { token?: string };
  const { verifySessionToken } = await import('../utils/utils');

  if (!token || typeof token !== 'string') {
    return { redirect: { destination: '/', permanent: false } };
  }

  const payload = verifySessionToken(token);
  if (!payload || !payload.code) {
    return { redirect: { destination: '/', permanent: false } };
  }

  // Persist data in backend after verification
  try {
    const timestamp = new Date();
    await fetch('https://us-central1-monefinweb.cloudfunctions.net/MonefinGetDni', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dni: payload.dni,
        email: payload.email,
        phone: payload.phone,
        employment: payload.employment,
        bank: payload.bank,
        timestamp: `${timestamp.getDate().toString().padStart(2,'0')}-${(timestamp.getMonth()+1).toString().padStart(2,'0')}-${timestamp.getFullYear()}`
      })
    });
  } catch (_e) {
    // swallow to avoid blocking user flow
  }

  // Set cookies and redirect to prefixed flow
  ctx.res.setHeader('Set-Cookie', [
    `session_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24}; Secure`,
    `session_code=${payload.code}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24}; Secure`,
  ]);

  return {
    redirect: {
      destination: `/${payload.code}/espera`,
      permanent: false,
    },
  };
};

export default function Verify() {
  return null;
}

