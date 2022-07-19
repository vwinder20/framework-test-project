import { useState } from "react";

function FilterByCreated({ data, Cross, Arrow }) {
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
          <Cross />
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
                    <li key={item.id} className="filter-item">
                      {item.created}
                    </li>
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
                  <li className="filter-item">{item.Created}</li>
                </div>
              );
            })}
          </ul>
        ) : null}
      </div> */}
    </div>
  );
}

export default FilterByCreated;
