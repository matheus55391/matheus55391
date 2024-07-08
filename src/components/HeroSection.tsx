import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-between items-center container mx-auto 2xl:px-48 xl:px-24 mb-16 mt-0 md:my-16 ">
      <div>
        <Image
          src="/profile.jpg"
          alt="Matheus Felipe"
          width={160}
          height={160}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col my-2 text-center space-y-3">
        <h1 className="text-4xl font-bold text-[#42446E]">Desenvolvedor Full Stack</h1>
        <span className="text-lg text-gray-500 hover:text-gray-600 transition-all">Estou sempre em busca de novos desafios e oportunidades para aplicar minha experiência e habilidades técnicas.</span>
      </div>
    </section>
  );
};

export default HeroSection;
