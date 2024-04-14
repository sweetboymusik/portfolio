import "./HomeAbout.css";
import { FaAddressCard, FaLaptopCode, FaMusic, FaCat } from "react-icons/fa6";

function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-about-title text-medium">
        <h3>/about</h3>
      </div>
      <div className="home-about-top">
        <div className="home-about-content">
          <p className="home-about-para">
            Learn about my background, education, read my resume, and look at
            cute photos of my cats!
          </p>
        </div>
      </div>
      <div className="home-about-item-container">
        <div className="home-about-item">
          <FaLaptopCode className="home-about-icon" />
          <p>
            Software Development
            <br />
            Keyin College
          </p>
        </div>

        <div className="home-about-item">
          <FaMusic className="home-about-icon" />
          <p>
            Bachelor of Music <br />
            Memorial University
          </p>
        </div>

        <div className="home-about-item">
          <FaCat className="home-about-icon" />
          <p>
            Sherlock, Watson
            <br />& Puss
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
