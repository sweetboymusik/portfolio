import "./AboutWorkCard.css";
import {
  FaBriefcase,
  FaIdCard,
  FaRegIdCard,
  FaCalendar,
} from "react-icons/fa6";

function AboutWorkCard({ position, employer, date, description }) {
  return (
    <div className="about-work-card">
      <ul>
        <li>
          <FaIdCard />
          <p>
            <b>{position}</b>
          </p>
        </li>
        <li>
          <FaBriefcase />
          <p>{employer}</p>
        </li>

        <li>
          <FaCalendar />
          <p>{date}</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutWorkCard;
