import { useEffect, useRef } from "react";

function CursorFX() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={cursorRef} className="cursor-fx"></div>;
}

export default CursorFX;