import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white lg:px-6">
      <div className="lg:p-2">
        <p className="pl-1 lg:pl-2 text-sm md:text-2xl lg:text-3xl font-bold mb-4 text-gray-300 uppercase text-left">{"<"}Olá, eu sou Matheus{"/>"}</p>
        <div className="flex flex-row lg:items-center">
          <p className="pl-[1px] text-5xl md:text-7xl lg:text-9xl font-bold text-gray-300 uppercase lg:text-center" style={{ lineHeight: "0.8" }}>
            FULLSTACK
          </p>
          <div className="hidden lg:visible lg:flex space-x-2 lg:space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/matheus55391" target="_blank" rel="noopener noreferrer" className="text-[16px] lg:text-[32px]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/" target="_blank" rel="noopener noreferrer" className="text-[16px] lg:text-[32px]">
              <FaLinkedin />
            </a>
            <a href="mailto:matheus.felipe55391@gmail.com" className="text-[16px] lg:text-[32px]">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <p className="text-6xl md:text-10xl lg:text-11xl font-bold text-gray-300 uppercase text-left mb-2" style={{ lineHeight: "0.8" }}>
          DEVELOPER
        </p>
        <p className="pl-1 uppercase lg:text-right text-[10px] lg:text-[16px]">3 anos de experiência como desenvolvedor full stack.</p>

      </div>
      <p className="pl-1 uppercase lg:text-right text-[10px] lg:text-[16px]">Contatos.</p>
      <div className="flex lg:hidden space-x-2 lg:space-x-4 pt-12 ">
            <a href="https://github.com/matheus55391" target="_blank" rel="noopener noreferrer" className="text-[26px] ">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/" target="_blank" rel="noopener noreferrer" className="text-[26px] ">
              <FaLinkedin />
            </a>
            <a href="mailto:matheus.felipe55391@gmail.com" className="text-[26px] ">
              <FaEnvelope />
            </a>
        </div>
    </div>
  );
};

export default Home;
