import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  const jwtSecret = process.env.VERIFY_JWT_SECRET;

  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  if (!token || typeof token !== 'string' || !jwtSecret) {
    res.status(400).json({ ok: false, message: 'Token inválido' });
    return;
  }

  try {
    const payload = jwt.verify(token, jwtSecret) as { email: string };
    const email = payload.email;

    // Set a short-lived cookie that marks the session as verified
    res.setHeader('Set-Cookie', [
      `monefin_verified=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 6}`,
    ]);

    // Redirect to confirmation page
    res.writeHead(302, { Location: `/confirmacion?email=${encodeURIComponent(email)}` });
    res.end();
  } catch (err: any) {
    res.status(400).json({ ok: false, message: 'Token inválido o expirado' });
  }
}

