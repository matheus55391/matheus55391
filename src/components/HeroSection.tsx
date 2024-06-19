import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center container mx-auto my-16 ">
      <div className="rounded-full bg-purple-500 w-60 h-60  md:hidden flex items-center justify-center overflow-hidden mt-8 md:mt-0 ">
        <Image
          src="/profile.jpg"
          alt="Matheus Felipe"
          width={228}
          height={228}
          className="rounded-full"
        />
      </div>
      <div className="text-left mt-20 md:mt-0 m-5 md:m-0">
        <h1 className="text-5xl font-bold text-[#42446E]">Hi 👋,</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">My name is</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">Matheus Felipe</h1>
        <h1 className="text-5xl font-bold text-[#42446E]">
          I build things for web
        </h1>
      </div>
      <div className="rounded-full bg-purple-500 w-60 h-60 hidden md:flex items-center justify-center overflow-hidden mt-8 md:mt-0 ">
        <Image
          src="/profile.jpg"
          alt="Matheus Felipe"
          width={228}
          height={228}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
