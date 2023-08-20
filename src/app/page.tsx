'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";


const Home: React.FC = () => {
  const sectionIds = ["section-1", "section-2", "section-3"]; // IDs of your sections
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
  }, [currentSectionIndex, sectionIds]);

  return (
    <>
      {currentSectionIndex !== 0 && (
        <button
          className="fixed top-8 right-8 bg-orange-500 text-white px-2 py-2 rounded-lg animate-bounce hover:bg-orange-700 transition "
          onClick={() => {
            handleClickScroll(currentSectionIndex - 1);
          }}
        >
          <BiUpArrow />
        </button>
      )}
      {currentSectionIndex !== sectionIds.length - 1 && (
        <button
          className="fixed bottom-8 right-8 bg-orange-500 text-white px-2 py-2 rounded-lg animate-bounce hover:bg-orange-700 transition"
          onClick={scrollToNextSection}
        >
          <BiDownArrow />
        </button>
      )}
      <div id="section-1" className="flex flex-col items-center justify-center h-screen  text-white lg:px-6">
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

      <div id="section-2" className="flex flex-col items-center lg:flex-row p-6 lg:p-0 lg:py-16 pb-20 bg-black h-screen text-white pt-16 lg:px-6 lg:space-x-20 space-y-10 justify-center">
        <div className="pt-4" >
          <div className="overflow-hidden bg-orange-500 w-96 h-96 lg:w-72 lg:h-72  rounded-full">
            <Image
              src="/matheus.jpeg"
              width={600}
              height={600}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col text-white text-center lg:text-left  ">
          <h1 className="text-xl lg:text-4xl font-bold">Matheus Felipe Vieira Santiago</h1>
          <span className="mt-10 lg:mt-5 text-justify text-sm lg:text-base ">
            As a fervent technology enthusiast with an insatiable drive for continuous development, I bring with me a strong background in Analysis and Systems Development.
          </span>
          <span className="mt-1 text-justify text-sm lg:text-base ">

            In my current journey, I assume the role of a full-stack developer, immersed in crafting applications for both web and mobile platforms. The guiding tools that steer my endeavors encompass Next.js, Nest.js, React Native, Python, and .NET Core.
          </span>

          <span className="mt-1 text-justify text-sm lg:text-base ">

            My experience is deeply rooted in the agile Scrum methodology, enabling me to ensure efficiency and excellence across all my projects. My scope of work spans from crafting dynamic interfaces to constructing robust APIs, covering the realms of both REST and GraphQL, in addition to proficient database management.
          </span>
        </div>
      </div>
      <div id="section-3" className="flex flex-col items-center min-h-screen bg-white lg:px-6 pt-8">
        <h1 className="font-bold text-3xl">{'<'}PROJECTS{'/>'}</h1>
        <span>Under construction</span> {/* Texto em inglês */}
      </div>
    </>
  );
};

export default Home;
