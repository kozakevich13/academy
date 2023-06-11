import "./Icons.css";
import html5_icon from "../../img/html5-icon.png";
import css_icon from "../../img/css3-icon.png";
import js_icon from "../../img/javascript-icon.png";
import sublime_icon from "../../img/sublime-icon.png";
import vscode_icon from "../../img/vs-code-icon.png";

import html_elips from "../../img/ellipse-html.png";
import css_elips from "../../img/ellipse-css3.png";
import js_elips from "../../img/ellipse-javascript.png";
import sublime_elips from "../../img/ellipse-sublime.png";
import vscode_elips from "../../img/ellipse-vscode.png";

function Icons() {
  return (
    <div className="icons-bar">
      <div className="html-group">
        <img className="html5-icon" src={html5_icon} alt="html5-icon" />
        <img className="html-elips" src={html_elips} alt="html-elips" />
      </div>

      <div className="css-group">
        <img className="css-icon" src={css_icon} alt="css-icon" />
        <img className="css-elips" src={css_elips} alt="css-elips" />
      </div>

      <div className="js-group">
        <img className="js-icon" src={js_icon} alt="js-icon" />
        <img className="js-elips" src={js_elips} alt="js-elips" />
      </div>

      <div className="sublime-group">
        <img className="sublime-icon" src={sublime_icon} alt="sublime-icon" />
        <img
          className="sublime-elips"
          src={sublime_elips}
          alt="sublime-elips"
        />
      </div>

      <div className="vscode-group">
        <img className="vscode-icon" src={vscode_icon} alt="vscode-icon" />
        <img className="vscode-elips" src={vscode_elips} alt="vscode-elips" />
      </div>
    </div>
  );
}

export default Icons;
