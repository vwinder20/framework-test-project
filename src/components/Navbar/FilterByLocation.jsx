import { useEffect, useState, useRef } from "react";
import { ReactComponent as NightCross } from "../../assets/crossBlack.svg";
import { ReactComponent as NightArrow } from "../../assets/arrowBlack.svg";

function FilterByLocation({
  currentData,
  Cross,
  Arrow,
  sendDataToParrent,
  theme,
  navItemWidth,
}) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Location");
  // const [currentWidth, setCurrentWidth] = useState(0);
  const refWidth = useRef(0);

  function onClickHandler(e) {
    setLocation(e.target.textContent);
    setOpen(!open);
  }

  // function getWidthSize() {
  //   const newWidth = refWidth.current.getBoundingClientRect().width;
  //   setCurrentWidth(newWidth);
  //   console.log(currentWidth);
  // }
  useEffect(() => {
    const arrayByAuthor = currentData.filter((item) => {
      return item.location.toLowerCase().includes(location.toLowerCase());
    });
    sendDataToParrent(location === "Location" ? currentData : arrayByAuthor);
    // window.addEventListener("resize", getWidthSize);
  }, [location]);

  return (
    <div
      ref={refWidth}
      className={`nav-item ${open ? "active" : ""} ${
        theme ? "night-theme" : ""
      }`}
    >
      <div className={`nav-btn-wrapper ${open ? "active" : ""} `}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          {location}
        </button>
        <div>
          {location === "Location" ? (
            ""
          ) : theme ? (
            <NightCross onClick={() => setLocation("Location")} />
          ) : (
            <Cross onClick={() => setLocation("Location")} />
          )}

          {theme ? <NightArrow /> : <Arrow />}
        </div>
      </div>

      {open ? (
        <div
          className="filter-wrapper"
          style={{
            width: `${
              navItemWidth
                ? `${navItemWidth}px`
                : `${refWidth.current.getBoundingClientRect().width.toFixed(2)}`
            }`,
          }}
        >
          <div className="filter-list-wrapper">
            <ul className={`filter-list ${open ? "active" : "un-active"}`}>
              {currentData.map((item) => {
                return (
                  <div
                    className="filter-item-wrapper"
                    key={item.id}
                    onClick={(e) => onClickHandler(e)}
                  >
                    <li className="filter-item">
                      <p>{item.location}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default FilterByLocation;
