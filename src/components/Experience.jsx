import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="experience">
      <div className="experience-sticky">

        <motion.div
          className="experience-left"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">EXPERIENCIA DIGITAL</p>

          <h2>
            Diseñamos experiencias visuales que parecen del futuro.
          </h2>

          <p>
            JG Systems combina software, automatización, diseño web y
            experiencias cinematográficas para crear soluciones modernas y
            memorables.
          </p>
        </motion.div>

        <motion.div
          className="experience-right"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="floating-panel panel-1"></div>
          <div className="floating-panel panel-2"></div>
          <div className="floating-panel panel-3"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;