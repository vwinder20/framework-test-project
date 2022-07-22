import { useEffect, useState } from "react";
import { ReactComponent as NightArrow } from "../../assets/arrowBlack.svg";

function FilterByCreated({ currentData, Arrow, sendDataToParrent, theme }) {
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [before, setBefore] = useState("");

  useEffect(() => {
    const arrayByCreated = currentData.filter((item) => {
      return item.created >= from && item.created <= before;
    });

    sendDataToParrent(!arrayByCreated.length ? currentData : arrayByCreated);
    console.log(arrayByCreated);
  }, [from, before]);
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
          Created
        </button>
        <div>{theme ? <NightArrow /> : <Arrow />}</div>
      </div>
      <div className="filter-wrapper">
        {open ? (
          <div className="filter-list-wrapper">
            <div
              className={`filter-list inputs-wrapper ${
                open ? "active-created" : ""
              }`}
            >
              <div className="input-fields">
                <input
                  type="text"
                  placeholder="from"
                  className="input-field"
                  onChange={(e) => setFrom(e.target.value)}
                />
                <div className="input-divider"></div>
                <input
                  type="text"
                  placeholder="before"
                  className="input-field"
                  onChange={(e) => setBefore(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default FilterByCreated;
