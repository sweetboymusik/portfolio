import "./HomeAbout.css";
import { Link } from "react-router-dom";
import { FaAddressCard, FaLaptopCode, FaMusic, FaCat } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";

function HomeAbout({ onClick }) {
  return (
    <section className="page-section">
      <Link className="home-about-link" to="/about" onClick={onClick}>
        <div className="home-about-title text-medium">
          <h3>/about</h3>
          <FaArrowAltCircleRight />
        </div>
      </Link>

      <div className="home-section-centered">
        <p className="home-about-para">
          Learn about my background, education, read my resume, and look at cute
          photos of my cats!
        </p>

        <div className="home-icon-container">
          <div className="home-icon-card">
            <FaLaptopCode className="home-icon" />
            <p>
              Software Development
              <br />
              Keyin College
            </p>
          </div>

          <div className="home-icon-card">
            <FaMusic className="home-icon" />
            <p>
              Bachelor of Music <br />
              Memorial University
            </p>
          </div>

          <div className="home-icon-card">
            <FaCat className="home-icon" />
            <p>
              Sherlock, Watson
              <br />& Puss
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
