function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/assets/logo.png" alt="JG Systems" className="logo-icon" />
        <div className="brand-name">JG SYSTEMS</div>
      </div>

      <div className="nav-links">
        <a href="#services">Servicios</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;