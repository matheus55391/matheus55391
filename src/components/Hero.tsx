import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex justify-between items-center container mx-auto my-16">
      <div className="text-left">
        <h1 className="text-5xl font-bold">Hi 👋, my name is Matheus Felipe</h1>
        <p className="mt-4 text-xl">I am a fullstack developer</p>
      </div>
      <div className="rounded-full bg-purple-500 w-48 h-48 flex items-center justify-center overflow-hidden">
        <Image src="/profile.jpg" alt="Matheus Felipe" width={192} height={192} />
      </div>
    </section>
  );
};

export default Hero;
