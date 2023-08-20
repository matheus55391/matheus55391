'use client'
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

const sectionIds = ["section-1", "section-2", "section-3"];

const Home: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleClickScroll = (sectionId: number) => {
    const element = document.getElementById(sectionIds[sectionId]);
    if (element) {
      const windowHeight = window.innerHeight;
      const elementHeight = element.clientHeight;
      const offset = (windowHeight - elementHeight) / 2;
      const scrollPosition = element.offsetTop - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToNextSection = () => {
    const nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex < sectionIds.length) {
      handleClickScroll(nextSectionIndex);
      setCurrentSectionIndex(nextSectionIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5;

      const scrolledSection = sectionIds.findIndex((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= scrollThreshold && rect.bottom >= scrollThreshold;
        }
        return false;
      });

      if (scrolledSection !== -1 && scrolledSection !== currentSectionIndex) {
        setCurrentSectionIndex(scrolledSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSectionIndex]);

  return (
    <>
      {currentSectionIndex !== 0 && (
        <button
          className="fixed top-8 right-8 bg-orange-500 text-white px-2 py-2 rounded-lg animate-bounce hover:bg-orange-700 transition shadow-lg"
          onClick={() => {
            handleClickScroll(currentSectionIndex - 1);
          }}
        >
          <BiUpArrow />
        </button>
      )}
      {currentSectionIndex !== sectionIds.length - 1 && (
        <button
          className="fixed bottom-8 right-8 bg-orange-500 text-white px-2 py-2 rounded-lg animate-bounce hover:bg-orange-700 transition "
          onClick={scrollToNextSection}
        >
          <BiDownArrow />
        </button>
      )}
      <div id="section-1" className="flex flex-col items-center justify-center h-screen text-white lg:px-6">
        <div className="lg:p-2">
          <p className="pl-1 lg:pl-2 text-sm md:text-2xl lg:text-3xl mb-4  font-bold text-orange-500 uppercase text-left">{"<"}Hello, my name is Matheus{"/>"}</p>
          <div className="flex flex-row lg:items-center pb-1">
            <p className="pl-[1px] text-5xl md:text-7xl lg:text-9xl  font-bold text-black uppercase  lg:text-center" style={{ lineHeight: "0.8" }}>
              FULLSTACK
            </p>
            <div className="hidden lg:visible lg:flex space-x-2 lg:space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/matheus55391" target="_blank" rel="noopener noreferrer" className="text-[16px] lg:text-[32px] icon-pulse">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/" target="_blank" rel="noopener noreferrer" className="text-[16px] lg:text-[32px] icon-pulse">
                <FaLinkedin />
              </a>
              <a href="mailto:matheus.felipe55391@gmail.com" className="text-[16px] lg:text-[32px] icon-pulse">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <p className="text-6xl md:text-10xl lg:text-11xl  font-bold text-black uppercase   text-left mb-2" style={{ lineHeight: "0.8" }}>
            <span className="text-orange-500">DEV</span>ELOPER
          </p>

        </div>
        <div className="flex lg:hidden space-x-2 lg:space-x-4 pt-12 ">
          <a href="https://github.com/matheus55391" target="_blank" rel="noopener noreferrer" className="text-[26px] icon-pulse">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[26px] icon-pulse"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:matheus.felipe55391@gmail.com" className="text-[26px] icon-pulse">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <AboutSection
        sectionId="section-2"
      />

      <ProjectsSection
        sectionId="section-3"
      />
    </>
  );
};

export default Home;
