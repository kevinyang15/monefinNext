// src/components/Cards.tsx
import React from 'react';

interface CardProps {
  id: number;
  imagen: string;
  titulo: string;
  subtitulo: string;
  texto: string;
  content: string;
  description?: string;
  button: string;
  url: string;
  recomendado: boolean;
}

const Cards: React.FC<CardProps> = ({ imagen, titulo, subtitulo, texto, content, description, button, url, recomendado }) => {
  return (
    <a href={url} target="" rel="noopener noreferrer" className="block border border-[#BDA1EC] rounded-2xl p-4 shadow-lg bg-white hover:shadow-xl transition-shadow duration-200 w-full mb-4">
     <div className='flex justify-end sm:justify-start'>
      {recomendado && <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">RECOMENDADO</span>}
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <img src={imagen} alt="Imagen" className="w-28 h-28 rounded-lg" />
        <div className="ml-4 flex flex-col md:inline">
          <h2 className="md:text-2xl text-xl font-bold">{titulo}</h2>
          <p className="text-gray-600 text-sm md:text-base">{subtitulo}</p>
          <p className="mt-2 text-sm md:text-base">{texto}</p>
          <p className="mt-1 text-green-600  text-xs md:text-sm">{content}</p>
          {description && <p className="mt-1 text-gray-600  text-xs md:text-sm">{description}</p>}
          <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg">{button}</button>
        </div>
      </div>
    </a>
  );
};

export default Cards;
