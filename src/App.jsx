import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <About />
      <CTA />
    </>
  );
}

export default App;
