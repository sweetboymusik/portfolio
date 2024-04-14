import "./PageContact.css";
import { FaLink, FaMessage, FaInbox } from "react-icons/fa6";

import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import ContactLinks from "../ContactLinks/ContactLinks";
import ContactInfo from "../ContactInfo/ContactInfo";

function PageContact() {
  return (
    <main className="page-contact">
      <ContactSection
        icon={<FaInbox />}
        title="message"
        content={<ContactForm />}
      />

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <ContactSection
        icon={<FaLink />}
        title="links"
        content={<ContactLinks />}
      />

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <ContactSection
        icon={<FaMessage />}
        title="contact_information"
        content={<ContactInfo />}
      />
    </main>
  );
}

export default PageContact;
