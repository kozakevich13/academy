import "./Header.css";
import logo_img from "../../img/logo.svg";
import academy_img from "../../img/ACADEMY.svg";
import powercode_img from "../../img/POWERCODE.svg";

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
        <div className="day">
          <p>28 декабря</p>
        </div>
        <div className="hours">
          <p>3,5 часа</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
