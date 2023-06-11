import "./Header.css";
import logo_img from "../../img/logo.svg";
import academy_img from "../../img/ACADEMY.png";
import powercode_img from "../../img/POWERCODE.svg";
import time_icon from "../../img/gg_time.svg";
import calendat_icon from "../../img/calendar_today.svg";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo-img" src={logo_img} alt="logo" />
        <div className="company-name">
          <img className="powercode-img" src={powercode_img} alt="POWERCODE" />
          <img className="academy-img" src={academy_img} alt="ACADEMY" />
        </div>
      </div>
      <div className="event-time">
        <div className="event_day">
          <div className="data-conteiner-day">
            <img
              className="event-icon"
              src={calendat_icon}
              alt="calendar_icon"
            ></img>
            <p>28 декабря</p>
          </div>
        </div>
        <div className="event_hours">
          <div className="data-conteiner-hour">
            <img className="event-icon" src={time_icon} alt="time_icon"></img>
            <p>3,5 часа</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
