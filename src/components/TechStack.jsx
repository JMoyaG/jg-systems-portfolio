const techs = [
  "React",
  "Vite",
  "Node.js",
  "SQL Server",
  "SharePoint",
  "Power Automate",
  "Power BI",
  "Azure",
];

function TechStack() {
  return (
    <section className="tech">
      <div className="container">
        <p className="section-tag">TECNOLOGÍAS</p>

        <h2 className="title">
          Herramientas modernas para soluciones reales.
        </h2>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div className="tech-pill" key={index}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;