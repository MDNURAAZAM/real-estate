import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <About />
    </>
  );
}

export default App;
