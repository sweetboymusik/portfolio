import { FaE, FaEnvelope } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-item-container">
        <span className="contact-info-item">
          <FaEnvelope />
          ellbutt@gmail.com
        </span>
        <span className="contact-info-item">
          <FaEnvelope />
          elliott.butt@keyin.com
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
