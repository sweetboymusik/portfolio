function ContactLink({ icon, text, url }) {
  return (
    <a href={url} target="_blank" className="contact-link">
      <span className="contact-link-icon">{icon}</span>
      <span className="contact-link-text">{text}</span>
    </a>
  );
}

export default ContactLink;
