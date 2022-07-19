import { useState } from "react";

function FilterByLocation({ data, Cross, Arrow }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`nav-item ${open ? "active" : null}`}>
      <div className={`nav-btn-wrapper ${open ? "active" : null}`}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          Location
        </button>
        <div>
          <Cross className="cross" />
          <Arrow />
        </div>
      </div>

      {open ? (
        <div className="filter-wrapper">
          <div className="divider"></div>
          <div className="filter-list-wrapper">
            <ul className="filter-list">
              {data.map((item) => {
                return (
                  <div className="filter-item-wrapper" key={item.id}>
                    <li className="filter-item">{item.location}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      {/* <div className="divider"></div>
      <div className="filter-list-wrapper">
        {open ? (
          <ul className="filter-list">
            {data.map((item) => {
              return (
                <div className="filter-item-wrapper">
                  <li className="filter-item">{item.author}</li>
                </div>
              );
            })}
          </ul>
        ) : null}
      </div> */}
    </div>
  );
}

export default FilterByLocation;
