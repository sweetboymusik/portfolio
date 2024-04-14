function ContactSection({ icon, title, content }) {
  return (
    <section className="contact-section">
      <header className="contact-section-header">
        <h1>/{title}</h1>
      </header>
      <div className="contact-section-content">{content}</div>
    </section>
  );
}

export default ContactSection;
