import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
      </main>
      <Footer />
    </>
  );
};

export default Home;
