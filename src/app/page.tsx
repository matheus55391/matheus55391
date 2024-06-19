import Header from '../components/Header';
import Hero from '../components/HeroSection';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main className='min-h-screen  flex flex-col'>
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* <TechStack /> */}
      </main>
      
      <Footer />
    </main>
  );
};

export default Home;
