import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
const projects = [
  {
    title: "Sistema Alisto",
    category: "Logística • SharePoint • SQL",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
  },
  {
  title: "Hotwash",
  category: "Lavacar premium",
  image:
    "https://images.unsplash.com/photo-1633014041037-f5446fb4ce99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
  {
    title: "Dashboard Power BI",
    category: "Analítica empresarial",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

function Projects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isMobile = window.innerWidth <= 768;

const x = useTransform(
  scrollYProgress,
  [0, 1],
  isMobile ? ["0%", "0%"] : ["0%", "-45%"]
);

  return (
    <section id="projects" className="projects horizontal-section" ref={targetRef}>
      <div className="container">
        <p className="section-tag">PROYECTOS</p>
        <h2 className="title">Experiencias digitales modernas y funcionales.</h2>
      </div>

      <div className="horizontal-sticky">
        <motion.div className="horizontal-track" style={{ x }}>
          {projects.map((project, index) => (
            <TiltCard
  className="project-card horizontal-card tilt-card"
  key={index}
  style={{ backgroundImage: `url(${project.image})` }}
>
  <div className="project-overlay">
    <p>{project.category}</p>
    <h3>{project.title}</h3>
  </div>
</TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;