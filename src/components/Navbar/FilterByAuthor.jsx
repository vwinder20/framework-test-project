import { useEffect, useState } from "react";
import { ReactComponent as NightCross } from "../../assets/crossBlack.svg";
import { ReactComponent as NightArrow } from "../../assets/arrowBlack.svg";

function FilterByAuthor({
  currentData,
  Cross,
  Arrow,
  sendDataToParrent,
  theme,
}) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("Author");

  function onClickHandler(e) {
    setAuthor(e.target.textContent);
    setOpen(!open);
  }

  useEffect(() => {
    const arrayByAuthor = currentData.filter((item) => {
      return item.author.toLowerCase().includes(author.toLowerCase());
    });
    sendDataToParrent(author === "Author" ? currentData : arrayByAuthor);
  }, [author]);

  return (
    <div
      className={`nav-item ${open ? "active" : null} ${
        theme ? "night-theme" : null
      }`}
    >
      <div className={`nav-btn-wrapper ${open ? "active" : null} `}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          {author}
        </button>
        <div>
          {author === "Author" ? null : theme ? (
            <NightCross onClick={() => setAuthor("Author")} />
          ) : (
            <Cross onClick={() => setAuthor("Author")} />
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
                    <li className="filter-item">{item.author}</li>
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

export default FilterByAuthor;
