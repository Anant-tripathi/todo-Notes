import "./Header.css";
import NewItem from "../green-plus-11975.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="left-buttons">
        <label htmlFor="Betrayal">Betrayal: </label>
        <select name="Betrayal" id="selOpt" className="btn">
          <option>Hi</option>
          <option>Hi returns</option>
          <option>Hi returns Again!</option>
          <option>Hi : the conclusion</option>
          <option>the rise of hey</option>
        </select>
      </div>
      <div className="right-buttons">
        <div id="cross" className="btn">
          <img id="cross1" src={NewItem} alt="New Item" />
        </div>
        <div className="three">
          <button id="one" className="btn">
            o
          </button>
          <button id="two" className="btn">
            o
          </button>
          <button id="three" className="btn">
            o
          </button>
        </div>
        <div className="Star">
          <button id="S" className="btn">
            s
          </button>
        </div>
      </div>
    </div>
  );
}
