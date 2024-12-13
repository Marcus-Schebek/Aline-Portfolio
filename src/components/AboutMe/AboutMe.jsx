import React from 'react';
import { Link } from "@nextui-org/react";
import { FaInstagram, FaBehance } from "react-icons/fa";
import allieImg from "../../assets/allie.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4 w-[50vw] mx-auto align-middle">
      <div className="flex flex-col justify-center md:w-3/4">
        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg leading-relaxed">
          Aline Lima Cabral, conhecida nos meios virtuais como Aline Cali, iniciou sua jornada como artista em 2011, e atua hoje como ilustradora, quadrinista e designer. Bacharel em Artes Visuais pelo Centro de Artes da Universidade Federal de Pelotas (UFPel), possui um amplo leque de estilos capazes de agradar vários públicos diferentes. Inspirada pelas páginas dos quadrinhos e pelas animações japonesas, sua imaginação extremamente criativa é capaz de transformar qualquer suporte em uma verdadeira obra de arte.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Mídias Sociais</h3>
          <ul className="mt-2 flex gap-4">
            <Link href="https://www.instagram.com/artofalinecali" target="_blank" className="text-softWhite hover:text-softRed flex items-center">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://www.behance.net/alinecaliart" target="_blank" className="text-softWhite hover:text-softRed flex items-center">
              <FaBehance size={24} />
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center md:w-1/4">
        <img 
          src={allieImg}
          alt="Aline Lima Cabral" 
          className="rounded-full w-56 h-56 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;