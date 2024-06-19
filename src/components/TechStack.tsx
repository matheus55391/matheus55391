import Image from 'next/image';

const TechStack = () => {
  return (
    <section className="container mx-auto my-16 text-center">
      <h2 className="text-4xl font-bold">My Tech Stack</h2>
      <p className="text-xl mt-4">Technologies I've been working with recently</p>
      <div className="flex justify-center space-x-6 mt-8">
        <Image src="/typescript.svg" alt="TypeScript" width={48} height={48} />
        <Image src="/react.svg" alt="React" width={48} height={48} />
        <Image src="/expo.svg" alt="Expo" width={48} height={48} />
        <Image src="/dotnet.svg" alt="ASP.NET" width={48} height={48} />
        <Image src="/github.svg" alt="GitHub" width={48} height={48} />
        <Image src="/git.svg" alt="Git" width={48} height={48} />
        <Image src="/tailwind.svg" alt="Tailwind CSS" width={48} height={48} />
        <Image src="/docker.svg" alt="Docker" width={48} height={48} />
      </div>
    </section>
  );
};

export default TechStack;
