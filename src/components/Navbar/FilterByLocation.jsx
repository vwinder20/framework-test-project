import { useEffect, useState } from "react";
import { ReactComponent as NightCross } from "../../assets/crossBlack.svg";
import { ReactComponent as NightArrow } from "../../assets/arrowBlack.svg";

function FilterByLocation({
  currentData,
  Cross,
  Arrow,
  sendDataToParrent,
  theme,
}) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Location");

  function onClickHandler(e) {
    setLocation(e.target.textContent);
    setOpen(!open);
  }

  useEffect(() => {
    const arrayByLocation = currentData.filter((item) => {
      return item.location.toLowerCase().includes(location.toLowerCase());
    });
    sendDataToParrent(location === "Location" ? currentData : arrayByLocation);
  }, [location]);
  return (
    <div
      className={`nav-item ${open ? "active" : null} ${
        theme ? "night-theme" : null
      }`}
    >
      <div className={`nav-btn-wrapper ${open ? "active" : null}`}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          {location}
        </button>
        <div>
          {location === "Location" ? null : theme ? (
            <NightCross onClick={() => setLocation("Location")} />
          ) : (
            <Cross onClick={() => setLocation("Author")} />
          )}

          {theme ? <NightArrow /> : <Arrow />}
        </div>
      </div>
      <div className="filter-wrapper">
        {open ? (
          <div className="filter-list-wrapper">
            <ul className={`filter-list ${open ? "active" : "un-active"}`}>
              {currentData.map((item) => {
                return (
                  <div
                    className="filter-item-wrapper"
                    key={item.id}
                    onClick={(e) => onClickHandler(e)}
                  >
                    <li className="filter-item">{item.location}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterByLocation;
