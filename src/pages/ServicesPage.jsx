

import { color } from "framer-motion";
import Footer from "../components/Footer";
import Services from "../components/Services";

function ServicesPage() {
  return (
    <>
      {/* <div className="bg-primary text-white text-center ">
        <h1 style={{color:"purple"}}>Our Services</h1>
        <p>We provide innovative IT solutions</p>
      // </div> */}

      <Services />

      <Footer />
    </>
  );
}

export default ServicesPage;