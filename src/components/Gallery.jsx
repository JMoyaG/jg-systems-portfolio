const galleryItems = [
  {
    title: "Sistemas empresariales",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Automatización de procesos",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Diseño web premium",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Soluciones para negocios",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <p className="section-tag">GALERÍA</p>

        <h2 className="title">
          Tecnología, diseño y automatización en una sola experiencia.
        </h2>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className={`gallery-card card-${index + 1}`} key={index}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-info">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;