import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <About />
      <CTA />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
