import Button from "../Button/Button";
import { FaPaperPlane } from "react-icons/fa6";

function ContactForm() {
  return (
    <form action="submit" className="contact-form">
      <div className="contact-form-top">
        <div className="contact-form-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="contact-form-item">
          <label htmlFor="name">Contact</label>
          <input
            type="text"
            placeholder="Contact"
            id="contact"
            name="contact"
            required
          />
        </div>
      </div>

      <div className="contact-form-item">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="contact-form-message"
        ></textarea>
      </div>
      <Button text={"Send"} size={{ width: "100%" }} icon={<FaPaperPlane />} />
    </form>
  );
}

export default ContactForm;
