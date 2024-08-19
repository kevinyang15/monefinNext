import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import HeroImage from "../../public/assets/hero-monefin-desktop.jpg";
import HeroImageMobile from "../../public/assets/hero-monefin.jpg";
import appImage from "../../public/assets/appmonefin.jpg";
import Img01 from "../../public/assets/guia-completa-para-salir-del-veraz-2024.jpg";
import Img02 from "../../public/assets/prestamos-de-100-millones.jpg";
import Img03 from "../../public/assets/prestamos-autos-argentina.jpg";
import SignMonefin from "../../public/assets/cartelmonefin.json";
import CardIcon from "../../public/assets/tarjetas-home.svg";
import LoanIcon from "../../public/assets/prestamos-home.svg";
import HipoIcon from "../../public/assets/hipoteca-home.svg";
import CarIcon from "../../public/assets/autos-home.svg";
import BusinessIcon from "../../public/assets/negocios-home.svg";
import AppleStore from "../../public/assets/apple-store.svg";
import GoogleStore from "../../public/assets/google-store.svg";
import { FaCreditCard, FaChartLine, FaLightbulb } from "react-icons/fa";
import Footer from "../../containers/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-200">
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center py-24 md:px-32 px-4 bg-[#ece9da] overflow-hidden shadow-[0px_-2px_13px_9px_#2323232e]">
        {/* Imagen de fondo móvil */}
        {/* Contenido del Hero */}
        <div className="relative z-10 text-left w-full px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#232323]">
              Donde el Crédito se encuentra{" "}
              <span className="text-[#bda1ec]">con la confianza.</span>
            </h1>
            <p className="text-lg font-medium md:text-xl mb-10 text-[#232323]">
              Monefin utiliza tu perfil de crédito para mostrarte
              recomendaciones seleccionadas. Encontrá Préstamos y/o Productos
              Financieros en segundos! Sin vueltas y muy fácil.
            </p>
            <Link href="/prestamos" passHref>
              <div className="bg-[#b7a2e6] text-[#232323] py-4 px-6 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e] w-fit">
                Buscar préstamos 💰
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 md:hidden pt-5 w-full">
          <Lottie animationData={SignMonefin} style={{ width: "" }} />
        </div>
        {/* Imagen de fondo */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src={HeroImage.src}
            alt="Hero Background"
          />
        </div>
      </div>

      <div className="md:hidden">
        <img
          src={HeroImageMobile.src}
          alt="Hero Background Mobile"
        />
      </div>

      {/* Categories Section */}
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-6 gap-0 md:py-8 py-0 bg-white">
        <Link href="/prestamos" passHref>
          <div className="bg-[#232323] text-[#232323] md:py-1 md:px-1 py-0 px-0 text-lg font-bold md:rounded-lg rounded-none shadow-lg hover:bg-[#ff814e] md:w-auto w-full">
            <div className="text-center bg-[#e1d0bc] md:rounded-lg rounded-none md:w-52 md:h-52 w-full h-52 align-middle flex flex-col justify-center shadow-lg">
              <div className="text-3xl px-5 mb-2 flex justify-center">
                <img src={CardIcon.src} className="" width={100} height={100} alt="" />
              </div>
              <p className="font-bold text-[#232323]">Tarjetas de Crédito</p>
            </div>
          </div>
        </Link>

        <Link href="/prestamos" passHref>
          <div className="bg-[#232323] text-[#232323] md:py-1 md:px-1 py-0 px-0 text-lg font-bold md:rounded-lg rounded-none shadow-lg hover:bg-[#ff814e] md:w-auto w-full">
            <div className="text-center bg-[#bda1ec] md:rounded-lg rounded-none md:w-52 md:h-52 w-full h-52 align-middle flex flex-col justify-center shadow-lg">
              <div className="text-3xl mb-2 flex justify-center">
                <img src={LoanIcon.src} className="w-24 h-24" width={100} height={100} alt="" />
              </div>
              <p className="font-bold text-[#232323]">Préstamos Personales</p>
            </div>
          </div>
        </Link>

        <Link href="/prestamos" passHref>
          <div className="bg-[#232323] text-[#232323] md:py-1 md:px-1 py-0 px-0 text-lg font-bold md:rounded-lg rounded-none shadow-lg hover:bg-[#ff814e] md:w-auto w-full">
            <div className="text-center bg-[#ece9da] md:rounded-lg rounded-none md:w-52 md:h-52 w-full h-52 align-middle flex flex-col justify-center shadow-lg">
              <div className="text-3xl mb-2 flex justify-center">
                <img src={HipoIcon.src} className="w-24 h-24" width={100} height={100} alt="" />
              </div>
              <p className="font-bold text-[#232323]">Hipotecas</p>
            </div>
          </div>
        </Link>

        <Link href="/prestamos" passHref>
          <div className="bg-[#232323] text-[#232323] md:py-1 md:px-1 py-0 px-0 text-lg font-bold md:rounded-lg rounded-none shadow-lg hover:bg-[#ff814e] md:w-auto w-full">
            <div className="text-center bg-[#ff814e] md:rounded-lg rounded-none md:w-52 md:h-52 w-full h-52 align-middle flex flex-col justify-center shadow-lg">
              <div className="text-3xl mb-2 flex justify-center">
                <img src={CarIcon.src} className="w-24 h-24" width={100} height={100} alt="" />
              </div>
              <p className="font-bold text-[#232323]">Préstamos para Autos</p>
            </div>
          </div>
        </Link>

        <Link href="/prestamos" passHref>
          <div className="bg-[#232323] text-[#232323] md:py-1 md:px-1 py-0 px-0 text-lg font-bold md:rounded-lg rounded-none shadow-lg hover:bg-[#ff814e] md:w-auto w-full">
            <div className="text-center bg-[#a2eac7] md:rounded-lg rounded-none md:w-52 md:h-52 w-full h-52 align-middle flex flex-col justify-center shadow-lg">
              <div className="text-3xl mb-2 flex justify-center">
                <img src={BusinessIcon.src} className="w-24 h-24" width={100} height={100} alt="" />
              </div>
              <p className="font-bold text-[#232323]">Préstamos para Negocios</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Information Cards */}
      <div className="flex flex-wrap justify-center gap-6 py-8 px-4">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-xs text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Construí tu score <br />
            de crédito <br />
            fácilmente.{" "}
          </h2>
          <p className="text-base mb-8 h-24">
            Podés mejorar tu historial crediticio en poco tiempo con nuestro
            programa especializado en el manejo de crédito.
          </p>
          <Link href="/prestamos" passHref>
            <div className="bg-[#b7a2e6] text-[#232323] py-4 px-6 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e]">
              Empezar ahora 🚀
            </div>
          </Link>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-xs text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Obtené el alivio personalizado que necesitas.
          </h2>
          <p className="text-base mb-8 h-24">
            Monefin te conecta con el apoyo del gobierno y opciones de alivio de
            deuda personalizadas.
          </p>
          <Link href="/prestamos" passHref>
            <div className="bg-[#b7a2e6] text-[#232323] py-4 px-6 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e]">
              Saber cómo 💸
            </div>
          </Link>
        </div>
      </div>

      {/* Financial Health Section */}
      <div className="bg-[#ece9da] py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Tu progreso financiero comienza con la salud crediticia
        </h2>
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex md:flex-row flex-col justify-between mb-8 gap-6">
            <div className="flex-1 max-w-xs bg-[#fff] p-10 shadow-lg rounded-lg">
              <FaCreditCard className="mx-auto mb-2 text-4xl text-[#b7a2e6]" />
              <h3 className="text-xl font-semibold mb-2">
                Monitoreo de Crédito
              </h3>
              <p>Recibí alertas sobre cambios importantes en tus reportes.</p>
            </div>

            <div className="flex-1 max-w-xs bg-[#fff] p-10 shadow-lg rounded-lg">
              <FaChartLine className="mx-auto mb-2 text-4xl text-[#b7a2e6]" />
              <h3 className="text-xl font-semibold mb-2">Perspectivas</h3>
              <p>
                Aprendé qué afecta tu puntaje y qué podés hacer para mejorarlo.
              </p>
            </div>

            <div className="flex-1 max-w-xs bg-[#fff] p-10 shadow-lg rounded-lg">
              <FaLightbulb className="mx-auto mb-2 text-4xl text-[#b7a2e6]" />
              <h3 className="text-xl font-semibold mb-2">Mejores Decisiones</h3>
              <p>
                Recibí recomendaciones personalizadas para usar tu crédito de
                manera más sabia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ece9da] flex md:flex-row flex-col py-12 md:px-4 px-0 text-center align-middle items-center">
        <div className="md:w-2/4 w-full flex md:justify-end justify-center pb-8">
          <img className="w-3/4 rounded-xl shadow-md" src={appImage.src} alt="" width={300} />
        </div>
        <div className="md:w-2/4 w-full flex-col md:px-10 px-0 flex justify-center">
          <p className="text-lg mb-8 md:text-left text-center font-semibold px-5 md:px-20">
            <span className="text-[#967dc1]">PROXIMAMENTE!</span> Vas a podér
            descargarte la app y unirte a millones de usuarios que están
            avanzando financieramente.
          </p>
          <div className="flex justify-center text-left gap-4 mb-8 md:px-0 px-5">
            <Link href="#" passHref>
              <div className="bg-[#b7a2e6] text-[#232323] py-1 px-1 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e]">
                <img  src={AppleStore.src} alt="" width={200} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="bg-[#b7a2e6] text-[#232323] py-1 px-1 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e]">
                <img src={GoogleStore.src} alt="" width={200} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Articles and Resources */}
      <div className="text-center py-8 px-4 bg-[#e5e7eb]">
        <h2 className="text-3xl font-bold mb-5">Artículos y recursos</h2>
        <p className="text-lg mb-5">
          Consejos editoriales para ayudarte a alcanzar tus objetivos
          financieros.
        </p>

        <div className="flex md:flex-row flex-col justify-center gap-6 md:px-96 px-5">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <img
              className="rounded-xl py-2"
              src={Img01.src}
              width={300}
              height={200}
              alt=""
              // layout="responsive"
            />
            <h2 className="font-semibold text-xl px-5">
              Guia completa para salir del Veraz solo con tu DNI y Gratis este
              2024.
            </h2>
            <p className="py-2 text-justify px-5">
              Salir del Veraz puede parecer un desafío complicado, pero te
              explicamos como es posible hacerlo utilizando solo tu DNI.
            </p>
            <Link
              href="https://blog.monefin.net/guia-completa-para-salir-del-veraz-solo-con-tu-dni-y-gratis/"
            >
              <div className="bg-[#b7a2e6] text-[#232323] py-2 my-5 px-3 text-base font-semibold rounded-lg hover:bg-[#ff814e]"
              >
              Leer nota
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-full">
            <img
              className="rounded-xl py-2"
              src={Img02.src}
              width={300}
              height={200}
              alt=""
              // layout="responsive"
            />
            <h2 className="font-semibold text-xl px-5">
              Préstamos de $100 millones a pagar en 60 cuotas. Te contamos cómo
              acceder.
            </h2>
            <p className="py-2 h-full px-5 text-justify">
              Te contamos todos Los detalles de la línea de préstamos que
              presentó una entidad privada. Requisitos, tasas y cómo pedirlo
            </p>
            <Link
              href="https://blog.monefin.net/prestamos-de-100-millones-a-pagar-en-60-cuotas-quienes-pueden-acceder-y-como-solicitarlo/"
            >
              <div className="bg-[#b7a2e6] text-[#232323] py-2 my-5 px-3 text-base font-semibold rounded-lg hover:bg-[#ff814e]"
              >
              Leer nota
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-full">
            <img
              className="rounded-xl py-2"
              src={Img03.src}
              width={300}
              height={200}
              alt=""
              // layout="responsive"
            />
            <h2 className="font-semibold text-xl px-5">
              El Banco Ciudad lanzó préstamos para la compra de autos hechos en
              la Argentina.
            </h2>
            <p className="py-2 h-full px-5 text-justify">
              El Banco Ciudad presentó una oferta de préstamos para financiar la
              adquisición de vehículos nacionales 0km.
            </p>
            <Link
              href="https://blog.monefin.net/el-banco-ciudad-lanzo-prestamos-para-la-compra-de-autos-hechos-en-la-argentina/"
            >
              <div className="bg-[#b7a2e6] text-[#232323] py-2 my-5 px-3 text-base font-semibold rounded-lg hover:bg-[#ff814e]"
              >
              Leer nota
              </div>
            </Link>
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <Link
            href="https://blog.monefin.net"
          >
            <div className="bg-[#b7a2e6] text-[#232323] py-4 px-24 text-lg font-bold rounded-lg shadow-lg hover:bg-[#ff814e]"
            >
            Leer Más 📚
            </div>
          </Link>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-white py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Estamos aquí para protegerte</h2>
        <p className="mb-4">Tratamos tus datos como si fueran nuestros.</p>
        <p className="mb-0 text-sm">
          No compartimos tu información personal con terceros no afiliados para
          sus fines publicitarios o de marketing.
          <br />
          Tomamos tu seguridad muy en serio. Usamos encriptación de 128 bits o
          superior para proteger la transmisión de tus datos a nuestro sitio.
        </p>
      </div>



      <div>
        <Footer />
        <h3>All rights reserved - Monefin</h3>
      </div>
    </div>
  );
};

export default LandingPage;
