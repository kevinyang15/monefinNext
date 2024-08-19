// pages/404.tsx
import { NextPage } from 'next';
import Link from 'next/link';
import img01 from '../public/assets/monefin-pj-blog.svg'
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import Footer from '../containers/Footer';


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

const Custom404: NextPage = () => {
  return (
    <ScreenWrapper>
    <div className="flex flex-col items-center py-28 bg-gray-100 text-center p-4">
      <img
        src={img01.src}
        alt="Imagen de página no encontrada"
        className="w-1/4 max-w-xs mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Página no encontrada</p>
      <p className="text-md text-gray-500 mt-2 mb-5">Lo siento, no pudimos encontrar la página que estás buscando.</p>
      <Link href="/">
        <div className="bg-[#b7a2e6] text-[#232323] py-4 px-6 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e] w-fit">Volver a la página principal</div>
      </Link>
    </div>
    <Footer />
    </ScreenWrapper>
  );
};

export default Custom404;
