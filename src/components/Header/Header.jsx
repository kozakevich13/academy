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
      <nav>
        <ul class="menu">
          <li>
            <a href="#">Пункт меню 1</a>
          </li>
          <li>
            <a href="#">Пункт меню 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
