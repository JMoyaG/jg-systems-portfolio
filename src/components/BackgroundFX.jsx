import { useEffect, useRef } from "react";

function BackgroundFX() {
  const spotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = `${e.clientX}px`;
      spotRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={spotRef} className="mouse-spotlight"></div>
      <div className="noise-layer"></div>
      <div className="scanlines"></div>
      <div className="cyber-lines"></div>
    </>
  );
}

export default BackgroundFX;