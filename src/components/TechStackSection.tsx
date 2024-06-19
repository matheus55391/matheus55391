/* eslint-disable react/no-unescaped-entities */
import {
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiDotnet,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const TechStackSection = () => {
  return (
    <section className="container mx-auto my-16 text-center ">
      <h2 className="text-4xl font-bold text-[#42446E]">My Tech Stack</h2>
      <p className="text-xl mt-4 text-gray-500 hover:text-gray-600 transition-all">
        Technologies I've been working with recently
      </p>

      <div className="flex flex-col justify-center mt-8 space-y-4 md:space-y-20  md:p-8 ">
        <div className="flex justify-center md:space-x-14 space-x-4 px-4">
          <SiNestjs size={60} color="#E0234E" />
          <SiNodedotjs size={60} color="#339933" />
          <SiTypescript size={60} color="#3178C6" />
          <SiDotnet size={60} color="#512BD4" />
          <SiPython size={60} color="#3776AB" />
          <SiReact size={60} color="#61DAFB" />
        </div>
        <div className="flex justify-center md:space-x-14 space-x-4 px-4">
          <SiNextdotjs size={60} color="#000000" />
          <SiExpo size={60} color="#000020" />
          <SiDocker size={60} color="#2496ED" />
          <SiPostgresql size={60} color="#336791" />
          <SiMongodb size={60} color="#47A260" />
          <SiGit size={60} color="#F05032" />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
