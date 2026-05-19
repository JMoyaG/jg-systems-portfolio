function Marquee() {
  const items = [
    "SOFTWARE",
    "AUTOMATIZACIÓN",
    "WEB PREMIUM",
    "POWER BI",
    "SQL SERVER",
    "SHAREPOINT",
    "SISTEMAS",
    "JG SYSTEMS",
  ];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;