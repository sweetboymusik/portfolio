function AboutSection({ icon, content }) {
  return (
    <section className="about-section">
      <header className="about-section-header">
        <span className="about-section-icon">{icon}</span>
        <h2>{content.title}</h2>
      </header>
      <p className="about-section-text">{content.text}</p>
    </section>
  );
}

export default AboutSection;
