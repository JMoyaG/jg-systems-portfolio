import { motion } from "framer-motion";

function TextReveal({ text, className = "" }) {
  const letters = text.split("");

  return (
    <h1 className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 180,
            rotateX: -90,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.035,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}

export default TextReveal;