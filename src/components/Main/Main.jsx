import "./Main.css";
import globe from "../../img/globe.svg";
import profile_img from "../../img/profile-img.png";

function Main() {
  return (
    <div className="main-content">
      <div className="vebinar">
        <img src={globe} alt="globe"></img>
        <p>Вебинар</p>
      </div>
      <div className="main-title">
        <p>front-end</p>
      </div>
      <div className="first-decription">
        <div className="container-zero">
          <h2>с нуля</h2>
        </div>
        <p>легкий старт в IT профессии</p>
      </div>
      <div className="secont-decription">
        Узнайте какими{" "}
        <b>навыками должен обладать фронтенд разработчик в 2022 году</b> и как
        начать карьеру в востребованной профессии <b>с зарплатой</b>{" "}
        <mark>от 1 000$</mark>
      </div>
      <div className="info-person">
        <img src={profile_img} alt="profile-img" />
        <div>
          <h2>
            Кирилл <b>КАСАТОНОВ</b>
          </h2>
          <p>
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
            другими крупными корпорациями
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
