import {
  FaGithub,
  FaFigma,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLink,
} from "react-icons/fa6";

import ContactLink from "../ContactLink/ContactLink";

function ContactLinks() {
  return (
    <div className="contact-links">
      <ContactLink
        icon={<FaGithub />}
        text="/sweetboymusik"
        url="https://github.com/sweetboymusik"
      />
      <ContactLink
        icon={<FaLinkedin />}
        text="/elliott-butt"
        url="https://www.linkedin.com/in/elliott-butt/"
      />
      <ContactLink
        icon={<FaFigma />}
        text="@elliottbutt"
        url="https://www.figma.com/@elliottbutt"
      />
      <ContactLink
        icon={<FaXTwitter />}
        text="@elliott-young"
        url="https://twitter.com/elliott-young"
      />
      <ContactLink
        icon={<FaInstagram />}
        text="@sweetboymusik"
        url="https://www.instagram.com/sweetboymusik/"
      />
      <ContactLink
        icon={<FaFacebook />}
        text="/elliottsmusicstudio"
        url="https://www.facebook.com/elliottsmusicstudio/"
      />
    </div>
  );
}

export default ContactLinks;
