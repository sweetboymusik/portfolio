import "./AboutEduCard.css";
import { FaSchool, FaCalendar, FaBook } from "react-icons/fa6";

function AboutEduCard({ program, school, date }) {
  return (
    <div className="about-edu-card">
      <ul>
        <li>
          <FaBook />
          <p>
            <b>{program}</b>
          </p>
        </li>
        <li>
          <FaSchool />
          <p>{school}</p>
        </li>

        <li>
          <FaCalendar />
          <p>{date}</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutEduCard;
