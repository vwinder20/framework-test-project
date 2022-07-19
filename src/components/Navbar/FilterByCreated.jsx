import { useState } from "react";

function FilterByCreated({ currentData, Cross, Arrow, sendDataToParrent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`nav-item ${open ? "active" : null}`}>
      <div className={`nav-btn-wrapper ${open ? "active" : null}`}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          Created
        </button>
        <div>
          <Arrow />
        </div>
      </div>

      {open ? (
        <div className="filter-wrapper">
          <div className="filter-list-wrapper">
            <div className="filter-list inputs-wrapper">
              <div className="input-fields">
                <input type="text" placeholder="from" className="input-field" />
                <div className="input-divider"></div>
                <input
                  type="text"
                  placeholder="before"
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FilterByCreated;
