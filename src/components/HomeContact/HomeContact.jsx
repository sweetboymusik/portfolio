import "./HomeContact.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaInbox, FaMessage, FaLink } from "react-icons/fa6";

function HomeContact({ onClick }) {
  return (
    <section className="page-section">
      <Link className="home-contact-link" to="/contact" onClick={onClick}>
        <div className="home-contact-title text-medium">
          <h3>/contact</h3>
          <FaArrowAltCircleRight />
        </div>
      </Link>

      <div className="home-section-centered">
        <p className="home-contact-para">
          Send me a message, see my contact info, and find all of my social
          links. All in one convenient place!
        </p>

        <div className="home-icon-container">
          <div className="home-icon-card">
            <FaInbox className="home-icon" />
            <p>Send a message</p>
          </div>

          <div className="home-icon-card">
            <FaMessage className="home-icon" />
            <p>Contact Info</p>
          </div>

          <div className="home-icon-card">
            <FaLink className="home-icon" />
            <p>Links</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
