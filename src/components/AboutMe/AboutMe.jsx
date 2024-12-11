import React from "react";
import Link from "@nextui-org/react/link";
import Image from "next/image";
import { FaInstagram, FaBehance } from "react-icons/fa";
import allieImg from "../../assets/allie.png";

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around p-4 w-full sm:w-3/4 lg:w-[50vw] mx-auto items-center">
      <div className="flex flex-col justify-center md:w-3/4 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg leading-relaxed text-justify">
          Aline Lima Cabral, conhecida nos meios virtuais como Aline Cali, iniciou sua jornada como artista em 2011, e atua hoje como ilustradora, quadrinista e designer. Bacharel em Artes Visuais pelo Centro de Artes da Universidade Federal de Pelotas (UFPel), possui um amplo leque de estilos capazes de agradar vários públicos diferentes. Inspirada pelas páginas dos quadrinhos e pelas animações japonesas, sua imaginação extremamente criativa é capaz de transformar qualquer suporte em uma verdadeira obra de arte.
        </p>
        <div className="mt-4">
          <p className="text-xl font-semibold">Mídias Sociais</p>
          <ul className="mt-2 flex justify-center gap-4">
            <Link
              href="https://www.instagram.com/artofalinecali"
              target="_blank"
              aria-label="Acesse o perfil da Aline Cali no Instagram"
              className="text-softWhite hover:text-softRed flex items-center"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.behance.net/alinecaliart"
              target="_blank"
              aria-label="Acesse o portfólio da Aline Cali no Behance"
              className="text-softWhite hover:text-softRed flex items-center"
            >
              <FaBehance size={24} />
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center md:w-1/4 mt-4 md:mt-0">
        <Image
          src={allieImg}
          alt="Aline Lima Cabral - ilustradora e quadrinista"
          width={160}  
          height={160} 
          className="rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMe;
