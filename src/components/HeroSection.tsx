import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center container mx-auto 2xl:px-48 xl:px-24  my-16 md:my-56 ">
      <div className="rounded-full bg-purple-500 min-w-60 h-60  md:hidden flex items-center justify-center overflow-hidden mt-8 md:mt-0 ">
        <Image
          src="/profile.jpg"
          alt="Matheus Felipe"
          width={228}
          height={228}
          className="rounded-full"
        />
      </div>
      <div className="text-left   p-2 mt-20 md:mt-0 md:m-0">
        <h1 className="text-5xl font-bold text-[#42446E]">Hi 👋,</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">My name is</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">Matheus Felipe</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">
          I build things for web
        </h1>
      </div>
      <div className="rounded-full bg-purple-500 min-w-80 max-w-80 h-80 hidden md:flex items-center justify-center overflow-hidden mt-8 md:mt-0 ">
        <Image
          src="/profile.jpg"
          alt="Matheus Felipe"
          width={308}
          height={308}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
