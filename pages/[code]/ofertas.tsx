import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export { default } from '../ofertas';

type Params = { code: string };

export async function getServerSideProps(
  context: GetServerSidePropsContext<Params>
): Promise<GetServerSidePropsResult<Record<string, unknown>>> {
  const code = context.params?.code ?? '';
  const cookies = context.req.headers.cookie ?? '';
  const match = cookies.match(/(?:^|; )mf_code=([^;]+)/);
  const codeCookie = match ? decodeURIComponent(match[1]) : '';

  if (!code || !codeCookie || codeCookie !== code) {
    return {
      redirect: {
        destination: '/prestamos',
        permanent: false,
      },
    };
  }

  return { props: {} };
}