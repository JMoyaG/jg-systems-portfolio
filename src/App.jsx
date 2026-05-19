import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundFX from "./components/BackgroundFX";
import ParticleField from "./components/ParticleField";
import Loader from "./components/Loader";
import CursorFX from "./components/CursorFX";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";

import "./App.css";

function App() {
  return (
   <>
  <Loader />
  <CursorFX />
  <ParticleField />
  <BackgroundFX />
  <Navbar />
  <Hero />
  <Marquee />
  <Services />
  <Projects />
  <Gallery />
  <TechStack />
  <Contact />
  <Footer />
</>
  );
}

export default App;