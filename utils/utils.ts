export const sleep = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

// Secure random alphanumeric code
export function generateUserCode(length: number = 16): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = new Uint32Array(length);
  // Use webcrypto when available; fallback to Node crypto
  try {
    (globalThis.crypto as Crypto).getRandomValues(randomValues);
  } catch (_) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { webcrypto } = require('crypto');
    webcrypto.getRandomValues(randomValues);
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += alphabet[randomValues[i] % alphabet.length];
  }
  return result;
}

export const CODE_REGEX = /^[A-Za-z0-9]{6,64}$/;

// Minimal JWT-like HMAC token (header.payload.signature) using base64url
type SessionPayload = {
  code: string;
  dni: string;
  email: string;
  phone: string;
  employment: string;
  bank: any;
  nombrecompleto?: string;
  iat?: number;
  exp?: number;
};

function base64url(input: Buffer | string): string {
  const buff = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buff.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64urlJson(obj: unknown): string {
  return base64url(Buffer.from(JSON.stringify(obj)));
}

export function signSessionToken(payload: SessionPayload, opts?: { expiresInSec?: number; secret?: string }): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + (opts?.expiresInSec ?? 60 * 60 * 24); // default 1 day
  const fullPayload = { ...payload, iat, exp };
  const headerEncoded = base64urlJson(header);
  const payloadEncoded = base64urlJson(fullPayload);
  const data = `${headerEncoded}.${payloadEncoded}`;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const crypto = require('crypto');
  const secret = opts?.secret || process.env.SESSION_SECRET || 'dev-secret-change-me';
  const signature = crypto.createHmac('sha256', secret).update(data).digest('base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${data}.${signature}`;
}

export function verifySessionToken(token: string, opts?: { secret?: string }): SessionPayload | null {
  try {
    const [h, p, s] = token.split('.');
    if (!h || !p || !s) return null;
    const data = `${h}.${p}`;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const crypto = require('crypto');
    const secret = opts?.secret || process.env.SESSION_SECRET || 'dev-secret-change-me';
    const expected = crypto.createHmac('sha256', secret).update(data).digest('base64')
      .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    if (expected !== s) return null;
    const payloadJson = Buffer.from(p.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    const payload = JSON.parse(payloadJson) as SessionPayload;
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && now > payload.exp) return null;
    return payload;
  } catch (_e) {
    return null;
  }
}

export type { SessionPayload };