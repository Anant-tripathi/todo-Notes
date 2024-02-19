import "./Sidebar.css";
export default function Sidebar({ toDisplay, setToDisplay }) {
  const handleSetDisplay = (val) => {
    setToDisplay(val);
    console.log(toDisplay);
  };
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="photo"></div>
        <span className="name">John Doe</span>
      </div>
      <div className="items">
        <div className="item-title" onClick={() => handleSetDisplay("all")}>
          All
        </div>
        <div className="item-title" onClick={() => handleSetDisplay("todo")}>
          To Do's{" "}
        </div>
        <div className="item-title" onClick={() => handleSetDisplay("notes")}>
          Notes
        </div>
      </div>
      <div className="logout">Logout </div>
    </div>
  );
}
