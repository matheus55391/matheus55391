import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section className="container mx-auto my-16 text-center">
      <h2 className="text-4xl font-bold text-[#42446E]">Projetos</h2>
      <p className="text-xl mt-4 text-gray-500 hover:text-gray-600 transition-all">
        Esta seção está em desenvolvimento. Fique ligado para atualizações!
      </p>
      <div className="flex justify-center mt-8">
        <Image
          src="/penguin.png"
          alt="VirtualBox Penguin holding tools"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
