import "./HomeContact.css";
import { FaInbox, FaMessage, FaLink } from "react-icons/fa6";

function HomeContact() {
  return (
    <section className="home-contact">
      <div className="home-contact-title text-medium">
        <h3>/contact</h3>
      </div>
      <div className="home-contact-top">
        <div className="home-contact-content">
          <p className="home-contact-para">
            Send me a message, see my contact info, and find all of my social
            links. All in one convient place!
          </p>
        </div>
      </div>

      <div className="home-contact-item-container">
        <div className="home-contact-item">
          <FaInbox className="home-contact-icon" />
          <p>Send a message</p>
        </div>

        <div className="home-contact-item">
          <FaMessage className="home-contact-icon" />
          <p>Contact Info</p>
        </div>

        <div className="home-contact-item">
          <FaLink className="home-contact-icon" />
          <p>Links</p>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
