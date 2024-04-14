import "./PageContact.css";
import { FaLink, FaMessage, FaInbox } from "react-icons/fa6";

import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import ContactLinks from "../ContactLinks/ContactLinks";
import ContactInfo from "../ContactInfo/ContactInfo";

function PageContact() {
  return (
    <main className="page-contact">
      <div className="contact-content">
        <ContactSection
          icon={<FaInbox />}
          title="message"
          content={<ContactForm />}
        />
        <ContactSection
          icon={<FaLink />}
          title="links"
          content={<ContactLinks />}
        />
        <ContactSection
          icon={<FaMessage />}
          title="contact_information"
          content={<ContactInfo />}
        />
      </div>
    </main>
  );
}

export default PageContact;
