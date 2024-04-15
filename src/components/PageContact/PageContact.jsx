import "./PageContact.css";
import { FaLink, FaMessage, FaInbox } from "react-icons/fa6";
import { useState } from "react";

import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import ContactLinks from "../ContactLinks/ContactLinks";
import ContactInfo from "../ContactInfo/ContactInfo";

function PageContact() {
  let [buttonText, setButtonText] = useState("Send");

  function onSubmit() {
    console.log("onsubmit");
    setButtonText("Sent!");
    setTimeout(() => {
      setButtonText("Send");
    }, 2000);
  }

  return (
    <main className="page-contact">
      <ContactSection
        icon={<FaInbox />}
        title="message"
        content={<ContactForm text={buttonText} onSubmit={onSubmit} />}
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
