import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Stakeholders from "../components/landing/Stakeholders";

import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stakeholders />
     
      </main>

      <Footer />
    </div>
  );
}

export default Landing;