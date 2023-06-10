import "./Main.css";
import globe from "../../img/globe.svg";

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
    </div>
  );
}

export default Main;
