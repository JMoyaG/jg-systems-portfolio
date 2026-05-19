import { motion } from "framer-motion";

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.85,
        rotateX: 18,
        filter: "blur(18px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;