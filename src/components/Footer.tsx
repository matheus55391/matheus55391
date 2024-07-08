import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 mt-auto ">
      {/* divider */}
      <div className="border-t border-[#42446E] h-2 w-5/6" />
      <div className="flex flex-row justify-between  w-4/5 px-0 md:px-4 py-4">
        <div className="flex flex-col">
          <h4 className="text-2xl font-black text-[#42446E]">Matheus Felipe</h4>
          <span >Desenvolvedor Full Stack</span>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href="https://github.com/matheus55391"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-gray-800 flex items-center space-x-2"
          >
            <FaGithub size={24} />
            <span className="text-[#42446E]">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-blue-500 flex items-center space-x-2"

          >
            <FaLinkedin size={24} />
            <span className="text-[#42446E]">LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-red-500 flex items-center space-x-2"
          >
            <FaYoutube size={24} />
            <span className="text-[#42446E]">YouTube</span>
          </a>
        </div>
      </div>

      <div>
        <span className="text-sm text-gray-600">Todos os direitos reservados © Matheus Felipe Vieira Santiago 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
