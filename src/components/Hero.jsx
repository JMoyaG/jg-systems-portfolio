import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!heroRef.current) return;

      const x = (window.innerWidth / 2 - e.clientX) / 60;
      const y = (window.innerHeight / 2 - e.clientY) / 60;

      heroRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid"></div>

      <div className="floating-word one">AUTOMATION</div>
      <div className="floating-word two">SYSTEMS</div>
      <div className="floating-word three">DIGITAL</div>

      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>

      <motion.div
        ref={heroRef}
        className="hero-content"
        initial={{ opacity: 0, y: 90, scale: 0.92, filter: "blur(18px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-mini">SOFTWARE • AUTOMATIZACIÓN • WEB</p>

        <TextReveal
  className="hero-title"
  text="Creamos sistemas que modernizan negocios."
/>

        <p>
          Desarrollo de software, páginas web, automatizaciones, dashboards y
          soluciones digitales premium.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>

          <a
            href="https://instagram.com/jg_systems_"
            target="_blank"
            className="btn-secondary"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;