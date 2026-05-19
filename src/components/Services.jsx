import Reveal from "./Reveal";

const services = [
  {
    title: "Desarrollo de software",
    text: "Sistemas a la medida para inventarios, rutas, bodegas, control interno y procesos empresariales.",
  },
  {
    title: "Páginas web premium",
    text: "Sitios modernos, rápidos y visuales para negocios que quieren proyectarse profesionalmente.",
  },
  {
    title: "Automatización",
    text: "Flujos con Power Automate, SharePoint, SQL y herramientas Microsoft para reducir trabajo manual.",
  },
  {
    title: "Dashboards Power BI",
    text: "Reportes visuales para ventas, inventarios, utilidad, márgenes y toma de decisiones.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <p className="section-tag">SERVICIOS</p>
          <h2 className="title">
            Soluciones digitales para hacer crecer tu negocio.
          </h2>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal delay={index * 0.12} key={index}>
              <div className="service-card extreme-card">
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;