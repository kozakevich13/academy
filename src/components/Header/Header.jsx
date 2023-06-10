import "./Header.css";
import logo from "../../img/Shape.png";

function Header() {
  return (
    <header>
      <div class="logo">
        <img src={logo} alt="Лого" />
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
