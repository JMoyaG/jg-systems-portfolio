function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box">
          <p className="section-tag">CONTACTO</p>

          <h2>
            ¿Listo para modernizar tu negocio?
          </h2>

          <p>
            Creamos soluciones digitales modernas para empresas que quieren
            crecer, automatizar procesos y verse profesionales.
          </p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/50689894743"
              target="_blank"
              className="contact-btn primary-contact"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/jg_systems_/"
              target="_blank"
              className="contact-btn"
            >
              Instagram
            </a>

            <a
              href="mailto:jg0systems0@gmail.com"
              className="contact-btn"
            >
              Correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;