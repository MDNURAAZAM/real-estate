import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";

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
    </>
  );
}

export default App;
