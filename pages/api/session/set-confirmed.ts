export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const isSecure = process.env.NODE_ENV === 'production';
    const cookie = [
      'mf_confirmed=true',
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      isSecure ? 'Secure' : '',
      'Max-Age=604800'
    ].filter(Boolean).join('; ');

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': cookie,
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'internal' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}