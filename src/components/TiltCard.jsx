import { useRef } from "react";

function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 22;
    const rotateX = ((y / rect.height) - 0.5) * -22;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-22px)
      scale(1.04)
    `;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default TiltCard;