import About from "../components/About";
import Footer from "../components/Footer";


function AboutPage() {
  return (
    <>
      <div className=" text-white text-center p-5"style={{backgroundColor:"#36013d"}}>
        <h1>About Us</h1>
        <p>Learn more about our company</p>
      </div>

      <About />

      <Footer />
    </>
  );
}

export default AboutPage;