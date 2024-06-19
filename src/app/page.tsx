import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TechStackSection from '../components/TechStackSection';

const Home = () => {
  return (
    <main className='min-h-screen  flex flex-col'>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TechStackSection />
      </main>
      
      <Footer />
    </main>
  );
};

export default Home;
