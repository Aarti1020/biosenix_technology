import About from "../components/About";
import Footer from "../components/Footer";
// import HeroCarousel from "../components/HeroCarousel";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";


function Home() {
  return (
    <>
    <HeroSection />
      {/* <HeroCarousel /> */}

      <section className="mt-5">
        <Services />
      </section>

      <section className="mt-5">
        <About />
      </section>

      <Footer />
    </>
  );
}

export default Home;