import type { NextApiRequest, NextApiResponse } from 'next';
import { generateUserCode, signSessionToken } from '../../../utils/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { dni, email, phone, employment, bank, nombrecompleto } = req.body || {};
    if (!dni || !email || !phone || !employment || !bank) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const code = generateUserCode(16);
    const token = signSessionToken({ code, dni, email, phone, employment, bank, nombrecompleto });

    // Optionally set httpOnly cookie with token for later verification
    res.setHeader('Set-Cookie', `session_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24}; Secure`);

    return res.status(200).json({ code, token });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('session/create error', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

