import { useEffect, useState, useRef } from "react";
import { ReactComponent as NightCross } from "../../assets/crossBlack.svg";
import { ReactComponent as NightArrow } from "../../assets/arrowBlack.svg";

function FilterByAuthor({
  currentData,
  Cross,
  Arrow,
  sendDataToParrent,
  theme,
  navItemWidth,
}) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("Author");
  const refWidth = useRef(0);

  // Handle click to drop-down list
  function onClickHandler(e) {
    setAuthor(e.target.textContent);
    setOpen(!open);
  }

  // Filtering data by author
  useEffect(() => {
    const arrayByAuthor = currentData.filter((item) => {
      return item.author.toLowerCase().includes(author.toLowerCase());
    });
    sendDataToParrent(author === "Author" ? currentData : arrayByAuthor);
  }, [author]);

  return (
    <div
      ref={refWidth}
      className={`nav-item ${open ? "active" : ""} ${
        theme ? "night-theme" : ""
      }`}
    >
      <div
        className={`nav-btn-wrapper ${open ? "active" : ""} `}
        style={{ width: `${navItemWidth}px` }}
      >
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          <p>{author}</p>
        </button>
        <div>
          {author === "Author" ? (
            ""
          ) : theme ? (
            <NightCross onClick={() => setAuthor("Author")} />
          ) : (
            <Cross onClick={() => setAuthor("Author")} />
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
                      <p>{item.author}</p>
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

export default FilterByAuthor;
