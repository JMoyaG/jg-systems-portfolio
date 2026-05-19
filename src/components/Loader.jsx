import { useEffect, useState } from "react";

function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hide ? "loader-hide" : ""}`}>
      <div className="loader-logo-wrap">
        <img src="/assets/logo.png" alt="JG Systems" className="loader-logo" />
        <h1>JG SYSTEMS</h1>
        <p>INITIALIZING DIGITAL EXPERIENCE</p>
      </div>
      <div className="loader-line"></div>
    </div>
  );
}

export default Loader;