import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

type SendVerificationResponse = {
  ok: boolean;
  message?: string;
  code?: string;
};

function generateShortCode(length = 6): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SendVerificationResponse>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const { email, firstName } = req.body || {};
  if (!email || typeof email !== 'string') {
    res.status(400).json({ ok: false, message: 'Email requerido' });
    return;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const appBaseUrl = process.env.APP_BASE_URL || (req.headers.origin as string) || '';
  const jwtSecret = process.env.VERIFY_JWT_SECRET;

  if (!smtpHost || !smtpUser || !smtpPass || !jwtSecret || !appBaseUrl) {
    res.status(500).json({ ok: false, message: 'Configuración de email inválida' });
    return;
  }

  try {
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '24h' });
    const verifyUrl = `${appBaseUrl}/api/verify?token=${encodeURIComponent(token)}`;
    const code = generateShortCode(6);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const safeName = typeof firstName === 'string' && firstName ? firstName : 'Usuario';
    const html = `
      <div style="font-family: Arial, sans-serif; color: #232323;">
        <h2>Confirmá tu email</h2>
        <p>Hola ${safeName}, gracias por elegir Monefin.</p>
        <p>Para continuar, por favor confirmá tu correo haciendo clic en el botón:</p>
        <p>
          <a href="${verifyUrl}" style="display:inline-block;padding:12px 18px;background:#6C5CE7;color:#fff;text-decoration:none;border-radius:6px;">Confirmar email</a>
        </p>
        <p>Si el botón no funciona, copiá y pegá este enlace en tu navegador:</p>
        <p style="word-break:break-all;">${verifyUrl}</p>
        <hr/>
        <p style="font-size:12px;color:#666;">Este enlace vence en 24 horas.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Monefin <${smtpUser}>`,
      to: email,
      subject: 'Confirmá tu email para continuar - Monefin',
      html,
    });

    res.status(200).json({ ok: true, code });
  } catch (err: any) {
    res.status(500).json({ ok: false, message: err?.message || 'Error enviando email' });
  }
}

