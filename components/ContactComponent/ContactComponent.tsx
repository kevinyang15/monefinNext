import React from 'react';
import Link  from "next/link";

const ContactComponent: React.FC = () => {
  return (
    <div className="font-sans text-center text-[#232323] p-10 bg-white">
      <h2 className="text-2xl mb-2">¡Hablemos!</h2>
      <p className="text-lg mb-8">Ponéte en contacto con Monefin a través de los siguientes canales</p>
      <div className="flex flex-col items-center mb-10">
        <div className="bg-[#f9f9f9] w-4/5 max-w-lg p-5 my-2 rounded-lg text-center">
          <h3 className="text-[#232323] text-xl mb-2">Ventas (B2B)</h3>
          <p className="mb-1">Sumate a Monefin y aumentá tu colocación de préstamos y tarjetas</p>
          <a className="text-[#8e77b6] no-underline" href="mailto:ventas@monefin.net">ventas@monefin.com.ar</a>
        </div>
        <div className="bg-[#f9f9f9] w-4/5 max-w-lg p-5 my-2 rounded-lg text-center">
          <h3 className="text-[#232323] text-xl mb-2">Soporte Técnico</h3>
          <p className="mb-1">¿Tenés problemas para buscar ofertas? Te podemos ayudar, escribinos a:</p>
          <a className="text-[#8e77b6] no-underline" href="mailto:soporte@monefin.net">soporte@monefin.com.ar</a>
        </div>
      </div>
      <div className="bg-[#bda1ec] text-[#232323] p-8 rounded-lg w-4/5 max-w-lg mx-auto shadow-lg">
        <h2 className="text-2xl mb-2 font-semibold">¡Pedí hoy tu préstamo!</h2>
        <p className="mb-5">Completá un solo formulario y recibí múltiples ofertas en segundos.<br />Sin vueltas ni trámites presenciales.</p>
        <Link href="/prestamos" passHref>
          <div className="bg-[#ECE9DA] text-[#232323] font-bold py-4 px-6 text-lg rounded-lg shadow-lg hover:bg-[#ff814e]">
            Buscar préstamos 💰
          </div>
        </Link>
      </div>
      <div className="mt-10 text-sm text-[#999]">
        <p className="my-1">
        © 2024 Monefin es propiedad de Pacific Creative Lab LTD. con dirección registrada en Diamond 1, Carino Development, Hamilton Estate, Nevis, KN1201, San Cristóbal y Nieves. Todos los derechos reservados.
        </p>
        <p className="my-1">
          <a className="text-[#957bc2] no-underline" href="/terms">Términos y Condiciones</a> | <a className="text-[#957bc2] no-underline" href="/privacidad">Políticas de privacidad</a>
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
